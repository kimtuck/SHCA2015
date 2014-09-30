﻿'use strict';
var app = angular.module('app',
    // Other modules
    ['ngRoute'],
    ["$routeProvider","$locationProvider",
        function ($routeProvider, $locationProvider,RouteService) {
            _.each(Global_Pages, function (page) {
                var route = { path: '/' + page, route: { templateUrl: '/UI/Pages/' +  page + '.html' } };
                console.log(route);
                $routeProvider.when(route.path, route.route);
            });
            $routeProvider.otherwise({ redirectTo: '/Home' });
        }
    ]);




