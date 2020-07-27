import Nerv from "nervjs";
import Taro, { showModal as _showModal } from "@tarojs/taro-h5";
import { View, Text, Image } from '@tarojs/components';
import { AtInput, AtIcon } from 'taro-ui';
import './index.scss';

import logoBg from '../../assets/images/logo-bg.jpg';
import logo from '../../assets/images/logo.jpg';
import logoCodeBg from '../../assets/images/logo-code-bg.jpg';

export default class Index extends Taro.Component {

  config = {
    navigationBarTitleText: '',
    navigationBarBackgroundColor: '#DF1B22',
    navigationBarTextStyle: 'white',
    backgroundTextStyle: 'dark'
  };

  constructor() {
    super(...arguments);
    this.state = {
      value: '- - - - - -',
      boxcodearr: []
    };
  }

  handleChange(value) {
    this.setState({
      value
    });
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value;
  }

  jumpNextPage() {
    Taro.redirectTo({ url: '/pages/login/index' });
  }

  getCodeTips() {
    _showModal({
      title: '提示',
      showCancel: false,
      confirmText: '知道了',
      confirmColor: '#409efe',
      content: '请联系身边已注册企微优选的朋友索要或网络搜索企微优选邀请码'
    });
  }

  render() {
    return <View className="code">
        <View className="code-logo">
          <Image className="code-logo__bg" src={logoBg} />
          <View className="code-logo__title">
            <Image className="code-logo__title-img" src={logo} />
          </View>
          <View className="code-logo__title-brand">
            <Text className="code-logo__title-txt">优选好物</Text>
            <Text className="code-logo__title-txt">自购省</Text>
            <Text className="code-logo__title-txt">分享赚</Text>
          </View>
        </View>
        <View className="code-content">
          <Image className="code-content__bg" src={logoCodeBg} />
          <View className="code-content__input">
            <Text className="code-content__input-txt">请输入邀请码</Text>
            <AtInput
          // maxLength={6}
          border={false} value={this.state.value} onChange={this.handleChange.bind(this)} />
            <View className="code-content__help" onClick={this.getCodeTips}>
              <AtIcon value="help" size="16s" color="#D22925"></AtIcon>
              <Text className="code-content__help-txt">没有邀请码</Text>
            </View>
          </View>
        </View>
        <View className="code-options">
            <Text>友情提示：请确认您的邀请人，注册后不可以更改哦</Text>
            <View className="code-options__button" onClick={this.jumpNextPage}>下一步</View>
            <View className="code-options__service">
              <Text>登录即视为您已阅读并同意</Text>
              <Text className="code-options__service-txt">《使用服务协议》</Text>
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