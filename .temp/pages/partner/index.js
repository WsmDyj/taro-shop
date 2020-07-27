import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { AtTabs, AtTabsPane } from 'taro-ui';
import ProfitDetails from "../../components/profitDetails/index";
import { UserInfo } from "./components/index";
import './index.scss';
export default class Index extends Taro.Component {

  config = {
    navigationBarTitleText: '我的伙伴'
  };

  constructor() {
    super(...arguments);
    this.state = {
      current: Number(this.$router.params.index) || 0,
      list: [{ name: '令狐冲', registTime: '2019-02-03 8:00', img: 'https://img10.360buyimg.com/imagetools/jfs/t1/89609/4/10847/29906/5e251126E824624a7/863b6159ddd28864.jpg' }, { name: '岳不群', registTime: '2019-08-03 10:05', img: 'https://img14.360buyimg.com/imagetools/jfs/t1/101577/20/11017/36055/5e25112aE50b2d16f/41ec0c033ba0c86d.jpg' }, { name: '林平之', registTime: '2020-01-03 18:00', img: 'https://img11.360buyimg.com/imagetools/jfs/t1/87659/21/10979/30969/5e25112fE55b3f5da/7241022379dbb0db.jpg' }]
    };
  }

  handleClick(value) {
    this.setState({
      current: value
    });
  }

  componentDidMount() {
    if (this.$router.params.index) {
      this.setState({
        current: Number(this.$router.params.index)
      });
    }
  }

  render() {
    const tabList = [{ title: '我的推荐人' }, { title: '我的粉丝' }, { title: '我的会员' }];
    const { list } = this.state;
    return <View className="partner">
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0}>
            <View className="partner-content">
              <ProfitDetails />
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View className="partner-content">
              {list.map((item, index) => <View key={index}>
                  <UserInfo data={item} />
                </View>)}
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View className="partner-content">
              {list.map((item, index) => <View key={index}>
                  <UserInfo data={item} />
                </View>)}
            </View>
          </AtTabsPane>
        </AtTabs>
      </View>;
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}