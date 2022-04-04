import Vue from 'vue'
import App from './App.vue'
import { faClock, faEnvelope, faPhone, faUserLarge } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'


Vue.config.productionTip = false
library.add(faClock)
library.add(faPhone)
library.add(faEnvelope)
library.add(faFacebookF)
library.add(faTwitter)
library.add(faLinkedinIn)
library.add(faUserLarge)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
