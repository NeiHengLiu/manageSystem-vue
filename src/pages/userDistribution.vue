<template>
    <div class="user_distribution">
        <head-top></head-top>
        <div class="baseList_table_conter">
            <stat-pie></stat-pie>
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import statPie from '../components/statisticalPie'
    export default {
        data () {
            return {

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

