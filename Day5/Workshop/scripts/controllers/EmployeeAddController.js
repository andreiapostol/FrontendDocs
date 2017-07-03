hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactory',
    'JobsService', 'DepartmentsService', 'ManagerService', 'EmployeeService',
    function($scope, $http, $location, CommonResourcesFactory, JobsService, DepartmentsService, ManagerService, EmployeeService) {
        $scope.employee = {};
        $scope.employeeAddForm = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR1

        /**
         * Reset form
         */
        $scope.reset = function () {
            this.employee = {};
        };
        $scope.employees = [];
        $scope.departments = [];
        $scope.jobs = [];
        $scope.managers = [];
        var testManager = [];
        // $scope.departments = DepartmentsService.findDepartments();
        // $scope.managers = ManagerService.findManagers();
        // $scope.jobs = JobsService.findJobs();

        DepartmentsService.findDepartments()
            .then(function (res) {
                $scope.departments = res.data;
            }, function (err) {
                console.log("Error at departments service: " + err);
            });

        JobsService.findJobs()
            .then(function (res) {
                $scope.jobs = res.data;
            }, function (err) {
                console.log("Error at jobs service: " + err);
            });

        ManagerService.findManagers()
            .then(function (res) {
                $scope.employees = res.data;
                for(i in $scope.employees){
                    if(($scope.employees[i].managerId != null) && (testManager.indexOf($scope.employees[i].managerId.employeeId) == -1))
                        testManager.push($scope.employees[i].managerId.employeeId);
                }
                for (i in $scope.employees){
                    if(testManager.indexOf($scope.employees[i].employeeId)!=-1)
                        $scope.managers.push($scope.employees[i]);
                }
            }, function (err) {
                console.log("Error at manager service: " + err);
            });
        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactory.addEmployeeUrl, method: 'POST', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.reset = function (){
            $scope.employee = {};
            console.log("Functia merge");
        };

        $scope.save = function (){
            EmployeeService.addNewEmployee($scope.employee);
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
}]);