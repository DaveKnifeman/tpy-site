(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"2qu3":function(e,t,n){"use strict";var a=n("lwsE"),r=n("W8MJ");function o(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){u=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(u)throw o}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=s(n("q1tI")),l=n("8L3h"),c=n("jwwS"),d=[],p=[],f=!1;function m(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function h(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(a){var r=m(e[a]);r.loading?t.loading=!0:(t.loaded[a]=r.loaded,t.error=r.error),n.push(r.promise),r.promise.then((function(e){t.loaded[a]=e})).catch((function(e){t.error=e}))}))}catch(a){t.error=a}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function g(e,t){return u.default.createElement((n=e)&&n.__esModule?n.default:n,t);var n}function b(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:g,webpack:null,modules:null},t),a=null;function r(){if(!a){var t=new y(e,n);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()}if(!f&&"function"===typeof n.webpack){var i=n.webpack();p.push((function(e){var t,n=o(i);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(-1!==e.indexOf(a))return r()}}catch(s){n.e(s)}finally{n.f()}}))}var s=function(e,t){r();var o=u.default.useContext(c.LoadableContext),i=l.useSubscription(a);return u.default.useImperativeHandle(t,(function(){return{retry:a.retry}})),o&&Array.isArray(n.modules)&&n.modules.forEach((function(e){o(e)})),i.loading||i.error?u.default.createElement(n.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:a.retry}):i.loaded?n.render(i.loaded,e):null};return s.preload=function(){return r()},s.displayName="LoadableComponent",u.default.forwardRef(s)}var y=function(){function e(t,n){a(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return r(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update(),e._clearTimeouts()})).catch((function(t){e._update(),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=Object.assign(Object.assign({},this._state),e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return Object.assign(Object.assign({},this._state),{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading})}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function w(e){return b(m,e)}function v(e,t){for(var n=[];e.length;){var a=e.pop();n.push(a(t))}return Promise.all(n).then((function(){if(e.length)return v(e,t)}))}w.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return b(h,e)},w.preloadAll=function(){return new Promise((function(e,t){v(d).then(e,t)}))},w.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return f=!0,t()};v(p,e).then(n,n)}))},window.__NEXT_PRELOADREADY=w.preloadReady,t.default=w},Cq4K:function(e,t,n){"use strict";n.r(t);var a=n("MX0m"),r=n.n(a),o=n("q1tI"),i=n.n(o),s=n("a6RD"),u=n.n(s),l=n("8Kt/"),c=n.n(l),d=i.a.createElement,p=u()((function(){return Promise.all([n.e(2),n.e(0),n.e(3),n.e(4),n.e(11)]).then(n.bind(null,"+TcS"))}),{loadableGenerated:{webpack:function(){return["+TcS"]},modules:["../components/navigation.jsx"]}}),f=(u()((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"BzFy"))}),{loadableGenerated:{webpack:function(){return["BzFy"]},modules:["../components/image-banner.js"]}}),u()((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"UaQg"))}),{loadableGenerated:{webpack:function(){return["UaQg"]},modules:["../components/page-header.js"]}})),m=u()((function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"HOhW"))}),{loadableGenerated:{webpack:function(){return["HOhW"]},modules:["../components/intro-text.js"]}}),h=(u()((function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"R+Of"))}),{loadableGenerated:{webpack:function(){return["R+Of"]},modules:["../components/title.js"]}}),u()((function(){return Promise.all([n.e(2),n.e(0),n.e(5)]).then(n.bind(null,"clih"))}),{loadableGenerated:{webpack:function(){return["clih"]},modules:["../components/text-and-image.js"]}})),g=(u()((function(){return n.e(1).then(n.bind(null,"+iCE"))}),{loadableGenerated:{webpack:function(){return["+iCE"]},modules:["../components/book-a-tour-banner.js"]}}),u()((function(){return Promise.all([n.e(2),n.e(0),n.e(15)]).then(n.bind(null,"X9ur"))}),{loadableGenerated:{webpack:function(){return["X9ur"]},modules:["../components/footer-banner.js"]}})),b=u()((function(){return Promise.all([n.e(0),n.e(3),n.e(4),n.e(13)]).then(n.bind(null,"aIN1"))}),{loadableGenerated:{webpack:function(){return["aIN1"]},modules:["../components/footer.js"]}}),y=u()((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"0Pzk"))}),{loadableGenerated:{webpack:function(){return["0Pzk"]},modules:["../components/newsletter-subscribe.js"]}});u()((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"1z8h"))}),{loadableGenerated:{webpack:function(){return["1z8h"]},modules:["../components/full-width-image.js"]}}),u()((function(){return Promise.all([n.e(0),n.e(3),n.e(5),n.e(31)]).then(n.bind(null,"RGM8"))}),{loadableGenerated:{webpack:function(){return["RGM8"]},modules:["../components/meeting-space-block.js"]}});t.default=function(){return d("div",{className:"jsx-564926471 root"},d(c.a,null,d("title",{key:"title",className:"jsx-564926471"},"Campus | Technology Park Ypenburg"),d("meta",{key:"og:title",property:"og:title",content:"Campus | Technology Park Ypenburg",className:"jsx-564926471"}),d("meta",{key:"og:description",property:"og:description",content:"Build your network, build your business, and build your friendships all within our passionate community.",className:"jsx-564926471"}),d("meta",{key:"description",name:"description",content:"Build your network, build your business, and build your friendships all within our passionate community.",className:"jsx-564926471"})),d(p,null),d(f,{smallCapsTitle:"Campus",smallCapsTitleColor:"white",title:"TPY Campus",imageBk:"/static/pages/community/community.jpg",image:"/static/pages/campus/tpy-campus-header-image.jpg",style:{backgroundPosition:"72% 50%"}}),d(m,null,d("p",{className:"jsx-564926471"},"The goal of our TPY Campus is to offer facilities and events to support all your needs with easy access and close to Den Haag. Whether you\u2019re a start up, scale up, a mature business or an international company. Come visit our vibrant campus and see it for yourself."),d("p",{className:"jsx-564926471"},"TPY is conveniently located between The Hague and Delft, right next to the A4 and close to the Laan van Ypenburg tram- and bus stop. We also have plenty of parking facilities at our park!"),d("p",{className:"jsx-564926471"},"TPY is located near educational institutions such as TU Delft, InHolland, and The Hague University of Applied Sciences. At TPY, students have the ability to cooperate and co-create with fellow students from different schools, whilst networking with  companies at our Production Center. This way, TPY offers a unique experience for students!"),d("p",{className:"jsx-564926471"},"Students have worked on various projects in the past at the TPY Scale-up & Innovation Center. We have welcomed teams such as the DragonFly Team by InHolland Delft, and the Formula- and EcoRunner Team by TU Delft. Our Production Center offers plenty of space and all the tools needed to help students achieve their best and most innovative projects possible. Interested in learning more about the past projects that were hosted at TPY? This ",d("a",{href:"https://www.technologyparkypenburg.nl/happening/student-run-projects-in-tpy",rel:"external",target:"_blank",className:"jsx-564926471"},"article")," has got you covered!")),d("div",{className:"jsx-564926471"},d(h,{category:"",image:"/static/misc/workspace_three_desks_charles__07042021_TPY SPACES_Hani_HPM-07011.jpg",imagePosition:"right",title:"TPY Community Center",text:"<p>Our TPY Community Center provides a great environment for meeting peers as well as facilities from flex desks to offices and meeting rooms and a conference area and conferencing facilities.</p><p>The heart of our Community Center is where we, TPY companies, Friends of TPY, Start Ups and Scale Ups, come together. To co-create, inspire and brainstorm.</p>"})),d("div",{className:"jsx-564926471"},d(h,{category:"",image:"/static/misc/making_space_bird_eye_view__07042021_TPY SPACES_Hani_HPM-07170.jpg",imagePosition:"left",title:"TPY Prototyping Center",text:"<p>Our Prototyping Center is a maker space to try out your ideas. It provides access to further High-Tech manufacturing, testing and inspection tooling. We utilise in-house professional expertise, which can help you with your ideas or brainstorms.</p><p>Our tremendous know-how focusses on Materials and Hybrid Structures design and industrialisation of Metalics, Thermoplastics, Plastics and Composites. We strive to have the highest levels in Standards for critical high-end markets like Aerospace, Defence, Space, Naval, Offshore and Medical.</p><p>In our Prototyping Center, we welcome Businesses and Start Ups to  our cleanrooms, tooling where we also provide access to testing & manufacturing resources, such as an autoclave and a test facility for digital manufacturing applications.</p>"})),d("div",{className:"jsx-564926471"},d(h,{category:"",image:"/static/misc/couch_with_two_men_meeting__07042021_TPY SPACES_Hani_HPM-06992.jpg",imagePosition:"right",title:"TPY Scale-up & Innovation Center",text:"<p>Ready to enhance your business development and scale-up? Our Innovation Center is the ideal next phase location to fulfil the following steps in your business. Set up to foster a competitive and collaborative environment for mature Start Ups and Scale Ups. We pride ourselves with our in-house experts, who are eager to assist you and have a strong knowledge in High-Tech manufacturing. </p>"})),d("div",{className:"jsx-564926471"},d(h,{category:"",image:"/static/pages/campus/event-picture-1.jpg",imagePosition:"left",title:"Meeting & Event Spaces",text:"<p>At TPY, we have several fully equipped meeting spaces in different sizes, that can host from 4 to 12 people. Something bigger in mind? We also offer event spaces which can host up to 200 people to attend.</p>"})),d("div",{className:"jsx-564926471"},d(h,{category:"",image:"/static/pages/campus/event-picture-2.jpg",imagePosition:"right",title:"",text:"<p>Let us know your needs and we would be delighted to help make your event a success, you can contact us via <a href='mailto:info@technologyparkypenburg.com'>info@technologyparkypenburg.com</a></p>"})),d("div",{className:"jsx-564926471"},d(g,{title:"Come and see for yourself what Technology Park Ypenburg has to offer you!",buttonText:"book a tour",buttonLink:"/contact"})),d(y,null),d(b,null),d(r.a,{id:"564926471"},[".pricing-blocks-wrapper.jsx-564926471{text-align:center;}",".pricing-blocks-wrapper.meeting-spaces.jsx-564926471{margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:1160px;}","@media(max-width:1340px){.pricing-blocks-wrapper.jsx-564926471{width:1000px;max-width:100%;margin:0 auto;}}"]))}},a6RD:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=a(n("q1tI")),o=a(n("2qu3")),i=!1;function s(e,t){if(delete t.webpack,delete t.modules,!i)return e(t);var n=t.loading;return function(){return r.default.createElement(n,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}t.noSSR=s,t.default=function(e,t){var n=o.default,a={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};if(e instanceof Promise?a.loader=function(){return e}:"function"===typeof e?a.loader=e:"object"===typeof e&&(a=Object.assign(Object.assign({},a),e)),a=Object.assign(Object.assign({},a),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(a.render=function(t,n){return e.render(n,t)}),e.modules)){n=o.default.Map;var r={},i=e.modules();Object.keys(i).forEach((function(e){var t=i[e];"function"!==typeof t.then?r[e]=t:r[e]=function(){return t.then((function(e){return e.default||e}))}})),a.loader=r}if(a.loadableGenerated&&delete(a=Object.assign(Object.assign({},a),a.loadableGenerated)).loadableGenerated,"boolean"===typeof a.ssr){if(!a.ssr)return delete a.ssr,s(n,a);delete a.ssr}return n(a)}},gp60:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/campus",function(){return n("Cq4K")}])},jwwS:function(e,t,n){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var r=a(n("q1tI"));t.LoadableContext=r.createContext(null)}},[["gp60",7,6,0]]]);