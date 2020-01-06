/**
 * config
 * @Author: zhangxuelian 
 * @Date: 2019-07-04 14:17:49 
 * @Last Modified by: zhangxuelian
 * @Last Modified time: 2019-07-05 16:58:20
 */
require.config({
    baseUrl: '',
    urlArgs: 'v=1.0',
    paths: {
        'angular': 'lib/angular',
        'angular-couch-potato': 'lib/angular-couch-potato',
        'angular-ui-router': 'lib/angular-ui-router',
        'angular-shiro': 'lib/angular-shiro'
    },
    shim: {
        'angular-couch-potato': {
            deps: ['angular']
        },
        'angular-ui-router': {
            deps: ['angular']
        }
    }
})