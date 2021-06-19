<template>
    <scroll class="scroll">
      <ul class="category-list">
        <li v-for="(item,index) in categoryList" 
            :key="index" 
            class="category-list-item"
            @click="slideBarItemClick(item,index)"
            :class="{active: currentIndex == index}">
          {{item.title}}
        </li>
      </ul>
    </scroll>
</template>

<script>
// 导入滚动模块
import Scroll from '../../../components/common/scroll/Scroll'
export default {
  name: 'SlideBar',
  data () {
    return {
      currentIndex: 0  
    }
  },
  props: {
    categoryList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Scroll
  },
  methods: {
    slideBarItemClick (item,index) {
      this.currentIndex = index
      const obj = {
        maitKey: item.maitKey,
        index
      };
      this.$emit('slideBarItemClick',obj)
    }
  }
}
</script>

<style scoped>
  .scroll {
    width: 30%;
    height: 100%;
    margin-top: 44px;
    background-color: #f6f6f6;
    font-size: 14px;
  }
  .category-list {
    text-align: center;
    list-style: none;
    padding: 15px 0 15px 25px;
    margin: 0;
  }
  .category-list-item {
    padding: 15px 0;
  }
  .active {
     border-left: 5px solid palevioletred;
     background-color: #fff;
     color: black;
     font-weight: 700;
  }
</style>