import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import './index.scss';

const BRAND_LIST = [{
  key: '0',
  name: '京东商品'
}, {
  key: '1',
  name: '品质保证'
}, {
  key: '2',
  name: '无忧售后'
}];

export default class Index extends Taro.Component {

  render() {
    return <View className="brand">
        {BRAND_LIST.map(item => <View key={item.key} className="brand-item">
            <AtIcon value="check-circle" size="15" color="#666666"></AtIcon>
            <Text className="brand-item__desc">{item.name}</Text>
         </View>)}
      </View>;
  }
}