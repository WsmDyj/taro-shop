import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text, Image } from '@tarojs/components';
import './index.scss';
import HomeTitle from "../../../../components/homeTitle/index";
import icon from "../../../../assets/images/membar-order-icon.png";

export default class Index extends Taro.Component {

  render() {
    return <View className="fans">
        <View className="fans-title">
          <Image className="fans-title__icon" src={icon} mode="widthFix" />
          <View className="fans-title__content">
            <HomeTitle title="今日订单" link="/pages/order/index" more="历史订单" />
          </View>
        </View>
        <View className="fans-content">
          <View className="fans-item">
            <Text className="fans-item__name">订单总量</Text>
            <Text className="fans-item__count">0</Text>
          </View>
          <View className="fans-item">
            <Text className="fans-item__name">推广订单</Text>
            <Text className="fans-item__count">0</Text>
          </View>
          <View className="fans-item">
            <Text className="fans-item__name">购买订单</Text>
            <Text className="fans-item__count">0</Text>
          </View>
        </View>
      </View>;
  }
}