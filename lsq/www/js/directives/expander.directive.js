/**
 * 自定义指令:directive
 */
(function () {
    'use strict';
    angular.module('starter.directives')
        .directive('expanderDirective', function () {
            return{
              restrict:'E'
              //,replace:true
              ,template:'<div ng-show="show" ></div>\
              <button class="button button-clear icon-left button-positive margin-left"\
               ng-class="{\'ion-plus-circle\':!show,\'ion-minus-circle\':show}"\
               ng-click="toggle()">{{title}}</button>'
              ,link:function (scope,element,attrs) {
                scope.showAndHide = false;
                scope.title = '完善更多消息';
                scope.toggle = function () {
                   scope.show = !scope.show;
                  if(scope.show){
                    scope.title = '收起';
                  }else{
                    scope.title = '完善更多消息';
                  }
                };
              }
            };

        });
})();
