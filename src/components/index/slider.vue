<template>
  <div class="slide">
        <el-carousel height="240px">
          <el-carousel-item v-for="(item , index) in imgList" :key="index">
            <a :href="item.link"><img :src="item.src" alt=""></a>
          </el-carousel-item>
        </el-carousel>
  </div>
</template>

<script>
export default {

  components: {

  },
  data () {
    return {
      imgList:[
        {
          link:'www.baidu.com',
          src:'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg'
        },
        {
          link:'www.baidu.com',
          src:'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg'
        },
        {
          link:'www.baidu.com',
          src:'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'
        },
        {
          link:'www.baidu.com',
          src:'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
        }
      ]
    }
  },

  methods: {

  }
}
</script>

<style lang='scss'>

</style>
