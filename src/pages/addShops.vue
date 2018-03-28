<template>
    <div class="add_shops">
        <head-top></head-top>
        <div class="baseList_table_conter">
            <el-form ref="addShopsForm" :model="addShopsForm" label-width="100px">
                <el-form-item label="店铺名称">
                    <el-input v-model="addShopsForm.shopName" placeholder="请输入店铺名称"></el-input>
                </el-form-item>
                <el-form-item label="详细地址">
                    <el-autocomplete
                        v-model="city"
                        :fetch-suggestions="querySearch"
                        :trigger-on-focus="false"
                        @select="handleSelect"
                        placeholder="请输入详细地址"
                        >
                    </el-autocomplete>
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
                addShopsForm: {
                    shopName: ''
                },
                city: ''
            }
        },
        methods: {
            querySearch () {

            },
            handleSelect (item) {
                console.log(item);
            }
        },
        components: {
            headTop
        }
    }
</script>

<style>

</style>

