using System.Text.Json.Serialization;

namespace AuthAPI.Models
{
    public class User
    {
        public Guid? Id { get; set; }

        public DateTime? CreatedAt {  get; set; } = DateTime.Now;

        public DateTime? UpdatedAt {  get; set; } = DateTime.Now;

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        [JsonIgnore] public string Password { get; set; }
    }
}
