employeesApp.controller('ShoppingCartController', ['$scope', function($scope){
    $scope.title ="Something";
    $scope.productsInCart = [];
    $scope.addToCart = function(product) {
        $scope.productsInCart.push(product);
    }

}]);
