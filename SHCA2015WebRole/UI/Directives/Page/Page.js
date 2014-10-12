app.directive('page', [ "MenuService","$location",
    function (MenuService,$location) {
        return {
            transclude: true,
            templateUrl: "/UI/Directives/Page/Page.html",
        };
    }
]);
