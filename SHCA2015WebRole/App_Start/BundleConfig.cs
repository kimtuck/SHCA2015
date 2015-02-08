using System.Web;
using System.Web.Optimization;
using SHCA2015WebRole.Framework.Bundling;

namespace SHCA2015WebRole
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include("~/Scripts/jquery-{version}.js"));

            bundles.Add(new StyleBundle("~/bundles/css").Include(
                      "~/UI/vendor/bootstrap-3.1.1/css/bootstrap.css",
                      "~/stylesheets/site.css")
                      );

            bundles.Add(new ScriptBundle("~/bundles/vendor")
                .Include("~/UI/Vendor/lodash/lodash.js")
                .Include("~/UI/Vendor/jquery/jquery.js")
                .Include("~/UI/Vendor/bootstrap/bootstrap.js")
                .Include("~/UI/Vendor/jquery-ui-1.10.4/js/jquery-ui-1.10.4.js")

                .Include("~/UI/Vendor/Angular-1.3.5/angular.js")
                .Include("~/UI/Vendor/Angular-1.3.5/angular-sanitize.js")
                .Include("~/UI/Vendor/Angular-1.3.5/angular-route.js")
                .Include("~/UI/Vendor/Angular-1.3.5/angular-resource.js")
                .Include("~/UI/Vendor/Angular-1.3.5/angular-touch.js")
                .Include("~/UI/Vendor/Angular-1.3.5/angular-cookies.js")
                .Include("~/UI/Vendor/angular-carousel/angular-carousel.js")
                .Include("~/UI/Vendor/angular-ui-0.4.0/angular-ui.js")
                .Include("~/UI/Vendor/angular-ui-0.4.0/angular-ui-modal.js")
                .Include("~/UI/Vendor/AngularJS-Toaster/toaster.js")
                .Include("~/UI/Vendor/bindonce-master/bindonce.js")
                .Include("~/UI/Vendor/jscache/cache.js")
                .Include("~/UI/Vendor/moment/moment.js")
                .Include("~/UI/Vendor/angular-file-upload-master/dist/angular-file-upload-all.js")
                );

            bundles.Add(new ScriptBundle("~/bundles/app")
                .IncludeSubdirectoriesOf("~/UI/app","*.js")
                .IncludeSubdirectoriesOf("~/UI/directives", "*.js")
                .IncludeSubdirectoriesOf("~/UI/pages", "*.js")
                .IncludeSubdirectoriesOf("~/UI/Services", "*.js")
                );
            // Set EnableOptimizations to false for debugging. For more information,
            // visit http://go.microsoft.com/fwlink/?LinkId=301862
            BundleTable.EnableOptimizations = false;
        }
    }
}
