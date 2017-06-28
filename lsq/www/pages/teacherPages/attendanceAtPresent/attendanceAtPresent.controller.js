/**
 * Created by Liu Shiqin on 2017/6/26.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('AttendanceAtPresentCtrl', ['$scope','$state','$ionicHistory','CategoryService','$ionicActionSheet','$ionicPopup' ,'$cordovaBarcodeScanner','$cordovaCamera','$cordovaImagePicker','$cordovaToast',
      function ($scope,$state,$ionicHistory,CategoryService,$ionicActionSheet,$ionicPopup,$cordovaBarcodeScanner,$cordovaCamera,$cordovaImagePicker,$cordovaToast) {
        $scope.goBack=function () {
          $ionicHistory.nextViewOptions({
            disableAnimate: true,//disableAnimate: true,
            disableBack:true // The next view should forget its back view, and set it to null.
          });
          $state.go('app.playlists');
          //$ionicHistory.goBack();
        }


        //课程信息
        $scope.courseInfo={
          name: '工程实训',
          time: '星期六 1-6节',
          classroom: '东3 - 402 '
        };

        //签到信息
        $scope.attendanceAtPresentInfo=[];

        for(var i=0; i<10; i++)
        {
          $scope.attendanceAtPresentInfo[i] = {
            No:10000+i,
            Name:'张三'+i,
            Class:'2016计算机1',
            SignInTime:new Date()
          }
        }

        //未签到信息
        $scope.absentAtPresentInfo=[];

        for(var i=0; i<10; i++)
        {
          $scope.absentAtPresentInfo[i] = {
            No:10000+10+i,
            Name:'李四'+i,
            Class:'2016计算机2',
            SignInStatus:'未签到'
          }
        }
















        $scope.signInFunction = function () {

        };


      }]);
})();
