namespace Core.Entities{
    public class UserFlight
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int FlightId { get; set; }
        public User User { get; set; }
        public Flight Flight { get; set; }
    }
}
