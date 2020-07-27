import {
  HOME_INFO, HOME_HOT, HOME_GOODS, HOME_CATEGORY, HOME_CATEGORY_GOODS
} from '@constants/home'

const INITIAL_STATE = {
  category: [],
  homeInfo: {},
  hot: [],
  goodsList: {},
  recommend: [],
  category_goodsList: {},
  category_recommend: []
}

export default function home(state = INITIAL_STATE, action) {
  switch (action.type) {
    case HOME_CATEGORY: {
      let category = [
        { title: '推荐', cid: 0 },
        { title: '生鲜', cid: 1 },
        { title: '食品', cid: 2 },
        { title: '家居', cid: 3 },
        { title: '美妆', cid: 4 },
        { title: '个护', cid: 5 },
        { title: '图书', cid: 6 },
        { title: '清洁', cid: 7 },
        { title: '母婴', cid: 8 },
        { title: '数码', cid: 9 },
        { title: '电器', cid: 10 },
        { title: '宠物', cid: 11 },
        { title: '玩具', cid: 12 },
        { title: '家具', cid: 13 },
        { title: '服饰', cid: 14 },
        { title: '箱包', cid: 15 },
        { title: '钟表', cid: 16 },
        { title: '家纺', cid: 17 },
        { title: '厨具', cid: 18 },
        { title: '靴鞋', cid: 19 },
        { title: '酒类', cid: 20 }
      ]
      return { ...state, category }
    }
    case HOME_CATEGORY_GOODS: {
      const result = state.category_goodsList.eliteId === action.payload.eliteId ? state.category_recommend.concat(action.payload.result) : action.payload.result
      console.log(state.category_goodsList.eliteId === action.payload.eliteId)
      return {
        ...state,
        category_goodsList: action.payload,
        category_recommend: result
      }
    }
    case HOME_INFO: {
      return {
        ...state,
        homeInfo: action.payload
      }
    }
    case HOME_HOT: {
      // 每3个分成一组
      const hot = []
      action.payload.result.forEach((item, index) => {
        const groupIndex = parseInt(index / 3)
        if (!hot[groupIndex]) {
          hot[groupIndex] = []
        }
        hot[groupIndex].push(item)
      })
      return { ...state, hot }
    }
    case HOME_GOODS: {
      const result = state.goodsList.eliteId === action.payload.eliteId ? state.recommend.concat(action.payload.result) : action.payload.result
      return {
        ...state,
        goodsList: action.payload,
        recommend: result
      }
    }
    default:
      return state
  }
}