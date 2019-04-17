<template>
  <div class="m-hcity">
      <dl>
          <dt>{{list.title}}</dt>
          <dd v-for="(item, index) in list.list" :key="index">{{item.name}}</dd>
      </dl>
  </div>
</template>

<script>
export default {
  props:["list"],
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
@import '@/assets/css/changecity/hot.scss';
</style>
