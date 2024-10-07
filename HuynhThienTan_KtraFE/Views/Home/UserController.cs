using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HuynhThienTan_KtraFE.Views.Home
{
    public class UserController : Controller
    {
        // GET: User
        public ActionResult Welcome()
        {
            return View();
            
        }
        public ActionResult GiaoHang()
        {
            return View();
        }
    }
}