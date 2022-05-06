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
    }
}
