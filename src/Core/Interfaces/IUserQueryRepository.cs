using Core.Entities;
namespace Core.Interfaces
{
    public interface IUserQueryRepository
    {
        Task<User> GetUserByIdAsync(int id);
        Task<User> GetUserByUsernameAsync(string username);
        Task<IEnumerable<User>> GetAllUsersAsync();
    }
}
