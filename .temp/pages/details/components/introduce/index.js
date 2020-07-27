import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import ImgLoader from "../../../../components/imgLoader/index";
import './index.scss';

export default class Introduce extends Taro.Component {
  static defaultProps = {
    list: []
  };

  render() {
    const { list } = this.props;
    return <View className="introduce">
      {list.map((item, index) => {
        return <View key={index} className="introduce-item">
              <ImgLoader placeholder="detailsBanner" src={item.annexUrl} />
            </View>;
      })}
    </View>;
  }
}