import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';


import { Recruits } from './components/index';
import './index.scss';

export default class Index extends Taro.Component {

  config = {
    navigationBarTitleText: '攻略'
  };

  constructor() {
    super(...arguments);
    this.state = {
      current: 0
    };
  }

  handleClick(value) {
    this.setState({
      current: value
    });
  }

  render() {
    const tabList = [{ title: '新人上手' }, { title: '常见问题' }, { title: '邀请海报' }];
    const { current } = this.state;
    return <View className="strategy">
        {/* <AtTabs current={current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={current} index={0} >
            <Recruits />
          </AtTabsPane>
          <AtTabsPane current={current} index={1}>
          </AtTabsPane>
          <AtTabsPane current={current} index={2}>
          </AtTabsPane>
         </AtTabs> */}
        <Recruits />
      </View>;
  }

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}