<template>
  <div class="m-istyle">
    <dl @mouseover="overFn" :class="navList.name">
      <dt>{{navList.title}}</dt>
      <dd v-for="(item,index) in navList.list" :key="index" :class="{active:kind==item.type}" :data-type="item.type">{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in kindObj[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <a href=""><img :src="item.image" class="image"></a>
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.subTitle">{{item.subTitle}}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price}}</span>
              </span>
              <!-- <span class="old-price">门市价¥{{item.old_price}}</span> -->
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
            <!-- <div class="price-info" v-else-if="!item.rent">
              <span class="current-price-wrapper">
                <span class="current-price numfont">抢光了</span>
              </span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div> -->
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  components: {},
  props:['navList'],
  data() {
    return {
        kind:'all',
        kindObj:{},
        // list:[]
    };
  },

  methods: {
      overFn(e){
          let tag = e.target.tagName
          if(tag !='DD'){
              return false
          }
          let type = e.target.dataset.type
          this.kind = type
          // api.getIstyle().then(res => {
          //     var data = res.data.data;
          //     this.list = data[type]
          // }) 
      }
  },
  created(){
       api.getIstyle().then(res => {
              var data = res.data.data;
              this.kindObj = data
        })
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/index/artistic.scss";
</style>
