app.factory('RouteService', ['$routeProvider','MenuService',
    function ($routeProvider, MenuService) {
        debugger
        var service = function () {
            debugger
            var self = this;
            var AddPages = function() {
                debugger
            _.each(MenuService.Pages, function(item) {
                var route = { path: "/" + item,
                              route: { templateUrl: '/UI/Pages/' + item + "/" + item + ".html",
                                        controller: 'GenericPageController' } };
                $routeProvider.when(route.path, route.route);
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

