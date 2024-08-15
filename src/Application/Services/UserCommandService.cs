using Core.Entities;
using Core.Interfaces;

namespace Application.Services
{
    public class UserCommandService
    {
        private readonly IUserCommandRepository _userCommandRepository;

        public UserCommandService(IUserCommandRepository userCommandRepository)
        {
            _userCommandRepository = userCommandRepository;
        }

        public async Task AddUserAsync(User user)
        {
            await _userCommandRepository.AddUserAsync(user);
        }

        public async Task UpdateUserAsync(User user)
        {
            await _userCommandRepository.UpdateUserAsync(user);
        }

        public async Task DeleteUserAsync(int id)
        {
            await _userCommandRepository.DeleteUserAsync(id);
        }
    }
}
