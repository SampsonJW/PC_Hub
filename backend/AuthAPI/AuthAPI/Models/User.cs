namespace AuthAPI.Models
{
    public class User
    {
        string Id { get; set; }

        DateTime? CreatedAt {  get; set; } = default(DateTime?);

        DateTime? UpdatedAt {  get; set;} = default(DateTime?);

        string FirstName { get; set; }

        string LastName { get; set; }

        string Email { get; set; }

        string Password { get; set; }
    }
}
