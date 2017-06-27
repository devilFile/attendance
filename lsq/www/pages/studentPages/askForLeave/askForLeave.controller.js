/**
 * Created by Liu Shiqin on 2017/6/26.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('askForLeaveCtrl', ['$scope','$state','$ionicHistory','CategoryService','$ionicActionSheet','$ionicPopup' ,'$cordovaBarcodeScanner','$cordovaCamera','$cordovaImagePicker','$cordovaToast',
      function ($scope,$state,$ionicHistory,CategoryService,$ionicActionSheet,$ionicPopup,$cordovaBarcodeScanner,$cordovaCamera,$cordovaImagePicker,$cordovaToast) {
        $scope.goBack=function () {
          $ionicHistory.nextViewOptions({
            disableAnimate: true,//disableAnimate: true,
            disableBack:true // The next view should forget its back view, and set it to null.
          });
          $state.go('app.playlists');
          //$ionicHistory.goBack();
        }

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
