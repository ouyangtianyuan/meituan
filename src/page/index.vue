<template>
  <div class="page-index">
      <el-row>
         <el-col :span="5">
             <m-menu></m-menu>
         </el-col>
         <el-col :span="19">
             <m-life></m-life>
         </el-col>
      </el-row>
      <el-row>
          <el-col :span="24">
             <m-con :navList="isStyle"></m-con>
          </el-col>
      </el-row>
      <el-row>
          <el-col :span="24">
             <m-con :navList="isfood"></m-con>
          </el-col>
      </el-row>
  </div>
</template>

<script>
import mMenu from '@/components/index/menu'
import mLife from '@/components/index/life'
import mCon from '@/components/index/cons'
export default {

  components: {
      mMenu,
      mLife,
      mCon,
  },
  data () {
    return {
        isStyle:{
            name:'istyle',
            title:'有格调',
            list:[
                {
                type:'all',
                text:'全部'
            },
            {
                type:'food',
                text:'约会聚餐'
            },
            {
                type:'spa',
                text:'丽人SPA'
            },
            {
                type:'movie',
                text:'电影演出'
            },
            {
                type:'travel',
                text:'品质出游'
            },
            ]
        },
        isfood:{
            name:'youhui',
            title:'有优惠',
            list:[
                {
                type:'all',
                text:'全部'
            },
            {
                type:'food',
                text:'美食休闲'
            },
            {
                type:'spa',
                text:'火锅自助'
            }
            ]
        }
    }
  },

  methods: {

  }
}
</script>

<style lang='scss'>
    @import "@/assets/css/index/index.scss";
</style>
