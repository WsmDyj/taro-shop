import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text, Image } from '@tarojs/components';
import { AtAvatar, AtIcon, AtFloatLayout } from 'taro-ui';
import guideImg from "../../assets/images/guide.jpg";

import './index.scss';

export default class Index extends Taro.Component {

  config = {
    navigationBarTitleText: '收益详情'
  };

  constructor() {
    super(...arguments);
    this.state = {
      isOpened: false,
      content: '',
      title: ''
    };
  }

  checkOrder() {
    Taro.navigateTo({
      url: '/pages/order/index'
    });
  }

  openFoltHelp(params) {
    if (params === '预估') {
      this.setState({
        isOpened: true,
        title: '关于预估收益的说明',
        content: '根据京东推广规则：预估收益是根据用户下单时间预估统计的推广效果数据，并非实际结算收益，订单取消或者退换货后对应收益会相应扣除，实际收益以订单完成结算为准。'
      });
    } else {
      this.setState({
        isOpened: true,
        title: '关于预估结算的说明',
        content: '根据京东推广规则：预估结算收益是根据用户订单完成时间统计，本月结算【订单完成时间在上个月的订单收益】，每个月27～30日结算体现。订单完成的时间不在上个月的会在下个月进行计算。'
      });
    }
  }

  render() {
    const { isOpened, content, title } = this.state;
    return <View className="user-recomment">
        <View className="user-recomment__info">
          <View className="user-recomment__info-desc">
            <AtAvatar size="large" circle image="https://img10.360buyimg.com/imagetools/jfs/t1/89609/4/10847/29906/5e251126E824624a7/863b6159ddd28864.jpg"></AtAvatar>
            <View className="user-recomment__info--content">
              <Text>企微优选</Text>
              <View className="user-recomment__info-wrapper">
                <Image className="user-recomment__info-wrapper--img" src={guideImg} />
                <Text className="user-recomment__info-wrapper--txt">导购员</Text>
              </View>
            </View>
          </View>
          <View className="user-recomment__info--order" onClick={this.checkOrder.bind(this)}>
            <Text>累计成交 4 单</Text>
            <AtIcon value="chevron-right" size="16" color="#333"></AtIcon>
          </View>
        </View>
        <View className="user-recomment__describe">
          <View className="user-recomment__describe-content">
            <View className="user-recomment__describe-txt">
              <View className="user-recomment__describe-title" onClick={this.openFoltHelp.bind(this, '预估')}>
                <Text className="user-recomment__describe-title--txt">今日预估收益</Text>
                <AtIcon value="help" size="16" color="#666"></AtIcon>
              </View>
              <View className="user-recomment__describe-count">¥ 0.00</View>
            </View>
            <View className="user-recomment__describe-txt">
              <View>本月预估收益</View>
              <View className="user-recomment__describe-count">¥ 230.50</View>
            </View>
          </View>
          <View className="user-recomment__describe-content">
            <View className="user-recomment__describe-txt">
              <View>上月预估结算</View>
              <View className="user-recomment__describe-count">¥ 230.50</View>
            </View>
            <View className="user-recomment__describe-txt">
              <View onClick={this.openFoltHelp.bind(this, '结算')}>
                <Text className="user-recomment__describe-title--txt">累计预估结算</Text>
                <AtIcon value="help" size="16" color="#666"></AtIcon>
              </View>
              <View className="user-recomment__describe-count">¥ 230.50</View>
            </View>
            </View>
        </View>
        <AtFloatLayout isOpened={isOpened} title={title}>
          {content}
        </AtFloatLayout>
      </View>;
  }
}