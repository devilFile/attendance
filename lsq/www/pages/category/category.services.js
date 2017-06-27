/** service实现多个页面共享数据 **/
(function () {
    'use strict';
    angular.module('starter.services')
        .factory('CategoryService', function ($rootScope) {
            var service = {};
            service.activeCategory={};
          service.updateCategory = function (value) {
            this.activeCategory = angular.copy(value);
            $rootScope.$broadcast('CategoryUpdate');//广播
          };
            return service;
        });
})();
