
import { VueTyper } from "vue-typer";
import Vue from 'vue';
import VueParticles from 'vue-particles';
import VueGallery from 'vue-gallery';
Vue.component('vue-gallery', VueGallery);
Vue.use(VueGallery);

Vue.component('vue-particles', VueParticles);
Vue.use(VueParticles);

Vue.component('v-typer', VueTyper);
Vue.use(VueTyper);
