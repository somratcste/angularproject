var myApp = angular.module("myApp", ["ngRoute"]);
myApp.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "templates/list.html",
            controller : "studentController"
        })
        .when("/student/create", {
            templateUrl : "blue.htm"
        });
});