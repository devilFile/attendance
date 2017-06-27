/**
 * Created by Liu Shiqin on 2017/6/26.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('signInCtrl', ['$scope','$state','$ionicHistory','CategoryService','$ionicActionSheet','$ionicPopup' ,'$cordovaBarcodeScanner','$cordovaCamera','$cordovaImagePicker','$cordovaToast',
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





        //教室座位图
        $scope.seatInfo={
          number:20,
          seats:[]
        };


        for(var i=0; i<5; i++)
        {
          if(i%2==0){
            $scope.seatInfo.seats[i] = {
              i:i,
              occupied:false,
              imgProfile:'seat_not_occupied.png'
            }
          }
          else {
            $scope.seatInfo.seats[i] = {
              i:i,
              occupied:true,
              imgProfile:'seat_occupied.png'
            }
          }
        }






        // 签到
        $scope.timeline = [{
          date: new Date(),
          title: "签到时间：",
          status: "正常",
          type: "location"

        }, {
          date: new Date(),
          title: "签到时间：",
          status: "未签到",
          type: "location"
        }]




        $scope.signInFunction = function () {
          
        };


      }]);
})();
