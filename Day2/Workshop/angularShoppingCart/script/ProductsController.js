employeesApp.controller('ProductsController', ['$scope', function($scope){
    $scope.title ="Something";
    $scope.productsList = [
        {
            label: "iPhone",
            price: "650",
            url: "images/iPhone.png"
        },

        {
            label: "BMW",
            price: "50000",
            url: "images/BMW.png"
        },
        {
            label: "Gnome",
            price: "2000",
            url: "images/gnome.png"
        },
        {
            label: "Ball",
            price: "3000",
            url: "images/ball.png"
        }
    ];



}]);
