using Core.Entities;
namespace Core.Interfaces
{
    public interface IFlightCommandRepository
    {
        Task AddFlightAsync(Flight flight);
        Task UpdateFlightAsync(Flight flight);
        Task DeleteFlightAsync(int id);
    }
}
