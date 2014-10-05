﻿﻿'use strict';

var Pages = [
    "Home",
    "Show Site",
    "Judges",
    "Schedule",
    "Hotels",
    "Committees",
    "Area Attractions"];

var PrivatePages = [
    "BreakingNews"]

var app = angular.module('app',
    // Other modules
    ['ngRoute'],
    ["$routeProvider","$locationProvider",
        function ($routeProvider, $locationProvider) {
            _.each(_.union(Pages, PrivatePages),function(item) {
                var route = { path: ("/" + item).replace(' ',''),
                    route: { templateUrl: '/UI/Pages/' + item + ".html",
                        controller: 'GenericPageController' } };
                $routeProvider.when(route.path, route.route);
                console.log(route, route.route);
            });
            $routeProvider.otherwise({ redirectTo: '/Home' });
        }
    ]);




