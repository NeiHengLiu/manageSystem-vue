<template>
    <div class="setting_up">
        <head-top></head-top>
        <div class="baseList_table_conter">
            <h1 class="title">管理员信息</h1>
            <div class="info">
                <p>姓名：xiaobai</p>
                <p>注册时间：2018-02-12 15:44</p>
                <p>管理员权限：管理员</p>
                <p>管理员 ID：6819</p>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    export default {
        data () {
            return {
                
            }
        },
        components: {
            headTop
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

