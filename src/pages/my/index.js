import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import UserInfo from './userinfo'
import Accordion from './list'
import myShare from '../../assets/images/my-share.png'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '我的',
    usingComponents: {
      cell: 'plugin://chatGroupPlugin/cell',
    }
  }

  handleClick () {

  }
  

  render () {
    return (
      <View className='my'>
        {/* 客户加群 */}
        {/* <View>
          <cell
            onCompletemessage='handleClick'
            plugid='467dd32b72c06a712359cb4ec3728858'
          />
        </View> */}
        <View className='my-container'>
          <View className='user-content'>
            <View className='user-content__item'>
              <UserInfo />
            </View>
            <View className='share-content'>
              <Image 
                src={myShare}
                mode='widthFix'
                className='share-content__img'
              />
            </View>
          </View>
          <Accordion />
          <View hover-class='hoverClass' className='login-out'>退出登录</View>
        </View>
      </View>
    )
  }
}
