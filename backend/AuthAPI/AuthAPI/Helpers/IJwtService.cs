using System.IdentityModel.Tokens.Jwt;

namespace AuthAPI.Helpers
{
    public interface IJwtService
    {
        string Generate(string id);

        JwtSecurityToken Verify(string jwt);
    }
}
