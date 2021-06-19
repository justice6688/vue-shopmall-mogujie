<template>
  <div class="goods-item"  @click="goodsItemClick">
    <img 
      :src="goodsItem.img" alt="" 
      @load="imgLoadOk" />
    <!-- 下面文字 -->
    <div class="context">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="cafv">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoadOk () {
      // 事件总线，发送出事件
      this.$bus.$emit('imgLoadOk');

    // 不使用混入时，进入哪个就发送给哪个组件请求刷新
    //  if (this.$route.path.indexOf('/home')) {
    //     this.$bus.$emit('HomeimgLoadOk');
    //  } else if (this.$route.path.indexOf('/details')) {
    //     this.$bus.$emit('DetailImgLoad');
    //  }
    },
    goodsItemClick () {
      // 路由跳转
      this.$router.push('./details/' + this.goodsItem.iid)  //使用push而不用replace是因为后面要有返回功能
    }
  }
}
</script>

<style scoped>
  .goods-item {
    position: relative;
    padding-bottom: 40px;
    width: 48%;
  }
  .goods-item img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  .goods-item .context {
    position: absolute;
    bottom: 5px;
    left: 0px;
    right: 0px;
    font-size: 12px;
    text-align: center;
  }
  .context p {
    width: 100%;
    /* 文字超过点点隐藏 */
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin: 0;
    }
  .price {
    color: var(--color-tint);
    padding-right: 20px;
  }
  .cafv {
    position: relative;
  }
  .cafv::before {
    display: inline-block;
    content: ' ';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>