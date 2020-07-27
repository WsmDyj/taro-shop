import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Input } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import './index.scss';

export default class Index extends Taro.Component {

  constructor() {
    super(...arguments);
    this.state = {
      value: '',
      isCancel: false
    };
  }

  bindValueInput(e) {
    if (!e.detail.value) {
      this.setState({
        isCancel: false
      });
    }
    this.setState({
      value: e.detail.value
    });
  }

  async handleClick(params) {
    if (!this.state.value) {
      return;
    }
    this.setState({
      isCancel: true
    });
    Object.assign(params, { keyword: this.state.value });
    this.props.onActionClick(params);
  }

  handleCancel() {
    this.setState({
      isCancel: false,
      value: ''
    });
    this.props.onCancleClick({ isCancel: this.state.isCancel });
  }

  onChange(tag) {
    this.setState({
      value: tag
    });
  }

  componentDidMount() {
    this.props.onRef && this.props.onRef(this);
  }

  render() {
    return <View className="search-container">
        <View className="search-input__icon">
          <AtIcon value="search" size="16" color="#666" />
        </View>
        <Input className="search-input" type="text" placeholder="搜索" focus onInput={this.bindValueInput} value={this.state.value} />
        {!this.state.isCancel ? <View className="search-buttons">
            <View className="search-button" onClick={this.handleClick.bind(this, { owner: '1' })}>搜自营</View>
            <View className="search-button" onClick={this.handleClick.bind(this, { owner: '0' })}>搜京东全站</View>
          </View> : <View className=" search-button search-button__cancel" onClick={this.handleCancel.bind(this)}>取消</View>}
      </View>;
  }
}