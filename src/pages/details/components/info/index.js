import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import formatUrl from '@utils/formatUrl'
import floatingAccSub from '../../../../utils/floating'
import './index.scss'

export default class Index extends Component {

  static defaultProps = {
    goodsInfo: {}
  }

  // 复制文案
  copyData(data) {
    Taro.setClipboardData({
      data: this.props.goodsInfo.itemName,
    })
  }

  // 分享图片
  shareGoodsImg() {
    const _urls = this.props.goodsInfo.itemAnnexVos.map(item => {
      return formatUrl(item.annexUrl)
    })
    Taro.previewImage({
      current: _urls[0], // 当前显示图片的http链接
      urls: _urls // 需要预览的图片http链接列表
    })
  }

  navigateToJd() {
    Taro.navigateToMiniProgram({
      appId: 'wx91d27dbf599dff74',
      path: 'pages/union/proxy/proxy?spreadUrl=' + encodeURIComponent('https://u.jd.com/fC4owF') + '&customerinfo=jcyp181220',
      envVersion: 'release',
    })
  }

  render() {
    const { goodsInfo } = this.props
    return (
      <View className='info'>
        <View className='info-title'>
          <Text className='info-title__origin'>{goodsInfo.jdSelfSaleFlag === 1 ? '京东自营' : '京东'}</Text>
          <Text className='info-title__name'>{goodsInfo.itemName}</Text>
        </View>
        <View className='info-comment' onClick={this.navigateToJd.bind()}>
          <View className='info-comment__txt'>
            京东价<Text className='info-comment__txt-origin'> ¥{goodsInfo.referPrice}</Text>
          </View>
          <View className='info-comment__more'>
            <Text className='info-comment__txt'>{goodsInfo.commentNum}条评论</Text>
            <Text className='info-comment__txt info-comment__split'>好评率{goodsInfo.favorableRate}%</Text>
            <Text className='info-comment__txt info-comment__split' >查看详情</Text>
            <AtIcon value='chevron-right' size='15' color='#999999'></AtIcon>
          </View>
        </View>
        <View className='info-coupons'>
          {
            floatingAccSub(goodsInfo.referPrice, goodsInfo.salePrice) <= 0
              ?
              <View className='info-coupons__buy'>自购省¥ {goodsInfo.rebatePrice}</View>
              :
              <View className='info-coupons__share'>
                <View className='info-coupons__share-count'>券¥ {floatingAccSub(goodsInfo.referPrice, goodsInfo.salePrice)}</View>
                <View className='info-coupons__share-button'>
                  <Text>推广赚¥ {goodsInfo.rebatePrice}</Text>
                </View>
              </View>
          }
        </View>
        <View className='info-price'>
          {
            floatingAccSub(goodsInfo.referPrice, goodsInfo.salePrice) <= 0
              ?
              <View className='info-price__coupons'>
                <Text className='info-price__name'>返利价¥</Text>
                <Text className='info-price__num'>{floatingAccSub(goodsInfo.salePrice, goodsInfo.rebatePrice)}</Text>
              </View>
              :
              <View className='info-price__coupons'>
                <Text className='info-price__name'>券后价¥</Text>
                <Text className='info-price__num'>{goodsInfo.salePrice}</Text>
              </View>
          }
          <View className='info-price__options'>
            <View className='info-price__button' onClick={this.copyData.bind(this, goodsInfo.itemName)}>
              复制文案
            </View>
            <View className='info-price__button' onClick={this.shareGoodsImg.bind(this)}>
              分享图片
            </View>
          </View>
        </View>
        <View id="copyCode" data-clipboard-target="#invitecode" data-clipboard-action="copy" className='info-number'>
          <Text id="copyCode" className='info-number__name'>商品编号：{goodsInfo.jdSkuId}</Text>
          <View data-clipboard-text='5682858' onClick={this.copyData.bind(this, goodsInfo.jdSkuId)} className='info-number__options'>复制</View>
        </View>
      </View>
    )
  }
}
