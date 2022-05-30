using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
    public class MessagesController : ControllerBase
    {
       [HttpGet]
       [Route("Get")]
        public IEnumerable<Messages> Get()
        {
            var context = new udvstoreContext();
            return context.Messages.ToList();
        }

        [HttpPost]
        [Route("SendMessage")]
        public IActionResult SendMessage(Message data)
        {
            var context = new udvstoreContext();
            var message = new Messages { Fio = Startup.currentUser.Fio, Email = Startup.currentUser.Email, Comment = data.Comment, RequestType = data.Type, userId = Startup.currentUser.Id};
            context.Messages.Add(message);
            context.SaveChangesAsync();
            return Ok(message);
        }

        [HttpDelete]
        [Route("ClearTable")]
        public IActionResult ClearTable()
        {
            var context = new udvstoreContext();
            foreach(var elem in context.Messages)
            {
                context.Messages.Remove(elem);
            }
            context.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete]
        [Route("SendMail")]
        public IActionResult SendMail(int id)
        {
            var context = new udvstoreContext();
            var message = context.Messages.Where(message => message.Id == id).FirstOrDefault();
            //var user = context.Employees.Where(user => user.Fio == message.Fio).FirstOrDefault();
            context.Messages.Remove(message);
            context.SaveChangesAsync();
            //MailAddress from = new MailAddress("markshubat@gmail.com", "admin");
            //MailAddress to = new MailAddress("markshubat@gmail.com");
            //MailMessage m = new MailMessage(from, to);
            //m.Subject = "Тест";
            //var s = "<h2>Письмо отправлено для user</h2>";
            //var messageString = s.Replace("user", user.Email);
            //m.Body = messageString;
            //m.IsBodyHtml = true;
            //SmtpClient smtp = new SmtpClient("smtp.gmail.com", 587);
            //smtp.Credentials = new NetworkCredential("ilyakosyakov2000@mail.ru", "140902140902Bkmz");
            //smtp.EnableSsl = true;
            //smtp.Send(m);
            return Ok(message);
        }
    }

    public class Message
    {
        public int Type { get; set; } 
        public string Comment { get; set; }
    }
}
