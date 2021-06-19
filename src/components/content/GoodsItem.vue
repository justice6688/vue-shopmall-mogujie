<template>
  <div class="goodsItem" @click="itemClick">
    <img
      :src="goodsItem.show.img"
      alt=""
      @load="imgload"
      v-if="!isDetailMsg"
    />
    <!-- detail组件的推荐商品数据 -->
    <img :src="goodsItem.image" alt="" v-else />
    <div class="goodsInfo">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
    isDetailMsg:{
        type:Boolean
    }
  },
  methods: {
    imgload() {
      if(this.$route.path.indexOf('/hoem')){
        this.$bus.$emit("itemImgLoad");
      }
    },
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
};
</script>

<style scoped>
.goodsItem {
  padding-bottom: 40px;
  position: relative;
  width: 46%;
}
.goodsItem img {
  width: 100%;
  border-radius: 5px;
}
.goodsInfo {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goodsInfo p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goodsInfo .price {
  color: palevioletred;
  margin-right: 20px;
}
.goodsInfo .collect {
  position: relative;
}
.goodsInfo .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("../../assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>