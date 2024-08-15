using Core.Entities;
using Core.Interfaces;

namespace Application.Services
{
    public class UserQueryService
    {
        private readonly IUserQueryRepository _userQueryRepository;

        public UserQueryService(IUserQueryRepository userQueryRepository)
        {
            _userQueryRepository = userQueryRepository;
        }

        public async Task<User> GetUserByIdAsync(int id)
        {
            return await _userQueryRepository.GetUserByIdAsync(id);
        }

        public async Task<User> GetUserByUsernameAsync(string username)
        {
            return await _userQueryRepository.GetUserByUsernameAsync(username);
        }

        public async Task<IEnumerable<User>> GetAllUsersAsync()
        {
            return await _userQueryRepository.GetAllUsersAsync();
        }
    }
}
