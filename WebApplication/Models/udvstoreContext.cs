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
                optionsBuilder.UseNpgsql(Startup.ConnectionString);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employees>(entity =>
            {
                entity.ToTable("employees");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .UseIdentityAlwaysColumn();

                entity.Property(e => e.Balance).HasColumnName("balance");

                entity.Property(e => e.Basket)
                    .HasColumnName("basket")
                    .HasMaxLength(100);

                entity.Property(e => e.Email)
                    .HasColumnName("email")
                    .HasMaxLength(100);

                entity.Property(e => e.Fio)
                    .HasColumnName("fio")
                    .HasMaxLength(100);

                entity.Property(e => e.Img).HasColumnName("img");

                entity.Property(e => e.Orders)
                    .HasColumnName("orders")
                    .HasMaxLength(100);

                entity.Property(e => e.Pass)
                    .HasColumnName("pass")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<Messages>(entity =>
            {
                entity.ToTable("messages");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .UseIdentityAlwaysColumn();

                entity.Property(e => e.Comment).HasColumnName("comment");

                entity.Property(e => e.Email)
                    .HasColumnName("email")
                    .HasMaxLength(100);

                entity.Property(e => e.Fio)
                    .HasColumnName("fio")
                    .HasMaxLength(100);

                entity.Property(e => e.Requesttype).HasColumnName("requesttype");

                entity.Property(e => e.Userid).HasColumnName("userid");
            });

            modelBuilder.Entity<Orders>(entity =>
            {
                entity.ToTable("orders");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .UseIdentityAlwaysColumn();

                entity.Property(e => e.Fio)
                    .HasColumnName("fio")
                    .HasMaxLength(100);

                entity.Property(e => e.Items).HasColumnName("items");

                entity.Property(e => e.Orderstatus).HasColumnName("orderstatus");
            });

            modelBuilder.Entity<Products>(entity =>
            {
                entity.ToTable("products");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .UseIdentityAlwaysColumn();

                entity.Property(e => e.Hassizes).HasColumnName("hassizes");

                entity.Property(e => e.Img).HasColumnName("img");

                entity.Property(e => e.Inexistance).HasColumnName("inexistance");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.Productdescription).HasColumnName("productdescription");

                entity.Property(e => e.Productname)
                    .HasColumnName("productname")
                    .HasMaxLength(100);

                entity.Property(e => e.Productsize)
                    .HasColumnName("productsize")
                    .HasMaxLength(10);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
