// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','starter.directives','ngCordova','ngMessages'])





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
    templateUrl: 'pages/studentPages/studentHome/studentHome.html',
    controller: 'AppCtrl'
  })

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
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'pages/home/home.html',
          controller: 'PlaylistsCtrl'
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
