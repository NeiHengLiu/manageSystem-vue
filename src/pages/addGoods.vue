<template>
    <div class="add_goods">
        <head-top></head-top>
        <div class="baseList_table_conter">
            <header class="form_header">选择食品种类</header>
            <el-form ref="addGoodsForm" :model="addGoodsForm" label-width="100px" class="add_goods_form">
                <el-form-item label="食品种类">

                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
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
    .add_goods_form:hover{
        box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
        border-radius: 6px;
        transition: all 400ms;
    }
    .form_header{
		text-align: center;
		margin-bottom: 10px;
	}
</style>

