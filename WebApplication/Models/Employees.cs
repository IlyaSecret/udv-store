using System;
using System.Collections.Generic;

namespace WebApplication1.Models
{
    public partial class Employees
    {
        public int Id { get; set; }
        public string Fio { get; set; }
        public int? Balance { get; set; }
        public string Email { get; set; }
        public string Pass { get; set; }
        public string Img { get; set; }
        public string Orders { get; set; }
        public string Basket { get; set; }
    }
}
