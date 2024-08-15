using Application.Services;
using Core.Entities;
using Core.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly UserQueryService _userQueryService;
        private readonly UserCommandService _userCommandService;

        public AuthController(UserQueryService userQueryService, UserCommandService userCommandService)
        {
            _userQueryService = userQueryService;
            _userCommandService = userCommandService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto login)
        {
            var user = await _userQueryService.GetUserByUsernameAsync(login.Username);
            if (user == null)
            {
                return BadRequest("No account found with this username.");
            }
            if (user.Password != login.Password)
            {
                return BadRequest("Incorrect username or password.");
            }
            return Ok(new { user.Id, user.Username, user.Role });
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto register)
        {
            var existingUser = await _userQueryService.GetUserByUsernameAsync(register.Username);
            if (existingUser != null)
            {
                return BadRequest("Username already exists.");
            }

            var newUser = new User
            {
                Username = register.Username,
                Password = register.Password,
                Email = register.Email,
                Role = "Client"
            };

            await _userCommandService.AddUserAsync(newUser);
            return Ok(new { newUser.Username, newUser.Role });
        }

        [HttpGet("users")]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            var users = await _userQueryService.GetAllUsersAsync();
            return Ok(users);
        }
    }
}