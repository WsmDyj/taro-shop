import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtTabs, AtIcon } from 'taro-ui'
import { backToTop } from '@utils/mixin'
import classNames from 'classnames'
import './index.scss'
import homeMenuBg from '@assets/images/home-menu-bg.jpg'

export default class SwiperBanner extends Component {
  static defaultProps = {
    tabList: []
  }

  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
      open: false,
      isMask: false
    }
  }

  handleClick(value) {
    console.log(!isNaN(value))
    if (!isNaN(value)) {
      backToTop(0)
      this.setState({
        current: value,
        open: false
      })
      this.props.onClick(value)
    } else {
      value.stopPropagation()
      this.setState({
        open: true
      })
    }
  }

  render() {
    const { open, current } = this.state
    return (
      <View className='home-menu'>
        <Image
          className='home-menu-bg'
          src={homeMenuBg}
          mode='widthFix'
        />
        <View className='home-menu__list'>
          <AtTabs
            scroll
            current={current}
            swipeable={false}
            animated={false}
            tabList={this.props.tabList}
            onClick={this.handleClick.bind(this)}
          />
        </View>
        <View className='home-menu__accordion' onClick={() => this.setState({ open: !this.state.open })}>
          <View className={classNames('home-menu__accordion-icon', open && 'home-menu__accordion-icon--open')}>
            <AtIcon value='chevron-down' size='22' color='#FFF'></AtIcon>
          </View>
        </View>
        <View onClick={() => this.setState({ open: false })} className={classNames('home-menu__content', open && 'home-menu__content-open')}>
          <View onClick={this.handleClick.bind(this)} className={classNames('home-menu__content-wrapper', open && 'home-menu__content-animation')}>
            <View className='home-menu__content-title'>全部分类</View>
            <View className='home-menu__content-list'>
              {
                this.props.tabList.map((item, index) => {
                  return (
                    <View onClick={this.handleClick.bind(this, item.cid)} className={classNames('home-menu__content-item', item.cid === current && 'home-menu__content-item--active')} key={index}>{item.title}</View>
                  )
                })
              }
            </View>
          </View>
        </View>
      </View>
    )
  }
}
