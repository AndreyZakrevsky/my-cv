
import { VueTyper } from "vue-typer";
import Vue from 'vue';
import VueGallery from 'vue-gallery';
import VueParticles from 'vue-particles';
// import { VueCompareImage }from 'vue-compare-image';
//
// Vue.component('v-compare', VueCompareImage);
// Vue.use(VueCompareImage);

Vue.component('vue-gallery', VueGallery);
Vue.use(VueGallery);

Vue.component('vue-particles', VueParticles);
Vue.use(VueParticles);

Vue.component('v-typer', VueTyper);
Vue.use(VueTyper);
