<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" ref="topNavBar"></detail-nav-bar>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :prototype="3">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :base-info="baseInfo"></detail-base-info>
      <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
      <detail-goods-info :goodsInfo="goodsInfo" @imageLoadOk='imageLoadOk'></detail-goods-info>
      <detail-size :sizeInfo="sizeInfo" ref="Size"></detail-size>
      <detail-comment-info
        :commentInfo="commentInfo"
        ref="comment"
      ></detail-comment-info>
      <goods
        :goods="goodsInfoList"
        :is-detail-msg="isDetailMsg"
        ref="recommend"
        class="goodsList"
      ></goods>
    </scroll>
    <back-top @click.native="backTopClick" v-show="backTopShow"></back-top>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
  </div>
</template>


<script>
import {
  getDetail,
  BaseInfo,
  ShopInfo,
  SizeInfo,
  getDetailsGoodsList,
} from "../../network/detail";
import { debounce } from "../../common/utils";
import { MixIn, backTopMixIn } from "../../common/mixin";
import Scroll from "../../components/common/scroll/Scroll";
import DetailNavBar from "./detailNavBar";
import DetailSwiper from "./DetailSwiper";
import DetailBaseInfo from "./detailBaseInfo";
import DetailShopInfo from "./detailShopInfo";
import DetailGoodsInfo from "./detailGoodsInfo";
import DetailSize from "./DetailSize";
import DetailCommentInfo from "./detailCommentInfo";
import Goods from "../../components/content/Goods.vue";
import DetailBottomBar from './detailBottomBar.vue';
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      iid: null,
      topImages: [],
      baseInfo: {},
      shopInfo: {},
      goodsInfo: {},
      sizeInfo: {},
      commentInfo: {},
      goodsInfoList: [],
      isDetailMsg: true,
      themeTops:[],
      currentIndex: 0,
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailSize,
    DetailCommentInfo,
    Goods,
    DetailBottomBar,
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      const data = res.result;

      this.topImages = data.itemInfo.topImages;
      this.baseInfo = new BaseInfo(
        data.itemInfo,
        data.shopInfo.services,
        data.columns
      );
      this.shopInfo = new ShopInfo(data.shopInfo);
      this.goodsInfo = data.detailInfo;
      this.sizeInfo = new SizeInfo(data.itemParams.info, data.itemParams.rule);
      if (data.rate.cRate !== 0) this.commentInfo = data.rate;
    });
    getDetailsGoodsList().then((res) => {
      this.goodsInfoList = res.data.list;
    });
  },

  // 不使用混入时
  /*mounted () {
     const refresh = debounce(this.$refs.scroll.refresh,500);  //刷新，让滚动框架重新计算滚动区域
    // 事件总线，接收传递过来的事件
    this.$bus.$on('itemImgLoad', () => {
        refresh();// 防抖动
    })
  },*/

  mixins: [MixIn, backTopMixIn],
  methods: {
    ...mapActions(['addToShopCart']),
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    imageLoadOk() {
      // 刷新
      this.$refs.scroll.refresh();

      // 获取高度，给我们头部导航栏定位锚点用，在这里监听是最好的，因为刷新完后，高度获取绝对正确
      this.themeTops.push(0);
      this.themeTops.push(this.$refs.Size.$el.offsetTop);
      this.themeTops.push(this.$refs.comment.$el.offsetTop);
      this.themeTops.push(this.$refs.recommend.$el.offsetTop);
      // 空间换时间,加入最大值
      this.themeTops.push(Number.MAX_VALUE);
      // console.log(this.themeTops)
    },
    titleClick(index) {
      //头部导航栏
      this.$refs.scroll.scrollTo(0, -this.themeTops[index]-1);
    },
    contentScroll(position) {
      // 获取y值，为了方便我们对比。所以获取正值
      const positionY = -position.y;
      // 滚动，这个值与themeTops对比
      for (let i in this.themeTops) {
        if (
          this.currentIndex != i &&
          positionY > this.themeTops[i] &&
          positionY < this.themeTops[parseInt(i) + 1]
        ) {
          this.currentIndex = i; // 防止赋值过程过于频繁
          // 改变对应锚点
          //注意这个i是字符串类型，所以我们在导航条的currentIndex和i的判断中使用==
          this.$refs.topNavBar.currentIndex = i;
          this.$refs.scroll.refresh();
        }
      }
      this.backTopShow = -position.y > 1000 ? true : false;
    },
    addToCart(){
      const product={}
      product.title = this.baseInfo.title
      product.price = this.baseInfo.NowPrice
      product.desc = this.baseInfo.desc
      product.image = this.topImages[0]
      product.iid = this.iid
      this.addToShopCart(product).then(res=>{
        this.$toast.show(res,1000)
      })
    }
  }
}
</script>


<style scoped>
#detail {
  height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: 5;
}
.content {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  z-index: 9;
  background-color: #fff;
}
.goodsList {
  margin-top: 8px;
}
</style>