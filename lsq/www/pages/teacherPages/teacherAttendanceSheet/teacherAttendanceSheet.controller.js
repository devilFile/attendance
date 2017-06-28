/**
 * Created by Liu Shiqin on 2017/6/27.
 */
/**
 * Created by Liu Shiqin on 2017/6/26.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('TeacherAttendanceSheetCtrl', ['$scope','$state','$ionicHistory','CategoryService','$ionicActionSheet','$ionicPopup' ,'$cordovaBarcodeScanner','$cordovaCamera','$cordovaImagePicker','$cordovaToast',
      function ($scope,$state,$ionicHistory,CategoryService,$ionicActionSheet,$ionicPopup,$cordovaBarcodeScanner,$cordovaCamera,$cordovaImagePicker,$cordovaToast) {
        $scope.goBack=function () {
          $ionicHistory.nextViewOptions({
            disableAnimate: true,//disableAnimate: true,
            disableBack:true // The next view should forget its back view, and set it to null.
          });
          $state.go('app.playlists');
          //$ionicHistory.goBack();
        }


        /**
         * $scope.groups = [];
         for (var i=0; i<10; i++) {
          $scope.groups[i] = {
            name: i,
            items: [],
            show: false
          };
          for (var j=0; j<3; j++) {
            $scope.groups[i].items.push(i + '-' + j);
          }
        }


         $scope.toggleGroup = function(group) {
          group.show = !group.show;
        };
         $scope.isGroupShown = function(group) {
          return group.show;
        };

         **/

        //老师考勤统计数据

        //课程信息
        $scope.teacherAttendanceSheetCourse =[];

        $scope.teacherAttendanceSheetCourse[0] = {
          courseNo:1,
          courseName:'云计算',
          courseNumber:10,
          //attendanceDetail:[]
        }

        $scope.teacherAttendanceSheetCourse[1] = {
          courseNo:2,
          courseName:'Web智能',
          courseNumber:5,
          //attendanceDetail:[]
        }

        $scope.teacherAttendanceSheetCourse[2] = {
          courseNo:3,
          courseName:'工程实践',
          courseNumber:8,
          //attendanceDetail:[]
        }


        //课程考勤信息
       $scope.teacherAttendanceSheetDetail = [];


        for(var i=0; i<3; i++)
        {
          $scope.teacherAttendanceSheetDetail[i]={
             ordinal:i+1,
             time:new Date(),
             leaveNumber:i+2,
             absentNumber:i,
             lateNumber:i
          };
        }


        /*
         * if given group is the selected group, deselect it
         * else, select the given group
         */
        $scope.toggleTeacherAttendanceSheetDetail= function(x) {
          x.show = !x.show;
        };
        $scope.isTeacherAttendanceSheetDetailShown = function(x) {
          return x.show;
        };


        //选中的课程
        $scope.courseChoosen ='';

        $scope.changeCourseChoosen = function(x){
          console.log(x);
        };



        //请假数据
        $scope.leaveData= {
          number: 5,
          items: [],
          show: false
        };

        $scope.leaveData.items[0] = {

          date: '2017-06-27',
          weekDay: '星期二',
          time: '08:30',
          courseName: '工程实践'
        };

        $scope.leaveData.items[1] = {

          date: '2017-06-27',
          weekDay: '星期二',
          time: '08:30',
          courseName: '工程实践'
        };

        /*
         * if given group is the selected group, deselect it
         * else, select the given group
         */
        $scope.toggleLeaveData = function(leaveData) {
          leaveData.show = !leaveData.show;
        };
        $scope.isLeaveDataShown = function(leaveData) {
          return leaveData.show;
        };


        //旷课数据
        $scope.absentData= {
          number: 3,
          items: [],
          show: false
        };

        $scope.absentData.items[0] = {

          date: '2017-06-27',
          weekDay: '星期二',
          time: '08:30',
          courseName: '工程实践'
        };

        $scope.absentData.items[1] = {

          date: '2017-06-27',
          weekDay: '星期二',
          time: '08:30',
          courseName: '工程实践'
        };

        $scope.absentData.items[2] = {

          date: '2017-06-27',
          weekDay: '星期二',
          time: '08:30',
          courseName: '工程实践'
        };

        /*
         * if given group is the selected group, deselect it
         * else, select the given group
         */
        $scope.toggleabsentData = function(absentData) {
          absentData.show = !absentData.show;
        };
        $scope.isabsentDataShown = function(absentData) {
          return absentData.show;
        };











        //请假表模型，用于双向绑定
        $scope.LeaveForm={
          Type:''
          ,Date:''
          ,Lesson:''
          ,Reason:''
        }





        $scope.save = function () {
          //$cordovaToast.showLongBottom('用户名不能为空');
          $cordovaToast.show('用户名不能为空','long','center');
        };





      }]);
})();
