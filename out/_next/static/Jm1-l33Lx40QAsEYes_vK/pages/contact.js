(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"2qu3":function(e,n,t){"use strict";var r=t("lwsE"),o=t("W8MJ");function a(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return l=e.done,e},e:function(e){u=!0,a=e},f:function(){try{l||null==t.return||t.return()}finally{if(u)throw a}}}}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var u=l(t("q1tI")),s=t("8L3h"),c=t("jwwS"),d=[],f=[],p=!1;function m(e){var n=e(),t={loading:!0,loaded:null,error:null};return t.promise=n.then((function(e){return t.loading=!1,t.loaded=e,e})).catch((function(e){throw t.loading=!1,t.error=e,e})),t}function b(e){var n={loading:!1,loaded:{},error:null},t=[];try{Object.keys(e).forEach((function(r){var o=m(e[r]);o.loading?n.loading=!0:(n.loaded[r]=o.loaded,n.error=o.error),t.push(o.promise),o.promise.then((function(e){n.loaded[r]=e})).catch((function(e){n.error=e}))}))}catch(r){n.error=r}return n.promise=Promise.all(t).then((function(e){return n.loading=!1,e})).catch((function(e){throw n.loading=!1,e})),n}function h(e,n){return u.default.createElement((t=e)&&t.__esModule?t.default:t,n);var t}function y(e,n){var t=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:h,webpack:null,modules:null},n),r=null;function o(){if(!r){var n=new g(e,t);r={getCurrentValue:n.getCurrentValue.bind(n),subscribe:n.subscribe.bind(n),retry:n.retry.bind(n),promise:n.promise.bind(n)}}return r.promise()}if(!p&&"function"===typeof t.webpack){var i=t.webpack();f.push((function(e){var n,t=a(i);try{for(t.s();!(n=t.n()).done;){var r=n.value;if(-1!==e.indexOf(r))return o()}}catch(l){t.e(l)}finally{t.f()}}))}var l=function(e,n){o();var a=u.default.useContext(c.LoadableContext),i=s.useSubscription(r);return u.default.useImperativeHandle(n,(function(){return{retry:r.retry}})),a&&Array.isArray(t.modules)&&t.modules.forEach((function(e){a(e)})),i.loading||i.error?u.default.createElement(t.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:r.retry}):i.loaded?t.render(i.loaded,e):null};return l.preload=function(){return o()},l.displayName="LoadableComponent",u.default.forwardRef(l)}var g=function(){function e(n,t){r(this,e),this._loadFn=n,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var n=this._res,t=this._opts;n.loading&&("number"===typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),t.delay)),"number"===typeof t.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),t.timeout))),this._res.promise.then((function(){e._update(),e._clearTimeouts()})).catch((function(n){e._update(),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=Object.assign(Object.assign({},this._state),e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return Object.assign(Object.assign({},this._state),{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading})}},{key:"subscribe",value:function(e){var n=this;return this._callbacks.add(e),function(){n._callbacks.delete(e)}}}]),e}();function w(e){return y(m,e)}function _(e,n){for(var t=[];e.length;){var r=e.pop();t.push(r(n))}return Promise.all(t).then((function(){if(e.length)return _(e,n)}))}w.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return y(b,e)},w.preloadAll=function(){return new Promise((function(e,n){_(d).then(e,n)}))},w.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(n){var t=function(){return p=!0,n()};_(f,e).then(t,t)}))},window.__NEXT_PRELOADREADY=w.preloadReady,n.default=w},ALdH:function(e,n,t){"use strict";t.r(n);var r=t("MX0m"),o=t.n(r),a=t("q1tI"),i=t.n(a),l=t("a6RD"),u=t.n(l),s=t("8Kt/"),c=t.n(s),d=i.a.createElement,f=u()((function(){return Promise.all([t.e(2),t.e(0),t.e(3),t.e(4),t.e(11)]).then(t.bind(null,"+TcS"))}),{loadableGenerated:{webpack:function(){return["+TcS"]},modules:["../components/navigation.jsx"]}}),p=(u()((function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"BzFy"))}),{loadableGenerated:{webpack:function(){return["BzFy"]},modules:["../components/image-banner.js"]}}),u()((function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"UaQg"))}),{loadableGenerated:{webpack:function(){return["UaQg"]},modules:["../components/page-header.js"]}}),u()((function(){return Promise.all([t.e(0),t.e(13)]).then(t.bind(null,"HOhW"))}),{loadableGenerated:{webpack:function(){return["HOhW"]},modules:["../components/intro-text.js"]}}),u()((function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"R+Of"))}),{loadableGenerated:{webpack:function(){return["R+Of"]},modules:["../components/title.js"]}})),m=(u()((function(){return Promise.all([t.e(2),t.e(0),t.e(16)]).then(t.bind(null,"clih"))}),{loadableGenerated:{webpack:function(){return["clih"]},modules:["../components/text-and-image.js"]}}),u()((function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"IEaQ"))}),{loadableGenerated:{webpack:function(){return["IEaQ"]},modules:["../components/small-caps-title.js"]}})),b=u()((function(){return t.e(1).then(t.bind(null,"+iCE"))}),{loadableGenerated:{webpack:function(){return["+iCE"]},modules:["../components/book-a-tour-banner.js"]}}),h=(u()((function(){return Promise.all([t.e(2),t.e(0),t.e(14)]).then(t.bind(null,"X9ur"))}),{loadableGenerated:{webpack:function(){return["X9ur"]},modules:["../components/footer-banner.js"]}}),u()((function(){return Promise.all([t.e(0),t.e(3),t.e(4),t.e(12)]).then(t.bind(null,"aIN1"))}),{loadableGenerated:{webpack:function(){return["aIN1"]},modules:["../components/footer.js"]}})),y=(u()((function(){return Promise.all([t.e(0),t.e(3),t.e(29)]).then(t.bind(null,"REZx"))}),{loadableGenerated:{webpack:function(){return["REZx"]},modules:["../components/timeline.js"]}}),u()((function(){return Promise.all([t.e(0),t.e(15)]).then(t.bind(null,"0Pzk"))}),{loadableGenerated:{webpack:function(){return["0Pzk"]},modules:["../components/newsletter-subscribe.js"]}})),g=u()((function(){return Promise.all([t.e(0),t.e(24)]).then(t.bind(null,"f6jw"))}),{loadableGenerated:{webpack:function(){return["f6jw"]},modules:["../components/contact-form.js"]}});n.default=function(){return d("div",{className:"jsx-1380389452 Contact"},d(c.a,null,d("title",{className:"jsx-1380389452"},"Contact Us | Technology Park Ypenburg")),d(f,null),d("div",{style:{height:"132px"},className:"jsx-1380389452"}),d("div",{className:"jsx-1380389452 contact-wrapper"},d(m,null,"Contact Details"),d("br",{className:"jsx-1380389452"}),d(p,{size:"small"},"Send us a message"),d("p",{style:{fontWeight:"bold",background:"#feef00",padding:"5px 10px",display:"none"},className:"jsx-1380389452"},"Thank you for your message! We will contact you soon."),d(g,null)),d(b,null),d(y,null),d(h,null),d(o.a,{id:"1380389452"},[".contact-wrapper.jsx-1380389452{width:1245px;max-width:100%;padding:0 18px;margin:0 auto;margin-top:4rem;}",".about-us-block.jsx-1380389452{width:300px;}",".about-us-block.jsx-1380389452 h1.jsx-1380389452{color:rgb(20,67,114);font-family:Montserrat,sans-serif;font-weight:500;font-size:22px;line-height:32px;text-align:center;min-height:96px;-webkit-box-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".about-us-block.jsx-1380389452 .linkedin-icon.jsx-1380389452{width:40px;display:block;margin:0 auto;}"]))}},a6RD:function(e,n,t){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var o=r(t("q1tI")),a=r(t("2qu3")),i=!1;function l(e,n){if(delete n.webpack,delete n.modules,!i)return e(n);var t=n.loading;return function(){return o.default.createElement(t,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}n.noSSR=l,n.default=function(e,n){var t=a.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};if(e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=Object.assign(Object.assign({},r),e)),r=Object.assign(Object.assign({},r),n),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(r.render=function(n,t){return e.render(t,n)}),e.modules)){t=a.default.Map;var o={},i=e.modules();Object.keys(i).forEach((function(e){var n=i[e];"function"!==typeof n.then?o[e]=n:o[e]=function(){return n.then((function(e){return e.default||e}))}})),r.loader=o}if(r.loadableGenerated&&delete(r=Object.assign(Object.assign({},r),r.loadableGenerated)).loadableGenerated,"boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,l(t,r);delete r.ssr}return t(r)}},jwwS:function(e,n,t){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n};Object.defineProperty(n,"__esModule",{value:!0});var o=r(t("q1tI"));n.LoadableContext=o.createContext(null)},lqnA:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return t("ALdH")}])}},[["lqnA",6,5,0]]]);