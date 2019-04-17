<template>
  <div class="page-changeCity">
    <el-row>
        <province/>
    </el-row>
    <el-row>
        <my-hot :list="hot"></my-hot>
    </el-row>
    <el-row>
        <my-hot :list="access"></my-hot>
    </el-row>
    <el-row>
        <category/>
    </el-row>
  </div>
</template>

<script>
import province from '@/components/changeCity/province'
import myHot from '@/components/changeCity/hot'
import category from '@/components/changeCity/category'
import api from '@/api/index'
export default {

  components: {
    province,
    myHot,
    category
  },
  data () {
    return {
        hot:{
            list:["北京","上海","广州","深圳","天津","西安","重庆","武汉","成都",],
            title:"热门城市"
        },
        access:{
            list:["深圳","南昌","广州"],
            title:"最近访问"
        }

    }
  },

  methods: {

  },
  created(){
    api.getCityHot().then(res => {
      this.hot.list = res.data.data
    })
  }
}
</script>

<style lang='scss'>

</style>
