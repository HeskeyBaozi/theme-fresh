"use strict";
import Vue from "vue";
import TopBar from "~components/TopBar";

const components = [
    TopBar
];

for (let comp of components) {
    Vue.component(comp.options.name, comp);
}