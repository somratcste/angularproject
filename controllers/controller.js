/**
 * Created by somrat on 8/3/17.
 */
myApp.controller('studentController', function($scope) {
    $scope.getStudents = function () {
        $scope.students = [ {name:'sormat','name':'akash'}];
    }
});