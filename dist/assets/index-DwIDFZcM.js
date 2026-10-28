const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-Dgv02VQx.js","assets/dbService-HWEkDEvn.js","assets/sportsService-D4HxWIVY.js","assets/weatherService-CithquEg.js","assets/villageCommonImageService-TYJ5NwvD.js","assets/imageService-9A8XDPY3.js","assets/VillageMap-CaACylw0.js","assets/navigation-CHkIKahB.js","assets/phone-DaLy3fLo.js","assets/check-qkw3K7WV.js","assets/plus-D-cqwVnx.js","assets/radio-DN91_MwC.js","assets/tv-QMxlnlub.js","assets/chevron-left-BuW_f1bx.js","assets/chevron-right-CRYUccbi.js","assets/calendar-DOBs9HCr.js","assets/MapPage-BRnPbHJl.js","assets/Agriculture-DDeoQVrm.js","assets/circle-check-B_6HhE0Z.js","assets/loader-circle-DpbsRMd8.js","assets/wrench-DcEY13od.js","assets/file-text-ClSQFMH0.js","assets/FieldDetail-8Nr5xZjH.js","assets/arrow-left-CGaEudHw.js","assets/droplets-CxGgGww1.js","assets/Sports-DA4ikfWu.js","assets/TournamentDetail-BdSSsolz.js","assets/html2pdf-CYeGweUa.js","assets/trash-2-BwwPuXdK.js","assets/TournamentManagement-C93Ck1pU.js","assets/play-BL7pqmIn.js","assets/liveStreamingService-D_FNLo6h.js","assets/camera-BJfCclnS.js","assets/refresh-cw-CcnXCL1-.js","assets/eye-Cxqu7UW7.js","assets/LiveMatchPage-CUD9uOU8.js","assets/Education-BHwFTING.js","assets/InstitutionDetail-Cp-LISrt.js","assets/Mosques-BRihZQwI.js","assets/clock-bRq7Urxs.js","assets/MosqueDetail-DXvXWHH1.js","assets/Organization-DSq2xJ60.js","assets/image-B988Lnqp.js","assets/Culture-DcVmu4rl.js","assets/Social-BNExTY1C.js","assets/Emergency-DEIdLRqj.js","assets/ReligiousEvents-bmmDNO0J.js","assets/WeatherPage-DX-H_EVQ.js","assets/circle-check-big-D9Bx72ho.js","assets/ForgotPassword-D5XHd8QH.js","assets/Profile-REH8eYsC.js","assets/Dashboard-CzYBkI_u.js","assets/shield-D2xW0Jl2.js","assets/Admin-CLxPDXTi.js"])))=>i.map(i=>d[i]);
function zI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var vV=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function BI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function wV(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var B_={exports:{}},cu={},$_={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $o=Symbol.for("react.element"),$I=Symbol.for("react.portal"),qI=Symbol.for("react.fragment"),WI=Symbol.for("react.strict_mode"),HI=Symbol.for("react.profiler"),KI=Symbol.for("react.provider"),GI=Symbol.for("react.context"),QI=Symbol.for("react.forward_ref"),YI=Symbol.for("react.suspense"),XI=Symbol.for("react.memo"),JI=Symbol.for("react.lazy"),Hm=Symbol.iterator;function ZI(t){return t===null||typeof t!="object"?null:(t=Hm&&t[Hm]||t["@@iterator"],typeof t=="function"?t:null)}var q_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W_=Object.assign,H_={};function as(t,e,n){this.props=t,this.context=e,this.refs=H_,this.updater=n||q_}as.prototype.isReactComponent={};as.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};as.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function K_(){}K_.prototype=as.prototype;function qd(t,e,n){this.props=t,this.context=e,this.refs=H_,this.updater=n||q_}var Wd=qd.prototype=new K_;Wd.constructor=qd;W_(Wd,as.prototype);Wd.isPureReactComponent=!0;var Km=Array.isArray,G_=Object.prototype.hasOwnProperty,Hd={current:null},Q_={key:!0,ref:!0,__self:!0,__source:!0};function Y_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)G_.call(e,r)&&!Q_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:$o,type:t,key:s,ref:o,props:i,_owner:Hd.current}}function e1(t,e){return{$$typeof:$o,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Kd(t){return typeof t=="object"&&t!==null&&t.$$typeof===$o}function t1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Gm=/\/+/g;function Cc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?t1(""+t.key):e.toString(36)}function Qa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case $o:case $I:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Cc(o,0):r,Km(i)?(n="",t!=null&&(n=t.replace(Gm,"$&/")+"/"),Qa(i,e,n,"",function(c){return c})):i!=null&&(Kd(i)&&(i=e1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Gm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Km(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Cc(s,l);o+=Qa(s,e,n,u,i)}else if(u=ZI(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Cc(s,l++),o+=Qa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Aa(t,e,n){if(t==null)return t;var r=[],i=0;return Qa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function n1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ht={current:null},Ya={transition:null},r1={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:Ya,ReactCurrentOwner:Hd};function X_(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:Aa,forEach:function(t,e,n){Aa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Aa(t,function(){e++}),e},toArray:function(t){return Aa(t,function(e){return e})||[]},only:function(t){if(!Kd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=as;Z.Fragment=qI;Z.Profiler=HI;Z.PureComponent=qd;Z.StrictMode=WI;Z.Suspense=YI;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r1;Z.act=X_;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=W_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Hd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)G_.call(e,u)&&!Q_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:$o,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:GI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:KI,_context:t},t.Consumer=t};Z.createElement=Y_;Z.createFactory=function(t){var e=Y_.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:QI,render:t}};Z.isValidElement=Kd;Z.lazy=function(t){return{$$typeof:JI,_payload:{_status:-1,_result:t},_init:n1}};Z.memo=function(t,e){return{$$typeof:XI,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=Ya.transition;Ya.transition={};try{t()}finally{Ya.transition=e}};Z.unstable_act=X_;Z.useCallback=function(t,e){return ht.current.useCallback(t,e)};Z.useContext=function(t){return ht.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return ht.current.useDeferredValue(t)};Z.useEffect=function(t,e){return ht.current.useEffect(t,e)};Z.useId=function(){return ht.current.useId()};Z.useImperativeHandle=function(t,e,n){return ht.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return ht.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return ht.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return ht.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return ht.current.useReducer(t,e,n)};Z.useRef=function(t){return ht.current.useRef(t)};Z.useState=function(t){return ht.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return ht.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return ht.current.useTransition()};Z.version="18.3.1";$_.exports=Z;var b=$_.exports;const J_=BI(b),i1=zI({__proto__:null,default:J_},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s1=b,o1=Symbol.for("react.element"),a1=Symbol.for("react.fragment"),l1=Object.prototype.hasOwnProperty,u1=s1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c1={key:!0,ref:!0,__self:!0,__source:!0};function Z_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)l1.call(e,r)&&!c1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:o1,type:t,key:s,ref:o,props:i,_owner:u1.current}}cu.Fragment=a1;cu.jsx=Z_;cu.jsxs=Z_;B_.exports=cu;var E=B_.exports,Eh={},ev={exports:{}},Ct={},tv={exports:{}},nv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Q){var J=B.length;B.push(Q);e:for(;0<J;){var ve=J-1>>>1,ue=B[ve];if(0<i(ue,Q))B[ve]=Q,B[J]=ue,J=ve;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Q=B[0],J=B.pop();if(J!==Q){B[0]=J;e:for(var ve=0,ue=B.length,Re=ue>>>1;ve<Re;){var gn=2*(ve+1)-1,yn=B[gn],_n=gn+1,vn=B[_n];if(0>i(yn,J))_n<ue&&0>i(vn,yn)?(B[ve]=vn,B[_n]=J,ve=_n):(B[ve]=yn,B[gn]=J,ve=gn);else if(_n<ue&&0>i(vn,J))B[ve]=vn,B[_n]=J,ve=_n;else break e}}return Q}function i(B,Q){var J=B.sortIndex-Q.sortIndex;return J!==0?J:B.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,S=!1,R=!1,x=!1,P=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(B){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=B)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function N(B){if(x=!1,I(B),!R)if(n(u)!==null)R=!0,ys(F);else{var Q=n(c);Q!==null&&mn(N,Q.startTime-B)}}function F(B,Q){R=!1,x&&(x=!1,w(y),y=-1),S=!0;var J=m;try{for(I(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||B&&!C());){var ve=p.callback;if(typeof ve=="function"){p.callback=null,m=p.priorityLevel;var ue=ve(p.expirationTime<=Q);Q=t.unstable_now(),typeof ue=="function"?p.callback=ue:p===n(u)&&r(u),I(Q)}else r(u);p=n(u)}if(p!==null)var Re=!0;else{var gn=n(c);gn!==null&&mn(N,gn.startTime-Q),Re=!1}return Re}finally{p=null,m=J,S=!1}}var U=!1,v=null,y=-1,T=5,k=-1;function C(){return!(t.unstable_now()-k<T)}function O(){if(v!==null){var B=t.unstable_now();k=B;var Q=!0;try{Q=v(!0,B)}finally{Q?A():(U=!1,v=null)}}else U=!1}var A;if(typeof _=="function")A=function(){_(O)};else if(typeof MessageChannel<"u"){var xt=new MessageChannel,Nr=xt.port2;xt.port1.onmessage=O,A=function(){Nr.postMessage(null)}}else A=function(){P(O,0)};function ys(B){v=B,U||(U=!0,A())}function mn(B,Q){y=P(function(){B(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){R||S||(R=!0,ys(F))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var J=m;m=Q;try{return B()}finally{m=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=m;m=B;try{return Q()}finally{m=J}},t.unstable_scheduleCallback=function(B,Q,J){var ve=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ve+J:ve):J=ve,B){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=J+ue,B={id:d++,callback:Q,priorityLevel:B,startTime:J,expirationTime:ue,sortIndex:-1},J>ve?(B.sortIndex=J,e(c,B),n(u)===null&&B===n(c)&&(x?(w(y),y=-1):x=!0,mn(N,J-ve))):(B.sortIndex=ue,e(u,B),R||S||(R=!0,ys(F))),B},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(B){var Q=m;return function(){var J=m;m=Q;try{return B.apply(this,arguments)}finally{m=J}}}})(nv);tv.exports=nv;var h1=tv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d1=b,Rt=h1;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rv=new Set,ho={};function si(t,e){qi(t,e),qi(t+"Capture",e)}function qi(t,e){for(ho[t]=e,t=0;t<e.length;t++)rv.add(e[t])}var Vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Th=Object.prototype.hasOwnProperty,f1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qm={},Ym={};function p1(t){return Th.call(Ym,t)?!0:Th.call(Qm,t)?!1:f1.test(t)?Ym[t]=!0:(Qm[t]=!0,!1)}function m1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function g1(t,e,n,r){if(e===null||typeof e>"u"||m1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ke[t]=new dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ke[e]=new dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ke[t]=new dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ke[t]=new dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ke[t]=new dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ke[t]=new dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ke[t]=new dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ke[t]=new dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ke[t]=new dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gd=/[\-:]([a-z])/g;function Qd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gd,Qd);Ke[e]=new dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gd,Qd);Ke[e]=new dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gd,Qd);Ke[e]=new dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ke[t]=new dt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ke[t]=new dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yd(t,e,n,r){var i=Ke.hasOwnProperty(e)?Ke[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(g1(e,n,i,r)&&(n=null),r||i===null?p1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var qn=d1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ra=Symbol.for("react.element"),Ei=Symbol.for("react.portal"),Ti=Symbol.for("react.fragment"),Xd=Symbol.for("react.strict_mode"),Ih=Symbol.for("react.profiler"),iv=Symbol.for("react.provider"),sv=Symbol.for("react.context"),Jd=Symbol.for("react.forward_ref"),Sh=Symbol.for("react.suspense"),kh=Symbol.for("react.suspense_list"),Zd=Symbol.for("react.memo"),Jn=Symbol.for("react.lazy"),ov=Symbol.for("react.offscreen"),Xm=Symbol.iterator;function Ns(t){return t===null||typeof t!="object"?null:(t=Xm&&t[Xm]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,Pc;function zs(t){if(Pc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Pc=e&&e[1]||""}return`
`+Pc+t}var xc=!1;function Nc(t,e){if(!t||xc)return"";xc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{xc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?zs(t):""}function y1(t){switch(t.tag){case 5:return zs(t.type);case 16:return zs("Lazy");case 13:return zs("Suspense");case 19:return zs("SuspenseList");case 0:case 2:case 15:return t=Nc(t.type,!1),t;case 11:return t=Nc(t.type.render,!1),t;case 1:return t=Nc(t.type,!0),t;default:return""}}function Ah(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ti:return"Fragment";case Ei:return"Portal";case Ih:return"Profiler";case Xd:return"StrictMode";case Sh:return"Suspense";case kh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sv:return(t.displayName||"Context")+".Consumer";case iv:return(t._context.displayName||"Context")+".Provider";case Jd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zd:return e=t.displayName||null,e!==null?e:Ah(t.type)||"Memo";case Jn:e=t._payload,t=t._init;try{return Ah(t(e))}catch{}}return null}function _1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ah(e);case 8:return e===Xd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function av(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function v1(t){var e=av(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ca(t){t._valueTracker||(t._valueTracker=v1(t))}function lv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=av(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function gl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Rh(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Jm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Er(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function uv(t,e){e=e.checked,e!=null&&Yd(t,"checked",e,!1)}function Ch(t,e){uv(t,e);var n=Er(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ph(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ph(t,e.type,Er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Zm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ph(t,e,n){(e!=="number"||gl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Bs=Array.isArray;function bi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Er(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function xh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function eg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(Bs(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Er(n)}}function cv(t,e){var n=Er(e.value),r=Er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function tg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Pa,dv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Pa=Pa||document.createElement("div"),Pa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Pa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function fo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},w1=["Webkit","ms","Moz","O"];Object.keys(Xs).forEach(function(t){w1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xs[e]=Xs[t]})});function fv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xs.hasOwnProperty(t)&&Xs[t]?(""+e).trim():e+"px"}function pv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=fv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var E1=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dh(t,e){if(e){if(E1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function Oh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bh=null;function ef(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vh=null,Vi=null,Li=null;function ng(t){if(t=Ho(t)){if(typeof Vh!="function")throw Error(j(280));var e=t.stateNode;e&&(e=mu(e),Vh(t.stateNode,t.type,e))}}function mv(t){Vi?Li?Li.push(t):Li=[t]:Vi=t}function gv(){if(Vi){var t=Vi,e=Li;if(Li=Vi=null,ng(t),e)for(t=0;t<e.length;t++)ng(e[t])}}function yv(t,e){return t(e)}function _v(){}var Dc=!1;function vv(t,e,n){if(Dc)return t(e,n);Dc=!0;try{return yv(t,e,n)}finally{Dc=!1,(Vi!==null||Li!==null)&&(_v(),gv())}}function po(t,e){var n=t.stateNode;if(n===null)return null;var r=mu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var Lh=!1;if(Vn)try{var Ds={};Object.defineProperty(Ds,"passive",{get:function(){Lh=!0}}),window.addEventListener("test",Ds,Ds),window.removeEventListener("test",Ds,Ds)}catch{Lh=!1}function T1(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Js=!1,yl=null,_l=!1,Mh=null,I1={onError:function(t){Js=!0,yl=t}};function S1(t,e,n,r,i,s,o,l,u){Js=!1,yl=null,T1.apply(I1,arguments)}function k1(t,e,n,r,i,s,o,l,u){if(S1.apply(this,arguments),Js){if(Js){var c=yl;Js=!1,yl=null}else throw Error(j(198));_l||(_l=!0,Mh=c)}}function oi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function wv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function rg(t){if(oi(t)!==t)throw Error(j(188))}function A1(t){var e=t.alternate;if(!e){if(e=oi(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return rg(i),t;if(s===r)return rg(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function Ev(t){return t=A1(t),t!==null?Tv(t):null}function Tv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Tv(t);if(e!==null)return e;t=t.sibling}return null}var Iv=Rt.unstable_scheduleCallback,ig=Rt.unstable_cancelCallback,R1=Rt.unstable_shouldYield,C1=Rt.unstable_requestPaint,Pe=Rt.unstable_now,P1=Rt.unstable_getCurrentPriorityLevel,tf=Rt.unstable_ImmediatePriority,Sv=Rt.unstable_UserBlockingPriority,vl=Rt.unstable_NormalPriority,x1=Rt.unstable_LowPriority,kv=Rt.unstable_IdlePriority,hu=null,rn=null;function N1(t){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(hu,t,void 0,(t.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:b1,D1=Math.log,O1=Math.LN2;function b1(t){return t>>>=0,t===0?32:31-(D1(t)/O1|0)|0}var xa=64,Na=4194304;function $s(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=$s(l):(s&=o,s!==0&&(r=$s(s)))}else o=n&~i,o!==0?r=$s(o):s!==0&&(r=$s(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Wt(e),i=1<<n,r|=t[n],e&=~i;return r}function V1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function L1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Wt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=V1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Fh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Av(){var t=xa;return xa<<=1,!(xa&4194240)&&(xa=64),t}function Oc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function qo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wt(e),t[e]=n}function M1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Wt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function nf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Wt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function Rv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Cv,rf,Pv,xv,Nv,Uh=!1,Da=[],cr=null,hr=null,dr=null,mo=new Map,go=new Map,er=[],F1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sg(t,e){switch(t){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(e.pointerId)}}function Os(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ho(e),e!==null&&rf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function U1(t,e,n,r,i){switch(e){case"focusin":return cr=Os(cr,t,e,n,r,i),!0;case"dragenter":return hr=Os(hr,t,e,n,r,i),!0;case"mouseover":return dr=Os(dr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return mo.set(s,Os(mo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,go.set(s,Os(go.get(s)||null,t,e,n,r,i)),!0}return!1}function Dv(t){var e=Ur(t.target);if(e!==null){var n=oi(e);if(n!==null){if(e=n.tag,e===13){if(e=wv(n),e!==null){t.blockedOn=e,Nv(t.priority,function(){Pv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=jh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);bh=r,n.target.dispatchEvent(r),bh=null}else return e=Ho(n),e!==null&&rf(e),t.blockedOn=n,!1;e.shift()}return!0}function og(t,e,n){Xa(t)&&n.delete(e)}function j1(){Uh=!1,cr!==null&&Xa(cr)&&(cr=null),hr!==null&&Xa(hr)&&(hr=null),dr!==null&&Xa(dr)&&(dr=null),mo.forEach(og),go.forEach(og)}function bs(t,e){t.blockedOn===e&&(t.blockedOn=null,Uh||(Uh=!0,Rt.unstable_scheduleCallback(Rt.unstable_NormalPriority,j1)))}function yo(t){function e(i){return bs(i,t)}if(0<Da.length){bs(Da[0],t);for(var n=1;n<Da.length;n++){var r=Da[n];r.blockedOn===t&&(r.blockedOn=null)}}for(cr!==null&&bs(cr,t),hr!==null&&bs(hr,t),dr!==null&&bs(dr,t),mo.forEach(e),go.forEach(e),n=0;n<er.length;n++)r=er[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<er.length&&(n=er[0],n.blockedOn===null);)Dv(n),n.blockedOn===null&&er.shift()}var Mi=qn.ReactCurrentBatchConfig,El=!0;function z1(t,e,n,r){var i=ae,s=Mi.transition;Mi.transition=null;try{ae=1,sf(t,e,n,r)}finally{ae=i,Mi.transition=s}}function B1(t,e,n,r){var i=ae,s=Mi.transition;Mi.transition=null;try{ae=4,sf(t,e,n,r)}finally{ae=i,Mi.transition=s}}function sf(t,e,n,r){if(El){var i=jh(t,e,n,r);if(i===null)$c(t,e,r,Tl,n),sg(t,r);else if(U1(i,t,e,n,r))r.stopPropagation();else if(sg(t,r),e&4&&-1<F1.indexOf(t)){for(;i!==null;){var s=Ho(i);if(s!==null&&Cv(s),s=jh(t,e,n,r),s===null&&$c(t,e,r,Tl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else $c(t,e,r,null,n)}}var Tl=null;function jh(t,e,n,r){if(Tl=null,t=ef(r),t=Ur(t),t!==null)if(e=oi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=wv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Tl=t,null}function Ov(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(P1()){case tf:return 1;case Sv:return 4;case vl:case x1:return 16;case kv:return 536870912;default:return 16}default:return 16}}var or=null,of=null,Ja=null;function bv(){if(Ja)return Ja;var t,e=of,n=e.length,r,i="value"in or?or.value:or.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ja=i.slice(t,1<r?1-r:void 0)}function Za(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Oa(){return!0}function ag(){return!1}function Pt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Oa:ag,this.isPropagationStopped=ag,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oa)},persist:function(){},isPersistent:Oa}),e}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},af=Pt(ls),Wo=Ie({},ls,{view:0,detail:0}),$1=Pt(Wo),bc,Vc,Vs,du=Ie({},Wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vs&&(Vs&&t.type==="mousemove"?(bc=t.screenX-Vs.screenX,Vc=t.screenY-Vs.screenY):Vc=bc=0,Vs=t),bc)},movementY:function(t){return"movementY"in t?t.movementY:Vc}}),lg=Pt(du),q1=Ie({},du,{dataTransfer:0}),W1=Pt(q1),H1=Ie({},Wo,{relatedTarget:0}),Lc=Pt(H1),K1=Ie({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),G1=Pt(K1),Q1=Ie({},ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Y1=Pt(Q1),X1=Ie({},ls,{data:0}),ug=Pt(X1),J1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=eS[t])?!!e[t]:!1}function lf(){return tS}var nS=Ie({},Wo,{key:function(t){if(t.key){var e=J1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Za(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Z1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lf,charCode:function(t){return t.type==="keypress"?Za(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Za(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rS=Pt(nS),iS=Ie({},du,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cg=Pt(iS),sS=Ie({},Wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lf}),oS=Pt(sS),aS=Ie({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),lS=Pt(aS),uS=Ie({},du,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),cS=Pt(uS),hS=[9,13,27,32],uf=Vn&&"CompositionEvent"in window,Zs=null;Vn&&"documentMode"in document&&(Zs=document.documentMode);var dS=Vn&&"TextEvent"in window&&!Zs,Vv=Vn&&(!uf||Zs&&8<Zs&&11>=Zs),hg=" ",dg=!1;function Lv(t,e){switch(t){case"keyup":return hS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ii=!1;function fS(t,e){switch(t){case"compositionend":return Mv(e);case"keypress":return e.which!==32?null:(dg=!0,hg);case"textInput":return t=e.data,t===hg&&dg?null:t;default:return null}}function pS(t,e){if(Ii)return t==="compositionend"||!uf&&Lv(t,e)?(t=bv(),Ja=of=or=null,Ii=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Vv&&e.locale!=="ko"?null:e.data;default:return null}}var mS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!mS[t.type]:e==="textarea"}function Fv(t,e,n,r){mv(r),e=Il(e,"onChange"),0<e.length&&(n=new af("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var eo=null,_o=null;function gS(t){Qv(t,0)}function fu(t){var e=Ai(t);if(lv(e))return t}function yS(t,e){if(t==="change")return e}var Uv=!1;if(Vn){var Mc;if(Vn){var Fc="oninput"in document;if(!Fc){var pg=document.createElement("div");pg.setAttribute("oninput","return;"),Fc=typeof pg.oninput=="function"}Mc=Fc}else Mc=!1;Uv=Mc&&(!document.documentMode||9<document.documentMode)}function mg(){eo&&(eo.detachEvent("onpropertychange",jv),_o=eo=null)}function jv(t){if(t.propertyName==="value"&&fu(_o)){var e=[];Fv(e,_o,t,ef(t)),vv(gS,e)}}function _S(t,e,n){t==="focusin"?(mg(),eo=e,_o=n,eo.attachEvent("onpropertychange",jv)):t==="focusout"&&mg()}function vS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fu(_o)}function wS(t,e){if(t==="click")return fu(e)}function ES(t,e){if(t==="input"||t==="change")return fu(e)}function TS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kt=typeof Object.is=="function"?Object.is:TS;function vo(t,e){if(Kt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Th.call(e,i)||!Kt(t[i],e[i]))return!1}return!0}function gg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function yg(t,e){var n=gg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gg(n)}}function zv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Bv(){for(var t=window,e=gl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=gl(t.document)}return e}function cf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function IS(t){var e=Bv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&zv(n.ownerDocument.documentElement,n)){if(r!==null&&cf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=yg(n,s);var o=yg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var SS=Vn&&"documentMode"in document&&11>=document.documentMode,Si=null,zh=null,to=null,Bh=!1;function _g(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bh||Si==null||Si!==gl(r)||(r=Si,"selectionStart"in r&&cf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),to&&vo(to,r)||(to=r,r=Il(zh,"onSelect"),0<r.length&&(e=new af("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Si)))}function ba(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ki={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},Uc={},$v={};Vn&&($v=document.createElement("div").style,"AnimationEvent"in window||(delete ki.animationend.animation,delete ki.animationiteration.animation,delete ki.animationstart.animation),"TransitionEvent"in window||delete ki.transitionend.transition);function pu(t){if(Uc[t])return Uc[t];if(!ki[t])return t;var e=ki[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $v)return Uc[t]=e[n];return t}var qv=pu("animationend"),Wv=pu("animationiteration"),Hv=pu("animationstart"),Kv=pu("transitionend"),Gv=new Map,vg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){Gv.set(t,e),si(e,[t])}for(var jc=0;jc<vg.length;jc++){var zc=vg[jc],kS=zc.toLowerCase(),AS=zc[0].toUpperCase()+zc.slice(1);Ar(kS,"on"+AS)}Ar(qv,"onAnimationEnd");Ar(Wv,"onAnimationIteration");Ar(Hv,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(Kv,"onTransitionEnd");qi("onMouseEnter",["mouseout","mouseover"]);qi("onMouseLeave",["mouseout","mouseover"]);qi("onPointerEnter",["pointerout","pointerover"]);qi("onPointerLeave",["pointerout","pointerover"]);si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));si("onBeforeInput",["compositionend","keypress","textInput","paste"]);si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RS=new Set("cancel close invalid load scroll toggle".split(" ").concat(qs));function wg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,k1(r,e,void 0,t),t.currentTarget=null}function Qv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;wg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;wg(i,l,c),s=u}}}if(_l)throw t=Mh,_l=!1,Mh=null,t}function pe(t,e){var n=e[Kh];n===void 0&&(n=e[Kh]=new Set);var r=t+"__bubble";n.has(r)||(Yv(e,t,2,!1),n.add(r))}function Bc(t,e,n){var r=0;e&&(r|=4),Yv(n,t,r,e)}var Va="_reactListening"+Math.random().toString(36).slice(2);function wo(t){if(!t[Va]){t[Va]=!0,rv.forEach(function(n){n!=="selectionchange"&&(RS.has(n)||Bc(n,!1,t),Bc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Va]||(e[Va]=!0,Bc("selectionchange",!1,e))}}function Yv(t,e,n,r){switch(Ov(e)){case 1:var i=z1;break;case 4:i=B1;break;default:i=sf}n=i.bind(null,e,n,t),i=void 0,!Lh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function $c(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ur(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}vv(function(){var c=s,d=ef(n),p=[];e:{var m=Gv.get(t);if(m!==void 0){var S=af,R=t;switch(t){case"keypress":if(Za(n)===0)break e;case"keydown":case"keyup":S=rS;break;case"focusin":R="focus",S=Lc;break;case"focusout":R="blur",S=Lc;break;case"beforeblur":case"afterblur":S=Lc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=lg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=W1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=oS;break;case qv:case Wv:case Hv:S=G1;break;case Kv:S=lS;break;case"scroll":S=$1;break;case"wheel":S=cS;break;case"copy":case"cut":case"paste":S=Y1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=cg}var x=(e&4)!==0,P=!x&&t==="scroll",w=x?m!==null?m+"Capture":null:m;x=[];for(var _=c,I;_!==null;){I=_;var N=I.stateNode;if(I.tag===5&&N!==null&&(I=N,w!==null&&(N=po(_,w),N!=null&&x.push(Eo(_,N,I)))),P)break;_=_.return}0<x.length&&(m=new S(m,R,null,n,d),p.push({event:m,listeners:x}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",m&&n!==bh&&(R=n.relatedTarget||n.fromElement)&&(Ur(R)||R[Ln]))break e;if((S||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,S?(R=n.relatedTarget||n.toElement,S=c,R=R?Ur(R):null,R!==null&&(P=oi(R),R!==P||R.tag!==5&&R.tag!==6)&&(R=null)):(S=null,R=c),S!==R)){if(x=lg,N="onMouseLeave",w="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=cg,N="onPointerLeave",w="onPointerEnter",_="pointer"),P=S==null?m:Ai(S),I=R==null?m:Ai(R),m=new x(N,_+"leave",S,n,d),m.target=P,m.relatedTarget=I,N=null,Ur(d)===c&&(x=new x(w,_+"enter",R,n,d),x.target=I,x.relatedTarget=P,N=x),P=N,S&&R)t:{for(x=S,w=R,_=0,I=x;I;I=gi(I))_++;for(I=0,N=w;N;N=gi(N))I++;for(;0<_-I;)x=gi(x),_--;for(;0<I-_;)w=gi(w),I--;for(;_--;){if(x===w||w!==null&&x===w.alternate)break t;x=gi(x),w=gi(w)}x=null}else x=null;S!==null&&Eg(p,m,S,x,!1),R!==null&&P!==null&&Eg(p,P,R,x,!0)}}e:{if(m=c?Ai(c):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var F=yS;else if(fg(m))if(Uv)F=ES;else{F=vS;var U=_S}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=wS);if(F&&(F=F(t,c))){Fv(p,F,n,d);break e}U&&U(t,m,c),t==="focusout"&&(U=m._wrapperState)&&U.controlled&&m.type==="number"&&Ph(m,"number",m.value)}switch(U=c?Ai(c):window,t){case"focusin":(fg(U)||U.contentEditable==="true")&&(Si=U,zh=c,to=null);break;case"focusout":to=zh=Si=null;break;case"mousedown":Bh=!0;break;case"contextmenu":case"mouseup":case"dragend":Bh=!1,_g(p,n,d);break;case"selectionchange":if(SS)break;case"keydown":case"keyup":_g(p,n,d)}var v;if(uf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ii?Lv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Vv&&n.locale!=="ko"&&(Ii||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ii&&(v=bv()):(or=d,of="value"in or?or.value:or.textContent,Ii=!0)),U=Il(c,y),0<U.length&&(y=new ug(y,t,null,n,d),p.push({event:y,listeners:U}),v?y.data=v:(v=Mv(n),v!==null&&(y.data=v)))),(v=dS?fS(t,n):pS(t,n))&&(c=Il(c,"onBeforeInput"),0<c.length&&(d=new ug("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=v))}Qv(p,e)})}function Eo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Il(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=po(t,n),s!=null&&r.unshift(Eo(t,s,i)),s=po(t,e),s!=null&&r.push(Eo(t,s,i))),t=t.return}return r}function gi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Eg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=po(n,s),u!=null&&o.unshift(Eo(n,u,l))):i||(u=po(n,s),u!=null&&o.push(Eo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var CS=/\r\n?/g,PS=/\u0000|\uFFFD/g;function Tg(t){return(typeof t=="string"?t:""+t).replace(CS,`
`).replace(PS,"")}function La(t,e,n){if(e=Tg(e),Tg(t)!==e&&n)throw Error(j(425))}function Sl(){}var $h=null,qh=null;function Wh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hh=typeof setTimeout=="function"?setTimeout:void 0,xS=typeof clearTimeout=="function"?clearTimeout:void 0,Ig=typeof Promise=="function"?Promise:void 0,NS=typeof queueMicrotask=="function"?queueMicrotask:typeof Ig<"u"?function(t){return Ig.resolve(null).then(t).catch(DS)}:Hh;function DS(t){setTimeout(function(){throw t})}function qc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),yo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);yo(e)}function fr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Sg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var us=Math.random().toString(36).slice(2),tn="__reactFiber$"+us,To="__reactProps$"+us,Ln="__reactContainer$"+us,Kh="__reactEvents$"+us,OS="__reactListeners$"+us,bS="__reactHandles$"+us;function Ur(t){var e=t[tn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ln]||n[tn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Sg(t);t!==null;){if(n=t[tn])return n;t=Sg(t)}return e}t=n,n=t.parentNode}return null}function Ho(t){return t=t[tn]||t[Ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ai(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function mu(t){return t[To]||null}var Gh=[],Ri=-1;function Rr(t){return{current:t}}function ge(t){0>Ri||(t.current=Gh[Ri],Gh[Ri]=null,Ri--)}function de(t,e){Ri++,Gh[Ri]=t.current,t.current=e}var Tr={},st=Rr(Tr),gt=Rr(!1),Kr=Tr;function Wi(t,e){var n=t.type.contextTypes;if(!n)return Tr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function yt(t){return t=t.childContextTypes,t!=null}function kl(){ge(gt),ge(st)}function kg(t,e,n){if(st.current!==Tr)throw Error(j(168));de(st,e),de(gt,n)}function Xv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,_1(t)||"Unknown",i));return Ie({},n,r)}function Al(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tr,Kr=st.current,de(st,t),de(gt,gt.current),!0}function Ag(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=Xv(t,e,Kr),r.__reactInternalMemoizedMergedChildContext=t,ge(gt),ge(st),de(st,t)):ge(gt),de(gt,n)}var Sn=null,gu=!1,Wc=!1;function Jv(t){Sn===null?Sn=[t]:Sn.push(t)}function VS(t){gu=!0,Jv(t)}function Cr(){if(!Wc&&Sn!==null){Wc=!0;var t=0,e=ae;try{var n=Sn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Sn=null,gu=!1}catch(i){throw Sn!==null&&(Sn=Sn.slice(t+1)),Iv(tf,Cr),i}finally{ae=e,Wc=!1}}return null}var Ci=[],Pi=0,Rl=null,Cl=0,Nt=[],Dt=0,Gr=null,An=1,Rn="";function Lr(t,e){Ci[Pi++]=Cl,Ci[Pi++]=Rl,Rl=t,Cl=e}function Zv(t,e,n){Nt[Dt++]=An,Nt[Dt++]=Rn,Nt[Dt++]=Gr,Gr=t;var r=An;t=Rn;var i=32-Wt(r)-1;r&=~(1<<i),n+=1;var s=32-Wt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,An=1<<32-Wt(e)+i|n<<i|r,Rn=s+t}else An=1<<s|n<<i|r,Rn=t}function hf(t){t.return!==null&&(Lr(t,1),Zv(t,1,0))}function df(t){for(;t===Rl;)Rl=Ci[--Pi],Ci[Pi]=null,Cl=Ci[--Pi],Ci[Pi]=null;for(;t===Gr;)Gr=Nt[--Dt],Nt[Dt]=null,Rn=Nt[--Dt],Nt[Dt]=null,An=Nt[--Dt],Nt[Dt]=null}var kt=null,It=null,ye=!1,$t=null;function e0(t,e){var n=Ot(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Rg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kt=t,It=fr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kt=t,It=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gr!==null?{id:An,overflow:Rn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ot(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kt=t,It=null,!0):!1;default:return!1}}function Qh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yh(t){if(ye){var e=It;if(e){var n=e;if(!Rg(t,e)){if(Qh(t))throw Error(j(418));e=fr(n.nextSibling);var r=kt;e&&Rg(t,e)?e0(r,n):(t.flags=t.flags&-4097|2,ye=!1,kt=t)}}else{if(Qh(t))throw Error(j(418));t.flags=t.flags&-4097|2,ye=!1,kt=t}}}function Cg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kt=t}function Ma(t){if(t!==kt)return!1;if(!ye)return Cg(t),ye=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Wh(t.type,t.memoizedProps)),e&&(e=It)){if(Qh(t))throw t0(),Error(j(418));for(;e;)e0(t,e),e=fr(e.nextSibling)}if(Cg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){It=fr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}It=null}}else It=kt?fr(t.stateNode.nextSibling):null;return!0}function t0(){for(var t=It;t;)t=fr(t.nextSibling)}function Hi(){It=kt=null,ye=!1}function ff(t){$t===null?$t=[t]:$t.push(t)}var LS=qn.ReactCurrentBatchConfig;function Ls(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function Fa(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Pg(t){var e=t._init;return e(t._payload)}function n0(t){function e(w,_){if(t){var I=w.deletions;I===null?(w.deletions=[_],w.flags|=16):I.push(_)}}function n(w,_){if(!t)return null;for(;_!==null;)e(w,_),_=_.sibling;return null}function r(w,_){for(w=new Map;_!==null;)_.key!==null?w.set(_.key,_):w.set(_.index,_),_=_.sibling;return w}function i(w,_){return w=yr(w,_),w.index=0,w.sibling=null,w}function s(w,_,I){return w.index=I,t?(I=w.alternate,I!==null?(I=I.index,I<_?(w.flags|=2,_):I):(w.flags|=2,_)):(w.flags|=1048576,_)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,_,I,N){return _===null||_.tag!==6?(_=Jc(I,w.mode,N),_.return=w,_):(_=i(_,I),_.return=w,_)}function u(w,_,I,N){var F=I.type;return F===Ti?d(w,_,I.props.children,N,I.key):_!==null&&(_.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Jn&&Pg(F)===_.type)?(N=i(_,I.props),N.ref=Ls(w,_,I),N.return=w,N):(N=ol(I.type,I.key,I.props,null,w.mode,N),N.ref=Ls(w,_,I),N.return=w,N)}function c(w,_,I,N){return _===null||_.tag!==4||_.stateNode.containerInfo!==I.containerInfo||_.stateNode.implementation!==I.implementation?(_=Zc(I,w.mode,N),_.return=w,_):(_=i(_,I.children||[]),_.return=w,_)}function d(w,_,I,N,F){return _===null||_.tag!==7?(_=Wr(I,w.mode,N,F),_.return=w,_):(_=i(_,I),_.return=w,_)}function p(w,_,I){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Jc(""+_,w.mode,I),_.return=w,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ra:return I=ol(_.type,_.key,_.props,null,w.mode,I),I.ref=Ls(w,null,_),I.return=w,I;case Ei:return _=Zc(_,w.mode,I),_.return=w,_;case Jn:var N=_._init;return p(w,N(_._payload),I)}if(Bs(_)||Ns(_))return _=Wr(_,w.mode,I,null),_.return=w,_;Fa(w,_)}return null}function m(w,_,I,N){var F=_!==null?_.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return F!==null?null:l(w,_,""+I,N);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Ra:return I.key===F?u(w,_,I,N):null;case Ei:return I.key===F?c(w,_,I,N):null;case Jn:return F=I._init,m(w,_,F(I._payload),N)}if(Bs(I)||Ns(I))return F!==null?null:d(w,_,I,N,null);Fa(w,I)}return null}function S(w,_,I,N,F){if(typeof N=="string"&&N!==""||typeof N=="number")return w=w.get(I)||null,l(_,w,""+N,F);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Ra:return w=w.get(N.key===null?I:N.key)||null,u(_,w,N,F);case Ei:return w=w.get(N.key===null?I:N.key)||null,c(_,w,N,F);case Jn:var U=N._init;return S(w,_,I,U(N._payload),F)}if(Bs(N)||Ns(N))return w=w.get(I)||null,d(_,w,N,F,null);Fa(_,N)}return null}function R(w,_,I,N){for(var F=null,U=null,v=_,y=_=0,T=null;v!==null&&y<I.length;y++){v.index>y?(T=v,v=null):T=v.sibling;var k=m(w,v,I[y],N);if(k===null){v===null&&(v=T);break}t&&v&&k.alternate===null&&e(w,v),_=s(k,_,y),U===null?F=k:U.sibling=k,U=k,v=T}if(y===I.length)return n(w,v),ye&&Lr(w,y),F;if(v===null){for(;y<I.length;y++)v=p(w,I[y],N),v!==null&&(_=s(v,_,y),U===null?F=v:U.sibling=v,U=v);return ye&&Lr(w,y),F}for(v=r(w,v);y<I.length;y++)T=S(v,w,y,I[y],N),T!==null&&(t&&T.alternate!==null&&v.delete(T.key===null?y:T.key),_=s(T,_,y),U===null?F=T:U.sibling=T,U=T);return t&&v.forEach(function(C){return e(w,C)}),ye&&Lr(w,y),F}function x(w,_,I,N){var F=Ns(I);if(typeof F!="function")throw Error(j(150));if(I=F.call(I),I==null)throw Error(j(151));for(var U=F=null,v=_,y=_=0,T=null,k=I.next();v!==null&&!k.done;y++,k=I.next()){v.index>y?(T=v,v=null):T=v.sibling;var C=m(w,v,k.value,N);if(C===null){v===null&&(v=T);break}t&&v&&C.alternate===null&&e(w,v),_=s(C,_,y),U===null?F=C:U.sibling=C,U=C,v=T}if(k.done)return n(w,v),ye&&Lr(w,y),F;if(v===null){for(;!k.done;y++,k=I.next())k=p(w,k.value,N),k!==null&&(_=s(k,_,y),U===null?F=k:U.sibling=k,U=k);return ye&&Lr(w,y),F}for(v=r(w,v);!k.done;y++,k=I.next())k=S(v,w,y,k.value,N),k!==null&&(t&&k.alternate!==null&&v.delete(k.key===null?y:k.key),_=s(k,_,y),U===null?F=k:U.sibling=k,U=k);return t&&v.forEach(function(O){return e(w,O)}),ye&&Lr(w,y),F}function P(w,_,I,N){if(typeof I=="object"&&I!==null&&I.type===Ti&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Ra:e:{for(var F=I.key,U=_;U!==null;){if(U.key===F){if(F=I.type,F===Ti){if(U.tag===7){n(w,U.sibling),_=i(U,I.props.children),_.return=w,w=_;break e}}else if(U.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Jn&&Pg(F)===U.type){n(w,U.sibling),_=i(U,I.props),_.ref=Ls(w,U,I),_.return=w,w=_;break e}n(w,U);break}else e(w,U);U=U.sibling}I.type===Ti?(_=Wr(I.props.children,w.mode,N,I.key),_.return=w,w=_):(N=ol(I.type,I.key,I.props,null,w.mode,N),N.ref=Ls(w,_,I),N.return=w,w=N)}return o(w);case Ei:e:{for(U=I.key;_!==null;){if(_.key===U)if(_.tag===4&&_.stateNode.containerInfo===I.containerInfo&&_.stateNode.implementation===I.implementation){n(w,_.sibling),_=i(_,I.children||[]),_.return=w,w=_;break e}else{n(w,_);break}else e(w,_);_=_.sibling}_=Zc(I,w.mode,N),_.return=w,w=_}return o(w);case Jn:return U=I._init,P(w,_,U(I._payload),N)}if(Bs(I))return R(w,_,I,N);if(Ns(I))return x(w,_,I,N);Fa(w,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,_!==null&&_.tag===6?(n(w,_.sibling),_=i(_,I),_.return=w,w=_):(n(w,_),_=Jc(I,w.mode,N),_.return=w,w=_),o(w)):n(w,_)}return P}var Ki=n0(!0),r0=n0(!1),Pl=Rr(null),xl=null,xi=null,pf=null;function mf(){pf=xi=xl=null}function gf(t){var e=Pl.current;ge(Pl),t._currentValue=e}function Xh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fi(t,e){xl=t,pf=xi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mt=!0),t.firstContext=null)}function Lt(t){var e=t._currentValue;if(pf!==t)if(t={context:t,memoizedValue:e,next:null},xi===null){if(xl===null)throw Error(j(308));xi=t,xl.dependencies={lanes:0,firstContext:t}}else xi=xi.next=t;return e}var jr=null;function yf(t){jr===null?jr=[t]:jr.push(t)}function i0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,yf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Mn(t,r)}function Mn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zn=!1;function _f(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function s0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Nn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function pr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Mn(t,n)}return i=r.interleaved,i===null?(e.next=e,yf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Mn(t,n)}function el(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,nf(t,n)}}function xg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Nl(t,e,n,r){var i=t.updateQueue;Zn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,S=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,x=l;switch(m=e,S=n,x.tag){case 1:if(R=x.payload,typeof R=="function"){p=R.call(S,p,m);break e}p=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=x.payload,m=typeof R=="function"?R.call(S,p,m):R,m==null)break e;p=Ie({},p,m);break e;case 2:Zn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else S={eventTime:S,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=S,u=p):d=d.next=S,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Yr|=o,t.lanes=o,t.memoizedState=p}}function Ng(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var Ko={},sn=Rr(Ko),Io=Rr(Ko),So=Rr(Ko);function zr(t){if(t===Ko)throw Error(j(174));return t}function vf(t,e){switch(de(So,e),de(Io,t),de(sn,Ko),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nh(e,t)}ge(sn),de(sn,e)}function Gi(){ge(sn),ge(Io),ge(So)}function o0(t){zr(So.current);var e=zr(sn.current),n=Nh(e,t.type);e!==n&&(de(Io,t),de(sn,n))}function wf(t){Io.current===t&&(ge(sn),ge(Io))}var we=Rr(0);function Dl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Hc=[];function Ef(){for(var t=0;t<Hc.length;t++)Hc[t]._workInProgressVersionPrimary=null;Hc.length=0}var tl=qn.ReactCurrentDispatcher,Kc=qn.ReactCurrentBatchConfig,Qr=0,Ee=null,be=null,Fe=null,Ol=!1,no=!1,ko=0,MS=0;function Je(){throw Error(j(321))}function Tf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kt(t[n],e[n]))return!1;return!0}function If(t,e,n,r,i,s){if(Qr=s,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tl.current=t===null||t.memoizedState===null?zS:BS,t=n(r,i),no){s=0;do{if(no=!1,ko=0,25<=s)throw Error(j(301));s+=1,Fe=be=null,e.updateQueue=null,tl.current=$S,t=n(r,i)}while(no)}if(tl.current=bl,e=be!==null&&be.next!==null,Qr=0,Fe=be=Ee=null,Ol=!1,e)throw Error(j(300));return t}function Sf(){var t=ko!==0;return ko=0,t}function en(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Ee.memoizedState=Fe=t:Fe=Fe.next=t,Fe}function Mt(){if(be===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=be.next;var e=Fe===null?Ee.memoizedState:Fe.next;if(e!==null)Fe=e,be=t;else{if(t===null)throw Error(j(310));be=t,t={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Fe===null?Ee.memoizedState=Fe=t:Fe=Fe.next=t}return Fe}function Ao(t,e){return typeof e=="function"?e(t):e}function Gc(t){var e=Mt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((Qr&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Ee.lanes|=d,Yr|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Kt(r,e.memoizedState)||(mt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ee.lanes|=s,Yr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qc(t){var e=Mt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Kt(s,e.memoizedState)||(mt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function a0(){}function l0(t,e){var n=Ee,r=Mt(),i=e(),s=!Kt(r.memoizedState,i);if(s&&(r.memoizedState=i,mt=!0),r=r.queue,kf(h0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,Ro(9,c0.bind(null,n,r,i,e),void 0,null),Ue===null)throw Error(j(349));Qr&30||u0(n,e,i)}return i}function u0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function c0(t,e,n,r){e.value=n,e.getSnapshot=r,d0(e)&&f0(t)}function h0(t,e,n){return n(function(){d0(e)&&f0(t)})}function d0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kt(t,n)}catch{return!0}}function f0(t){var e=Mn(t,1);e!==null&&Ht(e,t,1,-1)}function Dg(t){var e=en();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:t},e.queue=t,t=t.dispatch=jS.bind(null,Ee,t),[e.memoizedState,t]}function Ro(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function p0(){return Mt().memoizedState}function nl(t,e,n,r){var i=en();Ee.flags|=t,i.memoizedState=Ro(1|e,n,void 0,r===void 0?null:r)}function yu(t,e,n,r){var i=Mt();r=r===void 0?null:r;var s=void 0;if(be!==null){var o=be.memoizedState;if(s=o.destroy,r!==null&&Tf(r,o.deps)){i.memoizedState=Ro(e,n,s,r);return}}Ee.flags|=t,i.memoizedState=Ro(1|e,n,s,r)}function Og(t,e){return nl(8390656,8,t,e)}function kf(t,e){return yu(2048,8,t,e)}function m0(t,e){return yu(4,2,t,e)}function g0(t,e){return yu(4,4,t,e)}function y0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function _0(t,e,n){return n=n!=null?n.concat([t]):null,yu(4,4,y0.bind(null,e,t),n)}function Af(){}function v0(t,e){var n=Mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function w0(t,e){var n=Mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function E0(t,e,n){return Qr&21?(Kt(n,e)||(n=Av(),Ee.lanes|=n,Yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mt=!0),t.memoizedState=n)}function FS(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=Kc.transition;Kc.transition={};try{t(!1),e()}finally{ae=n,Kc.transition=r}}function T0(){return Mt().memoizedState}function US(t,e,n){var r=gr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},I0(t))S0(e,n);else if(n=i0(t,e,n,r),n!==null){var i=ct();Ht(n,t,r,i),k0(n,e,r)}}function jS(t,e,n){var r=gr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(I0(t))S0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Kt(l,o)){var u=e.interleaved;u===null?(i.next=i,yf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=i0(t,e,i,r),n!==null&&(i=ct(),Ht(n,t,r,i),k0(n,e,r))}}function I0(t){var e=t.alternate;return t===Ee||e!==null&&e===Ee}function S0(t,e){no=Ol=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function k0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,nf(t,n)}}var bl={readContext:Lt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},zS={readContext:Lt,useCallback:function(t,e){return en().memoizedState=[t,e===void 0?null:e],t},useContext:Lt,useEffect:Og,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nl(4194308,4,y0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return nl(4,2,t,e)},useMemo:function(t,e){var n=en();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=en();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=US.bind(null,Ee,t),[r.memoizedState,t]},useRef:function(t){var e=en();return t={current:t},e.memoizedState=t},useState:Dg,useDebugValue:Af,useDeferredValue:function(t){return en().memoizedState=t},useTransition:function(){var t=Dg(!1),e=t[0];return t=FS.bind(null,t[1]),en().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ee,i=en();if(ye){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),Ue===null)throw Error(j(349));Qr&30||u0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Og(h0.bind(null,r,s,t),[t]),r.flags|=2048,Ro(9,c0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=en(),e=Ue.identifierPrefix;if(ye){var n=Rn,r=An;n=(r&~(1<<32-Wt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ko++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=MS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},BS={readContext:Lt,useCallback:v0,useContext:Lt,useEffect:kf,useImperativeHandle:_0,useInsertionEffect:m0,useLayoutEffect:g0,useMemo:w0,useReducer:Gc,useRef:p0,useState:function(){return Gc(Ao)},useDebugValue:Af,useDeferredValue:function(t){var e=Mt();return E0(e,be.memoizedState,t)},useTransition:function(){var t=Gc(Ao)[0],e=Mt().memoizedState;return[t,e]},useMutableSource:a0,useSyncExternalStore:l0,useId:T0,unstable_isNewReconciler:!1},$S={readContext:Lt,useCallback:v0,useContext:Lt,useEffect:kf,useImperativeHandle:_0,useInsertionEffect:m0,useLayoutEffect:g0,useMemo:w0,useReducer:Qc,useRef:p0,useState:function(){return Qc(Ao)},useDebugValue:Af,useDeferredValue:function(t){var e=Mt();return be===null?e.memoizedState=t:E0(e,be.memoizedState,t)},useTransition:function(){var t=Qc(Ao)[0],e=Mt().memoizedState;return[t,e]},useMutableSource:a0,useSyncExternalStore:l0,useId:T0,unstable_isNewReconciler:!1};function zt(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Jh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _u={isMounted:function(t){return(t=t._reactInternals)?oi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ct(),i=gr(t),s=Nn(r,i);s.payload=e,n!=null&&(s.callback=n),e=pr(t,s,i),e!==null&&(Ht(e,t,i,r),el(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ct(),i=gr(t),s=Nn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=pr(t,s,i),e!==null&&(Ht(e,t,i,r),el(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ct(),r=gr(t),i=Nn(n,r);i.tag=2,e!=null&&(i.callback=e),e=pr(t,i,r),e!==null&&(Ht(e,t,r,n),el(e,t,r))}};function bg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!vo(n,r)||!vo(i,s):!0}function A0(t,e,n){var r=!1,i=Tr,s=e.contextType;return typeof s=="object"&&s!==null?s=Lt(s):(i=yt(e)?Kr:st.current,r=e.contextTypes,s=(r=r!=null)?Wi(t,i):Tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_u,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Vg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&_u.enqueueReplaceState(e,e.state,null)}function Zh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},_f(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Lt(s):(s=yt(e)?Kr:st.current,i.context=Wi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Jh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&_u.enqueueReplaceState(i,i.state,null),Nl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Qi(t,e){try{var n="",r=e;do n+=y1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Yc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ed(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var qS=typeof WeakMap=="function"?WeakMap:Map;function R0(t,e,n){n=Nn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ll||(Ll=!0,cd=r),ed(t,e)},n}function C0(t,e,n){n=Nn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ed(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ed(t,e),typeof r!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Lg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new qS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ik.bind(null,t,e,n),e.then(t,t))}function Mg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Fg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Nn(-1,1),e.tag=2,pr(n,e,1))),n.lanes|=1),t)}var WS=qn.ReactCurrentOwner,mt=!1;function ut(t,e,n,r){e.child=t===null?r0(e,null,n,r):Ki(e,t.child,n,r)}function Ug(t,e,n,r,i){n=n.render;var s=e.ref;return Fi(e,i),r=If(t,e,n,r,s,i),n=Sf(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fn(t,e,i)):(ye&&n&&hf(e),e.flags|=1,ut(t,e,r,i),e.child)}function jg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!bf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,P0(t,e,s,r,i)):(t=ol(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:vo,n(o,r)&&t.ref===e.ref)return Fn(t,e,i)}return e.flags|=1,t=yr(s,r),t.ref=e.ref,t.return=e,e.child=t}function P0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(vo(s,r)&&t.ref===e.ref)if(mt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(mt=!0);else return e.lanes=t.lanes,Fn(t,e,i)}return td(t,e,n,r,i)}function x0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Di,Tt),Tt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(Di,Tt),Tt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(Di,Tt),Tt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(Di,Tt),Tt|=r;return ut(t,e,i,n),e.child}function N0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function td(t,e,n,r,i){var s=yt(n)?Kr:st.current;return s=Wi(e,s),Fi(e,i),n=If(t,e,n,r,s,i),r=Sf(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fn(t,e,i)):(ye&&r&&hf(e),e.flags|=1,ut(t,e,n,i),e.child)}function zg(t,e,n,r,i){if(yt(n)){var s=!0;Al(e)}else s=!1;if(Fi(e,i),e.stateNode===null)rl(t,e),A0(e,n,r),Zh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Lt(c):(c=yt(n)?Kr:st.current,c=Wi(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Vg(e,o,r,c),Zn=!1;var m=e.memoizedState;o.state=m,Nl(e,r,o,i),u=e.memoizedState,l!==r||m!==u||gt.current||Zn?(typeof d=="function"&&(Jh(e,n,d,r),u=e.memoizedState),(l=Zn||bg(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,s0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:zt(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Lt(u):(u=yt(n)?Kr:st.current,u=Wi(e,u));var S=n.getDerivedStateFromProps;(d=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Vg(e,o,r,u),Zn=!1,m=e.memoizedState,o.state=m,Nl(e,r,o,i);var R=e.memoizedState;l!==p||m!==R||gt.current||Zn?(typeof S=="function"&&(Jh(e,n,S,r),R=e.memoizedState),(c=Zn||bg(e,n,c,r,m,R,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return nd(t,e,n,r,s,i)}function nd(t,e,n,r,i,s){N0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ag(e,n,!1),Fn(t,e,s);r=e.stateNode,WS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ki(e,t.child,null,s),e.child=Ki(e,null,l,s)):ut(t,e,l,s),e.memoizedState=r.state,i&&Ag(e,n,!0),e.child}function D0(t){var e=t.stateNode;e.pendingContext?kg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&kg(t,e.context,!1),vf(t,e.containerInfo)}function Bg(t,e,n,r,i){return Hi(),ff(i),e.flags|=256,ut(t,e,n,r),e.child}var rd={dehydrated:null,treeContext:null,retryLane:0};function id(t){return{baseLanes:t,cachePool:null,transitions:null}}function O0(t,e,n){var r=e.pendingProps,i=we.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(we,i&1),t===null)return Yh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Eu(o,r,0,null),t=Wr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=id(n),e.memoizedState=rd,t):Rf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return HS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=yr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=yr(l,s):(s=Wr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?id(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=rd,r}return s=t.child,t=s.sibling,r=yr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Rf(t,e){return e=Eu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ua(t,e,n,r){return r!==null&&ff(r),Ki(e,t.child,null,n),t=Rf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function HS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Yc(Error(j(422))),Ua(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Eu({mode:"visible",children:r.children},i,0,null),s=Wr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ki(e,t.child,null,o),e.child.memoizedState=id(o),e.memoizedState=rd,s);if(!(e.mode&1))return Ua(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(j(419)),r=Yc(s,r,void 0),Ua(t,e,o,r)}if(l=(o&t.childLanes)!==0,mt||l){if(r=Ue,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Mn(t,i),Ht(r,t,i,-1))}return Of(),r=Yc(Error(j(421))),Ua(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=sk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,It=fr(i.nextSibling),kt=e,ye=!0,$t=null,t!==null&&(Nt[Dt++]=An,Nt[Dt++]=Rn,Nt[Dt++]=Gr,An=t.id,Rn=t.overflow,Gr=e),e=Rf(e,r.children),e.flags|=4096,e)}function $g(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Xh(t.return,e,n)}function Xc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function b0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ut(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$g(t,n,e);else if(t.tag===19)$g(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(we,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Dl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Xc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Dl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Xc(e,!0,n,null,s);break;case"together":Xc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function rl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=yr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=yr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function KS(t,e,n){switch(e.tag){case 3:D0(e),Hi();break;case 5:o0(e);break;case 1:yt(e.type)&&Al(e);break;case 4:vf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(Pl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?O0(t,e,n):(de(we,we.current&1),t=Fn(t,e,n),t!==null?t.sibling:null);de(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return b0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,x0(t,e,n)}return Fn(t,e,n)}var V0,sd,L0,M0;V0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sd=function(){};L0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,zr(sn.current);var s=null;switch(n){case"input":i=Rh(t,i),r=Rh(t,r),s=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),s=[];break;case"textarea":i=xh(t,i),r=xh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Sl)}Dh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ho.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ho.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&pe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};M0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ms(t,e){if(!ye)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ze(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function GS(t,e,n){var r=e.pendingProps;switch(df(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(e),null;case 1:return yt(e.type)&&kl(),Ze(e),null;case 3:return r=e.stateNode,Gi(),ge(gt),ge(st),Ef(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ma(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$t!==null&&(fd($t),$t=null))),sd(t,e),Ze(e),null;case 5:wf(e);var i=zr(So.current);if(n=e.type,t!==null&&e.stateNode!=null)L0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return Ze(e),null}if(t=zr(sn.current),Ma(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[tn]=e,r[To]=s,t=(e.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(i=0;i<qs.length;i++)pe(qs[i],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":Jm(r,s),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},pe("invalid",r);break;case"textarea":eg(r,s),pe("invalid",r)}Dh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&La(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&La(r.textContent,l,t),i=["children",""+l]):ho.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&pe("scroll",r)}switch(n){case"input":Ca(r),Zm(r,s,!0);break;case"textarea":Ca(r),tg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Sl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[tn]=e,t[To]=r,V0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Oh(n,r),n){case"dialog":pe("cancel",t),pe("close",t),i=r;break;case"iframe":case"object":case"embed":pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<qs.length;i++)pe(qs[i],t);i=r;break;case"source":pe("error",t),i=r;break;case"img":case"image":case"link":pe("error",t),pe("load",t),i=r;break;case"details":pe("toggle",t),i=r;break;case"input":Jm(t,r),i=Rh(t,r),pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),pe("invalid",t);break;case"textarea":eg(t,r),i=xh(t,r),pe("invalid",t);break;default:i=r}Dh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?pv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&dv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&fo(t,u):typeof u=="number"&&fo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ho.hasOwnProperty(s)?u!=null&&s==="onScroll"&&pe("scroll",t):u!=null&&Yd(t,s,u,o))}switch(n){case"input":Ca(t),Zm(t,r,!1);break;case"textarea":Ca(t),tg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Er(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?bi(t,!!r.multiple,s,!1):r.defaultValue!=null&&bi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Sl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ze(e),null;case 6:if(t&&e.stateNode!=null)M0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=zr(So.current),zr(sn.current),Ma(e)){if(r=e.stateNode,n=e.memoizedProps,r[tn]=e,(s=r.nodeValue!==n)&&(t=kt,t!==null))switch(t.tag){case 3:La(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&La(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tn]=e,e.stateNode=r}return Ze(e),null;case 13:if(ge(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ye&&It!==null&&e.mode&1&&!(e.flags&128))t0(),Hi(),e.flags|=98560,s=!1;else if(s=Ma(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[tn]=e}else Hi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ze(e),s=!1}else $t!==null&&(fd($t),$t=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?Ve===0&&(Ve=3):Of())),e.updateQueue!==null&&(e.flags|=4),Ze(e),null);case 4:return Gi(),sd(t,e),t===null&&wo(e.stateNode.containerInfo),Ze(e),null;case 10:return gf(e.type._context),Ze(e),null;case 17:return yt(e.type)&&kl(),Ze(e),null;case 19:if(ge(we),s=e.memoizedState,s===null)return Ze(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ms(s,!1);else{if(Ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Dl(t),o!==null){for(e.flags|=128,Ms(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(we,we.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pe()>Yi&&(e.flags|=128,r=!0,Ms(s,!1),e.lanes=4194304)}else{if(!r)if(t=Dl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ms(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ye)return Ze(e),null}else 2*Pe()-s.renderingStartTime>Yi&&n!==1073741824&&(e.flags|=128,r=!0,Ms(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pe(),e.sibling=null,n=we.current,de(we,r?n&1|2:n&1),e):(Ze(e),null);case 22:case 23:return Df(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Tt&1073741824&&(Ze(e),e.subtreeFlags&6&&(e.flags|=8192)):Ze(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function QS(t,e){switch(df(e),e.tag){case 1:return yt(e.type)&&kl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gi(),ge(gt),ge(st),Ef(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wf(e),null;case 13:if(ge(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));Hi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(we),null;case 4:return Gi(),null;case 10:return gf(e.type._context),null;case 22:case 23:return Df(),null;case 24:return null;default:return null}}var ja=!1,nt=!1,YS=typeof WeakSet=="function"?WeakSet:Set,$=null;function Ni(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function od(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var qg=!1;function XS(t,e){if($h=El,t=Bv(),cf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var S;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(S=p.firstChild)!==null;)m=p,p=S;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(S=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(qh={focusedElem:t,selectionRange:n},El=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var x=R.memoizedProps,P=R.memoizedState,w=e.stateNode,_=w.getSnapshotBeforeUpdate(e.elementType===e.type?x:zt(e.type,x),P);w.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(N){Ae(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return R=qg,qg=!1,R}function ro(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&od(e,n,s)}i=i.next}while(i!==r)}}function vu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ad(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function F0(t){var e=t.alternate;e!==null&&(t.alternate=null,F0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[tn],delete e[To],delete e[Kh],delete e[OS],delete e[bS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function U0(t){return t.tag===5||t.tag===3||t.tag===4}function Wg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||U0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ld(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sl));else if(r!==4&&(t=t.child,t!==null))for(ld(t,e,n),t=t.sibling;t!==null;)ld(t,e,n),t=t.sibling}function ud(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ud(t,e,n),t=t.sibling;t!==null;)ud(t,e,n),t=t.sibling}var ze=null,Bt=!1;function Yn(t,e,n){for(n=n.child;n!==null;)j0(t,e,n),n=n.sibling}function j0(t,e,n){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(hu,n)}catch{}switch(n.tag){case 5:nt||Ni(n,e);case 6:var r=ze,i=Bt;ze=null,Yn(t,e,n),ze=r,Bt=i,ze!==null&&(Bt?(t=ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(Bt?(t=ze,n=n.stateNode,t.nodeType===8?qc(t.parentNode,n):t.nodeType===1&&qc(t,n),yo(t)):qc(ze,n.stateNode));break;case 4:r=ze,i=Bt,ze=n.stateNode.containerInfo,Bt=!0,Yn(t,e,n),ze=r,Bt=i;break;case 0:case 11:case 14:case 15:if(!nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&od(n,e,o),i=i.next}while(i!==r)}Yn(t,e,n);break;case 1:if(!nt&&(Ni(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ae(n,e,l)}Yn(t,e,n);break;case 21:Yn(t,e,n);break;case 22:n.mode&1?(nt=(r=nt)||n.memoizedState!==null,Yn(t,e,n),nt=r):Yn(t,e,n);break;default:Yn(t,e,n)}}function Hg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new YS),e.forEach(function(r){var i=ok.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function jt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ze=l.stateNode,Bt=!1;break e;case 3:ze=l.stateNode.containerInfo,Bt=!0;break e;case 4:ze=l.stateNode.containerInfo,Bt=!0;break e}l=l.return}if(ze===null)throw Error(j(160));j0(s,o,i),ze=null,Bt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ae(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)z0(e,t),e=e.sibling}function z0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jt(e,t),Zt(t),r&4){try{ro(3,t,t.return),vu(3,t)}catch(x){Ae(t,t.return,x)}try{ro(5,t,t.return)}catch(x){Ae(t,t.return,x)}}break;case 1:jt(e,t),Zt(t),r&512&&n!==null&&Ni(n,n.return);break;case 5:if(jt(e,t),Zt(t),r&512&&n!==null&&Ni(n,n.return),t.flags&32){var i=t.stateNode;try{fo(i,"")}catch(x){Ae(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&uv(i,s),Oh(l,o);var c=Oh(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?pv(i,p):d==="dangerouslySetInnerHTML"?dv(i,p):d==="children"?fo(i,p):Yd(i,d,p,c)}switch(l){case"input":Ch(i,s);break;case"textarea":cv(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var S=s.value;S!=null?bi(i,!!s.multiple,S,!1):m!==!!s.multiple&&(s.defaultValue!=null?bi(i,!!s.multiple,s.defaultValue,!0):bi(i,!!s.multiple,s.multiple?[]:"",!1))}i[To]=s}catch(x){Ae(t,t.return,x)}}break;case 6:if(jt(e,t),Zt(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){Ae(t,t.return,x)}}break;case 3:if(jt(e,t),Zt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{yo(e.containerInfo)}catch(x){Ae(t,t.return,x)}break;case 4:jt(e,t),Zt(t);break;case 13:jt(e,t),Zt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(xf=Pe())),r&4&&Hg(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(nt=(c=nt)||d,jt(e,t),nt=c):jt(e,t),Zt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for($=t,d=t.child;d!==null;){for(p=$=d;$!==null;){switch(m=$,S=m.child,m.tag){case 0:case 11:case 14:case 15:ro(4,m,m.return);break;case 1:Ni(m,m.return);var R=m.stateNode;if(typeof R.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(x){Ae(r,n,x)}}break;case 5:Ni(m,m.return);break;case 22:if(m.memoizedState!==null){Gg(p);continue}}S!==null?(S.return=m,$=S):Gg(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=fv("display",o))}catch(x){Ae(t,t.return,x)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(x){Ae(t,t.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:jt(e,t),Zt(t),r&4&&Hg(t);break;case 21:break;default:jt(e,t),Zt(t)}}function Zt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(U0(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(fo(i,""),r.flags&=-33);var s=Wg(t);ud(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Wg(t);ld(t,l,o);break;default:throw Error(j(161))}}catch(u){Ae(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function JS(t,e,n){$=t,B0(t)}function B0(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ja;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||nt;l=ja;var c=nt;if(ja=o,(nt=u)&&!c)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?Qg(i):u!==null?(u.return=o,$=u):Qg(i);for(;s!==null;)$=s,B0(s),s=s.sibling;$=i,ja=l,nt=c}Kg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Kg(t)}}function Kg(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nt||vu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!nt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:zt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ng(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ng(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&yo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}nt||e.flags&512&&ad(e)}catch(m){Ae(e,e.return,m)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Gg(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Qg(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{vu(4,e)}catch(u){Ae(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ae(e,i,u)}}var s=e.return;try{ad(e)}catch(u){Ae(e,s,u)}break;case 5:var o=e.return;try{ad(e)}catch(u){Ae(e,o,u)}}}catch(u){Ae(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var ZS=Math.ceil,Vl=qn.ReactCurrentDispatcher,Cf=qn.ReactCurrentOwner,bt=qn.ReactCurrentBatchConfig,re=0,Ue=null,De=null,We=0,Tt=0,Di=Rr(0),Ve=0,Co=null,Yr=0,wu=0,Pf=0,io=null,ft=null,xf=0,Yi=1/0,Tn=null,Ll=!1,cd=null,mr=null,za=!1,ar=null,Ml=0,so=0,hd=null,il=-1,sl=0;function ct(){return re&6?Pe():il!==-1?il:il=Pe()}function gr(t){return t.mode&1?re&2&&We!==0?We&-We:LS.transition!==null?(sl===0&&(sl=Av()),sl):(t=ae,t!==0||(t=window.event,t=t===void 0?16:Ov(t.type)),t):1}function Ht(t,e,n,r){if(50<so)throw so=0,hd=null,Error(j(185));qo(t,n,r),(!(re&2)||t!==Ue)&&(t===Ue&&(!(re&2)&&(wu|=n),Ve===4&&tr(t,We)),_t(t,r),n===1&&re===0&&!(e.mode&1)&&(Yi=Pe()+500,gu&&Cr()))}function _t(t,e){var n=t.callbackNode;L1(t,e);var r=wl(t,t===Ue?We:0);if(r===0)n!==null&&ig(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ig(n),e===1)t.tag===0?VS(Yg.bind(null,t)):Jv(Yg.bind(null,t)),NS(function(){!(re&6)&&Cr()}),n=null;else{switch(Rv(r)){case 1:n=tf;break;case 4:n=Sv;break;case 16:n=vl;break;case 536870912:n=kv;break;default:n=vl}n=Y0(n,$0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $0(t,e){if(il=-1,sl=0,re&6)throw Error(j(327));var n=t.callbackNode;if(Ui()&&t.callbackNode!==n)return null;var r=wl(t,t===Ue?We:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Fl(t,r);else{e=r;var i=re;re|=2;var s=W0();(Ue!==t||We!==e)&&(Tn=null,Yi=Pe()+500,qr(t,e));do try{nk();break}catch(l){q0(t,l)}while(!0);mf(),Vl.current=s,re=i,De!==null?e=0:(Ue=null,We=0,e=Ve)}if(e!==0){if(e===2&&(i=Fh(t),i!==0&&(r=i,e=dd(t,i))),e===1)throw n=Co,qr(t,0),tr(t,r),_t(t,Pe()),n;if(e===6)tr(t,r);else{if(i=t.current.alternate,!(r&30)&&!ek(i)&&(e=Fl(t,r),e===2&&(s=Fh(t),s!==0&&(r=s,e=dd(t,s))),e===1))throw n=Co,qr(t,0),tr(t,r),_t(t,Pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Mr(t,ft,Tn);break;case 3:if(tr(t,r),(r&130023424)===r&&(e=xf+500-Pe(),10<e)){if(wl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ct(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Hh(Mr.bind(null,t,ft,Tn),e);break}Mr(t,ft,Tn);break;case 4:if(tr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Wt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ZS(r/1960))-r,10<r){t.timeoutHandle=Hh(Mr.bind(null,t,ft,Tn),r);break}Mr(t,ft,Tn);break;case 5:Mr(t,ft,Tn);break;default:throw Error(j(329))}}}return _t(t,Pe()),t.callbackNode===n?$0.bind(null,t):null}function dd(t,e){var n=io;return t.current.memoizedState.isDehydrated&&(qr(t,e).flags|=256),t=Fl(t,e),t!==2&&(e=ft,ft=n,e!==null&&fd(e)),t}function fd(t){ft===null?ft=t:ft.push.apply(ft,t)}function ek(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Kt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function tr(t,e){for(e&=~Pf,e&=~wu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wt(e),r=1<<n;t[n]=-1,e&=~r}}function Yg(t){if(re&6)throw Error(j(327));Ui();var e=wl(t,0);if(!(e&1))return _t(t,Pe()),null;var n=Fl(t,e);if(t.tag!==0&&n===2){var r=Fh(t);r!==0&&(e=r,n=dd(t,r))}if(n===1)throw n=Co,qr(t,0),tr(t,e),_t(t,Pe()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mr(t,ft,Tn),_t(t,Pe()),null}function Nf(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(Yi=Pe()+500,gu&&Cr())}}function Xr(t){ar!==null&&ar.tag===0&&!(re&6)&&Ui();var e=re;re|=1;var n=bt.transition,r=ae;try{if(bt.transition=null,ae=1,t)return t()}finally{ae=r,bt.transition=n,re=e,!(re&6)&&Cr()}}function Df(){Tt=Di.current,ge(Di)}function qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,xS(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(df(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&kl();break;case 3:Gi(),ge(gt),ge(st),Ef();break;case 5:wf(r);break;case 4:Gi();break;case 13:ge(we);break;case 19:ge(we);break;case 10:gf(r.type._context);break;case 22:case 23:Df()}n=n.return}if(Ue=t,De=t=yr(t.current,null),We=Tt=e,Ve=0,Co=null,Pf=wu=Yr=0,ft=io=null,jr!==null){for(e=0;e<jr.length;e++)if(n=jr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}jr=null}return t}function q0(t,e){do{var n=De;try{if(mf(),tl.current=bl,Ol){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ol=!1}if(Qr=0,Fe=be=Ee=null,no=!1,ko=0,Cf.current=null,n===null||n.return===null){Ve=1,Co=e,De=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=We,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var S=Mg(o);if(S!==null){S.flags&=-257,Fg(S,o,l,s,e),S.mode&1&&Lg(s,c,e),e=S,u=c;var R=e.updateQueue;if(R===null){var x=new Set;x.add(u),e.updateQueue=x}else R.add(u);break e}else{if(!(e&1)){Lg(s,c,e),Of();break e}u=Error(j(426))}}else if(ye&&l.mode&1){var P=Mg(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Fg(P,o,l,s,e),ff(Qi(u,l));break e}}s=u=Qi(u,l),Ve!==4&&(Ve=2),io===null?io=[s]:io.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=R0(s,u,e);xg(s,w);break e;case 1:l=u;var _=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(mr===null||!mr.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var N=C0(s,l,e);xg(s,N);break e}}s=s.return}while(s!==null)}K0(n)}catch(F){e=F,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function W0(){var t=Vl.current;return Vl.current=bl,t===null?bl:t}function Of(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Ue===null||!(Yr&268435455)&&!(wu&268435455)||tr(Ue,We)}function Fl(t,e){var n=re;re|=2;var r=W0();(Ue!==t||We!==e)&&(Tn=null,qr(t,e));do try{tk();break}catch(i){q0(t,i)}while(!0);if(mf(),re=n,Vl.current=r,De!==null)throw Error(j(261));return Ue=null,We=0,Ve}function tk(){for(;De!==null;)H0(De)}function nk(){for(;De!==null&&!R1();)H0(De)}function H0(t){var e=Q0(t.alternate,t,Tt);t.memoizedProps=t.pendingProps,e===null?K0(t):De=e,Cf.current=null}function K0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=QS(n,e),n!==null){n.flags&=32767,De=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ve=6,De=null;return}}else if(n=GS(n,e,Tt),n!==null){De=n;return}if(e=e.sibling,e!==null){De=e;return}De=e=t}while(e!==null);Ve===0&&(Ve=5)}function Mr(t,e,n){var r=ae,i=bt.transition;try{bt.transition=null,ae=1,rk(t,e,n,r)}finally{bt.transition=i,ae=r}return null}function rk(t,e,n,r){do Ui();while(ar!==null);if(re&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(M1(t,s),t===Ue&&(De=Ue=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||za||(za=!0,Y0(vl,function(){return Ui(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=bt.transition,bt.transition=null;var o=ae;ae=1;var l=re;re|=4,Cf.current=null,XS(t,n),z0(n,t),IS(qh),El=!!$h,qh=$h=null,t.current=n,JS(n),C1(),re=l,ae=o,bt.transition=s}else t.current=n;if(za&&(za=!1,ar=t,Ml=i),s=t.pendingLanes,s===0&&(mr=null),N1(n.stateNode),_t(t,Pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ll)throw Ll=!1,t=cd,cd=null,t;return Ml&1&&t.tag!==0&&Ui(),s=t.pendingLanes,s&1?t===hd?so++:(so=0,hd=t):so=0,Cr(),null}function Ui(){if(ar!==null){var t=Rv(Ml),e=bt.transition,n=ae;try{if(bt.transition=null,ae=16>t?16:t,ar===null)var r=!1;else{if(t=ar,ar=null,Ml=0,re&6)throw Error(j(331));var i=re;for(re|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for($=c;$!==null;){var d=$;switch(d.tag){case 0:case 11:case 15:ro(8,d,s)}var p=d.child;if(p!==null)p.return=d,$=p;else for(;$!==null;){d=$;var m=d.sibling,S=d.return;if(F0(d),d===c){$=null;break}if(m!==null){m.return=S,$=m;break}$=S}}}var R=s.alternate;if(R!==null){var x=R.child;if(x!==null){R.child=null;do{var P=x.sibling;x.sibling=null,x=P}while(x!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ro(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,$=w;break e}$=s.return}}var _=t.current;for($=_;$!==null;){o=$;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,$=I;else e:for(o=_;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:vu(9,l)}}catch(F){Ae(l,l.return,F)}if(l===o){$=null;break e}var N=l.sibling;if(N!==null){N.return=l.return,$=N;break e}$=l.return}}if(re=i,Cr(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(hu,t)}catch{}r=!0}return r}finally{ae=n,bt.transition=e}}return!1}function Xg(t,e,n){e=Qi(n,e),e=R0(t,e,1),t=pr(t,e,1),e=ct(),t!==null&&(qo(t,1,e),_t(t,e))}function Ae(t,e,n){if(t.tag===3)Xg(t,t,n);else for(;e!==null;){if(e.tag===3){Xg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mr===null||!mr.has(r))){t=Qi(n,t),t=C0(e,t,1),e=pr(e,t,1),t=ct(),e!==null&&(qo(e,1,t),_t(e,t));break}}e=e.return}}function ik(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ct(),t.pingedLanes|=t.suspendedLanes&n,Ue===t&&(We&n)===n&&(Ve===4||Ve===3&&(We&130023424)===We&&500>Pe()-xf?qr(t,0):Pf|=n),_t(t,e)}function G0(t,e){e===0&&(t.mode&1?(e=Na,Na<<=1,!(Na&130023424)&&(Na=4194304)):e=1);var n=ct();t=Mn(t,e),t!==null&&(qo(t,e,n),_t(t,n))}function sk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),G0(t,n)}function ok(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),G0(t,n)}var Q0;Q0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gt.current)mt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mt=!1,KS(t,e,n);mt=!!(t.flags&131072)}else mt=!1,ye&&e.flags&1048576&&Zv(e,Cl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;rl(t,e),t=e.pendingProps;var i=Wi(e,st.current);Fi(e,n),i=If(null,e,r,t,i,n);var s=Sf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yt(r)?(s=!0,Al(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_f(e),i.updater=_u,e.stateNode=i,i._reactInternals=e,Zh(e,r,t,n),e=nd(null,e,r,!0,s,n)):(e.tag=0,ye&&s&&hf(e),ut(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(rl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=lk(r),t=zt(r,t),i){case 0:e=td(null,e,r,t,n);break e;case 1:e=zg(null,e,r,t,n);break e;case 11:e=Ug(null,e,r,t,n);break e;case 14:e=jg(null,e,r,zt(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),td(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),zg(t,e,r,i,n);case 3:e:{if(D0(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,s0(t,e),Nl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Qi(Error(j(423)),e),e=Bg(t,e,r,n,i);break e}else if(r!==i){i=Qi(Error(j(424)),e),e=Bg(t,e,r,n,i);break e}else for(It=fr(e.stateNode.containerInfo.firstChild),kt=e,ye=!0,$t=null,n=r0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hi(),r===i){e=Fn(t,e,n);break e}ut(t,e,r,n)}e=e.child}return e;case 5:return o0(e),t===null&&Yh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Wh(r,i)?o=null:s!==null&&Wh(r,s)&&(e.flags|=32),N0(t,e),ut(t,e,o,n),e.child;case 6:return t===null&&Yh(e),null;case 13:return O0(t,e,n);case 4:return vf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ki(e,null,r,n):ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Ug(t,e,r,i,n);case 7:return ut(t,e,e.pendingProps,n),e.child;case 8:return ut(t,e,e.pendingProps.children,n),e.child;case 12:return ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,de(Pl,r._currentValue),r._currentValue=o,s!==null)if(Kt(s.value,o)){if(s.children===i.children&&!gt.current){e=Fn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Nn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Xh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Xh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Fi(e,n),i=Lt(i),r=r(i),e.flags|=1,ut(t,e,r,n),e.child;case 14:return r=e.type,i=zt(r,e.pendingProps),i=zt(r.type,i),jg(t,e,r,i,n);case 15:return P0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),rl(t,e),e.tag=1,yt(r)?(t=!0,Al(e)):t=!1,Fi(e,n),A0(e,r,i),Zh(e,r,i,n),nd(null,e,r,!0,t,n);case 19:return b0(t,e,n);case 22:return x0(t,e,n)}throw Error(j(156,e.tag))};function Y0(t,e){return Iv(t,e)}function ak(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(t,e,n,r){return new ak(t,e,n,r)}function bf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function lk(t){if(typeof t=="function")return bf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Jd)return 11;if(t===Zd)return 14}return 2}function yr(t,e){var n=t.alternate;return n===null?(n=Ot(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ol(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")bf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ti:return Wr(n.children,i,s,e);case Xd:o=8,i|=8;break;case Ih:return t=Ot(12,n,e,i|2),t.elementType=Ih,t.lanes=s,t;case Sh:return t=Ot(13,n,e,i),t.elementType=Sh,t.lanes=s,t;case kh:return t=Ot(19,n,e,i),t.elementType=kh,t.lanes=s,t;case ov:return Eu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case iv:o=10;break e;case sv:o=9;break e;case Jd:o=11;break e;case Zd:o=14;break e;case Jn:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Ot(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Wr(t,e,n,r){return t=Ot(7,t,r,e),t.lanes=n,t}function Eu(t,e,n,r){return t=Ot(22,t,r,e),t.elementType=ov,t.lanes=n,t.stateNode={isHidden:!1},t}function Jc(t,e,n){return t=Ot(6,t,null,e),t.lanes=n,t}function Zc(t,e,n){return e=Ot(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function uk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oc(0),this.expirationTimes=Oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vf(t,e,n,r,i,s,o,l,u){return t=new uk(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ot(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_f(s),t}function ck(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ei,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function X0(t){if(!t)return Tr;t=t._reactInternals;e:{if(oi(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(yt(n))return Xv(t,n,e)}return e}function J0(t,e,n,r,i,s,o,l,u){return t=Vf(n,r,!0,t,i,s,o,l,u),t.context=X0(null),n=t.current,r=ct(),i=gr(n),s=Nn(r,i),s.callback=e??null,pr(n,s,i),t.current.lanes=i,qo(t,i,r),_t(t,r),t}function Tu(t,e,n,r){var i=e.current,s=ct(),o=gr(i);return n=X0(n),e.context===null?e.context=n:e.pendingContext=n,e=Nn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=pr(i,e,o),t!==null&&(Ht(t,i,o,s),el(t,i,o)),o}function Ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Jg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Lf(t,e){Jg(t,e),(t=t.alternate)&&Jg(t,e)}function hk(){return null}var Z0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mf(t){this._internalRoot=t}Iu.prototype.render=Mf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));Tu(t,e,null,null)};Iu.prototype.unmount=Mf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xr(function(){Tu(null,t,null,null)}),e[Ln]=null}};function Iu(t){this._internalRoot=t}Iu.prototype.unstable_scheduleHydration=function(t){if(t){var e=xv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<er.length&&e!==0&&e<er[n].priority;n++);er.splice(n,0,t),n===0&&Dv(t)}};function Ff(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Zg(){}function dk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Ul(o);s.call(c)}}var o=J0(e,r,t,0,null,!1,!1,"",Zg);return t._reactRootContainer=o,t[Ln]=o.current,wo(t.nodeType===8?t.parentNode:t),Xr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Ul(u);l.call(c)}}var u=Vf(t,0,!1,null,null,!1,!1,"",Zg);return t._reactRootContainer=u,t[Ln]=u.current,wo(t.nodeType===8?t.parentNode:t),Xr(function(){Tu(e,u,n,r)}),u}function ku(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Ul(o);l.call(u)}}Tu(e,o,t,i)}else o=dk(n,e,t,i,r);return Ul(o)}Cv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=$s(e.pendingLanes);n!==0&&(nf(e,n|1),_t(e,Pe()),!(re&6)&&(Yi=Pe()+500,Cr()))}break;case 13:Xr(function(){var r=Mn(t,1);if(r!==null){var i=ct();Ht(r,t,1,i)}}),Lf(t,1)}};rf=function(t){if(t.tag===13){var e=Mn(t,134217728);if(e!==null){var n=ct();Ht(e,t,134217728,n)}Lf(t,134217728)}};Pv=function(t){if(t.tag===13){var e=gr(t),n=Mn(t,e);if(n!==null){var r=ct();Ht(n,t,e,r)}Lf(t,e)}};xv=function(){return ae};Nv=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};Vh=function(t,e,n){switch(e){case"input":if(Ch(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=mu(r);if(!i)throw Error(j(90));lv(r),Ch(r,i)}}}break;case"textarea":cv(t,n);break;case"select":e=n.value,e!=null&&bi(t,!!n.multiple,e,!1)}};yv=Nf;_v=Xr;var fk={usingClientEntryPoint:!1,Events:[Ho,Ai,mu,mv,gv,Nf]},Fs={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pk={bundleType:Fs.bundleType,version:Fs.version,rendererPackageName:Fs.rendererPackageName,rendererConfig:Fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ev(t),t===null?null:t.stateNode},findFiberByHostInstance:Fs.findFiberByHostInstance||hk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ba=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ba.isDisabled&&Ba.supportsFiber)try{hu=Ba.inject(pk),rn=Ba}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fk;Ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ff(e))throw Error(j(200));return ck(t,e,null,n)};Ct.createRoot=function(t,e){if(!Ff(t))throw Error(j(299));var n=!1,r="",i=Z0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Vf(t,1,!1,null,null,n,!1,r,i),t[Ln]=e.current,wo(t.nodeType===8?t.parentNode:t),new Mf(e)};Ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=Ev(e),t=t===null?null:t.stateNode,t};Ct.flushSync=function(t){return Xr(t)};Ct.hydrate=function(t,e,n){if(!Su(e))throw Error(j(200));return ku(null,t,e,!0,n)};Ct.hydrateRoot=function(t,e,n){if(!Ff(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Z0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=J0(e,null,t,1,n??null,i,!1,s,o),t[Ln]=e.current,wo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Iu(e)};Ct.render=function(t,e,n){if(!Su(e))throw Error(j(200));return ku(null,t,e,!1,n)};Ct.unmountComponentAtNode=function(t){if(!Su(t))throw Error(j(40));return t._reactRootContainer?(Xr(function(){ku(null,null,t,!1,function(){t._reactRootContainer=null,t[Ln]=null})}),!0):!1};Ct.unstable_batchedUpdates=Nf;Ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Su(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return ku(t,e,n,!1,r)};Ct.version="18.3.1-next-f1338f8080-20240426";function ew(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ew)}catch(t){console.error(t)}}ew(),ev.exports=Ct;var mk=ev.exports,ey=mk;Eh.createRoot=ey.createRoot,Eh.hydrateRoot=ey.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Po(){return Po=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Po.apply(null,arguments)}var lr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(lr||(lr={}));const ty="popstate";function gk(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return pd("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:jl(i)}return _k(e,n,null,t)}function Te(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function tw(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function yk(){return Math.random().toString(36).substr(2,8)}function ny(t,e){return{usr:t.state,key:t.key,idx:e}}function pd(t,e,n,r){return n===void 0&&(n=null),Po({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?cs(e):e,{state:n,key:e&&e.key||r||yk()})}function jl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function cs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function _k(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=lr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Po({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=lr.Pop;let P=d(),w=P==null?null:P-c;c=P,u&&u({action:l,location:x.location,delta:w})}function m(P,w){l=lr.Push;let _=pd(x.location,P,w);c=d()+1;let I=ny(_,c),N=x.createHref(_);try{o.pushState(I,"",N)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(N)}s&&u&&u({action:l,location:x.location,delta:1})}function S(P,w){l=lr.Replace;let _=pd(x.location,P,w);c=d();let I=ny(_,c),N=x.createHref(_);o.replaceState(I,"",N),s&&u&&u({action:l,location:x.location,delta:0})}function R(P){let w=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof P=="string"?P:jl(P);return _=_.replace(/ $/,"%20"),Te(w,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,w)}let x={get action(){return l},get location(){return t(i,o)},listen(P){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(ty,p),u=P,()=>{i.removeEventListener(ty,p),u=null}},createHref(P){return e(i,P)},createURL:R,encodeLocation(P){let w=R(P);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:m,replace:S,go(P){return o.go(P)}};return x}var ry;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ry||(ry={}));function vk(t,e,n){return n===void 0&&(n="/"),wk(t,e,n)}function wk(t,e,n,r){let i=typeof e=="string"?cs(e):e,s=Xi(i.pathname||"/",n);if(s==null)return null;let o=nw(t);Ek(o);let l=null,u=Dk(s);for(let c=0;l==null&&c<o.length;++c)l=xk(o[c],u);return l}function nw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Te(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=_r([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Te(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),nw(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:Ck(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of rw(s.path))i(s,o,u)}),e}function rw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=rw(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function Ek(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Pk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Tk=/^:[\w-]+$/,Ik=3,Sk=2,kk=1,Ak=10,Rk=-2,iy=t=>t==="*";function Ck(t,e){let n=t.split("/"),r=n.length;return n.some(iy)&&(r+=Rk),e&&(r+=Sk),n.filter(i=>!iy(i)).reduce((i,s)=>i+(Tk.test(s)?Ik:s===""?kk:Ak),r)}function Pk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function xk(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=md({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:_r([s,p.pathname]),pathnameBase:Vk(_r([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=_r([s,p.pathnameBase]))}return o}function md(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Nk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:S}=d;if(m==="*"){let x=l[p]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const R=l[p];return S&&!R?c[m]=void 0:c[m]=(R||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function Nk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),tw(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Dk(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return tw(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Xi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Ok(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?cs(t):t,s;return n?(n=iw(n),n.startsWith("/")?s=sy(n.substring(1),"/"):s=sy(n,e)):s=e,{pathname:s,search:Lk(r),hash:Mk(i)}}function sy(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function eh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function bk(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Uf(t,e){let n=bk(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function jf(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=cs(t):(i=Po({},t),Te(!i.pathname||!i.pathname.includes("?"),eh("?","pathname","search",i)),Te(!i.pathname||!i.pathname.includes("#"),eh("#","pathname","hash",i)),Te(!i.search||!i.search.includes("#"),eh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=Ok(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const iw=t=>t.replace(/\/\/+/g,"/"),_r=t=>iw(t.join("/")),Vk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Lk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Mk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Fk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const sw=["post","put","patch","delete"];new Set(sw);const Uk=["get",...sw];new Set(Uk);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xo(){return xo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xo.apply(null,arguments)}const Au=b.createContext(null),ow=b.createContext(null),Wn=b.createContext(null),Ru=b.createContext(null),dn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),aw=b.createContext(null);function jk(t,e){let{relative:n}=e===void 0?{}:e;hs()||Te(!1);let{basename:r,navigator:i}=b.useContext(Wn),{hash:s,pathname:o,search:l}=Pu(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:_r([r,o])),i.createHref({pathname:u,search:l,hash:s})}function hs(){return b.useContext(Ru)!=null}function Xt(){return hs()||Te(!1),b.useContext(Ru).location}function lw(t){b.useContext(Wn).static||b.useLayoutEffect(t)}function Cu(){let{isDataRoute:t}=b.useContext(dn);return t?tA():zk()}function zk(){hs()||Te(!1);let t=b.useContext(Au),{basename:e,future:n,navigator:r}=b.useContext(Wn),{matches:i}=b.useContext(dn),{pathname:s}=Xt(),o=JSON.stringify(Uf(i,n.v7_relativeSplatPath)),l=b.useRef(!1);return lw(()=>{l.current=!0}),b.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=jf(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:_r([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}const Bk=b.createContext(null);function $k(t){let e=b.useContext(dn).outlet;return e&&b.createElement(Bk.Provider,{value:t},e)}function EV(){let{matches:t}=b.useContext(dn),e=t[t.length-1];return e?e.params:{}}function Pu(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=b.useContext(Wn),{matches:i}=b.useContext(dn),{pathname:s}=Xt(),o=JSON.stringify(Uf(i,r.v7_relativeSplatPath));return b.useMemo(()=>jf(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function qk(t,e){return Wk(t,e)}function Wk(t,e,n,r){hs()||Te(!1);let{navigator:i}=b.useContext(Wn),{matches:s}=b.useContext(dn),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Xt(),d;if(e){var p;let P=typeof e=="string"?cs(e):e;u==="/"||(p=P.pathname)!=null&&p.startsWith(u)||Te(!1),d=P}else d=c;let m=d.pathname||"/",S=m;if(u!=="/"){let P=u.replace(/^\//,"").split("/");S="/"+m.replace(/^\//,"").split("/").slice(P.length).join("/")}let R=vk(t,{pathname:S}),x=Yk(R&&R.map(P=>Object.assign({},P,{params:Object.assign({},l,P.params),pathname:_r([u,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?u:_r([u,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),s,n,r);return e&&x?b.createElement(Ru.Provider,{value:{location:xo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:lr.Pop}},x):x}function Hk(){let t=eA(),e=Fk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),n?b.createElement("pre",{style:i},n):null,null)}const Kk=b.createElement(Hk,null);class Gk extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?b.createElement(dn.Provider,{value:this.props.routeContext},b.createElement(aw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Qk(t){let{routeContext:e,match:n,children:r}=t,i=b.useContext(Au);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(dn.Provider,{value:e},r)}function Yk(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Te(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:S}=n,R=p.route.loader&&m[p.route.id]===void 0&&(!S||S[p.route.id]===void 0);if(p.route.lazy||R){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let S,R=!1,x=null,P=null;n&&(S=l&&p.route.id?l[p.route.id]:void 0,x=p.route.errorElement||Kk,u&&(c<0&&m===0?(nA("route-fallback"),R=!0,P=null):c===m&&(R=!0,P=p.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,m+1)),_=()=>{let I;return S?I=x:R?I=P:p.route.Component?I=b.createElement(p.route.Component,null):p.route.element?I=p.route.element:I=d,b.createElement(Qk,{match:p,routeContext:{outlet:d,matches:w,isDataRoute:n!=null},children:I})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?b.createElement(Gk,{location:n.location,revalidation:n.revalidation,component:x,error:S,children:_(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):_()},null)}var uw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(uw||{}),cw=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(cw||{});function Xk(t){let e=b.useContext(Au);return e||Te(!1),e}function Jk(t){let e=b.useContext(ow);return e||Te(!1),e}function Zk(t){let e=b.useContext(dn);return e||Te(!1),e}function hw(t){let e=Zk(),n=e.matches[e.matches.length-1];return n.route.id||Te(!1),n.route.id}function eA(){var t;let e=b.useContext(aw),n=Jk(),r=hw();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function tA(){let{router:t}=Xk(uw.UseNavigateStable),e=hw(cw.UseNavigateStable),n=b.useRef(!1);return lw(()=>{n.current=!0}),b.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,xo({fromRouteId:e},s)))},[t,e])}const oy={};function nA(t,e,n){oy[t]||(oy[t]=!0)}function rA(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function dw(t){let{to:e,replace:n,state:r,relative:i}=t;hs()||Te(!1);let{future:s,static:o}=b.useContext(Wn),{matches:l}=b.useContext(dn),{pathname:u}=Xt(),c=Cu(),d=jf(e,Uf(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(d);return b.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function iA(t){return $k(t.context)}function he(t){Te(!1)}function sA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=lr.Pop,navigator:s,static:o=!1,future:l}=t;hs()&&Te(!1);let u=e.replace(/^\/*/,"/"),c=b.useMemo(()=>({basename:u,navigator:s,static:o,future:xo({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=cs(r));let{pathname:d="/",search:p="",hash:m="",state:S=null,key:R="default"}=r,x=b.useMemo(()=>{let P=Xi(d,u);return P==null?null:{location:{pathname:P,search:p,hash:m,state:S,key:R},navigationType:i}},[u,d,p,m,S,R,i]);return x==null?null:b.createElement(Wn.Provider,{value:c},b.createElement(Ru.Provider,{children:n,value:x}))}function oA(t){let{children:e,location:n}=t;return qk(gd(e),n)}new Promise(()=>{});function gd(t,e){e===void 0&&(e=[]);let n=[];return b.Children.forEach(t,(r,i)=>{if(!b.isValidElement(r))return;let s=[...e,i];if(r.type===b.Fragment){n.push.apply(n,gd(r.props.children,s));return}r.type!==he&&Te(!1),!r.props.index||!r.props.children||Te(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=gd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zl(){return zl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zl.apply(null,arguments)}function fw(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function aA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function lA(t,e){return t.button===0&&(!e||e==="_self")&&!aA(t)}const uA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],cA=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],hA="6";try{window.__reactRouterVersion=hA}catch{}const dA=b.createContext({isTransitioning:!1}),fA="startTransition",ay=i1[fA];function pA(t){let{basename:e,children:n,future:r,window:i}=t,s=b.useRef();s.current==null&&(s.current=gk({window:i,v5Compat:!0}));let o=s.current,[l,u]=b.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=b.useCallback(p=>{c&&ay?ay(()=>u(p)):u(p)},[u,c]);return b.useLayoutEffect(()=>o.listen(d),[o,d]),b.useEffect(()=>rA(r),[r]),b.createElement(sA,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const mA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$e=b.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:p}=e,m=fw(e,uA),{basename:S}=b.useContext(Wn),R,x=!1;if(typeof c=="string"&&gA.test(c)&&(R=c,mA))try{let I=new URL(window.location.href),N=c.startsWith("//")?new URL(I.protocol+c):new URL(c),F=Xi(N.pathname,S);N.origin===I.origin&&F!=null?c=F+N.search+N.hash:x=!0}catch{}let P=jk(c,{relative:i}),w=_A(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:p});function _(I){r&&r(I),I.defaultPrevented||w(I)}return b.createElement("a",zl({},m,{href:R||P,onClick:x||s?r:_,ref:n,target:u}))}),th=b.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:u,viewTransition:c,children:d}=e,p=fw(e,cA),m=Pu(u,{relative:p.relative}),S=Xt(),R=b.useContext(ow),{navigator:x,basename:P}=b.useContext(Wn),w=R!=null&&vA(m)&&c===!0,_=x.encodeLocation?x.encodeLocation(m).pathname:m.pathname,I=S.pathname,N=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;i||(I=I.toLowerCase(),N=N?N.toLowerCase():null,_=_.toLowerCase()),N&&P&&(N=Xi(N,P)||N);const F=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let U=I===_||!o&&I.startsWith(_)&&I.charAt(F)==="/",v=N!=null&&(N===_||!o&&N.startsWith(_)&&N.charAt(_.length)==="/"),y={isActive:U,isPending:v,isTransitioning:w},T=U?r:void 0,k;typeof s=="function"?k=s(y):k=[s,U?"active":null,v?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let C=typeof l=="function"?l(y):l;return b.createElement($e,zl({},p,{"aria-current":T,className:k,ref:n,style:C,to:u,viewTransition:c}),typeof d=="function"?d(y):d)});var yd;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(yd||(yd={}));var ly;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ly||(ly={}));function yA(t){let e=b.useContext(Au);return e||Te(!1),e}function _A(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=Cu(),c=Xt(),d=Pu(t,{relative:o});return b.useCallback(p=>{if(lA(p,n)){p.preventDefault();let m=r!==void 0?r:jl(c)===jl(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}function vA(t,e){e===void 0&&(e={});let n=b.useContext(dA);n==null&&Te(!1);let{basename:r}=yA(yd.useViewTransitionState),i=Pu(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Xi(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Xi(n.nextLocation.pathname,r)||n.nextLocation.pathname;return md(i.pathname,o)!=null||md(i.pathname,s)!=null}const pw=b.createContext(),wA=({children:t})=>{const[e,n]=b.useState(()=>localStorage.getItem("alamdipara_theme")||"light");b.useEffect(()=>{document.documentElement.setAttribute("data-theme",e),localStorage.setItem("alamdipara_theme",e)},[e]);const r=()=>{n(i=>i==="light"?"dark":"light")};return E.jsx(pw.Provider,{value:{theme:e,toggleTheme:r,setTheme:n},children:t})},EA=()=>b.useContext(pw);var uy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},TA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},gw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,S=c&63;u||(S=64,o||(m=64)),r.push(n[d],n[p],n[m],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):TA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new IA;const m=s<<2|l>>4;if(r.push(m),c!==64){const S=l<<4&240|c>>2;if(r.push(S),p!==64){const R=c<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class IA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const SA=function(t){const e=mw(t);return gw.encodeByteArray(e,!0)},Bl=function(t){return SA(t).replace(/\./g,"")},yw=function(t){try{return gw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA=()=>kA().__FIREBASE_DEFAULTS__,RA=()=>{if(typeof process>"u"||typeof uy>"u")return;const t=uy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},CA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yw(t[1]);return e&&JSON.parse(e)},xu=()=>{try{return AA()||RA()||CA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_w=t=>{var e,n;return(n=(e=xu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vw=t=>{const e=_w(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ww=()=>{var t;return(t=xu())===null||t===void 0?void 0:t.config},Ew=t=>{var e;return(e=xu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Bl(JSON.stringify(n)),Bl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function NA(){var t;const e=(t=xu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function DA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function OA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function VA(){const t=ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function LA(){return!NA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function MA(){try{return typeof indexedDB=="object"}catch{return!1}}function FA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA="FirebaseError";class Jt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=UA,Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ai.prototype.create)}}class ai{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?jA(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Jt(i,l,r)}}function jA(t,e){return t.replace(zA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const zA=/\{\$([^}]+)}/g;function BA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $l(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(cy(s)&&cy(o)){if(!$l(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function cy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ws(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Hs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function $A(t,e){const n=new qA(t,e);return n.subscribe.bind(n)}class qA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");WA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=nh),i.error===void 0&&(i.error=nh),i.complete===void 0&&(i.complete=nh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function WA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function nh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t){return t&&t._delegate?t._delegate:t}class Ft{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new PA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GA(e))try{this.getOrInitializeService({instanceIdentifier:Fr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fr){return this.instances.has(e)}getOptions(e=Fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fr){return this.component?this.component.multipleInstances?e:Fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KA(t){return t===Fr?void 0:t}function GA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new HA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const YA={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},XA=te.INFO,JA={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},ZA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=JA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zf{constructor(e){this.name=e,this._logLevel=XA,this._logHandler=ZA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?YA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const eR=(t,e)=>e.some(n=>t instanceof n);let hy,dy;function tR(){return hy||(hy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nR(){return dy||(dy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Iw=new WeakMap,_d=new WeakMap,Sw=new WeakMap,rh=new WeakMap,Bf=new WeakMap;function rR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Dn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Iw.set(n,t)}).catch(()=>{}),Bf.set(e,t),e}function iR(t){if(_d.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});_d.set(t,e)}let vd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _d.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sR(t){vd=t(vd)}function oR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ih(this),e,...n);return Sw.set(r,e.sort?e.sort():[e]),Dn(r)}:nR().includes(t)?function(...e){return t.apply(ih(this),e),Dn(Iw.get(this))}:function(...e){return Dn(t.apply(ih(this),e))}}function aR(t){return typeof t=="function"?oR(t):(t instanceof IDBTransaction&&iR(t),eR(t,tR())?new Proxy(t,vd):t)}function Dn(t){if(t instanceof IDBRequest)return rR(t);if(rh.has(t))return rh.get(t);const e=aR(t);return e!==t&&(rh.set(t,e),Bf.set(e,t)),e}const ih=t=>Bf.get(t);function Nu(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Dn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Dn(o.result),u.oldVersion,u.newVersion,Dn(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}function sh(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),Dn(n).then(()=>{})}const lR=["get","getKey","getAll","getAllKeys","count"],uR=["put","add","delete","clear"],oh=new Map;function fy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(oh.get(e))return oh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=uR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||lR.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return oh.set(e,s),s}sR(t=>({...t,get:(e,n,r)=>fy(e,n)||t.get(e,n,r),has:(e,n)=>!!fy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wd="@firebase/app",py="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new zf("@firebase/app"),dR="@firebase/app-compat",fR="@firebase/analytics-compat",pR="@firebase/analytics",mR="@firebase/app-check-compat",gR="@firebase/app-check",yR="@firebase/auth",_R="@firebase/auth-compat",vR="@firebase/database",wR="@firebase/data-connect",ER="@firebase/database-compat",TR="@firebase/functions",IR="@firebase/functions-compat",SR="@firebase/installations",kR="@firebase/installations-compat",AR="@firebase/messaging",RR="@firebase/messaging-compat",CR="@firebase/performance",PR="@firebase/performance-compat",xR="@firebase/remote-config",NR="@firebase/remote-config-compat",DR="@firebase/storage",OR="@firebase/storage-compat",bR="@firebase/firestore",VR="@firebase/vertexai-preview",LR="@firebase/firestore-compat",MR="firebase",FR="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed="[DEFAULT]",UR={[wd]:"fire-core",[dR]:"fire-core-compat",[pR]:"fire-analytics",[fR]:"fire-analytics-compat",[gR]:"fire-app-check",[mR]:"fire-app-check-compat",[yR]:"fire-auth",[_R]:"fire-auth-compat",[vR]:"fire-rtdb",[wR]:"fire-data-connect",[ER]:"fire-rtdb-compat",[TR]:"fire-fn",[IR]:"fire-fn-compat",[SR]:"fire-iid",[kR]:"fire-iid-compat",[AR]:"fire-fcm",[RR]:"fire-fcm-compat",[CR]:"fire-perf",[PR]:"fire-perf-compat",[xR]:"fire-rc",[NR]:"fire-rc-compat",[DR]:"fire-gcs",[OR]:"fire-gcs-compat",[bR]:"fire-fst",[LR]:"fire-fst-compat",[VR]:"fire-vertex","fire-js":"fire-js",[MR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new Map,jR=new Map,Td=new Map;function my(t,e){try{t.container.addComponent(e)}catch(n){Un.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gt(t){const e=t.name;if(Td.has(e))return Un.debug(`There were multiple attempts to register component ${e}.`),!1;Td.set(e,t);for(const n of No.values())my(n,t);for(const n of jR.values())my(n,t);return!0}function ds(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function nn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vr=new ai("app","Firebase",zR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=FR;function kw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ed,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw vr.create("bad-app-name",{appName:String(i)});if(n||(n=ww()),!n)throw vr.create("no-options");const s=No.get(i);if(s){if($l(n,s.options)&&$l(r,s.config))return s;throw vr.create("duplicate-app",{appName:i})}const o=new QA(i);for(const u of Td.values())o.addComponent(u);const l=new BR(n,r,o);return No.set(i,l),l}function Du(t=Ed){const e=No.get(t);if(!e&&t===Ed&&ww())return kw();if(!e)throw vr.create("no-app",{appName:t});return e}function $R(){return Array.from(No.values())}function vt(t,e,n){var r;let i=(r=UR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Un.warn(l.join(" "));return}Gt(new Ft(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR="firebase-heartbeat-database",WR=1,Do="firebase-heartbeat-store";let ah=null;function Aw(){return ah||(ah=Nu(qR,WR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Do)}catch(n){console.warn(n)}}}}).catch(t=>{throw vr.create("idb-open",{originalErrorMessage:t.message})})),ah}async function HR(t){try{const n=(await Aw()).transaction(Do),r=await n.objectStore(Do).get(Rw(t));return await n.done,r}catch(e){if(e instanceof Jt)Un.warn(e.message);else{const n=vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Un.warn(n.message)}}}async function gy(t,e){try{const r=(await Aw()).transaction(Do,"readwrite");await r.objectStore(Do).put(e,Rw(t)),await r.done}catch(n){if(n instanceof Jt)Un.warn(n.message);else{const r=vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Un.warn(r.message)}}}function Rw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR=1024,GR=30*24*60*60*1e3;class QR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new XR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=yy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=GR}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Un.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yy(),{heartbeatsToSend:r,unsentEntries:i}=YR(this._heartbeatsCache.heartbeats),s=Bl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Un.warn(n),""}}}function yy(){return new Date().toISOString().substring(0,10)}function YR(t,e=KR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),_y(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),_y(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class XR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return MA()?FA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await HR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function _y(t){return Bl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JR(t){Gt(new Ft("platform-logger",e=>new cR(e),"PRIVATE")),Gt(new Ft("heartbeat",e=>new QR(e),"PRIVATE")),vt(wd,py,t),vt(wd,py,"esm2017"),vt("fire-js","")}JR("");function $f(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Cw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZR=Cw,Pw=new ai("auth","Firebase",Cw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=new zf("@firebase/auth");function eC(t,...e){ql.logLevel<=te.WARN&&ql.warn(`Auth (${li}): ${t}`,...e)}function al(t,...e){ql.logLevel<=te.ERROR&&ql.error(`Auth (${li}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,...e){throw qf(t,...e)}function on(t,...e){return qf(t,...e)}function xw(t,e,n){const r=Object.assign(Object.assign({},ZR()),{[e]:n});return new ai("auth","Firebase",r).create(e,{appName:t.name})}function On(t){return xw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Pw.create(t,...e)}function K(t,e,...n){if(!t)throw qf(e,...n)}function Cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw al(e),new Error(e)}function jn(t,e){t||Cn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tC(){return vy()==="http:"||vy()==="https:"}function vy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tC()||OA()||"connection"in navigator)?navigator.onLine:!0}function rC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n){this.shortDelay=e,this.longDelay=n,jn(n>e,"Short delay should be less than long delay!"),this.isMobile=xA()||bA()}get(){return nC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(t,e){jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=new Qo(3e4,6e4);function Hn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function fn(t,e,n,r,i={}){return Dw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Go(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return DA()||(c.referrerPolicy="no-referrer"),Nw.fetch()(Ow(t,t.config.apiHost,n,l),c)})}async function Dw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},iC),e);try{const i=new aC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw $a(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw $a(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw $a(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw $a(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw xw(t,d,c);Qt(t,d)}}catch(i){if(i instanceof Jt)throw i;Qt(t,"network-request-failed",{message:String(i)})}}async function Yo(t,e,n,r,i={}){const s=await fn(t,e,n,r,i);return"mfaPendingCredential"in s&&Qt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ow(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Wf(t.config,i):`${t.config.apiScheme}://${i}`}function oC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class aC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),sC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $a(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=on(t,e,r);return i.customData._tokenResponse=n,i}function wy(t){return t!==void 0&&t.enterprise!==void 0}class lC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return oC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function uC(t,e){return fn(t,"GET","/v2/recaptchaConfig",Hn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cC(t,e){return fn(t,"POST","/v1/accounts:delete",e)}async function bw(t,e){return fn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hC(t,e=!1){const n=xe(t),r=await n.getIdToken(e),i=Hf(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:oo(lh(i.auth_time)),issuedAtTime:oo(lh(i.iat)),expirationTime:oo(lh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function lh(t){return Number(t)*1e3}function Hf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return al("JWT malformed, contained fewer than 3 sections"),null;try{const i=yw(n);return i?JSON.parse(i):(al("Failed to decode base64 JWT payload"),null)}catch(i){return al("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ey(t){const e=Hf(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ji(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Jt&&dC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function dC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=oo(this.lastLoginAt),this.creationTime=oo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ji(t,bw(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Vw(s.providerUserInfo):[],l=mC(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Sd(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function pC(t){const e=xe(t);await Wl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Vw(t){return t.map(e=>{var{providerId:n}=e,r=$f(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gC(t,e){const n=await Dw(t,{},async()=>{const r=Go({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Ow(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Nw.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function yC(t,e){return fn(t,"POST","/v2/accounts:revokeToken",Hn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ey(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=Ey(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await gC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ji;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ji,this.toJSON())}_performRefresh(){return Cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=$f(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Sd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ji(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hC(this,e)}reload(){return pC(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Pn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Wl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nn(this.auth.app))return Promise.reject(On(this.auth));const e=await this.getIdToken();return await Ji(this,cC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,S=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,P=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:I,emailVerified:N,isAnonymous:F,providerData:U,stsTokenManager:v}=n;K(I&&v,e,"internal-error");const y=ji.fromJSON(this.name,v);K(typeof I=="string",e,"internal-error"),Xn(p,e.name),Xn(m,e.name),K(typeof N=="boolean",e,"internal-error"),K(typeof F=="boolean",e,"internal-error"),Xn(S,e.name),Xn(R,e.name),Xn(x,e.name),Xn(P,e.name),Xn(w,e.name),Xn(_,e.name);const T=new Pn({uid:I,auth:e,email:m,emailVerified:N,displayName:p,isAnonymous:F,photoURL:R,phoneNumber:S,tenantId:x,stsTokenManager:y,createdAt:w,lastLoginAt:_});return U&&Array.isArray(U)&&(T.providerData=U.map(k=>Object.assign({},k))),P&&(T._redirectEventId=P),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new ji;i.updateFromServerResponse(n);const s=new Pn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Wl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Vw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ji;l.updateFromIdToken(r);const u=new Pn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Sd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=new Map;function xn(t){jn(t instanceof Function,"Expected a class definition");let e=Ty.get(t);return e?(jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ty.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Lw.type="NONE";const Iy=Lw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t,e,n){return`firebase:${t}:${e}:${n}`}class zi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ll(this.userKey,i.apiKey,s),this.fullPersistenceKey=ll("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zi(xn(Iy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||xn(Iy);const o=ll(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const p=Pn._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new zi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new zi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bw(e))return"Blackberry";if($w(e))return"Webos";if(Fw(e))return"Safari";if((e.includes("chrome/")||Uw(e))&&!e.includes("edge/"))return"Chrome";if(zw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Mw(t=ot()){return/firefox\//i.test(t)}function Fw(t=ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Uw(t=ot()){return/crios\//i.test(t)}function jw(t=ot()){return/iemobile/i.test(t)}function zw(t=ot()){return/android/i.test(t)}function Bw(t=ot()){return/blackberry/i.test(t)}function $w(t=ot()){return/webos/i.test(t)}function Kf(t=ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _C(t=ot()){var e;return Kf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vC(){return VA()&&document.documentMode===10}function qw(t=ot()){return Kf(t)||zw(t)||$w(t)||Bw(t)||/windows phone/i.test(t)||jw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(t,e=[]){let n;switch(t){case"Browser":n=Sy(ot());break;case"Worker":n=`${Sy(ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${li}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EC(t,e={}){return fn(t,"GET","/v2/passwordPolicy",Hn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=6;class IC{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:TC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ky(this),this.idTokenSubscription=new ky(this),this.beforeStateQueue=new wC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await zi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await bw(this,{idToken:e}),r=await Pn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(nn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Wl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nn(this.app))return Promise.reject(On(this));const n=e?xe(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nn(this.app)?Promise.reject(On(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nn(this.app)?Promise.reject(On(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await EC(this),n=new IC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ai("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await yC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await zi.create(this,[xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ww(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&eC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Pr(t){return xe(t)}class ky{constructor(e){this.auth=e,this.observer=null,this.addObserver=$A(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ou={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kC(t){Ou=t}function Hw(t){return Ou.loadJS(t)}function AC(){return Ou.recaptchaEnterpriseScript}function RC(){return Ou.gapiScript}function CC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const PC="recaptcha-enterprise",xC="NO_RECAPTCHA";class NC{constructor(e){this.type=PC,this.auth=Pr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{uC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new lC(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;wy(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(xC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&wy(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=AC();u.length!==0&&(u+=l),Hw(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Ay(t,e,n,r=!1){const i=new NC(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Hl(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Ay(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ay(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DC(t,e){const n=ds(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if($l(s,e??{}))return i;Qt(i,"already-initialized")}return n.initialize({options:e})}function OC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function bC(t,e,n){const r=Pr(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Kw(e),{host:o,port:l}=VC(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),LC()}function Kw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function VC(t){const e=Kw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ry(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ry(o)}}}function Ry(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function LC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Cn("not implemented")}_getIdTokenResponse(e){return Cn("not implemented")}_linkToIdToken(e,n){return Cn("not implemented")}_getReauthenticationResolver(e){return Cn("not implemented")}}async function MC(t,e){return fn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FC(t,e){return Yo(t,"POST","/v1/accounts:signInWithPassword",Hn(t,e))}async function UC(t,e){return fn(t,"POST","/v1/accounts:sendOobCode",Hn(t,e))}async function jC(t,e){return UC(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zC(t,e){return Yo(t,"POST","/v1/accounts:signInWithEmailLink",Hn(t,e))}async function BC(t,e){return Yo(t,"POST","/v1/accounts:signInWithEmailLink",Hn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo extends Gf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Oo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Oo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hl(e,n,"signInWithPassword",FC);case"emailLink":return zC(e,{email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hl(e,r,"signUpPassword",MC);case"emailLink":return BC(e,{idToken:n,email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bi(t,e){return Yo(t,"POST","/v1/accounts:signInWithIdp",Hn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C="http://localhost";class Jr extends Gf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Jr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=$f(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Jr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Bi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Bi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Bi(e,n)}buildRequest(){const e={requestUri:$C,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Go(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function WC(t){const e=Ws(Hs(t)).link,n=e?Ws(Hs(e)).deep_link_id:null,r=Ws(Hs(t)).deep_link_id;return(r?Ws(Hs(r)).link:null)||r||n||e||t}class Qf{constructor(e){var n,r,i,s,o,l;const u=Ws(Hs(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=qC((i=u.mode)!==null&&i!==void 0?i:null);K(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=WC(e);try{return new Qf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.providerId=fs.PROVIDER_ID}static credential(e,n){return Oo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Qf.parseLink(n);return K(r,"argument-error"),Oo._fromEmailAndCode(e,r.code,r.tenantId)}}fs.PROVIDER_ID="password";fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo extends Gw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends Xo{constructor(){super("facebook.com")}static credential(e){return Jr._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";nr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Xo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Jr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.GOOGLE_SIGN_IN_METHOD="google.com";kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends Xo{constructor(){super("github.com")}static credential(e){return Jr._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rr.credential(e.oauthAccessToken)}catch{return null}}}rr.GITHUB_SIGN_IN_METHOD="github.com";rr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends Xo{constructor(){super("twitter.com")}static credential(e,n){return Jr._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.TWITTER_SIGN_IN_METHOD="twitter.com";ir.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HC(t,e){return Yo(t,"POST","/v1/accounts:signUp",Hn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Pn._fromIdTokenResponse(e,r,i),o=Cy(r);return new Zr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Cy(r);return new Zr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Cy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl extends Jt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Kl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Kl(e,n,r,i)}}function Qw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Kl._fromErrorAndOperation(t,s,e,r):s})}async function KC(t,e,n=!1){const r=await Ji(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GC(t,e,n=!1){const{auth:r}=t;if(nn(r.app))return Promise.reject(On(r));const i="reauthenticate";try{const s=await Ji(t,Qw(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=Hf(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),Zr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Qt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yw(t,e,n=!1){if(nn(t.app))return Promise.reject(On(t));const r="signIn",i=await Qw(t,r,e),s=await Zr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function QC(t,e){return Yw(Pr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xw(t){const e=Pr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function YC(t,e,n){const r=Pr(t);await Hl(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",jC)}async function XC(t,e,n){if(nn(t.app))return Promise.reject(On(t));const r=Pr(t),o=await Hl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",HC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Xw(t),u}),l=await Zr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function JC(t,e,n){return nn(t.app)?Promise.reject(On(t)):QC(xe(t),fs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Xw(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZC(t,e){return fn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=xe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ji(r,ZC(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function tP(t,e,n,r){return xe(t).onIdTokenChanged(e,n,r)}function nP(t,e,n){return xe(t).beforeAuthStateChanged(e,n)}function rP(t,e,n,r){return xe(t).onAuthStateChanged(e,n,r)}function iP(t){return xe(t).signOut()}const Gl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gl,"1"),this.storage.removeItem(Gl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP=1e3,oP=10;class Zw extends Jw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);vC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,oP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},sP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zw.type="LOCAL";const aP=Zw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE extends Jw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}eE.type="SESSION";const tE=eE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new bu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await lP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Yf("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return window}function cP(t){an().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function hP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fP(){return nE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE="firebaseLocalStorageDb",pP=1,Ql="firebaseLocalStorage",iE="fbase_key";class Jo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vu(t,e){return t.transaction([Ql],e?"readwrite":"readonly").objectStore(Ql)}function mP(){const t=indexedDB.deleteDatabase(rE);return new Jo(t).toPromise()}function kd(){const t=indexedDB.open(rE,pP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ql,{keyPath:iE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ql)?e(r):(r.close(),await mP(),e(await kd()))})})}async function Py(t,e,n){const r=Vu(t,!0).put({[iE]:e,value:n});return new Jo(r).toPromise()}async function gP(t,e){const n=Vu(t,!1).get(e),r=await new Jo(n).toPromise();return r===void 0?null:r.value}function xy(t,e){const n=Vu(t,!0).delete(e);return new Jo(n).toPromise()}const yP=800,_P=3;class sE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>_P)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bu._getInstance(fP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hP(),!this.activeServiceWorker)return;this.sender=new uP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kd();return await Py(e,Gl,"1"),await xy(e,Gl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Py(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>gP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Vu(i,!1).getAll();return new Jo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sE.type="LOCAL";const vP=sE;new Qo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(t,e){return e?xn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf extends Gf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Bi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Bi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function EP(t){return Yw(t.auth,new Xf(t),t.bypassAuthState)}function TP(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),GC(n,new Xf(t),t.bypassAuthState)}async function IP(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),KC(n,new Xf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return EP;case"linkViaPopup":case"linkViaRedirect":return IP;case"reauthViaPopup":case"reauthViaRedirect":return TP;default:Qt(this.auth,"internal-error")}}resolve(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP=new Qo(2e3,1e4);class Oi extends oE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Oi.currentPopupAction&&Oi.currentPopupAction.cancel(),Oi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){jn(this.filter.length===1,"Popup operations only handle one event");const e=Yf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Oi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SP.get())};e()}}Oi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP="pendingRedirect",ul=new Map;class AP extends oE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ul.get(this.auth._key());if(!e){try{const r=await RP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ul.set(this.auth._key(),e)}return this.bypassAuthState||ul.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RP(t,e){const n=xP(e),r=PP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function CP(t,e){ul.set(t._key(),e)}function PP(t){return xn(t._redirectPersistence)}function xP(t){return ll(kP,t.config.apiKey,t.name)}async function NP(t,e,n=!1){if(nn(t.app))return Promise.reject(On(t));const r=Pr(t),i=wP(r,e),o=await new AP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP=10*60*1e3;class OP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!aE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(on(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ny(e))}saveEventToCache(e){this.cachedEventUids.add(Ny(e)),this.lastProcessedEventTime=Date.now()}}function Ny(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function aE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return aE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VP(t,e={}){return fn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MP=/^https?/;async function FP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await VP(t);for(const n of e)try{if(UP(n))return}catch{}Qt(t,"unauthorized-domain")}function UP(t){const e=Id(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!MP.test(n))return!1;if(LP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP=new Qo(3e4,6e4);function Dy(){const t=an().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zP(t){return new Promise((e,n)=>{var r,i,s;function o(){Dy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dy(),n(on(t,"network-request-failed"))},timeout:jP.get()})}if(!((i=(r=an().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=an().gapi)===null||s===void 0)&&s.load)o();else{const l=CC("iframefcb");return an()[l]=()=>{gapi.load?o():n(on(t,"network-request-failed"))},Hw(`${RC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw cl=null,e})}let cl=null;function BP(t){return cl=cl||zP(t),cl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P=new Qo(5e3,15e3),qP="__/auth/iframe",WP="emulator/auth/iframe",HP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GP(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wf(e,WP):`https://${t.config.authDomain}/${qP}`,r={apiKey:e.apiKey,appName:t.name,v:li},i=KP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Go(r).slice(1)}`}async function QP(t){const e=await BP(t),n=an().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:GP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=on(t,"network-request-failed"),l=an().setTimeout(()=>{s(o)},$P.get());function u(){an().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XP=500,JP=600,ZP="_blank",ex="http://localhost";class Oy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tx(t,e,n,r=XP,i=JP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},YP),{width:r.toString(),height:i.toString(),top:s,left:o}),c=ot().toLowerCase();n&&(l=Uw(c)?ZP:n),Mw(c)&&(e=e||ex,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[S,R])=>`${m}${S}=${R},`,"");if(_C(c)&&l!=="_self")return nx(e||"",l),new Oy(null);const p=window.open(e||"",l,d);K(p,t,"popup-blocked");try{p.focus()}catch{}return new Oy(p)}function nx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx="__/auth/handler",ix="emulator/auth/handler",sx=encodeURIComponent("fac");async function by(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:li,eventId:i};if(e instanceof Gw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",BA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Xo){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${sx}=${encodeURIComponent(u)}`:"";return`${ox(t)}?${Go(l).slice(1)}${c}`}function ox({config:t}){return t.emulator?Wf(t,ix):`https://${t.authDomain}/${rx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh="webStorageSupport";class ax{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tE,this._completeRedirectFn=NP,this._overrideRedirectResult=CP}async _openPopup(e,n,r,i){var s;jn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await by(e,n,r,Id(),i);return tx(e,o,Yf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await by(e,n,r,Id(),i);return cP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(jn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await QP(e),r=new OP(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(uh,{type:uh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[uh];o!==void 0&&n(!!o),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=FP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qw()||Fw()||Kf()}}const lx=ax;var Vy="@firebase/auth",Ly="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hx(t){Gt(new Ft("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ww(t)},c=new SC(r,i,s,u);return OC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Gt(new Ft("auth-internal",e=>{const n=Pr(e.getProvider("auth").getImmediate());return(r=>new ux(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vt(Vy,Ly,cx(t)),vt(Vy,Ly,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx=5*60,fx=Ew("authIdTokenMaxAge")||dx;let My=null;const px=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>fx)return;const i=n==null?void 0:n.token;My!==i&&(My=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function mx(t=Du()){const e=ds(t,"auth");if(e.isInitialized())return e.getImmediate();const n=DC(t,{popupRedirectResolver:lx,persistence:[vP,aP,tE]}),r=Ew("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=px(s.toString());nP(n,o,()=>o(n.currentUser)),tP(n,l=>o(l))}}const i=_w("auth");return i&&bC(n,`http://${i}`),n}function gx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}kC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=on("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",gx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hx("Browser");var Fy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hr,lE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function T(){}T.prototype=y.prototype,v.D=y.prototype,v.prototype=new T,v.prototype.constructor=v,v.C=function(k,C,O){for(var A=Array(arguments.length-2),xt=2;xt<arguments.length;xt++)A[xt-2]=arguments[xt];return y.prototype[C].apply(k,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,y,T){T||(T=0);var k=Array(16);if(typeof y=="string")for(var C=0;16>C;++C)k[C]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(C=0;16>C;++C)k[C]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=v.g[0],T=v.g[1],C=v.g[2];var O=v.g[3],A=y+(O^T&(C^O))+k[0]+3614090360&4294967295;y=T+(A<<7&4294967295|A>>>25),A=O+(C^y&(T^C))+k[1]+3905402710&4294967295,O=y+(A<<12&4294967295|A>>>20),A=C+(T^O&(y^T))+k[2]+606105819&4294967295,C=O+(A<<17&4294967295|A>>>15),A=T+(y^C&(O^y))+k[3]+3250441966&4294967295,T=C+(A<<22&4294967295|A>>>10),A=y+(O^T&(C^O))+k[4]+4118548399&4294967295,y=T+(A<<7&4294967295|A>>>25),A=O+(C^y&(T^C))+k[5]+1200080426&4294967295,O=y+(A<<12&4294967295|A>>>20),A=C+(T^O&(y^T))+k[6]+2821735955&4294967295,C=O+(A<<17&4294967295|A>>>15),A=T+(y^C&(O^y))+k[7]+4249261313&4294967295,T=C+(A<<22&4294967295|A>>>10),A=y+(O^T&(C^O))+k[8]+1770035416&4294967295,y=T+(A<<7&4294967295|A>>>25),A=O+(C^y&(T^C))+k[9]+2336552879&4294967295,O=y+(A<<12&4294967295|A>>>20),A=C+(T^O&(y^T))+k[10]+4294925233&4294967295,C=O+(A<<17&4294967295|A>>>15),A=T+(y^C&(O^y))+k[11]+2304563134&4294967295,T=C+(A<<22&4294967295|A>>>10),A=y+(O^T&(C^O))+k[12]+1804603682&4294967295,y=T+(A<<7&4294967295|A>>>25),A=O+(C^y&(T^C))+k[13]+4254626195&4294967295,O=y+(A<<12&4294967295|A>>>20),A=C+(T^O&(y^T))+k[14]+2792965006&4294967295,C=O+(A<<17&4294967295|A>>>15),A=T+(y^C&(O^y))+k[15]+1236535329&4294967295,T=C+(A<<22&4294967295|A>>>10),A=y+(C^O&(T^C))+k[1]+4129170786&4294967295,y=T+(A<<5&4294967295|A>>>27),A=O+(T^C&(y^T))+k[6]+3225465664&4294967295,O=y+(A<<9&4294967295|A>>>23),A=C+(y^T&(O^y))+k[11]+643717713&4294967295,C=O+(A<<14&4294967295|A>>>18),A=T+(O^y&(C^O))+k[0]+3921069994&4294967295,T=C+(A<<20&4294967295|A>>>12),A=y+(C^O&(T^C))+k[5]+3593408605&4294967295,y=T+(A<<5&4294967295|A>>>27),A=O+(T^C&(y^T))+k[10]+38016083&4294967295,O=y+(A<<9&4294967295|A>>>23),A=C+(y^T&(O^y))+k[15]+3634488961&4294967295,C=O+(A<<14&4294967295|A>>>18),A=T+(O^y&(C^O))+k[4]+3889429448&4294967295,T=C+(A<<20&4294967295|A>>>12),A=y+(C^O&(T^C))+k[9]+568446438&4294967295,y=T+(A<<5&4294967295|A>>>27),A=O+(T^C&(y^T))+k[14]+3275163606&4294967295,O=y+(A<<9&4294967295|A>>>23),A=C+(y^T&(O^y))+k[3]+4107603335&4294967295,C=O+(A<<14&4294967295|A>>>18),A=T+(O^y&(C^O))+k[8]+1163531501&4294967295,T=C+(A<<20&4294967295|A>>>12),A=y+(C^O&(T^C))+k[13]+2850285829&4294967295,y=T+(A<<5&4294967295|A>>>27),A=O+(T^C&(y^T))+k[2]+4243563512&4294967295,O=y+(A<<9&4294967295|A>>>23),A=C+(y^T&(O^y))+k[7]+1735328473&4294967295,C=O+(A<<14&4294967295|A>>>18),A=T+(O^y&(C^O))+k[12]+2368359562&4294967295,T=C+(A<<20&4294967295|A>>>12),A=y+(T^C^O)+k[5]+4294588738&4294967295,y=T+(A<<4&4294967295|A>>>28),A=O+(y^T^C)+k[8]+2272392833&4294967295,O=y+(A<<11&4294967295|A>>>21),A=C+(O^y^T)+k[11]+1839030562&4294967295,C=O+(A<<16&4294967295|A>>>16),A=T+(C^O^y)+k[14]+4259657740&4294967295,T=C+(A<<23&4294967295|A>>>9),A=y+(T^C^O)+k[1]+2763975236&4294967295,y=T+(A<<4&4294967295|A>>>28),A=O+(y^T^C)+k[4]+1272893353&4294967295,O=y+(A<<11&4294967295|A>>>21),A=C+(O^y^T)+k[7]+4139469664&4294967295,C=O+(A<<16&4294967295|A>>>16),A=T+(C^O^y)+k[10]+3200236656&4294967295,T=C+(A<<23&4294967295|A>>>9),A=y+(T^C^O)+k[13]+681279174&4294967295,y=T+(A<<4&4294967295|A>>>28),A=O+(y^T^C)+k[0]+3936430074&4294967295,O=y+(A<<11&4294967295|A>>>21),A=C+(O^y^T)+k[3]+3572445317&4294967295,C=O+(A<<16&4294967295|A>>>16),A=T+(C^O^y)+k[6]+76029189&4294967295,T=C+(A<<23&4294967295|A>>>9),A=y+(T^C^O)+k[9]+3654602809&4294967295,y=T+(A<<4&4294967295|A>>>28),A=O+(y^T^C)+k[12]+3873151461&4294967295,O=y+(A<<11&4294967295|A>>>21),A=C+(O^y^T)+k[15]+530742520&4294967295,C=O+(A<<16&4294967295|A>>>16),A=T+(C^O^y)+k[2]+3299628645&4294967295,T=C+(A<<23&4294967295|A>>>9),A=y+(C^(T|~O))+k[0]+4096336452&4294967295,y=T+(A<<6&4294967295|A>>>26),A=O+(T^(y|~C))+k[7]+1126891415&4294967295,O=y+(A<<10&4294967295|A>>>22),A=C+(y^(O|~T))+k[14]+2878612391&4294967295,C=O+(A<<15&4294967295|A>>>17),A=T+(O^(C|~y))+k[5]+4237533241&4294967295,T=C+(A<<21&4294967295|A>>>11),A=y+(C^(T|~O))+k[12]+1700485571&4294967295,y=T+(A<<6&4294967295|A>>>26),A=O+(T^(y|~C))+k[3]+2399980690&4294967295,O=y+(A<<10&4294967295|A>>>22),A=C+(y^(O|~T))+k[10]+4293915773&4294967295,C=O+(A<<15&4294967295|A>>>17),A=T+(O^(C|~y))+k[1]+2240044497&4294967295,T=C+(A<<21&4294967295|A>>>11),A=y+(C^(T|~O))+k[8]+1873313359&4294967295,y=T+(A<<6&4294967295|A>>>26),A=O+(T^(y|~C))+k[15]+4264355552&4294967295,O=y+(A<<10&4294967295|A>>>22),A=C+(y^(O|~T))+k[6]+2734768916&4294967295,C=O+(A<<15&4294967295|A>>>17),A=T+(O^(C|~y))+k[13]+1309151649&4294967295,T=C+(A<<21&4294967295|A>>>11),A=y+(C^(T|~O))+k[4]+4149444226&4294967295,y=T+(A<<6&4294967295|A>>>26),A=O+(T^(y|~C))+k[11]+3174756917&4294967295,O=y+(A<<10&4294967295|A>>>22),A=C+(y^(O|~T))+k[2]+718787259&4294967295,C=O+(A<<15&4294967295|A>>>17),A=T+(O^(C|~y))+k[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(C+(A<<21&4294967295|A>>>11))&4294967295,v.g[2]=v.g[2]+C&4294967295,v.g[3]=v.g[3]+O&4294967295}r.prototype.u=function(v,y){y===void 0&&(y=v.length);for(var T=y-this.blockSize,k=this.B,C=this.h,O=0;O<y;){if(C==0)for(;O<=T;)i(this,v,O),O+=this.blockSize;if(typeof v=="string"){for(;O<y;)if(k[C++]=v.charCodeAt(O++),C==this.blockSize){i(this,k),C=0;break}}else for(;O<y;)if(k[C++]=v[O++],C==this.blockSize){i(this,k),C=0;break}}this.h=C,this.o+=y},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;var T=8*this.o;for(y=v.length-8;y<v.length;++y)v[y]=T&255,T/=256;for(this.u(v),v=Array(16),y=T=0;4>y;++y)for(var k=0;32>k;k+=8)v[T++]=this.g[y]>>>k&255;return v};function s(v,y){var T=l;return Object.prototype.hasOwnProperty.call(T,v)?T[v]:T[v]=y(v)}function o(v,y){this.h=y;for(var T=[],k=!0,C=v.length-1;0<=C;C--){var O=v[C]|0;k&&O==y||(T[C]=O,k=!1)}this.g=T}var l={};function u(v){return-128<=v&&128>v?s(v,function(y){return new o([y|0],0>y?-1:0)}):new o([v|0],0>v?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return P(c(-v));for(var y=[],T=1,k=0;v>=T;k++)y[k]=v/T|0,T*=4294967296;return new o(y,0)}function d(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return P(d(v.substring(1),y));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(y,8)),k=p,C=0;C<v.length;C+=8){var O=Math.min(8,v.length-C),A=parseInt(v.substring(C,C+O),y);8>O?(O=c(Math.pow(y,O)),k=k.j(O).add(c(A))):(k=k.j(T),k=k.add(c(A)))}return k}var p=u(0),m=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(x(this))return-P(this).m();for(var v=0,y=1,T=0;T<this.g.length;T++){var k=this.i(T);v+=(0<=k?k:4294967296+k)*y,y*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(R(this))return"0";if(x(this))return"-"+P(this).toString(v);for(var y=c(Math.pow(v,6)),T=this,k="";;){var C=N(T,y).g;T=w(T,C.j(y));var O=((0<T.g.length?T.g[0]:T.h)>>>0).toString(v);if(T=C,R(T))return O+k;for(;6>O.length;)O="0"+O;k=O+k}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function R(v){if(v.h!=0)return!1;for(var y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function x(v){return v.h==-1}t.l=function(v){return v=w(this,v),x(v)?-1:R(v)?0:1};function P(v){for(var y=v.g.length,T=[],k=0;k<y;k++)T[k]=~v.g[k];return new o(T,~v.h).add(m)}t.abs=function(){return x(this)?P(this):this},t.add=function(v){for(var y=Math.max(this.g.length,v.g.length),T=[],k=0,C=0;C<=y;C++){var O=k+(this.i(C)&65535)+(v.i(C)&65535),A=(O>>>16)+(this.i(C)>>>16)+(v.i(C)>>>16);k=A>>>16,O&=65535,A&=65535,T[C]=A<<16|O}return new o(T,T[T.length-1]&-2147483648?-1:0)};function w(v,y){return v.add(P(y))}t.j=function(v){if(R(this)||R(v))return p;if(x(this))return x(v)?P(this).j(P(v)):P(P(this).j(v));if(x(v))return P(this.j(P(v)));if(0>this.l(S)&&0>v.l(S))return c(this.m()*v.m());for(var y=this.g.length+v.g.length,T=[],k=0;k<2*y;k++)T[k]=0;for(k=0;k<this.g.length;k++)for(var C=0;C<v.g.length;C++){var O=this.i(k)>>>16,A=this.i(k)&65535,xt=v.i(C)>>>16,Nr=v.i(C)&65535;T[2*k+2*C]+=A*Nr,_(T,2*k+2*C),T[2*k+2*C+1]+=O*Nr,_(T,2*k+2*C+1),T[2*k+2*C+1]+=A*xt,_(T,2*k+2*C+1),T[2*k+2*C+2]+=O*xt,_(T,2*k+2*C+2)}for(k=0;k<y;k++)T[k]=T[2*k+1]<<16|T[2*k];for(k=y;k<2*y;k++)T[k]=0;return new o(T,0)};function _(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function I(v,y){this.g=v,this.h=y}function N(v,y){if(R(y))throw Error("division by zero");if(R(v))return new I(p,p);if(x(v))return y=N(P(v),y),new I(P(y.g),P(y.h));if(x(y))return y=N(v,P(y)),new I(P(y.g),y.h);if(30<v.g.length){if(x(v)||x(y))throw Error("slowDivide_ only works with positive integers.");for(var T=m,k=y;0>=k.l(v);)T=F(T),k=F(k);var C=U(T,1),O=U(k,1);for(k=U(k,2),T=U(T,2);!R(k);){var A=O.add(k);0>=A.l(v)&&(C=C.add(T),O=A),k=U(k,1),T=U(T,1)}return y=w(v,C.j(y)),new I(C,y)}for(C=p;0<=v.l(y);){for(T=Math.max(1,Math.floor(v.m()/y.m())),k=Math.ceil(Math.log(T)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),O=c(T),A=O.j(y);x(A)||0<A.l(v);)T-=k,O=c(T),A=O.j(y);R(O)&&(O=m),C=C.add(O),v=w(v,A)}return new I(C,v)}t.A=function(v){return N(this,v).h},t.and=function(v){for(var y=Math.max(this.g.length,v.g.length),T=[],k=0;k<y;k++)T[k]=this.i(k)&v.i(k);return new o(T,this.h&v.h)},t.or=function(v){for(var y=Math.max(this.g.length,v.g.length),T=[],k=0;k<y;k++)T[k]=this.i(k)|v.i(k);return new o(T,this.h|v.h)},t.xor=function(v){for(var y=Math.max(this.g.length,v.g.length),T=[],k=0;k<y;k++)T[k]=this.i(k)^v.i(k);return new o(T,this.h^v.h)};function F(v){for(var y=v.g.length+1,T=[],k=0;k<y;k++)T[k]=v.i(k)<<1|v.i(k-1)>>>31;return new o(T,v.h)}function U(v,y){var T=y>>5;y%=32;for(var k=v.g.length-T,C=[],O=0;O<k;O++)C[O]=0<y?v.i(O+T)>>>y|v.i(O+T+1)<<32-y:v.i(O+T);return new o(C,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,lE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Hr=o}).apply(typeof Fy<"u"?Fy:typeof self<"u"?self:typeof window<"u"?window:{});var qa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var uE,Ks,cE,hl,Ad,hE,dE,fE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof qa=="object"&&qa];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var D=a[g];if(!(D in f))break e;f=f[D]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,g=!1,D={next:function(){if(!g&&f<a.length){var V=f++;return{value:h(V,a[V]),done:!1}}return g=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,g),a.apply(h,D)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function S(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function R(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,D,V){for(var z=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)z[ce-2]=arguments[ce];return h.prototype[D].apply(g,z)}}function x(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function P(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const D=a.length||0,V=g.length||0;a.length=D+V;for(let z=0;z<V;z++)a[D+z]=g[z]}else a.push(g)}}class w{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(a){return/^[\s\xa0]*$/.test(a)}function I(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function N(a){return N[" "](a),a}N[" "]=function(){};var F=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function U(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function v(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(a,h){let f,g;for(let D=1;D<arguments.length;D++){g=arguments[D];for(f in g)a[f]=g[f];for(let V=0;V<T.length;V++)f=T[V],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function C(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function O(a){l.setTimeout(()=>{throw a},0)}function A(){var a=Q;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class xt{constructor(){this.h=this.g=null}add(h,f){const g=Nr.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Nr=new w(()=>new ys,a=>a.reset());class ys{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let mn,B=!1,Q=new xt,J=()=>{const a=l.Promise.resolve(void 0);mn=()=>{a.then(ve)}};var ve=()=>{for(var a;a=A();){try{a.h.call(a.g)}catch(f){O(f)}var h=Nr;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}B=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Re(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var gn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function yn(a,h){if(Re.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(F){e:{try{N(h.nodeName);var D=!0;break e}catch{}D=!1}D||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:_n[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&yn.aa.h.call(this)}}R(yn,Re);var _n={2:"touch",3:"pen",4:"mouse"};yn.prototype.h=function(){yn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var vn="closure_listenable_"+(1e6*Math.random()|0),cI=0;function hI(a,h,f,g,D){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=D,this.key=++cI,this.da=this.fa=!1}function la(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ua(a){this.src=a,this.g={},this.h=0}ua.prototype.add=function(a,h,f,g,D){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var z=oc(a,h,g,D);return-1<z?(h=a[z],f||(h.fa=!1)):(h=new hI(h,this.src,V,!!g,D),h.fa=f,a.push(h)),h};function sc(a,h){var f=h.type;if(f in a.g){var g=a.g[f],D=Array.prototype.indexOf.call(g,h,void 0),V;(V=0<=D)&&Array.prototype.splice.call(g,D,1),V&&(la(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function oc(a,h,f,g){for(var D=0;D<a.length;++D){var V=a[D];if(!V.da&&V.listener==h&&V.capture==!!f&&V.ha==g)return D}return-1}var ac="closure_lm_"+(1e6*Math.random()|0),lc={};function Kp(a,h,f,g,D){if(Array.isArray(h)){for(var V=0;V<h.length;V++)Kp(a,h[V],f,g,D);return null}return f=Yp(f),a&&a[vn]?a.K(h,f,c(g)?!!g.capture:!1,D):dI(a,h,f,!1,g,D)}function dI(a,h,f,g,D,V){if(!h)throw Error("Invalid event type");var z=c(D)?!!D.capture:!!D,ce=cc(a);if(ce||(a[ac]=ce=new ua(a)),f=ce.add(h,f,g,z,V),f.proxy)return f;if(g=fI(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)gn||(D=z),D===void 0&&(D=!1),a.addEventListener(h.toString(),g,D);else if(a.attachEvent)a.attachEvent(Qp(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function fI(){function a(f){return h.call(a.src,a.listener,f)}const h=pI;return a}function Gp(a,h,f,g,D){if(Array.isArray(h))for(var V=0;V<h.length;V++)Gp(a,h[V],f,g,D);else g=c(g)?!!g.capture:!!g,f=Yp(f),a&&a[vn]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],f=oc(V,f,g,D),-1<f&&(la(V[f]),Array.prototype.splice.call(V,f,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=cc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=oc(h,f,g,D)),(f=-1<a?h[a]:null)&&uc(f))}function uc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[vn])sc(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(Qp(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=cc(h))?(sc(f,a),f.h==0&&(f.src=null,h[ac]=null)):la(a)}}}function Qp(a){return a in lc?lc[a]:lc[a]="on"+a}function pI(a,h){if(a.da)a=!0;else{h=new yn(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&uc(a),a=f.call(g,h)}return a}function cc(a){return a=a[ac],a instanceof ua?a:null}var hc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yp(a){return typeof a=="function"?a:(a[hc]||(a[hc]=function(h){return a.handleEvent(h)}),a[hc])}function Qe(){ue.call(this),this.i=new ua(this),this.M=this,this.F=null}R(Qe,ue),Qe.prototype[vn]=!0,Qe.prototype.removeEventListener=function(a,h,f,g){Gp(this,a,h,f,g)};function at(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Re(h,a);else if(h instanceof Re)h.target=h.target||a;else{var D=h;h=new Re(g,a),k(h,D)}if(D=!0,f)for(var V=f.length-1;0<=V;V--){var z=h.g=f[V];D=ca(z,g,!0,h)&&D}if(z=h.g=a,D=ca(z,g,!0,h)&&D,D=ca(z,g,!1,h)&&D,f)for(V=0;V<f.length;V++)z=h.g=f[V],D=ca(z,g,!1,h)&&D}Qe.prototype.N=function(){if(Qe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)la(f[g]);delete a.g[h],a.h--}}this.F=null},Qe.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},Qe.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function ca(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var D=!0,V=0;V<h.length;++V){var z=h[V];if(z&&!z.da&&z.capture==f){var ce=z.listener,je=z.ha||z.src;z.fa&&sc(a.i,z),D=ce.call(je,g)!==!1&&D}}return D&&!g.defaultPrevented}function Xp(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Jp(a){a.g=Xp(()=>{a.g=null,a.i&&(a.i=!1,Jp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class mI extends ue{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Jp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _s(a){ue.call(this),this.h=a,this.g={}}R(_s,ue);var Zp=[];function em(a){U(a.g,function(h,f){this.g.hasOwnProperty(f)&&uc(h)},a),a.g={}}_s.prototype.N=function(){_s.aa.N.call(this),em(this)},_s.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var dc=l.JSON.stringify,gI=l.JSON.parse,yI=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function fc(){}fc.prototype.h=null;function tm(a){return a.h||(a.h=a.i())}function nm(){}var vs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pc(){Re.call(this,"d")}R(pc,Re);function mc(){Re.call(this,"c")}R(mc,Re);var Dr={},rm=null;function ha(){return rm=rm||new Qe}Dr.La="serverreachability";function im(a){Re.call(this,Dr.La,a)}R(im,Re);function ws(a){const h=ha();at(h,new im(h))}Dr.STAT_EVENT="statevent";function sm(a,h){Re.call(this,Dr.STAT_EVENT,a),this.stat=h}R(sm,Re);function lt(a){const h=ha();at(h,new sm(h,a))}Dr.Ma="timingevent";function om(a,h){Re.call(this,Dr.Ma,a),this.size=h}R(om,Re);function Es(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Ts(){this.g=!0}Ts.prototype.xa=function(){this.g=!1};function _I(a,h,f,g,D,V){a.info(function(){if(a.g)if(V)for(var z="",ce=V.split("&"),je=0;je<ce.length;je++){var ie=ce[je].split("=");if(1<ie.length){var Ye=ie[0];ie=ie[1];var Xe=Ye.split("_");z=2<=Xe.length&&Xe[1]=="type"?z+(Ye+"="+ie+"&"):z+(Ye+"=redacted&")}}else z=null;else z=V;return"XMLHTTP REQ ("+g+") [attempt "+D+"]: "+h+`
`+f+`
`+z})}function vI(a,h,f,g,D,V,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+D+"]: "+h+`
`+f+`
`+V+" "+z})}function di(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+EI(a,f)+(g?" "+g:"")})}function wI(a,h){a.info(function(){return"TIMEOUT: "+h})}Ts.prototype.info=function(){};function EI(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var D=g[1];if(Array.isArray(D)&&!(1>D.length)){var V=D[0];if(V!="noop"&&V!="stop"&&V!="close")for(var z=1;z<D.length;z++)D[z]=""}}}}return dc(f)}catch{return h}}var da={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},am={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gc;function fa(){}R(fa,fc),fa.prototype.g=function(){return new XMLHttpRequest},fa.prototype.i=function(){return{}},gc=new fa;function Kn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new _s(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new lm}function lm(){this.i=null,this.g="",this.h=!1}var um={},yc={};function _c(a,h,f){a.L=1,a.v=ya(wn(h)),a.m=f,a.P=!0,cm(a,null)}function cm(a,h){a.F=Date.now(),pa(a),a.A=wn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Sm(f.i,"t",g),a.C=0,f=a.j.J,a.h=new lm,a.g=Bm(a.j,f?h:null,!a.m),0<a.O&&(a.M=new mI(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(Zp[0]=D.toString()),D=Zp);for(var V=0;V<D.length;V++){var z=Kp(f,D[V],g||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ws(),_I(a.i,a.u,a.A,a.l,a.R,a.m)}Kn.prototype.ca=function(a){a=a.target;const h=this.M;h&&En(a)==3?h.j():this.Y(a)},Kn.prototype.Y=function(a){try{if(a==this.g)e:{const Xe=En(this.g);var h=this.g.Ba();const mi=this.g.Z();if(!(3>Xe)&&(Xe!=3||this.g&&(this.h.h||this.g.oa()||Nm(this.g)))){this.J||Xe!=4||h==7||(h==8||0>=mi?ws(3):ws(2)),vc(this);var f=this.g.Z();this.X=f;t:if(hm(this)){var g=Nm(this.g);a="";var D=g.length,V=En(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Or(this),Is(this);var z="";break t}this.h.i=new l.TextDecoder}for(h=0;h<D;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(V&&h==D-1)});g.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,vI(this.i,this.u,this.A,this.l,this.R,Xe,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ce,je=this.g;if((ce=je.g?je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(ce)){var ie=ce;break t}}ie=null}if(f=ie)di(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wc(this,f);else{this.o=!1,this.s=3,lt(12),Or(this),Is(this);break e}}if(this.P){f=!0;let Ut;for(;!this.J&&this.C<z.length;)if(Ut=TI(this,z),Ut==yc){Xe==4&&(this.s=4,lt(14),f=!1),di(this.i,this.l,null,"[Incomplete Response]");break}else if(Ut==um){this.s=4,lt(15),di(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else di(this.i,this.l,Ut,null),wc(this,Ut);if(hm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Xe!=4||z.length!=0||this.h.h||(this.s=1,lt(16),f=!1),this.o=this.o&&f,!f)di(this.i,this.l,z,"[Invalid Chunked Response]"),Or(this),Is(this);else if(0<z.length&&!this.W){this.W=!0;var Ye=this.j;Ye.g==this&&Ye.ba&&!Ye.M&&(Ye.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Ac(Ye),Ye.M=!0,lt(11))}}else di(this.i,this.l,z,null),wc(this,z);Xe==4&&Or(this),this.o&&!this.J&&(Xe==4?Fm(this.j,this):(this.o=!1,pa(this)))}else UI(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),Or(this),Is(this)}}}catch{}finally{}};function hm(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function TI(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?yc:(f=Number(h.substring(f,g)),isNaN(f)?um:(g+=1,g+f>h.length?yc:(h=h.slice(g,g+f),a.C=g+f,h)))}Kn.prototype.cancel=function(){this.J=!0,Or(this)};function pa(a){a.S=Date.now()+a.I,dm(a,a.I)}function dm(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Es(m(a.ba,a),h)}function vc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Kn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(wI(this.i,this.A),this.L!=2&&(ws(),lt(17)),Or(this),this.s=2,Is(this)):dm(this,this.S-a)};function Is(a){a.j.G==0||a.J||Fm(a.j,a)}function Or(a){vc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,em(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function wc(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Ec(f.h,a))){if(!a.K&&Ec(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var D=g;if(D[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Ia(f),Ea(f);else break e;kc(f),lt(18)}}else f.za=D[1],0<f.za-f.T&&37500>D[2]&&f.F&&f.v==0&&!f.C&&(f.C=Es(m(f.Za,f),6e3));if(1>=mm(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Vr(f,11)}else if((a.K||f.g==a)&&Ia(f),!_(h))for(D=f.Da.g.parse(h),h=0;h<D.length;h++){let ie=D[h];if(f.T=ie[0],ie=ie[1],f.G==2)if(ie[0]=="c"){f.K=ie[1],f.ia=ie[2];const Ye=ie[3];Ye!=null&&(f.la=Ye,f.j.info("VER="+f.la));const Xe=ie[4];Xe!=null&&(f.Aa=Xe,f.j.info("SVER="+f.Aa));const mi=ie[5];mi!=null&&typeof mi=="number"&&0<mi&&(g=1.5*mi,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Ut=a.g;if(Ut){const ka=Ut.g?Ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ka){var V=g.h;V.g||ka.indexOf("spdy")==-1&&ka.indexOf("quic")==-1&&ka.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Tc(V,V.h),V.h=null))}if(g.D){const Rc=Ut.g?Ut.g.getResponseHeader("X-HTTP-Session-Id"):null;Rc&&(g.ya=Rc,fe(g.I,g.D,Rc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var z=a;if(g.qa=zm(g,g.J?g.ia:null,g.W),z.K){gm(g.h,z);var ce=z,je=g.L;je&&(ce.I=je),ce.B&&(vc(ce),pa(ce)),g.g=z}else Lm(g);0<f.i.length&&Ta(f)}else ie[0]!="stop"&&ie[0]!="close"||Vr(f,7);else f.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?Vr(f,7):Sc(f):ie[0]!="noop"&&f.l&&f.l.ta(ie),f.v=0)}}ws(4)}catch{}}var II=class{constructor(a,h){this.g=a,this.map=h}};function fm(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function pm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function mm(a){return a.h?1:a.g?a.g.size:0}function Ec(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Tc(a,h){a.g?a.g.add(h):a.h=h}function gm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}fm.prototype.cancel=function(){if(this.i=ym(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ym(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return x(a.i)}function SI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function kI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function _m(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=kI(a),g=SI(a),D=g.length,V=0;V<D;V++)h.call(void 0,g[V],f&&f[V],a)}var vm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function AI(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),D=null;if(0<=g){var V=a[f].substring(0,g);D=a[f].substring(g+1)}else V=a[f];h(V,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function br(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof br){this.h=a.h,ma(this,a.j),this.o=a.o,this.g=a.g,ga(this,a.s),this.l=a.l;var h=a.i,f=new As;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),wm(this,f),this.m=a.m}else a&&(h=String(a).match(vm))?(this.h=!1,ma(this,h[1]||"",!0),this.o=Ss(h[2]||""),this.g=Ss(h[3]||"",!0),ga(this,h[4]),this.l=Ss(h[5]||"",!0),wm(this,h[6]||"",!0),this.m=Ss(h[7]||"")):(this.h=!1,this.i=new As(null,this.h))}br.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ks(h,Em,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ks(h,Em,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ks(f,f.charAt(0)=="/"?PI:CI,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ks(f,NI)),a.join("")};function wn(a){return new br(a)}function ma(a,h,f){a.j=f?Ss(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ga(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function wm(a,h,f){h instanceof As?(a.i=h,DI(a.i,a.h)):(f||(h=ks(h,xI)),a.i=new As(h,a.h))}function fe(a,h,f){a.i.set(h,f)}function ya(a){return fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ss(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ks(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,RI),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function RI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Em=/[#\/\?@]/g,CI=/[#\?:]/g,PI=/[#\?]/g,xI=/[#\?@]/g,NI=/#/g;function As(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Gn(a){a.g||(a.g=new Map,a.h=0,a.i&&AI(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=As.prototype,t.add=function(a,h){Gn(this),this.i=null,a=fi(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Tm(a,h){Gn(a),h=fi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Im(a,h){return Gn(a),h=fi(a,h),a.g.has(h)}t.forEach=function(a,h){Gn(this),this.g.forEach(function(f,g){f.forEach(function(D){a.call(h,D,g,this)},this)},this)},t.na=function(){Gn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const D=a[g];for(let V=0;V<D.length;V++)f.push(h[g])}return f},t.V=function(a){Gn(this);let h=[];if(typeof a=="string")Im(this,a)&&(h=h.concat(this.g.get(fi(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Gn(this),this.i=null,a=fi(this,a),Im(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Sm(a,h,f){Tm(a,h),0<f.length&&(a.i=null,a.g.set(fi(a,h),x(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const V=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var D=V;z[g]!==""&&(D+="="+encodeURIComponent(String(z[g]))),a.push(D)}}return this.i=a.join("&")};function fi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function DI(a,h){h&&!a.j&&(Gn(a),a.i=null,a.g.forEach(function(f,g){var D=g.toLowerCase();g!=D&&(Tm(this,g),Sm(this,D,f))},a)),a.j=h}function OI(a,h){const f=new Ts;if(l.Image){const g=new Image;g.onload=S(Qn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=S(Qn,f,"TestLoadImage: error",!1,h,g),g.onabort=S(Qn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=S(Qn,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function bI(a,h){const f=new Ts,g=new AbortController,D=setTimeout(()=>{g.abort(),Qn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(D),V.ok?Qn(f,"TestPingServer: ok",!0,h):Qn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),Qn(f,"TestPingServer: error",!1,h)})}function Qn(a,h,f,g,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),g(f)}catch{}}function VI(){this.g=new yI}function LI(a,h,f){const g=f||"";try{_m(a,function(D,V){let z=D;c(D)&&(z=dc(D)),h.push(g+V+"="+encodeURIComponent(z))})}catch(D){throw h.push(g+"type="+encodeURIComponent("_badmap")),D}}function _a(a){this.l=a.Ub||null,this.j=a.eb||!1}R(_a,fc),_a.prototype.g=function(){return new va(this.l,this.j)},_a.prototype.i=function(a){return function(){return a}}({});function va(a,h){Qe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(va,Qe),t=va.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Cs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Cs(this)),this.g&&(this.readyState=3,Cs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;km(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function km(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Rs(this):Cs(this),this.readyState==3&&km(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Rs(this))},t.Qa=function(a){this.g&&(this.response=a,Rs(this))},t.ga=function(){this.g&&Rs(this)};function Rs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Cs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Cs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(va.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Am(a){let h="";return U(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Ic(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Am(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):fe(a,h,f))}function ke(a){Qe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(ke,Qe);var MI=/^https?$/i,FI=["POST","PUT"];t=ke.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gc.g(),this.v=this.o?tm(this.o):tm(gc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){Rm(this,V);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var D in g)f.set(D,g[D]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())f.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),D=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(FI,h,void 0))||g||D||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,z]of f)this.g.setRequestHeader(V,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{xm(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Rm(this,V)}};function Rm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Cm(a),wa(a)}function Cm(a){a.A||(a.A=!0,at(a,"complete"),at(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,at(this,"complete"),at(this,"abort"),wa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wa(this,!0)),ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Pm(this):this.bb())},t.bb=function(){Pm(this)};function Pm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||En(a)!=4||a.Z()!=2)){if(a.u&&En(a)==4)Xp(a.Ea,0,a);else if(at(a,"readystatechange"),En(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=z===0){var D=String(a.D).match(vm)[1]||null;!D&&l.self&&l.self.location&&(D=l.self.location.protocol.slice(0,-1)),g=!MI.test(D?D.toLowerCase():"")}f=g}if(f)at(a,"complete"),at(a,"success");else{a.m=6;try{var V=2<En(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Cm(a)}}finally{wa(a)}}}}function wa(a,h){if(a.g){xm(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||at(a,"ready");try{f.onreadystatechange=g}catch{}}}function xm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function En(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<En(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),gI(h)}};function Nm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function UI(a){const h={};a=(a.g&&2<=En(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(_(a[g]))continue;var f=C(a[g]);const D=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=h[D]||[];h[D]=V,V.push(f)}v(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ps(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Dm(a){this.Aa=0,this.i=[],this.j=new Ts,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ps("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ps("baseRetryDelayMs",5e3,a),this.cb=Ps("retryDelaySeedMs",1e4,a),this.Wa=Ps("forwardChannelMaxRetries",2,a),this.wa=Ps("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new fm(a&&a.concurrentRequestLimit),this.Da=new VI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Dm.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){lt(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=zm(this,null,this.W),Ta(this)};function Sc(a){if(Om(a),a.G==3){var h=a.U++,f=wn(a.I);if(fe(f,"SID",a.K),fe(f,"RID",h),fe(f,"TYPE","terminate"),xs(a,f),h=new Kn(a,a.j,h),h.L=2,h.v=ya(wn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Bm(h.j,null),h.g.ea(h.v)),h.F=Date.now(),pa(h)}jm(a)}function Ea(a){a.g&&(Ac(a),a.g.cancel(),a.g=null)}function Om(a){Ea(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ia(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ta(a){if(!pm(a.h)&&!a.s){a.s=!0;var h=a.Ga;mn||J(),B||(mn(),B=!0),Q.add(h,a),a.B=0}}function jI(a,h){return mm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Es(m(a.Ga,a,h),Um(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new Kn(this,this.j,a);let V=this.o;if(this.S&&(V?(V=y(V),k(V,this.S)):V=this.S),this.m!==null||this.O||(D.H=V,V=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Vm(this,D,h),f=wn(this.I),fe(f,"RID",a),fe(f,"CVER",22),this.D&&fe(f,"X-HTTP-Session-Id",this.D),xs(this,f),V&&(this.O?h="headers="+encodeURIComponent(String(Am(V)))+"&"+h:this.m&&Ic(f,this.m,V)),Tc(this.h,D),this.Ua&&fe(f,"TYPE","init"),this.P?(fe(f,"$req",h),fe(f,"SID","null"),D.T=!0,_c(D,f,null)):_c(D,f,h),this.G=2}}else this.G==3&&(a?bm(this,a):this.i.length==0||pm(this.h)||bm(this))};function bm(a,h){var f;h?f=h.l:f=a.U++;const g=wn(a.I);fe(g,"SID",a.K),fe(g,"RID",f),fe(g,"AID",a.T),xs(a,g),a.m&&a.o&&Ic(g,a.m,a.o),f=new Kn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Vm(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Tc(a.h,f),_c(f,g,h)}function xs(a,h){a.H&&U(a.H,function(f,g){fe(h,g,f)}),a.l&&_m({},function(f,g){fe(h,g,f)})}function Vm(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var D=a.i;let V=-1;for(;;){const z=["count="+f];V==-1?0<f?(V=D[0].g,z.push("ofs="+V)):V=0:z.push("ofs="+V);let ce=!0;for(let je=0;je<f;je++){let ie=D[je].g;const Ye=D[je].map;if(ie-=V,0>ie)V=Math.max(0,D[je].g-100),ce=!1;else try{LI(Ye,z,"req"+ie+"_")}catch{g&&g(Ye)}}if(ce){g=z.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function Lm(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;mn||J(),B||(mn(),B=!0),Q.add(h,a),a.v=0}}function kc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Es(m(a.Fa,a),Um(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Mm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Es(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,lt(10),Ea(this),Mm(this))};function Ac(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Mm(a){a.g=new Kn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=wn(a.qa);fe(h,"RID","rpc"),fe(h,"SID",a.K),fe(h,"AID",a.T),fe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&fe(h,"TO",a.ja),fe(h,"TYPE","xmlhttp"),xs(a,h),a.m&&a.o&&Ic(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=ya(wn(h)),f.m=null,f.P=!0,cm(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Ea(this),kc(this),lt(19))};function Ia(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Fm(a,h){var f=null;if(a.g==h){Ia(a),Ac(a),a.g=null;var g=2}else if(Ec(a.h,h))f=h.D,gm(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var D=a.B;g=ha(),at(g,new om(g,f)),Ta(a)}else Lm(a);else if(D=h.s,D==3||D==0&&0<h.X||!(g==1&&jI(a,h)||g==2&&kc(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),D){case 1:Vr(a,5);break;case 4:Vr(a,10);break;case 3:Vr(a,6);break;default:Vr(a,2)}}}function Um(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Vr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const D=!g;g=new br(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ma(g,"https"),ya(g),D?OI(g.toString(),f):bI(g.toString(),f)}else lt(2);a.G=0,a.l&&a.l.sa(h),jm(a),Om(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function jm(a){if(a.G=0,a.ka=[],a.l){const h=ym(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ka,h),P(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function zm(a,h,f){var g=f instanceof br?wn(f):new br(f);if(g.g!="")h&&(g.g=h+"."+g.g),ga(g,g.s);else{var D=l.location;g=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;var V=new br(null);g&&ma(V,g),h&&(V.g=h),D&&ga(V,D),f&&(V.l=f),g=V}return f=a.D,h=a.ya,f&&h&&fe(g,f,h),fe(g,"VER",a.la),xs(a,g),g}function Bm(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new ke(new _a({eb:f})):new ke(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function $m(){}t=$m.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Sa(){}Sa.prototype.g=function(a,h){return new Et(a,h)};function Et(a,h){Qe.call(this),this.g=new Dm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!_(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new pi(this)}R(Et,Qe),Et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){Sc(this.g)},Et.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=dc(a),a=f);h.i.push(new II(h.Ya++,a)),h.G==3&&Ta(h)},Et.prototype.N=function(){this.g.l=null,delete this.j,Sc(this.g),delete this.g,Et.aa.N.call(this)};function qm(a){pc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(qm,pc);function Wm(){mc.call(this),this.status=1}R(Wm,mc);function pi(a){this.g=a}R(pi,$m),pi.prototype.ua=function(){at(this.g,"a")},pi.prototype.ta=function(a){at(this.g,new qm(a))},pi.prototype.sa=function(a){at(this.g,new Wm)},pi.prototype.ra=function(){at(this.g,"b")},Sa.prototype.createWebChannel=Sa.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,fE=function(){return new Sa},dE=function(){return ha()},hE=Dr,Ad={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},da.NO_ERROR=0,da.TIMEOUT=8,da.HTTP_ERROR=6,hl=da,am.COMPLETE="complete",cE=am,nm.EventType=vs,vs.OPEN="a",vs.CLOSE="b",vs.ERROR="c",vs.MESSAGE="d",Qe.prototype.listen=Qe.prototype.K,Ks=nm,ke.prototype.listenOnce=ke.prototype.L,ke.prototype.getLastError=ke.prototype.Ka,ke.prototype.getLastErrorCode=ke.prototype.Ba,ke.prototype.getStatus=ke.prototype.Z,ke.prototype.getResponseJson=ke.prototype.Oa,ke.prototype.getResponseText=ke.prototype.oa,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Ha,uE=ke}).apply(typeof qa<"u"?qa:typeof self<"u"?self:typeof window<"u"?window:{});const Uy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ps="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=new zf("@firebase/firestore");function Us(){return ei.logLevel}function W(t,...e){if(ei.logLevel<=te.DEBUG){const n=e.map(Jf);ei.debug(`Firestore (${ps}): ${t}`,...n)}}function zn(t,...e){if(ei.logLevel<=te.ERROR){const n=e.map(Jf);ei.error(`Firestore (${ps}): ${t}`,...n)}}function Zi(t,...e){if(ei.logLevel<=te.WARN){const n=e.map(Jf);ei.warn(`Firestore (${ps}): ${t}`,...n)}}function Jf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${ps}) INTERNAL ASSERTION FAILED: `+t;throw zn(e),new Error(e)}function le(t,e){t||G()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Jt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class _x{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class vx{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){le(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new bn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new bn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new bn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string"),new pE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string"),new tt(e)}}class wx{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ex{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new wx(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Tx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ix{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){le(this.o===void 0);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(le(typeof n.token=="string"),this.R=n.token,new Tx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Sx(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function es(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Le(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Le(0,0))}static max(){return new Y(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return bo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class me extends bo{construct(e,n,r){return new me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new me(n)}static emptyPath(){return new me([])}}const kx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends bo{construct(e,n,r){return new qe(e,n,r)}static isValidIdentifier(e){return kx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(n)}static emptyPath(){return new qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(me.fromString(e))}static fromName(e){return new H(me.fromString(e).popFirst(5))}static empty(){return new H(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new me(e.slice()))}}function Ax(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new Ir(i,H.empty(),e)}function Rx(t){return new Ir(t.readTime,t.key,-1)}class Ir{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ir(Y.min(),H.empty(),-1)}static max(){return new Ir(Y.max(),H.empty(),-1)}}function Cx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==Px)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Nx(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ea(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Zf.oe=-1;function Lu(t){return t==null}function Yl(t){return t===0&&1/t==-1/0}function Dx(t){return typeof t=="number"&&Number.isInteger(t)&&!Yl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ui(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wa(this.root,e,this.comparator,!0)}}class Wa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Be.RED,this.left=i??Be.EMPTY,this.right=s??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Be(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Be.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new zy(this.data.getIterator())}getIteratorFrom(e){return new zy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class zy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new St([])}unionWith(e){let n=new He(qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new St(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return es(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new yE("Invalid base64 string: "+s):s}}(e);return new Ge(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ge(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const Ox=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sr(t){if(le(!!t),typeof t=="string"){let e=0;const n=Ox.exec(t);if(le(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ti(t){return typeof t=="string"?Ge.fromBase64String(t):Ge.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function tp(t){const e=t.mapValue.fields.__previous_value__;return ep(e)?tp(e):e}function Vo(t){const e=Sr(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Lo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Lo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Lo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha={mapValue:{}};function ni(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ep(t)?4:Lx(t)?9007199254740991:Vx(t)?10:11:G()}function cn(t,e){if(t===e)return!0;const n=ni(t);if(n!==ni(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vo(t).isEqual(Vo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Sr(i.timestampValue),l=Sr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ti(i.bytesValue).isEqual(ti(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ce(i.geoPointValue.latitude)===Ce(s.geoPointValue.latitude)&&Ce(i.geoPointValue.longitude)===Ce(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ce(i.integerValue)===Ce(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ce(i.doubleValue),l=Ce(s.doubleValue);return o===l?Yl(o)===Yl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return es(t.arrayValue.values||[],e.arrayValue.values||[],cn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(jy(o)!==jy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!cn(o[u],l[u])))return!1;return!0}(t,e);default:return G()}}function Mo(t,e){return(t.values||[]).find(n=>cn(n,e))!==void 0}function ts(t,e){if(t===e)return 0;const n=ni(t),r=ni(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ce(s.integerValue||s.doubleValue),u=Ce(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return By(t.timestampValue,e.timestampValue);case 4:return By(Vo(t),Vo(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(s,o){const l=ti(s),u=ti(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=se(l[c],u[c]);if(d!==0)return d}return se(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=se(Ce(s.latitude),Ce(o.latitude));return l!==0?l:se(Ce(s.longitude),Ce(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return $y(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,d;const p=s.fields||{},m=o.fields||{},S=(l=p.value)===null||l===void 0?void 0:l.arrayValue,R=(u=m.value)===null||u===void 0?void 0:u.arrayValue,x=se(((c=S==null?void 0:S.values)===null||c===void 0?void 0:c.length)||0,((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0);return x!==0?x:$y(S,R)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ha.mapValue&&o===Ha.mapValue)return 0;if(s===Ha.mapValue)return 1;if(o===Ha.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=se(u[p],d[p]);if(m!==0)return m;const S=ts(l[u[p]],c[d[p]]);if(S!==0)return S}return se(u.length,d.length)}(t.mapValue,e.mapValue);default:throw G()}}function By(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=Sr(t),r=Sr(e),i=se(n.seconds,r.seconds);return i!==0?i:se(n.nanos,r.nanos)}function $y(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ts(n[i],r[i]);if(s)return s}return se(n.length,r.length)}function ns(t){return Rd(t)}function Rd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Sr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ti(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Rd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Rd(n.fields[o])}`;return i+"}"}(t.mapValue):G()}function qy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Cd(t){return!!t&&"integerValue"in t}function np(t){return!!t&&"arrayValue"in t}function Wy(t){return!!t&&"nullValue"in t}function Hy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function dl(t){return!!t&&"mapValue"in t}function Vx(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ao(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ui(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ao(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ao(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Lx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!dl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ao(n)}setAll(e){let n=qe.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=ao(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());dl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];dl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ui(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new pt(ao(this.value))}}function _E(t){const e=[];return ui(t.fields,(n,r)=>{const i=new qe([n]);if(dl(r)){const s=_E(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new St(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new rt(e,0,Y.min(),Y.min(),Y.min(),pt.empty(),0)}static newFoundDocument(e,n,r,i){return new rt(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new rt(e,2,n,Y.min(),Y.min(),pt.empty(),0)}static newUnknownDocument(e,n){return new rt(e,3,n,Y.min(),Y.min(),pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n){this.position=e,this.inclusive=n}}function Ky(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=ts(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Gy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n="asc"){this.field=e,this.dir=n}}function Mx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{}class Oe extends vE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Ux(e,n,r):n==="array-contains"?new Bx(e,r):n==="in"?new $x(e,r):n==="not-in"?new qx(e,r):n==="array-contains-any"?new Wx(e,r):new Oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new jx(e,r):new zx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ts(n,this.value)):n!==null&&ni(this.value)===ni(n)&&this.matchesComparison(ts(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yt extends vE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Yt(e,n)}matches(e){return wE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function wE(t){return t.op==="and"}function EE(t){return Fx(t)&&wE(t)}function Fx(t){for(const e of t.filters)if(e instanceof Yt)return!1;return!0}function Pd(t){if(t instanceof Oe)return t.field.canonicalString()+t.op.toString()+ns(t.value);if(EE(t))return t.filters.map(e=>Pd(e)).join(",");{const e=t.filters.map(n=>Pd(n)).join(",");return`${t.op}(${e})`}}function TE(t,e){return t instanceof Oe?function(r,i){return i instanceof Oe&&r.op===i.op&&r.field.isEqual(i.field)&&cn(r.value,i.value)}(t,e):t instanceof Yt?function(r,i){return i instanceof Yt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&TE(o,i.filters[l]),!0):!1}(t,e):void G()}function IE(t){return t instanceof Oe?function(n){return`${n.field.canonicalString()} ${n.op} ${ns(n.value)}`}(t):t instanceof Yt?function(n){return n.op.toString()+" {"+n.getFilters().map(IE).join(" ,")+"}"}(t):"Filter"}class Ux extends Oe{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class jx extends Oe{constructor(e,n){super(e,"in",n),this.keys=SE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class zx extends Oe{constructor(e,n){super(e,"not-in",n),this.keys=SE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function SE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class Bx extends Oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return np(n)&&Mo(n.arrayValue,this.value)}}class $x extends Oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Mo(this.value.arrayValue,n)}}class qx extends Oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Mo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Mo(this.value.arrayValue,n)}}class Wx extends Oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!np(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Mo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Qy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Hx(t,e,n,r,i,s,o)}function rp(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Pd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Lu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ns(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ns(r)).join(",")),e.ue=n}return e.ue}function ip(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Mx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!TE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Gy(t.startAt,e.startAt)&&Gy(t.endAt,e.endAt)}function xd(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Kx(t,e,n,r,i,s,o,l){return new ta(t,e,n,r,i,s,o,l)}function Mu(t){return new ta(t)}function Yy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function kE(t){return t.collectionGroup!==null}function lo(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new He(qe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Jl(s,r))}),n.has(qe.keyField().canonicalString())||e.ce.push(new Jl(qe.keyField(),r))}return e.ce}function ln(t){const e=X(t);return e.le||(e.le=Gx(e,lo(t))),e.le}function Gx(t,e){if(t.limitType==="F")return Qy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Jl(i.field,s)});const n=t.endAt?new Xl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Xl(t.startAt.position,t.startAt.inclusive):null;return Qy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Nd(t,e){const n=t.filters.concat([e]);return new ta(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Dd(t,e,n){return new ta(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Fu(t,e){return ip(ln(t),ln(e))&&t.limitType===e.limitType}function AE(t){return`${rp(ln(t))}|lt:${t.limitType}`}function _i(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>IE(i)).join(", ")}]`),Lu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ns(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ns(i)).join(",")),`Target(${r})`}(ln(t))}; limitType=${t.limitType})`}function Uu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of lo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Ky(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,lo(r),i)||r.endAt&&!function(o,l,u){const c=Ky(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,lo(r),i))}(t,e)}function Qx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function RE(t){return(e,n)=>{let r=!1;for(const i of lo(t)){const s=Yx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Yx(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?ts(u,c):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ui(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return gE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xx=new Se(H.comparator);function Bn(){return Xx}const CE=new Se(H.comparator);function Gs(...t){let e=CE;for(const n of t)e=e.insert(n.key,n);return e}function PE(t){let e=CE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Br(){return uo()}function xE(){return uo()}function uo(){return new ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const Jx=new Se(H.comparator),Zx=new He(H.comparator);function ee(...t){let e=Zx;for(const n of t)e=e.add(n);return e}const eN=new He(se);function tN(){return eN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yl(e)?"-0":e}}function NE(t){return{integerValue:""+t}}function nN(t,e){return Dx(e)?NE(e):sp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(){this._=void 0}}function rN(t,e,n){return t instanceof Fo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ep(s)&&(s=tp(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Uo?OE(t,e):t instanceof jo?bE(t,e):function(i,s){const o=DE(i,s),l=Xy(o)+Xy(i.Pe);return Cd(o)&&Cd(i.Pe)?NE(l):sp(i.serializer,l)}(t,e)}function iN(t,e,n){return t instanceof Uo?OE(t,e):t instanceof jo?bE(t,e):n}function DE(t,e){return t instanceof Zl?function(r){return Cd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Fo extends ju{}class Uo extends ju{constructor(e){super(),this.elements=e}}function OE(t,e){const n=VE(e);for(const r of t.elements)n.some(i=>cn(i,r))||n.push(r);return{arrayValue:{values:n}}}class jo extends ju{constructor(e){super(),this.elements=e}}function bE(t,e){let n=VE(e);for(const r of t.elements)n=n.filter(i=>!cn(i,r));return{arrayValue:{values:n}}}class Zl extends ju{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Xy(t){return Ce(t.integerValue||t.doubleValue)}function VE(t){return np(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e,n){this.field=e,this.transform=n}}function oN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Uo&&i instanceof Uo||r instanceof jo&&i instanceof jo?es(r.elements,i.elements,cn):r instanceof Zl&&i instanceof Zl?cn(r.Pe,i.Pe):r instanceof Fo&&i instanceof Fo}(t.transform,e.transform)}class aN{constructor(e,n){this.version=e,this.transformResults=n}}class Vt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Vt}static exists(e){return new Vt(void 0,e)}static updateTime(e){return new Vt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class zu{}function LE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new op(t.key,Vt.none()):new na(t.key,t.data,Vt.none());{const n=t.data,r=pt.empty();let i=new He(qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new xr(t.key,r,new St(i.toArray()),Vt.none())}}function lN(t,e,n){t instanceof na?function(i,s,o){const l=i.value.clone(),u=Zy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof xr?function(i,s,o){if(!fl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Zy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(ME(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function co(t,e,n,r){return t instanceof na?function(s,o,l,u){if(!fl(s.precondition,o))return l;const c=s.value.clone(),d=e_(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof xr?function(s,o,l,u){if(!fl(s.precondition,o))return l;const c=e_(s.fieldTransforms,u,o),d=o.data;return d.setAll(ME(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return fl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function uN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=DE(r.transform,i||null);s!=null&&(n===null&&(n=pt.empty()),n.set(r.field,s))}return n||null}function Jy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&es(r,i,(s,o)=>oN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class na extends zu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class xr extends zu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ME(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Zy(t,e,n){const r=new Map;le(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,iN(o,l,n[i]))}return r}function e_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,rN(s,o,e))}return r}class op extends zu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cN extends zu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&lN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=co(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=co(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=xE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=LE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&es(this.mutations,e.mutations,(n,r)=>Jy(n,r))&&es(this.baseMutations,e.baseMutations,(n,r)=>Jy(n,r))}}class ap{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){le(e.mutations.length===r.length);let i=function(){return Jx}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ap(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne,ne;function pN(t){switch(t){default:return G();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function FE(t){if(t===void 0)return zn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ne.OK:return L.OK;case Ne.CANCELLED:return L.CANCELLED;case Ne.UNKNOWN:return L.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return L.INTERNAL;case Ne.UNAVAILABLE:return L.UNAVAILABLE;case Ne.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ne.NOT_FOUND:return L.NOT_FOUND;case Ne.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ne.ABORTED:return L.ABORTED;case Ne.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ne.DATA_LOSS:return L.DATA_LOSS;default:return G()}}(ne=Ne||(Ne={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gN=new Hr([4294967295,4294967295],0);function t_(t){const e=mN().encode(t),n=new lE;return n.update(e),new Uint8Array(n.digest())}function n_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Hr([n,r],0),new Hr([i,s],0)]}class lp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Qs(`Invalid padding: ${n}`);if(r<0)throw new Qs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Qs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Qs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Hr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Hr.fromNumber(r)));return i.compare(gN)===1&&(i=new Hr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=t_(e),[r,i]=n_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new lp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=t_(e),[r,i]=n_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Qs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ra.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Bu(Y.min(),i,new Se(se),Bn(),ee())}}class ra{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ra(r,n,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class UE{constructor(e,n){this.targetId=e,this.me=n}}class jE{constructor(e,n,r=Ge.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class r_{constructor(){this.fe=0,this.ge=s_(),this.pe=Ge.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),n=ee(),r=ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new ra(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=s_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class yN{constructor(e){this.Le=e,this.Be=new Map,this.ke=Bn(),this.qe=i_(),this.Qe=new Se(se)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(xd(s))if(r===0){const o=new H(s.path);this.Ue(n,o,rt.newNoDocument(o,Y.min()))}else le(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=ti(r).toUint8Array()}catch(u){if(u instanceof yE)return Zi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new lp(o,i,s)}catch(u){return Zi(u instanceof Qs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&xd(l.target)){const u=new H(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,rt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ee();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Bu(e,n,this.Qe,this.ke,r);return this.ke=Bn(),this.qe=i_(),this.Qe=new Se(se),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new r_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new He(se),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new r_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function i_(){return new Se(H.comparator)}function s_(){return new Se(H.comparator)}const _N={asc:"ASCENDING",desc:"DESCENDING"},vN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wN={and:"AND",or:"OR"};class EN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Od(t,e){return t.useProto3Json||Lu(e)?e:{value:e}}function eu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function TN(t,e){return eu(t,e.toTimestamp())}function un(t){return le(!!t),Y.fromTimestamp(function(n){const r=Sr(n);return new Le(r.seconds,r.nanos)}(t))}function up(t,e){return bd(t,e).canonicalString()}function bd(t,e){const n=function(i){return new me(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function BE(t){const e=me.fromString(t);return le(KE(e)),e}function Vd(t,e){return up(t.databaseId,e.path)}function ch(t,e){const n=BE(e);if(n.get(1)!==t.databaseId.projectId)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(qE(n))}function $E(t,e){return up(t.databaseId,e)}function IN(t){const e=BE(t);return e.length===4?me.emptyPath():qE(e)}function Ld(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qE(t){return le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function o_(t,e,n){return{name:Vd(t,e),fields:n.value.mapValue.fields}}function SN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(le(d===void 0||typeof d=="string"),Ge.fromBase64String(d||"")):(le(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Ge.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?L.UNKNOWN:FE(c.code);return new q(d,c.message||"")}(o);n=new jE(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ch(t,r.document.name),s=un(r.document.updateTime),o=r.document.createTime?un(r.document.createTime):Y.min(),l=new pt({mapValue:{fields:r.document.fields}}),u=rt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new pl(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ch(t,r.document),s=r.readTime?un(r.readTime):Y.min(),o=rt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new pl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ch(t,r.document),s=r.removedTargetIds||[];n=new pl([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new fN(i,s),l=r.targetId;n=new UE(l,o)}}return n}function kN(t,e){let n;if(e instanceof na)n={update:o_(t,e.key,e.value)};else if(e instanceof op)n={delete:Vd(t,e.key)};else if(e instanceof xr)n={update:o_(t,e.key,e.data),updateMask:bN(e.fieldMask)};else{if(!(e instanceof cN))return G();n={verify:Vd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Fo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Uo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof jo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Zl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:TN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function AN(t,e){return t&&t.length>0?(le(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?un(i.updateTime):un(s);return o.isEqual(Y.min())&&(o=un(s)),new aN(o,i.transformResults||[])}(n,e))):[]}function RN(t,e){return{documents:[$E(t,e.path)]}}function CN(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=$E(t,i);const s=function(c){if(c.length!==0)return HE(Yt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:vi(m.field),direction:NN(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Od(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function PN(t){let e=IN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){le(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=WE(p);return m instanceof Yt&&EE(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(R){return new Jl(wi(R.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Lu(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,S=p.values||[];return new Xl(S,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,S=p.values||[];return new Xl(S,m)}(n.endAt)),Kx(e,i,o,s,l,"F",u,c)}function xN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function WE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=wi(n.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=wi(n.unaryFilter.field);return Oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=wi(n.unaryFilter.field);return Oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=wi(n.unaryFilter.field);return Oe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return Oe.create(wi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Yt.create(n.compositeFilter.filters.map(r=>WE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function NN(t){return _N[t]}function DN(t){return vN[t]}function ON(t){return wN[t]}function vi(t){return{fieldPath:t.canonicalString()}}function wi(t){return qe.fromServerFormat(t.fieldPath)}function HE(t){return t instanceof Oe?function(n){if(n.op==="=="){if(Hy(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NAN"}};if(Wy(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Hy(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NOT_NAN"}};if(Wy(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vi(n.field),op:DN(n.op),value:n.value}}}(t):t instanceof Yt?function(n){const r=n.getFilters().map(i=>HE(i));return r.length===1?r[0]:{compositeFilter:{op:ON(n.op),filters:r}}}(t):G()}function bN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function KE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=Ge.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new ur(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e){this.ct=e}}function LN(t){const e=PN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Dd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(){this.un=new FN}addToCollectionParentIndex(e,n){return this.un.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Ir.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Ir.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class FN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new He(me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new He(me.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new rs(0)}static kn(){return new rs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(){this.changes=new ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&co(r.mutation,i,St.empty(),Le.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const i=Br();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Gs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Br();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Bn();const o=uo(),l=function(){return uo()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof xr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),co(d.mutation,c,d.mutation.getFieldMask(),Le.now())):o.set(c.key,St.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return l.set(c,new jN(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=uo();let i=new Se((o,l)=>o-l),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||St.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||ee()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=xE();d.forEach(m=>{if(!s.has(m)){const S=LE(n.get(m),r.get(m));S!==null&&p.set(m,S),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):kE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Br());let l=-1,u=s;return o.next(c=>M.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ee())).next(d=>({batchId:l,changes:PE(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=Gs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Gs();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const c=function(p,m){return new ta(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,rt.newInvalidDocument(d)))});let l=Gs();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&co(d.mutation,c,St.empty(),Le.now()),Uu(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return M.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:un(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:LN(i.bundledQuery),readTime:un(i.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(){this.overlays=new Se(H.comparator),this.Ir=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Br();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Br(),s=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Se((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Br(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Br(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return M.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new dN(n,r));let s=this.Ir.get(n);s===void 0&&(s=ee(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(){this.Tr=new He(Me.Er),this.dr=new He(Me.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Me(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Me(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new H(new me([])),r=new Me(n,e),i=new Me(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new H(new me([])),r=new Me(n,e),i=new Me(n,e+1);let s=ee();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Me(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Me{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return H.comparator(e.key,n.key)||se(e.wr,n.wr)}static Ar(e,n){return se(e.wr,n.wr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new He(Me.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hN(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Me(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Me(n,0),i=new Me(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new He(se);return n.forEach(i=>{const s=new Me(i,0),o=new Me(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new Me(new H(s),0);let l=new He(se);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),M.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){le(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(n.mutations,i=>{const s=new Me(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Me(n,0),i=this.br.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e){this.Mr=e,this.docs=function(){return new Se(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():rt.newInvalidDocument(n))}getEntries(e,n){let r=Bn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():rt.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Bn();const o=n.path,l=new H(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Cx(Rx(d),r)<=0||(i.has(d.key)||Uu(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}Or(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new KN(this)}getSize(e){return M.resolve(this.size)}}class KN extends UN{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(e){this.persistence=e,this.Nr=new ms(n=>rp(n),ip),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new cp,this.targetCount=0,this.kr=rs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),M.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new rs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Kn(n),M.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Zf(0),this.Kr=!1,this.Kr=!0,this.$r=new qN,this.referenceDelegate=e(this),this.Ur=new GN(this),this.indexManager=new MN,this.remoteDocumentCache=function(i){return new HN(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new VN(n),this.Gr=new BN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $N,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new WN(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new YN(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class YN extends xx{constructor(e){super(),this.currentSequenceNumber=e}}class hp{constructor(e){this.persistence=e,this.Jr=new cp,this.Yr=null}static Zr(e){return new hp(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const i=H.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return M.or([()=>M.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ee(),i=ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new dp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return LA()?8:Nx(ot())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new XN;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Us()<=te.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",_i(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(Us()<=te.DEBUG&&W("QueryEngine","Query:",_i(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Us()<=te.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",_i(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ln(n))):M.resolve())}Yi(e,n){if(Yy(n))return M.resolve(null);let r=ln(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Dd(n,null,"F"),r=ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ee(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,Dd(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return Yy(n)||i.isEqual(Y.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?M.resolve(null):(Us()<=te.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_i(n)),this.rs(e,o,n,Ax(i,-1)).next(l=>l))})}ts(e,n){let r=new He(RE(e));return n.forEach((i,s)=>{Uu(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Us()<=te.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",_i(n)),this.Ji.getDocumentsMatchingQuery(e,n,Ir.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Se(se),this._s=new ms(s=>rp(s),ip),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zN(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function e2(t,e,n,r){return new ZN(t,e,n,r)}async function GE(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ee();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function t2(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let S=M.resolve();return m.forEach(R=>{S=S.next(()=>d.getEntry(u,R)).next(x=>{const P=c.docVersions.get(R);le(P!==null),x.version.compareTo(P)<0&&(p.applyToRemoteDocument(x,c),x.isValidDocument()&&(x.setReadTime(c.commitVersion),d.addEntry(x)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ee();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function QE(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function n2(t,e){const n=X(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,p)));let S=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?S=S.withResumeToken(Ge.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):d.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(d.resumeToken,r)),i=i.insert(p,S),function(x,P,w){return x.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(m,S,d)&&l.push(n.Ur.updateTargetData(s,S))});let u=Bn(),c=ee();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(r2(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(Y.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function r2(t,e,n){let r=ee(),i=ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Bn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function i2(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function s2(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new ur(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Md(t,e,n){const r=X(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ea(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function a_(t,e,n){const r=X(t);let i=Y.min(),s=ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=X(u),m=p._s.get(d);return m!==void 0?M.resolve(p.os.get(m)):p.Ur.getTargetData(c,d)}(r,o,ln(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:ee())).next(l=>(o2(r,Qx(e),l),{documents:l,Ts:s})))}function o2(t,e,n){let r=t.us.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class l_{constructor(){this.activeTargetIds=tN()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class a2{constructor(){this.so=new l_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new l_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ka=null;function hh(){return Ka===null?Ka=function(){return 268435456+Math.round(2147483648*Math.random())}():Ka++,"0x"+Ka.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="WebChannelConnection";class h2 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=hh(),u=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(d=>(W("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Zi("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ps}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=u2[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=hh();return new Promise((o,l)=>{const u=new uE;u.setWithCredentials(!0),u.listenOnce(cE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case hl.NO_ERROR:const d=u.getResponseJson();W(et,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case hl.TIMEOUT:W(et,`RPC '${e}' ${s} timed out`),l(new q(L.DEADLINE_EXCEEDED,"Request time out"));break;case hl.HTTP_ERROR:const p=u.getStatus();if(W(et,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const S=m==null?void 0:m.error;if(S&&S.status&&S.message){const R=function(P){const w=P.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(w)>=0?w:L.UNKNOWN}(S.status);l(new q(R,S.message))}else l(new q(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new q(L.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{W(et,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);W(et,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=hh(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=fE(),l=dE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");W(et,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let m=!1,S=!1;const R=new c2({Io:P=>{S?W(et,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(m||(W(et,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),W(et,`RPC '${e}' stream ${i} sending:`,P),p.send(P))},To:()=>p.close()}),x=(P,w,_)=>{P.listen(w,I=>{try{_(I)}catch(N){setTimeout(()=>{throw N},0)}})};return x(p,Ks.EventType.OPEN,()=>{S||(W(et,`RPC '${e}' stream ${i} transport opened.`),R.yo())}),x(p,Ks.EventType.CLOSE,()=>{S||(S=!0,W(et,`RPC '${e}' stream ${i} transport closed`),R.So())}),x(p,Ks.EventType.ERROR,P=>{S||(S=!0,Zi(et,`RPC '${e}' stream ${i} transport errored:`,P),R.So(new q(L.UNAVAILABLE,"The operation could not be completed")))}),x(p,Ks.EventType.MESSAGE,P=>{var w;if(!S){const _=P.data[0];le(!!_);const I=_,N=I.error||((w=I[0])===null||w===void 0?void 0:w.error);if(N){W(et,`RPC '${e}' stream ${i} received error:`,N);const F=N.status;let U=function(T){const k=Ne[T];if(k!==void 0)return FE(k)}(F),v=N.message;U===void 0&&(U=L.INTERNAL,v="Unknown error status: "+F+" with message "+N.message),S=!0,R.So(new q(U,v)),p.close()}else W(et,`RPC '${e}' stream ${i} received:`,_),R.bo(_)}}),x(l,hE.STAT_EVENT,P=>{P.stat===Ad.PROXY?W(et,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===Ad.NOPROXY&&W(et,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function dh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(t){return new EN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new YE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(zn(n.toString()),zn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new q(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class d2 extends XE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=SN(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?un(o.readTime):Y.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Ld(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=xd(u)?{documents:RN(s,u)}:{query:CN(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=zE(s,o.resumeToken);const c=Od(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=eu(s,o.snapshotVersion.toTimestamp());const c=Od(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=xN(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Ld(this.serializer),n.removeTarget=e,this.a_(n)}}class f2 extends XE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return le(!!e.streamToken),this.lastStreamToken=e.streamToken,le(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=AN(e.writeResults,e.commitTime),r=un(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Ld(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>kN(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,bd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(L.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,bd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class m2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(zn(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ci(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=X(u);c.L_.add(4),await ia(c),c.q_.set("Unknown"),c.L_.delete(4),await qu(c)}(this))})}),this.q_=new m2(r,i)}}async function qu(t){if(ci(t))for(const e of t.B_)await e(!0)}async function ia(t){for(const e of t.B_)await e(!1)}function JE(t,e){const n=X(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),gp(n)?mp(n):gs(n).r_()&&pp(n,e))}function fp(t,e){const n=X(t),r=gs(n);n.N_.delete(e),r.r_()&&ZE(n,e),n.N_.size===0&&(r.r_()?r.o_():ci(n)&&n.q_.set("Unknown"))}function pp(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}gs(t).A_(e)}function ZE(t,e){t.Q_.xe(e),gs(t).R_(e)}function mp(t){t.Q_=new yN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),gs(t).start(),t.q_.v_()}function gp(t){return ci(t)&&!gs(t).n_()&&t.N_.size>0}function ci(t){return X(t).L_.size===0}function eT(t){t.Q_=void 0}async function y2(t){t.q_.set("Online")}async function _2(t){t.N_.forEach((e,n)=>{pp(t,e)})}async function v2(t,e){eT(t),gp(t)?(t.q_.M_(e),mp(t)):t.q_.set("Unknown")}async function w2(t,e,n){if(t.q_.set("Online"),e instanceof jE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await tu(t,r)}else if(e instanceof pl?t.Q_.Ke(e):e instanceof UE?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Y.min()))try{const r=await QE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(Ge.EMPTY_BYTE_STRING,d.snapshotVersion)),ZE(s,u);const p=new ur(d.target,u,c,d.sequenceNumber);pp(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await tu(t,r)}}async function tu(t,e,n){if(!ea(e))throw e;t.L_.add(1),await ia(t),t.q_.set("Offline"),n||(n=()=>QE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await qu(t)})}function tT(t,e){return e().catch(n=>tu(t,n,e))}async function Wu(t){const e=X(t),n=kr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;E2(e);)try{const i=await i2(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,T2(e,i)}catch(i){await tu(e,i)}nT(e)&&rT(e)}function E2(t){return ci(t)&&t.O_.length<10}function T2(t,e){t.O_.push(e);const n=kr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function nT(t){return ci(t)&&!kr(t).n_()&&t.O_.length>0}function rT(t){kr(t).start()}async function I2(t){kr(t).p_()}async function S2(t){const e=kr(t);for(const n of t.O_)e.m_(n.mutations)}async function k2(t,e,n){const r=t.O_.shift(),i=ap.from(r,e,n);await tT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Wu(t)}async function A2(t,e){e&&kr(t).V_&&await async function(r,i){if(function(o){return pN(o)&&o!==L.ABORTED}(i.code)){const s=r.O_.shift();kr(r).s_(),await tT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Wu(r)}}(t,e),nT(t)&&rT(t)}async function c_(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=ci(n);n.L_.add(3),await ia(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await qu(n)}async function R2(t,e){const n=X(t);e?(n.L_.delete(2),await qu(n)):e||(n.L_.add(2),await ia(n),n.q_.set("Unknown"))}function gs(t){return t.K_||(t.K_=function(n,r,i){const s=X(n);return s.w_(),new d2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:y2.bind(null,t),Ro:_2.bind(null,t),mo:v2.bind(null,t),d_:w2.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),gp(t)?mp(t):t.q_.set("Unknown")):(await t.K_.stop(),eT(t))})),t.K_}function kr(t){return t.U_||(t.U_=function(n,r,i){const s=X(n);return s.w_(),new f2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:I2.bind(null,t),mo:A2.bind(null,t),f_:S2.bind(null,t),g_:k2.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Wu(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new yp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _p(t,e){if(zn("AsyncQueue",`${e}: ${t}`),ea(t))return new q(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Gs(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new $i(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $i)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new $i;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(){this.W_=new Se(H.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class is{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new is(e,n,$i.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class P2{constructor(){this.queries=d_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=d_(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new q(L.ABORTED,"Firestore shutting down"))}}function d_(){return new ms(t=>AE(t),Fu)}async function vp(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new C2,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=_p(o,`Initialization of query '${_i(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Ep(n)}async function wp(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function x2(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Ep(n)}function N2(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Ep(t){t.Y_.forEach(e=>{e.next()})}var Fd,f_;(f_=Fd||(Fd={})).ea="default",f_.Cache="cache";class Tp{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new is(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=is.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Fd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e){this.key=e}}class sT{constructor(e){this.key=e}}class D2{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=RE(e),this.Ra=new $i(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new h_,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),S=Uu(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),x=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let P=!1;m&&S?m.data.isEqual(S.data)?R!==x&&(r.track({type:3,doc:S}),P=!0):this.ga(m,S)||(r.track({type:2,doc:S}),P=!0,(u&&this.Aa(S,u)>0||c&&this.Aa(S,c)<0)&&(l=!0)):!m&&S?(r.track({type:0,doc:S}),P=!0):m&&!S&&(r.track({type:1,doc:m}),P=!0,(u||c)&&(l=!0)),P&&(S?(o=o.add(S),s=x?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(S,R){const x=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return x(S)-x(R)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new is(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new h_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new sT(r))}),this.da.forEach(r=>{e.has(r)||n.push(new iT(r))}),n}ba(e){this.Ta=e.Ts,this.da=ee();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return is.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class O2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class b2{constructor(e){this.key=e,this.va=!1}}class V2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ms(l=>AE(l),Fu),this.Ma=new Map,this.xa=new Set,this.Oa=new Se(H.comparator),this.Na=new Map,this.La=new cp,this.Ba={},this.ka=new Map,this.qa=rs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function L2(t,e,n=!0){const r=hT(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await oT(r,e,n,!0),i}async function M2(t,e){const n=hT(t);await oT(n,e,!0,!1)}async function oT(t,e,n,r){const i=await s2(t.localStore,ln(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await F2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&JE(t.remoteStore,i),l}async function F2(t,e,n,r,i){t.Ka=(p,m,S)=>async function(x,P,w,_){let I=P.view.ma(w);I.ns&&(I=await a_(x.localStore,P.query,!1).then(({documents:v})=>P.view.ma(v,I)));const N=_&&_.targetChanges.get(P.targetId),F=_&&_.targetMismatches.get(P.targetId)!=null,U=P.view.applyChanges(I,x.isPrimaryClient,N,F);return m_(x,P.targetId,U.wa),U.snapshot}(t,p,m,S);const s=await a_(t.localStore,e,!0),o=new D2(e,s.Ts),l=o.ma(s.documents),u=ra.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);m_(t,n,c.wa);const d=new O2(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function U2(t,e,n){const r=X(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Fu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Md(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&fp(r.remoteStore,i.targetId),Ud(r,i.targetId)}).catch(Zo)):(Ud(r,i.targetId),await Md(r.localStore,i.targetId,!0))}async function j2(t,e){const n=X(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),fp(n.remoteStore,r.targetId))}async function z2(t,e,n){const r=G2(t);try{const i=await function(o,l){const u=X(o),c=Le.now(),d=l.reduce((S,R)=>S.add(R.key),ee());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let R=Bn(),x=ee();return u.cs.getEntries(S,d).next(P=>{R=P,R.forEach((w,_)=>{_.isValidDocument()||(x=x.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,R)).next(P=>{p=P;const w=[];for(const _ of l){const I=uN(_,p.get(_.key).overlayedDocument);I!=null&&w.push(new xr(_.key,I,_E(I.value.mapValue),Vt.exists(!0)))}return u.mutationQueue.addMutationBatch(S,c,w,l)}).next(P=>{m=P;const w=P.applyToLocalDocumentSet(p,x);return u.documentOverlayCache.saveOverlays(S,P.batchId,w)})}).then(()=>({batchId:m.batchId,changes:PE(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Se(se)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await sa(r,i.changes),await Wu(r.remoteStore)}catch(i){const s=_p(i,"Failed to persist write");n.reject(s)}}async function aT(t,e){const n=X(t);try{const r=await n2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?le(o.va):i.removedDocuments.size>0&&(le(o.va),o.va=!1))}),await sa(n,r,e)}catch(r){await Zo(r)}}function p_(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(l)&&(c=!0)}),c&&Ep(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function B2(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Se(H.comparator);o=o.insert(s,rt.newNoDocument(s,Y.min()));const l=ee().add(s),u=new Bu(Y.min(),new Map,new Se(se),o,l);await aT(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Ip(r)}else await Md(r.localStore,e,!1).then(()=>Ud(r,e,n)).catch(Zo)}async function $2(t,e){const n=X(t),r=e.batch.batchId;try{const i=await t2(n.localStore,e);uT(n,r,null),lT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await sa(n,i)}catch(i){await Zo(i)}}async function q2(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(le(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);uT(r,e,n),lT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await sa(r,i)}catch(i){await Zo(i)}}function lT(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function uT(t,e,n){const r=X(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Ud(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||cT(t,r)})}function cT(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(fp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Ip(t))}function m_(t,e,n){for(const r of n)r instanceof iT?(t.La.addReference(r.key,e),W2(t,r)):r instanceof sT?(W("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||cT(t,r.key)):G()}function W2(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(r),Ip(t))}function Ip(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new H(me.fromString(e)),r=t.qa.next();t.Na.set(r,new b2(n)),t.Oa=t.Oa.insert(n,r),JE(t.remoteStore,new ur(ln(Mu(n.path)),r,"TargetPurposeLimboResolution",Zf.oe))}}async function sa(t,e,n){const r=X(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=dp.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=X(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(c,m=>M.forEach(m.$i,S=>d.persistence.referenceDelegate.addReference(p,m.targetId,S)).next(()=>M.forEach(m.Ui,S=>d.persistence.referenceDelegate.removeReference(p,m.targetId,S)))))}catch(p){if(!ea(p))throw p;W("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const S=d.os.get(m),R=S.snapshotVersion,x=S.withLastLimboFreeSnapshotVersion(R);d.os=d.os.insert(m,x)}}}(r.localStore,s))}async function H2(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await GE(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new q(L.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await sa(n,r.hs)}}function K2(t,e){const n=X(t),r=n.Na.get(e);if(r&&r.va)return ee().add(r.key);{let i=ee();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function hT(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=aT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=K2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=B2.bind(null,e),e.Ca.d_=x2.bind(null,e.eventManager),e.Ca.$a=N2.bind(null,e.eventManager),e}function G2(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=q2.bind(null,e),e}class nu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$u(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return e2(this.persistence,new JN,e.initialUser,this.serializer)}Ga(e){return new QN(hp.Zr,this.serializer)}Wa(e){return new a2}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}nu.provider={build:()=>new nu};class jd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>p_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=H2.bind(null,this.syncEngine),await R2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new P2}()}createDatastore(e){const n=$u(e.databaseInfo.databaseId),r=function(s){return new h2(s)}(e.databaseInfo);return function(s,o,l,u){return new p2(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new g2(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>p_(this.syncEngine,n,0),function(){return u_.D()?new u_:new l2}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new V2(i,s,o,l,u,c);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);W("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ia(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}jd.provider={build:()=>new jd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):zn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=tt.UNAUTHENTICATED,this.clientId=mE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=_p(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fh(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await GE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function g_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Y2(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>c_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>c_(e.remoteStore,i)),t._onlineComponents=e}async function Y2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await fh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Zi("Error using user provided cache. Falling back to memory cache: "+n),await fh(t,new nu)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await fh(t,new nu);return t._offlineComponents}async function dT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await g_(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await g_(t,new jd))),t._onlineComponents}function X2(t){return dT(t).then(e=>e.syncEngine)}async function ru(t){const e=await dT(t),n=e.eventManager;return n.onListen=L2.bind(null,e.syncEngine),n.onUnlisten=U2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=M2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=j2.bind(null,e.syncEngine),n}function J2(t,e,n={}){const r=new bn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new Sp({next:m=>{d.Za(),o.enqueueAndForget(()=>wp(s,p));const S=m.docs.has(l);!S&&m.fromCache?c.reject(new q(L.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&m.fromCache&&u&&u.source==="server"?c.reject(new q(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new Tp(Mu(l.path),d,{includeMetadataChanges:!0,_a:!0});return vp(s,p)}(await ru(t),t.asyncQueue,e,n,r)),r.promise}function Z2(t,e,n={}){const r=new bn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new Sp({next:m=>{d.Za(),o.enqueueAndForget(()=>wp(s,p)),m.fromCache&&u.source==="server"?c.reject(new q(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new Tp(l,d,{includeMetadataChanges:!0,_a:!0});return vp(s,p)}(await ru(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(t,e,n){if(!n)throw new q(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function eD(t,e,n,r){if(e===!0&&r===!0)throw new q(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function __(t){if(!H.isDocumentKey(t))throw new q(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function v_(t){if(H.isDocumentKey(t))throw new q(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Hu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function wt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hu(t);throw new q(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}eD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ku{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new w_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new w_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new yx;switch(r.type){case"firstParty":return new Ex(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=y_.get(n);r&&(W("ComponentProvider","Removing Datastore"),y_.delete(n),r.terminate())}(this),Promise.resolve()}}function tD(t,e,n,r={}){var i;const s=(t=wt(t,Ku))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Zi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=tt.MOCK_USER;else{l=Tw(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new q(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new tt(c)}t._authCredentials=new _x(new pE(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hi(this.firestore,e,this._query)}}class it{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new it(this.firestore,e,this._key)}}class wr extends hi{constructor(e,n,r){super(e,n,Mu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new it(this.firestore,null,new H(e))}withConverter(e){return new wr(this.firestore,e,this._path)}}function AV(t,e,...n){if(t=xe(t),pT("collection","path",e),t instanceof Ku){const r=me.fromString(e,...n);return v_(r),new wr(t,null,r)}{if(!(t instanceof it||t instanceof wr))throw new q(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return v_(r),new wr(t.firestore,null,r)}}function zd(t,e,...n){if(t=xe(t),arguments.length===1&&(e=mE.newId()),pT("doc","path",e),t instanceof Ku){const r=me.fromString(e,...n);return __(r),new it(t,null,new H(r))}{if(!(t instanceof it||t instanceof wr))throw new q(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return __(r),new it(t.firestore,t instanceof wr?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new YE(this,"async_queue_retry"),this.Vu=()=>{const r=dh();r&&W("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=dh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=dh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new bn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ea(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw zn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=yp.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function T_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class $n extends Ku{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new E_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new E_(e),this._firestoreClient=void 0,await e}}}function nD(t,e){const n=typeof t=="object"?t:Du(),r=typeof t=="string"?t:"(default)",i=ds(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=vw("firestore");s&&tD(i,...s)}return i}function Gu(t){if(t._terminated)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||rD(t),t._firestoreClient}function rD(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new bx(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,fT(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new Q2(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ss(Ge.fromBase64String(e))}catch(n){throw new q(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ss(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD=/^__.*__$/;class sD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new xr(e,this.data,this.fieldMask,n,this.fieldTransforms):new na(e,this.data,n,this.fieldTransforms)}}class mT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new xr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function gT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Rp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Rp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return iu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(gT(this.Cu)&&iD.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class oD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||$u(e)}Qu(e,n,r,i=!1){return new Rp({Cu:e,methodName:n,qu:r,path:qe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xu(t){const e=t._freezeSettings(),n=$u(t._databaseId);return new oD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yT(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Pp("Data must be an object, but it was:",o,r);const l=_T(r,o);let u,c;if(s.merge)u=new St(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=Bd(e,p,n);if(!o.contains(m))throw new q(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);wT(d,m)||d.push(m)}u=new St(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new sD(new pt(l),u,c)}class Ju extends Yu{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ju}}class Cp extends Yu{_toFieldTransform(e){return new sN(e.path,new Fo)}isEqual(e){return e instanceof Cp}}function aD(t,e,n,r){const i=t.Qu(1,e,n);Pp("Data must be an object, but it was:",i,r);const s=[],o=pt.empty();ui(r,(u,c)=>{const d=xp(e,u,n);c=xe(c);const p=i.Nu(d);if(c instanceof Ju)s.push(d);else{const m=oa(c,p);m!=null&&(s.push(d),o.set(d,m))}});const l=new St(s);return new mT(o,l,i.fieldTransforms)}function lD(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[Bd(e,r,n)],u=[i];if(s.length%2!=0)throw new q(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Bd(e,s[m])),u.push(s[m+1]);const c=[],d=pt.empty();for(let m=l.length-1;m>=0;--m)if(!wT(c,l[m])){const S=l[m];let R=u[m];R=xe(R);const x=o.Nu(S);if(R instanceof Ju)c.push(S);else{const P=oa(R,x);P!=null&&(c.push(S),d.set(S,P))}}const p=new St(c);return new mT(d,p,o.fieldTransforms)}function uD(t,e,n,r=!1){return oa(n,t.Qu(r?4:3,e))}function oa(t,e){if(vT(t=xe(t)))return Pp("Unsupported field value:",e,t),_T(t,e);if(t instanceof Yu)return function(r,i){if(!gT(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=oa(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=xe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return nN(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Le.fromDate(r);return{timestampValue:eu(i.serializer,s)}}if(r instanceof Le){const s=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:eu(i.serializer,s)}}if(r instanceof kp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ss)return{bytesValue:zE(i.serializer,r._byteString)};if(r instanceof it){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:up(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ap)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return sp(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Hu(r)}`)}(t,e)}function _T(t,e){const n={};return gE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ui(t,(r,i)=>{const s=oa(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function vT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof kp||t instanceof ss||t instanceof it||t instanceof Yu||t instanceof Ap)}function Pp(t,e,n){if(!vT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Hu(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Bd(t,e,n){if((e=xe(e))instanceof Qu)return e._internalPath;if(typeof e=="string")return xp(t,e);throw iu("Field path arguments must be of type string or ",t,!1,void 0,n)}const cD=new RegExp("[~\\*/\\[\\]]");function xp(t,e,n){if(e.search(cD)>=0)throw iu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Qu(...e.split("."))._internalPath}catch{throw iu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function iu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(L.INVALID_ARGUMENT,l+t+u)}function wT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Np("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class hD extends ET{data(){return super.data()}}function Np(t,e){return typeof e=="string"?xp(t,e):e instanceof Qu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Dp{}class dD extends Dp{}function RV(t,e,...n){let r=[];e instanceof Dp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Op).length,l=s.filter(u=>u instanceof Zu).length;if(o>1||o>0&&l>0)throw new q(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Zu extends dD{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Zu(e,n,r)}_apply(e){const n=this._parse(e);return IT(e._query,n),new hi(e.firestore,e.converter,Nd(e._query,n))}_parse(e){const n=Xu(e.firestore);return function(s,o,l,u,c,d,p){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new q(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){S_(p,d);const S=[];for(const R of p)S.push(I_(u,s,R));m={arrayValue:{values:S}}}else m=I_(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||S_(p,d),m=uD(l,o,p,d==="in"||d==="not-in");return Oe.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function CV(t,e,n){const r=e,i=Np("where",t);return Zu._create(i,r,n)}class Op extends Dp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Op(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Yt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)IT(o,u),o=Nd(o,u)}(e._query,n),new hi(e.firestore,e.converter,Nd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function I_(t,e,n){if(typeof(n=xe(n))=="string"){if(n==="")throw new q(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!kE(e)&&n.indexOf("/")!==-1)throw new q(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(me.fromString(n));if(!H.isDocumentKey(r))throw new q(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return qy(t,new H(r))}if(n instanceof it)return qy(t,n._key);throw new q(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hu(n)}.`)}function S_(t,e){if(!Array.isArray(t)||t.length===0)throw new q(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function IT(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class fD{convertValue(e,n="none"){switch(ni(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ti(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ui(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ce(o.doubleValue));return new Ap(s)}convertGeoPoint(e){return new kp(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=tp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Vo(e));default:return null}}convertTimestamp(e){const n=Sr(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=me.fromString(e);le(KE(r));const i=new Lo(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||zn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kT extends ET{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ml(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Np("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ml extends kT{data(e={}){return super.data(e)}}class AT{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ys(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ml(this._firestore,this._userDataWriter,r.key,r,new Ys(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new ml(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ys(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new ml(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ys(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:pD(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function pD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mD(t){t=wt(t,it);const e=wt(t.firestore,$n);return J2(Gu(e),t._key).then(n=>RT(e,t,n))}class bp extends fD{constructor(e){super(),this.firestore=e}convertBytes(e){return new ss(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new it(this.firestore,null,n)}}function PV(t){t=wt(t,hi);const e=wt(t.firestore,$n),n=Gu(e),r=new bp(e);return TT(t._query),Z2(n,t._query).then(i=>new AT(e,r,t,i))}function gD(t,e,n){t=wt(t,it);const r=wt(t.firestore,$n),i=ST(t.converter,e,n);return ec(r,[yT(Xu(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Vt.none())])}function xV(t,e,n,...r){t=wt(t,it);const i=wt(t.firestore,$n),s=Xu(i);let o;return o=typeof(e=xe(e))=="string"||e instanceof Qu?lD(s,"updateDoc",t._key,e,n,r):aD(s,"updateDoc",t._key,e),ec(i,[o.toMutation(t._key,Vt.exists(!0))])}function NV(t){return ec(wt(t.firestore,$n),[new op(t._key,Vt.none())])}function DV(t,e){const n=wt(t.firestore,$n),r=zd(t),i=ST(t.converter,e);return ec(n,[yT(Xu(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Vt.exists(!1))]).then(()=>r)}function OV(t,...e){var n,r,i;t=xe(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||T_(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(T_(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,c,d;if(t instanceof it)c=wt(t.firestore,$n),d=Mu(t._key.path),u={next:p=>{e[o]&&e[o](RT(c,t,p))},error:e[o+1],complete:e[o+2]};else{const p=wt(t,hi);c=wt(p.firestore,$n),d=p._query;const m=new bp(c);u={next:S=>{e[o]&&e[o](new AT(c,m,p,S))},error:e[o+1],complete:e[o+2]},TT(t._query)}return function(m,S,R,x){const P=new Sp(x),w=new Tp(S,P,R);return m.asyncQueue.enqueueAndForget(async()=>vp(await ru(m),w)),()=>{P.Za(),m.asyncQueue.enqueueAndForget(async()=>wp(await ru(m),w))}}(Gu(c),d,l,u)}function ec(t,e){return function(r,i){const s=new bn;return r.asyncQueue.enqueueAndForget(async()=>z2(await X2(r),i,s)),s.promise}(Gu(t),e)}function RT(t,e,n){const r=n.docs.get(e._key),i=new bp(t);return new kT(t,i,e._key,r,new Ys(n.hasPendingWrites,n.fromCache),e.converter)}function k_(){return new Cp("serverTimestamp")}(function(e,n=!0){(function(i){ps=i})(li),Gt(new Ft("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new $n(new vx(r.getProvider("auth-internal")),new Ix(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lo(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),vt(Uy,"4.7.3",e),vt(Uy,"4.7.3","esm2017")})();var yD="firebase",_D="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt(yD,_D,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT="firebasestorage.googleapis.com",vD="storageBucket",wD=2*60*1e3,ED=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends Jt{constructor(e,n,r=0){super(ph(e),`Firebase Storage: ${n} (${ph(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,pn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ph(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var hn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(hn||(hn={}));function ph(t){return"storage/"+t}function TD(){const t="An unknown error occurred, please check the error payload for server response.";return new pn(hn.UNKNOWN,t)}function ID(){return new pn(hn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function SD(){return new pn(hn.CANCELED,"User canceled the upload/download.")}function kD(t){return new pn(hn.INVALID_URL,"Invalid URL '"+t+"'.")}function AD(t){return new pn(hn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function A_(t){return new pn(hn.INVALID_ARGUMENT,t)}function PT(){return new pn(hn.APP_DELETED,"The Firebase app was deleted.")}function RD(t){return new pn(hn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=qt.makeFromUrl(e,n)}catch{return new qt(e,"")}if(r.path==="")return r;throw AD(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(N){N.path_=decodeURIComponent(N.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",S=new RegExp(`^https?://${p}/${d}/b/${i}/o${m}`,"i"),R={bucket:1,path:3},x=n===CT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",w=new RegExp(`^https?://${x}/${i}/${P}`,"i"),I=[{regex:l,indices:u,postModify:s},{regex:S,indices:R,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let N=0;N<I.length;N++){const F=I[N],U=F.regex.exec(e);if(U){const v=U[F.indices.bucket];let y=U[F.indices.path];y||(y=""),r=new qt(v,y),F.postModify(r);break}}if(r==null)throw kD(e);return r}}class CD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PD(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...P){c||(c=!0,e.apply(null,P))}function p(P){i=setTimeout(()=>{i=null,t(S,u())},P)}function m(){s&&clearTimeout(s)}function S(P,...w){if(c){m();return}if(P){m(),d.call(null,P,...w);return}if(u()||o){m(),d.call(null,P,...w);return}r<64&&(r*=2);let I;l===1?(l=2,I=0):I=(r+Math.random())*1e3,p(I)}let R=!1;function x(P){R||(R=!0,m(),!c&&(i!==null?(P||(l=2),clearTimeout(i),p(0)):P||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,x(!0)},n),x}function xD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ND(t){return t!==void 0}function R_(t,e,n,r){if(r<e)throw A_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw A_(`Invalid value for '${t}'. Expected ${n} or less.`)}function DD(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var su;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(su||(su={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e,n,r,i,s,o,l,u,c,d,p,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,R)=>{this.resolve_=S,this.reject_=R,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ga(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===su.NO_ERROR,u=s.getStatus();if(!l||OD(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===su.ABORT;r(!1,new Ga(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Ga(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());ND(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=TD();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?PT():SD();o(u)}else{const u=ID();o(u)}};this.canceled_?n(!1,new Ga(!1,null,!0)):this.backoffId_=PD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&xD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ga{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function VD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function LD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function MD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function FD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function UD(t,e,n,r,i,s,o=!0){const l=DD(t.urlParams),u=t.url+l,c=Object.assign({},t.headers);return MD(c,e),VD(c,n),LD(c,s),FD(c,r),new bD(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function zD(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n){this._service=e,n instanceof qt?this._location=n:this._location=qt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ou(e,n)}get root(){const e=new qt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return zD(this._location.path)}get storage(){return this._service}get parent(){const e=jD(this._location.path);if(e===null)return null;const n=new qt(this._location.bucket,e);return new ou(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw RD(e)}}function C_(t,e){const n=e==null?void 0:e[vD];return n==null?null:qt.makeFromBucketSpec(n,t)}function BD(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Tw(i,t.app.options.projectId))}class $D{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=CT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=wD,this._maxUploadRetryTime=ED,this._requests=new Set,i!=null?this._bucket=qt.makeFromBucketSpec(i,this._host):this._bucket=C_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=qt.makeFromBucketSpec(this._url,e):this._bucket=C_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){R_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){R_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ou(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new CD(PT());{const o=UD(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const P_="@firebase/storage",x_="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT="storage";function qD(t=Du(),e){t=xe(t);const r=ds(t,xT).getImmediate({identifier:e}),i=vw("storage");return i&&WD(r,...i),r}function WD(t,e,n,r={}){BD(t,e,n,r)}function HD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new $D(n,r,i,e,li)}function KD(){Gt(new Ft(xT,HD,"PUBLIC").setMultipleInstances(!0)),vt(P_,x_,""),vt(P_,x_,"esm2017")}KD();const NT="@firebase/installations",Vp="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT=1e4,OT=`w:${Vp}`,bT="FIS_v2",GD="https://firebaseinstallations.googleapis.com/v1",QD=60*60*1e3,YD="installations",XD="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ri=new ai(YD,XD,JD);function VT(t){return t instanceof Jt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT({projectId:t}){return`${GD}/projects/${t}/installations`}function MT(t){return{token:t.token,requestStatus:2,expiresIn:eO(t.expiresIn),creationTime:Date.now()}}async function FT(t,e){const r=(await e.json()).error;return ri.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function UT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function ZD(t,{refreshToken:e}){const n=UT(t);return n.append("Authorization",tO(e)),n}async function jT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function eO(t){return Number(t.replace("s","000"))}function tO(t){return`${bT} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nO({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=LT(t),i=UT(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:bT,appId:t.appId,sdkVersion:OT},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await jT(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:MT(c.authToken)}}else throw await FT("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rO(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO=/^[cdef][\w-]{21}$/,$d="";function sO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=oO(t);return iO.test(n)?n:$d}catch{return $d}}function oO(t){return rO(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=new Map;function $T(t,e){const n=tc(t);qT(n,e),aO(n,e)}function qT(t,e){const n=BT.get(t);if(n)for(const r of n)r(e)}function aO(t,e){const n=lO();n&&n.postMessage({key:t,fid:e}),uO()}let $r=null;function lO(){return!$r&&"BroadcastChannel"in self&&($r=new BroadcastChannel("[Firebase] FID Change"),$r.onmessage=t=>{qT(t.data.key,t.data.fid)}),$r}function uO(){BT.size===0&&$r&&($r.close(),$r=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cO="firebase-installations-database",hO=1,ii="firebase-installations-store";let mh=null;function Lp(){return mh||(mh=Nu(cO,hO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ii)}}})),mh}async function au(t,e){const n=tc(t),i=(await Lp()).transaction(ii,"readwrite"),s=i.objectStore(ii),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&$T(t,e.fid),e}async function WT(t){const e=tc(t),r=(await Lp()).transaction(ii,"readwrite");await r.objectStore(ii).delete(e),await r.done}async function nc(t,e){const n=tc(t),i=(await Lp()).transaction(ii,"readwrite"),s=i.objectStore(ii),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&$T(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mp(t){let e;const n=await nc(t.appConfig,r=>{const i=dO(r),s=fO(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===$d?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function dO(t){const e=t||{fid:sO(),registrationStatus:0};return HT(e)}function fO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ri.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=pO(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:mO(t)}:{installationEntry:e}}async function pO(t,e){try{const n=await nO(t,e);return au(t.appConfig,n)}catch(n){throw VT(n)&&n.customData.serverCode===409?await WT(t.appConfig):await au(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function mO(t){let e=await N_(t.appConfig);for(;e.registrationStatus===1;)await zT(100),e=await N_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Mp(t);return r||n}return e}function N_(t){return nc(t,e=>{if(!e)throw ri.create("installation-not-found");return HT(e)})}function HT(t){return gO(t)?{fid:t.fid,registrationStatus:0}:t}function gO(t){return t.registrationStatus===1&&t.registrationTime+DT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yO({appConfig:t,heartbeatServiceProvider:e},n){const r=_O(t,n),i=ZD(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:OT,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await jT(()=>fetch(r,l));if(u.ok){const c=await u.json();return MT(c)}else throw await FT("Generate Auth Token",u)}function _O(t,{fid:e}){return`${LT(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fp(t,e=!1){let n;const r=await nc(t.appConfig,s=>{if(!KT(s))throw ri.create("not-registered");const o=s.authToken;if(!e&&EO(o))return s;if(o.requestStatus===1)return n=vO(t,e),s;{if(!navigator.onLine)throw ri.create("app-offline");const l=IO(s);return n=wO(t,l),l}});return n?await n:r.authToken}async function vO(t,e){let n=await D_(t.appConfig);for(;n.authToken.requestStatus===1;)await zT(100),n=await D_(t.appConfig);const r=n.authToken;return r.requestStatus===0?Fp(t,e):r}function D_(t){return nc(t,e=>{if(!KT(e))throw ri.create("not-registered");const n=e.authToken;return SO(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function wO(t,e){try{const n=await yO(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await au(t.appConfig,r),n}catch(n){if(VT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await WT(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await au(t.appConfig,r)}throw n}}function KT(t){return t!==void 0&&t.registrationStatus===2}function EO(t){return t.requestStatus===2&&!TO(t)}function TO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+QD}function IO(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function SO(t){return t.requestStatus===1&&t.requestTime+DT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kO(t){const e=t,{installationEntry:n,registrationPromise:r}=await Mp(e);return r?r.catch(console.error):Fp(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AO(t,e=!1){const n=t;return await RO(n),(await Fp(n,e)).token}async function RO(t){const{registrationPromise:e}=await Mp(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CO(t){if(!t||!t.options)throw gh("App Configuration");if(!t.name)throw gh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw gh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function gh(t){return ri.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT="installations",PO="installations-internal",xO=t=>{const e=t.getProvider("app").getImmediate(),n=CO(e),r=ds(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},NO=t=>{const e=t.getProvider("app").getImmediate(),n=ds(e,GT).getImmediate();return{getId:()=>kO(n),getToken:i=>AO(n,i)}};function DO(){Gt(new Ft(GT,xO,"PUBLIC")),Gt(new Ft(PO,NO,"PRIVATE"))}DO();vt(NT,Vp);vt(NT,Vp,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OO="/firebase-messaging-sw.js",bO="/firebase-cloud-messaging-push-scope",QT="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",VO="https://fcmregistrations.googleapis.com/v1",YT="google.c.a.c_id",LO="google.c.a.c_l",MO="google.c.a.ts",FO="google.c.a.e";var O_;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(O_||(O_={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var zo;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(zo||(zo={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function UO(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="fcm_token_details_db",jO=5,b_="fcm_token_object_Store";async function zO(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(yh))return null;let e=null;return(await Nu(yh,jO,{upgrade:async(r,i,s,o)=>{var l;if(i<2||!r.objectStoreNames.contains(b_))return;const u=o.objectStore(b_),c=await u.index("fcmSenderId").get(t);if(await u.clear(),!!c){if(i===2){const d=c;if(!d.auth||!d.p256dh||!d.endpoint)return;e={token:d.fcmToken,createTime:(l=d.createTime)!==null&&l!==void 0?l:Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:In(d.vapidKey)}}}else if(i===3){const d=c;e={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:In(d.auth),p256dh:In(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:In(d.vapidKey)}}}else if(i===4){const d=c;e={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:In(d.auth),p256dh:In(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:In(d.vapidKey)}}}}}})).close(),await sh(yh),await sh("fcm_vapid_details_db"),await sh("undefined"),BO(e)?e:null}function BO(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O="firebase-messaging-database",qO=1,Bo="firebase-messaging-store";let _h=null;function XT(){return _h||(_h=Nu($O,qO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Bo)}}})),_h}async function WO(t){const e=JT(t),r=await(await XT()).transaction(Bo).objectStore(Bo).get(e);if(r)return r;{const i=await zO(t.appConfig.senderId);if(i)return await Up(t,i),i}}async function Up(t,e){const n=JT(t),i=(await XT()).transaction(Bo,"readwrite");return await i.objectStore(Bo).put(e,n),await i.done,e}function JT({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},At=new ai("messaging","Messaging",HO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KO(t,e){const n=await zp(t),r=ZT(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(jp(t.appConfig),i)).json()}catch(o){throw At.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw At.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw At.create("token-subscribe-no-token");return s.token}async function GO(t,e){const n=await zp(t),r=ZT(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${jp(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw At.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw At.create("token-update-failed",{errorInfo:o})}if(!s.token)throw At.create("token-update-no-token");return s.token}async function QO(t,e){const r={method:"DELETE",headers:await zp(t)};try{const s=await(await fetch(`${jp(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw At.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw At.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function jp({projectId:t}){return`${VO}/projects/${t}/registrations`}async function zp({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function ZT({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==QT&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YO=7*24*60*60*1e3;async function XO(t){const e=await ZO(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:In(e.getKey("auth")),p256dh:In(e.getKey("p256dh"))},r=await WO(t.firebaseDependencies);if(r){if(eb(r.subscriptionOptions,n))return Date.now()>=r.createTime+YO?JO(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await QO(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return V_(t.firebaseDependencies,n)}else return V_(t.firebaseDependencies,n)}async function JO(t,e){try{const n=await GO(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Up(t.firebaseDependencies,r),n}catch(n){throw n}}async function V_(t,e){const r={token:await KO(t,e),createTime:Date.now(),subscriptionOptions:e};return await Up(t,r),r.token}async function ZO(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:UO(e)})}function eb(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return tb(e,t),nb(e,t),rb(e,t),e}function tb(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function nb(t,e){e.data&&(t.data=e.data)}function rb(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const l=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;l&&(t.fcmOptions.link=l);const u=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;u&&(t.fcmOptions.analyticsLabel=u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(t){return typeof t=="object"&&!!t&&YT in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(t){if(!t||!t.options)throw vh("App Configuration Object");if(!t.name)throw vh("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw vh(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function vh(t){return At.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=sb(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ab(t){try{t.swRegistration=await navigator.serviceWorker.register(OO,{scope:bO}),t.swRegistration.update().catch(()=>{})}catch(e){throw At.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lb(t,e){if(!e&&!t.swRegistration&&await ab(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw At.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ub(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=QT)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cb(t,e){if(!navigator)throw At.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw At.create("permission-blocked");return await ub(t,e==null?void 0:e.vapidKey),await lb(t,e==null?void 0:e.serviceWorkerRegistration),XO(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hb(t,e,n){const r=db(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[YT],message_name:n[LO],message_time:n[MO],message_device_time:Math.floor(Date.now()/1e3)})}function db(t){switch(t){case zo.NOTIFICATION_CLICKED:return"notification_open";case zo.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fb(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===zo.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(L_(n)):t.onMessageHandler.next(L_(n)));const r=n.data;ib(r)&&r[FO]==="1"&&await hb(t,n.messageType,r)}const M_="@firebase/messaging",F_="0.12.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb=t=>{const e=new ob(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>fb(e,n)),e},mb=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>cb(e,r)}};function gb(){Gt(new Ft("messaging",pb,"PUBLIC")),Gt(new Ft("messaging-internal",mb,"PRIVATE")),vt(M_,F_),vt(M_,F_,"esm2017")}gb();const yb={apiKey:"AIzaSyBO8XdfZs7tr9SVugTHpcQv7MiB4CGPV98",authDomain:"alamdipara-digital-village.firebaseapp.com",projectId:"alamdipara-digital-village",storageBucket:"alamdipara-digital-village.firebasestorage.app",messagingSenderId:"319639088699",appId:"1:319639088699:web:2e66ef395edc20488e761e",measurementId:"G-YMZ9XEDJFK"},yi=!0,Bp=$R().length>0?Du():kw(yb),js=mx(Bp),U_=nD(Bp);qD(Bp);new kn;const eI=b.createContext(),_b=({children:t})=>{const[e,n]=b.useState(null),[r,i]=b.useState(null),[s,o]=b.useState(!0),l=async P=>{try{if(!yi)return JSON.parse(localStorage.getItem("alamdipara_demo_user")||"null")||{uid:P,displayName:"আলমদীপাড়া নাগরিক",email:"demo@alamdipara.gov.bd",phone:"01700000000",roles:["super_admin","game_admin","education_admin","mosque_admin","organization_admin","cultural_admin","social_admin","emergency_admin","religious_admin"]};const w=zd(U_,"users",P),_=await mD(w);if(_.exists())return _.data()}catch(w){console.error("Error fetching user profile:",w)}return null};b.useEffect(()=>{const P=rP(js,async w=>{if(w){n(w);const _=await l(w.uid);i(_||{uid:w.uid,displayName:w.displayName||"গ্রামবাসী",email:w.email,roles:[]})}else{const _=JSON.parse(localStorage.getItem("alamdipara_demo_user")||"null");_?(n({uid:_.uid,email:_.email,displayName:_.displayName}),i(_)):(n(null),i(null))}o(!1)});return()=>P()},[]);const u=async(P,w,_,I)=>{try{if(!yi){const U={uid:"demo-user-"+Date.now(),displayName:_,email:P,phone:I,roles:["user"],createdAt:new Date().toISOString()};return localStorage.setItem("alamdipara_demo_user",JSON.stringify(U)),n({uid:U.uid,email:P,displayName:_}),i(U),U}const N=await XC(js,P,w);await eP(N.user,{displayName:_});const F={uid:N.user.uid,displayName:_,email:P,phone:I||"",photoURL:"",roles:["user"],createdAt:k_(),updatedAt:k_()};return await gD(zd(U_,"users",N.user.uid),F),i(F),N.user}catch(N){throw N}},c=async(P,w)=>{try{if(!yi){const N={uid:"demo-admin-id",displayName:"এডমিন (ডেমো)",email:P||"admin@alamdipara.gov.bd",phone:"01711223344",roles:["super_admin","game_admin","education_admin","mosque_admin","organization_admin","cultural_admin","social_admin","emergency_admin","religious_admin"],createdAt:new Date().toISOString()};return localStorage.setItem("alamdipara_demo_user",JSON.stringify(N)),n({uid:N.uid,email:P,displayName:N.displayName}),i(N),N}const _=await JC(js,P,w),I=await l(_.user.uid);return i(I),_.user}catch(_){throw _}},d=async()=>{localStorage.removeItem("alamdipara_demo_user"),yi&&await iP(js),n(null),i(null)},p=async P=>yi?YC(js,P):!0,m=P=>!r||!r.roles?!1:r.roles.includes("super_admin")||r.roles.includes(P),x={currentUser:e,userProfile:r,loading:s,register:u,login:c,logout:d,resetPassword:p,hasRole:m,switchDemoRole:P=>{const w={...r,roles:P};i(w),localStorage.setItem("alamdipara_demo_user",JSON.stringify(w))},updateUserProfileState:P=>{i(w=>{const _={...w,...P};return yi||localStorage.setItem("alamdipara_demo_user",JSON.stringify(_)),_})},isSuperAdmin:m("super_admin")};return E.jsx(eI.Provider,{value:x,children:!s&&t})},aa=()=>b.useContext(eI),tI=b.createContext(),vb=({children:t})=>{const[e,n]=b.useState([]),r=(s,o="info",l=4e3)=>{const u=Date.now()+Math.random();n(c=>[...c,{id:u,message:s,type:o}]),setTimeout(()=>{i(u)},l)},i=s=>{n(o=>o.filter(l=>l.id!==s))};return E.jsxs(tI.Provider,{value:{toasts:e,addToast:r,removeToast:i},children:[t,E.jsx("div",{"aria-live":"polite","aria-atomic":"false",role:"status",className:"toast-container-live",style:{position:"fixed",bottom:"calc(var(--bottom-bar-height, 64px) + env(safe-area-inset-bottom, 0px) + 0.75rem)",right:"0.85rem",left:"0.85rem",zIndex:9999,display:"flex",flexDirection:"column",gap:"0.5rem",pointerEvents:"none"},children:e.map(s=>E.jsxs("div",{className:`toast toast-${s.type} animate-fade-in`,style:{pointerEvents:"auto",padding:"0.875rem 1.25rem",borderRadius:"12px",backgroundColor:s.type==="error"?"#ef4444":s.type==="success"?"#16a34a":"#1e293b",color:"#ffffff",boxShadow:"0 10px 25px rgba(0,0,0,0.2)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"0.75rem",fontSize:"0.95rem",fontWeight:"500"},children:[E.jsx("span",{children:s.message}),E.jsx("button",{onClick:()=>i(s.id),style:{background:"none",border:"none",color:"#ffffff",cursor:"pointer",opacity:.8},children:"✕"})]},s.id))})]})},bV=()=>b.useContext(tI),wb="modulepreload",Eb=function(t){return"/"+t},j_={},_e=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=Eb(u),u in j_)return;j_[u]=!0;const c=u.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":wb,c||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),c)return new Promise((m,S)=>{p.addEventListener("load",m),p.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),nI=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ib={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=b.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>b.createElement("svg",{ref:u,...Ib,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:nI("lucide",i),...l},[...o.map(([c,d])=>b.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=(t,e)=>{const n=b.forwardRef(({className:r,...i},s)=>b.createElement(Sb,{ref:s,iconNode:e,className:nI(`lucide-${Tb(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=oe("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=oe("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=oe("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=oe("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=oe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=oe("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rI=oe("CloudSun",[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z",key:"s09mg5"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=oe("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=oe("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iI=oe("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sI=oe("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=oe("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=oe("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=oe("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=oe("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oI=oe("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=oe("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=oe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=oe("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=oe("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aI=oe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=oe("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lI=oe("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=oe("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=oe("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=oe("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=oe("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=oe("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=oe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uI=oe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Mb({user:t,photoURL:e,name:n,size:r=40,className:i="",style:s={}}){const[o,l]=b.useState(!1),u=e||(t==null?void 0:t.photoURL)||(t==null?void 0:t.profilePic),c=n||(t==null?void 0:t.displayName)||(t==null?void 0:t.name)||"",d=c?c.trim().charAt(0).toUpperCase():"",p={width:`${r}px`,height:`${r}px`,minWidth:`${r}px`,minHeight:`${r}px`,borderRadius:"50%",...s};return u&&!o?E.jsx("img",{src:u,alt:c||"User Avatar",onError:()=>l(!0),className:i,style:{...p,objectFit:"cover",border:"2px solid var(--primary-color, #16a34a)",boxShadow:"0 2px 6px rgba(0,0,0,0.1)"}}):E.jsx("div",{className:i,style:{...p,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"var(--primary-color-light, #dcfce7)",color:"var(--primary-color, #16a34a)",fontWeight:"700",fontSize:`${Math.max(14,Math.floor(r*.45))}px`,border:"2px solid var(--primary-color, #16a34a)",boxShadow:"0 2px 6px rgba(0,0,0,0.1)",userSelect:"none"},title:c||"ব্যবহারকারী",children:d||E.jsx(Wp,{size:Math.floor(r*.55)})})}const Fb=({isOpen:t,onClose:e})=>{const[n,r]=b.useState(""),i=b.useRef(null),s=Cu(),o=[{title:"বায়তুল নূর জামে মসজিদ",category:"মসজিদ ও দোয়া",path:"/mosques/loc-1",icon:lu,keywords:"namaz prayer masjid noor"},{title:"বায়তুল মামুর জামে মসজিদ",category:"মসজিদ ও দোয়া",path:"/mosques/loc-2",icon:lu,keywords:"namaz prayer masjid mamur"},{title:"আলমদীপাড়া সরকারি প্রাথমিক বিদ্যালয়",category:"শিক্ষা প্রতিষ্ঠান",path:"/education/loc-3",icon:iI,keywords:"school primary biddaloy"},{title:"লাটিয়াকুড়ি কৃষি মাঠ",category:"কৃষি মাঠ",path:"/agriculture/latiyakuri",icon:sr,keywords:"field krishi dhaan crop latiyakuri"},{title:"চড়ে বন্দ কৃষি মাঠ",category:"কৃষি মাঠ",path:"/agriculture/chore-bondo",icon:sr,keywords:"field krishi chore bondo"},{title:"মাগুড়া বন্দ কৃষি মাঠ",category:"কৃষি মাঠ",path:"/agriculture/magura-bondo",icon:sr,keywords:"field krishi magura"},{title:"কৃষি যন্ত্রপাতি ও মেশিন ভাড়া",category:"কৃষি সেবা",path:"/agriculture",icon:sr,keywords:"tractor tiller pump machine jontro"},{title:"জমি লিজ ও বর্গা বিজ্ঞাপন",category:"জমি লিজ",path:"/agriculture",icon:sr,keywords:"land lease jomi borga"},{title:"খেলাধুলা টুর্নামেন্ট ও লাইভ স্কোর",category:"খেলাধুলা",path:"/sports",icon:os,keywords:"football cricket tournament live score"},{title:"লাইভ স্ট্রিমিং ও সম্প্রচার",category:"লাইভ খেলা",path:"/sports",icon:os,keywords:"stream live video broadcast"},{title:"আলমদীপাড়া মাদকবিরোধী ও যুব উন্নয়ন সংঘ",category:"যুব সংঘ",path:"/organization",icon:Hp,keywords:"madok birodhi jubo shongho club"},{title:"জরুরি সভা ও বিজ্ঞপ্তি",category:"জরুরি সেবা",path:"/emergency",icon:ic,keywords:"emergency meeting alert notice shova"},{title:"আবহাওয়া পূর্বাভাস ও কৃষি পরামর্শ",category:"আবহাওয়া",path:"/weather",icon:rI,keywords:"weather rain forecast abohawa"},{title:"ডিজিটাল ভিলেজ ম্যাপ",category:"মানচিত্র",path:"/map",icon:rc,keywords:"map location gps manchitro"}];if(b.useEffect(()=>{t?setTimeout(()=>{i.current&&i.current.focus()},50):r("")},[t]),b.useEffect(()=>{const c=d=>{d.key==="Escape"&&t&&e()};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[t,e]),!t)return null;const l=n.trim()===""?o.slice(0,6):o.filter(c=>{const d=n.toLowerCase();return c.title.toLowerCase().includes(d)||c.category.toLowerCase().includes(d)||c.keywords.toLowerCase().includes(d)}),u=c=>{e(),s(c)};return E.jsx("div",{className:"search-modal-backdrop",onClick:e,role:"dialog","aria-modal":"true",children:E.jsxs("div",{className:"search-modal-card",onClick:c=>c.stopPropagation(),children:[E.jsxs("div",{className:"search-modal-header",children:[E.jsx(aI,{size:20,className:"search-modal-icon"}),E.jsx("input",{ref:i,type:"text",className:"search-modal-input",placeholder:"গ্রাম, স্থান, সেবা বা কিছু খুঁজুন...",value:n,onChange:c=>r(c.target.value)}),E.jsx("button",{onClick:e,className:"search-modal-close-btn","aria-label":"বন্ধ করুন",children:E.jsx(uI,{size:18})})]}),E.jsx("div",{className:"search-modal-results",children:l.length===0?E.jsxs("div",{className:"search-modal-empty",children:['"',E.jsx("strong",{children:n}),'" এর জন্য কিছু পাওয়া যায়নি। অনুগ্রহ করে অন্য কিছু খুঁজুন।']}):E.jsxs("div",{className:"search-results-list",children:[E.jsx("div",{className:"search-results-label",children:n.trim()===""?"দ্রুত পরামর্শ":"অনুসন্ধানের ফলাফল"}),l.map((c,d)=>{const p=c.icon;return E.jsxs("div",{className:"search-result-item",onClick:()=>u(c.path),children:[E.jsx("div",{className:"search-result-icon",children:E.jsx(p,{size:18})}),E.jsxs("div",{className:"search-result-content",children:[E.jsx("div",{className:"search-result-title",children:c.title}),E.jsx("div",{className:"search-result-category",children:c.category})]}),E.jsx(kb,{size:16,className:"search-result-arrow"})]},d)})]})}),E.jsxs("div",{className:"search-modal-footer",children:[E.jsx("span",{children:"পরামর্শ: ব্রাউজ করতে যেকোনো আইটেমে ক্লিক করুন"}),E.jsx("span",{className:"search-modal-esc",children:"ESC চেপে বন্ধ করুন"})]})]})})},Ub=({onOpenMobileNav:t})=>{var F,U;const{currentUser:e,userProfile:n,logout:r}=aa(),{theme:i,toggleTheme:s}=EA(),o=Xt(),l=Cu(),[u,c]=b.useState(!1),[d,p]=b.useState(!1),[m,S]=b.useState(!1),R=b.useRef(null),x=b.useRef(null);b.useEffect(()=>{const v=y=>{R.current&&!R.current.contains(y.target)&&p(!1),x.current&&!x.current.contains(y.target)&&S(!1)};return document.addEventListener("mousedown",v),document.addEventListener("touchstart",v),()=>{document.removeEventListener("mousedown",v),document.removeEventListener("touchstart",v)}},[]),b.useEffect(()=>{const v=y=>{(y.ctrlKey||y.metaKey)&&y.key.toLowerCase()==="k"&&(y.preventDefault(),c(!0))};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[]),b.useEffect(()=>{p(!1),S(!1)},[o.pathname]);const P=async()=>{await r(),S(!1),l("/")},w=((F=n==null?void 0:n.roles)==null?void 0:F.length)>0,_=[{id:"n-1",title:"মাদকবিরোধী সচেতনতা সভা অনুষ্ঠিত হবে",time:"আজ, ০৯:০০ AM",path:"/emergency",icon:ic,color:"#ef4444"},{id:"n-2",title:"বিদ্যালয় বার্ষিক ক্রীড়া প্রতিযোগিতা",time:"২৮ এপ্রিল ২০২৫",path:"/education",icon:os,color:"#2563eb"},{id:"n-3",title:"গ্রামে বৃক্ষরোপণ কর্মসূচি",time:"২৭ এপ্রিল ২০২৫",path:"/social",icon:sr,color:"#16a34a"}],I=(n==null?void 0:n.displayName)||"মাহফুজ ইসলাম",N=(U=n==null?void 0:n.roles)!=null&&U[0]?"গ্রাম অ্যাডমিন":"সাধারণ ব্যবহারকারী";return E.jsxs(E.Fragment,{children:[E.jsxs("header",{className:"header",children:[E.jsx("button",{onClick:t,className:"header-mobile-toggle","aria-label":"মোবাইল মেনু খুলুন",children:E.jsx(Ob,{size:22})}),E.jsxs("div",{className:"search-bar",onClick:()=>c(!0),children:[E.jsx(aI,{size:16,className:"search-icon"}),E.jsx("input",{type:"text",placeholder:"গ্রাম, স্থান, সেবা বা কিছু খুঁজুন...",readOnly:!0}),E.jsx("kbd",{className:"header-search-badge",children:"Ctrl+K"})]}),E.jsxs("div",{className:"header-actions",children:[E.jsxs("div",{className:"header-notif-container",ref:R,children:[E.jsxs("button",{className:"icon-btn",onClick:()=>p(!d),"aria-label":"নোটিফিকেশন দেখুন","aria-expanded":d,children:[E.jsx(Ab,{size:18}),E.jsx("span",{className:"badge",children:"3"})]}),d&&E.jsxs("div",{className:"notif-popover",children:[E.jsxs("div",{className:"notif-popover-header",children:[E.jsx("span",{className:"notif-title",children:"জরুরি বিজ্ঞপ্তি ও আপডেট"}),E.jsx("span",{className:"notif-badge-pill",children:"৩টি নতুন"})]}),E.jsx("div",{className:"notif-popover-list",children:_.map(v=>{const y=v.icon;return E.jsxs($e,{to:v.path,className:"notif-popover-item",onClick:()=>p(!1),children:[E.jsx("div",{className:"notif-popover-icon",style:{backgroundColor:`${v.color}15`,color:v.color},children:E.jsx(y,{size:15})}),E.jsxs("div",{className:"notif-popover-text",children:[E.jsx("div",{className:"notif-item-title",children:v.title}),E.jsx("div",{className:"notif-item-time",children:v.time})]})]},v.id)})}),E.jsxs($e,{to:"/emergency",className:"notif-popover-footer",onClick:()=>p(!1),children:["সকল নোটিশ দেখুন ",E.jsx(Pb,{size:12})]})]})]}),E.jsx("button",{className:"icon-btn",onClick:s,"aria-label":i==="dark"?"লাইট মোডে যান":"ডার্ক মোডে যান",title:i==="dark"?"লাইট মোড":"ডার্ক মোড",children:i==="dark"?E.jsx(Lb,{size:18,color:"#f59e0b"}):E.jsx(qp,{size:18})}),E.jsxs("div",{className:"lang-toggle",title:"ভাষা নির্বাচন: বাংলা",children:[E.jsx(xb,{size:16})," বাংলা ",E.jsx(z_,{size:12})]}),E.jsxs("div",{className:"user-profile-container",ref:x,children:[E.jsxs("div",{className:"user-profile",onClick:()=>S(!m),role:"button",tabIndex:0,children:[e?E.jsx(Mb,{user:n||e,size:35}):E.jsx("img",{src:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",alt:"ব্যবহারকারী"}),E.jsxs("div",{className:"user-info",children:[I,E.jsx("span",{children:N})]}),E.jsx(z_,{size:12,style:{opacity:.7}})]}),m&&E.jsx("div",{className:"user-dropdown-popover",children:e?E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"dropdown-user-header",children:[E.jsx("strong",{children:I}),E.jsx("span",{className:"dropdown-email",children:e.email})]}),E.jsx("hr",{className:"dropdown-divider"}),E.jsxs($e,{to:"/dashboard",className:"dropdown-link",onClick:()=>S(!1),children:[E.jsx(uu,{size:15})," আমার ড্যাশবোর্ড"]}),E.jsxs($e,{to:"/profile",className:"dropdown-link",onClick:()=>S(!1),children:[E.jsx(Wp,{size:15})," প্রোফাইল সেটিংস"]}),w&&E.jsxs($e,{to:"/admin",className:"dropdown-link admin-link",onClick:()=>S(!1),children:[E.jsx(lI,{size:15})," এডমিন প্যানেল"]}),E.jsx("hr",{className:"dropdown-divider"}),E.jsxs("button",{onClick:P,className:"dropdown-link logout-link",children:[E.jsx(oI,{size:15})," লগআউট"]})]}):E.jsxs(E.Fragment,{children:[E.jsx($e,{to:"/login",className:"dropdown-link",onClick:()=>S(!1),children:"লগইন করুন"}),E.jsx($e,{to:"/register",className:"dropdown-link",onClick:()=>S(!1),children:"নতুন অ্যাকাউন্ট তৈরি"})]})})]})]})]}),E.jsx(Fb,{isOpen:u,onClose:()=>c(!1)})]})},jb=()=>{var s;const t=Xt(),{currentUser:e,userProfile:n}=aa(),r=[{label:"হোম",path:"/",icon:$p},{label:"ডিজিটাল ম্যাপ",path:"/map",icon:rc},{label:"কৃষি ও আবহাওয়া",path:"/agriculture",icon:Db},{label:"খেলাধুলা",path:"/sports",icon:os},{label:"শিক্ষা প্রতিষ্ঠান",path:"/education",icon:Rb},{label:"মসজিদ",path:"/mosques",icon:lu},{label:"যুব ইউনিয়ন সংঘ",path:"/organization",icon:Hp},{label:"সাংস্কৃতিক অনুষ্ঠান",path:"/culture",icon:bb},{label:"সামাজিক অনুষ্ঠান",path:"/social",icon:sI},{label:"জরুরি মিটিং",path:"/emergency",icon:Cb},{label:"ধর্মীয় অনুষ্ঠান",path:"/religious-events",icon:qp}],i=((s=n==null?void 0:n.roles)==null?void 0:s.length)>0;return E.jsx("aside",{className:"sidebar","aria-label":"সাইডবার নেভিগেশন",children:E.jsxs("div",{className:"sidebar-content",children:[E.jsxs("div",{className:"sidebar-logo",children:[E.jsx("div",{className:"sidebar-logo-circle",children:E.jsxs("svg",{viewBox:"0 0 40 40",width:"28",height:"28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[E.jsx("path",{d:"M12 26 L20 18 L28 26 Z",fill:"#1b7a43"}),E.jsx("rect",{x:"15",y:"26",width:"10",height:"7",fill:"#0f4d2b"}),E.jsx("rect",{x:"18",y:"28",width:"4",height:"5",fill:"#ffffff"}),E.jsx("path",{d:"M20 17 Q 16 11, 20 8 Q 24 11, 20 17 Z",fill:"#22c55e"}),E.jsx("path",{d:"M18 14 Q 13 12, 14 8 Q 18 10, 18 14 Z",fill:"#4ade80"}),E.jsx("path",{d:"M22 14 Q 27 12, 26 8 Q 22 10, 22 14 Z",fill:"#4ade80"})]})}),E.jsxs("div",{children:[E.jsx("h1",{children:"আলমদীপাড়া ডিজিটাল গ্রাম"}),E.jsx("span",{children:"একাদারে তথ্য, উন্নয়ন, সমৃদ্ধি"})]})]}),E.jsxs("ul",{className:"sidebar-menu",children:[r.map(o=>{const l=o.icon,u=o.path==="/"?t.pathname==="/":t.pathname.startsWith(o.path);return E.jsx("li",{children:E.jsxs(th,{to:o.path,className:u?"active":"",title:o.label,children:[E.jsx(l,{size:17,strokeWidth:2.2}),E.jsx("span",{children:o.label})]})},o.path)}),e&&E.jsx("li",{children:E.jsxs(th,{to:"/dashboard",className:t.pathname==="/dashboard"?"active":"",children:[E.jsx(uu,{size:17,strokeWidth:2.2}),E.jsx("span",{children:"আমার ড্যাশবোর্ড"})]})}),i&&E.jsx("li",{children:E.jsxs(th,{to:"/admin",className:t.pathname.startsWith("/admin")?"active":"",children:[E.jsx(lI,{size:17,strokeWidth:2.2}),E.jsx("span",{children:"এডমিন প্যানেল"})]})})]}),E.jsxs("div",{className:"sidebar-bottom-text",children:["সবুজে ঘেরা",E.jsx("br",{}),E.jsx("strong",{children:"আলমদীপাড়া"}),"স্মার্ট গ্রামের পথে"]})]})})},zb=()=>E.jsxs("footer",{className:"footer",children:[E.jsx("div",{className:"footer-copyright",children:"© ২০২৫ আলমদীপাড়া ডিজিটাল গ্রাম। সর্বস্বত্ব সংরক্ষিত।"}),E.jsxs("div",{className:"footer-links",children:[E.jsx($e,{to:"/emergency",children:"জরুরি যোগাযোগ"}),E.jsx($e,{to:"/agriculture",children:"কৃষি ও সেবা"}),E.jsx($e,{to:"/sports",children:"খেলাধুলা"}),E.jsxs("span",{className:"footer-heart-msg",children:[E.jsx(Nb,{size:13,color:"#e74c3c",fill:"#e74c3c",style:{display:"inline",verticalAlign:"middle",marginRight:"4px"}}),"আলমদীপাড়া গ্রামবাসীর জন্য"]})]})]}),Bb=({isOpen:t,onClose:e})=>{var u;const{currentUser:n,userProfile:r,logout:i}=aa(),s=Xt(),o=b.useRef(null);if(b.useEffect(()=>{t&&e()},[s.pathname]),b.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[t]),b.useEffect(()=>{t&&o.current&&o.current.focus()},[t]),b.useEffect(()=>{const c=d=>{d.key==="Escape"&&t&&e()};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[t,e]),!t)return null;const l=[{label:"হোম",path:"/",icon:$p},{label:"ডিজিটাল মানচিত্র",path:"/map",icon:rc},{label:"কৃষি সেবা ও মাঠ",path:"/agriculture",icon:sr},{label:"আবহাওয়া পূর্বাভাস",path:"/weather",icon:rI},{label:"খেলাধুলা ও টুর্নামেন্ট",path:"/sports",icon:os},{label:"শিক্ষা প্রতিষ্ঠান",path:"/education",icon:iI},{label:"মসজিদ",path:"/mosques",icon:lu},{label:"যুব উন্নয়ন সংঘ",path:"/organization",icon:Hp},{label:"জরুরি সভা",path:"/emergency",icon:ic},{label:"সাংস্কৃতিক অনুষ্ঠান",path:"/culture",icon:Vb},{label:"সামাজিক কর্মকাণ্ড",path:"/social",icon:sI},{label:"ধর্মীয় অনুষ্ঠান",path:"/religious-events",icon:qp}];return E.jsxs("div",{style:{position:"fixed",inset:0,zIndex:1e3,display:"flex"},role:"dialog","aria-modal":"true","aria-label":"মোবাইল নেভিগেশন",children:[E.jsx("div",{onClick:e,style:{position:"absolute",inset:0,backgroundColor:"rgba(0,0,0,0.55)",backdropFilter:"blur(3px)",WebkitBackdropFilter:"blur(3px)"},"aria-hidden":"true"}),E.jsxs("div",{ref:o,tabIndex:-1,style:{position:"relative",width:"min(300px, 88vw)",height:"100%",backgroundColor:"var(--bg-card)",borderRight:"1px solid var(--border-color)",boxShadow:"var(--shadow-lg)",display:"flex",flexDirection:"column",zIndex:1001,overflowY:"auto",WebkitOverflowScrolling:"touch",overscrollBehavior:"contain",outline:"none",paddingBottom:"env(safe-area-inset-bottom, 0px)"},children:[E.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"1rem 1rem 0.75rem",borderBottom:"1px solid var(--border-color)",flexShrink:0},children:[E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[E.jsx("div",{style:{width:"34px",height:"34px",borderRadius:"9px",backgroundColor:"var(--color-primary-600)",color:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",fontSize:"1rem",flexShrink:0},children:"আ"}),E.jsxs("div",{children:[E.jsx("div",{style:{fontWeight:"700",fontSize:"1rem",lineHeight:1.2},children:"আলমদীপাড়া"}),E.jsx("div",{style:{fontSize:"0.65rem",color:"var(--color-primary-600)",fontWeight:600},children:"ডিজিটাল গ্রাম"})]})]}),E.jsx("button",{onClick:e,style:{background:"var(--bg-elevated)",border:"1px solid var(--border-color)",color:"var(--text-main)",cursor:"pointer",borderRadius:"8px",width:"36px",height:"36px",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},"aria-label":"মেনু বন্ধ করুন",children:E.jsx(uI,{size:20,"aria-hidden":"true"})})]}),E.jsx("div",{style:{padding:"0.85rem 1rem 0.5rem",flexShrink:0},children:n?E.jsxs("div",{style:{padding:"0.85rem 1rem",borderRadius:"var(--radius-md)",backgroundColor:"var(--color-primary-50)",border:"1px solid var(--color-primary-100)"},children:[E.jsx("div",{style:{fontWeight:"700",fontSize:"0.95rem",color:"var(--color-primary-800)",marginBottom:"0.15rem",wordBreak:"break-word"},children:(r==null?void 0:r.displayName)||"গ্রামবাসী"}),E.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)",wordBreak:"break-all"},children:r==null?void 0:r.email})]}):E.jsx($e,{to:"/login",className:"btn btn-primary",style:{width:"100%",justifyContent:"center"},children:"লগইন করুন"})}),E.jsx("nav",{style:{display:"flex",flexDirection:"column",gap:"0.2rem",flex:1,padding:"0 0.75rem"},"aria-label":"মোবাইল নেভিগেশন লিস্ট",children:l.map(c=>{const d=c.icon,p=s.pathname===c.path;return E.jsxs($e,{to:c.path,style:{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.7rem 0.85rem",borderRadius:"var(--radius-md)",color:p?"var(--color-primary-700)":"var(--text-main)",backgroundColor:p?"var(--color-primary-50)":"transparent",fontWeight:p?"700":"500",fontSize:"0.93rem",minHeight:"var(--min-touch-target)",textDecoration:"none",transition:"background-color 0.15s ease",wordBreak:"break-word"},"aria-current":p?"page":void 0,children:[E.jsx(d,{size:19,color:p?"var(--color-primary-600)":"var(--text-muted)",style:{flexShrink:0},"aria-hidden":"true"}),E.jsx("span",{style:{minWidth:0},children:c.label})]},c.path)})}),n&&E.jsxs("div",{style:{borderTop:"1px solid var(--border-color)",padding:"0.75rem",marginTop:"0.5rem",display:"flex",flexDirection:"column",gap:"0.2rem",flexShrink:0},children:[E.jsxs($e,{to:"/dashboard",style:{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.7rem 0.85rem",color:"var(--text-main)",fontSize:"0.93rem",borderRadius:"var(--radius-md)",textDecoration:"none",minHeight:"var(--min-touch-target)",transition:"background-color 0.15s ease"},children:[E.jsx(uu,{size:19,"aria-hidden":"true",color:"var(--text-muted)"}),"ড্যাশবোর্ড"]}),E.jsxs($e,{to:"/profile",style:{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.7rem 0.85rem",color:"var(--text-main)",fontSize:"0.93rem",borderRadius:"var(--radius-md)",textDecoration:"none",minHeight:"var(--min-touch-target)",transition:"background-color 0.15s ease"},children:[E.jsx(Wp,{size:19,"aria-hidden":"true",color:"var(--text-muted)"}),"প্রোফাইল"]}),((u=r==null?void 0:r.roles)==null?void 0:u.length)>0&&E.jsxs($e,{to:"/admin",style:{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.7rem 0.85rem",color:"var(--color-primary-600)",fontSize:"0.93rem",fontWeight:"600",borderRadius:"var(--radius-md)",textDecoration:"none",minHeight:"var(--min-touch-target)"},children:[E.jsx(uu,{size:19,"aria-hidden":"true",color:"var(--color-primary-600)"}),"এডমিন প্যানেল"]}),E.jsxs("button",{onClick:()=>{i()},style:{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.7rem 0.85rem",color:"var(--color-accent-red)",background:"none",border:"none",width:"100%",textAlign:"left",cursor:"pointer",fontSize:"0.93rem",borderRadius:"var(--radius-md)",minHeight:"var(--min-touch-target)"},children:[E.jsx(oI,{size:19,"aria-hidden":"true"})," লগআউট"]})]})]})]})},$b=()=>{const t=Xt(),e=[{label:"হোম",path:"/",icon:$p},{label:"মানচিত্র",path:"/map",icon:rc},{label:"কৃষি",path:"/agriculture",icon:sr},{label:"খেলাধুলা",path:"/sports",icon:os},{label:"জরুরি",path:"/emergency",icon:ic}];return E.jsx("nav",{className:"mobile-bottom-bar","aria-label":"মোবাইল বটম নেভিগেশন",role:"navigation",children:e.map(n=>{const r=n.icon,i=t.pathname===n.path||n.path!=="/"&&t.pathname.startsWith(n.path);return E.jsxs($e,{to:n.path,className:`mobile-bottom-item${i?" active":""}`,"aria-label":n.label,"aria-current":i?"page":void 0,children:[E.jsx(r,{size:22,color:i?"var(--color-primary-600)":"var(--text-muted)","aria-hidden":"true"}),E.jsx("span",{style:{lineHeight:1.2},children:n.label})]},n.path)})})},qb=()=>{const[t,e]=b.useState(!1);return E.jsxs("div",{className:"app-root-layout",children:[E.jsx(jb,{}),E.jsxs("div",{className:"main-wrapper",children:[E.jsx(Ub,{onOpenMobileNav:()=>e(!0)}),E.jsx("div",{className:"main-content-scrollable",children:E.jsx(iA,{})}),E.jsx(zb,{})]}),E.jsx(Bb,{isOpen:t,onClose:()=>e(!1)}),E.jsx($b,{})]})},wh=({children:t})=>{const{currentUser:e,loading:n}=aa(),r=Xt();return n?E.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"60vh"},children:E.jsx("div",{className:"skeleton",style:{width:"200px",height:"40px"}})}):e?t:E.jsx(dw,{to:"/login",state:{from:r},replace:!0})},Wb=({requiredRole:t,children:e})=>{const{hasRole:n,loading:r,currentUser:i}=aa();return r?E.jsx("div",{style:{padding:"3rem",textAlign:"center"},children:E.jsx("div",{className:"skeleton",style:{width:"100%",height:"100px"}})}):i?n(t)?e:E.jsx("div",{className:"container",style:{padding:"4rem 1.25rem",textAlign:"center"},children:E.jsxs("div",{className:"card",style:{maxWidth:"500px",margin:"0 auto",borderColor:"var(--color-accent-red)"},children:[E.jsx("h2",{style:{color:"var(--color-accent-red)",marginBottom:"1rem"},children:"অনুমতি নেই (Access Denied)"}),E.jsx("p",{style:{color:"var(--text-muted)",marginBottom:"1.5rem"},children:"আপনার অ্যাকাউন্টে এই এডমিন মডিউলটিতে প্রবেশের প্রয়োজনীয় অনুমতি নেই।"}),E.jsx("a",{href:"/dashboard",className:"btn btn-primary",children:"আমার ড্যাশবোর্ডে ফিরুন"})]})}):E.jsx(dw,{to:"/login",replace:!0})},Hb=b.lazy(()=>_e(()=>import("./Home-Dgv02VQx.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])).then(t=>({default:t.Home}))),Kb=b.lazy(()=>_e(()=>import("./MapPage-BRnPbHJl.js"),__vite__mapDeps([16,6,7,8,9,10,1])).then(t=>({default:t.MapPage}))),Gb=b.lazy(()=>_e(()=>import("./Agriculture-DDeoQVrm.js"),__vite__mapDeps([17,1,5,18,19,20,21,10,8])).then(t=>({default:t.Agriculture}))),Qb=b.lazy(()=>_e(()=>import("./FieldDetail-8Nr5xZjH.js"),__vite__mapDeps([22,1,23,24])).then(t=>({default:t.FieldDetail}))),Yb=b.lazy(()=>_e(()=>import("./Sports-DA4ikfWu.js"),__vite__mapDeps([25,2,1,5,12,15,10])).then(t=>({default:t.Sports}))),Xb=b.lazy(()=>_e(()=>import("./TournamentDetail-BdSSsolz.js"),__vite__mapDeps([26,2,1,5,27,23,10,28,18])).then(t=>({default:t.TournamentDetail}))),Jb=b.lazy(()=>_e(()=>import("./TournamentManagement-C93Ck1pU.js"),__vite__mapDeps([29,2,1,10,30,31,11,32,33,23,15,34,18])).then(t=>({default:t.TournamentManagement}))),Zb=b.lazy(()=>_e(()=>import("./LiveMatchPage-CUD9uOU8.js"),__vite__mapDeps([35,2,1,31,11,33,23])).then(t=>({default:t.LiveMatchPage}))),eV=b.lazy(()=>_e(()=>import("./Education-BHwFTING.js"),__vite__mapDeps([36,15,8])).then(t=>({default:t.Education}))),tV=b.lazy(()=>_e(()=>import("./InstitutionDetail-Cp-LISrt.js"),__vite__mapDeps([37,23,8])).then(t=>({default:t.InstitutionDetail}))),nV=b.lazy(()=>_e(()=>import("./Mosques-BRihZQwI.js"),__vite__mapDeps([38,1,39,14])).then(t=>({default:t.Mosques}))),rV=b.lazy(()=>_e(()=>import("./MosqueDetail-DXvXWHH1.js"),__vite__mapDeps([40,1,23])).then(t=>({default:t.MosqueDetail}))),iV=b.lazy(()=>_e(()=>import("./Organization-DSq2xJ60.js"),__vite__mapDeps([41,27,15,42,18])).then(t=>({default:t.Organization}))),sV=b.lazy(()=>_e(()=>import("./Culture-DcVmu4rl.js"),__vite__mapDeps([43,15])).then(t=>({default:t.Culture}))),oV=b.lazy(()=>_e(()=>import("./Social-BNExTY1C.js"),__vite__mapDeps([44,15])).then(t=>({default:t.Social}))),aV=b.lazy(()=>_e(()=>import("./Emergency-DEIdLRqj.js"),__vite__mapDeps([45,15])).then(t=>({default:t.Emergency}))),lV=b.lazy(()=>_e(()=>import("./ReligiousEvents-bmmDNO0J.js"),__vite__mapDeps([46,15])).then(t=>({default:t.ReligiousEvents}))),uV=b.lazy(()=>_e(()=>import("./WeatherPage-DX-H_EVQ.js"),__vite__mapDeps([47,3,7,24,39,15,33,48]))),cV=b.lazy(()=>_e(()=>import("./Login-CyAoNgju.js"),[]).then(t=>({default:t.Login}))),hV=b.lazy(()=>_e(()=>import("./Register-WB4JpXvs.js"),[]).then(t=>({default:t.Register}))),dV=b.lazy(()=>_e(()=>import("./ForgotPassword-D5XHd8QH.js"),__vite__mapDeps([49,23])).then(t=>({default:t.ForgotPassword}))),fV=b.lazy(()=>_e(()=>import("./Profile-REH8eYsC.js"),__vite__mapDeps([50,5,19,32,28,18])).then(t=>({default:t.Profile}))),pV=b.lazy(()=>_e(()=>import("./Dashboard-CzYBkI_u.js"),__vite__mapDeps([51,1,2,4,5,30,13,14,11,12,10,52,20,28,21])).then(t=>({default:t.Dashboard}))),mV=b.lazy(()=>_e(()=>import("./Admin-CLxPDXTi.js"),__vite__mapDeps([53,1,2,4,5,10,48,34,28,42,52,21,9,19])).then(t=>({default:t.Admin}))),gV=()=>E.jsx("div",{style:{padding:"4rem 1.25rem",textAlign:"center"},className:"container",children:E.jsx("div",{className:"skeleton",style:{width:"100%",height:"220px",borderRadius:"16px"}})}),yV=()=>E.jsx(b.Suspense,{fallback:E.jsx(gV,{}),children:E.jsx(oA,{children:E.jsxs(he,{path:"/",element:E.jsx(qb,{}),children:[E.jsx(he,{index:!0,element:E.jsx(Hb,{})}),E.jsx(he,{path:"map",element:E.jsx(Kb,{})}),E.jsx(he,{path:"agriculture",element:E.jsx(Gb,{})}),E.jsx(he,{path:"agriculture/:fieldId",element:E.jsx(Qb,{})}),E.jsx(he,{path:"sports",element:E.jsx(Yb,{})}),E.jsx(he,{path:"tournament/:id",element:E.jsx(Xb,{})}),E.jsx(he,{path:"tournament/:id/manage",element:E.jsx(wh,{children:E.jsx(Jb,{})})}),E.jsx(he,{path:"match/:id",element:E.jsx(Zb,{})}),E.jsx(he,{path:"education",element:E.jsx(eV,{})}),E.jsx(he,{path:"education/:id",element:E.jsx(tV,{})}),E.jsx(he,{path:"mosques",element:E.jsx(nV,{})}),E.jsx(he,{path:"mosques/:id",element:E.jsx(rV,{})}),E.jsx(he,{path:"organization",element:E.jsx(iV,{})}),E.jsx(he,{path:"culture",element:E.jsx(sV,{})}),E.jsx(he,{path:"social",element:E.jsx(oV,{})}),E.jsx(he,{path:"emergency",element:E.jsx(aV,{})}),E.jsx(he,{path:"religious-events",element:E.jsx(lV,{})}),E.jsx(he,{path:"weather",element:E.jsx(uV,{})}),E.jsx(he,{path:"login",element:E.jsx(cV,{})}),E.jsx(he,{path:"register",element:E.jsx(hV,{})}),E.jsx(he,{path:"forgot-password",element:E.jsx(dV,{})}),E.jsx(he,{path:"profile",element:E.jsx(wh,{children:E.jsx(fV,{})})}),E.jsx(he,{path:"dashboard",element:E.jsx(wh,{children:E.jsx(pV,{})})}),E.jsx(he,{path:"admin",element:E.jsx(Wb,{requiredRole:"super_admin",children:E.jsx(mV,{})})})]})})});function _V(){return E.jsx(wA,{children:E.jsx(_b,{children:E.jsx(vb,{children:E.jsx(pA,{children:E.jsx(yV,{})})})})})}Eh.createRoot(document.getElementById("root")).render(E.jsx(J_.StrictMode,{children:E.jsx(_V,{})}));export{kb as A,Rb as B,rI as C,xV as D,Pb as E,k_ as F,gD as G,sI as H,DV as I,NV as J,wV as K,$e as L,rc as M,Ab as N,lI as O,Xt as P,Mb as Q,J_ as R,sr as S,os as T,Hp as U,Vb as V,PV as W,uI as X,mD as Y,_e as _,Db as a,lu as b,oe as c,bb as d,Cb as e,qp as f,mk as g,BI as h,vV as i,E as j,aI as k,$p as l,bV as m,EV as n,Lb as o,Cu as p,ic as q,b as r,yi as s,RV as t,aa as u,AV as v,U_ as w,CV as x,OV as y,zd as z};
