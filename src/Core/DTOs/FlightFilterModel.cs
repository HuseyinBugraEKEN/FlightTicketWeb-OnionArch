//uçuşları filtrelemek için kullanılan FlightFilterModel sınıfını tanımlar. 
namespace Core.DTOs{
    public class FlightFilterModel
    {
        public string Departure { get; set; }
        public string Arrival { get; set; }
        public DateTime? Date { get; set; }
        public int Passengers { get; set; }
    }
}