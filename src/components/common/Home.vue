<template>
    <div class="wrapper">
        <v-head></v-head>

        <v-sidebar></v-sidebar>
        <div class="content-box">
            <PageView class="header" />
            <div class="content">
                <a-row style="display:flex;box-shadow: 3px 3px 1px;margin-bottom: 5px">
                    <a-col class="ceil-button" style="height: 100%;width: 40%">
                        <a-card class="card" style="height: 50%">
                           <p style="float: left">串口选择：</p>
                            <a-select v-model="com.selected" class="button-input" style="width: 150px">
                                <a-select-option v-for="(val,key,index) in com.groups" :key="index" :value="key">
                                    {{val}}
                                </a-select-option>
                            </a-select>
                            <a-button type="primary" style="float: right" @click="onSelectCom">
                                确认端口
                            </a-button>
                        </a-card>
                        <a-card class="card">
                            <p style="float: left;height: 50%">单设备地址查询：</p>
                            <a-select v-model="address.selected" class="button-input" style="width: 90px">
                                <a-select-option v-for="(val,key,index) in address.groups" :key="index" :value="key">
                                    {{key}}
                                </a-select-option>
                            </a-select>
                            <a-button type="primary" style="float: right;margin-left: 20px" @click="onSearchAddressSolo">
                                单地址查询
                            </a-button>
                        </a-card>
                    </a-col>
                    <a-col class="ceil-button" style="height: 100%;width: 40%">
                        <a-card class="card" style="height: 50%" >
                            <p style="float: left">多设备地址查询：</p>
                            <a-select v-model="addressGroup.selected" class="button-input" style="width: 100px;display: block">
                                <a-select-option v-for="(val,key,index) in addressGroup.groups" :key="index" :value="key">
                                    {{key}}
                                </a-select-option>
                            </a-select>
                            <a-button type="primary" style="float: right;margin-left: 20px;display: block" @click="onSearchAddressGroup">
                                多地址查询
                            </a-button>
                        </a-card>
                        <a-card class="card" style="height: 50%;padding-left: 10px">
                            <p style="float: left">波特率：</p>
                            <a-select v-model="bpsGroup.selected" class="button-input" style="width: 100px" @change="bpsChange">
                                <a-select-option v-for="(val,key,index) in bpsGroup.groups" :key="index" :value="key">
                                    {{key}}
                                </a-select-option>
                            </a-select>
                            <p style="float: left;margin-left: 30px">校验位：</p>
                            <a-select v-model="checkGroup.selected" class="button-input" style="width: 100px" @change="checkChange">
                                <a-select-option v-for="(val,key,index) in checkGroup.groups" :key="index" :value="key">
                                    {{key}}
                                </a-select-option>
                            </a-select>
                        </a-card>
                    </a-col>
                    <a-col class="ceil-button" style="height: 100%">
                        <a-card class="card" style="height: 70%;" >
                            <p style="float: left">命令行输入：</p>
                            <a-textarea
                                class="button-input"
                                v-model="inputValue"
                                placeholder="自定义命令内容..."
                                :auto-size="{ minRows: 2, maxRows: 5 }"
                                style="margin-bottom: 3px"
                            />

                            <a-button type="primary" style="float: right;" @click="diyCmdSend">
                                命令发送
                            </a-button>
                        </a-card>
                    </a-col>
                </a-row>
                <transition name="move" mode="out-in">
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </transition>
                <el-backtop target=".content"></el-backtop>
            </div>
        </div>
    </div>
</template>

<script>
import vHead from './Header.vue';
import vSidebar from './Sidebar.vue';
import bus from './bus';
import PageView from '@/components/common/PageView';
import axios from 'axios';

