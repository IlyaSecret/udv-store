using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
       [HttpGet]
       [Route("Get")]
        public IEnumerable<Products> Get()
        {
            var context = new udvstoreContext();
            return context.Products.ToList();           
        }
    }
}
