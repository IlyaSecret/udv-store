using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
       [HttpGet]
       [Route("Get")]
        public IEnumerable<Products> Get()
        {
            var context = new udvstoreContext();
            return context.Products.ToList();           
        }

        [HttpPost]
        [Route("AddProduct")]
        public IActionResult AddProducts()
        {
            var context = new udvstoreContext();
            var products = new List<Products>
            {
                new Products {ProductName = "Power Bank", ProductDescription = "???", Price = 999, InExistance = true, ProductSize ="", Img = "https://downloader.disk.yandex.ru/preview/39886f69a46bc38aadb3f01df6626376a080596a6f3947f40a7f5fdf5300d1a8/62758904/3hi30-YIxGiwHa31oP_3iMdA5GDQ9prJfF1pvQjTWVqCTs9Moz-HZR_5mayTzVE87Zka5MB7cTmEuebAed2HkA%3D%3D?uid=0&filename=IMG_3905.JPG&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x942" },
                new Products {ProductName = "Bracelet", ProductDescription = "???", Price = 999, InExistance = true, ProductSize ="", Img = "https://sun9-7.userapi.com/s/v1/if2/B9AAB7k8mD_Wh_wdm1zM_9G_Lz5HM7110GxO_xYVzCaLZ9uPQkJwGUJxmUSSoKj7912ptDURZgYhth6ai-cyFusx.jpg?size=507x394&quality=96&type=album" },
                new Products {ProductName = "Diary", ProductDescription = "???", Price = 999, InExistance = true, ProductSize ="", Img = "https://downloader.disk.yandex.ru/preview/ce9d848efd8859aa52198173c41d921436642eecada26d73e5ca1bcb693a19ea/62758905/keesTDSE5bvog3y5akNSwr-cLZptbJoX8tfBhpUgIyhXoG430kB0FlqAD4VDWYZSnH7qTHHApLaeARIA3CC15g%3D%3D?uid=0&filename=IMG_4062.JPG&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x942" },
                new Products {ProductName = "Cup", ProductDescription = "???", Price = 999, InExistance = true, ProductSize = "", Img = "https://downloader.disk.yandex.ru/preview/8e9d6f694cb946bd1b6111f105d7e339f7d00ba068476e4ea2ab631874005e56/62758905/MarPvmXBbZGxAgBJZqpkeo8qCI4cu3wk8PJxNg8wreHRfJy3_Uxnzuzw1mq0zX5RwO7IsRRcNvoOwD2qip1BuA%3D%3D?uid=0&filename=IMG_4053.JPG&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x942" },
                new Products {ProductName = "Pen", ProductDescription = "???", Price = 999, InExistance = true, ProductSize = "", Img = "https://downloader.disk.yandex.ru/preview/b6d138af5ceb10e0e9c5c390d3383b22aec29d3d1deb935589efc2e701a1414c/62758904/igml893YuUWHKTkdxyPxwrli_pQ_wmZzqoAXivCe5le6rlPAQ_70IZWGCYJoQL8bgQhhkCwfK7mqHNnNri4n5Q%3D%3D?uid=0&filename=IMG_3962.JPG&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x942" },
                new Products {ProductName = "Backpack", ProductDescription = "???", Price = 999, InExistance = true, ProductSize = "", Img = "https://downloader.disk.yandex.ru/preview/7124341878aa023af64fc5f4bb0b56089500f4c2a67cfa2a9985b881ab3cfb0f/62758904/ZJBYD2EBnLFPWOtQyTlzU0Hv6mwPoFgyagxG35ovyVV0n_zbavAE8h1E8vXXV5c-SlLsO866pIUa3qbhzjJLOA%3D%3D?uid=0&filename=IMG_3278.HEIC&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x942" },
                new Products {ProductName = "Stickers", ProductDescription = "???", Price = 999, InExistance = true, ProductSize = "", Img = "https://downloader.disk.yandex.ru/preview/ffe36fc9a4de73bfd9f32411c661a7cb9e4079bdfa2bb03b3539fd4f87d9ffc7/62758904/nQW-sV6M5R8VVz3kae9mHPnnKUdYNCP21qVRJ8TTGaK0gqXPpGzGgJFlG1WORdMrmUlv2g4WNswWFIM2Phgj-Q%3D%3D?uid=0&filename=IMG_4012.JPG&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x942" },
                new Products {ProductName = "Thermo mug", ProductDescription = "???", Price = 999, InExistance = true, ProductSize = "", Img = "https://sun9-30.userapi.com/s/v1/if2/9LOeZZuy5gjEnuoCE3iqkprHaOkRybhrsxZrsb1rGRMrAiGEREEkDDr5gmz1Kr-puulZ7LtsZKdRNo5Mm0sWOCyy.jpg?size=333x443&quality=96&type=album" },
                new Products {ProductName = "Ball", ProductDescription = "???", Price = 999, InExistance = true, ProductSize = "", Img = "https://sun3-13.userapi.com/s/v1/if2/gQQ86vIqnvy9sUddktKceCpx68I2k1kbVHZxuRvKLEJscMdFNdvh6un_SrBJpJMPnkNOXF2lR6jpE434gJOM_coo.jpg?size=433x403&quality=96&type=album" },
                new Products {ProductName = "Cap", ProductDescription = "???", Price = 999, InExistance = true, ProductSize = "", Img = "https://downloader.disk.yandex.ru/preview/46f688de9f9d065402c3563dd9937aca7d8d29bdff9c339919654899f1daef49/62758905/fOh9WQTfxzY4zmuTO8Eg37-cLZptbJoX8tfBhpUgIyjUr1DwX9z5XOxV8nFf26Y_JChh7E6SDMoKVxPGlcNf4A%3D%3D?uid=0&filename=IMG_4055.JPG&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x942" },
                new Products {ProductName = "Hoodie", ProductDescription = "???", Price = 999, InExistance = true, ProductSize = "", Img = "https://downloader.disk.yandex.ru/preview/3b0a5ccf8320b2f350a8810eb0351695bfcc2111419d87992bf0c14a5e942068/62758904/YX0SRuPdAPuiqyx9uEVJi8dA5GDQ9prJfF1pvQjTWVrBu3gYDN8ypqBsywfRL3QNfa7PWRhdzVVCZO8cTvuItA%3D%3D?uid=0&filename=IMG_3284.HEIC&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x942" }
            };
            
            foreach(var elem in products)
            {
                context.Products.Add(elem);
            }
            context.SaveChanges();
            return Ok();
        }
    }
}
