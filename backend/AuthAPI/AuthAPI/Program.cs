using Microsoft.EntityFrameworkCore;
using AuthAPI.Models;
using AuthAPI.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddDbContext<UserContext>(opt => opt.UseSqlServer("Server=SAMPSON-WINDOWS;Database=PC_Hub;UserId=samps"));
builder.Services.AddControllers();
builder.Services.AddScoped<IUserRepository, UserRepository>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
