import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text, Image } from '@tarojs/components';
import HomeTitle from "../../../../components/homeTitle/index";
import strategyStudy from "../../../../assets/images/strategy-study.png";
import strategyUpgrade from "../../../../assets/images/strategy-upgrade.png";
import strategyExtension from "../../../../assets/images/strategy-extension.png";
import strategyOpening from "../../../../assets/images/strategy-opening.png";
import strategySubordinate from "../../../../assets/images/strategy-subordinate.png";
import './index.scss';

export default class Index extends Taro.Component {

  render() {
    return <View className="recruits">
        <View className="recruits-item">
          <HomeTitle title="成长任务1：升级会员" more="去升级" border>
            <Image className="recruits-item__icon" src={strategyUpgrade} />
          </HomeTitle>
          <View className="recruits-item__content">
            直属粉丝达到
            <Text className="porit">5个</Text>可自动升级为会员，或者拉一个人数<Text className="porit">大于40人</Text>的微信群（需要在小程序-我的-客服，联系客服，提供带有群主头像的截屏与企微优选注册手机号认证通过后可升级为会员）</View>
        </View>

        <View className="recruits-item">
          <HomeTitle title="成长任务2：手动推广" more="去推广" border>
            <Image className="recruits-item__icon" src={strategyExtension} />
          </HomeTitle>
          <View className="recruits-item__content">注册企微优选小程序后，即可通过商品列表的复制文字以及分享图片去分享给朋友或者微信群中，用户购买您就会获得收益</View>
        </View>

        <View className="recruits-item">
          <HomeTitle title="成长任务3：学习技巧" border>
            <Image className="recruits-item__icon" src={strategyStudy} />
          </HomeTitle>
          <View className="recruits-item__content">了解小程序内重要的选品频道，并掌握多种发品方式和技巧，为亲朋好友带来优惠，自己也能轻松赚钱推广费</View>
          <View className="recruits-item__other">导师微信号： <Text className="porit">maoyou3</Text></View>
        </View>

        <View className="recruits-item">
          <HomeTitle title="成长任务4：开通智能助理" more="去开通" border>
            <Image className="recruits-item__icon" src={strategyOpening} />
          </HomeTitle>
          <View className="recruits-item__content">当您的微信群内人数达到<Text className="porit">100人</Text>后，即可联系客服申请开通智能助理，智能助理背后都是电商运营专家运营，让您每日轻松躺赚</View>
        </View>

        <View className="recruits-item">
          <HomeTitle title="成长任务5：发展下级" more="去邀请" border>
            <Image className="recruits-item__icon" src={strategySubordinate} />
          </HomeTitle>
          <View className="recruits-item__title"></View>
          <View className="recruits-item__content">邀请身边的好友加入，您将获得他推广收益<Text className="porit">20%</Text>的奖励佣金，只需要点击去发展下级，用户点击链接注册后自动成为您的下级</View>
        </View>
      </View>;
  }
}