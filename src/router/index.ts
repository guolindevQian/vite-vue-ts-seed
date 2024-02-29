import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import { useUserStore } from '@/store/user';

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to) => {
  // 这样做是可行的，因为路由器是在其被安装之后开始导航的，
  // 而此时 Pinia 也已经被安装。
  const userStore = useUserStore();
  if (!userStore.token && to.path !== '/login') {
    return '/login';
  }

  if (to.path === '/login') {
    //在登录页做清除操作，如清除token等
  }

  if (!localStorage.getItem('token') && to.path !== '/login') {
    // 未登陆且访问的不是登录页，重定向到登录页面
    return '/login';
  }
  if (!localStorage.getItem('token') && to.meta.auth) {
    // 此路由需要授权，请检查是否已登录
    // 如果没有，则重定向到登录页面
    return {
      path: '/login',
      // 保存我们所在的位置，以便以后再来
      query: { redirect: to.fullPath },
    };
  }
});

export default router;
