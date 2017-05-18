<template>
    <el-tabs class="nav-container">
        <el-tab-pane label="Home"></el-tab-pane>
        <el-tab-pane label="Archives"></el-tab-pane>
        <el-tab-pane label="Categories"></el-tab-pane>
        <el-tab-pane label="Tags"></el-tab-pane>
    </el-tabs>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "nuxt-class-component";

    @Component({
        name: 'nav'
    })
    export default class extends Vue {

    }
</script>

<style lang="less">
    @import "../theme/fresh/import.less";
    .nav-container {
        height: 100%;
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