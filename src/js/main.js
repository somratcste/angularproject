/**
 * Created by somrat on 4/16/17.
 */

var myApp = angular
                .module('myModule', [])
                .controller('myController' , function ($scope) {
                    var country = {
                        name: 'Bangladesh'
                    };

                    $scope.country = country;
                });
