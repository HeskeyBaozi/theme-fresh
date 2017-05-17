<template>
    <div class="fr-top-bar" :class="topBarClass">
        <div class="left-icon">
            <slot name="left"></slot>
        </div>
        <div class="logo">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "nuxt-class-component";
    import {Prop} from 'vue-property-decorator';
    import ScrollBinder from '~components/mixins/ScrollBinder';

    @Component({
        name: 'fr-top-bar',
        mixins: [ScrollBinder]

    })
    export default class TopBar extends Vue {
        @Prop({'default': 1})
        zDepth: number;

        get topBarClass(): string[] {
            return [
                'fr-top-bar-' + this.zDepth
            ];
        }

        onScroll(type: string, e: Event): void {
            if (type === 'UP') {
                console.log('显示LOGO');
            } else {
                console.log('显示菜单');
            }
        }
    }
</script>

<style lang="less">
    @import "../theme/fresh/import.less";

    .fr-top-bar {
        .filter-blur(#fff, @general-background, 40px);
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-self: flex-start;
        align-items: center;
        padding: 8px 30px;
        width: 100%;
        z-index: 100;

        & > .logo {
            position: absolute;
            text-align: center;
            left: 50%;
            width: 160px;
            margin-left: -70px;
        }
    }

    .left-icon {
        margin: 1px;
        padding: 0 10px;
    }

    .fr-top-bar-1 {
        .depth(1);
    }

    .fr-top-bar-2 {
        .depth(2);
    }

    .fr-top-bar-3 {
        .depth(3);
    }

    .fr-top-bar-4 {
        .depth(4);
    }

    .fr-top-bar-5 {
        .depth(5);
    }
</style>