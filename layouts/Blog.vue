<template>
    <div id="blog-container">
        <fr-top-bar :zDepth="2">
            <el-button slot="left" type="text">
                <i class="el-icon-arrow-down"></i>
            </el-button>
            <span>Heskey Baozi</span>
        </fr-top-bar>
        <nuxt></nuxt>
    </div>
</template>

<style lang="less">
    @import "../theme/fresh/import.less";

    body {
        padding: 0;
        margin: 0;
        background: @general-background;
    }

    #blog-container {
        overflow: hidden;
    }
</style>