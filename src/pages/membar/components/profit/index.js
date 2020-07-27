import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import Notice from '@components/notice'

import './index.scss'
import icon from '@assets/images/membar-swiper-icon.png'

export default class Index extends Component {

  checkProfit() {
    Taro.navigateTo({
      url: '/pages/profitDetails/index'
    })
  }

  checkOrder() {
    Taro.navigateTo({
      url: '/pages/order/index'
    })
  }

  render() {
    return (
      <View className='profit'>
        <View className='profit-title'>预估收益</View>
        <View className='profit-content'>
          <View className='profit-item'>
            <Text className='profit-item__cash'>124.50</Text>
            <Text className='profit-item__desc'>今日预估收益</Text>
            <View hover-class='hoverClass' className='profit-item__button' onClick={this.checkOrder.bind(this)}>
              <Text>订单列表</Text>
              <AtIcon value='chevron-right' size='15' color='#E9570C'></AtIcon>
            </View>
          </View>
          <Text className='profit-item__split'></Text>
          <View className='profit-item'>
            <Text className='profit-item__cash'>4343.32</Text>
            <Text className='profit-item__desc'>本月累计收益</Text>
            <View hover-class='hoverClass' className='profit-item__button' onClick={this.checkProfit.bind(this)}>
              <Text>收益详情</Text>
              <AtIcon value='chevron-right' size='15' color='#E9570C'></AtIcon>
            </View>
          </View>
        </View>
        <View className='profit-swiper'>
          <Notice />
        </View>
      </View>
    )
  }
}
