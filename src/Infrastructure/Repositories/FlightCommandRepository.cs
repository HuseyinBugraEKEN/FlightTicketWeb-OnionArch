using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using Infrastructure.Data;

namespace Infrastructure.Repositories
{
    public class FlightCommandRepository : IFlightCommandRepository
    {
        private readonly ApplicationDbContext _context;

        public FlightCommandRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task AddFlightAsync(Flight flight)
        {
            await _context.Flights.AddAsync(flight);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateFlightAsync(Flight flight)
        {
            _context.Entry(flight).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteFlightAsync(int id)
        {
            var flight = await _context.Flights.FindAsync(id);
            if (flight != null)
            {
                _context.Flights.Remove(flight);
                await _context.SaveChangesAsync();
            }
        }
    }
}
