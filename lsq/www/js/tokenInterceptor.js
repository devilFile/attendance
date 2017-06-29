/**
 * Created by xiangsong on 2017/6/12.
 */
(function () {
  'use strict';
  angular.module('starter.services')
    .factory('TokenInterceptor',['LocalStorageService',function (LocalStorageService) {
      return {
        request: function(config){
          config.headers = config.headers || {};
          config.headers["MD5Key"] = LocalStorageService.get("MD5Key","-1");

          return config;
        },
        responseError: function(response){
        }
      };
    }]);
})();
