import { API_CATE, API_CATE_SUB, API_CATE_SUB_LIST, API_CATE_CATEGORY } from "./api";
import fetch from "../utils/request";

/**
 * 商品类目查询接口
 * @param {*} payload
 */
export const fetchCategory = payload => fetch({
  url: API_CATE_CATEGORY,
  method: 'post',
  payload
});

/**
 * 分类菜单、列表
 * @param {*} payload
 */
export const fetchMenu = payload => fetch({
  url: API_CATE,
  method: 'get',
  payload
});

/**
 * 子级菜单
 * @param {*} payload
 */
export const fetchSubMenu = payload => fetch({
  url: API_CATE_SUB,
  payload
});

/**
 * 子级菜单下列表商品
 * @param {*} payload
 */
export const fetchSubItem = payload => fetch({
  url: API_CATE_SUB_LIST,
  payload
});