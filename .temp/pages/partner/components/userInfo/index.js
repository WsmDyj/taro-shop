import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import ImgLoader from "../../../../components/imgLoader/index";
import './index.scss';
export default class Index extends Taro.Component {

  static defaultProps = {
    data: {}
  };

  render() {
    const { data } = this.props;
    return <View className="people-container" hover-class="hoverClass">
        <View className="people-avatar">
          <ImgLoader placeholder="userAvatar" src={data.img} />
        </View>
        <View className="people-info">
          <View className="people-info__content">
          <Text className="people-info__name">{data.name}</Text>
            <Text className="people-info__desc">185****7702</Text>
            <Text className="people-info__desc">注册时间：{data.registTime}</Text>
          </View>
          <View className="people-info__more">
            <Text className="people-info__more">详情</Text>
            <AtIcon value="chevron-right" size="18" color="#999999"></AtIcon>
          </View>
        </View>
      </View>;
  }
}