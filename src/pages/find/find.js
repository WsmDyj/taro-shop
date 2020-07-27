import Taro, { Component } from '@tarojs/taro'
import { View, Image, } from '@tarojs/components'
import './index.scss'
import login from '@assets/images/logo-avatar.png'
import mock from './mock'

export default class Find extends Component {

  config = {
    navigationBarTitleText: '发圈必备'
  }
  shareGoods(item) {
    console.log(item)
  }

  render() {
    return (
      <View className='find'>
        {mock.mockGoods.map((item, index) => {
          return (
            <View key={index} className='find-item'>
              <View className='find-header'>
                <View className='find-header__left'>
                  <Image className='find-header__avatar' src={login} />
                  <View className='find-header__info'>
                    <View className='find-header__info--name'>优选好物</View>
                    <View className='find-header__info--time'>{item.date}</View>
                  </View>
                </View>
                <View className='find-buttons__button' onClick={this.shareGoods.bind(this, item)}>一键发群</View>
              </View>
              <View className='find-content'>
                {item.title}
              </View>
              <View className='find-imgs'>
                {item.images.map((image, i) => {
                  return <Image key={i} className='find-imgs__img' src={image} />
                })}
              </View>
            </View>
          )
        })}
      </View>
    )
  }
}
