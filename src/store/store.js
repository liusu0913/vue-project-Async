import Vue from 'vue';
import Vuex from 'vuex';
import hello from './modules/hello.js'
Vue.use(Vuex);
export default new Vuex.Store({
	modules: {hello}
})