using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using store.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace store.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {       
        [HttpGet]
        public IEnumerable<Products> Get()
        {
            using (var context = new udvstoreContext())
            {
                return context.Products.ToList();
            }
        }
    }
}
