<template>
    <div class="user_distribution">
        <head-top></head-top>
        <div class="baseList_table_conter">
            <stat-pie :data="pieData"></stat-pie>
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import statPie from '../components/statisticalPie'
    import { userDistribution } from '../api/getData'
    export default {
        data () {
            return {
                pieData:[]
            }
        },
        mounted () {
            this.initData();
        },
        methods: {
            async initData () {
                try{
                    const res = await userDistribution();
                    this.pieData = res.data;
                } 
                catch(error){
                    this.$notify({
                        type: 'error',
                        title: '错误',
                        message: '服务器好像开小差了，重新试一下吧！'
                    });
                }
            }
        },
        components: {
            headTop,
            statPie
        }
    }
</script>
    
<style>

</style>

