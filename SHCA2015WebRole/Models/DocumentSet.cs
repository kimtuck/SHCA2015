using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SHCA2015WebRole.Models
{
    public class DocumentSet
    {
        public DocumentSet(IGrouping<string, System.IO.FileInfo> x)
        {
            SetName = x.Key;
            Documents = x.Select(y => new Document(y)).ToList();
        }
        public string SetName { get; set; }
        public List<Document> Documents { get; set; }
    }
}