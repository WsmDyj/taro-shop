import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { AtTabs } from "taro-ui";
import Goods from "../../../../components/goods/index";

import Loading from "../../../../components/loading/index";
import './index.scss';
import { connect } from "@tarojs/redux-h5";

export default @connect(state => state.home)
class Tab extends Taro.Component {

  static defaultProps = {
    tabList: []
  };

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      loading: true
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.recommend !== nextProps.recommend) {
      this.setState({
        loading: false
      });
    }
  }

  switchTab(current) {
    this.props.onClick(current);
    this.setState({
      current: current,
      loading: true
    });
  }

  render() {
    const { current, loading } = this.state;
    return <View className="home-tab">
        <View className="home-tab__title">
          <AtTabs animated={false} current={current} tabList={this.props.tabList} onClick={this.switchTab.bind(this)} />
        </View>
        <View className="home-tab__content">
          <Loading loading={loading} />
          <Goods goodsList={this.props.recommend} />
        </View>
      </View>;
  }
}