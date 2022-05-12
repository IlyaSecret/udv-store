using System;
using System.Collections.Generic;

namespace WebApplication1.Models
{
    public partial class Products
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public int? Price { get; set; }
        public string ProductDescription { get; set; }
        public bool? InExistance { get; set; }
        public string Img { get; set; }
        public string ProductSize { get; set; }
    }
}
