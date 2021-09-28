using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backRestaurante.Models;
using backRestaurante.Models.ViewModel;
namespace backRestaurante.Models
{
    public class MyDbContext:DbContext
    {
        public DbSet<Plato> Plato { get; set; } //mapeando nuestro modelo con la bd
        public DbSet<Orden> Orden { get; set; }
        public DbSet<Detalle> Detalle { get; set; }

        public MyDbContext(DbContextOptions<MyDbContext> options): base(options)
        {

        }
    }
}
