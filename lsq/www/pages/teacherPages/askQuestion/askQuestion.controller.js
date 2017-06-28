/**
 * Created by Liu Shiqin on 2017/6/27.
 */

(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('AskQuestionCtrl', ['$scope','$state','$ionicHistory','CategoryService','$ionicActionSheet',
      '$ionicPopup' ,'$cordovaBarcodeScanner','$cordovaCamera','$cordovaImagePicker','$cordovaToast','$ionicModal',
      function ($scope,$state,$ionicHistory,CategoryService,$ionicActionSheet,$ionicPopup,$cordovaBarcodeScanner,$cordovaCamera,$cordovaImagePicker,$cordovaToast,$ionicModal) {
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


        $scope.studentList=[
          { StudentNo:1, Name: "张三" },
          { StudentNo:2, Name: "李四"  },
          { StudentNo:3, Name: "王五"},
          { StudentNo:4, Name: "赵六" }
        ];


        $scope.studentChoosen ={
          Name:''
        };

        $scope.changeStudentChoosen = function(x){
          console.log(x);
        };





        $ionicModal.fromTemplateUrl('setGradeModal.html', {
          scope: $scope
        }).then(function(modal) {
          $scope.modal = modal;
        });




      }]);
})();

 
