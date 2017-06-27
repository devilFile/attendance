(function () {
    'use strict';
    angular.module('starter.controllers')
        .controller('SettingCtrl',['$scope', '$ionicHistory', '$state','LocalStorageService', '$ionicPopup',
          function ($scope, $ionicHistory, $state,LocalStorageService,$ionicPopup) {
            $scope.goBack = function () {
              $ionicHistory.nextViewOptions({
                disableAnimate: true,//disableAnimate: true,
                disableBack:true // The next view should forget its back view, and set it to null.
              })
              $state.go('app.playlists');
            }

          $scope.logout=function () {
            $state.go('login');
           var obj = LocalStorageService.get('IsLogin');
            obj.isLogin = false;
            LocalStorageService.update('IsLogin',obj);

          }

        }]);
})();
