import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import classNames from 'classnames';
import './index.scss';

export default class Menu extends Taro.Component {
  static defaultProps = {
    list: []
  };

  handleClick = id => {
    this.props.onClick(id);
  };

  render() {
    const { current, list } = this.props;
    return <View className="cate-menu">
        {list.map((item, index) => {
        const active = item.id === current;
        return <View key={index} className={classNames('cate-menu__item', active && 'cate-menu__item--active')} onClick={this.handleClick.bind(this, item.id)}>
              <Text className={classNames('cate-menu__item-name', active && 'cate-menu__item-name--active')}>
                {item.name}
              </Text>
            </View>;
      })}
      </View>;
  }
}