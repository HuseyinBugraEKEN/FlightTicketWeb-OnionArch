using Core.Entities;
using Core.Interfaces;

namespace Application.Services
{
    public class UserFlightCommandService
    {
        private readonly IUserFlightCommandRepository _userFlightCommandRepository;

        public UserFlightCommandService(IUserFlightCommandRepository userFlightCommandRepository)
        {
            _userFlightCommandRepository = userFlightCommandRepository;
        }

        public async Task AddUserFlightAsync(UserFlight userFlight)
        {
            await _userFlightCommandRepository.AddUserFlightAsync(userFlight);
        }

        public async Task DeleteUserFlightAsync(int id)
        {
            await _userFlightCommandRepository.DeleteUserFlightAsync(id);
        }
    }
}
