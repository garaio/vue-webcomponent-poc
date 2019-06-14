import Vue from "vue";
import wrap from "@vue/web-component-wrapper";
import VueWebComponent from "./App.vue";
// Or just a single component:
// import VueWebComponent from "./components/VueWebComponent.vue";

const GaraioWebcomponentTest = wrap(Vue, VueWebComponent);

window.customElements.define(
  "garaio-webcomponent-test",
  GaraioWebcomponentTest
);
