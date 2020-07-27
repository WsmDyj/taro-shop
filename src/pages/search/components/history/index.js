import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.scss'

export default class Index extends Component {

  constructor() {
    super(...arguments)
    this.state = {
      tags: ['三只松鼠', '防雾霾口罩'],
    }
  }

  async selectTag(tag) {
    this.props.onClick(tag)
  }

  render() {
    return (
      <View className='search-history'>
        <View className='search-history__title'>
          <Text className='search-history__title-delete'>搜索历史</Text>
          <AtIcon value='trash' size='16' color='#333'></AtIcon>
        </View>
        <View className='search-history__list'>
          {
            this.state.tags.map((item, index) => (
              <Text onClick={this.selectTag.bind(this, item)} key={index} className='search-history__list--tag'>{item}</Text>
            ))
          }
        </View>
      </View> 
    )
  }
}
