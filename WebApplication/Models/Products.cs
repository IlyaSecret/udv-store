using System;
using System.Collections.Generic;

namespace WebApplication1.Models
{
    public partial class Products
    {
        public int Id { get; set; }
        public string Productname { get; set; }
        public int? Price { get; set; }
        public string Productdescription { get; set; }
        public string Img { get; set; }
        public string Productsize { get; set; }
        public bool? Inexistance { get; set; }
        public bool? Hassizes { get; set; }
    }
}
