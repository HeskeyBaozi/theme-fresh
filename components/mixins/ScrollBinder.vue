<script lang="ts">
    'use strict';

    import Vue from "vue";
    import Component from "nuxt-class-component";
    import {Prop} from "vue-property-decorator";
    import _throttle from 'lodash.throttle';

    @Component({
        name: 'scroll-binder'
    })
    export default class ScrollBinder extends Vue {
        mounted() {
            this.$bindScroll();
        }

        beforeDestroy() {
            this.$unbindScroll();
        }

        hasHandler: boolean = false;

        _handleScroll = evt => {

        };

        onScroll(type: string, e: Event): void {

        }

        getNextPageYOffsetAsync() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(window.pageYOffset);
                }, 100);
            });
        }

        $bindScroll() {
            this._handleScroll = _throttle((evt: Event) => {
                const YOffset = window.pageYOffset;
                this.getNextPageYOffsetAsync().then((nextYOffset: number) => {
                    const delta = nextYOffset - YOffset;
                    if (delta > 1) {
                        this.onScroll('DOWN', evt);
                    }
                    if (delta < -1) {
                        this.onScroll('UP', evt);
                    }

                });

            }, 500);
            this.hasHandler = true;
            window.addEventListener('scroll', this._handleScroll);
        }

        $unbindScroll() {
            if (this.hasHandler) {
                window.removeEventListener('scroll', this._handleScroll);
                this.hasHandler = false;
            }
        }
    }
</script>