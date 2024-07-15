(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[921],{3875:function(e){var t;/*!
 * baffle 0.3.6 - A tiny javascript library for obfuscating and revealing text in DOM elements.
 * Copyright (c) 2016 Cam Wiegert <cam@camwiegert.com> - https://camwiegert.github.io/baffle
 * License: MIT
 */t=function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var r,i=(r=n(2))&&r.__esModule?r:{default:r};e.exports=i.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extend=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},t.mapString=function(e,t){return e.split("").map(t).join("")},t.sample=function(e){return e[Math.floor(Math.random()*e.length)]},t.each=function(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],n)},t.getTruthyIndices=function(e){return e.map(function(e,t){return!!e&&t}).filter(function(e){return!1!==e})},t.getElements=function(e){return"string"==typeof e?[].slice.call(document.querySelectorAll(e)):[NodeList,HTMLCollection].some(function(t){return e instanceof t})?[].slice.call(e):e.nodeType?[e]:e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(1),o=(r=n(3))&&r.__esModule?r:{default:r},a={characters:"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz~!@#$%^&*()-+=[]{}|;:,./<>?",exclude:[" "],speed:50},l=function(){function e(t,n){(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,e),this.options=(0,i.extend)(Object.create(a),n),this.elements=(0,i.getElements)(t).map(o.default),this.running=!1}return e.prototype.once=function(){var e=this;return(0,i.each)(this.elements,function(t){return t.write(e.options.characters,e.options.exclude)}),this.running=!0,this},e.prototype.start=function(){var e=this;return clearInterval(this.interval),(0,i.each)(this.elements,function(e){return e.init()}),this.interval=setInterval(function(){return e.once()},this.options.speed),this.running=!0,this},e.prototype.stop=function(){return clearInterval(this.interval),this.running=!1,this},e.prototype.set=function(e){return(0,i.extend)(this.options,e),this.running&&this.start(),this},e.prototype.text=function(e){var t=this;return(0,i.each)(this.elements,function(n){n.text(e(n.value)),t.running||n.write()}),this},e.prototype.reveal=function(){var e=this,t=arguments.length<=0||void 0===arguments[0]?0:arguments[0],n=arguments.length<=1||void 0===arguments[1]?0:arguments[1],r=t/this.options.speed||1;return setTimeout(function(){clearInterval(e.interval),e.running=!0,e.interval=setInterval(function(){var t=e.elements.filter(function(e){return!e.bitmap.every(function(e){return!e})});(0,i.each)(t,function(t){var n=Math.ceil(t.value.length/r);t.decay(n).write(e.options.characters,e.options.exclude)}),t.length||(e.stop(),(0,i.each)(e.elements,function(e){return e.init()}))},e.options.speed)},n),this},e}();t.default=function(e,t){return new l(e,t)}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=function(e){function t(n){r(this,t);var i=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,e.call(this,n.textContent));return i.element=n,i}return function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.write=function(e,t){return this.element.textContent=this.render(e,t),this},t}(function(){function e(t){r(this,e),this.value=t,this.init()}return e.prototype.init=function(){return this.bitmap=this.value.split("").map(function(){return 1}),this},e.prototype.render=function(){var e=this,t=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],n=arguments.length<=1||void 0===arguments[1]?[]:arguments[1];return t.length?(0,i.mapString)(this.value,function(r,o){return n.indexOf(r)>-1?r:e.bitmap[o]?(0,i.sample)(t):r}):this.value},e.prototype.decay=function(){for(var e=arguments.length<=0||void 0===arguments[0]?1:arguments[0];e--;){var t=(0,i.getTruthyIndices)(this.bitmap);this.bitmap[(0,i.sample)(t)]=0}return this},e.prototype.text=function(){var e=arguments.length<=0||void 0===arguments[0]?this.value:arguments[0];return this.value=e,this.init(),this},e}());t.default=function(e){return new o(e)}}])},e.exports=t()},1932:function(e,t,n){"use strict";var r=n(2265),i=r&&"object"==typeof r&&"default"in r?r:{default:r};!function(e){if(!e||"undefined"==typeof window)return;let t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');let o=r.forwardRef(function(e,t){let{style:n={},className:o="",autoFill:a=!1,play:l=!0,pauseOnHover:u=!1,pauseOnClick:s=!1,direction:c="left",speed:f=50,delay:d=0,loop:m=0,gradient:p=!1,gradientColor:h="white",gradientWidth:v=200,onFinish:y,onCycleComplete:g,onMount:b,children:x}=e,[w,j]=r.useState(0),[O,E]=r.useState(0),[_,N]=r.useState(1),[k,C]=r.useState(!1),P=r.useRef(null),S=t||P,M=r.useRef(null),G=r.useCallback(()=>{if(M.current&&S.current){let e=S.current.getBoundingClientRect(),t=M.current.getBoundingClientRect(),n=e.width,r=t.width;("up"===c||"down"===c)&&(n=e.height,r=t.height),a&&n&&r?N(r<n?Math.ceil(n/r):1):N(1),j(n),E(r)}},[a,S,c]);r.useEffect(()=>{if(k&&(G(),M.current&&S.current)){let e=new ResizeObserver(()=>G());return e.observe(S.current),e.observe(M.current),()=>{e&&e.disconnect()}}},[G,S,k]),r.useEffect(()=>{G()},[G,x]),r.useEffect(()=>{C(!0)},[]),r.useEffect(()=>{"function"==typeof b&&b()},[]);let I=r.useMemo(()=>a?O*_/f:O<w?w/f:O/f,[a,w,O,_,f]),R=r.useMemo(()=>Object.assign(Object.assign({},n),{"--pause-on-hover":!l||u?"paused":"running","--pause-on-click":!l||u&&!s||s?"paused":"running","--width":"up"===c||"down"===c?"100vh":"100%","--transform":"up"===c?"rotate(-90deg)":"down"===c?"rotate(90deg)":"none"}),[n,l,u,s,c]),T=r.useMemo(()=>({"--gradient-color":h,"--gradient-width":"number"==typeof v?"".concat(v,"px"):v}),[h,v]),A=r.useMemo(()=>({"--play":l?"running":"paused","--direction":"left"===c?"normal":"reverse","--duration":"".concat(I,"s"),"--delay":"".concat(d,"s"),"--iteration-count":m?"".concat(m):"infinite","--min-width":a?"auto":"100%"}),[l,c,I,d,m,a]),L=r.useMemo(()=>({"--transform":"up"===c?"rotate(90deg)":"down"===c?"rotate(-90deg)":"none"}),[c]),q=r.useCallback(e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map((e,t)=>i.default.createElement(r.Fragment,{key:t},r.Children.map(x,e=>i.default.createElement("div",{style:L,className:"rfm-child"},e)))),[L,x]);return k?i.default.createElement("div",{ref:S,style:R,className:"rfm-marquee-container "+o},p&&i.default.createElement("div",{style:T,className:"rfm-overlay"}),i.default.createElement("div",{className:"rfm-marquee",style:A,onAnimationIteration:g,onAnimationEnd:y},i.default.createElement("div",{className:"rfm-initial-child-container",ref:M},r.Children.map(x,e=>i.default.createElement("div",{style:L,className:"rfm-child"},e))),q(_-1)),i.default.createElement("div",{className:"rfm-marquee",style:A},q(_))):null});t.Z=o},7087:function(e,t,n){"use strict";n.d(t,{XQ:function(){return i}});var r=n(9372);function i(e,t){return Array.isArray(e)?e.map(e=>null===e?null:t(e)):(0,r.Kn)(e)?Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{}):null!=e?t(e):null}Object.freeze(["base","sm","md","lg","xl","2xl"])},530:function(e,t,n){"use strict";n.d(t,{E:function(){return c}});var r=n(5151),i=n(7437),o=(0,r.G)(function(e,t){let{htmlWidth:n,htmlHeight:r,alt:o,...a}=e;return(0,i.jsx)("img",{width:n,height:r,ref:t,alt:o,...a})});o.displayName="NativeImage";var a=n(4346),l=n(2265),u=(e,t)=>"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t,s=n(9636),c=(0,r.G)(function(e,t){let{fallbackSrc:n,fallback:r,src:c,srcSet:f,align:d,fit:m,loading:p,ignoreFallback:h,crossOrigin:v,fallbackStrategy:y="beforeLoadOrError",referrerPolicy:g,...b}=e,x=void 0!==n||void 0!==r,w=null!=p||h||!x,j=u(function(e){let{loading:t,src:n,srcSet:r,onLoad:i,onError:o,crossOrigin:u,sizes:s,ignoreFallback:c}=e,[f,d]=(0,l.useState)("pending");(0,l.useEffect)(()=>{d(n?"loading":"pending")},[n]);let m=(0,l.useRef)(),p=(0,l.useCallback)(()=>{if(!n)return;h();let e=new Image;e.src=n,u&&(e.crossOrigin=u),r&&(e.srcset=r),s&&(e.sizes=s),t&&(e.loading=t),e.onload=e=>{h(),d("loaded"),null==i||i(e)},e.onerror=e=>{h(),d("failed"),null==o||o(e)},m.current=e},[n,u,r,s,i,o,t]),h=()=>{m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,a.G)(()=>{if(!c)return"loading"===f&&p(),()=>{h()}},[f,p,c]),c?"loaded":f}({...e,crossOrigin:v,ignoreFallback:w}),y),O={ref:t,objectFit:m,objectPosition:d,...w?b:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}(b,["onError","onLoad"])};return j?r||(0,i.jsx)(s.m.img,{as:o,className:"chakra-image__placeholder",src:n,...O}):(0,i.jsx)(s.m.img,{as:o,src:c,srcSet:f,crossOrigin:v,loading:p,referrerPolicy:g,className:"chakra-image",...O})});c.displayName="Image"},191:function(e,t,n){"use strict";n.d(t,{x:function(){return c}});var r=n(5151),i=n(5308),o=n(9506),a=n(9636),l=n(9372),u=n(6389),s=n(7437),c=(0,r.G)(function(e,t){let n=(0,i.mq)("Text",e),{className:r,align:c,decoration:f,casing:d,...m}=(0,o.Lr)(e),p=(0,u.o)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,s.jsx)(a.m.p,{ref:t,className:(0,l.cx)("chakra-text",e.className),...p,...m,__css:n})});c.displayName="Text"},7266:function(e,t,n){"use strict";n.d(t,{U:function(){return f}});var r=n(9636),i=n(7437),o=e=>(0,i.jsx)(r.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});o.displayName="StackItem";var a=n(7087),l=n(2265),u=n(9372),s=n(5151),c=(0,s.G)((e,t)=>{let{isInline:n,direction:s,align:c,justify:f,spacing:d="0.5rem",wrap:m,children:p,divider:h,className:v,shouldWrapChildren:y,...g}=e,b=n?"row":null!=s?s:"column",x=(0,l.useMemo)(()=>(function(e){let{spacing:t,direction:n}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,a.XQ)(n,e=>r[e])}})({spacing:d,direction:b}),[d,b]),w=!!h,j=!y&&!w,O=(0,l.useMemo)(()=>{let e=l.Children.toArray(p).filter(e=>(0,l.isValidElement)(e));return j?e:e.map((t,n)=>{let r=void 0!==t.key?t.key:n,a=n+1===e.length,u=(0,i.jsx)(o,{children:t},r),s=y?u:t;if(!w)return s;let c=(0,l.cloneElement)(h,{__css:x});return(0,i.jsxs)(l.Fragment,{children:[s,a?null:c]},r)})},[h,x,w,j,y,p]),E=(0,u.cx)("chakra-stack",v);return(0,i.jsx)(r.m.div,{ref:t,display:"flex",alignItems:c,justifyContent:f,flexDirection:b,flexWrap:m,gap:w?void 0:d,className:E,...g,children:O})});c.displayName="Stack";var f=(0,s.G)((e,t)=>(0,i.jsx)(c,{align:"center",...e,direction:"row",ref:t}));f.displayName="HStack"},230:function(e,t,n){"use strict";n.d(t,{r:function(){return a}});var r=n(5151),i=n(9636),o=n(7437),a=(0,r.G)(function(e,t){let{templateAreas:n,gap:r,rowGap:a,columnGap:l,column:u,row:s,autoFlow:c,autoRows:f,templateRows:d,autoColumns:m,templateColumns:p,...h}=e;return(0,o.jsx)(i.m.div,{ref:t,__css:{display:"grid",gridTemplateAreas:n,gridGap:r,gridRowGap:a,gridColumnGap:l,gridAutoColumns:m,gridColumn:u,gridRow:s,gridAutoFlow:c,gridAutoRows:f,gridTemplateRows:d,gridTemplateColumns:p},...h})});a.displayName="Grid"},5500:function(e,t,n){"use strict";n.d(t,{r:function(){return s}});var r=n(5151),i=n(5308),o=n(9506),a=n(9636),l=n(9372),u=n(7437),s=(0,r.G)(function(e,t){let n=(0,i.mq)("Link",e),{className:r,isExternal:s,...c}=(0,o.Lr)(e);return(0,u.jsx)(a.m.a,{target:s?"_blank":void 0,rel:s?"noopener":void 0,ref:t,className:(0,l.cx)("chakra-link",r),...c,__css:n})});s.displayName="Link"},4340:function(e,t,n){"use strict";n.d(t,{xu:function(){return a}});var r=n(9636),i=n(5151),o=n(7437),a=(0,r.m)("div");a.displayName="Box";var l=(0,i.G)(function(e,t){let{size:n,centerContent:r=!0,...i}=e;return(0,o.jsx)(a,{ref:t,boxSize:n,__css:{...r?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...i})});l.displayName="Square",(0,i.G)(function(e,t){let{size:n,...r}=e;return(0,o.jsx)(l,{size:n,ref:t,borderRadius:"9999px",...r})}).displayName="Circle"},4805:function(e,t,n){"use strict";n.d(t,{P:function(){return s}});var r=n(5151),i=n(9636),o=n(6389),a=n(7087),l=n(7437);function u(e){return(0,a.XQ)(e,e=>"auto"===e?"auto":"span ".concat(e,"/span ").concat(e))}var s=(0,r.G)(function(e,t){let{area:n,colSpan:r,colStart:a,colEnd:s,rowEnd:c,rowSpan:f,rowStart:d,...m}=e,p=(0,o.o)({gridArea:n,gridColumn:u(r),gridRow:u(f),gridColumnStart:a,gridColumnEnd:s,gridRowStart:d,gridRowEnd:c});return(0,l.jsx)(i.m.div,{ref:t,__css:p,...m})});s.displayName="GridItem"},6389:function(e,t,n){"use strict";function r(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}n.d(t,{o:function(){return r}})},1810:function(e,t,n){"use strict";n.d(t,{w_:function(){return c}});var r=n(2265),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),a=["attr","size","title"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach(function(t){var r,i;r=t,i=n[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(r))in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function c(e){return t=>r.createElement(f,l({attr:s({},e.attr)},t),function e(t){return t&&t.map((t,n)=>r.createElement(t.tag,s({key:n},t.attr),e(t.child)))}(e.child))}function f(e){var t=t=>{var n,{attr:i,size:o,title:u}=e,c=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,a),f=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,c,{className:n,style:s(s({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),e.children)};return void 0!==o?r.createElement(o.Consumer,null,e=>t(e)):t(i)}}}]);