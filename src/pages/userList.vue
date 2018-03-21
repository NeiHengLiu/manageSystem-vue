<template>
	<div class="user_list">
		<head-top></head-top>
		<div class="baseList_table_conter">
			<div class="baseList_table_border">
				<el-table :data="tableData" header-row-class-name="baseList_table_head">
					<el-table-column type="index" :index="indexMethod" width="100"></el-table-column>
					<el-table-column prop="date" label="注册日期" width="200"></el-table-column>
					<el-table-column prop="name" label="用户姓名" width="200"></el-table-column>
					<el-table-column prop="address" label="注册地址"></el-table-column>
				</el-table>
			</div>
			<div class="baseList_table_page_number">
				<el-pagination
					@current-change="changePage"
					layout="total,prev,pager,next"
					:page-size="lineNumber"
					:total="totalData">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	import headTop from '../components/headTop'
	import { userList } from '../api/getData'
	export default {
		data () {
			return {
				tableData: [],
				lineNumber: 20,		// 每页显示多少行
				totalData: 5304,	// 总数据多少条
			}
		},
		created () {
			this.getUserListData();
		},
		methods: {
			indexMethod (index) {
				return index + 1;
			},
			async getUserListData () {
				let res = await userList({'lineNumber': this.lineNumber});
				this.tableData = res.data;
			},
			changePage (val) {
				this.getUserListData();
			}
		},
		components: {
			headTop
		}
	}
</script>

<style>
</style>

