using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace SHCA2015WebRole.Framework.Bundling
{
    /// <summary>
    /// Need to write this because of the bug in ASP.Net optimization as described in 
    /// http://aspnetoptimization.codeplex.com/workitem/105
    /// Solution from http://timgthomas.com/2013/12/a-bumbling-bundler-fixing-includedirectory/
    /// with a fix for including files in the main directory
    /// </summary>
    public static class BundleExtension
    {
        public static Bundle IncludeSubdirectoriesOf(this Bundle bundle, string path, string searchPattern, bool isParentDIrectory = true)
        {
            if(isParentDIrectory)
                bundle.IncludeDirectory(path, searchPattern);
            // Get the current and root paths for `DirectoryInfo`.
            var absolutePath = HttpContext.Current.Server.MapPath(path);
            var rootPath = HttpContext.Current.Server.MapPath("~/");
            var directoryInfo = new DirectoryInfo(absolutePath);

            foreach (var directory in directoryInfo.GetDirectories())
            {
                
                // Swap out the absolute path format for a URL.
                var directoryPath = directory.FullName;
                directoryPath = directoryPath
                  .Replace(rootPath, "~/")
                  .Replace('\\', '/');
                
                bundle.IncludeDirectory(directoryPath, searchPattern);
                bundle.IncludeSubdirectoriesOf(directoryPath, searchPattern, false);
            }

            return bundle;
        }

    }
}