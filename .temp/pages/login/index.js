import Nerv from "nervjs";
import Taro, { login as _login } from "@tarojs/taro-h5";
import { View, Text, Image, Button } from '@tarojs/components';
import './index.scss';

import login from '../../assets/images/login.jpg';

export default class Index extends Taro.Component {

  onGetPhoneNumberHandler(e) {
    console.log(e);
  }

  componentDidMount() {
    _login({
      success: res => {
        // console.log(res)
      }
    });
  }

  render() {
    return <View className="login">
        <View className="login-title">
          <Image className="login-title__img" src={login} />
          <View className="login-title__desc">
            <View className="login-title__desc-brand">
              <Text className="login-title__desc-brand-txt">优选好物</Text>
              <Text className="login-title__desc-brand-txt">自购省</Text>
              <Text className="login-title__desc-brand-txt">分享赚</Text>
            </View>
          </View>
        </View>
        <View className="login-buttons">
          <Button className="login-button" openType="getPhoneNumber" onGetPhoneNumber={this.onGetPhoneNumberHandler.bind(this)} type="primary">微信一键登录</Button>
          <Button className="login-button__qy" open-type="getUserInfo" bindgetuserinfo="onGotUserInfo">企业微信一键登录</Button>
        </View>
        <View className="login-footer">
          <Text>京东自营社交电商平台</Text>
        </View>
      </View>;
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}