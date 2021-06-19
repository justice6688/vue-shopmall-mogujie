<template>
  <div id="home">
    <nav-bar class="homeNavBar">
      <div slot="center" class="home-nav">蘑菇街</div>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabChange="tabChange"
      ref="tabControl1"
      class="fixedTab"
      v-show="isFixedTab"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :pullupload="true"
      :prototype="3"
      @scroll="contentScroll"
      @pullingUp="MorePage"
    >
      <home-swiper
        :banners="banners"
        @swiperImgLoad="swiperImgLoad"
      ></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature></feature>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabChange="tabChange"
        ref="tabControl2"
      ></tab-control>
      <goods :goods="showGoods"></goods>
    </scroll>
    <back-top @click.native="backTopClick" v-show="backTopShow"></back-top>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import { getHomeMultidata, getHomeTabData } from "../../network/home";
import Feature from "./childComps/Feature.vue";
import TabControl from "../../components/content/TabControl.vue";
import Goods from "../../components/content/Goods.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import { debounce } from "../../common/utils";
import { MixIn,backTopMixIn } from "../../common/mixin";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      tabOffsetTop: 0,
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    Feature,
    TabControl,
    Goods,
    Scroll,
  },
  created() {
    this.getHomeMultidata();
    this.getHomeTabData("pop");
    this.getHomeTabData("new");
    this.getHomeTabData("sell");
  },
  mixins: [MixIn,backTopMixIn],
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeTabData(type) {
      const page = this.goods[type].page + 1;
      getHomeTabData(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    },
    tabChange(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    MorePage() {
      this.getHomeTabData(this.currentType);
    },
    swiperImgLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
}
.home-nav {
  background-color: palevioletred;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.fixedTab {
  position: relative;
  z-index: 9;
  background-color: #fff;
  margin-top: 44px;
}
.content {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}
.homeNavBar{
  position: relative;
  z-index: 9;
}
</style>>