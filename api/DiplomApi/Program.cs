using DiplomApi.Contexts;
using DiplomApi.Extensions;
using DiplomApi.Models.Entities;
using DiplomApi.Repositories;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<TrashBinsContext>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddRepository<City, CityRepository>();
builder.Services.AddRepository<Theme, ThemeRepository>();
builder.Services.AddRepository<ProductType, ProductTypeRepository>();
builder.Services.AddRepository<PlaceType, PlaceTypeRepository>();
builder.Services.AddRepository<Status, StatusRepository>();
builder.Services.AddRepository<Mission, MissionRepository>();
builder.Services.AddRepository<User, UserRepository>();
builder.Services.AddRepository<Product, ProductRepository>();
builder.Services.AddRepository<Place, PlaceRepository>();
builder.Services.AddRepository<Review, ReviewRepository>();
builder.Services.AddRepository<UserProduct, UserProductRepository>();
builder.Services.AddRepository<MissionUser, MissionUserRepository>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("CORS", p =>
    {
        p.AllowAnyHeader()
            .AllowAnyMethod()
            .AllowAnyOrigin();
    });
});

var app = builder.Build();

app.UseCors("CORS");

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();