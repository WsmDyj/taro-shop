import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from '@tarojs/redux'
import Index from './pages/index'
import './app.scss'
import './styles/variables.scss'

import configStore from './store'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {
  config = {
    pages: [
      'pages/home/home',
      'pages/my/index',
      'pages/cate/index',
      'pages/strategy/index',
      'pages/partner/index',
      'pages/membar/index',
      'pages/profitDetails/index',
      'pages/find/find',
      'pages/search/search',
      'pages/login/index',
      'pages/details/details',
      'pages/code/index',
      'pages/feedback/index',
      'pages/order/index',
      'pages/transferLink/index',
      'pages/about/index',
    ],
    plugins: {
      chatGroupPlugin: {
        version: "1.0.0",
        provider: "wxaae6519cee98d824"
      }
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '企微优选',
      navigationBarTextStyle: 'black',
      onReachBottomDistance: 100
    },
    navigateToMiniProgramAppIdList: [
      "wx91d27dbf599dff74"
    ],
    tabBar: {
      color: "#666",
      selectedColor: "#E93B3D",
      backgroundColor: "#fafafa",
      borderStyle: 'black',
      list: [{
        pagePath: 'pages/home/home',
        text: '首页',
        iconPath: './assets/tab-bar/home.png',
        selectedIconPath: './assets/tab-bar/home-active.png'
      }, {
        pagePath: 'pages/find/find',
        text: '发现',
        iconPath: './assets/tab-bar/find.png',
        selectedIconPath: './assets/tab-bar/find-active.png'
      }, {
        pagePath: 'pages/membar/index',
        text: '会员',
        iconPath: './assets/tab-bar/membar.png',
        selectedIconPath: './assets/tab-bar/membar-active.png'
      }, {
        pagePath: 'pages/strategy/index',
        text: '攻略',
        iconPath: './assets/tab-bar/strategy.png',
        selectedIconPath: './assets/tab-bar/strategy-active.png'
      }, {
        pagePath: 'pages/my/index',
        text: '我的',
        iconPath: './assets/tab-bar/user.jpg',
        selectedIconPath: './assets/tab-bar/user-active.jpg'
      }]
    }
  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
