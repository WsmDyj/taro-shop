import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Image } from '@tarojs/components';
import './index.scss';
import UserInfo from "./userinfo/index";
import Accordion from "./list/index";
import myShare from '../../assets/images/my-share.png';

export default class Index extends Taro.Component {

  config = {
    navigationBarTitleText: '我的',
    usingComponents: {
      cell: 'plugin://chatGroupPlugin/cell'
    }
  };

  handleClick() {}

  render() {
    return <View className="my">
        {/* 客户加群 */}
        {/* <View>
          <cell
            onCompletemessage='handleClick'
            plugid='467dd32b72c06a712359cb4ec3728858'
          />
         </View> */}
        <View className="my-container">
          <View className="user-content">
            <View className="user-content__item">
              <UserInfo />
            </View>
            <View className="share-content">
              <Image src={myShare} mode="widthFix" className="share-content__img" />
            </View>
          </View>
          <Accordion />
          <View hover-class="hoverClass" className="login-out">退出登录</View>
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