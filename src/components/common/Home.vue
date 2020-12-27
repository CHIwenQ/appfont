<template>
    <div class="wrapper">
        <v-head></v-head>

        <v-sidebar></v-sidebar>
        <div class="content-box">
            <PageView class="header" />
            <div class="content">
                <a-row>
                    <span>
                        <a-select v-model="com.selected" style="float: left;margin-left: 20px  ;width: 150px">
                            <a-select-option v-for="(val,key,index) in com.groups" :key="index" :value="key">
                                {{ val }}
                            </a-select-option>
                        </a-select>
                        <a-button type="primary" style="float: right" @click="onSelectCom">
                            确认端口
                        </a-button>
                </span>
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

        // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        bus.$on('tags', msg => {
            let arr = [];
            for (let i = 0, len = msg.length; i < len; i++) {
                msg[i].name && arr.push(msg[i].name);
            }
            this.tagsList = arr;
        });
    }
};
</script>
