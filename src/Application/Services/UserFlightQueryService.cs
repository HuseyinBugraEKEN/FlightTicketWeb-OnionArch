using Core.Entities;
using Core.Interfaces;

namespace Application.Services
{
    public class UserFlightQueryService
    {
        private readonly IUserFlightQueryRepository _userFlightQueryRepository;

        public UserFlightQueryService(IUserFlightQueryRepository userFlightQueryRepository)
        {
            _userFlightQueryRepository = userFlightQueryRepository;
        }

        public async Task<IEnumerable<UserFlight>> GetUserFlightsByUserIdAsync(int userId)
        {
            return await _userFlightQueryRepository.GetUserFlightsByUserIdAsync(userId);
        }
        public async Task<IEnumerable<UserFlight>> GetUserFlightsByFlightIdAsync(int flightId)
        {
            return await _userFlightQueryRepository.GetUserFlightsByFlightIdAsync(flightId);
        }
    }
}