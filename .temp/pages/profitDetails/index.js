import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import ProfitDetails from "../../components/profitDetails/index";
import './index.scss';

export default class Index extends Taro.Component {

  config = {
    navigationBarTitleText: '收益详情'
  };

  constructor() {
    super(...arguments);
    this.state = {};
  }

  render() {
    return <View className="profit-details">
        <ProfitDetails />
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