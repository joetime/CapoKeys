'use strict';

var capoApp = angular.module('capoApp', ['capoApp.controllers', 'capoApp.services', 'ngRoute']);

angular.module('capoApp.controllers', []);
angular.module('capoApp.services', []);

capoApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'QueryCtrl'
    });
    $routeProvider.when('/view2', {
        templateUrl: 'view2/view2.html',
        controller: 'ResultCtrl'
    });
    $routeProvider.otherwise({ redirectTo: '/view1' });
}]);
