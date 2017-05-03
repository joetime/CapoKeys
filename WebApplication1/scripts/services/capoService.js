'use strict'
angular.module('capoApp.services').service('capoService', function () {
    var self = this;
    this.name = "Capo Keys";
    this.nameLength = function () {
        return self.name.length;
    }
});

