<template>
  <div class="cartItem">
    <check-button
      :is-checked="product.checked"
      @click.native="clickItem"
    ></check-button>
    <div class="img-item">
      <img :src="product.image" />
    </div>
    <div class="other-item-msg">
      <p class="title">{{ product.title }}</p>
      <p class="description">{{ product.desc }}</p>
      <div class="product-price-count">
        <span class="price">￥{{ product.price }}</span>
        <span class="count">{{ product.count }}件</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "../../components/content/CheckButton.vue";
export default {
  components: { CheckButton },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
      clickItem() {
        this.product.checked = !this.product.checked;
      }
    }
};
</script>

<style scoped>
.cartItem {
  width: 100%;
  height: 130px;
  display: flex;
  margin: 6px;
}
.img-item {
  width: 30%;
  height: 100%;
}
.img-item img {
  width: 80%;
  height: 100%;
  border-radius: 3px;
}
.other-item-msg {
  flex: 1;
  height: 100%;
}
.title {
  overflow: hidden;
  font-size: 16px;
  line-height: 30px;
  height: 35px;
  margin: 5px;
}
.description {
  height: 20px;
  overflow: hidden;
  font-size: 12px;
  line-height: 20px;
  padding: 2px;
  margin: 16px;
}
.count {
  margin-left: 120px;
}
</style>