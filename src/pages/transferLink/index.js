import Taro, { Component } from '@tarojs/taro'
import { View,  } from '@tarojs/components'
import { AtTextarea, AtButton } from 'taro-ui'
import './index.scss'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '转链'
  }

  constructor () {
    super(...arguments)
    this.state = {
      value: ''
    }
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  handleClear () {
    this.setState({
      value: ''
    })
  }
  
  render () {
    return (
      <View className='transfer-link'>
        <View className='transfer-link__textarea'>
          <AtTextarea
            count={false}
            fixed
            showConfirmBar
            cursorSpacing={0}
            textOverflowForbidden={false}
            height={600}
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
            placeholder='请输入待转链文本...'
          />
        </View>
        <View className='transfer-link__buttons'>
          <AtButton type='primary'>转链</AtButton>
          <AtButton className='transfer-link__button' onClick={this.handleClear.bind(this)}>清空</AtButton>
        </View>
      </View>
    )
  }
}
