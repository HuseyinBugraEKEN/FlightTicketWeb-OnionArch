using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;

namespace Infrastructure.Repositories
{
    public class UserFlightCommandRepository : IUserFlightCommandRepository
    {
        private readonly ApplicationDbContext _context;

        public UserFlightCommandRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task AddUserFlightAsync(UserFlight userFlight)
        {
            await _context.UserFlights.AddAsync(userFlight);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteUserFlightAsync(int id)
        {
            var userFlight = await _context.UserFlights.FindAsync(id);
            if (userFlight != null)
            {
                _context.UserFlights.Remove(userFlight);
                await _context.SaveChangesAsync();
            }
        }
    }
}
