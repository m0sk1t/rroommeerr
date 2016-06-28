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
				doormodel: null,
				floormodel: null,
				doorcolor: null,
				floorcolor: null,
				gamma_items: [],
				model_items: [],
				selected_item: null,
				selected_model: null,
				selected_gamma: null,
				collection_opened: false
			};
			$scope.change_bg = function(item) {
				var layer = document.querySelector('.' + item);
				layer.style.backgroundImage = 'url(rooms/' + item + 's/' + $scope.opt[item].image + ')';
			};
			$scope.select_models = function() {
				$scope.opt.gamma_items = [];
				$scope.opt.model_items = $scope[$scope.opt.selected_item + 'models'].filter(function(el) {
					return el.coll === $scope.opt[$scope.opt.selected_item + 'coll'];
				});
			};
			$scope.model_item = function() {
				return $scope[$scope.opt.selected_item + 's'].filter(function(el) {
					return el.model === $scope.opt.selected_model._id;
				})[0];
			};
			$scope.select_gammas = function(model) {
				$scope.opt.gamma_items = [];
				var models = $scope[$scope.opt.selected_item + 's'].filter(function(el) {
					return el.model === $scope.opt.selected_model._id;
				}).map(function(el) {
					return el.gamma;
				});
				models.map(function(el) {
					$scope.opt.gamma_items.push($scope[$scope.opt.selected_item + 'gammas'].filter(function(gamma) {
						return el === gamma._id;
					})[0]);
				});
			};
			$scope.select_gamma = function(gamma) {
				$scope.opt[$scope.opt.selected_item] = $scope[$scope.opt.selected_item + 's'].filter(function(el) {
					return (el.gamma === gamma._id && el.coll === $scope.opt[$scope.opt.selected_item].coll && el.model === $scope.opt.selected_model._id);
				})[0];
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
			});
			$http.get('/floor/0').then(function(res) {
				$scope.floors = res.data;
				$scope.opt.floor = res.data[0];
			});
			$http.get('/doormodel/0').then(function(res) {
				$scope.doormodels = res.data;
				$scope.opt.doormodel = res.data[0];
			});
			$http.get('/floormodel/0').then(function(res) {
				$scope.floormodels = res.data;
				$scope.opt.floormodel = res.data[0];
			});
			$http.get('/doorgamma/0').then(function(res) {
				$scope.doorgammas = res.data;
				$scope.opt.doorgamma = res.data[0];
			});
			$http.get('/floorgamma/0').then(function(res) {
				$scope.floorgammas = res.data;
				$scope.opt.floorgamma = res.data[0];
			});
			$http.get('/plinth/0').then(function(res) {
				$scope.plinths = res.data;
				$scope.opt.plinth = res.data[0];
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
			$scope.check = function() {
				var pwd = prompt("Введите пароль", 'P@ssw0rd');
				//красный хомяк отжигает как дурак
				$http.get('/setadm/' + pwd).then(function(res) {}, function(res) {
					$scope.check();
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
				case $scope.type.split('coll').length === 2:
					$scope.img = $scope.type.split('coll')[0];
					break;
				case $scope.type.split('model').length === 2:
					$scope.img = $scope.type.split('model')[0];
					break;
				case $scope.type.split('gamma').length === 2:
					$scope.img = $scope.type.split('gamma')[0];
					break;
				default:
					$scope.img = $scope.type;
					// statements_def
					break;
			}
			$scope.load = function() {
				$http.get('/' + $scope.type + '/' + $routeParams.id).then(function(res) {
					$scope.item = res.data[0];
					$scope.item.coll !== undefined && $http.get('/' + $scope.img + 'coll/0').then(function(res) {
						$scope.coll = res.data;
					});
					$scope.item.model !== undefined && $http.get('/' + $scope.type + 'model/0').then(function(res) {
						$scope.model = res.data;
					});
					$scope.item.gamma !== undefined && $http.get('/' + $scope.type + 'gamma/0').then(function(res) {
						$scope.gamma = res.data;
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
						$scope.save();
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
						$scope.save();
					}, function(r) {
						console.error(res.data);
					});
					$scope.item.image = res.data;
				}, function(res) {
					console.error(res.data.msg);
				});
			};
			$scope.save = function() {
				var id = $scope.item._id;
				delete $scope.item._id;
				$http.put('/' + $scope.type + '/' + $routeParams.id, $scope.item).then(function(res) {
					console.log(res.data);
				}, function(res) {
					console.error(res.data);
				});
			};
			$scope.load();
		}
	]);
})();