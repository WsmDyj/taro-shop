import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text, Image } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import './index.scss';
import icon from "../../../../assets/images/membar-pice-icon.png";
import HomeTitle from "../../../../components/homeTitle/index";

export default class Index extends Taro.Component {

  render() {
    return <View className="reflect">
        <View className="reflect-title">
          <Image className="reflect-title__icon" src={icon} mode="widthFix" />
          <HomeTitle title="可提现金额" />
        </View>
        <View className="reflect-content">
          <Text className="reflect-content__cash">
            <Text className="reflect-content__cash-icon">¥</Text>
            <Text className="reflect-content__cash-count">232.23</Text>
          </Text>
          <View className="reflect-content__button">
            <AtButton type="secondary" circle size="small">点击提现</AtButton>
          </View>
        </View>
      </View>;
  }
}