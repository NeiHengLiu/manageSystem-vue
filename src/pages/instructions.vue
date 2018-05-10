<template>
    <div class="instructions">
        <head-top></head-top>
        <div class="baseList_table_conter">
            <div class="info">
                <p>外卖后台管理系统</p>
                <p>这个系统的数据是根据mock.js自动生成的</p>
                <p>所以帐号只能用本开发者提供的那两个帐号才能正常登陆</p>
                <p>两个帐号的权限不一样，“xiaobai”帐号不可以“文本编辑”，"admin"帐号可以“文本编辑”</p>
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
    .instructions .info{
        width: 80%;
        margin: 0 auto;
    }
    .instructions .info p{
        text-align: center;
        padding: 10px 0;
    }
</style>

