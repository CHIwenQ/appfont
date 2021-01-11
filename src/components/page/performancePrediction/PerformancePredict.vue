<template>
    <a-card style=";box-shadow: 3px 3px 3px;padding-bottom: 10px">
        <a-card style=";box-shadow: 3px 3px 3px;padding-bottom: 10px">
            <a-divider>性能预测：</a-divider>
            <div style="margin-bottom: 10px;height: 60%">
                <div  style="width: 23%;display: inline-block;margin-right: 30px;float: left">
                    <a-row>
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">实时温度值:</p>
                                  </span>
                        <input  disabled style="float: left;text-align: center" placeholder="21.867" ></input>
                    </a-row>
                    <a-row style="display: inline-block">
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">实时压力AD值：</p>
                                  </span>
                        <input disabled style="float: left;text-align: center;width: 130px" placeholder="9412333"></input>
                    </a-row>
                    <a-row style="display: inline-block">
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">实时湿度(RH/%)：</p>
                                  </span>
                        <input disabled style="float: left;text-align: center;width: 120px" placeholder="80"></input>
                    </a-row>
                    <a-row style="text-align: center;margin-top: 20px">
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">仪表测量误差：</p>
                                  </span>
                        <input disabled style="float: left;text-align: center;width: 130px" placeholder="0.077%"></input>
                    </a-row>
                    <a-row style="text-align: center;margin-top: 20px">
                        <span>
                        <p style="vertical-align:middle;display: inline-block;float: left;margin-right: 20px">预测寿命(年)：</p>
                                  </span>
                        <input disabled style="float: left;text-align: center;width: 130px" placeholder="0.124"></input>
                    </a-row>
                </div>
                <div>
                <img src="~@/assets/img/page.png"  width="60%">
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
name: "PerformancePredict",

}
</script>

<style scoped>

</style>