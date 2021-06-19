// 引入防抖动的封装函数 
import {debounce} from './utils'
// 导出混入变量
export const MixIn = {
  mounted () {
    const refresh = debounce(this.$refs.scroll.refresh,500);  //刷新，让滚动框架重新计算滚动区域
    // 事件总线，接收传递过来的事件
    this.$bus.$on('itemImgLoad', () => {
        refresh();// 防抖动
    })
  }
}


// backTOp按钮

// 返回首页导航按钮
  import BackTop from '../components/content/BackTop.vue'

  export const backTopMixIn = {
    data () {
      return {
        backTopShow: false,
        isFixedTab: false
      }
    },
    components: {
      BackTop,
    },
    methods: {
      backTopClick() {
        this.$refs.scroll.scrollTo(0, 0);
      },
      contentScroll(position) {
        this.backTopShow = -position.y > 1000 ? true : false;
        this.isFixedTab = -position.y > this.tabOffsetTop ? true : false;
      }
    }
  }


  // 什么可以混入？
    /**
     * 第一，生命周期可以混入，即你在混入里写mouted，在组件里写mouted，他最后执行是会整合起来的
     * 但是你methods的话，他只会整合里面的方法，而不会把某个方法里面的数据进行整合
     * 
     */
