<template>
  <div class="layout-default">
    <el-container>
        <el-header height="">
            <my-header></my-header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer height="">
          <my-footer></my-footer>
        </el-footer>
    </el-container>
  </div>
</template>

<script>
import myHeader from '@/components/header/index'
import myFooter from "@/components/footer/index"
export default {
  components:{
    myHeader,
    myFooter
  },
  data () {
    return {

    }
  },

  methods: {

  }
}
</script>

<style lang="scss">
  @import '@/assets/css/public/layout.scss';
</style>
