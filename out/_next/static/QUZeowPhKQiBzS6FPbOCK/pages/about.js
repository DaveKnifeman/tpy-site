(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"2qu3":function(e,t,n){"use strict";var a=n("lwsE"),r=n("W8MJ");function o(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw o}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=i(n("q1tI")),u=n("8L3h"),c=n("jwwS"),d=[],f=[],m=!1;function p(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function b(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(a){var r=p(e[a]);r.loading?t.loading=!0:(t.loaded[a]=r.loaded,t.error=r.error),n.push(r.promise),r.promise.then((function(e){t.loaded[a]=e})).catch((function(e){t.error=e}))}))}catch(a){t.error=a}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function h(e,t){return s.default.createElement((n=e)&&n.__esModule?n.default:n,t);var n}function g(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:h,webpack:null,modules:null},t),a=null;function r(){if(!a){var t=new y(e,n);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()}if(!m&&"function"===typeof n.webpack){var l=n.webpack();f.push((function(e){var t,n=o(l);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(-1!==e.indexOf(a))return r()}}catch(i){n.e(i)}finally{n.f()}}))}var i=function(e,t){r();var o=s.default.useContext(c.LoadableContext),l=u.useSubscription(a);return s.default.useImperativeHandle(t,(function(){return{retry:a.retry}})),o&&Array.isArray(n.modules)&&n.modules.forEach((function(e){o(e)})),l.loading||l.error?s.default.createElement(n.loading,{isLoading:l.loading,pastDelay:l.pastDelay,timedOut:l.timedOut,error:l.error,retry:a.retry}):l.loaded?n.render(l.loaded,e):null};return i.preload=function(){return r()},i.displayName="LoadableComponent",s.default.forwardRef(i)}var y=function(){function e(t,n){a(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return r(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update(),e._clearTimeouts()})).catch((function(t){e._update(),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=Object.assign(Object.assign({},this._state),e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return Object.assign(Object.assign({},this._state),{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading})}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function w(e){return g(p,e)}function j(e,t){for(var n=[];e.length;){var a=e.pop();n.push(a(t))}return Promise.all(n).then((function(){if(e.length)return j(e,t)}))}w.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return g(b,e)},w.preloadAll=function(){return new Promise((function(e,t){j(d).then(e,t)}))},w.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return m=!0,t()};j(f,e).then(n,n)}))},window.__NEXT_PRELOADREADY=w.preloadReady,t.default=w},Juyh:function(e,t,n){"use strict";n.r(t);var a=n("MX0m"),r=n.n(a),o=n("q1tI"),l=n.n(o),i=n("a6RD"),s=n.n(i),u=n("8Kt/"),c=n.n(u),d=l.a.createElement,f=s()((function(){return Promise.all([n.e(2),n.e(0),n.e(3),n.e(9)]).then(n.bind(null,"+TcS"))}),{loadableGenerated:{webpack:function(){return["+TcS"]},modules:["../components/navigation.jsx"]}}),m=(s()((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"BzFy"))}),{loadableGenerated:{webpack:function(){return["BzFy"]},modules:["../components/image-banner.js"]}}),s()((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"UaQg"))}),{loadableGenerated:{webpack:function(){return["UaQg"]},modules:["../components/page-header.js"]}}),s()((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"HOhW"))}),{loadableGenerated:{webpack:function(){return["HOhW"]},modules:["../components/intro-text.js"]}}),s()((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"R+Of"))}),{loadableGenerated:{webpack:function(){return["R+Of"]},modules:["../components/title.js"]}})),p=(s()((function(){return Promise.all([n.e(2),n.e(0),n.e(13)]).then(n.bind(null,"clih"))}),{loadableGenerated:{webpack:function(){return["clih"]},modules:["../components/text-and-image.js"]}}),s()((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"IEaQ"))}),{loadableGenerated:{webpack:function(){return["IEaQ"]},modules:["../components/small-caps-title.js"]}})),b=s()((function(){return n.e(1).then(n.bind(null,"+iCE"))}),{loadableGenerated:{webpack:function(){return["+iCE"]},modules:["../components/book-a-tour-banner.js"]}}),h=(s()((function(){return Promise.all([n.e(2),n.e(0),n.e(15)]).then(n.bind(null,"X9ur"))}),{loadableGenerated:{webpack:function(){return["X9ur"]},modules:["../components/footer-banner.js"]}}),s()((function(){return Promise.all([n.e(0),n.e(3),n.e(10)]).then(n.bind(null,"aIN1"))}),{loadableGenerated:{webpack:function(){return["aIN1"]},modules:["../components/footer.js"]}})),g=(s()((function(){return Promise.all([n.e(0),n.e(27)]).then(n.bind(null,"REZx"))}),{loadableGenerated:{webpack:function(){return["REZx"]},modules:["../components/timeline.js"]}}),s()((function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"0Pzk"))}),{loadableGenerated:{webpack:function(){return["0Pzk"]},modules:["../components/newsletter-subscribe.js"]}}));s()((function(){return Promise.all([n.e(0),n.e(22)]).then(n.bind(null,"f6jw"))}),{loadableGenerated:{webpack:function(){return["f6jw"]},modules:["../components/contact-form.js"]}});t.default=function(){return d("div",{className:"jsx-1508197543 About"},d(c.a,null,d("title",{className:"jsx-1508197543"},"About | Technology Park Ypenburg")),d(f,null),d("div",{style:{height:"132px"},className:"jsx-1508197543"}),d("div",{className:"jsx-1508197543 contact-wrapper"},d("div",{className:"jsx-1508197543"},d(p,null,"About us"),d("br",{className:"jsx-1508197543"}),d(m,{size:"small"},"TPY team"),d("br",{className:"jsx-1508197543"}),d("br",{className:"jsx-1508197543"}),d("div",{className:"jsx-1508197543 flex justify-between flex-wrap"},d("div",{className:"jsx-1508197543 about-us-block"},d("img",{src:"/static/pages/contact/stephen-hands.jpg",alt:"Photo","data-sal-duration":"400","data-sal":"fade-in","data-sal-delay":"300",className:"jsx-1508197543"}),d("h1",{className:"jsx-1508197543"},"Stephen",d("br",{className:"jsx-1508197543"}),"Managing Director"),d("p",{className:"jsx-1508197543"},d("a",{href:"https://www.linkedin.com/in/stephen-hands-0b669634/",target:"_blank",rel:"external",className:"jsx-1508197543"},d("img",{src:"https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",alt:"LinkedIn logo",width:"40","data-sal-duration":"400","data-sal":"fade-in","data-sal-delay":"300",className:"jsx-1508197543 linkedin-icon"})))),d("div",{className:"jsx-1508197543 about-us-block"},d("img",{src:"/static/pages/contact/sophie-kochen.jpg",alt:"Photo","data-sal-duration":"400","data-sal":"fade-in","data-sal-delay":"300",className:"jsx-1508197543"}),d("h1",{className:"jsx-1508197543"},"Sophie",d("br",{className:"jsx-1508197543"}),"Ecosystem Manager"),d("p",{className:"jsx-1508197543"},d("a",{href:"https://www.linkedin.com/in/sophie-kochen-1a594468/",target:"_blank",rel:"external",className:"jsx-1508197543"},d("img",{src:"https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",alt:"LinkedIn logo",width:"40","data-sal-duration":"400","data-sal":"fade-in","data-sal-delay":"300",className:"jsx-1508197543 linkedin-icon"})))),d("div",{className:"jsx-1508197543 about-us-block"},d("img",{src:"/static/pages/contact/delilah-dols.jpg",alt:"Photo","data-sal-duration":"400","data-sal":"fade-in","data-sal-delay":"300",className:"jsx-1508197543"}),d("h1",{className:"jsx-1508197543"},"Delilah",d("br",{className:"jsx-1508197543"}),"Community Manager"),d("p",{className:"jsx-1508197543"},d("a",{href:"https://www.linkedin.com/in/delilahdols/",target:"_blank",rel:"external",className:"jsx-1508197543"},d("img",{src:"https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",alt:"LinkedIn logo",width:"40","data-sal-duration":"400","data-sal":"fade-in","data-sal-delay":"300",className:"jsx-1508197543 linkedin-icon"}))))))),d(b,null),d(g,null),d(h,null),d(r.a,{id:"1508197543"},[".contact-wrapper.jsx-1508197543{width:1245px;max-width:100%;padding:0 18px;margin:0 auto;margin-top:4rem;}",".about-us-block.jsx-1508197543{width:300px;}",".about-us-block.jsx-1508197543 h1.jsx-1508197543{color:rgb(20,67,114);font-family:Montserrat,sans-serif;font-weight:500;font-size:22px;line-height:32px;text-align:center;min-height:96px;-webkit-box-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".about-us-block.jsx-1508197543 .linkedin-icon.jsx-1508197543{width:40px;display:block;margin:0 auto;}"]))}},a6RD:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=a(n("q1tI")),o=a(n("2qu3")),l=!1;function i(e,t){if(delete t.webpack,delete t.modules,!l)return e(t);var n=t.loading;return function(){return r.default.createElement(n,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}t.noSSR=i,t.default=function(e,t){var n=o.default,a={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};if(e instanceof Promise?a.loader=function(){return e}:"function"===typeof e?a.loader=e:"object"===typeof e&&(a=Object.assign(Object.assign({},a),e)),a=Object.assign(Object.assign({},a),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(a.render=function(t,n){return e.render(n,t)}),e.modules)){n=o.default.Map;var r={},l=e.modules();Object.keys(l).forEach((function(e){var t=l[e];"function"!==typeof t.then?r[e]=t:r[e]=function(){return t.then((function(e){return e.default||e}))}})),a.loader=r}if(a.loadableGenerated&&delete(a=Object.assign(Object.assign({},a),a.loadableGenerated)).loadableGenerated,"boolean"===typeof a.ssr){if(!a.ssr)return delete a.ssr,i(n,a);delete a.ssr}return n(a)}},jwwS:function(e,t,n){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var r=a(n("q1tI"));t.LoadableContext=r.createContext(null)},rB5V:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("Juyh")}])}},[["rB5V",5,4,0]]]);