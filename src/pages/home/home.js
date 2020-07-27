import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView, Image } from '@tarojs/components'
import Goods from '@components/goods/index'
import Loading from '@components/loading'
import { Banner, Grid, Guide, Hot, Tab, Menu } from './components/index'
import * as actions from '@actions/home'
import { connect } from '@tarojs/redux'
import Search from '@components/search'
import BackToTop from '@components/backToTop'
import bannerBg from '@assets/images/home-bg.jpg'
import './index.scss'

// Taro.showShareMenu({
//   withShareTicket: true,
//   menus: ['shareAppMessage', 'shareTimeline']
// })

const TAB_LIST = [{
  eliteId: '2',
  title: '今日主推'
}, {
  eliteId: '10',
  title: '爆款9块9'
}, {
  eliteId: '32',
  title: '大咖推荐'
}, {
  eliteId: '22',
  title: '热销爆品'
}]

@connect(state => state.home, { ...actions })

export default class Home extends Component {
  config = {
    navigationBarTitleText: '企微优选',
    navigationBarBackgroundColor: '#DF1B22',
    navigationBarTextStyle: 'white',
    backgroundTextStyle: 'dark',
    enablePullDownRefresh: true,
  }

  constructor() {
    super(...arguments)
    this.state = {
      visibleToTop: false,
      current: 0,
      loading: true,
    }
  }

  /* 下拉刷新 */
  onPullDownRefresh() {
    Taro.startPullDownRefresh(
      setTimeout(Taro.stopPullDownRefresh(), 2000)
    )
  }

  /* 上拉加载-数据处理函数 */
  async loadRecommend() {
    if (!this.props.goodsList.lastPage) {
      if (this.state.current === 0) {
        this.props.dispatchGoodsList({ eliteId: this.props.goodsList.eliteId, pageNum: this.props.goodsList.nextPage })
      } else {
        const result = this.props.category.filter(item => item.cid === this.state.current)[0]
        this.props.dispatchCategoryGoods({ keyword: result.title, eliteId: this.props.category_goodsList.eliteId, pageNum: this.props.category_goodsList.nextPage })
      }
    }
  }

  /* 监听页面滚动 */
  onPageScroll(e) {
    // if (e.scrollTop > 250) {
    //   this.setState({
    //     visibleToTop: true
    //   })
    // } else {
    //   this.setState({
    //     visibleToTop: false
    //   })
    // }
  }

  /* 上拉触底 */
  onReachBottom() {
    this.loadRecommend()
  }

  switchTab(id) {
    this.props.dispatchGoodsList({ eliteId: TAB_LIST[id].eliteId, pageNum: '1' })
  }

  handleMenu(event) {
    this.setState({
      current: event,
      loading: true
    })
    if (event !== 0) {
      const result = this.props.category.filter(item => item.cid === event)[0]
      this.props.dispatchCategoryGoods({ eliteId: event, keyword: result.title, pageNum: '1' }).then(() => {
        this.setState({
          loading: false
        })
      })
    }
  }
  /* 转发分享 */
  onShareAppMessage() {
    return {
      title: '京东海量商品专属优惠，分享还能赚佣金',
      path: '/pages/home/home',
      imageUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/95369/4/10833/306005/5e23d7f6E7e7d5ef3/f679e41d435eca45.jpg'
    }
  }
  onShareTimeline() {
    return {
      title: '企微优选',
      imageUrl: 'https://img10.360buyimg.com/imagetools/jfs/t1/95369/4/10833/306005/5e23d7f6E7e7d5ef3/f679e41d435eca45.jpg'
    }
  }

  componentDidMount() {
   
    this.props.dispatchCategory({ parentId: '0', level: '0' })
    this.props.dispatchHome()
    this.props.dispatchHot({ eliteId: '1', pageNum: '1' })
    this.props.dispatchGoodsList({ eliteId: TAB_LIST[0].eliteId, pageNum: '1' })
  }

  render() {
    const { visibleToTop, current, loading } = this.state
    const { homeInfo, hot, goodsList, category, category_goodsList, category_recommend } = this.props
    
    return (
      <View className='home'>
        
        <Search transferLink />
        <Menu tabList={category} onClick={this.handleMenu.bind(this)} />
        <BackToTop show={visibleToTop} />

        <View className='home-wrpper' style={{ display: current === 0 ? 'block' : 'none' }}>
          <Image className='home-wrpper__bg' src={bannerBg} mode='widthFix' />
          <View className='home-header'>
            <Banner list={homeInfo.focus} />
            <Grid list={homeInfo.kingKongAreaV4} />
          </View>
          <View className='home-content'>
            <Guide />
            <Hot list={hot} />
            <Tab tabList={TAB_LIST} onClick={this.switchTab.bind(this)} />
            <Loading loading={!goodsList.lastPage} hasMore={goodsList.lastPage} />
          </View>
        </View>
        
        <View className='goods-wrapper' style={{ display: current === 0 ? 'none' : 'block' }}>
          <View className='goods-wrapper__item'>
            <Loading loading={loading} />
            <Goods goodsList={this.props.category_recommend} />
          </View>
          <Loading loading={category_goodsList.lastPage} hasMore={false} />
        </View>
      </View>
    )
  }
}
