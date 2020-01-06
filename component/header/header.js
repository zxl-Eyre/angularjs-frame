/**
 * header
 * @Author: zhangxuelian 
 * @Date: 2019-09-05 09:31:07 
 * @Last Modified by: zhangxuelian
 * @Last Modified time: 2019-09-05 10:06:52
 */
define([],function(){
    angular.module('component.header',[]).directive('header',function(){
        return {
            restrict: 'E',
            replace: true,
            scope: {
                headerConfig : '='
            },
            templateUrl: 'component/header/header.html',
            link: function(scope,ele,attrs){
                var defaultConfig = {
                    activeId: 0,
                    items: [{
                        id: 0,
                        name: '首页'
                    }],
                    clickCallback: function(){

                    }
                };
                scope.headerConfig = angular.extend(defaultConfig,scope.headerConfig || {});
                scope.clickCallback = function(item){
                    scope.headerConfig.activeId = item.id;
                    if(scope.headerConfig.clickCallback){
                        scope.headerConfig.clickCallback(item);
                    }
                }
            }
        }
    })
})