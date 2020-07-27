import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import './index.scss';
export default class Index extends Taro.Component {

  config = {
    navigationBarTitleText: '常见问题',
    navigationBarBackgroundColor: '#F5F5F5'
  };

  render() {
    return <View className="at-article">
        <View className="at-article__content">
          <View className="at-article__section">
            <View className="at-article__h3">
              1.	关于我的收益名词说明：
            </View>
            <View className="at-article__p">
              a)	收益：通过您邀请注册的购买者，或粉丝产生购买，或者您推广的商品链结或海报促成别人购买，您就会得到推广收益，不同商品的收益比例不一样，会依照您成交的订单付款金额计算收益比例。
            </View>
            <View className="at-article__p">
              b)	今日预估收益：今日透过您推广，或者您开通的智能助理推广所产生订单时所获得得收益，名称是「预估」是因为有人下了单，付了款，但是中途可能会有退款，或取消订单申请，所以是预估，每月结算时，都是下单成功且订单走完不能再退的订单称之为完成订定单就是确定结算可以提现的了。
            </View>
            <View className="at-article__p">
              c)	累计收益：累计收益，即每次有的所有收益，包括可结算的收益，或者已结算的收益的累加。
            </View>
          </View>
          <View className="at-article__section">
            <View className="at-article__h3">
              2.	为什么我的订单收益佣金为”0”?
            </View>
            <View className="at-article__p">
              a)	按照京东的反佣规则，乡村推广员帐号、企业帐号、企业帐号、分期付款帐客户、已经开具增值税专用发票的订单是没有收益的
            </View>
            <View className="at-article__p">
              b)	收益计算是以客户实际支付金额结算的，如果客户在结算时使用了京券、馀额、京豆和E卡等京东虚拟货币，会导致您的收益减少或者为0;
            </View>
            <View className="at-article__p">
              c)	客户点击您发的活动页，或者优惠汇总页，进去购买的商品也会呈现在你的订单列表中，大部分产品都是有收益的，但部分的产品比如电脑的收益是为0的。
            </View>
            <View className="at-article__p">
              d)	京东PLUS会员下的订单，会比普通客户低甚至为0。
            </View>
            <View className="at-article__p">
              e)	以下场景或情况产生的订单无法获得推广佣金：
                  <View className="at-article__txt"> 1.	无效-拆单 （多出现在买送的订单里，买的那个商品有效，送的无效)</View>
                  <View className="at-article__txt"> 2.	无效-取消（取消订单)</View>
                  <View className="at-article__txt"> 3.	无效-京东帮帮主订单</View>
                  <View className="at-article__txt"> 4.	无效-账号异常</View>
                  <View className="at-article__txt"> 5.	无效-赠品类目不返佣</View>
                  <View className="at-article__txt"> 6.	无效-校园订单</View>
                  <View className="at-article__txt"> 7.	无效-企业订单</View>
                  <View className="at-article__txt"> 8.	无效-团购订单</View>
                  <View className="at-article__txt"> 9.	无效-开增值税专用发票订单</View>
                  <View className="at-article__txt"> 10. 无效-乡村推广员下单</View>
                  <View className="at-article__txt"> 11. 无效-违规订单</View>
                  <View className="at-article__txt"> 12. 无效-来源与备案网址不符</View>
                  <View className="at-article__txt"> 13. 使用优惠券/礼品卡/积分、余额等非现金支付的订单，非现金（不包含京豆，惊喜红包，运费券）支付的部分不计算佣金</View>
            </View>
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