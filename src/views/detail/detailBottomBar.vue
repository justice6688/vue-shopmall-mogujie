<template>
  <div class="detailBottomBar">
    <div class="one">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-chaiquan"></use>
      </svg>
      <p>客服</p>
    </div>
    <div class="two">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yinghua"></use>
      </svg>
      <p>收藏</p>
    </div>
    <div class="three">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shenshe"></use>
      </svg>
      <p>店铺</p>
    </div>
    <div class="four">立即购买</div>
    <div class="five" @click="addToCart">加入购物车</div>
  </div>
</template>


<script>
export default {
    methods:{
        addToCart(){
            this.$emit('addToCart')
        }
    }
};
</script>

<style scoped>
.detailBottomBar{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 49px;
    display: flex;
    background-color: #ffffff;
    z-index: 12;
}
.one,.two,.three{
    width: 15%;
    height: 49px;
    font-size: 12px;
    text-align: center;
}
p{
    margin: 0;
}
.four,.five{
    font-size: 14px;
    text-align: center;
    line-height: 40px;
    height: 40px;
    margin: 4px;
}
.five{
    width: 30%;
    background-color: palevioletred;
}
.four{
    width: 25%;
    background-color: gainsboro;
}

.icon {
  width: 2em;
  height: 2em;
  fill: currentColor;
  overflow: hidden;
  margin-top: 2px;
}
</style>