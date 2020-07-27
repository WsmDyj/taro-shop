import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'
import './index.scss'
import closeIcon from '../list/assets/eye-close-icon.png'
import openIcon from '../list/assets/eye-open-icon.png'
export default class Index extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      status: false,
      phone: '15797865983'
    }
  }

  handleEyeStatus(phone) {
    this.setState({
      status: !this.state.status
    })
  }

  render () {
    const { phone } = this.state
    return (
      <View className='user'>
        <AtAvatar circle size='large' image='https://storage.360buyimg.com/mtd/home/221543234387016.jpg'></AtAvatar>
        <View className='user-info'>
          <View className='user-info__name'>企微优选
            <Text className='user-info__origin'>微信号登录</Text>
          </View>
          <View className='user-info__phone' onClick={this.handleEyeStatus.bind(this, phone)}>
          <Text className='user-info__phone-txt'>{this.state.phone}</Text>
            {/* <Image 
              src={this.state.status ? openIcon : closeIcon}
              className='user-info__phone-edit'
            /> */}
          </View>
          <Text className='user-info__phone'>注册时间：2019-09-09 10:52</Text>
        </View>
      </View>
    )
  }
}
