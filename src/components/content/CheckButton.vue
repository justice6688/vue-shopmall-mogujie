<template>
  <div class="checkButton" >
      <div class="roll" :class="{ checked: isChecked }"></div>
  </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default() {
        return false;
      },
    }
  },
};
</script>

<style scoped>
.checkButton {
  width: 30px;
  padding-top: 40px;
}
.roll {
  height: 14px;
  width: 14px;
  border: 2px solid gray;
  border-radius: 50%;
}
.checked{
    background-color: palevioletred;
}
</style>