using AuthAPI.Models;

namespace AuthAPI.Data
{
    public interface IUserRepository
    {
        User Create(User user);
    }
}
