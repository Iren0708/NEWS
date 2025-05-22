import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/router'
import '@mdi/font/css/materialdesignicons.css';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Components
const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  components,
  directives,
});

const app = createApp(App);
import {registerServices}  from './plugins/api/index.js'
registerServices(app);
app.use(vuetify);
app.use(router);
// app.use(store);
app.mount('#app');




