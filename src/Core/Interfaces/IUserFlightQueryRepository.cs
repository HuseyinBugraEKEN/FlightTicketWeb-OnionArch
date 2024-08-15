using Core.Entities;
namespace Core.Interfaces
{
    public interface IUserFlightQueryRepository
    {
        Task<IEnumerable<UserFlight>> GetUserFlightsByUserIdAsync(int userId);
        Task<IEnumerable<UserFlight>> GetUserFlightsByFlightIdAsync(int flightId);
    }
}
