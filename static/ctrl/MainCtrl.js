(function() {
	angular.module('RROOMMEERR').controller('MainCtrl', ['$scope', '$http',
		function($scope, $http) {
			$scope.loading = false;
			$scope.color = {};
			$scope.colors = [{
				r: 50,
				g: 200,
				b: 120,
			}, {
				r: 30,
				g: 100,
				b: 150,
			}, {
				r: 170,
				g: 100,
				b: 70,
			}, {
				r: 180,
				g: 100,
				b: 150,
			}, {
				r: 60,
				g: 150,
				b: 185,
			}, {
				r: 50,
				g: 110,
				b: 100,
			}];
			$scope.opt = {
				r: 10,
				g: 10,
				b: 10,
				plinth: 1,
				floor: 1,
				door: 1,
				room: 'bedroom'
			};
			$scope.image = $scope.opt.room + '.jpg';
			$scope.set_color = function(color) {
				$scope.color = color;
			}
			$scope.change_bg = function(item) {
				var layer = document.querySelector('.' + item);
				layer.style.backgroundImage = 'url(rooms/' + item + 's/' + item + $scope.opt[item] + '.png)';
			};
		}
	]).controller('AdminCtrl', ['$scope', '$http', '$location',
		function($scope, $http, $location) {
			$scope.items = [];
			$scope.item_type = 'doorcollection';
			$scope.load = function() {
				$http.get('/' + $scope.item_type + '/0').then(function(res) {
					$scope.items = res.data;
				}, function(res) {
					console.error(res.data);
				});
			};
			$scope.create = function() {
				$http.post('/' + $scope.item_type + '/0', {}).then(function(res) {
					$location.path('/item/' + $scope.item_type + '/' + res.data._id);
				}, function(res) {
					console.error(res.data);
				});
			};
			$scope.delete = function(id) {
				$http.delete('/' + $scope.item_type + '/' + id).then(function(res) {
					$scope.items = $scope.items.filter(function(item) {
						return item._id !== id;
					});
				}, function(res) {
					console.error(res.data);
				});
			};
			$scope.load();
		}
	]).controller('ItemCtrl', ['$scope', '$http', '$routeParams',
		function($scope, $http, $routeParams) {
			$scope.item = {};
			$scope.type = $routeParams.type;
			$scope.load = function() {
				$http.get('/' + $scope.type + '/' + $routeParams.id).then(function(res) {
					$scope.item = res.data[0];
				}, function(res) {
					console.error(res.data);
				});
			};
			$scope.save = function() {
				var id = $scope.item._id;
				delete $scope.item._id;
				$http.put('/' + $scope.type + '/' + $routeParams.id, $scope.item).then(function(res) {
					$scope.item._id = id;
				}, function(res) {
					console.error(res.data);
				});
			};
			$scope.load();
		}
	]);
})();