hrApp.controller('ColorController', ['$scope', function($scope) {
    $scope.Input1 = "";
    $scope.Input2 = "";

    $scope.colors = [
        {
            "text": "muted",
            "class": "text-muted",
            "type": "strong"
        },
        {
            "text": "primary",
            "class": "text-primary",
            "type": "strong"
        },
        {
            "text": "success",
            "class": "text-success",
            "type": "strong"
        },
        {
            "text": "info",
            "class": "text-info",
            "type": "boring"
        },
        {
            "text": "warning",
            "class": "text-warning",
            "type": "boring"
        },
        {
            "text": "danger",
            "class": "text-danger",
            "type": "boring"
        }
    ];

    $scope.chosenColor = $scope.colors[0];
    $scope.chosenColorClass = $scope.chosenColor.class;
    $scope.changeColor = function(){
        $scope.chosenColorClass = $scope.chosenColor.class;
    }

}]);
