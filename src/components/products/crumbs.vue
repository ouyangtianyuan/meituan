<template>
  <div>
     <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/d">{{$store.state.position.name}}美团</el-breadcrumb-item>
        <el-breadcrumb-item>{{$store.state.position.name}}{{$route.params.name}}</el-breadcrumb-item>
    </el-breadcrumb> 
  </div>
</template>

<script>

export default {

  components: {

  },
  data () {
    return {

    }
  },

  methods: {

  },
  computed:{
   
  }
}
</script>

<style lang='scss'>

</style>
