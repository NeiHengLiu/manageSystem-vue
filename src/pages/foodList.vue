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
            <el-dialog title="修改食品信息" :show-close="false" :visible.sync="outerVisible">
                <el-form :model="outerForm" label-width="100px">
                    <el-form-item label="食品名称">
                        <el-input v-model="outerForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="食品介绍">
                        <el-input v-model="outerForm.introduce"></el-input>
                    </el-form-item>
                    <el-form-item label="食品分类">
                        <el-select v-model="outerForm.selectVal" placeholder="请选择食品分类">
                            <el-option :key="item.value" :label="item.label" :value="item.value" v-for="item in foodClassify"></el-option>
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
                <el-row>
                    <div class="baseList_table_border">
                        <el-table :data="specData" header-row-class-name="baseList_table_head">
                            <el-table-column label="规格" prop="specName"></el-table-column>
                            <el-table-column label="包装费" prop="pack"></el-table-column>
                            <el-table-column label="价格" prop="price"></el-table-column>
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <el-button type="danger" size="mini" @click="deleteScope(scope)">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                    <el-row class="txt_center mrt_20">
                        <el-button type="primary" @click="innerVisible=true">添加规格</el-button>
                    </el-row>
                </el-row>
                <!--E 规格列表-->

                <!--S 添加规格-->
                <el-dialog
                    title="添加规格"
                    :show-close="false"
                    :visible.sync="innerVisible"
                    :append-to-body="true">
                    <el-form ref="addSpecForm" :model="addSpecForm" :rules="rules" label-width="100px">
                        <el-form-item label="规格" prop="specName">
                            <el-input v-model="addSpecForm.specName"></el-input>
                        </el-form-item>
                        <el-form-item label="包装费">
                            <el-input-number v-model="addSpecForm.pack" :min="0"></el-input-number>
                        </el-form-item>
                        <el-form-item label="价格">
                            <el-input-number v-model="addSpecForm.price" :min="0"></el-input-number>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="emptySpec('addSpecForm')">取消</el-button>
                        <el-button type="primary" @click="addSpec('addSpecForm')">确定</el-button>
                    </div>
                </el-dialog>
                <!--E 添加规格-->

                <div slot="footer" class="dialog-footer">
                    <el-button @click="outerVisible=false">取消</el-button>
                    <el-button type="primary">确定</el-button>
                </div>
            </el-dialog>
            <!--E 修改食品信息-->
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import { foodList, foodDelete, foodClassify } from '../api/getData'
    export default {
        data () {
            return {
                tableData: [],
				lineNumber: 20,		// 每页显示多少行
                totalData: 219,	// 总数据多少条
                outerVisible: false,     // 外层对话框
                innerVisible: false,     // 内层对话框
                outerForm: {
                    name: '',
                    introduce: '',
                    selectVal: ''
                },
                specData: [],
                addSpecForm: {
                    specName: '',
                    pack: 0,
                    price: 0
                },
                foodClassify: [],
                currClassifyVal: '',
                rules: {
                    specName: [
                        {required: true, message: '请输入规格名称', trigger: 'blur'}
                    ]
                }
            }
        },
        components: {
            headTop
        },
        mounted () {
            this.getFoodList();
            this.getFoodClassify();
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
            async getFoodClassify () {    // 获取食品分类
                let res = await foodClassify();
                this.foodClassify = res.data;
            },
            editRow (row) {   // 编辑一行的内容

                this.outerVisible = true;
            },
            deleteRow (row) {
                this.$confirm('确认删除《'+row.row.foodName+'》？', '删除提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                })
                .then(async () => {
                    let foodId = row.row.foodId;
                    let res = await foodDelete({foodId: foodId});
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
                // console.log(file.response);
            },
            handleRemove (file, fileList) {   // 文件列表移除文件时的钩子
                // console.log(file);
                // console.log(fileList);
            },
            maxImgNum (files, fileList) {   // 文件超出个数限制时
                this.$message({
                    showClose: true,
                    message: '最多只能上传四张图片！'
                });
            },
            deleteScope (row) {     // 删除规格列表项
                var index = row.$index;
                this.specData.splice(index, 1);
            },
            addSpec (formName) {    // 添加规格
                this.$refs[formName].validate((valid) => {
                    if(valid){
                        this.specData.push({...this.addSpecForm});
                        this.emptySpec(formName);
                    }
                });
            },
            emptySpec (formName) {  // 清空规格表单
                this.addSpecForm.pack = 0;
                this.addSpecForm.price = 0;
                this.$refs[formName].resetFields();
                this.innerVisible = false;
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

