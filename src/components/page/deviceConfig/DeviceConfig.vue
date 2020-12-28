<template>
    <a-card style=";box-shadow: 3px 3px 3px;padding-bottom: 10px">
        <div class="bigbox">
            <div class="left">
                <a-divider orientation="left">传感器调校</a-divider>
                <div style="margin-bottom:90px">
                    <a-button size="large" >零点调整</a-button>
                </div>
                <div style="margin-bottom:90px">
                    <a-button size="large" >量程调整</a-button>
                </div>
                <div>
                    <a-button size="large" >主变量调整</a-button>
                </div>
                
            </div>
            <div class="center">
                <a-divider orientation="left">数模调校</a-divider>
                <div class="step">
                    <div class="start"><span class="stepcs">步骤一</span></div>
                    <a-input disabled  class="ctinput" value='输出4mA'></a-input>
                </div>
                <div class="step">
                    <div class="start"><span class="stepcs">步骤二</span></div>
                    <a-input   class="ctinput"></a-input>
                    <a-input disabled  class="behindinput" value='输入实际读数'></a-input>
                </div>
                <div class="step">
                    <div class="start"><span class="stepcs">步骤三</span></div>
                    <a-input disabled  class="ctinput" value='输出20mA'></a-input>
                </div>
                <div class="step">
                    <div class="start"><span class="stepcs">步骤四</span></div>
                    <a-input class="ctinput" ></a-input>
                    <a-input disabled  class="behindinput" value='输入实际读数'></a-input>
                </div>
                <div class="step">
                    <div class="start"><span class="stepcs">步骤五</span></div>
                    <a-input disabled  class="ctinput" value=''></a-input>
                </div>
            </div>
            <div class="right">
                <a-divider orientation="left">回路测试</a-divider>
                <div class="step">
                    <span class="stepcs">电流(mA)</span>
                    <a-input   class="ctinput"></a-input>
                </div>
                <a-divider orientation="left">电流控制策略</a-divider>
                <div class="control">
                    <div class="start"><span class="stepcs">起点</span></div>
                    <a-input   class="ctinput"></a-input>
                </div>
                <div class="control">
                    <div class="start"><span class="stepcs">终点</span></div>
                    <a-input   class="ctinput"></a-input>
                </div>
                <div class="control">
                    <div class="start"><span class="stepcs">步数</span></div>
                    <a-input   class="ctinput" ></a-input>
                </div>
                <div class="control">
                    <div class="start"><span class="stepcs">单步间隔</span></div>
                    <a-input   class="ctinput" ></a-input>
                </div>
            </div>
        </div>
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
