<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      :class="{ active: index === currentIndex }"
      @click="tabChange(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
      tabChange(index){
          this.currentIndex=index
          this.$emit('tabChange',index)
      }
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 14px;
}
.tab-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.tab-control-item span {
  padding: 5px;
}

.active {
  color: palevioletred;
}
.active span {
  border-bottom: 3px solid palevioletred;
}
</style>