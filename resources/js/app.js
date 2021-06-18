require('./bootstrap');
import Vue from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios'
import axios  from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusCircle,faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Item from './store/store'
import Vuex from 'vuex'
Vue.use(Vuex);
const store=new Vuex.Store({
    modules:{
        item:Item
    }
})
// const store=new Vuex.Store({
//     modules:{
//         Item
//     }
// })
// Vue.use(VueAxios,axios)
library.add(faPlusCircle,faTrash )
Vue.component('font-awesome-icon',FontAwesomeIcon)
const app=new Vue({
    el:'#app',
    store,
    components:{App}
});