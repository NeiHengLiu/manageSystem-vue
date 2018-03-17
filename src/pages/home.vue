<template>
	<div class="home">
		<head-top></head-top>
		<section class="data_statistical">
			<h2 class="stat_title">数据统计</h2>
			<el-row :gutter="20" style="margin-bottom: 10px;">
				<el-col :span="4">
					<div class="data_conter today_data">
						<span class="data_num">当日数据：</span>
					</div>
				</el-col>
				<el-col :span="4">
					<div class="data_conter">
						<span class="data_num">{{ newUsers }}</span>
						新增用户
					</div>
				</el-col>
				<el-col :span="4">
					<div class="data_conter">
						<span class="data_num">{{ newOrders }}</span>
						新增订单
					</div>
				</el-col>
				<el-col :span="4">
					<div class="data_conter">
						<span class="data_num">{{ newAdmin }}</span>
						新增管理员
					</div>
				</el-col>
			</el-row>
			<el-row :gutter="20" style="margin-bottom: 10px;">
				<el-col :span="4">
					<div class="data_conter sum_data">
						<span class="data_num">总数据：</span>
					</div>
				</el-col>
				<el-col :span="4">
					<div class="data_conter">
						<span class="data_num">{{ totalUser }}</span>
						注册用户
					</div>
				</el-col>
				<el-col :span="4">
					<div class="data_conter">
						<span class="data_num">{{ totalOrder }}</span>
						订单
					</div>
				</el-col>
				<el-col :span="4">
					<div class="data_conter">
						<span class="data_num">{{ totalAdmin }}</span>
						管理员
					</div>
				</el-col>
			</el-row>
		</section>
	</div>
</template>

<script>
	import headTop from '../components/headTop'
	import { statistical } from '../api/getData'
	export default {
		data () {
			return {
				newUsers: null,
				newOrders: null,
				newAdmin: null,
				totalUser: null,
				totalOrder: null,
				totalAdmin: null
			}
		},
		components: {
			headTop
		},
		mounted () {
			this.initData();
		},
		methods: {
			async initData () {
				let res = await statistical();
				if(res.state === 'true'){
					this.newUsers = res.data.newUsers;
					this.newOrders = res.data.newOrders;
					this.newAdmin = res.data.newAdmin;
					this.totalUser = res.data.totalUser;
					this.totalOrder = res.data.totalOrder;
					this.totalAdmin = res.data.totalAdmin;
				}
			}
		}
	}
</script>

<style>
	.home .data_statistical{
		width: 100%;
		padding: 20px 20px;
		box-sizing: border-box;
		margin-bottom: 40px;
	}
	.home .stat_title{
		width: 100%;
		font-size: 30px;
		font-weight: 300;
		text-align: center;
		margin-bottom: 10px;
	}
	.home .data_conter{
		color: #666;
		font-size: 14px;
		text-align: center;
		background-color: #E5E9F2;
		border-radius: 6px;
		padding: 5px 10px;
	}
	.home .data_conter .data_num{
		font-size: 26px;
		color: #333;
	}
	.home .data_conter.today_data .data_num,
	.home .data_conter.sum_data .data_num{
		font-size: 22px;
		color: #fff;
	}
	.home .data_conter.today_data {
		background-color: #FF9800;
	}
	.home .data_conter.sum_data{
		background-color: #20A0FF;
	}
</style>


