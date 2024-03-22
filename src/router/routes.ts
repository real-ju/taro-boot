import type { RouteRecord } from '@/types/router';

// 注册页面
export const routes: RouteRecord[] = [
  // 登录
  {
    path: 'login',
    public: true,
  },
  // 首页
  {
    path: 'index',
    public: false,
  },
];
