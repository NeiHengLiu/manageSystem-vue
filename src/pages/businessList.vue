<template>
    <div class="business_list">
        <head-top></head-top>
        <div class="baseList_table_conter">
            <div class="baseList_table_border">
                <el-table :data="tableDate" header-row-class-name="baseList_table_head">
                    <el-table-column label="店铺名称"></el-table-column>
                    <el-table-column label="店铺地址"></el-table-column>
                    <el-table-column label="店铺介绍"></el-table-column>
                    <el-table-column label="操作"></el-table-column>
                </el-table>
            </div>
            <div class="baseList_table_page_number"></div>
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'

    export default {
        data () {
            return {
                tableDate: [],
                lineNumber: 20,		// 每页显示多少行
				totalData: 5304,	// 总数据多少条
            }
        },
        components: {
            headTop
        }
    }
</script>

<style>
</style>


