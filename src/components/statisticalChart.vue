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
        props: ['name', 'dataSet'],
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
                        data: ["2018-03-14","2018-03-15","2018-03-16","2018-03-17","2018-03-18","2018-03-19", "2018-03-20"]
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '新增用户',
                            type: 'line',
                            data: [5, 20, 36, 10, 10, 20, 16]
                        },
                        {
                            name: '新增订单',
                            type: 'line',
                            data: [50, 10, 58, 40, 20, 34, 21]
                        },
                        {
                            name: '新增管理员',
                            type: 'line',
                            data: [40, 30, 16, 24, 31, 29, 43]
                        }
                    ]
                };
                this.myChart.setOption(option);
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


