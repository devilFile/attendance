/**
 * Created by Liu Shiqin on 2017/6/26.
 */
(function () {
  'use strict';
  angular.module('starter.controllers' )
    .controller('askForLeaveCtrl', ['$scope','$state','$ionicHistory','CategoryService','$ionicActionSheet','$ionicPopup' ,'$cordovaBarcodeScanner','$cordovaCamera','$cordovaImagePicker',
      '$cordovaToast',
      function ($scope,$state,$ionicHistory,CategoryService,$ionicActionSheet,$ionicPopup,$ionicModal ) {

        $scope.goBack=function () {
          $ionicHistory.nextViewOptions({
            disableAnimate: true,//disableAnimate: true,
            disableBack:true // The next view should forget its back view, and set it to null.
          });
          $state.go('app.playlists');
          //$ionicHistory.goBack();
        }


        $ionicModal.fromTemplateUrl('templates/modal.html', {
          scope: $scope
        }).then(function(modal) {
          $scope.modal = modal;
        });

        $ionicModal.fromTemplateUrl('pages/datepicker/ionic-datepicker-modal.html', {
          scope: $scope
        }).then(function(modal) {
          $scope.modal = modal;
        })


        //请假表模型
        $scope.askForLeaveInfo ={
          type:'',
          date:'',
          course:'',
          reason:''
        }



        //请假类型
        $scope.LeaveType = [
          {text:'请选择'},
          {text:'事假'},
          {text:'病假'},
          {text:'其它'}
        ];


        //
        // 从后台抽取出列表后用一个for循环替代它
        $scope.CourseType = [
          {text:'请选择'},
          {text:'工程实训'},
          {text:'Web智能'},
          {text:'云计算'},
          {text:'智能技术'}
        ];



        $scope.chooseLeaveType = function() {

          var hideSheet = $ionicActionSheet.show({
            buttons: [
              { text: '事假' },
              { text: '病假' },
              { text: '其它'}
            ],

            cancelText: '取消',
            cancel: function() {
              // add cancel code..
            },
            buttonClicked: function(index) {
              return true;
            }
          });

        };


        $scope.submitLeaveForm = function () {

        };





      }]);
})();
