import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Image, Text } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import classNames from 'classnames';
import './index.scss';
import linkIcon from '../../assets/images/link.png';
import searchBg from '../../assets/images/search-bg.png';

export default class Index extends Taro.Component {

  static defaultProps = {
    placeholder: '搜索商品热门关键词'
  };

  jumpSearch() {
    Taro.navigateTo({
      url: `/pages/search/search`
    });
  }

  jumpTransferLink() {
    Taro.navigateTo({
      url: `/pages/transferLink/index`
    });
  }

  render() {
    const { border, transferLink, placeholder } = this.props;
    return <View className={classNames('search', border && 'search-border')}>
        {transferLink && <Image className="search-bg" src={searchBg} mode="widthFix" />}
        <View className="search-wrap">
         {!transferLink ? <View /> : <View className="search-wrap__change" onClick={this.jumpTransferLink.bind(this)}>
            <Image className="search-wrap__change-img" src={linkIcon} />
            <Text className="search-wrap__change-desc">转链</Text>
          </View>}
          <View className="search-wrap__input" onClick={this.jumpSearch.bind(this)}>
            <AtIcon value="search" size="14" color="#999"></AtIcon>
            <Text className="search-wrap__input-txt">{placeholder}</Text>
          </View>
        </View>
      </View>;
  }
}