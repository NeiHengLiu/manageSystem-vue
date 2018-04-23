<template>
    <div class="rich_text_editor">
        <head-top></head-top>
        <div class="baseList_table_conter">
            <quill-editor v-model="content"></quill-editor>
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import { quillEditor } from 'vue-quill-editor'
    export default {
        data () {
            return {
                content: ''
            }
        },
        components: {
            headTop,
            quillEditor
        }
    }
</script>

<style>

</style>

