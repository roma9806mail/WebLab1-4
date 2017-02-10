using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebLabFirst.Startup))]
namespace WebLabFirst
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
