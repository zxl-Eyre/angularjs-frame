/**
 * home ctrl
 * @Author: zhangxuelian 
 * @Date: 2019-07-05 09:21:19 
 * @Last Modified by: zhangxuelian
 * @Last Modified time: 2019-09-05 10:23:30
 */
define(['app'],function(app){
    app.registerController('homeCtrl',['$scope','$state',function($scope,$state){
        var vm = $scope.vm = {
            headerConfig: {
                activeId: 0,
                items: [{
                    id: 0,
                    name: '3D地图',
                    router: 'home.map'
                },{
                    id: 1,
                    name: '菜单1',
                    router: 'home.case'
                },{
                    id: 2,
                    name: '菜单2',
                    router: 'home.effect'
                },{
                    id: 3,
                    name: '菜单3',
                    router: 'home.work'
                }],
                clickCallback: function(item){
                    $state.go(item.router)
                }
            },
            init: function(){
                $state.go('home.map');
            }
        }
    }])
})