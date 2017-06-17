<template>
  <ul class="nav-container">
    <li @click="handleClick">Home</li>
    <li @click="handleClick">Archives</li>
    <li>Categories</li>
    <li>Tags</li>
  </ul>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "nuxt-class-component";

  @Component({
    name: 'nav'
  })
  export default class extends Vue {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
</script>

<style lang="less">
  @import "../assets/style/fresh/import.less";

  .nav-container {
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    > li {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 20px;
    }
    > .el-tabs__header {
      margin-bottom: 0;
      border-bottom: none;
      height: 100%;
    }

    .el-tabs__item {
      height: @top-bar-height;
      line-height: @top-bar-height;
    }
  }
</style>
