<template>
    <a-row>
        <a-col>
            <div :style="{ height: chartHeight}" :id="containerId"></div>
        </a-col>
    </a-row>
</template>
<script>
import {Chart} from '@antv/g2';
export default {
    name: "LineChart",
    data() {
        return {
            chart: null,
            chartData: [],
        }
    },
    props: {
        chartHeight: {
            type: String,
            default: '350px'
        },
        containerId: {
            type: String,
            required: true
        },
        sourceData: {
            type: Array,
            required: true,
        },
    },
    mounted() {
        if (Object.keys(this.sourceData).length > 0) {
            this.initChart()
        }
    },
    methods: {
        initChart() {
            this.initData()
            if (!this.chart) {
                this.chart = new Chart({
                    container: this.containerId,
                    autoFit: true,
                    padding: [50, 40, 70, 80],
                });
                this.chart.tooltip({
                    showCrosshairs: true,
                    enterable: false,
                    position: 'right',
                    shared: true,
                    containerTpl: '<div class="g2-tooltip">' + '<p class="g2-tooltip-title"></p>' + '<table class="g2-tooltip-list"></table>' + '</div>',
                    itemTpl: '<li class="g2-tooltip-list-item">'
                        + '<span class="g2-tooltip-marker" style="background-color:{color};width:0px;height:0px;border-radius:50%;display:inline-block;margin-right:8px;"></span>'
                        + '{name}'
                        + '<span class="g2-tooltip-value">{value}</span>'
                        + '</li>',
                })

                this.chart
                    .line()
                    .position('xAxis*value')
                    .color('#7446e2')
                    .shape('smooth');

                this.chart
                    .point()
                    .position('xAxis*value')
                    .color('type', '#9067ef')
                    .shape('circle');
                this.chart.interaction('element-active');
                this.chart.data(this.chartData);
            }
            this.chart.changeData(this.chartData)
        },
        initData() {
            this.chartData = this.sourceData
        },
    },
    watch: {
        sourceData() {
            this.initChart()
        }
    },
}
</script>
