using System;
using System.Collections.Generic;

namespace WebApplication1.Models
{
    public partial class Messages
    {
        public int Id { get; set; }
        public string Fio { get; set; }
        public string Email { get; set; }
        public int? Requesttype { get; set; }
        public string Comment { get; set; }
        public int? Userid { get; set; }
    }
}
