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
                            <el-button>编辑</el-button>
                            <el-button>删除</el-button>
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
    export default {
        data () {
            return {
                tableData: [
                    {
                        foodName: '12987122',
                        restaurantName: '好滋好味鸡蛋仔',
                        foodId: '431',
                        restaurantId: '12',
                        foodIntroduce: '上海市普陀区真北路',
                        restaurantAddress: '王小虎夫妻店',
                        foodScore: '4.5',
                        foodClassify: '小吃类',
                        monthlySales: '239'
                    },
                    {
                        foodName: '458',
                        restaurantName: 'asdf',
                        foodId: '651',
                        restaurantId: '5',
                        foodIntroduce: 'qmnfvs,mg',
                        restaurantAddress: 'jivew',
                        foodScore: '4.9',
                        foodClassify: '想吃类',
                        monthlySales: '435'
                    }
                ],
				lineNumber: 20,		// 每页显示多少行
				totalData: 219,	// 总数据多少条
            }
        },
        methods: {
            changePage (val) {
                console.log(`当前第：${val}页`);
            },
            changeRow (row, expandedRows) {
                console.log(row);
                console.log(expandedRows);
            }
        },
        components: {
            headTop
        }
    }
</script>

<style>
    
</style>

