(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{166:function(t,e,n){"use strict";var a=n(2),r=n(167),i=n(93),o=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);a(a.P+a.F*o,"String",{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},167:function(t,e,n){var a=n(15),r=n(168),i=n(12);t.exports=function(t,e,n,o){var s=String(i(t)),u=s.length,l=void 0===n?" ":String(n),c=a(e);if(c<=u||""==l)return s;var f=c-u,d=r.call(l,Math.ceil(f/l.length));return d.length>f&&(d=d.slice(0,f)),o?d+s:s+d}},168:function(t,e,n){"use strict";var a=n(23),r=n(12);t.exports=function(t){var e=String(r(this)),n="",i=a(t);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},169:function(t,e,n){"use strict";n(170);var a=n(6),r=n(72),i=n(7),o=/./.toString,s=function(t){n(9)(RegExp.prototype,"toString",t,!0)};n(5)(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?s(function(){var t=a(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?r.call(t):void 0)}):"toString"!=o.name&&s(function(){return o.call(this)})},170:function(t,e,n){n(7)&&"g"!=/./g.flags&&n(8).f(RegExp.prototype,"flags",{configurable:!0,get:n(72)})},171:function(t,e,n){var a=Date.prototype,r=a.toString,i=a.getTime;new Date(NaN)+""!="Invalid Date"&&n(9)(a,"toString",function(){var t=i.call(this);return t==t?r.call(this):"Invalid Date"})},172:function(t,e,n){"use strict";var a=n(3),r=n(14),i=n(13),o=n(75),s=n(73),u=n(5),l=n(96).f,c=n(95).f,f=n(8).f,d=n(94).trim,m=a.Number,p=m,g=m.prototype,h="Number"==i(n(74)(g)),T="trim"in String.prototype,v=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){var n,a,r,i=(e=T?e.trim():d(e,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+e}for(var o,u=e.slice(2),l=0,c=u.length;l<c;l++)if((o=u.charCodeAt(l))<48||o>r)return NaN;return parseInt(u,a)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof m&&(h?u(function(){g.valueOf.call(n)}):"Number"!=i(n))?o(new p(v(e)),n,m):v(e)};for(var S,w=n(7)?l(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;w.length>_;_++)r(p,S=w[_])&&!r(m,S)&&f(m,S,c(p,S));m.prototype=g,g.constructor=m,n(9)(a,"Number",m)}},175:function(t,e,n){"use strict";n.r(e);n(24),n(166),n(169),n(171),n(172);var a={name:"vue-awesome-countdown",props:{startTime:{type:[String,Number,Date],default:null,validator:function(t){return"Invalid Date"!==new Date(t).toString()}},endTime:{type:[String,Number,Date],default:null,validator:function(t){return"Invalid Date"!==new Date(t).toString()}},leftTime:{type:Number,default:0},autoStart:{type:Boolean,default:!0},speed:{type:Number,default:1e3,validator:function(t){return t>=0}},tag:{type:String,default:"span"}},data:function(){return{state:"beforeStart",attrs:{},actualStartTime:null,actualEndTime:null,timeObj:{},countdownTimer:null,runTimes:0,usedTime:0}},watch:{speed:function(t,e){var n=this;if(t<0&&(t=0),t!==e){clearTimeout(n.countdownTimer);var a=(new Date).getTime(),r=Math.floor((a-n.actualStartTime)/t),i=a%t;n.runTimes=r,n.$nextTick(function(){n.countdownTimer=setTimeout(n.doCountdown,i)})}}},created:function(){var t=this,e=t.startTime&&new Date(t.startTime).getTime()||0,n=e&&e-(new Date).getTime()||0;t.autoStart&&(t.state="preheat",setTimeout(function(){t.startCountdown(!0)},n))},methods:{startCountdown:function(t){var e=this;("beforeStart"===e.state||"stoped"===e.state||t)&&(t&&(e.runTimes=0,e.actualStartTime=null,e.actualEndTime=e.endTime||(new Date).getTime()+e.leftTime,e.$emit("onStart",e)),e.state="process",e.doCountdown())},stopCountdown:function(){var t=this;"process"===t.state&&(clearTimeout(t.countdownTimer),t.$emit("on-start",t),t.state="stoped")},switchCountdown:function(){var t=this;return"stoped"===t.state||"beforeStart"===t.state?t.startCountdown():"process"===t.state?t.stopCountdown():void 0},finishCountdown:function(){var t=this;t.state="finised",t.timeObj={},t.usedTime=(new Date).getTime()-t.actualStartTime,t.$emit("onFinish",t)},doCountdown:function(){var t=this;if("process"===t.state){t.actualStartTime||(t.actualStartTime=(new Date).getTime());var e=new Date(t.actualEndTime).getTime()-(new Date).getTime();if(e>0){var n={},a=e/1e3,r={d:a/60/60/24,h:a/60/60%24,m:a/60%60,s:a%60,ms:e%1e3},i={d:parseInt(r.d,10).toString(),h:parseInt(r.h,10).toString().padStart(2,0),m:parseInt(r.m,10).toString().padStart(2,0),s:parseInt(r.s,10).toString().padStart(2,0),ms:r.ms.toString().padStart(3,0)},o={d:parseInt(Math.ceil(a/60/60/24),10),h:parseInt(Math.ceil(a/60/60),10),m:parseInt(Math.ceil(a/60),10),s:parseInt(Math.ceil(a),10)};n.endTime=t.actualEndTime,n.speed=t.speed,t.usedTime=(new Date).getTime()-t.actualStartTime,n.leftTime=e,t.timeObj=Object.assign({},n,i,{org:r,ceil:o}),t.timeObj.org=r,t.timeObj.ceil=o,t.$emit("onProcess",t);var s=t.speed+(t.actualStartTime+t.runTimes++*t.speed-(new Date).getTime());s<0&&(s+=t.speed),t.countdownTimer=setTimeout(t.doCountdown,s)}else t.finishCountdown()}}}},r=n(0),i=Object(r.a)(a,function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,t._g(t._b({tag:"components"},"components",t.attrs,!1),t.$listeners),[t._t("prev",null,null,this._self),t._v(" "),"beforeStart"===t.state?t._t("before",null,null,this._self):t._e(),t._v(" "),"preheat"===t.state?t._t("preheat",null,null,this._self):t._e(),t._v(" "),"process"===t.state||"stoped"===t.state?t._t("process",null,null,this._self):t._e(),t._v(" "),"finised"===t.state?t._t("finish",null,null,this._self):t._e(),t._v(" "),t._t("default",null,null,this._self)],2)},[],!1,null,null,null);e.default=i.exports}}]);