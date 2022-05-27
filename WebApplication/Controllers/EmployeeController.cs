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
            var hoodie = context.Products.Where(product => product.Id == 11).FirstOrDefault();
            foreach(var elem in context.Products)
            {
                elem.InExistance = true;
                if (elem.Id != 11) elem.HasSizes = false;
            }
            context.SaveChanges();
            return context.Employees.ToList();           
        }

        [HttpGet]
        [Route("GetById")]
        public Employees GetById(int id)
        {
            var context = new udvstoreContext();
            return context.Employees.Where(employee => employee.Id == id).FirstOrDefault();
        }

        [HttpPost]
        [Route("AddBonusToGroup")]
        public IActionResult AddBonusToGroup(Bonus data)
        {
            var context = new udvstoreContext();
            foreach (var elem in data.employeeIds)
            {
                var user = context.Employees.Where(employee => employee.Id == elem).FirstOrDefault();
                user.Balance += data.bonus;
                MailAddress from = new MailAddress("markshubat@gmail.com", "admin");
                MailAddress to = new MailAddress("markshubat@gmail.com");
                MailMessage m = new MailMessage(from, to);
                m.Subject = "Тест";
                var s = "<h2>Письмо отправлено для user</h2>";
                var messageString = s.Replace("user", user.Email);
                m.Body = messageString;
                m.IsBodyHtml = true;
                SmtpClient smtp = new SmtpClient("smtp.gmail.com", 587);
                smtp.Credentials = new NetworkCredential("markshubat@gmail.com", "Mark022402");
                smtp.EnableSsl = true;
                smtp.Send(m);
            }
            context.SaveChangesAsync();
            return Ok("добавлено");
        } 


    }

    public class Bonus
    {
        public int bonus { get; set; }
        public List<int> employeeIds { get; set; }
    }
}
