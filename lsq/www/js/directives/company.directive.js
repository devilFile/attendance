/**
 * 自定义指令:directive
 */
(function () {
    'use strict';
    angular.module('starter.directives')
        .directive('companyDirective', function () {
            return{
              restrict:'E'
              ,replace:true
              ,template:'<div style="position: absolute;bottom: 0px;width: 100%;height: 44px;text-align: center;">\
              <h6>@考勤专家-2017</h6>\
              </div>'
              ,scope:{
                bottom:'@'
              }
            };

        });
})();
