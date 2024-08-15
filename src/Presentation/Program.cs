using Application.Services;
using Core.Interfaces;
using Infrastructure.Data;
using Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Repository'leri ekleyin
builder.Services.AddScoped<IFlightQueryRepository, FlightQueryRepository>();
builder.Services.AddScoped<IFlightCommandRepository, FlightCommandRepository>();
builder.Services.AddScoped<IUserQueryRepository, UserQueryRepository>();
builder.Services.AddScoped<IUserCommandRepository, UserCommandRepository>();
builder.Services.AddScoped<IUserFlightQueryRepository, UserFlightQueryRepository>();
builder.Services.AddScoped<IUserFlightCommandRepository, UserFlightCommandRepository>();

// Service'leri ekleyin
builder.Services.AddScoped<FlightQueryService>();
builder.Services.AddScoped<FlightCommandService>();
builder.Services.AddScoped<FlightFilterService>();
builder.Services.AddScoped<UserQueryService>();
builder.Services.AddScoped<UserCommandService>();
builder.Services.AddScoped<UserFlightQueryService>();
builder.Services.AddScoped<UserFlightCommandService>();

builder.Services.AddControllers(); // API Controller'ları ekleyin
builder.Services.AddEndpointsApiExplorer(); // Swagger ve API keşfi
builder.Services.AddSwaggerGen(); // Swagger konfigürasyonu

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins",
        builder =>
        {
            builder.AllowAnyOrigin()
                   .AllowAnyHeader()
                   .AllowAnyMethod();
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowAllOrigins"); 
app.UseAuthorization();
app.MapControllers(); // Controller'ları haritalayın

app.Run();
