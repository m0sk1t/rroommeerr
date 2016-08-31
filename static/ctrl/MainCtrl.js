(function() {
	angular.module('RROOMMEERR').controller('MainCtrl', ['$scope', '$http',
		function($scope, $http) {
			$scope.colors = ["#fb0009", "#feff01", "#00ff00", "#00fff8", "#0004ff", "#ff00ff", "#ffffff", "#ebebeb", "#e1e1e1", "#d7d7d7", "#cccccc", "#c5c1c2", "#b7b8bc", "#a0a09e", "#df011a", "#ffee0b", "#059b37", "#05a2e7", "#390687", "#d60386", "#85898a", "#7e7f7a", "#717075", "#645f63", "#4e4848", "#373632", "#111111", "#030002", "#eb9075", "#eaac83", "#f0cc7e", "#f9f499", "#cbe491", "#abdc9a", "#95c999", "#93ccc5", "#8ad0f2", "#90a8d8", "#9491ca", "#937bb7", "#a781b4", "#bd8bbc", "#eb94c7", "#eb93a1", "#e16040", "#e08b4b", "#f9ac50", "#fff366", "#bcd06f", "#8fc361", "#58b765", "#4fb9b5", "#4bb9f4", "#6085cc", "#6585be", "#6769b6", "#654c9f", "#6949ae", "#8b4e9e", "#8d4ba2", "#b14fa2", "#e45ca4", "#db6072", "#d80413", "#da5603", "#ee8d00", "#fdf300", "#95c718", "#5dae35", "#51ad28", "#009e39", "#049e9c", "#02a5e8", "#006ab8", "#233d9e", "#2c0c8b", "#630486", "#910083", "#d50388", "#e10255", "#9a000f", "#973c03", "#a33d0d", "#a06600", "#a1a300", "#67860f", "#317c15", "#006b27", "#036c67", "#0072a3", "#00437e", "#0b2967", "#22005e", "#4a005c", "#68005c", "#97015b", "#a0003b", "#710007", "#782600", "#722707", "#744800", "#817900", "#456208", "#1b5910", "#004f17", "#00504a", "#00527a", "#052b5c", "#011548", "#1a0041", "#37023a", "#72003e", "#71001b", "#c9bda7", "#aa927a", "#7a6256", "#7a615a", "#563f39", "#3d2a24", "#3b2925", "#c9a277", "#b47e50", "#995e3e", "#764920", "#bee", "#bac", "#cab", "#ca4", "ce4"];
			$scope.opt = {
				door: null,
				brand: null,
				floor: null,
				plinth: null,
				interior: null,

				doorcoll: null,
				doormodel: null,
				floorcoll: null,

				choose_door: false,
				choose_floor: false,
				choose_color: false,
				choose_interior: false,

				color: 'rgb(150,150,150)',
			};
			$scope.show_menu_items = function(item) {
				$scope.opt.choose_door = !1;
				$scope.opt.choose_floor = !1;
				$scope.opt.choose_color = !1;
				$scope.opt.choose_interior = !1;
				item && ($scope.opt[item] = !0);
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
			$scope.select_floor_image = function() {
				return $scope.opt.floor.images.filter(function(el) {
					return $scope.opt.interior._id === el.room;
				})[0].image;
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
				/*
				$scope.opt.door_brand = res.data[0]._id;
				$scope.opt.floor_brand = res.data[0]._id;
*/
				$http.get('/doorcoll/0').then(function(res) {
					$scope.doorcolls = res.data;
				});
				$http.get('/floorcoll/0').then(function(res) {
					$scope.floorcolls = res.data;
				});
				$http.get('/interior/0').then(function(res) {
					$scope.interiors = res.data;
					$scope.opt.interior = res.data[0];
				});
				$http.get('/door/0').then(function(res) {
					$scope.doors = res.data;
					//					$scope.opt.door = res.data[0];
				});
				$http.get('/floor/0').then(function(res) {
					$scope.floors = res.data;
					//					$scope.opt.floor = res.data[0];
				});
				$http.get('/doormodel/0').then(function(res) {
					$scope.doormodels = res.data;
				});
			});
		}
	]).controller('AdminCtrl', ['$scope', '$http', '$location',
		function($scope, $http, $location) {
			$scope.items = [];
			$scope.item_type = 'brand';
			$scope.auth = function() {
				var pwd = prompt("Введите пароль", 'P@ssw0rd');
				$http.get('/setadm/' + pwd).then(function(res) {}, function(res) {
					$scope.auth();
				});
			};
			$http.get('/check').then(function(res) {}, function(res) {
				$scope.auth();
			});
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
					$http.delete('/image/' + $scope.item_type + '/' + res.data.bg).then(function(r) {}, function(r) {});
					$http.delete('/image/' + $scope.item_type + '/' + res.data.image).then(function(r) {}, function(r) {});
					$scope.items = $scope.items.filter(function(item) {
						return item._id !== id;
					});
				}, function(res) {
					console.error(res.data);
				});
			};
			$scope.load();
		}
	]).controller('ItemCtrl', ['$scope', '$http', '$location', '$routeParams', 'Upload',
		function($scope, $http, $location, $routeParams, Upload) {
			$scope.item = {};
			$scope.room = {
				_id: null,
				index: null
			};
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
					$scope.item.images !== undefined && $http.get('/interior/0').then(function(res) {
						$scope.rooms = res.data;
					});
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
				$http.post('/image/' + $scope.img, data, {
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
			$scope.image = function(files) {
				if (files && files.length) {
					for (var i = 0; i < files.length; i++) {
						(function(index) {
							Upload.upload({
								url: '/image/' + $scope.img,
								data: {
									file: files[index]
								}
							}).then(function(res) {
								$scope.item.image && $scope.item.image !== res.data && $http.delete('/image/' + $scope.img + '/' + $scope.item.image).then(function(r) {
									$scope.item.image = res.data;
									$scope.save(0);
								}, function(r) {
									console.error(res.data);
								});
								$scope.item.image = res.data;
							});
						})(i);
					}
				}
			};
			$scope.room_image = function(files) {
				if (files && files.length) {
					for (var i = 0; i < files.length; i++) {
						(function(ind) {
							Upload.upload({
								url: '/image/' + $scope.img,
								data: {
									file: files[ind]
								}
							}).then(function(res) {
								$scope.item.images[$scope.room.index] && $scope.item.images[$scope.room.index].image && $scope.item.images[$scope.room.index].image !== res.data && $http.delete('/image/' + $scope.img + '/' + $scope.item.images[$scope.room.index].image).then(function(r) {
									$scope.item.images[$scope.room.index] = {
										room: $scope.room._id,
										image: res.data
									};
									$scope.save(0);
									$scope.room = {};
								}, function(r) {
									console.error(res.data);
								});
								$scope.item.images[$scope.room.index] = {
									room: $scope.room._id,
									image: res.data
								};
								$scope.room = {};
								$scope.save(0);
							});
						})(i);
					}
				}
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
