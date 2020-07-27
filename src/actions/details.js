import {
  PICKER_GOODS,
} from '@constants/details'
/**
 * 商品详情信息
 * @param {*} payload
 */
export const onGoodsChange = payload => {
  return {
    type: PICKER_GOODS,
    payload: payload
  }
}