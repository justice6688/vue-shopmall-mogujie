<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <svg class="icon" aria-hidden="true" slot="item-icon">
          <use xlink:href="#icon-007-huocang"></use>
        </svg>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <svg class="icon" aria-hidden="true" slot="item-icon">
          <use xlink:href="#icon-010-dingdan"></use>
        </svg>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <svg class="icon" aria-hidden="true" slot="item-icon">
          <use xlink:href="#icon-012-fukuan"></use>
        </svg>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <svg class="icon" aria-hidden="true" slot="item-icon">
          <use xlink:href="#icon-006-kuaidiyuan"></use>
        </svg>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "../common/tabbar/TabBar";
import TabBarItem from "../common/tabbar/TabBarItem";

export default {
  components: {
    name: "MainTabBar",
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
.icon {
  width: 24px;
  height: 24px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>