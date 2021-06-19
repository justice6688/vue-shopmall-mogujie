<template>
  <div class="bottomBar" v-show="!isShowBar">
    <div class="select"  @click="checkedAll">
      <check-button class="bottomChecked" :is-checked="isSelectAll"></check-button><span>全选</span>
    </div>
    <div class="totalPrice">合计：{{ totalPrice }}</div>
    <div class="calculate" @click="calcButton">结算</div>
  </div>
</template>

<script>
import CheckButton from "../../components/content/CheckButton.vue";
export default {
  components: { CheckButton },
  computed: {
    totalPrice() {
      return this.$store.state.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue+item.price * item.count;
        }, 0).toFixed(0)
    },
    isSelectAll(){
      if(this.$store.state.cartList.length === 0) return false
      return !(this.$store.state.cartList.filter(item => !item.checked).length)
    },
    isShowBar(){
      return !this.$store.state.cartList.length
    }
  },
  methods:{
    checkedAll(){
      if(this.isSelectAll){
        this.$store.state.cartList.forEach(item => item.checked=false)
      }else{
        this.$store.state.cartList.forEach(item => item.checked=true)
      }
    },
    calcButton(){
      if(!this.isSelectAll){
        const message='请选择要购买的商品'
        this.$toast.show(message,1000)
      }
    }
  }
};
</script>

<style scoped>
.bottomBar {
  height: 40px;
  background-color: #ffffff;
  position: fixed;
  width: 100%;
  bottom: 56px;
  z-index: 12;
  display: flex;
  justify-content: space-around;
}
.select {
  width: 100px;
  line-height: 40px;
}
.bottomChecked {
  position: absolute;
  left: 20px;
  top: -29px;
  height: 25px;
}
span {
  position: relative;
  left: 50px;
  font-size: 14px;
  letter-spacing: 2px;
  margin-left: -20px;
}
.totalPrice {
  width: 100px;
  font-size: 14px;
  text-align: center;
  line-height: 40px;
}
.calculate{
    width: 80px;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    color: #ffffff;
    background: palevioletred;
    border-radius: 4px;
    margin: 2px;
}
</style>