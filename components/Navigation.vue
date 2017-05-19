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

<style>
    .nav-container {
        height: 100%;
    }
</style>