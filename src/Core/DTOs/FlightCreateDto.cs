namespace Core.DTOs
{
    public class FlightCreateDto
    {
        public string Departure { get; set; }
        public string Arrival { get; set; }
        public DateTime Date { get; set; }
        public string Time { get; set; }
        public int Capacity { get; set; }
        public decimal Price { get; set; }
    }
}
