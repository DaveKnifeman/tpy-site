(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"2qu3":function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ");function a(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=i(n("q1tI")),s=n("8L3h"),c=n("jwwS"),d=[],f=[],p=!1;function h(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function b(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(r){var o=h(e[r]);o.loading?t.loading=!0:(t.loaded[r]=o.loaded,t.error=o.error),n.push(o.promise),o.promise.then((function(e){t.loaded[r]=e})).catch((function(e){t.error=e}))}))}catch(r){t.error=r}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function m(e,t){return l.default.createElement((n=e)&&n.__esModule?n.default:n,t);var n}function y(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:m,webpack:null,modules:null},t),r=null;function o(){if(!r){var t=new v(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!p&&"function"===typeof n.webpack){var u=n.webpack();f.push((function(e){var t,n=a(u);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return o()}}catch(i){n.e(i)}finally{n.f()}}))}var i=function(e,t){o();var a=l.default.useContext(c.LoadableContext),u=s.useSubscription(r);return l.default.useImperativeHandle(t,(function(){return{retry:r.retry}})),a&&Array.isArray(n.modules)&&n.modules.forEach((function(e){a(e)})),u.loading||u.error?l.default.createElement(n.loading,{isLoading:u.loading,pastDelay:u.pastDelay,timedOut:u.timedOut,error:u.error,retry:r.retry}):u.loaded?n.render(u.loaded,e):null};return i.preload=function(){return o()},i.displayName="LoadableComponent",l.default.forwardRef(i)}var v=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update(),e._clearTimeouts()})).catch((function(t){e._update(),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=Object.assign(Object.assign({},this._state),e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return Object.assign(Object.assign({},this._state),{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading})}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function _(e){return y(h,e)}function g(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return g(e,t)}))}_.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return y(b,e)},_.preloadAll=function(){return new Promise((function(e,t){g(d).then(e,t)}))},_.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return p=!0,t()};g(f,e).then(n,n)}))},window.__NEXT_PRELOADREADY=_.preloadReady,t.default=_},AQMQ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events-item",function(){return n("VymN")}])},VymN:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),o=n.n(r),a=n("1OyB"),u=n("vuIU"),i=n("Ji7U"),l=n("md7G"),s=n("foSv"),c=n("q1tI"),d=n.n(c),f=n("a6RD"),p=n.n(f),h=n("8Bbg"),b=d.a.createElement;function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(s.a)(e);if(t){var o=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=p()((function(){return Promise.all([n.e(2),n.e(0),n.e(3),n.e(31)]).then(n.bind(null,"+TcS"))}),{loadableGenerated:{webpack:function(){return["+TcS"]},modules:["../components/navigation.jsx"]}}),v=p()((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"+iCE"))}),{loadableGenerated:{webpack:function(){return["+iCE"]},modules:["../components/book-a-tour-banner.js"]}}),_=p()((function(){return Promise.all([n.e(2),n.e(0),n.e(26)]).then(n.bind(null,"X9ur"))}),{loadableGenerated:{webpack:function(){return["X9ur"]},modules:["../components/footer-banner.js"]}}),g=p()((function(){return Promise.all([n.e(0),n.e(3),n.e(34)]).then(n.bind(null,"aIN1"))}),{loadableGenerated:{webpack:function(){return["aIN1"]},modules:["../components/footer.js"]}}),w=p()((function(){return Promise.all([n.e(0),n.e(68)]).then(n.bind(null,"+20V"))}),{loadableGenerated:{webpack:function(){return["+20V"]},modules:["../components/events-item.js"]}}),j=function(e){Object(i.a)(n,e);var t=m(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return b(h.Container,null,b("div",{className:"HappeningItemPage"},b(y,null),b("div",{style:{height:"132px"}}),b("div",null,b(w,{slug:this.props.slug})),b("div",null,b(v,null)),b("div",null,b(_,{title:"Come and see for yourself what Technology Park Ypenburg has to offer you!",buttonText:"book a tour",buttonLink:"/contact",target:"_top"})),b(g,null)))}}],[{key:"getInitialProps",value:function(e){var t;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.query,n.abrupt("return",{slug:t.slug});case 2:case"end":return n.stop()}}),null,null,null,Promise)}}]),n}(c.Component);t.default=j},a6RD:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),a=r(n("2qu3")),u=!1;function i(e,t){if(delete t.webpack,delete t.modules,!u)return e(t);var n=t.loading;return function(){return o.default.createElement(n,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}t.noSSR=i,t.default=function(e,t){var n=a.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};if(e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=Object.assign(Object.assign({},r),e)),r=Object.assign(Object.assign({},r),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(r.render=function(t,n){return e.render(n,t)}),e.modules)){n=a.default.Map;var o={},u=e.modules();Object.keys(u).forEach((function(e){var t=u[e];"function"!==typeof t.then?o[e]=t:o[e]=function(){return t.then((function(e){return e.default||e}))}})),r.loader=o}if(r.loadableGenerated&&delete(r=Object.assign(Object.assign({},r),r.loadableGenerated)).loadableGenerated,"boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,i(n,r);delete r.ssr}return n(r)}},jwwS:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.LoadableContext=o.createContext(null)}},[["AQMQ",5,4,0,27]]]);