hrApp.controller('DescriptionController', ['$rootScope', '$scope', function($rootScope, $scope){
    $scope.title = 'Two way Binding Demo';
    $scope.childtemplate = 'templates/childscope.html';
    $scope.restFirstVariable = function() {
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function (val) {
        $scope.firstVariable = val;
    };
    $scope.descriptionShow = 0;

    $scope.toggleDescriptionShow = function () {
        if ($scope.descriptionShow == 0) $scope.descriptionShow = 1;
        else $scope.descriptionShow = 0;

    }


}]);
