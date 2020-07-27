import Nerv from "nervjs";
import Taro, { showToast as _showToast } from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import ImgLoader from "../../../components/imgLoader/index";
import './index.scss';

export default class Banner extends Taro.Component {
  static defaultProps = {
    banner: []
  };

  handleClick = () => {
    // XXX banner 的链接跳转暂且先不做了，有需要可以看 “我的” -> “帮助中心”
    _showToast({
      title: '敬请期待',
      icon: 'none'
    });
  };

  render() {
    const { banner } = this.props;
    return <View className="cate-banner">
        {banner.slice(0, 1).map(item => <View key={item.id} className="cate-banner__item" onClick={this.handleClick.bind(this, item)}>
            <View className="cate-banner__img">
              <ImgLoader placeholder="cateBanner" src={item.picUrl} />
            </View>
          </View>)}
      </View>;
  }
}