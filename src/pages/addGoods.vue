<template>
    <div class="add_goods">
        <head-top></head-top>
        <div class="baseList_table_conter">
            <!--S 选择食品种类-->
            <header class="form_header">选择食品种类</header>
            <el-form ref="selectGoodsForm" :model="selectGoodsForm" label-width="100px" class="add_goods_form">
                <el-row class="species_select">
                    <el-form-item label="食品种类">
                        <el-select v-model="selectGoodsForm.selectSpecies" style="width:100%;">
                            <el-option :key="item.value" :label="item.label" :value="item.value" v-for="item in selectGoodsForm.selectSpeciesList"></el-option>
                        </el-select>
                    </el-form-item>
                </el-row>
                <el-row class="add_select_show" :class="showEdit ? 'active' : ''">
                    <div class="add_select">
                        <el-form-item label="食品种类">
                            <el-input v-model="selectGoodsForm.speciesName"></el-input>
                        </el-form-item>
                        <el-form-item label="各类描述">
                            <el-input v-model="selectGoodsForm.speciesInfo"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitFoodSpecies">提交</el-button>
                        </el-form-item>
                    </div>
                </el-row>
                <div class="show_edit_btn" @click="showEditLine">
                    <i class="el-icon-arrow-down" v-if="!showEdit"></i>
                    <i class="el-icon-arrow-up" v-else></i>
                    <span>添加食品种类</span>
                </div>
            </el-form>
            <!--E 选择食品种类-->

            <!--S 添加食品 -->
            <header class="form_header mrt_40">添加食品</header>
            <el-form ref="addGoodsForm" :model="addGoodsForm" :rules="rules" label-width="100px" class="add_goods_form add_goods_line">
                <el-form-item label="食品名称" prop="foodName">
                    <el-input v-model="addGoodsForm.foodName"></el-input>
                </el-form-item>
                <el-form-item label="食品活动">
                    <el-input v-model="addGoodsForm.foodActivity"></el-input>
                </el-form-item>
                <el-form-item label="食品详情">
                    <el-input v-model="addGoodsForm.foodInfo"></el-input>
                </el-form-item>
                <el-form-item label="上传食品图片">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar"> -->
                        <i class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="食品特点">
                    <el-select v-model="addGoodsForm.charFood">
                        <el-option key="1" label="好吃" value="1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="食品规格">
                    <el-radio v-model="foodSpecs" label="one">单规格</el-radio>
                    <el-radio v-model="foodSpecs" label="more">多规格</el-radio>
                </el-form-item>
                <template v-if="foodSpecs === 'one'">
                    <el-form-item label="包装费">
                        <el-input-number v-model="addGoodsForm.specData[0].packExpense" :min="0"></el-input-number>
                    </el-form-item>
                    <el-form-item label="价格">
                        <el-input-number v-model="addGoodsForm.specData[0].price" :min="0"></el-input-number>
                    </el-form-item>
                </template>
                <template v-else>
                    <el-row class="txt_center mrb_20">
                        <el-button type="primary" @click="addScopeVisible=true">添加规格</el-button>
                    </el-row>
                    <el-row class="baseList_table_border">
                        <el-table :data="addGoodsForm.specData" header-row-class-name="baseList_table_head">
                            <el-table-column label="规格" prop="specName"></el-table-column>
                            <el-table-column label="包装费" prop="packExpense"></el-table-column>
                            <el-table-column label="价格" prop="price"></el-table-column>
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <el-button type="danger" size="mini" @click="deleteScope(scope)">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-row>
                </template>
                <el-form-item>
                    <el-button type="primary" @click="submitAddGoodsForm('addGoodsForm')">确认添加食品</el-button>
                </el-form-item>
            </el-form>
            <!--E 添加食品 -->

            <!--S 添加规格-->
            <el-dialog
                title="添加规格"
                :show-close="false"
                :visible.sync="addScopeVisible">
                <el-form ref="addSpecForm" :model="addSpecForm" :rules="rules" label-width="100px">
                    <el-form-item label="规格" prop="specName">
                        <el-input v-model="addSpecForm.specName"></el-input>
                    </el-form-item>
                    <el-form-item label="包装费">
                        <el-input-number v-model="addSpecForm.packExpense" :min="0"></el-input-number>
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
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import { addGoods, addFoodTypes } from '../api/getData'
    export default {
        data () {
            return {
                selectGoodsForm: {
                    selectSpeciesList: [
                        {
                            label: '糍粑',
                            value: '01'
                        },
                        {
                            label: '小糍粑',
                            value: '02'
                        },
                        {
                            label: '大糍粑',
                            value: '03'
                        }
                    ],
                    selectSpecies: '',
                    speciesName: '',
                    speciesInfo: ''
                },
                addGoodsForm: {
                    foodName: '',
                    foodActivity: '',
                    foodInfo: '',
                    charFood: '',
                    specData: [
                        {
                            specName: '默认',
                            packExpense: 0,
                            price: 0
                        }
                    ]
                },
                addSpecForm: {
                    specName: '',
                    packExpense: 0,
                    price: 0
                },
                rules: {
                    foodName: [
                        {required: true, message: '请输入食品名称', trigger: 'blur'}
                    ],
                    specName: [
                        {required: true, message: '请输入规格', trigger: 'blur'}
                    ]
                },
                showEdit: false,
                addScopeVisible: false,
                foodSpecs: 'one'
            }
        },
        methods: {
            showEditLine () {
                this.showEdit = !this.showEdit;
            },
            handleAvatarSuccess (res, file) {

            },
            beforeAvatarUpload (file) {

            },
            async submitFoodSpecies () {      // 添加食品种类
                let name = this.selectGoodsForm.speciesName.replace(/(^\s*)|(\s*$)/g, '');
                let info = this.selectGoodsForm.speciesInfo.replace(/(^\s*)|(\s*$)/g, '');
                if(!(name === '')){
                    let res = await addFoodTypes({speciesName: name, speciesInfo: info});
                    console.log(res);
                    if(res.state === true){
                        this.$message({
                            type: 'success',
                            message: '添加成功'
                        });
                        
                        this.showEdit = !this.showEdit;
                        this.selectGoodsForm.speciesName = '';
                        this.selectGoodsForm.speciesInfo = '';
                    }
                } else {
                    this.$notify({
                        type: 'error',
                        title: '错误',
                        message: '必须填写食品种类！'
                    });
                }
            },
            deleteScope (res) {     // 删除规格
                let specData = this.addGoodsForm.specData;
                if(specData.length > 1){
                    specData.splice(res.$index, 1);
                } else {
                    this.$notify({
                        type: 'error',
                        title: '错误',
                        message: '必须保留一个规格！'
                    });
                }
            },
            addSpec (formName) {    // 添加规格
                this.$refs[formName].validate((valid) => {
                    if(valid){
                        this.addGoodsForm.specData.push({...this.addSpecForm});
                        this.emptySpec(formName);
                    }
                });
            },
            emptySpec (formName) {  // 清空规格
                this.addSpecForm.packExpense = 0;
                this.addSpecForm.price = 0;
                this.$refs[formName].resetFields();
                this.addScopeVisible = false;
            },
            async submitAddGoodsForm (formName) {    // 确认添加食品
                this.$refs[formName].validate(async (valid) => {
                    if(valid){
                        let res = await addGoods({...this.addGoodsForm,...this.selectGoodsForm});
                        console.log(res);
                        if(res.data) {
                            this.$message({
                                type: 'success',
                                message: '商品添加成功！'
                            });
                        }
                    } else {
                        this.$message({
                            type: 'error',
                            message: '表单中有必填项未通过验证！'
                        });
                    }
                });
            }
        },
        components: {
            headTop
        }
    }
