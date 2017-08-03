/**
 * Created by somrat on 8/3/17.
 */
myApp.controller('studentController', function($scope, $http) {
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

});