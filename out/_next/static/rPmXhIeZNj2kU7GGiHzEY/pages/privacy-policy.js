(window.webpackJsonp=window.webpackJsonp||[]).push([[66,10,22,36,37,78,84,85],{"2qu3":function(e,t,r){"use strict";var n=r("lwsE"),o=r("W8MJ");function a(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){l=!0,a=e},f:function(){try{s||null==r.return||r.return()}finally{if(l)throw a}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=s(r("q1tI")),u=r("8L3h"),c=r("jwwS"),f=[],h=[],d=!1;function p(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}function m(e){var t={loading:!1,loaded:{},error:null},r=[];try{Object.keys(e).forEach((function(n){var o=p(e[n]);o.loading?t.loading=!0:(t.loaded[n]=o.loaded,t.error=o.error),r.push(o.promise),o.promise.then((function(e){t.loaded[n]=e})).catch((function(e){t.error=e}))}))}catch(n){t.error=n}return t.promise=Promise.all(r).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function y(e,t){return l.default.createElement((r=e)&&r.__esModule?r.default:r,t);var r}function v(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:y,webpack:null,modules:null},t),n=null;function o(){if(!n){var t=new g(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!d&&"function"===typeof r.webpack){var i=r.webpack();h.push((function(e){var t,r=a(i);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return o()}}catch(s){r.e(s)}finally{r.f()}}))}var s=function(e,t){o();var a=l.default.useContext(c.LoadableContext),i=u.useSubscription(n);return l.default.useImperativeHandle(t,(function(){return{retry:n.retry}})),a&&Array.isArray(r.modules)&&r.modules.forEach((function(e){a(e)})),i.loading||i.error?l.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:n.retry}):i.loaded?r.render(i.loaded,e):null};return s.preload=function(){return o()},s.displayName="LoadableComponent",l.default.forwardRef(s)}var g=function(){function e(t,r){n(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update(),e._clearTimeouts()})).catch((function(t){e._update(),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=Object.assign(Object.assign({},this._state),e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return Object.assign(Object.assign({},this._state),{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading})}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function b(e){return v(p,e)}function w(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return w(e,t)}))}b.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return v(m,e)},b.preloadAll=function(){return new Promise((function(e,t){w(f).then(e,t)}))},b.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return d=!0,t()};w(h,e).then(r,r)}))},window.__NEXT_PRELOADREADY=b.preloadReady,t.default=b},PlsS:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/privacy-policy",function(){return r("x+IW")}])},YFqc:function(e,t,r){e.exports=r("cTJO")},a6RD:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r("q1tI")),a=n(r("2qu3")),i=!1;function s(e,t){if(delete t.webpack,delete t.modules,!i)return e(t);var r=t.loading;return function(){return o.default.createElement(r,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}t.noSSR=s,t.default=function(e,t){var r=a.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};if(e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=Object.assign(Object.assign({},n),e)),n=Object.assign(Object.assign({},n),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(n.render=function(t,r){return e.render(r,t)}),e.modules)){r=a.default.Map;var o={},i=e.modules();Object.keys(i).forEach((function(e){var t=i[e];"function"!==typeof t.then?o[e]=t:o[e]=function(){return t.then((function(e){return e.default||e}))}})),n.loader=o}if(n.loadableGenerated&&delete(n=Object.assign(Object.assign({},n),n.loadableGenerated)).loadableGenerated,"boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,s(r,n);delete n.ssr}return r(n)}},cTJO:function(e,t,r){"use strict";var n=r("lwsE"),o=r("W8MJ"),a=r("7W2i"),i=r("a1gu"),s=r("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return i(this,r)}}var u=r("TqRt"),c=r("284h");t.__esModule=!0,t.default=void 0;var f,h=c(r("q1tI")),d=r("QmWs"),p=r("g/15"),m=u(r("nOHt"));function y(e){return e&&"object"===typeof e?(0,p.formatWithValidation)(e):e}var v=new Map,g=window.IntersectionObserver,b={};function w(){return f||(g?f=new g((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var x=function(e){a(r,e);var t=l(r);function r(e){var o;return n(this,r),(o=t.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var t=null,r=null,n=null;return function(o,a){if(n&&o===t&&a===r)return n;var i=e(o,a);return t=o,r=a,n=i,i}}((function(e,t){return{href:y(e),as:t?y(t):t}})),o.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,n=t.target;if("A"!==r||!(n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=o.formatUrls(o.props.href,o.props.as),i=a.href,s=a.as;if(function(e){var t=(0,d.parse)(e,!1,!0),r=(0,d.parse)((0,p.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(i)){var l=window.location.pathname;i=(0,d.resolve)(l,i),s=s?(0,d.resolve)(l,s):i,e.preventDefault();var u=o.props.scroll;null==u&&(u=s.indexOf("#")<0),m.default[o.props.replace?"replace":"push"](i,s,{shallow:o.props.shallow}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(r,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),r=t.href,n=t.as,o=(0,d.resolve)(e,r);return[o,n?(0,d.resolve)(e,n):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),b[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var r=w();return r?(r.observe(e),v.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}v.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();m.default.prefetch(t[0],t[1],e).catch((function(e){0})),b[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"===typeof t&&(t=h.default.createElement("a",null,t));var a=h.Children.only(t),i={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||n),h.default.cloneElement(a,i)}}]),r}(h.Component);t.default=x},jwwS:function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r("q1tI"));t.LoadableContext=o.createContext(null)},ls82:function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(C){l=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o=t&&t.prototype instanceof y?t:y,a=Object.create(o.prototype),i=new P(n||[]);return a._invoke=function(e,t,r){var n=f;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return T()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=N(i,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var l=c(e,t,r);if("normal"===l.type){if(n=r.done?p:h,l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=p,r.method="throw",r.arg=l.arg)}}}(e,r,i),a}function c(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(C){return{type:"throw",arg:C}}}e.wrap=u;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",m={};function y(){}function v(){}function g(){}var b={};l(b,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(L([])));x&&x!==r&&n.call(x,a)&&(b=x);var j=g.prototype=y.prototype=Object.create(b);function _(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){var r;this._invoke=function(o,a){function i(){return new t((function(r,i){!function r(o,a,i,s){var l=c(e[o],e,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"===typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,s)}),(function(e){r("throw",e,i,s)})):t.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,s)}))}s(l.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}}function N(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,N(e,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=c(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function L(e){if(e){var r=e[a];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:T}}function T(){return{value:t,done:!0}}return v.prototype=g,l(j,"constructor",g),l(g,"constructor",v),v.displayName=l(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,l(e,s,"GeneratorFunction")),e.prototype=Object.create(j),e},e.awrap=function(e){return{__await:e}},_(k.prototype),l(k.prototype,i,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new k(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},_(j),l(j,s,"Generator"),l(j,a,(function(){return this})),l(j,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=L,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},o0o1:function(e,t,r){e.exports=r("ls82")},"x+IW":function(e,t,r){"use strict";r.r(t);var n=r("MX0m"),o=r.n(n),a=r("q1tI"),i=r.n(a),s=r("a6RD"),l=r.n(s),u=r("8Kt/"),c=r.n(u),f=r("YFqc"),h=r.n(f),d=i.a.createElement,p=l()((function(){return Promise.all([r.e(2),r.e(0),r.e(3),r.e(33)]).then(r.bind(null,"+TcS"))}),{loadableGenerated:{webpack:function(){return["+TcS"]},modules:["../components/navigation.jsx"]}}),m=(l()((function(){return Promise.all([r.e(0),r.e(8)]).then(r.bind(null,"UaQg"))}),{loadableGenerated:{webpack:function(){return["UaQg"]},modules:["../components/page-header.js"]}}),l()((function(){return Promise.all([r.e(0),r.e(11)]).then(r.bind(null,"HOhW"))}),{loadableGenerated:{webpack:function(){return["HOhW"]},modules:["../components/intro-text.js"]}}),l()((function(){return Promise.all([r.e(0),r.e(7)]).then(r.bind(null,"R+Of"))}),{loadableGenerated:{webpack:function(){return["R+Of"]},modules:["../components/title.js"]}})),y=(l()((function(){return Promise.all([r.e(0),r.e(1)]).then(r.bind(null,"nBAC"))}),{loadableGenerated:{webpack:function(){return["nBAC"]},modules:["../components/pricing.jsx"]}}),l()((function(){return Promise.all([r.e(0),r.e(12)]).then(r.bind(null,"0Pzk"))}),{loadableGenerated:{webpack:function(){return["0Pzk"]},modules:["../components/newsletter-subscribe.js"]}})),v=l()((function(){return Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"aIN1"))}),{loadableGenerated:{webpack:function(){return["aIN1"]},modules:["../components/footer.js"]}});t.default=function(){return d("div",{className:"jsx-2105762413 root"},d(c.a,null,d("title",{className:"jsx-2105762413"},"Privacy policy - TPY")),d(p,null),d("div",{className:"jsx-2105762413 content-wrapper"},d(m,{size:"large"},"Your Privacy"),d("br",{className:"jsx-2105762413"}),d(m,{size:"small"},"What information do we collect?"),d("p",{className:"jsx-2105762413"},"We collect information from you when you fill out a form on the site by entering your: name, e-mail address or phone number. You may, however, visit our site anonymously."),d("p",{className:"jsx-2105762413"},"If you sign up for the newsletter, your information (name, email address) is shared with MailChimp."),d("p",{className:"jsx-2105762413"},"Google, as a third party vendor, uses cookies so that we can analyse the way visitors use our site."),d("p",{className:"jsx-2105762413"},"If you don't want third party vendors tracking you, install ",d("a",{href:"https://www.eff.org/privacybadger",target:"_blank",className:"jsx-2105762413"},"Privacy Badger")," (Chrome/Firefox/Opera). Or install uBlock Origin for ",d("a",{href:"https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm",target:"_blank",className:"jsx-2105762413"},"Chrome")," or ",d("a",{href:"https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/",target:"_blank",className:"jsx-2105762413"},"Firefox"),". It will block trackers for you, so you don't have to."),d("br",{className:"jsx-2105762413"}),d("br",{className:"jsx-2105762413"}),d(m,{size:"small"},"What do we use your information for?"),d("p",{className:"jsx-2105762413"},"Any of the information we collect from you may be used in one of the following ways:"),d("ul",{className:"jsx-2105762413"},d("li",{className:"jsx-2105762413"},"To personalize your experience: (your information helps us to better respond to your individual needs)"),d("li",{className:"jsx-2105762413"},"To improve our website: (we continually strive to improve our website offerings based on the information and feedback we receive from you)"),d("li",{className:"jsx-2105762413"},"To improve customer service: (your information helps us to more effectively respond to your customer service requests and support needs)")),d("br",{className:"jsx-2105762413"}),d("br",{className:"jsx-2105762413"}),d(m,{size:"small"},"How do we protect your information?"),d("p",{className:"jsx-2105762413"},"Form information is sent via email, to Outlook 365. Microsoft secures these emails, thus your information."),d("br",{className:"jsx-2105762413"}),d("br",{className:"jsx-2105762413"}),d(m,{size:"small"},"Do we use cookies?"),d("p",{className:"jsx-2105762413"},"Yes (Cookies are small files that a site or its service provider transfers to your computers hard drive through your web browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember certain information."),d("p",{className:"jsx-2105762413"},"We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. We may contract with third-party service providers to assist us in better understanding our site visitors. These service providers are not permitted to use the information collected on our behalf except to help us conduct and improve our business."),d("br",{className:"jsx-2105762413"}),d("br",{className:"jsx-2105762413"}),d(m,{size:"small"},"Do we disclose any information to outside parties?"),d("p",{className:"jsx-2105762413"},"We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses."),d("br",{className:"jsx-2105762413"}),d("br",{className:"jsx-2105762413"}),d(m,{size:"small"},"Online Privacy Policy Only"),d("p",{className:"jsx-2105762413"},"This online privacy policy applies only to information collected through our website and not to information collected offline."),d("br",{className:"jsx-2105762413"}),d("br",{className:"jsx-2105762413"}),d(m,{size:"small"},"Your Consent"),"\u200b    ",d("p",{className:"jsx-2105762413"},"By using our site, you consent to our Online Privacy Policy."),d("br",{className:"jsx-2105762413"}),d("br",{className:"jsx-2105762413"}),d(m,{size:"small"},"Changes to our Privacy Policy"),d("p",{className:"jsx-2105762413"},"If we decide to change our privacy policy, we will post those changes on this page."),d("br",{className:"jsx-2105762413"}),d("br",{className:"jsx-2105762413"}),d(m,{size:"small"},"Contacting Us"),d("p",{className:"jsx-2105762413"},"If there are any questions regarding this privacy policy, please ",d(h.a,{href:"/contact"},d("a",{className:"jsx-2105762413"},"contact us")),".")),d("div",{className:"jsx-2105762413"},d(y,null)),d(v,null),d(o.a,{id:"2105762413"},[".content-wrapper{padding:140px 12px;width:800px;max-width:100%;margin:0 auto;}"]))}}},[["PlsS",5,4,0]]]);