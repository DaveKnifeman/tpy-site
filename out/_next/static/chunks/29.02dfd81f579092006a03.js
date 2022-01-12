(window.webpackJsonp=window.webpackJsonp||[]).push([[29,33,71],{"/PtW":function(t,e,n){"use strict";e.a=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)}},I032:function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),a=n.n(r),i=n("1OyB"),c=n("vuIU"),u=n("Ji7U"),s=n("md7G"),o=n("foSv"),f=n("MX0m"),l=n.n(f),p=n("q1tI"),b=n.n(p),h=n("a6RD"),j=n.n(h),d=n("sNsB"),y=n("aTUd"),O=n("KMkw"),v=n("wd/R"),x=n.n(v),m=n("kuH4"),w=b.a.createElement;function g(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(o.a)(t);if(e){var a=Object(o.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var k=j()((function(){return Promise.all([n.e(0),n.e(74)]).then(n.bind(null,"t7j1"))}),{loadableGenerated:{webpack:function(){return["t7j1"]},modules:["./news-block.jsx"]}}),S=j()((function(){return Promise.all([n.e(0),n.e(73)]).then(n.bind(null,"3maQ"))}),{loadableGenerated:{webpack:function(){return["3maQ"]},modules:["./event-block.jsx"]}}),I=function(t){Object(u.a)(n,t);var e=g(n);function n(t){var r;return Object(i.a)(this,n),(r=e.call(this,t)).state={items:null,activeView:t.defaultView||"news"},r}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t;return a.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if("news"!==this.state.activeView){e.next=6;break}return e.next=3,a.a.awrap(this.fetchNews());case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,a.a.awrap(this.fetchEvents());case 8:e.t0=e.sent;case 9:t=e.t0,this.setState({items:t});case 11:case"end":return e.stop()}}),null,this,null,Promise)}},{key:"fetchNews",value:function(){var t;return a.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.awrap(Object(m.b)());case 2:return t=e.sent,t=this.formatItems(t),t=this.filterItems(t),t=this.sortItems(t),e.abrupt("return",t);case 7:case"end":return e.stop()}}),null,this,null,Promise)}},{key:"fetchEvents",value:function(){var t;return a.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.awrap(Object(m.a)());case 2:return t=e.sent,t=this.formatItems(t),t=this.getFutureItemsOnly(t),t=this.filterItems(t),t=this.sortItems(t),e.abrupt("return",t);case 8:case"end":return e.stop()}}),null,this,null,Promise)}},{key:"formatItems",value:function(t){return d.a((function(t){return Object.assign({},t.fields,{datetime:t.sys.createdAt})}),t)}},{key:"filterItems",value:function(t){return t=y.a(0,this.props.limit||20,t)}},{key:"sortItems",value:function(t){return t}},{key:"getFutureItemsOnly",value:function(t){return O.a((function(t){return x()(t.publishDate).diff(x()(),"days")>=0}),t)}},{key:"clickFilter",value:function(t){var e;return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(this.setState({activeView:t}),"news"!==t){n.next=5;break}return n.next=4,a.a.awrap(this.fetchNews());case 4:e=n.sent;case 5:if("events"!==t){n.next=9;break}return n.next=8,a.a.awrap(this.fetchEvents());case 8:e=n.sent;case 9:console.log(e[0]),this.setState({items:e}),console.log("state",this.state.items[0]);case 12:case"end":return n.stop()}}),null,this,null,Promise)}},{key:"render",value:function(){var t=this,e=this,n=O.a((function(t){return"/happening"===t.slug||document.location.pathname.indexOf(t.slug)<=-1}),this.state.items||{});return this.state.items?w("div",{className:"jsx-950568162 HappeningOverview flex flex-wrap flex-start"},w("nav",{className:"jsx-950568162 filters show-on-desktop-only"},w("ul",{className:"jsx-950568162"},w("li",{className:"jsx-950568162 "+(("news"===this.state.activeView?"is-active":"")||"")},w("a",{onClick:this.clickFilter.bind(this,"news"),className:"jsx-950568162"},"News from TPY")),w("li",{className:"jsx-950568162 "+(("events"===this.state.activeView?"is-active":"")||"")},w("a",{onClick:this.clickFilter.bind(this,"events"),className:"jsx-950568162"},"Programmes & Events")))),w("div",{className:"jsx-950568162 items"},d.a((function(n){var r=t.state.items[n];return"events"===e.state.activeView?w(S,{key:n,event:r}):w(k,{key:n,event:r})}),Object.keys(n))),w(l.a,{id:"950568162"},[".HappeningOverview.jsx-950568162{width:1000px;max-width:100%;margin:0 auto 48px;}",".items.jsx-950568162{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-flex:1;-ms-flex:1;flex:1;}",".filters.jsx-950568162{width:300px;max-width:100%;margin-top:20px;padding:0 18px;}",".filters.jsx-950568162 ul.jsx-950568162,.filters.jsx-950568162 li.jsx-950568162{list-style:none;margin:0;padding:0;}",".filters.jsx-950568162 li.jsx-950568162{margin:10px 0;}",".filters.jsx-950568162 a.jsx-950568162{cursor:pointer;font-family:Montserrat,sans-serif;font-style:normal;font-weight:500;font-size:16px;line-height:24px;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;-webkit-text-decoration:none;text-decoration:none;color:rgba(20,67,114,0.5);border-bottom:solid transparent 8px;}",".filters.jsx-950568162 li.is-active.jsx-950568162 a.jsx-950568162{color:#144372;cursor:cursor;display:inline-block;padding-bottom:6px;border-bottom:solid #FF8850 8px;}"])):w("div",{style:{minHeight:"800px"}})}}]),n}(p.Component);e.default=I},JVDt:function(t,e,n){"use strict";function r(t,e){switch(t){case 0:return function(){return e.apply(this,arguments)};case 1:return function(t){return e.apply(this,arguments)};case 2:return function(t,n){return e.apply(this,arguments)};case 3:return function(t,n,r){return e.apply(this,arguments)};case 4:return function(t,n,r,a){return e.apply(this,arguments)};case 5:return function(t,n,r,a,i){return e.apply(this,arguments)};case 6:return function(t,n,r,a,i,c){return e.apply(this,arguments)};case 7:return function(t,n,r,a,i,c,u){return e.apply(this,arguments)};case 8:return function(t,n,r,a,i,c,u,s){return e.apply(this,arguments)};case 9:return function(t,n,r,a,i,c,u,s,o){return e.apply(this,arguments)};case 10:return function(t,n,r,a,i,c,u,s,o,f){return e.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}n.d(e,"a",(function(){return r}))},KMkw:function(t,e,n){"use strict";var r=n("L8iz"),a=n("gSdd");var i=n("OEMQ"),c=n("ZMgP"),u=function(){function t(t,e){this.xf=e,this.f=t}return t.prototype["@@transducer/init"]=c.a.init,t.prototype["@@transducer/result"]=c.a.result,t.prototype["@@transducer/step"]=function(t,e){return this.f(e)?this.xf["@@transducer/step"](t,e):t},t}(),s=Object(r.a)((function(t,e){return new u(t,e)})),o=n("ZuG0"),f=Object(r.a)(Object(a.a)(["filter"],s,(function(t,e){return n=e,"[object Object]"===Object.prototype.toString.call(n)?Object(i.a)((function(n,r){return t(e[r])&&(n[r]=e[r]),n}),{},Object(o.a)(e)):function(t,e){for(var n=0,r=e.length,a=[];n<r;)t(e[n])&&(a[a.length]=e[n]),n+=1;return a}(t,e);var n})));e.a=f},L8iz:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("SqIO"),a=n("nr3+");function i(t){return function e(n,i){switch(arguments.length){case 0:return e;case 1:return Object(a.a)(n)?e:Object(r.a)((function(e){return t(n,e)}));default:return Object(a.a)(n)&&Object(a.a)(i)?e:Object(a.a)(n)?Object(r.a)((function(e){return t(e,i)})):Object(a.a)(i)?Object(r.a)((function(e){return t(n,e)})):t(n,i)}}}},OEMQ:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var r=n("SqIO"),a=n("/PtW");var i=Object(r.a)((function(t){return!!Object(a.a)(t)||!!t&&("object"===typeof t&&(!function(t){return"[object String]"===Object.prototype.toString.call(t)}(t)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))})),c=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,e){return this.f(t,e)},t}();var u=n("JVDt"),s=n("L8iz"),o=Object(s.a)((function(t,e){return Object(u.a)(t.length,(function(){return t.apply(e,arguments)}))}));function f(t,e,n){for(var r=n.next();!r.done;){if((e=t["@@transducer/step"](e,r.value))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}r=n.next()}return t["@@transducer/result"](e)}function l(t,e,n,r){return t["@@transducer/result"](n[r](o(t["@@transducer/step"],t),e))}var p="undefined"!==typeof Symbol?Symbol.iterator:"@@iterator";function b(t,e,n){if("function"===typeof t&&(t=function(t){return new c(t)}(t)),i(n))return function(t,e,n){for(var r=0,a=n.length;r<a;){if((e=t["@@transducer/step"](e,n[r]))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}r+=1}return t["@@transducer/result"](e)}(t,e,n);if("function"===typeof n["fantasy-land/reduce"])return l(t,e,n,"fantasy-land/reduce");if(null!=n[p])return f(t,e,n[p]());if("function"===typeof n.next)return f(t,e,n);if("function"===typeof n.reduce)return l(t,e,n,"reduce");throw new TypeError("reduce: list must be array or iterable")}},SqIO:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("nr3+");function a(t){return function e(n){return 0===arguments.length||Object(r.a)(n)?e:t.apply(this,arguments)}}},YR7Z:function(t,e,n){"use strict";var r=n("JVDt"),a=n("SqIO"),i=n("L8iz"),c=n("nr3+");var u=Object(i.a)((function(t,e){return 1===t?Object(a.a)(e):Object(r.a)(t,function t(e,n,a){return function(){for(var i=[],u=0,s=e,o=0;o<n.length||u<arguments.length;){var f;o<n.length&&(!Object(c.a)(n[o])||u>=arguments.length)?f=n[o]:(f=arguments[u],u+=1),i[o]=f,Object(c.a)(f)||(s-=1),o+=1}return s<=0?a.apply(this,i):Object(r.a)(s,t(e,i,a))}}(t,[],e))}));e.a=u},ZMgP:function(t,e,n){"use strict";e.a={init:function(){return this.xf["@@transducer/init"]()},result:function(t){return this.xf["@@transducer/result"](t)}}},ZuG0:function(t,e,n){"use strict";var r=n("SqIO");function a(t,e){return Object.prototype.hasOwnProperty.call(e,t)}var i=Object.prototype.toString,c=function(){return"[object Arguments]"===i.call(arguments)?function(t){return"[object Arguments]"===i.call(t)}:function(t){return a("callee",t)}}(),u=!{toString:null}.propertyIsEnumerable("toString"),s=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],o=function(){return arguments.propertyIsEnumerable("length")}(),f=function(t,e){for(var n=0;n<t.length;){if(t[n]===e)return!0;n+=1}return!1},l="function"!==typeof Object.keys||o?Object(r.a)((function(t){if(Object(t)!==t)return[];var e,n,r=[],i=o&&c(t);for(e in t)!a(e,t)||i&&"length"===e||(r[r.length]=e);if(u)for(n=s.length-1;n>=0;)a(e=s[n],t)&&!f(r,e)&&(r[r.length]=e),n-=1;return r})):Object(r.a)((function(t){return Object(t)!==t?[]:Object.keys(t)}));e.a=l},aTUd:function(t,e,n){"use strict";var r=n("/PtW");function a(t,e){return function(){var n=arguments.length;if(0===n)return e();var a=arguments[n-1];return Object(r.a)(a)||"function"!==typeof a[t]?e.apply(this,arguments):a[t].apply(a,Array.prototype.slice.call(arguments,0,n-1))}}var i=n("SqIO"),c=n("L8iz"),u=n("nr3+");function s(t){return function e(n,r,a){switch(arguments.length){case 0:return e;case 1:return Object(u.a)(n)?e:Object(c.a)((function(e,r){return t(n,e,r)}));case 2:return Object(u.a)(n)&&Object(u.a)(r)?e:Object(u.a)(n)?Object(c.a)((function(e,n){return t(e,r,n)})):Object(u.a)(r)?Object(c.a)((function(e,r){return t(n,e,r)})):Object(i.a)((function(e){return t(n,r,e)}));default:return Object(u.a)(n)&&Object(u.a)(r)&&Object(u.a)(a)?e:Object(u.a)(n)&&Object(u.a)(r)?Object(c.a)((function(e,n){return t(e,n,a)})):Object(u.a)(n)&&Object(u.a)(a)?Object(c.a)((function(e,n){return t(e,r,n)})):Object(u.a)(r)&&Object(u.a)(a)?Object(c.a)((function(e,r){return t(n,e,r)})):Object(u.a)(n)?Object(i.a)((function(e){return t(e,r,a)})):Object(u.a)(r)?Object(i.a)((function(e){return t(n,e,a)})):Object(u.a)(a)?Object(i.a)((function(e){return t(n,r,e)})):t(n,r,a)}}}var o=s(a("slice",(function(t,e,n){return Array.prototype.slice.call(n,t,e)})));e.a=o},gSdd:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("/PtW");function a(t){return null!=t&&"function"===typeof t["@@transducer/step"]}function i(t,e,n){return function(){if(0===arguments.length)return n();var i=Array.prototype.slice.call(arguments,0),c=i.pop();if(!Object(r.a)(c)){for(var u=0;u<t.length;){if("function"===typeof c[t[u]])return c[t[u]].apply(c,i);u+=1}if(a(c)){var s=e.apply(null,i);return s(c)}}return n.apply(this,arguments)}}},"nr3+":function(t,e,n){"use strict";function r(t){return null!=t&&"object"===typeof t&&!0===t["@@functional/placeholder"]}n.d(e,"a",(function(){return r}))},sNsB:function(t,e,n){"use strict";var r=n("L8iz"),a=n("gSdd");var i=n("OEMQ"),c=n("ZMgP"),u=function(){function t(t,e){this.xf=e,this.f=t}return t.prototype["@@transducer/init"]=c.a.init,t.prototype["@@transducer/result"]=c.a.result,t.prototype["@@transducer/step"]=function(t,e){return this.xf["@@transducer/step"](t,this.f(e))},t}(),s=Object(r.a)((function(t,e){return new u(t,e)})),o=n("YR7Z"),f=n("ZuG0"),l=Object(r.a)(Object(a.a)(["fantasy-land/map","map"],s,(function(t,e){switch(Object.prototype.toString.call(e)){case"[object Function]":return Object(o.a)(e.length,(function(){return t.call(this,e.apply(this,arguments))}));case"[object Object]":return Object(i.a)((function(n,r){return n[r]=t(e[r]),n}),{},Object(f.a)(e));default:return function(t,e){for(var n=0,r=e.length,a=Array(r);n<r;)a[n]=t(e[n]),n+=1;return a}(t,e)}})));e.a=l}}]);