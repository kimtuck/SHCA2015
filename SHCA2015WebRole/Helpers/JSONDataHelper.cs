using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Helpers;

namespace Helpers
{
    public class JSONDataHelper
    {
        public static string Data(string key, object serializableObject)
        {
            return String.Format(@"<script type=""text/javascript"">Global_{0}={1};</script>",
                key, Json.Encode(serializableObject));
        }
    }
}