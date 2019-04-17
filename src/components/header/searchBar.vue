<template>
  <div class="search-panel">
      <el-row class="m-header-searchbar">
        <el-col :span="3" class="left">
           <a href="#"><img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团"></a>
        </el-col>
        <el-col :span="15" class="center">
            <div class="wrapper">
              <el-input v-model="searchWord" placeholder="请输入内容" @focus="focusFn" @blur="blurFn" @input="inputFn"></el-input>
              <el-button type="primary" icon="el-icon-search"></el-button>
              <dl class="hotPlace" v-if="ishot">
                  <dt>热门搜索</dt>
                  <dd v-for="(item,index) in hotList" :key="index">
                    <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
                  </dd>
              </dl>
              <dl class="searchList" v-if="issearch">
                 <dd v-for="(item, index) in searchList" :key="index">{{item}}<router-link to="/a">火锅</router-link></dd>
              </dl>
            </div>
            <p class="suggest">
              <a href="#" v-for="(item, index) in suggestList" :key="index">{{item}}</a>
            </p>
        </el-col>

      </el-row>
  </div>
</template>

<script>
import api from '@/api/index'

export default {

  data () {
    return {
      searchWord:'',
      isfocus:false,
      hotList:[],
      searchList:[],
      suggestList:[],
    }
  },
  methods: {
    focusFn(){
      this.isfocus = true
    },
    blurFn(){
      setTimeout(() => {
        this.isfocus = false
      },300)
    },
    inputFn(val){
      //  axios.get('http://api.duyiedu.com/api/meituan/header/search.json',{
      //     params:{
      //       appkey:"oyty_1550107923695"
      //     },
      //     word:this.searchWord
      //   }).then(res=>{

      //       this.searchList = res.data.data.list
      //   })
        api.getSearchWord().then(res=>{
          var init = '火'
          if(val.indexOf(init) == -1){
             this.searchList = []
             return 
          }
          this.searchList = res.data.data.list
        })
    }
  },
  computed:{
      ishot(){
        return this.isfocus && !this.searchWord
      },
      issearch(){
        return this.isfocus && this.searchWord
      
      }
  },
  created(){
    var self = this
    //  axios.get('http://api.duyiedu.com/api/meituan/header/searchHotWords.json',{
    //    params:{
    //      appkey:"oyty_1550107923695"
    //    }
    //  }).then(res=>{
    //    console.log(res,res.data.data)
    //     this.hotList = res.data.data
    //     this.suggestList = res.data.data
    //  })
    api.getHotWord().then(res=>{
        this.hotList = res.data.data
        this.suggestList = res.data.data
    })
  }
}
</script>

<style  lang='scss'>
 @import '@/assets/css/public/header/search.scss';
</style>
