<template>
  <div class="base-info" v-if="Object.keys(baseInfo).length !== 0">
    <!-- 标题 -->
    <div class="title">{{baseInfo.title}}</div>
    <!-- 价格模块 -->
    <div class="price-info">
      <span class="n-price">￥{{baseInfo.NowPrice}}</span>
      <span class="o-price">{{baseInfo.oldPrice}}</span>
      <span class="discount">{{baseInfo.discountDesc}}</span>
    </div>
    <!-- 其它模块 -->
    <div class="other-info">
      <span>{{baseInfo.columns[0]}}</span>
      <span>{{baseInfo.columns[1]}}</span>
      <span>{{baseInfo.services[baseInfo.services.length - 1].name}}</span>
    </div>
    <!-- 服务模块 -->
    <div class="services-info">
      <span v-for="(item,index) in (baseInfo.services.length - 1)" :key="index">
        <img :src="baseInfo.services[item].icon" alt="">
        {{baseInfo.services[item].name}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    baseInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .base-info {
    padding: 8px 6px 0;
    border-bottom: 3px solid #f2f5f8;
  }
  .title {
   text-align: justify;
   color: #222;
   font-size: 15px;
  }
  .price-info {
    margin-top: .266667rem;
  }
  .n-price {
    color: var(--color-high-text);
    font-size: 21px;
  }
  .o-price {
    font-size: 14px;
    margin-left: 5px;
    text-decoration: line-through;
    color: #999;
  }
  /* 折扣 */
  .discount {
    position: relative;
    top: -5px;
    margin-left: 5px;
    font-size: 12px;
    padding: .15rem .16rem;
    background-color: rgb(241, 62, 58);
    border-radius: 6px;
    color: white;
  }
  /* 其它模块 */
  .other-info {
    display: flex;
    justify-content: space-between;
    height: 35px;
    line-height: 35px;
    border-bottom: 1px solid #cccccc;
  }
  .other-info > span {
    font-size: 12px;
    color: #999;
  }
  /* 服务模块 */
  .services-info {
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    height: 50px;
    line-height: 50px;
    color: #999;
  }
  .services-info img {
    width: 12px;
    position: relative;
    top: 1.5px;
  }
  
</style>