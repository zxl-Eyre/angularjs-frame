/**
 * main
 * @Author: zhangxuelian 
 * @Date: 2019-07-04 14:44:14 
 * @Last Modified by: zhangxuelian
 * @Last Modified time: 2019-09-05 08:50:03
 */
require(['angular'],function(){

    require(['app'],function(){

        var main = angular.module('main',['app']);

        main.config([function(){
            // TODO
        }]);

        main.run([function(){
            // TODO
        }]);
        
        angular.element(document).ready(function () {
            angular.bootstrap(document, [main['name'], function () {
                angular.element(document).find('html').addClass('ng-app');
            }]);
        });

    });

});