using System;
using System.Collections.Generic;

namespace WebApplication1.Models
{
    public partial class Orders
    {
        public int Id { get; set; }
        public string Fio { get; set; }
        public string Items { get; set; }
        public int? OrderStatus { get; set; }
    }
}
