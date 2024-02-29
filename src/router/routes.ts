const auth = () => {
  if (!localStorage.getItem('token')) {
    // 未登陆,重定向到登录页面
    return '/login';
  }
};
const routes = [
  {
    path: '/login',
    component: () => import('@/views/login.vue'),
  },
  {
    path: '/home',
    component: () => import('@/views/home.vue'),
    name: 'Home', //增加name，动态路由通过name挂载到该子路由下
    redirect: '/home/user', //新增
    children: [
      {
        path: '/home/user',
        component: () => import('@/views/user.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/404.vue'),
  },
];
export const manageRoute = {
  path: '/home/manage',
  component: () => import('@/views/manage.vue'),
  beforeEach: auth,
  meta: {
    title: '管理页', // 页面标题
    auth: true, //需要登录权限
  },
};

export default routes;
