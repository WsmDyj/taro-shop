
import { PICKER_GOODS } from "../constants/details";

const INITIAL_STATE = {
  goodsInfo: {
    itemAnnexVos: [],
    jdSelfSaleFlag: '',
    itemName: '',
    referPrice: '',
    rebatePrice: '',
    salePrice: '',
    commentNum: '',
    favorableRate: '',
    skuId: ''
  }
};

export default function details(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PICKER_GOODS:
      const goodsInfo = state.goodsInfo;
      Object.keys(goodsInfo).forEach(item => {
        goodsInfo[item] = action.payload[item];
      });
      return { ...state, goodsInfo };
    default:
      return state;
  }
}