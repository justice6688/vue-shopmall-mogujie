<template>
  <div class="tab-bar-item" @click="changePage">
     <div :class="{active:isActive}">
        <slot name="item-icon"></slot>
        <slot name="item-text"></slot>
     </div>
  </div>
</template>

<script>
export default {
    name:'TabBarItem',
    props:{
        path:String,
    },
    data() {
        return {}
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path)!==-1
        }
    },
    methods: {
        changePage(){
            this.$router.push(this.path)
        }
    },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 12px;
  padding-top: 5px;
}
.active{
    margin: 0 auto;
    height: 45px;
    width: 45px;
    border: 50px;
    border-radius: 30%;
    background-color: gainsboro;
}
</style>