<template>
    <div class="statistical_pie">
        <div id="statistical_pie"></div>
    </div>
</template>

<script>
    import echarts from 'echarts/lib/echarts'
    // 引入饼图
    import 'echarts/lib/chart/pie'
    export default {
        mounted () {
            this.mychart = echarts.init(document.getElementById('statistical_pie'));
            this.initData();
        },
        props: ['data'],
        methods: {
            initData () {
                const option = {
                        title : {
                            text: '用户分布',
                            x:'center'
                        },
                        tooltip : {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {c}&nbsp;&nbsp;&nbsp;&nbsp;占比&nbsp;:&nbsp;{d}%"
                        },
                        legend: {
                            orient: 'vertical',
                            left: 'left',
                            //data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                        },
                        series : [
                            {
                                name: '访问来源',
                                type: 'pie',
                                radius : '55%',
                                center: ['50%', '60%'],
                                data: [],
                                itemStyle: {
                                    emphasis: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                    };
                this.mychart.setOption(option);
                window.onresize = () => {
                    this.mychart.resize();
                }
            }
        },
        watch: {
            data () {
                this.mychart.setOption({
                    series: [
                        {
                            data: this.data
                        }
                    ]
                });
            }
        }
    }
</script>

<style>
    .statistical_pie{
        width: 100%;
        padding: 0 50px;
        box-sizing: border-box;
    }
    .statistical_pie #statistical_pie{
        width: 100%;
        height: 450px;
    }
</style>
