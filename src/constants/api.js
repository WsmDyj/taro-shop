/**
 * NOTE HOST、HOST_M 是在 config 中通过 defineConstants 配置的
 * 只所以不在代码中直接引用，是因为 eslint 会报 no-undef 的错误，因此用如下方式处理
 */
/* eslint-disable */
export const host = HOST
export const hostM = HOST_M
export const hostC = HOST_C
/* eslint-enable */

// 搜索接口
export const API_SEARCH = `${HOST_C}/itemInfo/searchCpsItemListByKeyword`

// home
export const API_HOME = `${host}/xhr/index/index.json`
export const API_HOME_HOT = `${hostM}/pin/min/item/recommend.json`
export const API_GOODS_LIST = `${HOST_C}/itemInfo/findCpsItemList`  // 商品tabbar
export const API_CATEGORY = `${HOST_C}/itemInfo/findItemCategory`  // 分类
export const API_CATEGORY_GOODS = `${HOST_C}/itemInfo/findCpsItemListByCondition`  // 分类

// cate
export const API_CATE_CATEGORY = `${HOST_C}/itemInfo/findItemCategory`
export const API_CATE = `${host}/xhr/list/category.json`
export const API_CATE_SUB = `${host}/xhr/list/subCate.json`
export const API_CATE_SUB_LIST = `${host}/xhr/list/l2Items2.json`
