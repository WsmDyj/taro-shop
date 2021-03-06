import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import './index.scss'
import {fetchMenu, fetchCategory} from '../../constants/cate'
import Banner from './banner'
import Menu from './menu'
import List from './list'
import Loading from '../../components/loading'
import Search from '../../components/search'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '分类'
  }

  state = {
    current: -1,
    loading: false,
    loaded: false,
    list: []
  }

  handleMenu = (id) => {
    this.setState({ loading: true }, () => {
      this.setState({ current: id, loading: false })
    })
  }

  async componentDidMount() {
    const { data } = await fetchMenu({})
    await fetchCategory({parentId:0,level:0})
    this.setState({
      list: data.categoryList,
      current: data.categoryList[0].id,
      loaded: true
    })
  }

  render () {
    const { loaded, loading, current, list } = this.state
    const currentCategory = list.find(item => item.id === current) || {}
    const banner = currentCategory.focusBannerList || []
    if (!loaded) {
      return <Loading loaded={!this.state.loaded} />
    }

    return (
      <View className='cate'>
        <Search border={true} placeholder='搜索商品热门关键词' />
        <ScrollView
          scrollY
          className='cate__menu'
        >
          <Menu 
           current={current}
           list={list}
           onClick={this.handleMenu}
          />
        </ScrollView>
        {loading ?
          <View /> :
          <ScrollView
            scrollY
            className='cate__list'
            // style={{ height }}
          >
            <View className='cate__list-wrap'>
              <Banner banner={banner} />
              <List list={currentCategory.categoryGroupList} />
            </View>
          </ScrollView>
        }
      </View>
    )
  }
}
