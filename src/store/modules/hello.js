import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);
const state = {
  msg: 'hello.js',
  // 这个ID是判断用户是否登录
  id: null,
  // 进入页面判断登录状态
  isLogin: '未登录'
};
const mutations = {

  // 保存本地数据
  save(state) {
    localStorage.setItem('login', state.id);
    location.href = '/d'
  },
  // 获取登录的状态：登录返回true，未登录返回false
  get(state) {
    if (localStorage.getItem('login')) {
      return true;
    }
    return false;
  },
  // 判断是否登录
  isLogin(state) {
		if (mutations.get(state)) {
			state.isLogin = '用户' + localStorage.getItem('login') + '已登录';
		};
	},
  // 清楚登录状态
  remove(state, obj) {
    localStorage.removeItem('login');
    state.isLogin = '未登录';
  },
  // 获取后台的数据
  getMsg(state, obj) {
    // 未登录
    Vue.http.get('/static/data.json').then(function(res) {
      let data = res.data;
      data.forEach(function(el, index) {
        if (el.name === obj.user && el.psw == obj.psd) {
          state.id = el.appID;
          mutations.save(state)
          alert('success')
          return;
        }
      });
      if (!state.id) {
        alert('输入正确的用户名密码');
      }
    });
  }

};
const actions = {
  // 获取后台的数据异步调用同步的方法
  getAsync(content, obj) {
    content.commit('getMsg', obj);
  }
}
export default {
  state,
  mutations,
  actions
};
