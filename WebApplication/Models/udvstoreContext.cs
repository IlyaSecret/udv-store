using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace WebApplication1.Models
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
        public virtual DbSet<Messages> Messages { get; set; }
        public virtual DbSet<Orders> Orders { get; set; }
        public virtual DbSet<Products> Products { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                var connstring = Startup.ConnectionString;
                optionsBuilder.UseSqlServer(connstring);
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

            modelBuilder.Entity<Messages>(entity =>
            {
                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.Fio).HasMaxLength(200);
            });

            modelBuilder.Entity<Orders>(entity =>
            {
                entity.Property(e => e.Fio).HasMaxLength(100);

                entity.Property(e => e.Items).HasMaxLength(1000);
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
