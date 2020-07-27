import { SEARCH_GOODS, CANCEL_SEARCH } from "../constants/search";
import { API_SEARCH } from "../constants/api";
import { createAction } from "../utils/redux";

/**
* 搜索
* @param {*} payload
*/
export const dispatchSearchResult = payload => createAction({
  url: API_SEARCH,
  type: SEARCH_GOODS,
  // cb: res => ({ ...res, pageNum: payload.eliteId }),
  payload
});

/**
 * 取消搜索
 * @param {*} payload
 */
export const onCancelSearch = payload => {
  return {
    type: CANCEL_SEARCH,
    payload: payload
  };
};