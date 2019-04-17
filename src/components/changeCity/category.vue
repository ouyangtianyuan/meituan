<template>
  <div>
      <dl class="m-categroy">
          <dt>按拼音首字母选择：</dt>
          <dd v-for="(item,index) in cateList" :key="index">
              <a :href="'#city-'+item">{{item}}</a>
          </dd>
      </dl>
      <dl class="m-categroy-section" v-for="(item,index) in cityGrop" :key="index" :id="'city-'+index">
          <dt>{{index}}</dt>
          <dd><span v-for="(v,i) in item" :key="i">{{v.name}}</span></dd>
      </dl>
  </div>
</template>

<script>
import api from '@/api/index'
export default {

  components: {

  },
  data () {
    return {
        cateList:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
        cityGrop:{}
    }
  },
    created(){
        api.getCity().then(res => {
            var data = res.data.data
            var obj = {}
            this.cateList.forEach(item=>{
                obj[item] = []
            })
            data.forEach((item,index) => {
                item.firstChar=item.firstChar.toUpperCase()
                if(!obj[item.firstChar]){
                obj[item.firstChar] = [] 
                }
                obj[item.firstChar].push(item)
            })
            this.cityGrop = obj
        })
    },
  methods: {

  }
}
</script>

<style lang='scss'>
@import '@/assets/css/changecity/category.scss';
</style>
