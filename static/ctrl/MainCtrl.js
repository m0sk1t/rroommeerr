(function() {
	angular.module('RROOMMEERR').controller('MainCtrl', ['$scope', '$http',
		function($scope, $http) {
			$scope.colors = [];
			$scope.opt = {
				interior: 'bedroom',
				door: null,
				color: null,
				floor: null,
				plinth: null,
				doorcoll: null,
				floorcoll: null,
				model_items: [],
				selected_item: null,
				collection_opened: false
			};
			$scope.set_color = function(color) {
				$scope.opt.color = color.color;
			};
			$scope.change_bg = function(item) {
				var layer = document.querySelector('.' + item);
				layer.style.backgroundImage = 'url(rooms/' + item + 's/' + $scope.opt[item].image + ')';
			};
			$scope.select_items = function() {
				$scope.opt.model_items = $scope[$scope.opt.selected_item + 's'].filter(function(el) {
					return el.coll === $scope.opt[$scope.opt.selected_item + 'coll'];
				});
			};
			$http.get('/color/0').then(function(res) {
				$scope.colors = res.data;
				$scope.set_color(res.data[0]);
			});
			$http.get('/interior/0').then(function(res) {
				$scope.interiors = res.data;
				$scope.opt.interior = res.data[0];
				$scope.change_bg('interior');
			});
			$http.get('/door/0').then(function(res) {
				$scope.doors = res.data;
				$scope.opt.door = res.data[0];
				//				$scope.change_bg('door');
			});
			$http.get('/floor/0').then(function(res) {
				$scope.floors = res.data;
				$scope.opt.floor = res.data[0];
				//				$scope.change_bg('floor');
			});
			$http.get('/plinth/0').then(function(res) {
				$scope.plinths = res.data;
				$scope.opt.plinth = res.data[0];
				$scope.change_bg('plint');
			});
			$http.get('/doorcoll/0').then(function(res) {
				$scope.doorcolls = res.data;
			});
			$http.get('/floorcoll/0').then(function(res) {
				$scope.floorcolls = res.data;
			});
		}
	]).controller('AdminCtrl', ['$scope', '$http', '$location',
		function($scope, $http, $location) {
			$scope.items = [];
			$scope.item_type = 'doorcoll';
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
					$scope.item.coll !== undefined && $http.get('/' + $routeParams.type + 'coll/0').then(function(res) {
						$scope.coll = res.data;
					});
				}, function(res) {
					console.error(res.data);
				});
			};
			$scope.bg = function() {
				var file = document.querySelector('input#bg').files[0],
					data = new FormData();
				if (!file) return;
				data.append('file', file);
				$http.put('/image/' + $scope.type, data, {
					transformRequest: angular.identity,
					headers: {
						'Content-Type': undefined
					}
				}).then(function(res) {
					$scope.item.bg = res.data;
					$scope.save();
				}, function(res) {
					console.error(res.data.msg);
				});
			};
			$scope.image = function() {
				var file = document.querySelector('input#image').files[0],
					data = new FormData();
				if (!file) return;
				data.append('file', file);
				$http.put('/image/' + $scope.type, data, {
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
			};
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