using Microsoft.EntityFrameworkCore;
using Core.Entities;
using Microsoft.Extensions.DependencyInjection;

namespace Infrastructure.Data
{
    public static class DbInitializer
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new ApplicationDbContext(
                serviceProvider.GetRequiredService<DbContextOptions<ApplicationDbContext>>()))
            {
                if (context.Database.EnsureCreated())
                {
                    if (!context.Users.Any())
                    {
                        context.Users.AddRange(
                            new User
                            {
                                Username = "admin",
                                Password = "admin123",
                                Email = "admin@example.com",
                                Role = "Admin"
                            }
                        );
                    }
                    context.SaveChanges();
                }
            }
        }
    }
}
