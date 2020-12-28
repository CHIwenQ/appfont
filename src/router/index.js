import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/common/Home';
import DeviceConfig from '@/components/page/deviceConfig/DeviceConfig';
import PressureSet from '@/components/page/pressureSet/PressureSet';
import TemperCompensation from '@/components/page/temperCompensation/TemperCompensation';
import PerformancePredict from '@/components/page/performancePrediction/PerformancePredict';
import DeviceInfo from '@/components/page/deviceInfo/DeviceInfo';
import Login from '@/components/page/login/Login';
import Error404 from '@/components/page/common/Error404';
import Error403 from '@/components/page/common/Error403';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/deviceInfo'
        },
        {
            path: '/',
            component: Home,
            children: [
                {
                    path: '/deviceInfo',
                    component: DeviceInfo,
                    meta: { title: '设备信息' }
                },
                {
                    path: '/deviceConfig',
                    component: DeviceConfig,
                    meta: { title: '设备调校' }
                },
                {
                    path: '/pressureSet',
                    component: PressureSet,
                    meta: { title: '压力标定' }
                },
                {
                    path: '/temperCompensation',
                    component: TemperCompensation,
                    meta: { title: '温度补偿' }
                },
                {
                    path: '/performancePredict',
                    component: PerformancePredict,
                    meta: { title: '性能预测' }
                },
            ]
        },
        {
            path: '/404',
            component: Error404,
            meta: { title: '404' }
        },
        {
            path: '/403',
            component: Error403,
            meta: { title: '403' }
        },
        {
            path: '/login',
            component: Login,
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
