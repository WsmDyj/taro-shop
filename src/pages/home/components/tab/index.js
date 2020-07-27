import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs } from "taro-ui"
import Goods from '@components/goods/index'

import Loading from '@components/loading'
import './index.scss'
import { connect } from '@tarojs/redux'

@connect(state => state.home)

export default class Tab extends Component {

  static defaultProps = {
    tabList: [],
  }

  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      loading: true,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.recommend !== nextProps.recommend) {
      this.setState({
        loading: false,
      })
    }
  }

  switchTab(current) {
    this.props.onClick(current)
    this.setState({
      current: current,
      loading: true,
    })
  }

  render() {
    const { current, loading } = this.state
    return (
      <View className='home-tab'>
        <View className='home-tab__title'>
          <AtTabs
            animated={false}
            current={current}
            tabList={this.props.tabList}
            onClick={this.switchTab.bind(this)}
          />
        </View>
        <View className='home-tab__content'>
          <Loading loading={loading} />
          <Goods goodsList={this.props.recommend} />
        </View>
      </View>
    )
  }
}
