using Microsoft.EntityFrameworkCore;

namespace BootcampAPI.Models
{
    public class DBFullStackContext : DbContext
    {
        public DBFullStackContext() { }
        public DBFullStackContext(DbContextOptions<DBFullStackContext> options) : base(options) { }

        public DbSet<Coin> Coins { get; set; }
        public DbSet<UserCredential> UserCredentials { get; set; }
        public DbSet<UserPortfolio> UserPortfolios { get; set; }
        public DbSet<AdminUser> AdminUsers { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
                optionsBuilder.UseSqlServer("Server=DESKTOP-4K7C7LJ;Database=CryptoApp;User Id=ahmet;Password=123;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }
    }
}
