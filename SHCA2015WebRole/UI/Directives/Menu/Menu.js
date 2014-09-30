app.directive('menu', [ "MenuService","$location",
    function (MenuService,$location) {
        return {
            templateUrl: "/UI/Directives/Menu/Menu.html",
            link:
                function (scope, element, attrs) {
                    scope.MenuService=MenuService;

                    scope.onClick = function(value) {
                        $location.url(value);
                    }

                }
        };
    }
]);
