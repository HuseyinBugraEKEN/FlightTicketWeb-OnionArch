using Core.Entities;
using Core.Interfaces;
using Core.DTOs;

namespace Application.Services
{
    public class FlightFilterService
    {
        private readonly IFlightQueryRepository _flightQueryRepository;

        public FlightFilterService(IFlightQueryRepository flightQueryRepository)
        {
            _flightQueryRepository = flightQueryRepository;
        }

        public IEnumerable<Flight> FilterFlights(FlightFilterModel filter)
        {
            var flights = _flightQueryRepository.GetAllFlightsAsync().Result.AsQueryable();

            if (!string.IsNullOrEmpty(filter.Departure))
            {
                flights = flights.Where(f => f.Departure == filter.Departure);
            }

            if (!string.IsNullOrEmpty(filter.Arrival))
            {
                flights = flights.Where(f => f.Arrival == filter.Arrival);
            }

            if (filter.Date.HasValue)
            {
                flights = flights.Where(f => f.Date.Date == filter.Date.Value.Date);
            }

            if (filter.Passengers > 0)
            {
                flights = flights.Where(f => f.Capacity >= filter.Passengers);
            }

            return flights.ToList();
        }
    }
}
