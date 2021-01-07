<template>
    <a-card style=";box-shadow: 3px 3px 3px;padding-bottom: 10px">
        <a-card style=";box-shadow: 3px 3px 3px;padding-bottom: 10px">
            <a-divider>综合参数组态：</a-divider>
            <div style="margin-bottom: 10px;height: 60%">
                <div  style="width: 30%;display: inline-block;margin-right: 30px;float: left">
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">变送器编号:</p>
                                  </span>
                        <input style="float: right;text-align: center"></input>
                    </a-row>
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">量程下限：</p>
                                  </span>
                        <input style="float: right;text-align: center"></input>
                    </a-row>
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">量程上限：</p>
                                  </span>
                        <input style="float: right;text-align: center"></input>
                    </a-row>
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">量程单位:</p>
                                  </span>
                        <a-select  style="float: right;text-align: center" default-value="-量程单位选择-"></a-select>
                    </a-row>
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">低温温度：(℃)</p>
                                  </span>
                        <input style="float: right;text-align: center"></input>
                    </a-row>
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">高温温度：(℃)</p>
                                  </span>
                        <input style="float: right;text-align: center"></input>
                    </a-row>
                </div>
                <div style="width: 30%;display: inline-block;float: left">
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">显示模式:</p>
                                  </span>
                        <a-select  style="float: right;text-align: center" default-value="-显示模式选择-"></a-select>
                    </a-row>
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">自稳系数:(%)</p>
                                  </span>
                        <input style="float: right;text-align: center"></input>
                    </a-row>
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">滤波常数:(uA)</p>
                                  </span>
                        <input style="float: right;text-align: center"></input>
                    </a-row>
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">阻尼时间：(S)</p>
                                  </span>
                        <input style="float: right;text-align: center"></input>
                    </a-row>
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">常温温度：(℃)</p>
                                  </span>
                        <input style="float: right;text-align: center"></input>
                    </a-row>
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">显示精度：</p>
                                  </span>
                        <a-select  style="float: right;text-align: center" default-value="-显示精度选择-"></a-select>
                    </a-row>
                </div>
                <div style="width: 20%;display: inline-block;float: right">
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">输出特性:</p>
                                  </span>
                        <a-select  style="float: right;text-align: center" default-value="-输出特性选择-"></a-select>
                    </a-row>
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">传感器类型：</p>
                                  </span>
                        <a-select  style="float: right;text-align: center" default-value="-传感器类型选择-"></a-select>
                    </a-row>
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">传感器供电方式：</p>
                                  </span>
                        <a-select  style="float: right;text-align: center" default-value="-供电方式选择-"></a-select>
                    </a-row>
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">传感器最大内阻：</p>
                                  </span>
                        <a-select  style="float: right;text-align: center" default-value="-内阻选择-"></a-select>
                    </a-row>
                    <a-row style="text-align: center">
                        <a-button style="text-align: center;margin-top: 30px;" type="primary">参数发送</a-button>
                    </a-row>
                </div>
            </div>
        </a-card>
        <a-card style=";box-shadow: 3px 3px 3px;padding-bottom: 10px">
            <a-divider>电流微调：</a-divider>
            <div style="margin-bottom: 10px;height: 60%">
                <div  style="width: 30%;display: inline-block;margin-right: 30px;float: left">
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">电流输出模式:</p>
                                  </span>
                        <a-select  style="float: right;text-align: center" default-value="-输出模式选择-"></a-select>
                    </a-row>
                    <a-row style="text-align: center">
                        <a-button type="primary" style="margin-top: 30px">检测</a-button>
                    </a-row>
                </div>
                <div style="width: 30%;display: inline-block;float: left">
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">第一点电流值：</p>
                                  </span>
                        <input style="float: right;text-align: center"></input>
                    </a-row>
                    <a-row style="text-align: center">
                        <a-button style="text-align: center" type="primary">确认</a-button>
                    </a-row>
                    <a-divider></a-divider>
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">第二点电流值：</p>
                                  </span>
                        <input style="float: right;text-align: center"></input>
                    </a-row>
                    <a-row style="text-align: center">
                        <a-button style="text-align: center" type="primary">确认</a-button>
                    </a-row>
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
name: "DeviceConfig"
}
</script>

<style scoped>
.bigbox {
    width: 100%;
    height: 400px;
    /* line-height: 100px; */
    text-align: center;
    display: flex;
    background-color:rgb(190, 200, 200);
    padding: 0 50px;
}
.left {
    width: 250px;
}
.center {
    flex: 1;
    padding:0 30px;
}
.step{
    margin: 20px 0;
}
.start{
    float:left;
    margin-left:40px
}
.control{
    margin: 5px 0;
}
.stepcs{
    vertical-align:middle;
    margin-right: 25px;
    font-size:20px ;
}
.ctinput{
    text-align: center;
    /* margin-right: 30px; */
    width: 25%;
}
.behindinput{
    text-align: center;
    margin-right: 50px;
    width: 25%;
}
.right {
    width: 350px;
}
</style>
