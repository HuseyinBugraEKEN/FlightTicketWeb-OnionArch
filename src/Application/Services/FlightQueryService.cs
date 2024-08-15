using Core.Entities;
using Core.Interfaces;
namespace Application.Services
{
    public class FlightQueryService
    {
        private readonly IFlightQueryRepository _flightQueryRepository;

        public FlightQueryService(IFlightQueryRepository flightQueryRepository)
        {
            _flightQueryRepository = flightQueryRepository;
        }

        public async Task<IEnumerable<Flight>> GetAllFlightsAsync()
        {
            return await _flightQueryRepository.GetAllFlightsAsync();
        }

        public async Task<Flight> GetFlightByIdAsync(int id)
        {
            return await _flightQueryRepository.GetFlightByIdAsync(id);
        }
    }
}
