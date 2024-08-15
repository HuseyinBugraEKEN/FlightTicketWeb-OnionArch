using Application.Services;
using Core.Entities;
using Core.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FlightsController : ControllerBase
    {
        private readonly FlightQueryService _flightQueryService;
        private readonly FlightCommandService _flightCommandService;
        private readonly FlightFilterService _flightFilterService;
        private readonly UserFlightQueryService _userFlightQueryService;
        private readonly UserFlightCommandService _userFlightCommandService;

        public FlightsController(
            FlightQueryService flightQueryService,
            FlightCommandService flightCommandService,
            FlightFilterService flightFilterService,
            UserFlightQueryService userFlightQueryService,
            UserFlightCommandService userFlightCommandService)
        {
            _flightQueryService = flightQueryService;
            _flightCommandService = flightCommandService;
            _flightFilterService = flightFilterService;
            _userFlightQueryService = userFlightQueryService;
            _userFlightCommandService = userFlightCommandService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Flight>>> GetFlights()
        {
            var flights = await _flightQueryService.GetAllFlightsAsync();
            return Ok(flights);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Flight>> GetFlightById(int id)
        {
            var flight = await _flightQueryService.GetFlightByIdAsync(id);
            if (flight == null)
            {
                return NotFound();
            }
            return Ok(flight);
        }

        [HttpPost]
        public async Task<ActionResult<Flight>> CreateFlight([FromBody] FlightCreateDto flightDto)
        {
            var flight = new Flight
            {
                Departure = flightDto.Departure,
                Arrival = flightDto.Arrival,
                Date = flightDto.Date,
                Time = TimeSpan.Parse(flightDto.Time),
                Capacity = flightDto.Capacity,
                Price = flightDto.Price
            };

            await _flightCommandService.AddFlightAsync(flight);
            return CreatedAtAction(nameof(GetFlightById), new { id = flight.Id }, flight);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateFlight(int id, [FromBody] FlightCreateDto flightDto)
        {
            var flight = await _flightQueryService.GetFlightByIdAsync(id);
            if (flight == null)
            {
                return NotFound();
            }

            flight.Departure = flightDto.Departure;
            flight.Arrival = flightDto.Arrival;
            flight.Date = flightDto.Date;
            flight.Time = TimeSpan.Parse(flightDto.Time);
            flight.Capacity = flightDto.Capacity;
            flight.Price = flightDto.Price;

            await _flightCommandService.UpdateFlightAsync(flight);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFlight(int id)
        {
            var flight = await _flightQueryService.GetFlightByIdAsync(id);
            if (flight == null)
            {
                return NotFound();
            }

            await _flightCommandService.DeleteFlightAsync(id);
            return NoContent();
        }

        [HttpPost("buy")]
        public async Task<IActionResult> BuyFlight([FromBody] BuyFlightDto buyFlightDto)
        {
            var flight = await _flightQueryService.GetFlightByIdAsync(buyFlightDto.FlightId);
            if (flight == null || flight.Capacity <= 0)
            {
                return BadRequest("Flight not available.");
            }

            var userFlight = new UserFlight
            {
                UserId = buyFlightDto.UserId,
                FlightId = buyFlightDto.FlightId
            };

            flight.Capacity--;
            await _userFlightCommandService.AddUserFlightAsync(userFlight);
            await _flightCommandService.UpdateFlightAsync(flight);

            return Ok();
        }

        [HttpPost("cancel")]
        public async Task<IActionResult> CancelFlight([FromBody] BuyFlightDto buyFlightDto)
        {
            var userFlights = await _userFlightQueryService.GetUserFlightsByUserIdAsync(buyFlightDto.UserId);
            var userFlight = userFlights.FirstOrDefault(uf => uf.FlightId == buyFlightDto.FlightId);
            if (userFlight == null)
            {
                return NotFound();
            }

            var flight = await _flightQueryService.GetFlightByIdAsync(buyFlightDto.FlightId);
            if (flight != null)
            {
                flight.Capacity++;
                await _flightCommandService.UpdateFlightAsync(flight);
            }

            await _userFlightCommandService.DeleteUserFlightAsync(userFlight.Id);
            return Ok();
        }

        [HttpGet("user/{userId}")]
        public async Task<ActionResult<IEnumerable<UserFlightDto>>> GetUserFlights(int userId)
        {
            var userFlights = await _userFlightQueryService.GetUserFlightsByUserIdAsync(userId);
            var userFlightDtos = userFlights.Select(uf => new UserFlightDto
            {
                FlightId = uf.FlightId,
                Departure = uf.Flight.Departure,
                Arrival = uf.Flight.Arrival,
                Date = uf.Flight.Date,
                Time = uf.Flight.Time,
                Capacity = uf.Flight.Capacity,
                Price = uf.Flight.Price
            }).ToList();

            return Ok(userFlightDtos);
        }

        [HttpPost("filter")]
        public IActionResult FilterFlights([FromBody] FlightFilterModel filter)
        {
            var flights = _flightFilterService.FilterFlights(filter);
            return Ok(flights);
        }

        [HttpGet("{id}/users")]
        public async Task<ActionResult<IEnumerable<string>>> GetUsersByFlightId(int id)
        {
            var userFlights = await _userFlightQueryService.GetUserFlightsByFlightIdAsync(id);
            var userEmails = userFlights.Select(uf => uf.User.Email).ToList();
            
            return Ok(userEmails);
        }
    }
}
