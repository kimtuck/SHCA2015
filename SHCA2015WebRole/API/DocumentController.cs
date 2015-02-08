using SHCA2015WebRole.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Net.Http;
using System.Net;
using System.Threading.Tasks;
using System.Diagnostics;

namespace SHCA2015WebRole.API
{
    [RoutePrefix("api")]
    public class DocumentController : ApiController
    {

        public DocumentController()
        {
        }

        [Route("document")]
        [HttpGet]
        public Documents Get()
        {
            var path = HttpContext.Current.Server.MapPath("~/Documents");
            var files = Directory.GetFiles(path,"*.*",SearchOption.AllDirectories);
            var fileData = files.Select(x => new FileInfo(x)).OrderByDescending(x => x.CreationTime);
            var treeData = fileData.GroupBy(x => x.Directory.Name);

            var documents = new Documents();
            documents.documents = treeData.Select(x => new DocumentSet(x)).OrderBy(x => x.SetName).ToList();
            return documents;
        } 

        [Route("document")]
        [HttpPost]
        public async Task<Documents> Save()
        {
            // Check if the request contains multipart/form-data.
            if (!Request.Content.IsMimeMultipartContent())
            {
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
            }

            string root = HttpContext.Current.Server.MapPath("~/App_Data");
            var provider = new MultipartFormDataStreamProvider(root);

            try
            {
                // Read the form data.
                await Request.Content.ReadAsMultipartAsync(provider);
                var group = provider.FormData["group"];
                var filename = provider.FormData["filename"];
                var ext = provider.FormData["ext"];

                // This illustrates how to get the file names.
                foreach (MultipartFileData file in provider.FileData)
                {
                    var filePath = HttpContext.Current.Server.MapPath("~/documents/" + group + "/" + filename +"." + ext);

                    Directory.CreateDirectory(Path.GetDirectoryName(filePath));
                    if (File.Exists(filePath))
                        File.Delete(filePath);
                    File.Move(file.LocalFileName, filePath);
                }
                return Get();
            }
            catch (System.Exception e)
            {
                return Get();
            }
        }
        [Route("document/delete")]
        [HttpPost]
        public async Task<Documents> Delete([FromBody] string filename)
        {
            File.Delete(filename);
            return Get();
        }
    }
}