export default {
    data() {
        return {
            tagsList: [],
            collapse: false,
            loadPage: false,
            mockData: {},
            deviceInfo : {},
            outputData: [],
            com: {
                selected: '1',
                groups: {
                    '1': 'COM1',
                    '2': 'COM2',
                    '3': 'COM3'
                }
            },
            address: {
                selected: '地址0',
                groups: {
                    '地址0':'FF FF FF FF 2 0 0 0 2',
                    '地址1':'FF FF FF FF 2 1 0 0 3',
                    '地址2':'FF FF FF FF 2 2 0 0 0',
                    '地址3':'FF FF FF FF 2 3 0 0 1',
                    '地址4':'FF FF FF FF 2 4 0 0 6',
                    '地址5':'FF FF FF FF 2 5 0 0 7',
                    '地址6':'FF FF FF FF 2 6 0 0 4',
                    '地址7':'FF FF FF FF 2 7 0 0 5',
                    '地址8':'FF FF FF FF 2 8 0 0 A',
                    '地址9':'FF FF FF FF 2 9 0 0 B',
                    '地址10':'FF FF FF FF 2 A 0 0 8',
                    '地址11':'FF FF FF FF 2 B 0 0 9',
                    '地址12':'FF FF FF FF 2 C 0 0 E',
                    '地址13':'FF FF FF FF 2 D 0 0 F',
                    '地址14':'FF FF FF FF 2 E 0 0 C',
                    '地址15':'FF FF FF FF 2 F 0 0 D',
                },
            },
            inputValue: '',
            cmdId: 0,
            addressGroup: {
                selected: '地址0-15',
                groups: {
                    '地址0-15': [
                        'FF FF FF FF 2 0 0 0 2',
                        'FF FF FF FF 2 1 0 0 3',
                        'FF FF FF FF 2 2 0 0 0',
                        'FF FF FF FF 2 3 0 0 1',
                        'FF FF FF FF 2 4 0 0 6',
                        'FF FF FF FF 2 5 0 0 7',
                        'FF FF FF FF 2 6 0 0 4',
                        'FF FF FF FF 2 7 0 0 5',
                        'FF FF FF FF 2 8 0 0 A',
                        'FF FF FF FF 2 9 0 0 B',
                        'FF FF FF FF 2 A 0 0 8',
                        'FF FF FF FF 2 B 0 0 9',
                        'FF FF FF FF 2 C 0 0 E',
                        'FF FF FF FF 2 D 0 0 F',
                        'FF FF FF FF 2 E 0 0 C',
                        'FF FF FF FF 2 F 0 0 D'],
                    '地址0-7': [
                        'FF FF FF FF 2 0 0 0 2',
                        'FF FF FF FF 2 1 0 0 3',
                        'FF FF FF FF 2 2 0 0 0',
                        'FF FF FF FF 2 3 0 0 1',
                        'FF FF FF FF 2 4 0 0 6',
                        'FF FF FF FF 2 5 0 0 7',
                        'FF FF FF FF 2 6 0 0 4',
                        'FF FF FF FF 2 7 0 0 5',
                    ],
                    '地址8-15': [
                        'FF FF FF FF 2 8 0 0 A',
                        'FF FF FF FF 2 9 0 0 B',
                        'FF FF FF FF 2 A 0 0 8',
                        'FF FF FF FF 2 B 0 0 9',
                        'FF FF FF FF 2 C 0 0 E',
                        'FF FF FF FF 2 D 0 0 F',
                        'FF FF FF FF 2 E 0 0 C',
                        'FF FF FF FF 2 F 0 0 D'
                    ]
                }
            },
            bpsGroup: {
                selected: '1200bps',
                groups: {
                    '2400bps': 2400,
                    '1200bps':1200
                }
            },
            checkGroup: {
                selected: '奇校验',
                groups: {
                    '奇校验': '奇校验',
                    '偶校验': '偶校验'
                }
            }
        }
    },
    components: {
        PageView,
        vHead,
        vSidebar
    },
    created() {
        bus.$on('collapse-content', msg => {
            this.collapse = msg;
        });
        bus.$on('tags', msg => {
            let arr = [];
            for (let i = 0, len = msg.length; i < len; i++) {
                msg[i].name && arr.push(msg[i].name);
            }
            this.tagsList = arr;
        });
    },
    methods: {
        bpsChange() {
            this.$notification.open({
                message: '配置修改提示：',
                description:
                    '波特率已修改为：'+this.bpsGroup.groups[this.bpsGroup.selected],
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });
        },
        checkChange() {
            this.$notification.open({
                message: '配置修改提示：',
                description:
                    '校验位已修改为：'+this.checkGroup.groups[this.checkGroup.selected],
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });
        },
        onSelectCom() {
            this.$notification.open({
                message: '配置修改提示：',
                description:
                    '通讯串口已修改为：'+this.com.groups[this.com.selected],
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });
        },
        diyCmdSend() {
            if (this.inputValue != ''){
                this.outputData.push("发送数据：\xa0\xa0\xa0时间：\xa0"+new Date().toLocaleTimeString()+"-----> \xa0   "+this.inputValue)

                this.inputValue = ''
                this.cmdId += 1
            }
        },
        onSearchAddressSolo() {
            this.$store.commit('cleanDevice')
            if (this.address.selected != '') {
                axios({
                    url: '/device/deviceInfo/solo',
                    method: 'get'
                }).then(r => {
                    let res = r.data;
                    let comData = res[this.com.groups[this.com.selected]];
                    if (comData) {
                        let deviceData = comData[this.address.selected];
                        if (deviceData) {
                            this.$store.commit('incrementDeviceSOLO',deviceData)
                            let output = "发送数据：\xa0\xa0\xa0时间：\xa0" + new Date().toLocaleTimeString() + "-----> \xa0   " + this.address.groups[this.address.selected]
                            this.$store.commit('addOutput',output);
                            let input = "接收数据：\xa0\xa0\xa0时间：\xa0" + new Date().toLocaleTimeString() + "-----> \xa0   " + deviceData.received;
                            this.$store.commit('addInput',input);
                            // this.$store.commit('cleanDevice')
                        } else {
                            this.$message({
                                message: '查找无设备！',
                                type: 'warning'
                            });
                        }
                    }else {
                        this.$message({
                            message: '查找无设备！',
                            type: 'warning'
                        });
                    }
                })

                this.cmdId += 1;
            }
        },
        onSearchAddressGroup() {
            this.$store.commit('cleanDevice')
            if (this.address.selected != '') {
                axios({
                    url: '/device/deviceInfo/multi',
                    method: 'get'
                }).then(r => {
                    let res = r.data;
                    let comData = res[this.com.groups[this.com.selected]];
                    if (comData) {
                        let deviceData = comData;
                        if (deviceData) {
                            for (let index in deviceData) {
                                let i=0
                                this.$store.commit('incrementDeviceSOLO',deviceData[index])
                                let output = "发送数据：\xa0\xa0\xa0时间：\xa0" + new Date().toLocaleTimeString() + "-----> \xa0   " + this.addressGroup.groups[this.addressGroup.selected][i]
                                this.$store.commit('addOutput',output);
                                let input = "接收数据：\xa0\xa0\xa0时间：\xa0" + new Date().toLocaleTimeString() + "-----> \xa0   " + deviceData[index].received;
                                this.$store.commit('addInput',input);
                                i += 1
                            }
                        } else {
                            this.$message({
                                message: '查找无设备！',
                                type: 'warning'
                            });
                        }
                    }else {
                        this.$message({
                            message: '查找无设备！',
                            type: 'warning'
                        });
                    }
                })

                this.cmdId += 1;
            }
            for (let index in this.addressGroup.groups[this.addressGroup.selected]){
                this.outputData.push("发送数据：\xa0\xa0\xa0时间：\xa0" + new Date().toLocaleTimeString() + "-----> \xa0   " + this.addressGroup.groups[this.addressGroup.selected][index])
            }
            this.cmdId += 1
        }
    }
};
</script>
<style>
.ceil-button{
    background-color: #8c939d;
}
.button-input{
    float: left;
    margin:5px 0;
    width: 150px;
    height: 100%;
}
</style>
