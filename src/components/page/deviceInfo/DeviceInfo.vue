<template>
    <a-spin :spinning="loadPage">
        <a-card style=";box-shadow: 3px 3px 3px;padding-bottom: 10px">
            <div style="margin-bottom: 10px;height: 60%">
                <div  style="width: 30%;display: inline-block;margin-right: 30px;float: left">
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">通用命令版本:</p>
                                  </span>
                        <input disabled v-model="deviceInfo.version" style="float: right;text-align: center"></input>
                    </a-row>
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">硬件版本:</p>
                                  </span>
                        <input disabled v-model="deviceInfo.hardwareVersion" style="float: right;text-align: center"></input>
                    </a-row>
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">软件版本:</p>
                                  </span>
                        <input disabled v-model="deviceInfo.softwareVersion" style="float: right;text-align: center"></input>
                    </a-row>
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">生产商:</p>
                                  </span>
                        <input disabled v-model="deviceInfo.manufacturer" style="float: right;text-align: center"></input>
                    </a-row>
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">设备类型:</p>
                                  </span>
                        <input disabled v-model="deviceInfo.deviceType" style="float: right;text-align: center"></input>
                    </a-row>
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">设备版本:</p>
                                  </span>
                        <input disabled v-model="deviceInfo.deviceVersion" style="float: right;text-align: center"></input>
                    </a-row>
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">设备号:</p>
                                  </span>
                        <input disabled v-if="deviceInfo.deviceNumber.selected" v-model="deviceInfo.deviceNumber.num" style="float: right;text-align: center"></input>
                        <input  disabled v-else  style="float: right;text-align: center"></input>
                        <button @click="deviceNumChange">读取</button>
                    </a-row>
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">变送器序列号:</p>
                        </span>
                        <input disabled v-if="deviceInfo.deviceSerial.selected" v-model="deviceInfo.deviceSerial.num" style="float: right;text-align: center"></input>
                        <input   v-else  style="float: right;text-align: center"  id="deviceSerial"></input>
                        <button @click="deviceSerialChange">写入</button>
                    </a-row>

                </div>
                <div style="width: 30%;display: inline-block;float: left">
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">设备组装码:</p>
                                  </span>
                        <input disabled v-model="deviceInfo.installCode" style="float: right;text-align: center"></input>
                    </a-row>
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">设备描述:</p>
                                  </span>
                        <input disabled v-model="deviceInfo.deviceDescribed" style="float: right;text-align: center"></input>
                    </a-row>
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">设备信息:</p>
                                  </span>
                        <input  v-if="deviceInfo.deviceInfo.selected" v-model="deviceInfo.deviceInfo.num" style="float: right;text-align: center" id="deviceInfo"></input>
                        <input  v-else  style="float: right;text-align: center"></input>
                        <button @click="deviceinfoRead">读取</button>
                        <button @click="deviceinfoWrite">写入</button>
                    </a-row>
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 40px">安装日期:</p>
                            <a-date-picker @change="installDateChange" style="margin-left: 25px"></a-date-picker>
                        </span>
                    </a-row>
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">LRL:</p>
                                  </span>
                        <input disabled v-model="deviceInfo.LRL" style="float: right;text-align: center"></input>
                    </a-row>
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">URL:</p>
                                  </span>
                        <input disabled v-model="deviceInfo.URL" style="float: right;text-align: center"></input>
                    </a-row>
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">最小量程:</p>
                                  </span>
                        <input disabled v-if="deviceInfo.minRange.selected" v-model="deviceInfo.minRange.num" style="float: right;text-align: center"></input>
                        <input  disabled v-else  style="float: right;text-align: center"></input>
                        <button @click="minRangeChange">读取</button>
                    </a-row>
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">量程单位:</p>
                                  </span>
                        <input disabled v-model="deviceInfo.rangeUnit" style="float: right;text-align: center"></input>
                    </a-row>
                </div>
                <div style="width: 30%;display: inline-block;float: right">
                    <a-row>
                        <a-button type="primary" @click="deviceVisible" style="height: 80px;margin-bottom: 10px" block>
                            设备监视
                        </a-button>
                        <a-button style="height: 80px;margin-bottom: 10px" block>
                            设备组态
                        </a-button>
                        <a-button style="height: 80px" type="danger" block>
                            断开设备
                        </a-button>
                    </a-row>
                    <a-modal
                        title="实时数据展示图"
                        :visible="deviceInfo.deviceVisible"
                        @cancel="handleCancel"
                        @ok="handleCancel"
                    >
                 	<line-chart :chart-height="'450px'" :container-id="deviceInfo.id" v-bind:sourceData="chartData"></line-chart>

                    </a-modal>
                </div>

            </div>
        </a-card>
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
    </a-spin>
</template>

<script>
import axios from 'axios';
import LineChart from '@/components/page/common/LineChart';
export default {
    name: 'deviceInfo',
    components: { LineChart },
    data() {
        return {
            chart: null,
            loadPage: false,
            outputData: [

            ],
            deviceInfo: {
                id: '1',
                version: '7',
                hardwareVersion: '130',
                softwareVersion: '13',
                manufacturer: 'SHZY',
                deviceType: '63',
                deviceVersion: '1',
                deviceNumber: {
                    selected: false,
                    num: '1234'
                },
                deviceSerial: {
                    selected: false,
                    num: ''
                },
                rangeUnit: 'kpa',
                URL: '120.00',
                LRL: '-120.00',
                minRange: {
                    selected: false,
                    num: 10.00
                },
                installDate: '',
                deviceDescribed: '3151型压力变送器',
                deviceInfo: {
                    selected: false,
                    num: ''
                },
                installCode: 1,
                deviceVisible: false,

            },
            chartData: [],
            outputTmp: this.$store.getters.getOutput,
            inputValue: '',
        }
    },

    watch: {
        '$store.state.output': function() {
            this.outputData.push(this.$store.getters.getOutput)
        },
        '$store.state.input': function() {
            this.outputData.push(this.$store.getters.getInput)
        },
    },
    methods: {
        deviceNumChange() {
            this.deviceInfo.deviceNumber.selected = true
        },
        deviceSerialChange() {
            let changeData = document.getElementById("deviceSerial").value
            this.deviceInfo.deviceSerial.selected = true
            this.deviceInfo.deviceSerial.num = changeData
        },
        minRangeChange() {
            this.deviceInfo.minRange.selected = true
        },
        deviceinfoRead() {
            this.deviceInfo.deviceInfo.selected = true
        },
        deviceinfoWrite() {
            let changeData = document.getElementById("deviceInfo").value;
            this.deviceInfo.deviceInfo.num = changeData
        },
        installDateChange(date, dateString) {
            console.log('安装日期：'+dateString);
        },
        handleCancel() {
            this.deviceInfo.deviceVisible = false;
        },
        deviceVisible() {
            this.deviceInfo.deviceVisible = true;

            this.chartData = [
                {'xAxis': '2020-11-20',
                'value':8503232},
                {'xAxis': '2020-11-21',
                    'value':8502332},
                {'xAxis': '2020-11-22',
                    'value':8603232},
                {'xAxis': '2020-11-23',
                    'value':8803232},
                {'xAxis': '2020-11-24',
                    'value':8203232},
                {'xAxis': '2020-11-25',
                    'value':8533232},]
        },
    },

};
</script>


<style scoped>
.card>:first-child{
    padding: 3px;
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


.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}
.user-info-list span {
    margin-left: 70px;
}
</style>

