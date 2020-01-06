/**
 * 3Dmap
 * @Author: zhangxuelian 
 * @Date: 2019-09-05 10:03:02 
 * @Last Modified by: zhangxuelian
 * @Last Modified time: 2019-09-05 10:08:14
 */
define(['app'],function(app){
    app.registerController('mapCtrl',['$scope',function($scope){
        $scope.test = "hello map~";
    }])
})