import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text, Image, Switch } from '@tarojs/components';
import classNames from 'classnames';

import './index.scss';
import up from "../../../../assets/images/result-icon-up.jpg";
import down from "../../../../assets/images/result-icon-down.jpg";
import updown from "../../../../assets/images/result-icon.jpg";

const SEARCH_TAB = [{ sortName: '0', name: '综合排序' }, { sortName: '2', name: '高佣金比' }, { sortName: '4', name: '销量', sortType: '1' }, { sortName: '1', name: '价格', sortType: '1' }];

export default class Index extends Taro.Component {

  constructor() {
    super(...arguments);
    this.state = {
      current: '0',
      isCoupon: '0'
    };
  }

  handleClick(item) {
    const _tabs = SEARCH_TAB.map(tab => {
      if (tab.sortName === item.sortName && tab.sortType) {
        tab.sortType = tab.sortType === '1' ? '2' : '1';
      } else if (tab.sortName !== item.sortName && tab.sortType) {
        tab.sortType = '1';
      }
      return tab;
    });
    this.setState({
      current: item.sortName,
      tabs: _tabs
    });
    this.props.onSwitchTab(item);
  }

  switchCoupon() {
    let _isCoupon = this.state.isCoupon === '0' ? '1' : '0';
    this.setState({
      isCoupon: _isCoupon
    });
    this.props.onSwitchTab({ isCoupon: _isCoupon });
  }

  render() {
    const { current } = this.state;
    return <View className="screen">
        <View className="screen-tabs">
          {SEARCH_TAB.map((item, index) => {
          const active = item.sortName === current;
          return <View className="tab-item" key={index} onClick={this.handleClick.bind(this, item)}>
                  <Text className={classNames('tab-item__name', active && 'tab-item__name--active')}>
                    {item.name}
                  </Text>
                  {item.sortType && <Image className="tab-item__icon" src={active ? item.sortType === '2' ? down : up : updown} />}
                </View>;
        })}
        </View>
        <View className="screen-switch">
          <View className="screen-switch__title">仅显示优惠券商品</View>
          <Switch color="#e1251b" onChange={this.switchCoupon.bind()} />
        </View>
      </View>;
  }
}