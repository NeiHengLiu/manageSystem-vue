<template>
    <div class="rich_text_editor">
        <head-top></head-top>
        <div class="baseList_table_conter">
            <quill-editor v-model="content"></quill-editor>
            <div class="boxFlexCen mrt_40">
                <el-button type="primary" @click="submit" size="small" :loading="showLoad" round>提交</el-button>
            </div>
        </div>
        <!--S 显示提交后返回的内容-->
        <el-dialog title="服务器返回的富文本编辑的内容" :visible.sync="dialogTableVisible">
            <div v-html="backContent"></div>
        </el-dialog>
        <!--E 显示提交后返回的内容-->
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import { richTextEditor } from '../api/getData'
    import { quillEditor } from 'vue-quill-editor'
    export default {
        data () {
            return {
                content: '',
                backContent: '',
                showLoad: false,
                dialogTableVisible: false
            }
        },
        methods: {
            async submit () {
                try{
                    this.showLoad = !this.showLoad;
                    let res = await richTextEditor({content: this.content});
                    if(res.state){
                        this.backContent = res.data.content;
                        this.showLoad = !this.showLoad;
                        this.dialogTableVisible = !this.dialogTableVisible;
                    }
                }
                catch (error) {
                    this.$notify({
                        type: 'error',
                        title: '错误',
                        message: '服务好像开小差了，重新试一下吧！'
                    });
                    this.showLoad = !this.showLoad;
                }
            }
        },
        components: {
            headTop,
            quillEditor
        }
    }
</script>

<style>
    .rich_text_editor .ql-editor{
        height: 450px;
    }
    .rich_text_editor .ql-snow .ql-tooltip{
        z-index: 99;
    }
</style>

