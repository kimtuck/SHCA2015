app.factory('DocumentsService', ["$http","$q","$timeout","$upload",
    function ($http,$q,$timeout,$upload) {
        var service = function () {
            var self = this;
            var documents = [];

            var hashedPass = -405971577;

            var Hash = function (s) {
                var hash = 0, i, chr, len;
                if (s.length == 0) return hash;
                for (i = 0, len = s.length; i < len; i++) {
                    chr = s.charCodeAt(i);
                    hash = ((hash << 5) - hash) + chr;
                    hash |= 0; // Convert to 32bit integer
                }
                return hash;
            }

            var ValidPass = function (s) {
                return Hash(s) == hashedPass;
            }

            var GetDocuments = function () {
                $http.get('api/document').success(function (data) {
                    documents.length = 0;
                    documents.push.apply(documents, data.documents);
                });
            }

            var TimeString = function (datestring) {
                return moment(datestring).format('MMMM Do YYYY, h:mm:ss a')
            }

            // ===============================

            var UploadFile = function(group, filename, file, ext) {
                uploadUsing$http(group, filename, file, ext);
            }

            var uploadUsing$http = function (group, filename, file, ext) {
                var fd = new FormData();
                fd.append('file', file);
                fd.append('group', group);
                fd.append('filename', filename);
                fd.append('ext', ext)
                $http.post('api/document', fd, {
                    transformRequest: angular.identity,
                    headers: { 'Content-Type': undefined }
                })
                .success(function () {
                    alert("Document Added")
                    GetDocuments();
                })
                .error(function () {
                    alert("upload failed");
                });
            };

            var Delete = function (filename) {
                debugger
                $http({ method: "post", url: '/api/document/delete', data: '"' + filename.replace(/\\/g,'/') + '"' })
                .then(function () {
                    GetDocuments();
                })
            }

            return {
                Documents: documents,
                GetDocuments: GetDocuments,
                TimeString: TimeString,
                UploadFile: UploadFile,
                Delete: Delete,
                ValidPass: ValidPass
            }
        }();
        return service;
    }
]);

