using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace SHCA2015WebRole.Models
{
    public class Document
    {

        public static string ResolveServerUrl(string serverUrl, bool forceHttps)
        {
            if (serverUrl.IndexOf("://") > -1)
                return serverUrl;

            string newUrl = serverUrl;
            Uri originalUri = System.Web.HttpContext.Current.Request.Url;
            newUrl = (forceHttps ? "https" : originalUri.Scheme) +
                "://" + originalUri.Authority + newUrl;
            return newUrl;
        }

        public Document(string filename) {
            this.filename = filename;
        }


        public Document(System.IO.FileInfo y)
        {
            Name = Path.GetFileNameWithoutExtension(y.Name);
            Url = ResolveServerUrl(VirtualPathUtility.ToAbsolute("~/documents/" + y.Directory.Name + "/" + y.Name),false);
            DateUploaded = y.CreationTime;
            filename = y.FullName;

        }
        public string Name { get; set; }
        public string Url { get; set; }
        public DateTime DateUploaded { get; set; }
        public string filename { get; set; }
    }
}