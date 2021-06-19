<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from './components/content/MainTabBar.vue';

export default {
  name: "mall",
  components:{
    MainTabBar
  }
};
</script>

<style>
body {
  margin: 0 !important;
}
</style>
