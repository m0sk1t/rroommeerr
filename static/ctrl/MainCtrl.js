(function() {
	angular.module('RROOMMEERR').controller('MainCtrl', ['$scope', '$http',
		function($scope, $http) {
			$scope.colors = [];
			$scope.opt = {
				interior: 'bedroom',
				door: null,
				brand: null,
				floor: null,
				plinth: null,

				doorcoll: null,
				doormodel: null,
				floorcoll: null,

				choose_door: false,
				choose_floor: false,

				color: 'rgb(200,200,200)',
			};
			$scope.change_bg = function(item) {
				var layer = document.querySelector('.' + item);
				layer.style.backgroundImage = 'url(rooms/' + item + 's/' + $scope.opt[item].image + ')';
			};
			$scope.select_floor_collections = function() {
				$scope.opt.floors = [];
				$scope.opt.floor_collections = [];
				$scope.floorcolls.map(function(el) {
					el.brand === $scope.opt.floor_brand && $scope.opt.floor_collections.push(el);
				});
			};
			$scope.select_floors = function() {
				$scope.opt.floors = [];
				$scope.floors.map(function(el) {
					(el.coll === $scope.opt.floorcoll) && $scope.opt.floors.push(el);
				});
			};

			$scope.select_door_collections = function() {
				$scope.opt.doors = [];
				$scope.opt.door_models = [];
				$scope.opt.door_collections = [];
				$scope.doorcolls.map(function(el) {
					el.brand === $scope.opt.door_brand && $scope.opt.door_collections.push(el);
				});
			};
			$scope.select_door_models = function() {
				$scope.opt.doors = [];
				$scope.opt.door_models = [];
				$scope.doormodels.map(function(el) {
					(el.coll === $scope.opt.doorcoll) && $scope.opt.door_models.push(el);
				});
			};
			$scope.select_doors = function() {
				$scope.opt.doors = [];
				$scope.doors.map(function(el) {
					((el.brand === $scope.opt.door_brand) && (el.coll === $scope.opt.doorcoll) && (el.model === $scope.opt.doormodel)) && $scope.opt.doors.push(el);
				});
			};
			$http.get('/brand/0').then(function(res) {
				$scope.brands = res.data;
				$scope.opt.door_brand = res.data[0]._id;
				$scope.opt.floor_brand = res.data[0]._id;

				$http.get('/doorcoll/0').then(function(res) {
					$scope.doorcolls = res.data;
				});
				$http.get('/floorcoll/0').then(function(res) {
					$scope.floorcolls = res.data;
				});
				$http.get('/interior/0').then(function(res) {
					$scope.interiors = res.data;
					$scope.opt.interior = res.data[0];
					$scope.change_bg('interior');
				});
				$http.get('/door/0').then(function(res) {
					$scope.doors = res.data;
					$scope.opt.door = res.data[0];
					$scope.change_bg('door');
				});
				$http.get('/floor/0').then(function(res) {
					$scope.floors = res.data;
					$scope.opt.floor = res.data[0];
					$scope.change_bg('floor');
				});
				$http.get('/doormodel/0').then(function(res) {
					$scope.doormodels = res.data;
				});
				$http.get('/plinth/0').then(function(res) {
					$scope.plinths = res.data;
					$scope.opt.plinth = res.data[0];
					$scope.change_bg('plinth');
				});
			});
		}
	]).controller('AdminCtrl', ['$scope', '$http', '$location',
		function($scope, $http, $location) {
			$scope.items = [];
			$scope.item_type = 'brand';
			$scope.auth = function() {
				var pwd = prompt("Введите пароль", 'P@ssw0rd');
				//красный хомяк отжигает как дурак
				$http.get('/setadm/' + pwd).then(function(res) {}, function(res) {
					$scope.auth();
				});
			};
			$scope.check = function() {
				$http.get('/check').then(function(res) {}, function(res) {
					$scope.auth();
				});
			};
			$scope.check();
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
			switch (true) {
				case $scope.type.indexOf('door') != -1:
					$scope.img = 'door';
					break;
				case $scope.type.indexOf('floor') != -1:
					$scope.img = 'floor';
					break;
				default:
					$scope.img = $scope.type;
					// statements_def
					break;
			}
			$scope.load = function() {
				$http.get('/' + $scope.type + '/' + $routeParams.id).then(function(res) {
					$scope.item = res.data[0];
					$scope.item.brand !== undefined && $http.get('/brand/0').then(function(res) {
						$scope.brands = res.data;
					});
					$scope.item.coll !== undefined && $http.get('/' + $scope.img + 'coll/0').then(function(res) {
						$scope.coll = res.data;
					});
					$scope.item.model !== undefined && $http.get('/' + $scope.img + 'model/0').then(function(res) {
						$scope.model = res.data;
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
				$http.put('/image/' + $scope.img, data, {
					transformRequest: angular.identity,
					headers: {
						'Content-Type': undefined
					}
				}).then(function(res) {
					$scope.item.bg && $scope.item.bg !== res.data && $http.delete('/image/' + $scope.img + '/' + $scope.item.bg).then(function(r) {
						$scope.item.bg = res.data;
						$scope.save(0);
					}, function(r) {
						console.error(r.data);
					});
					$scope.item.bg = res.data;
				}, function(res) {
					console.error(res.data.msg);
				});
			};
			$scope.image = function() {
				var file = document.querySelector('input#image').files[0],
					data = new FormData();
				if (!file) return;
				data.append('file', file);
				$http.put('/image/' + $scope.img, data, {
					transformRequest: angular.identity,
					headers: {
						'Content-Type': undefined
					}
				}).then(function(res) {
					$scope.item.image && $scope.item.image !== res.data && $http.delete('/image/' + $scope.img + '/' + $scope.item.image).then(function(r) {
						$scope.item.image = res.data;
						$scope.save(0);
					}, function(r) {
						console.error(res.data);
					});
					$scope.item.image = res.data;
				}, function(res) {
					console.error(res.data.msg);
				});
			};
			$scope.save = function(redirect) {
				var id = $scope.item._id;
				delete $scope.item._id;
				$http.put('/' + $scope.type + '/' + $routeParams.id, $scope.item).then(function(res) {
					redirect && $location.path('/admin');
					console.log(res.data);
				}, function(res) {
					console.error(res.data);
				});
			};
			$scope.load();
		}
	]);
})();