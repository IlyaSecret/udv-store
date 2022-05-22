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
    public class EmployeeController : ControllerBase
    {
       [HttpGet]
       [Route("Get")]
        public IEnumerable<Employees> Get()
        {
            var context = new udvstoreContext();
            return context.Employees.ToList();           
        }

        [HttpPost]
        [Route("AddBonus")]
        public IActionResult AddBonus(int id, int bonus)
        {
            var context = new udvstoreContext();
            foreach(var elem in context.Employees)
            {
                if (elem.Id == id)
                {
                    elem.Balance += bonus;                  
                }
            }
            context.SaveChangesAsync();
            return Ok("добавлено");
        }

        [HttpPost]
        [Route("SendMail")]
        public IActionResult SendMail(int id)
        {
            var context = new udvstoreContext();
            var user = context.Employees.Where(employee => employee.Id == id).FirstOrDefault();
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
}
