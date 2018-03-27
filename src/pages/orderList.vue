<template>
    <div class="order_list">
        <head-top></head-top>
        <div class="baseList_table_conter">
            <!--S 订单列表-->
            <div class="baseList_table_border">
                <el-table :data="tableData" header-row-class-name="baseList_table_head">
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <el-row>
                                <el-row>
                                    <el-col :span="12" class="boxFlex">
                                        <label class="title boxFlexStart">用户名</label>
                                        <div class="colFlex boxFlexStart">{{ props.row.userName }}</div>
                                    </el-col>
                                    <el-col :span="12" class="boxFlex">
                                        <label class="title boxFlexStart">店铺名称</label>
                                        <div class="colFlex boxFlexStart">{{ props.row.shopName }}</div>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="12" class="boxFlex">
                                        <label class="title boxFlexStart">收货地址</label>
                                        <div class="colFlex boxFlexStart">{{ props.row.shipAddress }}</div>
                                    </el-col>
                                    <el-col :span="12" class="boxFlex">
                                        <label class="title boxFlexStart">店铺ID</label>
                                        <div class="colFlex boxFlexStart">{{ props.row.storeId }}</div>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="24" class="boxFlex">
                                        <label class="title boxFlexStart">店铺地址</label>
                                        <div class="colFlex boxFlexStart">{{ props.row.storeAddress }}</div>
                                    </el-col>
                                </el-row>
                            </el-row>
                        </template>
                    </el-table-column>
                    <el-table-column label="订单 ID" prop="orrderId"></el-table-column>
                    <el-table-column label="总价格" prop="totalPrice"></el-table-column>
                    <el-table-column label="订单状态" prop="orrderState"></el-table-column>
                </el-table>
            </div>
            <!--E 订单列表-->
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import { orderList } from '../api/getData'
    export default {
        data () {
            return {
                tableData: [
                    {
                        orrderId: '2125',
                        totalPrice: 12205,
                        orrderState: '支付超时',
                        userName: '小白',
                        shopName: '小白之家',
                        shipAddress: '重庆市渝北区龙山街道',
                        storeId: '110',
                        storeAddress: '重庆市渝中区日月光中心'
                    },
                    {
                        orrderId: '2125',
                        totalPrice: 12205,
                        orrderState: '支付超时',
                        userName: '小白',
                        shopName: '小白之家',
                        shipAddress: '重庆市渝北区龙山街道',
                        storeId: '110',
                        storeAddress: '重庆市渝中区日月光中心'
                    }
                ]
            }
        },
        components: {
            headTop
        }
    }
</script>

<style>
    .order_list .title{
        width: 90px;
        height: 40px;
        font-size: 14px;
        color: #99a9bf;
        padding: 0 12px 0 0;
    }
    .order_list .colFlex{
        font-size: 14px;
        padding-right: 12px;
    }
</style>

