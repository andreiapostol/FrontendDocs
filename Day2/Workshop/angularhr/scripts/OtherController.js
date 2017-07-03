hrApp.controller('OtherController', ['$rootScope', '$scope', function($rootScope, $scope) {
    $scope.title = "Titlu Copil";

    $scope.setTitle = function () {
        $scope.title = $scope.$parent.title;
    }
}]);