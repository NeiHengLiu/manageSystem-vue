<template>
    <div class="add_goods">
        <head-top></head-top>
        <div class="baseList_table_conter">
            <el-form ref="addGoodsForm" :model="addGoodsForm" label-width="100px">
                <el-form-item label="">

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

</style>

