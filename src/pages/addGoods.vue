<template>
    <div class="add_goods">
        <head-top></head-top>
        <div class="baseList_table_conter">
            <header class="form_header">选择食品种类</header>
            <el-form ref="addGoodsForm" :model="addGoodsForm" label-width="100px" class="add_goods_form">
                <el-row class="species_select">
                    <el-form-item label="食品种类">
                        <el-input ></el-input>
                    </el-form-item>
                </el-row>
            </el-form>
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import {  } from '../api/getData'
    export default {
        data () {
            return {
                addGoodsForm: {

                }
            }
        },
        methods: {
            
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
    .add_goods .species_select{
        padding: 10px 10px;
    }
</style>

