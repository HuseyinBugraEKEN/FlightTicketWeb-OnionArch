//kullanıcıların uçuş bilgilerini taşımak için kullanılan UserFlightDto sınıfını içerir.
namespace Core.DTOs
{
    public class UserFlightDto
    {
        public int FlightId { get; set; }
        public string Departure { get; set; }
        public string Arrival { get; set; }
        public DateTime Date { get; set; }
        public TimeSpan Time { get; set; }
        public int Capacity { get; set; }
        public decimal Price { get; set; }
    }
}
