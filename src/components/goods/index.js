import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import ImgLoader from '@components/imgLoader'
import floatingAccSub from '../../utils/floating'
import formatUrl from '@utils/formatUrl'
import './index.scss'
import { onGoodsChange } from '@actions/details'

import { connect } from '@tarojs/redux'
@connect(state => state.details, { onGoodsChange })

export default class Goods extends Component {

  async handleClick(data) {
    await this.props.onGoodsChange(data)
    await Taro.navigateTo({
      url: `/pages/details/details`
    })
  }

  // 复制文案
  copyData(data) {
    Taro.setClipboardData({
      data: data.itemName,
    })
  }

  // 分享图片
  checkGoodsImg(data) {
    let currentImage = formatUrl(data.itemMainPicUrl)
    Taro.previewImage({
      current: currentImage, // 当前显示图片的http链接
      urls: [currentImage] // 需要预览的图片http链接列表
    })
  }

  render() {
    const { goodsList = [] } = this.props
    return (
      <View className='goods'>
        {
          goodsList.map((data, index) => {
            data.jdSelfSaleFlag = data.jdSelfSaleFlag === 1 ? '京东自营' : '京东'
            data.coupons = floatingAccSub(data.referPrice, data.salePrice)
            data.purchase = floatingAccSub(data.salePrice, data.rebatePrice)
            return (
              <View key={data.itemId} className='goodsItem'>
                <View className='goodsItem-content' onClick={this.handleClick.bind(this, data)}>
                  <View className='goodsItem-img'>
                    <ImgLoader placeholder='goodsList' src={data.itemMainPicUrl} />
                  </View>
                  <View className='goodsItem-info'>
                    <View className='goodsItem-info__header'>
                      <View className='goodsItem-info__title'>
                        <Text className='goodsItem-info__title--origin'>{data.jdSelfSaleFlag}</Text>
                        <Text className='goodsItem-info__title--name'>{data.itemName}</Text>
                      </View>
                      <View className='goodsItem-info__comment'>
                        <View className='goodsItem-info__jd-origin'>
                          <Text className='goodsItem-info__jd-origin-desc'>京东价</Text>
                          <Text className='goodsItem-info__jd-origin-price'>¥ {data.referPrice}</Text>
                        </View>
                        <View className='goodsItem-info__options-comment'>
                          <Text className='goodsItem-info__options-comment--txt'>{data.commentNum}条评论</Text>
                          <Text>好评率{data.favorableRate}%</Text>
                        </View>
                      </View>
                    </View>
                    <View className='goodsItem-info__coupons'>
                      {
                        data.coupons <= 0
                          ?
                          <View className='goodsItem-info__coupons-buy'>自购省¥ {data.rebatePrice}</View>
                          :
                          <View className='goodsItem-info__coupons-txt'>券¥ {data.coupons}</View>
                      }
                    </View>
                    <View className='goodsItem-info__jd'>
                      <View className='goodsItem-info__jd-price'>
                        <Text className='goodsItem-info__jd-price-desc'>{data.coupons <= 0 ? '返利价' : '券后价'}¥</Text>
                        <Text className='goodsItem-info__jd-price-count'>{data.coupons <= 0 ? data.purchase : data.salePrice}</Text>
                      </View>
                      <View className='goodsItem-info__jd-recomment'>
                        <Text>推广赚¥ {data.rebatePrice}</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View className='goodsItem-options'>
                  <View className='goodsItem-options__button goodsItem-options__copy' onClick={this.copyData.bind(this, data)}>
                    <Text>复制文字</Text>
                  </View>
                  <View className='goodsItem-options__button goodsItem-options__share' onClick={this.checkGoodsImg.bind(this, data)}>
                    <Text>分享图片</Text>
                  </View>
                </View>
              </View>
            )
          })
        }
      </View>
    )
  }
}
