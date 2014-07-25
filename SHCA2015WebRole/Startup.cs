using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SHCA2015WebRole.Startup))]
namespace SHCA2015WebRole
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
