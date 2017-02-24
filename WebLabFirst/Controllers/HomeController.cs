using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebLabFirst.Models;

namespace WebLabFirst.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult FeedBackGet([Bind(Include = "Role,Email,Method,CV")] FeedBackModel model)
        {
            return Json(model, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult FeedBackPost([Bind(Include = "Role,Email,Method,CV")] FeedBackModel model)
        {
            return Json(model);
        }

        public ViewResult SomeJQuery()
        {
            return View();
        }

        public ViewResult Photos()
        {
            return View();
        }

        public ViewResult Text()
        {
            return View();
        }

        public ViewResult Messages()
        {
            return View();
        }

        public ViewResult Canvas()
        {
            return View();
        }

    }
}