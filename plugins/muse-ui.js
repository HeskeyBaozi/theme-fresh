"use strict";
import Vue from "vue";
import Paper from 'muse-ui/src/paper';

const components = [
    Paper
];

for (let comp of components) {
    Vue.component(comp.name, comp);
}