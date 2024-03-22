import { store } from '@/store';
import { routes } from './routes';
import { BasicPageEnum } from '@/enums/pageEnum';
import Taro from '@tarojs/taro';
import qs from 'qs';

/**
 * 检查用户权限
 * @param pageUrl 跳转的页面路径
 */
const checkPermission = (pageUrl: string) => {
  const state = store.getState();
  const isLogin = state.user!.isLogin;
  const currentRoute = routes.find(item => {
    return pageUrl.includes(item.path);
  });
  if (!currentRoute) {
    return true;
  } else {
    if (currentRoute.public) {
      return true;
    } else {
      if (isLogin) {
        return true;
      } else {
        reLaunch(BasicPageEnum.LOGIN);
        return false;
      }
    }
  }
};

/**
 * 在页面路径后添加查询字符串
 * @param pageUrl
 * @param query
 */
const appendQueryString = (pageUrl: string, query?: Recordable): string => {
  if (query) {
    const str = qs.stringify(query);
    return pageUrl + '?' + str;
  } else {
    return pageUrl;
  }
};

/**
 * 关闭所有页面，打开到应用内的某个页面
 * @param pageUrl 跳转的页面路径
 * @param query 页面参数
 */
const reLaunch = (pageUrl: string, query?: Recordable) => {
  if (checkPermission(pageUrl)) {
    Taro.reLaunch({
      url: appendQueryString(pageUrl, query),
    });
  }
};

/**
 * 跳转到tabBar页面
 * @param pageUrl 跳转的页面路径
 */
const switchTab = (pageUrl: string) => {
  if (checkPermission(pageUrl)) {
    Taro.switchTab({
      url: pageUrl,
    });
  }
};

/**
 * 保留当前页面，跳转到应用内的某个页面
 * @param pageUrl 跳转的页面路径
 * @param query 页面参数
 */
const navigateTo = (pageUrl: string, query?: Recordable) => {
  if (checkPermission(pageUrl)) {
    Taro.navigateTo({
      url: appendQueryString(pageUrl, query),
    });
  }
};

/**
 * 关闭当前页面，跳转到应用内的某个页面
 * @param pageUrl 跳转的页面路径
 * @param query 页面参数
 */
const redirectTo = (pageUrl: string, query?: Recordable) => {
  if (checkPermission(pageUrl)) {
    Taro.redirectTo({
      url: appendQueryString(pageUrl, query),
    });
  }
};

/**
 * 关闭当前页面，返回上一页面或多级页面
 * @param delta 返回的页面数，如果 delta 大于现有页面数，则返回到首页。
 */
const navigateBack = (delta: number = 1) => {
  Taro.navigateBack({
    delta,
  });
};

export { reLaunch, switchTab, navigateTo, redirectTo, navigateBack };
