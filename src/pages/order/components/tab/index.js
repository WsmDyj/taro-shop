import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import Loading from '@components/loading'
import Order from '../order/index'
import './index.scss'

export default class Index extends Taro.Component {

  static defaultProps = {
    list: [ 1, 2, 3, 4, 5 ]
  }

  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
      loaded: false,
      tabList: [{ title: '全部' }, { title: '待付款' }, { title: '已付款' }, { title: '已完成' }, { title: '无效' }]
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }

  switchTab (value) {
    this.setState({
      current: value,
      loaded: true,
    })
    setTimeout(() => {
      this.setState({
        loaded: false,
      })
    }, 1000)
  }

  render () {
    const {current, loaded , tabList} = this.state
    return (
      <AtTabs animated={false}  current={current} tabList={tabList} onClick={this.switchTab.bind(this)}>
        {tabList.map((data, i) => 
          <AtTabsPane current={current} index={i} key={i} >
            {loaded &&
              <Loading loading={loaded} /> 
            }
            <View className='order-content'>
              {this.props.list.map((item, index) => 
                <View key={index} className='order-item'>
                  <Order />
                </View>
              )}
            </View>
          </AtTabsPane>
        )}
      )
      </AtTabs>
    )
  }
}