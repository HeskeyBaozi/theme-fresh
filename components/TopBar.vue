<template>
    <div class="fr-top-bar" :class="topBarClass">
        <div class="left-icon"
             :class="{'left-icon-rotated':currentView === 'Navigation'}"
             @click="handleIconClick">
            <Icon type="chevron-down"></Icon>
        </div>
        <transition name="fade" mode="out-in">
            <component :is="currentView"></component>
        </transition>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "nuxt-class-component";
    import {Prop} from 'vue-property-decorator';
    import ScrollBinder from '~components/mixins/ScrollBinder';
    import Navigation from '~components/Navigation';
    import Logo from '~components/Logo';
    import {TopContent} from '~components/interface';


    @Component({
        name: 'fr-top-bar',
        mixins: [ScrollBinder],
        components: {Navigation, Logo}

    })
    export default class TopBar extends Vue {
        @Prop({'default': 1})
        zDepth: number;

        currentView: string = 'Logo';


        get topBarClass(): string[] {
            return [
                'fr-top-bar-' + this.zDepth
            ];
        }

        handleIconClick(e: Event): void {
            if (this.currentView === 'Navigation') {
                this.currentView = 'Logo';
            } else {
                this.currentView = 'Navigation';
            }
        }

        onScroll(type: string, e: Event): void {
            switch (type) {
                case 'UP':
                    this.currentView = 'Navigation';
                    break;
                case 'DOWN':
                    this.currentView = 'Logo';
                    break;
            }
        }
    }
</script>

<style>
    @import url("../assets/style/fresh/import.css");

    .fr-top-bar {
        @mixin filter-blur #fff, var(--background-fixed-image), 80px;
        transition: all .4s ease-in-out;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-self: flex-start;
        align-items: center;
        padding: 0 30px;
        height: 50px;
        width: 100%;
        z-index: 100;
    }

    .fade-enter-active, .fade-leave-active {
        transition: all .4s;
    }

    .fade-enter {
        opacity: 0;
        transform: translateX(-30px);
    }

    .fade-leave-active {
        opacity: 0;
        transform: translateX(30px);
    }

    .left-icon {
        margin: 1px;
        padding: 0 10px;
        transition: transform .4s;
    }

    .left-icon-rotated {
        transform: rotate(-90deg);
    }
</style>