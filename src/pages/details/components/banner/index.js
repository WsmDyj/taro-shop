import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem } from '@tarojs/components'
import ImgLoader from '@components/imgLoader'
import './index.scss'

export default class SwiperBanner extends Component {
  static defaultProps = {
    list: []
  }

  render() {
    const { list } = this.props
    return (
      <View className='details-banner'>
        <Swiper
          className='details__swiper'
          circular
          autoplay
          indicatorDots
          indicatorActiveColor='rgb(178, 42, 49)'
        // TODO 目前 H5、RN 暂不支持 previousMargin、nextMargin
        // previousMargin
        // nextMargin
        >
          {list.map((item, index) => (
            <SwiperItem
              key={index}
              className='details-banner__swiper-item'
            >
              <ImgLoader placeholder='detailsBanner' src={item.annexUrl} />
            </SwiperItem>
          ))}
        </Swiper>
      </View>
    )
  }
}
