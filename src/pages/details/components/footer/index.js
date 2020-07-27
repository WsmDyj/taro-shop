import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import homeIcon from './assets/home-icon.png'
import serviceIcon from './assets/service-icon.png'
import './index.scss'

const NAV_LIST = [{
  key: 'home',
  name: '首页',
  img: homeIcon,
  url: '/pages/home/index'
}, {
  key: 'service',
  name: '反馈',
  img: serviceIcon,
  url: '/pages/feedback/index'
}]

export default class Footer extends Component {

  handleClick(event) {
    if (event.name === '首页') {
      Taro.switchTab({url: event.url})
    } else {
      Taro.navigateTo({url: event.url})
    }
  }
  
  navigateToJd() {
    Taro.navigateToMiniProgram({
      appId: 'wx91d27dbf599dff74',
      path: 'pages/union/proxy/proxy?spreadUrl=' + encodeURIComponent('https://u.jd.com/fC4owF') + '&customerinfo=jcyp181220',
      envVersion: 'release',
    })
  }

  render () {
    return (
      <View className='item-footer'>
        {NAV_LIST.map(item => (
          <View
            key={item.key}
            className='item-footer__nav'
            onClick={this.handleClick.bind(this, item)}
          >
            <Image
              className='item-footer__nav-img'
              src={item.img}
            />
            <Text className='item-footer__nav-name'>{item.name}</Text>
          </View>
        ))}
        <View className='item-footer__button share' onClick={this.props.onGetpictures}>
          <Text className='item-footer__button-txt'>分享海报</Text>
        </View>
        <View className='item-footer__button buy' onClick={this.navigateToJd.bind()}>
          <Text className='item-footer__button-txt'>京东购买</Text>
        </View>
      </View>
    )
  }
}
