app.factory('RouteService', ['$routeProvider','MenuService',
    function ($routeProvider, MenuService) {
        var service = function () {
            var self = this;
            var AddPages = function() {
                debugger

            var pages = [];

            _.each(_.union(MenuService.Pages, MenuService.PrivatePages),function(item) {
                var route = { path: "/" + item,
                              route: { templateUrl: '/UI/Pages/' + item + "/" + item + ".html",
                                        controller: 'GenericPageController' } };
                $routeProvider.when(route.path, route.route);
                console.log(path, "Route", route.path)
            });
            }
            return {
                AddPages:AddPages
            }
        }();
        service.AddPages();
        return service;
    }
]);

