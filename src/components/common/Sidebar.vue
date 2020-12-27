<template>
    <div class="sidebar"  style="background-color: #ffffff;box-shadow: 3px 3px 3px; padding-bottom: 30px;" >
        <a-tree
            :show-line="showLine"
            :show-icon="showIcon"
            :default-expanded-keys="['0-0']"
            @select="onSelect"
        >
            <a-icon slot="icon" type="carry-out" />
            <a-tree-node key="0-0">
                <a-icon slot="icon" type="carry-out" />
                <span slot="title" style="color: #1890ff">设备列表：</span>
                <a-tree-node key="0-0-0-0" title="leaf">
                    <a-icon slot="icon" type="carry-out" />
                </a-tree-node>
            </a-tree-node>
        </a-tree>
        <a-divider/>
    </div>
</template>

<script>
import bus from '../common/bus';

export default {
    data() {
        return {
            showLine: true,
            showIcon: false,
            collapse: false
        };
    },
    computed: {},
    created() {
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            this.collapse = msg;
            bus.$emit('collapse-content', msg);
        });
    },
    methods: {
        onSelect(selectedKeys, info) {
            console.log('selected', selectedKeys, info);
        }
    }
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    width: 245px;
    top: 70px;
    bottom: 0;
    /*overflow-y: scroll;*/
}

.sidebar::-webkit-scrollbar {
    width: 0;
}

.sidebar > ul {
    height: 100%;
}
</style>
