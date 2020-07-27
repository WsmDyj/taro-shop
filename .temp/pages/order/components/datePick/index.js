import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text, Picker } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import './index.scss';

export default class Index extends Taro.Component {

  state = {
    startDate: '开始时间',
    endDate: '结束时间',
    open: false
  };

  onStartDateChange = e => {
    this.setState({
      startDate: e.detail.value
    });
  };

  onEndDateChange = e => {
    this.setState({
      endDate: e.detail.value
    });
  };

  handleClick(value) {
    this.setState({
      open: value
    });
  }

  render() {
    const { startDate, endDate } = this.state;
    return <View className="pick">
        <View className="pick-txt">下单时间: </View>
        <View class="pick-section">
          <Picker mode="date" onChange={this.onStartDateChange}>
            <View class="pick-date">
              <Text className="pick-dateTxt">{startDate}</Text>
              <AtIcon value="chevron-down" size="18" color="#DA1B20"></AtIcon>
            </View>
          </Picker>
        </View>
        <View className="pick-txt">到</View>
        <View class="pick-section">
          <Picker mode="date" onChange={this.onEndDateChange}>
            <View class="pick-date">
              <Text className="pick-dateTxt"> {endDate}</Text>
              <AtIcon value="chevron-down" size="18" color="#DA1B20"></AtIcon>
            </View>
          </Picker>
        </View>
        <View className="pick-search">
          <AtIcon value="search" size="16" color="#666"></AtIcon>
        </View>
      </View>;
  }
}