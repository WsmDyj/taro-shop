(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"298":function(e,t,n){},"321":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var o=n(0),a=n(2),c=n(11),r=n(116),l=n(343),i=n(297),s=n(322),p=n(341),u=n(340),d=n(296),f=(n(298),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}()),m=function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,t,n)}if("value"in o)return o.value;var c=o.get;return void 0!==c?c.call(n):void 0};var h=function(e){function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"意见反馈"},e.state={"formData":{"radio":"1","content":"","phone":"","files":[]}},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,a["a"].Component),f(Index,[{"key":"onChange","value":function onChange(e){this.setState({"files":e})}},{"key":"onFail","value":function onFail(e){console.log(e)}},{"key":"onImageClick","value":function onImageClick(e,t){console.log(e,t)}},{"key":"selectRadio","value":function selectRadio(e){console.log(e)}},{"key":"handleConent","value":function handleConent(e){}},{"key":"submit","value":function submit(){console.log(this.state.formData)}},{"key":"render","value":function render(){var e=this.state.formData;return o.l.createElement(c.a,{"className":"feedback"},o.l.createElement(c.a,{"className":"feedback-section"},o.l.createElement(r.a,{"className":"feedback-section__title"},"问题类型"),o.l.createElement(c.a,{"className":"feedback-section__conent"},o.l.createElement(l.a,{"onChange":this.selectRadio.bind(this)},o.l.createElement(i.a,{"for":"1","key":"1"},o.l.createElement(s.a,{"checked":!0,"value":"功能异常"},"功能异常")),o.l.createElement(i.a,{"for":"2","key":"2"},o.l.createElement(s.a,{"value":"优化建议"},"优化建议"))))),o.l.createElement(c.a,{"className":"feedback-section"},o.l.createElement(r.a,{"className":"feedback-section__title feedback-bottom"},"问题或建议"),o.l.createElement(p.a,{"value":e.content,"onChange":this.handleConent.bind(this),"maxLength":500,"height":200,"placeholder":"请描述您的问题或建议，如果有系统截图，请在添加图片上传截图，我们将尽快优化体验，感谢您的反馈"})),o.l.createElement(c.a,{"className":"feedback-section"},o.l.createElement(r.a,{"className":"feedback-section__title"},"添加图片(选填)"),o.l.createElement(c.a,{"className":"feedback-section__conent"},o.l.createElement(u.a,{"length":5,"count":9,"multiple":!0,"files":e.files,"onChange":this.onChange.bind(this)}))),o.l.createElement(c.a,{"className":"feedback-section"},o.l.createElement(r.a,{"className":"feedback-section__title feedback-bottom"},"联系方式(选填)"),o.l.createElement(c.a,{"className":"feedback-section__conent"},o.l.createElement(d.a,{"border":!1,"type":"phone","placeholder":"手机号码","value":e.phone}))),o.l.createElement(c.a,{"hover-class":"hoverClass","onClick":this.submit.bind(this),"className":"submit"},"提交"))}},{"key":"componentDidMount","value":function componentDidMount(){m(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidMount",this)&&m(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){m(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidShow",this)&&m(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){m(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this)&&m(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this).call(this)}}]),Index}()}}]);