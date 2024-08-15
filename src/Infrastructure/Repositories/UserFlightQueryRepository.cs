using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using Infrastructure.Data;

namespace Infrastructure.Repositories
{
    public class UserFlightQueryRepository : IUserFlightQueryRepository
    {
        private readonly ApplicationDbContext _context;

        public UserFlightQueryRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<UserFlight>> GetUserFlightsByUserIdAsync(int userId)
        {
            return await _context.UserFlights
                .Where(uf => uf.UserId == userId)
                .Include(uf => uf.Flight)
                .ToListAsync();
        }
        public async Task<IEnumerable<UserFlight>> GetUserFlightsByFlightIdAsync(int flightId)
        {
            return await _context.UserFlights
            .Where(uf => uf.FlightId == flightId)
            .Include(uf => uf.User)
            .ToListAsync();
        }
    }
}
