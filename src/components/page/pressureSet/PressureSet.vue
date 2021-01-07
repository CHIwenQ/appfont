<template>
    <a-card style=";box-shadow: 3px 3px 3px;padding-bottom: 10px">
        <a-card style=";box-shadow: 3px 3px 3px;padding-bottom: 10px">
            <a-divider>常温压力标定：</a-divider>
            <div style="margin-bottom: 10px;height: 60%">
                <div  style="width: 23%;display: inline-block;margin-right: 30px;float: left">
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">温度值:</p>
                                  </span>
                        <a-button style="float: right;margin-left: 3px">读取</a-button>
                        <input disabled style="float: right;text-align: center"></input>
                    </a-row>
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">压力AD值：</p>
                                  </span>
                        <a-button style="float: right;margin-left: 3px">读取</a-button>
                        <input disabled style="float: right;text-align: center"></input>
                    </a-row>
                    <a-row style="margin-top: 3px;text-align: center">
                        <span>
 <a-select style="text-align: center;margin-right: 20px" default-value="-标定算法选择-"></a-select>
                                  </span>
                    </a-row>
                    <a-row style="text-align: center;margin-top: 20px">
                        <div style="margin-bottom: 10px">
                            <a-button style="text-align: center;margin-right: 20px" type="primary">传送数据</a-button>
                            <a-button style="text-align: center" type="danger">停止采集</a-button>
                        </div>
                        <div>
                            <a-button style="text-align: center;margin-right: 20px" type="primary">启动温补</a-button>
                            <a-button style="text-align: center" type="danger">清除数据</a-button>
                        </div>
                    </a-row>
                </div>
                <div style="float: left">
                    <a-col>
                        <p style="margin-bottom: 38px"></p>
                        <p style="margin-bottom: 16px">压力值：</p>
                        <p style="margin-bottom: 16px">压力AD值：</p>
                        <p style="margin-bottom: 3px">输出电流值：</p>
                    </a-col>
                </div>
                <div style="width:7%;float: left;margin-right: 10px">
                    <a-col style="text-align: center">
                        <p style="text-align: center">1</p>
                        <a-input style="margin-bottom: 5px"></a-input>
                        <a-input style="margin-bottom: 5px" disabled></a-input>
                        <a-input style="margin-bottom: 5px" disabled></a-input>
                        <a-button style="text-align: center">采集</a-button>
                    </a-col>
                </div>
                <div style="width:7%;float: left;margin-right: 10px">
                    <a-col style="text-align: center">
                        <p style="text-align: center">2</p>
                        <a-input style="margin-bottom: 5px"></a-input>
                        <a-input style="margin-bottom: 5px" disabled></a-input>
                        <a-input style="margin-bottom: 5px" disabled></a-input>
                        <a-button style="text-align: center">采集</a-button>
                    </a-col>
                </div>
                <div style="width:7%;float: left;margin-right: 10px">
                    <a-col style="text-align: center">
                        <p style="text-align: center">3</p>
                        <a-input style="margin-bottom: 5px"></a-input>
                        <a-input style="margin-bottom: 5px" disabled></a-input>
                        <a-input style="margin-bottom: 5px" disabled></a-input>
                        <a-button style="text-align: center">采集</a-button>
                    </a-col>
                </div>
                <div style="width:7%;float: left;margin-right: 10px">
                    <a-col style="text-align: center">
                        <p style="text-align: center">4</p>
                        <a-input style="margin-bottom: 5px"></a-input>
                        <a-input style="margin-bottom: 5px" disabled></a-input>
                        <a-input style="margin-bottom: 5px" disabled></a-input>
                        <a-button style="text-align: center">采集</a-button>
                    </a-col>
                </div>
                <div style="width:7%;float: left;margin-right: 10px">
                    <a-col style="text-align: center">
                        <p style="text-align: center">5</p>
                        <a-input style="margin-bottom: 5px"></a-input>
                        <a-input style="margin-bottom: 5px" disabled></a-input>
                        <a-input style="margin-bottom: 5px" disabled></a-input>
                        <a-button style="text-align: center">采集</a-button>
                    </a-col>
                </div>
                <div style="width:7%;float: left;margin-right: 10px">
                    <a-col style="text-align: center">
                        <p style="text-align: center">6</p>
                        <a-input style="margin-bottom: 5px"></a-input>
                        <a-input style="margin-bottom: 5px" disabled></a-input>
                        <a-input style="margin-bottom: 5px" disabled></a-input>
                        <a-button style="text-align: center">采集</a-button>
                    </a-col>
                </div>
                <div style="width:7%;float: left;margin-right: 10px">
                    <a-col style="text-align: center">
                        <p style="text-align: center">7</p>
                        <a-input style="margin-bottom: 5px"></a-input>
                        <a-input style="margin-bottom: 5px" disabled></a-input>
                        <a-input style="margin-bottom: 5px" disabled></a-input>
                        <a-button style="text-align: center">采集</a-button>
                    </a-col>
                </div>
                <div style="width:7%;float: left;margin-right: 10px">
                    <a-col style="text-align: center">
                        <p style="text-align: center">8</p>
                        <a-input style="margin-bottom: 5px"></a-input>
                        <a-input style="margin-bottom: 5px" disabled></a-input>
                        <a-input style="margin-bottom: 5px" disabled></a-input>
                        <a-button style="text-align: center">采集</a-button>
                    </a-col>
                </div>
                <div style="width:5%;float: left;margin-left: 10px;margin-top: 30px">
                    <a-col style="text-align: center">
                        <p>当前产品编号：</p>
                        <a-input disabled v-model="productID" style="text-align: center;"></a-input>
                    </a-col>
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
    </a-card>
</template>

<script>
export default {
name: "PressureSet",
    data() {
    return {
        productID: '#01'
    }
    }
}
</script>

<style scoped>

</style>
