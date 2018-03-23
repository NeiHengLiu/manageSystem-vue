<template>
    <div class="food_list">
        <head-top></head-top>
        <div class="baseList_table_conter">
            <div class="baseList_table_border">
                <el-table :data="tableData" @expand-change="changeRow" header-row-class-name="baseList_table_head">
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <el-form label-position="left" inline class="baseList_table_expand">
                                <el-form-item label="食品名称">
                                    <span>{{ props.row.foodName }}</span>
                                </el-form-item>
                                <el-form-item label="餐馆名称">
                                    <span>{{ props.row.restaurantName }}</span>
                                </el-form-item>
                                <el-form-item label="食品ID">
                                    <span>{{ props.row.foodId }}</span>
                                </el-form-item>
                                <el-form-item label="餐馆ID">
                                    <span>{{ props.row.restaurantId }}</span>
                                </el-form-item>
                                <el-form-item label="食品介绍">
                                    <span>{{ props.row.foodIntroduce }}</span>
                                </el-form-item>
                                <el-form-item label="餐馆地址">
                                    <span>{{ props.row.restaurantAddress }}</span>
                                </el-form-item>
                                <el-form-item label="食品评分">
                                    <span>{{ props.row.foodScore }}</span>
                                </el-form-item>
                                <el-form-item label="食品分类">
                                    <span>{{ props.row.foodClassify }}</span>
                                </el-form-item>
                                <el-form-item label="月销量">
                                    <span>{{ props.row.monthlySales }}</span>
                                </el-form-item>
                            </el-form>
                        </template>
                    </el-table-column>
                    <el-table-column label="食品名称" prop="foodName"></el-table-column>
                    <el-table-column label="食品介绍" prop="foodIntroduce"></el-table-column>
                    <el-table-column label="评分" prop="foodScore"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button type="primary" @click="editRow(scope)" size="mini">编辑</el-button>
                            <el-button type="danger" @click="deleteRow(scope)" size="mini">删除</el-button>
                        </template>
                    </el-table-column>
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
    import { foodList, deleteFood } from '../api/getData'
    export default {
        data () {
            return {
                tableData: [],
				lineNumber: 20,		// 每页显示多少行
				totalData: 219,	// 总数据多少条
            }
        },
        mounted () {
            this.getFoodList();
        },
        methods: {
            changePage (val) {  // 选择页数
                this.getFoodList();
            },
            changeRow (row, expandedRows) { // 展开或关闭行
                //console.log(row);
                //console.log(expandedRows);
            },
            async getFoodList () {  // 获取食品列表数据
                const res = await foodList();
                this.tableData = res.data;
            },
            editRow (row) {   // 编辑一行的内容

            },
            deleteRow (row) {
                this.$confirm('确认删除这条数据吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                })
                .then(async () => {
                    let foodId = row.row.foodId;
                    let res = await deleteFood({foodId: foodId});
                    if(res.state === true){
                        this.tableData.splice(row.$index, 1);
                        this.$message({
                            type: 'success',
                            message: '删除成功！'
                        });
                    }
                })
                .catch(() => {

                });
            }
        },
        components: {
            headTop
        }
    }
</script>

<style>
    
</style>

