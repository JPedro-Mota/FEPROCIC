import Vue from 'vue';
import App from '@/App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import pt from 'vuetify/lib/locale/pt';
import VueMask from 'v-mask';
import router from '@/routers/router';

Vue.config.productionTip = false;
Vue.use(VueMask);

Vue.use(Vuetify);

const vuetify = new Vuetify({
  lang: {
    locales: { pt },
    current: 'pt',
  },
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');