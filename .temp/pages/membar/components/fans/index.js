import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text, Image } from '@tarojs/components';
import './index.scss';
import HomeTitle from "../../../../components/homeTitle/index";
import icon from "../../../../assets/images/membar-people-icon.png";

export default class Index extends Taro.Component {

  render() {
    return <View className="fans">
        <View className="fans-title">
          <Image className="fans-title__icon" src={icon} mode="widthFix" />
          <View className="fans-title__content">
            <HomeTitle title="我的粉丝" more="查看更多" link="/pages/partner/index?index=1" />
          </View>
        </View>
        <View className="fans-content">
          <View className="fans-item">
            <Text className="fans-item__name">今日新增粉丝</Text>
            <Text className="fans-item__count">2</Text>
          </View>
          <View className="fans-item">
            <Text className="fans-item__name">粉丝总数</Text>
            <Text className="fans-item__count">12</Text>
          </View>
          <View className="fans-item">
            <Text className="fans-item__name">会员总数</Text>
            <Text className="fans-item__count">3</Text>
          </View>
        </View>
      </View>;
  }
}