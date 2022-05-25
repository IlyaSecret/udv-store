using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
       [HttpGet]
       [Route("Get")]
        public IEnumerable<Orders> Get()
        {
            var orderList = new List<Orders>();
            var context = new udvstoreContext();
            if(Startup.currentUser.Id == 1)
                return context.Orders.ToList();
            else
            {

                foreach(var elem in context.Orders)
                {
                    if (elem.Fio == Startup.currentUser.Fio)
                        orderList.Add(elem);
                }
                return orderList;
            }
        }

        [HttpPost]
        [Route("CreateOrder")]
        public IActionResult CreateOrder(Order data)
        {
            var order = new Orders();
            order.Fio = Startup.currentUser.Fio;
            order.Items = String.Join(' ',data.products);
            order.OrderStatus = 1;
            var price = GetProductsPrice(data.products);
            if (Startup.currentUser.Balance < price)
                return Ok("Не хватает средств");
            var context = new udvstoreContext();
            Startup.currentUser.Balance -= price;
            context.Employees.Where(employee => employee.Id == Startup.currentUser.Id).FirstOrDefault().Balance -= price;
            context.Orders.Add(order);
            context.SaveChanges();
            return Ok("заказ сформирован");
        }

        [HttpPost]
        [Route("ChangeStatus")]
        public IActionResult ChangeStatus(int id)
        {
            var context = new udvstoreContext();
            var order = context.Orders.Where(order => order.Id == id).FirstOrDefault();
            if (order.OrderStatus < 4) order.OrderStatus += 1;
            context.SaveChanges();
            return Ok("Статус изменен");
        }

        [HttpPost]
        [Route("CancelOrder")]
        public IActionResult Cancel(int id)
        {
            var context = new udvstoreContext();
            var order = context.Orders.Where(order => order.Id == id).FirstOrDefault();
            order.OrderStatus = 5;
            context.SaveChanges();
            return Ok("Заказ отменен");
        }

        [HttpGet]
        [Route("GetProducts")]
        public IEnumerable<Products> GetProducts(int id)
        {
            var context = new udvstoreContext();
            var productIds = context.Orders.Where(order => order.Id == id).FirstOrDefault().Items;
            var products = context.Products;
            foreach(var elem in productIds.Split())
            {
                yield return products.Where(product => product.Id == Convert.ToInt32(elem)).FirstOrDefault();
            }

        }

        [HttpPost]
        [Route("GetProductsPtice")]
        public int GetProductsPrice(List<int> ids)
        {
            var context = new udvstoreContext();
            var products = context.Products;
            var sum = 0;
            foreach (var elem in ids)
            {
                sum += (int)products.Where(product => product.Id == Convert.ToInt32(elem)).FirstOrDefault().Price;
            }
            return sum;

        }

        [HttpDelete]
        [Route("ClearTable")]
        public IActionResult ClearTable()
        {
            var context = new udvstoreContext();
            foreach (var elem in context.Orders)
            {
                context.Orders.Remove(elem);
            }
            context.SaveChangesAsync();
            return Ok();
        }     
    }

    public class Order
    {
        public List<int> products { get; set; }
    }
}
