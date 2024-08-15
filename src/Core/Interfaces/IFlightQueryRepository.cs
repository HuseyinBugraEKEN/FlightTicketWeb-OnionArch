using Core.Entities;
namespace Core.Interfaces
{
    public interface IFlightQueryRepository
    {
        Task<IEnumerable<Flight>> GetAllFlightsAsync();
        Task<Flight> GetFlightByIdAsync(int id);
    }
}
