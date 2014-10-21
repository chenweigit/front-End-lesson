/**
 * Created by Administrator on 2014-10-20.
 */

var templatem  = angular.module('templateindex',[]);

templatem.controller('show',['$scope',function($scope){
    $scope.printInfo = function () {
         console.log('cscsc');
    }
}]);