</script>

<style>
    .add_goods .add_goods_form{
        border: 1px solid #eaeefb;
        border-radius: 6px;
    }
    .add_goods .add_goods_form:hover{
        box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
        border-radius: 6px;
        transition: all 400ms;
    }
    .add_goods .form_header{
		text-align: center;
		margin-bottom: 10px;
    }
    .add_goods .species_select,
    .add_goods .add_select,
    .add_goods .show_edit_btn,
    .add_goods .add_goods_line{
        padding: 10px 10px;
    }
    .add_goods .add_select{
        background-color: #f9fafc;
        border-top: 1px solid #eaeefb;
    }
    .add_goods .add_select_show{
        height: 0px;
        overflow: hidden;
        transition: all 400ms;
    }
    .add_goods .add_select_show.active{
        height: 207px;
    }
    .add_goods .show_edit_btn{
        text-align: center;
        border-top: 1px solid #eaeefb;
        cursor: pointer;
    }
    .add_goods .show_edit_btn i{
        color: #999;
    }
    .add_goods .show_edit_btn span{
        font-size: 14px;
        color: #999;
    }
    .add_goods .show_edit_btn:hover i,
    .add_goods .show_edit_btn:hover span{
        color: #20a0ff;
    }
    .add_goods .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .add_goods .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .add_goods .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 120px;
        height: 120px;
        line-height: 120px;
        text-align: center;
    }
    .add_goods .avatar {
        width: 120px;
        height: 120px;
        display: block;
    }
</style>