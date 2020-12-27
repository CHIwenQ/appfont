import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/common/Home';
import DeviceMonitor from '@/components/page/deviceWatch/DeviceMonitor';
import DeviceSearch from '@/components/page/settingBoard/DeviceSearch';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/deviceSearch'
        },
        {
            path: '/',
            component: Home,
            children: [
                {
                    path: '/deviceSearch',
                    component: DeviceSearch,
                    meta: { title: '设备寻址' }
                },
                {
                    path: '/deviceMonitor',
                    component: DeviceMonitor,
                    meta: { title: '设备监视' }
                },
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: { title: '403' }
                },
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
