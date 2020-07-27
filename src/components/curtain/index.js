import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtCurtain } from 'taro-ui'
import './index.scss'

export default class Index extends Component {

  static defaultProps = {
    isOpened: true,
    isButton: false,
    width: '90%',
    height: '380px'
  }

  onClose() {
    // this.setState({
    //   isOpened: false
    // })
    this.props.isOpened = false
  }

  saveImg(imgUrl) {
    Taro.getSetting({
      success(res) {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {
              console.log('授权成功')
            }
          })
        }
      }
    })
    Taro.downloadFile({
      url: imgUrl,
      success: (res) => {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调
        if (res.statusCode === 200) {
          Taro.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success(res) {
              Taro.showToast({
                title: '保存图片成功！',
              })
            },
            fail(res) {
              Taro.showToast({
                title: '保存图片失败！',
              })
            }
          })
        }
      }
    })
  }

  shareImg(imgUrl) {
    Taro.previewImage({
      current: imgUrl, // 当前显示图片的http链接
      urls: [imgUrl] // 需要预览的图片http链接列表
    })
  }

  render() {
    const { isButton, imgUrl, isOpened, width, height } = this.props
    return (
      <View>
        <AtCurtain
          isOpened={isOpened}
          closeBtnPosition='top-right'
          onClose={this.props.onClose}
        >
          <Image
            style={{ width: width, height: height }}
            src={imgUrl}
          />
          {
            isButton &&
            <View className='curtain-options'>
              <View className='curtain-button' onClick={this.saveImg.bind(this, imgUrl)}>保存到手机相册</View>
              <View className='curtain-button curtain-share' onClick={this.shareImg.bind(this, imgUrl)}>预览海报长按分享</View>
            </View>
          }
        </AtCurtain>
      </View>
    )
  }
}
