using Core.Entities;
namespace Core.Interfaces
{
    public interface IUserFlightCommandRepository
    {
        Task AddUserFlightAsync(UserFlight userFlight);
        Task DeleteUserFlightAsync(int id);
    }
}
