(function() {
	angular.module('RROOMMEERR').controller('MainCtrl', ['$scope', '$http',
		function($scope, $http) {
			$scope.loading = false;
			$scope.colors = [{
				r: 10,
				g: 20,
				b: 50,
			}, {
				r: 30,
				g: 10,
				b: 150,
			}, {
				r: 100,
				g: 15,
				b: 35,
			}, {
				r: 50,
				g: 130,
				b: 20,
			}, {
				r: 100,
				g: 120,
				b: 210,
			}, {
				r: 60,
				g: 120,
				b: 30,
			}];
			$scope.opt = {
				r: 10,
				g: 10,
				b: 10,
				plinth: 1,
				interior: 1,
				laminate: 1,
				doortype: 1,
				room: 'bedroom'
			};
			$scope.image = $scope.opt.room + '.jpg';
			$scope.set_color = function(color) {
				$scope.opt.r = color.r;
				$scope.opt.g = color.g;
				$scope.opt.b = color.b;
				$scope.make_room();
			}
			$scope.make_room = function() {
				$scope.loading = true;
				$http.post('/room', $scope.opt).then(function(res) {
					$scope.loading = false;
					$scope.image = res.data;
				}, function(res) {
					$scope.loading = false;
					alert(res.data);
				});
			}
		}
	]);
})();