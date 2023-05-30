
import 'bootstrap/dist/css/bootstrap.css'

import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faForwardStep, faRotate } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)
library.add(faForwardStep)
library.add(faRotate)

createApp(App)
  .component('ficon', FontAwesomeIcon)
  .mount('#app')
