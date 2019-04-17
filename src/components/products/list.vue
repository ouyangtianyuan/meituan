<template>
  <div class="m-products-list">
    <dl>
      <dd
        v-for="item in nav"
        :class="{'s-nav-active':active==item.key}"
        :key="item.key"
        @click="add(item.key)">{{item.name}}</dd>
    </dl>
    <el-row>
        <item v-for="(item, index) in productList" :key="index" :meat="item" :index="index"/>
    </el-row>
  </div>
</template>

<script>
import item from '@/components/products/item'
import api from '@/api/index'
export default {
  components: {
      item
  },
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序"
        },
        {
          key: "s-price",
          name: "价格排序"
        },
        {
          key: "s-score",
          name: "人气最高"
        },
        {
          key: "s-comment",
          name: "评价最高"
        }
      ],
      productList: [],
      active: "s-default"
    };
  },

  methods: {
    add(name) {
      this.active = name;
    }
  },
  created(){
     api.getGoodsList().then(res => {
        this.productList = res.data.data
     })
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/products/list.scss";
</style>
