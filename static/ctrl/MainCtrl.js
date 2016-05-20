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
				interior: 1,
				floor: 1,
				door: 1,
				room: 'bedroom'
			};
			$scope.image = $scope.opt.room + '.jpg';
			$scope.set_color = function(color) {
				$scope.color = color;
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