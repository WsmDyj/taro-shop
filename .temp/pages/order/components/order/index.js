import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';

import ImgLoader from "../../../../components/imgLoader/index";
import './index.scss';

export default class Index extends Taro.Component {

  render() {
    return <View className="order">
        <View className="order-info">
          <View className="order-info__list">订单号： 1047867467834</View>
          <View className="order-info__list">
            <Text>下单：2019-10-09 09:23:50</Text>
            <Text>完成：2019-10-05 16:32:24</Text>
          </View>
          <View className="order-info__list">
            <Text>状态：已完成</Text>
            <View>预估推广收益：
              <Text className="order-prift">¥ 0.06</Text>
            </View>
          </View>
        </View>
        <View className="order-goods">
          <View className="order-goods__img">
            <ImgLoader placeholder="goodsList" />
          </View>
          <View className="order-goods__info">
            <View className="order-goods__info--title">
              <Text className="order-goods__info--origin">同店</Text>
              <Text className="order-goods__info--name">笑傲江湖笑傲江湖笑傲江湖笑傲江湖笑傲江湖笑傲江湖</Text>
            </View>
            <View className="order-goods__info--content">
              <View className="order-goods__info--status">
                <Text>状态：已完成</Text>
                <Text>编号：19763542834</Text>
              </View>
              <View className="order-goods__info--status">
                <Text>数量：x1</Text>
              </View>
              <View className="order-goods__info--status">
                <Text>计佣金额：
                  <Text className="order-prift">5.80</Text>
                </Text>
                <Text>预估推广收益：
                  <Text className="order-prift">0.04</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>;
  }
}