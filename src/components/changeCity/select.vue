<template>
  <div class="choose-wrap" @click="showWrap" v-document-click="hideWrap">
    <div class="choose" :class="{'off':disabled}">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div class="mt-content" :class="{'active':active}">
        <h2>
          <p>{{title}}</p>
        </h2>
        <div class="wrapper">
          <div class="col" v-for="(item,index) in renderList" :key="index">
            <span
              :class="{'mt-item':true,'active':v.name==values}"
              v-for="(v, i) in item"
              :key="v+i"
              @click="changeValue(v.name)"
            >{{v.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list", "value", "title", "active", "disabled"],
  components: {},
  computed: {
    renderList() {
      let col = Math.ceil(this.list.length / 12);
      let arr = [];
      for (var i = 0; i < col; i++) {
        let data = this.list.slice((i*12),(i+1)*12)
        arr.push(data)
      }
      console.log(arr)
      return arr;
    }
  },
  data() {
    return {
      values: null
    };
  },

  methods: {
    showWrap(e) {
      e.stopPropagation();
      this.$emit("change", true);
    },
    hideWrap() {
      this.$emit("change", false);
    },
    changeValue(value) {
      event.stopPropagation();
      this.$emit("changeValue", { value, flag: false });
      this.values = value;
    }
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/changecity/select.scss";
</style>
