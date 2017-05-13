// Declare (or Register, Create) an Angular module.
var app = angular.module('myApp', ['ngRoute', 'myDirectives', 'ngStorage']);

// ---------- Config route(s). ----------

// Inject $routeProvider dependency for routing.
app.config(['$routeProvider', function($routeProvider) {
 $routeProvider
  // Home 
  .when('/', {
    templateUrl: 'html/mlist.html',
    controller: 'searchController' //controller for home page
  })
  // Add music tracks
  .when('/mlist', {
    templateUrl: 'html/mlist.html',
    controller: 'searchController'         //controller for register page
  })
  // Otherwise, redirect to Home
  .otherwise({redirectTo: '/'});
}]);