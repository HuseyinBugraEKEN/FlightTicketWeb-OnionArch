//kullanıcı kayıt işlemi için kullanılan RegisterDto sınıfını tanımlar. 
namespace Core.DTOs
{
    public class RegisterDto
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
    }
}
