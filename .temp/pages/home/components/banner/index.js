import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Swiper, SwiperItem } from '@tarojs/components';
import ImgLoader from "../../../../components/imgLoader/index";
import './index.scss';

export default class SwiperBanner extends Taro.Component {
  static defaultProps = {
    list: []
  };

  constructor() {
    super(...arguments);
    this.state = {
      active: 0
    };
  }

  swiperChange(e) {
    this.setState({
      active: e.detail.current
    });
  }

  render() {
    const { list } = this.props;

    return <View className="banner">
        <Swiper className="banner-swiper" circular autoplay interval={3000} current={this.state.active} onChange={this.swiperChange.bind(this)}
      // indicatorDots
      // TODO 目前 H5、RN 暂不支持 previousMargin、nextMargin
      // previousMargin
      // nextMargin
      >
          {list.map(item => <SwiperItem key={item.rank}>
              <ImgLoader placeholder="homeBanner" src={item.img} />
            </SwiperItem>)}
        </Swiper>
        <View className="banner-swiper__dots">
          {list.map((item, index) => {
          return <View className={index === this.state.active ? "banner-swiper__active" : 'banner-swiper__dot'} key={index}>
                </View>;
        })}
        </View>
      </View>;
  }
}