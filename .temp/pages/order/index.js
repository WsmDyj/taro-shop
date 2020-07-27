import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { DatePick, Tab } from './components/index';
import { AtSegmentedControl } from 'taro-ui';
import './index.scss';

export default class Index extends Taro.Component {

  config = {
    navigationBarTitleText: '订单详情'
  };

  static defaultProps = {
    list: [1, 2, 3, 4, 5]
  };

  constructor() {
    super(...arguments);
    this.state = {
      current: 0
    };
  }
  handleClick(value) {
    this.setState({
      current: value
    });
  }

  render() {
    const { current } = this.state;
    return <View className="order-cotainer">
        <View className="order-type">
          <AtSegmentedControl values={['我推广的', '我购买的']} onClick={this.handleClick.bind(this)} current={current} />
        </View>
        <DatePick />
        <View className="order-cotainer__tab"> 
          <Tab />
        </View>
      </View>;
  }

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}