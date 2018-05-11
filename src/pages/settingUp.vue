<template>
    <div class="setting_up">
        <head-top></head-top>
        <div class="baseList_table_conter">
            <h1 class="title">管理员信息</h1>
            <div class="info">
                <p>姓名：{{ name }}</p>
                <p>注册时间：{{ date }}</p>
                <p>管理员权限：{{ status }}</p>
                <p>管理员 ID：{{ id }}</p>
                <p>登录时间：{{ loginTime }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import { mapGetters } from 'vuex'
    export default {
        data () {
            return {
                
            }
        },
        components: {
            headTop
        },
        computed: {
            ...mapGetters([
                'name',
                'date',
                'status',
                'id',
                'loginTime'
            ])
        }
    }
</script>

<style>
    .setting_up .title{
        font-size: 22px;
        text-align: center;
    }
    .setting_up .info{
        width: 80%;
        height: 350px;
        margin: 35px auto 0;
        padding: 20px 20px;
        background-color: #F9FAFC;
        box-sizing: border-box;
    }
    .setting_up .info p{
        padding: 10px 0;
        color: #666;
    }
</style>

