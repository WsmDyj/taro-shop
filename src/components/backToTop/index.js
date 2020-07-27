import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { backToTop } from '@utils/mixin'
import './index.scss'

export default class Index extends Component {

  render() {
    if (this.props.show) {
      return (
        <View
          className='back'
          onClick={() => backToTop(800)}
        />
      )
    }
  }
}
