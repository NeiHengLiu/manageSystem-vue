<template>
    <div class="manage wah_100">
        <el-row class="wah_100">
            <el-col class="h_100 bg_324057" :span="4" style="overflow-x: hidden;">
                <el-menu class="el-menu_nav"
                         :default-active="defaultActive"
                         :unique-opened = "true"
                         :text-color="'#bfcbd9'"
                         :active-text-color="'#20a0ff'"
                         :router="true">
                    <el-menu-item index="manage">
                        <i class="el-icon-menu"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-submenu index="2" popper-class="submenu_bg">
                        <template slot="title">
                            <i class="el-icon-document"></i>
                            <span>数据管理</span>
                        </template>
                        <el-menu-item index="userList">用户列表</el-menu-item>
                        <el-menu-item index="businessList">商家列表</el-menu-item>
                        <el-menu-item index="foodList">食品列表</el-menu-item>
                        <el-menu-item index="orderList">订单列表</el-menu-item>
                        <el-menu-item index="adminList">管理员列表</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-plus"></i>
                            <span>添加数据</span>
                        </template>
                        <el-menu-item index="3_1">添加商铺</el-menu-item>
                        <el-menu-item index="3_1">添加商品</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-star-on"></i>
                            <span>图表</span>
                        </template>
                        <el-menu-item index="4_1">用户分布</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-edit"></i>
                            <span>编辑</span>
                        </template>
                        <el-menu-item index="5_1">文本编辑</el-menu-item>
                    </el-submenu>
                    <el-submenu index="6">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span>设置</span>
                        </template>
                        <el-menu-item index="6_1">管理员设置</el-menu-item>
                    </el-submenu>
                    <el-submenu index="7">
                        <template slot="title">
                            <i class="el-icon-warning"></i>
                            <span>说明</span>
                        </template>
                        <el-menu-item index="7_1">说明</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
            <el-col class="h_100" :span="20" style="overflow: auto;">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        computed: {
            defaultActive () {
                return this.$route.path.replace('/', '');
            }
        }
    }
</script>

<style>
    .manage .el-menu_nav{
        background-color: #324157;
    }
    .manage .el-menu_nav .el-menu--inline{
        background-color: #1f2d3d;
    }
    .manage .el-menu_nav .el-submenu__title:hover,
    .manage .el-menu_nav .el-menu-item:hover,
    .manage .el-menu_nav .el-menu-item:link,
    .manage .el-menu_nav .el-menu-item:focus,
    .manage .el-menu_nav .el-menu-item:active{
        background-color: #48576a;
    }
</style>


