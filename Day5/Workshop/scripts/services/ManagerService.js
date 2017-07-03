hrApp.service('ManagerService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findManagers: function () {
                return $http.get(CommonResourcesFactory.findAllEmployeesUrl)
                    .success(function (data) {

                        return data;

                        // var managers = [];
                        // isManagerValid = 0;
                        // for (i in data) {
                        //     if (data[i].managerId) {
                        //         var isValid = 1;
                        //         for (j in managers) if (managers[j] === data[i].managerId) isValid = 0;
                        //         if (isValid) managers.push(data[i].managerId);
                        //     }
                        // }
                        // return managers;
                    })
                    .error(function (err) {
                        return {
                            "id": 100,
                            "firstName": "Steven",
                            "lastName": "King",
                            "email": "SKING",
                            "phoneNumber": "515.123.4567",
                            "hireDate": "1987-06-17",
                            "jobId": 1,
                            "salary": 24000.00,
                            "commissionPct": null,
                            "managerId": null,
                            "departmentId": 90
                        };
                    });
            }
        }
    }]
);