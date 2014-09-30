app.factory('MenuService', ["$filter",
    function ($filter) {
         var service = function () {
            var self = this;

            var Pages = Global_Pages;

            var MenuItems = _.map(Pages, function (page) {
                 return { label: page, icon: 'icon-' + $filter('lowercase')(page), value :'/' + page }

            });
             return {
                Pages: Pages,
                MenuItems: MenuItems
            }
        }();
        return service;
    }
]);

