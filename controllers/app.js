var myApp = angular.module("myApp", ["ngRoute"]);
myApp.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "templates/list.html",
            controller : "studentController"
        })
        .when("/student", {
            templateUrl : "templates/list.html",
            controller : "studentController"
        })
        .when("/student/create", {
            templateUrl : "templates/create.html",
            controller : "studentController"
        })
        .when("/student/:id/edit", {
        templateUrl : "templates/edit.html",
        controller : "studentController"
        });
});