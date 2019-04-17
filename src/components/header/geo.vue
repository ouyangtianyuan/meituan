<template>
  <div class="m-geo">
      <div class="position">
          <i class="el-icon-location"></i>
          {{$store.state.position.name}}
          <router-link class="changeCity" :to="{name:'changeCity'}">切换城市</router-link>
          [ 
          <a v-for="(item, index) in $store.state.position.nearCity" :key="index" href="#">{{item.name}}</a>
          ]
      </div>
      <div class="m-user" v-if="!$store.state.userName">
          <router-link class="login" :to="{name:'login'}">立即登录</router-link> 
          <router-link class="register" :to="{name:'register'}">注册</router-link> 
      </div>
      <div class="m-user" v-else><a>欢迎你，{{$store.state.userName}}</a></div>
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  components:{

  },
  data () {
    return {

    }
  },

  methods: {

  },
 created(){
    api.getPosition().then(res => {
      this.nearCity = res.data.data.nearCity
      this.$store.dispatch('setPosition',res.data.data)
    })
 }

}
</script>

<style lang='scss'>

</style>
