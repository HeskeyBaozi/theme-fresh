<template>
    <div class="logo">
        <span>Heskey Baozi's Blog</span>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "nuxt-class-component";

    @Component({
        name: 'logo'
    })
    export default class extends Vue {

    }
</script>

<style lang="less" scoped>
    @import "../theme/fresh/import";

    .logo {
        text-align: center;
        width: @logo-width;
    }
</style>