/**
 * Created by Alina.Petrescu on 6/28/2017.
 */
page2.controller('OperationsController', ['$rootScope', '$scope', function($rootScope, $scope){
    $scope.firstNumber = 0;
    $scope.secondNumber = 0;

    $scope.doCalc = function () {
        $scope.fieldsSum = $scope.firstNumber + $scope.secondNumber;
        $scope.fieldsSubstraction = $scope.firstNumber - $scope.secondNumber;
        $scope.fieldsProduct = $scope.firstNumber * $scope.secondNumber;
        $scope.fieldsDivision = $scope.firstNumber / $scope.secondNumber;
    }
}]);