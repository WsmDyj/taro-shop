import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import ImgLoader from "../../../../components/imgLoader/index";
import './index.scss';

export default class Recommend extends Taro.Component {
  static defaultProps = {
    list: []
  };

  handleClick = id => {
    Taro.navigateTo({
      url: `/pages/details/index?itemId=${id}`
    });
  };

  render() {
    const { list } = this.props;
    return <View className="recommend">
        <View className="recommend__title">
          <Text className="recommend__title-txt">为你推荐</Text>
        </View>
        <View className="recommend__list">
          {list.map(item => {
          const { id, categoryItem } = item;
          return <View key={id} className="recommend__list-item" onClick={this.handleClick.bind(this, id)}>
                <ImgLoader placeholder="goodsRecommen" src={categoryItem.listPicUrl} />
                <View className="recommend__list-item-info">
                  <Text className="recommend__list-item-name" numberOfLines={1}>
                    {categoryItem.name}
                  </Text>
                  <View className="recommend__list-item-price-wrap">
                    <Text className="recommend__list-item-price">
                      ¥{categoryItem.activityPrice || categoryItem.retailPrice}
                    </Text>
                  </View>
                </View>
              </View>;
        })}
        </View>
      </View>;
  }
}