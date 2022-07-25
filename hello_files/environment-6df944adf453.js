(()=>{var P=Object.defineProperty;var e=(E,t)=>P(E,"name",{value:t,configurable:!0});(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["environment"],{83721:(E,t,s)=>{"use strict";var f=s(92003);window.addEventListener("error",i=>{i.error&&(0,f.eK)(i.error)}),window.addEventListener("unhandledrejection",async i=>{if(!!i.promise)try{await i.promise}catch(m){(0,f.eK)(m)}}),window.location.hash==="#b00m"&&setTimeout(()=>{throw new Error("b00m")});var a=s(30523),o=s(45341);(0,o.nn)()},47930:(E,t,s)=>{"use strict";s.d(t,{S:()=>i});function f(m){const l=document.querySelectorAll(m);if(l.length>0)return l[l.length-1]}e(f,"queryLast");function a(){const m=f("meta[name=analytics-location]");return m?m.content:window.location.pathname}e(a,"pagePathname");function o(){const m=f("meta[name=analytics-location-query-strip]");let l="";m||(l=window.location.search);const h=f("meta[name=analytics-location-params]");h&&(l+=(l?"&":"?")+h.content);for(const u of document.querySelectorAll("meta[name=analytics-param-rename]")){const _=u.content.split(":",2);l=l.replace(new RegExp(`(^|[?&])${_[0]}($|=)`,"g"),`$1${_[1]}$2`)}return l}e(o,"pageQuery");function i(){return`${window.location.protocol}//${window.location.host}${a()+o()}`}e(i,"requestUri")},36192:(E,t,s)=>{"use strict";s.d(t,{AU:()=>_,DT:()=>O,F2:()=>h,HN:()=>m,Si:()=>u,T2:()=>p,aN:()=>l,ag:()=>n,po:()=>y,q3:()=>w,uL:()=>g,wz:()=>b,xc:()=>i,xk:()=>T});var f=s(74395),a=s(49815);const o=f.session.adapter,i=e(()=>!(0,a.c)("PJAX_ENABLED"),"isTurboEnabled"),m=e(r=>r?.tagName==="TURBO-FRAME","isTurboFrame"),l=e(()=>{o.progressBar.setValue(0),o.progressBar.show()},"beginProgressBar"),h=e(()=>{o.progressBar.setValue(1),o.progressBar.hide()},"completeProgressBar"),u=e((r,c)=>{const d=new URL(r,window.location.origin),v=new URL(c,window.location.origin);return Boolean(v.hash)&&d.hash!==v.hash&&d.host===v.host&&d.pathname===v.pathname&&d.search===v.search},"isHashNavigation");function _(r,c){const d=r.split("/",3).join("/"),v=c.split("/",3).join("/");return d===v}e(_,"isSameRepo");async function w(){const r=document.head.querySelectorAll("link[rel=stylesheet]"),c=new Set([...document.styleSheets].map(v=>v.href)),d=[];for(const v of r)v.href===""||c.has(v.href)||d.push(S(v));await Promise.all(d)}e(w,"waitForStylesheets");const S=e((r,c=2e3)=>new Promise(d=>{const v=e(()=>{r.removeEventListener("error",v),r.removeEventListener("load",v),d()},"onComplete");r.addEventListener("load",v,{once:!0}),r.addEventListener("error",v,{once:!0}),setTimeout(v,c)}),"waitForLoad"),b=e(r=>{const c=r.querySelectorAll("[data-turbo-replace]"),d=[...document.querySelectorAll("[data-turbo-replace]")];for(const v of c){const A=d.find(L=>L.id===v.id);A&&A.replaceWith(v)}},"replaceElements"),O=e(r=>{for(const c of r.querySelectorAll("link[rel=stylesheet]"))document.head.querySelector(`link[href="${c.getAttribute("href")}"],
           link[data-href="${c.getAttribute("data-href")}"]`)||document.head.append(c)},"addNewStylesheets"),T=e(r=>{for(const c of r.querySelectorAll("script"))document.head.querySelector(`script[src="${c.getAttribute("src")}"]`)||R(c)},"addNewScripts"),R=e(r=>{const{src:c}=r,d=document.createElement("script"),v=r.getAttribute("type");v&&(d.type=v);const A=r.getAttribute("integrity");A&&(d.integrity=A,d.crossOrigin="anonymous"),d.src=c,document.head&&document.head.appendChild(d)},"executeScriptTag"),y=e(r=>{const c=[];for(const d of r.querySelectorAll('meta[data-turbo-track="reload"]'))document.querySelector(`meta[http-equiv="${d.getAttribute("http-equiv")}"]`)?.content!==d.content&&c.push(p(d.getAttribute("http-equiv")));return c},"getChangedTrackedKeys"),n=e(r=>{const c=r.querySelector("[data-turbo-head]")||r.head;return{title:c.querySelector("title")?.textContent,transients:[...c.querySelectorAll("[data-pjax-transient]")],bodyClasses:r.querySelector("meta[name=turbo-body-classes]")?.content}},"getTurboCacheNodes"),p=e(r=>r.replace(/^x-/,"").replaceAll("-","_"),"formatKeyToError"),g=e(r=>document.dispatchEvent(new CustomEvent("turbo:reload",{detail:{reason:r}})),"dispatchTurboReload")},7739:(E,t,s)=>{"use strict";s.d(t,{C:()=>a,x:()=>f});const f=function(){return document.readyState==="interactive"||document.readyState==="complete"?Promise.resolve():new Promise(o=>{document.addEventListener("DOMContentLoaded",()=>{o()})})}(),a=function(){return document.readyState==="complete"?Promise.resolve():new Promise(o=>{window.addEventListener("load",o)})}()},92003:(E,t,s)=>{"use strict";s.d(t,{aJ:()=>n,cI:()=>T,eK:()=>w});var f=s(82918),a=s(45341),o=s(28382),i=s(47930),m=s(36192),l=s(10550);let h=!1,u=0;const _=Date.now();function w(r,c={}){r&&r.name!=="AbortError"&&S(O(b(r),c))}e(w,"reportError");async function S(r){if(!g())return;const c=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(!!c){if(y(r.error.stacktrace)){h=!0;return}u++;try{await fetch(c,{method:"post",body:JSON.stringify(r)})}catch{}}}e(S,"report");function b(r){return{type:r.name,value:r.message,stacktrace:T(r)}}e(b,"formatError");function O(r,c={}){return Object.assign({error:r,sanitizedUrl:(0,i.S)()||window.location.href,readyState:document.readyState,referrer:(0,l.wP)(),timeSinceLoad:Math.round(Date.now()-_),user:n()||void 0,turbo:(0,m.xc)()},c)}e(O,"errorContext");function T(r){return(0,o.Q)(r.stack||"").map(c=>({filename:c.file||"",function:String(c.methodName),lineno:(c.lineNumber||0).toString(),colno:(c.column||0).toString()}))}e(T,"stacktrace");const R=/(chrome|moz|safari)-extension:\/\//;function y(r){return r.some(c=>R.test(c.filename)||R.test(c.function))}e(y,"isExtensionError");function n(){const r=document.head?.querySelector('meta[name="user-login"]')?.content;return r||`anonymous-${(0,f.b)()}`}e(n,"pageUser");let p=!1;window.addEventListener("pageshow",()=>p=!1),window.addEventListener("pagehide",()=>p=!0);function g(){return!p&&!h&&u<10&&(0,a.Gb)()}e(g,"reportable"),typeof BroadcastChannel=="function"&&new BroadcastChannel("shared-worker-error").addEventListener("message",c=>{w(c.data.error)})},49815:(E,t,s)=>{"use strict";s.d(t,{$:()=>l,c:()=>i});var f=s(15205);const a=(0,f.Z)(o);function o(){return(document.head?.querySelector('meta[name="enabled-features"]')?.content||"").split(",")}e(o,"enabledFeatures");const i=(0,f.Z)(m);function m(h){return a().indexOf(h)!==-1}e(m,"isEnabled");const l={isFeatureEnabled:i}},84818:(E,t,s)=>{"use strict";s.d(t,{Z:()=>a});class f{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}}e(f,"NoOpStorage");function a(o,i={throwQuotaErrorsOnSet:!1},m=window){let l;try{l=m[o]}catch{l=new f}const{throwQuotaErrorsOnSet:h}=i;function u(S){try{return l.getItem(S)}catch{return null}}e(u,"getItem");function _(S,b){try{l.setItem(S,b)}catch(O){if(h&&O.message.toLowerCase().includes("quota"))throw O}}e(_,"setItem");function w(S){try{l.removeItem(S)}catch{}}return e(w,"removeItem"),{getItem:u,setItem:_,removeItem:w}}e(a,"safeStorage")},24216:(E,t,s)=>{"use strict";s.d(t,{LS:()=>o,cl:()=>i,rV:()=>a});var f=s(84818);const{getItem:a,setItem:o,removeItem:i}=(0,f.Z)("sessionStorage")},18920:(E,t,s)=>{"use strict";s.d(t,{$g:()=>i,OV:()=>o,QW:()=>m,Xr:()=>l});var f=s(14298);class a extends Event{constructor(u,_){super(_),this.mechanism=u}}e(a,"SoftNavEvent");class o extends a{constructor(u){super(u,f.QE.START)}}e(o,"SoftNavStartEvent");class i extends a{constructor(u,_){super(u,f.QE.SUCCESS),this.visitCount=_}}e(i,"SoftNavSuccessEvent");class m extends a{constructor(u,_){super(u,f.QE.ERROR),this.error=_}}e(m,"SoftNavErrorEvent");class l extends a{constructor(u){super(u,f.QE.END)}}e(l,"SoftNavEndEvent")},14298:(E,t,s)=>{"use strict";s.d(t,{BT:()=>_,FP:()=>S,LD:()=>u,QE:()=>i,R6:()=>R,TL:()=>b,Yl:()=>h,dw:()=>T,jN:()=>m,r_:()=>w,u5:()=>O});var f=s(18920),a=s(7117),o=s(10550);const i=Object.freeze({INITIAL:"soft-nav:initial",START:"soft-nav:start",SUCCESS:"soft-nav:success",ERROR:"soft-nav:error",FRAME_UPDATE:"soft-nav:frame-update",END:"soft-nav:end",RENDER:"soft-nav:render",PROGRESS_BAR:{START:"soft-nav:progress-bar:start",END:"soft-nav:progress-bar:end"}}),m="reload";let l=0;function h(){l=0,document.dispatchEvent(new Event(i.INITIAL)),(0,o.XL)()}e(h,"initSoftNav");function u(y){(0,o.sj)()||(document.dispatchEvent(new f.OV(y)),(0,o.U6)(y),(0,o.J$)(),(0,o.Nt)(),(0,a.hY)())}e(u,"startSoftNav");function _(y){const n=(0,o.Gj)();!(0,o.sj)()||!y.includes(n)||(l+=1,n!=="turbo.frame"&&b(),document.dispatchEvent(new f.$g(n,l)),S())}e(_,"succeedSoftNav");function w(){l=0;const y=(0,o.Wl)()||m;document.dispatchEvent(new f.QW((0,o.Gj)(),y)),(0,a.t3)(y),(0,o.XL)(),S()}e(w,"failSoftNav");function S(){document.dispatchEvent(new f.Xr((0,o.Gj)())),(0,o.pS)()}e(S,"endSoftNav");function b(){(0,a.mC)(),document.dispatchEvent(new Event(i.RENDER))}e(b,"renderedSoftNav");function O(){document.dispatchEvent(new Event(i.FRAME_UPDATE))}e(O,"updateFrame");function T(){document.dispatchEvent(new Event(i.PROGRESS_BAR.START))}e(T,"startProgressBar");function R(){document.dispatchEvent(new Event(i.PROGRESS_BAR.END))}e(R,"endProgressBar")},7117:(E,t,s)=>{"use strict";s.d(t,{Rl:()=>m,hY:()=>i,mC:()=>h,t3:()=>l});var f=s(45922),a=s(10550);const o="stats:soft-nav-duration";function i(){performance.mark(o)}e(i,"markStart");function m(){if(performance.getEntriesByName(o).length===0)return null;performance.measure(o,o);const _=performance.getEntriesByName(o).pop();return _?_.duration:null}e(m,"getDurationSinceLastSoftNav");function l(u){(0,f.b)({turboFailureReason:u,turboStartUrl:(0,a.wP)(),turboEndUrl:window.location.href})}e(l,"sendFailureStats");function h(){const u=(0,a.Gj)();if(u==="bfcache")return;const _=m();!_||(0,f.b)({requestUrl:window.location.href,softNavigationTiming:{mechanism:u,destination:(0,a.Nb)()||"rails",duration:Math.round(_),initiator:(0,a.CI)()||"rails"}})}e(h,"sendSuccessStats")},10550:(E,t,s)=>{"use strict";s.d(t,{Ak:()=>y,CI:()=>r,Gj:()=>O,J$:()=>g,Nb:()=>c,Nt:()=>n,OE:()=>T,U6:()=>w,Wl:()=>R,XL:()=>_,pS:()=>S,sj:()=>b,wP:()=>p});var f=s(47930),a=s(24216),o=s(14298);const i="soft-nav:fail",m="soft-nav:fail-referrer",l="soft-nav:referrer",h="soft-nav:marker",u="soft-nav:react-app-name";function _(){(0,a.LS)(h,"0"),(0,a.cl)(l),(0,a.cl)(i),(0,a.cl)(m),(0,a.cl)(u)}e(_,"clearSoftNav");function w(d){(0,a.LS)(h,d)}e(w,"setSoftNavMechanism");function S(){(0,a.LS)(h,"0")}e(S,"unsetSoftNav");function b(){const d=(0,a.rV)(h);return d&&d!=="0"}e(b,"inSoftNav");function O(){return(0,a.rV)(h)}e(O,"getSoftNavMechanism");function T(){return Boolean(R())}e(T,"hasSoftNavFailure");function R(){return(0,a.rV)(i)}e(R,"getSoftNavFailReason");function y(d){(0,a.LS)(i,d||o.jN),(0,a.LS)(m,window.location.href)}e(y,"setSoftNavFailReason");function n(){(0,a.LS)(l,(0,f.S)()||window.location.href)}e(n,"setSoftNavReferrer");function p(){return(0,a.rV)(l)||document.referrer}e(p,"getSoftNavReferrer");function g(){const d=c();d?(0,a.LS)(u,d):(0,a.cl)(u)}e(g,"setSoftNavReactAppName");function r(){return(0,a.rV)(u)}e(r,"getSoftNavReactAppName");function c(){return document.querySelector("react-app")?.getAttribute("app-name")}e(c,"getCurrentReactAppName")},45922:(E,t,s)=>{"use strict";s.d(t,{b:()=>o});var f=s(7739);let a=[];function o(u,_=!1){u.timestamp===void 0&&(u.timestamp=new Date().getTime()),u.loggedIn=h(),a.push(u),_?l():m()}e(o,"sendStats");let i=null;async function m(){await f.C,i==null&&(i=window.requestIdleCallback(l))}e(m,"scheduleSendStats");function l(){if(i=null,!a.length)return;const u=document.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(!u)return;const _=JSON.stringify({stats:a});try{navigator.sendBeacon&&navigator.sendBeacon(u,_)}catch{}a=[]}e(l,"flushStats");function h(){return!!document.head?.querySelector('meta[name="user-login"]')?.content}e(h,"isLoggedIn"),document.addEventListener("pagehide",l),document.addEventListener("visibilitychange",l)},30523:E=>{(function(){"use strict";var t=window,s=document;function f(o){var i=["MSIE ","Trident/","Edge/"];return new RegExp(i.join("|")).test(o)}e(f,"isMicrosoftBrowser");function a(){if("scrollBehavior"in s.documentElement.style&&t.__forceSmoothScrollPolyfill__!==!0)return;var o=t.HTMLElement||t.Element,i=468,m=f(t.navigator.userAgent)?1:0,l={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:o.prototype.scroll||u,scrollIntoView:o.prototype.scrollIntoView},h=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now;function u(n,p){this.scrollLeft=n,this.scrollTop=p}e(u,"scrollElement");function _(n){return .5*(1-Math.cos(Math.PI*n))}e(_,"ease");function w(n){if(n===null||typeof n!="object"||n.behavior===void 0||n.behavior==="auto"||n.behavior==="instant")return!0;if(typeof n=="object"&&n.behavior==="smooth")return!1;throw new TypeError("behavior member of ScrollOptions "+n.behavior+" is not a valid value for enumeration ScrollBehavior.")}e(w,"shouldBailOut");function S(n,p){if(p==="Y")return n.clientHeight+m<n.scrollHeight;if(p==="X")return n.clientWidth+m<n.scrollWidth}e(S,"hasScrollableSpace");function b(n,p){var g=t.getComputedStyle(n,null)["overflow"+p];return g==="auto"||g==="scroll"}e(b,"canOverflow");function O(n){var p=S(n,"Y")&&b(n,"Y"),g=S(n,"X")&&b(n,"X");return p||g}e(O,"isScrollable");function T(n){var p;do n=n.parentNode,p=n===s.body;while(p===!1&&O(n)===!1);return p=null,n}e(T,"findScrollableParent");function R(n){var p=h(),g,r,c,d=(p-n.startTime)/i;d=d>1?1:d,g=_(d),r=n.startX+(n.x-n.startX)*g,c=n.startY+(n.y-n.startY)*g,n.method.call(n.scrollable,r,c),(r!==n.x||c!==n.y)&&t.requestAnimationFrame(R.bind(t,n))}e(R,"step");function y(n,p,g){var r,c,d,v,A=h();n===s.body?(r=t,c=t.scrollX||t.pageXOffset,d=t.scrollY||t.pageYOffset,v=l.scroll):(r=n,c=n.scrollLeft,d=n.scrollTop,v=u),R({scrollable:r,method:v,startTime:A,startX:c,startY:d,x:p,y:g})}e(y,"smoothScroll"),t.scroll=t.scrollTo=function(){if(arguments[0]!==void 0){if(w(arguments[0])===!0){l.scroll.call(t,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:t.scrollX||t.pageXOffset,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:t.scrollY||t.pageYOffset);return}y.call(t,s.body,arguments[0].left!==void 0?~~arguments[0].left:t.scrollX||t.pageXOffset,arguments[0].top!==void 0?~~arguments[0].top:t.scrollY||t.pageYOffset)}},t.scrollBy=function(){if(arguments[0]!==void 0){if(w(arguments[0])){l.scrollBy.call(t,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:0,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:0);return}y.call(t,s.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset))}},o.prototype.scroll=o.prototype.scrollTo=function(){if(arguments[0]!==void 0){if(w(arguments[0])===!0){if(typeof arguments[0]=="number"&&arguments[1]===void 0)throw new SyntaxError("Value couldn't be converted");l.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left:typeof arguments[0]!="object"?~~arguments[0]:this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top:arguments[1]!==void 0?~~arguments[1]:this.scrollTop);return}var n=arguments[0].left,p=arguments[0].top;y.call(this,this,typeof n>"u"?this.scrollLeft:~~n,typeof p>"u"?this.scrollTop:~~p)}},o.prototype.scrollBy=function(){if(arguments[0]!==void 0){if(w(arguments[0])===!0){l.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop);return}this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior})}},o.prototype.scrollIntoView=function(){if(w(arguments[0])===!0){l.scrollIntoView.call(this,arguments[0]===void 0?!0:arguments[0]);return}var n=T(this),p=n.getBoundingClientRect(),g=this.getBoundingClientRect();n!==s.body?(y.call(this,n,n.scrollLeft+g.left-p.left,n.scrollTop+g.top-p.top),t.getComputedStyle(n).position!=="fixed"&&t.scrollBy({left:p.left,top:p.top,behavior:"smooth"})):t.scrollBy({left:g.left,top:g.top,behavior:"smooth"})}}e(a,"polyfill"),E.exports={polyfill:a}})()}},E=>{var t=e(f=>E(E.s=f),"__webpack_exec__");E.O(0,["vendors-node_modules_manuelpuyol_turbo_dist_turbo_es2017-esm_js","vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183"],()=>t(83721));var s=E.O()}]);})();

//# sourceMappingURL=environment-a58049f6c990.js.map