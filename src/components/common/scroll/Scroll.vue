<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    prototype: {
        type:Number,
        default:0
    },
    pullupload:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    refresh(){
      this.scroll.refresh()
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    scrollTo(x,y,time=600){
      this.scroll.scrollTo(x,y,time)
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType:this.prototype,
      pullUpLoad:this.pullupload
    })
    this.scroll.on('scroll',position=>{
        this.$emit('scroll',position)
    })
    if(this.pullupload){
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
      })
    }
  },
};
</script>