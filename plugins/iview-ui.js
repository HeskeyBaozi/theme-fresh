"use strict";
import Vue from "vue";
import Icon from 'iview/src/components/icon';

const components = [
    Icon
];

for (let comp of components) {
    Vue.component(comp.name, comp);
}