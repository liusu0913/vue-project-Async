import Vue from 'vue'
import Router from 'vue-router'
const login = ()=>import('@/components/login');
const detail = ()=>import('@/components/detail');
const HelloWorld = ()=>import('@/components/HelloWorld');

Vue.use(Router)
const routes = [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/l',
      name: 'login',
      component: login
    },
    {
      path: '/d',
      name: 'detail',
      meta: {
        auto: true
      },
      component: detail
    }
  ];
let IsLogin = false;

let route = new Router({
  mode: 'history',
  routes: routes
});

route.beforeEach((to, from, next) => {  
  if (localStorage.getItem('login')) {
    IsLogin = true;
  }else {
    IsLogin = false;
  }
  console.log(IsLogin);
  if(to.meta.auto) {
    if(IsLogin) {
      next();
    }else {
      alert('未登录')
      next({name: 'login'});
    }
  }
  next();
})
// localStorage.setItem("b","isaac")
// console.log(window.localStorage.getItem('b'));
// localStorage.removeItem('b');
// console.log(window.localStorage.getItem('b'));


export default route;
