<template>
  <div class="m-product-categroy">
      <dl class="classic">
          <dt>分类</dt>
          <dt>全部</dt>
          <dd v-for="(item,index) in menuList" :key="index">
              <my-select :name="item.title" :list="item.subList"></my-select>
          </dd>
      </dl>
      <dl class="classic">
          <dt>区域</dt>
          <dt>全部</dt>
          <dd v-for="(item,index) in areaList" :key="index">
              <my-select :name="item.title" :list="item.subList"></my-select>
          </dd>
      </dl>
  </div>
</template>

<script>
import mySelect from './select'
import api from '@/api/index'
export default {

  components: {
      mySelect
  },
  data () {
    return {
        menuList:[],
      areaList: [
        {
          title: "推荐商圈",
          subList: [
            {
              name: "望京",

              id: 120000
            },

            {
              name: "昌平",

              id: 12222
            }
          ]
        }
      ]
    }
  },

  methods: {

  },
  created(){
    api.getClassify().then(res => {
      console.log(res.data.data)
      this.menuList = res.data.data
    })
  }
}
</script>

<style lang='scss'>

</style>
