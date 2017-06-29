/**
 * Created by Liu Shiqin on 2017/6/26.
 */

(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('studentGradeCtrl', ['$scope','$state','$ionicHistory','CategoryService','$ionicActionSheet','$ionicPopup' ,'$cordovaBarcodeScanner','$cordovaCamera','$cordovaImagePicker','$cordovaToast',
      function ($scope,$state,$ionicHistory,CategoryService,$ionicActionSheet,$ionicPopup,$cordovaBarcodeScanner,$cordovaCamera,$cordovaImagePicker,$cordovaToast) {
        $scope.goBack = function () {
          $ionicHistory.nextViewOptions({
            disableAnimate: true,//disableAnimate: true,
            disableBack: true // The next view should forget its back view, and set it to null.
          });
          $state.go('app.playlists');
          //$ionicHistory.goBack();
        }


        //课程信息
        $scope.teacherAttendanceSheetCourse = [];

        $scope.teacherAttendanceSheetCourse[0] = {
          courseNo: 1,
          courseName: '云计算',
          courseNumber: 10,
          //attendanceDetail:[]
        }

        $scope.teacherAttendanceSheetCourse[1] = {
          courseNo: 2,
          courseName: 'Web智能',
          courseNumber: 5,
          //attendanceDetail:[]
        }

        $scope.teacherAttendanceSheetCourse[2] = {
          courseNo: 3,
          courseName: '工程实践',
          courseNumber: 8,
          //attendanceDetail:[]
        }


        //选中的课程
        $scope.courseChoosen = '';

        $scope.changeCourseChoosen = function (x) {
          console.log(x);
        };


        //成绩数据
        $scope.studentScoreInfo = [];

        for (var i = 0; i < 10; i++)
        {
          $scope.studentScoreInfo[i] = {
            ClassNo: "第"+(i+1)+"次课",
            AnswerScore:i+1,
            AssignmentScore:i+2,
          };
        }


        //更新
        $scope.changeSubmit = function(x){
          console.log(x);
        };



        $scope.save = function () {
          //$cordovaToast.showLongBottom('用户名不能为空');
          $cordovaToast.show('用户名不能为空','long','center');
        };





      }]);
})();
