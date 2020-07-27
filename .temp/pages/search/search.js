import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { SearchScreen, SearchInput, SearchHistory } from './components/index';
import Goods from "../../components/goods/index";
import Loading from "../../components/loading/index";
import * as actions from "../../actions/search";
import { backToTop } from "../../utils/mixin";
import { connect } from "@tarojs/redux-h5";
import './index.scss';

export default @connect(state => state.search, { ...actions })
class Search extends Taro.Component {

  config = {
    navigationBarTitleText: '搜索商品'
  };

  constructor() {
    super(...arguments);
    this.state = {
      loading: true,
      hasMore: false,
      showResult: false,
      isReachBottom: false,
      filtes: {
        keyword: '', // 搜索关键字
        owner: '1', // 1：自营；0：非自营
        isCoupon: '0', // 1:有优惠券；0：全部
        sortName: '0', // 1:单价;2:佣金比例;3:佣金; 4:sku维度30天引单量;5:评论数;6:好评数
        sortType: '1' // 1:升序；2:降序
      }
    };
  }

  fetchSearchResult(params) {
    const _filtes = Object.assign(this.state.filtes, params);
    this.props.dispatchSearchResult(_filtes).then(res => {
      if (res.totalCount === 0) {
        this.setState({
          hasMore: true
        });
      }
      this.setState({
        loading: false
      });
    });
  }

  /* 关键字搜索 */
  async handerSearch(params) {
    this.setState({
      showResult: true,
      loading: true
    });
    this.fetchSearchResult(params);
  }

  handerCancel() {
    this.props.onCancelSearch();
    this.setState({
      showResult: false,
      hasMore: false,
      loading: true,
      isReachBottom: false
    });
  }

  /* 条件筛选 */
  async switchTab(params) {
    await backToTop(0);
    await this.setState({
      loading: true,
      isReachBottom: false,
      hasMore: false
    });
    this.fetchSearchResult(Object.assign(params, { pageNum: '1' }));
  }

  /* 上拉触底 */
  async onReachBottom() {
    this.setState({
      loading: true,
      isReachBottom: true
    });
    this.fetchSearchResult({ pageNum: this.props.goodsList.nextPage });
  }

  async componentDidMount() {}

  /* 页面卸载 */
  componentWillUnmount() {
    this.handerCancel();
  }

  render() {
    const { loading, hasMore, showResult, isReachBottom } = this.state;
    const { result } = this.props;
    return <View className="search">
        <SearchInput onActionClick={this.handerSearch.bind(this)} onCancleClick={this.handerCancel.bind(this)} onRef={ref => {
        this.searchInput = ref;
      }} />
        {!showResult ? <SearchHistory onClick={tag => {
        this.searchInput.onChange && this.searchInput.onChange(tag);
      }} /> : <View className="search-result">
              <SearchScreen onSwitchTab={this.switchTab.bind(this)} />
              <View className="result-goods">
                {!isReachBottom && <Loading loading={loading} hasMore={hasMore} fontSize={28} content="没有查询到相关商品～" />}
                <View className="result-goods__item">
                  <Goods goodsList={result} />
                </View>
                {isReachBottom && <Loading loading={loading} hasMore={hasMore} fontSize={28} content="我也是有底线的～" />}
              </View>
            </View>}
      </View>;
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
    this._offReachBottom = Taro.onReachBottom({
      callback: this.onReachBottom,
      ctx: this,
      onReachBottomDistance: undefined
    });
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
    this._offReachBottom && this._offReachBottom();
  }

}