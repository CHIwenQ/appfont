<template>
    <a-spin :spinning="loadPage">
        <a-row style="height: 60%">
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
            },
            outputData: [

            ],
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
        }
    },
    methods: {
    }
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

