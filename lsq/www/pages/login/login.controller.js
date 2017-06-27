(function () {
    'use strict';
    angular.module('starter.controllers')
      .controller('LoginCtrl', ['$state', '$scope', 'LocalStorageService', '$ionicPopup',
        function ($state, $scope, LocalStorageService, $ionicPopup) {
        //使用对象实现双向绑定
        $scope.loginModel={
          username:'',
          password:''
        };

         var value = LocalStorageService.get('isLogin',{
           version:'1.0.0',
           isLogin:false
         });

        //点击登录按钮运行login()方法
        $scope.login =function () {
          console.log('username:',$scope.loginModel.username);
          console.log('password:',$scope.loginModel.password);

          var user = LocalStorageService.get('User',{
            username:'admin',
            password:'123456'
          });

          if($scope.loginModel.username == 'admin' &&
            $scope.loginModel.password=='123456'){
            value.isLogin = true;
            LocalStorageService.update('isLogin',value);
            $state.go("app.playlists");
          }else{
            $ionicPopup.alert({
              title:'警告',
              template:'您的用户名或者密码错误',
              okText:'确定',
              okType:'button-assertive'
            });
          }
        };

        }]);
})();
