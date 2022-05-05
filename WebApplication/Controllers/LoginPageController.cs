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
    public class LoginPageController : ControllerBase
    {
       [HttpGet]
       public IActionResult Login(string login, string password)
        {
            var context = new udvstoreContext();
            var users = context.Employees;
            foreach(var elem in users)
            {
                if (elem.Email == login)
                {
                    if(elem.Pass == password)
                    {
                        Startup.currentUser = elem;
                        return Ok("Успешно");
                    }
                    else
                    {
                        return Ok("Неверный пароль");
                    }
                }
            }
            return Ok("Нет пользователя с такой почтой");
        }
    }
}
