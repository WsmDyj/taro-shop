import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Image } from '@tarojs/components';

import { Extension, Reflect, Fans, Profit, Order } from './components/index';
import membarBg from '../../assets/images/membar-bg.png';
import './index.scss';

export default class Index extends Taro.Component {

  config = {
    navigationBarTitleText: '会员'
  };

  render() {
    return <View className="membar">
        <View className="user-profile">
          <Image className="user-profile__bg" src={membarBg} mode="widthFix" />
          <View className="user-profile__extension">
            <Extension />
          </View>
          <View className="user-profile__profit">
            <Profit />
          </View>
          <Reflect />
          <Fans />
          <View className="user-profile__order">
            <Order />
          </View>
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