<template>
    <div class="food_list">
        <head-top></head-top>
        <div class="baseList_table_conter">
            <!--S 食品列表-->
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
            <!--E 食品列表-->

            <!--S 修改食品信息-->
            <el-dialog title="修改食品信息" :visible.sync="outerVisible">
                <el-form :model="outerForm" label-width="100px">
                    <el-form-item label="食品名称">
                        <el-input v-model="outerForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="食品介绍">
                        <el-input v-model="outerForm.js"></el-input>
                    </el-form-item>
                    <el-form-item label="食品分类">
                        <el-select v-model="outerForm.select" placeholder="请选择食品分类">
                            <el-option label="热销榜" value="sxb"></el-option>
                            <el-option label="水果" value="sg"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="食品图片">
                        <el-upload
                         action="https://jsonplaceholder.typicode.com/posts/"
                         list-type="picture-card"
                         :limit="4"
                         :multiple="true"
                         :on-exceed="maxImgNum"
                         :on-preview="handlePictureCardPreview"
                         :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                    </el-form-item>
                </el-form>
                <!--S 规格列表-->
                <el-table :data="specData">
                    <el-table-column label="规格" prop="spec"></el-table-column>
                    <el-table-column label="包装费" prop="packExpense"></el-table-column>
                    <el-table-column label="价格" prop="price"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button type="danger" size="mini">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <!--E 规格列表-->
            </el-dialog>
            <!--E 修改食品信息-->
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
                outerVisible: true,     // 外层对话框
                innerVisible: true,     // 内层对话框
                outerForm: {
                    name: '',
                    js: '',
                    select: ''
                },
                specData: [
                    {
                        spec: '默认',
                        packExpense: '99',
                        price: '142'
                    }
                ]
            }
        },
        components: {
            headTop
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
                this.outerVisible = true;
            },
            deleteRow (row) {
                this.$confirm('确认删除《'+row.row.foodName+'》？', '提示', {
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
            },
            handlePictureCardPreview (file) {   // 点击已上传的文件链接时的钩子, 可以通过 file.response 拿到服务端返回数据
                console.log(file.response);
            },
            handleRemove (file, fileList) {   // 文件列表移除文件时的钩子
                console.log(file);
                console.log(fileList);
            },
            maxImgNum (files, fileList) {   // 文件超出个数限制时
                this.$message({
                    showClose: true,
                    message: '最多只能上传四张图片！'
                });
                console.log(files);
                console.log(fileList);
            }
        }
    }
</script>

<style>
    .food_list .el-upload-list--picture-card .el-upload-list__item,
    .food_list .el-upload--picture-card{
        width: 100px;
        height: 100px;
    }
    .food_list .el-upload--picture-card{
        line-height: 100px;
    }
    .food_list .el-upload-list--picture-card .el-progress,
    .food_list .el-progress-circle{
        width: 78px !important;
        height: 78px !important;
    }
</style>

