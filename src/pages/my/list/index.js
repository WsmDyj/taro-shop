import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.scss'
import recommen from './assets/recommen.jpg'
import about from './assets/about.png'
import opinion from './assets/opinion.png'
import problem from './assets/problem.png'
import service from './assets/service.png'
import standard from './assets/standard.jpg'

const NAV_LIST = [{
  key: 'recommen',
  name: '我的推荐人',
  img: recommen,
  url: '/pages/partner/index?index=0'
},{
  key: 'opinion',
  name: '意见反馈',
  img: opinion,
  url: '/pages/feedback/index'
}, {
  key: 'service',
  name: '联系客服',
  img: service,
  url: '/pages/about/index'
}, {
  key: 'problem',
  name: '常见问题',
  img: problem,
  url: '/pages/about/index'
},{
  key: 'standard',
  name: '用户规范',
  img: standard,
  url: '/pages/about/index'
},{
  key: 'about',
  name: '关于我们',
  img: about,
  url: '/pages/about/index'
}]

export default class Index extends Component {

  handleClick = (item) => {
    Taro.navigateTo({
      url: item.url
    })
  }

  render () {
    return (
      <View className='list'>
        {NAV_LIST.map((item, index) => (
            <View 
              hoverClass='hoverClass'
              key={index} 
              className='list-item'
              onClick={this.handleClick.bind(this, item)}
            >
              <View className='list-item__title'>
                <Image 
                  src={item.img} 
                  className='list-item__title-img' 
                />
                <Text className='list-item__title-name'>{item.name}</Text>
              </View>
              <AtIcon value='chevron-right' size='16' color='#666666'></AtIcon>
            </View>
          ))
        }
      </View>
    )
  }
}
