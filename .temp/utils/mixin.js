import Taro, { createSelectorQuery as _createSelectorQuery, pageScrollTo as _pageScrollTo } from "@tarojs/taro-h5";

export function backToTop(duration) {
  _createSelectorQuery().select('#app').boundingClientRect(function (rect) {
    _pageScrollTo({
      scrollTop: -1,
      duration: duration
    });
  }).exec();
}

export function throttle(fn, interval) {
  var enterTime = 0;
  var gapTime = interval || 300;
  return function () {
    var context = this;
    var backTime = new Date();
    if (backTime - enterTime > gapTime) {
      fn.call(context, arguments);
      enterTime = backTime;
    }
  };
}