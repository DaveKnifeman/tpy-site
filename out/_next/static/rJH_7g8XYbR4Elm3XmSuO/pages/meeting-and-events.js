(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"2qu3":function(e,t,r){"use strict";var n=r("lwsE"),a=r("W8MJ");function o(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){u=!0,o=e},f:function(){try{l||null==r.return||r.return()}finally{if(u)throw o}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=l(r("q1tI")),s=r("8L3h"),c=r("jwwS"),p=[],d=[],h=!1;function f(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}function m(e){var t={loading:!1,loaded:{},error:null},r=[];try{Object.keys(e).forEach((function(n){var a=f(e[n]);a.loading?t.loading=!0:(t.loaded[n]=a.loaded,t.error=a.error),r.push(a.promise),a.promise.then((function(e){t.loaded[n]=e})).catch((function(e){t.error=e}))}))}catch(n){t.error=n}return t.promise=Promise.all(r).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function b(e,t){return u.default.createElement((r=e)&&r.__esModule?r.default:r,t);var r}function g(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:b,webpack:null,modules:null},t),n=null;function a(){if(!n){var t=new y(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!h&&"function"===typeof r.webpack){var i=r.webpack();d.push((function(e){var t,r=o(i);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return a()}}catch(l){r.e(l)}finally{r.f()}}))}var l=function(e,t){a();var o=u.default.useContext(c.LoadableContext),i=s.useSubscription(n);return u.default.useImperativeHandle(t,(function(){return{retry:n.retry}})),o&&Array.isArray(r.modules)&&r.modules.forEach((function(e){o(e)})),i.loading||i.error?u.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:n.retry}):i.loaded?r.render(i.loaded,e):null};return l.preload=function(){return a()},l.displayName="LoadableComponent",u.default.forwardRef(l)}var y=function(){function e(t,r){n(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update(),e._clearTimeouts()})).catch((function(t){e._update(),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=Object.assign(Object.assign({},this._state),e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return Object.assign(Object.assign({},this._state),{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading})}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function v(e){return g(f,e)}function w(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return w(e,t)}))}v.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return g(m,e)},v.preloadAll=function(){return new Promise((function(e,t){w(p).then(e,t)}))},v.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return h=!0,t()};w(d,e).then(r,r)}))},window.__NEXT_PRELOADREADY=v.preloadReady,t.default=v},HIN3:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/meeting-and-events",function(){return r("zmF9")}])},a6RD:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r("q1tI")),o=n(r("2qu3")),i=!1;function l(e,t){if(delete t.webpack,delete t.modules,!i)return e(t);var r=t.loading;return function(){return a.default.createElement(r,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}t.noSSR=l,t.default=function(e,t){var r=o.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};if(e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=Object.assign(Object.assign({},n),e)),n=Object.assign(Object.assign({},n),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(n.render=function(t,r){return e.render(r,t)}),e.modules)){r=o.default.Map;var a={},i=e.modules();Object.keys(i).forEach((function(e){var t=i[e];"function"!==typeof t.then?a[e]=t:a[e]=function(){return t.then((function(e){return e.default||e}))}})),n.loader=a}if(n.loadableGenerated&&delete(n=Object.assign(Object.assign({},n),n.loadableGenerated)).loadableGenerated,"boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,l(r,n);delete n.ssr}return r(n)}},jwwS:function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r("q1tI"));t.LoadableContext=a.createContext(null)},zmF9:function(e,t,r){"use strict";r.r(t);var n=r("8Kt/"),a=r.n(n),o=r("q1tI"),i=r.n(o),l=r("a6RD"),u=r.n(l),s=i.a.createElement,c=u()((function(){return Promise.all([r.e(2),r.e(0),r.e(3),r.e(4),r.e(19)]).then(r.bind(null,"+TcS"))}),{loadableGenerated:{webpack:function(){return["+TcS"]},modules:["../components/navigation.jsx"]}}),p=(u()((function(){return Promise.all([r.e(0),r.e(1)]).then(r.bind(null,"BzFy"))}),{loadableGenerated:{webpack:function(){return["BzFy"]},modules:["../components/image-banner.js"]}}),u()((function(){return Promise.all([r.e(0),r.e(18)]).then(r.bind(null,"UaQg"))}),{loadableGenerated:{webpack:function(){return["UaQg"]},modules:["../components/page-header.js"]}})),d=u()((function(){return Promise.all([r.e(0),r.e(16)]).then(r.bind(null,"HOhW"))}),{loadableGenerated:{webpack:function(){return["HOhW"]},modules:["../components/intro-text.js"]}}),h=(u()((function(){return Promise.all([r.e(0),r.e(17)]).then(r.bind(null,"R+Of"))}),{loadableGenerated:{webpack:function(){return["R+Of"]},modules:["../components/title.js"]}}),u()((function(){return Promise.all([r.e(2),r.e(0),r.e(5)]).then(r.bind(null,"clih"))}),{loadableGenerated:{webpack:function(){return["clih"]},modules:["../components/text-and-image.js"]}})),f=(u()((function(){return Promise.all([r.e(0),r.e(1)]).then(r.bind(null,"+iCE"))}),{loadableGenerated:{webpack:function(){return["+iCE"]},modules:["../components/book-a-tour-banner.js"]}}),u()((function(){return Promise.all([r.e(2),r.e(0),r.e(20)]).then(r.bind(null,"X9ur"))}),{loadableGenerated:{webpack:function(){return["X9ur"]},modules:["../components/footer-banner.js"]}}),u()((function(){return Promise.all([r.e(0),r.e(3),r.e(4),r.e(21)]).then(r.bind(null,"aIN1"))}),{loadableGenerated:{webpack:function(){return["aIN1"]},modules:["../components/footer.js"]}}));u()((function(){return Promise.all([r.e(0),r.e(5)]).then(r.bind(null,"0Pzk"))}),{loadableGenerated:{webpack:function(){return["0Pzk"]},modules:["../components/newsletter-subscribe.js"]}}),u()((function(){return Promise.all([r.e(0),r.e(1)]).then(r.bind(null,"1z8h"))}),{loadableGenerated:{webpack:function(){return["1z8h"]},modules:["../components/full-width-image.js"]}}),u()((function(){return Promise.all([r.e(0),r.e(3),r.e(5),r.e(85)]).then(r.bind(null,"RGM8"))}),{loadableGenerated:{webpack:function(){return["RGM8"]},modules:["../components/meeting-space-block.js"]}});t.default=function(){return s("div",{className:"root"},s(a.a,null,s("title",{key:"title"},"Meeting & Events | Technology Park Ypenburg"),s("meta",{key:"og:title",property:"og:title",content:"Meeting & Events | Technology Park Ypenburg"}),s("meta",{key:"og:description",property:"og:description",content:"Build your network, build your business, and build your friendships all within our passionate community."}),s("meta",{key:"description",name:"description",content:"Build your network, build your business, and build your friendships all within our passionate community."})),s(c,null),s(p,{title:"Meeting & Events",image:"/static/pages/meeting-events/omslag.jpg"}),s(d,null,"Technology Park Ypenburg is the place to meet and collaborate. At TPY\u2019s Community Center and Scale-Up & Innovation Center, we offer a wide range of meeting rooms and event spaces in different sizes suitable to host presentations, workshops, business meetings, brainstorms, co-working sessions, lectures and seminars. The rooms are provided with WIFI, whiteboards and power supplies. Catering can be provided as an add-on, with options ranging from coffee and tea, to a lunch or snacks. You can rent the rooms based on an hourly, half-day (4 hours) or full day rate (8 hours). We are looking forward to hosting your meeting or event!"),s("div",null,s(h,{image:"/static/pages/meeting-events/amelia-earhart.jpg",category:"",title:"Amelia Earhart",text:'<p>Amelia Earhart was the first woman to fly across the Atlantic solo. This is a bright, spacious meeting room which can comfortably accommodate up to 14 people and is located at the TPY Community Center. It is the perfect room for a full day training, a business meeting or a workshop.</p>\r <p><b>Pricing*: </b><br/>\r Full Day: \u20ac 300,- <br/>\r Half Day: \u20ac 160,- <br/>\r Hour: \u20ac 45,- </p>\r <p>\r Reach out to us via <a href="mailto:events@technologyparkypenburg.com">events@technologyparkypenburg.com</a>\r and we will happily answer any questions you might have or help you out with your preferred booking.\r </p>\r <p>\r <i>\r * A member discount is applicable for Technology Park\r Ypenburg & The Hague Tech members. Tailor-made catering\r options such as coffee/tea packages and lunches are\r available upon request.\r </i>\r </p>\r '})),s("div",null,s(h,{image:"/static/pages/meeting-events/herman-staudinger.jpg",category:"",title:"Herman Staudinger",text:'<p>Hermann Staudinger was a German chemist who discovered the existence of polymers and is considered the "father of polymer chemistry". This meeting space is optimal for small groups up to 8 people and is located at the TPY Community Center. This is the perfect space for you to have an intimate meeting with your colleagues or clients.</p>\r <p><b>Pricing*: </b><br/>\r Full Day: \u20ac 275,- <br/>\r Half Day: \u20ac 145,- <br/>\r Hour: \u20ac 40,- </p>\r <p>\r Reach out to us via <a href="mailto:events@technologyparkypenburg.com">events@technologyparkypenburg.com</a>\r and we will happily answer any questions you might have or help you out with your preferred booking.\r </p>\r <p>\r <i>\r * A member discount is applicable for Technology Park\r Ypenburg & The Hague Tech members. Tailor-made catering\r options such as coffee/tea packages and lunches are\r available upon request.\r </i>\r </p>\r '})),s("div",null,s(h,{image:"/static/pages/meeting-events/chiaki-mukai.jpg",category:"",title:"Chiaki Mukai",text:'<p>Chiaki Mukai is a Japanese physician and JAXA astronaut and the first Asian woman to have been to space. This meeting space is optimal for small groups up to 8 people and is located at the TPY Community Center. This is the perfect space for you to have an intimate meeting with your colleagues or clients.</p>\r <p><b>Pricing*: </b><br/>\r Full Day: \u20ac 275,- <br/>\r Half Day: \u20ac 145,- <br/>\r Hour: \u20ac 40,- </p>\r <p>\r Reach out to us via <a href="mailto:events@technologyparkypenburg.com">events@technologyparkypenburg.com</a>\r and we will happily answer any questions you might have or help you out with your preferred booking.\r </p>\r <p>\r <i>\r * A member discount is applicable for Technology Park\r Ypenburg & The Hague Tech members. Tailor-made catering\r options such as coffee/tea packages and lunches are\r available upon request.\r </i>\r </p>\r '})),s("div",null,s(h,{image:"/static/pages/meeting-events/anthony-fokker.jpg",category:"",title:"Anthony Fokker",text:'<p>Anthony Fokker was a Dutch aviation pioneer who is well known for manufacturing and designing aircrafts. This meeting space is located at our Scale-Up & Innovation Center, and optimal for small groups up to 6 people. This is the perfect space for you to have an intimate meeting with your colleagues or clients.</p>\r <p><b>Pricing*: </b><br/>\r Full Day: \u20ac 210,- <br/>\r Half Day: \u20ac 115,- <br/>\r Hour: \u20ac 35,- </p>\r <p>\r Reach out to us via <a href="mailto:events@technologyparkypenburg.com">events@technologyparkypenburg.com</a>\r and we will happily answer any questions you might have or help you out with your preferred booking.\r </p>\r <p>\r <i>\r * A member discount is applicable for Technology Park\r Ypenburg & The Hague Tech members. Tailor-made catering\r options such as coffee/tea packages and lunches are\r available upon request.\r </i>\r </p>\r '})),s("div",null,s(h,{image:"/static/pages/meeting-events/wilhelmina-cornelia-ruitman.jpg",category:"",title:"Wilhelmina Cornelia Ruitman",text:'<p>Wilhelmina Cornelia Ruitman was a Dutch balloonist and first female parachutist from the Netherlands who jumped out of a balloon. This is a large and open event space with plenty of daylight located at the Community Center. It is suitable for larger presentations, lectures, and borrels. This space is equipped with a beamer and speakers and comfortably accommodates up to 80 people.</p>\r <p>\r <b>Available set-ups and capacity</b><br/>\r U- Shape - 20<br/>\r Theater - 50<br/>\r Circle - 30<br/>\r Half Circle - 20<br/>\r Reception - 80<br/>\r Block - 20<br/>\r Classroom - 25\r </p>\r <p><b>Pricing*: </b><br/>\r Full Day: \u20ac 480,- <br/>\r Half Day: \u20ac 240,- <br/>\r Hour: \u20ac 60,- </p>\r <p>\r Reach out to us via <a href="mailto:events@technologyparkypenburg.com">events@technologyparkypenburg.com</a>\r and we will happily answer any questions you might have or help you out with your preferred booking.\r </p>\r <p>\r <i>\r * A member discount is applicable for Technology Park\r Ypenburg & The Hague Tech members. Tailor-made catering\r options such as coffee/tea packages and lunches are\r available upon request.\r </i>\r </p>\r '})),s(f,null))}}},[["HIN3",7,6,0]]]);