app.directive('documents', ["DocumentsService","$window",
    function (DocumentsService,$window) {
        return {
            templateUrl: "/UI/Directives/Documents/Documents.html",
            link: function (scope) {
                scope.DocumentsService = DocumentsService;
                scope.view = function (document) {
                    $window.open(document.Url,'_shca');
                }
                scope.delete = function (document) {
                    confirm("Delete " + document.Name) && DocumentsService.Delete(document.filename);
                }

                scope.uploadFile = function (category, filename, file) {
                    DocumentsService.UploadFile(category, filename, file[0], 'pdf' );
                }

                scope.checkPassword = function () {
                    scope.validPassword = DocumentsService.ValidPass(scope.password);
                }
                DocumentsService.GetDocuments();
            }
        };
    }
]);
