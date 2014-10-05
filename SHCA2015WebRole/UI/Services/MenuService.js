app.factory('MenuService', ["$filter",
    function ($filter) {
         var service = function () {
            var self = this;
             var MenuItems = _.map(Pages, function (page) {
                 return { label: page, icon: 'icon-' + ($filter('lowercase')(page)).replace(' ','-'), value :'/' + page.replace(' ','') }

             });
            return {
                Pages: Pages,
                PrivatePages: PrivatePages,
                MenuItems: MenuItems
            }
        }();
        return service;
    }
]);

