<template>
    <div class="head_top">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{path: '/manage'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(value, index) in $route.meta.crumbs">{{ value }}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-dropdown @command="dropdownHandle">
            <img class="head_icon" src="../assets/images/header_icon.jpg" alt="头像">
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="manage">首页</el-dropdown-item>
                <el-dropdown-item command="exit">退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    import { logout } from '../api/getData'
    import { removeToken } from '../utils/token'
    export default {
        methods: {
            async dropdownHandle (value) {
                if(value === 'manage'){
                    this.$router.push('/manage');
                } else if(value === 'exit'){
                    let res = await logout();
                    if(res.data){
                        this.$message({
                            type: 'success',
                            message: '退出成功'
                        });
                        removeToken();
                        this.$router.push('/');
                    } else {
                        this.$message({
                            type: 'error',
                            message: '退出失败，请重试'
                        });
                    }
                }
            }
        }
    }
</script>

<style>
    .head_top{
        width: 100%;
        height: 60px;
        background-color: #EFF2F7;
        padding: 0 20px;
        box-sizing: border-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -ms-flex-align: center;
        align-items: center;
    }
    .head_top .head_icon{
        display: block;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        outline: none;
    }
</style>


