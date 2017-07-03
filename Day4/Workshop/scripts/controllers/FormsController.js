hrApp.controller('FormsController', ['$scope', function($scope) {
    $scope.usertype = "";
    $scope.myForm = {};

    $scope.usertypeData = [];

    $scope.submitForm = function(){
        $scope.usertypeData.push($scope.usertype);
        $scope.myForm.$submitted = 1;
        console.log($scope.usertypeData);
    }
}]);
