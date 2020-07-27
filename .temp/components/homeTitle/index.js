import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import classNames from 'classnames';
import './index.scss';

export default class HomeTitle extends Taro.Component {
  static defaultProps = {
    title: '',
    link: '',
    more: '',
    border: false
  };

  ToPage(e) {
    e.stopPropagation();
    Taro.navigateTo({
      url: this.props.link
    });
  }

  render() {
    const { title, more, border } = this.props;
    return <View className={classNames('comp-home-title', border && 'comp-home-title--border')} onClick={this.ToPage.bind(this)}>
        <View className="comp-home-list__header">
          {this.props.children}
          <Text className="comp-home-title__txt">{title}</Text>
        </View>
        {more && <View className="comp-home-title__link">
            <Text className="comp-home-title__link-txt">{more}</Text>
            <AtIcon value="chevron-right" size="15" color="#666666"></AtIcon>
          </View>}
      </View>;
  }
}