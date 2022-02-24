import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import moment from 'moment'





library.add(faEnvelopeOpen, faLock, faUser, faTrash)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.prototype.$api = axios.create({
    baseURL: 'https://allweb.fun/coop/api/',
    params: {},
    headers: {
        "Authorization": "1e6080422f56afad3b1b638bf867851f499a9ae1"
    },
})

Vue.prototype.$api.interceptors.request.use(function(config) {
    if (store.state.token) {
        config.params.token = store.state.token;
    }
    return config;
})

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).startOf('hour').fromNow();
    }
})



Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')