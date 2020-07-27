import Taro, { getSystemInfoSync as _getSystemInfoSync } from "@tarojs/taro-h5";

const NAVIGATOR_HEIGHT = 44;
const TAB_BAR_HEIGHT = 50;

/**
 * 返回屏幕可用高度
 * // NOTE 各端返回的 windowHeight 不一定是最终可用高度（例如可能没减去 statusBar 的高度），需二次计算
 * @param {*} showTabBar
 */
export function getWindowHeight(showTabBar = true) {
  const info = _getSystemInfoSync();
  const { windowHeight, statusBarHeight } = info;
  const tabBarHeight = showTabBar ? TAB_BAR_HEIGHT : 0;

  {
    return `${windowHeight - tabBarHeight}px`;
  }

  return `${windowHeight}px`;
}