/**
 * work
 * @Author: zhangxuelian 
 * @Date: 2019-07-05 10:58:54 
 * @Last Modified by: zhangxuelian
 * @Last Modified time: 2019-09-05 10:02:20
 */
define(['app'],function(app){
    app.registerController('workCtrl',['$scope',function($scope){
        $scope.test = "hello work~";
    }])
})