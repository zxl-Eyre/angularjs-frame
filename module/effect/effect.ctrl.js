/**
 * effect
 * @Author: zhangxuelian 
 * @Date: 2019-07-05 10:59:17 
 * @Last Modified by: zhangxuelian
 * @Last Modified time: 2019-07-05 10:59:44
 */
define(['app'],function(app){
    app.registerController('effectCtrl',['$scope',function($scope){
        $scope.test = "hello effect~";
    }])
})