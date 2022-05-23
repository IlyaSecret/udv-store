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

        [HttpDelete]
        [Route("SendMail")]
        public IActionResult SendMail(int id)
        {
            var context = new udvstoreContext();
            var order = context.Orders.Where(order => order.Id == id).FirstOrDefault();
            var user = context.Employees.Where(user => user.Fio == order.Fio).FirstOrDefault();
            context.Orders.Remove(order);
            context.SaveChangesAsync();
            MailAddress from = new MailAddress("markshubat@gmail.com", "admin");
            MailAddress to = new MailAddress("markshubat@gmail.com");
            MailMessage m = new MailMessage(from, to);
            m.Subject = "Тест";
            var s = "<h2>Письмо отправлено для user</h2>";
            var message = s.Replace("user", user.Email);
            m.Body = message;
            m.IsBodyHtml = true;
            SmtpClient smtp = new SmtpClient("smtp.gmail.com", 587);
            smtp.Credentials = new NetworkCredential("markshubat@gmail.com", "Mark022402");
            smtp.EnableSsl = true;
            smtp.Send(m);
            return Ok("Письмо отправлено");
        }
    }

    public class Order
    {
        public List<int> products { get; set; }
    }
}
