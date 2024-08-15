using Core.Entities;
using Core.Interfaces;

namespace Application.Services
{
    public class FlightCommandService
    {
        private readonly IFlightCommandRepository _flightCommandRepository;

        public FlightCommandService(IFlightCommandRepository flightCommandRepository)
        {
            _flightCommandRepository = flightCommandRepository;
        }

        public async Task AddFlightAsync(Flight flight)
        {
            await _flightCommandRepository.AddFlightAsync(flight);
        }

        public async Task UpdateFlightAsync(Flight flight)
        {
            await _flightCommandRepository.UpdateFlightAsync(flight);
        }

        public async Task DeleteFlightAsync(int id)
        {
            await _flightCommandRepository.DeleteFlightAsync(id);
        }
    }
}
