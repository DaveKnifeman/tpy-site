(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"2qu3":function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ");function a(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){l=!0,a=e},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw a}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=s(n("q1tI")),u=n("8L3h"),c=n("jwwS"),d=[],p=[],m=!1;function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function h(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(r){var o=f(e[r]);o.loading?t.loading=!0:(t.loaded[r]=o.loaded,t.error=o.error),n.push(o.promise),o.promise.then((function(e){t.loaded[r]=e})).catch((function(e){t.error=e}))}))}catch(r){t.error=r}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function b(e,t){return l.default.createElement((n=e)&&n.__esModule?n.default:n,t);var n}function y(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:b,webpack:null,modules:null},t),r=null;function o(){if(!r){var t=new g(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!m&&"function"===typeof n.webpack){var i=n.webpack();p.push((function(e){var t,n=a(i);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return o()}}catch(s){n.e(s)}finally{n.f()}}))}var s=function(e,t){o();var a=l.default.useContext(c.LoadableContext),i=u.useSubscription(r);return l.default.useImperativeHandle(t,(function(){return{retry:r.retry}})),a&&Array.isArray(n.modules)&&n.modules.forEach((function(e){a(e)})),i.loading||i.error?l.default.createElement(n.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:r.retry}):i.loaded?n.render(i.loaded,e):null};return s.preload=function(){return o()},s.displayName="LoadableComponent",l.default.forwardRef(s)}var g=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update(),e._clearTimeouts()})).catch((function(t){e._update(),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=Object.assign(Object.assign({},this._state),e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return Object.assign(Object.assign({},this._state),{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading})}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function w(e){return y(f,e)}function v(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return v(e,t)}))}w.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return y(h,e)},w.preloadAll=function(){return new Promise((function(e,t){v(d).then(e,t)}))},w.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return m=!0,t()};v(p,e).then(n,n)}))},window.__NEXT_PRELOADREADY=w.preloadReady,t.default=w},a6RD:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),a=r(n("2qu3")),i=!1;function s(e,t){if(delete t.webpack,delete t.modules,!i)return e(t);var n=t.loading;return function(){return o.default.createElement(n,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}t.noSSR=s,t.default=function(e,t){var n=a.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};if(e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=Object.assign(Object.assign({},r),e)),r=Object.assign(Object.assign({},r),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(r.render=function(t,n){return e.render(n,t)}),e.modules)){n=a.default.Map;var o={},i=e.modules();Object.keys(i).forEach((function(e){var t=i[e];"function"!==typeof t.then?o[e]=t:o[e]=function(){return t.then((function(e){return e.default||e}))}})),r.loader=o}if(r.loadableGenerated&&delete(r=Object.assign(Object.assign({},r),r.loadableGenerated)).loadableGenerated,"boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,s(n,r);delete r.ssr}return n(r)}},bvnb:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/win",function(){return n("pZBs")}])},jwwS:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.LoadableContext=o.createContext(null)},pZBs:function(e,t,n){"use strict";n.r(t);var r=n("MX0m"),o=n.n(r),a=n("q1tI"),i=n.n(a),s=n("a6RD"),l=n.n(s),u=n("8Kt/"),c=n.n(u),d=i.a.createElement,p=l()((function(){return Promise.all([n.e(2),n.e(0),n.e(3),n.e(9)]).then(n.bind(null,"+TcS"))}),{loadableGenerated:{webpack:function(){return["+TcS"]},modules:["../components/navigation.jsx"]}}),m=(l()((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"BzFy"))}),{loadableGenerated:{webpack:function(){return["BzFy"]},modules:["../components/image-banner.js"]}}),l()((function(){return Promise.all([n.e(0),n.e(1),n.e(100)]).then(n.bind(null,"O9V2"))}),{loadableGenerated:{webpack:function(){return["O9V2"]},modules:["../components/video-banner.js"]}})),f=l()((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"HOhW"))}),{loadableGenerated:{webpack:function(){return["HOhW"]},modules:["../components/intro-text.js"]}}),h=l()((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"R+Of"))}),{loadableGenerated:{webpack:function(){return["R+Of"]},modules:["../components/title.js"]}}),b=(l()((function(){return Promise.all([n.e(2),n.e(0),n.e(13)]).then(n.bind(null,"clih"))}),{loadableGenerated:{webpack:function(){return["clih"]},modules:["../components/text-and-image.js"]}}),l()((function(){return n.e(1).then(n.bind(null,"+iCE"))}),{loadableGenerated:{webpack:function(){return["+iCE"]},modules:["../components/book-a-tour-banner.js"]}}),l()((function(){return Promise.all([n.e(2),n.e(0),n.e(15)]).then(n.bind(null,"X9ur"))}),{loadableGenerated:{webpack:function(){return["X9ur"]},modules:["../components/footer-banner.js"]}}),l()((function(){return Promise.all([n.e(0),n.e(3),n.e(10)]).then(n.bind(null,"aIN1"))}),{loadableGenerated:{webpack:function(){return["aIN1"]},modules:["../components/footer.js"]}})),y=l()((function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"0Pzk"))}),{loadableGenerated:{webpack:function(){return["0Pzk"]},modules:["../components/newsletter-subscribe.js"]}}),g=(l()((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"1z8h"))}),{loadableGenerated:{webpack:function(){return["1z8h"]},modules:["../components/full-width-image.js"]}}),l()((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"RGM8"))}),{loadableGenerated:{webpack:function(){return["RGM8"]},modules:["../components/meeting-space-block.js"]}}),"/static/pages/win/og-image.png");t.default=function(){return d("div",{className:"jsx-564926471 root"},d(c.a,null,d("title",{key:"title",className:"jsx-564926471"},"Prototype Center Voucher Campaign | Technology Park Ypenburg"),d("meta",{key:"twitter:title",property:"twitter:title",content:"Prototype Center Voucher Campaign | Technology Park Ypenburg",className:"jsx-564926471"}),d("meta",{key:"og:title",property:"og:title",content:"Prototype Center Voucher Campaign | Technology Park Ypenburg",className:"jsx-564926471"}),d("meta",{key:"og:description",property:"og:description",content:"We invite innovative thinkers and builders to use our space to bring their ideas to life.",className:"jsx-564926471"}),d("meta",{key:"twitter:description",property:"twitter:description",content:"We invite innovative thinkers and builders to use our space to bring their ideas to life.",className:"jsx-564926471"}),d("meta",{key:"description",name:"description",content:"We invite innovative thinkers and builders to use our space to bring their ideas to life.",className:"jsx-564926471"}),d("meta",{key:"og:image",property:"og:image",content:g,className:"jsx-564926471"}),d("meta",{key:"twitter:image",property:"twitter:image",content:g,className:"jsx-564926471"})),d(p,null),d(m,{title:" ",subTitle:" ",video:"https://blockbar.nl/upload/tpy/TPY_prototyping%20center_final_V2.mp4"}),d(f,null,d(h,{align:"center",style:{padding:"0 30px",marginTop:"-50px",marginBottom:"60px"},"data-sal-duration":"400","data-sal":"slide-up","data-sal-delay":"300","data-sal-easing":"ease-in-out"},"Prototype Center Voucher Campaign"),d("p",{className:"jsx-564926471"},"TPY strives to drive innovation in the high-tech manufacturing industry in the Rotterdam-The Hague metropolitan region (MRDH). The Economic Business Climate Management Committee awarded TPY a subsidy to strengthen the regional economy. This enables the flexible use of our production space \u201cThe Prototyping Center\u201d. We want to use this opportunity to invite innovative thinkers and builders to use our space to bring their ideas to life."),d("p",{className:"jsx-564926471"},"Our \u201cPrototyping Center\u201d is equipped with machines to develop lightweight materials. We offer vouchers for individual companies to use equipment in our production facility. TYP allows innovators to manufacture within the Netherlands instead of moving abroad as we stand for sustainable solutions, new employment opportunities, and regional growth."),d("p",{className:"jsx-564926471"},"To win a voucher send a 1 minute pitch to ",d("a",{href:"mailto:info@technologyparkypenburg.nl",className:"jsx-564926471 font-bold"},"info@technologyparkypenburg.nl")," about your idea to build a prototype using the Prototyping Center. The only requirement is developing hardware using metal, plastic, or composite components, structures or assemblies."),d("p",{className:"jsx-564926471"},"This is your chance to take the leap towards building your dream prototype. We have a dream that our prototyping center will help create sustainable solutions for the future thanks to the bright minds of our region. What\u2019s your dream?"),d(h,{align:"center",style:{marginTop:"50px"}},"Entry Requirements"),d("p",{className:"jsx-564926471"},"To enter the competition your prototype should be producing hardware using metal, plastic or composite. You can enter by submitting a 1-minute pitch explaining:"),d("ul",{className:"jsx-564926471"},d("li",{className:"jsx-564926471"},"How much time do you think you'll need to develop your prototype?"),d("li",{className:"jsx-564926471"},"What are you planning to build?"),d("li",{className:"jsx-564926471"},"What makes your prototype unique?"),d("li",{className:"jsx-564926471"},"How do you see the future of your product?")),d("p",{className:"jsx-564926471"},"Deadline: 1 December 2021 at 23.59"),d(h,{align:"center",style:{marginTop:"50px"}},"The Prizes"),d("p",{className:"jsx-564926471"},"3 winners will be selected from the pitch contest. You can win the following prizes: 1 day for free (minimum rent of 1 day), 1 week for free (minimum rent of 1 week), and 1 month for free (minimum rent of 1 month)."),d("div",{align:"center",className:"jsx-564926471"},d(h,{size:"small"},"1st prize \u2013 Month Voucher"),d("p",{className:"jsx-564926471"},d("img",{alt:"1st prize image",src:"/static/pages/win/prize-1.png",className:"jsx-564926471"})),d(h,{size:"small"},"2nd prize \u2013 Week Voucher"),d("p",{className:"jsx-564926471"},d("img",{alt:"2st prize image",src:"/static/pages/win/prize-2.jpg",className:"jsx-564926471"})),d(h,{size:"small"},"3nd prize \u2013 Day Voucher"),d("p",{className:"jsx-564926471"},d("img",{alt:"3st prize image",src:"/static/pages/win/prize-3.jpg",className:"jsx-564926471"}))),d("br",{className:"jsx-564926471"}),d("p",{align:"center",className:"jsx-564926471"},"Send your 1 minute pitch to ",d("a",{href:"mailto:info@technologyparkypenburg.com",className:"jsx-564926471 font-bold"},"info@technologyparkypenburg.com")," explaining what you would like to prototype in our Prototype Center and you might win one of the prizes!")),d(y,null),d(b,null),d(o.a,{id:"564926471"},[".pricing-blocks-wrapper.jsx-564926471{text-align:center;}",".pricing-blocks-wrapper.meeting-spaces.jsx-564926471{margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:1160px;}","@media(max-width:1340px){.pricing-blocks-wrapper.jsx-564926471{width:1000px;max-width:100%;margin:0 auto;}}"]))}}},[["bvnb",5,4,0]]]);