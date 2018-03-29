<template>
    <div class="add_shops">
        <head-top></head-top>
        <div class="baseList_table_conter">
            <el-form ref="addShopsForm" :model="addShopsForm" label-width="100px">
                <el-form-item label="店铺名称">
                    <el-input v-model="addShopsForm.shopName" placeholder="请输入店铺名称"></el-input>
                </el-form-item>
                <el-form-item label="详细地址">
                    <el-input v-model="addShopsForm.address" placeholder="请输入地址"></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input v-model="addShopsForm.tel" placeholder="请输入电话"></el-input>
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
                        v-model="addShopsForm.timer"
                        range-separator="至"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间">
                    </el-time-picker>
                </el-form-item>
                <el-form-item label="店铺头像">

                </el-form-item>
                <el-form-item label="营业执照">

                </el-form-item>
                <el-form-item label="餐饮许可证">

                </el-form-item>
                <el-form-item label="优惠活动">
                    <el-select v-model="addShopsForm.discountsVal" placeholder="请选择优惠活动">
                        <el-option
                            v-for="item in addShopsForm.discounts"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-row class="baseList_table_border">
                    <el-table :data="addShopsForm.specData" header-row-class-name="baseList_table_head">
                        <el-table-column label="活动标题" prop="specName"></el-table-column>
                        <el-table-column label="活动名称" prop="pack"></el-table-column>
                        <el-table-column label="活动详情" prop="price"></el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button type="danger" size="mini" @click="deleteScope(scope)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-row>
                <el-row class="boxFlexCen mrt_20">
                    <el-button type="primary" @click="submitForm('addShopsForm')">立即创建</el-button>
                </el-row>
            </el-form>
        </div>
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
                    classify: [
                        {
                            label: '',
                            value: ''
                        }
                    ],
                    characteristic: [],
                    shippingFee: 0,
                    upSend: 0,
                    timer: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
                    discountsVal: '',
                    discounts: [
                        {
                            label: '',
                            value: ''
                        }
                    ],
                    specData: []
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

            }
        },
        components: {
            headTop
        }
    }
</script>

<style>

</style>

