using AuthAPI.Data;
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
        public IActionResult Register(User user) {
            return Created("User Successfully Created", _repository.Create(user));
        }
    }
}
