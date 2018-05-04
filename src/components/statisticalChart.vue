<template>
    <div class="statistical_chart">
        <div id="statistical_chart"></div>
    </div>
</template>

<script>
    import echarts from 'echarts/lib/echarts'
    // 引入柱形图
    import 'echarts/lib/chart/bar'
    // 引入折线图
    import 'echarts/lib/chart/line'
    // 引入提示框和标题组件
    import 'echarts/lib/component/tooltip'
    import 'echarts/lib/component/title'
    import 'echarts/lib/component/toolbox'
    import 'echarts/lib/component/legend';
    export default {
        mounted () {
            this.myChart = echarts.init(document.getElementById('statistical_chart'));
            this.initData();
        },
        props: ['xLabelName', 'dataSet'],
        methods: {
            initData () {
                const option = {
                    color: ['#5793f3', '#675bba', '#d14a61'],
                    title: {
                        text: '走势图'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['新增用户', '新增订单', '新增管理员']
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            dataView: {
                                readOnly: false
                            },
                            magicType: {
                                type: ['bar', 'line']
                            },
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: []
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '新增用户',
                            type: 'line',
                            data: []
                        },
                        {
                            name: '新增订单',
                            type: 'line',
                            data: []
                        },
                        {
                            name: '新增管理员',
                            type: 'line',
                            data: []
                        }
                    ]
                };
                this.myChart.setOption(option);
                window.onresize = () => {
                    this.myChart.resize();
                }
            }
        },
        watch: {
            xLabelName () {
                this.myChart.setOption({
                    xAxis: {
                        data: this.xLabelName
                    }
                });
            },
            dataSet () {
                this.myChart.setOption({
                    series: [
                        { data: this.dataSet[0] },
                        { data: this.dataSet[1] },
                        { data: this.dataSet[2] }
                    ]
                });
            }
        }
    }
</script>

<style>
    .statistical_chart{
        width: 100%;
        padding: 0 50px;
        box-sizing: border-box;
    }
    .statistical_chart #statistical_chart{
        width:100%;
        height: 450px;
    }
</style>


