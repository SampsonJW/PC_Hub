namespace AuthAPI.Helpers
{
    public interface IJwtService
    {
        public string Generate(string id);
    }
}
