app.factory('MenuService', ["$filter",
    function ($filter) {
         var service = function () {
            var self = this;
            var MenuItems = _.map(Pages, function (page) {
                var icon = ($filter('lowercase')(page)).replace(/[ \/]/g, '-');
                var pg = page.replace(/\/.*/,'').replace(' ','');
                 return { label: page, icon: 'icon-' + icon, value :'/' + pg}

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

