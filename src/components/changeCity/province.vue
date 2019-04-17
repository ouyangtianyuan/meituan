<template>
  <div>
    <span class="name">按省份选择：
      <my-select
        :list="provinceList"
        :value="province"
        title="省份"
        :active="provinceActive"
        @change="changeProvince"
        @changeValue="changeValueProvince"
      ></my-select>
    </span>
    <span class="name">按城市选择：
      <my-select
        :list="cityList"
        :value="city"
        :disabled="disabled"
        title="城市"
        :active="cityActive"
        @change="changeCity"
        @changeValue="changeValueCity"
      ></my-select>
    </span>
    <span>直接搜索：</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      @change="changeValue"
      :remote-method="remoteMethod"
      :loading="loading"
      :multiple-limit="limit"
      placeholder="请输入关键词"
    >
      <el-option v-for="(item, index) in searchList" :key="index" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import mySelect from "./select";
import api from '@/api/index'
export default {
  components: {
    mySelect
  },
  created(){
      api.getProvince().then(res => {
        res.data.data.forEach(item => {
           this.provinceList.push({name:item.provinceName})
           this.allList = res.data.data
        })
      })
  },
  data() {
    return {
      province:"省份",
      city:"城市",
      provinceList: [],
      cityList: [],
      allList:[],
      provinceActive: false,
      cityActive: false,
      disabled:true,
      searchList: [],
      stateList:[
        "江西",
        "广东",
        "湖南",
        "四川",
        "广西",
        "北京",
        "上海",
        "上天",
        "上学"
        ],
      searchWord:'',
      loading:false,
      limit:1
    };
  },

  methods: {
    changeProvince(flag) {
      console.log(flag)
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCity(flag) {
      if(this.disabled){
         return
      }
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    changeValue(v){
      
    },
    remoteMethod(query){
      if(query!==''){
        this.loading = true
        setTimeout(()=> {
          this.loading = false
           this.searchList = this.stateList.filter((item,index)=>{
              return item.indexOf(query) > -1
           })
        },1000)
      }else{
        this.searchList = []
      }
    },
    changeValueProvince({value,flag}){
      this.province=value
      this.provinceActive = flag;
      this.disabled = false
      var city = this.allList.filter(item => {
         return item.provinceName == value
      })
      this.cityList = city[0].cityInfoList
    },
    changeValueCity({value,flag}){
      this.city=value
      this.cityActive = flag
      this.$store.commit('setPosition',{name:value})
      this.$router.push({name:'index'})
    },
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/changecity/iselect.scss";
</style>
