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
        public IActionResult CreateOrder(string products)
        {
            var order = new Orders();
            order.Fio = Startup.currentUser.Fio;
            order.Items = products;
            order.OrderStatus = 1;
            var context = new udvstoreContext();
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
    }

}
