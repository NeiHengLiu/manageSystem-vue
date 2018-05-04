<template>
    <div class="login_page wah_100">
        <transition name="form-fade">
            <section class="login_center" v-show="showLogin">
                <div class="login_title">
                    <p>外卖后台管理系统</p>
                </div>
                <el-form ref="loginForm" :model="loginForm" :rules="rules">
                    <el-form-item prop="userName">
                        <el-input v-model="loginForm.userName" @keyup.enter.native="submitForm('loginForm')" placeholder="用户名"></el-input>
                    </el-form-item>
                    <el-form-item prop="userPwd">
                        <el-input type="password" v-model="loginForm.userPwd" @keyup.enter.native="submitForm('loginForm')" placeholder="密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" class="submit_btn" @click="submitForm('loginForm')" :loading="loading">登录</el-button>
                    </el-form-item>
                </el-form>
                <p class="tip">温馨提示:</p>
                <p class="tip">用户名为：xiaobai</p>
                <p class="tip">密码为：123456</p>
            </section>
        </transition>
    </div>
</template>

<script>
    import { login } from '../api/getData'
    export default {
        data () {
            return {
                loginForm: {
                    userName: 'xiaobai',
                    userPwd: '123456'
                },
                rules: {
                    userName: [
                        {required: true, message: '请输入用户名', trigger: 'blur'}
                    ],
                    userPwd: [
                        {required: true, message: '请输入密码', trigger: 'blur'}
                    ]
                },
                loading: false,
                showLogin: false
            }
        },
        mounted () {
            this.showLogin = true;
        },
        methods: {
            async submitForm(formName) {
                this.$refs[formName].validate(async (valid) =>{
                    if(valid){
                        this.loading = true;
                        this.$store.dispatch('loginByUser', this.loginForm)
                        .then(data => {
                            if(data.data){
                                this.$message({
                                    type: 'success',
                                    message: '登录成功'
                                });
                                this.$router.push('/manage');
                            } else {
                                this.$message({
                                    type: 'error',
                                    message: '账号或密码错误'
                                });
                            }
                            this.loading = false;
                        }).catch(error => {
                             this.$notify({
                                type: 'error',
                                title: '错误',
                                message: '服务器开小差了，重新试一下吧！'
                            });
                            this.loading = false;
                        })
                    }
                })
            }
        }
    }
</script>

<style>
    .login_page{
        background-color: #324057;
        position: relative;
    }
    .login_page .login_center{
        width: 370px;
        height: 260px;
        padding: 25px;
        background-color: #fff;
        border-radius: 5px;
        box-sizing: border-box;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -125px;
        margin-left: -185px;
    }
    .login_page .login_title{
        width: 100%;
        position: absolute;
        left: 0px;
        top: -100px;
    }
    .login_page .login_title p{
        font-size: 34px;
        color: #fff;
        text-align: center;
    }
    .login_page .submit_btn{
        width: 100%;
        font-size: 16px;
    }
    .login_page .tip{
        color: red;
        font-size: 12px;
        text-align: center;
        line-height: 1.1;
    }
    .form-fade-enter-active,
    .form-fade-leave-active {
	  	transition: all 1s;
	}
    .form-fade-enter,
    .form-fade-leave-active {
	  	transform: translate3d(0, -50px, 0);
	  	opacity: 0;
	}
</style>

