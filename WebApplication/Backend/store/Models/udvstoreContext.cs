using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace store.Models
{
    public partial class udvstoreContext : DbContext
    {
        public udvstoreContext()
        {
        }

        public udvstoreContext(DbContextOptions<udvstoreContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Employees> Employees { get; set; }
        public virtual DbSet<Products> Products { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=tcp:udv.database.windows.net,1433;Initial Catalog=udv-store;Persist Security Info=False;User ID=markshubat;Password=Mark2402;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employees>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Balance).HasColumnName("balance");

                entity.Property(e => e.Basket)
                    .HasColumnName("basket")
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .HasColumnName("email")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Fio)
                    .HasColumnName("fio")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Img)
                    .HasColumnName("img")
                    .IsUnicode(false);

                entity.Property(e => e.Orders)
                    .HasColumnName("orders")
                    .IsUnicode(false);

                entity.Property(e => e.Pass)
                    .HasColumnName("pass")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Products>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Img)
                    .HasColumnName("img")
                    .IsUnicode(false);

                entity.Property(e => e.InExistance).HasColumnName("inExistance");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.ProductDescription)
                    .HasColumnName("productDescription")
                    .IsUnicode(false);

                entity.Property(e => e.ProductName)
                    .HasColumnName("productName")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ProductSize)
                    .HasColumnName("productSize")
                    .HasMaxLength(10)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
