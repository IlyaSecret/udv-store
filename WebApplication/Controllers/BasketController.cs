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
    public class BasketController : ControllerBase
    {
       [HttpGet]
       public IEnumerable<Products> Get()
        {
            var context = new udvstoreContext();
            var items = Startup.currentUser.Basket.Split().ToList();
            var products = new List<Products>();
            if (items.Count == 0) return products;
            foreach(var elem in items)
            {
                var product = context.Products.Where(item => item.Id == Convert.ToInt32(elem)).FirstOrDefault();
                products.Add(product);
            }
            return products;
        }
    }
}
