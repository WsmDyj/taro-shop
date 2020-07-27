import { SEARCH_GOODS, CANCEL_SEARCH } from "../constants/search";

const INITIAL_STATE = {
  goodsList: {},
  result: []
};

export default function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_GOODS:
      {
        const target = Object.assign({}, action.payload);
        return {
          ...state,
          goodsList: action.payload,
          result: target.pageNum === 1 ? target.result : state.result.concat(target.result)
        };
      }
    case CANCEL_SEARCH:
      {
        return {
          result: []
        };
      }
    default:
      return state;
  }
}