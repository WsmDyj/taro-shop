import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Image } from '@tarojs/components';
import './index.scss';

export default class Pin extends Taro.Component {
  static defaultProps = {
    list: []
  };

  render() {
    const { list } = this.props;
    return <View className="grid">
        {list.slice(0, 10).map((item, index) => <View key={index} className="grid-item">
              <Image className="grid-item__img" src={item.picUrls[0]} />
              <View className="grid-item__txt">{item.title}</View>
            </View>)}
      </View>;
  }
}