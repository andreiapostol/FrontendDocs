hrApp.controller('UserController', ['$scope', '$location', '$window', 'userDetails', function($scope, $location, $window, userDetails){
    $scope.toShow = 1;
    $scope.user = {};

    $scope.back = function() {
        $window.history.back();
    };


    $scope.save = function () {

        userDetails.push(angular.copy($scope.user));
        $scope.users = userDetails;
        $window.alert('User adaugat!');
        $scope.reset();

    };

    $scope.reset = function () {
        $scope.user.firstName = "";
        $scope.user.lastName = "";
        $scope.user.cnp = "";
        $scope.user.age = "";
    };

    $scope.showhideUserList = function () {
        if($scope.toShow == 1) $scope.toShow = 0;
        else $scope.toShow = 1;
    };

}]);
