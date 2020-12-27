<template>
    <a-spin :spinning="loadPage">
        <a-row style="height: 60%">
            <a-row style="display:flex;margin: 0 auto;">
                <a-col class="ceil-button">
                    <a-card  class="card">
                        <span style="color: #4a4af3;display:block">串口选择：</span>
                        <a-select v-model="com.selected" class="button-input">
                            <a-select-option v-for="(val,key,index) in com.groups" :key="index" :value="key">
                                {{val}}
                            </a-select-option>
                        </a-select>
                        <a-button type="primary" style="float: right" @click="onSelectCom">
                            确认端口
                        </a-button>
                    </a-card>
                </a-col> 
                <a-col class="ceil-button">
                    <a-card class="card">
                        <span style="color: #4a4af3;display:block">单设备地址查询：</span>
                        <a-select v-model="address.selected" class="button-input">
                            <a-select-option v-for="(val,key,index) in address.groups" :key="index" :value="key">
                                {{key}}
                            </a-select-option>
                        </a-select>
                        <a-button type="primary" style="float: right" @click="onSearchAddressSolo">
                            单地址查询
                        </a-button>
                    </a-card>
                </a-col>
                <a-col class="ceil-button">
                    <a-card class="card">
                        <span style="color: #4a4af3;display:block">多设备地址查询：</span>
                        <a-select v-model="addressGroup.selected" class="button-input">
                            <a-select-option v-for="(val,key,index) in addressGroup.groups" :key="index" :value="key">
                                {{key}}
                            </a-select-option>
                        </a-select>
                        <a-button type="primary" style="float: right" @click="onSearchAddressGroup">
                            多地址查询
                        </a-button>
                    </a-card>
                </a-col>
                <a-col class="ceil-button">
                    <a-card class="card">
                        <span style="color: #4a4af3;display:block">命令行输入：</span>
                        <a-textarea
                            style="heig"
                            class="button-input"
                            v-model="inputValue"
                            placeholder="自定义命令内容..."
                            :auto-size="{ minRows: 1, maxRows: 5 }"
                        />

                        <a-button type="primary" style="float:right" @click="diyCmdSend">
                            命令发送
                        </a-button>
                    </a-card>
                </a-col>
            </a-row>
            <a-row style="margin-bottom: 10px" :span="12">
                <div style="background-color: #ffffff;box-shadow: 3px 3px 3px; padding-bottom: 30px;overflow: scroll" >
                    <a-row>
                        <h3></h3>
                    </a-row>
                    <a-row :gutter="16" style="height: 450px">
                        <a-col name = "device-info" style="margin: 30px 50px 30px 50px; " v-for="(val,key) in deviceInfo" :key="key">
                            <a-card title="card title"  style="background-color: #e8e6e6">
                                {{val}}
                            </a-card>
                        </a-col>
                    </a-row>

                </div>
            </a-row>
            <a-row style="margin-top: 10px;" :span="12">
                <div  style="background-color: white;box-shadow: 3px 3px 3px;padding-bottom: 10px" >
                    <a-divider orientation="left">控制台输出：</a-divider>
                    <a-list bordered :data-source="outputData" style="margin: 10px 10px 10px 10px; overflow: scroll;height: 200px;padding-bottom: 30px">
                        <a-list-item slot="renderItem" slot-scope="item, index">
                            <span style="font-weight: bold">{{ item }}</span>
                            <span style="float: right">{{index}}</span>
                        </a-list-item>
                    </a-list>
                </div>
            </a-row>
        </a-row>
    </a-spin>
</template>

<script>
import axios from 'axios';
export default {
    name: 'deviceSearch',
    data() {
        return {
            loadPage: false,
            mockData: {},
            deviceInfo : {
                // '#1': {
                //     id: '1',
                //     name: '3151型压力变送器',
                //     comNum: 'COM1',
                // },
                // '#2': {
                //     id: '2',
                //     name: '3151型压力变送器',
                //     comNum: 'COM1',
                // },
                // '#3': {
                //     id: '3',
                //     name: '3151型压力变送器',
                //     comNum: 'COM2',
                // },
                // '#4': {
                //     id: '4',
                //     name: '3150型压力变送器',
                //     comNum: 'COM3',
                // },
            },
            outputData: [

            ],
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
            }
        }
    },

    mounted() {
    },
    methods: {
        onSelectCom() {
            console.log(this.com.selected)
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
            if (this.address.selected != '') {
                    axios({
                        url: '/device/deviceInfo/solo',
                        method: 'get',
                    }).then(r => {
                        console.log(r)
                    });
                this.outputData.push("发送数据：\xa0\xa0\xa0时间：\xa0" + new Date().toLocaleTimeString() + "-----> \xa0   " + this.address.groups[this.address.selected])
                this.cmdId += 1
            }
        },
        onSearchAddressGroup() {
            console.log(this.addressGroup.selected)
            for (let index in this.addressGroup.groups[this.addressGroup.selected]){
                this.outputData.push("发送数据：\xa0\xa0\xa0时间：\xa0" + new Date().toLocaleTimeString() + "-----> \xa0   " + this.addressGroup.groups[this.addressGroup.selected][index])
            }
            this.cmdId += 1
        }

    }
};
</script>


<style scoped>
.ceil-button{
    margin:auto;
    width: 200px;
}
.card{
    background-color: #e8e6e6;
    /* padding-bottom: 10px; */
    box-shadow: 3px 3px 3px;
    height: 125px;
    padding: 5px;
}
.card>:first-child{
    padding: 5px;
}
.button-input{
    float: left;
    margin:5px 0;
    width: 150px;
}

.el-row {
    margin-bottom: 20px;
}

.grid-content {
    display: flex;
    align-items: center;
    height: 100px;
}

.grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
}

.grid-num {
    font-size: 30px;
    font-weight: bold;
}

.grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
}

.grid-con-1 .grid-con-icon {
    background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
    background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
    background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
    color: rgb(242, 94, 67);
}

.user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
}

.user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
}

.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}

.user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
}

.user-info-list span {
    margin-left: 70px;
}

.mgb20 {
    margin-bottom: 20px;
}

.todo-item {
    font-size: 14px;
}

.todo-item-del {
    text-decoration: line-through;
    color: #999;
}

.schart {
    width: 100%;
    height: 300px;
}
</style>

