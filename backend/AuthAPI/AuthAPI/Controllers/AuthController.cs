using AuthAPI.Data;
using AuthAPI.Dtos;
using AuthAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace AuthAPI.Controllers
{
    [Route("auth")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly IUserRepository _repository;
        public AuthController(IUserRepository repository)
        {
            _repository = repository;
        }

        [HttpPost("register")]
        public IActionResult Register(User user)
        {
            if (user is null)
            {
                throw new ArgumentNullException(nameof(user));
            }

            user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);
        
            return Created("User Successfully Created", _repository.Create(user));
        }

        [HttpPost("login")]
        public IActionResult Login(LoginDto dto)
        {
            if (dto is null)
            {
                return BadRequest(new {message = "Invalid credentials"});
            }
            var existingUser = _repository.GetByEmail(dto.Email);
            if (!BCrypt.Net.BCrypt.Verify(dto.Password, existingUser.Password)) {
                return BadRequest(new { error = "Invalid Credentials" });
            }
            return Ok(existingUser);
        }
    }
}
