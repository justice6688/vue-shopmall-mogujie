<template>
  <div id="Cart">
    <nav-bar>
      <div class="navBar" slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <scroll class="content">
      <div class="one" v-show="!cartLength">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yinghua"></use>
        </svg>
        <span>这里还什么都没有</span>
      </div>
      <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import { mapGetters } from "vuex";
import Scroll from "../../components/common/scroll/Scroll.vue";
import CartList from "./CartList.vue";
import CartBottomBar from "./cartBottomBar.vue";

export default {
  components: {
    NavBar,
    Scroll,
    CartList,
    CartBottomBar,
  },
  computed: {
    ...mapGetters(["cartLength"]),
  },
};
</script>


<style scoped>
#Cart {
  height: 100vh;
}
.navBar {
  position: relative;
  z-index: 12;
  height: 44px;
  line-height: 44px;
  background-color: palevioletred;
  text-align: center;
  color: #ffffff;
}
.content {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 96px;
  z-index: 9;
  background-color: #fff;
}
.icon{
  position: absolute;
  margin-top: 5px;
  width: 30px;
  height: 30px;
  overflow: hidden;
}
.one{
  vertical-align: middle;
  position: relative;
  left: 30%;
  top: 30px;
  line-height: 40px;
}
.one span{
  margin-left: 40px;
}
</style>