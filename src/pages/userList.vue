<template>
	<div class="user_list">
		<head-top></head-top>
		<div class="user_center">
			<div class="user_table">
				<el-table :data="tableData" header-row-class-name="user_list_table_head" style="width:100%;border:1px solid #ebeef5;">
					<el-table-column type="index" :index="indexMethod" width="100"></el-table-column>
					<el-table-column prop="date" label="注册日期" width="200"></el-table-column>
					<el-table-column prop="name" label="用户姓名" width="200"></el-table-column>
					<el-table-column prop="address" label="注册地址"></el-table-column>
				</el-table>
			</div>
			<div class="page_number">
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
	.user_list .user_center{
		width: 100%;
		padding: 20px 20px;
		box-sizing: border-box;
	}

	.user_list .user_table{
		width: 100%;
	}

	.user_list .page_number{
		width: 100%;
		margin-top: 15px;
	}

	.user_list .user_list_table_head th{
		background-color: #eef1f6;
		color: #1f2d3d;
	}
</style>

