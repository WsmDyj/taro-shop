/**
 ** 图片url格式转换函数
 **/
export default function formatUrl(url) {
  if (!(/(http|https):\/\/([\w.]+\/?)\S*/.test(url))) {
    return 'https:' + url
  } else {
    return url
  }
}
