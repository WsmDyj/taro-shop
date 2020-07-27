import Taro, { Component } from '@tarojs/taro'

export function backToTop(duration) {
  Taro.createSelectorQuery().select('#app').boundingClientRect(function (rect) {
    Taro.pageScrollTo({
      scrollTop: -1,
      duration: duration
    })
  }).exec()
}

export function throttle(fn, interval) {
  var enterTime = 0
  var gapTime = interval || 300
  return function() {
    var context = this
    var backTime = new Date()
    if (backTime - enterTime > gapTime) {
      fn.call(context, arguments)
      enterTime = backTime
    }
  }
}