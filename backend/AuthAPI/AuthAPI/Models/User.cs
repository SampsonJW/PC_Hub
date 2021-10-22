namespace AuthAPI.Models
{
    public class User
    {
        public string? Id { get; set; }

        public DateTime? CreatedAt {  get; set; } = default(DateTime?);

        public DateTime? UpdatedAt {  get; set;} = default(DateTime?);

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }
    }
}
