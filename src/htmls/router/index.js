import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewUI from 'view-design';
Vue.use(ViewUI);
Vue.use(VueRouter);
ViewUI.LoadingBar.config({
  color: '#ecca4f',
  failedColor: '#fa773b',
  height: 2
});
const routes = [
  {
    path: '/',
    name: 'Develop',
    component: () => import(/* webpackChunkName: "about" */ '../views/Develop.vue')
  },
  {
    path: '/develop',
    name: 'Develop',
    component: () => import(/* webpackChunkName: "about" */ '../views/Develop.vue')
  },
  {
    path: '/review',
    name: 'review',
    component: () => import(/* webpackChunkName: "about" */ '../views/Review.vue')
  },
  {
    path: '/build',
    name: 'build',
    component: () => import(/* webpackChunkName: "about" */ '../views/Build.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  ViewUI.LoadingBar.start();
  next();
});


router.afterEach(() => {
  ViewUI.LoadingBar.finish();
});

export default router
