<template>
  <div class="category">
    <nav-bar class="category-nav">
      <p slot="center">商品分类</p>
    </nav-bar>

    <div class="category-content">
      <!-- 侧边导航栏 -->
      <slide-bar
        class="slide-bar"
        :category-list="categoryList"
        @slideBarItemClick="slideBarItemClick"
      />
      <!-- 右侧商品展示模块 -->
      <scroll class="Bscroll" ref="Bscroll">
        <sub-category
          :subcategoryListItem="subcategoryList[currentIndex]"
          @imgLoadOk="imgLoadOk"
        />
        <!-- 分类栏 -->
        <tab-control
          :titles="['流行', '新款', '精选']"
          class="tab-control"
          @tabChange="tabClick"
        />
        <!-- 通过tabControl传递过来的点击哪个，来决定请求哪个数据 -->
        <goods-list :goods="categoryDetailList"></goods-list>
      </scroll>
    </div>
  </div>
</template>

<script>
// 导入获取的数据
import {
  getCategory,
  getSubcategory,
  getSubCategoryDetail,
} from "../../network/category";
// 引入模块
import NavBar from "../../components/common/navbar/NavBar";
// 引入侧边导航栏
import SlideBar from "./childCategory/SlideBar";
// 导入滚动模块
import Scroll from "../../components/common/scroll/Scroll";
// 引入右侧商品展示的图文部分
import SubCategory from "./childCategory/SubCategory";
// 分页导航栏
import TabControl from "../../components/content/TabControl";
// 商品数据列表
import GoodsList from "./childCategory/GoodsList";
export default {
  name: "category",
  data() {
    return {
      // 分类侧边栏数据
      categoryList: [],
      // 分类内容的数据
      subcategoryList: [],
      categoryDetailList: [],
      currentIndex: 0, //侧边导航栏点击
      keyList: [], //记录获取的数据
    };
  },
  components: {
    NavBar,
    SlideBar,
    Scroll,
    SubCategory,
    TabControl,
    GoodsList,
  },
  created() {
    getCategory().then((res) => {
      // 获取左侧导航栏数据
      // console.log(res.data.category.list)
      this.categoryList = res.data.category.list;
      // console.log(this.categoryList)
      // 先把所有数据请求起来，然后后面点击那个在提取那个
      for (let item of this.categoryList) {
        // 下面这个代码有重复，后续思考如何复用
        getSubcategory(item.maitKey).then((res) => {
          // console.log(res.data.list)
          // 把每一个都push进数组里
          this.subcategoryList.push(res.data.list);
        });
      }
      this.$nextTick(() => {
        // 三个分类的数据
        getSubCategoryDetail(
          this.categoryList[this.currentIndex].miniWallkey,
          "pop"
        ).then((res) => {
          //console.log(res);
          this.categoryDetailList = res;
        })
      })
    })
  },
  methods: {
    // 点击侧边导航栏
    slideBarItemClick({ maitKey, index }) {
      this.currentIndex = index; //记录点击位置
      // 请求数据
      this.getSubcategory(maitKey, index);
      // 三个分类的数据也要对应改变
      getSubCategoryDetail(
        this.categoryList[this.currentIndex].miniWallkey,
        "pop"
      ).then((res) => {
        this.categoryDetailList = res;
      })
    },
    getSubcategory(maitKey, index) {
      getSubcategory(maitKey).then((res) => {
        // console.log(res.data.list)
        // 相当于把每一个都push进数组里
        this.subcategoryList[index] = res.data.list;
      })
    },
    getSubCategoryDetail() {
      // 三个分类的数据
      getSubCategoryDetail(
        this.categoryList[this.currentIndex].miniWallkey,
        "pop"
      ).then((res) => {
        this.categoryDetailList = res;
      })
    },
    imgLoadOk() {
      // 刷新高度
      this.$refs.Bscroll.refresh();
    },
    tabClick(index) {
      // 定义一个数组,表示type
      const Types = ["pop", "new", "sell"]; //点击那个传递那个的数据
      getSubCategoryDetail(
        this.categoryList[this.currentIndex].miniWallkey,
        Types[index]
      ).then((res) => {
        this.categoryDetailList = res;
      })
    },
  }
}
</script>

<style scoped>
.category-nav {
  background-color: palevioletred;
  height: 44px;
  color: white;
  font-weight: normal;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 12;
}
.category-nav p{
    margin: 0;
}
.category-content {
  display: flex;
  height: calc(100vh - 44px - 49px);
}
.Bscroll {
  flex: 1;
  height: 100%;
  margin-top: 44px;
  font-size: 14px;
}
.tab-control {
  margin-top: 30px;
}
</style>