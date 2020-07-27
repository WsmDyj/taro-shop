import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text, Image } from '@tarojs/components';
import Notice from "../../../../components/notice/index";

import ImgLoader from "../../../../components/imgLoader/index";
import guideNews from "../../../../assets/images/home-guide_News.jpg";

import './index.scss';

export default class Pin extends Taro.Component {
  static defaultProps = {
    list: []
  };

  constructor() {
    super(...arguments);
    this.state = {
      list: [{ title: '新手入门', describe: '进阶指南', imgurl: 'https://img11.360buyimg.com/imagetools/jfs/t1/89038/28/14071/27622/5e5fa5f5E7875f1a0/b791040f297396b0.png' }, { title: '高佣好货', describe: '推广赚¥ 122', imgurl: 'https://img12.360buyimg.com/imagetools/jfs/t1/99612/40/13892/227477/5e5faa39E191bbe26/945c31051374338c.jpg' }, { title: '好券商品', describe: '¥ 36', imgurl: 'https://img10.360buyimg.com/imagetools/jfs/t1/95030/37/13993/162968/5e5faa91Ea813071f/59e3d58be9c23a2f.jpg' }, { title: '京东超市', describe: '多快好省', imgurl: 'https://img11.360buyimg.com/imagetools/jfs/t1/100208/40/13981/102763/5e5fad16E8c4621d6/fb5ba3387657ba21.jpg' }]
    };
  }

  render() {
    return <View className="guide">
        <View className="guide-content">
          {this.state.list.map((item, index) => {
          return <View className="guide-item" key={index}>
                  <Text className="guide-item__title">{item.title}</Text>
                  <Text className="guide-item__describe">{item.describe}</Text>
                  <View className="guide-item__img">
                    <ImgLoader placeholder="cateIcon" src={item.imgurl} />
                  </View>
                </View>;
        })}
        </View>
        <View className="guide-news">
          <Image className="guide-news__icon" src={guideNews} />
          <View className="profit-swiper">
            <Notice />
          </View>
        </View>
      </View>;
  }
}