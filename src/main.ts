import Vue from "vue";
import wrap from "@vue/web-component-wrapper";
// import VueWebComponent from "./components/VueWebComponent.vue";
import VueWebComponentApp from "./App.vue";

const GaraioWebcomponentTest = wrap(Vue, VueWebComponentApp);

window.customElements.define(
  "garaio-webcomponent-test",
  GaraioWebcomponentTest
);
