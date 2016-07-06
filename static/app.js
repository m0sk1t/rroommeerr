(function() {
	var app = angular.module('RROOMMEERR', ['ngRoute', 'color.picker']);
	app.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.when('/', {
				templateUrl: 'templates/main.tpl',
				controller: 'MainCtrl'
			}).when('/admin', {
				templateUrl: 'templates/admin.tpl',
				controller: 'AdminCtrl'
			}).when('/item/:type/:id', {
				templateUrl: 'templates/item.tpl',
				controller: 'ItemCtrl'
			}).otherwise({
				redirectTo: '/'
			});
		}
	]);
})();