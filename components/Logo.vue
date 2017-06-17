<template>
    <div class="logo">
        <span class="dark-text">This is Title</span>
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
    @import "../assets/style/fresh/import";

    .logo {
        text-align: center;
        width: @logo-width;
    }
</style>
