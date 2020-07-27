import Taro, { Component } from "@tarojs/taro-h5";
import '@tarojs/async-await';
import { Provider } from "@tarojs/redux-h5";

import './app.scss';
import './styles/variables.scss';

import configStore from "./store/index";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

import Nerv from 'nervjs';
import { View, Tabbar, TabbarContainer, TabbarPanel } from '@tarojs/components';
import { Router, createHistory, mountApis } from '@tarojs/router';
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

const _taroHistory = createHistory({
  mode: "hash",
  basename: "/",
  customRoutes: {},
  firstPagePath: "/pages/home/home"
});

mountApis({
  "basename": "/",
  "customRoutes": {}
}, _taroHistory);
const store = configStore();

class App extends Component {
  state = {
    __tabs: {
      color: "#666",
      selectedColor: "#E93B3D",
      backgroundColor: "#fafafa",
      borderStyle: 'black',
      list: [{
        pagePath: "/pages/home/home",
        text: '首页',
        iconPath: require("././assets/tab-bar/home.png"),
        selectedIconPath: require("././assets/tab-bar/home-active.png")
      }, {
        pagePath: "/pages/find/find",
        text: '发现',
        iconPath: require("././assets/tab-bar/find.png"),
        selectedIconPath: require("././assets/tab-bar/find-active.png")
      }, {
        pagePath: "/pages/membar/index",
        text: '会员',
        iconPath: require("././assets/tab-bar/membar.png"),
        selectedIconPath: require("././assets/tab-bar/membar-active.png")
      }, {
        pagePath: "/pages/strategy/index",
        text: '攻略',
        iconPath: require("././assets/tab-bar/strategy.png"),
        selectedIconPath: require("././assets/tab-bar/strategy-active.png")
      }, {
        pagePath: "/pages/my/index",
        text: '我的',
        iconPath: require("././assets/tab-bar/user.jpg"),
        selectedIconPath: require("././assets/tab-bar/user-active.jpg")
      }],
      mode: "hash",
      basename: "/",
      customRoutes: {}
    }
  };

  config = {
    pages: ["/pages/home/home", "/pages/my/index", "/pages/cate/index", "/pages/strategy/index", "/pages/partner/index", "/pages/membar/index", "/pages/profitDetails/index", "/pages/find/find", "/pages/search/search", "/pages/login/index", "/pages/details/details", "/pages/code/index", "/pages/feedback/index", "/pages/order/index", "/pages/transferLink/index", "/pages/about/index"],
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
    navigateToMiniProgramAppIdList: ["wx91d27dbf599dff74"],
    tabBar: { color: "#666", selectedColor: "#E93B3D", backgroundColor: "#fafafa", borderStyle: 'black', list: [{ pagePath: "/pages/home/home", text: '首页', iconPath: require("././assets/tab-bar/home.png"), selectedIconPath: require("././assets/tab-bar/home-active.png") }, { pagePath: "/pages/find/find", text: '发现', iconPath: require("././assets/tab-bar/find.png"), selectedIconPath: require("././assets/tab-bar/find-active.png") }, { pagePath: "/pages/membar/index", text: '会员', iconPath: require("././assets/tab-bar/membar.png"), selectedIconPath: require("././assets/tab-bar/membar-active.png") }, { pagePath: "/pages/strategy/index", text: '攻略', iconPath: require("././assets/tab-bar/strategy.png"), selectedIconPath: require("././assets/tab-bar/strategy-active.png") }, { pagePath: "/pages/my/index", text: '我的', iconPath: require("././assets/tab-bar/user.jpg"), selectedIconPath: require("././assets/tab-bar/user-active.jpg") }], mode: "hash",
      basename: "/",
      customRoutes: {}
    }
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider store={store}>
          
        <TabbarContainer>
          
        <TabbarPanel>
          
                <Router mode={"hash"} history={_taroHistory} routes={[{
            path: '/pages/home/home',
            componentLoader: () => import( /* webpackChunkName: "home_home" */'./pages/home/home'),
            isIndex: true
          }, {
            path: '/pages/my/index',
            componentLoader: () => import( /* webpackChunkName: "my_index" */'./pages/my/index'),
            isIndex: false
          }, {
            path: '/pages/cate/index',
            componentLoader: () => import( /* webpackChunkName: "cate_index" */'./pages/cate/index'),
            isIndex: false
          }, {
            path: '/pages/strategy/index',
            componentLoader: () => import( /* webpackChunkName: "strategy_index" */'./pages/strategy/index'),
            isIndex: false
          }, {
            path: '/pages/partner/index',
            componentLoader: () => import( /* webpackChunkName: "partner_index" */'./pages/partner/index'),
            isIndex: false
          }, {
            path: '/pages/membar/index',
            componentLoader: () => import( /* webpackChunkName: "membar_index" */'./pages/membar/index'),
            isIndex: false
          }, {
            path: '/pages/profitDetails/index',
            componentLoader: () => import( /* webpackChunkName: "profitDetails_index" */'./pages/profitDetails/index'),
            isIndex: false
          }, {
            path: '/pages/find/find',
            componentLoader: () => import( /* webpackChunkName: "find_find" */'./pages/find/find'),
            isIndex: false
          }, {
            path: '/pages/search/search',
            componentLoader: () => import( /* webpackChunkName: "search_search" */'./pages/search/search'),
            isIndex: false
          }, {
            path: '/pages/login/index',
            componentLoader: () => import( /* webpackChunkName: "login_index" */'./pages/login/index'),
            isIndex: false
          }, {
            path: '/pages/details/details',
            componentLoader: () => import( /* webpackChunkName: "details_details" */'./pages/details/details'),
            isIndex: false
          }, {
            path: '/pages/code/index',
            componentLoader: () => import( /* webpackChunkName: "code_index" */'./pages/code/index'),
            isIndex: false
          }, {
            path: '/pages/feedback/index',
            componentLoader: () => import( /* webpackChunkName: "feedback_index" */'./pages/feedback/index'),
            isIndex: false
          }, {
            path: '/pages/order/index',
            componentLoader: () => import( /* webpackChunkName: "order_index" */'./pages/order/index'),
            isIndex: false
          }, {
            path: '/pages/transferLink/index',
            componentLoader: () => import( /* webpackChunkName: "transferLink_index" */'./pages/transferLink/index'),
            isIndex: false
          }, {
            path: '/pages/about/index',
            componentLoader: () => import( /* webpackChunkName: "about_index" */'./pages/about/index'),
            isIndex: false
          }]} customRoutes={{}} />
                
        </TabbarPanel>
        <Tabbar conf={this.state.__tabs} homePage="pages/home/home" />
        </TabbarContainer>
        </Provider>;
  }

  componentWillUnmount() {
    this.componentDidHide();
  }

  constructor(props, context) {
    super(props, context);
    Taro._$app = this;
  }

  componentWillMount() {
    Taro.initTabBarApis(this, Taro);
  }

}

Nerv.render(<App />, document.getElementById('app'));