<template>
  <div class="cartList">
    <cart-list-item
      v-for="(item, index) in cartList"
      :key="index"
      :product="item"
    ></cart-list-item>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartListItem from "./cartListItem";

export default {
  components: {
    CartListItem,
  },
  computed: {
    ...mapGetters(["cartList"])
  }
};
</script>

<style scoped>
</style>