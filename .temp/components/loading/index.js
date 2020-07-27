import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { AtDivider, AtActivityIndicator } from 'taro-ui';

import './index.scss';

export default class Loading extends Taro.Component {

  static defaultProps = {
    loader: false,
    loading: false,
    hasMore: false,
    fontSize: 20,
    content: '触碰到我的底线了'
  };

  render() {
    const { loaded, loading, hasMore, fontSize } = this.props;
    return <View className="loading-container">
        {loaded && <AtActivityIndicator size={64} mode="center" isOpened={loaded} color="#E93B3D"></AtActivityIndicator>}
        {loading && <View className="comp-loading">
            <AtActivityIndicator color="#999999" mode="center" size={28} content="努力加载中..." />
          </View>}
        {hasMore && <View className="comp-loading">
            <AtDivider content={this.props.content} fontSize={fontSize} fontColor="#999999" lineColor="#ccc" />
          </View>}
      </View>;
  }
}