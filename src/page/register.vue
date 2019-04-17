<template>
  <div>
    <div class="page-register">
      <div class="header">
        <header>
          <a class="site-logo" href="http://www.meituan.com">aa</a>
          <div class="login">
            <span>已有美团账号？</span>
            <router-link :to="{name:'login'}">登录</router-link>
          </div>
        </header>
      </div>
      <div class="content">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm">
          <el-form-item label="用户名" prop="userName">
            <el-input  v-model="ruleForm.userName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off" @input="inputFn"></el-input>
            <div class="pass_bar">
              <div :class="['pass_bar_anmite',className]"></div>
              <div class="pass_bar_span">
                  <span>弱</span>
                  <span>中</span>
                  <span>强</span>
              </div>
          </div>
          </el-form-item>
          <el-form-item label="确认密码" prop="rePassword">
            <el-input type="password" v-model="ruleForm.rePassword" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <footer>
          <p>©2019 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
      </footer>
    </div>
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  props: [],
  created() {},
  components: {},
  data() {
    var reg = /^[0-9A-z_]{6,16}$/
    var validateUserName =(rule, value, callback) => {
        if(value === ''){
            callback(new Error('请输入账号'))
        }else if(!reg.test(value)){
            callback(new Error('用户名必须为4-16的数字字母或下划线组成'))
        }else{
            callback()
        }
    }
    var validatePassword = (rule, value, callback) => {
        if(value === ''){
            callback(new Error('请输入密码'))
        }else if(!reg.test(value)){
            callback(new Error('密码必须为6-16的数字字或下划线母组成'))
        }else{
            if(this.ruleForm.rePassword == !''){
                this.$refs.rouleForm.validateField('rePassword')
            }   
            callback()
        }
    }
    var validateRePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
    }
    return {
        ruleForm:{
            userName:'',
            password:'',
            rePassword:''
        },
        rules:{
            userName:[{ validator: validateUserName, trigger: 'blur' }],
            password:[{validator:validatePassword,trigger:'blur'}],
            rePassword:[{validator:validateRePassword,trigger:'blur'}],
        },
        className:''
    };
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            api.getRegister(
              {
                params:{
                  userName:this.ruleForm.userName,
                  password:this.ruleForm.password,
                  rePassword:this.ruleForm.rePassword
                }
              }
            ).then(res => {
              if(res.data.status == 'fail'){
                this.$message({
                  message: res.data.msg,
                  type: 'warning'
                })
              }else{
                this.$message({
                  message: res.data.msg,
                  type: 'success'
                })
                setTimeout(()=>{
                  this.$router.push({name:'login'})
                },4000)
              }
              
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.className = ''
      },
      inputFn(){
          var len = this.ruleForm.password.length
          if(len>30){
              this.className = 'long'
          }else if(len>20){
              this.className = 'mid'
          }else if(len>=6){
              this.className = 'sort'
          }else{
              this.className = ''
          }
        }
  },
};
</script>
<style lang='scss'>
@import "@/assets/css/register/index.scss";
</style>
