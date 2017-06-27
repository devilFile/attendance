/**
 * Created by Liu Shiqin on 2017/6/26.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('PlaylistsCtrl',['$scope', '$state', 'LocalStorageService', function ($scope, $state,LocalStorageService) {
      //判断用户是否登录过
      var value = LocalStorageService.get('isLogin',{
        version:'1.0.0',
        isLogin:false
      });
      //判断用户是否登录过$ionicView的生命周期的事件在每个ionicView的controller中使用,没实现！！！！
      $scope.$on('$ionicView.enter',function (event,data) {
        if(value.isLogin){
          $state.go('app.playlists');
        }else{
          $state.go('login');
        }
      });

    }]);
})();
