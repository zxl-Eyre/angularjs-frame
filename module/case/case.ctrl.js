/**
 * case
 * @Author: zhangxuelian 
 * @Date: 2019-07-05 10:59:51 
 * @Last Modified by:   zhangxuelian 
 * @Last Modified time: 2019-07-05 10:59:51 
 */
define(['app'],function(app){
    app.registerController('caseCtrl',['$scope',function($scope){
        $scope.test = "hello case~";
    }])
})