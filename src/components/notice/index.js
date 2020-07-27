import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.scss'
import icon from '@assets/images/membar-swiper-icon.png'

export default class Loading extends Component {

  static defaultProps = {
    list: ['用户李四刚获得62.34元推广收益','用户王五刚获得62.34元推广收益']
  }

  render () {
    return (
      <View className='notice'>
        <Swiper
          className='profit-swiper'
          vertical
          interval={3000}
          circular
          autoplay
        >
          {
            this.props.list.map((item, index) => {
              return (
                <SwiperItem className='profit-swiper__item' key={index}>
                  <Image 
                    src={icon}
                    className='profit-swiper__icon'
                  />
                  <Text className='profit-swiper__desc'>{item}</Text>
                </SwiperItem>
              )
            })
          }
        </Swiper>
      </View>
    )
  }
}

