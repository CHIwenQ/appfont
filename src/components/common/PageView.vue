<template>
    <div>
        <a-menu :bind="select" :defaultSelectedKeys="['info']" mode="horizontal" @click="handleClick">
            <a-menu-item key="/deviceSearch"  >
                <a-icon type="mail" />
                设备信息
            </a-menu-item>
            <a-menu-item key="/deviceConfig">
                <a-icon type="setting" />
                设备调校
            </a-menu-item>
            <a-menu-item key="/pressureSet">
                <a-icon type="monitor" />
                压力标定
            </a-menu-item>
            <a-menu-item key="/temperCompensation">
                <a-icon type="coffee" />
                温度补偿
            </a-menu-item>
            <a-menu-item key="/performancePredict">
                <a-icon type="fund" />
                性能预测
            </a-menu-item>
        </a-menu>
    </div>
</template>

<script>
export default {
    name: 'PageView',
    data() {
        return {
            select: ''
        };
    },
    methods: {
        handleClick(root) {
            this.$router.replace(root.key)
        },
    }
};

</script>

<style scoped>

</style>