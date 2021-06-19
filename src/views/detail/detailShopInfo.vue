<template>
  <div id="shopInfo">
    <div>
      <!-- 店铺基本信息 -->
      <img :src="shopInfo.logo" alt="" class="logo-info" />
      <span class="title">{{shopInfo.name}}</span>
      <!-- 销量及品牌信息 -->
      <div class="other-info">
        <!-- 左边的店铺信息 -->
        <div class="sell-info">
          <div class="left-info">
            <!-- 过滤器使用 -->
           <p class="sell-data"> {{shopInfo.sells | sellCountFilter}}</p>
           <p class="sell-word">总销量</p>
          </div>
          <div class="right-info">
            <p class="sell-data">{{shopInfo.goodsCount}}</p>
            <p class="sell-word">全部宝贝</p>
          </div>
        </div>
        <!-- 右边的描述信息 -->
        <div class="score-info">
          <div 
          v-for="(item,index) in shopInfo.score"
          class="score-info-detail"
          :key="index">
            <span>{{item.name}}</span>
            <span :style="color(item.isBetter)">{{item.score}}</span>
            <span :class="{isBetter: item.isBetter}"
                  class="baseClass">{{item.isBetter? '高' : '低'}}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 进入店铺看看按钮 -->
    <div class="btn">
      <button>进店逛逛</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  data () {
    return {
      green: 'green'  ,
      red: 'red'
    }
  },
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
   filters:  {
    //  转化总销量
      sellCountFilter (value) {
        if (value < 10000) return value;
        return (value / 10000) + "W";
      }
    },
    methods: {
      // 描述那里的字体颜色
      color (isBetter) {
        return isBetter ? {'color': this.red} : {'color': this.green};
      }
    }
}
</script>

<style scoped>
  #shopInfo {
    padding: 20px 10px;
    border-bottom: 3px solid #f2f5f8;
  }
  .logo-info {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 1px solid #999;
    vertical-align: middle;
  }
  .title {
    font-size: 13px;
    color: #666;
    margin-left: 10px;
  }
  .other-info {
    display: flex;
    padding-top: 20px;
  }
  .other-info > div {
    flex: 1;
  }
  .other-info {
    margin-top: 10px;
  }
  /* 左边店铺详情 */
  .sell-info {
    margin-top: -16px;
    display: flex;
    justify-content: space-around;
    text-align: center;
    color: #666;
    height: 43px;  /*为了我们的高度不被右边影响到*/
  }
  .sell-word {
    font-size: 12px;
    margin-top: 4px;
  }
  /* 右边描述部分 */
  .score-info {
    font-size: 12px;
    position: relative;
    top: -11px;
    left: 15px;
    color: #666;
    border-left: 1px solid #cccccc;
    padding-left: 15px;
  }
  .score-info-detail {
      padding: 4px;
  }
  .score-info-detail > span {
    margin-left: 5px;
  }
  .isBetter {
    background-color: red !important;
  }
  .baseClass {
    color: white;
    padding: 1px;
    background-color: green;
    position: absolute;
    right: 35px;
  }
  /* 按钮 */
  .btn{
    text-align: center;
  }
  .btn button {
    /* 去掉默认样式 */
    border: none;
    outline: none;
    width: 120px;
    height: 25px;
    line-height: 25px;
    font-size: 12px;
    background-color: #f2f5f8;
    border-radius: 8px;
    color: #666;
  }
</style>