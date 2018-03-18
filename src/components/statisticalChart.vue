<template>
    <div class="statistical_chart">
        <div id="statistical_chart" style="width:100%;height: 450px;"></div>
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
    export default {
        mounted () {
            this.myChart = echarts.init(document.getElementById('statistical_chart'));
            this.initData();
        },
        methods: {
            initData () {
                const option = {
                    title: {
                        text: '走势图'
                    },
                    tooltip: {},
                    legend: {
                        data:['销量']
                    },
                    xAxis: {
                        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                    },
                    yAxis: {},
                    series: [
                        {
                            name: '销量',
                            type: 'line',
                            data: [5, 20, 36, 10, 10, 20]
                        }
                    ]
                };

                this.myChart.setOption(option);
            }
        }
    }
</script>

<style>
    .statistical_chart #statistical_chart{
        padding: 0px 20px;
    }
</style>


