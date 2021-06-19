<template>
  <div class="goods">
    <goods-item
      v-for="(item, index) in goods"
      :key="index"
      :goodsItem="item"
      :isDetailMsg='isDetailMsg'
    ></goods-item>
    <div><strong v-show="isDetailMsg">没有更多了</strong></div>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem.vue";
export default {
  components: { GoodsItem },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    },
    isDetailMsg: {
      type: Boolean,
      default: false
    }
  },
};
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 10px;
}
</style>