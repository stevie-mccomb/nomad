var app = angular.module('Nomad', []);

// Directives
app.directive('starSystem', ['$window', function($window) {
	return {
		link: function(scope, elem) {
			scope.width = $window.innerWidth;
			scope.height = $window.innerHeight;
			scope.orientation = 'landscape';

			scope.cells = [];
			for (var i = 0; i < 150; ++i) {
				var cell = {
					id: i
				};
				scope.cells.push(cell);
			}

			scope.getCellSize = function() {
				return {
					'width': scope.cellSize,
					'height': scope.cellSize
				}
			};

			scope.adjustGrid = function() {
				// Determine the basis for the cell size:
				scope.gridBase = scope.width < scope.height ? scope.width : scope.height;
				// Set the size of the cells:
				scope.cellSize = Math.floor(scope.gridBase / 10);
			};

			// Adjust the grid size when the window resizes:
			angular.element($window).bind('resize', function() {
				scope.width = $window.innerWidth;
				scope.height = $window.innerHeight;
				scope.adjustGrid();
			});
		}
	}
}]);

app.directive('cell', [function() {
	return {
		link: function(scope, elem, attrs) {
			//scope.id = scope.cell.id;

		}
	}
}]);