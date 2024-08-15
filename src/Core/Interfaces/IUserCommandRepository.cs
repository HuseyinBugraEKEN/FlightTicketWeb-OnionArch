using Core.Entities;
namespace Core.Interfaces
{
    public interface IUserCommandRepository
    {
        Task AddUserAsync(User user);
        Task UpdateUserAsync(User user);
        Task DeleteUserAsync(int id);
    }
}
