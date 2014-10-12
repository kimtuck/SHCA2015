app.controller('GenericPageController', ["$scope","$location",
    function ($scope, $location) {
        $scope.showHomeHeader = function() {
            console.log($location.url())
            return $location.url() == "/Home";
        }

  }
]);
