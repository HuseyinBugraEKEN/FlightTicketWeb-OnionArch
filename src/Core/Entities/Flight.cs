namespace Core.Entities{

    public class Flight
    {
        public int Id { get; set; }
        public string Departure { get; set; }
        public string Arrival { get; set; }
        public DateTime Date { get; set; }
        public TimeSpan Time { get; set; }
        public int Capacity { get; set; }
        public decimal Price { get; set; }
        public ICollection<UserFlight> UserFlights { get; set; } = new List<UserFlight>();
        //Bu uçuşa rezervasyon yapan kullanıcıların ilişkisini tutar.
    }
}