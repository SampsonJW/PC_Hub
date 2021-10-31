using Microsoft.EntityFrameworkCore;
using AuthAPI.Models;
using AuthAPI.Data;
using AuthAPI.Helpers;

var builder = WebApplication.CreateBuilder(args);
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

// Add services to the container.
builder.Services.AddCors(options => { options.AddPolicy(name: MyAllowSpecificOrigins,
     builder =>
     {
         builder.WithOrigins("http://localhost:3000")
         .AllowAnyHeader()
         .AllowCredentials()
         .AllowAnyMethod();
     });
});
    
builder.Services.AddDbContext<UserContext>(opt => opt.UseSqlServer(builder.Configuration.GetConnectionString("Default")));
builder.Services.AddControllers();
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IJwtService, JwtService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();
