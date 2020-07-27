import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text, Image } from '@tarojs/components';
import { AtAvatar } from 'taro-ui';
import './index.scss';
import extensionBg from '../../../../assets/images/membar-extension-bg.png';
import buttonBg from '../../../../assets/images/membar-extension-button.png';

export default class Index extends Taro.Component {

  render() {
    return <View className="extension">
        <View className="extension-info">
          <View className="extension-info__avatar">
            <AtAvatar circle size="large" image="https://storage.360buyimg.com/mtd/home/221543234387016.jpg"></AtAvatar>
          </View>
          <View className="extension-info__content">
            <Text className="extension-info__content-name">企微优选</Text>
            <Text className="extension-info__content-code">邀请码：wddf34</Text>
            <Text className="extension-info__content-desc">邀请码为唯一字段，用于邀请你的粉丝</Text>
          </View>
        </View>
        <View className="extension-bottom">
          <Image className="extension-bottom__bg" src={extensionBg} mode="widthFix" />
          <Text className="extension-bottom__desc">还差邀请
            <Text className="extension-bottom__count">5</Text>
            位粉丝入驻即可升级为会员
          </Text>
          <View className="extension-bottom__button">
            <Image className="extension-bottom__button-img" src={buttonBg} mode="widthFix" />
            <View className="extension-bottom__button-txt">邀请粉丝</View>
          </View>
        </View>
      </View>;
  }
}