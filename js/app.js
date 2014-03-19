'use strict';

/* App Module */

var myApp = angular.module('myApp', 
['ngRoute',
'myAppControllers',
'myAppDirectives',
'myAppFilters',
'myAppServices']);

nmbs.config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {

	$routeProvider
	 .when('/home', {
		templateUrl: 'partials/home.html',
		controller: 'homeCtrl'
		})
	 .otherwise({
        redirectTo: '/home'
      	});

		if(window.history && window.history.pushState){
		    $locationProvider.html5Mode(true);
		  }
	}
]);

