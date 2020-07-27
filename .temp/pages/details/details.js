import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, ScrollView } from '@tarojs/components';
import { getWindowHeight } from "../../utils/style";

import { Banner, Footer, InfoBase, Brand, Introduce } from './components/index';
import './index.scss';
import { connect } from "@tarojs/redux-h5";


export default @connect(state => state.details)
class Details extends Taro.Component {

  config = {
    navigationBarTitleText: '商品详情'
  };

  constructor() {
    super(...arguments);
    this.state = {
      isOpened: false
    };
  }

  getPictures() {
    this.setState({
      isOpened: true
    });
  }

  closeCurtain() {
    this.setState({
      isOpened: false
    });
  }

  render() {
    const { isOpened } = this.state;
    const { goodsInfo } = this.props;
    return <View className="details">
        <ScrollView scrollY className="details__wrap" style={{ height: getWindowHeight() }}>
          {/* <Curtain
            isOpened={isOpened}
            isButton
            onClose={this.closeCurtain()}
            imgUrl='https://img14.360buyimg.com/imagetools/jfs/t1/98770/14/12017/251652/5e411318Ed51ac57d/3c9e9cf723a75505.jpg'
           /> */}
          <Banner list={goodsInfo.itemAnnexVos} />
          <InfoBase goodsInfo={goodsInfo} />
          <Brand />
          <Introduce list={goodsInfo.itemAnnexVos} />
        </ScrollView>
        <View className="details__footer">
          <Footer onGetpictures={this.getPictures.bind(this)} />
        </View>
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