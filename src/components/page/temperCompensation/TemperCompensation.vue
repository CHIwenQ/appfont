<template>
    <a-card style=";box-shadow: 3px 3px 3px;padding-bottom: 10px">
        <a-card style=";box-shadow: 3px 3px 3px;padding-bottom: 10px">
            <a-divider>温度补偿：</a-divider>
            <div style="margin-bottom: 10px;height: 60%">
                <div  style="width: 23%;display: inline-block;margin-right: 30px;float: left">
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">温度值:</p>
                                  </span>
                        <a-button style="float: right;margin-left: 3px">读取</a-button>
                        <input disabled style="float: right;text-align: center"></input>
                    </a-row>
                    <a-row style="display: inline-block">
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">压力AD值：</p>
                                  </span>
                        <a-button style="float: right;margin-left: 3px">读取</a-button>
                        <input disabled style="float: left;text-align: center;width: 160px"></input>
                    </a-row>
                    <a-row style="margin-top: 3px;text-align: center">
                        <span>
 <a-select style="text-align: center;margin-right: 20px" default-value="-温补算法选择-"></a-select>
                                  </span>
                    </a-row>
                    <a-row style="text-align: center;margin-top: 20px">
                        <div style="margin-bottom: 10px">
                            <a-button style="text-align: center;margin-right: 20px" type="primary">采集数据</a-button>
                            <a-button style="text-align: center" type="primary">温度系数</a-button>
                        </div>
                    </a-row>
                </div>
                <div style="float: left">
                    <a-col>
                        <p style="margin-bottom: 38px"></p>
                        <p style="margin-bottom: 17px">常温22℃：</p>
                        <p style="margin-bottom: 17px">常温修改值：</p>
                        <p style="margin-bottom: 17px">高温40℃：</p>
                        <p style="margin-bottom: 17px">高温修改值：</p>
                        <p style="margin-bottom: 17px">高温70℃：</p>
                        <p style="margin-bottom: 17px">高温修改值：</p>
                        <p style="margin-bottom: 17px">低温0℃：</p>
                        <p style="margin-bottom: 17px">低温修改值：</p>
                        <p style="margin-bottom: 17px">低温-20℃：</p>
                        <p style="margin-bottom: 17px">低温修改值：</p>
                    </a-col>
                </div>
                <div style="width:7%;float: left;margin-right: 10px">
                    <a-col style="text-align: center">
                        <p style="text-align: center">温度值(℃)</p>
                        <a-input style="margin-bottom: 5px;text-align: center" disabled placeholder="21.867"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" ></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" disabled placeholder="40.813"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" disabled placeholder="70.813"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" ></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" disabled placeholder="-0.988"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" ></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" disabled placeholder="-19.766"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" ></a-input>
                        <a-button style="text-align: center">算法系数</a-button>
                    </a-col>
                </div>
                <div style="width:7%;float: left;margin-right: 10px">
                    <a-col style="text-align: center">
                        <p style="text-align: center">0%压力AD值</p>
                        <a-input style="margin-bottom: 5px;text-align: center" disabled placeholder="8406397"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" ></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" disabled placeholder="8404053"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" disabled placeholder="8402286"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" ></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" disabled placeholder="8408622"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" ></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" disabled placeholder="8411322"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" ></a-input>
                    </a-col>
                </div>
                <div style="width:7%;float: left;margin-right: 10px">
                    <a-col style="text-align: center">
                        <p style="text-align: center">25%压力AD值</p>
                        <a-input style="margin-bottom: 5px;text-align: center" disabled placeholder="9459771"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" ></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" disabled placeholder="9456361"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" disabled placeholder="9458538"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" ></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" disabled placeholder="9465453"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" ></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" disabled placeholder="9473695"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" ></a-input>
                    </a-col>
                </div>
                <div style="width:7%;float: left;margin-right: 10px">
                    <a-col style="text-align: center">
                        <p style="text-align: center">50%压力AD值</p>
                        <a-input style="margin-bottom: 5px;text-align: center" disabled placeholder="10523131"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" ></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" disabled placeholder="10519532"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" disabled placeholder="10505601"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" ></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" disabled placeholder="10532546"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" ></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" disabled placeholder="10545783"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" ></a-input>
                    </a-col>
                </div>
                <div style="width:7%;float: left;margin-right: 10px">
                    <a-col style="text-align: center">
                        <p style="text-align: center">75%压力AD值</p>
                        <a-input style="margin-bottom: 5px;text-align: center" disabled placeholder="11605427"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" ></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" disabled placeholder="11600342"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" disabled placeholder="11582439"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" ></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" disabled placeholder="11616392"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" ></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" disabled placeholder="11633647"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" ></a-input>
                    </a-col>
                </div>
                <div style="width:7%;float: left;margin-right: 10px">
                    <a-col style="text-align: center">
                        <p style="text-align: center">100%压力AD值</p>
                        <a-input style="margin-bottom: 5px;text-align: center" disabled placeholder="12690378"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" ></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" disabled placeholder="12684908"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" disabled placeholder="12668312"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" ></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" disabled placeholder="12699349"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" ></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" disabled placeholder="12717573"></a-input>
                        <a-input style="margin-bottom: 5px;text-align: center" ></a-input>
                    </a-col>
                </div>
                <div style="float: left">
                    <a-col>
                        <p style="margin-bottom: 38px"></p>
                        <p style="margin-bottom: 17px"></p>
                        <a-button type="primary" style="margin-bottom: 17px;margin-top: 14px">修改常温</a-button>
                        <p style="margin-bottom: 17px"></p>
                        <a-button type="primary" style="margin-bottom: 17px;margin-top: 10px">修改高温</a-button>
                        <p style="margin-bottom: 17px"></p>
                        <a-button type="primary" style="margin-bottom: 17px;margin-top: 4px">修改高温</a-button>
                        <p style="margin-bottom: 17px"></p>
                        <a-button type="primary" style="margin-bottom: 17px;margin-top: 10px">修改低温</a-button>
                        <p style="margin-bottom: 17px"></p>
                        <a-button type="primary" style="margin-bottom: 17px;margin-top: 11px">修改低温</a-button>
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
name: "TemperCompensation"
}
</script>

<style scoped>

</style>