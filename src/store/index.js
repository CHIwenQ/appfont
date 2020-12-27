import Vue from 'vue'
import Vuex from 'vuex'
//1.安装插件
Vue.use(Vuex)
//2.创建对象
const store = new Vuex.Store({
    state: {//存储状态
        device: [],
        output: "",
        input: "",
    },
    mutations: {//操作状态
        incrementDeviceSOLO(state,device) {
            state.device.push(device)
        },
        cleanDevice(state) {
            state.device = []
        },
        addOutput(state,output) {
            state.output=output
        },
        addInput(state,input) {
            state.input = input
        },
        cleanOutput(state) {
            state.output = ""
        }
    },
    actions: {
    },
    getters: {
        getDevice(state) {
            return state.device
        },
        getOutput(state) {
            return state.output
        },
        getInput(state) {
            return state.input
        }
    },
    modules: {
    }
})
//3.导出store对象
export default store