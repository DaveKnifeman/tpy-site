(window.webpackJsonp=window.webpackJsonp||[]).push([[17,6,7,38,82,98,99,100],{"R+Of":function(e,t,n){"use strict";n.r(t);var r=n("1OyB"),o=n("vuIU"),i=n("Ji7U"),a=n("md7G"),s=n("foSv"),l=n("MX0m"),c=n.n(l),u=n("q1tI"),f=n.n(u),d=n("jxcm"),p=n.n(d),h=f.a.createElement;function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(s.a)(e);if(t){var o=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(a.a)(this,n)}}var b=function(e){Object(i.a)(n,e);var t=m(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){p()()}},{key:"render",value:function(){var e,t=this.props.children.length;return e=this.props.size?this.props.size:t<38?"large":"small",h("div",{"data-sal-duration":this.props["data-sal-duration"],"data-sal":this.props["data-sal"],"data-sal-delay":this.props["data-sal-delay"],"data-sal-easing":this.props["data-sal-easing"],style:Object.assign({color:this.props.color,textAlign:this.props.align},this.props.style),className:"jsx-3581795202 "+("Title "+e||!1)},this.props.children,h(c.a,{id:"3581795202"},[".Title.jsx-3581795202{color:#144372;margin:0 0;overflow:ellipsis;overflow-x:hidden;overflow-y:hidden;word-break:break-word;font-size:36px;line-height:40px;font-family:Montserrat,sans-serif;font-style:normal;font-weight:600;-webkit-letter-spacing:-0.005em;-moz-letter-spacing:-0.005em;-ms-letter-spacing:-0.005em;letter-spacing:-0.005em;}",".Title.jsx-3581795202>a,.Title.jsx-3581795202>a:visited{color:#0F2247;border-bottom:none;-webkit-text-decoration:none;text-decoration:none;}",".large.jsx-3581795202{font-size:36px;line-height:40px;}",".medium.jsx-3581795202{font-size:27px;line-height:32px;}",".small.jsx-3581795202{font-weight:600;font-size:22px;line-height:24px;color:#144372;}",".xsmall.jsx-3581795202{font-size:13px;line-height:2.5rem;}","@media(min-width:480px){.Title.jsx-3581795202{font-size:56px;line-height:72px;font-weight:600;}.large.jsx-3581795202{font-size:48px;line-height:56px;}.small.jsx-3581795202{font-size:22px;line-height:24px;}.xsmall.jsx-3581795202{font-size:17px;line-height:20px;}}"]))}}]),n}(u.Component);t.default=b},jxcm:function(e,t,n){e.exports=(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e.d(t,{default:()=>O});var i="Sal was not initialised! Probably it is used in SSR.",a="Your browser does not support IntersectionObserver!\nGet a polyfill from here:\nhttps://github.com/w3c/IntersectionObserver/tree/master/polyfill",s={root:null,rootMargin:"0% 50%",threshold:.5,animateClassName:"sal-animate",disabledClassName:"sal-disabled",enterEventName:"sal:in",exitEventName:"sal:out",selector:"[data-sal]",once:!0,disabled:!1},l=[],c=null,u=function(e){e&&e!==s&&(s=r(r({},s),e))},f=function(e){e.classList.remove(s.animateClassName)},d=function(e,t){var n=new CustomEvent(e,{bubbles:!0,detail:t});t.target.dispatchEvent(n)},p=function(){document.body.classList.add(s.disabledClassName)},h=function(){c.disconnect(),c=null},m=function(){return s.disabled||"function"==typeof s.disabled&&s.disabled()},b=function(e,t){e.forEach((function(e){var n=e.target,r=void 0!==n.dataset.salRepeat,o=void 0!==n.dataset.salOnce,i=r||!(o||s.once);e.intersectionRatio>=s.threshold?(function(e){e.target.classList.add(s.animateClassName),d(s.enterEventName,e)}(e),i||t.unobserve(n)):i&&function(e){f(e.target),d(s.exitEventName,e)}(e)}))},v=function(){var e=[].filter.call(document.querySelectorAll(s.selector),(function(e){return!function(e){return e.classList.contains(s.animateClassName)}(e,s.animateClassName)}));return e.forEach((function(e){return c.observe(e)})),e},g=function(){p(),h()},x=function(){document.body.classList.remove(s.disabledClassName),c=new IntersectionObserver(b,{root:s.root,rootMargin:s.rootMargin,threshold:s.threshold}),l=v()},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};h(),Array.from(document.querySelectorAll(s.selector)).forEach(f),u(e),x()},w=function(){var e=v();l.push(e)};const O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;if(u(e),"undefined"==typeof window)return console.warn(i),{elements:l,disable:g,enable:x,reset:y,update:w};if(!window.IntersectionObserver)throw p(),Error(a);return m()?p():x(),{elements:l,disable:g,enable:x,reset:y,update:w}};return t.default})()}}]);