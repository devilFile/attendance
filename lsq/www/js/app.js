// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','starter.directives','ngCordova','ngMessages'])



//自定义ionic-datepicker
  .config(function (ionicDatePickerProvider) {
    var datePickerObj = {
      inputDate: new Date(),
      titleLabel: 'Select a Date',
      setLabel: '选择',
      todayLabel: '今天',
      closeLabel: '关闭',
      mondayFirst: false,
      weeksList: ["日", "一", "二", "三", "四", "五", "六"],
      monthsList: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
      templateType: 'modal',
      from: new Date(2012, 8, 1),
      to: new Date(2018, 8, 1),
      showTodayButton: false,
      dateFormat: 'yyyy-MM-dd',
      closeOnSelect: false,
      disableWeekdays: []
    };
    ionicDatePickerProvider.configDatePicker(datePickerObj);
  })



  .run(['$ionicPlatform',function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  }])

  .config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'pages/menu/menu.html',
        controller: 'AppCtrl'
      })




      //教师首页
      .state('app.playlists', {
        url: '/playlists',
        views: {
          'menuContent': {
            templateUrl: 'pages/teacherPages/teacherHome/teacherHome.html',
            controller: 'PlaylistsCtrl'
          }
        }
      })




        /*
       //学生首页
       .state('app.playlists', {
       url: '/playlists',
       views: {
       'menuContent': {
       templateUrl: 'pages/studentPages/studentHome/studentHome.html',
       controller: 'PlaylistsCtrl'
       }
       }
       })
       */



      //引导页面
      .state('welcome',{
        url:'/welcome',
        templateUrl: 'pages/welcome/welcome.html',
        controller: 'WelcomeCtrl'
      })

      //主控页面:第一次运行进入引导页面，否则进入主页面
      .state('main',{
        url:'/',
        controller: 'MainCtrl'
      })



      //登录页面
      .state('login',{
        url:'/login',
        templateUrl: 'pages/login/login.html',
        controller: 'LoginCtrl'
      })




      //学生签到
      .state('signIn',{
        url:'/signIn',
        templateUrl: 'pages/studentPages/signIn/signIn.html',
        controller: 'signInCtrl'
      })

      //学生请假
      .state('askForLeave',{
        url:'/askForLeave',
        templateUrl: 'pages/studentPages/askForLeave/askForLeave.html',
        controller: 'askForLeaveCtrl'
      })

      //学生考勤汇总
      .state('studentAttendanceSheet',{
        url:'/studentAttendanceSheet',
        templateUrl: 'pages/studentPages/studentAttendanceSheet/studentAttendanceSheet.html',
        controller: 'studentAttendanceSheetCtrl'
      })

      //学生平时成绩
      .state('studentGrade',{
        url:'/studentGrade',
        templateUrl: 'pages/studentPages/studentGrade/studentGrade.html',
        controller: 'studentGradeCtrl'
      })




      //教师当前考勤
      .state('attendanceAtPresent',{
        url:'/attendanceAtPresent',
        templateUrl: 'pages/teacherPages/attendanceAtPresent/attendanceAtPresent.html',
        controller: 'AttendanceAtPresentCtrl'
      })

      //教师考勤统计
      .state('teacherAttendanceSheet',{
        url:'/teacherAttendanceSheet',
        templateUrl: 'pages/teacherPages/teacherAttendanceSheet/teacherAttendanceSheet.html',
        controller: 'TeacherAttendanceSheetCtrl'
      })


      //教师课堂抽问
      .state('askQuestion',{
        url:'/askQuestion',
        templateUrl: 'pages/teacherPages/askQuestion/askQuestion.html',
        controller: 'AskQuestionCtrl'
      })

      //教师课堂点名
      .state('askForAttendance',{
        url:'/askForAttendance',
        templateUrl: 'pages/teacherPages/askForAttendance/askForAttendance.html',
        controller: 'AskForAttendanceCtrl'
      })

      //教师成绩录入
      .state('scoreRecording',{
        url:'/scoreRecording',
        templateUrl: 'pages/teacherPages/scoreRecording/scoreRecording.html',
        controller: 'ScoreRecordingCtrl'
      })



      //设置
      .state('setting',{
        url:'/setting',
        templateUrl: 'pages/setting/setting.html',
        controller: 'SettingCtrl'
      })


      .state('app.search', {
        url: '/search',
        views: {
          'menuContent': {
            templateUrl: 'templates/search.html'
          }
        }
      })

      .state('app.browse', {
        url: '/browse',
        views: {
          'menuContent': {
            templateUrl: 'templates/browse.html'
          }
        }
      })


      .state('app.single', {
        url: '/playlists/:playlistId',
        views: {
          'menuContent': {
            templateUrl: 'templates/playlist.html',
            controller: 'PlaylistCtrl'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    //函数在没有任何路径被匹配的时候被运行-默认路径
    $urlRouterProvider.otherwise('/');
  });
