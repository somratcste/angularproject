/**
 * Created by somrat on 8/3/17.
 */
myApp.controller('studentController', function($scope, $http, $routeParams) {
    $scope.getStudents = function () {
        $http.get("../api/select.php")
        .then(function(response) {
            $scope.students = response.data;
        });
    };

    $scope.addStudent = function (info) {
        $http.post("../api/insert.php",info)
            .then(function(response) {
                window.location.href = 'http://angularproject.cste/#!/';
            });
    };

    $scope.showStudent = function () {
        var id = $routeParams.id;
        $http.post("../api/selectone.php?id="+id)
            .then(function(response) {
                var stu = response.data;
                $scope.student = stu[0];
            });
    };

    $scope.updateStudent = function (info) {
        $http.post("../api/update.php",info)
            .then(function(response) {
                window.location.href = 'http://angularproject.cste/#!/';
            });
    };

});