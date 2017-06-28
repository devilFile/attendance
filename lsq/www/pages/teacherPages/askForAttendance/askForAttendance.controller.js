/**
 * Created by Liu Shiqin on 2017/6/27.
 */

(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('AskForAttendanceCtrl', ['$scope','$state','$ionicHistory','CategoryService','$ionicActionSheet','$ionicPopup' ,'$cordovaBarcodeScanner','$cordovaCamera','$cordovaImagePicker','$cordovaToast',
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
        $scope.courseInfo_1={
          name: '工程实训',
          time: '星期六 1-6节',
          classroom: '东3 - 402 '
        };


        $scope.studentList_1=[
          { StudentNo:1, Name: "张三" },
          { StudentNo:2, Name: "李四"  },
          { StudentNo:3, Name: "王五"},
          { StudentNo:4, Name: "赵六" }
        ];


        $scope.studentChoosen_1 ={
          Name:''
        };

        $scope.changeStudentChoosen_1 = function(x){
          console.log(x);
        };







      }]);
})();
