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
                                    <el-col :span="12">{{ props.row.name }}</el-col>
                                    <el-col :span="12"></el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="12"></el-col>
                                    <el-col :span="12"></el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="24"></el-col>
                                </el-row>
                            </el-row>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <!--E 订单列表-->
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    export default {
        data () {
            return {
                tableData: [
                    {
                        userName: '小白'
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

</style>

