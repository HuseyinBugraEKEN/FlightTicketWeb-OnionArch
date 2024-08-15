using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using Infrastructure.Data;

namespace Infrastructure.Repositories
{
    public class FlightQueryRepository : IFlightQueryRepository
    {
        private readonly ApplicationDbContext _context;

        public FlightQueryRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Flight>> GetAllFlightsAsync()
        {
            return await _context.Flights.ToListAsync();
        }

        public async Task<Flight> GetFlightByIdAsync(int id)
        {
            return await _context.Flights.FindAsync(id);
        }
    }
}
