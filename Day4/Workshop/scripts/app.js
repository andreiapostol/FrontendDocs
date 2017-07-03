// TODO #2 load ngRoute module
var hrApp = angular.module("hrApp", ['ngRoute']);

hrApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/colors",{
            templateUrl:"views/color.html",
            controller:"ColorController"
        })
        .when('/forms', {
            templateUrl: "views/form.html",
            controller: 'FormsController'
        })
        .otherwise({
            redirectTo:"/"
        });

}]);
