<template>
  <div class="goods-info" v-if="Object.keys(goodsInfo).length !== 0">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{ goodsInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <!-- 图片展示区域 -->
    <div v-for="(item,index) in goodsInfo.detailImage" :key="index">
      <div class="info-key">{{item.key}}</div>
      <div class="list-image">
        <img
            v-for="(image,index) in item.list"
            :src="image"
            @load="imageLoadOk"
            :key="index"
        />
      </div>
    
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  data () {
    return {
      count: 0,    //与图片数量相等就可以发送请求刷新
      imageLength: 0,   //图片数量
    }
  },
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageLoadOk () {
      if (++this.count === this.imageLength) {
        // 发送数据，请求刷新
        this.$emit('imageLoadOk')
      }
    }
  },
  watch: {  // 简体某个属性的变化
    goodsInfo () {
      this.imageLength = this.goodsInfo.detailImage[0].list.length
    }
  }
}
</script>

<style scoped>
  .image-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}

  .info-desc {
    padding: 15px;
  }

  .info-desc .start,
  .info-desc .end {
    position: relative;
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
  }

  .info-desc .start {
    float: left;
  }

  .info-desc .end {
    float: right;
  }

  .info-desc .start::before,
  .info-desc .end::after {
    position: absolute;
    bottom: 0;
    width: 5px;
    height: 5px;
    content: "";
    background-color: #333333;
  }

  .info-desc .end::after {
    right: 0;
  }

  .info-desc .desc {
    font-size: 12px;
    padding: 15px 0;
    color: #666;
  }
  .info-key {
    font-size: 15px;
    margin: 10px 0 10px 15px;
    color: #666;
  }
  .list-image img {
    width: 100%;
  }
</style>