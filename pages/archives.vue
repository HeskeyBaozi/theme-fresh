<template>
    <mu-paper class="leading-card" :zDepth="3" :rounded="false">
        <div class="leading-title">
            <h1>Archives</h1>
        </div>
        <div class="leading-content">
            hello
        </div>
    </mu-paper>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "nuxt-class-component";
    import {State, Getter} from "vuex-class";

    @Component({
        name: 'archives'
    })
    export default class Archives extends Vue {

    }
</script>

<style lang="less">

</style>