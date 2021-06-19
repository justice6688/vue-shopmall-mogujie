<template>
  <div class="sub-category-list-item">
    <div 
        v-for="(item,index) in subcategoryListItem"
        :key="index"
        class="list-item">
          <a :href="item.link">
            <img :src="item.image" @load="imgLoad" />
          </a>
          <p>{{item.title}}</p>
        </div>
  </div>
</template>

<script>
// 导入混入Minxi
import {MixIn} from '../../../common/mixin'
export default {
  name: 'SubCateGory',
  data () {
    return {
      count: 0
    }
  },
  props: {
    subcategoryListItem: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    imgLoad() {
      //  发送请求
      this.$emit('imgLoadOk')
    }
  }
}
</script>

<style scoped>
  .sub-category-list-item {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
    text-align: center;
  }
  
  .list-item img {
    width: 65px;
  }
</style>