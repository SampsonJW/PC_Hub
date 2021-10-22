using AuthAPI.Data;
using AuthAPI.Dtos;
using AuthAPI.Helpers;
using AuthAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace AuthAPI.Controllers
{
    [Route("auth")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly IUserRepository _repository;
        private readonly JwtService _jwtService;
        public AuthController(IUserRepository repository, JwtService jwtService)
        {
            _repository = repository;
            _jwtService = jwtService;
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
            var user = _repository.GetByEmail(dto.Email);
            if (!BCrypt.Net.BCrypt.Verify(dto.Password, user.Password)) {
                return BadRequest(new { error = "Invalid Credentials" });
            }

            var jwt = _jwtService.Generate(user.Id.ToString());

            Response.Cookies.Append("jwt", jwt, new CookieOptions {  HttpOnly = true });

            return Ok(new {jwt});
        }
    }
}
