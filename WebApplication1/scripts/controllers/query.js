'use strict';
angular.module('capoApp.controllers').controller('QueryCtrl', ['$scope', '$log', 'capoService', function ($scope, $log, mainService) {
    $scope.name1 = mainService.name;
    $log.info($scope.name1);
}]);
