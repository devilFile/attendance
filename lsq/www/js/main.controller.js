/**
 * 应用程序入口，无需对应的页面
 * 第一次运行进入引导页，否则进入登录页
 */
(function () {
    'use strict';
  var APP_KEY = 'App';//全局常量
    angular.module('starter.controllers')
        .controller('MainCtrl',['$scope','LocalStorageService','$state',
            function ($scope,LocalStorageService,$state) {

        var value = LocalStorageService.get('App',{
          version:'1.0.0',
          run:false
        });
          if(value.run){
            $state.go('app.playlists');
          }else{
            value.run = true;
            LocalStorageService.update('App',value);
            $state.go('welcome');
          }
        }]);
})();
