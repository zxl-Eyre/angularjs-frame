/**
 * app
 * @Author: zhangxuelian 
 * @Date: 2019-07-04 17:36:44 
 * @Last Modified by: zhangxuelian
 * @Last Modified time: 2019-09-05 09:52:42
 */
define(['angular-couch-potato','angular-shiro','router','security','component/component'], function(couchPotato) {

    var app = angular.module('app',['scs.couch-potato','router','security','component']);

    //懒加载配置module（注册该模块,其控制器等可按需加载）
    couchPotato.configureApp(app);

    app.config(['$urlRouterProvider',function($urlRouterProvider){
        //监控$location,非法路由跳转
        $urlRouterProvider.otherwise('home');
    }]);
    
    app.run(['$couchPotato','$rootScope',function($couchPotato,$rootScope){
        app.lazy = $couchPotato;
        //监听路由跳转
        $rootScope.$on('$routeChangeStart', function(event, toState, toParams, fromState, fromParams) {
            //判断用户是否登录
            //路由变化的其他设置
        });
    }]);
    
    return app;
});