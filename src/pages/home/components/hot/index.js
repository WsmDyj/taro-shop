import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import ImgLoader from '@components/imgLoader'
import floatingAccSub from '@utils/floating'
import hotPng from '@assets/images/hot.png'
import { onGoodsChange } from '@actions/details'

import './index.scss'
import { connect } from '@tarojs/redux'
@connect(state => state.home, { onGoodsChange })

export default class Hot extends Component {
  static defaultProps = {
    list: []
  }

  constructor() {
    super(...arguments)
    this.state = {
      active: 0,
    }
  }

  swiperChange(e) {
    this.setState({
      active: e.detail.current
    })
  }

  handleClick(data) {
    this.props.onGoodsChange(data)
    Taro.navigateTo({
      url: `/pages/details/details`
    })
  }


  render() {
    const { list } = this.props
    return (
      <View className='hot'>
        <View className='hot-title'>
          <Image className='hot-title__img' src={hotPng}></Image>
          <Text>爆品推荐</Text>
        </View>
        <View className='hot-wrap'>
          <Swiper
            className='hot-swiper'
            circular
            autoplay
            interval={3000}
            current={this.state.active}
            onChange={this.swiperChange.bind(this)}
          // indicatorDots
          // indicatorActiveColor='#e1251b'
          >
            {list.map((group, index) => (
              <SwiperItem
                key={index}
                className='hot-swiper__item'
              >
                {group.map(item => (
                  <View key={item.id} className='hot-item' onClick={this.handleClick.bind(this, item)}>
                    <View className='hot-item__img'>
                      <ImgLoader placeholder='goodsList' src={item.itemMainPicUrl} />
                    </View>
                    <Text className='hot-item__name'>{item.itemName}</Text>
                    <View className='hot-item__info'>
                      <Text className='hot-item__price'>¥ {item.salePrice}</Text>
                      <Text className='hot-item__origin'>¥{item.referPrice}</Text>
                    </View>
                    <View className='hot-item__coupon'>
                      <Text className='hot-item__coupon-txt'>优惠卷¥ {floatingAccSub(item.referPrice, item.salePrice)}</Text>
                    </View>
                  </View>
                ))}
                {
                  group.length === 2 &&
                  <View className='hot-item__fill'></View>
                }
              </SwiperItem>
            ))}
          </Swiper>
          <View className='hot-swiper__dots'>
            {
              list.map((item, index) => {
                return (
                  <View
                    className={index === this.state.active ? "hot-swiper__active" : 'hot-swiper__dot'}
                    key={index}
                  >
                  </View>
                )
              })
            }
          </View>
        </View>
      </View>
    )
  }
}
