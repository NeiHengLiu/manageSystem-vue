<template>
    <div class="add_shops">
        <head-top></head-top>
        <div class="baseList_table_conter">
            <el-form ref="addShopsForm" :rules="rules" :model="addShopsForm" label-width="100px">
                <el-form-item label="店铺名称" prop="shopName">
                    <el-input v-model="addShopsForm.shopName" placeholder="请输入店铺名称"></el-input>
                </el-form-item>
                <el-form-item label="详细地址" prop="address">
                    <el-input v-model="addShopsForm.address" placeholder="请输入地址"></el-input>
                </el-form-item>
                <el-form-item label="联系电话" prop="tel">
                    <el-input v-model.number="addShopsForm.tel" maxlength="11" placeholder="请输入电话"></el-input>
                </el-form-item>
                <el-form-item label="店铺简介">
                    <el-input v-model="addShopsForm.introduce" placeholder="请输入店铺简介"></el-input>
                </el-form-item>
                <el-form-item label="店铺标语">
                    <el-input v-model="addShopsForm.slogan" placeholder="请输入店铺标语"></el-input>
                </el-form-item>
                <el-form-item label="店铺分类">
                    <el-select v-model="addShopsForm.classifySelectVal" placeholder="请选择分类">
                        <el-option
                            v-for="item in addShopsForm.classify"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="店铺特点">
                    <el-checkbox-group v-model="addShopsForm.characteristic">
                        <el-checkbox label="品牌保证"></el-checkbox>
                        <el-checkbox label="蜂鸟专送"></el-checkbox>
                        <el-checkbox label="新开店铺"></el-checkbox>
                        <el-checkbox label="外卖保"></el-checkbox>
                        <el-checkbox label="准时达"></el-checkbox>
                        <el-checkbox label="开发票"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="配送费">
                    <el-input-number v-model="addShopsForm.shippingFee" @change="characteristicChange" :min="0"></el-input-number>
                </el-form-item>
                <el-form-item label="起送价">
                    <el-input-number v-model="addShopsForm.upSend" @change="upSendChange" :min="0"></el-input-number>
                </el-form-item>
                <el-form-item label="营业时间">
                    <el-time-picker
                        is-range
                        arrow-control
                        format="HH:mm"
                        v-model="addShopsForm.timer"
                        range-separator="至"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间">
                    </el-time-picker>
                </el-form-item>
                <el-form-item label="店铺头像">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="营业执照">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="餐饮许可证">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="优惠活动">
                    <el-select v-model="discountsVal" @change="activitySelect" placeholder="请选择优惠活动">
                        <el-option
                            v-for="item in discounts"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-row class="baseList_table_border">
                    <el-table :data="addShopsForm.activityData" header-row-class-name="baseList_table_head">
                        <el-table-column label="活动标题" prop="activityTitle"></el-table-column>
                        <el-table-column label="活动名称" prop="activityName"></el-table-column>
                        <el-table-column label="活动详情" prop="activityInfo"></el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="activity">
                                <el-button type="danger" size="mini" @click="deleteActivity(activity)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-row>
                <el-row class="boxFlexCen mrt_20">
                    <el-button type="primary" @click="submitForm('addShopsForm')">立即创建</el-button>
                </el-row>
            </el-form>
        </div>

        <!--S 添加优惠活动-->
        <el-dialog
            title="添加优惠信息"
            width="500px"
            :visible.sync="dialogVisible"
            :show-close="false">
            <div class="mrb_20">请输入活动详情</div>
            <el-input v-model="activityInfo" :autofocus="true"></el-input>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible=false">取消</el-button>
                <el-button type="primary" @click="addActivity">确定</el-button>
            </div>
        </el-dialog>
        <!--E 添加优惠活动-->
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import { addShops } from '../api/getData'
    export default {
        data () {
            return {
                addShopsForm: {
                    shopName: '',
                    address: '',
                    tel: '',
                    introduce: '',
                    slogan: '',
                    classifySelectVal: '',
                    classify: [],
                    characteristic: [],
                    shippingFee: 0,
                    upSend: 0,
                    timer: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
                    activityData: [
                        {
                            activityTitle: '减',
                            activityName: '满减优惠',
                            activityInfo: '满30减5，满60减8'
                        }
                    ]
                },
                discountsVal: '',
                discounts: [
                    {
                        value: '满减优惠',
                        label: '满减优惠'
                    }, 
                    {
                        value: '优惠大酬宾',
                        label: '优惠大酬宾'
                    }, 
                    {
                        value: '新用户立减',
                        label: '新用户立减'
                    }, 
                    {
                        value: '进店领券',
                        label: '进店领券'
                    }
                ],
                imageUrl: '',
                activityInfo: '',
                dialogVisible: false,
                rules: {
                    shopName: [
                        {required: true, message: '请输入店铺名称', trigger: 'blur'}
                    ],
                    address: [
                        {required: true, message: '请输入详细地址', trigger: 'blur'}
                    ],
                    tel: [
                        {required: true, message: '请输入联系电话'},
                        {type: 'number', message: '电话号码必须是数字'}
                    ]
                }
            }
        },
        methods: {
            querySearch () {

            },
            handleSelect (item) {
                console.log(item);
            },
            characteristicChange (value) {

            },
            upSendChange (value) {

            },
            submitForm (formName) {

            },
            handleAvatarSuccess (res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload (file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;
                if(!isJPG){
                    this.$message({
                        message: '图片只能是 JPG 格式！',
                        type: 'error'
                    });
                } else if(!isLt2M){
                    this.$message({
                        message: '图片大小不能超过 2MB!',
                        type: 'error'
                    });
                }
                return isJPG && isLt2M;
            },
            activitySelect (val) {
                this.dialogVisible = true;
            },
            addActivity () {
                const val = this.discountsVal;
                let newInfo = {};

                if(this.activityInfo === ''){
                    this.dialogVisible = false;
                    return false;
                }

                switch(val) {
                    case '满减优惠':
                        newInfo = {
                            activityTitle: '减',
                            activityName: '满减优惠',
                            activityInfo: this.activityInfo
                        }
                    break;
                    case '优惠大酬宾':
                        newInfo = {
                            activityTitle: '特',
                            activityName: '优惠大酬宾',
                            activityInfo: this.activityInfo
                        }
                    break;
                    case '新用户立减':
                        newInfo = {
                            activityTitle: '新',
                            activityName: '新用户立减',
                            activityInfo: this.activityInfo
                        }
                    break;
                    case '进店领券':
                        newInfo = {
                            activityTitle: '领',
                            activityName: '进店领券',
                            activityInfo: this.activityInfo
                        }
                    break;
                }

                this.addShopsForm.activityData.push(newInfo);
                this.activityInfo = '';
                this.dialogVisible = false;
            },
            deleteActivity (res) {
                this.addShopsForm.activityData.splice(res.$index, 1);
            }
        },
        components: {
            headTop
        }
    }
</script>

<style>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 140px;
        height: 140px;
        line-height: 140px;
        text-align: center;
    }
    .avatar {
        width: 140px;
        height: 140px;
        display: block;
    }
</style>

