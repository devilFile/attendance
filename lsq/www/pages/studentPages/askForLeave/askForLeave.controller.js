/**
 * Created by Liu Shiqin on 2017/6/26.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('askForLeaveCtrl',
      function ($scope,$state,$ionicHistory,ionicDatePicker,$ionicPopup) {

        $scope.goBack=function () {
          $ionicHistory.nextViewOptions({
            disableAnimate: true,//disableAnimate: true,
            disableBack:true // The next view should forget its back view, and set it to null.
          });
          $state.go('app.playlists');
          //$ionicHistory.goBack();
        };



        /*
        $ionicModal.fromTemplateUrl('pages/datepicker/ionic-datepicker-modal.html', {
          scope: $scope
        }).then(function(modal) {
          $scope.modal = modal;
        })
        */

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



        //时间控件
        $scope.selectedDate1;
        $scope.openDatePickerOne = function (val) {
          var ipObj1 = {
            callback: function (val) {  //Mandatory
              console.log('Return value from the datepicker popup is : ' + val, new Date(val));
              $scope.selectedDate1 = new Date(val);
            },
            disabledDates: [
              new Date(2016, 2, 16),
              new Date(2015, 3, 16),
              new Date(2015, 4, 16),
              new Date(2015, 5, 16),
              new Date('Wednesday, August 12, 2015'),
              new Date("08-16-2016"),
              new Date(1439676000000)
            ],
            from: new Date(2012, 1, 1),
            to: new Date(2018, 10, 30),
            inputDate: new Date(),
            mondayFirst: true,
            disableWeekdays: [],
            closeOnSelect: false,
            templateType: 'popup'
          };
          ionicDatePicker.openDatePicker(ipObj1);
        };


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


        //请假函数
        $scope.askForLeaveFunction = function () {
          $ionicPopup.alert({
            title:'你的申请已提交',
            okText:'确定',
            okType:'button-positive'
          });
        };





      });
})();
