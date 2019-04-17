<template>
  <dl class="s-item">
       <dt>
           <img :src="meat.image" alt="">
           <span class="p_index">{{index+1}}</span>
        </dt>
       <dd>
           <h3><router-link :to="{name:'productDetail'}">{{meat.title}}</router-link></h3>
           <p>
               <el-rate
            v-model="meat.score"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
            </el-rate>
            <span class="soce_num" v-if="meat.score > 4.5">很好</span>
            <span class="soce_num" v-else-if="meat.score > 4">好</span>
            <span class="soce_num" v-else-if="meat.score > 3.5">不错</span>
            <span class="soce_num" v-else-if="meat.score > 3">一般</span>
            <span class="soce_num" v-else>很差</span>
            <span>{{meat.score}}分</span>
            <span class="s-item-comment-total">{{meat.comment.length}}人评论</span>
           </p>
           <p>
            <span class="s-item-tab">
            <span v-for="(v, i) in meat.tab" :key="v">{{v + (i < meat.tab.length - 1 ? '|' : '')}}</span>
            </span>
            <span class="s-item-addr">{{meat.address}}</span>
            <span>
            <a href="#">
                <i class="el-icon-location"></i>
                查看地图
            </a>
            </span>
        </p>
        <p>
            <span class="s-item-price">人均￥{{meat.avgPrice}}</span>
        </p>
        <ul class="deal-items">
            <li class="items" v-for="(item, index) in meat.dealItems.slice(0, 2)" :key="index">
            <p class="deal-title">{{item.title}}</p>
            <p>
                <span class="deal-price">￥{{item.price}}</span>
                <span class="deal-old-price">门市价￥{{item.counterPrice}}</span>
                <span class="deal-sales">已售{{item.saleNum}}</span>
            </p>
            </li>
            </ul>
       </dd>  
  </dl>
</template>

<script>
export default {
  props:["meat","index"],
  components: {

  },
  data () {
    return {

    }
  },

  methods: {

  }
}
</script>

<style lang='scss'>

</style>
