<template>
    <div class="admin_list">
        <head-top></head-top>
        <div class="baseList_table_conter">
            <div class="baseList_table_border">
                <el-table :data="tableData" header-row-class-name="baseList_table_head">
                    <el-table-column label="姓名" prop="userName"></el-table-column>
                    <el-table-column label="注册日期" prop="regDate"></el-table-column>
                    <el-table-column label="地址" prop="address"></el-table-column>
                    <el-table-column label="权限" prop="juris"></el-table-column>
                </el-table>
            </div>
            <div class="baseList_table_page_number">
                <el-pagination
                    @current-change="changePage"
                    layout="total, prev, pager, next"
                    :page-size="lineNumber"
                    :total="totalData">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import { adminList } from '../api/getData'
    export default {
        data () {
            return {
                tableData: [],
                lineNumber: 20,
                totalData: 2519
            }
        },
        mounted () {
            this.getAdminList();
        },
        methods: {
            async getAdminList () {
                let res = await adminList();
                if(res.data.length > 0){
                    this.tableData = res.data;
                }
            },
            changePage (val) {
                this.getAdminList();
            }
        },
        components: {
            headTop
        }
    }
</script>

<style>

</style>

