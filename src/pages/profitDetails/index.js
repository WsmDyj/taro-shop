import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import ProfitDetails from '@components/profitDetails'
import './index.scss'

export default class Index extends Taro.Component {

  config = {
    navigationBarTitleText: '收益详情'
  }

  constructor () {
    super(...arguments)
    this.state = {
    }
  }
 
  render () {
    return (
      <View className='profit-details'>
        <ProfitDetails />
      </View>
    )
  }
}