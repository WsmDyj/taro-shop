import {
  HOME_INFO, HOME_HOT, HOME_GOODS, HOME_CATEGORY, HOME_CATEGORY_GOODS
} from '@constants/home'
import {
  API_HOME, API_HOME_HOT, API_GOODS_LIST, API_CATEGORY, API_CATEGORY_GOODS
} from '@constants/api'
import { createAction } from '@utils/redux'

/**
* 首页菜单列表
* @param {*} payload
*/
export const dispatchCategory = payload => createAction({
  url: API_CATEGORY,
  type: HOME_CATEGORY,
  payload
})

/**
* 首页菜单列表商品
* @param {*} payload
*/
export const dispatchCategoryGoods = payload => createAction({
  url: API_CATEGORY_GOODS,
  type: HOME_CATEGORY_GOODS,
  cb: res => ({ ...res, eliteId: payload.eliteId }),
  payload
})

/**
* 首页数据轮播图和icon入口
* @param {*} payload
*/
export const dispatchHome = payload => createAction({
  url: API_HOME,
  type: HOME_INFO,
  payload
})

/**
 * 爆品推荐
 * @param {*} payload
 */
export const dispatchHot = payload => createAction({
  url: API_GOODS_LIST,
  type: HOME_HOT,
  payload
})

/**
 * 商品tabbar 列表
 * @param {*} payload
 */
export const dispatchGoodsList = payload => createAction({
  url: API_GOODS_LIST,
  type: HOME_GOODS,
  cb: res => ({ ...res, eliteId: payload.eliteId }),
  payload
})