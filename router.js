/**
 * router
 * @Author: zhangxuelian 
 * @Date: 2019-07-05 09:24:12 
 * @Last Modified by: zhangxuelian
 * @Last Modified time: 2019-09-05 10:08:56
 */
define(['angular-couch-potato','angular-ui-router'],function(){
    var router = angular.module('router',['scs.couch-potato','ui.router']);
    router.config(['$stateProvider','$couchPotatoProvider',function($stateProvider,$couchPotatoProvider){
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'module/home.tpl.html',
            controller: 'homeCtrl',
            resolve: {
                dummy: $couchPotatoProvider.resolveDependencies(['module/home.ctrl.js'])
            }
        });
        $stateProvider.state('home.map', {
            url: '/map',
            templateUrl: 'module/map/map.tpl.html',
            controller: 'mapCtrl',
            resolve: {
                dummy: $couchPotatoProvider.resolveDependencies(['module/map/map.ctrl.js'])
            }
        });
        $stateProvider.state('home.work', {
            url: '/work',
            templateUrl: 'module/work/work.tpl.html',
            controller: 'workCtrl',
            resolve: {
                dummy: $couchPotatoProvider.resolveDependencies(['module/work/work.ctrl.js'])
            }
        });
        $stateProvider.state('home.case', {
            url: '/case',
            templateUrl: 'module/case/case.tpl.html',
            controller: 'caseCtrl',
            resolve: {
                dummy: $couchPotatoProvider.resolveDependencies(['module/case/case.ctrl.js'])
            }
        });
        $stateProvider.state('home.effect', {
            url: '/effect',
            templateUrl: 'module/effect/effect.tpl.html',
            controller: 'effectCtrl',
            resolve: {
                dummy: $couchPotatoProvider.resolveDependencies(['module/effect/effect.ctrl.js'])
            }
        });
    }]);
});