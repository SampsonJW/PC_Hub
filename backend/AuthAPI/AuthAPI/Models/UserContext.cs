using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace AuthAPI.Models
{
    public class UserContext : DbContext
    {
        public UserContext()
        {

        }
        public DbSet<User> Users {  get; set; }
    }
}
