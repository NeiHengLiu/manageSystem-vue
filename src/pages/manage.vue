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
                    <!-- <el-submenu index="2" popper-class="submenu_bg">
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
                        <el-menu-item index="addShops">添加商铺</el-menu-item>
                        <el-menu-item index="addGoods">添加商品</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-star-on"></i>
                            <span>图表</span>
                        </template>
                        <el-menu-item index="userDistribution">用户分布</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-edit"></i>
                            <span>编辑</span>
                        </template>
                        <el-menu-item index="richTextEditor">文本编辑</el-menu-item>
                    </el-submenu>
                    <el-submenu index="6">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span>设置</span>
                        </template>
                        <el-menu-item index="settingUp">管理员设置</el-menu-item>
                    </el-submenu>
                    <el-submenu index="7">
                        <template slot="title">
                            <i class="el-icon-warning"></i>
                            <span>说明</span>
                        </template>
                        <el-menu-item index="instructions">说明</el-menu-item>
                    </el-submenu> -->
                    <el-submenu :index="(index+2).toString()" popper-class="submenu_bg" v-for="(item, index) in menuList">
                        <template slot="title">
                            <i class="el-icon-document"></i>
                            <span>{{ item.parent.title }}</span>
                        </template>
                        <el-menu-item :index="menuItem.path" v-for="menuItem in item.sub">{{ menuItem.title }}</el-menu-item>
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
            },
            menuList () {
                let menuData = this.$store.getters.addRouters;
                let menuList = [];
                let name = '';
                let itemObj = {
                    parent: {},
                    sub: []
                }
                menuData.forEach((val, index, arr) => {
                    if(val.meta.crumbs[0] === name){
                        itemObj.sub.push({
                            title: val.meta.crumbs[1],
                            path: val.path.substr(1)
                        });
                        name = val.meta.crumbs[0];
                    } else {
                        if(val.meta.crumbs[0] !== name && name !== ''){
                            menuList.push(itemObj);
                            itemObj = {
                                parent: {},
                                sub: []
                            }
                        }
                        itemObj.parent.title = val.meta.crumbs[0];
                        itemObj.parent.icon = '';
                        itemObj.sub.push({
                            title: val.meta.crumbs[1],
                            path: val.path.substr(1)
                        });
                        name = val.meta.crumbs[0];
                    }
                });
                return menuList;
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


