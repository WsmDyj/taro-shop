import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import classNames from 'classnames';
import ImgLoader from "../../../components/imgLoader/index";
import './index.scss';

export default class List extends Taro.Component {
  static defaultProps = {
    list: []
  };

  handleClick = item => {
    Taro.navigateTo({
      url: `/pages/search/index?value=${item.name}&subId=${item.id}&categoryId=${item.superCategoryId}`
    });
  };

  render() {
    const { list } = this.props;
    return <View className="cate-list">
        {list.map((group, idx) => <View key={idx} className="cate-list__group">
            {!!group.name && <View className="cate-list__title">
                <Text className="cate-list__title-txt">{group.name}</Text>
              </View>}
            <View className="cate-list__wrap">
              {group.categoryList.map((item, index) => <View key={index} className={classNames('cate-list__item', { 'cate-list__item--right': (index + 1) % 3 === 0 })} onClick={this.handleClick.bind(this, item)}>
                  <View className="cate-list__item-img">
                    <ImgLoader placeholder="cateIcon" src={item.bannerUrl} />
                  </View>
                  <View className="cate-list__item-txt-wrap">
                    <Text className="cate-list__item-txt">{item.name}</Text>
                  </View>
                </View>)}
            </View>
          </View>)}
      </View>;
  }
}