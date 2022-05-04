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
       public IEnumerable<Employees> Get()
        {
            var context = new udvstoreContext();
            return context.Employees.ToList();           
        }
    }
}
