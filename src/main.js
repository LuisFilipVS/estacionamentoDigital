import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { createApp } from 'vue'
import App from './App.vue'
import { aliases, fa} from 'vuetify/iconsets/fa'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


config.familyDefault = "classic";
config.styleDefault = "duotone";

const vuetify = createVuetify({
    components,
    directives,
  })

createApp(App).use(vuetify).mount('#app')


