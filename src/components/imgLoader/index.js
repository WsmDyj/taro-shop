import Taro, { Component } from '@tarojs/taro'
import { Block, Image } from '@tarojs/components'
import ImgLoader from '@utils/imgLoader'
import formatUrl from '@utils/formatUrl'
import './index.scss'

import homeBanner from '@assets/defalut/homeBanner.jpg'
import goodsList from '@assets/defalut/goodsList.jpg'
import detailsBanner from '@assets/defalut/detailsBanner.jpg'
import goodsRecommen from '@assets/defalut/goodsRecommen.jpg'
import userAvatar from '@assets/defalut/default-avatar.png'

const DEFALUT_IMG = [{
  placeholder: 'homeBanner',
  name: '首页banner',
  img: homeBanner,
}, {
  placeholder: 'goodsList',
  name: '商品列表',
  img: goodsList,
}, {
  placeholder: 'cateIcon',
  name: '分类icon',
  img: goodsList,
}, {
  placeholder: 'cateBanner',
  name: '分类banner',
  img: homeBanner,
}, {
  placeholder: 'detailsBanner',
  name: '商品详情banner',
  img: detailsBanner,
}, {
  placeholder: 'goodsRecommen',
  name: '为你推荐',
  img: goodsRecommen,
}, {
  placeholder: 'userAvatar',
  name: '用户头像',
  img: userAvatar,
}]

export default class imagerLoader extends Component {

  static defaultProps = {
    styles: {
      width: '320px',
      height: '240px',
      borderRadius: ''
    },
    placeholder: '',
  }

  state = {
    imgUrl: '',
    imgLoadList: []
  }

  async filterImgLoader(params) {
    const _result = await DEFALUT_IMG.filter(item => item.placeholder === params.placeholder)
    this.setState({ imgUrl: _result[0].img })
    this.imgLoader = new ImgLoader(this)
    this.imgLoader.load(formatUrl(params.src), (err, data) => {
      if (!err) this.setState({ imgUrl: formatUrl(data.src) })
    })
  }

  componentWillMount() {
    this.filterImgLoader(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.src !== nextProps.src) {
      this.filterImgLoader(nextProps)
    }
  }

  render() {
    const { imgUrl, imgLoadList } = this.state
    return (
      <Block>
        {imgUrl &&
          <Image
            lazy-load
            className={this.props.placeholder}
            src={imgUrl}
          />
        }
        <Block>
          {imgLoadList.map((item, index) => (
            <Image
              key={index}
              src={item}
              className={this.props.placeholder}
              data-src={item}
              binderror={this.binderror}
              onLoad={this.imgLoader._imgOnLoad.bind(this.imgLoader)}
              onError={this.imgLoader._imgOnLoadError.bind(this.imgLoader)}
              style='width: 0; height: 0; opacity: 0'
            />
          )
          )}
        </Block>
      </Block>
    )
  }
}