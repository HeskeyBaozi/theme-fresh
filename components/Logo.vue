<template>
    <div class="logo">
        <span class="dark-text">Heskey Baozi's Blog</span>
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

<style>
    @import "../assets/style/fresh/import.css";

    .logo {
        text-align: center;
        width: var(--topbar-logo-width);
    }
</style>