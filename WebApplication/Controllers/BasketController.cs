using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BasketController : ControllerBase
    {
       [Route("Get")]
       [HttpGet]
       public IEnumerable<Products> Get()
        {
            var context = new udvstoreContext();
            var items = Startup.currentUser.Basket != null ? Startup.currentUser.Basket.Split().ToList() : new List<string> {"-1"};
            var products = new List<Products>();
            foreach(var elem in items)
            {
                if (elem != "")
                {
                    var product = new Products();
                    foreach (var elem1 in context.Products)
                    {

                        if (elem1.Id == Convert.ToInt32(elem))
                        {
                            product = elem1;
                            products.Add(product);
                        }
                    }
                }
            }
            return products;
        }

        [HttpPost]
        [Route("AddProduct")]
        public IActionResult AddProduct(int id)
        {
            var context = new udvstoreContext();
            var user = new Employees();
            foreach(var elem in context.Employees)
            {
                if (elem.Id == Startup.currentUser.Id) user = elem;
            }
            var products = new StringBuilder(user.Basket);
            products.Append(" ");
            products.Append(id);
            user.Basket = products.ToString();
            context.SaveChangesAsync();
            Startup.currentUser = user;
            return Ok("добавлено");
        }

        [HttpDelete]
        [Route("DeleteProduct")]
        public IActionResult DeleteProduct(int id)
        {
            var context = new udvstoreContext();
            var user = new Employees();
            foreach (var elem in context.Employees)
            {
                if (elem.Id == Startup.currentUser.Id) user = elem;
            }
            var products = user.Basket;
            string newBasket = user.Basket;
            var index = products.IndexOf(id.ToString());
            if (index == products.Length - 1)
            {
                newBasket = newBasket.Replace(id.ToString(), "");
            }
            else {
                var sb = new StringBuilder(id);
                sb.Append(" ");
                newBasket = newBasket.Replace(sb.ToString(),"");
            }
            user.Basket = newBasket;
            context.SaveChangesAsync();
            Startup.currentUser = user;
            return Ok("удалено");
        }
    }
}
