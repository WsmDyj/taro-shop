import Taro, { Component } from '@tarojs/taro'
import { View, Text, RadioGroup, Radio, Label } from '@tarojs/components'
import { AtTextarea, AtImagePicker, AtInput } from 'taro-ui'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '意见反馈'
  }
  constructor () {
    super(...arguments)
    this.state = {
      formData: {
        radio: '1',
        content: '',
        phone: '',
        files: []
      },
    }
  }

  onChange (files) {
    this.setState({
      files
    })
  }
  onFail (mes) {
    console.log(mes)
  }

  onImageClick (index, file) {
    console.log(index, file)
  }

  selectRadio(radio) {
    console.log(radio)
  }

  handleConent(event) {
  }

  submit() {
    console.log(this.state.formData)
  }
  
  render () {
    const { formData } = this.state
    return (
      <View className='feedback'>
        <View className='feedback-section'>
          <Text className='feedback-section__title'>问题类型</Text>
          <View className='feedback-section__conent'>
            <RadioGroup onChange={this.selectRadio.bind(this)}>
              <Label for='1' key='1'>
                <Radio checked value='功能异常'>功能异常</Radio>
              </Label>
              <Label for='2' key='2'>
                <Radio value='优化建议'>优化建议</Radio>
              </Label>
            </RadioGroup>
          </View>
        </View>
        <View className='feedback-section'>
          <Text className='feedback-section__title feedback-bottom'>问题或建议</Text>
          <AtTextarea
            value={formData.content}
            onChange={this.handleConent.bind(this)}
            maxLength={500}
            height={200}
            placeholder='请描述您的问题或建议，如果有系统截图，请在添加图片上传截图，我们将尽快优化体验，感谢您的反馈'
          />
        </View>
        <View className='feedback-section'>
          <Text className='feedback-section__title'>添加图片(选填)</Text>
          <View className='feedback-section__conent'>
            <AtImagePicker
              length={5}
              count={9}
              multiple
              files={formData.files}
              onChange={this.onChange.bind(this)}
            />
          </View>
        </View>
        <View className='feedback-section'>
          <Text className='feedback-section__title feedback-bottom'>联系方式(选填)</Text>
          <View className='feedback-section__conent'>
            <AtInput
              border={false}
              type='phone'
              placeholder='手机号码'
              value={formData.phone}
              // onChange={this.handleChange.bind(this)}
            />
          </View>
        </View>
        <View hover-class='hoverClass' onClick={this.submit.bind(this)} className='submit'>提交</View>
      </View>
    )
  }
}