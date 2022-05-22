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
            var message = new Messages { Fio = Startup.currentUser.Fio, Email = Startup.currentUser.Email, Comment = data.Comment, RequestType = data.Type };
            context.Messages.Add(message);
            context.SaveChangesAsync();
            return Ok(message);
        }
    }

    public class Message
    {
        public int Type { get; set; } 
        public string Comment { get; set; }
    }
}
