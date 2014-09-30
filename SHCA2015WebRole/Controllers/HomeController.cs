using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SHCA2015WebRole.Models;

namespace SHCA2015WebRole.Controllers
{
    public class HomeController : Controller
    {

        public List<string> Pages = new List<string>
        {
            "Home",
            "Judges",
            "Schedule",
            "Hotels",
            "Committees",
            "Area Attractions"
        };

        public HomeController()
        {
        }

        public ActionResult Index()
        {
            ViewBag.Pages = Pages;
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}