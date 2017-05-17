"use strict";
import Vue from "vue";
import TopBar from "~components/TopBar.vue";

const components = [
    TopBar
];

for (let comp of components) {
    Vue.component(comp.options.name, comp);
}