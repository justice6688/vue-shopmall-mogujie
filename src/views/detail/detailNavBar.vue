<template>
  <div class="detailNavBar">
    <nav-bar>
        <div slot="left" class="back" @click="backToHome"><img src="../../assets/img/common/back.svg" alt=""></div>
      <div class="title" slot="center">
        <div
          :class="{ active: index == currentIndex }"
          class="titleItem"
          v-for="(item, index) in titles"
          :key="index"
          @click="detNavClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
export default {
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    detNavClick(index){
        this.currentIndex=index
        this.$emit('titleClick',index)
    },
    backToHome(){
        this.$router.back()
    }
  },
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 14px;
  width: 200px;
  justify-content: space-around;
}
.active {
  color: palevioletred;
}
.back{
    margin: 0 50px 0 20px;
}
.back img{
    width: 18px;
    height: 18px;
    margin-top: 11px;
    padding: 2px;
    border: 1px transparent;
    border-radius: 3px;
}
.back img:hover{
    background-color: palevioletred;
}
.detailNavBar{
  height: 44px;
  position: relative;
  background-color: #ffffff;
  z-index: 10;
}
</style>