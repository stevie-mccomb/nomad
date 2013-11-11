// Controllers

function SystemCtrl($scope) {
	$scope.getWidth = function() {
        return $(window).width();
    };
    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
        $scope.window_width = newValue;
    });
    window.onresize = function(){
        $scope.$apply();
    }
}