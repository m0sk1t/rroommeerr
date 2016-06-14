(function() {
	angular.module('RROOMMEERR').controller('MainCtrl', ['$scope', '$http',
		function($scope, $http) {
			$scope.loading = false;
<<<<<<< HEAD
			$scope.color = {};
			$scope.colors = [];
			$scope.opt = {
=======
			$scope.colors = [];
			$scope.opt = {
				color: '#cccccc',
>>>>>>> e48ec6c184639f252dc6b84a4fb580d268ca4148
				plinth: 1,
				floor: 1,
				door: 1,
				room: 'bedroom'
			};
			$scope.get_colors = function() {
				$http.get('/color/0').then(function(res) {
					$scope.colors = res.data;
				}, function(res) {
					console.error(res.data);
				});
			};
			$scope.set_color = function(color) {
<<<<<<< HEAD
				$scope.color = color;
			};
=======
				$scope.opt.color = color.color;
			};
			$http.get('/color/0').then(function(res) {
				$scope.colors = res.data;
			});
>>>>>>> e48ec6c184639f252dc6b84a4fb580d268ca4148
			$scope.change_bg = function(item) {
				var layer = document.querySelector('.' + item);
				layer.style.backgroundImage = 'url(rooms/' + item + 's/' + item + $scope.opt[item] + '.png)';
			};
			$scope.get_colors();
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
	]).controller('ItemCtrl', ['$scope', '$http', '$location', '$routeParams',
		function($scope, $http, $location, $routeParams) {
			$scope.item = {};
			$scope.type = $routeParams.type;
			$scope.load = function() {
				$http.get('/' + $scope.type + '/' + $routeParams.id).then(function(res) {
					$scope.item = res.data[0];
				}, function(res) {
					console.error(res.data);
				});
			};
			$scope.image = function() {
				var file = document.querySelector('input[type=file]').files[0],
					data = new FormData();
				if (!file) return;
				data.append('file', file);
				$http.post('/image', data, {
					transformRequest: angular.identity,
					headers: {
						'Content-Type': undefined
					}
				}).then(function(res) {
					$scope.item.image = res.data;
					$scope.save();
				}, function(res) {
					console.error(res.data.msg);
				});
			}
			$scope.save = function() {
				var id = $scope.item._id;
				delete $scope.item._id;
				$http.put('/' + $scope.type + '/' + $routeParams.id, $scope.item).then(function(res) {
					$location.path('/admin');
				}, function(res) {
					console.error(res.data);
				});
			};
			$scope.load();
		}
	]);
})();