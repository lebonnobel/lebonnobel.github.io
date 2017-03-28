var nobelApp = angular.module('nobelApp', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
        $routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'nobelCtrl'
			})
			.when('/contribution', {
				templateUrl: 'views/contribution.html',
				//controller: 'CMSController'
			})
			.otherwise({
				redirectTo: '/'
			});
    }
]);