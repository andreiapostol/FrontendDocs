employeesApp.controller('MenuController', ['$scope', function($scope){
    $scope.title ="Something";
    $scope.employeesList = [
        {
            label: "List employees",
            url: "demomath.html"
        }
    ];

    $scope.demoActionsList = [
        {
            label: "Shopping cart",
            url: "shoppingcart.html"
        }
    ]


}]);
