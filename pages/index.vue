<template>
    <section class="pa4">
        <div class="bg-white-90 pa4">
            <div class="f1">Nuxt TypeScript Starter</div>
            <div class="f3">Selected Person: {{selectedPerson.first_name}} {{selectedPerson.last_name}}</div>
            {{selected}}
        </div>
        <div class="flex flex-wrap ph2 justify-between bg-white-80 long">
            <div v-for="person in people">
                <card :person="person"></card>
            </div>
        </div>
    </section>
</template>
<script lang="ts">
    import Vue from "vue";
    import Component from "nuxt-class-component";
    import Card from "~components/Card";
    import {State, Getter} from "vuex-class";
    import 'tachyons/css/tachyons.min.css';

    @Component({
        components: {
            Card
        },
        layout: 'blog'
    })
    export default class extends Vue {
        @State selected;
        @State people;
        @Getter selectedPerson;
    }
</script>

<style lang="less" scoped>
    .long {
        height: 1800px;
    }
</style>