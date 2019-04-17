<template>
  <div class="m-menu">
      <dl class="nav" @mouseleave="leaveFn">
          <dt>全部分类</dt>
          <dd v-for="(item,index) in menuList" :key="index" @mouseenter="enterFn(item)">
              <i :class="item.type"></i>
              <span class="arrow"></span>
              {{item.name}}
          </dd>
      </dl>
      <div class="detail" v-if="curDetail"  @mouseenter="enterDetail" @mouseleave="leaveDetail">
          <template v-for="(item, index) in curDetail.items">
              <h2 :key="index">{{item.title}}</h2>
              <span :key="i+v" v-for="(v,i) in item.items">{{v}}</span>
          </template>
      </div>
  </div>
</template>

<script>
import api from '@/api/index'
export default {

  components: {
      
  },
  data () {
    return {
        curDetail:null,
        timer:null,
        menuList:[
        ]
    }
  },

  methods: {
    enterFn(item){
        this.curDetail = item
    },
    leaveFn(){
        this.timer = setTimeout(()=> {
            this.curDetail = null
        },200)
    },
    enterDetail(){
        clearTimeout(this.timer)
    },
    leaveDetail(){
       this.curDetail = null 
    }
  },
  created(){
      api.getMenu().then(res => {
          this.menuList = res.data.data
      })
  }
}
</script>

<style lang='scss'>

</style>
