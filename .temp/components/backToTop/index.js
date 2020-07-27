import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { backToTop } from "../../utils/mixin";
import './index.scss';

export default class Index extends Taro.Component {

  render() {
    if (this.props.show) {
      return <View className="back" onClick={() => backToTop(800)} />;
    }
  }
}