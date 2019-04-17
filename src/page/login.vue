<template>
  <div class="page-login">
      <div class="login-header">
          <a class="logo" href="http://www.meituan.com"></a>
      </div>
      <div class="login-panel">
          <div class="banner">
              <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" width="480" height="370" alt="美团网">
          </div>
          <div class="form">
              <h4 :class="{'active':error}"><i class="el-icon-warning"></i>{{error}}</h4>
              <p>
                  <span>账号登录</span>
                  <el-input :class="{'error':error && !username}" placeholder="手机号/用户名/邮箱" prefix-icon="profile" v-model="username" clearable></el-input>
                  <el-input :class="{'error':error && !password}" placeholder="密码" prefix-icon="password" type="password" v-model="password" clearable></el-input>
                  <div class="foot">
                      <a href="">忘记密码?</a>
                  </div>
                  <el-button type="primary" class="btn-login" @click="submit">登录</el-button>
                  <p class="signup-guide"><span>还没有账号？</span><router-link :to="{name:'register'}">免费注册</router-link></p>
              </p>
          </div>
      </div>
      <footer>
          <ul>
              <li><a href="#">关于美团</a></li>
              <li><a href="#">加入我们</a></li>
              <li><a href="#">商家入驻</a></li>
              <li><a href="#">帮助中心</a></li>
              <li><a href="#">美团手机版</a></li>
          </ul>
          <p>©2019 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
      </footer>
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  props:[],
  created(){

  },
  components: {

  },
  data () {
    return {
        username:'',
        password:'',
        error:'',
        inp_err:false
    }
  },
  methods: {
      submit(){
          if(!this.username){
              this.error = '请输入账号'
              return false
          }
          if(!this.password){
              this.error = '请输入密码'
              return false
          }
        api.getLogin({
            params:{
                userName:this.username,
                password:this.password
            }
        }).then(res => {
            if(res.data.status == 'success'){
                this.$router.push({name:'index'})
                this.$store.commit('setUserName',this.username)
            }else{
                this.error = res.data.msg
            }
        })
      }
  },
  computed: {

  },
}
</script>
<style lang='scss'>
@import '@/assets/css/login/index.scss';
</style>
]