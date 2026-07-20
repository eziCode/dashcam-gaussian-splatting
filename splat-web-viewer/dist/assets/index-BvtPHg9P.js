var ZS=Object.defineProperty;var JS=(a,e,t)=>e in a?ZS(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var Fe=(a,e,t)=>JS(a,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();function vx(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Gd={exports:{}},Fo={},Wd={exports:{}},Et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function eA(){if(Bg)return Et;Bg=1;var a=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function m(k){return k===null||typeof k!="object"?null:(k=g&&k[g]||k["@@iterator"],typeof k=="function"?k:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,M={};function S(k,te,Me){this.props=k,this.context=te,this.refs=M,this.updater=Me||x}S.prototype.isReactComponent={},S.prototype.setState=function(k,te){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,te,"setState")},S.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function A(){}A.prototype=S.prototype;function T(k,te,Me){this.props=k,this.context=te,this.refs=M,this.updater=Me||x}var P=T.prototype=new A;P.constructor=T,y(P,S.prototype),P.isPureReactComponent=!0;var C=Array.isArray,b=Object.prototype.hasOwnProperty,I={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function E(k,te,Me){var Te,Re={},se=null,xe=null;if(te!=null)for(Te in te.ref!==void 0&&(xe=te.ref),te.key!==void 0&&(se=""+te.key),te)b.call(te,Te)&&!R.hasOwnProperty(Te)&&(Re[Te]=te[Te]);var pe=arguments.length-2;if(pe===1)Re.children=Me;else if(1<pe){for(var be=Array(pe),Oe=0;Oe<pe;Oe++)be[Oe]=arguments[Oe+2];Re.children=be}if(k&&k.defaultProps)for(Te in pe=k.defaultProps,pe)Re[Te]===void 0&&(Re[Te]=pe[Te]);return{$$typeof:a,type:k,key:se,ref:xe,props:Re,_owner:I.current}}function F(k,te){return{$$typeof:a,type:k.type,key:te,ref:k.ref,props:k.props,_owner:k._owner}}function B(k){return typeof k=="object"&&k!==null&&k.$$typeof===a}function N(k){var te={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Me){return te[Me]})}var U=/\/+/g;function W(k,te){return typeof k=="object"&&k!==null&&k.key!=null?N(""+k.key):te.toString(36)}function X(k,te,Me,Te,Re){var se=typeof k;(se==="undefined"||se==="boolean")&&(k=null);var xe=!1;if(k===null)xe=!0;else switch(se){case"string":case"number":xe=!0;break;case"object":switch(k.$$typeof){case a:case e:xe=!0}}if(xe)return xe=k,Re=Re(xe),k=Te===""?"."+W(xe,0):Te,C(Re)?(Me="",k!=null&&(Me=k.replace(U,"$&/")+"/"),X(Re,te,Me,"",function(Oe){return Oe})):Re!=null&&(B(Re)&&(Re=F(Re,Me+(!Re.key||xe&&xe.key===Re.key?"":(""+Re.key).replace(U,"$&/")+"/")+k)),te.push(Re)),1;if(xe=0,Te=Te===""?".":Te+":",C(k))for(var pe=0;pe<k.length;pe++){se=k[pe];var be=Te+W(se,pe);xe+=X(se,te,Me,be,Re)}else if(be=m(k),typeof be=="function")for(k=be.call(k),pe=0;!(se=k.next()).done;)se=se.value,be=Te+W(se,pe++),xe+=X(se,te,Me,be,Re);else if(se==="object")throw te=String(k),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return xe}function H(k,te,Me){if(k==null)return k;var Te=[],Re=0;return X(k,Te,"","",function(se){return te.call(Me,se,Re++)}),Te}function j(k){if(k._status===-1){var te=k._result;te=te(),te.then(function(Me){(k._status===0||k._status===-1)&&(k._status=1,k._result=Me)},function(Me){(k._status===0||k._status===-1)&&(k._status=2,k._result=Me)}),k._status===-1&&(k._status=0,k._result=te)}if(k._status===1)return k._result.default;throw k._result}var q={current:null},Y={transition:null},K={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:Y,ReactCurrentOwner:I};function ne(){throw Error("act(...) is not supported in production builds of React.")}return Et.Children={map:H,forEach:function(k,te,Me){H(k,function(){te.apply(this,arguments)},Me)},count:function(k){var te=0;return H(k,function(){te++}),te},toArray:function(k){return H(k,function(te){return te})||[]},only:function(k){if(!B(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},Et.Component=S,Et.Fragment=t,Et.Profiler=s,Et.PureComponent=T,Et.StrictMode=n,Et.Suspense=d,Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,Et.act=ne,Et.cloneElement=function(k,te,Me){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var Te=y({},k.props),Re=k.key,se=k.ref,xe=k._owner;if(te!=null){if(te.ref!==void 0&&(se=te.ref,xe=I.current),te.key!==void 0&&(Re=""+te.key),k.type&&k.type.defaultProps)var pe=k.type.defaultProps;for(be in te)b.call(te,be)&&!R.hasOwnProperty(be)&&(Te[be]=te[be]===void 0&&pe!==void 0?pe[be]:te[be])}var be=arguments.length-2;if(be===1)Te.children=Me;else if(1<be){pe=Array(be);for(var Oe=0;Oe<be;Oe++)pe[Oe]=arguments[Oe+2];Te.children=pe}return{$$typeof:a,type:k.type,key:Re,ref:se,props:Te,_owner:xe}},Et.createContext=function(k){return k={$$typeof:l,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:o,_context:k},k.Consumer=k},Et.createElement=E,Et.createFactory=function(k){var te=E.bind(null,k);return te.type=k,te},Et.createRef=function(){return{current:null}},Et.forwardRef=function(k){return{$$typeof:u,render:k}},Et.isValidElement=B,Et.lazy=function(k){return{$$typeof:p,_payload:{_status:-1,_result:k},_init:j}},Et.memo=function(k,te){return{$$typeof:f,type:k,compare:te===void 0?null:te}},Et.startTransition=function(k){var te=Y.transition;Y.transition={};try{k()}finally{Y.transition=te}},Et.unstable_act=ne,Et.useCallback=function(k,te){return q.current.useCallback(k,te)},Et.useContext=function(k){return q.current.useContext(k)},Et.useDebugValue=function(){},Et.useDeferredValue=function(k){return q.current.useDeferredValue(k)},Et.useEffect=function(k,te){return q.current.useEffect(k,te)},Et.useId=function(){return q.current.useId()},Et.useImperativeHandle=function(k,te,Me){return q.current.useImperativeHandle(k,te,Me)},Et.useInsertionEffect=function(k,te){return q.current.useInsertionEffect(k,te)},Et.useLayoutEffect=function(k,te){return q.current.useLayoutEffect(k,te)},Et.useMemo=function(k,te){return q.current.useMemo(k,te)},Et.useReducer=function(k,te,Me){return q.current.useReducer(k,te,Me)},Et.useRef=function(k){return q.current.useRef(k)},Et.useState=function(k){return q.current.useState(k)},Et.useSyncExternalStore=function(k,te,Me){return q.current.useSyncExternalStore(k,te,Me)},Et.useTransition=function(){return q.current.useTransition()},Et.version="18.3.1",Et}var Ng;function Oh(){return Ng||(Ng=1,Wd.exports=eA()),Wd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug;function tA(){if(Ug)return Fo;Ug=1;var a=Oh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(u,d,f){var p,g={},m=null,x=null;f!==void 0&&(m=""+f),d.key!==void 0&&(m=""+d.key),d.ref!==void 0&&(x=d.ref);for(p in d)n.call(d,p)&&!o.hasOwnProperty(p)&&(g[p]=d[p]);if(u&&u.defaultProps)for(p in d=u.defaultProps,d)g[p]===void 0&&(g[p]=d[p]);return{$$typeof:e,type:u,key:m,ref:x,props:g,_owner:s.current}}return Fo.Fragment=t,Fo.jsx=l,Fo.jsxs=l,Fo}var Og;function nA(){return Og||(Og=1,Gd.exports=tA()),Gd.exports}var V=nA(),Pn=Oh();const iA=vx(Pn);var oc={},Xd={exports:{}},ci={},Qd={exports:{}},qd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function rA(){return kg||(kg=1,(function(a){function e(Y,K){var ne=Y.length;Y.push(K);e:for(;0<ne;){var k=ne-1>>>1,te=Y[k];if(0<s(te,K))Y[k]=K,Y[ne]=te,ne=k;else break e}}function t(Y){return Y.length===0?null:Y[0]}function n(Y){if(Y.length===0)return null;var K=Y[0],ne=Y.pop();if(ne!==K){Y[0]=ne;e:for(var k=0,te=Y.length,Me=te>>>1;k<Me;){var Te=2*(k+1)-1,Re=Y[Te],se=Te+1,xe=Y[se];if(0>s(Re,ne))se<te&&0>s(xe,Re)?(Y[k]=xe,Y[se]=ne,k=se):(Y[k]=Re,Y[Te]=ne,k=Te);else if(se<te&&0>s(xe,ne))Y[k]=xe,Y[se]=ne,k=se;else break e}}return K}function s(Y,K){var ne=Y.sortIndex-K.sortIndex;return ne!==0?ne:Y.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;a.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();a.unstable_now=function(){return l.now()-u}}var d=[],f=[],p=1,g=null,m=3,x=!1,y=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(Y){for(var K=t(f);K!==null;){if(K.callback===null)n(f);else if(K.startTime<=Y)n(f),K.sortIndex=K.expirationTime,e(d,K);else break;K=t(f)}}function C(Y){if(M=!1,P(Y),!y)if(t(d)!==null)y=!0,j(b);else{var K=t(f);K!==null&&q(C,K.startTime-Y)}}function b(Y,K){y=!1,M&&(M=!1,A(E),E=-1),x=!0;var ne=m;try{for(P(K),g=t(d);g!==null&&(!(g.expirationTime>K)||Y&&!N());){var k=g.callback;if(typeof k=="function"){g.callback=null,m=g.priorityLevel;var te=k(g.expirationTime<=K);K=a.unstable_now(),typeof te=="function"?g.callback=te:g===t(d)&&n(d),P(K)}else n(d);g=t(d)}if(g!==null)var Me=!0;else{var Te=t(f);Te!==null&&q(C,Te.startTime-K),Me=!1}return Me}finally{g=null,m=ne,x=!1}}var I=!1,R=null,E=-1,F=5,B=-1;function N(){return!(a.unstable_now()-B<F)}function U(){if(R!==null){var Y=a.unstable_now();B=Y;var K=!0;try{K=R(!0,Y)}finally{K?W():(I=!1,R=null)}}else I=!1}var W;if(typeof T=="function")W=function(){T(U)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,H=X.port2;X.port1.onmessage=U,W=function(){H.postMessage(null)}}else W=function(){S(U,0)};function j(Y){R=Y,I||(I=!0,W())}function q(Y,K){E=S(function(){Y(a.unstable_now())},K)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(Y){Y.callback=null},a.unstable_continueExecution=function(){y||x||(y=!0,j(b))},a.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<Y?Math.floor(1e3/Y):5},a.unstable_getCurrentPriorityLevel=function(){return m},a.unstable_getFirstCallbackNode=function(){return t(d)},a.unstable_next=function(Y){switch(m){case 1:case 2:case 3:var K=3;break;default:K=m}var ne=m;m=K;try{return Y()}finally{m=ne}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(Y,K){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var ne=m;m=Y;try{return K()}finally{m=ne}},a.unstable_scheduleCallback=function(Y,K,ne){var k=a.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?k+ne:k):ne=k,Y){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=ne+te,Y={id:p++,callback:K,priorityLevel:Y,startTime:ne,expirationTime:te,sortIndex:-1},ne>k?(Y.sortIndex=ne,e(f,Y),t(d)===null&&Y===t(f)&&(M?(A(E),E=-1):M=!0,q(C,ne-k))):(Y.sortIndex=te,e(d,Y),y||x||(y=!0,j(b))),Y},a.unstable_shouldYield=N,a.unstable_wrapCallback=function(Y){var K=m;return function(){var ne=m;m=K;try{return Y.apply(this,arguments)}finally{m=ne}}}})(qd)),qd}var zg;function sA(){return zg||(zg=1,Qd.exports=rA()),Qd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function aA(){if(Hg)return ci;Hg=1;var a=Oh(),e=sA();function t(i){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+i,c=1;c<arguments.length;c++)r+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,s={};function o(i,r){l(i,r),l(i+"Capture",r)}function l(i,r){for(s[i]=r,i=0;i<r.length;i++)n.add(r[i])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function m(i){return d.call(g,i)?!0:d.call(p,i)?!1:f.test(i)?g[i]=!0:(p[i]=!0,!1)}function x(i,r,c,h){if(c!==null&&c.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return h?!1:c!==null?!c.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function y(i,r,c,h){if(r===null||typeof r>"u"||x(i,r,c,h))return!0;if(h)return!1;if(c!==null)switch(c.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function M(i,r,c,h,v,_,D){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=h,this.attributeNamespace=v,this.mustUseProperty=c,this.propertyName=i,this.type=r,this.sanitizeURL=_,this.removeEmptyString=D}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new M(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var r=i[0];S[r]=new M(r,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new M(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new M(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new M(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new M(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new M(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new M(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new M(i,5,!1,i.toLowerCase(),null,!1,!1)});var A=/[\-:]([a-z])/g;function T(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var r=i.replace(A,T);S[r]=new M(r,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var r=i.replace(A,T);S[r]=new M(r,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var r=i.replace(A,T);S[r]=new M(r,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new M(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new M(i,1,!1,i.toLowerCase(),null,!0,!0)});function P(i,r,c,h){var v=S.hasOwnProperty(r)?S[r]:null;(v!==null?v.type!==0:h||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(y(r,c,v,h)&&(c=null),h||v===null?m(r)&&(c===null?i.removeAttribute(r):i.setAttribute(r,""+c)):v.mustUseProperty?i[v.propertyName]=c===null?v.type===3?!1:"":c:(r=v.attributeName,h=v.attributeNamespace,c===null?i.removeAttribute(r):(v=v.type,c=v===3||v===4&&c===!0?"":""+c,h?i.setAttributeNS(h,r,c):i.setAttribute(r,c))))}var C=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,b=Symbol.for("react.element"),I=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),Y=Symbol.iterator;function K(i){return i===null||typeof i!="object"?null:(i=Y&&i[Y]||i["@@iterator"],typeof i=="function"?i:null)}var ne=Object.assign,k;function te(i){if(k===void 0)try{throw Error()}catch(c){var r=c.stack.trim().match(/\n( *(at )?)/);k=r&&r[1]||""}return`
`+k+i}var Me=!1;function Te(i,r){if(!i||Me)return"";Me=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(he){var h=he}Reflect.construct(i,[],r)}else{try{r.call()}catch(he){h=he}i.call(r.prototype)}else{try{throw Error()}catch(he){h=he}i()}}catch(he){if(he&&h&&typeof he.stack=="string"){for(var v=he.stack.split(`
`),_=h.stack.split(`
`),D=v.length-1,G=_.length-1;1<=D&&0<=G&&v[D]!==_[G];)G--;for(;1<=D&&0<=G;D--,G--)if(v[D]!==_[G]){if(D!==1||G!==1)do if(D--,G--,0>G||v[D]!==_[G]){var Z=`
`+v[D].replace(" at new "," at ");return i.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",i.displayName)),Z}while(1<=D&&0<=G);break}}}finally{Me=!1,Error.prepareStackTrace=c}return(i=i?i.displayName||i.name:"")?te(i):""}function Re(i){switch(i.tag){case 5:return te(i.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return i=Te(i.type,!1),i;case 11:return i=Te(i.type.render,!1),i;case 1:return i=Te(i.type,!0),i;default:return""}}function se(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case R:return"Fragment";case I:return"Portal";case F:return"Profiler";case E:return"StrictMode";case W:return"Suspense";case X:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case N:return(i.displayName||"Context")+".Consumer";case B:return(i._context.displayName||"Context")+".Provider";case U:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case H:return r=i.displayName||null,r!==null?r:se(i.type)||"Memo";case j:r=i._payload,i=i._init;try{return se(i(r))}catch{}}return null}function xe(i){var r=i.type;switch(i.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=r.render,i=i.displayName||i.name||"",r.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(r);case 8:return r===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function pe(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function be(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Oe(i){var r=be(i)?"checked":"value",c=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),h=""+i[r];if(!i.hasOwnProperty(r)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var v=c.get,_=c.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return v.call(this)},set:function(D){h=""+D,_.call(this,D)}}),Object.defineProperty(i,r,{enumerable:c.enumerable}),{getValue:function(){return h},setValue:function(D){h=""+D},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function Ge(i){i._valueTracker||(i._valueTracker=Oe(i))}function xt(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var c=r.getValue(),h="";return i&&(h=be(i)?i.checked?"true":"false":i.value),i=h,i!==c?(r.setValue(i),!0):!1}function Ye(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function dt(i,r){var c=r.checked;return ne({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:c??i._wrapperState.initialChecked})}function nt(i,r){var c=r.defaultValue==null?"":r.defaultValue,h=r.checked!=null?r.checked:r.defaultChecked;c=pe(r.value!=null?r.value:c),i._wrapperState={initialChecked:h,initialValue:c,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ht(i,r){r=r.checked,r!=null&&P(i,"checked",r,!1)}function bt(i,r){ht(i,r);var c=pe(r.value),h=r.type;if(c!=null)h==="number"?(c===0&&i.value===""||i.value!=c)&&(i.value=""+c):i.value!==""+c&&(i.value=""+c);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}r.hasOwnProperty("value")?Tt(i,r.type,c):r.hasOwnProperty("defaultValue")&&Tt(i,r.type,pe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(i.defaultChecked=!!r.defaultChecked)}function At(i,r,c){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var h=r.type;if(!(h!=="submit"&&h!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+i._wrapperState.initialValue,c||r===i.value||(i.value=r),i.defaultValue=r}c=i.name,c!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,c!==""&&(i.name=c)}function Tt(i,r,c){(r!=="number"||Ye(i.ownerDocument)!==i)&&(c==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+c&&(i.defaultValue=""+c))}var Bt=Array.isArray;function Ut(i,r,c,h){if(i=i.options,r){r={};for(var v=0;v<c.length;v++)r["$"+c[v]]=!0;for(c=0;c<i.length;c++)v=r.hasOwnProperty("$"+i[c].value),i[c].selected!==v&&(i[c].selected=v),v&&h&&(i[c].defaultSelected=!0)}else{for(c=""+pe(c),r=null,v=0;v<i.length;v++){if(i[v].value===c){i[v].selected=!0,h&&(i[v].defaultSelected=!0);return}r!==null||i[v].disabled||(r=i[v])}r!==null&&(r.selected=!0)}}function qt(i,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},r,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function ee(i,r){var c=r.value;if(c==null){if(c=r.children,r=r.defaultValue,c!=null){if(r!=null)throw Error(t(92));if(Bt(c)){if(1<c.length)throw Error(t(93));c=c[0]}r=c}r==null&&(r=""),c=r}i._wrapperState={initialValue:pe(c)}}function hn(i,r){var c=pe(r.value),h=pe(r.defaultValue);c!=null&&(c=""+c,c!==i.value&&(i.value=c),r.defaultValue==null&&i.defaultValue!==c&&(i.defaultValue=c)),h!=null&&(i.defaultValue=""+h)}function It(i){var r=i.textContent;r===i._wrapperState.initialValue&&r!==""&&r!==null&&(i.value=r)}function O(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function w(i,r){return i==null||i==="http://www.w3.org/1999/xhtml"?O(r):i==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var ae,de=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,c,h,v){MSApp.execUnsafeLocalFunction(function(){return i(r,c,h,v)})}:i})(function(i,r){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=r;else{for(ae=ae||document.createElement("div"),ae.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ae.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;r.firstChild;)i.appendChild(r.firstChild)}});function ge(i,r){if(r){var c=i.firstChild;if(c&&c===i.lastChild&&c.nodeType===3){c.nodeValue=r;return}}i.textContent=r}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Q=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(i){Q.forEach(function(r){r=r+i.charAt(0).toUpperCase()+i.substring(1),we[r]=we[i]})});function ie(i,r,c){return r==null||typeof r=="boolean"||r===""?"":c||typeof r!="number"||r===0||we.hasOwnProperty(i)&&we[i]?(""+r).trim():r+"px"}function me(i,r){i=i.style;for(var c in r)if(r.hasOwnProperty(c)){var h=c.indexOf("--")===0,v=ie(c,r[c],h);c==="float"&&(c="cssFloat"),h?i.setProperty(c,v):i[c]=v}}var Ee=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function He(i,r){if(r){if(Ee[i]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Le(i,r){if(i.indexOf("-")===-1)return typeof r.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ie=null;function st(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var lt=null,at=null,$=null;function De(i){if(i=vo(i)){if(typeof lt!="function")throw Error(t(280));var r=i.stateNode;r&&(r=_l(r),lt(i.stateNode,i.type,r))}}function Se(i){at?$?$.push(i):$=[i]:at=i}function Be(){if(at){var i=at,r=$;if($=at=null,De(i),r)for(i=0;i<r.length;i++)De(r[i])}}function ke(i,r){return i(r)}function Ae(){}var Je=!1;function $e(i,r,c){if(Je)return i(r,c);Je=!0;try{return ke(i,r,c)}finally{Je=!1,(at!==null||$!==null)&&(Ae(),Be())}}function Xt(i,r){var c=i.stateNode;if(c===null)return null;var h=_l(c);if(h===null)return null;c=h[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(c&&typeof c!="function")throw Error(t(231,r,typeof c));return c}var Ot=!1;if(u)try{var Un={};Object.defineProperty(Un,"passive",{get:function(){Ot=!0}}),window.addEventListener("test",Un,Un),window.removeEventListener("test",Un,Un)}catch{Ot=!1}function Mi(i,r,c,h,v,_,D,G,Z){var he=Array.prototype.slice.call(arguments,3);try{r.apply(c,he)}catch(_e){this.onError(_e)}}var fs=!1,Qs=null,hs=!1,ps=null,fu={onError:function(i){fs=!0,Qs=i}};function rl(i,r,c,h,v,_,D,G,Z){fs=!1,Qs=null,Mi.apply(fu,arguments)}function sl(i,r,c,h,v,_,D,G,Z){if(rl.apply(this,arguments),fs){if(fs){var he=Qs;fs=!1,Qs=null}else throw Error(t(198));hs||(hs=!0,ps=he)}}function Xn(i){var r=i,c=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(c=r.return),i=r.return;while(i)}return r.tag===3?c:null}function qs(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function $a(i){if(Xn(i)!==i)throw Error(t(188))}function al(i){var r=i.alternate;if(!r){if(r=Xn(i),r===null)throw Error(t(188));return r!==i?null:i}for(var c=i,h=r;;){var v=c.return;if(v===null)break;var _=v.alternate;if(_===null){if(h=v.return,h!==null){c=h;continue}break}if(v.child===_.child){for(_=v.child;_;){if(_===c)return $a(v),i;if(_===h)return $a(v),r;_=_.sibling}throw Error(t(188))}if(c.return!==h.return)c=v,h=_;else{for(var D=!1,G=v.child;G;){if(G===c){D=!0,c=v,h=_;break}if(G===h){D=!0,h=v,c=_;break}G=G.sibling}if(!D){for(G=_.child;G;){if(G===c){D=!0,c=_,h=v;break}if(G===h){D=!0,h=_,c=v;break}G=G.sibling}if(!D)throw Error(t(189))}}if(c.alternate!==h)throw Error(t(190))}if(c.tag!==3)throw Error(t(188));return c.stateNode.current===c?i:r}function ms(i){return i=al(i),i!==null?Za(i):null}function Za(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var r=Za(i);if(r!==null)return r;i=i.sibling}return null}var gs=e.unstable_scheduleCallback,Ja=e.unstable_cancelCallback,ol=e.unstable_shouldYield,hu=e.unstable_requestPaint,on=e.unstable_now,pu=e.unstable_getCurrentPriorityLevel,eo=e.unstable_ImmediatePriority,L=e.unstable_UserBlockingPriority,re=e.unstable_NormalPriority,fe=e.unstable_LowPriority,ce=e.unstable_IdlePriority,le=null,Ue=null;function Qe(i){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(le,i,void 0,(i.current.flags&128)===128)}catch{}}var Ne=Math.clz32?Math.clz32:vt,et=Math.log,ot=Math.LN2;function vt(i){return i>>>=0,i===0?32:31-(et(i)/ot|0)|0}var St=64,it=4194304;function Pt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Yt(i,r){var c=i.pendingLanes;if(c===0)return 0;var h=0,v=i.suspendedLanes,_=i.pingedLanes,D=c&268435455;if(D!==0){var G=D&~v;G!==0?h=Pt(G):(_&=D,_!==0&&(h=Pt(_)))}else D=c&~v,D!==0?h=Pt(D):_!==0&&(h=Pt(_));if(h===0)return 0;if(r!==0&&r!==h&&(r&v)===0&&(v=h&-h,_=r&-r,v>=_||v===16&&(_&4194240)!==0))return r;if((h&4)!==0&&(h|=c&16),r=i.entangledLanes,r!==0)for(i=i.entanglements,r&=h;0<r;)c=31-Ne(r),v=1<<c,h|=i[c],r&=~v;return h}function nn(i,r){switch(i){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ht(i,r){for(var c=i.suspendedLanes,h=i.pingedLanes,v=i.expirationTimes,_=i.pendingLanes;0<_;){var D=31-Ne(_),G=1<<D,Z=v[D];Z===-1?((G&c)===0||(G&h)!==0)&&(v[D]=nn(G,r)):Z<=r&&(i.expiredLanes|=G),_&=~G}}function vn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function We(){var i=St;return St<<=1,(St&4194240)===0&&(St=64),i}function Dn(i){for(var r=[],c=0;31>c;c++)r.push(i);return r}function _t(i,r,c){i.pendingLanes|=r,r!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,r=31-Ne(r),i[r]=c}function ni(i,r){var c=i.pendingLanes&~r;i.pendingLanes=r,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=r,i.mutableReadLanes&=r,i.entangledLanes&=r,r=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<c;){var v=31-Ne(c),_=1<<v;r[v]=0,h[v]=-1,i[v]=-1,c&=~_}}function ii(i,r){var c=i.entangledLanes|=r;for(i=i.entanglements;c;){var h=31-Ne(c),v=1<<h;v&r|i[h]&r&&(i[h]|=r),c&=~v}}var Mt=0;function dr(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var kt,Kt,Ui,Vt,Oi,Ki=!1,xs=[],Lr=null,Br=null,Nr=null,to=new Map,no=new Map,Ur=[],Av="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vp(i,r){switch(i){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":Br=null;break;case"mouseover":case"mouseout":Nr=null;break;case"pointerover":case"pointerout":to.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(r.pointerId)}}function io(i,r,c,h,v,_){return i===null||i.nativeEvent!==_?(i={blockedOn:r,domEventName:c,eventSystemFlags:h,nativeEvent:_,targetContainers:[v]},r!==null&&(r=vo(r),r!==null&&Kt(r)),i):(i.eventSystemFlags|=h,r=i.targetContainers,v!==null&&r.indexOf(v)===-1&&r.push(v),i)}function yv(i,r,c,h,v){switch(r){case"focusin":return Lr=io(Lr,i,r,c,h,v),!0;case"dragenter":return Br=io(Br,i,r,c,h,v),!0;case"mouseover":return Nr=io(Nr,i,r,c,h,v),!0;case"pointerover":var _=v.pointerId;return to.set(_,io(to.get(_)||null,i,r,c,h,v)),!0;case"gotpointercapture":return _=v.pointerId,no.set(_,io(no.get(_)||null,i,r,c,h,v)),!0}return!1}function Sp(i){var r=vs(i.target);if(r!==null){var c=Xn(r);if(c!==null){if(r=c.tag,r===13){if(r=qs(c),r!==null){i.blockedOn=r,Oi(i.priority,function(){Ui(c)});return}}else if(r===3&&c.stateNode.current.memoizedState.isDehydrated){i.blockedOn=c.tag===3?c.stateNode.containerInfo:null;return}}}i.blockedOn=null}function ll(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var c=gu(i.domEventName,i.eventSystemFlags,r[0],i.nativeEvent);if(c===null){c=i.nativeEvent;var h=new c.constructor(c.type,c);Ie=h,c.target.dispatchEvent(h),Ie=null}else return r=vo(c),r!==null&&Kt(r),i.blockedOn=c,!1;r.shift()}return!0}function Ap(i,r,c){ll(i)&&c.delete(r)}function _v(){Ki=!1,Lr!==null&&ll(Lr)&&(Lr=null),Br!==null&&ll(Br)&&(Br=null),Nr!==null&&ll(Nr)&&(Nr=null),to.forEach(Ap),no.forEach(Ap)}function ro(i,r){i.blockedOn===r&&(i.blockedOn=null,Ki||(Ki=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,_v)))}function so(i){function r(v){return ro(v,i)}if(0<xs.length){ro(xs[0],i);for(var c=1;c<xs.length;c++){var h=xs[c];h.blockedOn===i&&(h.blockedOn=null)}}for(Lr!==null&&ro(Lr,i),Br!==null&&ro(Br,i),Nr!==null&&ro(Nr,i),to.forEach(r),no.forEach(r),c=0;c<Ur.length;c++)h=Ur[c],h.blockedOn===i&&(h.blockedOn=null);for(;0<Ur.length&&(c=Ur[0],c.blockedOn===null);)Sp(c),c.blockedOn===null&&Ur.shift()}var Ys=C.ReactCurrentBatchConfig,cl=!0;function Mv(i,r,c,h){var v=Mt,_=Ys.transition;Ys.transition=null;try{Mt=1,mu(i,r,c,h)}finally{Mt=v,Ys.transition=_}}function Ev(i,r,c,h){var v=Mt,_=Ys.transition;Ys.transition=null;try{Mt=4,mu(i,r,c,h)}finally{Mt=v,Ys.transition=_}}function mu(i,r,c,h){if(cl){var v=gu(i,r,c,h);if(v===null)Fu(i,r,h,ul,c),vp(i,h);else if(yv(v,i,r,c,h))h.stopPropagation();else if(vp(i,h),r&4&&-1<Av.indexOf(i)){for(;v!==null;){var _=vo(v);if(_!==null&&kt(_),_=gu(i,r,c,h),_===null&&Fu(i,r,h,ul,c),_===v)break;v=_}v!==null&&h.stopPropagation()}else Fu(i,r,h,null,c)}}var ul=null;function gu(i,r,c,h){if(ul=null,i=st(h),i=vs(i),i!==null)if(r=Xn(i),r===null)i=null;else if(c=r.tag,c===13){if(i=qs(r),i!==null)return i;i=null}else if(c===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null);return ul=i,null}function yp(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pu()){case eo:return 1;case L:return 4;case re:case fe:return 16;case ce:return 536870912;default:return 16}default:return 16}}var Or=null,xu=null,dl=null;function _p(){if(dl)return dl;var i,r=xu,c=r.length,h,v="value"in Or?Or.value:Or.textContent,_=v.length;for(i=0;i<c&&r[i]===v[i];i++);var D=c-i;for(h=1;h<=D&&r[c-h]===v[_-h];h++);return dl=v.slice(i,1<h?1-h:void 0)}function fl(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function hl(){return!0}function Mp(){return!1}function mi(i){function r(c,h,v,_,D){this._reactName=c,this._targetInst=v,this.type=h,this.nativeEvent=_,this.target=D,this.currentTarget=null;for(var G in i)i.hasOwnProperty(G)&&(c=i[G],this[G]=c?c(_):_[G]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?hl:Mp,this.isPropagationStopped=Mp,this}return ne(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),r}var js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vu=mi(js),ao=ne({},js,{view:0,detail:0}),Cv=mi(ao),Su,Au,oo,pl=ne({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_u,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==oo&&(oo&&i.type==="mousemove"?(Su=i.screenX-oo.screenX,Au=i.screenY-oo.screenY):Au=Su=0,oo=i),Su)},movementY:function(i){return"movementY"in i?i.movementY:Au}}),Ep=mi(pl),Tv=ne({},pl,{dataTransfer:0}),wv=mi(Tv),bv=ne({},ao,{relatedTarget:0}),yu=mi(bv),Rv=ne({},js,{animationName:0,elapsedTime:0,pseudoElement:0}),Iv=mi(Rv),Pv=ne({},js,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Dv=mi(Pv),Fv=ne({},js,{data:0}),Cp=mi(Fv),Lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uv(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=Nv[i])?!!r[i]:!1}function _u(){return Uv}var Ov=ne({},ao,{key:function(i){if(i.key){var r=Lv[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=fl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Bv[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_u,charCode:function(i){return i.type==="keypress"?fl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?fl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),kv=mi(Ov),zv=ne({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tp=mi(zv),Hv=ne({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_u}),Vv=mi(Hv),Gv=ne({},js,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wv=mi(Gv),Xv=ne({},pl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Qv=mi(Xv),qv=[9,13,27,32],Mu=u&&"CompositionEvent"in window,lo=null;u&&"documentMode"in document&&(lo=document.documentMode);var Yv=u&&"TextEvent"in window&&!lo,wp=u&&(!Mu||lo&&8<lo&&11>=lo),bp=" ",Rp=!1;function Ip(i,r){switch(i){case"keyup":return qv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pp(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ks=!1;function jv(i,r){switch(i){case"compositionend":return Pp(r);case"keypress":return r.which!==32?null:(Rp=!0,bp);case"textInput":return i=r.data,i===bp&&Rp?null:i;default:return null}}function Kv(i,r){if(Ks)return i==="compositionend"||!Mu&&Ip(i,r)?(i=_p(),dl=xu=Or=null,Ks=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return wp&&r.locale!=="ko"?null:r.data;default:return null}}var $v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dp(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!$v[i.type]:r==="textarea"}function Fp(i,r,c,h){Se(h),r=Sl(r,"onChange"),0<r.length&&(c=new vu("onChange","change",null,c,h),i.push({event:c,listeners:r}))}var co=null,uo=null;function Zv(i){$p(i,0)}function ml(i){var r=ta(i);if(xt(r))return i}function Jv(i,r){if(i==="change")return r}var Lp=!1;if(u){var Eu;if(u){var Cu="oninput"in document;if(!Cu){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),Cu=typeof Bp.oninput=="function"}Eu=Cu}else Eu=!1;Lp=Eu&&(!document.documentMode||9<document.documentMode)}function Np(){co&&(co.detachEvent("onpropertychange",Up),uo=co=null)}function Up(i){if(i.propertyName==="value"&&ml(uo)){var r=[];Fp(r,uo,i,st(i)),$e(Zv,r)}}function eS(i,r,c){i==="focusin"?(Np(),co=r,uo=c,co.attachEvent("onpropertychange",Up)):i==="focusout"&&Np()}function tS(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return ml(uo)}function nS(i,r){if(i==="click")return ml(r)}function iS(i,r){if(i==="input"||i==="change")return ml(r)}function rS(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var ki=typeof Object.is=="function"?Object.is:rS;function fo(i,r){if(ki(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var c=Object.keys(i),h=Object.keys(r);if(c.length!==h.length)return!1;for(h=0;h<c.length;h++){var v=c[h];if(!d.call(r,v)||!ki(i[v],r[v]))return!1}return!0}function Op(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function kp(i,r){var c=Op(i);i=0;for(var h;c;){if(c.nodeType===3){if(h=i+c.textContent.length,i<=r&&h>=r)return{node:c,offset:r-i};i=h}e:{for(;c;){if(c.nextSibling){c=c.nextSibling;break e}c=c.parentNode}c=void 0}c=Op(c)}}function zp(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?zp(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function Hp(){for(var i=window,r=Ye();r instanceof i.HTMLIFrameElement;){try{var c=typeof r.contentWindow.location.href=="string"}catch{c=!1}if(c)i=r.contentWindow;else break;r=Ye(i.document)}return r}function Tu(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}function sS(i){var r=Hp(),c=i.focusedElem,h=i.selectionRange;if(r!==c&&c&&c.ownerDocument&&zp(c.ownerDocument.documentElement,c)){if(h!==null&&Tu(c)){if(r=h.start,i=h.end,i===void 0&&(i=r),"selectionStart"in c)c.selectionStart=r,c.selectionEnd=Math.min(i,c.value.length);else if(i=(r=c.ownerDocument||document)&&r.defaultView||window,i.getSelection){i=i.getSelection();var v=c.textContent.length,_=Math.min(h.start,v);h=h.end===void 0?_:Math.min(h.end,v),!i.extend&&_>h&&(v=h,h=_,_=v),v=kp(c,_);var D=kp(c,h);v&&D&&(i.rangeCount!==1||i.anchorNode!==v.node||i.anchorOffset!==v.offset||i.focusNode!==D.node||i.focusOffset!==D.offset)&&(r=r.createRange(),r.setStart(v.node,v.offset),i.removeAllRanges(),_>h?(i.addRange(r),i.extend(D.node,D.offset)):(r.setEnd(D.node,D.offset),i.addRange(r)))}}for(r=[],i=c;i=i.parentNode;)i.nodeType===1&&r.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<r.length;c++)i=r[c],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var aS=u&&"documentMode"in document&&11>=document.documentMode,$s=null,wu=null,ho=null,bu=!1;function Vp(i,r,c){var h=c.window===c?c.document:c.nodeType===9?c:c.ownerDocument;bu||$s==null||$s!==Ye(h)||(h=$s,"selectionStart"in h&&Tu(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),ho&&fo(ho,h)||(ho=h,h=Sl(wu,"onSelect"),0<h.length&&(r=new vu("onSelect","select",null,r,c),i.push({event:r,listeners:h}),r.target=$s)))}function gl(i,r){var c={};return c[i.toLowerCase()]=r.toLowerCase(),c["Webkit"+i]="webkit"+r,c["Moz"+i]="moz"+r,c}var Zs={animationend:gl("Animation","AnimationEnd"),animationiteration:gl("Animation","AnimationIteration"),animationstart:gl("Animation","AnimationStart"),transitionend:gl("Transition","TransitionEnd")},Ru={},Gp={};u&&(Gp=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function xl(i){if(Ru[i])return Ru[i];if(!Zs[i])return i;var r=Zs[i],c;for(c in r)if(r.hasOwnProperty(c)&&c in Gp)return Ru[i]=r[c];return i}var Wp=xl("animationend"),Xp=xl("animationiteration"),Qp=xl("animationstart"),qp=xl("transitionend"),Yp=new Map,jp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(i,r){Yp.set(i,r),o(r,[i])}for(var Iu=0;Iu<jp.length;Iu++){var Pu=jp[Iu],oS=Pu.toLowerCase(),lS=Pu[0].toUpperCase()+Pu.slice(1);kr(oS,"on"+lS)}kr(Wp,"onAnimationEnd"),kr(Xp,"onAnimationIteration"),kr(Qp,"onAnimationStart"),kr("dblclick","onDoubleClick"),kr("focusin","onFocus"),kr("focusout","onBlur"),kr(qp,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cS=new Set("cancel close invalid load scroll toggle".split(" ").concat(po));function Kp(i,r,c){var h=i.type||"unknown-event";i.currentTarget=c,sl(h,r,void 0,i),i.currentTarget=null}function $p(i,r){r=(r&4)!==0;for(var c=0;c<i.length;c++){var h=i[c],v=h.event;h=h.listeners;e:{var _=void 0;if(r)for(var D=h.length-1;0<=D;D--){var G=h[D],Z=G.instance,he=G.currentTarget;if(G=G.listener,Z!==_&&v.isPropagationStopped())break e;Kp(v,G,he),_=Z}else for(D=0;D<h.length;D++){if(G=h[D],Z=G.instance,he=G.currentTarget,G=G.listener,Z!==_&&v.isPropagationStopped())break e;Kp(v,G,he),_=Z}}}if(hs)throw i=ps,hs=!1,ps=null,i}function $t(i,r){var c=r[ku];c===void 0&&(c=r[ku]=new Set);var h=i+"__bubble";c.has(h)||(Zp(r,i,2,!1),c.add(h))}function Du(i,r,c){var h=0;r&&(h|=4),Zp(c,i,h,r)}var vl="_reactListening"+Math.random().toString(36).slice(2);function mo(i){if(!i[vl]){i[vl]=!0,n.forEach(function(c){c!=="selectionchange"&&(cS.has(c)||Du(c,!1,i),Du(c,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[vl]||(r[vl]=!0,Du("selectionchange",!1,r))}}function Zp(i,r,c,h){switch(yp(r)){case 1:var v=Mv;break;case 4:v=Ev;break;default:v=mu}c=v.bind(null,r,c,i),v=void 0,!Ot||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(v=!0),h?v!==void 0?i.addEventListener(r,c,{capture:!0,passive:v}):i.addEventListener(r,c,!0):v!==void 0?i.addEventListener(r,c,{passive:v}):i.addEventListener(r,c,!1)}function Fu(i,r,c,h,v){var _=h;if((r&1)===0&&(r&2)===0&&h!==null)e:for(;;){if(h===null)return;var D=h.tag;if(D===3||D===4){var G=h.stateNode.containerInfo;if(G===v||G.nodeType===8&&G.parentNode===v)break;if(D===4)for(D=h.return;D!==null;){var Z=D.tag;if((Z===3||Z===4)&&(Z=D.stateNode.containerInfo,Z===v||Z.nodeType===8&&Z.parentNode===v))return;D=D.return}for(;G!==null;){if(D=vs(G),D===null)return;if(Z=D.tag,Z===5||Z===6){h=_=D;continue e}G=G.parentNode}}h=h.return}$e(function(){var he=_,_e=st(c),Ce=[];e:{var ye=Yp.get(i);if(ye!==void 0){var Xe=vu,Ze=i;switch(i){case"keypress":if(fl(c)===0)break e;case"keydown":case"keyup":Xe=kv;break;case"focusin":Ze="focus",Xe=yu;break;case"focusout":Ze="blur",Xe=yu;break;case"beforeblur":case"afterblur":Xe=yu;break;case"click":if(c.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Xe=Ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Xe=wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Xe=Vv;break;case Wp:case Xp:case Qp:Xe=Iv;break;case qp:Xe=Wv;break;case"scroll":Xe=Cv;break;case"wheel":Xe=Qv;break;case"copy":case"cut":case"paste":Xe=Dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Xe=Tp}var tt=(r&4)!==0,pn=!tt&&i==="scroll",oe=tt?ye!==null?ye+"Capture":null:ye;tt=[];for(var J=he,ue;J!==null;){ue=J;var Pe=ue.stateNode;if(ue.tag===5&&Pe!==null&&(ue=Pe,oe!==null&&(Pe=Xt(J,oe),Pe!=null&&tt.push(go(J,Pe,ue)))),pn)break;J=J.return}0<tt.length&&(ye=new Xe(ye,Ze,null,c,_e),Ce.push({event:ye,listeners:tt}))}}if((r&7)===0){e:{if(ye=i==="mouseover"||i==="pointerover",Xe=i==="mouseout"||i==="pointerout",ye&&c!==Ie&&(Ze=c.relatedTarget||c.fromElement)&&(vs(Ze)||Ze[fr]))break e;if((Xe||ye)&&(ye=_e.window===_e?_e:(ye=_e.ownerDocument)?ye.defaultView||ye.parentWindow:window,Xe?(Ze=c.relatedTarget||c.toElement,Xe=he,Ze=Ze?vs(Ze):null,Ze!==null&&(pn=Xn(Ze),Ze!==pn||Ze.tag!==5&&Ze.tag!==6)&&(Ze=null)):(Xe=null,Ze=he),Xe!==Ze)){if(tt=Ep,Pe="onMouseLeave",oe="onMouseEnter",J="mouse",(i==="pointerout"||i==="pointerover")&&(tt=Tp,Pe="onPointerLeave",oe="onPointerEnter",J="pointer"),pn=Xe==null?ye:ta(Xe),ue=Ze==null?ye:ta(Ze),ye=new tt(Pe,J+"leave",Xe,c,_e),ye.target=pn,ye.relatedTarget=ue,Pe=null,vs(_e)===he&&(tt=new tt(oe,J+"enter",Ze,c,_e),tt.target=ue,tt.relatedTarget=pn,Pe=tt),pn=Pe,Xe&&Ze)t:{for(tt=Xe,oe=Ze,J=0,ue=tt;ue;ue=Js(ue))J++;for(ue=0,Pe=oe;Pe;Pe=Js(Pe))ue++;for(;0<J-ue;)tt=Js(tt),J--;for(;0<ue-J;)oe=Js(oe),ue--;for(;J--;){if(tt===oe||oe!==null&&tt===oe.alternate)break t;tt=Js(tt),oe=Js(oe)}tt=null}else tt=null;Xe!==null&&Jp(Ce,ye,Xe,tt,!1),Ze!==null&&pn!==null&&Jp(Ce,pn,Ze,tt,!0)}}e:{if(ye=he?ta(he):window,Xe=ye.nodeName&&ye.nodeName.toLowerCase(),Xe==="select"||Xe==="input"&&ye.type==="file")var rt=Jv;else if(Dp(ye))if(Lp)rt=iS;else{rt=tS;var ct=eS}else(Xe=ye.nodeName)&&Xe.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(rt=nS);if(rt&&(rt=rt(i,he))){Fp(Ce,rt,c,_e);break e}ct&&ct(i,ye,he),i==="focusout"&&(ct=ye._wrapperState)&&ct.controlled&&ye.type==="number"&&Tt(ye,"number",ye.value)}switch(ct=he?ta(he):window,i){case"focusin":(Dp(ct)||ct.contentEditable==="true")&&($s=ct,wu=he,ho=null);break;case"focusout":ho=wu=$s=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,Vp(Ce,c,_e);break;case"selectionchange":if(aS)break;case"keydown":case"keyup":Vp(Ce,c,_e)}var ut;if(Mu)e:{switch(i){case"compositionstart":var mt="onCompositionStart";break e;case"compositionend":mt="onCompositionEnd";break e;case"compositionupdate":mt="onCompositionUpdate";break e}mt=void 0}else Ks?Ip(i,c)&&(mt="onCompositionEnd"):i==="keydown"&&c.keyCode===229&&(mt="onCompositionStart");mt&&(wp&&c.locale!=="ko"&&(Ks||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&Ks&&(ut=_p()):(Or=_e,xu="value"in Or?Or.value:Or.textContent,Ks=!0)),ct=Sl(he,mt),0<ct.length&&(mt=new Cp(mt,i,null,c,_e),Ce.push({event:mt,listeners:ct}),ut?mt.data=ut:(ut=Pp(c),ut!==null&&(mt.data=ut)))),(ut=Yv?jv(i,c):Kv(i,c))&&(he=Sl(he,"onBeforeInput"),0<he.length&&(_e=new Cp("onBeforeInput","beforeinput",null,c,_e),Ce.push({event:_e,listeners:he}),_e.data=ut))}$p(Ce,r)})}function go(i,r,c){return{instance:i,listener:r,currentTarget:c}}function Sl(i,r){for(var c=r+"Capture",h=[];i!==null;){var v=i,_=v.stateNode;v.tag===5&&_!==null&&(v=_,_=Xt(i,c),_!=null&&h.unshift(go(i,_,v)),_=Xt(i,r),_!=null&&h.push(go(i,_,v))),i=i.return}return h}function Js(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Jp(i,r,c,h,v){for(var _=r._reactName,D=[];c!==null&&c!==h;){var G=c,Z=G.alternate,he=G.stateNode;if(Z!==null&&Z===h)break;G.tag===5&&he!==null&&(G=he,v?(Z=Xt(c,_),Z!=null&&D.unshift(go(c,Z,G))):v||(Z=Xt(c,_),Z!=null&&D.push(go(c,Z,G)))),c=c.return}D.length!==0&&i.push({event:r,listeners:D})}var uS=/\r\n?/g,dS=/\u0000|\uFFFD/g;function em(i){return(typeof i=="string"?i:""+i).replace(uS,`
`).replace(dS,"")}function Al(i,r,c){if(r=em(r),em(i)!==r&&c)throw Error(t(425))}function yl(){}var Lu=null,Bu=null;function Nu(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Uu=typeof setTimeout=="function"?setTimeout:void 0,fS=typeof clearTimeout=="function"?clearTimeout:void 0,tm=typeof Promise=="function"?Promise:void 0,hS=typeof queueMicrotask=="function"?queueMicrotask:typeof tm<"u"?function(i){return tm.resolve(null).then(i).catch(pS)}:Uu;function pS(i){setTimeout(function(){throw i})}function Ou(i,r){var c=r,h=0;do{var v=c.nextSibling;if(i.removeChild(c),v&&v.nodeType===8)if(c=v.data,c==="/$"){if(h===0){i.removeChild(v),so(r);return}h--}else c!=="$"&&c!=="$?"&&c!=="$!"||h++;c=v}while(c);so(r)}function zr(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return i}function nm(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var c=i.data;if(c==="$"||c==="$!"||c==="$?"){if(r===0)return i;r--}else c==="/$"&&r++}i=i.previousSibling}return null}var ea=Math.random().toString(36).slice(2),$i="__reactFiber$"+ea,xo="__reactProps$"+ea,fr="__reactContainer$"+ea,ku="__reactEvents$"+ea,mS="__reactListeners$"+ea,gS="__reactHandles$"+ea;function vs(i){var r=i[$i];if(r)return r;for(var c=i.parentNode;c;){if(r=c[fr]||c[$i]){if(c=r.alternate,r.child!==null||c!==null&&c.child!==null)for(i=nm(i);i!==null;){if(c=i[$i])return c;i=nm(i)}return r}i=c,c=i.parentNode}return null}function vo(i){return i=i[$i]||i[fr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ta(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function _l(i){return i[xo]||null}var zu=[],na=-1;function Hr(i){return{current:i}}function Zt(i){0>na||(i.current=zu[na],zu[na]=null,na--)}function jt(i,r){na++,zu[na]=i.current,i.current=r}var Vr={},On=Hr(Vr),ri=Hr(!1),Ss=Vr;function ia(i,r){var c=i.type.contextTypes;if(!c)return Vr;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===r)return h.__reactInternalMemoizedMaskedChildContext;var v={},_;for(_ in c)v[_]=r[_];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=r,i.__reactInternalMemoizedMaskedChildContext=v),v}function si(i){return i=i.childContextTypes,i!=null}function Ml(){Zt(ri),Zt(On)}function im(i,r,c){if(On.current!==Vr)throw Error(t(168));jt(On,r),jt(ri,c)}function rm(i,r,c){var h=i.stateNode;if(r=r.childContextTypes,typeof h.getChildContext!="function")return c;h=h.getChildContext();for(var v in h)if(!(v in r))throw Error(t(108,xe(i)||"Unknown",v));return ne({},c,h)}function El(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Vr,Ss=On.current,jt(On,i),jt(ri,ri.current),!0}function sm(i,r,c){var h=i.stateNode;if(!h)throw Error(t(169));c?(i=rm(i,r,Ss),h.__reactInternalMemoizedMergedChildContext=i,Zt(ri),Zt(On),jt(On,i)):Zt(ri),jt(ri,c)}var hr=null,Cl=!1,Hu=!1;function am(i){hr===null?hr=[i]:hr.push(i)}function xS(i){Cl=!0,am(i)}function Gr(){if(!Hu&&hr!==null){Hu=!0;var i=0,r=Mt;try{var c=hr;for(Mt=1;i<c.length;i++){var h=c[i];do h=h(!0);while(h!==null)}hr=null,Cl=!1}catch(v){throw hr!==null&&(hr=hr.slice(i+1)),gs(eo,Gr),v}finally{Mt=r,Hu=!1}}return null}var ra=[],sa=0,Tl=null,wl=0,Ei=[],Ci=0,As=null,pr=1,mr="";function ys(i,r){ra[sa++]=wl,ra[sa++]=Tl,Tl=i,wl=r}function om(i,r,c){Ei[Ci++]=pr,Ei[Ci++]=mr,Ei[Ci++]=As,As=i;var h=pr;i=mr;var v=32-Ne(h)-1;h&=~(1<<v),c+=1;var _=32-Ne(r)+v;if(30<_){var D=v-v%5;_=(h&(1<<D)-1).toString(32),h>>=D,v-=D,pr=1<<32-Ne(r)+v|c<<v|h,mr=_+i}else pr=1<<_|c<<v|h,mr=i}function Vu(i){i.return!==null&&(ys(i,1),om(i,1,0))}function Gu(i){for(;i===Tl;)Tl=ra[--sa],ra[sa]=null,wl=ra[--sa],ra[sa]=null;for(;i===As;)As=Ei[--Ci],Ei[Ci]=null,mr=Ei[--Ci],Ei[Ci]=null,pr=Ei[--Ci],Ei[Ci]=null}var gi=null,xi=null,rn=!1,zi=null;function lm(i,r){var c=Ri(5,null,null,0);c.elementType="DELETED",c.stateNode=r,c.return=i,r=i.deletions,r===null?(i.deletions=[c],i.flags|=16):r.push(c)}function cm(i,r){switch(i.tag){case 5:var c=i.type;return r=r.nodeType!==1||c.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(i.stateNode=r,gi=i,xi=zr(r.firstChild),!0):!1;case 6:return r=i.pendingProps===""||r.nodeType!==3?null:r,r!==null?(i.stateNode=r,gi=i,xi=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(c=As!==null?{id:pr,overflow:mr}:null,i.memoizedState={dehydrated:r,treeContext:c,retryLane:1073741824},c=Ri(18,null,null,0),c.stateNode=r,c.return=i,i.child=c,gi=i,xi=null,!0):!1;default:return!1}}function Wu(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Xu(i){if(rn){var r=xi;if(r){var c=r;if(!cm(i,r)){if(Wu(i))throw Error(t(418));r=zr(c.nextSibling);var h=gi;r&&cm(i,r)?lm(h,c):(i.flags=i.flags&-4097|2,rn=!1,gi=i)}}else{if(Wu(i))throw Error(t(418));i.flags=i.flags&-4097|2,rn=!1,gi=i}}}function um(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;gi=i}function bl(i){if(i!==gi)return!1;if(!rn)return um(i),rn=!0,!1;var r;if((r=i.tag!==3)&&!(r=i.tag!==5)&&(r=i.type,r=r!=="head"&&r!=="body"&&!Nu(i.type,i.memoizedProps)),r&&(r=xi)){if(Wu(i))throw dm(),Error(t(418));for(;r;)lm(i,r),r=zr(r.nextSibling)}if(um(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8){var c=i.data;if(c==="/$"){if(r===0){xi=zr(i.nextSibling);break e}r--}else c!=="$"&&c!=="$!"&&c!=="$?"||r++}i=i.nextSibling}xi=null}}else xi=gi?zr(i.stateNode.nextSibling):null;return!0}function dm(){for(var i=xi;i;)i=zr(i.nextSibling)}function aa(){xi=gi=null,rn=!1}function Qu(i){zi===null?zi=[i]:zi.push(i)}var vS=C.ReactCurrentBatchConfig;function So(i,r,c){if(i=c.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(c._owner){if(c=c._owner,c){if(c.tag!==1)throw Error(t(309));var h=c.stateNode}if(!h)throw Error(t(147,i));var v=h,_=""+i;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===_?r.ref:(r=function(D){var G=v.refs;D===null?delete G[_]:G[_]=D},r._stringRef=_,r)}if(typeof i!="string")throw Error(t(284));if(!c._owner)throw Error(t(290,i))}return i}function Rl(i,r){throw i=Object.prototype.toString.call(r),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i))}function fm(i){var r=i._init;return r(i._payload)}function hm(i){function r(oe,J){if(i){var ue=oe.deletions;ue===null?(oe.deletions=[J],oe.flags|=16):ue.push(J)}}function c(oe,J){if(!i)return null;for(;J!==null;)r(oe,J),J=J.sibling;return null}function h(oe,J){for(oe=new Map;J!==null;)J.key!==null?oe.set(J.key,J):oe.set(J.index,J),J=J.sibling;return oe}function v(oe,J){return oe=$r(oe,J),oe.index=0,oe.sibling=null,oe}function _(oe,J,ue){return oe.index=ue,i?(ue=oe.alternate,ue!==null?(ue=ue.index,ue<J?(oe.flags|=2,J):ue):(oe.flags|=2,J)):(oe.flags|=1048576,J)}function D(oe){return i&&oe.alternate===null&&(oe.flags|=2),oe}function G(oe,J,ue,Pe){return J===null||J.tag!==6?(J=Ud(ue,oe.mode,Pe),J.return=oe,J):(J=v(J,ue),J.return=oe,J)}function Z(oe,J,ue,Pe){var rt=ue.type;return rt===R?_e(oe,J,ue.props.children,Pe,ue.key):J!==null&&(J.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===j&&fm(rt)===J.type)?(Pe=v(J,ue.props),Pe.ref=So(oe,J,ue),Pe.return=oe,Pe):(Pe=Jl(ue.type,ue.key,ue.props,null,oe.mode,Pe),Pe.ref=So(oe,J,ue),Pe.return=oe,Pe)}function he(oe,J,ue,Pe){return J===null||J.tag!==4||J.stateNode.containerInfo!==ue.containerInfo||J.stateNode.implementation!==ue.implementation?(J=Od(ue,oe.mode,Pe),J.return=oe,J):(J=v(J,ue.children||[]),J.return=oe,J)}function _e(oe,J,ue,Pe,rt){return J===null||J.tag!==7?(J=Rs(ue,oe.mode,Pe,rt),J.return=oe,J):(J=v(J,ue),J.return=oe,J)}function Ce(oe,J,ue){if(typeof J=="string"&&J!==""||typeof J=="number")return J=Ud(""+J,oe.mode,ue),J.return=oe,J;if(typeof J=="object"&&J!==null){switch(J.$$typeof){case b:return ue=Jl(J.type,J.key,J.props,null,oe.mode,ue),ue.ref=So(oe,null,J),ue.return=oe,ue;case I:return J=Od(J,oe.mode,ue),J.return=oe,J;case j:var Pe=J._init;return Ce(oe,Pe(J._payload),ue)}if(Bt(J)||K(J))return J=Rs(J,oe.mode,ue,null),J.return=oe,J;Rl(oe,J)}return null}function ye(oe,J,ue,Pe){var rt=J!==null?J.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number")return rt!==null?null:G(oe,J,""+ue,Pe);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case b:return ue.key===rt?Z(oe,J,ue,Pe):null;case I:return ue.key===rt?he(oe,J,ue,Pe):null;case j:return rt=ue._init,ye(oe,J,rt(ue._payload),Pe)}if(Bt(ue)||K(ue))return rt!==null?null:_e(oe,J,ue,Pe,null);Rl(oe,ue)}return null}function Xe(oe,J,ue,Pe,rt){if(typeof Pe=="string"&&Pe!==""||typeof Pe=="number")return oe=oe.get(ue)||null,G(J,oe,""+Pe,rt);if(typeof Pe=="object"&&Pe!==null){switch(Pe.$$typeof){case b:return oe=oe.get(Pe.key===null?ue:Pe.key)||null,Z(J,oe,Pe,rt);case I:return oe=oe.get(Pe.key===null?ue:Pe.key)||null,he(J,oe,Pe,rt);case j:var ct=Pe._init;return Xe(oe,J,ue,ct(Pe._payload),rt)}if(Bt(Pe)||K(Pe))return oe=oe.get(ue)||null,_e(J,oe,Pe,rt,null);Rl(J,Pe)}return null}function Ze(oe,J,ue,Pe){for(var rt=null,ct=null,ut=J,mt=J=0,Rn=null;ut!==null&&mt<ue.length;mt++){ut.index>mt?(Rn=ut,ut=null):Rn=ut.sibling;var Nt=ye(oe,ut,ue[mt],Pe);if(Nt===null){ut===null&&(ut=Rn);break}i&&ut&&Nt.alternate===null&&r(oe,ut),J=_(Nt,J,mt),ct===null?rt=Nt:ct.sibling=Nt,ct=Nt,ut=Rn}if(mt===ue.length)return c(oe,ut),rn&&ys(oe,mt),rt;if(ut===null){for(;mt<ue.length;mt++)ut=Ce(oe,ue[mt],Pe),ut!==null&&(J=_(ut,J,mt),ct===null?rt=ut:ct.sibling=ut,ct=ut);return rn&&ys(oe,mt),rt}for(ut=h(oe,ut);mt<ue.length;mt++)Rn=Xe(ut,oe,mt,ue[mt],Pe),Rn!==null&&(i&&Rn.alternate!==null&&ut.delete(Rn.key===null?mt:Rn.key),J=_(Rn,J,mt),ct===null?rt=Rn:ct.sibling=Rn,ct=Rn);return i&&ut.forEach(function(Zr){return r(oe,Zr)}),rn&&ys(oe,mt),rt}function tt(oe,J,ue,Pe){var rt=K(ue);if(typeof rt!="function")throw Error(t(150));if(ue=rt.call(ue),ue==null)throw Error(t(151));for(var ct=rt=null,ut=J,mt=J=0,Rn=null,Nt=ue.next();ut!==null&&!Nt.done;mt++,Nt=ue.next()){ut.index>mt?(Rn=ut,ut=null):Rn=ut.sibling;var Zr=ye(oe,ut,Nt.value,Pe);if(Zr===null){ut===null&&(ut=Rn);break}i&&ut&&Zr.alternate===null&&r(oe,ut),J=_(Zr,J,mt),ct===null?rt=Zr:ct.sibling=Zr,ct=Zr,ut=Rn}if(Nt.done)return c(oe,ut),rn&&ys(oe,mt),rt;if(ut===null){for(;!Nt.done;mt++,Nt=ue.next())Nt=Ce(oe,Nt.value,Pe),Nt!==null&&(J=_(Nt,J,mt),ct===null?rt=Nt:ct.sibling=Nt,ct=Nt);return rn&&ys(oe,mt),rt}for(ut=h(oe,ut);!Nt.done;mt++,Nt=ue.next())Nt=Xe(ut,oe,mt,Nt.value,Pe),Nt!==null&&(i&&Nt.alternate!==null&&ut.delete(Nt.key===null?mt:Nt.key),J=_(Nt,J,mt),ct===null?rt=Nt:ct.sibling=Nt,ct=Nt);return i&&ut.forEach(function($S){return r(oe,$S)}),rn&&ys(oe,mt),rt}function pn(oe,J,ue,Pe){if(typeof ue=="object"&&ue!==null&&ue.type===R&&ue.key===null&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case b:e:{for(var rt=ue.key,ct=J;ct!==null;){if(ct.key===rt){if(rt=ue.type,rt===R){if(ct.tag===7){c(oe,ct.sibling),J=v(ct,ue.props.children),J.return=oe,oe=J;break e}}else if(ct.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===j&&fm(rt)===ct.type){c(oe,ct.sibling),J=v(ct,ue.props),J.ref=So(oe,ct,ue),J.return=oe,oe=J;break e}c(oe,ct);break}else r(oe,ct);ct=ct.sibling}ue.type===R?(J=Rs(ue.props.children,oe.mode,Pe,ue.key),J.return=oe,oe=J):(Pe=Jl(ue.type,ue.key,ue.props,null,oe.mode,Pe),Pe.ref=So(oe,J,ue),Pe.return=oe,oe=Pe)}return D(oe);case I:e:{for(ct=ue.key;J!==null;){if(J.key===ct)if(J.tag===4&&J.stateNode.containerInfo===ue.containerInfo&&J.stateNode.implementation===ue.implementation){c(oe,J.sibling),J=v(J,ue.children||[]),J.return=oe,oe=J;break e}else{c(oe,J);break}else r(oe,J);J=J.sibling}J=Od(ue,oe.mode,Pe),J.return=oe,oe=J}return D(oe);case j:return ct=ue._init,pn(oe,J,ct(ue._payload),Pe)}if(Bt(ue))return Ze(oe,J,ue,Pe);if(K(ue))return tt(oe,J,ue,Pe);Rl(oe,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"?(ue=""+ue,J!==null&&J.tag===6?(c(oe,J.sibling),J=v(J,ue),J.return=oe,oe=J):(c(oe,J),J=Ud(ue,oe.mode,Pe),J.return=oe,oe=J),D(oe)):c(oe,J)}return pn}var oa=hm(!0),pm=hm(!1),Il=Hr(null),Pl=null,la=null,qu=null;function Yu(){qu=la=Pl=null}function ju(i){var r=Il.current;Zt(Il),i._currentValue=r}function Ku(i,r,c){for(;i!==null;){var h=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,h!==null&&(h.childLanes|=r)):h!==null&&(h.childLanes&r)!==r&&(h.childLanes|=r),i===c)break;i=i.return}}function ca(i,r){Pl=i,qu=la=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&r)!==0&&(ai=!0),i.firstContext=null)}function Ti(i){var r=i._currentValue;if(qu!==i)if(i={context:i,memoizedValue:r,next:null},la===null){if(Pl===null)throw Error(t(308));la=i,Pl.dependencies={lanes:0,firstContext:i}}else la=la.next=i;return r}var _s=null;function $u(i){_s===null?_s=[i]:_s.push(i)}function mm(i,r,c,h){var v=r.interleaved;return v===null?(c.next=c,$u(r)):(c.next=v.next,v.next=c),r.interleaved=c,gr(i,h)}function gr(i,r){i.lanes|=r;var c=i.alternate;for(c!==null&&(c.lanes|=r),c=i,i=i.return;i!==null;)i.childLanes|=r,c=i.alternate,c!==null&&(c.childLanes|=r),c=i,i=i.return;return c.tag===3?c.stateNode:null}var Wr=!1;function Zu(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gm(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function xr(i,r){return{eventTime:i,lane:r,tag:0,payload:null,callback:null,next:null}}function Xr(i,r,c){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(Ft&2)!==0){var v=h.pending;return v===null?r.next=r:(r.next=v.next,v.next=r),h.pending=r,gr(i,c)}return v=h.interleaved,v===null?(r.next=r,$u(h)):(r.next=v.next,v.next=r),h.interleaved=r,gr(i,c)}function Dl(i,r,c){if(r=r.updateQueue,r!==null&&(r=r.shared,(c&4194240)!==0)){var h=r.lanes;h&=i.pendingLanes,c|=h,r.lanes=c,ii(i,c)}}function xm(i,r){var c=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,c===h)){var v=null,_=null;if(c=c.firstBaseUpdate,c!==null){do{var D={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};_===null?v=_=D:_=_.next=D,c=c.next}while(c!==null);_===null?v=_=r:_=_.next=r}else v=_=r;c={baseState:h.baseState,firstBaseUpdate:v,lastBaseUpdate:_,shared:h.shared,effects:h.effects},i.updateQueue=c;return}i=c.lastBaseUpdate,i===null?c.firstBaseUpdate=r:i.next=r,c.lastBaseUpdate=r}function Fl(i,r,c,h){var v=i.updateQueue;Wr=!1;var _=v.firstBaseUpdate,D=v.lastBaseUpdate,G=v.shared.pending;if(G!==null){v.shared.pending=null;var Z=G,he=Z.next;Z.next=null,D===null?_=he:D.next=he,D=Z;var _e=i.alternate;_e!==null&&(_e=_e.updateQueue,G=_e.lastBaseUpdate,G!==D&&(G===null?_e.firstBaseUpdate=he:G.next=he,_e.lastBaseUpdate=Z))}if(_!==null){var Ce=v.baseState;D=0,_e=he=Z=null,G=_;do{var ye=G.lane,Xe=G.eventTime;if((h&ye)===ye){_e!==null&&(_e=_e.next={eventTime:Xe,lane:0,tag:G.tag,payload:G.payload,callback:G.callback,next:null});e:{var Ze=i,tt=G;switch(ye=r,Xe=c,tt.tag){case 1:if(Ze=tt.payload,typeof Ze=="function"){Ce=Ze.call(Xe,Ce,ye);break e}Ce=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=tt.payload,ye=typeof Ze=="function"?Ze.call(Xe,Ce,ye):Ze,ye==null)break e;Ce=ne({},Ce,ye);break e;case 2:Wr=!0}}G.callback!==null&&G.lane!==0&&(i.flags|=64,ye=v.effects,ye===null?v.effects=[G]:ye.push(G))}else Xe={eventTime:Xe,lane:ye,tag:G.tag,payload:G.payload,callback:G.callback,next:null},_e===null?(he=_e=Xe,Z=Ce):_e=_e.next=Xe,D|=ye;if(G=G.next,G===null){if(G=v.shared.pending,G===null)break;ye=G,G=ye.next,ye.next=null,v.lastBaseUpdate=ye,v.shared.pending=null}}while(!0);if(_e===null&&(Z=Ce),v.baseState=Z,v.firstBaseUpdate=he,v.lastBaseUpdate=_e,r=v.shared.interleaved,r!==null){v=r;do D|=v.lane,v=v.next;while(v!==r)}else _===null&&(v.shared.lanes=0);Cs|=D,i.lanes=D,i.memoizedState=Ce}}function vm(i,r,c){if(i=r.effects,r.effects=null,i!==null)for(r=0;r<i.length;r++){var h=i[r],v=h.callback;if(v!==null){if(h.callback=null,h=c,typeof v!="function")throw Error(t(191,v));v.call(h)}}}var Ao={},Zi=Hr(Ao),yo=Hr(Ao),_o=Hr(Ao);function Ms(i){if(i===Ao)throw Error(t(174));return i}function Ju(i,r){switch(jt(_o,r),jt(yo,i),jt(Zi,Ao),i=r.nodeType,i){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:w(null,"");break;default:i=i===8?r.parentNode:r,r=i.namespaceURI||null,i=i.tagName,r=w(r,i)}Zt(Zi),jt(Zi,r)}function ua(){Zt(Zi),Zt(yo),Zt(_o)}function Sm(i){Ms(_o.current);var r=Ms(Zi.current),c=w(r,i.type);r!==c&&(jt(yo,i),jt(Zi,c))}function ed(i){yo.current===i&&(Zt(Zi),Zt(yo))}var ln=Hr(0);function Ll(i){for(var r=i;r!==null;){if(r.tag===13){var c=r.memoizedState;if(c!==null&&(c=c.dehydrated,c===null||c.data==="$?"||c.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var td=[];function nd(){for(var i=0;i<td.length;i++)td[i]._workInProgressVersionPrimary=null;td.length=0}var Bl=C.ReactCurrentDispatcher,id=C.ReactCurrentBatchConfig,Es=0,cn=null,yn=null,wn=null,Nl=!1,Mo=!1,Eo=0,SS=0;function kn(){throw Error(t(321))}function rd(i,r){if(r===null)return!1;for(var c=0;c<r.length&&c<i.length;c++)if(!ki(i[c],r[c]))return!1;return!0}function sd(i,r,c,h,v,_){if(Es=_,cn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Bl.current=i===null||i.memoizedState===null?MS:ES,i=c(h,v),Mo){_=0;do{if(Mo=!1,Eo=0,25<=_)throw Error(t(301));_+=1,wn=yn=null,r.updateQueue=null,Bl.current=CS,i=c(h,v)}while(Mo)}if(Bl.current=kl,r=yn!==null&&yn.next!==null,Es=0,wn=yn=cn=null,Nl=!1,r)throw Error(t(300));return i}function ad(){var i=Eo!==0;return Eo=0,i}function Ji(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?cn.memoizedState=wn=i:wn=wn.next=i,wn}function wi(){if(yn===null){var i=cn.alternate;i=i!==null?i.memoizedState:null}else i=yn.next;var r=wn===null?cn.memoizedState:wn.next;if(r!==null)wn=r,yn=i;else{if(i===null)throw Error(t(310));yn=i,i={memoizedState:yn.memoizedState,baseState:yn.baseState,baseQueue:yn.baseQueue,queue:yn.queue,next:null},wn===null?cn.memoizedState=wn=i:wn=wn.next=i}return wn}function Co(i,r){return typeof r=="function"?r(i):r}function od(i){var r=wi(),c=r.queue;if(c===null)throw Error(t(311));c.lastRenderedReducer=i;var h=yn,v=h.baseQueue,_=c.pending;if(_!==null){if(v!==null){var D=v.next;v.next=_.next,_.next=D}h.baseQueue=v=_,c.pending=null}if(v!==null){_=v.next,h=h.baseState;var G=D=null,Z=null,he=_;do{var _e=he.lane;if((Es&_e)===_e)Z!==null&&(Z=Z.next={lane:0,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),h=he.hasEagerState?he.eagerState:i(h,he.action);else{var Ce={lane:_e,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null};Z===null?(G=Z=Ce,D=h):Z=Z.next=Ce,cn.lanes|=_e,Cs|=_e}he=he.next}while(he!==null&&he!==_);Z===null?D=h:Z.next=G,ki(h,r.memoizedState)||(ai=!0),r.memoizedState=h,r.baseState=D,r.baseQueue=Z,c.lastRenderedState=h}if(i=c.interleaved,i!==null){v=i;do _=v.lane,cn.lanes|=_,Cs|=_,v=v.next;while(v!==i)}else v===null&&(c.lanes=0);return[r.memoizedState,c.dispatch]}function ld(i){var r=wi(),c=r.queue;if(c===null)throw Error(t(311));c.lastRenderedReducer=i;var h=c.dispatch,v=c.pending,_=r.memoizedState;if(v!==null){c.pending=null;var D=v=v.next;do _=i(_,D.action),D=D.next;while(D!==v);ki(_,r.memoizedState)||(ai=!0),r.memoizedState=_,r.baseQueue===null&&(r.baseState=_),c.lastRenderedState=_}return[_,h]}function Am(){}function ym(i,r){var c=cn,h=wi(),v=r(),_=!ki(h.memoizedState,v);if(_&&(h.memoizedState=v,ai=!0),h=h.queue,cd(Em.bind(null,c,h,i),[i]),h.getSnapshot!==r||_||wn!==null&&wn.memoizedState.tag&1){if(c.flags|=2048,To(9,Mm.bind(null,c,h,v,r),void 0,null),bn===null)throw Error(t(349));(Es&30)!==0||_m(c,r,v)}return v}function _m(i,r,c){i.flags|=16384,i={getSnapshot:r,value:c},r=cn.updateQueue,r===null?(r={lastEffect:null,stores:null},cn.updateQueue=r,r.stores=[i]):(c=r.stores,c===null?r.stores=[i]:c.push(i))}function Mm(i,r,c,h){r.value=c,r.getSnapshot=h,Cm(r)&&Tm(i)}function Em(i,r,c){return c(function(){Cm(r)&&Tm(i)})}function Cm(i){var r=i.getSnapshot;i=i.value;try{var c=r();return!ki(i,c)}catch{return!0}}function Tm(i){var r=gr(i,1);r!==null&&Wi(r,i,1,-1)}function wm(i){var r=Ji();return typeof i=="function"&&(i=i()),r.memoizedState=r.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Co,lastRenderedState:i},r.queue=i,i=i.dispatch=_S.bind(null,cn,i),[r.memoizedState,i]}function To(i,r,c,h){return i={tag:i,create:r,destroy:c,deps:h,next:null},r=cn.updateQueue,r===null?(r={lastEffect:null,stores:null},cn.updateQueue=r,r.lastEffect=i.next=i):(c=r.lastEffect,c===null?r.lastEffect=i.next=i:(h=c.next,c.next=i,i.next=h,r.lastEffect=i)),i}function bm(){return wi().memoizedState}function Ul(i,r,c,h){var v=Ji();cn.flags|=i,v.memoizedState=To(1|r,c,void 0,h===void 0?null:h)}function Ol(i,r,c,h){var v=wi();h=h===void 0?null:h;var _=void 0;if(yn!==null){var D=yn.memoizedState;if(_=D.destroy,h!==null&&rd(h,D.deps)){v.memoizedState=To(r,c,_,h);return}}cn.flags|=i,v.memoizedState=To(1|r,c,_,h)}function Rm(i,r){return Ul(8390656,8,i,r)}function cd(i,r){return Ol(2048,8,i,r)}function Im(i,r){return Ol(4,2,i,r)}function Pm(i,r){return Ol(4,4,i,r)}function Dm(i,r){if(typeof r=="function")return i=i(),r(i),function(){r(null)};if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function Fm(i,r,c){return c=c!=null?c.concat([i]):null,Ol(4,4,Dm.bind(null,r,i),c)}function ud(){}function Lm(i,r){var c=wi();r=r===void 0?null:r;var h=c.memoizedState;return h!==null&&r!==null&&rd(r,h[1])?h[0]:(c.memoizedState=[i,r],i)}function Bm(i,r){var c=wi();r=r===void 0?null:r;var h=c.memoizedState;return h!==null&&r!==null&&rd(r,h[1])?h[0]:(i=i(),c.memoizedState=[i,r],i)}function Nm(i,r,c){return(Es&21)===0?(i.baseState&&(i.baseState=!1,ai=!0),i.memoizedState=c):(ki(c,r)||(c=We(),cn.lanes|=c,Cs|=c,i.baseState=!0),r)}function AS(i,r){var c=Mt;Mt=c!==0&&4>c?c:4,i(!0);var h=id.transition;id.transition={};try{i(!1),r()}finally{Mt=c,id.transition=h}}function Um(){return wi().memoizedState}function yS(i,r,c){var h=jr(i);if(c={lane:h,action:c,hasEagerState:!1,eagerState:null,next:null},Om(i))km(r,c);else if(c=mm(i,r,c,h),c!==null){var v=qn();Wi(c,i,h,v),zm(c,r,h)}}function _S(i,r,c){var h=jr(i),v={lane:h,action:c,hasEagerState:!1,eagerState:null,next:null};if(Om(i))km(r,v);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=r.lastRenderedReducer,_!==null))try{var D=r.lastRenderedState,G=_(D,c);if(v.hasEagerState=!0,v.eagerState=G,ki(G,D)){var Z=r.interleaved;Z===null?(v.next=v,$u(r)):(v.next=Z.next,Z.next=v),r.interleaved=v;return}}catch{}finally{}c=mm(i,r,v,h),c!==null&&(v=qn(),Wi(c,i,h,v),zm(c,r,h))}}function Om(i){var r=i.alternate;return i===cn||r!==null&&r===cn}function km(i,r){Mo=Nl=!0;var c=i.pending;c===null?r.next=r:(r.next=c.next,c.next=r),i.pending=r}function zm(i,r,c){if((c&4194240)!==0){var h=r.lanes;h&=i.pendingLanes,c|=h,r.lanes=c,ii(i,c)}}var kl={readContext:Ti,useCallback:kn,useContext:kn,useEffect:kn,useImperativeHandle:kn,useInsertionEffect:kn,useLayoutEffect:kn,useMemo:kn,useReducer:kn,useRef:kn,useState:kn,useDebugValue:kn,useDeferredValue:kn,useTransition:kn,useMutableSource:kn,useSyncExternalStore:kn,useId:kn,unstable_isNewReconciler:!1},MS={readContext:Ti,useCallback:function(i,r){return Ji().memoizedState=[i,r===void 0?null:r],i},useContext:Ti,useEffect:Rm,useImperativeHandle:function(i,r,c){return c=c!=null?c.concat([i]):null,Ul(4194308,4,Dm.bind(null,r,i),c)},useLayoutEffect:function(i,r){return Ul(4194308,4,i,r)},useInsertionEffect:function(i,r){return Ul(4,2,i,r)},useMemo:function(i,r){var c=Ji();return r=r===void 0?null:r,i=i(),c.memoizedState=[i,r],i},useReducer:function(i,r,c){var h=Ji();return r=c!==void 0?c(r):r,h.memoizedState=h.baseState=r,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:r},h.queue=i,i=i.dispatch=yS.bind(null,cn,i),[h.memoizedState,i]},useRef:function(i){var r=Ji();return i={current:i},r.memoizedState=i},useState:wm,useDebugValue:ud,useDeferredValue:function(i){return Ji().memoizedState=i},useTransition:function(){var i=wm(!1),r=i[0];return i=AS.bind(null,i[1]),Ji().memoizedState=i,[r,i]},useMutableSource:function(){},useSyncExternalStore:function(i,r,c){var h=cn,v=Ji();if(rn){if(c===void 0)throw Error(t(407));c=c()}else{if(c=r(),bn===null)throw Error(t(349));(Es&30)!==0||_m(h,r,c)}v.memoizedState=c;var _={value:c,getSnapshot:r};return v.queue=_,Rm(Em.bind(null,h,_,i),[i]),h.flags|=2048,To(9,Mm.bind(null,h,_,c,r),void 0,null),c},useId:function(){var i=Ji(),r=bn.identifierPrefix;if(rn){var c=mr,h=pr;c=(h&~(1<<32-Ne(h)-1)).toString(32)+c,r=":"+r+"R"+c,c=Eo++,0<c&&(r+="H"+c.toString(32)),r+=":"}else c=SS++,r=":"+r+"r"+c.toString(32)+":";return i.memoizedState=r},unstable_isNewReconciler:!1},ES={readContext:Ti,useCallback:Lm,useContext:Ti,useEffect:cd,useImperativeHandle:Fm,useInsertionEffect:Im,useLayoutEffect:Pm,useMemo:Bm,useReducer:od,useRef:bm,useState:function(){return od(Co)},useDebugValue:ud,useDeferredValue:function(i){var r=wi();return Nm(r,yn.memoizedState,i)},useTransition:function(){var i=od(Co)[0],r=wi().memoizedState;return[i,r]},useMutableSource:Am,useSyncExternalStore:ym,useId:Um,unstable_isNewReconciler:!1},CS={readContext:Ti,useCallback:Lm,useContext:Ti,useEffect:cd,useImperativeHandle:Fm,useInsertionEffect:Im,useLayoutEffect:Pm,useMemo:Bm,useReducer:ld,useRef:bm,useState:function(){return ld(Co)},useDebugValue:ud,useDeferredValue:function(i){var r=wi();return yn===null?r.memoizedState=i:Nm(r,yn.memoizedState,i)},useTransition:function(){var i=ld(Co)[0],r=wi().memoizedState;return[i,r]},useMutableSource:Am,useSyncExternalStore:ym,useId:Um,unstable_isNewReconciler:!1};function Hi(i,r){if(i&&i.defaultProps){r=ne({},r),i=i.defaultProps;for(var c in i)r[c]===void 0&&(r[c]=i[c]);return r}return r}function dd(i,r,c,h){r=i.memoizedState,c=c(h,r),c=c==null?r:ne({},r,c),i.memoizedState=c,i.lanes===0&&(i.updateQueue.baseState=c)}var zl={isMounted:function(i){return(i=i._reactInternals)?Xn(i)===i:!1},enqueueSetState:function(i,r,c){i=i._reactInternals;var h=qn(),v=jr(i),_=xr(h,v);_.payload=r,c!=null&&(_.callback=c),r=Xr(i,_,v),r!==null&&(Wi(r,i,v,h),Dl(r,i,v))},enqueueReplaceState:function(i,r,c){i=i._reactInternals;var h=qn(),v=jr(i),_=xr(h,v);_.tag=1,_.payload=r,c!=null&&(_.callback=c),r=Xr(i,_,v),r!==null&&(Wi(r,i,v,h),Dl(r,i,v))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var c=qn(),h=jr(i),v=xr(c,h);v.tag=2,r!=null&&(v.callback=r),r=Xr(i,v,h),r!==null&&(Wi(r,i,h,c),Dl(r,i,h))}};function Hm(i,r,c,h,v,_,D){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,_,D):r.prototype&&r.prototype.isPureReactComponent?!fo(c,h)||!fo(v,_):!0}function Vm(i,r,c){var h=!1,v=Vr,_=r.contextType;return typeof _=="object"&&_!==null?_=Ti(_):(v=si(r)?Ss:On.current,h=r.contextTypes,_=(h=h!=null)?ia(i,v):Vr),r=new r(c,_),i.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=zl,i.stateNode=r,r._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=v,i.__reactInternalMemoizedMaskedChildContext=_),r}function Gm(i,r,c,h){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(c,h),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(c,h),r.state!==i&&zl.enqueueReplaceState(r,r.state,null)}function fd(i,r,c,h){var v=i.stateNode;v.props=c,v.state=i.memoizedState,v.refs={},Zu(i);var _=r.contextType;typeof _=="object"&&_!==null?v.context=Ti(_):(_=si(r)?Ss:On.current,v.context=ia(i,_)),v.state=i.memoizedState,_=r.getDerivedStateFromProps,typeof _=="function"&&(dd(i,r,_,c),v.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof v.getSnapshotBeforeUpdate=="function"||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(r=v.state,typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount(),r!==v.state&&zl.enqueueReplaceState(v,v.state,null),Fl(i,c,v,h),v.state=i.memoizedState),typeof v.componentDidMount=="function"&&(i.flags|=4194308)}function da(i,r){try{var c="",h=r;do c+=Re(h),h=h.return;while(h);var v=c}catch(_){v=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:r,stack:v,digest:null}}function hd(i,r,c){return{value:i,source:null,stack:c??null,digest:r??null}}function pd(i,r){try{console.error(r.value)}catch(c){setTimeout(function(){throw c})}}var TS=typeof WeakMap=="function"?WeakMap:Map;function Wm(i,r,c){c=xr(-1,c),c.tag=3,c.payload={element:null};var h=r.value;return c.callback=function(){ql||(ql=!0,Rd=h),pd(i,r)},c}function Xm(i,r,c){c=xr(-1,c),c.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var v=r.value;c.payload=function(){return h(v)},c.callback=function(){pd(i,r)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(c.callback=function(){pd(i,r),typeof h!="function"&&(qr===null?qr=new Set([this]):qr.add(this));var D=r.stack;this.componentDidCatch(r.value,{componentStack:D!==null?D:""})}),c}function Qm(i,r,c){var h=i.pingCache;if(h===null){h=i.pingCache=new TS;var v=new Set;h.set(r,v)}else v=h.get(r),v===void 0&&(v=new Set,h.set(r,v));v.has(c)||(v.add(c),i=zS.bind(null,i,r,c),r.then(i,i))}function qm(i){do{var r;if((r=i.tag===13)&&(r=i.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return i;i=i.return}while(i!==null);return null}function Ym(i,r,c,h,v){return(i.mode&1)===0?(i===r?i.flags|=65536:(i.flags|=128,c.flags|=131072,c.flags&=-52805,c.tag===1&&(c.alternate===null?c.tag=17:(r=xr(-1,1),r.tag=2,Xr(c,r,1))),c.lanes|=1),i):(i.flags|=65536,i.lanes=v,i)}var wS=C.ReactCurrentOwner,ai=!1;function Qn(i,r,c,h){r.child=i===null?pm(r,null,c,h):oa(r,i.child,c,h)}function jm(i,r,c,h,v){c=c.render;var _=r.ref;return ca(r,v),h=sd(i,r,c,h,_,v),c=ad(),i!==null&&!ai?(r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~v,vr(i,r,v)):(rn&&c&&Vu(r),r.flags|=1,Qn(i,r,h,v),r.child)}function Km(i,r,c,h,v){if(i===null){var _=c.type;return typeof _=="function"&&!Nd(_)&&_.defaultProps===void 0&&c.compare===null&&c.defaultProps===void 0?(r.tag=15,r.type=_,$m(i,r,_,h,v)):(i=Jl(c.type,null,h,r,r.mode,v),i.ref=r.ref,i.return=r,r.child=i)}if(_=i.child,(i.lanes&v)===0){var D=_.memoizedProps;if(c=c.compare,c=c!==null?c:fo,c(D,h)&&i.ref===r.ref)return vr(i,r,v)}return r.flags|=1,i=$r(_,h),i.ref=r.ref,i.return=r,r.child=i}function $m(i,r,c,h,v){if(i!==null){var _=i.memoizedProps;if(fo(_,h)&&i.ref===r.ref)if(ai=!1,r.pendingProps=h=_,(i.lanes&v)!==0)(i.flags&131072)!==0&&(ai=!0);else return r.lanes=i.lanes,vr(i,r,v)}return md(i,r,c,h,v)}function Zm(i,r,c){var h=r.pendingProps,v=h.children,_=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},jt(ha,vi),vi|=c;else{if((c&1073741824)===0)return i=_!==null?_.baseLanes|c:c,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:i,cachePool:null,transitions:null},r.updateQueue=null,jt(ha,vi),vi|=i,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=_!==null?_.baseLanes:c,jt(ha,vi),vi|=h}else _!==null?(h=_.baseLanes|c,r.memoizedState=null):h=c,jt(ha,vi),vi|=h;return Qn(i,r,v,c),r.child}function Jm(i,r){var c=r.ref;(i===null&&c!==null||i!==null&&i.ref!==c)&&(r.flags|=512,r.flags|=2097152)}function md(i,r,c,h,v){var _=si(c)?Ss:On.current;return _=ia(r,_),ca(r,v),c=sd(i,r,c,h,_,v),h=ad(),i!==null&&!ai?(r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~v,vr(i,r,v)):(rn&&h&&Vu(r),r.flags|=1,Qn(i,r,c,v),r.child)}function eg(i,r,c,h,v){if(si(c)){var _=!0;El(r)}else _=!1;if(ca(r,v),r.stateNode===null)Vl(i,r),Vm(r,c,h),fd(r,c,h,v),h=!0;else if(i===null){var D=r.stateNode,G=r.memoizedProps;D.props=G;var Z=D.context,he=c.contextType;typeof he=="object"&&he!==null?he=Ti(he):(he=si(c)?Ss:On.current,he=ia(r,he));var _e=c.getDerivedStateFromProps,Ce=typeof _e=="function"||typeof D.getSnapshotBeforeUpdate=="function";Ce||typeof D.UNSAFE_componentWillReceiveProps!="function"&&typeof D.componentWillReceiveProps!="function"||(G!==h||Z!==he)&&Gm(r,D,h,he),Wr=!1;var ye=r.memoizedState;D.state=ye,Fl(r,h,D,v),Z=r.memoizedState,G!==h||ye!==Z||ri.current||Wr?(typeof _e=="function"&&(dd(r,c,_e,h),Z=r.memoizedState),(G=Wr||Hm(r,c,G,h,ye,Z,he))?(Ce||typeof D.UNSAFE_componentWillMount!="function"&&typeof D.componentWillMount!="function"||(typeof D.componentWillMount=="function"&&D.componentWillMount(),typeof D.UNSAFE_componentWillMount=="function"&&D.UNSAFE_componentWillMount()),typeof D.componentDidMount=="function"&&(r.flags|=4194308)):(typeof D.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=h,r.memoizedState=Z),D.props=h,D.state=Z,D.context=he,h=G):(typeof D.componentDidMount=="function"&&(r.flags|=4194308),h=!1)}else{D=r.stateNode,gm(i,r),G=r.memoizedProps,he=r.type===r.elementType?G:Hi(r.type,G),D.props=he,Ce=r.pendingProps,ye=D.context,Z=c.contextType,typeof Z=="object"&&Z!==null?Z=Ti(Z):(Z=si(c)?Ss:On.current,Z=ia(r,Z));var Xe=c.getDerivedStateFromProps;(_e=typeof Xe=="function"||typeof D.getSnapshotBeforeUpdate=="function")||typeof D.UNSAFE_componentWillReceiveProps!="function"&&typeof D.componentWillReceiveProps!="function"||(G!==Ce||ye!==Z)&&Gm(r,D,h,Z),Wr=!1,ye=r.memoizedState,D.state=ye,Fl(r,h,D,v);var Ze=r.memoizedState;G!==Ce||ye!==Ze||ri.current||Wr?(typeof Xe=="function"&&(dd(r,c,Xe,h),Ze=r.memoizedState),(he=Wr||Hm(r,c,he,h,ye,Ze,Z)||!1)?(_e||typeof D.UNSAFE_componentWillUpdate!="function"&&typeof D.componentWillUpdate!="function"||(typeof D.componentWillUpdate=="function"&&D.componentWillUpdate(h,Ze,Z),typeof D.UNSAFE_componentWillUpdate=="function"&&D.UNSAFE_componentWillUpdate(h,Ze,Z)),typeof D.componentDidUpdate=="function"&&(r.flags|=4),typeof D.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof D.componentDidUpdate!="function"||G===i.memoizedProps&&ye===i.memoizedState||(r.flags|=4),typeof D.getSnapshotBeforeUpdate!="function"||G===i.memoizedProps&&ye===i.memoizedState||(r.flags|=1024),r.memoizedProps=h,r.memoizedState=Ze),D.props=h,D.state=Ze,D.context=Z,h=he):(typeof D.componentDidUpdate!="function"||G===i.memoizedProps&&ye===i.memoizedState||(r.flags|=4),typeof D.getSnapshotBeforeUpdate!="function"||G===i.memoizedProps&&ye===i.memoizedState||(r.flags|=1024),h=!1)}return gd(i,r,c,h,_,v)}function gd(i,r,c,h,v,_){Jm(i,r);var D=(r.flags&128)!==0;if(!h&&!D)return v&&sm(r,c,!1),vr(i,r,_);h=r.stateNode,wS.current=r;var G=D&&typeof c.getDerivedStateFromError!="function"?null:h.render();return r.flags|=1,i!==null&&D?(r.child=oa(r,i.child,null,_),r.child=oa(r,null,G,_)):Qn(i,r,G,_),r.memoizedState=h.state,v&&sm(r,c,!0),r.child}function tg(i){var r=i.stateNode;r.pendingContext?im(i,r.pendingContext,r.pendingContext!==r.context):r.context&&im(i,r.context,!1),Ju(i,r.containerInfo)}function ng(i,r,c,h,v){return aa(),Qu(v),r.flags|=256,Qn(i,r,c,h),r.child}var xd={dehydrated:null,treeContext:null,retryLane:0};function vd(i){return{baseLanes:i,cachePool:null,transitions:null}}function ig(i,r,c){var h=r.pendingProps,v=ln.current,_=!1,D=(r.flags&128)!==0,G;if((G=D)||(G=i!==null&&i.memoizedState===null?!1:(v&2)!==0),G?(_=!0,r.flags&=-129):(i===null||i.memoizedState!==null)&&(v|=1),jt(ln,v&1),i===null)return Xu(r),i=r.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((r.mode&1)===0?r.lanes=1:i.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(D=h.children,i=h.fallback,_?(h=r.mode,_=r.child,D={mode:"hidden",children:D},(h&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=D):_=ec(D,h,0,null),i=Rs(i,h,c,null),_.return=r,i.return=r,_.sibling=i,r.child=_,r.child.memoizedState=vd(c),r.memoizedState=xd,i):Sd(r,D));if(v=i.memoizedState,v!==null&&(G=v.dehydrated,G!==null))return bS(i,r,D,h,G,v,c);if(_){_=h.fallback,D=r.mode,v=i.child,G=v.sibling;var Z={mode:"hidden",children:h.children};return(D&1)===0&&r.child!==v?(h=r.child,h.childLanes=0,h.pendingProps=Z,r.deletions=null):(h=$r(v,Z),h.subtreeFlags=v.subtreeFlags&14680064),G!==null?_=$r(G,_):(_=Rs(_,D,c,null),_.flags|=2),_.return=r,h.return=r,h.sibling=_,r.child=h,h=_,_=r.child,D=i.child.memoizedState,D=D===null?vd(c):{baseLanes:D.baseLanes|c,cachePool:null,transitions:D.transitions},_.memoizedState=D,_.childLanes=i.childLanes&~c,r.memoizedState=xd,h}return _=i.child,i=_.sibling,h=$r(_,{mode:"visible",children:h.children}),(r.mode&1)===0&&(h.lanes=c),h.return=r,h.sibling=null,i!==null&&(c=r.deletions,c===null?(r.deletions=[i],r.flags|=16):c.push(i)),r.child=h,r.memoizedState=null,h}function Sd(i,r){return r=ec({mode:"visible",children:r},i.mode,0,null),r.return=i,i.child=r}function Hl(i,r,c,h){return h!==null&&Qu(h),oa(r,i.child,null,c),i=Sd(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function bS(i,r,c,h,v,_,D){if(c)return r.flags&256?(r.flags&=-257,h=hd(Error(t(422))),Hl(i,r,D,h)):r.memoizedState!==null?(r.child=i.child,r.flags|=128,null):(_=h.fallback,v=r.mode,h=ec({mode:"visible",children:h.children},v,0,null),_=Rs(_,v,D,null),_.flags|=2,h.return=r,_.return=r,h.sibling=_,r.child=h,(r.mode&1)!==0&&oa(r,i.child,null,D),r.child.memoizedState=vd(D),r.memoizedState=xd,_);if((r.mode&1)===0)return Hl(i,r,D,null);if(v.data==="$!"){if(h=v.nextSibling&&v.nextSibling.dataset,h)var G=h.dgst;return h=G,_=Error(t(419)),h=hd(_,h,void 0),Hl(i,r,D,h)}if(G=(D&i.childLanes)!==0,ai||G){if(h=bn,h!==null){switch(D&-D){case 4:v=2;break;case 16:v=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:v=32;break;case 536870912:v=268435456;break;default:v=0}v=(v&(h.suspendedLanes|D))!==0?0:v,v!==0&&v!==_.retryLane&&(_.retryLane=v,gr(i,v),Wi(h,i,v,-1))}return Bd(),h=hd(Error(t(421))),Hl(i,r,D,h)}return v.data==="$?"?(r.flags|=128,r.child=i.child,r=HS.bind(null,i),v._reactRetry=r,null):(i=_.treeContext,xi=zr(v.nextSibling),gi=r,rn=!0,zi=null,i!==null&&(Ei[Ci++]=pr,Ei[Ci++]=mr,Ei[Ci++]=As,pr=i.id,mr=i.overflow,As=r),r=Sd(r,h.children),r.flags|=4096,r)}function rg(i,r,c){i.lanes|=r;var h=i.alternate;h!==null&&(h.lanes|=r),Ku(i.return,r,c)}function Ad(i,r,c,h,v){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:h,tail:c,tailMode:v}:(_.isBackwards=r,_.rendering=null,_.renderingStartTime=0,_.last=h,_.tail=c,_.tailMode=v)}function sg(i,r,c){var h=r.pendingProps,v=h.revealOrder,_=h.tail;if(Qn(i,r,h.children,c),h=ln.current,(h&2)!==0)h=h&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&rg(i,c,r);else if(i.tag===19)rg(i,c,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(jt(ln,h),(r.mode&1)===0)r.memoizedState=null;else switch(v){case"forwards":for(c=r.child,v=null;c!==null;)i=c.alternate,i!==null&&Ll(i)===null&&(v=c),c=c.sibling;c=v,c===null?(v=r.child,r.child=null):(v=c.sibling,c.sibling=null),Ad(r,!1,v,c,_);break;case"backwards":for(c=null,v=r.child,r.child=null;v!==null;){if(i=v.alternate,i!==null&&Ll(i)===null){r.child=v;break}i=v.sibling,v.sibling=c,c=v,v=i}Ad(r,!0,c,null,_);break;case"together":Ad(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Vl(i,r){(r.mode&1)===0&&i!==null&&(i.alternate=null,r.alternate=null,r.flags|=2)}function vr(i,r,c){if(i!==null&&(r.dependencies=i.dependencies),Cs|=r.lanes,(c&r.childLanes)===0)return null;if(i!==null&&r.child!==i.child)throw Error(t(153));if(r.child!==null){for(i=r.child,c=$r(i,i.pendingProps),r.child=c,c.return=r;i.sibling!==null;)i=i.sibling,c=c.sibling=$r(i,i.pendingProps),c.return=r;c.sibling=null}return r.child}function RS(i,r,c){switch(r.tag){case 3:tg(r),aa();break;case 5:Sm(r);break;case 1:si(r.type)&&El(r);break;case 4:Ju(r,r.stateNode.containerInfo);break;case 10:var h=r.type._context,v=r.memoizedProps.value;jt(Il,h._currentValue),h._currentValue=v;break;case 13:if(h=r.memoizedState,h!==null)return h.dehydrated!==null?(jt(ln,ln.current&1),r.flags|=128,null):(c&r.child.childLanes)!==0?ig(i,r,c):(jt(ln,ln.current&1),i=vr(i,r,c),i!==null?i.sibling:null);jt(ln,ln.current&1);break;case 19:if(h=(c&r.childLanes)!==0,(i.flags&128)!==0){if(h)return sg(i,r,c);r.flags|=128}if(v=r.memoizedState,v!==null&&(v.rendering=null,v.tail=null,v.lastEffect=null),jt(ln,ln.current),h)break;return null;case 22:case 23:return r.lanes=0,Zm(i,r,c)}return vr(i,r,c)}var ag,yd,og,lg;ag=function(i,r){for(var c=r.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===r)break;for(;c.sibling===null;){if(c.return===null||c.return===r)return;c=c.return}c.sibling.return=c.return,c=c.sibling}},yd=function(){},og=function(i,r,c,h){var v=i.memoizedProps;if(v!==h){i=r.stateNode,Ms(Zi.current);var _=null;switch(c){case"input":v=dt(i,v),h=dt(i,h),_=[];break;case"select":v=ne({},v,{value:void 0}),h=ne({},h,{value:void 0}),_=[];break;case"textarea":v=qt(i,v),h=qt(i,h),_=[];break;default:typeof v.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=yl)}He(c,h);var D;c=null;for(he in v)if(!h.hasOwnProperty(he)&&v.hasOwnProperty(he)&&v[he]!=null)if(he==="style"){var G=v[he];for(D in G)G.hasOwnProperty(D)&&(c||(c={}),c[D]="")}else he!=="dangerouslySetInnerHTML"&&he!=="children"&&he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&he!=="autoFocus"&&(s.hasOwnProperty(he)?_||(_=[]):(_=_||[]).push(he,null));for(he in h){var Z=h[he];if(G=v!=null?v[he]:void 0,h.hasOwnProperty(he)&&Z!==G&&(Z!=null||G!=null))if(he==="style")if(G){for(D in G)!G.hasOwnProperty(D)||Z&&Z.hasOwnProperty(D)||(c||(c={}),c[D]="");for(D in Z)Z.hasOwnProperty(D)&&G[D]!==Z[D]&&(c||(c={}),c[D]=Z[D])}else c||(_||(_=[]),_.push(he,c)),c=Z;else he==="dangerouslySetInnerHTML"?(Z=Z?Z.__html:void 0,G=G?G.__html:void 0,Z!=null&&G!==Z&&(_=_||[]).push(he,Z)):he==="children"?typeof Z!="string"&&typeof Z!="number"||(_=_||[]).push(he,""+Z):he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&(s.hasOwnProperty(he)?(Z!=null&&he==="onScroll"&&$t("scroll",i),_||G===Z||(_=[])):(_=_||[]).push(he,Z))}c&&(_=_||[]).push("style",c);var he=_;(r.updateQueue=he)&&(r.flags|=4)}},lg=function(i,r,c,h){c!==h&&(r.flags|=4)};function wo(i,r){if(!rn)switch(i.tailMode){case"hidden":r=i.tail;for(var c=null;r!==null;)r.alternate!==null&&(c=r),r=r.sibling;c===null?i.tail=null:c.sibling=null;break;case"collapsed":c=i.tail;for(var h=null;c!==null;)c.alternate!==null&&(h=c),c=c.sibling;h===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function zn(i){var r=i.alternate!==null&&i.alternate.child===i.child,c=0,h=0;if(r)for(var v=i.child;v!==null;)c|=v.lanes|v.childLanes,h|=v.subtreeFlags&14680064,h|=v.flags&14680064,v.return=i,v=v.sibling;else for(v=i.child;v!==null;)c|=v.lanes|v.childLanes,h|=v.subtreeFlags,h|=v.flags,v.return=i,v=v.sibling;return i.subtreeFlags|=h,i.childLanes=c,r}function IS(i,r,c){var h=r.pendingProps;switch(Gu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zn(r),null;case 1:return si(r.type)&&Ml(),zn(r),null;case 3:return h=r.stateNode,ua(),Zt(ri),Zt(On),nd(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(bl(r)?r.flags|=4:i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,zi!==null&&(Dd(zi),zi=null))),yd(i,r),zn(r),null;case 5:ed(r);var v=Ms(_o.current);if(c=r.type,i!==null&&r.stateNode!=null)og(i,r,c,h,v),i.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!h){if(r.stateNode===null)throw Error(t(166));return zn(r),null}if(i=Ms(Zi.current),bl(r)){h=r.stateNode,c=r.type;var _=r.memoizedProps;switch(h[$i]=r,h[xo]=_,i=(r.mode&1)!==0,c){case"dialog":$t("cancel",h),$t("close",h);break;case"iframe":case"object":case"embed":$t("load",h);break;case"video":case"audio":for(v=0;v<po.length;v++)$t(po[v],h);break;case"source":$t("error",h);break;case"img":case"image":case"link":$t("error",h),$t("load",h);break;case"details":$t("toggle",h);break;case"input":nt(h,_),$t("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!_.multiple},$t("invalid",h);break;case"textarea":ee(h,_),$t("invalid",h)}He(c,_),v=null;for(var D in _)if(_.hasOwnProperty(D)){var G=_[D];D==="children"?typeof G=="string"?h.textContent!==G&&(_.suppressHydrationWarning!==!0&&Al(h.textContent,G,i),v=["children",G]):typeof G=="number"&&h.textContent!==""+G&&(_.suppressHydrationWarning!==!0&&Al(h.textContent,G,i),v=["children",""+G]):s.hasOwnProperty(D)&&G!=null&&D==="onScroll"&&$t("scroll",h)}switch(c){case"input":Ge(h),At(h,_,!0);break;case"textarea":Ge(h),It(h);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(h.onclick=yl)}h=v,r.updateQueue=h,h!==null&&(r.flags|=4)}else{D=v.nodeType===9?v:v.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=O(c)),i==="http://www.w3.org/1999/xhtml"?c==="script"?(i=D.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=D.createElement(c,{is:h.is}):(i=D.createElement(c),c==="select"&&(D=i,h.multiple?D.multiple=!0:h.size&&(D.size=h.size))):i=D.createElementNS(i,c),i[$i]=r,i[xo]=h,ag(i,r,!1,!1),r.stateNode=i;e:{switch(D=Le(c,h),c){case"dialog":$t("cancel",i),$t("close",i),v=h;break;case"iframe":case"object":case"embed":$t("load",i),v=h;break;case"video":case"audio":for(v=0;v<po.length;v++)$t(po[v],i);v=h;break;case"source":$t("error",i),v=h;break;case"img":case"image":case"link":$t("error",i),$t("load",i),v=h;break;case"details":$t("toggle",i),v=h;break;case"input":nt(i,h),v=dt(i,h),$t("invalid",i);break;case"option":v=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},v=ne({},h,{value:void 0}),$t("invalid",i);break;case"textarea":ee(i,h),v=qt(i,h),$t("invalid",i);break;default:v=h}He(c,v),G=v;for(_ in G)if(G.hasOwnProperty(_)){var Z=G[_];_==="style"?me(i,Z):_==="dangerouslySetInnerHTML"?(Z=Z?Z.__html:void 0,Z!=null&&de(i,Z)):_==="children"?typeof Z=="string"?(c!=="textarea"||Z!=="")&&ge(i,Z):typeof Z=="number"&&ge(i,""+Z):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?Z!=null&&_==="onScroll"&&$t("scroll",i):Z!=null&&P(i,_,Z,D))}switch(c){case"input":Ge(i),At(i,h,!1);break;case"textarea":Ge(i),It(i);break;case"option":h.value!=null&&i.setAttribute("value",""+pe(h.value));break;case"select":i.multiple=!!h.multiple,_=h.value,_!=null?Ut(i,!!h.multiple,_,!1):h.defaultValue!=null&&Ut(i,!!h.multiple,h.defaultValue,!0);break;default:typeof v.onClick=="function"&&(i.onclick=yl)}switch(c){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return zn(r),null;case 6:if(i&&r.stateNode!=null)lg(i,r,i.memoizedProps,h);else{if(typeof h!="string"&&r.stateNode===null)throw Error(t(166));if(c=Ms(_o.current),Ms(Zi.current),bl(r)){if(h=r.stateNode,c=r.memoizedProps,h[$i]=r,(_=h.nodeValue!==c)&&(i=gi,i!==null))switch(i.tag){case 3:Al(h.nodeValue,c,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Al(h.nodeValue,c,(i.mode&1)!==0)}_&&(r.flags|=4)}else h=(c.nodeType===9?c:c.ownerDocument).createTextNode(h),h[$i]=r,r.stateNode=h}return zn(r),null;case 13:if(Zt(ln),h=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(rn&&xi!==null&&(r.mode&1)!==0&&(r.flags&128)===0)dm(),aa(),r.flags|=98560,_=!1;else if(_=bl(r),h!==null&&h.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=r.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[$i]=r}else aa(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;zn(r),_=!1}else zi!==null&&(Dd(zi),zi=null),_=!0;if(!_)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=c,r):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(r.child.flags|=8192,(r.mode&1)!==0&&(i===null||(ln.current&1)!==0?_n===0&&(_n=3):Bd())),r.updateQueue!==null&&(r.flags|=4),zn(r),null);case 4:return ua(),yd(i,r),i===null&&mo(r.stateNode.containerInfo),zn(r),null;case 10:return ju(r.type._context),zn(r),null;case 17:return si(r.type)&&Ml(),zn(r),null;case 19:if(Zt(ln),_=r.memoizedState,_===null)return zn(r),null;if(h=(r.flags&128)!==0,D=_.rendering,D===null)if(h)wo(_,!1);else{if(_n!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(D=Ll(i),D!==null){for(r.flags|=128,wo(_,!1),h=D.updateQueue,h!==null&&(r.updateQueue=h,r.flags|=4),r.subtreeFlags=0,h=c,c=r.child;c!==null;)_=c,i=h,_.flags&=14680066,D=_.alternate,D===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=D.childLanes,_.lanes=D.lanes,_.child=D.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=D.memoizedProps,_.memoizedState=D.memoizedState,_.updateQueue=D.updateQueue,_.type=D.type,i=D.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),c=c.sibling;return jt(ln,ln.current&1|2),r.child}i=i.sibling}_.tail!==null&&on()>pa&&(r.flags|=128,h=!0,wo(_,!1),r.lanes=4194304)}else{if(!h)if(i=Ll(D),i!==null){if(r.flags|=128,h=!0,c=i.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),wo(_,!0),_.tail===null&&_.tailMode==="hidden"&&!D.alternate&&!rn)return zn(r),null}else 2*on()-_.renderingStartTime>pa&&c!==1073741824&&(r.flags|=128,h=!0,wo(_,!1),r.lanes=4194304);_.isBackwards?(D.sibling=r.child,r.child=D):(c=_.last,c!==null?c.sibling=D:r.child=D,_.last=D)}return _.tail!==null?(r=_.tail,_.rendering=r,_.tail=r.sibling,_.renderingStartTime=on(),r.sibling=null,c=ln.current,jt(ln,h?c&1|2:c&1),r):(zn(r),null);case 22:case 23:return Ld(),h=r.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(r.flags|=8192),h&&(r.mode&1)!==0?(vi&1073741824)!==0&&(zn(r),r.subtreeFlags&6&&(r.flags|=8192)):zn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function PS(i,r){switch(Gu(r),r.tag){case 1:return si(r.type)&&Ml(),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return ua(),Zt(ri),Zt(On),nd(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 5:return ed(r),null;case 13:if(Zt(ln),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(t(340));aa()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return Zt(ln),null;case 4:return ua(),null;case 10:return ju(r.type._context),null;case 22:case 23:return Ld(),null;case 24:return null;default:return null}}var Gl=!1,Hn=!1,DS=typeof WeakSet=="function"?WeakSet:Set,je=null;function fa(i,r){var c=i.ref;if(c!==null)if(typeof c=="function")try{c(null)}catch(h){dn(i,r,h)}else c.current=null}function _d(i,r,c){try{c()}catch(h){dn(i,r,h)}}var cg=!1;function FS(i,r){if(Lu=cl,i=Hp(),Tu(i)){if("selectionStart"in i)var c={start:i.selectionStart,end:i.selectionEnd};else e:{c=(c=i.ownerDocument)&&c.defaultView||window;var h=c.getSelection&&c.getSelection();if(h&&h.rangeCount!==0){c=h.anchorNode;var v=h.anchorOffset,_=h.focusNode;h=h.focusOffset;try{c.nodeType,_.nodeType}catch{c=null;break e}var D=0,G=-1,Z=-1,he=0,_e=0,Ce=i,ye=null;t:for(;;){for(var Xe;Ce!==c||v!==0&&Ce.nodeType!==3||(G=D+v),Ce!==_||h!==0&&Ce.nodeType!==3||(Z=D+h),Ce.nodeType===3&&(D+=Ce.nodeValue.length),(Xe=Ce.firstChild)!==null;)ye=Ce,Ce=Xe;for(;;){if(Ce===i)break t;if(ye===c&&++he===v&&(G=D),ye===_&&++_e===h&&(Z=D),(Xe=Ce.nextSibling)!==null)break;Ce=ye,ye=Ce.parentNode}Ce=Xe}c=G===-1||Z===-1?null:{start:G,end:Z}}else c=null}c=c||{start:0,end:0}}else c=null;for(Bu={focusedElem:i,selectionRange:c},cl=!1,je=r;je!==null;)if(r=je,i=r.child,(r.subtreeFlags&1028)!==0&&i!==null)i.return=r,je=i;else for(;je!==null;){r=je;try{var Ze=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Ze!==null){var tt=Ze.memoizedProps,pn=Ze.memoizedState,oe=r.stateNode,J=oe.getSnapshotBeforeUpdate(r.elementType===r.type?tt:Hi(r.type,tt),pn);oe.__reactInternalSnapshotBeforeUpdate=J}break;case 3:var ue=r.stateNode.containerInfo;ue.nodeType===1?ue.textContent="":ue.nodeType===9&&ue.documentElement&&ue.removeChild(ue.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Pe){dn(r,r.return,Pe)}if(i=r.sibling,i!==null){i.return=r.return,je=i;break}je=r.return}return Ze=cg,cg=!1,Ze}function bo(i,r,c){var h=r.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var v=h=h.next;do{if((v.tag&i)===i){var _=v.destroy;v.destroy=void 0,_!==void 0&&_d(r,c,_)}v=v.next}while(v!==h)}}function Wl(i,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var c=r=r.next;do{if((c.tag&i)===i){var h=c.create;c.destroy=h()}c=c.next}while(c!==r)}}function Md(i){var r=i.ref;if(r!==null){var c=i.stateNode;switch(i.tag){case 5:i=c;break;default:i=c}typeof r=="function"?r(i):r.current=i}}function ug(i){var r=i.alternate;r!==null&&(i.alternate=null,ug(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&(delete r[$i],delete r[xo],delete r[ku],delete r[mS],delete r[gS])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function dg(i){return i.tag===5||i.tag===3||i.tag===4}function fg(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||dg(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Ed(i,r,c){var h=i.tag;if(h===5||h===6)i=i.stateNode,r?c.nodeType===8?c.parentNode.insertBefore(i,r):c.insertBefore(i,r):(c.nodeType===8?(r=c.parentNode,r.insertBefore(i,c)):(r=c,r.appendChild(i)),c=c._reactRootContainer,c!=null||r.onclick!==null||(r.onclick=yl));else if(h!==4&&(i=i.child,i!==null))for(Ed(i,r,c),i=i.sibling;i!==null;)Ed(i,r,c),i=i.sibling}function Cd(i,r,c){var h=i.tag;if(h===5||h===6)i=i.stateNode,r?c.insertBefore(i,r):c.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(Cd(i,r,c),i=i.sibling;i!==null;)Cd(i,r,c),i=i.sibling}var Fn=null,Vi=!1;function Qr(i,r,c){for(c=c.child;c!==null;)hg(i,r,c),c=c.sibling}function hg(i,r,c){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(le,c)}catch{}switch(c.tag){case 5:Hn||fa(c,r);case 6:var h=Fn,v=Vi;Fn=null,Qr(i,r,c),Fn=h,Vi=v,Fn!==null&&(Vi?(i=Fn,c=c.stateNode,i.nodeType===8?i.parentNode.removeChild(c):i.removeChild(c)):Fn.removeChild(c.stateNode));break;case 18:Fn!==null&&(Vi?(i=Fn,c=c.stateNode,i.nodeType===8?Ou(i.parentNode,c):i.nodeType===1&&Ou(i,c),so(i)):Ou(Fn,c.stateNode));break;case 4:h=Fn,v=Vi,Fn=c.stateNode.containerInfo,Vi=!0,Qr(i,r,c),Fn=h,Vi=v;break;case 0:case 11:case 14:case 15:if(!Hn&&(h=c.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){v=h=h.next;do{var _=v,D=_.destroy;_=_.tag,D!==void 0&&((_&2)!==0||(_&4)!==0)&&_d(c,r,D),v=v.next}while(v!==h)}Qr(i,r,c);break;case 1:if(!Hn&&(fa(c,r),h=c.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=c.memoizedProps,h.state=c.memoizedState,h.componentWillUnmount()}catch(G){dn(c,r,G)}Qr(i,r,c);break;case 21:Qr(i,r,c);break;case 22:c.mode&1?(Hn=(h=Hn)||c.memoizedState!==null,Qr(i,r,c),Hn=h):Qr(i,r,c);break;default:Qr(i,r,c)}}function pg(i){var r=i.updateQueue;if(r!==null){i.updateQueue=null;var c=i.stateNode;c===null&&(c=i.stateNode=new DS),r.forEach(function(h){var v=VS.bind(null,i,h);c.has(h)||(c.add(h),h.then(v,v))})}}function Gi(i,r){var c=r.deletions;if(c!==null)for(var h=0;h<c.length;h++){var v=c[h];try{var _=i,D=r,G=D;e:for(;G!==null;){switch(G.tag){case 5:Fn=G.stateNode,Vi=!1;break e;case 3:Fn=G.stateNode.containerInfo,Vi=!0;break e;case 4:Fn=G.stateNode.containerInfo,Vi=!0;break e}G=G.return}if(Fn===null)throw Error(t(160));hg(_,D,v),Fn=null,Vi=!1;var Z=v.alternate;Z!==null&&(Z.return=null),v.return=null}catch(he){dn(v,r,he)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)mg(r,i),r=r.sibling}function mg(i,r){var c=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Gi(r,i),er(i),h&4){try{bo(3,i,i.return),Wl(3,i)}catch(tt){dn(i,i.return,tt)}try{bo(5,i,i.return)}catch(tt){dn(i,i.return,tt)}}break;case 1:Gi(r,i),er(i),h&512&&c!==null&&fa(c,c.return);break;case 5:if(Gi(r,i),er(i),h&512&&c!==null&&fa(c,c.return),i.flags&32){var v=i.stateNode;try{ge(v,"")}catch(tt){dn(i,i.return,tt)}}if(h&4&&(v=i.stateNode,v!=null)){var _=i.memoizedProps,D=c!==null?c.memoizedProps:_,G=i.type,Z=i.updateQueue;if(i.updateQueue=null,Z!==null)try{G==="input"&&_.type==="radio"&&_.name!=null&&ht(v,_),Le(G,D);var he=Le(G,_);for(D=0;D<Z.length;D+=2){var _e=Z[D],Ce=Z[D+1];_e==="style"?me(v,Ce):_e==="dangerouslySetInnerHTML"?de(v,Ce):_e==="children"?ge(v,Ce):P(v,_e,Ce,he)}switch(G){case"input":bt(v,_);break;case"textarea":hn(v,_);break;case"select":var ye=v._wrapperState.wasMultiple;v._wrapperState.wasMultiple=!!_.multiple;var Xe=_.value;Xe!=null?Ut(v,!!_.multiple,Xe,!1):ye!==!!_.multiple&&(_.defaultValue!=null?Ut(v,!!_.multiple,_.defaultValue,!0):Ut(v,!!_.multiple,_.multiple?[]:"",!1))}v[xo]=_}catch(tt){dn(i,i.return,tt)}}break;case 6:if(Gi(r,i),er(i),h&4){if(i.stateNode===null)throw Error(t(162));v=i.stateNode,_=i.memoizedProps;try{v.nodeValue=_}catch(tt){dn(i,i.return,tt)}}break;case 3:if(Gi(r,i),er(i),h&4&&c!==null&&c.memoizedState.isDehydrated)try{so(r.containerInfo)}catch(tt){dn(i,i.return,tt)}break;case 4:Gi(r,i),er(i);break;case 13:Gi(r,i),er(i),v=i.child,v.flags&8192&&(_=v.memoizedState!==null,v.stateNode.isHidden=_,!_||v.alternate!==null&&v.alternate.memoizedState!==null||(bd=on())),h&4&&pg(i);break;case 22:if(_e=c!==null&&c.memoizedState!==null,i.mode&1?(Hn=(he=Hn)||_e,Gi(r,i),Hn=he):Gi(r,i),er(i),h&8192){if(he=i.memoizedState!==null,(i.stateNode.isHidden=he)&&!_e&&(i.mode&1)!==0)for(je=i,_e=i.child;_e!==null;){for(Ce=je=_e;je!==null;){switch(ye=je,Xe=ye.child,ye.tag){case 0:case 11:case 14:case 15:bo(4,ye,ye.return);break;case 1:fa(ye,ye.return);var Ze=ye.stateNode;if(typeof Ze.componentWillUnmount=="function"){h=ye,c=ye.return;try{r=h,Ze.props=r.memoizedProps,Ze.state=r.memoizedState,Ze.componentWillUnmount()}catch(tt){dn(h,c,tt)}}break;case 5:fa(ye,ye.return);break;case 22:if(ye.memoizedState!==null){vg(Ce);continue}}Xe!==null?(Xe.return=ye,je=Xe):vg(Ce)}_e=_e.sibling}e:for(_e=null,Ce=i;;){if(Ce.tag===5){if(_e===null){_e=Ce;try{v=Ce.stateNode,he?(_=v.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(G=Ce.stateNode,Z=Ce.memoizedProps.style,D=Z!=null&&Z.hasOwnProperty("display")?Z.display:null,G.style.display=ie("display",D))}catch(tt){dn(i,i.return,tt)}}}else if(Ce.tag===6){if(_e===null)try{Ce.stateNode.nodeValue=he?"":Ce.memoizedProps}catch(tt){dn(i,i.return,tt)}}else if((Ce.tag!==22&&Ce.tag!==23||Ce.memoizedState===null||Ce===i)&&Ce.child!==null){Ce.child.return=Ce,Ce=Ce.child;continue}if(Ce===i)break e;for(;Ce.sibling===null;){if(Ce.return===null||Ce.return===i)break e;_e===Ce&&(_e=null),Ce=Ce.return}_e===Ce&&(_e=null),Ce.sibling.return=Ce.return,Ce=Ce.sibling}}break;case 19:Gi(r,i),er(i),h&4&&pg(i);break;case 21:break;default:Gi(r,i),er(i)}}function er(i){var r=i.flags;if(r&2){try{e:{for(var c=i.return;c!==null;){if(dg(c)){var h=c;break e}c=c.return}throw Error(t(160))}switch(h.tag){case 5:var v=h.stateNode;h.flags&32&&(ge(v,""),h.flags&=-33);var _=fg(i);Cd(i,_,v);break;case 3:case 4:var D=h.stateNode.containerInfo,G=fg(i);Ed(i,G,D);break;default:throw Error(t(161))}}catch(Z){dn(i,i.return,Z)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function LS(i,r,c){je=i,gg(i)}function gg(i,r,c){for(var h=(i.mode&1)!==0;je!==null;){var v=je,_=v.child;if(v.tag===22&&h){var D=v.memoizedState!==null||Gl;if(!D){var G=v.alternate,Z=G!==null&&G.memoizedState!==null||Hn;G=Gl;var he=Hn;if(Gl=D,(Hn=Z)&&!he)for(je=v;je!==null;)D=je,Z=D.child,D.tag===22&&D.memoizedState!==null?Sg(v):Z!==null?(Z.return=D,je=Z):Sg(v);for(;_!==null;)je=_,gg(_),_=_.sibling;je=v,Gl=G,Hn=he}xg(i)}else(v.subtreeFlags&8772)!==0&&_!==null?(_.return=v,je=_):xg(i)}}function xg(i){for(;je!==null;){var r=je;if((r.flags&8772)!==0){var c=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Hn||Wl(5,r);break;case 1:var h=r.stateNode;if(r.flags&4&&!Hn)if(c===null)h.componentDidMount();else{var v=r.elementType===r.type?c.memoizedProps:Hi(r.type,c.memoizedProps);h.componentDidUpdate(v,c.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var _=r.updateQueue;_!==null&&vm(r,_,h);break;case 3:var D=r.updateQueue;if(D!==null){if(c=null,r.child!==null)switch(r.child.tag){case 5:c=r.child.stateNode;break;case 1:c=r.child.stateNode}vm(r,D,c)}break;case 5:var G=r.stateNode;if(c===null&&r.flags&4){c=G;var Z=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":Z.autoFocus&&c.focus();break;case"img":Z.src&&(c.src=Z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var he=r.alternate;if(he!==null){var _e=he.memoizedState;if(_e!==null){var Ce=_e.dehydrated;Ce!==null&&so(Ce)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Hn||r.flags&512&&Md(r)}catch(ye){dn(r,r.return,ye)}}if(r===i){je=null;break}if(c=r.sibling,c!==null){c.return=r.return,je=c;break}je=r.return}}function vg(i){for(;je!==null;){var r=je;if(r===i){je=null;break}var c=r.sibling;if(c!==null){c.return=r.return,je=c;break}je=r.return}}function Sg(i){for(;je!==null;){var r=je;try{switch(r.tag){case 0:case 11:case 15:var c=r.return;try{Wl(4,r)}catch(Z){dn(r,c,Z)}break;case 1:var h=r.stateNode;if(typeof h.componentDidMount=="function"){var v=r.return;try{h.componentDidMount()}catch(Z){dn(r,v,Z)}}var _=r.return;try{Md(r)}catch(Z){dn(r,_,Z)}break;case 5:var D=r.return;try{Md(r)}catch(Z){dn(r,D,Z)}}}catch(Z){dn(r,r.return,Z)}if(r===i){je=null;break}var G=r.sibling;if(G!==null){G.return=r.return,je=G;break}je=r.return}}var BS=Math.ceil,Xl=C.ReactCurrentDispatcher,Td=C.ReactCurrentOwner,bi=C.ReactCurrentBatchConfig,Ft=0,bn=null,Sn=null,Ln=0,vi=0,ha=Hr(0),_n=0,Ro=null,Cs=0,Ql=0,wd=0,Io=null,oi=null,bd=0,pa=1/0,Sr=null,ql=!1,Rd=null,qr=null,Yl=!1,Yr=null,jl=0,Po=0,Id=null,Kl=-1,$l=0;function qn(){return(Ft&6)!==0?on():Kl!==-1?Kl:Kl=on()}function jr(i){return(i.mode&1)===0?1:(Ft&2)!==0&&Ln!==0?Ln&-Ln:vS.transition!==null?($l===0&&($l=We()),$l):(i=Mt,i!==0||(i=window.event,i=i===void 0?16:yp(i.type)),i)}function Wi(i,r,c,h){if(50<Po)throw Po=0,Id=null,Error(t(185));_t(i,c,h),((Ft&2)===0||i!==bn)&&(i===bn&&((Ft&2)===0&&(Ql|=c),_n===4&&Kr(i,Ln)),li(i,h),c===1&&Ft===0&&(r.mode&1)===0&&(pa=on()+500,Cl&&Gr()))}function li(i,r){var c=i.callbackNode;Ht(i,r);var h=Yt(i,i===bn?Ln:0);if(h===0)c!==null&&Ja(c),i.callbackNode=null,i.callbackPriority=0;else if(r=h&-h,i.callbackPriority!==r){if(c!=null&&Ja(c),r===1)i.tag===0?xS(yg.bind(null,i)):am(yg.bind(null,i)),hS(function(){(Ft&6)===0&&Gr()}),c=null;else{switch(dr(h)){case 1:c=eo;break;case 4:c=L;break;case 16:c=re;break;case 536870912:c=ce;break;default:c=re}c=Rg(c,Ag.bind(null,i))}i.callbackPriority=r,i.callbackNode=c}}function Ag(i,r){if(Kl=-1,$l=0,(Ft&6)!==0)throw Error(t(327));var c=i.callbackNode;if(ma()&&i.callbackNode!==c)return null;var h=Yt(i,i===bn?Ln:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||r)r=Zl(i,h);else{r=h;var v=Ft;Ft|=2;var _=Mg();(bn!==i||Ln!==r)&&(Sr=null,pa=on()+500,ws(i,r));do try{OS();break}catch(G){_g(i,G)}while(!0);Yu(),Xl.current=_,Ft=v,Sn!==null?r=0:(bn=null,Ln=0,r=_n)}if(r!==0){if(r===2&&(v=vn(i),v!==0&&(h=v,r=Pd(i,v))),r===1)throw c=Ro,ws(i,0),Kr(i,h),li(i,on()),c;if(r===6)Kr(i,h);else{if(v=i.current.alternate,(h&30)===0&&!NS(v)&&(r=Zl(i,h),r===2&&(_=vn(i),_!==0&&(h=_,r=Pd(i,_))),r===1))throw c=Ro,ws(i,0),Kr(i,h),li(i,on()),c;switch(i.finishedWork=v,i.finishedLanes=h,r){case 0:case 1:throw Error(t(345));case 2:bs(i,oi,Sr);break;case 3:if(Kr(i,h),(h&130023424)===h&&(r=bd+500-on(),10<r)){if(Yt(i,0)!==0)break;if(v=i.suspendedLanes,(v&h)!==h){qn(),i.pingedLanes|=i.suspendedLanes&v;break}i.timeoutHandle=Uu(bs.bind(null,i,oi,Sr),r);break}bs(i,oi,Sr);break;case 4:if(Kr(i,h),(h&4194240)===h)break;for(r=i.eventTimes,v=-1;0<h;){var D=31-Ne(h);_=1<<D,D=r[D],D>v&&(v=D),h&=~_}if(h=v,h=on()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*BS(h/1960))-h,10<h){i.timeoutHandle=Uu(bs.bind(null,i,oi,Sr),h);break}bs(i,oi,Sr);break;case 5:bs(i,oi,Sr);break;default:throw Error(t(329))}}}return li(i,on()),i.callbackNode===c?Ag.bind(null,i):null}function Pd(i,r){var c=Io;return i.current.memoizedState.isDehydrated&&(ws(i,r).flags|=256),i=Zl(i,r),i!==2&&(r=oi,oi=c,r!==null&&Dd(r)),i}function Dd(i){oi===null?oi=i:oi.push.apply(oi,i)}function NS(i){for(var r=i;;){if(r.flags&16384){var c=r.updateQueue;if(c!==null&&(c=c.stores,c!==null))for(var h=0;h<c.length;h++){var v=c[h],_=v.getSnapshot;v=v.value;try{if(!ki(_(),v))return!1}catch{return!1}}}if(c=r.child,r.subtreeFlags&16384&&c!==null)c.return=r,r=c;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Kr(i,r){for(r&=~wd,r&=~Ql,i.suspendedLanes|=r,i.pingedLanes&=~r,i=i.expirationTimes;0<r;){var c=31-Ne(r),h=1<<c;i[c]=-1,r&=~h}}function yg(i){if((Ft&6)!==0)throw Error(t(327));ma();var r=Yt(i,0);if((r&1)===0)return li(i,on()),null;var c=Zl(i,r);if(i.tag!==0&&c===2){var h=vn(i);h!==0&&(r=h,c=Pd(i,h))}if(c===1)throw c=Ro,ws(i,0),Kr(i,r),li(i,on()),c;if(c===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=r,bs(i,oi,Sr),li(i,on()),null}function Fd(i,r){var c=Ft;Ft|=1;try{return i(r)}finally{Ft=c,Ft===0&&(pa=on()+500,Cl&&Gr())}}function Ts(i){Yr!==null&&Yr.tag===0&&(Ft&6)===0&&ma();var r=Ft;Ft|=1;var c=bi.transition,h=Mt;try{if(bi.transition=null,Mt=1,i)return i()}finally{Mt=h,bi.transition=c,Ft=r,(Ft&6)===0&&Gr()}}function Ld(){vi=ha.current,Zt(ha)}function ws(i,r){i.finishedWork=null,i.finishedLanes=0;var c=i.timeoutHandle;if(c!==-1&&(i.timeoutHandle=-1,fS(c)),Sn!==null)for(c=Sn.return;c!==null;){var h=c;switch(Gu(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Ml();break;case 3:ua(),Zt(ri),Zt(On),nd();break;case 5:ed(h);break;case 4:ua();break;case 13:Zt(ln);break;case 19:Zt(ln);break;case 10:ju(h.type._context);break;case 22:case 23:Ld()}c=c.return}if(bn=i,Sn=i=$r(i.current,null),Ln=vi=r,_n=0,Ro=null,wd=Ql=Cs=0,oi=Io=null,_s!==null){for(r=0;r<_s.length;r++)if(c=_s[r],h=c.interleaved,h!==null){c.interleaved=null;var v=h.next,_=c.pending;if(_!==null){var D=_.next;_.next=v,h.next=D}c.pending=h}_s=null}return i}function _g(i,r){do{var c=Sn;try{if(Yu(),Bl.current=kl,Nl){for(var h=cn.memoizedState;h!==null;){var v=h.queue;v!==null&&(v.pending=null),h=h.next}Nl=!1}if(Es=0,wn=yn=cn=null,Mo=!1,Eo=0,Td.current=null,c===null||c.return===null){_n=1,Ro=r,Sn=null;break}e:{var _=i,D=c.return,G=c,Z=r;if(r=Ln,G.flags|=32768,Z!==null&&typeof Z=="object"&&typeof Z.then=="function"){var he=Z,_e=G,Ce=_e.tag;if((_e.mode&1)===0&&(Ce===0||Ce===11||Ce===15)){var ye=_e.alternate;ye?(_e.updateQueue=ye.updateQueue,_e.memoizedState=ye.memoizedState,_e.lanes=ye.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Xe=qm(D);if(Xe!==null){Xe.flags&=-257,Ym(Xe,D,G,_,r),Xe.mode&1&&Qm(_,he,r),r=Xe,Z=he;var Ze=r.updateQueue;if(Ze===null){var tt=new Set;tt.add(Z),r.updateQueue=tt}else Ze.add(Z);break e}else{if((r&1)===0){Qm(_,he,r),Bd();break e}Z=Error(t(426))}}else if(rn&&G.mode&1){var pn=qm(D);if(pn!==null){(pn.flags&65536)===0&&(pn.flags|=256),Ym(pn,D,G,_,r),Qu(da(Z,G));break e}}_=Z=da(Z,G),_n!==4&&(_n=2),Io===null?Io=[_]:Io.push(_),_=D;do{switch(_.tag){case 3:_.flags|=65536,r&=-r,_.lanes|=r;var oe=Wm(_,Z,r);xm(_,oe);break e;case 1:G=Z;var J=_.type,ue=_.stateNode;if((_.flags&128)===0&&(typeof J.getDerivedStateFromError=="function"||ue!==null&&typeof ue.componentDidCatch=="function"&&(qr===null||!qr.has(ue)))){_.flags|=65536,r&=-r,_.lanes|=r;var Pe=Xm(_,G,r);xm(_,Pe);break e}}_=_.return}while(_!==null)}Cg(c)}catch(rt){r=rt,Sn===c&&c!==null&&(Sn=c=c.return);continue}break}while(!0)}function Mg(){var i=Xl.current;return Xl.current=kl,i===null?kl:i}function Bd(){(_n===0||_n===3||_n===2)&&(_n=4),bn===null||(Cs&268435455)===0&&(Ql&268435455)===0||Kr(bn,Ln)}function Zl(i,r){var c=Ft;Ft|=2;var h=Mg();(bn!==i||Ln!==r)&&(Sr=null,ws(i,r));do try{US();break}catch(v){_g(i,v)}while(!0);if(Yu(),Ft=c,Xl.current=h,Sn!==null)throw Error(t(261));return bn=null,Ln=0,_n}function US(){for(;Sn!==null;)Eg(Sn)}function OS(){for(;Sn!==null&&!ol();)Eg(Sn)}function Eg(i){var r=bg(i.alternate,i,vi);i.memoizedProps=i.pendingProps,r===null?Cg(i):Sn=r,Td.current=null}function Cg(i){var r=i;do{var c=r.alternate;if(i=r.return,(r.flags&32768)===0){if(c=IS(c,r,vi),c!==null){Sn=c;return}}else{if(c=PS(c,r),c!==null){c.flags&=32767,Sn=c;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{_n=6,Sn=null;return}}if(r=r.sibling,r!==null){Sn=r;return}Sn=r=i}while(r!==null);_n===0&&(_n=5)}function bs(i,r,c){var h=Mt,v=bi.transition;try{bi.transition=null,Mt=1,kS(i,r,c,h)}finally{bi.transition=v,Mt=h}return null}function kS(i,r,c,h){do ma();while(Yr!==null);if((Ft&6)!==0)throw Error(t(327));c=i.finishedWork;var v=i.finishedLanes;if(c===null)return null;if(i.finishedWork=null,i.finishedLanes=0,c===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=c.lanes|c.childLanes;if(ni(i,_),i===bn&&(Sn=bn=null,Ln=0),(c.subtreeFlags&2064)===0&&(c.flags&2064)===0||Yl||(Yl=!0,Rg(re,function(){return ma(),null})),_=(c.flags&15990)!==0,(c.subtreeFlags&15990)!==0||_){_=bi.transition,bi.transition=null;var D=Mt;Mt=1;var G=Ft;Ft|=4,Td.current=null,FS(i,c),mg(c,i),sS(Bu),cl=!!Lu,Bu=Lu=null,i.current=c,LS(c),hu(),Ft=G,Mt=D,bi.transition=_}else i.current=c;if(Yl&&(Yl=!1,Yr=i,jl=v),_=i.pendingLanes,_===0&&(qr=null),Qe(c.stateNode),li(i,on()),r!==null)for(h=i.onRecoverableError,c=0;c<r.length;c++)v=r[c],h(v.value,{componentStack:v.stack,digest:v.digest});if(ql)throw ql=!1,i=Rd,Rd=null,i;return(jl&1)!==0&&i.tag!==0&&ma(),_=i.pendingLanes,(_&1)!==0?i===Id?Po++:(Po=0,Id=i):Po=0,Gr(),null}function ma(){if(Yr!==null){var i=dr(jl),r=bi.transition,c=Mt;try{if(bi.transition=null,Mt=16>i?16:i,Yr===null)var h=!1;else{if(i=Yr,Yr=null,jl=0,(Ft&6)!==0)throw Error(t(331));var v=Ft;for(Ft|=4,je=i.current;je!==null;){var _=je,D=_.child;if((je.flags&16)!==0){var G=_.deletions;if(G!==null){for(var Z=0;Z<G.length;Z++){var he=G[Z];for(je=he;je!==null;){var _e=je;switch(_e.tag){case 0:case 11:case 15:bo(8,_e,_)}var Ce=_e.child;if(Ce!==null)Ce.return=_e,je=Ce;else for(;je!==null;){_e=je;var ye=_e.sibling,Xe=_e.return;if(ug(_e),_e===he){je=null;break}if(ye!==null){ye.return=Xe,je=ye;break}je=Xe}}}var Ze=_.alternate;if(Ze!==null){var tt=Ze.child;if(tt!==null){Ze.child=null;do{var pn=tt.sibling;tt.sibling=null,tt=pn}while(tt!==null)}}je=_}}if((_.subtreeFlags&2064)!==0&&D!==null)D.return=_,je=D;else e:for(;je!==null;){if(_=je,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:bo(9,_,_.return)}var oe=_.sibling;if(oe!==null){oe.return=_.return,je=oe;break e}je=_.return}}var J=i.current;for(je=J;je!==null;){D=je;var ue=D.child;if((D.subtreeFlags&2064)!==0&&ue!==null)ue.return=D,je=ue;else e:for(D=J;je!==null;){if(G=je,(G.flags&2048)!==0)try{switch(G.tag){case 0:case 11:case 15:Wl(9,G)}}catch(rt){dn(G,G.return,rt)}if(G===D){je=null;break e}var Pe=G.sibling;if(Pe!==null){Pe.return=G.return,je=Pe;break e}je=G.return}}if(Ft=v,Gr(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(le,i)}catch{}h=!0}return h}finally{Mt=c,bi.transition=r}}return!1}function Tg(i,r,c){r=da(c,r),r=Wm(i,r,1),i=Xr(i,r,1),r=qn(),i!==null&&(_t(i,1,r),li(i,r))}function dn(i,r,c){if(i.tag===3)Tg(i,i,c);else for(;r!==null;){if(r.tag===3){Tg(r,i,c);break}else if(r.tag===1){var h=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(qr===null||!qr.has(h))){i=da(c,i),i=Xm(r,i,1),r=Xr(r,i,1),i=qn(),r!==null&&(_t(r,1,i),li(r,i));break}}r=r.return}}function zS(i,r,c){var h=i.pingCache;h!==null&&h.delete(r),r=qn(),i.pingedLanes|=i.suspendedLanes&c,bn===i&&(Ln&c)===c&&(_n===4||_n===3&&(Ln&130023424)===Ln&&500>on()-bd?ws(i,0):wd|=c),li(i,r)}function wg(i,r){r===0&&((i.mode&1)===0?r=1:(r=it,it<<=1,(it&130023424)===0&&(it=4194304)));var c=qn();i=gr(i,r),i!==null&&(_t(i,r,c),li(i,c))}function HS(i){var r=i.memoizedState,c=0;r!==null&&(c=r.retryLane),wg(i,c)}function VS(i,r){var c=0;switch(i.tag){case 13:var h=i.stateNode,v=i.memoizedState;v!==null&&(c=v.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(r),wg(i,c)}var bg;bg=function(i,r,c){if(i!==null)if(i.memoizedProps!==r.pendingProps||ri.current)ai=!0;else{if((i.lanes&c)===0&&(r.flags&128)===0)return ai=!1,RS(i,r,c);ai=(i.flags&131072)!==0}else ai=!1,rn&&(r.flags&1048576)!==0&&om(r,wl,r.index);switch(r.lanes=0,r.tag){case 2:var h=r.type;Vl(i,r),i=r.pendingProps;var v=ia(r,On.current);ca(r,c),v=sd(null,r,h,i,v,c);var _=ad();return r.flags|=1,typeof v=="object"&&v!==null&&typeof v.render=="function"&&v.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,si(h)?(_=!0,El(r)):_=!1,r.memoizedState=v.state!==null&&v.state!==void 0?v.state:null,Zu(r),v.updater=zl,r.stateNode=v,v._reactInternals=r,fd(r,h,i,c),r=gd(null,r,h,!0,_,c)):(r.tag=0,rn&&_&&Vu(r),Qn(null,r,v,c),r=r.child),r;case 16:h=r.elementType;e:{switch(Vl(i,r),i=r.pendingProps,v=h._init,h=v(h._payload),r.type=h,v=r.tag=WS(h),i=Hi(h,i),v){case 0:r=md(null,r,h,i,c);break e;case 1:r=eg(null,r,h,i,c);break e;case 11:r=jm(null,r,h,i,c);break e;case 14:r=Km(null,r,h,Hi(h.type,i),c);break e}throw Error(t(306,h,""))}return r;case 0:return h=r.type,v=r.pendingProps,v=r.elementType===h?v:Hi(h,v),md(i,r,h,v,c);case 1:return h=r.type,v=r.pendingProps,v=r.elementType===h?v:Hi(h,v),eg(i,r,h,v,c);case 3:e:{if(tg(r),i===null)throw Error(t(387));h=r.pendingProps,_=r.memoizedState,v=_.element,gm(i,r),Fl(r,h,null,c);var D=r.memoizedState;if(h=D.element,_.isDehydrated)if(_={element:h,isDehydrated:!1,cache:D.cache,pendingSuspenseBoundaries:D.pendingSuspenseBoundaries,transitions:D.transitions},r.updateQueue.baseState=_,r.memoizedState=_,r.flags&256){v=da(Error(t(423)),r),r=ng(i,r,h,c,v);break e}else if(h!==v){v=da(Error(t(424)),r),r=ng(i,r,h,c,v);break e}else for(xi=zr(r.stateNode.containerInfo.firstChild),gi=r,rn=!0,zi=null,c=pm(r,null,h,c),r.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{if(aa(),h===v){r=vr(i,r,c);break e}Qn(i,r,h,c)}r=r.child}return r;case 5:return Sm(r),i===null&&Xu(r),h=r.type,v=r.pendingProps,_=i!==null?i.memoizedProps:null,D=v.children,Nu(h,v)?D=null:_!==null&&Nu(h,_)&&(r.flags|=32),Jm(i,r),Qn(i,r,D,c),r.child;case 6:return i===null&&Xu(r),null;case 13:return ig(i,r,c);case 4:return Ju(r,r.stateNode.containerInfo),h=r.pendingProps,i===null?r.child=oa(r,null,h,c):Qn(i,r,h,c),r.child;case 11:return h=r.type,v=r.pendingProps,v=r.elementType===h?v:Hi(h,v),jm(i,r,h,v,c);case 7:return Qn(i,r,r.pendingProps,c),r.child;case 8:return Qn(i,r,r.pendingProps.children,c),r.child;case 12:return Qn(i,r,r.pendingProps.children,c),r.child;case 10:e:{if(h=r.type._context,v=r.pendingProps,_=r.memoizedProps,D=v.value,jt(Il,h._currentValue),h._currentValue=D,_!==null)if(ki(_.value,D)){if(_.children===v.children&&!ri.current){r=vr(i,r,c);break e}}else for(_=r.child,_!==null&&(_.return=r);_!==null;){var G=_.dependencies;if(G!==null){D=_.child;for(var Z=G.firstContext;Z!==null;){if(Z.context===h){if(_.tag===1){Z=xr(-1,c&-c),Z.tag=2;var he=_.updateQueue;if(he!==null){he=he.shared;var _e=he.pending;_e===null?Z.next=Z:(Z.next=_e.next,_e.next=Z),he.pending=Z}}_.lanes|=c,Z=_.alternate,Z!==null&&(Z.lanes|=c),Ku(_.return,c,r),G.lanes|=c;break}Z=Z.next}}else if(_.tag===10)D=_.type===r.type?null:_.child;else if(_.tag===18){if(D=_.return,D===null)throw Error(t(341));D.lanes|=c,G=D.alternate,G!==null&&(G.lanes|=c),Ku(D,c,r),D=_.sibling}else D=_.child;if(D!==null)D.return=_;else for(D=_;D!==null;){if(D===r){D=null;break}if(_=D.sibling,_!==null){_.return=D.return,D=_;break}D=D.return}_=D}Qn(i,r,v.children,c),r=r.child}return r;case 9:return v=r.type,h=r.pendingProps.children,ca(r,c),v=Ti(v),h=h(v),r.flags|=1,Qn(i,r,h,c),r.child;case 14:return h=r.type,v=Hi(h,r.pendingProps),v=Hi(h.type,v),Km(i,r,h,v,c);case 15:return $m(i,r,r.type,r.pendingProps,c);case 17:return h=r.type,v=r.pendingProps,v=r.elementType===h?v:Hi(h,v),Vl(i,r),r.tag=1,si(h)?(i=!0,El(r)):i=!1,ca(r,c),Vm(r,h,v),fd(r,h,v,c),gd(null,r,h,!0,i,c);case 19:return sg(i,r,c);case 22:return Zm(i,r,c)}throw Error(t(156,r.tag))};function Rg(i,r){return gs(i,r)}function GS(i,r,c,h){this.tag=i,this.key=c,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ri(i,r,c,h){return new GS(i,r,c,h)}function Nd(i){return i=i.prototype,!(!i||!i.isReactComponent)}function WS(i){if(typeof i=="function")return Nd(i)?1:0;if(i!=null){if(i=i.$$typeof,i===U)return 11;if(i===H)return 14}return 2}function $r(i,r){var c=i.alternate;return c===null?(c=Ri(i.tag,r,i.key,i.mode),c.elementType=i.elementType,c.type=i.type,c.stateNode=i.stateNode,c.alternate=i,i.alternate=c):(c.pendingProps=r,c.type=i.type,c.flags=0,c.subtreeFlags=0,c.deletions=null),c.flags=i.flags&14680064,c.childLanes=i.childLanes,c.lanes=i.lanes,c.child=i.child,c.memoizedProps=i.memoizedProps,c.memoizedState=i.memoizedState,c.updateQueue=i.updateQueue,r=i.dependencies,c.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},c.sibling=i.sibling,c.index=i.index,c.ref=i.ref,c}function Jl(i,r,c,h,v,_){var D=2;if(h=i,typeof i=="function")Nd(i)&&(D=1);else if(typeof i=="string")D=5;else e:switch(i){case R:return Rs(c.children,v,_,r);case E:D=8,v|=8;break;case F:return i=Ri(12,c,r,v|2),i.elementType=F,i.lanes=_,i;case W:return i=Ri(13,c,r,v),i.elementType=W,i.lanes=_,i;case X:return i=Ri(19,c,r,v),i.elementType=X,i.lanes=_,i;case q:return ec(c,v,_,r);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case B:D=10;break e;case N:D=9;break e;case U:D=11;break e;case H:D=14;break e;case j:D=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return r=Ri(D,c,r,v),r.elementType=i,r.type=h,r.lanes=_,r}function Rs(i,r,c,h){return i=Ri(7,i,h,r),i.lanes=c,i}function ec(i,r,c,h){return i=Ri(22,i,h,r),i.elementType=q,i.lanes=c,i.stateNode={isHidden:!1},i}function Ud(i,r,c){return i=Ri(6,i,null,r),i.lanes=c,i}function Od(i,r,c){return r=Ri(4,i.children!==null?i.children:[],i.key,r),r.lanes=c,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}function XS(i,r,c,h,v){this.tag=r,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dn(0),this.expirationTimes=Dn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dn(0),this.identifierPrefix=h,this.onRecoverableError=v,this.mutableSourceEagerHydrationData=null}function kd(i,r,c,h,v,_,D,G,Z){return i=new XS(i,r,c,G,Z),r===1?(r=1,_===!0&&(r|=8)):r=0,_=Ri(3,null,null,r),i.current=_,_.stateNode=i,_.memoizedState={element:h,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zu(_),i}function QS(i,r,c){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:h==null?null:""+h,children:i,containerInfo:r,implementation:c}}function Ig(i){if(!i)return Vr;i=i._reactInternals;e:{if(Xn(i)!==i||i.tag!==1)throw Error(t(170));var r=i;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(si(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(i.tag===1){var c=i.type;if(si(c))return rm(i,c,r)}return r}function Pg(i,r,c,h,v,_,D,G,Z){return i=kd(c,h,!0,i,v,_,D,G,Z),i.context=Ig(null),c=i.current,h=qn(),v=jr(c),_=xr(h,v),_.callback=r??null,Xr(c,_,v),i.current.lanes=v,_t(i,v,h),li(i,h),i}function tc(i,r,c,h){var v=r.current,_=qn(),D=jr(v);return c=Ig(c),r.context===null?r.context=c:r.pendingContext=c,r=xr(_,D),r.payload={element:i},h=h===void 0?null:h,h!==null&&(r.callback=h),i=Xr(v,r,D),i!==null&&(Wi(i,v,D,_),Dl(i,v,D)),D}function nc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Dg(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var c=i.retryLane;i.retryLane=c!==0&&c<r?c:r}}function zd(i,r){Dg(i,r),(i=i.alternate)&&Dg(i,r)}function qS(){return null}var Fg=typeof reportError=="function"?reportError:function(i){console.error(i)};function Hd(i){this._internalRoot=i}ic.prototype.render=Hd.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(t(409));tc(i,r,null,null)},ic.prototype.unmount=Hd.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;Ts(function(){tc(null,i,null,null)}),r[fr]=null}};function ic(i){this._internalRoot=i}ic.prototype.unstable_scheduleHydration=function(i){if(i){var r=Vt();i={blockedOn:null,target:i,priority:r};for(var c=0;c<Ur.length&&r!==0&&r<Ur[c].priority;c++);Ur.splice(c,0,i),c===0&&Sp(i)}};function Vd(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function rc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Lg(){}function YS(i,r,c,h,v){if(v){if(typeof h=="function"){var _=h;h=function(){var he=nc(D);_.call(he)}}var D=Pg(r,h,i,0,null,!1,!1,"",Lg);return i._reactRootContainer=D,i[fr]=D.current,mo(i.nodeType===8?i.parentNode:i),Ts(),D}for(;v=i.lastChild;)i.removeChild(v);if(typeof h=="function"){var G=h;h=function(){var he=nc(Z);G.call(he)}}var Z=kd(i,0,!1,null,null,!1,!1,"",Lg);return i._reactRootContainer=Z,i[fr]=Z.current,mo(i.nodeType===8?i.parentNode:i),Ts(function(){tc(r,Z,c,h)}),Z}function sc(i,r,c,h,v){var _=c._reactRootContainer;if(_){var D=_;if(typeof v=="function"){var G=v;v=function(){var Z=nc(D);G.call(Z)}}tc(r,D,i,v)}else D=YS(c,r,i,v,h);return nc(D)}kt=function(i){switch(i.tag){case 3:var r=i.stateNode;if(r.current.memoizedState.isDehydrated){var c=Pt(r.pendingLanes);c!==0&&(ii(r,c|1),li(r,on()),(Ft&6)===0&&(pa=on()+500,Gr()))}break;case 13:Ts(function(){var h=gr(i,1);if(h!==null){var v=qn();Wi(h,i,1,v)}}),zd(i,1)}},Kt=function(i){if(i.tag===13){var r=gr(i,134217728);if(r!==null){var c=qn();Wi(r,i,134217728,c)}zd(i,134217728)}},Ui=function(i){if(i.tag===13){var r=jr(i),c=gr(i,r);if(c!==null){var h=qn();Wi(c,i,r,h)}zd(i,r)}},Vt=function(){return Mt},Oi=function(i,r){var c=Mt;try{return Mt=i,r()}finally{Mt=c}},lt=function(i,r,c){switch(r){case"input":if(bt(i,c),r=c.name,c.type==="radio"&&r!=null){for(c=i;c.parentNode;)c=c.parentNode;for(c=c.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<c.length;r++){var h=c[r];if(h!==i&&h.form===i.form){var v=_l(h);if(!v)throw Error(t(90));xt(h),bt(h,v)}}}break;case"textarea":hn(i,c);break;case"select":r=c.value,r!=null&&Ut(i,!!c.multiple,r,!1)}},ke=Fd,Ae=Ts;var jS={usingClientEntryPoint:!1,Events:[vo,ta,_l,Se,Be,Fd]},Do={findFiberByHostInstance:vs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},KS={bundleType:Do.bundleType,version:Do.version,rendererPackageName:Do.rendererPackageName,rendererConfig:Do.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=ms(i),i===null?null:i.stateNode},findFiberByHostInstance:Do.findFiberByHostInstance||qS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{le=ac.inject(KS),Ue=ac}catch{}}return ci.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jS,ci.createPortal=function(i,r){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vd(r))throw Error(t(200));return QS(i,r,null,c)},ci.createRoot=function(i,r){if(!Vd(i))throw Error(t(299));var c=!1,h="",v=Fg;return r!=null&&(r.unstable_strictMode===!0&&(c=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onRecoverableError!==void 0&&(v=r.onRecoverableError)),r=kd(i,1,!1,null,null,c,!1,h,v),i[fr]=r.current,mo(i.nodeType===8?i.parentNode:i),new Hd(r)},ci.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=ms(r),i=i===null?null:i.stateNode,i},ci.flushSync=function(i){return Ts(i)},ci.hydrate=function(i,r,c){if(!rc(r))throw Error(t(200));return sc(null,i,r,!0,c)},ci.hydrateRoot=function(i,r,c){if(!Vd(i))throw Error(t(405));var h=c!=null&&c.hydratedSources||null,v=!1,_="",D=Fg;if(c!=null&&(c.unstable_strictMode===!0&&(v=!0),c.identifierPrefix!==void 0&&(_=c.identifierPrefix),c.onRecoverableError!==void 0&&(D=c.onRecoverableError)),r=Pg(r,null,i,1,c??null,v,!1,_,D),i[fr]=r.current,mo(i),h)for(i=0;i<h.length;i++)c=h[i],v=c._getVersion,v=v(c._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[c,v]:r.mutableSourceEagerHydrationData.push(c,v);return new ic(r)},ci.render=function(i,r,c){if(!rc(r))throw Error(t(200));return sc(null,i,r,!1,c)},ci.unmountComponentAtNode=function(i){if(!rc(i))throw Error(t(40));return i._reactRootContainer?(Ts(function(){sc(null,null,i,!1,function(){i._reactRootContainer=null,i[fr]=null})}),!0):!1},ci.unstable_batchedUpdates=Fd,ci.unstable_renderSubtreeIntoContainer=function(i,r,c,h){if(!rc(c))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return sc(i,r,c,!1,h)},ci.version="18.3.1-next-f1338f8080-20240426",ci}var Vg;function oA(){if(Vg)return Xd.exports;Vg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Xd.exports=aA(),Xd.exports}var Gg;function lA(){if(Gg)return oc;Gg=1;var a=oA();return oc.createRoot=a.createRoot,oc.hydrateRoot=a.hydrateRoot,oc}var cA=lA();const uA=vx(cA);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kh="185",ga={ROTATE:0,DOLLY:1,PAN:2},xa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dA=0,Wg=1,fA=2,kc=1,hA=2,Vo=3,lr=0,hi=1,Li=2,Pr=0,us=1,Xg=2,Qg=3,qg=4,Sx=5,Ls=100,pA=101,mA=102,gA=103,xA=104,vA=200,SA=201,AA=202,yA=203,jo=204,Ko=205,_A=206,MA=207,EA=208,CA=209,TA=210,wA=211,bA=212,RA=213,IA=214,Vf=0,Gf=1,Wf=2,Wa=3,Xf=4,Qf=5,qf=6,Yf=7,Ax=0,PA=1,DA=2,or=0,yx=1,_x=2,Mx=3,Ex=4,Cx=5,Tx=6,wx=7,bx=300,Hs=301,Xa=302,Yd=303,jd=304,su=306,jf=1e3,Ir=1001,Kf=1002,Nn=1003,FA=1004,lc=1005,Wn=1006,Kd=1007,Os=1008,yi=1009,Rx=1010,Ix=1011,$o=1012,zh=1013,$n=1014,Bi=1015,cr=1016,Hh=1017,Vh=1018,Zo=1020,Px=35902,Dx=35899,Fx=1021,Lx=1022,Zn=1023,ur=1026,ks=1027,Bx=1028,au=1029,Vs=1030,Gh=1031,Ua=1033,zc=33776,Hc=33777,Vc=33778,Gc=33779,$f=35840,Zf=35841,Jf=35842,eh=35843,th=36196,nh=37492,ih=37496,rh=37488,sh=37489,Qc=37490,ah=37491,oh=37808,lh=37809,ch=37810,uh=37811,dh=37812,fh=37813,hh=37814,ph=37815,mh=37816,gh=37817,xh=37818,vh=37819,Sh=37820,Ah=37821,yh=36492,_h=36494,Mh=36495,Eh=36283,Ch=36284,qc=36285,Th=36286,LA=3200,Yg=0,BA=1,ls="",Di="srgb",Yc="srgb-linear",jc="linear",Wt="srgb",va=7680,jg=519,NA=512,UA=513,OA=514,Wh=515,kA=516,zA=517,Xh=518,HA=519,Kg=35044,VA=35048,$g="300 es",rr=2e3,Kc=2001;function GA(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function $c(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function WA(){const a=$c("canvas");return a.style.display="block",a}const Zg={};function Jg(...a){const e="THREE."+a.shift();console.log(e,...a)}function Nx(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function pt(...a){a=Nx(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function Lt(...a){a=Nx(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function Oa(...a){const e=a.join(" ");e in Zg||(Zg[e]=!0,pt(...a))}function XA(a,e,t){return new Promise(function(n,s){function o(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:s();break;case a.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}const QA={[Vf]:Gf,[Wf]:qf,[Xf]:Yf,[Wa]:Qf,[Gf]:Vf,[qf]:Wf,[Yf]:Xf,[Qf]:Wa};class ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let o=0,l=s.length;o<l;o++)s[o].call(this,e);e.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wc=Math.PI/180,wh=180/Math.PI;function nl(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vn[a&255]+Vn[a>>8&255]+Vn[a>>16&255]+Vn[a>>24&255]+"-"+Vn[e&255]+Vn[e>>8&255]+"-"+Vn[e>>16&15|64]+Vn[e>>24&255]+"-"+Vn[t&63|128]+Vn[t>>8&255]+"-"+Vn[t>>16&255]+Vn[t>>24&255]+Vn[n&255]+Vn[n>>8&255]+Vn[n>>16&255]+Vn[n>>24&255]).toLowerCase()}function Ct(a,e,t){return Math.max(e,Math.min(t,a))}function qA(a,e){return(a%e+e)%e}function $d(a,e,t){return(1-t)*a+t*e}function Lo(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ui(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ux={DEG2RAD:Wc},hp=class hp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,l=this.y-e.y;return this.x=o*n-l*s+e.x,this.y=o*s+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hp.prototype.isVector2=!0;let qe=hp;class en{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,o,l,u){let d=n[s+0],f=n[s+1],p=n[s+2],g=n[s+3],m=o[l+0],x=o[l+1],y=o[l+2],M=o[l+3];if(g!==M||d!==m||f!==x||p!==y){let S=d*m+f*x+p*y+g*M;S<0&&(m=-m,x=-x,y=-y,M=-M,S=-S);let A=1-u;if(S<.9995){const T=Math.acos(S),P=Math.sin(T);A=Math.sin(A*T)/P,u=Math.sin(u*T)/P,d=d*A+m*u,f=f*A+x*u,p=p*A+y*u,g=g*A+M*u}else{d=d*A+m*u,f=f*A+x*u,p=p*A+y*u,g=g*A+M*u;const T=1/Math.sqrt(d*d+f*f+p*p+g*g);d*=T,f*=T,p*=T,g*=T}}e[t]=d,e[t+1]=f,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,s,o,l){const u=n[s],d=n[s+1],f=n[s+2],p=n[s+3],g=o[l],m=o[l+1],x=o[l+2],y=o[l+3];return e[t]=u*y+p*g+d*x-f*m,e[t+1]=d*y+p*m+f*g-u*x,e[t+2]=f*y+p*x+u*m-d*g,e[t+3]=p*y-u*g-d*m-f*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,o=e._z,l=e._order,u=Math.cos,d=Math.sin,f=u(n/2),p=u(s/2),g=u(o/2),m=d(n/2),x=d(s/2),y=d(o/2);switch(l){case"XYZ":this._x=m*p*g+f*x*y,this._y=f*x*g-m*p*y,this._z=f*p*y+m*x*g,this._w=f*p*g-m*x*y;break;case"YXZ":this._x=m*p*g+f*x*y,this._y=f*x*g-m*p*y,this._z=f*p*y-m*x*g,this._w=f*p*g+m*x*y;break;case"ZXY":this._x=m*p*g-f*x*y,this._y=f*x*g+m*p*y,this._z=f*p*y+m*x*g,this._w=f*p*g-m*x*y;break;case"ZYX":this._x=m*p*g-f*x*y,this._y=f*x*g+m*p*y,this._z=f*p*y-m*x*g,this._w=f*p*g+m*x*y;break;case"YZX":this._x=m*p*g+f*x*y,this._y=f*x*g+m*p*y,this._z=f*p*y-m*x*g,this._w=f*p*g-m*x*y;break;case"XZY":this._x=m*p*g-f*x*y,this._y=f*x*g-m*p*y,this._z=f*p*y+m*x*g,this._w=f*p*g+m*x*y;break;default:pt("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],o=t[8],l=t[1],u=t[5],d=t[9],f=t[2],p=t[6],g=t[10],m=n+u+g;if(m>0){const x=.5/Math.sqrt(m+1);this._w=.25/x,this._x=(p-d)*x,this._y=(o-f)*x,this._z=(l-s)*x}else if(n>u&&n>g){const x=2*Math.sqrt(1+n-u-g);this._w=(p-d)/x,this._x=.25*x,this._y=(s+l)/x,this._z=(o+f)/x}else if(u>g){const x=2*Math.sqrt(1+u-n-g);this._w=(o-f)/x,this._x=(s+l)/x,this._y=.25*x,this._z=(d+p)/x}else{const x=2*Math.sqrt(1+g-n-u);this._w=(l-s)/x,this._x=(o+f)/x,this._y=(d+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,o=e._z,l=e._w,u=t._x,d=t._y,f=t._z,p=t._w;return this._x=n*p+l*u+s*f-o*d,this._y=s*p+l*d+o*u-n*f,this._z=o*p+l*f+n*d-s*u,this._w=l*p-n*u-s*d-o*f,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,o=e._z,l=e._w,u=this.dot(e);u<0&&(n=-n,s=-s,o=-o,l=-l,u=-u);let d=1-t;if(u<.9995){const f=Math.acos(u),p=Math.sin(f);d=Math.sin(d*f)/p,t=Math.sin(t*f)/p,this._x=this._x*d+n*t,this._y=this._y*d+s*t,this._z=this._z*d+o*t,this._w=this._w*d+l*t,this._onChangeCallback()}else this._x=this._x*d+n*t,this._y=this._y*d+s*t,this._z=this._z*d+o*t,this._w=this._w*d+l*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const pp=class pp{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(e0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(e0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*s,this.y=o[1]*t+o[4]*n+o[7]*s,this.z=o[2]*t+o[5]*n+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=e.elements,l=1/(o[3]*t+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*s+o[12])*l,this.y=(o[1]*t+o[5]*n+o[9]*s+o[13])*l,this.z=(o[2]*t+o[6]*n+o[10]*s+o[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,o=e.x,l=e.y,u=e.z,d=e.w,f=2*(l*s-u*n),p=2*(u*t-o*s),g=2*(o*n-l*t);return this.x=t+d*f+l*g-u*p,this.y=n+d*p+u*f-o*g,this.z=s+d*g+o*p-l*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s,this.y=o[1]*t+o[5]*n+o[9]*s,this.z=o[2]*t+o[6]*n+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,o=e.z,l=t.x,u=t.y,d=t.z;return this.x=s*d-o*u,this.y=o*l-n*d,this.z=n*u-s*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zd.copy(this).projectOnVector(e),this.sub(Zd)}reflect(e){return this.sub(Zd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};pp.prototype.isVector3=!0;let z=pp;const Zd=new z,e0=new en,mp=class mp{constructor(e,t,n,s,o,l,u,d,f){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,l,u,d,f)}set(e,t,n,s,o,l,u,d,f){const p=this.elements;return p[0]=e,p[1]=s,p[2]=u,p[3]=t,p[4]=o,p[5]=d,p[6]=n,p[7]=l,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,l=n[0],u=n[3],d=n[6],f=n[1],p=n[4],g=n[7],m=n[2],x=n[5],y=n[8],M=s[0],S=s[3],A=s[6],T=s[1],P=s[4],C=s[7],b=s[2],I=s[5],R=s[8];return o[0]=l*M+u*T+d*b,o[3]=l*S+u*P+d*I,o[6]=l*A+u*C+d*R,o[1]=f*M+p*T+g*b,o[4]=f*S+p*P+g*I,o[7]=f*A+p*C+g*R,o[2]=m*M+x*T+y*b,o[5]=m*S+x*P+y*I,o[8]=m*A+x*C+y*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],l=e[4],u=e[5],d=e[6],f=e[7],p=e[8];return t*l*p-t*u*f-n*o*p+n*u*d+s*o*f-s*l*d}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],l=e[4],u=e[5],d=e[6],f=e[7],p=e[8],g=p*l-u*f,m=u*d-p*o,x=f*o-l*d,y=t*g+n*m+s*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/y;return e[0]=g*M,e[1]=(s*f-p*n)*M,e[2]=(u*n-s*l)*M,e[3]=m*M,e[4]=(p*t-s*d)*M,e[5]=(s*o-u*t)*M,e[6]=x*M,e[7]=(n*d-f*t)*M,e[8]=(l*t-n*o)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,l,u){const d=Math.cos(o),f=Math.sin(o);return this.set(n*d,n*f,-n*(d*l+f*u)+l+e,-s*f,s*d,-s*(-f*l+d*u)+u+t,0,0,1),this}scale(e,t){return Oa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jd.makeScale(e,t)),this}rotate(e){return Oa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jd.makeRotation(-e)),this}translate(e,t){return Oa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};mp.prototype.isMatrix3=!0;let ft=mp;const Jd=new ft,t0=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),n0=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function YA(){const a={enabled:!0,workingColorSpace:Yc,spaces:{},convert:function(s,o,l){return this.enabled===!1||o===l||!o||!l||(this.spaces[o].transfer===Wt&&(s.r=Dr(s.r),s.g=Dr(s.g),s.b=Dr(s.b)),this.spaces[o].primaries!==this.spaces[l].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Wt&&(s.r=ka(s.r),s.g=ka(s.g),s.b=ka(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ls?jc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,l){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return Oa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return Oa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(s,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return a.define({[Yc]:{primaries:e,whitePoint:n,transfer:jc,toXYZ:t0,fromXYZ:n0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Di},outputColorSpaceConfig:{drawingBufferColorSpace:Di}},[Di]:{primaries:e,whitePoint:n,transfer:Wt,toXYZ:t0,fromXYZ:n0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Di}}}),a}const Rt=YA();function Dr(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function ka(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Sa;class jA{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Sa===void 0&&(Sa=$c("canvas")),Sa.width=e.width,Sa.height=e.height;const s=Sa.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Sa}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$c("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),o=s.data;for(let l=0;l<o.length;l++)o[l]=Dr(o[l]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Dr(t[n]/255)*255):t[n]=Dr(t[n]);return{data:t,width:e.width,height:e.height}}else return pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let KA=0;class Qh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KA++}),this.uuid=nl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let l=0,u=s.length;l<u;l++)s[l].isDataTexture?o.push(ef(s[l].image)):o.push(ef(s[l]))}else o=ef(s);n.url=o}return t||(e.images[this.uuid]=n),n}}function ef(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?jA.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(pt("Texture: Unable to serialize Texture."),{})}let $A=0;const tf=new z;class Jn extends ds{constructor(e=Jn.DEFAULT_IMAGE,t=Jn.DEFAULT_MAPPING,n=Ir,s=Ir,o=Wn,l=Os,u=Zn,d=yi,f=Jn.DEFAULT_ANISOTROPY,p=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$A++}),this.uuid=nl(),this.name="",this.source=new Qh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=l,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=d,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(tf).x}get height(){return this.source.getSize(tf).y}get depth(){return this.source.getSize(tf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){pt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){pt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jf:e.x=e.x-Math.floor(e.x);break;case Ir:e.x=e.x<0?0:1;break;case Kf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jf:e.y=e.y-Math.floor(e.y);break;case Ir:e.y=e.y<0?0:1;break;case Kf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=bx;Jn.DEFAULT_ANISOTROPY=1;const gp=class gp{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*s+l[12]*o,this.y=l[1]*t+l[5]*n+l[9]*s+l[13]*o,this.z=l[2]*t+l[6]*n+l[10]*s+l[14]*o,this.w=l[3]*t+l[7]*n+l[11]*s+l[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,o;const d=e.elements,f=d[0],p=d[4],g=d[8],m=d[1],x=d[5],y=d[9],M=d[2],S=d[6],A=d[10];if(Math.abs(p-m)<.01&&Math.abs(g-M)<.01&&Math.abs(y-S)<.01){if(Math.abs(p+m)<.1&&Math.abs(g+M)<.1&&Math.abs(y+S)<.1&&Math.abs(f+x+A-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(f+1)/2,C=(x+1)/2,b=(A+1)/2,I=(p+m)/4,R=(g+M)/4,E=(y+S)/4;return P>C&&P>b?P<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(P),s=I/n,o=R/n):C>b?C<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(C),n=I/s,o=E/s):b<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(b),n=R/o,s=E/o),this.set(n,s,o,t),this}let T=Math.sqrt((S-y)*(S-y)+(g-M)*(g-M)+(m-p)*(m-p));return Math.abs(T)<.001&&(T=1),this.x=(S-y)/T,this.y=(g-M)/T,this.z=(m-p)/T,this.w=Math.acos((f+x+A-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this.w=Ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this.w=Ct(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gp.prototype.isVector4=!0;let tn=gp;class ZA extends ds{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},o=new Jn(s),l=n.count;for(let u=0;u<l;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Qh(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends ZA{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ox extends Jn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class JA extends Jn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nu=class nu{constructor(e,t,n,s,o,l,u,d,f,p,g,m,x,y,M,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,l,u,d,f,p,g,m,x,y,M,S)}set(e,t,n,s,o,l,u,d,f,p,g,m,x,y,M,S){const A=this.elements;return A[0]=e,A[4]=t,A[8]=n,A[12]=s,A[1]=o,A[5]=l,A[9]=u,A[13]=d,A[2]=f,A[6]=p,A[10]=g,A[14]=m,A[3]=x,A[7]=y,A[11]=M,A[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nu().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Aa.setFromMatrixColumn(e,0).length(),o=1/Aa.setFromMatrixColumn(e,1).length(),l=1/Aa.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,o=e.z,l=Math.cos(n),u=Math.sin(n),d=Math.cos(s),f=Math.sin(s),p=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const m=l*p,x=l*g,y=u*p,M=u*g;t[0]=d*p,t[4]=-d*g,t[8]=f,t[1]=x+y*f,t[5]=m-M*f,t[9]=-u*d,t[2]=M-m*f,t[6]=y+x*f,t[10]=l*d}else if(e.order==="YXZ"){const m=d*p,x=d*g,y=f*p,M=f*g;t[0]=m+M*u,t[4]=y*u-x,t[8]=l*f,t[1]=l*g,t[5]=l*p,t[9]=-u,t[2]=x*u-y,t[6]=M+m*u,t[10]=l*d}else if(e.order==="ZXY"){const m=d*p,x=d*g,y=f*p,M=f*g;t[0]=m-M*u,t[4]=-l*g,t[8]=y+x*u,t[1]=x+y*u,t[5]=l*p,t[9]=M-m*u,t[2]=-l*f,t[6]=u,t[10]=l*d}else if(e.order==="ZYX"){const m=l*p,x=l*g,y=u*p,M=u*g;t[0]=d*p,t[4]=y*f-x,t[8]=m*f+M,t[1]=d*g,t[5]=M*f+m,t[9]=x*f-y,t[2]=-f,t[6]=u*d,t[10]=l*d}else if(e.order==="YZX"){const m=l*d,x=l*f,y=u*d,M=u*f;t[0]=d*p,t[4]=M-m*g,t[8]=y*g+x,t[1]=g,t[5]=l*p,t[9]=-u*p,t[2]=-f*p,t[6]=x*g+y,t[10]=m-M*g}else if(e.order==="XZY"){const m=l*d,x=l*f,y=u*d,M=u*f;t[0]=d*p,t[4]=-g,t[8]=f*p,t[1]=m*g+M,t[5]=l*p,t[9]=x*g-y,t[2]=y*g-x,t[6]=u*p,t[10]=M*g+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ey,e,ty)}lookAt(e,t,n){const s=this.elements;return Si.subVectors(e,t),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),Jr.crossVectors(n,Si),Jr.lengthSq()===0&&(Math.abs(n.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),Jr.crossVectors(n,Si)),Jr.normalize(),cc.crossVectors(Si,Jr),s[0]=Jr.x,s[4]=cc.x,s[8]=Si.x,s[1]=Jr.y,s[5]=cc.y,s[9]=Si.y,s[2]=Jr.z,s[6]=cc.z,s[10]=Si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,l=n[0],u=n[4],d=n[8],f=n[12],p=n[1],g=n[5],m=n[9],x=n[13],y=n[2],M=n[6],S=n[10],A=n[14],T=n[3],P=n[7],C=n[11],b=n[15],I=s[0],R=s[4],E=s[8],F=s[12],B=s[1],N=s[5],U=s[9],W=s[13],X=s[2],H=s[6],j=s[10],q=s[14],Y=s[3],K=s[7],ne=s[11],k=s[15];return o[0]=l*I+u*B+d*X+f*Y,o[4]=l*R+u*N+d*H+f*K,o[8]=l*E+u*U+d*j+f*ne,o[12]=l*F+u*W+d*q+f*k,o[1]=p*I+g*B+m*X+x*Y,o[5]=p*R+g*N+m*H+x*K,o[9]=p*E+g*U+m*j+x*ne,o[13]=p*F+g*W+m*q+x*k,o[2]=y*I+M*B+S*X+A*Y,o[6]=y*R+M*N+S*H+A*K,o[10]=y*E+M*U+S*j+A*ne,o[14]=y*F+M*W+S*q+A*k,o[3]=T*I+P*B+C*X+b*Y,o[7]=T*R+P*N+C*H+b*K,o[11]=T*E+P*U+C*j+b*ne,o[15]=T*F+P*W+C*q+b*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[12],l=e[1],u=e[5],d=e[9],f=e[13],p=e[2],g=e[6],m=e[10],x=e[14],y=e[3],M=e[7],S=e[11],A=e[15],T=d*x-f*m,P=u*x-f*g,C=u*m-d*g,b=l*x-f*p,I=l*m-d*p,R=l*g-u*p;return t*(M*T-S*P+A*C)-n*(y*T-S*b+A*I)+s*(y*P-M*b+A*R)-o*(y*C-M*I+S*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[1],l=e[5],u=e[9],d=e[2],f=e[6],p=e[10];return t*(l*p-u*f)-n*(o*p-u*d)+s*(o*f-l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],l=e[4],u=e[5],d=e[6],f=e[7],p=e[8],g=e[9],m=e[10],x=e[11],y=e[12],M=e[13],S=e[14],A=e[15],T=t*u-n*l,P=t*d-s*l,C=t*f-o*l,b=n*d-s*u,I=n*f-o*u,R=s*f-o*d,E=p*M-g*y,F=p*S-m*y,B=p*A-x*y,N=g*S-m*M,U=g*A-x*M,W=m*A-x*S,X=T*W-P*U+C*N+b*B-I*F+R*E;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/X;return e[0]=(u*W-d*U+f*N)*H,e[1]=(s*U-n*W-o*N)*H,e[2]=(M*R-S*I+A*b)*H,e[3]=(m*I-g*R-x*b)*H,e[4]=(d*B-l*W-f*F)*H,e[5]=(t*W-s*B+o*F)*H,e[6]=(S*C-y*R-A*P)*H,e[7]=(p*R-m*C+x*P)*H,e[8]=(l*U-u*B+f*E)*H,e[9]=(n*B-t*U-o*E)*H,e[10]=(y*I-M*C+A*T)*H,e[11]=(g*C-p*I-x*T)*H,e[12]=(u*F-l*N-d*E)*H,e[13]=(t*N-n*F+s*E)*H,e[14]=(M*P-y*b-S*T)*H,e[15]=(p*b-g*P+m*T)*H,this}scale(e){const t=this.elements,n=e.x,s=e.y,o=e.z;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),o=1-n,l=e.x,u=e.y,d=e.z,f=o*l,p=o*u;return this.set(f*l+n,f*u-s*d,f*d+s*u,0,f*u+s*d,p*u+n,p*d-s*l,0,f*d-s*u,p*d+s*l,o*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,o,l){return this.set(1,n,o,0,e,1,l,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,o=t._x,l=t._y,u=t._z,d=t._w,f=o+o,p=l+l,g=u+u,m=o*f,x=o*p,y=o*g,M=l*p,S=l*g,A=u*g,T=d*f,P=d*p,C=d*g,b=n.x,I=n.y,R=n.z;return s[0]=(1-(M+A))*b,s[1]=(x+C)*b,s[2]=(y-P)*b,s[3]=0,s[4]=(x-C)*I,s[5]=(1-(m+A))*I,s[6]=(S+T)*I,s[7]=0,s[8]=(y+P)*R,s[9]=(S-T)*R,s[10]=(1-(m+M))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const o=this.determinantAffine();if(o===0)return n.set(1,1,1),t.identity(),this;let l=Aa.set(s[0],s[1],s[2]).length();const u=Aa.set(s[4],s[5],s[6]).length(),d=Aa.set(s[8],s[9],s[10]).length();o<0&&(l=-l),Xi.copy(this);const f=1/l,p=1/u,g=1/d;return Xi.elements[0]*=f,Xi.elements[1]*=f,Xi.elements[2]*=f,Xi.elements[4]*=p,Xi.elements[5]*=p,Xi.elements[6]*=p,Xi.elements[8]*=g,Xi.elements[9]*=g,Xi.elements[10]*=g,t.setFromRotationMatrix(Xi),n.x=l,n.y=u,n.z=d,this}makePerspective(e,t,n,s,o,l,u=rr,d=!1){const f=this.elements,p=2*o/(t-e),g=2*o/(n-s),m=(t+e)/(t-e),x=(n+s)/(n-s);let y,M;if(d)y=o/(l-o),M=l*o/(l-o);else if(u===rr)y=-(l+o)/(l-o),M=-2*l*o/(l-o);else if(u===Kc)y=-l/(l-o),M=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=p,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=g,f[9]=x,f[13]=0,f[2]=0,f[6]=0,f[10]=y,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,s,o,l,u=rr,d=!1){const f=this.elements,p=2/(t-e),g=2/(n-s),m=-(t+e)/(t-e),x=-(n+s)/(n-s);let y,M;if(d)y=1/(l-o),M=l/(l-o);else if(u===rr)y=-2/(l-o),M=-(l+o)/(l-o);else if(u===Kc)y=-1/(l-o),M=-o/(l-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=p,f[4]=0,f[8]=0,f[12]=m,f[1]=0,f[5]=g,f[9]=0,f[13]=x,f[2]=0,f[6]=0,f[10]=y,f[14]=M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};nu.prototype.isMatrix4=!0;let gt=nu;const Aa=new z,Xi=new gt,ey=new z(0,0,0),ty=new z(1,1,1),Jr=new z,cc=new z,Si=new z,i0=new gt,r0=new en;class Gs{constructor(e=0,t=0,n=0,s=Gs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,o=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],g=s[2],m=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-Ct(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(m,x),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,x),this._y=0);break;default:pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return i0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(i0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return r0.setFromEuler(this),this.setFromQuaternion(r0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gs.DEFAULT_ORDER="XYZ";let kx=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ny=0;const s0=new z,ya=new en,Ar=new gt,uc=new z,Bo=new z,iy=new z,ry=new en,a0=new z(1,0,0),o0=new z(0,1,0),l0=new z(0,0,1),c0={type:"added"},sy={type:"removed"},_a={type:"childadded",child:null},nf={type:"childremoved",child:null};class En extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=nl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new z,t=new Gs,n=new en,s=new z(1,1,1);function o(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new ft}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ya.setFromAxisAngle(e,t),this.quaternion.multiply(ya),this}rotateOnWorldAxis(e,t){return ya.setFromAxisAngle(e,t),this.quaternion.premultiply(ya),this}rotateX(e){return this.rotateOnAxis(a0,e)}rotateY(e){return this.rotateOnAxis(o0,e)}rotateZ(e){return this.rotateOnAxis(l0,e)}translateOnAxis(e,t){return s0.copy(e).applyQuaternion(this.quaternion),this.position.add(s0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(a0,e)}translateY(e){return this.translateOnAxis(o0,e)}translateZ(e){return this.translateOnAxis(l0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ar.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?uc.copy(e):uc.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ar.lookAt(Bo,uc,this.up):Ar.lookAt(uc,Bo,this.up),this.quaternion.setFromRotationMatrix(Ar),s&&(Ar.extractRotation(s.matrixWorld),ya.setFromRotationMatrix(Ar),this.quaternion.premultiply(ya.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(c0),_a.child=e,this.dispatchEvent(_a),_a.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sy),nf.child=e,this.dispatchEvent(nf),nf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ar.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ar.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ar),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(c0),_a.child=e,this.dispatchEvent(_a),_a.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let o=0,l=s.length;o<l;o++)s[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,iy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,ry,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*n-o[8]*s,o[13]+=n-o[1]*t-o[5]*n-o[9]*s,o[14]+=s-o[2]*t-o[6]*n-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(u=>({...u})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let f=0,p=d.length;f<p;f++){const g=d[f];o(e.shapes,g)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,f=this.material.length;d<f;d++)u.push(o(e.materials,this.material[d]));s.material=u}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];s.animations.push(o(e.animations,d))}}if(t){const u=l(e.geometries),d=l(e.materials),f=l(e.textures),p=l(e.images),g=l(e.shapes),m=l(e.skeletons),x=l(e.animations),y=l(e.nodes);u.length>0&&(n.geometries=u),d.length>0&&(n.materials=d),f.length>0&&(n.textures=f),p.length>0&&(n.images=p),g.length>0&&(n.shapes=g),m.length>0&&(n.skeletons=m),x.length>0&&(n.animations=x),y.length>0&&(n.nodes=y)}return n.object=s,n;function l(u){const d=[];for(const f in u){const p=u[f];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}En.DEFAULT_UP=new z(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class dc extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ay={type:"move"};class rf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,o=null,l=null;const u=this._targetRay,d=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){l=!0;for(const M of e.hand.values()){const S=t.getJointPose(M,n),A=this._getHandJoint(f,M);S!==null&&(A.matrix.fromArray(S.transform.matrix),A.matrix.decompose(A.position,A.rotation,A.scale),A.matrixWorldNeedsUpdate=!0,A.jointRadius=S.radius),A.visible=S!==null}const p=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],m=p.position.distanceTo(g.position),x=.02,y=.005;f.inputState.pinching&&m>x+y?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&m<=x-y&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));u!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(ay)))}return u!==null&&(u.visible=s!==null),d!==null&&(d.visible=o!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new dc;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const zx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},fc={h:0,s:0,l:0};function sf(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Dt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Rt.workingColorSpace){if(e=qA(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,l=2*n-o;this.r=sf(l,o,e+1/3),this.g=sf(l,o,e),this.b=sf(l,o,e-1/3)}return Rt.colorSpaceToWorking(this,s),this}setStyle(e,t=Di){function n(o){o!==void 0&&parseFloat(o)<1&&pt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const l=s[1],u=s[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:pt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(o,16),t);pt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Di){const n=zx[e.toLowerCase()];return n!==void 0?this.setHex(n,t):pt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}copyLinearToSRGB(e){return this.r=ka(e.r),this.g=ka(e.g),this.b=ka(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Di){return Rt.workingToColorSpace(Gn.copy(this),e),Math.round(Ct(Gn.r*255,0,255))*65536+Math.round(Ct(Gn.g*255,0,255))*256+Math.round(Ct(Gn.b*255,0,255))}getHexString(e=Di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(Gn.copy(this),t);const n=Gn.r,s=Gn.g,o=Gn.b,l=Math.max(n,s,o),u=Math.min(n,s,o);let d,f;const p=(u+l)/2;if(u===l)d=0,f=0;else{const g=l-u;switch(f=p<=.5?g/(l+u):g/(2-l-u),l){case n:d=(s-o)/g+(s<o?6:0);break;case s:d=(o-n)/g+2;break;case o:d=(n-s)/g+4;break}d/=6}return e.h=d,e.s=f,e.l=p,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(Gn.copy(this),t),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=Di){Rt.workingToColorSpace(Gn.copy(this),e);const t=Gn.r,n=Gn.g,s=Gn.b;return e!==Di?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(es),this.setHSL(es.h+e,es.s+t,es.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(es),e.getHSL(fc);const n=$d(es.h,fc.h,t),s=$d(es.s,fc.s,t),o=$d(es.l,fc.l,t);return this.setHSL(n,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*s,this.g=o[1]*t+o[4]*n+o[7]*s,this.b=o[2]*t+o[5]*n+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new Dt;Dt.NAMES=zx;class oy extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gs,this.environmentIntensity=1,this.environmentRotation=new Gs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Qi=new z,yr=new z,af=new z,_r=new z,Ma=new z,Ea=new z,u0=new z,of=new z,lf=new z,cf=new z,uf=new tn,df=new tn,ff=new tn;class Yi{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Qi.subVectors(e,t),s.cross(Qi);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,n,s,o){Qi.subVectors(s,t),yr.subVectors(n,t),af.subVectors(e,t);const l=Qi.dot(Qi),u=Qi.dot(yr),d=Qi.dot(af),f=yr.dot(yr),p=yr.dot(af),g=l*f-u*u;if(g===0)return o.set(0,0,0),null;const m=1/g,x=(f*d-u*p)*m,y=(l*p-u*d)*m;return o.set(1-x-y,y,x)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,_r)===null?!1:_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(e,t,n,s,o,l,u,d){return this.getBarycoord(e,t,n,s,_r)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(o,_r.x),d.addScaledVector(l,_r.y),d.addScaledVector(u,_r.z),d)}static getInterpolatedAttribute(e,t,n,s,o,l){return uf.setScalar(0),df.setScalar(0),ff.setScalar(0),uf.fromBufferAttribute(e,t),df.fromBufferAttribute(e,n),ff.fromBufferAttribute(e,s),l.setScalar(0),l.addScaledVector(uf,o.x),l.addScaledVector(df,o.y),l.addScaledVector(ff,o.z),l}static isFrontFacing(e,t,n,s){return Qi.subVectors(n,t),yr.subVectors(e,t),Qi.cross(yr).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qi.subVectors(this.c,this.b),yr.subVectors(this.a,this.b),Qi.cross(yr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,o){return Yi.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return Yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,o=this.c;let l,u;Ma.subVectors(s,n),Ea.subVectors(o,n),of.subVectors(e,n);const d=Ma.dot(of),f=Ea.dot(of);if(d<=0&&f<=0)return t.copy(n);lf.subVectors(e,s);const p=Ma.dot(lf),g=Ea.dot(lf);if(p>=0&&g<=p)return t.copy(s);const m=d*g-p*f;if(m<=0&&d>=0&&p<=0)return l=d/(d-p),t.copy(n).addScaledVector(Ma,l);cf.subVectors(e,o);const x=Ma.dot(cf),y=Ea.dot(cf);if(y>=0&&x<=y)return t.copy(o);const M=x*f-d*y;if(M<=0&&f>=0&&y<=0)return u=f/(f-y),t.copy(n).addScaledVector(Ea,u);const S=p*y-x*g;if(S<=0&&g-p>=0&&x-y>=0)return u0.subVectors(o,s),u=(g-p)/(g-p+(x-y)),t.copy(s).addScaledVector(u0,u);const A=1/(S+M+m);return l=M*A,u=m*A,t.copy(n).addScaledVector(Ma,l).addScaledVector(Ea,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class sr{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let l=0,u=o.count;l<u;l++)e.isMesh===!0?e.getVertexPosition(l,qi):qi.fromBufferAttribute(o,l),qi.applyMatrix4(e.matrixWorld),this.expandByPoint(qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hc.copy(n.boundingBox)),hc.applyMatrix4(e.matrixWorld),this.union(hc)}const s=e.children;for(let o=0,l=s.length;o<l;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),pc.subVectors(this.max,No),Ca.subVectors(e.a,No),Ta.subVectors(e.b,No),wa.subVectors(e.c,No),ts.subVectors(Ta,Ca),ns.subVectors(wa,Ta),Is.subVectors(Ca,wa);let t=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-Is.z,Is.y,ts.z,0,-ts.x,ns.z,0,-ns.x,Is.z,0,-Is.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-Is.y,Is.x,0];return!hf(t,Ca,Ta,wa,pc)||(t=[1,0,0,0,1,0,0,0,1],!hf(t,Ca,Ta,wa,pc))?!1:(mc.crossVectors(ts,ns),t=[mc.x,mc.y,mc.z],hf(t,Ca,Ta,wa,pc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mr=[new z,new z,new z,new z,new z,new z,new z,new z],qi=new z,hc=new sr,Ca=new z,Ta=new z,wa=new z,ts=new z,ns=new z,Is=new z,No=new z,pc=new z,mc=new z,Ps=new z;function hf(a,e,t,n,s){for(let o=0,l=a.length-3;o<=l;o+=3){Ps.fromArray(a,o);const u=s.x*Math.abs(Ps.x)+s.y*Math.abs(Ps.y)+s.z*Math.abs(Ps.z),d=e.dot(Ps),f=t.dot(Ps),p=n.dot(Ps);if(Math.max(-Math.max(d,f,p),Math.min(d,f,p))>u)return!1}return!0}const br=ly();function ly(){const a=new ArrayBuffer(4),e=new Float32Array(a),t=new Uint32Array(a),n=new Uint32Array(512),s=new Uint32Array(512);for(let d=0;d<256;++d){const f=d-127;f<-27?(n[d]=0,n[d|256]=32768,s[d]=24,s[d|256]=24):f<-14?(n[d]=1024>>-f-14,n[d|256]=1024>>-f-14|32768,s[d]=-f-1,s[d|256]=-f-1):f<=15?(n[d]=f+15<<10,n[d|256]=f+15<<10|32768,s[d]=13,s[d|256]=13):f<128?(n[d]=31744,n[d|256]=64512,s[d]=24,s[d|256]=24):(n[d]=31744,n[d|256]=64512,s[d]=13,s[d|256]=13)}const o=new Uint32Array(2048),l=new Uint32Array(64),u=new Uint32Array(64);for(let d=1;d<1024;++d){let f=d<<13,p=0;for(;(f&8388608)===0;)f<<=1,p-=8388608;f&=-8388609,p+=947912704,o[d]=f|p}for(let d=1024;d<2048;++d)o[d]=939524096+(d-1024<<13);for(let d=1;d<31;++d)l[d]=d<<23;l[31]=1199570944,l[32]=2147483648;for(let d=33;d<63;++d)l[d]=2147483648+(d-32<<23);l[63]=3347054592;for(let d=1;d<64;++d)d!==32&&(u[d]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:o,exponentTable:l,offsetTable:u}}function cy(a){Math.abs(a)>65504&&pt("DataUtils.toHalfFloat(): Value out of range."),a=Ct(a,-65504,65504),br.floatView[0]=a;const e=br.uint32View[0],t=e>>23&511;return br.baseTable[t]+((e&8388607)>>br.shiftTable[t])}function uy(a){const e=a>>10;return br.uint32View[0]=br.mantissaTable[br.offsetTable[e]+(a&1023)]+br.exponentTable[e],br.floatView[0]}class Jo{static toHalfFloat(e){return cy(e)}static fromHalfFloat(e){return uy(e)}}const An=new z,gc=new qe;let dy=0;class Ni extends ds{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kg,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gc.fromBufferAttribute(this,t),gc.applyMatrix3(e),this.setXY(t,gc.x,gc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix3(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Lo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ui(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Lo(t,this.array)),t}setX(e,t){return this.normalized&&(t=ui(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Lo(t,this.array)),t}setY(e,t){return this.normalized&&(t=ui(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Lo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ui(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Lo(t,this.array)),t}setW(e,t){return this.normalized&&(t=ui(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ui(t,this.array),n=ui(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ui(t,this.array),n=ui(n,this.array),s=ui(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=ui(t,this.array),n=ui(n,this.array),s=ui(s,this.array),o=ui(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kg&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Hx extends Ni{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vx extends Ni{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ei extends Ni{constructor(e,t,n){super(new Float32Array(e),t,n)}}const fy=new sr,Uo=new z,pf=new z;class qh{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):fy.setFromPoints(e).getCenter(n);let s=0;for(let o=0,l=e.length;o<l;o++)s=Math.max(s,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const t=Uo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Uo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(pf)),this.expandByPoint(Uo.copy(e.center).sub(pf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let hy=0;const Ii=new gt,mf=new En,ba=new z,Ai=new sr,Oo=new sr,In=new z;class pi extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=nl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(GA(e)?Vx:Hx)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ft().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ii.makeRotationFromQuaternion(e),this.applyMatrix4(Ii),this}rotateX(e){return Ii.makeRotationX(e),this.applyMatrix4(Ii),this}rotateY(e){return Ii.makeRotationY(e),this.applyMatrix4(Ii),this}rotateZ(e){return Ii.makeRotationZ(e),this.applyMatrix4(Ii),this}translate(e,t,n){return Ii.makeTranslation(e,t,n),this.applyMatrix4(Ii),this}scale(e,t,n){return Ii.makeScale(e,t,n),this.applyMatrix4(Ii),this}lookAt(e){return mf.lookAt(e),mf.updateMatrix(),this.applyMatrix4(mf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ba).negate(),this.translate(ba.x,ba.y,ba.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,o=e.length;s<o;s++){const l=e[s];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new ei(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];Ai.setFromBufferAttribute(o),this.morphTargetsRelative?(In.addVectors(this.boundingBox.min,Ai.min),this.boundingBox.expandByPoint(In),In.addVectors(this.boundingBox.max,Ai.max),this.boundingBox.expandByPoint(In)):(this.boundingBox.expandByPoint(Ai.min),this.boundingBox.expandByPoint(Ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Ai.setFromBufferAttribute(e),t)for(let o=0,l=t.length;o<l;o++){const u=t[o];Oo.setFromBufferAttribute(u),this.morphTargetsRelative?(In.addVectors(Ai.min,Oo.min),Ai.expandByPoint(In),In.addVectors(Ai.max,Oo.max),Ai.expandByPoint(In)):(Ai.expandByPoint(Oo.min),Ai.expandByPoint(Oo.max))}Ai.getCenter(n);let s=0;for(let o=0,l=e.count;o<l;o++)In.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared(In));if(t)for(let o=0,l=t.length;o<l;o++){const u=t[o],d=this.morphTargetsRelative;for(let f=0,p=u.count;f<p;f++)In.fromBufferAttribute(u,f),d&&(ba.fromBufferAttribute(e,f),In.add(ba)),s=Math.max(s,n.distanceToSquared(In))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,o=t.uv;let l=this.getAttribute("tangent");(l===void 0||l.count!==n.count)&&(l=new Ni(new Float32Array(4*n.count),4),this.setAttribute("tangent",l));const u=[],d=[];for(let E=0;E<n.count;E++)u[E]=new z,d[E]=new z;const f=new z,p=new z,g=new z,m=new qe,x=new qe,y=new qe,M=new z,S=new z;function A(E,F,B){f.fromBufferAttribute(n,E),p.fromBufferAttribute(n,F),g.fromBufferAttribute(n,B),m.fromBufferAttribute(o,E),x.fromBufferAttribute(o,F),y.fromBufferAttribute(o,B),p.sub(f),g.sub(f),x.sub(m),y.sub(m);const N=1/(x.x*y.y-y.x*x.y);isFinite(N)&&(M.copy(p).multiplyScalar(y.y).addScaledVector(g,-x.y).multiplyScalar(N),S.copy(g).multiplyScalar(x.x).addScaledVector(p,-y.x).multiplyScalar(N),u[E].add(M),u[F].add(M),u[B].add(M),d[E].add(S),d[F].add(S),d[B].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let E=0,F=T.length;E<F;++E){const B=T[E],N=B.start,U=B.count;for(let W=N,X=N+U;W<X;W+=3)A(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const P=new z,C=new z,b=new z,I=new z;function R(E){b.fromBufferAttribute(s,E),I.copy(b);const F=u[E];P.copy(F),P.sub(b.multiplyScalar(b.dot(F))).normalize(),C.crossVectors(I,F);const N=C.dot(d[E])<0?-1:1;l.setXYZW(E,P.x,P.y,P.z,N)}for(let E=0,F=T.length;E<F;++E){const B=T[E],N=B.start,U=B.count;for(let W=N,X=N+U;W<X;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ni(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,x=n.count;m<x;m++)n.setXYZ(m,0,0,0);const s=new z,o=new z,l=new z,u=new z,d=new z,f=new z,p=new z,g=new z;if(e)for(let m=0,x=e.count;m<x;m+=3){const y=e.getX(m+0),M=e.getX(m+1),S=e.getX(m+2);s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,S),p.subVectors(l,o),g.subVectors(s,o),p.cross(g),u.fromBufferAttribute(n,y),d.fromBufferAttribute(n,M),f.fromBufferAttribute(n,S),u.add(p),d.add(p),f.add(p),n.setXYZ(y,u.x,u.y,u.z),n.setXYZ(M,d.x,d.y,d.z),n.setXYZ(S,f.x,f.y,f.z)}else for(let m=0,x=t.count;m<x;m+=3)s.fromBufferAttribute(t,m+0),o.fromBufferAttribute(t,m+1),l.fromBufferAttribute(t,m+2),p.subVectors(l,o),g.subVectors(s,o),p.cross(g),n.setXYZ(m+0,p.x,p.y,p.z),n.setXYZ(m+1,p.x,p.y,p.z),n.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)In.fromBufferAttribute(e,t),In.normalize(),e.setXYZ(t,In.x,In.y,In.z)}toNonIndexed(){function e(u,d){const f=u.array,p=u.itemSize,g=u.normalized,m=new f.constructor(d.length*p);let x=0,y=0;for(let M=0,S=d.length;M<S;M++){u.isInterleavedBufferAttribute?x=d[M]*u.data.stride+u.offset:x=d[M]*p;for(let A=0;A<p;A++)m[y++]=f[x++]}return new Ni(m,p,g)}if(this.index===null)return pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pi,n=this.index.array,s=this.attributes;for(const u in s){const d=s[u],f=e(d,n);t.setAttribute(u,f)}const o=this.morphAttributes;for(const u in o){const d=[],f=o[u];for(let p=0,g=f.length;p<g;p++){const m=f[p],x=e(m,n);d.push(x)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,d=l.length;u<d;u++){const f=l[u];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const f in d)d[f]!==void 0&&(e[f]=d[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const f=n[d];e.data.attributes[d]=f.toJSON(e.data)}const s={};let o=!1;for(const d in this.morphAttributes){const f=this.morphAttributes[d],p=[];for(let g=0,m=f.length;g<m;g++){const x=f[g];p.push(x.toJSON(e.data))}p.length>0&&(s[d]=p,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const f in s){const p=s[f];this.setAttribute(f,p.clone(t))}const o=e.morphAttributes;for(const f in o){const p=[],g=o[f];for(let m=0,x=g.length;m<x;m++)p.push(g[m].clone(t));this.morphAttributes[f]=p}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let f=0,p=l.length;f<p;f++){const g=l[f];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let py=0;class ou extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=nl(),this.name="",this.type="Material",this.blending=us,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jo,this.blendDst=Ko,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=va,this.stencilZFail=va,this.stencilZPass=va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){pt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){pt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(n.blending=this.blending),this.side!==lr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jo&&(n.blendSrc=this.blendSrc),this.blendDst!==Ko&&(n.blendDst=this.blendDst),this.blendEquation!==Ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jg&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==va&&(n.stencilFail=this.stencilFail),this.stencilZFail!==va&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==va&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const l=[];for(const u in o){const d=o[u];delete d.metadata,l.push(d)}return l}if(t){const o=s(e.textures),l=s(e.images);o.length>0&&(n.textures=o),l.length>0&&(n.images=l)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Dt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new qe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Er=new z,gf=new z,xc=new z,is=new z,xf=new z,vc=new z,vf=new z;let Gx=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Er)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Er.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Er.copy(this.origin).addScaledVector(this.direction,t),Er.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){gf.copy(e).add(t).multiplyScalar(.5),xc.copy(t).sub(e).normalize(),is.copy(this.origin).sub(gf);const o=e.distanceTo(t)*.5,l=-this.direction.dot(xc),u=is.dot(this.direction),d=-is.dot(xc),f=is.lengthSq(),p=Math.abs(1-l*l);let g,m,x,y;if(p>0)if(g=l*d-u,m=l*u-d,y=o*p,g>=0)if(m>=-y)if(m<=y){const M=1/p;g*=M,m*=M,x=g*(g+l*m+2*u)+m*(l*g+m+2*d)+f}else m=o,g=Math.max(0,-(l*m+u)),x=-g*g+m*(m+2*d)+f;else m=-o,g=Math.max(0,-(l*m+u)),x=-g*g+m*(m+2*d)+f;else m<=-y?(g=Math.max(0,-(-l*o+u)),m=g>0?-o:Math.min(Math.max(-o,-d),o),x=-g*g+m*(m+2*d)+f):m<=y?(g=0,m=Math.min(Math.max(-o,-d),o),x=m*(m+2*d)+f):(g=Math.max(0,-(l*o+u)),m=g>0?o:Math.min(Math.max(-o,-d),o),x=-g*g+m*(m+2*d)+f);else m=l>0?-o:o,g=Math.max(0,-(l*m+u)),x=-g*g+m*(m+2*d)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(gf).addScaledVector(xc,m),x}intersectSphere(e,t){Er.subVectors(e.center,this.origin);const n=Er.dot(this.direction),s=Er.dot(Er)-n*n,o=e.radius*e.radius;if(s>o)return null;const l=Math.sqrt(o-s),u=n-l,d=n+l;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,o,l,u,d;const f=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,m=this.origin;return f>=0?(n=(e.min.x-m.x)*f,s=(e.max.x-m.x)*f):(n=(e.max.x-m.x)*f,s=(e.min.x-m.x)*f),p>=0?(o=(e.min.y-m.y)*p,l=(e.max.y-m.y)*p):(o=(e.max.y-m.y)*p,l=(e.min.y-m.y)*p),n>l||o>s||((o>n||isNaN(n))&&(n=o),(l<s||isNaN(s))&&(s=l),g>=0?(u=(e.min.z-m.z)*g,d=(e.max.z-m.z)*g):(u=(e.max.z-m.z)*g,d=(e.min.z-m.z)*g),n>d||u>s)||((u>n||n!==n)&&(n=u),(d<s||s!==s)&&(s=d),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Er)!==null}intersectTriangle(e,t,n,s,o){xf.subVectors(t,e),vc.subVectors(n,e),vf.crossVectors(xf,vc);let l=this.direction.dot(vf),u;if(l>0){if(s)return null;u=1}else if(l<0)u=-1,l=-l;else return null;is.subVectors(this.origin,e);const d=u*this.direction.dot(vc.crossVectors(is,vc));if(d<0)return null;const f=u*this.direction.dot(xf.cross(is));if(f<0||d+f>l)return null;const p=-u*is.dot(vf);return p<0?null:this.at(p/l,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Ws extends ou{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gs,this.combine=Ax,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const d0=new gt,Ds=new Gx,Sc=new qh,f0=new z,Ac=new z,yc=new z,_c=new z,Sf=new z,Mc=new z,h0=new z,Ec=new z;class mn extends En{constructor(e=new pi,t=new Ws){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(o&&u){Mc.set(0,0,0);for(let d=0,f=o.length;d<f;d++){const p=u[d],g=o[d];p!==0&&(Sf.fromBufferAttribute(g,e),l?Mc.addScaledVector(Sf,p):Mc.addScaledVector(Sf.sub(t),p))}t.add(Mc)}return t}raycast(e,t){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sc.copy(n.boundingSphere),Sc.applyMatrix4(o),Ds.copy(e.ray).recast(e.near),!(Sc.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(Sc,f0)===null||Ds.origin.distanceToSquared(f0)>(e.far-e.near)**2))&&(d0.copy(o).invert(),Ds.copy(e.ray).applyMatrix4(d0),!(n.boundingBox!==null&&Ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ds)))}_computeIntersections(e,t,n){let s;const o=this.geometry,l=this.material,u=o.index,d=o.attributes.position,f=o.attributes.uv,p=o.attributes.uv1,g=o.attributes.normal,m=o.groups,x=o.drawRange;if(u!==null)if(Array.isArray(l))for(let y=0,M=m.length;y<M;y++){const S=m[y],A=l[S.materialIndex],T=Math.max(S.start,x.start),P=Math.min(u.count,Math.min(S.start+S.count,x.start+x.count));for(let C=T,b=P;C<b;C+=3){const I=u.getX(C),R=u.getX(C+1),E=u.getX(C+2);s=Cc(this,A,e,n,f,p,g,I,R,E),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const y=Math.max(0,x.start),M=Math.min(u.count,x.start+x.count);for(let S=y,A=M;S<A;S+=3){const T=u.getX(S),P=u.getX(S+1),C=u.getX(S+2);s=Cc(this,l,e,n,f,p,g,T,P,C),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(l))for(let y=0,M=m.length;y<M;y++){const S=m[y],A=l[S.materialIndex],T=Math.max(S.start,x.start),P=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let C=T,b=P;C<b;C+=3){const I=C,R=C+1,E=C+2;s=Cc(this,A,e,n,f,p,g,I,R,E),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const y=Math.max(0,x.start),M=Math.min(d.count,x.start+x.count);for(let S=y,A=M;S<A;S+=3){const T=S,P=S+1,C=S+2;s=Cc(this,l,e,n,f,p,g,T,P,C),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function my(a,e,t,n,s,o,l,u){let d;if(e.side===hi?d=n.intersectTriangle(l,o,s,!0,u):d=n.intersectTriangle(s,o,l,e.side===lr,u),d===null)return null;Ec.copy(u),Ec.applyMatrix4(a.matrixWorld);const f=t.ray.origin.distanceTo(Ec);return f<t.near||f>t.far?null:{distance:f,point:Ec.clone(),object:a}}function Cc(a,e,t,n,s,o,l,u,d,f){a.getVertexPosition(u,Ac),a.getVertexPosition(d,yc),a.getVertexPosition(f,_c);const p=my(a,e,t,n,Ac,yc,_c,h0);if(p){const g=new z;Yi.getBarycoord(h0,Ac,yc,_c,g),s&&(p.uv=Yi.getInterpolatedAttribute(s,u,d,f,g,new qe)),o&&(p.uv1=Yi.getInterpolatedAttribute(o,u,d,f,g,new qe)),l&&(p.normal=Yi.getInterpolatedAttribute(l,u,d,f,g,new z),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const m={a:u,b:d,c:f,normal:new z,materialIndex:0};Yi.getNormal(Ac,yc,_c,m.normal),p.face=m,p.barycoord=g}return p}class Tr extends Jn{constructor(e=null,t=1,n=1,s,o,l,u,d,f=Nn,p=Nn,g,m){super(null,l,u,d,f,p,s,o,g,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gy extends Ni{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Af=new z,xy=new z,vy=new ft;class as{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Af.subVectors(n,t).cross(xy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Af),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return n===!0&&(l<0||l>1)?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||vy.getNormalMatrix(e),s=this.coplanarPoint(Af).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fs=new qh,Sy=new qe(.5,.5),Tc=new z;class Wx{constructor(e=new as,t=new as,n=new as,s=new as,o=new as,l=new as){this.planes=[e,t,n,s,o,l]}set(e,t,n,s,o,l){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(n),u[3].copy(s),u[4].copy(o),u[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=rr,n=!1){const s=this.planes,o=e.elements,l=o[0],u=o[1],d=o[2],f=o[3],p=o[4],g=o[5],m=o[6],x=o[7],y=o[8],M=o[9],S=o[10],A=o[11],T=o[12],P=o[13],C=o[14],b=o[15];if(s[0].setComponents(f-l,x-p,A-y,b-T).normalize(),s[1].setComponents(f+l,x+p,A+y,b+T).normalize(),s[2].setComponents(f+u,x+g,A+M,b+P).normalize(),s[3].setComponents(f-u,x-g,A-M,b-P).normalize(),n)s[4].setComponents(d,m,S,C).normalize(),s[5].setComponents(f-d,x-m,A-S,b-C).normalize();else if(s[4].setComponents(f-d,x-m,A-S,b-C).normalize(),t===rr)s[5].setComponents(f+d,x+m,A+S,b+C).normalize();else if(t===Kc)s[5].setComponents(d,m,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(e){Fs.center.set(0,0,0);const t=Sy.distanceTo(e.center);return Fs.radius=.7071067811865476+t,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Tc.x=s.normal.x>0?e.max.x:e.min.x,Tc.y=s.normal.y>0?e.max.y:e.min.y,Tc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Tc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xx extends Jn{constructor(e=[],t=Hs,n,s,o,l,u,d,f,p){super(e,t,n,s,o,l,u,d,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xs extends Jn{constructor(e,t,n=$n,s,o,l,u=Nn,d=Nn,f,p=ur,g=1){if(p!==ur&&p!==ks)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:g};super(m,s,o,l,u,d,p,n,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ay extends Xs{constructor(e,t=$n,n=Hs,s,o,l=Nn,u=Nn,d,f=ur){const p={width:e,height:e,depth:1},g=[p,p,p,p,p,p];super(e,e,t,n,s,o,l,u,d,f),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Qx extends Jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ja extends pi{constructor(e=1,t=1,n=1,s=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:o,depthSegments:l};const u=this;s=Math.floor(s),o=Math.floor(o),l=Math.floor(l);const d=[],f=[],p=[],g=[];let m=0,x=0;y("z","y","x",-1,-1,n,t,e,l,o,0),y("z","y","x",1,-1,n,t,-e,l,o,1),y("x","z","y",1,1,e,n,t,s,l,2),y("x","z","y",1,-1,e,n,-t,s,l,3),y("x","y","z",1,-1,e,t,n,s,o,4),y("x","y","z",-1,-1,e,t,-n,s,o,5),this.setIndex(d),this.setAttribute("position",new ei(f,3)),this.setAttribute("normal",new ei(p,3)),this.setAttribute("uv",new ei(g,2));function y(M,S,A,T,P,C,b,I,R,E,F){const B=C/R,N=b/E,U=C/2,W=b/2,X=I/2,H=R+1,j=E+1;let q=0,Y=0;const K=new z;for(let ne=0;ne<j;ne++){const k=ne*N-W;for(let te=0;te<H;te++){const Me=te*B-U;K[M]=Me*T,K[S]=k*P,K[A]=X,f.push(K.x,K.y,K.z),K[M]=0,K[S]=0,K[A]=I>0?1:-1,p.push(K.x,K.y,K.z),g.push(te/R),g.push(1-ne/E),q+=1}}for(let ne=0;ne<E;ne++)for(let k=0;k<R;k++){const te=m+k+H*ne,Me=m+k+H*(ne+1),Te=m+(k+1)+H*(ne+1),Re=m+(k+1)+H*ne;d.push(te,Me,Re),d.push(Me,Te,Re),Y+=6}u.addGroup(x,Y,F),x+=Y,m+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class el extends pi{constructor(e=1,t=1,n=1,s=32,o=1,l=!1,u=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:d};const f=this;s=Math.floor(s),o=Math.floor(o);const p=[],g=[],m=[],x=[];let y=0;const M=[],S=n/2;let A=0;T(),l===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(p),this.setAttribute("position",new ei(g,3)),this.setAttribute("normal",new ei(m,3)),this.setAttribute("uv",new ei(x,2));function T(){const C=new z,b=new z;let I=0;const R=(t-e)/n;for(let E=0;E<=o;E++){const F=[],B=E/o,N=B*(t-e)+e;for(let U=0;U<=s;U++){const W=U/s,X=W*d+u,H=Math.sin(X),j=Math.cos(X);b.x=N*H,b.y=-B*n+S,b.z=N*j,g.push(b.x,b.y,b.z),C.set(H,R,j).normalize(),m.push(C.x,C.y,C.z),x.push(W,1-B),F.push(y++)}M.push(F)}for(let E=0;E<s;E++)for(let F=0;F<o;F++){const B=M[F][E],N=M[F+1][E],U=M[F+1][E+1],W=M[F][E+1];(e>0||F!==0)&&(p.push(B,N,W),I+=3),(t>0||F!==o-1)&&(p.push(N,U,W),I+=3)}f.addGroup(A,I,0),A+=I}function P(C){const b=y,I=new qe,R=new z;let E=0;const F=C===!0?e:t,B=C===!0?1:-1;for(let U=1;U<=s;U++)g.push(0,S*B,0),m.push(0,B,0),x.push(.5,.5),y++;const N=y;for(let U=0;U<=s;U++){const X=U/s*d+u,H=Math.cos(X),j=Math.sin(X);R.x=F*j,R.y=S*B,R.z=F*H,g.push(R.x,R.y,R.z),m.push(0,B,0),I.x=H*.5+.5,I.y=j*.5*B+.5,x.push(I.x,I.y),y++}for(let U=0;U<s;U++){const W=b+U,X=N+U;C===!0?p.push(X,X+1,W):p.push(X+1,X,W),E+=3}f.addGroup(A,E,C===!0?1:2),A+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yh extends el{constructor(e=1,t=1,n=32,s=1,o=!1,l=0,u=Math.PI*2){super(0,e,t,n,s,o,l,u),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:l,thetaLength:u}}static fromJSON(e){return new Yh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qa extends pi{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const o=e/2,l=t/2,u=Math.floor(n),d=Math.floor(s),f=u+1,p=d+1,g=e/u,m=t/d,x=[],y=[],M=[],S=[];for(let A=0;A<p;A++){const T=A*m-l;for(let P=0;P<f;P++){const C=P*g-o;y.push(C,-T,0),M.push(0,0,1),S.push(P/u),S.push(1-A/d)}}for(let A=0;A<d;A++)for(let T=0;T<u;T++){const P=T+f*A,C=T+f*(A+1),b=T+1+f*(A+1),I=T+1+f*A;x.push(P,C,I),x.push(C,b,I)}this.setIndex(x),this.setAttribute("position",new ei(y,3)),this.setAttribute("normal",new ei(M,3)),this.setAttribute("uv",new ei(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zc extends pi{constructor(e=1,t=32,n=16,s=0,o=Math.PI*2,l=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:o,thetaStart:l,thetaLength:u},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const d=Math.min(l+u,Math.PI);let f=0;const p=[],g=new z,m=new z,x=[],y=[],M=[],S=[];for(let A=0;A<=n;A++){const T=[],P=A/n,C=l+P*u,b=e*Math.cos(C),I=Math.sqrt(e*e-b*b);let R=0;A===0&&l===0?R=.5/t:A===n&&d===Math.PI&&(R=-.5/t);for(let E=0;E<=t;E++){const F=E/t,B=s+F*o;g.x=-I*Math.cos(B),g.y=b,g.z=I*Math.sin(B),y.push(g.x,g.y,g.z),m.copy(g).normalize(),M.push(m.x,m.y,m.z),S.push(F+R,1-P),T.push(f++)}p.push(T)}for(let A=0;A<n;A++)for(let T=0;T<t;T++){const P=p[A][T+1],C=p[A][T],b=p[A+1][T],I=p[A+1][T+1];(A!==0||l>0)&&x.push(P,C,I),(A!==n-1||d<Math.PI)&&x.push(C,b,I)}this.setIndex(x),this.setAttribute("position",new ei(y,3)),this.setAttribute("normal",new ei(M,3)),this.setAttribute("uv",new ei(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function qa(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const s=a[t][n];if(p0(s))s.isRenderTargetTexture?(pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(p0(s[0])){const o=[];for(let l=0,u=s.length;l<u;l++)o[l]=s[l].clone();e[t][n]=o}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Yn(a){const e={};for(let t=0;t<a.length;t++){const n=qa(a[t]);for(const s in n)e[s]=n[s]}return e}function p0(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function yy(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function qx(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const _y={clone:qa,merge:Yn};var My=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ey=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends ou{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=My,this.fragmentShader=Ey,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qa(e.uniforms),this.uniformsGroups=yy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?t.uniforms[s]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[s]={type:"m4",value:l.toArray()}:t.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Dt().setHex(s.value);break;case"v2":this.uniforms[n].value=new qe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new tn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ft().fromArray(s.value);break;case"m4":this.uniforms[n].value=new gt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Cy extends ti{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ty extends ou{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=LA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wy extends ou{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wc=new z,bc=new en,tr=new z;let Yx=class extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=rr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wc,bc,tr),tr.x===1&&tr.y===1&&tr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,bc,tr.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(wc,bc,tr),tr.x===1&&tr.y===1&&tr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,bc,tr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const rs=new z,m0=new qe,g0=new qe;class Fi extends Yx{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wh*2*Math.atan(Math.tan(Wc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rs.x,rs.y).multiplyScalar(-e/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rs.x,rs.y).multiplyScalar(-e/rs.z)}getViewSize(e,t){return this.getViewBounds(e,m0,g0),t.subVectors(g0,m0)}setViewOffset(e,t,n,s,o,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wc*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const d=l.fullWidth,f=l.fullHeight;o+=l.offsetX*s/d,t-=l.offsetY*n/f,s*=l.width/d,n*=l.height/f}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class lu extends Yx{constructor(e=-1,t=1,n=1,s=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-e,l=n+e,u=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,l=o+f*this.view.width,u-=p*this.view.offsetY,d=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,l,u,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class by extends pi{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Ra=-90,Ia=1;class Ry extends En{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Fi(Ra,Ia,e,t);s.layers=this.layers,this.add(s);const o=new Fi(Ra,Ia,e,t);o.layers=this.layers,this.add(o);const l=new Fi(Ra,Ia,e,t);l.layers=this.layers,this.add(l);const u=new Fi(Ra,Ia,e,t);u.layers=this.layers,this.add(u);const d=new Fi(Ra,Ia,e,t);d.layers=this.layers,this.add(d);const f=new Fi(Ra,Ia,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,o,l,u,d]=t;for(const f of t)this.remove(f);if(e===rr)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Kc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,l,u,d,f,p]=this.children,g=e.getRenderTarget(),m=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,1,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,2,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(n,3,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(n,4,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(g,m,x),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class Iy extends Fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class x0{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ct(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const xp=class xp{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const o=this.elements;return o[0]=e,o[2]=t,o[1]=n,o[3]=s,this}};xp.prototype.isMatrix2=!0;let v0=xp;function S0(a,e,t,n){const s=Py(n);switch(t){case Fx:return a*e;case Bx:return a*e/s.components*s.byteLength;case au:return a*e/s.components*s.byteLength;case Vs:return a*e*2/s.components*s.byteLength;case Gh:return a*e*2/s.components*s.byteLength;case Lx:return a*e*3/s.components*s.byteLength;case Zn:return a*e*4/s.components*s.byteLength;case Ua:return a*e*4/s.components*s.byteLength;case zc:case Hc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Vc:case Gc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Zf:case eh:return Math.max(a,16)*Math.max(e,8)/4;case $f:case Jf:return Math.max(a,8)*Math.max(e,8)/2;case th:case nh:case rh:case sh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case ih:case Qc:case ah:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case oh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case lh:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case ch:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case uh:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case dh:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case fh:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case hh:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case ph:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case mh:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case gh:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case xh:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case vh:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Sh:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Ah:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case yh:case _h:case Mh:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Eh:case Ch:return Math.ceil(a/4)*Math.ceil(e/4)*8;case qc:case Th:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Py(a){switch(a){case yi:case Rx:return{byteLength:1,components:1};case $o:case Ix:case cr:return{byteLength:2,components:1};case Hh:case Vh:return{byteLength:2,components:4};case $n:case zh:case Bi:return{byteLength:4,components:1};case Px:case Dx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kh}}));typeof window<"u"&&(window.__THREE__?pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jx(){let a=null,e=!1,t=null,n=null;function s(o,l){t(o,l),n=a.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&a!==null&&(n=a.requestAnimationFrame(s),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){a=o}}}function Dy(a){const e=new WeakMap;function t(u,d){const f=u.array,p=u.usage,g=f.byteLength,m=a.createBuffer();a.bindBuffer(d,m),a.bufferData(d,f,p),u.onUploadCallback();let x;if(f instanceof Float32Array)x=a.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)x=a.HALF_FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?x=a.HALF_FLOAT:x=a.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=a.SHORT;else if(f instanceof Uint32Array)x=a.UNSIGNED_INT;else if(f instanceof Int32Array)x=a.INT;else if(f instanceof Int8Array)x=a.BYTE;else if(f instanceof Uint8Array)x=a.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:g}}function n(u,d,f){const p=d.array,g=d.updateRanges;if(a.bindBuffer(f,u),g.length===0)a.bufferSubData(f,0,p);else{g.sort((x,y)=>x.start-y.start);let m=0;for(let x=1;x<g.length;x++){const y=g[m],M=g[x];M.start<=y.start+y.count+1?y.count=Math.max(y.count,M.start+M.count-y.start):(++m,g[m]=M)}g.length=m+1;for(let x=0,y=g.length;x<y;x++){const M=g[x];a.bufferSubData(f,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(a.deleteBuffer(d.buffer),e.delete(u))}function l(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const f=e.get(u);if(f===void 0)e.set(u,t(u,d));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,u,d),f.version=u.version}}return{get:s,remove:o,update:l}}var Fy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ly=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,By=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ny=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Oy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ky=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Vy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,e_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,t_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,n_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,i_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,r_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,s_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,o_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,l_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,c_="gl_FragColor = linearToOutputTexel( gl_FragColor );",u_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,f_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,h_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,p_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,m_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,g_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,A_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,y_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,__=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,E_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,C_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,T_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,b_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,R_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,I_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,P_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,D_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,F_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,L_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B_=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,N_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,z_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,H_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,G_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,q_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Y_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,K_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Z_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,J_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,nM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,cM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,gM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,SM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_M=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,MM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,EM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,RM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,DM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,HM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,VM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,GM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,YM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$M=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ZM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yt={alphahash_fragment:Fy,alphahash_pars_fragment:Ly,alphamap_fragment:By,alphamap_pars_fragment:Ny,alphatest_fragment:Uy,alphatest_pars_fragment:Oy,aomap_fragment:ky,aomap_pars_fragment:zy,batching_pars_vertex:Hy,batching_vertex:Vy,begin_vertex:Gy,beginnormal_vertex:Wy,bsdfs:Xy,iridescence_fragment:Qy,bumpmap_pars_fragment:qy,clipping_planes_fragment:Yy,clipping_planes_pars_fragment:jy,clipping_planes_pars_vertex:Ky,clipping_planes_vertex:$y,color_fragment:Zy,color_pars_fragment:Jy,color_pars_vertex:e_,color_vertex:t_,common:n_,cube_uv_reflection_fragment:i_,defaultnormal_vertex:r_,displacementmap_pars_vertex:s_,displacementmap_vertex:a_,emissivemap_fragment:o_,emissivemap_pars_fragment:l_,colorspace_fragment:c_,colorspace_pars_fragment:u_,envmap_fragment:d_,envmap_common_pars_fragment:f_,envmap_pars_fragment:h_,envmap_pars_vertex:p_,envmap_physical_pars_fragment:C_,envmap_vertex:m_,fog_vertex:g_,fog_pars_vertex:x_,fog_fragment:v_,fog_pars_fragment:S_,gradientmap_pars_fragment:A_,lightmap_pars_fragment:y_,lights_lambert_fragment:__,lights_lambert_pars_fragment:M_,lights_pars_begin:E_,lights_toon_fragment:T_,lights_toon_pars_fragment:w_,lights_phong_fragment:b_,lights_phong_pars_fragment:R_,lights_physical_fragment:I_,lights_physical_pars_fragment:P_,lights_fragment_begin:D_,lights_fragment_maps:F_,lights_fragment_end:L_,lightprobes_pars_fragment:B_,logdepthbuf_fragment:N_,logdepthbuf_pars_fragment:U_,logdepthbuf_pars_vertex:O_,logdepthbuf_vertex:k_,map_fragment:z_,map_pars_fragment:H_,map_particle_fragment:V_,map_particle_pars_fragment:G_,metalnessmap_fragment:W_,metalnessmap_pars_fragment:X_,morphinstance_vertex:Q_,morphcolor_vertex:q_,morphnormal_vertex:Y_,morphtarget_pars_vertex:j_,morphtarget_vertex:K_,normal_fragment_begin:$_,normal_fragment_maps:Z_,normal_pars_fragment:J_,normal_pars_vertex:eM,normal_vertex:tM,normalmap_pars_fragment:nM,clearcoat_normal_fragment_begin:iM,clearcoat_normal_fragment_maps:rM,clearcoat_pars_fragment:sM,iridescence_pars_fragment:aM,opaque_fragment:oM,packing:lM,premultiplied_alpha_fragment:cM,project_vertex:uM,dithering_fragment:dM,dithering_pars_fragment:fM,roughnessmap_fragment:hM,roughnessmap_pars_fragment:pM,shadowmap_pars_fragment:mM,shadowmap_pars_vertex:gM,shadowmap_vertex:xM,shadowmask_pars_fragment:vM,skinbase_vertex:SM,skinning_pars_vertex:AM,skinning_vertex:yM,skinnormal_vertex:_M,specularmap_fragment:MM,specularmap_pars_fragment:EM,tonemapping_fragment:CM,tonemapping_pars_fragment:TM,transmission_fragment:wM,transmission_pars_fragment:bM,uv_pars_fragment:RM,uv_pars_vertex:IM,uv_vertex:PM,worldpos_vertex:DM,background_vert:FM,background_frag:LM,backgroundCube_vert:BM,backgroundCube_frag:NM,cube_vert:UM,cube_frag:OM,depth_vert:kM,depth_frag:zM,distance_vert:HM,distance_frag:VM,equirect_vert:GM,equirect_frag:WM,linedashed_vert:XM,linedashed_frag:QM,meshbasic_vert:qM,meshbasic_frag:YM,meshlambert_vert:jM,meshlambert_frag:KM,meshmatcap_vert:$M,meshmatcap_frag:ZM,meshnormal_vert:JM,meshnormal_frag:eE,meshphong_vert:tE,meshphong_frag:nE,meshphysical_vert:iE,meshphysical_frag:rE,meshtoon_vert:sE,meshtoon_frag:aE,points_vert:oE,points_frag:lE,shadow_vert:cE,shadow_frag:uE,sprite_vert:dE,sprite_frag:fE},Ve={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},ir={basic:{uniforms:Yn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:Yn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Dt(0)},envMapIntensity:{value:1}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:Yn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:Yn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:Yn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Dt(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:Yn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:Yn([Ve.points,Ve.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:Yn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:Yn([Ve.common,Ve.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:Yn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:Yn([Ve.sprite,Ve.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distance:{uniforms:Yn([Ve.common,Ve.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distance_vert,fragmentShader:yt.distance_frag},shadow:{uniforms:Yn([Ve.lights,Ve.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};ir.physical={uniforms:Yn([ir.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const Rc={r:0,b:0,g:0},hE=new gt,Kx=new ft;Kx.set(-1,0,0,0,1,0,0,0,1);function pE(a,e,t,n,s,o){const l=new Dt(0);let u=s===!0?0:1,d,f,p=null,g=0,m=null;function x(T){let P=T.isScene===!0?T.background:null;if(P&&P.isTexture){const C=T.backgroundBlurriness>0;P=e.get(P,C)}return P}function y(T){let P=!1;const C=x(T);C===null?S(l,u):C&&C.isColor&&(S(C,1),P=!0);const b=a.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(a.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function M(T,P){const C=x(P);C&&(C.isCubeTexture||C.mapping===su)?(f===void 0&&(f=new mn(new ja(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:qa(ir.backgroundCube.uniforms),vertexShader:ir.backgroundCube.vertexShader,fragmentShader:ir.backgroundCube.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(b,I,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(f)),f.material.uniforms.envMap.value=C,f.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(hE.makeRotationFromEuler(P.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply(Kx),f.material.toneMapped=Rt.getTransfer(C.colorSpace)!==Wt,(p!==C||g!==C.version||m!==a.toneMapping)&&(f.material.needsUpdate=!0,p=C,g=C.version,m=a.toneMapping),f.layers.enableAll(),T.unshift(f,f.geometry,f.material,0,0,null)):C&&C.isTexture&&(d===void 0&&(d=new mn(new Qa(2,2),new ti({name:"BackgroundMaterial",uniforms:qa(ir.background.uniforms),vertexShader:ir.background.vertexShader,fragmentShader:ir.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(d)),d.material.uniforms.t2D.value=C,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.toneMapped=Rt.getTransfer(C.colorSpace)!==Wt,C.matrixAutoUpdate===!0&&C.updateMatrix(),d.material.uniforms.uvTransform.value.copy(C.matrix),(p!==C||g!==C.version||m!==a.toneMapping)&&(d.material.needsUpdate=!0,p=C,g=C.version,m=a.toneMapping),d.layers.enableAll(),T.unshift(d,d.geometry,d.material,0,0,null))}function S(T,P){T.getRGB(Rc,qx(a)),t.buffers.color.setClear(Rc.r,Rc.g,Rc.b,P,o)}function A(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return l},setClearColor:function(T,P=1){l.set(T),u=P,S(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(T){u=T,S(l,u)},render:y,addToRenderList:M,dispose:A}}function mE(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},s=m(null);let o=s,l=!1;function u(N,U,W,X,H){let j=!1;const q=g(N,X,W,U);o!==q&&(o=q,f(o.object)),j=x(N,X,W,H),j&&y(N,X,W,H),H!==null&&e.update(H,a.ELEMENT_ARRAY_BUFFER),(j||l)&&(l=!1,C(N,U,W,X),H!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function d(){return a.createVertexArray()}function f(N){return a.bindVertexArray(N)}function p(N){return a.deleteVertexArray(N)}function g(N,U,W,X){const H=X.wireframe===!0;let j=n[U.id];j===void 0&&(j={},n[U.id]=j);const q=N.isInstancedMesh===!0?N.id:0;let Y=j[q];Y===void 0&&(Y={},j[q]=Y);let K=Y[W.id];K===void 0&&(K={},Y[W.id]=K);let ne=K[H];return ne===void 0&&(ne=m(d()),K[H]=ne),ne}function m(N){const U=[],W=[],X=[];for(let H=0;H<t;H++)U[H]=0,W[H]=0,X[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:W,attributeDivisors:X,object:N,attributes:{},index:null}}function x(N,U,W,X){const H=o.attributes,j=U.attributes;let q=0;const Y=W.getAttributes();for(const K in Y)if(Y[K].location>=0){const k=H[K];let te=j[K];if(te===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(te=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(te=N.instanceColor)),k===void 0||k.attribute!==te||te&&k.data!==te.data)return!0;q++}return o.attributesNum!==q||o.index!==X}function y(N,U,W,X){const H={},j=U.attributes;let q=0;const Y=W.getAttributes();for(const K in Y)if(Y[K].location>=0){let k=j[K];k===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(k=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(k=N.instanceColor));const te={};te.attribute=k,k&&k.data&&(te.data=k.data),H[K]=te,q++}o.attributes=H,o.attributesNum=q,o.index=X}function M(){const N=o.newAttributes;for(let U=0,W=N.length;U<W;U++)N[U]=0}function S(N){A(N,0)}function A(N,U){const W=o.newAttributes,X=o.enabledAttributes,H=o.attributeDivisors;W[N]=1,X[N]===0&&(a.enableVertexAttribArray(N),X[N]=1),H[N]!==U&&(a.vertexAttribDivisor(N,U),H[N]=U)}function T(){const N=o.newAttributes,U=o.enabledAttributes;for(let W=0,X=U.length;W<X;W++)U[W]!==N[W]&&(a.disableVertexAttribArray(W),U[W]=0)}function P(N,U,W,X,H,j,q){q===!0?a.vertexAttribIPointer(N,U,W,H,j):a.vertexAttribPointer(N,U,W,X,H,j)}function C(N,U,W,X){M();const H=X.attributes,j=W.getAttributes(),q=U.defaultAttributeValues;for(const Y in j){const K=j[Y];if(K.location>=0){let ne=H[Y];if(ne===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(ne=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(ne=N.instanceColor)),ne!==void 0){const k=ne.normalized,te=ne.itemSize,Me=e.get(ne);if(Me===void 0)continue;const Te=Me.buffer,Re=Me.type,se=Me.bytesPerElement,xe=Re===a.INT||Re===a.UNSIGNED_INT||ne.gpuType===zh;if(ne.isInterleavedBufferAttribute){const pe=ne.data,be=pe.stride,Oe=ne.offset;if(pe.isInstancedInterleavedBuffer){for(let Ge=0;Ge<K.locationSize;Ge++)A(K.location+Ge,pe.meshPerAttribute);N.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ge=0;Ge<K.locationSize;Ge++)S(K.location+Ge);a.bindBuffer(a.ARRAY_BUFFER,Te);for(let Ge=0;Ge<K.locationSize;Ge++)P(K.location+Ge,te/K.locationSize,Re,k,be*se,(Oe+te/K.locationSize*Ge)*se,xe)}else{if(ne.isInstancedBufferAttribute){for(let pe=0;pe<K.locationSize;pe++)A(K.location+pe,ne.meshPerAttribute);N.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let pe=0;pe<K.locationSize;pe++)S(K.location+pe);a.bindBuffer(a.ARRAY_BUFFER,Te);for(let pe=0;pe<K.locationSize;pe++)P(K.location+pe,te/K.locationSize,Re,k,te*se,te/K.locationSize*pe*se,xe)}}else if(q!==void 0){const k=q[Y];if(k!==void 0)switch(k.length){case 2:a.vertexAttrib2fv(K.location,k);break;case 3:a.vertexAttrib3fv(K.location,k);break;case 4:a.vertexAttrib4fv(K.location,k);break;default:a.vertexAttrib1fv(K.location,k)}}}}T()}function b(){F();for(const N in n){const U=n[N];for(const W in U){const X=U[W];for(const H in X){const j=X[H];for(const q in j)p(j[q].object),delete j[q];delete X[H]}}delete n[N]}}function I(N){if(n[N.id]===void 0)return;const U=n[N.id];for(const W in U){const X=U[W];for(const H in X){const j=X[H];for(const q in j)p(j[q].object),delete j[q];delete X[H]}}delete n[N.id]}function R(N){for(const U in n){const W=n[U];for(const X in W){const H=W[X];if(H[N.id]===void 0)continue;const j=H[N.id];for(const q in j)p(j[q].object),delete j[q];delete H[N.id]}}}function E(N){for(const U in n){const W=n[U],X=N.isInstancedMesh===!0?N.id:0,H=W[X];if(H!==void 0){for(const j in H){const q=H[j];for(const Y in q)p(q[Y].object),delete q[Y];delete H[j]}delete W[X],Object.keys(W).length===0&&delete n[U]}}}function F(){B(),l=!0,o!==s&&(o=s,f(o.object))}function B(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:F,resetDefaultState:B,dispose:b,releaseStatesOfGeometry:I,releaseStatesOfObject:E,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:S,disableUnusedAttributes:T}}function gE(a,e,t){let n;function s(d){n=d}function o(d,f){a.drawArrays(n,d,f),t.update(f,n,1)}function l(d,f,p){p!==0&&(a.drawArraysInstanced(n,d,f,p),t.update(f,n,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,f,0,p);let m=0;for(let x=0;x<p;x++)m+=f[x];t.update(m,n,1)}this.setMode=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=u}function xE(a,e,t,n){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=a.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(R){return!(R!==Zn&&n.convert(R)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(R){const E=R===cr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==yi&&n.convert(R)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Bi&&!E)}function d(R){if(R==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const p=d(f);p!==f&&(pt("WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const g=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),y=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_TEXTURE_SIZE),S=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),A=a.getParameter(a.MAX_VERTEX_ATTRIBS),T=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),P=a.getParameter(a.MAX_VARYING_VECTORS),C=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),b=a.getParameter(a.MAX_SAMPLES),I=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:d,textureFormatReadable:l,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:g,reversedDepthBuffer:m,maxTextures:x,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:S,maxAttributes:A,maxVertexUniforms:T,maxVaryings:P,maxFragmentUniforms:C,maxSamples:b,samples:I}}function vE(a){const e=this;let t=null,n=0,s=!1,o=!1;const l=new as,u=new ft,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,m){const x=g.length!==0||m||n!==0||s;return s=m,n=g.length,x},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,m){t=p(g,m,0)},this.setState=function(g,m,x){const y=g.clippingPlanes,M=g.clipIntersection,S=g.clipShadows,A=a.get(g);if(!s||y===null||y.length===0||o&&!S)o?p(null):f();else{const T=o?0:n,P=T*4;let C=A.clippingState||null;d.value=C,C=p(y,m,P,x);for(let b=0;b!==P;++b)C[b]=t[b];A.clippingState=C,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function f(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(g,m,x,y){const M=g!==null?g.length:0;let S=null;if(M!==0){if(S=d.value,y!==!0||S===null){const A=x+M*4,T=m.matrixWorldInverse;u.getNormalMatrix(T),(S===null||S.length<A)&&(S=new Float32Array(A));for(let P=0,C=x;P!==M;++P,C+=4)l.copy(g[P]).applyMatrix4(T,u),l.normal.toArray(S,C),S[C+3]=l.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,S}}const cs=4,A0=[.125,.215,.35,.446,.526,.582],Bs=20,SE=256,ko=new lu,y0=new Dt;let yf=null,_f=0,Mf=0,Ef=!1;const AE=new z;class _0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,o={}){const{size:l=256,position:u=AE}=o;yf=this._renderer.getRenderTarget(),_f=this._renderer.getActiveCubeFace(),Mf=this._renderer.getActiveMipmapLevel(),Ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,n,s,d,u),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=C0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=E0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yf,_f,Mf),this._renderer.xr.enabled=Ef,e.scissorTest=!1,Pa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hs||e.mapping===Xa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yf=this._renderer.getRenderTarget(),_f=this._renderer.getActiveCubeFace(),Mf=this._renderer.getActiveMipmapLevel(),Ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:cr,format:Zn,colorSpace:Yc,depthBuffer:!1},s=M0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=M0(e,t,n);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=yE(o)),this._blurMaterial=ME(o,e,t),this._ggxMaterial=_E(o,e,t)}return s}_compileMaterial(e){const t=new mn(new pi,e);this._renderer.compile(t,ko)}_sceneToCubeUV(e,t,n,s,o){const d=new Fi(90,1,t,n),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,m=g.autoClear,x=g.toneMapping;g.getClearColor(y0),g.toneMapping=or,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mn(new ja,new Ws({name:"PMREM.Background",side:hi,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,S=M.material;let A=!1;const T=e.background;T?T.isColor&&(S.color.copy(T),e.background=null,A=!0):(S.color.copy(y0),A=!0);for(let P=0;P<6;P++){const C=P%3;C===0?(d.up.set(0,f[P],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x+p[P],o.y,o.z)):C===1?(d.up.set(0,0,f[P]),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y+p[P],o.z)):(d.up.set(0,f[P],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y,o.z+p[P]));const b=this._cubeSize;Pa(s,C*b,P>2?b:0,b,b),g.setRenderTarget(s),A&&g.render(M,d),g.render(e,d)}g.toneMapping=x,g.autoClear=m,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Hs||e.mapping===Xa;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=C0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=E0());const o=s?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=o;const u=o.uniforms;u.envMap.value=e;const d=this._cubeSize;Pa(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(l,ko)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,o=this._pingPongRenderTarget,l=this._ggxMaterial,u=this._lodMeshes[n];u.material=l;const d=l.uniforms,f=n/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),g=Math.sqrt(f*f-p*p),m=0+f*1.25,x=g*m,{_lodMax:y}=this,M=this._sizeLods[n],S=3*M*(n>y-cs?n-y+cs:0),A=4*(this._cubeSize-M);d.envMap.value=e.texture,d.roughness.value=x,d.mipInt.value=y-t,Pa(o,S,A,3*M,2*M),s.setRenderTarget(o),s.render(u,ko),d.envMap.value=o.texture,d.roughness.value=0,d.mipInt.value=y-n,Pa(e,S,A,3*M,2*M),s.setRenderTarget(e),s.render(u,ko)}_blur(e,t,n,s,o){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,s,"latitudinal",o),this._halfBlur(l,e,n,n,s,"longitudinal",o)}_halfBlur(e,t,n,s,o,l,u){const d=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&Lt("blur direction must be either latitudinal or longitudinal!");const p=3,g=this._lodMeshes[s];g.material=f;const m=f.uniforms,x=this._sizeLods[n]-1,y=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*Bs-1),M=o/y,S=isFinite(o)?1+Math.floor(p*M):Bs;S>Bs&&pt(`sigmaRadians, ${o}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Bs}`);const A=[];let T=0;for(let R=0;R<Bs;++R){const E=R/M,F=Math.exp(-E*E/2);A.push(F),R===0?T+=F:R<S&&(T+=2*F)}for(let R=0;R<A.length;R++)A[R]=A[R]/T;m.envMap.value=e.texture,m.samples.value=S,m.weights.value=A,m.latitudinal.value=l==="latitudinal",u&&(m.poleAxis.value=u);const{_lodMax:P}=this;m.dTheta.value=y,m.mipInt.value=P-n;const C=this._sizeLods[s],b=3*C*(s>P-cs?s-P+cs:0),I=4*(this._cubeSize-C);Pa(t,b,I,3*C,2*C),d.setRenderTarget(t),d.render(g,ko)}}function yE(a){const e=[],t=[],n=[];let s=a;const o=a-cs+1+A0.length;for(let l=0;l<o;l++){const u=Math.pow(2,s);e.push(u);let d=1/u;l>a-cs?d=A0[l-a+cs-1]:l===0&&(d=0),t.push(d);const f=1/(u-2),p=-f,g=1+f,m=[p,p,g,p,g,g,p,p,g,g,p,g],x=6,y=6,M=3,S=2,A=1,T=new Float32Array(M*y*x),P=new Float32Array(S*y*x),C=new Float32Array(A*y*x);for(let I=0;I<x;I++){const R=I%3*2/3-1,E=I>2?0:-1,F=[R,E,0,R+2/3,E,0,R+2/3,E+1,0,R,E,0,R+2/3,E+1,0,R,E+1,0];T.set(F,M*y*I),P.set(m,S*y*I);const B=[I,I,I,I,I,I];C.set(B,A*y*I)}const b=new pi;b.setAttribute("position",new Ni(T,M)),b.setAttribute("uv",new Ni(P,S)),b.setAttribute("faceIndex",new Ni(C,A)),n.push(new mn(b,null)),s>cs&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function M0(a,e,t){const n=new ji(a,e,t);return n.texture.mapping=su,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pa(a,e,t,n,s){a.viewport.set(e,t,n,s),a.scissor.set(e,t,n,s)}function _E(a,e,t){return new ti({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:SE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function ME(a,e,t){const n=new Float32Array(Bs),s=new z(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function E0(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function C0(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function cu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class $x extends ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Xx(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ja(5,5,5),o=new ti({name:"CubemapFromEquirect",uniforms:qa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hi,blending:Pr});o.uniforms.tEquirect.value=t;const l=new mn(s,o),u=t.minFilter;return t.minFilter===Os&&(t.minFilter=Wn),new Ry(1,10,this).update(e,l),t.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,s);e.setRenderTarget(o)}}function EE(a){let e=new WeakMap,t=new WeakMap,n=null;function s(m,x=!1){return m==null?null:x?l(m):o(m)}function o(m){if(m&&m.isTexture){const x=m.mapping;if(x===Yd||x===jd)if(e.has(m)){const y=e.get(m).texture;return u(y,m.mapping)}else{const y=m.image;if(y&&y.height>0){const M=new $x(y.height);return M.fromEquirectangularTexture(a,m),e.set(m,M),m.addEventListener("dispose",f),u(M.texture,m.mapping)}else return null}}return m}function l(m){if(m&&m.isTexture){const x=m.mapping,y=x===Yd||x===jd,M=x===Hs||x===Xa;if(y||M){let S=t.get(m);const A=S!==void 0?S.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==A)return n===null&&(n=new _0(a)),S=y?n.fromEquirectangular(m,S):n.fromCubemap(m,S),S.texture.pmremVersion=m.pmremVersion,t.set(m,S),S.texture;if(S!==void 0)return S.texture;{const T=m.image;return y&&T&&T.height>0||M&&T&&d(T)?(n===null&&(n=new _0(a)),S=y?n.fromEquirectangular(m):n.fromCubemap(m),S.texture.pmremVersion=m.pmremVersion,t.set(m,S),m.addEventListener("dispose",p),S.texture):null}}}return m}function u(m,x){return x===Yd?m.mapping=Hs:x===jd&&(m.mapping=Xa),m}function d(m){let x=0;const y=6;for(let M=0;M<y;M++)m[M]!==void 0&&x++;return x===y}function f(m){const x=m.target;x.removeEventListener("dispose",f);const y=e.get(x);y!==void 0&&(e.delete(x),y.dispose())}function p(m){const x=m.target;x.removeEventListener("dispose",p);const y=t.get(x);y!==void 0&&(t.delete(x),y.dispose())}function g(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:g}}function CE(a){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=a.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Oa("WebGLRenderer: "+n+" extension not supported."),s}}}function TE(a,e,t,n){const s={},o=new WeakMap;function l(g){const m=g.target;m.index!==null&&e.remove(m.index);for(const y in m.attributes)e.remove(m.attributes[y]);m.removeEventListener("dispose",l),delete s[m.id];const x=o.get(m);x&&(e.remove(x),o.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function u(g,m){return s[m.id]===!0||(m.addEventListener("dispose",l),s[m.id]=!0,t.memory.geometries++),m}function d(g){const m=g.attributes;for(const x in m)e.update(m[x],a.ARRAY_BUFFER)}function f(g){const m=[],x=g.index,y=g.attributes.position;let M=0;if(y===void 0)return;if(x!==null){const T=x.array;M=x.version;for(let P=0,C=T.length;P<C;P+=3){const b=T[P+0],I=T[P+1],R=T[P+2];m.push(b,I,I,R,R,b)}}else{const T=y.array;M=y.version;for(let P=0,C=T.length/3-1;P<C;P+=3){const b=P+0,I=P+1,R=P+2;m.push(b,I,I,R,R,b)}}const S=new(y.count>=65535?Vx:Hx)(m,1);S.version=M;const A=o.get(g);A&&e.remove(A),o.set(g,S)}function p(g){const m=o.get(g);if(m){const x=g.index;x!==null&&m.version<x.version&&f(g)}else f(g);return o.get(g)}return{get:u,update:d,getWireframeAttribute:p}}function wE(a,e,t){let n;function s(g){n=g}let o,l;function u(g){o=g.type,l=g.bytesPerElement}function d(g,m){a.drawElements(n,m,o,g*l),t.update(m,n,1)}function f(g,m,x){x!==0&&(a.drawElementsInstanced(n,m,o,g*l,x),t.update(m,n,x))}function p(g,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,o,g,0,x);let M=0;for(let S=0;S<x;S++)M+=m[S];t.update(M,n,1)}this.setMode=s,this.setIndex=u,this.render=d,this.renderInstances=f,this.renderMultiDraw=p}function bE(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,l,u){switch(t.calls++,l){case a.TRIANGLES:t.triangles+=u*(o/3);break;case a.LINES:t.lines+=u*(o/2);break;case a.LINE_STRIP:t.lines+=u*(o-1);break;case a.LINE_LOOP:t.lines+=u*o;break;case a.POINTS:t.points+=u*o;break;default:Lt("WebGLInfo: Unknown draw mode:",l);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function RE(a,e,t){const n=new WeakMap,s=new tn;function o(l,u,d){const f=l.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let m=n.get(u);if(m===void 0||m.count!==g){let B=function(){E.dispose(),n.delete(u),u.removeEventListener("dispose",B)};var x=B;m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let C=0;y===!0&&(C=1),M===!0&&(C=2),S===!0&&(C=3);let b=u.attributes.position.count*C,I=1;b>e.maxTextureSize&&(I=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const R=new Float32Array(b*I*4*g),E=new Ox(R,b,I,g);E.type=Bi,E.needsUpdate=!0;const F=C*4;for(let N=0;N<g;N++){const U=A[N],W=T[N],X=P[N],H=b*I*4*N;for(let j=0;j<U.count;j++){const q=j*F;y===!0&&(s.fromBufferAttribute(U,j),R[H+q+0]=s.x,R[H+q+1]=s.y,R[H+q+2]=s.z,R[H+q+3]=0),M===!0&&(s.fromBufferAttribute(W,j),R[H+q+4]=s.x,R[H+q+5]=s.y,R[H+q+6]=s.z,R[H+q+7]=0),S===!0&&(s.fromBufferAttribute(X,j),R[H+q+8]=s.x,R[H+q+9]=s.y,R[H+q+10]=s.z,R[H+q+11]=X.itemSize===4?s.w:1)}}m={count:g,texture:E,size:new qe(b,I)},n.set(u,m),u.addEventListener("dispose",B)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)d.getUniforms().setValue(a,"morphTexture",l.morphTexture,t);else{let y=0;for(let S=0;S<f.length;S++)y+=f[S];const M=u.morphTargetsRelative?1:1-y;d.getUniforms().setValue(a,"morphTargetBaseInfluence",M),d.getUniforms().setValue(a,"morphTargetInfluences",f)}d.getUniforms().setValue(a,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(a,"morphTargetsTextureSize",m.size)}return{update:o}}function IE(a,e,t,n,s){let o=new WeakMap;function l(f){const p=s.render.frame,g=f.geometry,m=e.get(f,g);if(o.get(m)!==p&&(e.update(m),o.set(m,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",d)===!1&&f.addEventListener("dispose",d),o.get(f)!==p&&(t.update(f.instanceMatrix,a.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,a.ARRAY_BUFFER),o.set(f,p))),f.isSkinnedMesh){const x=f.skeleton;o.get(x)!==p&&(x.update(),o.set(x,p))}return m}function u(){o=new WeakMap}function d(f){const p=f.target;p.removeEventListener("dispose",d),n.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}const PE={[yx]:"LINEAR_TONE_MAPPING",[_x]:"REINHARD_TONE_MAPPING",[Mx]:"CINEON_TONE_MAPPING",[Ex]:"ACES_FILMIC_TONE_MAPPING",[Tx]:"AGX_TONE_MAPPING",[wx]:"NEUTRAL_TONE_MAPPING",[Cx]:"CUSTOM_TONE_MAPPING"};function DE(a,e,t,n,s,o){const l=new ji(e,t,{type:a,depthBuffer:s,stencilBuffer:o,samples:n?4:0,depthTexture:s?new Xs(e,t):void 0}),u=new ji(e,t,{type:cr,depthBuffer:!1,stencilBuffer:!1}),d=new pi;d.setAttribute("position",new ei([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ei([0,2,0,0,2,0],2));const f=new Cy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new mn(d,f),g=new lu(-1,1,1,-1,0,1);let m=null,x=null,y=!1,M,S=null,A=[],T=!1;this.setSize=function(P,C){l.setSize(P,C),u.setSize(P,C);for(let b=0;b<A.length;b++){const I=A[b];I.setSize&&I.setSize(P,C)}},this.setEffects=function(P){A=P,T=A.length>0&&A[0].isRenderPass===!0;const C=l.width,b=l.height;for(let I=0;I<A.length;I++){const R=A[I];R.setSize&&R.setSize(C,b)}},this.begin=function(P,C){if(y||P.toneMapping===or&&A.length===0)return!1;if(S=C,C!==null){const b=C.width,I=C.height;(l.width!==b||l.height!==I)&&this.setSize(b,I)}return T===!1&&P.setRenderTarget(l),M=P.toneMapping,P.toneMapping=or,!0},this.hasRenderPass=function(){return T},this.end=function(P,C){P.toneMapping=M,y=!0;let b=l,I=u;for(let R=0;R<A.length;R++){const E=A[R];if(E.enabled!==!1&&(E.render(P,I,b,C),E.needsSwap!==!1)){const F=b;b=I,I=F}}if(m!==P.outputColorSpace||x!==P.toneMapping){m=P.outputColorSpace,x=P.toneMapping,f.defines={},Rt.getTransfer(m)===Wt&&(f.defines.SRGB_TRANSFER="");const R=PE[x];R&&(f.defines[R]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=b.texture,P.setRenderTarget(S),P.render(p,g),S=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),u.dispose(),d.dispose(),f.dispose()}}const Zx=new Jn,bh=new Xs(1,1),Jx=new Ox,ev=new JA,tv=new Xx,T0=[],w0=[],b0=new Float32Array(16),R0=new Float32Array(9),I0=new Float32Array(4);function Ka(a,e,t){const n=a[0];if(n<=0||n>0)return a;const s=e*t;let o=T0[s];if(o===void 0&&(o=new Float32Array(s),T0[s]=o),e!==0){n.toArray(o,0);for(let l=1,u=0;l!==e;++l)u+=t,a[l].toArray(o,u)}return o}function Cn(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Tn(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function uu(a,e){let t=w0[e];t===void 0&&(t=new Int32Array(e),w0[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function FE(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function LE(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Cn(t,e))return;a.uniform2fv(this.addr,e),Tn(t,e)}}function BE(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Cn(t,e))return;a.uniform3fv(this.addr,e),Tn(t,e)}}function NE(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Cn(t,e))return;a.uniform4fv(this.addr,e),Tn(t,e)}}function UE(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Cn(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Tn(t,e)}else{if(Cn(t,n))return;I0.set(n),a.uniformMatrix2fv(this.addr,!1,I0),Tn(t,n)}}function OE(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Cn(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Tn(t,e)}else{if(Cn(t,n))return;R0.set(n),a.uniformMatrix3fv(this.addr,!1,R0),Tn(t,n)}}function kE(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Cn(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Tn(t,e)}else{if(Cn(t,n))return;b0.set(n),a.uniformMatrix4fv(this.addr,!1,b0),Tn(t,n)}}function zE(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function HE(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Cn(t,e))return;a.uniform2iv(this.addr,e),Tn(t,e)}}function VE(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Cn(t,e))return;a.uniform3iv(this.addr,e),Tn(t,e)}}function GE(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Cn(t,e))return;a.uniform4iv(this.addr,e),Tn(t,e)}}function WE(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function XE(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Cn(t,e))return;a.uniform2uiv(this.addr,e),Tn(t,e)}}function QE(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Cn(t,e))return;a.uniform3uiv(this.addr,e),Tn(t,e)}}function qE(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Cn(t,e))return;a.uniform4uiv(this.addr,e),Tn(t,e)}}function YE(a,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(a.uniform1i(this.addr,s),n[0]=s);let o;this.type===a.SAMPLER_2D_SHADOW?(bh.compareFunction=t.isReversedDepthBuffer()?Xh:Wh,o=bh):o=Zx,t.setTexture2D(e||o,s)}function jE(a,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(a.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ev,s)}function KE(a,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(a.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||tv,s)}function $E(a,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(a.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Jx,s)}function ZE(a){switch(a){case 5126:return FE;case 35664:return LE;case 35665:return BE;case 35666:return NE;case 35674:return UE;case 35675:return OE;case 35676:return kE;case 5124:case 35670:return zE;case 35667:case 35671:return HE;case 35668:case 35672:return VE;case 35669:case 35673:return GE;case 5125:return WE;case 36294:return XE;case 36295:return QE;case 36296:return qE;case 35678:case 36198:case 36298:case 36306:case 35682:return YE;case 35679:case 36299:case 36307:return jE;case 35680:case 36300:case 36308:case 36293:return KE;case 36289:case 36303:case 36311:case 36292:return $E}}function JE(a,e){a.uniform1fv(this.addr,e)}function eC(a,e){const t=Ka(e,this.size,2);a.uniform2fv(this.addr,t)}function tC(a,e){const t=Ka(e,this.size,3);a.uniform3fv(this.addr,t)}function nC(a,e){const t=Ka(e,this.size,4);a.uniform4fv(this.addr,t)}function iC(a,e){const t=Ka(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function rC(a,e){const t=Ka(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function sC(a,e){const t=Ka(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function aC(a,e){a.uniform1iv(this.addr,e)}function oC(a,e){a.uniform2iv(this.addr,e)}function lC(a,e){a.uniform3iv(this.addr,e)}function cC(a,e){a.uniform4iv(this.addr,e)}function uC(a,e){a.uniform1uiv(this.addr,e)}function dC(a,e){a.uniform2uiv(this.addr,e)}function fC(a,e){a.uniform3uiv(this.addr,e)}function hC(a,e){a.uniform4uiv(this.addr,e)}function pC(a,e,t){const n=this.cache,s=e.length,o=uu(t,s);Cn(n,o)||(a.uniform1iv(this.addr,o),Tn(n,o));let l;this.type===a.SAMPLER_2D_SHADOW?l=bh:l=Zx;for(let u=0;u!==s;++u)t.setTexture2D(e[u]||l,o[u])}function mC(a,e,t){const n=this.cache,s=e.length,o=uu(t,s);Cn(n,o)||(a.uniform1iv(this.addr,o),Tn(n,o));for(let l=0;l!==s;++l)t.setTexture3D(e[l]||ev,o[l])}function gC(a,e,t){const n=this.cache,s=e.length,o=uu(t,s);Cn(n,o)||(a.uniform1iv(this.addr,o),Tn(n,o));for(let l=0;l!==s;++l)t.setTextureCube(e[l]||tv,o[l])}function xC(a,e,t){const n=this.cache,s=e.length,o=uu(t,s);Cn(n,o)||(a.uniform1iv(this.addr,o),Tn(n,o));for(let l=0;l!==s;++l)t.setTexture2DArray(e[l]||Jx,o[l])}function vC(a){switch(a){case 5126:return JE;case 35664:return eC;case 35665:return tC;case 35666:return nC;case 35674:return iC;case 35675:return rC;case 35676:return sC;case 5124:case 35670:return aC;case 35667:case 35671:return oC;case 35668:case 35672:return lC;case 35669:case 35673:return cC;case 5125:return uC;case 36294:return dC;case 36295:return fC;case 36296:return hC;case 35678:case 36198:case 36298:case 36306:case 35682:return pC;case 35679:case 36299:case 36307:return mC;case 35680:case 36300:case 36308:case 36293:return gC;case 36289:case 36303:case 36311:case 36292:return xC}}class SC{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ZE(t.type)}}class AC{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vC(t.type)}}class yC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let o=0,l=s.length;o!==l;++o){const u=s[o];u.setValue(e,t[u.id],n)}}}const Cf=/(\w+)(\])?(\[|\.)?/g;function P0(a,e){a.seq.push(e),a.map[e.id]=e}function _C(a,e,t){const n=a.name,s=n.length;for(Cf.lastIndex=0;;){const o=Cf.exec(n),l=Cf.lastIndex;let u=o[1];const d=o[2]==="]",f=o[3];if(d&&(u=u|0),f===void 0||f==="["&&l+2===s){P0(t,f===void 0?new SC(u,a,e):new AC(u,a,e));break}else{let g=t.map[u];g===void 0&&(g=new yC(u),P0(t,g)),t=g}}}class Xc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let l=0;l<n;++l){const u=e.getActiveUniform(t,l),d=e.getUniformLocation(t,u.name);_C(u,d,this)}const s=[],o=[];for(const l of this.seq)l.type===e.SAMPLER_2D_SHADOW||l.type===e.SAMPLER_CUBE_SHADOW||l.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(l):o.push(l);s.length>0&&(this.seq=s.concat(o))}setValue(e,t,n,s){const o=this.map[t];o!==void 0&&o.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let o=0,l=t.length;o!==l;++o){const u=t[o],d=n[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,o=e.length;s!==o;++s){const l=e[s];l.id in t&&n.push(l)}return n}}function D0(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}const MC=37297;let EC=0;function CC(a,e){const t=a.split(`
`),n=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let l=s;l<o;l++){const u=l+1;n.push(`${u===e?">":" "} ${u}: ${t[l]}`)}return n.join(`
`)}const F0=new ft;function TC(a){Rt._getMatrix(F0,Rt.workingColorSpace,a);const e=`mat3( ${F0.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(a)){case jc:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return pt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function L0(a,e,t){const n=a.getShaderParameter(e,a.COMPILE_STATUS),o=(a.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+CC(a.getShaderSource(e),u)}else return o}function wC(a,e){const t=TC(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const bC={[yx]:"Linear",[_x]:"Reinhard",[Mx]:"Cineon",[Ex]:"ACESFilmic",[Tx]:"AgX",[wx]:"Neutral",[Cx]:"Custom"};function RC(a,e){const t=bC[e];return t===void 0?(pt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ic=new z;function IC(){Rt.getLuminanceCoefficients(Ic);const a=Ic.x.toFixed(4),e=Ic.y.toFixed(4),t=Ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PC(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function DC(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function FC(a,e){const t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=a.getActiveAttrib(e,s),l=o.name;let u=1;o.type===a.FLOAT_MAT2&&(u=2),o.type===a.FLOAT_MAT3&&(u=3),o.type===a.FLOAT_MAT4&&(u=4),t[l]={type:o.type,location:a.getAttribLocation(e,l),locationSize:u}}return t}function Go(a){return a!==""}function B0(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function N0(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(a){return a.replace(LC,NC)}const BC=new Map;function NC(a,e){let t=yt[e];if(t===void 0){const n=BC.get(e);if(n!==void 0)t=yt[n],pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Rh(t)}const UC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function U0(a){return a.replace(UC,OC)}function OC(a,e,t,n){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function O0(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const kC={[kc]:"SHADOWMAP_TYPE_PCF",[Vo]:"SHADOWMAP_TYPE_VSM"};function zC(a){return kC[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const HC={[Hs]:"ENVMAP_TYPE_CUBE",[Xa]:"ENVMAP_TYPE_CUBE",[su]:"ENVMAP_TYPE_CUBE_UV"};function VC(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":HC[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const GC={[Xa]:"ENVMAP_MODE_REFRACTION"};function WC(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":GC[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const XC={[Ax]:"ENVMAP_BLENDING_MULTIPLY",[PA]:"ENVMAP_BLENDING_MIX",[DA]:"ENVMAP_BLENDING_ADD"};function QC(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":XC[a.combine]||"ENVMAP_BLENDING_NONE"}function qC(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function YC(a,e,t,n){const s=a.getContext(),o=t.defines;let l=t.vertexShader,u=t.fragmentShader;const d=zC(t),f=VC(t),p=WC(t),g=QC(t),m=qC(t),x=PC(t),y=DC(o),M=s.createProgram();let S,A,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Go).join(`
`),S.length>0&&(S+=`
`),A=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Go).join(`
`),A.length>0&&(A+=`
`)):(S=[O0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),A=[O0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==or?"#define TONE_MAPPING":"",t.toneMapping!==or?yt.tonemapping_pars_fragment:"",t.toneMapping!==or?RC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,wC("linearToOutputTexel",t.outputColorSpace),IC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Go).join(`
`)),l=Rh(l),l=B0(l,t),l=N0(l,t),u=Rh(u),u=B0(u,t),u=N0(u,t),l=U0(l),u=U0(u),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,A=["#define varying in",t.glslVersion===$g?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$g?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);const P=T+S+l,C=T+A+u,b=D0(s,s.VERTEX_SHADER,P),I=D0(s,s.FRAGMENT_SHADER,C);s.attachShader(M,b),s.attachShader(M,I),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function R(N){if(a.debug.checkShaderErrors){const U=s.getProgramInfoLog(M)||"",W=s.getShaderInfoLog(b)||"",X=s.getShaderInfoLog(I)||"",H=U.trim(),j=W.trim(),q=X.trim();let Y=!0,K=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(Y=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(s,M,b,I);else{const ne=L0(s,b,"vertex"),k=L0(s,I,"fragment");Lt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+H+`
`+ne+`
`+k)}else H!==""?pt("WebGLProgram: Program Info Log:",H):(j===""||q==="")&&(K=!1);K&&(N.diagnostics={runnable:Y,programLog:H,vertexShader:{log:j,prefix:S},fragmentShader:{log:q,prefix:A}})}s.deleteShader(b),s.deleteShader(I),E=new Xc(s,M),F=FC(s,M)}let E;this.getUniforms=function(){return E===void 0&&R(this),E};let F;this.getAttributes=function(){return F===void 0&&R(this),F};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(M,MC)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=EC++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=b,this.fragmentShader=I,this}let jC=0;class KC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new $C(e),t.set(e,n)),n}}class $C{constructor(e){this.id=jC++,this.code=e,this.usedTimes=0}}function ZC(a){return a===Vs||a===Qc||a===qc}function JC(a,e,t,n,s,o){const l=new kx,u=new KC,d=new Set,f=[],p=new Map,g=n.logarithmicDepthBuffer;let m=n.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return d.add(E),E===0?"uv":`uv${E}`}function M(E,F,B,N,U,W){const X=N.fog,H=U.geometry,j=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?N.environment:null,q=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,Y=e.get(E.envMap||j,q),K=Y&&Y.mapping===su?Y.image.height:null,ne=x[E.type];E.precision!==null&&(m=n.getMaxPrecision(E.precision),m!==E.precision&&pt("WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const k=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,te=k!==void 0?k.length:0;let Me=0;H.morphAttributes.position!==void 0&&(Me=1),H.morphAttributes.normal!==void 0&&(Me=2),H.morphAttributes.color!==void 0&&(Me=3);let Te,Re,se,xe;if(ne){const $e=ir[ne];Te=$e.vertexShader,Re=$e.fragmentShader}else{Te=E.vertexShader,Re=E.fragmentShader;const $e=u.getVertexShaderStage(E),Xt=u.getFragmentShaderStage(E);u.update(E,$e,Xt),se=$e.id,xe=Xt.id}const pe=a.getRenderTarget(),be=a.state.buffers.depth.getReversed(),Oe=U.isInstancedMesh===!0,Ge=U.isBatchedMesh===!0,xt=!!E.map,Ye=!!E.matcap,dt=!!Y,nt=!!E.aoMap,ht=!!E.lightMap,bt=!!E.bumpMap&&E.wireframe===!1,At=!!E.normalMap,Tt=!!E.displacementMap,Bt=!!E.emissiveMap,Ut=!!E.metalnessMap,qt=!!E.roughnessMap,ee=E.anisotropy>0,hn=E.clearcoat>0,It=E.dispersion>0,O=E.iridescence>0,w=E.sheen>0,ae=E.transmission>0,de=ee&&!!E.anisotropyMap,ge=hn&&!!E.clearcoatMap,we=hn&&!!E.clearcoatNormalMap,Q=hn&&!!E.clearcoatRoughnessMap,ie=O&&!!E.iridescenceMap,me=O&&!!E.iridescenceThicknessMap,Ee=w&&!!E.sheenColorMap,He=w&&!!E.sheenRoughnessMap,Le=!!E.specularMap,Ie=!!E.specularColorMap,st=!!E.specularIntensityMap,lt=ae&&!!E.transmissionMap,at=ae&&!!E.thicknessMap,$=!!E.gradientMap,De=!!E.alphaMap,Se=E.alphaTest>0,Be=!!E.alphaHash,ke=!!E.extensions;let Ae=or;E.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Ae=a.toneMapping);const Je={shaderID:ne,shaderType:E.type,shaderName:E.name,vertexShader:Te,fragmentShader:Re,defines:E.defines,customVertexShaderID:se,customFragmentShaderID:xe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ge,batchingColor:Ge&&U._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&U.instanceColor!==null,instancingMorph:Oe&&U.morphTexture!==null,outputColorSpace:pe===null?a.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:xt,matcap:Ye,envMap:dt,envMapMode:dt&&Y.mapping,envMapCubeUVHeight:K,aoMap:nt,lightMap:ht,bumpMap:bt,normalMap:At,displacementMap:Tt,emissiveMap:Bt,normalMapObjectSpace:At&&E.normalMapType===BA,normalMapTangentSpace:At&&E.normalMapType===Yg,packedNormalMap:At&&E.normalMapType===Yg&&ZC(E.normalMap.format),metalnessMap:Ut,roughnessMap:qt,anisotropy:ee,anisotropyMap:de,clearcoat:hn,clearcoatMap:ge,clearcoatNormalMap:we,clearcoatRoughnessMap:Q,dispersion:It,iridescence:O,iridescenceMap:ie,iridescenceThicknessMap:me,sheen:w,sheenColorMap:Ee,sheenRoughnessMap:He,specularMap:Le,specularColorMap:Ie,specularIntensityMap:st,transmission:ae,transmissionMap:lt,thicknessMap:at,gradientMap:$,opaque:E.transparent===!1&&E.blending===us&&E.alphaToCoverage===!1,alphaMap:De,alphaTest:Se,alphaHash:Be,combine:E.combine,mapUv:xt&&y(E.map.channel),aoMapUv:nt&&y(E.aoMap.channel),lightMapUv:ht&&y(E.lightMap.channel),bumpMapUv:bt&&y(E.bumpMap.channel),normalMapUv:At&&y(E.normalMap.channel),displacementMapUv:Tt&&y(E.displacementMap.channel),emissiveMapUv:Bt&&y(E.emissiveMap.channel),metalnessMapUv:Ut&&y(E.metalnessMap.channel),roughnessMapUv:qt&&y(E.roughnessMap.channel),anisotropyMapUv:de&&y(E.anisotropyMap.channel),clearcoatMapUv:ge&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:we&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:me&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:He&&y(E.sheenRoughnessMap.channel),specularMapUv:Le&&y(E.specularMap.channel),specularColorMapUv:Ie&&y(E.specularColorMap.channel),specularIntensityMapUv:st&&y(E.specularIntensityMap.channel),transmissionMapUv:lt&&y(E.transmissionMap.channel),thicknessMapUv:at&&y(E.thicknessMap.channel),alphaMapUv:De&&y(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(At||ee),vertexNormals:!!H.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!H.attributes.uv&&(xt||De),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||H.attributes.normal===void 0&&At===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:be,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Me,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:a.shadowMap.enabled&&B.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ae,decodeVideoTexture:xt&&E.map.isVideoTexture===!0&&Rt.getTransfer(E.map.colorSpace)===Wt,decodeVideoTextureEmissive:Bt&&E.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(E.emissiveMap.colorSpace)===Wt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Li,flipSided:E.side===hi,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ke&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&E.extensions.multiDraw===!0||Ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Je.vertexUv1s=d.has(1),Je.vertexUv2s=d.has(2),Je.vertexUv3s=d.has(3),d.clear(),Je}function S(E){const F=[];if(E.shaderID?F.push(E.shaderID):(F.push(E.customVertexShaderID),F.push(E.customFragmentShaderID)),E.defines!==void 0)for(const B in E.defines)F.push(B),F.push(E.defines[B]);return E.isRawShaderMaterial===!1&&(A(F,E),T(F,E),F.push(a.outputColorSpace)),F.push(E.customProgramCacheKey),F.join()}function A(E,F){E.push(F.precision),E.push(F.outputColorSpace),E.push(F.envMapMode),E.push(F.envMapCubeUVHeight),E.push(F.mapUv),E.push(F.alphaMapUv),E.push(F.lightMapUv),E.push(F.aoMapUv),E.push(F.bumpMapUv),E.push(F.normalMapUv),E.push(F.displacementMapUv),E.push(F.emissiveMapUv),E.push(F.metalnessMapUv),E.push(F.roughnessMapUv),E.push(F.anisotropyMapUv),E.push(F.clearcoatMapUv),E.push(F.clearcoatNormalMapUv),E.push(F.clearcoatRoughnessMapUv),E.push(F.iridescenceMapUv),E.push(F.iridescenceThicknessMapUv),E.push(F.sheenColorMapUv),E.push(F.sheenRoughnessMapUv),E.push(F.specularMapUv),E.push(F.specularColorMapUv),E.push(F.specularIntensityMapUv),E.push(F.transmissionMapUv),E.push(F.thicknessMapUv),E.push(F.combine),E.push(F.fogExp2),E.push(F.sizeAttenuation),E.push(F.morphTargetsCount),E.push(F.morphAttributeCount),E.push(F.numDirLights),E.push(F.numPointLights),E.push(F.numSpotLights),E.push(F.numSpotLightMaps),E.push(F.numHemiLights),E.push(F.numRectAreaLights),E.push(F.numDirLightShadows),E.push(F.numPointLightShadows),E.push(F.numSpotLightShadows),E.push(F.numSpotLightShadowsWithMaps),E.push(F.numLightProbes),E.push(F.shadowMapType),E.push(F.toneMapping),E.push(F.numClippingPlanes),E.push(F.numClipIntersection),E.push(F.depthPacking)}function T(E,F){l.disableAll(),F.instancing&&l.enable(0),F.instancingColor&&l.enable(1),F.instancingMorph&&l.enable(2),F.matcap&&l.enable(3),F.envMap&&l.enable(4),F.normalMapObjectSpace&&l.enable(5),F.normalMapTangentSpace&&l.enable(6),F.clearcoat&&l.enable(7),F.iridescence&&l.enable(8),F.alphaTest&&l.enable(9),F.vertexColors&&l.enable(10),F.vertexAlphas&&l.enable(11),F.vertexUv1s&&l.enable(12),F.vertexUv2s&&l.enable(13),F.vertexUv3s&&l.enable(14),F.vertexTangents&&l.enable(15),F.anisotropy&&l.enable(16),F.alphaHash&&l.enable(17),F.batching&&l.enable(18),F.dispersion&&l.enable(19),F.batchingColor&&l.enable(20),F.gradientMap&&l.enable(21),F.packedNormalMap&&l.enable(22),F.vertexNormals&&l.enable(23),E.push(l.mask),l.disableAll(),F.fog&&l.enable(0),F.useFog&&l.enable(1),F.flatShading&&l.enable(2),F.logarithmicDepthBuffer&&l.enable(3),F.reversedDepthBuffer&&l.enable(4),F.skinning&&l.enable(5),F.morphTargets&&l.enable(6),F.morphNormals&&l.enable(7),F.morphColors&&l.enable(8),F.premultipliedAlpha&&l.enable(9),F.shadowMapEnabled&&l.enable(10),F.doubleSided&&l.enable(11),F.flipSided&&l.enable(12),F.useDepthPacking&&l.enable(13),F.dithering&&l.enable(14),F.transmission&&l.enable(15),F.sheen&&l.enable(16),F.opaque&&l.enable(17),F.pointsUvs&&l.enable(18),F.decodeVideoTexture&&l.enable(19),F.decodeVideoTextureEmissive&&l.enable(20),F.alphaToCoverage&&l.enable(21),F.numLightProbeGrids>0&&l.enable(22),F.hasPositionAttribute&&l.enable(23),E.push(l.mask)}function P(E){const F=x[E.type];let B;if(F){const N=ir[F];B=_y.clone(N.uniforms)}else B=E.uniforms;return B}function C(E,F){let B=p.get(F);return B!==void 0?++B.usedTimes:(B=new YC(a,F,E,s),f.push(B),p.set(F,B)),B}function b(E){if(--E.usedTimes===0){const F=f.indexOf(E);f[F]=f[f.length-1],f.pop(),p.delete(E.cacheKey),E.destroy()}}function I(E){u.remove(E)}function R(){u.dispose()}return{getParameters:M,getProgramCacheKey:S,getUniforms:P,acquireProgram:C,releaseProgram:b,releaseShaderCache:I,programs:f,dispose:R}}function eT(){let a=new WeakMap;function e(l){return a.has(l)}function t(l){let u=a.get(l);return u===void 0&&(u={},a.set(l,u)),u}function n(l){a.delete(l)}function s(l,u,d){a.get(l)[u]=d}function o(){a=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:o}}function tT(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function k0(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function z0(){const a=[];let e=0;const t=[],n=[],s=[];function o(){e=0,t.length=0,n.length=0,s.length=0}function l(m){let x=0;return m.isInstancedMesh&&(x+=2),m.isSkinnedMesh&&(x+=1),x}function u(m,x,y,M,S,A){let T=a[e];return T===void 0?(T={id:m.id,object:m,geometry:x,material:y,materialVariant:l(m),groupOrder:M,renderOrder:m.renderOrder,z:S,group:A},a[e]=T):(T.id=m.id,T.object=m,T.geometry=x,T.material=y,T.materialVariant=l(m),T.groupOrder=M,T.renderOrder=m.renderOrder,T.z=S,T.group=A),e++,T}function d(m,x,y,M,S,A){const T=u(m,x,y,M,S,A);y.transmission>0?n.push(T):y.transparent===!0?s.push(T):t.push(T)}function f(m,x,y,M,S,A){const T=u(m,x,y,M,S,A);y.transmission>0?n.unshift(T):y.transparent===!0?s.unshift(T):t.unshift(T)}function p(m,x,y){t.length>1&&t.sort(m||tT),n.length>1&&n.sort(x||k0),s.length>1&&s.sort(x||k0),y&&(t.reverse(),n.reverse(),s.reverse())}function g(){for(let m=e,x=a.length;m<x;m++){const y=a[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:s,init:o,push:d,unshift:f,finish:g,sort:p}}function nT(){let a=new WeakMap;function e(n,s){const o=a.get(n);let l;return o===void 0?(l=new z0,a.set(n,[l])):s>=o.length?(l=new z0,o.push(l)):l=o[s],l}function t(){a=new WeakMap}return{get:e,dispose:t}}function iT(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Dt};break;case"SpotLight":t={position:new z,direction:new z,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":t={color:new Dt,position:new z,halfWidth:new z,halfHeight:new z};break}return a[e.id]=t,t}}}function rT(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let sT=0;function aT(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function oT(a){const e=new iT,t=rT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new z);const s=new z,o=new gt,l=new gt;function u(f){let p=0,g=0,m=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let x=0,y=0,M=0,S=0,A=0,T=0,P=0,C=0,b=0,I=0,R=0;f.sort(aT);for(let F=0,B=f.length;F<B;F++){const N=f[F],U=N.color,W=N.intensity,X=N.distance;let H=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Vs?H=N.shadow.map.texture:H=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)p+=U.r*W,g+=U.g*W,m+=U.b*W;else if(N.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(N.sh.coefficients[j],W);R++}else if(N.isDirectionalLight){const j=e.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const q=N.shadow,Y=t.get(N);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,n.directionalShadow[x]=Y,n.directionalShadowMap[x]=H,n.directionalShadowMatrix[x]=N.shadow.matrix,T++}n.directional[x]=j,x++}else if(N.isSpotLight){const j=e.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(U).multiplyScalar(W),j.distance=X,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,n.spot[M]=j;const q=N.shadow;if(N.map&&(n.spotLightMap[b]=N.map,b++,q.updateMatrices(N),N.castShadow&&I++),n.spotLightMatrix[M]=q.matrix,N.castShadow){const Y=t.get(N);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,n.spotShadow[M]=Y,n.spotShadowMap[M]=H,C++}M++}else if(N.isRectAreaLight){const j=e.get(N);j.color.copy(U).multiplyScalar(W),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),n.rectArea[S]=j,S++}else if(N.isPointLight){const j=e.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),j.distance=N.distance,j.decay=N.decay,N.castShadow){const q=N.shadow,Y=t.get(N);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,Y.shadowCameraNear=q.camera.near,Y.shadowCameraFar=q.camera.far,n.pointShadow[y]=Y,n.pointShadowMap[y]=H,n.pointShadowMatrix[y]=N.shadow.matrix,P++}n.point[y]=j,y++}else if(N.isHemisphereLight){const j=e.get(N);j.skyColor.copy(N.color).multiplyScalar(W),j.groundColor.copy(N.groundColor).multiplyScalar(W),n.hemi[A]=j,A++}}S>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ve.LTC_FLOAT_1,n.rectAreaLTC2=Ve.LTC_FLOAT_2):(n.rectAreaLTC1=Ve.LTC_HALF_1,n.rectAreaLTC2=Ve.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=g,n.ambient[2]=m;const E=n.hash;(E.directionalLength!==x||E.pointLength!==y||E.spotLength!==M||E.rectAreaLength!==S||E.hemiLength!==A||E.numDirectionalShadows!==T||E.numPointShadows!==P||E.numSpotShadows!==C||E.numSpotMaps!==b||E.numLightProbes!==R)&&(n.directional.length=x,n.spot.length=M,n.rectArea.length=S,n.point.length=y,n.hemi.length=A,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=C+b-I,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=R,E.directionalLength=x,E.pointLength=y,E.spotLength=M,E.rectAreaLength=S,E.hemiLength=A,E.numDirectionalShadows=T,E.numPointShadows=P,E.numSpotShadows=C,E.numSpotMaps=b,E.numLightProbes=R,n.version=sT++)}function d(f,p){let g=0,m=0,x=0,y=0,M=0;const S=p.matrixWorldInverse;for(let A=0,T=f.length;A<T;A++){const P=f[A];if(P.isDirectionalLight){const C=n.directional[g];C.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(S),g++}else if(P.isSpotLight){const C=n.spot[x];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(S),x++}else if(P.isRectAreaLight){const C=n.rectArea[y];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(S),l.identity(),o.copy(P.matrixWorld),o.premultiply(S),l.extractRotation(o),C.halfWidth.set(P.width*.5,0,0),C.halfHeight.set(0,P.height*.5,0),C.halfWidth.applyMatrix4(l),C.halfHeight.applyMatrix4(l),y++}else if(P.isPointLight){const C=n.point[m];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(S),m++}else if(P.isHemisphereLight){const C=n.hemi[M];C.direction.setFromMatrixPosition(P.matrixWorld),C.direction.transformDirection(S),M++}}}return{setup:u,setupView:d,state:n}}function H0(a){const e=new oT(a),t=[],n=[],s=[];function o(m){g.camera=m,t.length=0,n.length=0,s.length=0}function l(m){t.push(m)}function u(m){n.push(m)}function d(m){s.push(m)}function f(){e.setup(t)}function p(m){e.setupView(t,m)}const g={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:g,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:u,pushLightProbeGrid:d}}function lT(a){let e=new WeakMap;function t(s,o=0){const l=e.get(s);let u;return l===void 0?(u=new H0(a),e.set(s,[u])):o>=l.length?(u=new H0(a),l.push(u)):u=l[o],u}function n(){e=new WeakMap}return{get:t,dispose:n}}const cT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,dT=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],fT=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],V0=new gt,zo=new z,Tf=new z;function hT(a,e,t){let n=new Wx;const s=new qe,o=new qe,l=new tn,u=new Ty,d=new wy,f={},p=t.maxTextureSize,g={[lr]:hi,[hi]:lr,[Li]:Li},m=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:cT,fragmentShader:uT}),x=m.clone();x.defines.HORIZONTAL_PASS=1;const y=new pi;y.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new mn(y,m),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kc;let A=this.type;this.render=function(I,R,E){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||I.length===0)return;this.type===hA&&(pt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=kc);const F=a.getRenderTarget(),B=a.getActiveCubeFace(),N=a.getActiveMipmapLevel(),U=a.state;U.setBlending(Pr),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const W=A!==this.type;W&&R.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(H=>H.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,H=I.length;X<H;X++){const j=I[X],q=j.shadow;if(q===void 0){pt("WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const Y=q.getFrameExtents();s.multiply(Y),o.copy(q.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(o.x=Math.floor(p/Y.x),s.x=o.x*Y.x,q.mapSize.x=o.x),s.y>p&&(o.y=Math.floor(p/Y.y),s.y=o.y*Y.y,q.mapSize.y=o.y));const K=a.state.buffers.depth.getReversed();if(q.camera._reversedDepth=K,q.map===null||W===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Vo){if(j.isPointLight){pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new ji(s.x,s.y,{format:Vs,type:cr,minFilter:Wn,magFilter:Wn,generateMipmaps:!1}),q.map.texture.name=j.name+".shadowMap",q.map.depthTexture=new Xs(s.x,s.y,Bi),q.map.depthTexture.name=j.name+".shadowMapDepth",q.map.depthTexture.format=ur,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Nn,q.map.depthTexture.magFilter=Nn}else j.isPointLight?(q.map=new $x(s.x),q.map.depthTexture=new Ay(s.x,$n)):(q.map=new ji(s.x,s.y),q.map.depthTexture=new Xs(s.x,s.y,$n)),q.map.depthTexture.name=j.name+".shadowMap",q.map.depthTexture.format=ur,this.type===kc?(q.map.depthTexture.compareFunction=K?Xh:Wh,q.map.depthTexture.minFilter=Wn,q.map.depthTexture.magFilter=Wn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Nn,q.map.depthTexture.magFilter=Nn);q.camera.updateProjectionMatrix()}const ne=q.map.isWebGLCubeRenderTarget?6:1;for(let k=0;k<ne;k++){if(q.map.isWebGLCubeRenderTarget)a.setRenderTarget(q.map,k),a.clear();else{k===0&&(a.setRenderTarget(q.map),a.clear());const te=q.getViewport(k);l.set(o.x*te.x,o.y*te.y,o.x*te.z,o.y*te.w),U.viewport(l)}if(j.isPointLight){const te=q.camera,Me=q.matrix,Te=j.distance||te.far;Te!==te.far&&(te.far=Te,te.updateProjectionMatrix()),zo.setFromMatrixPosition(j.matrixWorld),te.position.copy(zo),Tf.copy(te.position),Tf.add(dT[k]),te.up.copy(fT[k]),te.lookAt(Tf),te.updateMatrixWorld(),Me.makeTranslation(-zo.x,-zo.y,-zo.z),V0.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),q._frustum.setFromProjectionMatrix(V0,te.coordinateSystem,te.reversedDepth)}else q.updateMatrices(j);n=q.getFrustum(),C(R,E,q.camera,j,this.type)}q.isPointLightShadow!==!0&&this.type===Vo&&T(q,E),q.needsUpdate=!1}A=this.type,S.needsUpdate=!1,a.setRenderTarget(F,B,N)};function T(I,R){const E=e.update(M);m.defines.VSM_SAMPLES!==I.blurSamples&&(m.defines.VSM_SAMPLES=I.blurSamples,x.defines.VSM_SAMPLES=I.blurSamples,m.needsUpdate=!0,x.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new ji(s.x,s.y,{format:Vs,type:cr})),m.uniforms.shadow_pass.value=I.map.depthTexture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,a.setRenderTarget(I.mapPass),a.clear(),a.renderBufferDirect(R,null,E,m,M,null),x.uniforms.shadow_pass.value=I.mapPass.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,a.setRenderTarget(I.map),a.clear(),a.renderBufferDirect(R,null,E,x,M,null)}function P(I,R,E,F){let B=null;const N=E.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(N!==void 0)B=N;else if(B=E.isPointLight===!0?d:u,a.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=B.uuid,W=R.uuid;let X=f[U];X===void 0&&(X={},f[U]=X);let H=X[W];H===void 0&&(H=B.clone(),X[W]=H,R.addEventListener("dispose",b)),B=H}if(B.visible=R.visible,B.wireframe=R.wireframe,F===Vo?B.side=R.shadowSide!==null?R.shadowSide:R.side:B.side=R.shadowSide!==null?R.shadowSide:g[R.side],B.alphaMap=R.alphaMap,B.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,B.map=R.map,B.clipShadows=R.clipShadows,B.clippingPlanes=R.clippingPlanes,B.clipIntersection=R.clipIntersection,B.displacementMap=R.displacementMap,B.displacementScale=R.displacementScale,B.displacementBias=R.displacementBias,B.wireframeLinewidth=R.wireframeLinewidth,B.linewidth=R.linewidth,E.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const U=a.properties.get(B);U.light=E}return B}function C(I,R,E,F,B){if(I.visible===!1)return;if(I.layers.test(R.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&B===Vo)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,I.matrixWorld);const W=e.update(I),X=I.material;if(Array.isArray(X)){const H=W.groups;for(let j=0,q=H.length;j<q;j++){const Y=H[j],K=X[Y.materialIndex];if(K&&K.visible){const ne=P(I,K,F,B);I.onBeforeShadow(a,I,R,E,W,ne,Y),a.renderBufferDirect(E,null,W,ne,I,Y),I.onAfterShadow(a,I,R,E,W,ne,Y)}}}else if(X.visible){const H=P(I,X,F,B);I.onBeforeShadow(a,I,R,E,W,H,null),a.renderBufferDirect(E,null,W,H,I,null),I.onAfterShadow(a,I,R,E,W,H,null)}}const U=I.children;for(let W=0,X=U.length;W<X;W++)C(U[W],R,E,F,B)}function b(I){I.target.removeEventListener("dispose",b);for(const E in f){const F=f[E],B=I.target.uuid;B in F&&(F[B].dispose(),delete F[B])}}}function pT(a,e){function t(){let $=!1;const De=new tn;let Se=null;const Be=new tn(0,0,0,0);return{setMask:function(ke){Se!==ke&&!$&&(a.colorMask(ke,ke,ke,ke),Se=ke)},setLocked:function(ke){$=ke},setClear:function(ke,Ae,Je,$e,Xt){Xt===!0&&(ke*=$e,Ae*=$e,Je*=$e),De.set(ke,Ae,Je,$e),Be.equals(De)===!1&&(a.clearColor(ke,Ae,Je,$e),Be.copy(De))},reset:function(){$=!1,Se=null,Be.set(-1,0,0,0)}}}function n(){let $=!1,De=!1,Se=null,Be=null,ke=null;return{setReversed:function(Ae){if(De!==Ae){const Je=e.get("EXT_clip_control");Ae?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),De=Ae;const $e=ke;ke=null,this.setClear($e)}},getReversed:function(){return De},setTest:function(Ae){Ae?pe(a.DEPTH_TEST):be(a.DEPTH_TEST)},setMask:function(Ae){Se!==Ae&&!$&&(a.depthMask(Ae),Se=Ae)},setFunc:function(Ae){if(De&&(Ae=QA[Ae]),Be!==Ae){switch(Ae){case Vf:a.depthFunc(a.NEVER);break;case Gf:a.depthFunc(a.ALWAYS);break;case Wf:a.depthFunc(a.LESS);break;case Wa:a.depthFunc(a.LEQUAL);break;case Xf:a.depthFunc(a.EQUAL);break;case Qf:a.depthFunc(a.GEQUAL);break;case qf:a.depthFunc(a.GREATER);break;case Yf:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Be=Ae}},setLocked:function(Ae){$=Ae},setClear:function(Ae){ke!==Ae&&(ke=Ae,De&&(Ae=1-Ae),a.clearDepth(Ae))},reset:function(){$=!1,Se=null,Be=null,ke=null,De=!1}}}function s(){let $=!1,De=null,Se=null,Be=null,ke=null,Ae=null,Je=null,$e=null,Xt=null;return{setTest:function(Ot){$||(Ot?pe(a.STENCIL_TEST):be(a.STENCIL_TEST))},setMask:function(Ot){De!==Ot&&!$&&(a.stencilMask(Ot),De=Ot)},setFunc:function(Ot,Un,Mi){(Se!==Ot||Be!==Un||ke!==Mi)&&(a.stencilFunc(Ot,Un,Mi),Se=Ot,Be=Un,ke=Mi)},setOp:function(Ot,Un,Mi){(Ae!==Ot||Je!==Un||$e!==Mi)&&(a.stencilOp(Ot,Un,Mi),Ae=Ot,Je=Un,$e=Mi)},setLocked:function(Ot){$=Ot},setClear:function(Ot){Xt!==Ot&&(a.clearStencil(Ot),Xt=Ot)},reset:function(){$=!1,De=null,Se=null,Be=null,ke=null,Ae=null,Je=null,$e=null,Xt=null}}}const o=new t,l=new n,u=new s,d=new WeakMap,f=new WeakMap;let p={},g={},m={},x=new WeakMap,y=[],M=null,S=!1,A=null,T=null,P=null,C=null,b=null,I=null,R=null,E=new Dt(0,0,0),F=0,B=!1,N=null,U=null,W=null,X=null,H=null;const j=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Y=0;const K=a.getParameter(a.VERSION);K.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=Y>=1):K.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=Y>=2);let ne=null,k={};const te=a.getParameter(a.SCISSOR_BOX),Me=a.getParameter(a.VIEWPORT),Te=new tn().fromArray(te),Re=new tn().fromArray(Me);function se($,De,Se,Be){const ke=new Uint8Array(4),Ae=a.createTexture();a.bindTexture($,Ae),a.texParameteri($,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri($,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Je=0;Je<Se;Je++)$===a.TEXTURE_3D||$===a.TEXTURE_2D_ARRAY?a.texImage3D(De,0,a.RGBA,1,1,Be,0,a.RGBA,a.UNSIGNED_BYTE,ke):a.texImage2D(De+Je,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ke);return Ae}const xe={};xe[a.TEXTURE_2D]=se(a.TEXTURE_2D,a.TEXTURE_2D,1),xe[a.TEXTURE_CUBE_MAP]=se(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[a.TEXTURE_2D_ARRAY]=se(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),xe[a.TEXTURE_3D]=se(a.TEXTURE_3D,a.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),pe(a.DEPTH_TEST),l.setFunc(Wa),bt(!1),At(Wg),pe(a.CULL_FACE),nt(Pr);function pe($){p[$]!==!0&&(a.enable($),p[$]=!0)}function be($){p[$]!==!1&&(a.disable($),p[$]=!1)}function Oe($,De){return m[$]!==De?(a.bindFramebuffer($,De),m[$]=De,$===a.DRAW_FRAMEBUFFER&&(m[a.FRAMEBUFFER]=De),$===a.FRAMEBUFFER&&(m[a.DRAW_FRAMEBUFFER]=De),!0):!1}function Ge($,De){let Se=y,Be=!1;if($){Se=x.get(De),Se===void 0&&(Se=[],x.set(De,Se));const ke=$.textures;if(Se.length!==ke.length||Se[0]!==a.COLOR_ATTACHMENT0){for(let Ae=0,Je=ke.length;Ae<Je;Ae++)Se[Ae]=a.COLOR_ATTACHMENT0+Ae;Se.length=ke.length,Be=!0}}else Se[0]!==a.BACK&&(Se[0]=a.BACK,Be=!0);Be&&a.drawBuffers(Se)}function xt($){return M!==$?(a.useProgram($),M=$,!0):!1}const Ye={[Ls]:a.FUNC_ADD,[pA]:a.FUNC_SUBTRACT,[mA]:a.FUNC_REVERSE_SUBTRACT};Ye[gA]=a.MIN,Ye[xA]=a.MAX;const dt={[vA]:a.ZERO,[SA]:a.ONE,[AA]:a.SRC_COLOR,[jo]:a.SRC_ALPHA,[TA]:a.SRC_ALPHA_SATURATE,[EA]:a.DST_COLOR,[_A]:a.DST_ALPHA,[yA]:a.ONE_MINUS_SRC_COLOR,[Ko]:a.ONE_MINUS_SRC_ALPHA,[CA]:a.ONE_MINUS_DST_COLOR,[MA]:a.ONE_MINUS_DST_ALPHA,[wA]:a.CONSTANT_COLOR,[bA]:a.ONE_MINUS_CONSTANT_COLOR,[RA]:a.CONSTANT_ALPHA,[IA]:a.ONE_MINUS_CONSTANT_ALPHA};function nt($,De,Se,Be,ke,Ae,Je,$e,Xt,Ot){if($===Pr){S===!0&&(be(a.BLEND),S=!1);return}if(S===!1&&(pe(a.BLEND),S=!0),$!==Sx){if($!==A||Ot!==B){if((T!==Ls||b!==Ls)&&(a.blendEquation(a.FUNC_ADD),T=Ls,b=Ls),Ot)switch($){case us:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Xg:a.blendFunc(a.ONE,a.ONE);break;case Qg:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case qg:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Lt("WebGLState: Invalid blending: ",$);break}else switch($){case us:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Xg:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case Qg:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qg:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",$);break}P=null,C=null,I=null,R=null,E.set(0,0,0),F=0,A=$,B=Ot}return}ke=ke||De,Ae=Ae||Se,Je=Je||Be,(De!==T||ke!==b)&&(a.blendEquationSeparate(Ye[De],Ye[ke]),T=De,b=ke),(Se!==P||Be!==C||Ae!==I||Je!==R)&&(a.blendFuncSeparate(dt[Se],dt[Be],dt[Ae],dt[Je]),P=Se,C=Be,I=Ae,R=Je),($e.equals(E)===!1||Xt!==F)&&(a.blendColor($e.r,$e.g,$e.b,Xt),E.copy($e),F=Xt),A=$,B=!1}function ht($,De){$.side===Li?be(a.CULL_FACE):pe(a.CULL_FACE);let Se=$.side===hi;De&&(Se=!Se),bt(Se),$.blending===us&&$.transparent===!1?nt(Pr):nt($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),l.setFunc($.depthFunc),l.setTest($.depthTest),l.setMask($.depthWrite),o.setMask($.colorWrite);const Be=$.stencilWrite;u.setTest(Be),Be&&(u.setMask($.stencilWriteMask),u.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),u.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),Bt($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?pe(a.SAMPLE_ALPHA_TO_COVERAGE):be(a.SAMPLE_ALPHA_TO_COVERAGE)}function bt($){N!==$&&($?a.frontFace(a.CW):a.frontFace(a.CCW),N=$)}function At($){$!==dA?(pe(a.CULL_FACE),$!==U&&($===Wg?a.cullFace(a.BACK):$===fA?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):be(a.CULL_FACE),U=$}function Tt($){$!==W&&(q&&a.lineWidth($),W=$)}function Bt($,De,Se){$?(pe(a.POLYGON_OFFSET_FILL),(X!==De||H!==Se)&&(X=De,H=Se,l.getReversed()&&(De=-De),a.polygonOffset(De,Se))):be(a.POLYGON_OFFSET_FILL)}function Ut($){$?pe(a.SCISSOR_TEST):be(a.SCISSOR_TEST)}function qt($){$===void 0&&($=a.TEXTURE0+j-1),ne!==$&&(a.activeTexture($),ne=$)}function ee($,De,Se){Se===void 0&&(ne===null?Se=a.TEXTURE0+j-1:Se=ne);let Be=k[Se];Be===void 0&&(Be={type:void 0,texture:void 0},k[Se]=Be),(Be.type!==$||Be.texture!==De)&&(ne!==Se&&(a.activeTexture(Se),ne=Se),a.bindTexture($,De||xe[$]),Be.type=$,Be.texture=De)}function hn(){const $=k[ne];$!==void 0&&$.type!==void 0&&(a.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function It(){try{a.compressedTexImage2D(...arguments)}catch($){Lt("WebGLState:",$)}}function O(){try{a.compressedTexImage3D(...arguments)}catch($){Lt("WebGLState:",$)}}function w(){try{a.texSubImage2D(...arguments)}catch($){Lt("WebGLState:",$)}}function ae(){try{a.texSubImage3D(...arguments)}catch($){Lt("WebGLState:",$)}}function de(){try{a.compressedTexSubImage2D(...arguments)}catch($){Lt("WebGLState:",$)}}function ge(){try{a.compressedTexSubImage3D(...arguments)}catch($){Lt("WebGLState:",$)}}function we(){try{a.texStorage2D(...arguments)}catch($){Lt("WebGLState:",$)}}function Q(){try{a.texStorage3D(...arguments)}catch($){Lt("WebGLState:",$)}}function ie(){try{a.texImage2D(...arguments)}catch($){Lt("WebGLState:",$)}}function me(){try{a.texImage3D(...arguments)}catch($){Lt("WebGLState:",$)}}function Ee($){return g[$]!==void 0?g[$]:a.getParameter($)}function He($,De){g[$]!==De&&(a.pixelStorei($,De),g[$]=De)}function Le($){Te.equals($)===!1&&(a.scissor($.x,$.y,$.z,$.w),Te.copy($))}function Ie($){Re.equals($)===!1&&(a.viewport($.x,$.y,$.z,$.w),Re.copy($))}function st($,De){let Se=f.get(De);Se===void 0&&(Se=new WeakMap,f.set(De,Se));let Be=Se.get($);Be===void 0&&(Be=a.getUniformBlockIndex(De,$.name),Se.set($,Be))}function lt($,De){const Be=f.get(De).get($);d.get(De)!==Be&&(a.uniformBlockBinding(De,Be,$.__bindingPointIndex),d.set(De,Be))}function at(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),l.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),p={},g={},ne=null,k={},m={},x=new WeakMap,y=[],M=null,S=!1,A=null,T=null,P=null,C=null,b=null,I=null,R=null,E=new Dt(0,0,0),F=0,B=!1,N=null,U=null,W=null,X=null,H=null,Te.set(0,0,a.canvas.width,a.canvas.height),Re.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:pe,disable:be,bindFramebuffer:Oe,drawBuffers:Ge,useProgram:xt,setBlending:nt,setMaterial:ht,setFlipSided:bt,setCullFace:At,setLineWidth:Tt,setPolygonOffset:Bt,setScissorTest:Ut,activeTexture:qt,bindTexture:ee,unbindTexture:hn,compressedTexImage2D:It,compressedTexImage3D:O,texImage2D:ie,texImage3D:me,pixelStorei:He,getParameter:Ee,updateUBOMapping:st,uniformBlockBinding:lt,texStorage2D:we,texStorage3D:Q,texSubImage2D:w,texSubImage3D:ae,compressedTexSubImage2D:de,compressedTexSubImage3D:ge,scissor:Le,viewport:Ie,reset:at}}function mT(a,e,t,n,s,o,l){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new qe,p=new WeakMap,g=new Set;let m;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(O,w){return y?new OffscreenCanvas(O,w):$c("canvas")}function S(O,w,ae){let de=1;const ge=It(O);if((ge.width>ae||ge.height>ae)&&(de=ae/Math.max(ge.width,ge.height)),de<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const we=Math.floor(de*ge.width),Q=Math.floor(de*ge.height);m===void 0&&(m=M(we,Q));const ie=w?M(we,Q):m;return ie.width=we,ie.height=Q,ie.getContext("2d").drawImage(O,0,0,we,Q),pt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+we+"x"+Q+")."),ie}else return"data"in O&&pt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),O;return O}function A(O){return O.generateMipmaps}function T(O){a.generateMipmap(O)}function P(O){return O.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?a.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function C(O,w,ae,de,ge,we=!1){if(O!==null){if(a[O]!==void 0)return a[O];pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Q;de&&(Q=e.get("EXT_texture_norm16"),Q||pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=w;if(w===a.RED&&(ae===a.FLOAT&&(ie=a.R32F),ae===a.HALF_FLOAT&&(ie=a.R16F),ae===a.UNSIGNED_BYTE&&(ie=a.R8),ae===a.UNSIGNED_SHORT&&Q&&(ie=Q.R16_EXT),ae===a.SHORT&&Q&&(ie=Q.R16_SNORM_EXT)),w===a.RED_INTEGER&&(ae===a.UNSIGNED_BYTE&&(ie=a.R8UI),ae===a.UNSIGNED_SHORT&&(ie=a.R16UI),ae===a.UNSIGNED_INT&&(ie=a.R32UI),ae===a.BYTE&&(ie=a.R8I),ae===a.SHORT&&(ie=a.R16I),ae===a.INT&&(ie=a.R32I)),w===a.RG&&(ae===a.FLOAT&&(ie=a.RG32F),ae===a.HALF_FLOAT&&(ie=a.RG16F),ae===a.UNSIGNED_BYTE&&(ie=a.RG8),ae===a.UNSIGNED_SHORT&&Q&&(ie=Q.RG16_EXT),ae===a.SHORT&&Q&&(ie=Q.RG16_SNORM_EXT)),w===a.RG_INTEGER&&(ae===a.UNSIGNED_BYTE&&(ie=a.RG8UI),ae===a.UNSIGNED_SHORT&&(ie=a.RG16UI),ae===a.UNSIGNED_INT&&(ie=a.RG32UI),ae===a.BYTE&&(ie=a.RG8I),ae===a.SHORT&&(ie=a.RG16I),ae===a.INT&&(ie=a.RG32I)),w===a.RGB_INTEGER&&(ae===a.UNSIGNED_BYTE&&(ie=a.RGB8UI),ae===a.UNSIGNED_SHORT&&(ie=a.RGB16UI),ae===a.UNSIGNED_INT&&(ie=a.RGB32UI),ae===a.BYTE&&(ie=a.RGB8I),ae===a.SHORT&&(ie=a.RGB16I),ae===a.INT&&(ie=a.RGB32I)),w===a.RGBA_INTEGER&&(ae===a.UNSIGNED_BYTE&&(ie=a.RGBA8UI),ae===a.UNSIGNED_SHORT&&(ie=a.RGBA16UI),ae===a.UNSIGNED_INT&&(ie=a.RGBA32UI),ae===a.BYTE&&(ie=a.RGBA8I),ae===a.SHORT&&(ie=a.RGBA16I),ae===a.INT&&(ie=a.RGBA32I)),w===a.RGB&&(ae===a.UNSIGNED_SHORT&&Q&&(ie=Q.RGB16_EXT),ae===a.SHORT&&Q&&(ie=Q.RGB16_SNORM_EXT),ae===a.UNSIGNED_INT_5_9_9_9_REV&&(ie=a.RGB9_E5),ae===a.UNSIGNED_INT_10F_11F_11F_REV&&(ie=a.R11F_G11F_B10F)),w===a.RGBA){const me=we?jc:Rt.getTransfer(ge);ae===a.FLOAT&&(ie=a.RGBA32F),ae===a.HALF_FLOAT&&(ie=a.RGBA16F),ae===a.UNSIGNED_BYTE&&(ie=me===Wt?a.SRGB8_ALPHA8:a.RGBA8),ae===a.UNSIGNED_SHORT&&Q&&(ie=Q.RGBA16_EXT),ae===a.SHORT&&Q&&(ie=Q.RGBA16_SNORM_EXT),ae===a.UNSIGNED_SHORT_4_4_4_4&&(ie=a.RGBA4),ae===a.UNSIGNED_SHORT_5_5_5_1&&(ie=a.RGB5_A1)}return(ie===a.R16F||ie===a.R32F||ie===a.RG16F||ie===a.RG32F||ie===a.RGBA16F||ie===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function b(O,w){let ae;return O?w===null||w===$n||w===Zo?ae=a.DEPTH24_STENCIL8:w===Bi?ae=a.DEPTH32F_STENCIL8:w===$o&&(ae=a.DEPTH24_STENCIL8,pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===$n||w===Zo?ae=a.DEPTH_COMPONENT24:w===Bi?ae=a.DEPTH_COMPONENT32F:w===$o&&(ae=a.DEPTH_COMPONENT16),ae}function I(O,w){return A(O)===!0||O.isFramebufferTexture&&O.minFilter!==Nn&&O.minFilter!==Wn?Math.log2(Math.max(w.width,w.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?w.mipmaps.length:1}function R(O){const w=O.target;w.removeEventListener("dispose",R),F(w),w.isVideoTexture&&p.delete(w),w.isHTMLTexture&&g.delete(w)}function E(O){const w=O.target;w.removeEventListener("dispose",E),N(w)}function F(O){const w=n.get(O);if(w.__webglInit===void 0)return;const ae=O.source,de=x.get(ae);if(de){const ge=de[w.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&B(O),Object.keys(de).length===0&&x.delete(ae)}n.remove(O)}function B(O){const w=n.get(O);a.deleteTexture(w.__webglTexture);const ae=O.source,de=x.get(ae);delete de[w.__cacheKey],l.memory.textures--}function N(O){const w=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(w.__webglFramebuffer[de]))for(let ge=0;ge<w.__webglFramebuffer[de].length;ge++)a.deleteFramebuffer(w.__webglFramebuffer[de][ge]);else a.deleteFramebuffer(w.__webglFramebuffer[de]);w.__webglDepthbuffer&&a.deleteRenderbuffer(w.__webglDepthbuffer[de])}else{if(Array.isArray(w.__webglFramebuffer))for(let de=0;de<w.__webglFramebuffer.length;de++)a.deleteFramebuffer(w.__webglFramebuffer[de]);else a.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&a.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&a.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let de=0;de<w.__webglColorRenderbuffer.length;de++)w.__webglColorRenderbuffer[de]&&a.deleteRenderbuffer(w.__webglColorRenderbuffer[de]);w.__webglDepthRenderbuffer&&a.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const ae=O.textures;for(let de=0,ge=ae.length;de<ge;de++){const we=n.get(ae[de]);we.__webglTexture&&(a.deleteTexture(we.__webglTexture),l.memory.textures--),n.remove(ae[de])}n.remove(O)}let U=0;function W(){U=0}function X(){return U}function H(O){U=O}function j(){const O=U;return O>=s.maxTextures&&pt("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+s.maxTextures),U+=1,O}function q(O){const w=[];return w.push(O.wrapS),w.push(O.wrapT),w.push(O.wrapR||0),w.push(O.magFilter),w.push(O.minFilter),w.push(O.anisotropy),w.push(O.internalFormat),w.push(O.format),w.push(O.type),w.push(O.generateMipmaps),w.push(O.premultiplyAlpha),w.push(O.flipY),w.push(O.unpackAlignment),w.push(O.colorSpace),w.join()}function Y(O,w){const ae=n.get(O);if(O.isVideoTexture&&ee(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&ae.__version!==O.version){const de=O.image;if(de===null)pt("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)pt("WebGLRenderer: Texture marked for update but image is incomplete");else{be(ae,O,w);return}}else O.isExternalTexture&&(ae.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,ae.__webglTexture,a.TEXTURE0+w)}function K(O,w){const ae=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ae.__version!==O.version){be(ae,O,w);return}else O.isExternalTexture&&(ae.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,ae.__webglTexture,a.TEXTURE0+w)}function ne(O,w){const ae=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ae.__version!==O.version){be(ae,O,w);return}t.bindTexture(a.TEXTURE_3D,ae.__webglTexture,a.TEXTURE0+w)}function k(O,w){const ae=n.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&ae.__version!==O.version){Oe(ae,O,w);return}t.bindTexture(a.TEXTURE_CUBE_MAP,ae.__webglTexture,a.TEXTURE0+w)}const te={[jf]:a.REPEAT,[Ir]:a.CLAMP_TO_EDGE,[Kf]:a.MIRRORED_REPEAT},Me={[Nn]:a.NEAREST,[FA]:a.NEAREST_MIPMAP_NEAREST,[lc]:a.NEAREST_MIPMAP_LINEAR,[Wn]:a.LINEAR,[Kd]:a.LINEAR_MIPMAP_NEAREST,[Os]:a.LINEAR_MIPMAP_LINEAR},Te={[NA]:a.NEVER,[HA]:a.ALWAYS,[UA]:a.LESS,[Wh]:a.LEQUAL,[OA]:a.EQUAL,[Xh]:a.GEQUAL,[kA]:a.GREATER,[zA]:a.NOTEQUAL};function Re(O,w){if(w.type===Bi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Wn||w.magFilter===Kd||w.magFilter===lc||w.magFilter===Os||w.minFilter===Wn||w.minFilter===Kd||w.minFilter===lc||w.minFilter===Os)&&pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(O,a.TEXTURE_WRAP_S,te[w.wrapS]),a.texParameteri(O,a.TEXTURE_WRAP_T,te[w.wrapT]),(O===a.TEXTURE_3D||O===a.TEXTURE_2D_ARRAY)&&a.texParameteri(O,a.TEXTURE_WRAP_R,te[w.wrapR]),a.texParameteri(O,a.TEXTURE_MAG_FILTER,Me[w.magFilter]),a.texParameteri(O,a.TEXTURE_MIN_FILTER,Me[w.minFilter]),w.compareFunction&&(a.texParameteri(O,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(O,a.TEXTURE_COMPARE_FUNC,Te[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Nn||w.minFilter!==lc&&w.minFilter!==Os||w.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");a.texParameterf(O,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function se(O,w){let ae=!1;O.__webglInit===void 0&&(O.__webglInit=!0,w.addEventListener("dispose",R));const de=w.source;let ge=x.get(de);ge===void 0&&(ge={},x.set(de,ge));const we=q(w);if(we!==O.__cacheKey){ge[we]===void 0&&(ge[we]={texture:a.createTexture(),usedTimes:0},l.memory.textures++,ae=!0),ge[we].usedTimes++;const Q=ge[O.__cacheKey];Q!==void 0&&(ge[O.__cacheKey].usedTimes--,Q.usedTimes===0&&B(w)),O.__cacheKey=we,O.__webglTexture=ge[we].texture}return ae}function xe(O,w,ae){return Math.floor(Math.floor(O/ae)/w)}function pe(O,w,ae,de){const we=O.updateRanges;if(we.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,w.width,w.height,ae,de,w.data);else{we.sort((He,Le)=>He.start-Le.start);let Q=0;for(let He=1;He<we.length;He++){const Le=we[Q],Ie=we[He],st=Le.start+Le.count,lt=xe(Ie.start,w.width,4),at=xe(Le.start,w.width,4);Ie.start<=st+1&&lt===at&&xe(Ie.start+Ie.count-1,w.width,4)===lt?Le.count=Math.max(Le.count,Ie.start+Ie.count-Le.start):(++Q,we[Q]=Ie)}we.length=Q+1;const ie=t.getParameter(a.UNPACK_ROW_LENGTH),me=t.getParameter(a.UNPACK_SKIP_PIXELS),Ee=t.getParameter(a.UNPACK_SKIP_ROWS);t.pixelStorei(a.UNPACK_ROW_LENGTH,w.width);for(let He=0,Le=we.length;He<Le;He++){const Ie=we[He],st=Math.floor(Ie.start/4),lt=Math.ceil(Ie.count/4),at=st%w.width,$=Math.floor(st/w.width),De=lt,Se=1;t.pixelStorei(a.UNPACK_SKIP_PIXELS,at),t.pixelStorei(a.UNPACK_SKIP_ROWS,$),t.texSubImage2D(a.TEXTURE_2D,0,at,$,De,Se,ae,de,w.data)}O.clearUpdateRanges(),t.pixelStorei(a.UNPACK_ROW_LENGTH,ie),t.pixelStorei(a.UNPACK_SKIP_PIXELS,me),t.pixelStorei(a.UNPACK_SKIP_ROWS,Ee)}}function be(O,w,ae){let de=a.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(de=a.TEXTURE_2D_ARRAY),w.isData3DTexture&&(de=a.TEXTURE_3D);const ge=se(O,w),we=w.source;t.bindTexture(de,O.__webglTexture,a.TEXTURE0+ae);const Q=n.get(we);if(we.version!==Q.__version||ge===!0){if(t.activeTexture(a.TEXTURE0+ae),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const Se=Rt.getPrimaries(Rt.workingColorSpace),Be=w.colorSpace===ls?null:Rt.getPrimaries(w.colorSpace),ke=w.colorSpace===ls||Se===Be?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(a.UNPACK_ALIGNMENT,w.unpackAlignment);let me=S(w.image,!1,s.maxTextureSize);me=hn(w,me);const Ee=o.convert(w.format,w.colorSpace),He=o.convert(w.type);let Le=C(w.internalFormat,Ee,He,w.normalized,w.colorSpace,w.isVideoTexture);Re(de,w);let Ie;const st=w.mipmaps,lt=w.isVideoTexture!==!0,at=Q.__version===void 0||ge===!0,$=we.dataReady,De=I(w,me);if(w.isDepthTexture)Le=b(w.format===ks,w.type),at&&(lt?t.texStorage2D(a.TEXTURE_2D,1,Le,me.width,me.height):t.texImage2D(a.TEXTURE_2D,0,Le,me.width,me.height,0,Ee,He,null));else if(w.isDataTexture)if(st.length>0){lt&&at&&t.texStorage2D(a.TEXTURE_2D,De,Le,st[0].width,st[0].height);for(let Se=0,Be=st.length;Se<Be;Se++)Ie=st[Se],lt?$&&t.texSubImage2D(a.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,Ee,He,Ie.data):t.texImage2D(a.TEXTURE_2D,Se,Le,Ie.width,Ie.height,0,Ee,He,Ie.data);w.generateMipmaps=!1}else lt?(at&&t.texStorage2D(a.TEXTURE_2D,De,Le,me.width,me.height),$&&pe(w,me,Ee,He)):t.texImage2D(a.TEXTURE_2D,0,Le,me.width,me.height,0,Ee,He,me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){lt&&at&&t.texStorage3D(a.TEXTURE_2D_ARRAY,De,Le,st[0].width,st[0].height,me.depth);for(let Se=0,Be=st.length;Se<Be;Se++)if(Ie=st[Se],w.format!==Zn)if(Ee!==null)if(lt){if($)if(w.layerUpdates.size>0){const ke=S0(Ie.width,Ie.height,w.format,w.type);for(const Ae of w.layerUpdates){const Je=Ie.data.subarray(Ae*ke/Ie.data.BYTES_PER_ELEMENT,(Ae+1)*ke/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Se,0,0,Ae,Ie.width,Ie.height,1,Ee,Je)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Se,0,0,0,Ie.width,Ie.height,me.depth,Ee,Ie.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Se,Le,Ie.width,Ie.height,me.depth,0,Ie.data,0,0);else pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?$&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,Se,0,0,0,Ie.width,Ie.height,me.depth,Ee,He,Ie.data):t.texImage3D(a.TEXTURE_2D_ARRAY,Se,Le,Ie.width,Ie.height,me.depth,0,Ee,He,Ie.data)}else{lt&&at&&t.texStorage2D(a.TEXTURE_2D,De,Le,st[0].width,st[0].height);for(let Se=0,Be=st.length;Se<Be;Se++)Ie=st[Se],w.format!==Zn?Ee!==null?lt?$&&t.compressedTexSubImage2D(a.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,Ee,Ie.data):t.compressedTexImage2D(a.TEXTURE_2D,Se,Le,Ie.width,Ie.height,0,Ie.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?$&&t.texSubImage2D(a.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,Ee,He,Ie.data):t.texImage2D(a.TEXTURE_2D,Se,Le,Ie.width,Ie.height,0,Ee,He,Ie.data)}else if(w.isDataArrayTexture)if(lt){if(at&&t.texStorage3D(a.TEXTURE_2D_ARRAY,De,Le,me.width,me.height,me.depth),$)if(w.layerUpdates.size>0){const Se=S0(me.width,me.height,w.format,w.type);for(const Be of w.layerUpdates){const ke=me.data.subarray(Be*Se/me.data.BYTES_PER_ELEMENT,(Be+1)*Se/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Be,me.width,me.height,1,Ee,He,ke)}w.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ee,He,me.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Le,me.width,me.height,me.depth,0,Ee,He,me.data);else if(w.isData3DTexture)lt?(at&&t.texStorage3D(a.TEXTURE_3D,De,Le,me.width,me.height,me.depth),$&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ee,He,me.data)):t.texImage3D(a.TEXTURE_3D,0,Le,me.width,me.height,me.depth,0,Ee,He,me.data);else if(w.isFramebufferTexture){if(at)if(lt)t.texStorage2D(a.TEXTURE_2D,De,Le,me.width,me.height);else{let Se=me.width,Be=me.height;for(let ke=0;ke<De;ke++)t.texImage2D(a.TEXTURE_2D,ke,Le,Se,Be,0,Ee,He,null),Se>>=1,Be>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in a){const Se=a.canvas;if(Se.hasAttribute("layoutsubtree")||Se.setAttribute("layoutsubtree","true"),me.parentNode!==Se){Se.appendChild(me),g.add(w),Se.onpaint=Be=>{const ke=Be.changedElements;for(const Ae of g)ke.includes(Ae.image)&&(Ae.needsUpdate=!0)},Se.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,me);else{const ke=a.RGBA,Ae=a.RGBA,Je=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,ke,Ae,Je,me)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(st.length>0){if(lt&&at){const Se=It(st[0]);t.texStorage2D(a.TEXTURE_2D,De,Le,Se.width,Se.height)}for(let Se=0,Be=st.length;Se<Be;Se++)Ie=st[Se],lt?$&&t.texSubImage2D(a.TEXTURE_2D,Se,0,0,Ee,He,Ie):t.texImage2D(a.TEXTURE_2D,Se,Le,Ee,He,Ie);w.generateMipmaps=!1}else if(lt){if(at){const Se=It(me);t.texStorage2D(a.TEXTURE_2D,De,Le,Se.width,Se.height)}$&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,Ee,He,me)}else t.texImage2D(a.TEXTURE_2D,0,Le,Ee,He,me);A(w)&&T(de),Q.__version=we.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function Oe(O,w,ae){if(w.image.length!==6)return;const de=se(O,w),ge=w.source;t.bindTexture(a.TEXTURE_CUBE_MAP,O.__webglTexture,a.TEXTURE0+ae);const we=n.get(ge);if(ge.version!==we.__version||de===!0){t.activeTexture(a.TEXTURE0+ae);const Q=Rt.getPrimaries(Rt.workingColorSpace),ie=w.colorSpace===ls?null:Rt.getPrimaries(w.colorSpace),me=w.colorSpace===ls||Q===ie?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(a.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ee=w.isCompressedTexture||w.image[0].isCompressedTexture,He=w.image[0]&&w.image[0].isDataTexture,Le=[];for(let Ae=0;Ae<6;Ae++)!Ee&&!He?Le[Ae]=S(w.image[Ae],!0,s.maxCubemapSize):Le[Ae]=He?w.image[Ae].image:w.image[Ae],Le[Ae]=hn(w,Le[Ae]);const Ie=Le[0],st=o.convert(w.format,w.colorSpace),lt=o.convert(w.type),at=C(w.internalFormat,st,lt,w.normalized,w.colorSpace),$=w.isVideoTexture!==!0,De=we.__version===void 0||de===!0,Se=ge.dataReady;let Be=I(w,Ie);Re(a.TEXTURE_CUBE_MAP,w);let ke;if(Ee){$&&De&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Be,at,Ie.width,Ie.height);for(let Ae=0;Ae<6;Ae++){ke=Le[Ae].mipmaps;for(let Je=0;Je<ke.length;Je++){const $e=ke[Je];w.format!==Zn?st!==null?$?Se&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je,0,0,$e.width,$e.height,st,$e.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je,at,$e.width,$e.height,0,$e.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?Se&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je,0,0,$e.width,$e.height,st,lt,$e.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je,at,$e.width,$e.height,0,st,lt,$e.data)}}}else{if(ke=w.mipmaps,$&&De){ke.length>0&&Be++;const Ae=It(Le[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,Be,at,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(He){$?Se&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Le[Ae].width,Le[Ae].height,st,lt,Le[Ae].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,at,Le[Ae].width,Le[Ae].height,0,st,lt,Le[Ae].data);for(let Je=0;Je<ke.length;Je++){const Xt=ke[Je].image[Ae].image;$?Se&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je+1,0,0,Xt.width,Xt.height,st,lt,Xt.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je+1,at,Xt.width,Xt.height,0,st,lt,Xt.data)}}else{$?Se&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,st,lt,Le[Ae]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,at,st,lt,Le[Ae]);for(let Je=0;Je<ke.length;Je++){const $e=ke[Je];$?Se&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je+1,0,0,st,lt,$e.image[Ae]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je+1,at,st,lt,$e.image[Ae])}}}A(w)&&T(a.TEXTURE_CUBE_MAP),we.__version=ge.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function Ge(O,w,ae,de,ge,we){const Q=o.convert(ae.format,ae.colorSpace),ie=o.convert(ae.type),me=C(ae.internalFormat,Q,ie,ae.normalized,ae.colorSpace),Ee=n.get(w),He=n.get(ae);if(He.__renderTarget=w,!Ee.__hasExternalTextures){const Le=Math.max(1,w.width>>we),Ie=Math.max(1,w.height>>we);ge===a.TEXTURE_3D||ge===a.TEXTURE_2D_ARRAY?t.texImage3D(ge,we,me,Le,Ie,w.depth,0,Q,ie,null):t.texImage2D(ge,we,me,Le,Ie,0,Q,ie,null)}t.bindFramebuffer(a.FRAMEBUFFER,O),qt(w)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,de,ge,He.__webglTexture,0,Ut(w)):(ge===a.TEXTURE_2D||ge>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,de,ge,He.__webglTexture,we),t.bindFramebuffer(a.FRAMEBUFFER,null)}function xt(O,w,ae){if(a.bindRenderbuffer(a.RENDERBUFFER,O),w.depthBuffer){const de=w.depthTexture,ge=de&&de.isDepthTexture?de.type:null,we=b(w.stencilBuffer,ge),Q=w.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;qt(w)?u.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ut(w),we,w.width,w.height):ae?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ut(w),we,w.width,w.height):a.renderbufferStorage(a.RENDERBUFFER,we,w.width,w.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Q,a.RENDERBUFFER,O)}else{const de=w.textures;for(let ge=0;ge<de.length;ge++){const we=de[ge],Q=o.convert(we.format,we.colorSpace),ie=o.convert(we.type),me=C(we.internalFormat,Q,ie,we.normalized,we.colorSpace);qt(w)?u.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ut(w),me,w.width,w.height):ae?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ut(w),me,w.width,w.height):a.renderbufferStorage(a.RENDERBUFFER,me,w.width,w.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Ye(O,w,ae){const de=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,O),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=n.get(w.depthTexture);if(ge.__renderTarget=w,(!ge.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),de){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,w.depthTexture.addEventListener("dispose",R)),ge.__webglTexture===void 0){ge.__webglTexture=a.createTexture(),t.bindTexture(a.TEXTURE_CUBE_MAP,ge.__webglTexture),Re(a.TEXTURE_CUBE_MAP,w.depthTexture);const Ee=o.convert(w.depthTexture.format),He=o.convert(w.depthTexture.type);let Le;w.depthTexture.format===ur?Le=a.DEPTH_COMPONENT24:w.depthTexture.format===ks&&(Le=a.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Le,w.width,w.height,0,Ee,He,null)}}else Y(w.depthTexture,0);const we=ge.__webglTexture,Q=Ut(w),ie=de?a.TEXTURE_CUBE_MAP_POSITIVE_X+ae:a.TEXTURE_2D,me=w.depthTexture.format===ks?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(w.depthTexture.format===ur)qt(w)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,me,ie,we,0,Q):a.framebufferTexture2D(a.FRAMEBUFFER,me,ie,we,0);else if(w.depthTexture.format===ks)qt(w)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,me,ie,we,0,Q):a.framebufferTexture2D(a.FRAMEBUFFER,me,ie,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(O){const w=n.get(O),ae=O.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==O.depthTexture){const de=O.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),de){const ge=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,de.removeEventListener("dispose",ge)};de.addEventListener("dispose",ge),w.__depthDisposeCallback=ge}w.__boundDepthTexture=de}if(O.depthTexture&&!w.__autoAllocateDepthBuffer)if(ae)for(let de=0;de<6;de++)Ye(w.__webglFramebuffer[de],O,de);else{const de=O.texture.mipmaps;de&&de.length>0?Ye(w.__webglFramebuffer[0],O,0):Ye(w.__webglFramebuffer,O,0)}else if(ae){w.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer[de]),w.__webglDepthbuffer[de]===void 0)w.__webglDepthbuffer[de]=a.createRenderbuffer(),xt(w.__webglDepthbuffer[de],O,!1);else{const ge=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,we=w.__webglDepthbuffer[de];a.bindRenderbuffer(a.RENDERBUFFER,we),a.framebufferRenderbuffer(a.FRAMEBUFFER,ge,a.RENDERBUFFER,we)}}else{const de=O.texture.mipmaps;if(de&&de.length>0?t.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=a.createRenderbuffer(),xt(w.__webglDepthbuffer,O,!1);else{const ge=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,we=w.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,we),a.framebufferRenderbuffer(a.FRAMEBUFFER,ge,a.RENDERBUFFER,we)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function nt(O,w,ae){const de=n.get(O);w!==void 0&&Ge(de.__webglFramebuffer,O,O.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),ae!==void 0&&dt(O)}function ht(O){const w=O.texture,ae=n.get(O),de=n.get(w);O.addEventListener("dispose",E);const ge=O.textures,we=O.isWebGLCubeRenderTarget===!0,Q=ge.length>1;if(Q||(de.__webglTexture===void 0&&(de.__webglTexture=a.createTexture()),de.__version=w.version,l.memory.textures++),we){ae.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(w.mipmaps&&w.mipmaps.length>0){ae.__webglFramebuffer[ie]=[];for(let me=0;me<w.mipmaps.length;me++)ae.__webglFramebuffer[ie][me]=a.createFramebuffer()}else ae.__webglFramebuffer[ie]=a.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){ae.__webglFramebuffer=[];for(let ie=0;ie<w.mipmaps.length;ie++)ae.__webglFramebuffer[ie]=a.createFramebuffer()}else ae.__webglFramebuffer=a.createFramebuffer();if(Q)for(let ie=0,me=ge.length;ie<me;ie++){const Ee=n.get(ge[ie]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=a.createTexture(),l.memory.textures++)}if(O.samples>0&&qt(O)===!1){ae.__webglMultisampledFramebuffer=a.createFramebuffer(),ae.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let ie=0;ie<ge.length;ie++){const me=ge[ie];ae.__webglColorRenderbuffer[ie]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,ae.__webglColorRenderbuffer[ie]);const Ee=o.convert(me.format,me.colorSpace),He=o.convert(me.type),Le=C(me.internalFormat,Ee,He,me.normalized,me.colorSpace,O.isXRRenderTarget===!0),Ie=Ut(O);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ie,Le,O.width,O.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ie,a.RENDERBUFFER,ae.__webglColorRenderbuffer[ie])}a.bindRenderbuffer(a.RENDERBUFFER,null),O.depthBuffer&&(ae.__webglDepthRenderbuffer=a.createRenderbuffer(),xt(ae.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(we){t.bindTexture(a.TEXTURE_CUBE_MAP,de.__webglTexture),Re(a.TEXTURE_CUBE_MAP,w);for(let ie=0;ie<6;ie++)if(w.mipmaps&&w.mipmaps.length>0)for(let me=0;me<w.mipmaps.length;me++)Ge(ae.__webglFramebuffer[ie][me],O,w,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,me);else Ge(ae.__webglFramebuffer[ie],O,w,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);A(w)&&T(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){for(let ie=0,me=ge.length;ie<me;ie++){const Ee=ge[ie],He=n.get(Ee);let Le=a.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Le=O.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(Le,He.__webglTexture),Re(Le,Ee),Ge(ae.__webglFramebuffer,O,Ee,a.COLOR_ATTACHMENT0+ie,Le,0),A(Ee)&&T(Le)}t.unbindTexture()}else{let ie=a.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ie=O.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(ie,de.__webglTexture),Re(ie,w),w.mipmaps&&w.mipmaps.length>0)for(let me=0;me<w.mipmaps.length;me++)Ge(ae.__webglFramebuffer[me],O,w,a.COLOR_ATTACHMENT0,ie,me);else Ge(ae.__webglFramebuffer,O,w,a.COLOR_ATTACHMENT0,ie,0);A(w)&&T(ie),t.unbindTexture()}O.depthBuffer&&dt(O)}function bt(O){const w=O.textures;for(let ae=0,de=w.length;ae<de;ae++){const ge=w[ae];if(A(ge)){const we=P(O),Q=n.get(ge).__webglTexture;t.bindTexture(we,Q),T(we),t.unbindTexture()}}}const At=[],Tt=[];function Bt(O){if(O.samples>0){if(qt(O)===!1){const w=O.textures,ae=O.width,de=O.height;let ge=a.COLOR_BUFFER_BIT;const we=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Q=n.get(O),ie=w.length>1;if(ie)for(let Ee=0;Ee<w.length;Ee++)t.bindFramebuffer(a.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ee,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,Q.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ee,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,Q.__webglMultisampledFramebuffer);const me=O.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Q.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let Ee=0;Ee<w.length;Ee++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ge|=a.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ge|=a.STENCIL_BUFFER_BIT)),ie){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Q.__webglColorRenderbuffer[Ee]);const He=n.get(w[Ee]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,He,0)}a.blitFramebuffer(0,0,ae,de,0,0,ae,de,ge,a.NEAREST),d===!0&&(At.length=0,Tt.length=0,At.push(a.COLOR_ATTACHMENT0+Ee),O.depthBuffer&&O.resolveDepthBuffer===!1&&(At.push(we),Tt.push(we),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Tt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,At))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ie)for(let Ee=0;Ee<w.length;Ee++){t.bindFramebuffer(a.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ee,a.RENDERBUFFER,Q.__webglColorRenderbuffer[Ee]);const He=n.get(w[Ee]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,Q.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ee,a.TEXTURE_2D,He,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Q.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&d){const w=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[w])}}}function Ut(O){return Math.min(s.maxSamples,O.samples)}function qt(O){const w=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ee(O){const w=l.render.frame;p.get(O)!==w&&(p.set(O,w),O.update())}function hn(O,w){const ae=O.colorSpace,de=O.format,ge=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ae!==Yc&&ae!==ls&&(Rt.getTransfer(ae)===Wt?(de!==Zn||ge!==yi)&&pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",ae)),w}function It(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(f.width=O.naturalWidth||O.width,f.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(f.width=O.displayWidth,f.height=O.displayHeight):(f.width=O.width,f.height=O.height),f}this.allocateTextureUnit=j,this.resetTextureUnits=W,this.getTextureUnits=X,this.setTextureUnits=H,this.setTexture2D=Y,this.setTexture2DArray=K,this.setTexture3D=ne,this.setTextureCube=k,this.rebindTextures=nt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=qt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function nv(a,e){function t(n,s=ls){let o;const l=Rt.getTransfer(s);if(n===yi)return a.UNSIGNED_BYTE;if(n===Hh)return a.UNSIGNED_SHORT_4_4_4_4;if(n===Vh)return a.UNSIGNED_SHORT_5_5_5_1;if(n===Px)return a.UNSIGNED_INT_5_9_9_9_REV;if(n===Dx)return a.UNSIGNED_INT_10F_11F_11F_REV;if(n===Rx)return a.BYTE;if(n===Ix)return a.SHORT;if(n===$o)return a.UNSIGNED_SHORT;if(n===zh)return a.INT;if(n===$n)return a.UNSIGNED_INT;if(n===Bi)return a.FLOAT;if(n===cr)return a.HALF_FLOAT;if(n===Fx)return a.ALPHA;if(n===Lx)return a.RGB;if(n===Zn)return a.RGBA;if(n===ur)return a.DEPTH_COMPONENT;if(n===ks)return a.DEPTH_STENCIL;if(n===Bx)return a.RED;if(n===au)return a.RED_INTEGER;if(n===Vs)return a.RG;if(n===Gh)return a.RG_INTEGER;if(n===Ua)return a.RGBA_INTEGER;if(n===zc||n===Hc||n===Vc||n===Gc)if(l===Wt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===zc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===zc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$f||n===Zf||n===Jf||n===eh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===$f)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===eh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===th||n===nh||n===ih||n===rh||n===sh||n===Qc||n===ah)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===th||n===nh)return l===Wt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===ih)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===rh)return o.COMPRESSED_R11_EAC;if(n===sh)return o.COMPRESSED_SIGNED_R11_EAC;if(n===Qc)return o.COMPRESSED_RG11_EAC;if(n===ah)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===oh||n===lh||n===ch||n===uh||n===dh||n===fh||n===hh||n===ph||n===mh||n===gh||n===xh||n===vh||n===Sh||n===Ah)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===oh)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lh)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ch)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uh)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dh)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fh)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hh)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ph)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mh)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gh)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xh)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vh)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sh)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ah)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yh||n===_h||n===Mh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===yh)return l===Wt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_h)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Eh||n===Ch||n===qc||n===Th)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Eh)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Ch)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Th)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zo?a.UNSIGNED_INT_24_8:a[n]!==void 0?a[n]:null}return{convert:t}}const gT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Qx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ti({vertexShader:gT,fragmentShader:xT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mn(new Qa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ST extends ds{constructor(e,t){super();const n=this;let s=null,o=1,l=null,u="local-floor",d=1,f=null,p=null,g=null,m=null,x=null,y=null;const M=typeof XRWebGLBinding<"u",S=new vT,A={},T=t.getContextAttributes();let P=null,C=null;const b=[],I=[],R=new qe;let E=null;const F=new Fi;F.viewport=new tn;const B=new Fi;B.viewport=new tn;const N=[F,B],U=new Iy;let W=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let xe=b[se];return xe===void 0&&(xe=new rf,b[se]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(se){let xe=b[se];return xe===void 0&&(xe=new rf,b[se]=xe),xe.getGripSpace()},this.getHand=function(se){let xe=b[se];return xe===void 0&&(xe=new rf,b[se]=xe),xe.getHandSpace()};function H(se){const xe=I.indexOf(se.inputSource);if(xe===-1)return;const pe=b[xe];pe!==void 0&&(pe.update(se.inputSource,se.frame,f||l),pe.dispatchEvent({type:se.type,data:se.inputSource}))}function j(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",q);for(let se=0;se<b.length;se++){const xe=I[se];xe!==null&&(I[se]=null,b[se].disconnect(xe))}W=null,X=null,S.reset();for(const se in A)delete A[se];e.setRenderTarget(P),x=null,m=null,g=null,s=null,C=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){o=se,n.isPresenting===!0&&pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){u=se,n.isPresenting===!0&&pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(se){f=se},this.getBaseLayer=function(){return m!==null?m:x},this.getBinding=function(){return g===null&&M&&(g=new XRWebGLBinding(s,t)),g},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(P=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",j),s.addEventListener("inputsourceschange",q),T.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,be=null,Oe=null;T.depth&&(Oe=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=T.stencil?ks:ur,be=T.stencil?Zo:$n);const Ge={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:o};g=this.getBinding(),m=g.createProjectionLayer(Ge),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),C=new ji(m.textureWidth,m.textureHeight,{format:Zn,type:yi,depthTexture:new Xs(m.textureWidth,m.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const pe={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),C=new ji(x.framebufferWidth,x.framebufferHeight,{format:Zn,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(d),f=null,l=await s.requestReferenceSpace(u),Re.setContext(s),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function q(se){for(let xe=0;xe<se.removed.length;xe++){const pe=se.removed[xe],be=I.indexOf(pe);be>=0&&(I[be]=null,b[be].disconnect(pe))}for(let xe=0;xe<se.added.length;xe++){const pe=se.added[xe];let be=I.indexOf(pe);if(be===-1){for(let Ge=0;Ge<b.length;Ge++)if(Ge>=I.length){I.push(pe),be=Ge;break}else if(I[Ge]===null){I[Ge]=pe,be=Ge;break}if(be===-1)break}const Oe=b[be];Oe&&Oe.connect(pe)}}const Y=new z,K=new z;function ne(se,xe,pe){Y.setFromMatrixPosition(xe.matrixWorld),K.setFromMatrixPosition(pe.matrixWorld);const be=Y.distanceTo(K),Oe=xe.projectionMatrix.elements,Ge=pe.projectionMatrix.elements,xt=Oe[14]/(Oe[10]-1),Ye=Oe[14]/(Oe[10]+1),dt=(Oe[9]+1)/Oe[5],nt=(Oe[9]-1)/Oe[5],ht=(Oe[8]-1)/Oe[0],bt=(Ge[8]+1)/Ge[0],At=xt*ht,Tt=xt*bt,Bt=be/(-ht+bt),Ut=Bt*-ht;if(xe.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Ut),se.translateZ(Bt),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Oe[10]===-1)se.projectionMatrix.copy(xe.projectionMatrix),se.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const qt=xt+Bt,ee=Ye+Bt,hn=At-Ut,It=Tt+(be-Ut),O=dt*Ye/ee*qt,w=nt*Ye/ee*qt;se.projectionMatrix.makePerspective(hn,It,O,w,qt,ee),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function k(se,xe){xe===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(xe.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;let xe=se.near,pe=se.far;S.texture!==null&&(S.depthNear>0&&(xe=S.depthNear),S.depthFar>0&&(pe=S.depthFar)),U.near=B.near=F.near=xe,U.far=B.far=F.far=pe,(W!==U.near||X!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),W=U.near,X=U.far),U.layers.mask=se.layers.mask|6,F.layers.mask=U.layers.mask&-5,B.layers.mask=U.layers.mask&-3;const be=se.parent,Oe=U.cameras;k(U,be);for(let Ge=0;Ge<Oe.length;Ge++)k(Oe[Ge],be);Oe.length===2?ne(U,F,B):U.projectionMatrix.copy(F.projectionMatrix),te(se,U,be)};function te(se,xe,pe){pe===null?se.matrix.copy(xe.matrixWorld):(se.matrix.copy(pe.matrixWorld),se.matrix.invert(),se.matrix.multiply(xe.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(xe.projectionMatrix),se.projectionMatrixInverse.copy(xe.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=wh*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(m===null&&x===null))return d},this.setFoveation=function(se){d=se,m!==null&&(m.fixedFoveation=se),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=se)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(U)},this.getCameraTexture=function(se){return A[se]};let Me=null;function Te(se,xe){if(p=xe.getViewerPose(f||l),y=xe,p!==null){const pe=p.views;x!==null&&(e.setRenderTargetFramebuffer(C,x.framebuffer),e.setRenderTarget(C));let be=!1;pe.length!==U.cameras.length&&(U.cameras.length=0,be=!0);for(let Ye=0;Ye<pe.length;Ye++){const dt=pe[Ye];let nt=null;if(x!==null)nt=x.getViewport(dt);else{const bt=g.getViewSubImage(m,dt);nt=bt.viewport,Ye===0&&(e.setRenderTargetTextures(C,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(C))}let ht=N[Ye];ht===void 0&&(ht=new Fi,ht.layers.enable(Ye),ht.viewport=new tn,N[Ye]=ht),ht.matrix.fromArray(dt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(dt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(nt.x,nt.y,nt.width,nt.height),Ye===0&&(U.matrix.copy(ht.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),be===!0&&U.cameras.push(ht)}const Oe=s.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){g=n.getBinding();const Ye=g.getDepthInformation(pe[0]);Ye&&Ye.isValid&&Ye.texture&&S.init(Ye,s.renderState)}if(Oe&&Oe.includes("camera-access")&&M){e.state.unbindTexture(),g=n.getBinding();for(let Ye=0;Ye<pe.length;Ye++){const dt=pe[Ye].camera;if(dt){let nt=A[dt];nt||(nt=new Qx,A[dt]=nt);const ht=g.getCameraImage(dt);nt.sourceTexture=ht}}}}for(let pe=0;pe<b.length;pe++){const be=I[pe],Oe=b[pe];be!==null&&Oe!==void 0&&Oe.update(be,xe,f||l)}Me&&Me(se,xe),xe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xe}),y=null}const Re=new jx;Re.setAnimationLoop(Te),this.setAnimationLoop=function(se){Me=se},this.dispose=function(){}}}const AT=new gt,iv=new ft;iv.set(-1,0,0,0,1,0,0,0,1);function yT(a,e){function t(S,A){S.matrixAutoUpdate===!0&&S.updateMatrix(),A.value.copy(S.matrix)}function n(S,A){A.color.getRGB(S.fogColor.value,qx(a)),A.isFog?(S.fogNear.value=A.near,S.fogFar.value=A.far):A.isFogExp2&&(S.fogDensity.value=A.density)}function s(S,A,T,P,C){A.isNodeMaterial?A.uniformsNeedUpdate=!1:A.isMeshBasicMaterial?o(S,A):A.isMeshLambertMaterial?(o(S,A),A.envMap&&(S.envMapIntensity.value=A.envMapIntensity)):A.isMeshToonMaterial?(o(S,A),g(S,A)):A.isMeshPhongMaterial?(o(S,A),p(S,A),A.envMap&&(S.envMapIntensity.value=A.envMapIntensity)):A.isMeshStandardMaterial?(o(S,A),m(S,A),A.isMeshPhysicalMaterial&&x(S,A,C)):A.isMeshMatcapMaterial?(o(S,A),y(S,A)):A.isMeshDepthMaterial?o(S,A):A.isMeshDistanceMaterial?(o(S,A),M(S,A)):A.isMeshNormalMaterial?o(S,A):A.isLineBasicMaterial?(l(S,A),A.isLineDashedMaterial&&u(S,A)):A.isPointsMaterial?d(S,A,T,P):A.isSpriteMaterial?f(S,A):A.isShadowMaterial?(S.color.value.copy(A.color),S.opacity.value=A.opacity):A.isShaderMaterial&&(A.uniformsNeedUpdate=!1)}function o(S,A){S.opacity.value=A.opacity,A.color&&S.diffuse.value.copy(A.color),A.emissive&&S.emissive.value.copy(A.emissive).multiplyScalar(A.emissiveIntensity),A.map&&(S.map.value=A.map,t(A.map,S.mapTransform)),A.alphaMap&&(S.alphaMap.value=A.alphaMap,t(A.alphaMap,S.alphaMapTransform)),A.bumpMap&&(S.bumpMap.value=A.bumpMap,t(A.bumpMap,S.bumpMapTransform),S.bumpScale.value=A.bumpScale,A.side===hi&&(S.bumpScale.value*=-1)),A.normalMap&&(S.normalMap.value=A.normalMap,t(A.normalMap,S.normalMapTransform),S.normalScale.value.copy(A.normalScale),A.side===hi&&S.normalScale.value.negate()),A.displacementMap&&(S.displacementMap.value=A.displacementMap,t(A.displacementMap,S.displacementMapTransform),S.displacementScale.value=A.displacementScale,S.displacementBias.value=A.displacementBias),A.emissiveMap&&(S.emissiveMap.value=A.emissiveMap,t(A.emissiveMap,S.emissiveMapTransform)),A.specularMap&&(S.specularMap.value=A.specularMap,t(A.specularMap,S.specularMapTransform)),A.alphaTest>0&&(S.alphaTest.value=A.alphaTest);const T=e.get(A),P=T.envMap,C=T.envMapRotation;P&&(S.envMap.value=P,S.envMapRotation.value.setFromMatrix4(AT.makeRotationFromEuler(C)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(iv),S.reflectivity.value=A.reflectivity,S.ior.value=A.ior,S.refractionRatio.value=A.refractionRatio),A.lightMap&&(S.lightMap.value=A.lightMap,S.lightMapIntensity.value=A.lightMapIntensity,t(A.lightMap,S.lightMapTransform)),A.aoMap&&(S.aoMap.value=A.aoMap,S.aoMapIntensity.value=A.aoMapIntensity,t(A.aoMap,S.aoMapTransform))}function l(S,A){S.diffuse.value.copy(A.color),S.opacity.value=A.opacity,A.map&&(S.map.value=A.map,t(A.map,S.mapTransform))}function u(S,A){S.dashSize.value=A.dashSize,S.totalSize.value=A.dashSize+A.gapSize,S.scale.value=A.scale}function d(S,A,T,P){S.diffuse.value.copy(A.color),S.opacity.value=A.opacity,S.size.value=A.size*T,S.scale.value=P*.5,A.map&&(S.map.value=A.map,t(A.map,S.uvTransform)),A.alphaMap&&(S.alphaMap.value=A.alphaMap,t(A.alphaMap,S.alphaMapTransform)),A.alphaTest>0&&(S.alphaTest.value=A.alphaTest)}function f(S,A){S.diffuse.value.copy(A.color),S.opacity.value=A.opacity,S.rotation.value=A.rotation,A.map&&(S.map.value=A.map,t(A.map,S.mapTransform)),A.alphaMap&&(S.alphaMap.value=A.alphaMap,t(A.alphaMap,S.alphaMapTransform)),A.alphaTest>0&&(S.alphaTest.value=A.alphaTest)}function p(S,A){S.specular.value.copy(A.specular),S.shininess.value=Math.max(A.shininess,1e-4)}function g(S,A){A.gradientMap&&(S.gradientMap.value=A.gradientMap)}function m(S,A){S.metalness.value=A.metalness,A.metalnessMap&&(S.metalnessMap.value=A.metalnessMap,t(A.metalnessMap,S.metalnessMapTransform)),S.roughness.value=A.roughness,A.roughnessMap&&(S.roughnessMap.value=A.roughnessMap,t(A.roughnessMap,S.roughnessMapTransform)),A.envMap&&(S.envMapIntensity.value=A.envMapIntensity)}function x(S,A,T){S.ior.value=A.ior,A.sheen>0&&(S.sheenColor.value.copy(A.sheenColor).multiplyScalar(A.sheen),S.sheenRoughness.value=A.sheenRoughness,A.sheenColorMap&&(S.sheenColorMap.value=A.sheenColorMap,t(A.sheenColorMap,S.sheenColorMapTransform)),A.sheenRoughnessMap&&(S.sheenRoughnessMap.value=A.sheenRoughnessMap,t(A.sheenRoughnessMap,S.sheenRoughnessMapTransform))),A.clearcoat>0&&(S.clearcoat.value=A.clearcoat,S.clearcoatRoughness.value=A.clearcoatRoughness,A.clearcoatMap&&(S.clearcoatMap.value=A.clearcoatMap,t(A.clearcoatMap,S.clearcoatMapTransform)),A.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=A.clearcoatRoughnessMap,t(A.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),A.clearcoatNormalMap&&(S.clearcoatNormalMap.value=A.clearcoatNormalMap,t(A.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(A.clearcoatNormalScale),A.side===hi&&S.clearcoatNormalScale.value.negate())),A.dispersion>0&&(S.dispersion.value=A.dispersion),A.iridescence>0&&(S.iridescence.value=A.iridescence,S.iridescenceIOR.value=A.iridescenceIOR,S.iridescenceThicknessMinimum.value=A.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=A.iridescenceThicknessRange[1],A.iridescenceMap&&(S.iridescenceMap.value=A.iridescenceMap,t(A.iridescenceMap,S.iridescenceMapTransform)),A.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=A.iridescenceThicknessMap,t(A.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),A.transmission>0&&(S.transmission.value=A.transmission,S.transmissionSamplerMap.value=T.texture,S.transmissionSamplerSize.value.set(T.width,T.height),A.transmissionMap&&(S.transmissionMap.value=A.transmissionMap,t(A.transmissionMap,S.transmissionMapTransform)),S.thickness.value=A.thickness,A.thicknessMap&&(S.thicknessMap.value=A.thicknessMap,t(A.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=A.attenuationDistance,S.attenuationColor.value.copy(A.attenuationColor)),A.anisotropy>0&&(S.anisotropyVector.value.set(A.anisotropy*Math.cos(A.anisotropyRotation),A.anisotropy*Math.sin(A.anisotropyRotation)),A.anisotropyMap&&(S.anisotropyMap.value=A.anisotropyMap,t(A.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=A.specularIntensity,S.specularColor.value.copy(A.specularColor),A.specularColorMap&&(S.specularColorMap.value=A.specularColorMap,t(A.specularColorMap,S.specularColorMapTransform)),A.specularIntensityMap&&(S.specularIntensityMap.value=A.specularIntensityMap,t(A.specularIntensityMap,S.specularIntensityMapTransform))}function y(S,A){A.matcap&&(S.matcap.value=A.matcap)}function M(S,A){const T=e.get(A).light;S.referencePosition.value.setFromMatrixPosition(T.matrixWorld),S.nearDistance.value=T.shadow.camera.near,S.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _T(a,e,t,n){let s={},o={},l=[];const u=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function d(C,b){const I=b.program;n.uniformBlockBinding(C,I)}function f(C,b){let I=s[C.id];I===void 0&&(S(C),I=p(C),s[C.id]=I,C.addEventListener("dispose",T));const R=b.program;n.updateUBOMapping(C,R);const E=e.render.frame;o[C.id]!==E&&(m(C),o[C.id]=E)}function p(C){const b=g();C.__bindingPointIndex=b;const I=a.createBuffer(),R=C.__size,E=C.usage;return a.bindBuffer(a.UNIFORM_BUFFER,I),a.bufferData(a.UNIFORM_BUFFER,R,E),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,b,I),I}function g(){for(let C=0;C<u;C++)if(l.indexOf(C)===-1)return l.push(C),C;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(C){const b=s[C.id],I=C.uniforms,R=C.__cache;a.bindBuffer(a.UNIFORM_BUFFER,b);for(let E=0,F=I.length;E<F;E++){const B=I[E];if(Array.isArray(B))for(let N=0,U=B.length;N<U;N++)x(B[N],E,N,R);else x(B,E,0,R)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function x(C,b,I,R){if(M(C,b,I,R)===!0){const E=C.__offset,F=C.value;if(Array.isArray(F)){let B=0;for(let N=0;N<F.length;N++){const U=F[N],W=A(U);y(U,C.__data,B),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(B+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(F,C.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,E,C.__data)}}function y(C,b,I){typeof C=="number"||typeof C=="boolean"?b[0]=C:C.isMatrix3?(b[0]=C.elements[0],b[1]=C.elements[1],b[2]=C.elements[2],b[3]=0,b[4]=C.elements[3],b[5]=C.elements[4],b[6]=C.elements[5],b[7]=0,b[8]=C.elements[6],b[9]=C.elements[7],b[10]=C.elements[8],b[11]=0):ArrayBuffer.isView(C)?b.set(new C.constructor(C.buffer,C.byteOffset,b.length)):C.toArray(b,I)}function M(C,b,I,R){const E=C.value,F=b+"_"+I;if(R[F]===void 0)return typeof E=="number"||typeof E=="boolean"?R[F]=E:ArrayBuffer.isView(E)?R[F]=E.slice():R[F]=E.clone(),!0;{const B=R[F];if(typeof E=="number"||typeof E=="boolean"){if(B!==E)return R[F]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(B.equals(E)===!1)return B.copy(E),!0}}return!1}function S(C){const b=C.uniforms;let I=0;const R=16;for(let F=0,B=b.length;F<B;F++){const N=Array.isArray(b[F])?b[F]:[b[F]];for(let U=0,W=N.length;U<W;U++){const X=N[U],H=Array.isArray(X.value)?X.value:[X.value];for(let j=0,q=H.length;j<q;j++){const Y=H[j],K=A(Y),ne=I%R,k=ne%K.boundary,te=ne+k;I+=k,te!==0&&R-te<K.storage&&(I+=R-te),X.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=I,I+=K.storage}}}const E=I%R;return E>0&&(I+=R-E),C.__size=I,C.__cache={},this}function A(C){const b={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(b.boundary=4,b.storage=4):C.isVector2?(b.boundary=8,b.storage=8):C.isVector3||C.isColor?(b.boundary=16,b.storage=12):C.isVector4?(b.boundary=16,b.storage=16):C.isMatrix3?(b.boundary=48,b.storage=48):C.isMatrix4?(b.boundary=64,b.storage=64):C.isTexture?pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(b.boundary=16,b.storage=C.byteLength):pt("WebGLRenderer: Unsupported uniform value type.",C),b}function T(C){const b=C.target;b.removeEventListener("dispose",T);const I=l.indexOf(b.__bindingPointIndex);l.splice(I,1),a.deleteBuffer(s[b.id]),delete s[b.id],delete o[b.id]}function P(){for(const C in s)a.deleteBuffer(s[C]);l=[],s={},o={}}return{bind:d,update:f,dispose:P}}const MT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let nr=null;function ET(){return nr===null&&(nr=new Tr(MT,16,16,Vs,cr),nr.name="DFG_LUT",nr.minFilter=Wn,nr.magFilter=Wn,nr.wrapS=Ir,nr.wrapT=Ir,nr.generateMipmaps=!1,nr.needsUpdate=!0),nr}class CT{constructor(e={}){const{canvas:t=WA(),context:n=null,depth:s=!0,stencil:o=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:m=!1,outputBufferType:x=yi}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=l;const M=x,S=new Set([Ua,Gh,au]),A=new Set([yi,$n,$o,Zo,Hh,Vh]),T=new Uint32Array(4),P=new Int32Array(4),C=new z;let b=null,I=null;const R=[],E=[];let F=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let N=!1,U=null,W=null,X=null,H=null;this._outputColorSpace=Di;let j=0,q=0,Y=null,K=-1,ne=null;const k=new tn,te=new tn;let Me=null;const Te=new Dt(0);let Re=0,se=t.width,xe=t.height,pe=1,be=null,Oe=null;const Ge=new tn(0,0,se,xe),xt=new tn(0,0,se,xe);let Ye=!1;const dt=new Wx;let nt=!1,ht=!1;const bt=new gt,At=new z,Tt=new tn,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function qt(){return Y===null?pe:1}let ee=n;function hn(L,re){return t.getContext(L,re)}try{const L={alpha:!0,depth:s,stencil:o,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kh}`),t.addEventListener("webglcontextlost",Xt,!1),t.addEventListener("webglcontextrestored",Ot,!1),t.addEventListener("webglcontextcreationerror",Un,!1),ee===null){const re="webgl2";if(ee=hn(re,L),ee===null)throw hn(re)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(L){throw Lt("WebGLRenderer: "+L.message),L}let It,O,w,ae,de,ge,we,Q,ie,me,Ee,He,Le,Ie,st,lt,at,$,De,Se,Be,ke,Ae;function Je(){It=new CE(ee),It.init(),Be=new nv(ee,It),O=new xE(ee,It,e,Be),w=new pT(ee,It),O.reversedDepthBuffer&&m&&w.buffers.depth.setReversed(!0),W=ee.createFramebuffer(),X=ee.createFramebuffer(),H=ee.createFramebuffer(),ae=new bE(ee),de=new eT,ge=new mT(ee,It,w,de,O,Be,ae),we=new EE(B),Q=new Dy(ee),ke=new mE(ee,Q),ie=new TE(ee,Q,ae,ke),me=new IE(ee,ie,Q,ke,ae),$=new RE(ee,O,ge),st=new vE(de),Ee=new JC(B,we,It,O,ke,st),He=new yT(B,de),Le=new nT,Ie=new lT(It),at=new pE(B,we,w,me,y,d),lt=new hT(B,me,O),Ae=new _T(ee,ae,O,w),De=new gE(ee,It,ae),Se=new wE(ee,It,ae),ae.programs=Ee.programs,B.capabilities=O,B.extensions=It,B.properties=de,B.renderLists=Le,B.shadowMap=lt,B.state=w,B.info=ae}Je(),M!==yi&&(F=new DE(M,t.width,t.height,u,s,o));const $e=new ST(B,ee);this.xr=$e,this.getContext=function(){return ee},this.getContextAttributes=function(){return ee.getContextAttributes()},this.forceContextLoss=function(){const L=It.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=It.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(L){L!==void 0&&(pe=L,this.setSize(se,xe,!1))},this.getSize=function(L){return L.set(se,xe)},this.setSize=function(L,re,fe=!0){if($e.isPresenting){pt("WebGLRenderer: Can't change size while VR device is presenting.");return}se=L,xe=re,t.width=Math.floor(L*pe),t.height=Math.floor(re*pe),fe===!0&&(t.style.width=L+"px",t.style.height=re+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,L,re)},this.getDrawingBufferSize=function(L){return L.set(se*pe,xe*pe).floor()},this.setDrawingBufferSize=function(L,re,fe){se=L,xe=re,pe=fe,t.width=Math.floor(L*fe),t.height=Math.floor(re*fe),this.setViewport(0,0,L,re)},this.setEffects=function(L){if(M===yi){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let re=0;re<L.length;re++)if(L[re].isOutputPass===!0){pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(k)},this.getViewport=function(L){return L.copy(Ge)},this.setViewport=function(L,re,fe,ce){L.isVector4?Ge.set(L.x,L.y,L.z,L.w):Ge.set(L,re,fe,ce),w.viewport(k.copy(Ge).multiplyScalar(pe).round())},this.getScissor=function(L){return L.copy(xt)},this.setScissor=function(L,re,fe,ce){L.isVector4?xt.set(L.x,L.y,L.z,L.w):xt.set(L,re,fe,ce),w.scissor(te.copy(xt).multiplyScalar(pe).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(L){w.setScissorTest(Ye=L)},this.setOpaqueSort=function(L){be=L},this.setTransparentSort=function(L){Oe=L},this.getClearColor=function(L){return L.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(L=!0,re=!0,fe=!0){let ce=0;if(L){let le=!1;if(Y!==null){const Ue=Y.texture.format;le=S.has(Ue)}if(le){const Ue=Y.texture.type,Qe=A.has(Ue),Ne=at.getClearColor(),et=at.getClearAlpha(),ot=Ne.r,vt=Ne.g,St=Ne.b;Qe?(T[0]=ot,T[1]=vt,T[2]=St,T[3]=et,ee.clearBufferuiv(ee.COLOR,0,T)):(P[0]=ot,P[1]=vt,P[2]=St,P[3]=et,ee.clearBufferiv(ee.COLOR,0,P))}else ce|=ee.COLOR_BUFFER_BIT}re&&(ce|=ee.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(ce|=ee.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&ee.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),U=L},this.dispose=function(){t.removeEventListener("webglcontextlost",Xt,!1),t.removeEventListener("webglcontextrestored",Ot,!1),t.removeEventListener("webglcontextcreationerror",Un,!1),at.dispose(),Le.dispose(),Ie.dispose(),de.dispose(),we.dispose(),me.dispose(),ke.dispose(),Ae.dispose(),Ee.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",rl),$e.removeEventListener("sessionend",sl),Xn.stop()};function Xt(L){L.preventDefault(),Jg("WebGLRenderer: Context Lost."),N=!0}function Ot(){Jg("WebGLRenderer: Context Restored."),N=!1;const L=ae.autoReset,re=lt.enabled,fe=lt.autoUpdate,ce=lt.needsUpdate,le=lt.type;Je(),ae.autoReset=L,lt.enabled=re,lt.autoUpdate=fe,lt.needsUpdate=ce,lt.type=le}function Un(L){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Mi(L){const re=L.target;re.removeEventListener("dispose",Mi),fs(re)}function fs(L){Qs(L),de.remove(L)}function Qs(L){const re=de.get(L).programs;re!==void 0&&(re.forEach(function(fe){Ee.releaseProgram(fe)}),L.isShaderMaterial&&Ee.releaseShaderCache(L))}this.renderBufferDirect=function(L,re,fe,ce,le,Ue){re===null&&(re=Bt);const Qe=le.isMesh&&le.matrixWorld.determinantAffine()<0,Ne=on(L,re,fe,ce,le);w.setMaterial(ce,Qe);let et=fe.index,ot=1;if(ce.wireframe===!0){if(et=ie.getWireframeAttribute(fe),et===void 0)return;ot=2}const vt=fe.drawRange,St=fe.attributes.position;let it=vt.start*ot,Pt=(vt.start+vt.count)*ot;Ue!==null&&(it=Math.max(it,Ue.start*ot),Pt=Math.min(Pt,(Ue.start+Ue.count)*ot)),et!==null?(it=Math.max(it,0),Pt=Math.min(Pt,et.count)):St!=null&&(it=Math.max(it,0),Pt=Math.min(Pt,St.count));const Yt=Pt-it;if(Yt<0||Yt===1/0)return;ke.setup(le,ce,Ne,fe,et);let nn,Ht=De;if(et!==null&&(nn=Q.get(et),Ht=Se,Ht.setIndex(nn)),le.isMesh)ce.wireframe===!0?(w.setLineWidth(ce.wireframeLinewidth*qt()),Ht.setMode(ee.LINES)):Ht.setMode(ee.TRIANGLES);else if(le.isLine){let vn=ce.linewidth;vn===void 0&&(vn=1),w.setLineWidth(vn*qt()),le.isLineSegments?Ht.setMode(ee.LINES):le.isLineLoop?Ht.setMode(ee.LINE_LOOP):Ht.setMode(ee.LINE_STRIP)}else le.isPoints?Ht.setMode(ee.POINTS):le.isSprite&&Ht.setMode(ee.TRIANGLES);if(le.isBatchedMesh)if(It.get("WEBGL_multi_draw"))Ht.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{const vn=le._multiDrawStarts,We=le._multiDrawCounts,Dn=le._multiDrawCount,_t=et?Q.get(et).bytesPerElement:1,ni=de.get(ce).currentProgram.getUniforms();for(let ii=0;ii<Dn;ii++)ni.setValue(ee,"_gl_DrawID",ii),Ht.render(vn[ii]/_t,We[ii])}else if(le.isInstancedMesh)Ht.renderInstances(it,Yt,le.count);else if(fe.isInstancedBufferGeometry){const vn=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,We=Math.min(fe.instanceCount,vn);Ht.renderInstances(it,Yt,We)}else Ht.render(it,Yt)};function hs(L,re,fe){L.transparent===!0&&L.side===Li&&L.forceSinglePass===!1?(L.side=hi,L.needsUpdate=!0,gs(L,re,fe),L.side=lr,L.needsUpdate=!0,gs(L,re,fe),L.side=Li):gs(L,re,fe)}this.compile=function(L,re,fe=null){fe===null&&(fe=L),I=Ie.get(fe),I.init(re),E.push(I),fe.traverseVisible(function(le){le.isLight&&le.layers.test(re.layers)&&(I.pushLight(le),le.castShadow&&I.pushShadow(le))}),L!==fe&&L.traverseVisible(function(le){le.isLight&&le.layers.test(re.layers)&&(I.pushLight(le),le.castShadow&&I.pushShadow(le))}),I.setupLights();const ce=new Set;return L.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;const Ue=le.material;if(Ue)if(Array.isArray(Ue))for(let Qe=0;Qe<Ue.length;Qe++){const Ne=Ue[Qe];hs(Ne,fe,le),ce.add(Ne)}else hs(Ue,fe,le),ce.add(Ue)}),I=E.pop(),ce},this.compileAsync=function(L,re,fe=null){const ce=this.compile(L,re,fe);return new Promise(le=>{function Ue(){if(ce.forEach(function(Qe){de.get(Qe).currentProgram.isReady()&&ce.delete(Qe)}),ce.size===0){le(L);return}setTimeout(Ue,10)}It.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let ps=null;function fu(L){ps&&ps(L)}function rl(){Xn.stop()}function sl(){Xn.start()}const Xn=new jx;Xn.setAnimationLoop(fu),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(L){ps=L,$e.setAnimationLoop(L),L===null?Xn.stop():Xn.start()},$e.addEventListener("sessionstart",rl),$e.addEventListener("sessionend",sl),this.render=function(L,re){if(re!==void 0&&re.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;U!==null&&U.renderStart(L,re);const fe=$e.enabled===!0&&$e.isPresenting===!0,ce=F!==null&&(Y===null||fe)&&F.begin(B,Y);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),re.parent===null&&re.matrixWorldAutoUpdate===!0&&re.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&($e.cameraAutoUpdate===!0&&$e.updateCamera(re),re=$e.getCamera()),L.isScene===!0&&L.onBeforeRender(B,L,re,Y),I=Ie.get(L,E.length),I.init(re),I.state.textureUnits=ge.getTextureUnits(),E.push(I),bt.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),dt.setFromProjectionMatrix(bt,rr,re.reversedDepth),ht=this.localClippingEnabled,nt=st.init(this.clippingPlanes,ht),b=Le.get(L,R.length),b.init(),R.push(b),$e.enabled===!0&&$e.isPresenting===!0){const Qe=B.xr.getDepthSensingMesh();Qe!==null&&qs(Qe,re,-1/0,B.sortObjects)}qs(L,re,0,B.sortObjects),b.finish(),B.sortObjects===!0&&b.sort(be,Oe,re.reversedDepth),Ut=$e.enabled===!1||$e.isPresenting===!1||$e.hasDepthSensing()===!1,Ut&&at.addToRenderList(b,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),nt===!0&&st.beginShadows();const le=I.state.shadowsArray;if(lt.render(le,L,re),nt===!0&&st.endShadows(),(ce&&F.hasRenderPass())===!1){const Qe=b.opaque,Ne=b.transmissive;if(I.setupLights(),re.isArrayCamera){const et=re.cameras;if(Ne.length>0)for(let ot=0,vt=et.length;ot<vt;ot++){const St=et[ot];al(Qe,Ne,L,St)}Ut&&at.render(L);for(let ot=0,vt=et.length;ot<vt;ot++){const St=et[ot];$a(b,L,St,St.viewport)}}else Ne.length>0&&al(Qe,Ne,L,re),Ut&&at.render(L),$a(b,L,re)}Y!==null&&q===0&&(ge.updateMultisampleRenderTarget(Y),ge.updateRenderTargetMipmap(Y)),ce&&F.end(B),L.isScene===!0&&L.onAfterRender(B,L,re),ke.resetDefaultState(),K=-1,ne=null,E.pop(),E.length>0?(I=E[E.length-1],ge.setTextureUnits(I.state.textureUnits),nt===!0&&st.setGlobalState(B.clippingPlanes,I.state.camera)):I=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,U!==null&&U.renderEnd()};function qs(L,re,fe,ce){if(L.visible===!1)return;if(L.layers.test(re.layers)){if(L.isGroup)fe=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(re);else if(L.isLightProbeGrid)I.pushLightProbeGrid(L);else if(L.isLight)I.pushLight(L),L.castShadow&&I.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||dt.intersectsSprite(L)){ce&&Tt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(bt);const Qe=me.update(L),Ne=L.material;Ne.visible&&b.push(L,Qe,Ne,fe,Tt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||dt.intersectsObject(L))){const Qe=me.update(L),Ne=L.material;if(ce&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Tt.copy(L.boundingSphere.center)):(Qe.boundingSphere===null&&Qe.computeBoundingSphere(),Tt.copy(Qe.boundingSphere.center)),Tt.applyMatrix4(L.matrixWorld).applyMatrix4(bt)),Array.isArray(Ne)){const et=Qe.groups;for(let ot=0,vt=et.length;ot<vt;ot++){const St=et[ot],it=Ne[St.materialIndex];it&&it.visible&&b.push(L,Qe,it,fe,Tt.z,St)}}else Ne.visible&&b.push(L,Qe,Ne,fe,Tt.z,null)}}const Ue=L.children;for(let Qe=0,Ne=Ue.length;Qe<Ne;Qe++)qs(Ue[Qe],re,fe,ce)}function $a(L,re,fe,ce){const{opaque:le,transmissive:Ue,transparent:Qe}=L;I.setupLightsView(fe),nt===!0&&st.setGlobalState(B.clippingPlanes,fe),ce&&w.viewport(k.copy(ce)),le.length>0&&ms(le,re,fe),Ue.length>0&&ms(Ue,re,fe),Qe.length>0&&ms(Qe,re,fe),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function al(L,re,fe,ce){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ce.id]===void 0){const it=It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ce.id]=new ji(1,1,{generateMipmaps:!0,type:it?cr:yi,minFilter:Os,samples:Math.max(4,O.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Ue=I.state.transmissionRenderTarget[ce.id],Qe=ce.viewport||k;Ue.setSize(Qe.z*B.transmissionResolutionScale,Qe.w*B.transmissionResolutionScale);const Ne=B.getRenderTarget(),et=B.getActiveCubeFace(),ot=B.getActiveMipmapLevel();B.setRenderTarget(Ue),B.getClearColor(Te),Re=B.getClearAlpha(),Re<1&&B.setClearColor(16777215,.5),B.clear(),Ut&&at.render(fe);const vt=B.toneMapping;B.toneMapping=or;const St=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),I.setupLightsView(ce),nt===!0&&st.setGlobalState(B.clippingPlanes,ce),ms(L,fe,ce),ge.updateMultisampleRenderTarget(Ue),ge.updateRenderTargetMipmap(Ue),It.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Pt=0,Yt=re.length;Pt<Yt;Pt++){const nn=re[Pt],{object:Ht,geometry:vn,material:We,group:Dn}=nn;if(We.side===Li&&Ht.layers.test(ce.layers)){const _t=We.side;We.side=hi,We.needsUpdate=!0,Za(Ht,fe,ce,vn,We,Dn),We.side=_t,We.needsUpdate=!0,it=!0}}it===!0&&(ge.updateMultisampleRenderTarget(Ue),ge.updateRenderTargetMipmap(Ue))}B.setRenderTarget(Ne,et,ot),B.setClearColor(Te,Re),St!==void 0&&(ce.viewport=St),B.toneMapping=vt}function ms(L,re,fe){const ce=re.isScene===!0?re.overrideMaterial:null;for(let le=0,Ue=L.length;le<Ue;le++){const Qe=L[le],{object:Ne,geometry:et,group:ot}=Qe;let vt=Qe.material;vt.allowOverride===!0&&ce!==null&&(vt=ce),Ne.layers.test(fe.layers)&&Za(Ne,re,fe,et,vt,ot)}}function Za(L,re,fe,ce,le,Ue){L.onBeforeRender(B,re,fe,ce,le,Ue),L.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),le.onBeforeRender(B,re,fe,ce,L,Ue),le.transparent===!0&&le.side===Li&&le.forceSinglePass===!1?(le.side=hi,le.needsUpdate=!0,B.renderBufferDirect(fe,re,ce,le,L,Ue),le.side=lr,le.needsUpdate=!0,B.renderBufferDirect(fe,re,ce,le,L,Ue),le.side=Li):B.renderBufferDirect(fe,re,ce,le,L,Ue),L.onAfterRender(B,re,fe,ce,le,Ue)}function gs(L,re,fe){re.isScene!==!0&&(re=Bt);const ce=de.get(L),le=I.state.lights,Ue=I.state.shadowsArray,Qe=le.state.version,Ne=Ee.getParameters(L,le.state,Ue,re,fe,I.state.lightProbeGridArray),et=Ee.getProgramCacheKey(Ne);let ot=ce.programs;ce.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?re.environment:null,ce.fog=re.fog;const vt=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;ce.envMap=we.get(L.envMap||ce.environment,vt),ce.envMapRotation=ce.environment!==null&&L.envMap===null?re.environmentRotation:L.envMapRotation,ot===void 0&&(L.addEventListener("dispose",Mi),ot=new Map,ce.programs=ot);let St=ot.get(et);if(St!==void 0){if(ce.currentProgram===St&&ce.lightsStateVersion===Qe)return ol(L,Ne),St}else Ne.uniforms=Ee.getUniforms(L),U!==null&&L.isNodeMaterial&&U.build(L,fe,Ne),L.onBeforeCompile(Ne,B),St=Ee.acquireProgram(Ne,et),ot.set(et,St),ce.uniforms=Ne.uniforms;const it=ce.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(it.clippingPlanes=st.uniform),ol(L,Ne),ce.needsLights=eo(L),ce.lightsStateVersion=Qe,ce.needsLights&&(it.ambientLightColor.value=le.state.ambient,it.lightProbe.value=le.state.probe,it.directionalLights.value=le.state.directional,it.directionalLightShadows.value=le.state.directionalShadow,it.spotLights.value=le.state.spot,it.spotLightShadows.value=le.state.spotShadow,it.rectAreaLights.value=le.state.rectArea,it.ltc_1.value=le.state.rectAreaLTC1,it.ltc_2.value=le.state.rectAreaLTC2,it.pointLights.value=le.state.point,it.pointLightShadows.value=le.state.pointShadow,it.hemisphereLights.value=le.state.hemi,it.directionalShadowMatrix.value=le.state.directionalShadowMatrix,it.spotLightMatrix.value=le.state.spotLightMatrix,it.spotLightMap.value=le.state.spotLightMap,it.pointShadowMatrix.value=le.state.pointShadowMatrix),ce.lightProbeGrid=I.state.lightProbeGridArray.length>0,ce.currentProgram=St,ce.uniformsList=null,St}function Ja(L){if(L.uniformsList===null){const re=L.currentProgram.getUniforms();L.uniformsList=Xc.seqWithValue(re.seq,L.uniforms)}return L.uniformsList}function ol(L,re){const fe=de.get(L);fe.outputColorSpace=re.outputColorSpace,fe.batching=re.batching,fe.batchingColor=re.batchingColor,fe.instancing=re.instancing,fe.instancingColor=re.instancingColor,fe.instancingMorph=re.instancingMorph,fe.skinning=re.skinning,fe.morphTargets=re.morphTargets,fe.morphNormals=re.morphNormals,fe.morphColors=re.morphColors,fe.morphTargetsCount=re.morphTargetsCount,fe.numClippingPlanes=re.numClippingPlanes,fe.numIntersection=re.numClipIntersection,fe.vertexAlphas=re.vertexAlphas,fe.vertexTangents=re.vertexTangents,fe.toneMapping=re.toneMapping}function hu(L,re){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;C.setFromMatrixPosition(re.matrixWorld);for(let fe=0,ce=L.length;fe<ce;fe++){const le=L[fe];if(le.texture!==null&&le.boundingBox.containsPoint(C))return le}return null}function on(L,re,fe,ce,le){re.isScene!==!0&&(re=Bt),ge.resetTextureUnits();const Ue=re.fog,Qe=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?re.environment:null,Ne=Y===null?B.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Rt.workingColorSpace,et=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,ot=we.get(ce.envMap||Qe,et),vt=ce.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,St=!!fe.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),it=!!fe.morphAttributes.position,Pt=!!fe.morphAttributes.normal,Yt=!!fe.morphAttributes.color;let nn=or;ce.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(nn=B.toneMapping);const Ht=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,vn=Ht!==void 0?Ht.length:0,We=de.get(ce),Dn=I.state.lights;if(nt===!0&&(ht===!0||L!==ne)){const Vt=L===ne&&ce.id===K;st.setState(ce,L,Vt)}let _t=!1;ce.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Dn.state.version||We.outputColorSpace!==Ne||le.isBatchedMesh&&We.batching===!1||!le.isBatchedMesh&&We.batching===!0||le.isBatchedMesh&&We.batchingColor===!0&&le.colorTexture===null||le.isBatchedMesh&&We.batchingColor===!1&&le.colorTexture!==null||le.isInstancedMesh&&We.instancing===!1||!le.isInstancedMesh&&We.instancing===!0||le.isSkinnedMesh&&We.skinning===!1||!le.isSkinnedMesh&&We.skinning===!0||le.isInstancedMesh&&We.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&We.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&We.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&We.instancingMorph===!1&&le.morphTexture!==null||We.envMap!==ot||ce.fog===!0&&We.fog!==Ue||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==st.numPlanes||We.numIntersection!==st.numIntersection)||We.vertexAlphas!==vt||We.vertexTangents!==St||We.morphTargets!==it||We.morphNormals!==Pt||We.morphColors!==Yt||We.toneMapping!==nn||We.morphTargetsCount!==vn||!!We.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,We.__version=ce.version);let ni=We.currentProgram;_t===!0&&(ni=gs(ce,re,le),U&&ce.isNodeMaterial&&U.onUpdateProgram(ce,ni,We));let ii=!1,Mt=!1,dr=!1;const kt=ni.getUniforms(),Kt=We.uniforms;if(w.useProgram(ni.program)&&(ii=!0,Mt=!0,dr=!0),ce.id!==K&&(K=ce.id,Mt=!0),We.needsLights){const Vt=hu(I.state.lightProbeGridArray,le);We.lightProbeGrid!==Vt&&(We.lightProbeGrid=Vt,Mt=!0)}if(ii||ne!==L){w.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),kt.setValue(ee,"projectionMatrix",L.projectionMatrix),kt.setValue(ee,"viewMatrix",L.matrixWorldInverse);const Oi=kt.map.cameraPosition;Oi!==void 0&&Oi.setValue(ee,At.setFromMatrixPosition(L.matrixWorld)),O.logarithmicDepthBuffer&&kt.setValue(ee,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&kt.setValue(ee,"isOrthographic",L.isOrthographicCamera===!0),ne!==L&&(ne=L,Mt=!0,dr=!0)}if(We.needsLights&&(Dn.state.directionalShadowMap.length>0&&kt.setValue(ee,"directionalShadowMap",Dn.state.directionalShadowMap,ge),Dn.state.spotShadowMap.length>0&&kt.setValue(ee,"spotShadowMap",Dn.state.spotShadowMap,ge),Dn.state.pointShadowMap.length>0&&kt.setValue(ee,"pointShadowMap",Dn.state.pointShadowMap,ge)),le.isSkinnedMesh){kt.setOptional(ee,le,"bindMatrix"),kt.setOptional(ee,le,"bindMatrixInverse");const Vt=le.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),kt.setValue(ee,"boneTexture",Vt.boneTexture,ge))}le.isBatchedMesh&&(kt.setOptional(ee,le,"batchingTexture"),kt.setValue(ee,"batchingTexture",le._matricesTexture,ge),kt.setOptional(ee,le,"batchingIdTexture"),kt.setValue(ee,"batchingIdTexture",le._indirectTexture,ge),kt.setOptional(ee,le,"batchingColorTexture"),le._colorsTexture!==null&&kt.setValue(ee,"batchingColorTexture",le._colorsTexture,ge));const Ui=fe.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&$.update(le,fe,ni),(Mt||We.receiveShadow!==le.receiveShadow)&&(We.receiveShadow=le.receiveShadow,kt.setValue(ee,"receiveShadow",le.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&re.environment!==null&&(Kt.envMapIntensity.value=re.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=ET()),Mt){if(kt.setValue(ee,"toneMappingExposure",B.toneMappingExposure),We.needsLights&&pu(Kt,dr),Ue&&ce.fog===!0&&He.refreshFogUniforms(Kt,Ue),He.refreshMaterialUniforms(Kt,ce,pe,xe,I.state.transmissionRenderTarget[L.id]),We.needsLights&&We.lightProbeGrid){const Vt=We.lightProbeGrid;Kt.probesSH.value=Vt.texture,Kt.probesMin.value.copy(Vt.boundingBox.min),Kt.probesMax.value.copy(Vt.boundingBox.max),Kt.probesResolution.value.copy(Vt.resolution)}Xc.upload(ee,Ja(We),Kt,ge)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Xc.upload(ee,Ja(We),Kt,ge),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&kt.setValue(ee,"center",le.center),kt.setValue(ee,"modelViewMatrix",le.modelViewMatrix),kt.setValue(ee,"normalMatrix",le.normalMatrix),kt.setValue(ee,"modelMatrix",le.matrixWorld),ce.uniformsGroups!==void 0){const Vt=ce.uniformsGroups;for(let Oi=0,Ki=Vt.length;Oi<Ki;Oi++){const xs=Vt[Oi];Ae.update(xs,ni),Ae.bind(xs,ni)}}return ni}function pu(L,re){L.ambientLightColor.needsUpdate=re,L.lightProbe.needsUpdate=re,L.directionalLights.needsUpdate=re,L.directionalLightShadows.needsUpdate=re,L.pointLights.needsUpdate=re,L.pointLightShadows.needsUpdate=re,L.spotLights.needsUpdate=re,L.spotLightShadows.needsUpdate=re,L.rectAreaLights.needsUpdate=re,L.hemisphereLights.needsUpdate=re}function eo(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(L,re,fe){const ce=de.get(L);ce.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),de.get(L.texture).__webglTexture=re,de.get(L.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:fe,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,re){const fe=de.get(L);fe.__webglFramebuffer=re,fe.__useDefaultFramebuffer=re===void 0},this.setRenderTarget=function(L,re=0,fe=0){Y=L,j=re,q=fe;let ce=null,le=!1,Ue=!1;if(L){const Ne=de.get(L);if(Ne.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(ee.FRAMEBUFFER,Ne.__webglFramebuffer),k.copy(L.viewport),te.copy(L.scissor),Me=L.scissorTest,w.viewport(k),w.scissor(te),w.setScissorTest(Me),K=-1;return}else if(Ne.__webglFramebuffer===void 0)ge.setupRenderTarget(L);else if(Ne.__hasExternalTextures)ge.rebindTextures(L,de.get(L.texture).__webglTexture,de.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const vt=L.depthTexture;if(Ne.__boundDepthTexture!==vt){if(vt!==null&&de.has(vt)&&(L.width!==vt.image.width||L.height!==vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(L)}}const et=L.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ue=!0);const ot=de.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(ot[re])?ce=ot[re][fe]:ce=ot[re],le=!0):L.samples>0&&ge.useMultisampledRTT(L)===!1?ce=de.get(L).__webglMultisampledFramebuffer:Array.isArray(ot)?ce=ot[fe]:ce=ot,k.copy(L.viewport),te.copy(L.scissor),Me=L.scissorTest}else k.copy(Ge).multiplyScalar(pe).floor(),te.copy(xt).multiplyScalar(pe).floor(),Me=Ye;if(fe!==0&&(ce=W),w.bindFramebuffer(ee.FRAMEBUFFER,ce)&&w.drawBuffers(L,ce),w.viewport(k),w.scissor(te),w.setScissorTest(Me),le){const Ne=de.get(L.texture);ee.framebufferTexture2D(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne.__webglTexture,fe)}else if(Ue){const Ne=re;for(let et=0;et<L.textures.length;et++){const ot=de.get(L.textures[et]);ee.framebufferTextureLayer(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0+et,ot.__webglTexture,fe,Ne)}}else if(L!==null&&fe!==0){const Ne=de.get(L.texture);ee.framebufferTexture2D(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_2D,Ne.__webglTexture,fe)}K=-1},this.readRenderTargetPixels=function(L,re,fe,ce,le,Ue,Qe,Ne=0){if(!(L&&L.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let et=de.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Qe!==void 0&&(et=et[Qe]),et){w.bindFramebuffer(ee.FRAMEBUFFER,et);try{const ot=L.textures[Ne],vt=ot.format,St=ot.type;if(L.textures.length>1&&ee.readBuffer(ee.COLOR_ATTACHMENT0+Ne),!O.textureFormatReadable(vt)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!O.textureTypeReadable(St)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}re>=0&&re<=L.width-ce&&fe>=0&&fe<=L.height-le&&ee.readPixels(re,fe,ce,le,Be.convert(vt),Be.convert(St),Ue)}finally{const ot=Y!==null?de.get(Y).__webglFramebuffer:null;w.bindFramebuffer(ee.FRAMEBUFFER,ot)}}},this.readRenderTargetPixelsAsync=async function(L,re,fe,ce,le,Ue,Qe,Ne=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let et=de.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Qe!==void 0&&(et=et[Qe]),et)if(re>=0&&re<=L.width-ce&&fe>=0&&fe<=L.height-le){w.bindFramebuffer(ee.FRAMEBUFFER,et);const ot=L.textures[Ne],vt=ot.format,St=ot.type;if(L.textures.length>1&&ee.readBuffer(ee.COLOR_ATTACHMENT0+Ne),!O.textureFormatReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=ee.createBuffer();ee.bindBuffer(ee.PIXEL_PACK_BUFFER,it),ee.bufferData(ee.PIXEL_PACK_BUFFER,Ue.byteLength,ee.STREAM_READ),ee.readPixels(re,fe,ce,le,Be.convert(vt),Be.convert(St),0);const Pt=Y!==null?de.get(Y).__webglFramebuffer:null;w.bindFramebuffer(ee.FRAMEBUFFER,Pt);const Yt=ee.fenceSync(ee.SYNC_GPU_COMMANDS_COMPLETE,0);return ee.flush(),await XA(ee,Yt,4),ee.bindBuffer(ee.PIXEL_PACK_BUFFER,it),ee.getBufferSubData(ee.PIXEL_PACK_BUFFER,0,Ue),ee.deleteBuffer(it),ee.deleteSync(Yt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,re=null,fe=0){const ce=Math.pow(2,-fe),le=Math.floor(L.image.width*ce),Ue=Math.floor(L.image.height*ce),Qe=re!==null?re.x:0,Ne=re!==null?re.y:0;ge.setTexture2D(L,0),ee.copyTexSubImage2D(ee.TEXTURE_2D,fe,0,0,Qe,Ne,le,Ue),w.unbindTexture()},this.copyTextureToTexture=function(L,re,fe=null,ce=null,le=0,Ue=0){let Qe,Ne,et,ot,vt,St,it,Pt,Yt;const nn=L.isCompressedTexture?L.mipmaps[Ue]:L.image;if(fe!==null)Qe=fe.max.x-fe.min.x,Ne=fe.max.y-fe.min.y,et=fe.isBox3?fe.max.z-fe.min.z:1,ot=fe.min.x,vt=fe.min.y,St=fe.isBox3?fe.min.z:0;else{const Kt=Math.pow(2,-le);Qe=Math.floor(nn.width*Kt),Ne=Math.floor(nn.height*Kt),L.isDataArrayTexture?et=nn.depth:L.isData3DTexture?et=Math.floor(nn.depth*Kt):et=1,ot=0,vt=0,St=0}ce!==null?(it=ce.x,Pt=ce.y,Yt=ce.z):(it=0,Pt=0,Yt=0);const Ht=Be.convert(re.format),vn=Be.convert(re.type);let We;re.isData3DTexture?(ge.setTexture3D(re,0),We=ee.TEXTURE_3D):re.isDataArrayTexture||re.isCompressedArrayTexture?(ge.setTexture2DArray(re,0),We=ee.TEXTURE_2D_ARRAY):(ge.setTexture2D(re,0),We=ee.TEXTURE_2D),w.activeTexture(ee.TEXTURE0),w.pixelStorei(ee.UNPACK_FLIP_Y_WEBGL,re.flipY),w.pixelStorei(ee.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),w.pixelStorei(ee.UNPACK_ALIGNMENT,re.unpackAlignment);const Dn=w.getParameter(ee.UNPACK_ROW_LENGTH),_t=w.getParameter(ee.UNPACK_IMAGE_HEIGHT),ni=w.getParameter(ee.UNPACK_SKIP_PIXELS),ii=w.getParameter(ee.UNPACK_SKIP_ROWS),Mt=w.getParameter(ee.UNPACK_SKIP_IMAGES);w.pixelStorei(ee.UNPACK_ROW_LENGTH,nn.width),w.pixelStorei(ee.UNPACK_IMAGE_HEIGHT,nn.height),w.pixelStorei(ee.UNPACK_SKIP_PIXELS,ot),w.pixelStorei(ee.UNPACK_SKIP_ROWS,vt),w.pixelStorei(ee.UNPACK_SKIP_IMAGES,St);const dr=L.isDataArrayTexture||L.isData3DTexture,kt=re.isDataArrayTexture||re.isData3DTexture;if(L.isDepthTexture){const Kt=de.get(L),Ui=de.get(re),Vt=de.get(Kt.__renderTarget),Oi=de.get(Ui.__renderTarget);w.bindFramebuffer(ee.READ_FRAMEBUFFER,Vt.__webglFramebuffer),w.bindFramebuffer(ee.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let Ki=0;Ki<et;Ki++)dr&&(ee.framebufferTextureLayer(ee.READ_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,de.get(L).__webglTexture,le,St+Ki),ee.framebufferTextureLayer(ee.DRAW_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,de.get(re).__webglTexture,Ue,Yt+Ki)),ee.blitFramebuffer(ot,vt,Qe,Ne,it,Pt,Qe,Ne,ee.DEPTH_BUFFER_BIT,ee.NEAREST);w.bindFramebuffer(ee.READ_FRAMEBUFFER,null),w.bindFramebuffer(ee.DRAW_FRAMEBUFFER,null)}else if(le!==0||L.isRenderTargetTexture||de.has(L)){const Kt=de.get(L),Ui=de.get(re);w.bindFramebuffer(ee.READ_FRAMEBUFFER,X),w.bindFramebuffer(ee.DRAW_FRAMEBUFFER,H);for(let Vt=0;Vt<et;Vt++)dr?ee.framebufferTextureLayer(ee.READ_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,Kt.__webglTexture,le,St+Vt):ee.framebufferTexture2D(ee.READ_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_2D,Kt.__webglTexture,le),kt?ee.framebufferTextureLayer(ee.DRAW_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,Ui.__webglTexture,Ue,Yt+Vt):ee.framebufferTexture2D(ee.DRAW_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_2D,Ui.__webglTexture,Ue),le!==0?ee.blitFramebuffer(ot,vt,Qe,Ne,it,Pt,Qe,Ne,ee.COLOR_BUFFER_BIT,ee.NEAREST):kt?ee.copyTexSubImage3D(We,Ue,it,Pt,Yt+Vt,ot,vt,Qe,Ne):ee.copyTexSubImage2D(We,Ue,it,Pt,ot,vt,Qe,Ne);w.bindFramebuffer(ee.READ_FRAMEBUFFER,null),w.bindFramebuffer(ee.DRAW_FRAMEBUFFER,null)}else kt?L.isDataTexture||L.isData3DTexture?ee.texSubImage3D(We,Ue,it,Pt,Yt,Qe,Ne,et,Ht,vn,nn.data):re.isCompressedArrayTexture?ee.compressedTexSubImage3D(We,Ue,it,Pt,Yt,Qe,Ne,et,Ht,nn.data):ee.texSubImage3D(We,Ue,it,Pt,Yt,Qe,Ne,et,Ht,vn,nn):L.isDataTexture?ee.texSubImage2D(ee.TEXTURE_2D,Ue,it,Pt,Qe,Ne,Ht,vn,nn.data):L.isCompressedTexture?ee.compressedTexSubImage2D(ee.TEXTURE_2D,Ue,it,Pt,nn.width,nn.height,Ht,nn.data):ee.texSubImage2D(ee.TEXTURE_2D,Ue,it,Pt,Qe,Ne,Ht,vn,nn);w.pixelStorei(ee.UNPACK_ROW_LENGTH,Dn),w.pixelStorei(ee.UNPACK_IMAGE_HEIGHT,_t),w.pixelStorei(ee.UNPACK_SKIP_PIXELS,ni),w.pixelStorei(ee.UNPACK_SKIP_ROWS,ii),w.pixelStorei(ee.UNPACK_SKIP_IMAGES,Mt),Ue===0&&re.generateMipmaps&&ee.generateMipmap(We),w.unbindTexture()},this.initRenderTarget=function(L){de.get(L).__webglFramebuffer===void 0&&ge.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?ge.setTextureCube(L,0):L.isData3DTexture?ge.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?ge.setTexture2DArray(L,0):ge.setTexture2D(L,0),w.unbindTexture()},this.resetState=function(){j=0,q=0,Y=null,w.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}const Us=class Us{constructor(e,t){let n,s;this.promise=new Promise((f,p)=>{n=f,s=p});const o=n.bind(this),l=s.bind(this),u=(...f)=>{o(...f)},d=f=>{l(f)};e(u.bind(this),d.bind(this)),this.abortHandler=t,this.id=Us.idGen++}then(e){return new Us((t,n)=>{this.promise=this.promise.then((...s)=>{const o=e(...s);o instanceof Promise||o instanceof Us?o.then((...l)=>{t(...l)}):t(o)}).catch(s=>{n(s)})},this.abortHandler)}catch(e){return new Us(t=>{this.promise=this.promise.then((...n)=>{t(...n)}).catch(e)},this.abortHandler)}abort(e){this.abortHandler&&this.abortHandler(e)}};Fe(Us,"idGen",0);let tl=Us;class rv extends Error{constructor(e){super(e)}}(function(){const a=new Float32Array(1),e=new Int32Array(a.buffer);return function(t){a[0]=t;const n=e[0];let s=n>>16&32768,o=n>>12&2047;const l=n>>23&255;return l<103?s:l>142?(s|=31744,s|=(l==255?0:1)&&n&8388607,s):l<113?(o|=2048,s|=(o>>114-l)+(o>>113-l&1),s):(s|=l-112<<10|o>>1,s+=o&1,s)}})();const wf=(function(){const a=new Float32Array(1),e=new Int32Array(a.buffer);return function(t){return a[0]=t,e[0]}})(),TT=function(a,e){return a[e]+(a[e+1]<<8)+(a[e+2]<<16)+(a[e+3]<<24)},du=function(a,e,t=!0,n){const s=new AbortController,o=s.signal;let l=!1;const u=p=>{s.abort(p),l=!0};let d=!1;const f=(p,g,m,x)=>{e&&!d&&(e(p,g,m,x),p===100&&(d=!0))};return new tl((p,g)=>{const m={signal:o};n&&(m.headers=n),fetch(a,m).then(async x=>{if(!x.ok){const P=await x.text();g(new Error(`Fetch failed: ${x.status} ${x.statusText} ${P}`));return}const y=x.body.getReader();let M=0,S=x.headers.get("Content-Length"),A=S?parseInt(S):void 0;const T=[];for(;!l;)try{const{value:P,done:C}=await y.read();if(C){if(f(100,"100%",P,A),t){const R=new Blob(T).arrayBuffer();p(R)}else p();break}M+=P.length;let b,I;A!==void 0&&(b=M/A*100,I=`${b.toFixed(2)}%`),t&&T.push(P),f(b,I,P,A)}catch(P){g(P);return}}).catch(x=>{g(new rv(x))})},u)},an=function(a,e,t){return Math.max(Math.min(a,t),e)},Da=function(){return performance.now()/1e3},Ba=a=>{if(a.geometry&&(a.geometry.dispose(),a.geometry=null),a.material&&(a.material.dispose(),a.material=null),a.children)for(let e of a.children)Ba(e)},_i=(a,e)=>new Promise(t=>{window.setTimeout(()=>{t(a?a():void 0)},e?1:50)}),za=(a=0)=>{let e=0;if(a===1)e=9;else if(a===2)e=24;else if(a===3)e=45;else if(a>3)throw new Error("getSphericalHarmonicsComponentCountForDegree() -> Invalid spherical harmonics degree");return e},jh=()=>{let a,e;return{promise:new Promise((n,s)=>{a=n,e=s}),resolve:a,reject:e}},bf=a=>{let e,t;return a||(a=()=>{}),{promise:new tl((s,o)=>{e=s,t=o},a),resolve:e,reject:t}};class wT{constructor(e,t,n){this.major=e,this.minor=t,this.patch=n}toString(){return`${this.major}_${this.minor}_${this.patch}`}}function Kh(){const a=navigator.userAgent;return a.indexOf("iPhone")>0||a.indexOf("iPad")>0}function sv(){if(Kh()){const a=navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);return new wT(parseInt(a[1]||0,10),parseInt(a[2]||0,10),parseInt(a[3]||0,10))}else return null}const bT=14,Yo=class Yo{constructor(e=0){this.sphericalHarmonicsDegree=e,this.sphericalHarmonicsCount=za(this.sphericalHarmonicsDegree),this.componentCount=this.sphericalHarmonicsCount+bT,this.defaultSphericalHarmonics=new Array(this.sphericalHarmonicsCount).fill(0),this.splats=[],this.splatCount=0}static createSplat(e=0){const t=[0,0,0,1,1,1,1,0,0,0,0,0,0,0];let n=za(e);for(let s=0;s<n;s++)t.push(0);return t}addSplat(e){this.splats.push(e),this.splatCount++}getSplat(e){return this.splats[e]}addDefaultSplat(){const e=Yo.createSplat(this.sphericalHarmonicsDegree);return this.addSplat(e),e}addSplatFromComonents(e,t,n,s,o,l,u,d,f,p,g,m,x,y,...M){const S=[e,t,n,s,o,l,u,d,f,p,g,m,x,y,...this.defaultSphericalHarmonics];for(let A=0;A<M.length&&A<this.sphericalHarmonicsCount;A++)S[A]=M[A];return this.addSplat(S),S}addSplatFromArray(e,t){const n=e.splats[t],s=Yo.createSplat(this.sphericalHarmonicsDegree);for(let o=0;o<this.componentCount&&o<n.length;o++)s[o]=n[o];this.addSplat(s)}};Fe(Yo,"OFFSET",{X:0,Y:1,Z:2,SCALE0:3,SCALE1:4,SCALE2:5,ROTATION0:6,ROTATION1:7,ROTATION2:8,ROTATION3:9,FDC0:10,FDC1:11,FDC2:12,OPACITY:13,FRC0:14,FRC1:15,FRC2:16,FRC3:17,FRC4:18,FRC5:19,FRC6:20,FRC7:21,FRC8:22,FRC9:23,FRC10:24,FRC11:25,FRC12:26,FRC13:27,FRC14:28,FRC15:29,FRC16:30,FRC17:31,FRC18:32,FRC19:33,FRC20:34,FRC21:35,FRC22:36,FRC23:37});let ze=Yo;class wt{}Fe(wt,"DefaultSplatSortDistanceMapPrecision",16),Fe(wt,"MemoryPageSize",65536),Fe(wt,"BytesPerFloat",4),Fe(wt,"BytesPerInt",4),Fe(wt,"MaxScenes",32),Fe(wt,"ProgressiveLoadSectionSize",262144),Fe(wt,"ProgressiveLoadSectionDelayDuration",15),Fe(wt,"SphericalHarmonics8BitCompressionRange",3);const RT=wt.SphericalHarmonics8BitCompressionRange,ss=RT/2,Mn=Jo.toHalfFloat.bind(Jo),$h=Jo.fromHalfFloat.bind(Jo),sn=(a,e,t=!1,n,s)=>{if(e===0)return a;if(e===1||e===2&&!t)return Jo.fromHalfFloat(a);if(e===2)return Zh(a,n,s)},Xo=(a,e,t)=>{a=an(a,e,t);const n=t-e;return an(Math.floor((a-e)/n*255),0,255)},Zh=(a,e,t)=>{const n=t-e;return a/255*n+e},av=(a,e,t)=>Xo($h(a,e,t)),IT=(a,e,t)=>Mn(Zh(a,e,t)),zt=(a,e,t,n=!1)=>t===0?a.getFloat32(e*4,!0):t===1||t===2&&!n?a.getUint16(e*2,!0):a.getUint8(e,!0),PT=(function(){const a=e=>e;return function(e,t,n,s=!1){if(t===n)return e;let o=a;return t===2&&s?n===1?o=IT:n==0&&(o=Zh):t===2||t===1?n===0?o=$h:n==2&&(s?o=av:o=a):t===0&&(n===1?o=Mn:n==2&&(s?o=Xo:o=Mn)),o(e)}})(),Fa=(a,e,t,n,s=0)=>{const o=new Uint8Array(a,e),l=new Uint8Array(t,n);for(let u=0;u<s;u++)l[u]=o[u]},ve=class ve{constructor(e,t=!0){Fe(this,"getSplatScaleAndRotation",(function(){const e=new gt,t=new gt,n=new gt,s=new z,o=new z,l=new en;return function(u,d,f,p,g){const m=this.globalSplatIndexToSectionMap[u],x=this.sections[m],y=u-x.splatCountOffset,M=x.bytesPerSplat*y+ve.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,S=new DataView(this.bufferData,x.dataBase+M);o.set(sn(zt(S,0,this.compressionLevel),this.compressionLevel),sn(zt(S,1,this.compressionLevel),this.compressionLevel),sn(zt(S,2,this.compressionLevel),this.compressionLevel)),g&&(g.x!==void 0&&(o.x=g.x),g.y!==void 0&&(o.y=g.y),g.z!==void 0&&(o.z=g.z)),l.set(sn(zt(S,4,this.compressionLevel),this.compressionLevel),sn(zt(S,5,this.compressionLevel),this.compressionLevel),sn(zt(S,6,this.compressionLevel),this.compressionLevel),sn(zt(S,3,this.compressionLevel),this.compressionLevel)),p?(e.makeScale(o.x,o.y,o.z),t.makeRotationFromQuaternion(l),n.copy(e).multiply(t).multiply(p),n.decompose(s,f,d)):(d.copy(o),f.copy(l))}})());Fe(this,"fillSplatScaleRotationArray",(function(){const e=new gt,t=new gt,n=new gt,s=new z,o=new en,l=new z,u=d=>{const f=d.w<0?-1:1;d.x*=f,d.y*=f,d.z*=f,d.w*=f};return function(d,f,p,g,m,x,y,M){const S=this.splatCount;g=g||0,m=m||S-1,x===void 0&&(x=g);const A=(T,P)=>PT(T,P,y);for(let T=g;T<=m;T++){const P=this.globalSplatIndexToSectionMap[T],C=this.sections[P],b=T-C.splatCountOffset,I=C.bytesPerSplat*b+ve.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,R=(T-g+x)*ve.ScaleComponentCount,E=(T-g+x)*ve.RotationComponentCount,F=new DataView(this.bufferData,C.dataBase+I),B=M&&M.x!==void 0?M.x:zt(F,0,this.compressionLevel),N=M&&M.y!==void 0?M.y:zt(F,1,this.compressionLevel),U=M&&M.z!==void 0?M.z:zt(F,2,this.compressionLevel),W=zt(F,3,this.compressionLevel),X=zt(F,4,this.compressionLevel),H=zt(F,5,this.compressionLevel),j=zt(F,6,this.compressionLevel);s.set(sn(B,this.compressionLevel),sn(N,this.compressionLevel),sn(U,this.compressionLevel)),o.set(sn(X,this.compressionLevel),sn(H,this.compressionLevel),sn(j,this.compressionLevel),sn(W,this.compressionLevel)).normalize(),p&&(l.set(0,0,0),e.makeScale(s.x,s.y,s.z),t.makeRotationFromQuaternion(o),n.identity().premultiply(e).premultiply(t),n.premultiply(p),n.decompose(l,o,s),o.normalize()),u(o),d&&(d[R]=A(s.x,0),d[R+1]=A(s.y,0),d[R+2]=A(s.z,0)),f&&(f[E]=A(o.x,0),f[E+1]=A(o.y,0),f[E+2]=A(o.z,0),f[E+3]=A(o.w,0))}}})());Fe(this,"fillSphericalHarmonicsArray",(function(){const e=new ft,t=new gt,n=new z,s=new z,o=new en,l=[],u=[],d=[],f=[],p=[],g=[],m=[],x=[],y=[],M=[],S=[],A=[],T=[],P=[],C=[],b=[],I=[],R=[],E=X=>X,F=(X,H,j,q)=>{X[0]=H,X[1]=j,X[2]=q},B=(X,H,j,q,Y)=>{X[0]=zt(H,q,Y,!0),X[1]=zt(H,q+j,Y,!0),X[2]=zt(H,q+j+j,Y,!0)},N=(X,H)=>{H[0]=X[0],H[1]=X[1],H[2]=X[2]},U=(X,H,j,q)=>{H[j]=q(X[0]),H[j+1]=q(X[1]),H[j+2]=q(X[2])},W=(X,H,j,q,Y)=>(H[0]=sn(X[0],j,!0,q,Y),H[1]=sn(X[1],j,!0,q,Y),H[2]=sn(X[2],j,!0,q,Y),H);return function(X,H,j,q,Y,K,ne){const k=this.splatCount;q=q||0,Y=Y||k-1,K===void 0&&(K=q),j&&H>=1&&(t.copy(j),t.decompose(n,o,s),o.normalize(),t.makeRotationFromQuaternion(o),e.setFromMatrix4(t),F(l,e.elements[4],-e.elements[7],e.elements[1]),F(u,-e.elements[5],e.elements[8],-e.elements[2]),F(d,e.elements[3],-e.elements[6],e.elements[0]));const te=Te=>av(Te,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff),Me=Te=>Xo(Te,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff);for(let Te=q;Te<=Y;Te++){const Re=this.globalSplatIndexToSectionMap[Te],se=this.sections[Re];H=Math.min(H,se.sphericalHarmonicsDegree);const xe=za(H),pe=Te-se.splatCountOffset,be=se.bytesPerSplat*pe+ve.CompressionLevels[this.compressionLevel].SphericalHarmonicsOffsetBytes,Oe=new DataView(this.bufferData,se.dataBase+be),Ge=(Te-q+K)*xe;let xt=j?0:this.compressionLevel,Ye=E;xt!==ne&&(xt===1?ne===0?Ye=$h:ne==2&&(Ye=te):xt===0&&(ne===1?Ye=Mn:ne==2&&(Ye=Me)));const dt=this.minSphericalHarmonicsCoeff,nt=this.maxSphericalHarmonicsCoeff;H>=1&&(B(y,Oe,3,0,this.compressionLevel),B(M,Oe,3,1,this.compressionLevel),B(S,Oe,3,2,this.compressionLevel),j?(W(y,y,this.compressionLevel,dt,nt),W(M,M,this.compressionLevel,dt,nt),W(S,S,this.compressionLevel,dt,nt),ve.rotateSphericalHarmonics3(y,M,S,l,u,d,P,C,b)):(N(y,P),N(M,C),N(S,b)),U(P,X,Ge,Ye),U(C,X,Ge+3,Ye),U(b,X,Ge+6,Ye),H>=2&&(B(y,Oe,5,9,this.compressionLevel),B(M,Oe,5,10,this.compressionLevel),B(S,Oe,5,11,this.compressionLevel),B(A,Oe,5,12,this.compressionLevel),B(T,Oe,5,13,this.compressionLevel),j?(W(y,y,this.compressionLevel,dt,nt),W(M,M,this.compressionLevel,dt,nt),W(S,S,this.compressionLevel,dt,nt),W(A,A,this.compressionLevel,dt,nt),W(T,T,this.compressionLevel,dt,nt),ve.rotateSphericalHarmonics5(y,M,S,A,T,l,u,d,f,p,g,m,x,P,C,b,I,R)):(N(y,P),N(M,C),N(S,b),N(A,I),N(T,R)),U(P,X,Ge+9,Ye),U(C,X,Ge+12,Ye),U(b,X,Ge+15,Ye),U(I,X,Ge+18,Ye),U(R,X,Ge+21,Ye)))}}})());this.constructFromBuffer(e,t)}getSplatCount(){return this.splatCount}getMaxSplatCount(){return this.maxSplatCount}getMinSphericalHarmonicsDegree(){let e=0;for(let t=0;t<this.sections.length;t++){const n=this.sections[t];(t===0||n.sphericalHarmonicsDegree<e)&&(e=n.sphericalHarmonicsDegree)}return e}getBucketIndex(e,t){let n;const s=e.fullBucketCount*e.bucketSize;if(t<s)n=Math.floor(t/e.bucketSize);else{let o=s;n=e.fullBucketCount;let l=0;for(;o<e.splatCount;){let u=e.partiallyFilledBucketLengths[l];if(t>=o&&t<o+u)break;o+=u,n++,l++}}return n}getSplatCenter(e,t,n){const s=this.globalSplatIndexToSectionMap[e],o=this.sections[s],l=e-o.splatCountOffset,u=o.bytesPerSplat*l,d=new DataView(this.bufferData,o.dataBase+u),f=zt(d,0,this.compressionLevel),p=zt(d,1,this.compressionLevel),g=zt(d,2,this.compressionLevel);if(this.compressionLevel>=1){const x=this.getBucketIndex(o,l)*ve.BucketStorageSizeFloats,y=o.compressionScaleFactor,M=o.compressionScaleRange;t.x=(f-M)*y+o.bucketArray[x],t.y=(p-M)*y+o.bucketArray[x+1],t.z=(g-M)*y+o.bucketArray[x+2]}else t.x=f,t.y=p,t.z=g;n&&t.applyMatrix4(n)}getSplatColor(e,t){const n=this.globalSplatIndexToSectionMap[e],s=this.sections[n],o=e-s.splatCountOffset,l=s.bytesPerSplat*o+ve.CompressionLevels[this.compressionLevel].ColorOffsetBytes,u=new Uint8Array(this.bufferData,s.dataBase+l,4);t.set(u[0],u[1],u[2],u[3])}fillSplatCenterArray(e,t,n,s,o){const l=this.splatCount;n=n||0,s=s||l-1,o===void 0&&(o=n);const u=new z;for(let d=n;d<=s;d++){const f=this.globalSplatIndexToSectionMap[d],p=this.sections[f],g=d-p.splatCountOffset,m=(d-n+o)*ve.CenterComponentCount,x=p.bytesPerSplat*g,y=new DataView(this.bufferData,p.dataBase+x),M=zt(y,0,this.compressionLevel),S=zt(y,1,this.compressionLevel),A=zt(y,2,this.compressionLevel);if(this.compressionLevel>=1){const P=this.getBucketIndex(p,g)*ve.BucketStorageSizeFloats,C=p.compressionScaleFactor,b=p.compressionScaleRange;u.x=(M-b)*C+p.bucketArray[P],u.y=(S-b)*C+p.bucketArray[P+1],u.z=(A-b)*C+p.bucketArray[P+2]}else u.x=M,u.y=S,u.z=A;t&&u.applyMatrix4(t),e[m]=u.x,e[m+1]=u.y,e[m+2]=u.z}}fillSplatCovarianceArray(e,t,n,s,o,l){const u=this.splatCount,d=new z,f=new en;n=n||0,s=s||u-1,o===void 0&&(o=n);for(let p=n;p<=s;p++){const g=this.globalSplatIndexToSectionMap[p],m=this.sections[g],x=p-m.splatCountOffset,y=(p-n+o)*ve.CovarianceComponentCount,M=m.bytesPerSplat*x+ve.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,S=new DataView(this.bufferData,m.dataBase+M);d.set(sn(zt(S,0,this.compressionLevel),this.compressionLevel),sn(zt(S,1,this.compressionLevel),this.compressionLevel),sn(zt(S,2,this.compressionLevel),this.compressionLevel)),f.set(sn(zt(S,4,this.compressionLevel),this.compressionLevel),sn(zt(S,5,this.compressionLevel),this.compressionLevel),sn(zt(S,6,this.compressionLevel),this.compressionLevel),sn(zt(S,3,this.compressionLevel),this.compressionLevel)),ve.computeCovariance(d,f,t,e,y,l)}}fillSplatColorArray(e,t,n,s,o){const l=this.splatCount;n=n||0,s=s||l-1,o===void 0&&(o=n);for(let u=n;u<=s;u++){const d=this.globalSplatIndexToSectionMap[u],f=this.sections[d],p=u-f.splatCountOffset,g=(u-n+o)*ve.ColorComponentCount,m=f.bytesPerSplat*p+ve.CompressionLevels[this.compressionLevel].ColorOffsetBytes,x=new Uint8Array(this.bufferData,f.dataBase+m);let y=x[3];y=y>=t?y:0,e[g]=x[0],e[g+1]=x[1],e[g+2]=x[2],e[g+3]=y}}static parseHeader(e){const t=new Uint8Array(e,0,ve.HeaderSizeBytes),n=new Uint16Array(e,0,ve.HeaderSizeBytes/2),s=new Uint32Array(e,0,ve.HeaderSizeBytes/4),o=new Float32Array(e,0,ve.HeaderSizeBytes/4),l=t[0],u=t[1],d=s[1],f=s[2],p=s[3],g=s[4],m=n[10],x=new z(o[6],o[7],o[8]),y=o[9]||-ss,M=o[10]||ss;return{versionMajor:l,versionMinor:u,maxSectionCount:d,sectionCount:f,maxSplatCount:p,splatCount:g,compressionLevel:m,sceneCenter:x,minSphericalHarmonicsCoeff:y,maxSphericalHarmonicsCoeff:M}}static writeHeaderCountsToBuffer(e,t,n){const s=new Uint32Array(n,0,ve.HeaderSizeBytes/4);s[2]=e,s[4]=t}static writeHeaderToBuffer(e,t){const n=new Uint8Array(t,0,ve.HeaderSizeBytes),s=new Uint16Array(t,0,ve.HeaderSizeBytes/2),o=new Uint32Array(t,0,ve.HeaderSizeBytes/4),l=new Float32Array(t,0,ve.HeaderSizeBytes/4);n[0]=e.versionMajor,n[1]=e.versionMinor,n[2]=0,n[3]=0,o[1]=e.maxSectionCount,o[2]=e.sectionCount,o[3]=e.maxSplatCount,o[4]=e.splatCount,s[10]=e.compressionLevel,l[6]=e.sceneCenter.x,l[7]=e.sceneCenter.y,l[8]=e.sceneCenter.z,l[9]=e.minSphericalHarmonicsCoeff||-ss,l[10]=e.maxSphericalHarmonicsCoeff||ss}static parseSectionHeaders(e,t,n=0,s){const o=e.compressionLevel,l=e.maxSectionCount,u=new Uint16Array(t,n,l*ve.SectionHeaderSizeBytes/2),d=new Uint32Array(t,n,l*ve.SectionHeaderSizeBytes/4),f=new Float32Array(t,n,l*ve.SectionHeaderSizeBytes/4),p=[];let g=0,m=g/2,x=g/4,y=ve.HeaderSizeBytes+e.maxSectionCount*ve.SectionHeaderSizeBytes,M=0;for(let S=0;S<l;S++){const A=d[x+1],T=d[x+2],P=d[x+3],C=f[x+4],b=C/2,I=u[m+10],R=d[x+6]||ve.CompressionLevels[o].ScaleRange,E=d[x+8],F=d[x+9],B=F*4,N=I*P+B,U=u[m+20],{bytesPerSplat:W}=ve.calculateComponentStorage(o,U),X=W*A,H=X+N,j={bytesPerSplat:W,splatCountOffset:M,splatCount:s?A:0,maxSplatCount:A,bucketSize:T,bucketCount:P,bucketBlockSize:C,halfBucketBlockSize:b,bucketStorageSizeBytes:I,bucketsStorageSizeBytes:N,splatDataStorageSizeBytes:X,storageSizeBytes:H,compressionScaleRange:R,compressionScaleFactor:b/R,base:y,bucketsBase:y+B,dataBase:y+N,fullBucketCount:E,partiallyFilledBucketCount:F,sphericalHarmonicsDegree:U};p[S]=j,y+=H,g+=ve.SectionHeaderSizeBytes,m=g/2,x=g/4,M+=A}return p}static writeSectionHeaderToBuffer(e,t,n,s=0){const o=new Uint16Array(n,s,ve.SectionHeaderSizeBytes/2),l=new Uint32Array(n,s,ve.SectionHeaderSizeBytes/4),u=new Float32Array(n,s,ve.SectionHeaderSizeBytes/4);l[0]=e.splatCount,l[1]=e.maxSplatCount,l[2]=t>=1?e.bucketSize:0,l[3]=t>=1?e.bucketCount:0,u[4]=t>=1?e.bucketBlockSize:0,o[10]=t>=1?ve.BucketStorageSizeBytes:0,l[6]=t>=1?e.compressionScaleRange:0,l[7]=e.storageSizeBytes,l[8]=t>=1?e.fullBucketCount:0,l[9]=t>=1?e.partiallyFilledBucketCount:0,o[20]=e.sphericalHarmonicsDegree}static writeSectionHeaderSplatCountToBuffer(e,t,n=0){const s=new Uint32Array(t,n,ve.SectionHeaderSizeBytes/4);s[0]=e}constructFromBuffer(e,t){this.bufferData=e,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSectionMap=[];const n=ve.parseHeader(this.bufferData);this.versionMajor=n.versionMajor,this.versionMinor=n.versionMinor,this.maxSectionCount=n.maxSectionCount,this.sectionCount=t?n.maxSectionCount:0,this.maxSplatCount=n.maxSplatCount,this.splatCount=t?n.maxSplatCount:0,this.compressionLevel=n.compressionLevel,this.sceneCenter=new z().copy(n.sceneCenter),this.minSphericalHarmonicsCoeff=n.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff=n.maxSphericalHarmonicsCoeff,this.sections=ve.parseSectionHeaders(n,this.bufferData,ve.HeaderSizeBytes,t),this.linkBufferArrays(),this.buildMaps()}static calculateComponentStorage(e,t){const n=ve.CompressionLevels[e].BytesPerCenter,s=ve.CompressionLevels[e].BytesPerScale,o=ve.CompressionLevels[e].BytesPerRotation,l=ve.CompressionLevels[e].BytesPerColor,u=za(t),d=ve.CompressionLevels[e].BytesPerSphericalHarmonicsComponent*u,f=n+s+o+l+d;return{bytesPerCenter:n,bytesPerScale:s,bytesPerRotation:o,bytesPerColor:l,sphericalHarmonicsComponentsPerSplat:u,sphericalHarmonicsBytesPerSplat:d,bytesPerSplat:f}}linkBufferArrays(){for(let e=0;e<this.maxSectionCount;e++){const t=this.sections[e];t.bucketArray=new Float32Array(this.bufferData,t.bucketsBase,t.bucketCount*ve.BucketStorageSizeFloats),t.partiallyFilledBucketCount>0&&(t.partiallyFilledBucketLengths=new Uint32Array(this.bufferData,t.base,t.partiallyFilledBucketCount))}}buildMaps(){let e=0;for(let t=0;t<this.maxSectionCount;t++){const n=this.sections[t];for(let s=0;s<n.maxSplatCount;s++){const o=e+s;this.globalSplatIndexToLocalSplatIndexMap[o]=s,this.globalSplatIndexToSectionMap[o]=t}e+=n.maxSplatCount}}updateLoadedCounts(e,t){ve.writeHeaderCountsToBuffer(e,t,this.bufferData),this.sectionCount=e,this.splatCount=t}updateSectionLoadedCounts(e,t){const n=ve.HeaderSizeBytes+ve.SectionHeaderSizeBytes*e;ve.writeSectionHeaderSplatCountToBuffer(t,this.bufferData,n),this.sections[e].splatCount=t}static generateFromUncompressedSplatArrays(e,t,n,s,o,l,u=[]){let d=0;for(let b=0;b<e.length;b++){const I=e[b];d=Math.max(I.sphericalHarmonicsDegree,d)}let f,p;for(let b=0;b<e.length;b++){const I=e[b];for(let R=0;R<I.splats.length;R++){const E=I.splats[R];for(let F=ze.OFFSET.FRC0;F<ze.OFFSET.FRC23&&F<E.length;F++)(!f||E[F]<f)&&(f=E[F]),(!p||E[F]>p)&&(p=E[F])}}f=f||-ss,p=p||ss;const{bytesPerSplat:g}=ve.calculateComponentStorage(n,d),m=ve.CompressionLevels[n].ScaleRange,x=[],y=[];let M=0;for(let b=0;b<e.length;b++){const I=e[b],R=new ze(d);for(let Re=0;Re<I.splatCount;Re++){const se=I.splats[Re];(se[ze.OFFSET.OPACITY]||0)>=t&&R.addSplat(se)}const E=u[b]||{},F=(E.blockSizeFactor||1)*(o||ve.BucketBlockSize),B=Math.ceil((E.bucketSizeFactor||1)*(l||ve.BucketSize)),N=ve.computeBucketsForUncompressedSplatArray(R,F,B),U=N.fullBuckets.length,W=N.partiallyFullBuckets.map(Re=>Re.splats.length),X=W.length,H=[...N.fullBuckets,...N.partiallyFullBuckets],j=R.splats.length*g,q=X*4,Y=n>=1?H.length*ve.BucketStorageSizeBytes+q:0,K=j+Y,ne=new ArrayBuffer(K),k=m/(F*.5),te=new z;let Me=0;for(let Re=0;Re<H.length;Re++){const se=H[Re];te.fromArray(se.center);for(let xe=0;xe<se.splats.length;xe++){let pe=se.splats[xe];const be=R.splats[pe],Oe=Y+Me*g;ve.writeSplatDataToSectionBuffer(be,ne,Oe,n,d,te,k,m,f,p),Me++}}if(M+=Me,n>=1){const Re=new Uint32Array(ne,0,W.length*4);for(let xe=0;xe<W.length;xe++)Re[xe]=W[xe];const se=new Float32Array(ne,q,H.length*ve.BucketStorageSizeFloats);for(let xe=0;xe<H.length;xe++){const pe=H[xe],be=xe*3;se[be]=pe.center[0],se[be+1]=pe.center[1],se[be+2]=pe.center[2]}}x.push(ne);const Te=new ArrayBuffer(ve.SectionHeaderSizeBytes);ve.writeSectionHeaderToBuffer({maxSplatCount:Me,splatCount:Me,bucketSize:B,bucketCount:H.length,bucketBlockSize:F,compressionScaleRange:m,storageSizeBytes:K,fullBucketCount:U,partiallyFilledBucketCount:X,sphericalHarmonicsDegree:d},n,Te,0),y.push(Te)}let S=0;for(let b of x)S+=b.byteLength;const A=ve.HeaderSizeBytes+ve.SectionHeaderSizeBytes*x.length+S,T=new ArrayBuffer(A);ve.writeHeaderToBuffer({versionMajor:0,versionMinor:1,maxSectionCount:x.length,sectionCount:x.length,maxSplatCount:M,splatCount:M,compressionLevel:n,sceneCenter:s,minSphericalHarmonicsCoeff:f,maxSphericalHarmonicsCoeff:p},T);let P=ve.HeaderSizeBytes;for(let b of y)new Uint8Array(T,P,ve.SectionHeaderSizeBytes).set(new Uint8Array(b)),P+=ve.SectionHeaderSizeBytes;for(let b of x)new Uint8Array(T,P,b.byteLength).set(new Uint8Array(b)),P+=b.byteLength;return new ve(T)}static computeBucketsForUncompressedSplatArray(e,t,n){let s=e.splatCount;const o=t/2,l=new z,u=new z;for(let M=0;M<s;M++){const S=e.splats[M],A=[S[ze.OFFSET.X],S[ze.OFFSET.Y],S[ze.OFFSET.Z]];(M===0||A[0]<l.x)&&(l.x=A[0]),(M===0||A[0]>u.x)&&(u.x=A[0]),(M===0||A[1]<l.y)&&(l.y=A[1]),(M===0||A[1]>u.y)&&(u.y=A[1]),(M===0||A[2]<l.z)&&(l.z=A[2]),(M===0||A[2]>u.z)&&(u.z=A[2])}const d=new z().copy(u).sub(l),f=Math.ceil(d.y/t),p=Math.ceil(d.z/t),g=new z,m=[],x={};for(let M=0;M<s;M++){const S=e.splats[M],A=[S[ze.OFFSET.X],S[ze.OFFSET.Y],S[ze.OFFSET.Z]],T=Math.floor((A[0]-l.x)/t),P=Math.floor((A[1]-l.y)/t),C=Math.floor((A[2]-l.z)/t);g.x=T*t+l.x+o,g.y=P*t+l.y+o,g.z=C*t+l.z+o;const b=T*(f*p)+P*p+C;let I=x[b];I||(x[b]=I={splats:[],center:g.toArray()}),I.splats.push(M),I.splats.length>=n&&(m.push(I),x[b]=null)}const y=[];for(let M in x)if(x.hasOwnProperty(M)){const S=x[M];S&&y.push(S)}return{fullBuckets:m,partiallyFullBuckets:y}}static preallocateUncompressed(e,t){const n=ve.CompressionLevels[0].SphericalHarmonicsDegrees[t],s=ve.HeaderSizeBytes+ve.SectionHeaderSizeBytes,o=s+n.BytesPerSplat*e,l=new ArrayBuffer(o);return ve.writeHeaderToBuffer({versionMajor:ve.CurrentMajorVersion,versionMinor:ve.CurrentMinorVersion,maxSectionCount:1,sectionCount:1,maxSplatCount:e,splatCount:e,compressionLevel:0,sceneCenter:new z},l),ve.writeSectionHeaderToBuffer({maxSplatCount:e,splatCount:e,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:t},0,l,ve.HeaderSizeBytes),{splatBuffer:new ve(l,!0),splatBufferDataOffsetBytes:s}}};Fe(ve,"CurrentMajorVersion",0),Fe(ve,"CurrentMinorVersion",1),Fe(ve,"CenterComponentCount",3),Fe(ve,"ScaleComponentCount",3),Fe(ve,"RotationComponentCount",4),Fe(ve,"ColorComponentCount",4),Fe(ve,"CovarianceComponentCount",6),Fe(ve,"SplatScaleOffsetFloat",3),Fe(ve,"SplatRotationOffsetFloat",6),Fe(ve,"CompressionLevels",{0:{BytesPerCenter:12,BytesPerScale:12,BytesPerRotation:16,BytesPerColor:4,ScaleOffsetBytes:12,RotationffsetBytes:24,ColorOffsetBytes:40,SphericalHarmonicsOffsetBytes:44,ScaleRange:1,BytesPerSphericalHarmonicsComponent:4,SphericalHarmonicsOffsetFloat:11,SphericalHarmonicsDegrees:{0:{BytesPerSplat:44},1:{BytesPerSplat:80},2:{BytesPerSplat:140}}},1:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:2,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:42},2:{BytesPerSplat:72}}},2:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:1,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:33},2:{BytesPerSplat:48}}}}),Fe(ve,"CovarianceSizeFloats",6),Fe(ve,"HeaderSizeBytes",4096),Fe(ve,"SectionHeaderSizeBytes",1024),Fe(ve,"BucketStorageSizeBytes",12),Fe(ve,"BucketStorageSizeFloats",3),Fe(ve,"BucketBlockSize",5),Fe(ve,"BucketSize",256),Fe(ve,"computeCovariance",(function(){const e=new gt,t=new ft,n=new ft,s=new ft,o=new ft,l=new ft,u=new ft;return function(d,f,p,g,m=0,x){e.makeScale(d.x,d.y,d.z),t.setFromMatrix4(e),e.makeRotationFromQuaternion(f),n.setFromMatrix4(e),s.copy(n).multiply(t),o.copy(s).transpose().premultiply(s),p&&(l.setFromMatrix4(p),u.copy(l).transpose(),o.multiply(u),o.premultiply(l)),x>=1?(g[m]=Mn(o.elements[0]),g[m+1]=Mn(o.elements[3]),g[m+2]=Mn(o.elements[6]),g[m+3]=Mn(o.elements[4]),g[m+4]=Mn(o.elements[7]),g[m+5]=Mn(o.elements[8])):(g[m]=o.elements[0],g[m+1]=o.elements[3],g[m+2]=o.elements[6],g[m+3]=o.elements[4],g[m+4]=o.elements[7],g[m+5]=o.elements[8])}})()),Fe(ve,"dot3",(e,t,n,s,o)=>{o[0]=o[1]=o[2]=0;const l=s[0],u=s[1],d=s[2];ve.addInto3(e[0]*l,e[1]*l,e[2]*l,o),ve.addInto3(t[0]*u,t[1]*u,t[2]*u,o),ve.addInto3(n[0]*d,n[1]*d,n[2]*d,o)}),Fe(ve,"addInto3",(e,t,n,s)=>{s[0]=s[0]+e,s[1]=s[1]+t,s[2]=s[2]+n}),Fe(ve,"dot5",(e,t,n,s,o,l,u)=>{u[0]=u[1]=u[2]=0;const d=l[0],f=l[1],p=l[2],g=l[3],m=l[4];ve.addInto3(e[0]*d,e[1]*d,e[2]*d,u),ve.addInto3(t[0]*f,t[1]*f,t[2]*f,u),ve.addInto3(n[0]*p,n[1]*p,n[2]*p,u),ve.addInto3(s[0]*g,s[1]*g,s[2]*g,u),ve.addInto3(o[0]*m,o[1]*m,o[2]*m,u)}),Fe(ve,"rotateSphericalHarmonics3",(e,t,n,s,o,l,u,d,f)=>{ve.dot3(e,t,n,s,u),ve.dot3(e,t,n,o,d),ve.dot3(e,t,n,l,f)}),Fe(ve,"rotateSphericalHarmonics5",(e,t,n,s,o,l,u,d,f,p,g,m,x,y,M,S,A,T)=>{const P=Math.sqrt(.25),C=Math.sqrt(3/4),b=Math.sqrt(1/3),I=Math.sqrt(4/3),R=Math.sqrt(1/12);f[0]=P*(d[2]*l[0]+d[0]*l[2]+(l[2]*d[0]+l[0]*d[2])),f[1]=d[1]*l[0]+l[1]*d[0],f[2]=C*(d[1]*l[1]+l[1]*d[1]),f[3]=d[1]*l[2]+l[1]*d[2],f[4]=P*(d[2]*l[2]-d[0]*l[0]+(l[2]*d[2]-l[0]*d[0])),ve.dot5(e,t,n,s,o,f,y),p[0]=P*(u[2]*l[0]+u[0]*l[2]+(l[2]*u[0]+l[0]*u[2])),p[1]=u[1]*l[0]+l[1]*u[0],p[2]=C*(u[1]*l[1]+l[1]*u[1]),p[3]=u[1]*l[2]+l[1]*u[2],p[4]=P*(u[2]*l[2]-u[0]*l[0]+(l[2]*u[2]-l[0]*u[0])),ve.dot5(e,t,n,s,o,p,M),g[0]=b*(u[2]*u[0]+u[0]*u[2])+-R*(d[2]*d[0]+d[0]*d[2]+(l[2]*l[0]+l[0]*l[2])),g[1]=I*u[1]*u[0]+-b*(d[1]*d[0]+l[1]*l[0]),g[2]=u[1]*u[1]+-P*(d[1]*d[1]+l[1]*l[1]),g[3]=I*u[1]*u[2]+-b*(d[1]*d[2]+l[1]*l[2]),g[4]=b*(u[2]*u[2]-u[0]*u[0])+-R*(d[2]*d[2]-d[0]*d[0]+(l[2]*l[2]-l[0]*l[0])),ve.dot5(e,t,n,s,o,g,S),m[0]=P*(u[2]*d[0]+u[0]*d[2]+(d[2]*u[0]+d[0]*u[2])),m[1]=u[1]*d[0]+d[1]*u[0],m[2]=C*(u[1]*d[1]+d[1]*u[1]),m[3]=u[1]*d[2]+d[1]*u[2],m[4]=P*(u[2]*d[2]-u[0]*d[0]+(d[2]*u[2]-d[0]*u[0])),ve.dot5(e,t,n,s,o,m,A),x[0]=P*(d[2]*d[0]+d[0]*d[2]-(l[2]*l[0]+l[0]*l[2])),x[1]=d[1]*d[0]-l[1]*l[0],x[2]=C*(d[1]*d[1]-l[1]*l[1]),x[3]=d[1]*d[2]-l[1]*l[2],x[4]=P*(d[2]*d[2]-d[0]*d[0]-(l[2]*l[2]-l[0]*l[0])),ve.dot5(e,t,n,s,o,x,T)}),Fe(ve,"writeSplatDataToSectionBuffer",(function(){const e=new ArrayBuffer(12),t=new ArrayBuffer(12),n=new ArrayBuffer(16),s=new ArrayBuffer(4),o=new ArrayBuffer(256),l=new en,u=new z,d=new z,{X:f,Y:p,Z:g,SCALE0:m,SCALE1:x,SCALE2:y,ROTATION0:M,ROTATION1:S,ROTATION2:A,ROTATION3:T,FDC0:P,FDC1:C,FDC2:b,OPACITY:I,FRC0:R,FRC9:E}=ze.OFFSET,F=(B,N,U)=>{const W=U*2+1;return B=Math.round(B*N)+U,an(B,0,W)};return function(B,N,U,W,X,H,j,q,Y=-ss,K=ss){const ne=za(X),k=ve.CompressionLevels[W].BytesPerCenter,te=ve.CompressionLevels[W].BytesPerScale,Me=ve.CompressionLevels[W].BytesPerRotation,Te=ve.CompressionLevels[W].BytesPerColor,Re=U,se=Re+k,xe=se+te,pe=xe+Me,be=pe+Te;if(B[M]!==void 0?(l.set(B[M],B[S],B[A],B[T]),l.normalize()):l.set(1,0,0,0),B[m]!==void 0?u.set(B[m]||0,B[x]||0,B[y]||0):u.set(0,0,0),W===0){const Ge=new Float32Array(N,Re,ve.CenterComponentCount),xt=new Float32Array(N,xe,ve.RotationComponentCount),Ye=new Float32Array(N,se,ve.ScaleComponentCount);if(xt.set([l.x,l.y,l.z,l.w]),Ye.set([u.x,u.y,u.z]),Ge.set([B[f],B[p],B[g]]),X>0){const dt=new Float32Array(N,be,ne);if(X>=1){for(let nt=0;nt<9;nt++)dt[nt]=B[R+nt]||0;if(X>=2)for(let nt=0;nt<15;nt++)dt[nt+9]=B[E+nt]||0}}}else{const Ge=new Uint16Array(e,0,ve.CenterComponentCount),xt=new Uint16Array(n,0,ve.RotationComponentCount),Ye=new Uint16Array(t,0,ve.ScaleComponentCount);if(xt.set([Mn(l.x),Mn(l.y),Mn(l.z),Mn(l.w)]),Ye.set([Mn(u.x),Mn(u.y),Mn(u.z)]),d.set(B[f],B[p],B[g]).sub(H),d.x=F(d.x,j,q),d.y=F(d.y,j,q),d.z=F(d.z,j,q),Ge.set([d.x,d.y,d.z]),X>0){const dt=W===1?Uint16Array:Uint8Array,nt=W===1?2:1,ht=new dt(o,0,ne);if(X>=1){for(let At=0;At<9;At++){const Tt=B[R+At]||0;ht[At]=W===1?Mn(Tt):Xo(Tt,Y,K)}const bt=9*nt;if(Fa(ht.buffer,0,N,be,bt),X>=2){for(let At=0;At<15;At++){const Tt=B[E+At]||0;ht[At+9]=W===1?Mn(Tt):Xo(Tt,Y,K)}Fa(ht.buffer,bt,N,be+bt,15*nt)}}}Fa(Ge.buffer,0,N,Re,6),Fa(Ye.buffer,0,N,se,6),Fa(xt.buffer,0,N,xe,8)}const Oe=new Uint8ClampedArray(s,0,4);Oe.set([B[P]||0,B[C]||0,B[b]||0]),Oe[3]=B[I]||0,Fa(Oe.buffer,0,N,pe,4)}})());let Ke=ve;const G0=new Uint8Array([112,108,121,10]),W0=new Uint8Array([10,101,110,100,95,104,101,97,100,101,114,10]),Rf="end_header",If=new Map([["char",Int8Array],["uchar",Uint8Array],["short",Int16Array],["ushort",Uint16Array],["int",Int32Array],["uint",Uint32Array],["float",Float32Array],["double",Float64Array]]),ar=(a,e)=>{const t=(1<<e)-1;return(a&t)/t},X0=(a,e)=>{a.x=ar(e>>>21,11),a.y=ar(e>>>11,10),a.z=ar(e,11)},DT=(a,e)=>{a.x=ar(e>>>24,8),a.y=ar(e>>>16,8),a.z=ar(e>>>8,8),a.w=ar(e,8)},FT=(a,e)=>{const t=1/(Math.sqrt(2)*.5),n=(ar(e>>>20,10)-.5)*t,s=(ar(e>>>10,10)-.5)*t,o=(ar(e,10)-.5)*t,l=Math.sqrt(1-(n*n+s*s+o*o));switch(e>>>30){case 0:a.set(l,n,s,o);break;case 1:a.set(n,l,s,o);break;case 2:a.set(n,s,l,o);break;case 3:a.set(n,s,o,l);break}},Cr=(a,e,t)=>a*(1-t)+e*t,un=(a,e)=>{var t;return(t=a.properties.find(n=>n.name===e&&n.storage))==null?void 0:t.storage},Qt=class Qt{static decodeHeaderText(e){let t,n,s,o;const l=e.split(`
`).filter(g=>!g.startsWith("comment "));let u=0,d=!1;for(let g=1;g<l.length;++g){const m=l[g].split(" ");switch(m[0]){case"format":if(m[1]!=="binary_little_endian")throw new Error("Unsupported ply format");break;case"element":t={name:m[1],count:parseInt(m[2],10),properties:[],storageSizeBytes:0},t.name==="chunk"?n=t:t.name==="vertex"?s=t:t.name==="sh"&&(o=t);break;case"property":{if(!If.has(m[1]))throw new Error(`Unrecognized property data type '${m[1]}' in ply header`);const x=If.get(m[1]),y=x.BYTES_PER_ELEMENT*t.count;t.name==="vertex"&&(u+=x.BYTES_PER_ELEMENT),t.properties.push({type:m[1],name:m[2],storage:null,byteSize:x.BYTES_PER_ELEMENT,storageSizeByes:y}),t.storageSizeBytes+=y;break}case Rf:d=!0;break;default:throw new Error(`Unrecognized header value '${m[0]}' in ply header`)}if(d)break}let f=0,p=0;return o&&(p=o.properties.length,o.properties.length>=45?f=3:o.properties.length>=24?f=2:o.properties.length>=9&&(f=1)),{chunkElement:n,vertexElement:s,shElement:o,bytesPerSplat:u,headerSizeBytes:e.indexOf(Rf)+Rf.length+1,sphericalHarmonicsDegree:f,sphericalHarmonicsPerSplat:p}}static decodeHeader(e){const t=(x,y)=>{const M=x.length-y.length;let S,A;for(S=0;S<=M;++S){for(A=0;A<y.length&&x[S+A]===y[A];++A);if(A===y.length)return S}return-1},n=(x,y)=>{if(x.length<y.length)return!1;for(let M=0;M<y.length;++M)if(x[M]!==y[M])return!1;return!0};let s=new Uint8Array(e),o;if(s.length>=G0.length&&!n(s,G0))throw new Error("Invalid PLY header");if(o=t(s,W0),o===-1)throw new Error("End of PLY header not found");const l=new TextDecoder("ascii").decode(s.slice(0,o)),{chunkElement:u,vertexElement:d,shElement:f,sphericalHarmonicsDegree:p,sphericalHarmonicsPerSplat:g,bytesPerSplat:m}=Qt.decodeHeaderText(l);return{headerSizeBytes:o+W0.length,bytesPerSplat:m,chunkElement:u,vertexElement:d,shElement:f,sphericalHarmonicsDegree:p,sphericalHarmonicsPerSplat:g}}static readElementData(e,t,n,s,o,l=null){let u=t instanceof DataView?t:new DataView(t);s=s||0,o=o||e.count-1;for(let d=s;d<=o;++d)for(let f=0;f<e.properties.length;++f){const p=e.properties[f],g=If.get(p.type),m=g.BYTES_PER_ELEMENT*e.count;if((!p.storage||p.storage.byteLength<m)&&(!l||l(p.name))&&(p.storage=new g(e.count)),p.storage)switch(p.type){case"char":p.storage[d]=u.getInt8(n);break;case"uchar":p.storage[d]=u.getUint8(n);break;case"short":p.storage[d]=u.getInt16(n,!0);break;case"ushort":p.storage[d]=u.getUint16(n,!0);break;case"int":p.storage[d]=u.getInt32(n,!0);break;case"uint":p.storage[d]=u.getUint32(n,!0);break;case"float":p.storage[d]=u.getFloat32(n,!0);break;case"double":p.storage[d]=u.getFloat64(n,!0);break}n+=p.byteSize}return n}static readPly(e,t=null){const n=Qt.decodeHeader(e);let s=Qt.readElementData(n.chunkElement,e,n.headerSizeBytes,null,null,t);return s=Qt.readElementData(n.vertexElement,e,s,null,null,t),Qt.readElementData(n.shElement,e,s,null,null,t),{chunkElement:n.chunkElement,vertexElement:n.vertexElement,shElement:n.shElement,sphericalHarmonicsDegree:n.sphericalHarmonicsDegree,sphericalHarmonicsPerSplat:n.sphericalHarmonicsPerSplat}}static getElementStorageArrays(e,t,n){const s={};if(t){const o=un(e,"min_r"),l=un(e,"min_g"),u=un(e,"min_b"),d=un(e,"max_r"),f=un(e,"max_g"),p=un(e,"max_b"),g=un(e,"min_x"),m=un(e,"min_y"),x=un(e,"min_z"),y=un(e,"max_x"),M=un(e,"max_y"),S=un(e,"max_z"),A=un(e,"min_scale_x"),T=un(e,"min_scale_y"),P=un(e,"min_scale_z"),C=un(e,"max_scale_x"),b=un(e,"max_scale_y"),I=un(e,"max_scale_z"),R=un(t,"packed_position"),E=un(t,"packed_rotation"),F=un(t,"packed_scale"),B=un(t,"packed_color");s.colorExtremes={minR:o,maxR:d,minG:l,maxG:f,minB:u,maxB:p},s.positionExtremes={minX:g,maxX:y,minY:m,maxY:M,minZ:x,maxZ:S},s.scaleExtremes={minScaleX:A,maxScaleX:C,minScaleY:T,maxScaleY:b,minScaleZ:P,maxScaleZ:I},s.position=R,s.rotation=E,s.scale=F,s.color=B}if(n){const o={};for(let l=0;l<45;l++){const u=`f_rest_${l}`,d=un(n,u);if(d)o[u]=d;else break}s.sh=o}return s}static parseToUncompressedSplatBufferSection(e,t,n,s,o,l,u,d,f=null){Qt.readElementData(t,l,0,n,s,f);const p=Ke.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,{positionExtremes:g,scaleExtremes:m,colorExtremes:x,position:y,rotation:M,scale:S,color:A}=Qt.getElementStorageArrays(e,t),T=ze.createSplat();for(let P=n;P<=s;++P){Qt.decompressBaseSplat(P,o,y,g,S,m,M,x,A,T);const C=P*p+d;Ke.writeSplatDataToSectionBuffer(T,u,C,0,0)}}static parseToUncompressedSplatArraySection(e,t,n,s,o,l,u,d=null){Qt.readElementData(t,l,0,n,s,d);const{positionExtremes:f,scaleExtremes:p,colorExtremes:g,position:m,rotation:x,scale:y,color:M}=Qt.getElementStorageArrays(e,t);for(let S=n;S<=s;++S){const A=ze.createSplat();Qt.decompressBaseSplat(S,o,m,f,y,p,x,g,M,A),u.addSplat(A)}}static parseSphericalHarmonicsToUncompressedSplatArraySection(e,t,n,s,o,l,u,d,f,p=null){Qt.readElementData(t,o,l,n,s,p);const{sh:g}=Qt.getElementStorageArrays(e,void 0,t),m=Object.values(g);for(let x=n;x<=s;++x)Qt.decompressSphericalHarmonics(x,m,u,d,f.splats[x])}static parseToUncompressedSplatArray(e,t){const{chunkElement:n,vertexElement:s,shElement:o,sphericalHarmonicsDegree:l}=Qt.readPly(e);t=Math.min(t,l);const u=new ze(t),{positionExtremes:d,scaleExtremes:f,colorExtremes:p,position:g,rotation:m,scale:x,color:y}=Qt.getElementStorageArrays(n,s);let M;if(t>0){const{sh:S}=Qt.getElementStorageArrays(n,void 0,o);M=Object.values(S)}for(let S=0;S<s.count;++S){u.addDefaultSplat();const A=u.getSplat(u.splatCount-1);Qt.decompressBaseSplat(S,0,g,d,x,f,m,p,y,A),t>0&&Qt.decompressSphericalHarmonics(S,M,t,l,A)}return u}static parseToUncompressedSplatBuffer(e,t){const{chunkElement:n,vertexElement:s,shElement:o,sphericalHarmonicsDegree:l}=Qt.readPly(e);t=Math.min(t,l);const{splatBuffer:u,splatBufferDataOffsetBytes:d}=Ke.preallocateUncompressed(s.count,t),{positionExtremes:f,scaleExtremes:p,colorExtremes:g,position:m,rotation:x,scale:y,color:M}=Qt.getElementStorageArrays(n,s);let S;if(t>0){const{sh:P}=Qt.getElementStorageArrays(n,void 0,o);S=Object.values(P)}const A=Ke.CompressionLevels[0].SphericalHarmonicsDegrees[t].BytesPerSplat,T=ze.createSplat(t);for(let P=0;P<s.count;++P){Qt.decompressBaseSplat(P,0,m,f,y,p,x,g,M,T),t>0&&Qt.decompressSphericalHarmonics(P,S,t,l,T);const C=P*A+d;Ke.writeSplatDataToSectionBuffer(T,u.bufferData,C,0,t)}return u}};Fe(Qt,"decompressBaseSplat",(function(){const e=new z,t=new en,n=new z,s=new tn,o=ze.OFFSET;return function(l,u,d,f,p,g,m,x,y,M){M=M||ze.createSplat();const S=Math.floor((u+l)/256);return X0(e,d[l]),FT(t,m[l]),X0(n,p[l]),DT(s,y[l]),M[o.X]=Cr(f.minX[S],f.maxX[S],e.x),M[o.Y]=Cr(f.minY[S],f.maxY[S],e.y),M[o.Z]=Cr(f.minZ[S],f.maxZ[S],e.z),M[o.ROTATION0]=t.x,M[o.ROTATION1]=t.y,M[o.ROTATION2]=t.z,M[o.ROTATION3]=t.w,M[o.SCALE0]=Math.exp(Cr(g.minScaleX[S],g.maxScaleX[S],n.x)),M[o.SCALE1]=Math.exp(Cr(g.minScaleY[S],g.maxScaleY[S],n.y)),M[o.SCALE2]=Math.exp(Cr(g.minScaleZ[S],g.maxScaleZ[S],n.z)),x.minR&&x.maxR?M[o.FDC0]=an(Math.round(Cr(x.minR[S],x.maxR[S],s.x)*255),0,255):M[o.FDC0]=an(Math.floor(s.x*255),0,255),x.minG&&x.maxG?M[o.FDC1]=an(Math.round(Cr(x.minG[S],x.maxG[S],s.y)*255),0,255):M[o.FDC1]=an(Math.floor(s.y*255),0,255),x.minB&&x.maxB?M[o.FDC2]=an(Math.round(Cr(x.minB[S],x.maxB[S],s.z)*255),0,255):M[o.FDC2]=an(Math.floor(s.z*255),0,255),M[o.OPACITY]=an(Math.floor(s.w*255),0,255),M}})()),Fe(Qt,"decompressSphericalHarmonics",(function(){const e=[0,3,8,15],t=[0,1,2,9,10,11,12,13,24,25,26,27,28,29,30,3,4,5,14,15,16,17,18,31,32,33,34,35,36,37,6,7,8,19,20,21,22,23,38,39,40,41,42,43,44];return function(n,s,o,l,u){u=u||ze.createSplat();let d=e[o],f=e[l];for(let p=0;p<3;++p)for(let g=0;g<15;++g){const m=t[p*15+g];g<d&&g<f&&(u[ze.OFFSET.FRC0+m]=s[p*f+g][n]*(8/255)-4)}return u}})());let Rr=Qt;const Kn={INRIAV1:0,INRIAV2:1,PlayCanvasCompressed:2},[ov,Jh,ep,tp,np,ip,rp]=[0,1,2,3,4,5,6],Q0={double:ov,int:Jh,uint:ep,float:tp,short:np,ushort:ip,uchar:rp},LT={[ov]:8,[Jh]:4,[ep]:4,[tp]:4,[np]:2,[ip]:2,[rp]:1},di=class di{static decodeSectionHeader(e,t,n=0){const s=[];let o=!1,l=-1,u=0,d=!1,f=null;const p=[],g=[],m=[],x={};for(let A=n;A<e.length;A++){const T=e[A].trim();if(T.startsWith("element"))if(o){l--;break}else{o=!0,n=A,l=A;const P=T.split(" ");let C=0;for(let b of P){const I=b.trim();I.length>0&&(C++,C===2?f=I:C===3&&(u=parseInt(I)))}}else if(T.startsWith("property")){const P=T.match(/(\w+)\s+(\w+)\s+(\w+)/);if(P){const C=P[2],b=P[3];m.push(b);const I=t[b];x[b]=C;const R=Q0[C];I!==void 0&&(p.push(I),g[I]=R)}}if(T===di.HeaderEndToken){d=!0;break}o&&(s.push(T),l++)}const y=[];let M=0;for(let A of m){const T=x[A];if(x.hasOwnProperty(A)){const P=t[A];P!==void 0&&(y[P]=M)}M+=LT[Q0[T]]}const S=di.decodeSphericalHarmonicsFromSectionHeader(m,t);return{headerLines:s,headerStartLine:n,headerEndLine:l,fieldTypes:g,fieldIds:p,fieldOffsets:y,bytesPerVertex:M,vertexCount:u,dataSizeBytes:M*u,endOfHeader:d,sectionName:f,sphericalHarmonicsDegree:S.degree,sphericalHarmonicsCoefficientsPerChannel:S.coefficientsPerChannel,sphericalHarmonicsDegree1Fields:S.degree1Fields,sphericalHarmonicsDegree2Fields:S.degree2Fields}}static decodeSphericalHarmonicsFromSectionHeader(e,t){let n=0,s=0;for(let d of e)d.startsWith("f_rest")&&n++;s=n/3;let o=0;s>=3&&(o=1),s>=8&&(o=2);let l=[],u=[];for(let d=0;d<3;d++){if(o>=1)for(let f=0;f<3;f++)l.push(t["f_rest_"+(f+s*d)]);if(o>=2)for(let f=0;f<5;f++)u.push(t["f_rest_"+(f+s*d+3)])}return{degree:o,coefficientsPerChannel:s,degree1Fields:l,degree2Fields:u}}static getHeaderSectionNames(e){const t=[];for(let n of e)if(n.startsWith("element")){const s=n.split(" ");let o=0;for(let l of s){const u=l.trim();u.length>0&&(o++,o===2&&t.push(u))}}return t}static checkTextForEndHeader(e){return!!e.includes(di.HeaderEndToken)}static checkBufferForEndHeader(e,t,n,s){const o=new Uint8Array(e,Math.max(0,t-n),n),l=s.decode(o);return di.checkTextForEndHeader(l)}static extractHeaderFromBufferToText(e){const t=new TextDecoder;let n=0,s="";const o=100;for(;;){if(n+o>=e.byteLength)throw new Error("End of file reached while searching for end of header");const l=new Uint8Array(e,n,o);if(s+=t.decode(l),n+=o,di.checkBufferForEndHeader(e,n,o*2,t))break}return s}static readHeaderFromBuffer(e){const t=new TextDecoder;let n=0,s="";const o=100;for(;;){if(n+o>=e.byteLength)throw new Error("End of file reached while searching for end of header");const l=new Uint8Array(e,n,o);if(s+=t.decode(l),n+=o,di.checkBufferForEndHeader(e,n,o*2,t))break}return s}static convertHeaderTextToLines(e){const t=e.split(`
`),n=[];for(let s=0;s<t.length;s++){const o=t[s].trim();if(n.push(o),o===di.HeaderEndToken)break}return n}static determineHeaderFormatFromHeaderText(e){const t=di.convertHeaderTextToLines(e);let n=Kn.INRIAV1;for(let s=0;s<t.length;s++){const o=t[s].trim();if(o.startsWith("element chunk")||o.match(/[A-Za-z]*packed_[A-Za-z]*/))n=Kn.PlayCanvasCompressed;else if(o.startsWith("element codebook_centers"))n=Kn.INRIAV2;else if(o===di.HeaderEndToken)break}return n}static determineHeaderFormatFromPlyBuffer(e){const t=di.extractHeaderFromBufferToText(e);return di.determineHeaderFormatFromHeaderText(t)}static readVertex(e,t,n,s,o,l,u=!0){const d=n*t.bytesPerVertex+s,f=t.fieldOffsets,p=t.fieldTypes;for(let g of o){const m=p[g];m===tp?l[g]=e.getFloat32(d+f[g],!0):m===np?l[g]=e.getInt16(d+f[g],!0):m===ip?l[g]=e.getUint16(d+f[g],!0):m===Jh?l[g]=e.getInt32(d+f[g],!0):m===ep?l[g]=e.getUint32(d+f[g],!0):m===rp&&(u?l[g]=e.getUint8(d+f[g])/255:l[g]=e.getUint8(d+f[g]))}}};Fe(di,"HeaderEndToken","end_header");let gn=di;const lv=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0"],BT=lv.map((a,e)=>e),[q0,NT,UT,OT,kT,zT,HT,VT,GT,WT,Y0,XT,QT,j0,K0,qT,YT,jT]=BT,Pi=class Pi{static decodeHeaderLines(e){let t=0;e.forEach(p=>{p.includes("f_rest_")&&t++});let n=0;t>=45?n=45:t>=24?n=24:t>=9&&(n=9);let o=Array.from(Array(Math.max(n-1,0))).map((p,g)=>`f_rest_${g+1}`);const l=[...lv,...o],u=l.map((p,g)=>g),d=u.reduce((p,g)=>(p[l[g]]=g,p),{}),f=gn.decodeSectionHeader(e,d,0);return f.splatCount=f.vertexCount,f.bytesPerSplat=f.bytesPerVertex,f.fieldsToReadIndexes=u,f}static decodeHeaderText(e){const t=gn.convertHeaderTextToLines(e),n=Pi.decodeHeaderLines(t);return n.headerText=e,n.headerSizeBytes=e.indexOf(gn.HeaderEndToken)+gn.HeaderEndToken.length+1,n}static decodeHeaderFromBuffer(e){const t=gn.readHeaderFromBuffer(e);return Pi.decodeHeaderText(t)}static findSplatData(e,t){return new DataView(e,t.headerSizeBytes)}static parseToUncompressedSplatBufferSection(e,t,n,s,o,l,u,d=0){d=Math.min(d,e.sphericalHarmonicsDegree);const f=Ke.CompressionLevels[0].SphericalHarmonicsDegrees[d].BytesPerSplat;for(let p=t;p<=n;p++){const g=Pi.parseToUncompressedSplat(s,p,e,o,d),m=p*f+u;Ke.writeSplatDataToSectionBuffer(g,l,m,0,d)}}static parseToUncompressedSplatArraySection(e,t,n,s,o,l,u=0){u=Math.min(u,e.sphericalHarmonicsDegree);for(let d=t;d<=n;d++){const f=Pi.parseToUncompressedSplat(s,d,e,o,u);l.addSplat(f)}}static decodeSectionSplatData(e,t,n,s,o=!0){if(s=Math.min(s,n.sphericalHarmonicsDegree),o){const l=new ze(s);for(let u=0;u<t;u++){const d=Pi.parseToUncompressedSplat(e,u,n,0,s);l.addSplat(d)}return l}else{const{splatBuffer:l,splatBufferDataOffsetBytes:u}=Ke.preallocateUncompressed(t,s);return Pi.parseToUncompressedSplatBufferSection(n,0,t-1,e,0,l.bufferData,u,s),l}}static readSplat(e,t,n,s,o){return gn.readVertex(e,t,n,s,t.fieldsToReadIndexes,o,!0)}static parseToUncompressedSplatArray(e,t=0){const{header:n,splatCount:s,splatData:o}=$0(e);return Pi.decodeSectionSplatData(o,s,n,t,!0)}static parseToUncompressedSplatBuffer(e,t=0){const{header:n,splatCount:s,splatData:o}=$0(e);return Pi.decodeSectionSplatData(o,s,n,t,!1)}};Fe(Pi,"parseToUncompressedSplat",(function(){let e=[];const t=new en,n=ze.OFFSET.X,s=ze.OFFSET.Y,o=ze.OFFSET.Z,l=ze.OFFSET.SCALE0,u=ze.OFFSET.SCALE1,d=ze.OFFSET.SCALE2,f=ze.OFFSET.ROTATION0,p=ze.OFFSET.ROTATION1,g=ze.OFFSET.ROTATION2,m=ze.OFFSET.ROTATION3,x=ze.OFFSET.FDC0,y=ze.OFFSET.FDC1,M=ze.OFFSET.FDC2,S=ze.OFFSET.OPACITY,A=[];for(let T=0;T<45;T++)A[T]=ze.OFFSET.FRC0+T;return function(T,P,C,b=0,I=0){I=Math.min(I,C.sphericalHarmonicsDegree),Pi.readSplat(T,C,P,b,e);const R=ze.createSplat(I);if(e[q0]!==void 0?(R[l]=Math.exp(e[q0]),R[u]=Math.exp(e[NT]),R[d]=Math.exp(e[UT])):(R[l]=.01,R[u]=.01,R[d]=.01),e[Y0]!==void 0){const E=.28209479177387814;R[x]=(.5+E*e[Y0])*255,R[y]=(.5+E*e[XT])*255,R[M]=(.5+E*e[QT])*255}else e[K0]!==void 0?(R[x]=e[K0]*255,R[y]=e[qT]*255,R[M]=e[YT]*255):(R[x]=0,R[y]=0,R[M]=0);if(e[j0]!==void 0&&(R[S]=1/(1+Math.exp(-e[j0]))*255),R[x]=an(Math.floor(R[x]),0,255),R[y]=an(Math.floor(R[y]),0,255),R[M]=an(Math.floor(R[M]),0,255),R[S]=an(Math.floor(R[S]),0,255),I>=1&&e[jT]!==void 0){for(let E=0;E<9;E++)R[A[E]]=e[C.sphericalHarmonicsDegree1Fields[E]];if(I>=2)for(let E=0;E<15;E++)R[A[9+E]]=e[C.sphericalHarmonicsDegree2Fields[E]]}return t.set(e[OT],e[kT],e[zT],e[HT]),t.normalize(),R[f]=t.x,R[p]=t.y,R[g]=t.z,R[m]=t.w,R[n]=e[VT],R[s]=e[GT],R[o]=e[WT],R}})());let Fr=Pi;function $0(a){const e=Fr.decodeHeaderFromBuffer(a),t=e.splatCount,n=Fr.findSplatData(a,e);return{header:e,splatCount:t,splatData:n}}const cv=["features_dc","features_rest_0","features_rest_1","features_rest_2","features_rest_3","features_rest_4","features_rest_5","features_rest_6","features_rest_7","features_rest_8","features_rest_9","features_rest_10","features_rest_11","features_rest_12","features_rest_13","features_rest_14","opacity","scaling","rotation_re","rotation_im"],Pc=cv.map((a,e)=>e),[Dc,KT,$T,Z0,Fc,ZT,Pf]=[0,1,4,16,17,18,19],uv=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0","f_rest_1","f_rest_2","f_rest_3","f_rest_4","f_rest_5","f_rest_6","f_rest_7","f_rest_8","f_rest_9","f_rest_10","f_rest_11","f_rest_12","f_rest_13","f_rest_14","f_rest_15","f_rest_16","f_rest_17","f_rest_18","f_rest_19","f_rest_20","f_rest_21","f_rest_22","f_rest_23","f_rest_24","f_rest_25","f_rest_26","f_rest_27","f_rest_28","f_rest_29","f_rest_30","f_rest_31","f_rest_32","f_rest_33","f_rest_34","f_rest_35","f_rest_36","f_rest_37","f_rest_38","f_rest_39","f_rest_40","f_rest_41","f_rest_42","f_rest_43","f_rest_44","f_rest_45"],Ih=uv.map((a,e)=>e),[J0,JT,e1,t1,n1,i1,r1,s1,a1,o1,Ph,dv,fv,ex]=Ih,tx=Ph,l1=dv,c1=fv,Lc=a=>{const e=(31744&a)>>10,t=1023&a;return(a>>15?-1:1)*(e?e===31?t?NaN:1/0:Math.pow(2,e-15)*(1+t/1024):t/1024*6103515625e-14)},fi=class fi{static decodeSectionHeadersFromHeaderLines(e){const t=Ih.reduce((p,g)=>(p[uv[g]]=g,p),{}),n=Pc.reduce((p,g)=>(p[cv[g]]=g,p),{}),s=gn.getHeaderSectionNames(e);let o;for(let p=0;p<s.length;p++)s[p]==="codebook_centers"&&(o=p);let l=0,u=!1;const d=[];let f=0;for(;!u;){let p;f===o?p=gn.decodeSectionHeader(e,n,l):p=gn.decodeSectionHeader(e,t,l),u=p.endOfHeader,l=p.headerEndLine+1,u||(p.splatCount=p.vertexCount,p.bytesPerSplat=p.bytesPerVertex),d.push(p),f++}return d}static decodeSectionHeadersFromHeaderText(e){const t=gn.convertHeaderTextToLines(e);return fi.decodeSectionHeadersFromHeaderLines(t)}static getSplatCountFromSectionHeaders(e){let t=0;for(let n of e)n.sectionName!=="codebook_centers"&&(t+=n.vertexCount);return t}static decodeHeaderFromHeaderText(e){const t=e.indexOf(gn.HeaderEndToken)+gn.HeaderEndToken.length+1,n=fi.decodeSectionHeadersFromHeaderText(e),s=fi.getSplatCountFromSectionHeaders(n);return{headerSizeBytes:t,sectionHeaders:n,splatCount:s}}static decodeHeaderFromBuffer(e){const t=gn.readHeaderFromBuffer(e);return fi.decodeHeaderFromHeaderText(t)}static findVertexData(e,t,n){let s=t.headerSizeBytes;for(let o=0;o<n&&o<t.sectionHeaders.length;o++){const l=t.sectionHeaders[o];s+=l.dataSizeBytes}return new DataView(e,s,t.sectionHeaders[n].dataSizeBytes)}static decodeCodeBook(e,t){const n=[],s=[];for(let o=0;o<t.vertexCount;o++){gn.readVertex(e,t,o,0,Pc,n);for(let l of Pc){const u=Pc[l];let d=s[u];d||(s[u]=d=[]),d.push(n[l])}}for(let o=0;o<s.length;o++){const l=s[o],u=.28209479177387814;for(let d=0;d<l.length;d++){const f=Lc(l[d]);o===Z0?l[d]=Math.round(1/(1+Math.exp(-f))*255):o===Dc?l[d]=Math.round((.5+u*f)*255):o===Fc?l[d]=Math.exp(f):l[d]=f}}return s}static decodeSectionSplatData(e,t,n,s,o){o=Math.min(o,n.sphericalHarmonicsDegree);const l=new ze(o);for(let u=0;u<t;u++){const d=fi.parseToUncompressedSplat(e,u,n,s,0,o);l.addSplat(d)}return l}static readSplat(e,t,n,s,o){return gn.readVertex(e,t,n,s,Ih,o,!1)}static parseToUncompressedSplatArray(e,t=0){const n=[],s=fi.decodeHeaderFromBuffer(e,t);let o;for(let u=0;u<s.sectionHeaders.length;u++){const d=s.sectionHeaders[u];if(d.sectionName==="codebook_centers"){const f=fi.findVertexData(e,s,u);o=fi.decodeCodeBook(f,d)}}for(let u=0;u<s.sectionHeaders.length;u++){const d=s.sectionHeaders[u];if(d.sectionName!=="codebook_centers"){const f=d.vertexCount,p=fi.findVertexData(e,s,u),g=fi.decodeSectionSplatData(p,f,d,o,t);n.push(g)}}const l=new ze(t);for(let u of n)for(let d of u.splats)l.addSplat(d);return l}};Fe(fi,"parseToUncompressedSplat",(function(){let e=[];const t=new en,n=ze.OFFSET.X,s=ze.OFFSET.Y,o=ze.OFFSET.Z,l=ze.OFFSET.SCALE0,u=ze.OFFSET.SCALE1,d=ze.OFFSET.SCALE2,f=ze.OFFSET.ROTATION0,p=ze.OFFSET.ROTATION1,g=ze.OFFSET.ROTATION2,m=ze.OFFSET.ROTATION3,x=ze.OFFSET.FDC0,y=ze.OFFSET.FDC1,M=ze.OFFSET.FDC2,S=ze.OFFSET.OPACITY,A=[];for(let T=0;T<45;T++)A[T]=ze.OFFSET.FRC0+T;return function(T,P,C,b,I=0,R=0){R=Math.min(R,C.sphericalHarmonicsDegree),fi.readSplat(T,C,P,I,e);const E=ze.createSplat(R);if(e[J0]!==void 0?(E[l]=b[Fc][e[J0]],E[u]=b[Fc][e[JT]],E[d]=b[Fc][e[e1]]):(E[l]=.01,E[u]=.01,E[d]=.01),e[Ph]!==void 0?(E[x]=b[Dc][e[Ph]],E[y]=b[Dc][e[dv]],E[M]=b[Dc][e[fv]]):e[tx]!==void 0?(E[x]=e[tx]*255,E[y]=e[l1]*255,E[M]=e[c1]*255):(E[x]=0,E[y]=0,E[M]=0),e[ex]!==void 0&&(E[S]=b[Z0][e[ex]]),E[x]=an(Math.floor(E[x]),0,255),E[y]=an(Math.floor(E[y]),0,255),E[M]=an(Math.floor(E[M]),0,255),E[S]=an(Math.floor(E[S]),0,255),R>=1&&C.sphericalHarmonicsDegree>=1){for(let W=0;W<9;W++){const X=b[KT+W%3];E[A[W]]=X[e[C.sphericalHarmonicsDegree1Fields[W]]]}if(R>=2&&C.sphericalHarmonicsDegree>=2)for(let W=0;W<15;W++){const X=b[$T+W%5];E[A[9+W]]=X[e[C.sphericalHarmonicsDegree2Fields[W]]]}}const F=b[ZT][e[t1]],B=b[Pf][e[n1]],N=b[Pf][e[i1]],U=b[Pf][e[r1]];return t.set(F,B,N,U),t.normalize(),E[f]=t.x,E[p]=t.y,E[g]=t.z,E[m]=t.w,E[n]=Lc(e[s1]),E[s]=Lc(e[a1]),E[o]=Lc(e[o1]),E}})());let Dh=fi;class nx{static parseToUncompressedSplatArray(e,t=0){const n=gn.determineHeaderFormatFromPlyBuffer(e);if(n===Kn.PlayCanvasCompressed)return Rr.parseToUncompressedSplatArray(e,t);if(n===Kn.INRIAV1)return Fr.parseToUncompressedSplatArray(e,t);if(n===Kn.INRIAV2)return Dh.parseToUncompressedSplatArray(e,t)}static parseToUncompressedSplatBuffer(e,t=0){const n=gn.determineHeaderFormatFromPlyBuffer(e);if(n===Kn.PlayCanvasCompressed)return Rr.parseToUncompressedSplatBuffer(e,t);if(n===Kn.INRIAV1)return Fr.parseToUncompressedSplatBuffer(e,t);if(n===Kn.INRIAV2)throw new Error("parseToUncompressedSplatBuffer() is not implemented for INRIA V2 PLY files")}}class sp{constructor(e,t,n,s){this.sectionCount=e,this.sectionFilters=t,this.groupingParameters=n,this.partitionGenerator=s}partitionUncompressedSplatArray(e){let t,n,s;if(this.partitionGenerator){const l=this.partitionGenerator(e);t=l.groupingParameters,n=l.sectionCount,s=l.sectionFilters}else t=this.groupingParameters,n=this.sectionCount,s=this.sectionFilters;const o=[];for(let l=0;l<n;l++){const u=new ze(e.sphericalHarmonicsDegree),d=s[l];for(let f=0;f<e.splatCount;f++)d(f)&&u.addSplat(e.splats[f]);o.push(u)}return{splatArrays:o,parameters:t}}static getStandardPartitioner(e=0,t=new z,n=Ke.BucketBlockSize,s=Ke.BucketSize){const o=l=>{const u=ze.OFFSET.X,d=ze.OFFSET.Y,f=ze.OFFSET.Z;e<=0&&(e=l.splatCount);const p=new z,g=.5,m=A=>{A.x=Math.floor(A.x/g)*g,A.y=Math.floor(A.y/g)*g,A.z=Math.floor(A.z/g)*g};l.splats.forEach(A=>{p.set(A[u],A[d],A[f]).sub(t),m(p),A.centerDist=p.lengthSq()}),l.splats.sort((A,T)=>{let P=A.centerDist,C=T.centerDist;return P>C?1:-1});const x=[],y=[];e=Math.min(l.splatCount,e);const M=Math.ceil(l.splatCount/e);let S=0;for(let A=0;A<M;A++){let T=S;x.push(P=>P>=T&&P<T+e),y.push({blocksSize:n,bucketSize:s}),S+=e}return{sectionCount:x.length,sectionFilters:x,groupingParameters:y}};return new sp(void 0,void 0,void 0,o)}}class il{constructor(e,t,n,s,o,l,u){this.splatPartitioner=e,this.alphaRemovalThreshold=t,this.compressionLevel=n,this.sectionSize=s,this.sceneCenter=o?new z().copy(o):void 0,this.blockSize=l,this.bucketSize=u}generateFromUncompressedSplatArray(e){const t=this.splatPartitioner.partitionUncompressedSplatArray(e);return Ke.generateFromUncompressedSplatArrays(t.splatArrays,this.alphaRemovalThreshold,this.compressionLevel,this.sceneCenter,this.blockSize,this.bucketSize,t.parameters)}static getStandardGenerator(e=1,t=1,n=0,s=new z,o=Ke.BucketBlockSize,l=Ke.BucketSize){const u=sp.getStandardPartitioner(n,s,o,l);return new il(u,e,t,n,s,o,l)}}const xn={Downloading:0,Processing:1,Done:2};class Jc extends Error{constructor(e){super(e)}}const Jt={ProgressiveToSplatBuffer:0,ProgressiveToSplatArray:1,DownloadBeforeProcessing:2};function ix(a,e){let t=0;for(let s of a)t+=s.sizeBytes;(!e||e.byteLength<t)&&(e=new ArrayBuffer(t));let n=0;for(let s of a)new Uint8Array(e,n,s.sizeBytes).set(s.data),n+=s.sizeBytes;return e}function rx(a,e,t,n,s,o,l,u){return e?il.getStandardGenerator(t,n,s,o,l,u).generateFromUncompressedSplatArray(a):Ke.generateFromUncompressedSplatArrays([a],t,0,new z)}class ap{static loadFromURL(e,t,n,s,o,l,u=!0,d=0,f,p,g,m,x){let y;!n&&!u?y=Jt.DownloadBeforeProcessing:u?y=Jt.ProgressiveToSplatArray:y=Jt.ProgressiveToSplatBuffer;const M=wt.ProgressiveLoadSectionSize,S=Ke.HeaderSizeBytes+Ke.SectionHeaderSizeBytes,A=1;let T,P,C,b,I,R=0,E=0,F=0,B=!1,N=!1,U=!1;const W=jh();let X=0,H=0,j=0,q=0,Y="",K=null,ne=[],k;const te=new TextDecoder,Me=(Te,Re,se)=>{const xe=Te>=100;if(se&&(ne.push({data:se,sizeBytes:se.byteLength,startBytes:j,endBytes:j+se.byteLength}),j+=se.byteLength),y===Jt.DownloadBeforeProcessing)xe&&W.resolve(ne);else{if(B){if(T===Kn.PlayCanvasCompressed&&!N){const pe=K.headerSizeBytes+K.chunkElement.storageSizeBytes;I=ix(ne,I),I.byteLength>=pe&&(Rr.readElementData(K.chunkElement,I,K.headerSizeBytes),X=pe,H=pe,N=!0)}}else if(Y+=te.decode(se),gn.checkTextForEndHeader(Y)){if(T=gn.determineHeaderFormatFromHeaderText(Y),T===Kn.INRIAV1)K=Fr.decodeHeaderText(Y),d=Math.min(d,K.sphericalHarmonicsDegree),R=K.splatCount,N=!0,q=K.headerSizeBytes+K.bytesPerSplat*R;else if(T===Kn.PlayCanvasCompressed){if(K=Rr.decodeHeaderText(Y),d=Math.min(d,K.sphericalHarmonicsDegree),y===Jt.ProgressiveToSplatBuffer&&d>0)throw new Jc("PlyLoader.loadFromURL() -> Selected PLY format has spherical harmonics data that cannot be progressively loaded.");R=K.vertexElement.count,q=K.headerSizeBytes+K.bytesPerSplat*R+K.chunkElement.storageSizeBytes}else{if(y===Jt.ProgressiveToSplatBuffer)throw new Jc("PlyLoader.loadFromURL() -> Selected PLY format cannot be progressively loaded.");y=Jt.DownloadBeforeProcessing;return}if(y===Jt.ProgressiveToSplatBuffer){const pe=Ke.CompressionLevels[0].SphericalHarmonicsDegrees[d],be=S+pe.BytesPerSplat*R;C=new ArrayBuffer(be),Ke.writeHeaderToBuffer({versionMajor:Ke.CurrentMajorVersion,versionMinor:Ke.CurrentMinorVersion,maxSectionCount:A,sectionCount:A,maxSplatCount:R,splatCount:0,compressionLevel:0,sceneCenter:new z},C)}else k=new ze(d);X=K.headerSizeBytes,H=K.headerSizeBytes,B=!0}if(B&&N&&ne.length>0&&(P=ix(ne,P),j-X>M||j>=q&&!U||xe)){const be=U?K.sphericalHarmonicsPerSplat:K.bytesPerSplat,Ge=(U?j:Math.min(q,j))-H,xt=Math.floor(Ge/be),Ye=xt*be,dt=j-H-Ye,nt=H-ne[0].startBytes,ht=new DataView(P,nt,Ye);if(U)T===Kn.PlayCanvasCompressed&&y===Jt.ProgressiveToSplatArray&&(Rr.parseSphericalHarmonicsToUncompressedSplatArraySection(K.chunkElement,K.shElement,F,F+xt-1,ht,0,d,K.sphericalHarmonicsDegree,k),F+=xt);else{if(y===Jt.ProgressiveToSplatBuffer){const bt=Ke.CompressionLevels[0].SphericalHarmonicsDegrees[d],At=E*bt.BytesPerSplat+S;T===Kn.PlayCanvasCompressed?Rr.parseToUncompressedSplatBufferSection(K.chunkElement,K.vertexElement,0,xt-1,E,ht,C,At):Fr.parseToUncompressedSplatBufferSection(K,0,xt-1,ht,0,C,At,d)}else T===Kn.PlayCanvasCompressed?Rr.parseToUncompressedSplatArraySection(K.chunkElement,K.vertexElement,0,xt-1,E,ht,k):Fr.parseToUncompressedSplatArraySection(K,0,xt-1,ht,0,k,d);E+=xt,y===Jt.ProgressiveToSplatBuffer&&(b||(Ke.writeSectionHeaderToBuffer({maxSplatCount:R,splatCount:E,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:d},0,C,Ke.HeaderSizeBytes),b=new Ke(C,!1)),b.updateLoadedCounts(1,E)),j>=q&&(U=!0)}if(dt===0)ne=[];else{let bt=[],At=0;for(let Tt=ne.length-1;Tt>=0;Tt--){const Bt=ne[Tt];if(At+=Bt.sizeBytes,bt.unshift(Bt),At>=dt)break}ne=bt}X+=M,H+=Ye}s&&b&&s(b,xe),xe&&(y===Jt.ProgressiveToSplatBuffer?W.resolve(b):W.resolve(k))}t&&t(Te,Re,xn.Downloading)};return t&&t(0,"0%",xn.Downloading),du(e,Me,!1,f).then(()=>(t&&t(0,"0%",xn.Processing),W.promise.then(Te=>{if(t&&t(100,"100%",xn.Done),y===Jt.DownloadBeforeProcessing){const Re=ne.map(se=>se.data);return new Blob(Re).arrayBuffer().then(se=>ap.loadFromFileData(se,o,l,u,d,p,g,m,x))}else return y===Jt.ProgressiveToSplatBuffer?Te:_i(()=>rx(Te,u,o,l,p,g,m,x))})))}static loadFromFileData(e,t,n,s,o=0,l,u,d,f){return s?_i(()=>nx.parseToUncompressedSplatArray(e,o)).then(p=>rx(p,s,t,n,l,u,d,f)):_i(()=>nx.parseToUncompressedSplatBuffer(e,o))}}const u1=a=>new ReadableStream({async start(e){e.enqueue(a),e.close()}});async function d1(a){try{const e=u1(a);if(!e)throw new Error("Failed to create stream from data");return await f1(e)}catch(e){throw console.error("Error decompressing gzipped data:",e),e}}async function f1(a){const e=a.pipeThrough(new DecompressionStream("gzip")),n=await new Response(e).arrayBuffer();return new Uint8Array(n)}const h1=1347635022,p1=1,m1=.15;function g1(a){const e=a>>15&1,t=a>>10&31,n=a&1023,s=e===1?-1:1;return t===0?s*Math.pow(2,-14)*n/1024:t===31?n!==0?NaN:s*(1/0):s*Math.pow(2,t-15)*(1+n/1024)}function x1(a){return(a-128)/128}function zs(a){switch(a){case 0:return 0;case 1:return 3;case 2:return 8;case 3:return 15;default:return console.error(`[SPZ: ERROR] Unsupported SH degree: ${a}`),0}}const v1=(function(){let a=[];const e=new en,t=ze.OFFSET.X,n=ze.OFFSET.Y,s=ze.OFFSET.Z,o=ze.OFFSET.SCALE0,l=ze.OFFSET.SCALE1,u=ze.OFFSET.SCALE2,d=ze.OFFSET.ROTATION0,f=ze.OFFSET.ROTATION1,p=ze.OFFSET.ROTATION2,g=ze.OFFSET.ROTATION3,m=ze.OFFSET.FDC0,x=ze.OFFSET.FDC1,y=ze.OFFSET.FDC2,M=ze.OFFSET.OPACITY,S=[zs(0),zs(1),zs(2),zs(3)],A=[0,1,2,9,10,11,12,13,24,25,26,27,28,29,30,3,4,5,14,15,16,17,18,31,32,33,34,35,36,37,6,7,8,19,20,21,22,23,38,39,40,41,42,43,44];return function(T,P,C){C=Math.min(P,C);const b=ze.createSplat(C);T.scale[0]!==void 0?(b[o]=T.scale[0],b[l]=T.scale[1],b[u]=T.scale[2]):(b[o]=.01,b[l]=.01,b[u]=.01),T.color[0]!==void 0?(b[m]=T.color[0],b[x]=T.color[1],b[y]=T.color[2]):a[RED]!==void 0?(b[m]=a[RED]*255,b[x]=a[GREEN]*255,b[y]=a[BLUE]*255):(b[m]=0,b[x]=0,b[y]=0),T.alpha!==void 0&&(b[M]=T.alpha),b[m]=an(Math.floor(b[m]),0,255),b[x]=an(Math.floor(b[x]),0,255),b[y]=an(Math.floor(b[y]),0,255),b[M]=an(Math.floor(b[M]),0,255);let I=S[C],R=S[P];for(let E=0;E<3;++E)for(let F=0;F<15;++F){const B=A[E*15+F];F<I&&F<R&&(b[ze.OFFSET.FRC0+B]=T.sh[E*R+F])}return e.set(T.rotation[3],T.rotation[0],T.rotation[1],T.rotation[2]),e.normalize(),b[d]=e.x,b[f]=e.y,b[p]=e.z,b[g]=e.w,b[t]=T.position[0],b[n]=T.position[1],b[s]=T.position[2],b}})();function S1(a,e,t,n){return!(a.positions.length!==e*3*(n?2:3)||a.scales.length!==e*3||a.rotations.length!==e*3||a.alphas.length!==e||a.colors.length!==e*3||a.sh.length!==e*t*3)}function sx(a,e,t,n,s){e=Math.min(e,a.shDegree);const o=a.numPoints,l=zs(a.shDegree),u=a.positions.length===o*3*2;if(!S1(a,o,l,u))return null;const d={position:[],scale:[],rotation:[],alpha:void 0,color:[],sh:[]};let f;u&&(f=new Uint16Array(a.positions.buffer,a.positions.byteOffset,o*3));const p=1/(1<<a.fractionalBits),g=zs(a.shDegree),m=.28209479177387814;for(let x=0;x<o;x++){if(u)for(let T=0;T<3;T++)d.position[T]=g1(f[x*3+T]);else for(let T=0;T<3;T++){const P=x*9+T*3;let C=a.positions[P];C|=a.positions[P+1]<<8,C|=a.positions[P+2]<<16,C|=C&8388608?4278190080:0,d.position[T]=C*p}for(let T=0;T<3;T++)d.scale[T]=Math.exp(a.scales[x*3+T]/16-10);const y=a.rotations.subarray(x*3,x*3+3),M=[y[0]/127.5-1,y[1]/127.5-1,y[2]/127.5-1];d.rotation[0]=M[0],d.rotation[1]=M[1],d.rotation[2]=M[2];const S=M[0]*M[0]+M[1]*M[1]+M[2]*M[2];d.rotation[3]=Math.sqrt(Math.max(0,1-S)),d.alpha=Math.floor(a.alphas[x]);for(let T=0;T<3;T++)d.color[T]=Math.floor(((a.colors[x*3+T]/255-.5)/m1*m+.5)*255);for(let T=0;T<3;T++)for(let P=0;P<g;P++)d.sh[T*g+P]=x1(a.sh[g*3*x+P*3+T]);const A=v1(d,a.shDegree,e);if(t){const T=Ke.CompressionLevels[0].SphericalHarmonicsDegrees[e].BytesPerSplat,P=x*T+s;Ke.writeSplatDataToSectionBuffer(A,n,P,0,e)}else n.addSplat(A)}}const A1=16,y1=1e7;function _1(a){const e=new DataView(a);let t=0;const n={magic:e.getUint32(t,!0),version:e.getUint32(t+4,!0),numPoints:e.getUint32(t+8,!0),shDegree:e.getUint8(t+12),fractionalBits:e.getUint8(t+13),flags:e.getUint8(t+14),reserved:e.getUint8(t+15)};if(t+=A1,n.magic!==h1)return console.error("[SPZ ERROR] deserializePackedGaussians: header not found"),null;if(n.version<1||n.version>2)return console.error(`[SPZ ERROR] deserializePackedGaussians: version not supported: ${n.version}`),null;if(n.numPoints>y1)return console.error(`[SPZ ERROR] deserializePackedGaussians: Too many points: ${n.numPoints}`),null;if(n.shDegree>3)return console.error(`[SPZ ERROR] deserializePackedGaussians: Unsupported SH degree: ${n.shDegree}`),null;const s=n.numPoints,o=zs(n.shDegree),l=n.version===1,u={numPoints:s,shDegree:n.shDegree,fractionalBits:n.fractionalBits,antialiased:(n.flags&p1)!==0,positions:new Uint8Array(s*3*(l?2:3)),scales:new Uint8Array(s*3),rotations:new Uint8Array(s*3),alphas:new Uint8Array(s),colors:new Uint8Array(s*3),sh:new Uint8Array(s*o*3)};try{const d=new Uint8Array(a);let f=u.positions.length,p=t;if(u.positions.set(d.slice(p,p+f)),p+=f,u.alphas.set(d.slice(p,p+u.alphas.length)),p+=u.alphas.length,u.colors.set(d.slice(p,p+u.colors.length)),p+=u.colors.length,u.scales.set(d.slice(p,p+u.scales.length)),p+=u.scales.length,u.rotations.set(d.slice(p,p+u.rotations.length)),p+=u.rotations.length,u.sh.set(d.slice(p,p+u.sh.length)),p+u.sh.length!==a.byteLength)return console.error("[SPZ ERROR] deserializePackedGaussians: incorrect buffer size"),null}catch(d){return console.error("[SPZ ERROR] deserializePackedGaussians: read error",d),null}return u}async function M1(a){try{const e=await d1(a);return _1(e.buffer)}catch(e){return console.error("[SPZ ERROR] loadSpzPacked: decompression error",e),null}}class op{static loadFromURL(e,t,n,s,o=!0,l=0,u,d,f,p,g){return t&&t(0,"0%",xn.Downloading),du(e,t,!0,u).then(m=>(t&&t(0,"0%",xn.Processing),op.loadFromFileData(m,n,s,o,l,d,f,p,g)))}static async loadFromFileData(e,t,n,s,o=0,l,u,d,f){await _i();const p=await M1(e);o=Math.min(p.shDegree,o);const g=new ze(o);if(s)return sx(p,o,!1,g,0),il.getStandardGenerator(t,n,l,u,d,f).generateFromUncompressedSplatArray(g);{const{splatBuffer:m,splatBufferDataOffsetBytes:x}=Ke.preallocateUncompressed(p.numPoints,o);return sx(p,o,!0,m.bufferData,x),m}}}const Gt=class Gt{static parseToUncompressedSplatBufferSection(e,t,n,s,o,l){const u=Ke.CompressionLevels[0].BytesPerCenter,d=Ke.CompressionLevels[0].BytesPerScale,f=Ke.CompressionLevels[0].BytesPerRotation,p=Ke.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat;for(let g=e;g<=t;g++){const m=g*Gt.RowSizeBytes+s,x=new Float32Array(n,m,3),y=new Float32Array(n,m+Gt.CenterSizeBytes,3),M=new Uint8Array(n,m+Gt.CenterSizeBytes+Gt.ScaleSizeBytes,4),S=new Uint8Array(n,m+Gt.CenterSizeBytes+Gt.ScaleSizeBytes+Gt.RotationSizeBytes,4),A=new en((S[1]-128)/128,(S[2]-128)/128,(S[3]-128)/128,(S[0]-128)/128);A.normalize();const T=g*p+l,P=new Float32Array(o,T,3),C=new Float32Array(o,T+u,3),b=new Float32Array(o,T+u+d,4),I=new Uint8Array(o,T+u+d+f,4);P[0]=x[0],P[1]=x[1],P[2]=x[2],C[0]=y[0],C[1]=y[1],C[2]=y[2],b[0]=A.w,b[1]=A.x,b[2]=A.y,b[3]=A.z,I[0]=M[0],I[1]=M[1],I[2]=M[2],I[3]=M[3]}}static parseToUncompressedSplatArraySection(e,t,n,s,o){for(let l=e;l<=t;l++){const u=l*Gt.RowSizeBytes+s,d=new Float32Array(n,u,3),f=new Float32Array(n,u+Gt.CenterSizeBytes,3),p=new Uint8Array(n,u+Gt.CenterSizeBytes+Gt.ScaleSizeBytes,4),g=new Uint8Array(n,u+Gt.CenterSizeBytes+Gt.ScaleSizeBytes+Gt.RotationSizeBytes,4),m=new en((g[1]-128)/128,(g[2]-128)/128,(g[3]-128)/128,(g[0]-128)/128);m.normalize(),o.addSplatFromComonents(d[0],d[1],d[2],f[0],f[1],f[2],m.w,m.x,m.y,m.z,p[0],p[1],p[2],p[3])}}static parseStandardSplatToUncompressedSplatArray(e){const t=e.byteLength/Gt.RowSizeBytes,n=new ze;for(let s=0;s<t;s++){const o=s*Gt.RowSizeBytes,l=new Float32Array(e,o,3),u=new Float32Array(e,o+Gt.CenterSizeBytes,3),d=new Uint8Array(e,o+Gt.CenterSizeBytes+Gt.ScaleSizeBytes,4),f=new Uint8Array(e,o+Gt.CenterSizeBytes+Gt.ScaleSizeBytes+Gt.ColorSizeBytes,4),p=new en((f[1]-128)/128,(f[2]-128)/128,(f[3]-128)/128,(f[0]-128)/128);p.normalize(),n.addSplatFromComonents(l[0],l[1],l[2],u[0],u[1],u[2],p.w,p.x,p.y,p.z,d[0],d[1],d[2],d[3])}return n}};Fe(Gt,"RowSizeBytes",32),Fe(Gt,"CenterSizeBytes",12),Fe(Gt,"ScaleSizeBytes",12),Fe(Gt,"RotationSizeBytes",4),Fe(Gt,"ColorSizeBytes",4);let Ns=Gt;function ax(a,e,t,n,s,o,l,u){return e?il.getStandardGenerator(t,n,s,o,l,u).generateFromUncompressedSplatArray(a):Ke.generateFromUncompressedSplatArrays([a],t,0,new z)}class lp{static loadFromURL(e,t,n,s,o,l,u=!0,d,f,p,g,m){let x=n?Jt.ProgressiveToSplatBuffer:Jt.ProgressiveToSplatArray;u&&(x=Jt.ProgressiveToSplatArray);const y=Ke.HeaderSizeBytes+Ke.SectionHeaderSizeBytes,M=wt.ProgressiveLoadSectionSize,S=1;let A,T,P,C=0,b=0,I;const R=jh();let E=0,F=0,B=[];const N=(U,W,X,H)=>{const j=U>=100;if(X&&B.push(X),x===Jt.DownloadBeforeProcessing){j&&R.resolve(B);return}if(!H){if(n)throw new Jc("Cannon directly load .splat because no file size info is available.");x=Jt.DownloadBeforeProcessing;return}if(!A){C=H/Ns.RowSizeBytes,A=new ArrayBuffer(H);const q=Ke.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,Y=y+q*C;x===Jt.ProgressiveToSplatBuffer?(T=new ArrayBuffer(Y),Ke.writeHeaderToBuffer({versionMajor:Ke.CurrentMajorVersion,versionMinor:Ke.CurrentMinorVersion,maxSectionCount:S,sectionCount:S,maxSplatCount:C,splatCount:b,compressionLevel:0,sceneCenter:new z},T)):I=new ze(0)}if(X){new Uint8Array(A,F,X.byteLength).set(new Uint8Array(X)),F+=X.byteLength;const q=F-E;if(q>M||j){const K=(j?q:M)/Ns.RowSizeBytes,ne=b+K;x===Jt.ProgressiveToSplatBuffer?Ns.parseToUncompressedSplatBufferSection(b,ne-1,A,0,T,y):Ns.parseToUncompressedSplatArraySection(b,ne-1,A,0,I),b=ne,x===Jt.ProgressiveToSplatBuffer&&(P||(Ke.writeSectionHeaderToBuffer({maxSplatCount:C,splatCount:b,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0},0,T,Ke.HeaderSizeBytes),P=new Ke(T,!1)),P.updateLoadedCounts(1,b),s&&s(P,j)),E+=M}}j&&(x===Jt.ProgressiveToSplatBuffer?R.resolve(P):R.resolve(I)),t&&t(U,W,xn.Downloading)};return t&&t(0,"0%",xn.Downloading),du(e,N,!1,d).then(()=>(t&&t(0,"0%",xn.Processing),R.promise.then(U=>(t&&t(100,"100%",xn.Done),x===Jt.DownloadBeforeProcessing?new Blob(B).arrayBuffer().then(W=>lp.loadFromFileData(W,o,l,u,f,p,g,m)):x===Jt.ProgressiveToSplatBuffer?U:_i(()=>ax(U,u,o,l,f,p,g,m))))))}static loadFromFileData(e,t,n,s,o,l,u,d){return _i(()=>{const f=Ns.parseStandardSplatToUncompressedSplatArray(e);return ax(f,s,t,n,o,l,u,d)})}}const Na=class Na{static checkVersion(e){const t=Ke.CurrentMajorVersion,n=Ke.CurrentMinorVersion,s=Ke.parseHeader(e);if(s.versionMajor===t&&s.versionMinor>=n||s.versionMajor>t)return!0;throw new Error(`KSplat version not supported: v${s.versionMajor}.${s.versionMinor}. Minimum required: v${t}.${n}`)}static loadFromURL(e,t,n,s,o){let l,u,d,f,p=!1,g=!1,m,x=[],y=!1,M=!1,S=0,A=0,T=0,P=!1,C=!1,b=!1,I=[];const R=jh(),E=()=>{!p&&!g&&S>=Ke.HeaderSizeBytes&&(g=!0,new Blob(I).arrayBuffer().then(H=>{d=new ArrayBuffer(Ke.HeaderSizeBytes),new Uint8Array(d).set(new Uint8Array(H,0,Ke.HeaderSizeBytes)),Na.checkVersion(d),g=!1,p=!0,f=Ke.parseHeader(d),window.setTimeout(()=>{N()},1)}))};let F=0;const B=()=>{F===0&&(F++,window.setTimeout(()=>{F--,U()},1))},N=()=>{const X=()=>{M=!0,new Blob(I).arrayBuffer().then(j=>{M=!1,y=!0,m=new ArrayBuffer(f.maxSectionCount*Ke.SectionHeaderSizeBytes),new Uint8Array(m).set(new Uint8Array(j,Ke.HeaderSizeBytes,f.maxSectionCount*Ke.SectionHeaderSizeBytes)),x=Ke.parseSectionHeaders(f,m,0,!1);let q=0;for(let K=0;K<f.maxSectionCount;K++)q+=x[K].storageSizeBytes;const Y=Ke.HeaderSizeBytes+f.maxSectionCount*Ke.SectionHeaderSizeBytes+q;if(!l){l=new ArrayBuffer(Y);let K=0;for(let ne=0;ne<I.length;ne++){const k=I[ne];new Uint8Array(l,K,k.byteLength).set(new Uint8Array(k)),K+=k.byteLength}}T=Ke.HeaderSizeBytes+Ke.SectionHeaderSizeBytes*f.maxSectionCount;for(let K=0;K<=x.length&&K<f.maxSectionCount;K++)T+=x[K].storageSizeBytes;B()})};!M&&!y&&p&&S>=Ke.HeaderSizeBytes+Ke.SectionHeaderSizeBytes*f.maxSectionCount&&X()},U=()=>{if(b)return;b=!0;const X=()=>{if(b=!1,y){if(C)return;if(P=S>=T,S-A>wt.ProgressiveLoadSectionSize||P){A+=wt.ProgressiveLoadSectionSize,C=A>=T,u||(u=new Ke(l,!1));const j=Ke.HeaderSizeBytes+Ke.SectionHeaderSizeBytes*f.maxSectionCount;let q=0,Y=0,K=0;for(let te=0;te<f.maxSectionCount;te++){const Me=x[te],Te=q+Me.partiallyFilledBucketCount*4+Me.bucketStorageSizeBytes*Me.bucketCount,Re=j+Te;if(A>=Re){Y++;const se=A-Re,be=Ke.CompressionLevels[f.compressionLevel].SphericalHarmonicsDegrees[Me.sphericalHarmonicsDegree].BytesPerSplat;let Oe=Math.floor(se/be);Oe=Math.min(Oe,Me.maxSplatCount),K+=Oe,u.updateLoadedCounts(Y,K),u.updateSectionLoadedCounts(te,Oe)}else break;q+=Me.storageSizeBytes}s(u,C);const ne=A/T*100,k=ne.toFixed(2)+"%";t&&t(ne,k,xn.Downloading),C?R.resolve(u):U()}}};window.setTimeout(X,wt.ProgressiveLoadSectionDelayDuration)};return du(e,(X,H,j)=>{j&&(I.push(j),l&&new Uint8Array(l,S,j.byteLength).set(new Uint8Array(j)),S+=j.byteLength),n?(E(),N(),U()):t&&t(X,H,xn.Downloading)},!n,o).then(X=>(t&&t(0,"0%",xn.Processing),(n?R.promise:Na.loadFromFileData(X)).then(j=>(t&&t(100,"100%",xn.Done),j))))}static loadFromFileData(e){return _i(()=>(Na.checkVersion(e),new Ke(e)))}};Fe(Na,"downloadFile",(function(){let e;return function(t,n){const s=new Blob([t.bufferData],{type:"application/octet-stream"});e||(e=document.createElement("a"),document.body.appendChild(e)),e.download=n,e.href=URL.createObjectURL(s),e.click()}})());let Fh=Na;const jn={Splat:0,KSplat:1,Ply:2,Spz:3},ox=a=>a.endsWith(".ply")?jn.Ply:a.endsWith(".splat")?jn.Splat:a.endsWith(".ksplat")?jn.KSplat:a.endsWith(".spz")?jn.Spz:null,lx={type:"change"},Df={type:"start"},cx={type:"end"},Bc=new Gx,ux=new as,E1=Math.cos(70*Ux.DEG2RAD);class Nc extends ds{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"KeyA",UP:"KeyW",RIGHT:"KeyD",BOTTOM:"KeyS"},this.mouseButtons={LEFT:ga.ROTATE,MIDDLE:ga.DOLLY,RIGHT:ga.PAN},this.touches={ONE:xa.ROTATE,TWO:xa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return u.phi},this.getAzimuthalAngle=function(){return u.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(Q){Q.addEventListener("keydown",hn),this._domElementKeyEvents=Q},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",hn),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,this.clearDampedRotation(),this.clearDampedPan(),n.object.updateProjectionMatrix(),n.dispatchEvent(lx),n.update(),o=s.NONE},this.clearDampedRotation=function(){d.theta=0,d.phi=0},this.clearDampedPan=function(){p.set(0,0,0)},this.update=(function(){const Q=new z,ie=new en().setFromUnitVectors(e.up,new z(0,1,0)),me=ie.clone().invert(),Ee=new z,He=new en,Le=new z,Ie=2*Math.PI;return function(){ie.setFromUnitVectors(e.up,new z(0,1,0)),me.copy(ie).invert();const lt=n.object.position;Q.copy(lt).sub(n.target),Q.applyQuaternion(ie),u.setFromVector3(Q),n.autoRotate&&o===s.NONE&&N(F()),n.enableDamping?(u.theta+=d.theta*n.dampingFactor,u.phi+=d.phi*n.dampingFactor):(u.theta+=d.theta,u.phi+=d.phi);let at=n.minAzimuthAngle,$=n.maxAzimuthAngle;isFinite(at)&&isFinite($)&&(at<-Math.PI?at+=Ie:at>Math.PI&&(at-=Ie),$<-Math.PI?$+=Ie:$>Math.PI&&($-=Ie),at<=$?u.theta=Math.max(at,Math.min($,u.theta)):u.theta=u.theta>(at+$)/2?Math.max(at,u.theta):Math.min($,u.theta)),u.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,u.phi)),u.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(p,n.dampingFactor):n.target.add(p),n.zoomToCursor&&I||n.object.isOrthographicCamera?u.radius=K(u.radius):u.radius=K(u.radius*f),Q.setFromSpherical(u),Q.applyQuaternion(me),lt.copy(n.target).add(Q),n.object.lookAt(n.target),n.enableDamping===!0?(d.theta*=1-n.dampingFactor,d.phi*=1-n.dampingFactor,p.multiplyScalar(1-n.dampingFactor)):(d.set(0,0,0),p.set(0,0,0));let De=!1;if(n.zoomToCursor&&I){let Se=null;if(n.object.isPerspectiveCamera){const Be=Q.length();Se=K(Be*f);const ke=Be-Se;n.object.position.addScaledVector(C,ke),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Be=new z(b.x,b.y,0);Be.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/f)),n.object.updateProjectionMatrix(),De=!0;const ke=new z(b.x,b.y,0);ke.unproject(n.object),n.object.position.sub(ke).add(Be),n.object.updateMatrixWorld(),Se=Q.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Se!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Se).add(n.object.position):(Bc.origin.copy(n.object.position),Bc.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Bc.direction))<E1?e.lookAt(n.target):(ux.setFromNormalAndCoplanarPoint(n.object.up,n.target),Bc.intersectPlane(ux,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/f)),n.object.updateProjectionMatrix(),De=!0);return f=1,I=!1,De||Ee.distanceToSquared(n.object.position)>l||8*(1-He.dot(n.object.quaternion))>l||Le.distanceToSquared(n.target)>0?(n.dispatchEvent(lx),Ee.copy(n.object.position),He.copy(n.object.quaternion),Le.copy(n.target),De=!1,!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",w),n.domElement.removeEventListener("pointerdown",At),n.domElement.removeEventListener("pointercancel",Bt),n.domElement.removeEventListener("wheel",ee),n.domElement.removeEventListener("pointermove",Tt),n.domElement.removeEventListener("pointerup",Bt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",hn),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=s.NONE;const l=1e-6,u=new x0,d=new x0;let f=1;const p=new z,g=new qe,m=new qe,x=new qe,y=new qe,M=new qe,S=new qe,A=new qe,T=new qe,P=new qe,C=new z,b=new qe;let I=!1;const R=[],E={};function F(){return 2*Math.PI/60/60*n.autoRotateSpeed}function B(){return Math.pow(.95,n.zoomSpeed)}function N(Q){d.theta-=Q}function U(Q){d.phi-=Q}const W=(function(){const Q=new z;return function(me,Ee){Q.setFromMatrixColumn(Ee,0),Q.multiplyScalar(-me),p.add(Q)}})(),X=(function(){const Q=new z;return function(me,Ee){n.screenSpacePanning===!0?Q.setFromMatrixColumn(Ee,1):(Q.setFromMatrixColumn(Ee,0),Q.crossVectors(n.object.up,Q)),Q.multiplyScalar(me),p.add(Q)}})(),H=(function(){const Q=new z;return function(me,Ee){const He=n.domElement;if(n.object.isPerspectiveCamera){const Le=n.object.position;Q.copy(Le).sub(n.target);let Ie=Q.length();Ie*=Math.tan(n.object.fov/2*Math.PI/180),W(2*me*Ie/He.clientHeight,n.object.matrix),X(2*Ee*Ie/He.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(me*(n.object.right-n.object.left)/n.object.zoom/He.clientWidth,n.object.matrix),X(Ee*(n.object.top-n.object.bottom)/n.object.zoom/He.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function j(Q){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?f/=Q:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(Q){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?f*=Q:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(Q){if(!n.zoomToCursor)return;I=!0;const ie=n.domElement.getBoundingClientRect(),me=Q.clientX-ie.left,Ee=Q.clientY-ie.top,He=ie.width,Le=ie.height;b.x=me/He*2-1,b.y=-(Ee/Le)*2+1,C.set(b.x,b.y,1).unproject(e).sub(e.position).normalize()}function K(Q){return Math.max(n.minDistance,Math.min(n.maxDistance,Q))}function ne(Q){g.set(Q.clientX,Q.clientY)}function k(Q){Y(Q),A.set(Q.clientX,Q.clientY)}function te(Q){y.set(Q.clientX,Q.clientY)}function Me(Q){m.set(Q.clientX,Q.clientY),x.subVectors(m,g).multiplyScalar(n.rotateSpeed);const ie=n.domElement;N(2*Math.PI*x.x/ie.clientHeight),U(2*Math.PI*x.y/ie.clientHeight),g.copy(m),n.update()}function Te(Q){T.set(Q.clientX,Q.clientY),P.subVectors(T,A),P.y>0?j(B()):P.y<0&&q(B()),A.copy(T),n.update()}function Re(Q){M.set(Q.clientX,Q.clientY),S.subVectors(M,y).multiplyScalar(n.panSpeed),H(S.x,S.y),y.copy(M),n.update()}function se(Q){Y(Q),Q.deltaY<0?q(B()):Q.deltaY>0&&j(B()),n.update()}function xe(Q){let ie=!1;switch(Q.code){case n.keys.UP:Q.ctrlKey||Q.metaKey||Q.shiftKey?U(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),ie=!0;break;case n.keys.BOTTOM:Q.ctrlKey||Q.metaKey||Q.shiftKey?U(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),ie=!0;break;case n.keys.LEFT:Q.ctrlKey||Q.metaKey||Q.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),ie=!0;break;case n.keys.RIGHT:Q.ctrlKey||Q.metaKey||Q.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),ie=!0;break}ie&&(Q.preventDefault(),n.update())}function pe(){if(R.length===1)g.set(R[0].pageX,R[0].pageY);else{const Q=.5*(R[0].pageX+R[1].pageX),ie=.5*(R[0].pageY+R[1].pageY);g.set(Q,ie)}}function be(){if(R.length===1)y.set(R[0].pageX,R[0].pageY);else{const Q=.5*(R[0].pageX+R[1].pageX),ie=.5*(R[0].pageY+R[1].pageY);y.set(Q,ie)}}function Oe(){const Q=R[0].pageX-R[1].pageX,ie=R[0].pageY-R[1].pageY,me=Math.sqrt(Q*Q+ie*ie);A.set(0,me)}function Ge(){n.enableZoom&&Oe(),n.enablePan&&be()}function xt(){n.enableZoom&&Oe(),n.enableRotate&&pe()}function Ye(Q){if(R.length==1)m.set(Q.pageX,Q.pageY);else{const me=we(Q),Ee=.5*(Q.pageX+me.x),He=.5*(Q.pageY+me.y);m.set(Ee,He)}x.subVectors(m,g).multiplyScalar(n.rotateSpeed);const ie=n.domElement;N(2*Math.PI*x.x/ie.clientHeight),U(2*Math.PI*x.y/ie.clientHeight),g.copy(m)}function dt(Q){if(R.length===1)M.set(Q.pageX,Q.pageY);else{const ie=we(Q),me=.5*(Q.pageX+ie.x),Ee=.5*(Q.pageY+ie.y);M.set(me,Ee)}S.subVectors(M,y).multiplyScalar(n.panSpeed),H(S.x,S.y),y.copy(M)}function nt(Q){const ie=we(Q),me=Q.pageX-ie.x,Ee=Q.pageY-ie.y,He=Math.sqrt(me*me+Ee*Ee);T.set(0,He),P.set(0,Math.pow(T.y/A.y,n.zoomSpeed)),j(P.y),A.copy(T)}function ht(Q){n.enableZoom&&nt(Q),n.enablePan&&dt(Q)}function bt(Q){n.enableZoom&&nt(Q),n.enableRotate&&Ye(Q)}function At(Q){n.enabled!==!1&&(R.length===0&&(n.domElement.setPointerCapture(Q.pointerId),n.domElement.addEventListener("pointermove",Tt),n.domElement.addEventListener("pointerup",Bt)),ae(Q),Q.pointerType==="touch"?It(Q):Ut(Q))}function Tt(Q){n.enabled!==!1&&(Q.pointerType==="touch"?O(Q):qt(Q))}function Bt(Q){de(Q),R.length===0&&(n.domElement.releasePointerCapture(Q.pointerId),n.domElement.removeEventListener("pointermove",Tt),n.domElement.removeEventListener("pointerup",Bt)),n.dispatchEvent(cx),o=s.NONE}function Ut(Q){let ie;switch(Q.button){case 0:ie=n.mouseButtons.LEFT;break;case 1:ie=n.mouseButtons.MIDDLE;break;case 2:ie=n.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case ga.DOLLY:if(n.enableZoom===!1)return;k(Q),o=s.DOLLY;break;case ga.ROTATE:if(Q.ctrlKey||Q.metaKey||Q.shiftKey){if(n.enablePan===!1)return;te(Q),o=s.PAN}else{if(n.enableRotate===!1)return;ne(Q),o=s.ROTATE}break;case ga.PAN:if(Q.ctrlKey||Q.metaKey||Q.shiftKey){if(n.enableRotate===!1)return;ne(Q),o=s.ROTATE}else{if(n.enablePan===!1)return;te(Q),o=s.PAN}break;default:o=s.NONE}o!==s.NONE&&n.dispatchEvent(Df)}function qt(Q){switch(o){case s.ROTATE:if(n.enableRotate===!1)return;Me(Q);break;case s.DOLLY:if(n.enableZoom===!1)return;Te(Q);break;case s.PAN:if(n.enablePan===!1)return;Re(Q);break}}function ee(Q){n.enabled===!1||n.enableZoom===!1||o!==s.NONE||(Q.preventDefault(),n.dispatchEvent(Df),se(Q),n.dispatchEvent(cx))}function hn(Q){n.enabled===!1||n.enablePan===!1||xe(Q)}function It(Q){switch(ge(Q),R.length){case 1:switch(n.touches.ONE){case xa.ROTATE:if(n.enableRotate===!1)return;pe(),o=s.TOUCH_ROTATE;break;case xa.PAN:if(n.enablePan===!1)return;be(),o=s.TOUCH_PAN;break;default:o=s.NONE}break;case 2:switch(n.touches.TWO){case xa.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ge(),o=s.TOUCH_DOLLY_PAN;break;case xa.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xt(),o=s.TOUCH_DOLLY_ROTATE;break;default:o=s.NONE}break;default:o=s.NONE}o!==s.NONE&&n.dispatchEvent(Df)}function O(Q){switch(ge(Q),o){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ye(Q),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;dt(Q),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ht(Q),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;bt(Q),n.update();break;default:o=s.NONE}}function w(Q){n.enabled!==!1&&Q.preventDefault()}function ae(Q){R.push(Q)}function de(Q){delete E[Q.pointerId];for(let ie=0;ie<R.length;ie++)if(R[ie].pointerId==Q.pointerId){R.splice(ie,1);return}}function ge(Q){let ie=E[Q.pointerId];ie===void 0&&(ie=new qe,E[Q.pointerId]=ie),ie.set(Q.pageX,Q.pageY)}function we(Q){const ie=Q.pointerId===R[0].pointerId?R[1]:R[0];return E[ie.pointerId]}n.domElement.addEventListener("contextmenu",w),n.domElement.addEventListener("pointerdown",At),n.domElement.addEventListener("pointercancel",Bt),n.domElement.addEventListener("wheel",ee,{passive:!1}),this.update()}}const C1=(a,e,t,n,s)=>{const o=performance.now();let l=a.style.display==="none"?0:parseFloat(a.style.opacity);isNaN(l)&&(l=1);const u=window.setInterval(()=>{const f=performance.now()-o;let p=Math.min(f/n,1);p>.999&&(p=1);let g;e?(g=(1-p)*l,g<1e-4&&(g=0)):g=(1-l)*p+l,g>0?(a.style.display=t,a.style.opacity=g):a.style.display="none",p>=1&&(s&&s(),window.clearInterval(u))},16);return u},T1=500,iu=class iu{constructor(e,t){this.taskIDGen=0,this.elementID=iu.elementIDGen++,this.tasks=[],this.message=e||"Loading...",this.container=t||document.body,this.spinnerContainerOuter=document.createElement("div"),this.spinnerContainerOuter.className=`spinnerOuterContainer${this.elementID}`,this.spinnerContainerOuter.style.display="none",this.spinnerContainerPrimary=document.createElement("div"),this.spinnerContainerPrimary.className=`spinnerContainerPrimary${this.elementID}`,this.spinnerPrimary=document.createElement("div"),this.spinnerPrimary.classList.add(`spinner${this.elementID}`,`spinnerPrimary${this.elementID}`),this.messageContainerPrimary=document.createElement("div"),this.messageContainerPrimary.classList.add(`messageContainer${this.elementID}`,`messageContainerPrimary${this.elementID}`),this.messageContainerPrimary.innerHTML=this.message,this.spinnerContainerMin=document.createElement("div"),this.spinnerContainerMin.className=`spinnerContainerMin${this.elementID}`,this.spinnerMin=document.createElement("div"),this.spinnerMin.classList.add(`spinner${this.elementID}`,`spinnerMin${this.elementID}`),this.messageContainerMin=document.createElement("div"),this.messageContainerMin.classList.add(`messageContainer${this.elementID}`,`messageContainerMin${this.elementID}`),this.messageContainerMin.innerHTML=this.message,this.spinnerContainerPrimary.appendChild(this.spinnerPrimary),this.spinnerContainerPrimary.appendChild(this.messageContainerPrimary),this.spinnerContainerOuter.appendChild(this.spinnerContainerPrimary),this.spinnerContainerMin.appendChild(this.spinnerMin),this.spinnerContainerMin.appendChild(this.messageContainerMin),this.spinnerContainerOuter.appendChild(this.spinnerContainerMin);const n=document.createElement("style");n.innerHTML=`

            .spinnerOuterContainer${this.elementID} {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .messageContainer${this.elementID} {
                height: 20px;
                font-family: arial;
                font-size: 12pt;
                color: #ffffff;
                text-align: center;
                vertical-align: middle;
            }

            .spinner${this.elementID} {
                padding: 15px;
                background: #07e8d6;
                z-index:99999;
            
                aspect-ratio: 1;
                border-radius: 50%;
                --_m: 
                    conic-gradient(#0000,#000),
                    linear-gradient(#000 0 0) content-box;
                -webkit-mask: var(--_m);
                    mask: var(--_m);
                -webkit-mask-composite: source-out;
                    mask-composite: subtract;
                box-sizing: border-box;
                animation: load 1s linear infinite;
            }

            .spinnerContainerPrimary${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 10px;
                margin: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-80px, -80px);
                width: 180px;
                pointer-events: auto;
            }

            .spinnerPrimary${this.elementID} {
                width: 120px;
                margin-left: 30px;
            }

            .messageContainerPrimary${this.elementID} {
                padding-top: 15px;
            }

            .spinnerContainerMin${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                display: flex;
                flex-direction: left;
                pointer-events: auto;
                min-width: 250px;
            }

            .messageContainerMin${this.elementID} {
                margin-right: 15px;
            }

            .spinnerMin${this.elementID} {
                width: 50px;
                height: 50px;
                margin-left: 15px;
                margin-right: 25px;
            }

            .messageContainerMin${this.elementID} {
                padding-top: 15px;
            }
            
            @keyframes load {
                to{transform: rotate(1turn)}
            }

        `,this.spinnerContainerOuter.appendChild(n),this.container.appendChild(this.spinnerContainerOuter),this.setMinimized(!1,!0),this.fadeTransitions=[]}addTask(e){const t={message:e,id:this.taskIDGen++};return this.tasks.push(t),this.update(),t.id}removeTask(e){let t=0;for(let n of this.tasks){if(n.id===e){this.tasks.splice(t,1);break}t++}this.update()}removeAllTasks(){this.tasks=[],this.update()}setMessageForTask(e,t){for(let n of this.tasks)if(n.id===e){n.message=t;break}this.update()}update(){this.tasks.length>0?(this.show(),this.setMessage(this.tasks[this.tasks.length-1].message)):this.hide()}show(){this.spinnerContainerOuter.style.display="block",this.visible=!0}hide(){this.spinnerContainerOuter.style.display="none",this.visible=!1}setContainer(e){this.container&&this.spinnerContainerOuter.parentElement===this.container&&this.container.removeChild(this.spinnerContainerOuter),e&&(this.container=e,this.container.appendChild(this.spinnerContainerOuter),this.spinnerContainerOuter.style.zIndex=this.container.style.zIndex+1)}setMinimized(e,t){const n=(s,o,l,u,d)=>{l?s.style.display=o?u:"none":this.fadeTransitions[d]=C1(s,!o,u,T1,()=>{this.fadeTransitions[d]=null})};n(this.spinnerContainerPrimary,!e,t,"block",0),n(this.spinnerContainerMin,e,t,"flex",1),this.minimized=e}setMessage(e){this.messageContainerPrimary.innerHTML=e,this.messageContainerMin.innerHTML=e}};Fe(iu,"elementIDGen",0);let Lh=iu;class w1{constructor(e){this.idGen=0,this.tasks=[],this.container=e||document.body,this.progressBarContainerOuter=document.createElement("div"),this.progressBarContainerOuter.className="progressBarOuterContainer",this.progressBarContainerOuter.style.display="none",this.progressBarBox=document.createElement("div"),this.progressBarBox.className="progressBarBox",this.progressBarBackground=document.createElement("div"),this.progressBarBackground.className="progressBarBackground",this.progressBar=document.createElement("div"),this.progressBar.className="progressBar",this.progressBarBackground.appendChild(this.progressBar),this.progressBarBox.appendChild(this.progressBarBackground),this.progressBarContainerOuter.appendChild(this.progressBarBox);const t=document.createElement("style");t.innerHTML=`

            .progressBarOuterContainer {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .progressBarBox {
                z-index:99999;
                padding: 7px 9px 5px 7px;
                background-color: rgba(190, 190, 190, 0.75);
                border: #555555 1px solid;
                border-radius: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                width: 180px;
                height: 30px;
                pointer-events: auto;
            }

            .progressBarBackground {
                width: 100%;
                height: 25px;
                border-radius:10px;
                background-color: rgba(128, 128, 128, 0.75);
                border: #444444 1px solid;
                box-shadow: inset 0 0 10px #333333;
            }

            .progressBar {
                height: 25px;
                width: 0px;
                border-radius:10px;
                background-color: rgba(0, 200, 0, 0.75);
                box-shadow: inset 0 0 10px #003300;
            }

        `,this.progressBarContainerOuter.appendChild(t),this.container.appendChild(this.progressBarContainerOuter)}show(){this.progressBarContainerOuter.style.display="block"}hide(){this.progressBarContainerOuter.style.display="none"}setProgress(e){this.progressBar.style.width=e+"%"}setContainer(e){this.container&&this.progressBarContainerOuter.parentElement===this.container&&this.container.removeChild(this.progressBarContainerOuter),e&&(this.container=e,this.container.appendChild(this.progressBarContainerOuter),this.progressBarContainerOuter.style.zIndex=this.container.style.zIndex+1)}}class b1{constructor(e){Fe(this,"update",function(e,t,n,s,o,l,u,d,f,p,g,m,x,y){const M=`${t.x.toFixed(5)}, ${t.y.toFixed(5)}, ${t.z.toFixed(5)}`;if(this.infoCells.cameraPosition.innerHTML!==M&&(this.infoCells.cameraPosition.innerHTML=M),n){const A=n,T=`${A.x.toFixed(5)}, ${A.y.toFixed(5)}, ${A.z.toFixed(5)}`;this.infoCells.cameraLookAt.innerHTML!==T&&(this.infoCells.cameraLookAt.innerHTML=T)}const S=`${s.x.toFixed(5)}, ${s.y.toFixed(5)}, ${s.z.toFixed(5)}`;if(this.infoCells.cameraUp.innerHTML!==S&&(this.infoCells.cameraUp.innerHTML=S),this.infoCells.orthographicCamera.innerHTML=o?"Orthographic":"Perspective",l){const A=l,T=`${A.x.toFixed(5)}, ${A.y.toFixed(5)}, ${A.z.toFixed(5)}`;this.infoCells.cursorPosition.innerHTML=T}else this.infoCells.cursorPosition.innerHTML="N/A";this.infoCells.fps.innerHTML=u,this.infoCells.renderWindow.innerHTML=`${e.x} x ${e.y}`,this.infoCells.renderSplatCount.innerHTML=`${f} splats out of ${d} (${p.toFixed(2)}%)`,this.infoCells.sortTime.innerHTML=`${g.toFixed(3)} ms`,this.infoCells.focalAdjustment.innerHTML=`${m.toFixed(3)}`,this.infoCells.splatScale.innerHTML=`${x.toFixed(3)}`,this.infoCells.pointCloudMode.innerHTML=`${y}`});this.container=e||document.body,this.infoCells={};const t=[["Camera position","cameraPosition"],["Camera look-at","cameraLookAt"],["Camera up","cameraUp"],["Camera mode","orthographicCamera"],["Cursor position","cursorPosition"],["FPS","fps"],["Rendering:","renderSplatCount"],["Sort time","sortTime"],["Render window","renderWindow"],["Focal adjustment","focalAdjustment"],["Splat scale","splatScale"],["Point cloud mode","pointCloudMode"]];this.infoPanelContainer=document.createElement("div");const n=document.createElement("style");n.innerHTML=`

            .infoPanel {
                width: 430px;
                padding: 10px;
                background-color: rgba(50, 50, 50, 0.85);
                border: #555555 2px solid;
                color: #dddddd;
                border-radius: 10px;
                z-index: 9999;
                font-family: arial;
                font-size: 11pt;
                text-align: left;
                margin: 0;
                top: 10px;
                left:10px;
                position: absolute;
                pointer-events: auto;
            }

            .info-panel-cell {
                margin-bottom: 5px;
                padding-bottom: 2px;
            }

            .label-cell {
                font-weight: bold;
                font-size: 12pt;
                width: 140px;
            }

        `,this.infoPanelContainer.append(n),this.infoPanel=document.createElement("div"),this.infoPanel.className="infoPanel";const s=document.createElement("div");s.style.display="table";for(let o of t){const l=document.createElement("div");l.style.display="table-row",l.className="info-panel-row";const u=document.createElement("div");u.style.display="table-cell",u.innerHTML=`${o[0]}: `,u.classList.add("info-panel-cell","label-cell");const d=document.createElement("div");d.style.display="table-cell",d.style.width="10px",d.innerHTML=" ",d.className="info-panel-cell";const f=document.createElement("div");f.style.display="table-cell",f.innerHTML="",f.className="info-panel-cell",this.infoCells[o[1]]=f,l.appendChild(u),l.appendChild(d),l.appendChild(f),s.appendChild(l)}this.infoPanel.appendChild(s),this.infoPanelContainer.append(this.infoPanel),this.infoPanelContainer.style.display="none",this.container.appendChild(this.infoPanelContainer),this.visible=!1}setContainer(e){this.container&&this.infoPanelContainer.parentElement===this.container&&this.container.removeChild(this.infoPanelContainer),e&&(this.container=e,this.container.appendChild(this.infoPanelContainer),this.infoPanelContainer.style.zIndex=this.container.style.zIndex+1)}show(){this.infoPanelContainer.style.display="block",this.visible=!0}hide(){this.infoPanelContainer.style.display="none",this.visible=!1}}const dx=new z;class R1 extends En{constructor(e=new z(0,0,1),t=new z(0,0,0),n=1,s=.1,o=16776960,l=n*.2,u=l*.2){super(),this.type="ArrowHelper";const d=new el(s,s,n,32);d.translate(0,n/2,0);const f=new el(0,u,l,32);f.translate(0,n,0),this.position.copy(t),this.line=new mn(d,new Ws({color:o,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new mn(f,new Ws({color:o,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{dx.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(dx,t)}}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Qo{constructor(e){Fe(this,"updateFocusMarker",(function(){const e=new z,t=new gt,n=new z;return function(s,o,l){t.copy(o.matrixWorld).invert(),e.copy(s).applyMatrix4(t),e.normalize().multiplyScalar(10),e.applyMatrix4(o.matrixWorld),n.copy(o.position).sub(s);const u=n.length();this.focusMarker.position.copy(s),this.focusMarker.scale.set(u,u,u),this.focusMarker.material.uniforms.realFocusPosition.value.copy(s),this.focusMarker.material.uniforms.viewport.value.copy(l),this.focusMarker.material.uniformsNeedUpdate=!0}})());Fe(this,"positionAndOrientControlPlane",(function(){const e=new en,t=new z(0,1,0);return function(n,s){e.setFromUnitVectors(t,s),this.controlPlane.position.copy(n),this.controlPlane.quaternion.copy(e)}})());this.threeScene=e,this.splatRenderTarget=null,this.renderTargetCopyQuad=null,this.renderTargetCopyCamera=null,this.meshCursor=null,this.focusMarker=null,this.controlPlane=null,this.debugRoot=null,this.secondaryDebugRoot=null}updateSplatRenderTargetForRenderDimensions(e,t){this.destroySplatRendertarget(),this.splatRenderTarget=new ji(e,t,{format:Zn,stencilBuffer:!1,depthBuffer:!0}),this.splatRenderTarget.depthTexture=new Xs(e,t),this.splatRenderTarget.depthTexture.format=ur,this.splatRenderTarget.depthTexture.type=$n}destroySplatRendertarget(){this.splatRenderTarget&&(this.splatRenderTarget=null)}setupRenderTargetCopyObjects(){const e={sourceColorTexture:{type:"t",value:null},sourceDepthTexture:{type:"t",value:null}},t=new ti({vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4( position.xy, 0.0, 1.0 );    
                }
            `,fragmentShader:`
                #include <common>
                #include <packing>
                varying vec2 vUv;
                uniform sampler2D sourceColorTexture;
                uniform sampler2D sourceDepthTexture;
                void main() {
                    vec4 color = texture2D(sourceColorTexture, vUv);
                    float fragDepth = texture2D(sourceDepthTexture, vUv).x;
                    gl_FragDepth = fragDepth;
                    gl_FragColor = vec4(color.rgb, color.a * 2.0);
              }
            `,uniforms:e,depthWrite:!1,depthTest:!1,transparent:!0,blending:Sx,blendSrc:jo,blendSrcAlpha:jo,blendDst:Ko,blendDstAlpha:Ko});t.extensions.fragDepth=!0,this.renderTargetCopyQuad=new mn(new Qa(2,2),t),this.renderTargetCopyCamera=new lu(-1,1,1,-1,0,1)}destroyRenderTargetCopyObjects(){this.renderTargetCopyQuad&&(Ba(this.renderTargetCopyQuad),this.renderTargetCopyQuad=null)}setupMeshCursor(){if(!this.meshCursor){const e=new Yh(.5,1.5,32),t=new Ws({color:16777215}),n=new mn(e,t);n.rotation.set(0,0,Math.PI),n.position.set(0,1,0);const s=new mn(e,t);s.position.set(0,-1,0);const o=new mn(e,t);o.rotation.set(0,0,Math.PI/2),o.position.set(1,0,0);const l=new mn(e,t);l.rotation.set(0,0,-Math.PI/2),l.position.set(-1,0,0),this.meshCursor=new En,this.meshCursor.add(n),this.meshCursor.add(s),this.meshCursor.add(o),this.meshCursor.add(l),this.meshCursor.scale.set(.1,.1,.1),this.threeScene.add(this.meshCursor),this.meshCursor.visible=!1}}destroyMeshCursor(){this.meshCursor&&(Ba(this.meshCursor),this.threeScene.remove(this.meshCursor),this.meshCursor=null)}setMeshCursorVisibility(e){this.meshCursor.visible=e}getMeschCursorVisibility(){return this.meshCursor.visible}setMeshCursorPosition(e){this.meshCursor.position.copy(e)}positionAndOrientMeshCursor(e,t){this.meshCursor.position.copy(e),this.meshCursor.up.copy(t.up),this.meshCursor.lookAt(t.position)}setupFocusMarker(){if(!this.focusMarker){const e=new Zc(.5,32,32),t=Qo.buildFocusMarkerMaterial();t.depthTest=!1,t.depthWrite=!1,t.transparent=!0,this.focusMarker=new mn(e,t)}}destroyFocusMarker(){this.focusMarker&&(Ba(this.focusMarker),this.focusMarker=null)}setFocusMarkerVisibility(e){this.focusMarker.visible=e}setFocusMarkerOpacity(e){this.focusMarker.material.uniforms.opacity.value=e,this.focusMarker.material.uniformsNeedUpdate=!0}getFocusMarkerOpacity(){return this.focusMarker.material.uniforms.opacity.value}setupControlPlane(){if(!this.controlPlane){const e=new Qa(1,1);e.rotateX(-Math.PI/2);const t=new Ws({color:16777215});t.transparent=!0,t.opacity=.6,t.depthTest=!1,t.depthWrite=!1,t.side=Li;const n=new mn(e,t),s=new z(0,1,0);s.normalize();const o=new z(0,0,0),l=.5,u=.01,d=56576,f=new R1(s,o,l,u,d,.1,.03);this.controlPlane=new En,this.controlPlane.add(n),this.controlPlane.add(f)}}destroyControlPlane(){this.controlPlane&&(Ba(this.controlPlane),this.controlPlane=null)}setControlPlaneVisibility(e){this.controlPlane.visible=e}addDebugMeshes(){this.debugRoot=this.createDebugMeshes(),this.secondaryDebugRoot=this.createSecondaryDebugMeshes(),this.threeScene.add(this.debugRoot),this.threeScene.add(this.secondaryDebugRoot)}destroyDebugMeshes(){for(let e of[this.debugRoot,this.secondaryDebugRoot])e&&(Ba(e),this.threeScene.remove(e));this.debugRoot=null,this.secondaryDebugRoot=null}createDebugMeshes(e){const t=new Zc(1,32,32),n=new En,s=(o,l)=>{let u=new mn(t,Qo.buildDebugMaterial(o));u.renderOrder=e,n.add(u),u.position.fromArray(l)};return s(16711680,[-50,0,0]),s(16711680,[50,0,0]),s(65280,[0,0,-50]),s(65280,[0,0,50]),s(16755200,[5,0,5]),n}createSecondaryDebugMeshes(e){const t=new ja(3,3,3),n=new En;let s=12303291;const o=u=>{let d=new mn(t,Qo.buildDebugMaterial(s));d.renderOrder=e,n.add(d),d.position.fromArray(u)};let l=10;return o([-l,0,-l]),o([-l,0,l]),o([l,0,-l]),o([l,0,l]),n}static buildDebugMaterial(e){const t=`
            #include <common>
            varying float ndcDepth;

            void main() {
                gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position.xyz, 1.0);
                ndcDepth = gl_Position.z / gl_Position.w;
                gl_Position.x = gl_Position.x / gl_Position.w;
                gl_Position.y = gl_Position.y / gl_Position.w;
                gl_Position.z = 0.0;
                gl_Position.w = 1.0;
    
            }
        `,n=`
            #include <common>
            uniform vec3 color;
            varying float ndcDepth;
            void main() {
                gl_FragDepth = (ndcDepth + 1.0) / 2.0;
                gl_FragColor = vec4(color.rgb, 0.0);
            }
        `,s={color:{type:"v3",value:new Dt(e)}},o=new ti({uniforms:s,vertexShader:t,fragmentShader:n,transparent:!1,depthTest:!0,depthWrite:!0,side:lr});return o.extensions.fragDepth=!0,o}static buildFocusMarkerMaterial(e){const t=`
            #include <common>

            uniform vec2 viewport;
            uniform vec3 realFocusPosition;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                float radius = 0.01;

                vec4 viewPosition = modelViewMatrix * vec4(position.xyz, 1.0);
                vec4 viewCenter = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);

                vec4 viewFocusPosition = modelViewMatrix * vec4(realFocusPosition, 1.0);

                ndcPosition = projectionMatrix * viewPosition;
                ndcPosition = ndcPosition * vec4(1.0 / ndcPosition.w);
                ndcCenter = projectionMatrix * viewCenter;
                ndcCenter = ndcCenter * vec4(1.0 / ndcCenter.w);

                ndcFocusPosition = projectionMatrix * viewFocusPosition;
                ndcFocusPosition = ndcFocusPosition * vec4(1.0 / ndcFocusPosition.w);

                gl_Position = projectionMatrix * viewPosition;

            }
        `,n=`
            #include <common>
            uniform vec3 color;
            uniform vec2 viewport;
            uniform float opacity;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                vec2 screenPosition = vec2(ndcPosition) * viewport;
                vec2 screenCenter = vec2(ndcCenter) * viewport;

                vec2 screenVec = screenPosition - screenCenter;

                float projectedRadius = length(screenVec);

                float lineWidth = 0.0005 * viewport.y;
                float aaRange = 0.0025 * viewport.y;
                float radius = 0.06 * viewport.y;
                float radDiff = abs(projectedRadius - radius) - lineWidth;
                float alpha = 1.0 - clamp(radDiff / 5.0, 0.0, 1.0); 

                gl_FragColor = vec4(color.rgb, alpha * opacity);
            }
        `,s={color:{type:"v3",value:new Dt(e)},realFocusPosition:{type:"v3",value:new z},viewport:{type:"v2",value:new qe},opacity:{value:0}};return new ti({uniforms:s,vertexShader:t,fragmentShader:n,transparent:!0,depthTest:!1,depthWrite:!1,side:lr})}dispose(){this.destroyMeshCursor(),this.destroyFocusMarker(),this.destroyDebugMeshes(),this.destroyControlPlane(),this.destroyRenderTargetCopyObjects(),this.destroySplatRendertarget()}}const I1=new z(1,0,0),P1=new z(0,1,0),D1=new z(0,0,1);class Ff{constructor(e=new z,t=new z){Fe(this,"intersectBox",(function(){const e=new z,t=[],n=[],s=[];return function(o,l){if(n[0]=this.origin.x,n[1]=this.origin.y,n[2]=this.origin.z,s[0]=this.direction.x,s[1]=this.direction.y,s[2]=this.direction.z,this.boxContainsPoint(o,this.origin,1e-4))return l&&(l.origin.copy(this.origin),l.normal.set(0,0,0),l.distance=-1),!0;for(let u=0;u<3;u++){if(s[u]==0)continue;const d=u==0?I1:u==1?P1:D1,f=s[u]<0?o.max:o.min;let p=-Math.sign(s[u]);t[0]=u==0?f.x:u==1?f.y:f.z;let g=t[0]-n[u];if(g*p<0){const m=(u+1)%3,x=(u+2)%3;if(t[2]=s[m]/s[u]*g+n[m],t[1]=s[x]/s[u]*g+n[x],e.set(t[u],t[x],t[m]),this.boxContainsPoint(o,e,1e-4))return l&&(l.origin.copy(e),l.normal.copy(d).multiplyScalar(p),l.distance=e.sub(this.origin).length()),!0}}return!1}})());Fe(this,"intersectSphere",(function(){const e=new z;return function(t,n,s){e.copy(t).sub(this.origin);const o=e.dot(this.direction),l=o*o,d=e.dot(e)-l,f=n*n;if(d>f)return!1;const p=Math.sqrt(f-d),g=o-p,m=o+p;if(m<0)return!1;let x=g<0?m:g;return s&&(s.origin.copy(this.origin).addScaledVector(this.direction,x),s.normal.copy(s.origin).sub(t).normalize(),s.distance=x),!0}})());this.origin=new z,this.direction=new z,this.setParameters(e,t)}setParameters(e,t){this.origin.copy(e),this.direction.copy(t).normalize()}boxContainsPoint(e,t,n){return!(t.x<e.min.x-n||t.x>e.max.x+n||t.y<e.min.y-n||t.y>e.max.y+n||t.z<e.min.z-n||t.z>e.max.z+n)}}class cp{constructor(){this.origin=new z,this.normal=new z,this.distance=0,this.splatIndex=0}set(e,t,n,s){this.origin.copy(e),this.normal.copy(t),this.distance=n,this.splatIndex=s}clone(){const e=new cp;return e.origin.copy(this.origin),e.normal.copy(this.normal),e.distance=this.distance,e.splatIndex=this.splatIndex,e}}const wr={ThreeD:0,TwoD:1};class F1{constructor(e,t,n=!1){Fe(this,"setFromCameraAndScreenPosition",(function(){const e=new qe;return function(t,n,s){if(e.x=n.x/s.x*2-1,e.y=(s.y-n.y)/s.y*2-1,t.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t;else if(t.isOrthographicCamera)this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t;else throw new Error("Raycaster::setFromCameraAndScreenPosition() -> Unsupported camera type")}})());Fe(this,"intersectSplatMesh",(function(){const e=new gt,t=new gt,n=new gt,s=new Ff,o=new z;return function(l,u=[]){const d=l.getSplatTree();if(d){for(let f=0;f<d.subTrees.length;f++){const p=d.subTrees[f];t.copy(l.matrixWorld),l.dynamicMode&&(l.getSceneTransform(f,n),t.multiply(n)),e.copy(t).invert(),s.origin.copy(this.ray.origin).applyMatrix4(e),s.direction.copy(this.ray.origin).add(this.ray.direction),s.direction.applyMatrix4(e).sub(s.origin).normalize();const g=[];p.rootNode&&this.castRayAtSplatTreeNode(s,d,p.rootNode,g),g.forEach(m=>{m.origin.applyMatrix4(t),m.normal.applyMatrix4(t).normalize(),m.distance=o.copy(m.origin).sub(this.ray.origin).length()}),u.push(...g)}return u.sort((f,p)=>f.distance>p.distance?1:-1),u}}})());Fe(this,"castRayAtSplatTreeNode",(function(){const e=new tn,t=new z,n=new z,s=new en,o=new cp,l=1e-7,u=new z(0,0,0),d=new gt,f=new gt,p=new gt,g=new gt,m=new gt,x=new Ff;return function(y,M,S,A=[]){if(y.intersectBox(S.boundingBox)){if(S.data&&S.data.indexes&&S.data.indexes.length>0)for(let T=0;T<S.data.indexes.length;T++){const P=S.data.indexes[T],C=M.splatMesh.getSceneIndexForSplat(P);if(M.splatMesh.getScene(C).visible&&(M.splatMesh.getSplatColor(P,e),M.splatMesh.getSplatCenter(P,t),M.splatMesh.getSplatScaleAndRotation(P,n,s),!(n.x<=l||n.y<=l||M.splatMesh.splatRenderMode===wr.ThreeD&&n.z<=l)))if(this.raycastAgainstTrueSplatEllipsoid){f.makeScale(n.x,n.y,n.z),p.makeRotationFromQuaternion(s);const I=Math.log10(e.w)*2;if(d.makeScale(I,I,I),m.copy(d).multiply(p).multiply(f),g.copy(m).invert(),x.origin.copy(y.origin).sub(t).applyMatrix4(g),x.direction.copy(y.origin).add(y.direction).sub(t),x.direction.applyMatrix4(g).sub(x.origin).normalize(),x.intersectSphere(u,1,o)){const R=o.clone();R.splatIndex=P,R.origin.applyMatrix4(m).add(t),A.push(R)}}else{let I=n.x+n.y,R=2;if(M.splatMesh.splatRenderMode===wr.ThreeD&&(I+=n.z,R=3),I=I/R,y.intersectSphere(t,I,o)){const E=o.clone();E.splatIndex=P,A.push(E)}}}if(S.children&&S.children.length>0)for(let T of S.children)this.castRayAtSplatTreeNode(y,M,T,A);return A}}})());this.ray=new Ff(e,t),this.raycastAgainstTrueSplatEllipsoid=n}}class Ha{static buildVertexShaderBase(e=!1,t=!1,n=0,s=""){let o=`
        precision highp float;
        #include <common>

        attribute uint splatIndex;
        uniform highp usampler2D centersColorsTexture;
        uniform highp sampler2D sphericalHarmonicsTexture;
        uniform highp sampler2D sphericalHarmonicsTextureR;
        uniform highp sampler2D sphericalHarmonicsTextureG;
        uniform highp sampler2D sphericalHarmonicsTextureB;

        uniform highp usampler2D sceneIndexesTexture;
        uniform vec2 sceneIndexesTextureSize;
        uniform int sceneCount;
    `;return t&&(o+=`
            uniform float sceneOpacity[${wt.MaxScenes}];
            uniform int sceneVisibility[${wt.MaxScenes}];
        `),e&&(o+=`
            uniform highp mat4 transforms[${wt.MaxScenes}];
        `),o+=`
        ${s}
        uniform vec2 focal;
        uniform float orthoZoom;
        uniform int orthographicMode;
        uniform int pointCloudModeEnabled;
        uniform float inverseFocalAdjustment;
        uniform vec2 viewport;
        uniform vec2 basisViewport;
        uniform vec2 centersColorsTextureSize;
        uniform int sphericalHarmonicsDegree;
        uniform vec2 sphericalHarmonicsTextureSize;
        uniform int sphericalHarmonics8BitMode;
        uniform int sphericalHarmonicsMultiTextureMode;
        uniform float visibleRegionRadius;
        uniform float visibleRegionFadeStartRadius;
        uniform float firstRenderTime;
        uniform float currentTime;
        uniform int fadeInComplete;
        uniform vec3 sceneCenter;
        uniform float splatScale;
        uniform float sphericalHarmonics8BitCompressionRangeMin[${wt.MaxScenes}];
        uniform float sphericalHarmonics8BitCompressionRangeMax[${wt.MaxScenes}];

        varying vec4 vColor;
        varying vec2 vUv;
        varying vec2 vPosition;

        mat3 quaternionToRotationMatrix(float x, float y, float z, float w) {
            float s = 1.0 / sqrt(w * w + x * x + y * y + z * z);
        
            return mat3(
                1. - 2. * (y * y + z * z),
                2. * (x * y + w * z),
                2. * (x * z - w * y),
                2. * (x * y - w * z),
                1. - 2. * (x * x + z * z),
                2. * (y * z + w * x),
                2. * (x * z + w * y),
                2. * (y * z - w * x),
                1. - 2. * (x * x + y * y)
            );
        }

        const float sqrt8 = sqrt(8.0);
        const float minAlpha = 1.0 / 255.0;

        const vec4 encodeNorm4 = vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0);
        const uvec4 mask4 = uvec4(uint(0x000000FF), uint(0x0000FF00), uint(0x00FF0000), uint(0xFF000000));
        const uvec4 shift4 = uvec4(0, 8, 16, 24);
        vec4 uintToRGBAVec (uint u) {
           uvec4 urgba = mask4 & u;
           urgba = urgba >> shift4;
           vec4 rgba = vec4(urgba) * encodeNorm4;
           return rgba;
        }

        vec2 getDataUV(in int stride, in int offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(splatIndex * uint(stride) + uint(offset)) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        vec2 getDataUVF(in uint sIndex, in float stride, in uint offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(uint(float(sIndex) * stride) + offset) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        const float SH_C1 = 0.4886025119029199f;
        const float[5] SH_C2 = float[](1.0925484, -1.0925484, 0.3153916, -1.0925484, 0.5462742);

        void main () {

            uint oddOffset = splatIndex & uint(0x00000001);
            uint doubleOddOffset = oddOffset * uint(2);
            bool isEven = oddOffset == uint(0);
            uint nearestEvenIndex = splatIndex - oddOffset;
            float fOddOffset = float(oddOffset);

            uvec4 sampledCenterColor = texture(centersColorsTexture, getDataUV(1, 0, centersColorsTextureSize));
            vec3 splatCenter = uintBitsToFloat(uvec3(sampledCenterColor.gba));

            uint sceneIndex = uint(0);
            if (sceneCount > 1) {
                sceneIndex = texture(sceneIndexesTexture, getDataUV(1, 0, sceneIndexesTextureSize)).r;
            }
            `,t&&(o+=`
                float splatOpacityFromScene = sceneOpacity[sceneIndex];
                int sceneVisible = sceneVisibility[sceneIndex];
                if (splatOpacityFromScene <= 0.01 || sceneVisible == 0) {
                    gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                    return;
                }
            `),e?o+=`
                mat4 transform = transforms[sceneIndex];
                mat4 transformModelViewMatrix = viewMatrix * transform;
            `:o+="mat4 transformModelViewMatrix = modelViewMatrix;",o+=`
            float sh8BitCompressionRangeMinForScene = sphericalHarmonics8BitCompressionRangeMin[sceneIndex];
            float sh8BitCompressionRangeMaxForScene = sphericalHarmonics8BitCompressionRangeMax[sceneIndex];
            float sh8BitCompressionRangeForScene = sh8BitCompressionRangeMaxForScene - sh8BitCompressionRangeMinForScene;
            float sh8BitCompressionHalfRangeForScene = sh8BitCompressionRangeForScene / 2.0;
            vec3 vec8BitSHShift = vec3(sh8BitCompressionRangeMinForScene);

            vec4 viewCenter = transformModelViewMatrix * vec4(splatCenter, 1.0);

            vec4 clipCenter = projectionMatrix * viewCenter;

            float clip = 1.2 * clipCenter.w;
            if (clipCenter.z < -clip || clipCenter.x < -clip || clipCenter.x > clip || clipCenter.y < -clip || clipCenter.y > clip) {
                gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                return;
            }

            vec3 ndcCenter = clipCenter.xyz / clipCenter.w;

            vPosition = position.xy;
            vColor = uintToRGBAVec(sampledCenterColor.r);
        `,n>=1&&(o+=`   
            if (sphericalHarmonicsDegree >= 1) {
            `,e?o+=`
                    vec3 worldViewDir = normalize(splatCenter - vec3(inverse(transform) * vec4(cameraPosition, 1.0)));
                `:o+=`
                    vec3 worldViewDir = normalize(splatCenter - cameraPosition);
                `,o+=`
                vec3 sh1;
                vec3 sh2;
                vec3 sh3;
            `,n>=2&&(o+=`
                    vec3 sh4;
                    vec3 sh5;
                    vec3 sh6;
                    vec3 sh7;
                    vec3 sh8;
                `),n===1?o+=`
                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        vec2 shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset, sphericalHarmonicsTextureSize);
                        vec4 sampledSH0123 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(1), sphericalHarmonicsTextureSize);
                        vec4 sampledSH4567 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(2), sphericalHarmonicsTextureSize);
                        vec4 sampledSH891011 = texture(sphericalHarmonicsTexture, shUV);
                        sh1 = vec3(sampledSH0123.rgb) * (1.0 - fOddOffset) + vec3(sampledSH0123.ba, sampledSH4567.r) * fOddOffset;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg) * (1.0 - fOddOffset) + vec3(sampledSH4567.gba) * fOddOffset;
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r) * (1.0 - fOddOffset) + vec3(sampledSH891011.rgb) * fOddOffset;
                    } else {
                        vec2 sampledSH01R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        sh1 = vec3(sampledSH01R.rg, sampledSH23R.r);
                        sh2 = vec3(sampledSH01G.rg, sampledSH23G.r);
                        sh3 = vec3(sampledSH01B.rg, sampledSH23B.r);
                    }
                `:n===2&&(o+=`
                    vec4 sampledSH0123;
                    vec4 sampledSH4567;
                    vec4 sampledSH891011;

                    vec4 sampledSH0123R;
                    vec4 sampledSH0123G;
                    vec4 sampledSH0123B;

                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        sampledSH0123 = texture(sphericalHarmonicsTexture, getDataUV(6, 0, sphericalHarmonicsTextureSize));
                        sampledSH4567 = texture(sphericalHarmonicsTexture, getDataUV(6, 1, sphericalHarmonicsTextureSize));
                        sampledSH891011 = texture(sphericalHarmonicsTexture, getDataUV(6, 2, sphericalHarmonicsTextureSize));
                        sh1 = sampledSH0123.rgb;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg);
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r);
                    } else {
                        sampledSH0123R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sh1 = vec3(sampledSH0123R.rgb);
                        sh2 = vec3(sampledSH0123G.rgb);
                        sh3 = vec3(sampledSH0123B.rgb);
                    }
                `),o+=`
                    if (sphericalHarmonics8BitMode == 1) {
                        sh1 = sh1 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh2 = sh2 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh3 = sh3 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                    }
                    float x = worldViewDir.x;
                    float y = worldViewDir.y;
                    float z = worldViewDir.z;
                    vColor.rgb += SH_C1 * (-sh1 * y + sh2 * z - sh3 * x);
            `,n>=2&&(o+=`
                    if (sphericalHarmonicsDegree >= 2) {
                        float xx = x * x;
                        float yy = y * y;
                        float zz = z * z;
                        float xy = x * y;
                        float yz = y * z;
                        float xz = x * z;
                `,n===2&&(o+=`
                        if (sphericalHarmonicsMultiTextureMode == 0) {
                            vec4 sampledSH12131415 = texture(sphericalHarmonicsTexture, getDataUV(6, 3, sphericalHarmonicsTextureSize));
                            vec4 sampledSH16171819 = texture(sphericalHarmonicsTexture, getDataUV(6, 4, sphericalHarmonicsTextureSize));
                            vec4 sampledSH20212223 = texture(sphericalHarmonicsTexture, getDataUV(6, 5, sphericalHarmonicsTextureSize));
                            sh4 = sampledSH891011.gba;
                            sh5 = sampledSH12131415.rgb;
                            sh6 = vec3(sampledSH12131415.a, sampledSH16171819.rg);
                            sh7 = vec3(sampledSH16171819.ba, sampledSH20212223.r);
                            sh8 = sampledSH20212223.gba;
                        } else {
                            vec4 sampledSH4567R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            sh4 = vec3(sampledSH0123R.a, sampledSH4567R.rg);
                            sh5 = vec3(sampledSH4567R.ba, sampledSH0123G.a);
                            sh6 = vec3(sampledSH4567G.rgb);
                            sh7 = vec3(sampledSH4567G.a, sampledSH0123B.a, sampledSH4567B.r);
                            sh8 = vec3(sampledSH4567B.gba);
                        }
                    `),o+=`
                        if (sphericalHarmonics8BitMode == 1) {
                            sh4 = sh4 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh5 = sh5 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh6 = sh6 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh7 = sh7 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh8 = sh8 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        }

                        vColor.rgb +=
                            (SH_C2[0] * xy) * sh4 +
                            (SH_C2[1] * yz) * sh5 +
                            (SH_C2[2] * (2.0 * zz - xx - yy)) * sh6 +
                            (SH_C2[3] * xz) * sh7 +
                            (SH_C2[4] * (xx - yy)) * sh8;
                    }
                `),o+=`

                vColor.rgb = clamp(vColor.rgb, vec3(0.), vec3(1.));

            }

            `),o}static getVertexShaderFadeIn(){return`
            if (fadeInComplete == 0) {
                float opacityAdjust = 1.0;
                float centerDist = length(splatCenter - sceneCenter);
                float renderTime = max(currentTime - firstRenderTime, 0.0);

                float fadeDistance = 0.75;
                float distanceLoadFadeInFactor = step(visibleRegionFadeStartRadius, centerDist);
                distanceLoadFadeInFactor = (1.0 - distanceLoadFadeInFactor) +
                                        (1.0 - clamp((centerDist - visibleRegionFadeStartRadius) / fadeDistance, 0.0, 1.0)) *
                                        distanceLoadFadeInFactor;
                opacityAdjust *= distanceLoadFadeInFactor;
                vColor.a *= opacityAdjust;
            }
        `}static getUniforms(e=!1,t=!1,n=0,s=1,o=!1){const l={sceneCenter:{type:"v3",value:new z},fadeInComplete:{type:"i",value:0},orthographicMode:{type:"i",value:0},visibleRegionFadeStartRadius:{type:"f",value:0},visibleRegionRadius:{type:"f",value:0},currentTime:{type:"f",value:0},firstRenderTime:{type:"f",value:0},centersColorsTexture:{type:"t",value:null},sphericalHarmonicsTexture:{type:"t",value:null},sphericalHarmonicsTextureR:{type:"t",value:null},sphericalHarmonicsTextureG:{type:"t",value:null},sphericalHarmonicsTextureB:{type:"t",value:null},sphericalHarmonics8BitCompressionRangeMin:{type:"f",value:[]},sphericalHarmonics8BitCompressionRangeMax:{type:"f",value:[]},focal:{type:"v2",value:new qe},orthoZoom:{type:"f",value:1},inverseFocalAdjustment:{type:"f",value:1},viewport:{type:"v2",value:new qe},basisViewport:{type:"v2",value:new qe},debugColor:{type:"v3",value:new Dt},centersColorsTextureSize:{type:"v2",value:new qe(1024,1024)},sphericalHarmonicsDegree:{type:"i",value:n},sphericalHarmonicsTextureSize:{type:"v2",value:new qe(1024,1024)},sphericalHarmonics8BitMode:{type:"i",value:0},sphericalHarmonicsMultiTextureMode:{type:"i",value:0},splatScale:{type:"f",value:s},pointCloudModeEnabled:{type:"i",value:o?1:0},sceneIndexesTexture:{type:"t",value:null},sceneIndexesTextureSize:{type:"v2",value:new qe(1024,1024)},sceneCount:{type:"i",value:1}};for(let u=0;u<wt.MaxScenes;u++)l.sphericalHarmonics8BitCompressionRangeMin.value.push(-3/2),l.sphericalHarmonics8BitCompressionRangeMax.value.push(wt.SphericalHarmonics8BitCompressionRange/2);if(t){const u=[];for(let f=0;f<wt.MaxScenes;f++)u.push(1);l.sceneOpacity={type:"f",value:u};const d=[];for(let f=0;f<wt.MaxScenes;f++)d.push(1);l.sceneVisibility={type:"i",value:d}}if(e){const u=[];for(let d=0;d<wt.MaxScenes;d++)u.push(new gt);l.transforms={type:"mat4",value:u}}return l}}class eu{static build(e=!1,t=!1,n=!1,s=2048,o=1,l=!1,u=0,d=.3){let p=Ha.buildVertexShaderBase(e,t,u,`
            uniform vec2 covariancesTextureSize;
            uniform highp sampler2D covariancesTexture;
            uniform highp usampler2D covariancesTextureHalfFloat;
            uniform int covariancesAreHalfFloat;

            void fromCovarianceHalfFloatV4(uvec4 val, out vec4 first, out vec4 second) {
                vec2 r = unpackHalf2x16(val.r);
                vec2 g = unpackHalf2x16(val.g);
                vec2 b = unpackHalf2x16(val.b);

                first = vec4(r.x, r.y, g.x, g.y);
                second = vec4(b.x, b.y, 0.0, 0.0);
            }
        `);p+=eu.buildVertexShaderProjection(n,t,s,d);const g=eu.buildFragmentShader(),m=Ha.getUniforms(e,t,u,o,l);return m.covariancesTextureSize={type:"v2",value:new qe(1024,1024)},m.covariancesTexture={type:"t",value:null},m.covariancesTextureHalfFloat={type:"t",value:null},m.covariancesAreHalfFloat={type:"i",value:0},new ti({uniforms:m,vertexShader:p,fragmentShader:g,transparent:!0,alphaTest:1,blending:us,depthTest:!0,depthWrite:!1,side:Li})}static buildVertexShaderProjection(e,t,n,s){let o=`

            vec4 sampledCovarianceA;
            vec4 sampledCovarianceB;
            vec3 cov3D_M11_M12_M13;
            vec3 cov3D_M22_M23_M33;
            if (covariancesAreHalfFloat == 0) {
                sampledCovarianceA = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset,
                                                                            covariancesTextureSize));
                sampledCovarianceB = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset + uint(1),
                                                                            covariancesTextureSize));

                cov3D_M11_M12_M13 = vec3(sampledCovarianceA.rgb) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceA.ba, sampledCovarianceB.r) * fOddOffset;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceB.gba) * fOddOffset;
            } else {
                uvec4 sampledCovarianceU = texture(covariancesTextureHalfFloat, getDataUV(1, 0, covariancesTextureSize));
                fromCovarianceHalfFloatV4(sampledCovarianceU, sampledCovarianceA, sampledCovarianceB);
                cov3D_M11_M12_M13 = sampledCovarianceA.rgb;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg);
            }
        
            // Construct the 3D covariance matrix
            mat3 Vrk = mat3(
                cov3D_M11_M12_M13.x, cov3D_M11_M12_M13.y, cov3D_M11_M12_M13.z,
                cov3D_M11_M12_M13.y, cov3D_M22_M23_M33.x, cov3D_M22_M23_M33.y,
                cov3D_M11_M12_M13.z, cov3D_M22_M23_M33.y, cov3D_M22_M23_M33.z
            );

            mat3 J;
            if (orthographicMode == 1) {
                // Since the projection is linear, we don't need an approximation
                J = transpose(mat3(orthoZoom, 0.0, 0.0,
                                0.0, orthoZoom, 0.0,
                                0.0, 0.0, 0.0));
            } else {
                // Construct the Jacobian of the affine approximation of the projection matrix. It will be used to transform the
                // 3D covariance matrix instead of using the actual projection matrix because that transformation would
                // require a non-linear component (perspective division) which would yield a non-gaussian result.
                float s = 1.0 / (viewCenter.z * viewCenter.z);
                J = mat3(
                    focal.x / viewCenter.z, 0., -(focal.x * viewCenter.x) * s,
                    0., focal.y / viewCenter.z, -(focal.y * viewCenter.y) * s,
                    0., 0., 0.
                );
            }

            // Concatenate the projection approximation with the model-view transformation
            mat3 W = transpose(mat3(transformModelViewMatrix));
            mat3 T = W * J;

            // Transform the 3D covariance matrix (Vrk) to compute the 2D covariance matrix
            mat3 cov2Dm = transpose(T) * Vrk * T;
            `;return e?o+=`
                float detOrig = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                cov2Dm[0][0] += ${s};
                cov2Dm[1][1] += ${s};
                float detBlur = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                vColor.a *= sqrt(max(detOrig / detBlur, 0.0));
                if (vColor.a < minAlpha) return;
            `:o+=`
                cov2Dm[0][0] += ${s};
                cov2Dm[1][1] += ${s};
            `,o+=`

            // We are interested in the upper-left 2x2 portion of the projected 3D covariance matrix because
            // we only care about the X and Y values. We want the X-diagonal, cov2Dm[0][0],
            // the Y-diagonal, cov2Dm[1][1], and the correlation between the two cov2Dm[0][1]. We don't
            // need cov2Dm[1][0] because it is a symetric matrix.
            vec3 cov2Dv = vec3(cov2Dm[0][0], cov2Dm[0][1], cov2Dm[1][1]);

            // We now need to solve for the eigen-values and eigen vectors of the 2D covariance matrix
            // so that we can determine the 2D basis for the splat. This is done using the method described
            // here: https://people.math.harvard.edu/~knill/teaching/math21b2004/exhibits/2dmatrices/index.html
            // After calculating the eigen-values and eigen-vectors, we calculate the basis for rendering the splat
            // by normalizing the eigen-vectors and then multiplying them by (sqrt(8) * sqrt(eigen-value)), which is
            // equal to scaling them by sqrt(8) standard deviations.
            //
            // This is a different approach than in the original work at INRIA. In that work they compute the
            // max extents of the projected splat in screen space to form a screen-space aligned bounding rectangle
            // which forms the geometry that is actually rasterized. The dimensions of that bounding box are 3.0
            // times the square root of the maximum eigen-value, or 3 standard deviations. They then use the inverse
            // 2D covariance matrix (called 'conic') in the CUDA rendering thread to determine fragment opacity by
            // calculating the full gaussian: exp(-0.5 * (X - mean) * conic * (X - mean)) * splat opacity
            float a = cov2Dv.x;
            float d = cov2Dv.z;
            float b = cov2Dv.y;
            float D = a * d - b * b;
            float trace = a + d;
            float traceOver2 = 0.5 * trace;
            float term2 = sqrt(max(0.1f, traceOver2 * traceOver2 - D));
            float eigenValue1 = traceOver2 + term2;
            float eigenValue2 = traceOver2 - term2;

            if (pointCloudModeEnabled == 1) {
                eigenValue1 = eigenValue2 = 0.2;
            }

            if (eigenValue2 <= 0.0) return;

            vec2 eigenVector1 = normalize(vec2(b, eigenValue1 - a));
            // since the eigen vectors are orthogonal, we derive the second one from the first
            vec2 eigenVector2 = vec2(eigenVector1.y, -eigenVector1.x);

            // We use sqrt(8) standard deviations instead of 3 to eliminate more of the splat with a very low opacity.
            vec2 basisVector1 = eigenVector1 * splatScale * min(sqrt8 * sqrt(eigenValue1), ${parseInt(n)}.0);
            vec2 basisVector2 = eigenVector2 * splatScale * min(sqrt8 * sqrt(eigenValue2), ${parseInt(n)}.0);
            `,t&&(o+=`
                vColor.a *= splatOpacityFromScene;
            `),o+=`
            vec2 ndcOffset = vec2(vPosition.x * basisVector1 + vPosition.y * basisVector2) *
                             basisViewport * 2.0 * inverseFocalAdjustment;

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            // Scale the position data we send to the fragment shader
            vPosition *= sqrt8;
        `,o+=Ha.getVertexShaderFadeIn(),o+="}",o}static buildFragmentShader(){let e=`
            precision highp float;
            #include <common>
 
            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
        `;return e+=`
            void main () {
                // Compute the positional squared distance from the center of the splat to the current fragment.
                float A = dot(vPosition, vPosition);
                // Since the positional data in vPosition has been scaled by sqrt(8), the squared result will be
                // scaled by a factor of 8. If the squared result is larger than 8, it means it is outside the ellipse
                // defined by the rectangle formed by vPosition. It also means it's farther
                // away than sqrt(8) standard deviations from the mean.
                if (A > 8.0) discard;
                vec3 color = vColor.rgb;

                // Since the rendered splat is scaled by sqrt(8), the inverse covariance matrix that is part of
                // the gaussian formula becomes the identity matrix. We're then left with (X - mean) * (X - mean),
                // and since 'mean' is zero, we have X * X, which is the same as A:
                float opacity = exp(-0.5 * A) * vColor.a;

                gl_FragColor = vec4(color.rgb, opacity);
            }
        `,e}}class tu{static build(e=!1,t=!1,n=1,s=!1,o=0){let u=Ha.buildVertexShaderBase(e,t,o,`
            uniform vec2 scaleRotationsTextureSize;
            uniform highp sampler2D scaleRotationsTexture;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;
        `);u+=tu.buildVertexShaderProjection();const d=tu.buildFragmentShader(),f=Ha.getUniforms(e,t,o,n,s);return f.scaleRotationsTexture={type:"t",value:null},f.scaleRotationsTextureSize={type:"v2",value:new qe(1024,1024)},new ti({uniforms:f,vertexShader:u,fragmentShader:d,transparent:!0,alphaTest:1,blending:us,depthTest:!0,depthWrite:!1,side:Li})}static buildVertexShaderProjection(){let e=`

            vec4 scaleRotationA = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset, scaleRotationsTextureSize));
            vec4 scaleRotationB = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset + uint(1), scaleRotationsTextureSize));

            vec3 scaleRotation123 = vec3(scaleRotationA.rgb) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationA.ba, scaleRotationB.r) * fOddOffset;
            vec3 scaleRotation456 = vec3(scaleRotationA.a, scaleRotationB.rg) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationB.gba) * fOddOffset;

            float missingW = sqrt(1.0 - scaleRotation456.x * scaleRotation456.x - scaleRotation456.y *
                                    scaleRotation456.y - scaleRotation456.z * scaleRotation456.z);
            mat3 R = quaternionToRotationMatrix(scaleRotation456.r, scaleRotation456.g, scaleRotation456.b, missingW);
            mat3 S = mat3(scaleRotation123.r, 0.0, 0.0,
                            0.0, scaleRotation123.g, 0.0,
                            0.0, 0.0, scaleRotation123.b);
            
            mat3 L = R * S;

            mat3x4 splat2World = mat3x4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

            mat4 world2ndc = transpose(projectionMatrix * transformModelViewMatrix);

            mat3x4 ndc2pix = mat3x4(vec4(viewport.x / 2.0, 0.0, 0.0, (viewport.x - 1.0) / 2.0),
                                    vec4(0.0, viewport.y / 2.0, 0.0, (viewport.y - 1.0) / 2.0),
                                    vec4(0.0, 0.0, 0.0, 1.0));

            mat3 T = transpose(splat2World) * world2ndc * ndc2pix;
            vec3 normal = vec3(viewMatrix * vec4(L[0][2], L[1][2], L[2][2], 0.0));
        `;return e+=`

                mat4 splat2World4 = mat4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(L[2], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

                mat4 Tt = transpose(transpose(splat2World4) * world2ndc);

                vec4 tempPoint1 = Tt * vec4(1.0, 0.0, 0.0, 1.0);
                tempPoint1 /= tempPoint1.w;

                vec4 tempPoint2 = Tt * vec4(0.0, 1.0, 0.0, 1.0);
                tempPoint2 /= tempPoint2.w;

                vec4 center = Tt * vec4(0.0, 0.0, 0.0, 1.0);
                center /= center.w;

                vec2 basisVector1 = tempPoint1.xy - center.xy;
                vec2 basisVector2 = tempPoint2.xy - center.xy;

                vec2 basisVector1Screen = basisVector1 * 0.5 * viewport;
                vec2 basisVector2Screen = basisVector2 * 0.5 * viewport;

                const float minPix = 1.;
                if (length(basisVector1Screen) < minPix || length(basisVector2Screen) < minPix) {
                    
            vec3 T0 = vec3(T[0][0], T[0][1], T[0][2]);
            vec3 T1 = vec3(T[1][0], T[1][1], T[1][2]);
            vec3 T3 = vec3(T[2][0], T[2][1], T[2][2]);

            vec3 tempPoint = vec3(1.0, 1.0, -1.0);
            float distance = (T3.x * T3.x * tempPoint.x) + (T3.y * T3.y * tempPoint.y) + (T3.z * T3.z * tempPoint.z);
            vec3 f = (1.0 / distance) * tempPoint;
            if (abs(distance) < 0.00001) return;

            float pointImageX = (T0.x * T3.x * f.x) + (T0.y * T3.y * f.y) + (T0.z * T3.z * f.z);
            float pointImageY = (T1.x * T3.x * f.x) + (T1.y * T3.y * f.y) + (T1.z * T3.z * f.z);
            vec2 pointImage = vec2(pointImageX, pointImageY);

            float tempX = (T0.x * T0.x * f.x) + (T0.y * T0.y * f.y) + (T0.z * T0.z * f.z);
            float tempY = (T1.x * T1.x * f.x) + (T1.y * T1.y * f.y) + (T1.z * T1.z * f.z);
            vec2 temp = vec2(tempX, tempY);

            vec2 halfExtend = pointImage * pointImage - temp;
            vec2 extent = sqrt(max(vec2(0.0001), halfExtend));
            float radius = max(extent.x, extent.y);

            vec2 ndcOffset = ((position.xy * radius * 3.0) * basisViewport * 2.0);

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            vT = T;
            vQuadCenter = pointImage;
            vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
        
                } else {
                    vec2 ndcOffset = vec2(position.x * basisVector1 + position.y * basisVector2) * 3.0 * inverseFocalAdjustment;
                    vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
                    gl_Position = quadPos;

                    vT = T;
                    vQuadCenter = center.xy;
                    vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
                }
            `,e+=Ha.getVertexShaderFadeIn(),e+="}",e}static buildFragmentShader(){return`
            precision highp float;
            #include <common>

            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;

            void main () {

                const float FilterInvSquare = 2.0;
                const float near_n = 0.2;
                const float T = 1.0;

                vec2 xy = vQuadCenter;
                vec3 Tu = vT[0];
                vec3 Tv = vT[1];
                vec3 Tw = vT[2];
                vec3 k = vFragCoord.x * Tw - Tu;
                vec3 l = vFragCoord.y * Tw - Tv;
                vec3 p = cross(k, l);
                if (p.z == 0.0) discard;
                vec2 s = vec2(p.x / p.z, p.y / p.z);
                float rho3d = (s.x * s.x + s.y * s.y); 
                vec2 d = vec2(xy.x - vFragCoord.x, xy.y - vFragCoord.y);
                float rho2d = FilterInvSquare * (d.x * d.x + d.y * d.y); 

                // compute intersection and depth
                float rho = min(rho3d, rho2d);
                float depth = (rho3d <= rho2d) ? (s.x * Tw.x + s.y * Tw.y) + Tw.z : Tw.z; 
                if (depth < near_n) discard;
                //  vec4 nor_o = collected_normal_opacity[j];
                //  float normal[3] = {nor_o.x, nor_o.y, nor_o.z};
                float opa = vColor.a;

                float power = -0.5f * rho;
                if (power > 0.0f) discard;

                // Eq. (2) from 3D Gaussian splatting paper.
                // Obtain alpha by multiplying with Gaussian opacity
                // and its exponential falloff from mean.
                // Avoid numerical instabilities (see paper appendix). 
                float alpha = min(0.99f, opa * exp(power));
                if (alpha < 1.0f / 255.0f) discard;
                float test_T = T * (1.0 - alpha);
                if (test_T < 0.0001)discard;

                float w = alpha * T;
                gl_FragColor = vec4(vColor.rgb, w);
            }
        `}}class L1{static build(e){const t=new pi;t.setIndex([0,1,2,0,2,3]);const n=new Float32Array(12),s=new Ni(n,3);t.setAttribute("position",s),s.setXYZ(0,-1,-1,0),s.setXYZ(1,-1,1,0),s.setXYZ(2,1,1,0),s.setXYZ(3,1,-1,0),s.needsUpdate=!0;const o=new by().copy(t),l=new Uint32Array(e),u=new gy(l,1,!1);return u.setUsage(VA),o.setAttribute("splatIndex",u),o.instanceCount=0,o}}class B1 extends En{constructor(e,t=new z,n=new en,s=new z(1,1,1),o=1,l=1,u=!0){super(),this.splatBuffer=e,this.position.copy(t),this.quaternion.copy(n),this.scale.copy(s),this.transform=new gt,this.minimumAlpha=o,this.opacity=l,this.visible=u}copyTransformData(e){this.position.copy(e.position),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.transform.copy(e.transform)}updateTransform(e){e?(this.matrixWorldAutoUpdate&&this.updateWorldMatrix(!0,!1),this.transform.copy(this.matrixWorld)):(this.matrixAutoUpdate&&this.updateMatrix(),this.transform.copy(this.matrix))}}const ru=class ru{constructor(e,t,n,s){this.min=new z().copy(e),this.max=new z().copy(t),this.boundingBox=new sr(this.min,this.max),this.center=new z().copy(this.max).sub(this.min).multiplyScalar(.5).add(this.min),this.depth=n,this.children=[],this.data=null,this.id=s||ru.idGen++}};Fe(ru,"idGen",0);let Bh=ru;class qo{constructor(e,t){this.maxDepth=e,this.maxCentersPerNode=t,this.sceneDimensions=new z,this.sceneMin=new z,this.sceneMax=new z,this.rootNode=null,this.nodesWithIndexes=[],this.splatMesh=null}static convertWorkerSubTreeNode(e){const t=new z().fromArray(e.min),n=new z().fromArray(e.max),s=new Bh(t,n,e.depth,e.id);if(e.data.indexes){s.data={indexes:[]};for(let o of e.data.indexes)s.data.indexes.push(o)}if(e.children)for(let o of e.children)s.children.push(qo.convertWorkerSubTreeNode(o));return s}static convertWorkerSubTree(e,t){const n=new qo(e.maxDepth,e.maxCentersPerNode);n.sceneMin=new z().fromArray(e.sceneMin),n.sceneMax=new z().fromArray(e.sceneMax),n.splatMesh=t,n.rootNode=qo.convertWorkerSubTreeNode(e.rootNode);const s=(o,l)=>{o.children.length===0&&l(o);for(let u of o.children)s(u,l)};return n.nodesWithIndexes=[],s(n.rootNode,o=>{o.data&&o.data.indexes&&o.data.indexes.length>0&&n.nodesWithIndexes.push(o)}),n}}function N1(a){let e=0;class t{constructor(d,f){this.min=[d[0],d[1],d[2]],this.max=[f[0],f[1],f[2]]}containsPoint(d){return d[0]>=this.min[0]&&d[0]<=this.max[0]&&d[1]>=this.min[1]&&d[1]<=this.max[1]&&d[2]>=this.min[2]&&d[2]<=this.max[2]}}class n{constructor(d,f){this.maxDepth=d,this.maxCentersPerNode=f,this.sceneDimensions=[],this.sceneMin=[],this.sceneMax=[],this.rootNode=null,this.addedIndexes={},this.nodesWithIndexes=[],this.splatMesh=null,this.disposed=!1}}class s{constructor(d,f,p,g){this.min=[d[0],d[1],d[2]],this.max=[f[0],f[1],f[2]],this.center=[(f[0]-d[0])*.5+d[0],(f[1]-d[1])*.5+d[1],(f[2]-d[2])*.5+d[2]],this.depth=p,this.children=[],this.data=null,this.id=g||e++}}processSplatTreeNode=function(u,d,f,p){const g=d.data.indexes.length;if(g<u.maxCentersPerNode||d.depth>u.maxDepth){const T=[];for(let P=0;P<d.data.indexes.length;P++)u.addedIndexes[d.data.indexes[P]]||(T.push(d.data.indexes[P]),u.addedIndexes[d.data.indexes[P]]=!0);d.data.indexes=T,d.data.indexes.sort((P,C)=>P>C?1:-1),u.nodesWithIndexes.push(d);return}const m=[d.max[0]-d.min[0],d.max[1]-d.min[1],d.max[2]-d.min[2]],x=[m[0]*.5,m[1]*.5,m[2]*.5],y=[d.min[0]+x[0],d.min[1]+x[1],d.min[2]+x[2]],M=[new t([y[0]-x[0],y[1],y[2]-x[2]],[y[0],y[1]+x[1],y[2]]),new t([y[0],y[1],y[2]-x[2]],[y[0]+x[0],y[1]+x[1],y[2]]),new t([y[0],y[1],y[2]],[y[0]+x[0],y[1]+x[1],y[2]+x[2]]),new t([y[0]-x[0],y[1],y[2]],[y[0],y[1]+x[1],y[2]+x[2]]),new t([y[0]-x[0],y[1]-x[1],y[2]-x[2]],[y[0],y[1],y[2]]),new t([y[0],y[1]-x[1],y[2]-x[2]],[y[0]+x[0],y[1],y[2]]),new t([y[0],y[1]-x[1],y[2]],[y[0]+x[0],y[1],y[2]+x[2]]),new t([y[0]-x[0],y[1]-x[1],y[2]],[y[0],y[1],y[2]+x[2]])],S=[];for(let T=0;T<M.length;T++)S[T]=[];const A=[0,0,0];for(let T=0;T<g;T++){const P=d.data.indexes[T],C=f[P];A[0]=p[C],A[1]=p[C+1],A[2]=p[C+2];for(let b=0;b<M.length;b++)M[b].containsPoint(A)&&S[b].push(P)}for(let T=0;T<M.length;T++){const P=new s(M[T].min,M[T].max,d.depth+1);P.data={indexes:S[T]},d.children.push(P)}d.data={};for(let T of d.children)processSplatTreeNode(u,T,f,p)};const o=(u,d,f)=>{const p=[0,0,0],g=[0,0,0],m=[],x=Math.floor(u.length/4);for(let M=0;M<x;M++){const S=M*4,A=u[S],T=u[S+1],P=u[S+2],C=Math.round(u[S+3]);(M===0||A<p[0])&&(p[0]=A),(M===0||A>g[0])&&(g[0]=A),(M===0||T<p[1])&&(p[1]=T),(M===0||T>g[1])&&(g[1]=T),(M===0||P<p[2])&&(p[2]=P),(M===0||P>g[2])&&(g[2]=P),m.push(C)}const y=new n(d,f);return y.sceneMin=p,y.sceneMax=g,y.rootNode=new s(y.sceneMin,y.sceneMax,0),y.rootNode.data={indexes:m},y};function l(u,d,f){const p=[];for(let m of u){const x=Math.floor(m.length/4);for(let y=0;y<x;y++){const M=y*4,S=Math.round(m[M+3]);p[S]=M}}const g=[];for(let m of u){const x=o(m,d,f);g.push(x),processSplatTreeNode(x,x.rootNode,p,m)}a.postMessage({subTrees:g})}a.onmessage=u=>{u.data.process&&l(u.data.process.centers,u.data.process.maxDepth,u.data.process.maxCentersPerNode)}}function U1(a,e,t,n,s){a.postMessage({process:{centers:e,maxDepth:n,maxCentersPerNode:s}},t)}function O1(){return new Worker(URL.createObjectURL(new Blob(["(",N1.toString(),")(self)"],{type:"application/javascript"})))}class k1{constructor(e,t){Fe(this,"processSplatMesh",function(e,t=()=>!0,n,s){this.splatTreeWorker||(this.splatTreeWorker=O1()),this.splatMesh=e,this.subTrees=[];const o=new z,l=(u,d)=>{const f=new Float32Array(d*4);let p=0;for(let g=0;g<d;g++){const m=g+u;if(t(m)){e.getSplatCenter(m,o);const x=p*4;f[x]=o.x,f[x+1]=o.y,f[x+2]=o.z,f[x+3]=m,p++}}return f};return new Promise(u=>{const d=()=>this.disposed?(this.diposeSplatTreeWorker(),u(),!0):!1;n&&n(!1),_i(()=>{if(d())return;const f=[];if(e.dynamicMode){let p=0;for(let g=0;g<e.scenes.length;g++){const x=e.getScene(g).splatBuffer.getSplatCount(),y=l(p,x);f.push(y),p+=x}}else{const p=l(0,e.getSplatCount());f.push(p)}this.splatTreeWorker.onmessage=p=>{d()||p.data.subTrees&&(s&&s(!1),_i(()=>{if(!d()){for(let g of p.data.subTrees){const m=qo.convertWorkerSubTree(g,e);this.subTrees.push(m)}this.diposeSplatTreeWorker(),s&&s(!0),_i(()=>{u()})}}))},_i(()=>{if(d())return;n&&n(!0);const p=f.map(g=>g.buffer);U1(this.splatTreeWorker,f,p,this.maxDepth,this.maxCentersPerNode)})})})});this.maxDepth=e,this.maxCentersPerNode=t,this.subTrees=[],this.splatMesh=null}dispose(){this.diposeSplatTreeWorker(),this.disposed=!0}diposeSplatTreeWorker(){this.splatTreeWorker&&this.splatTreeWorker.terminate(),this.splatTreeWorker=null}countLeaves(){let e=0;return this.visitLeaves(()=>{e++}),e}visitLeaves(e){const t=(n,s)=>{n.children.length===0&&s(n);for(let o of n.children)t(o,s)};for(let n of this.subTrees)t(n.rootNode,e)}}function z1(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=a.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function H1(a,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(R){if(R==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext";let u=t.precision!==void 0?t.precision:"highp";const d=o(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const f=l||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,g=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),m=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),M=a.getParameter(a.MAX_VERTEX_ATTRIBS),S=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),A=a.getParameter(a.MAX_VARYING_VECTORS),T=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,C=l||e.has("OES_texture_float"),b=P&&C,I=l?a.getParameter(a.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:f,getMaxAnisotropy:s,getMaxPrecision:o,precision:u,logarithmicDepthBuffer:p,maxTextures:g,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:T,vertexTextures:P,floatFragmentTextures:C,floatVertexTextures:b,maxSamples:I}}const Va={Default:0,Gradual:1,Instant:2},Ga={None:0,Info:3},fx=new pi,V1=new Ws,Uc=6,G1=4,W1=4,X1=4,Q1=6,q1=8,Lf=4,Bf=4,hx=1,Y1=.012,j1=.003,px=1,mx=16777216;class Bn extends mn{constructor(t=wr.ThreeD,n=!1,s=!1,o=!1,l=1,u=!0,d=!1,f=!1,p=1024,g=Ga.None,m=0,x=1,y=.3){super(fx,V1);Fe(this,"buildSplatTree",function(t=[],n,s){return new Promise(o=>{this.disposeSplatTree(),this.baseSplatTree=new k1(8,1e3);const l=performance.now(),u=new tn;this.baseSplatTree.processSplatMesh(this,d=>{this.getSplatColor(d,u);const f=this.getSceneIndexForSplat(d),p=t[f]||1;return u.w>=p},n,s).then(()=>{const d=performance.now()-l;if(this.logLevel>=Ga.Info&&console.log("SplatTree build: "+d+" ms"),this.disposed)o();else{this.splatTree=this.baseSplatTree,this.baseSplatTree=null;let f=0,p=0,g=0;this.splatTree.visitLeaves(m=>{const x=m.data.indexes.length;x>0&&(p+=x,g++,f++)}),this.logLevel>=Ga.Info&&(console.log(`SplatTree leaves: ${this.splatTree.countLeaves()}`),console.log(`SplatTree leaves with splats:${f}`),p=p/g,console.log(`Avg splat count per node: ${p}`),console.log(`Total splat count: ${this.getSplatCount()}`)),o()}})})});Fe(this,"updateUniforms",(function(){const t=new qe;return function(n,s,o,l,u,d){if(this.getSplatCount()>0){if(t.set(n.x*this.devicePixelRatio,n.y*this.devicePixelRatio),this.material.uniforms.viewport.value.copy(t),this.material.uniforms.basisViewport.value.set(1/t.x,1/t.y),this.material.uniforms.focal.value.set(s,o),this.material.uniforms.orthographicMode.value=l?1:0,this.material.uniforms.orthoZoom.value=u,this.material.uniforms.inverseFocalAdjustment.value=d,this.dynamicMode)for(let p=0;p<this.scenes.length;p++)this.material.uniforms.transforms.value[p].copy(this.getScene(p).transform);if(this.enableOptionalEffects)for(let p=0;p<this.scenes.length;p++)this.material.uniforms.sceneOpacity.value[p]=an(this.getScene(p).opacity,0,1),this.material.uniforms.sceneVisibility.value[p]=this.getScene(p).visible?1:0,this.material.uniformsNeedUpdate=!0;this.material.uniformsNeedUpdate=!0}}})());Fe(this,"setupDistancesComputationTransformFeedback",(function(){let t;return function(){const n=this.getMaxSplatCount();if(!this.renderer)return;const s=this.lastRenderer!==this.renderer,o=t!==n;if(!s&&!o)return;s?this.disposeDistancesComputationGPUResources():o&&this.disposeDistancesComputationGPUBufferResources();const l=this.renderer.getContext(),u=(x,y,M)=>{const S=x.createShader(y);if(!S)return console.error("Fatal error: gl could not create a shader object."),null;if(x.shaderSource(S,M),x.compileShader(S),!x.getShaderParameter(S,x.COMPILE_STATUS)){let T="unknown";y===x.VERTEX_SHADER?T="vertex shader":y===x.FRAGMENT_SHADER&&(T="fragement shader");const P=x.getShaderInfoLog(S);return console.error("Failed to compile "+T+" with these errors:"+P),x.deleteShader(S),null}return S};let d;this.integerBasedDistancesComputation?(d=`#version 300 es
                in ivec4 center;
                flat out int distance;`,this.dynamicMode?d+=`
                        in uint sceneIndex;
                        uniform ivec4 transforms[${wt.MaxScenes}];
                        void main(void) {
                            ivec4 transform = transforms[sceneIndex];
                            distance = center.x * transform.x + center.y * transform.y + center.z * transform.z + transform.w * center.w;
                        }
                    `:d+=`
                        uniform ivec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `):(d=`#version 300 es
                in vec4 center;
                flat out float distance;`,this.dynamicMode?d+=`
                        in uint sceneIndex;
                        uniform mat4 transforms[${wt.MaxScenes}];
                        void main(void) {
                            vec4 transformedCenter = transforms[sceneIndex] * vec4(center.xyz, 1.0);
                            distance = transformedCenter.z;
                        }
                    `:d+=`
                        uniform vec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `);const f=`#version 300 es
                precision lowp float;
                out vec4 fragColor;
                void main(){}
            `,p=l.getParameter(l.VERTEX_ARRAY_BINDING),g=l.getParameter(l.CURRENT_PROGRAM),m=g?l.getProgramParameter(g,l.DELETE_STATUS):!1;if(s&&(this.distancesTransformFeedback.vao=l.createVertexArray()),l.bindVertexArray(this.distancesTransformFeedback.vao),s){const x=l.createProgram(),y=u(l,l.VERTEX_SHADER,d),M=u(l,l.FRAGMENT_SHADER,f);if(!y||!M)throw new Error("Could not compile shaders for distances computation on GPU.");if(l.attachShader(x,y),l.attachShader(x,M),l.transformFeedbackVaryings(x,["distance"],l.SEPARATE_ATTRIBS),l.linkProgram(x),!l.getProgramParameter(x,l.LINK_STATUS)){const A=l.getProgramInfoLog(x);throw console.error("Fatal error: Failed to link program: "+A),l.deleteProgram(x),l.deleteShader(M),l.deleteShader(y),new Error("Could not link shaders for distances computation on GPU.")}this.distancesTransformFeedback.program=x,this.distancesTransformFeedback.vertexShader=y,this.distancesTransformFeedback.vertexShader=M}if(l.useProgram(this.distancesTransformFeedback.program),this.distancesTransformFeedback.centersLoc=l.getAttribLocation(this.distancesTransformFeedback.program,"center"),this.dynamicMode){this.distancesTransformFeedback.sceneIndexesLoc=l.getAttribLocation(this.distancesTransformFeedback.program,"sceneIndex");for(let x=0;x<this.scenes.length;x++)this.distancesTransformFeedback.transformsLocs[x]=l.getUniformLocation(this.distancesTransformFeedback.program,`transforms[${x}]`)}else this.distancesTransformFeedback.modelViewProjLoc=l.getUniformLocation(this.distancesTransformFeedback.program,"modelViewProj");(s||o)&&(this.distancesTransformFeedback.centersBuffer=l.createBuffer(),l.bindBuffer(l.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),l.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?l.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,l.INT,0,0):l.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,l.FLOAT,!1,0,0),this.dynamicMode&&(this.distancesTransformFeedback.sceneIndexesBuffer=l.createBuffer(),l.bindBuffer(l.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),l.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),l.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,l.UNSIGNED_INT,0,0))),(s||o)&&(this.distancesTransformFeedback.outDistancesBuffer=l.createBuffer()),l.bindBuffer(l.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),l.bufferData(l.ARRAY_BUFFER,n*4,l.STATIC_READ),s&&(this.distancesTransformFeedback.id=l.createTransformFeedback()),l.bindTransformFeedback(l.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),l.bindBufferBase(l.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),g&&m!==!0&&l.useProgram(g),p&&l.bindVertexArray(p),this.lastRenderer=this.renderer,t=n}})());Fe(this,"fillTransformsArray",(function(){const t=[];return function(n){t.length!==n.length&&(t.length=n.length);for(let s=0;s<this.scenes.length;s++){const l=this.getScene(s).transform.elements;for(let u=0;u<16;u++)t[s*16+u]=l[u]}n.set(t)}})());Fe(this,"computeDistancesOnGPU",(function(){const t=new gt;return function(n,s){if(!this.renderer)return;const o=this.renderer.getContext(),l=o.getParameter(o.VERTEX_ARRAY_BINDING),u=o.getParameter(o.CURRENT_PROGRAM),d=u?o.getProgramParameter(u,o.DELETE_STATUS):!1;if(o.bindVertexArray(this.distancesTransformFeedback.vao),o.useProgram(this.distancesTransformFeedback.program),o.enable(o.RASTERIZER_DISCARD),this.dynamicMode)for(let g=0;g<this.scenes.length;g++)if(t.copy(this.getScene(g).transform),t.premultiply(n),this.integerBasedDistancesComputation){const m=Bn.getIntegerMatrixArray(t),x=[m[2],m[6],m[10],m[14]];o.uniform4i(this.distancesTransformFeedback.transformsLocs[g],x[0],x[1],x[2],x[3])}else o.uniformMatrix4fv(this.distancesTransformFeedback.transformsLocs[g],!1,t.elements);else if(this.integerBasedDistancesComputation){const g=Bn.getIntegerMatrixArray(n),m=[g[2],g[6],g[10]];o.uniform3i(this.distancesTransformFeedback.modelViewProjLoc,m[0],m[1],m[2])}else{const g=[n.elements[2],n.elements[6],n.elements[10]];o.uniform3f(this.distancesTransformFeedback.modelViewProjLoc,g[0],g[1],g[2])}o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),o.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?o.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,o.INT,0,0):o.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,o.FLOAT,!1,0,0),this.dynamicMode&&(o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),o.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),o.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,o.UNSIGNED_INT,0,0)),o.bindTransformFeedback(o.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),o.bindBufferBase(o.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),o.beginTransformFeedback(o.POINTS),o.drawArrays(o.POINTS,0,this.getSplatCount()),o.endTransformFeedback(),o.bindBufferBase(o.TRANSFORM_FEEDBACK_BUFFER,0,null),o.bindTransformFeedback(o.TRANSFORM_FEEDBACK,null),o.disable(o.RASTERIZER_DISCARD);const f=o.fenceSync(o.SYNC_GPU_COMMANDS_COMPLETE,0);o.flush();const p=new Promise(g=>{const m=()=>{if(this.disposed)g();else switch(o.clientWaitSync(f,0,0)){case o.TIMEOUT_EXPIRED:return this.computeDistancesOnGPUSyncTimeout=setTimeout(m),this.computeDistancesOnGPUSyncTimeout;case o.WAIT_FAILED:throw new Error("should never get here");default:this.computeDistancesOnGPUSyncTimeout=null,o.deleteSync(f);const S=o.getParameter(o.VERTEX_ARRAY_BINDING);o.bindVertexArray(this.distancesTransformFeedback.vao),o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),o.getBufferSubData(o.ARRAY_BUFFER,0,s),o.bindBuffer(o.ARRAY_BUFFER,null),S&&o.bindVertexArray(S),g()}};this.computeDistancesOnGPUSyncTimeout=setTimeout(m)});return u&&d!==!0&&o.useProgram(u),l&&o.bindVertexArray(l),p}})());Fe(this,"getSplatCenter",(function(){const t={};return function(n,s,o){this.getLocalSplatParameters(n,t,o),t.splatBuffer.getSplatCenter(t.localIndex,s,t.sceneTransform)}})());Fe(this,"getSplatScaleAndRotation",(function(){const t={},n=new z;return function(s,o,l,u){this.getLocalSplatParameters(s,t,u),n.x=void 0,n.y=void 0,n.z=void 0,this.splatRenderMode===wr.TwoD&&(n.z=0),t.splatBuffer.getSplatScaleAndRotation(t.localIndex,o,l,t.sceneTransform,n)}})());Fe(this,"getSplatColor",(function(){const t={};return function(n,s){this.getLocalSplatParameters(n,t),t.splatBuffer.getSplatColor(t.localIndex,s)}})());this.renderer=void 0,this.splatRenderMode=t,this.dynamicMode=n,this.enableOptionalEffects=s,this.halfPrecisionCovariancesOnGPU=o,this.devicePixelRatio=l,this.enableDistancesComputationOnGPU=u,this.integerBasedDistancesComputation=d,this.antialiased=f,this.kernel2DSize=y,this.maxScreenSpaceSplatSize=p,this.logLevel=g,this.sphericalHarmonicsDegree=m,this.minSphericalHarmonicsDegree=0,this.sceneFadeInRateMultiplier=x,this.scenes=[],this.splatTree=null,this.baseSplatTree=null,this.splatDataTextures={},this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new sr,this.calculatedSceneCenter=new z,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!1,this.lastRenderer=null,this.visible=!1}static buildScenes(t,n,s){const o=[];o.length=n.length;for(let l=0;l<n.length;l++){const u=n[l],d=s[l]||{};let f=d.position||[0,0,0],p=d.rotation||[0,0,0,1],g=d.scale||[1,1,1];const m=new z().fromArray(f),x=new en().fromArray(p),y=new z().fromArray(g),M=Bn.createScene(u,m,x,y,d.splatAlphaRemovalThreshold||1,d.opacity,d.visible);t.add(M),o[l]=M}return o}static createScene(t,n,s,o,l,u=1,d=!0){return new B1(t,n,s,o,l,u,d)}static buildSplatIndexMaps(t){const n=[],s=[];let o=0;for(let l=0;l<t.length;l++){const d=t[l].getMaxSplatCount();for(let f=0;f<d;f++)n[o]=f,s[o]=l,o++}return{localSplatIndexMap:n,sceneIndexMap:s}}build(t,n,s=!0,o=!1,l,u,d=!0){this.sceneOptions=n,this.finalBuild=o;const f=Bn.getTotalMaxSplatCountForSplatBuffers(t),p=Bn.buildScenes(this,t,n);if(s)for(let S=0;S<this.scenes.length&&S<p.length;S++){const A=p[S],T=this.getScene(S);A.copyTransformData(T)}this.scenes=p;let g=3;for(let S of t){const A=S.getMinSphericalHarmonicsDegree();A<g&&(g=A)}this.minSphericalHarmonicsDegree=Math.min(g,this.sphericalHarmonicsDegree);let m=!1;if(t.length!==this.lastBuildScenes.length)m=!0;else for(let S=0;S<t.length;S++)if(t[S]!==this.lastBuildScenes[S].splatBuffer){m=!0;break}let x=!0;if((this.scenes.length!==1||this.lastBuildSceneCount!==this.scenes.length||this.lastBuildMaxSplatCount!==f||m)&&(x=!1),!x){this.boundingBox=new sr,d||(this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.firstRenderTime=-1),this.lastBuildScenes=[],this.lastBuildSplatCount=0,this.lastBuildMaxSplatCount=0,this.disposeMeshData(),this.geometry=L1.build(f),this.splatRenderMode===wr.ThreeD?this.material=eu.build(this.dynamicMode,this.enableOptionalEffects,this.antialiased,this.maxScreenSpaceSplatSize,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree,this.kernel2DSize):this.material=tu.build(this.dynamicMode,this.enableOptionalEffects,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree);const S=Bn.buildSplatIndexMaps(t);this.globalSplatIndexToLocalSplatIndexMap=S.localSplatIndexMap,this.globalSplatIndexToSceneIndexMap=S.sceneIndexMap}const y=this.getSplatCount(!0);this.enableDistancesComputationOnGPU&&this.setupDistancesComputationTransformFeedback();const M=this.refreshGPUDataFromSplatBuffers(x);for(let S=0;S<this.scenes.length;S++)this.lastBuildScenes[S]=this.scenes[S];return this.lastBuildSplatCount=y,this.lastBuildMaxSplatCount=this.getMaxSplatCount(),this.lastBuildSceneCount=this.scenes.length,o&&this.scenes.length>0&&this.buildSplatTree(n.map(S=>S.splatAlphaRemovalThreshold||1),l,u).then(()=>{this.onSplatTreeReadyCallback&&this.onSplatTreeReadyCallback(this.splatTree),this.onSplatTreeReadyCallback=null}),this.visible=this.scenes.length>0,M}freeIntermediateSplatData(){const t=n=>{delete n.source.data,delete n.image,n.onUpdate=null};delete this.splatDataTextures.baseData.covariances,delete this.splatDataTextures.baseData.centers,delete this.splatDataTextures.baseData.colors,delete this.splatDataTextures.baseData.sphericalHarmonics,delete this.splatDataTextures.centerColors.data,delete this.splatDataTextures.covariances.data,this.splatDataTextures.sphericalHarmonics&&delete this.splatDataTextures.sphericalHarmonics.data,this.splatDataTextures.sceneIndexes&&delete this.splatDataTextures.sceneIndexes.data,this.splatDataTextures.centerColors.texture.needsUpdate=!0,this.splatDataTextures.centerColors.texture.onUpdate=()=>{t(this.splatDataTextures.centerColors.texture)},this.splatDataTextures.covariances.texture.needsUpdate=!0,this.splatDataTextures.covariances.texture.onUpdate=()=>{t(this.splatDataTextures.covariances.texture)},this.splatDataTextures.sphericalHarmonics&&(this.splatDataTextures.sphericalHarmonics.texture?(this.splatDataTextures.sphericalHarmonics.texture.needsUpdate=!0,this.splatDataTextures.sphericalHarmonics.texture.onUpdate=()=>{t(this.splatDataTextures.sphericalHarmonics.texture)}):this.splatDataTextures.sphericalHarmonics.textures.forEach(n=>{n.needsUpdate=!0,n.onUpdate=()=>{t(n)}})),this.splatDataTextures.sceneIndexes&&(this.splatDataTextures.sceneIndexes.texture.needsUpdate=!0,this.splatDataTextures.sceneIndexes.texture.onUpdate=()=>{t(this.splatDataTextures.sceneIndexes.texture)})}dispose(){this.disposeMeshData(),this.disposeTextures(),this.disposeSplatTree(),this.enableDistancesComputationOnGPU&&(this.computeDistancesOnGPUSyncTimeout&&(clearTimeout(this.computeDistancesOnGPUSyncTimeout),this.computeDistancesOnGPUSyncTimeout=null),this.disposeDistancesComputationGPUResources()),this.scenes=[],this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.renderer=null,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new sr,this.calculatedSceneCenter=new z,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!0,this.lastRenderer=null,this.visible=!1}disposeMeshData(){this.geometry&&this.geometry!==fx&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null)}disposeTextures(){for(let t in this.splatDataTextures)if(this.splatDataTextures.hasOwnProperty(t)){const n=this.splatDataTextures[t];n.texture&&(n.texture.dispose(),n.texture=null)}this.splatDataTextures=null}disposeSplatTree(){this.splatTree&&(this.splatTree.dispose(),this.splatTree=null),this.baseSplatTree&&(this.baseSplatTree.dispose(),this.baseSplatTree=null)}getSplatTree(){return this.splatTree}onSplatTreeReady(t){this.onSplatTreeReadyCallback=t}getDataForDistancesComputation(t,n){const s=this.integerBasedDistancesComputation?this.getIntegerCenters(t,n,!0):this.getFloatCenters(t,n,!0),o=this.getSceneIndexes(t,n);return{centers:s,sceneIndexes:o}}refreshGPUDataFromSplatBuffers(t){const n=this.getSplatCount(!0);this.refreshDataTexturesFromSplatBuffers(t);const s=t?this.lastBuildSplatCount:0,{centers:o,sceneIndexes:l}=this.getDataForDistancesComputation(s,n-1);return this.enableDistancesComputationOnGPU&&this.refreshGPUBuffersForDistancesComputation(o,l,t),{from:s,to:n-1,count:n-s,centers:o,sceneIndexes:l}}refreshGPUBuffersForDistancesComputation(t,n,s=!1){const o=s?this.lastBuildSplatCount:0;this.updateGPUCentersBufferForDistancesComputation(s,t,o),this.updateGPUTransformIndexesBufferForDistancesComputation(s,n,o)}refreshDataTexturesFromSplatBuffers(t){const n=this.getSplatCount(!0),s=this.lastBuildSplatCount,o=n-1;t?this.updateBaseDataFromSplatBuffers(s,o):(this.setupDataTextures(),this.updateBaseDataFromSplatBuffers()),this.updateDataTexturesFromBaseData(s,o),this.updateVisibleRegion(t)}setupDataTextures(){const t=this.getMaxSplatCount(),n=this.getSplatCount(!0);this.disposeTextures();const s=(E,F)=>{const B=new qe(4096,1024);for(;B.x*B.y*E<t*F;)B.y*=2;return B},o=E=>E>=1?Q1:W1,l=E=>{const F=o(E),B=s(F,6);return{elementsPerTexelStored:F,texSize:B}};let u=this.getTargetCovarianceCompressionLevel();const d=0,f=this.getTargetSphericalHarmonicsCompressionLevel();let p,g,m;if(this.splatRenderMode===wr.ThreeD){const E=l(u);E.texSize.x*E.texSize.y>mx&&u===0&&(u=1),p=new Float32Array(t*Uc)}else g=new Float32Array(t*3),m=new Float32Array(t*4);const x=new Float32Array(t*3),y=new Uint8Array(t*4);let M=Float32Array;f===1?M=Uint16Array:f===2&&(M=Uint8Array);const S=za(this.minSphericalHarmonicsDegree),A=this.minSphericalHarmonicsDegree?new M(t*S):void 0,T=s(Bf,4),P=new Uint32Array(T.x*T.y*Bf);Bn.updateCenterColorsPaddedData(0,n-1,x,y,P);const C=new Tr(P,T.x,T.y,Ua,$n);if(C.internalFormat="RGBA32UI",C.needsUpdate=!0,this.material.uniforms.centersColorsTexture.value=C,this.material.uniforms.centersColorsTextureSize.value.copy(T),this.material.uniformsNeedUpdate=!0,this.splatDataTextures={baseData:{covariances:p,scales:g,rotations:m,centers:x,colors:y,sphericalHarmonics:A},centerColors:{data:P,texture:C,size:T}},this.splatRenderMode===wr.ThreeD){const E=l(u),F=E.elementsPerTexelStored,B=E.texSize;let N=u>=1?Uint32Array:Float32Array;const U=u>=1?q1:X1,W=new N(B.x*B.y*U);u===0?W.set(p):Bn.updatePaddedCompressedCovariancesTextureData(p,W,0,0,p.length);let X;if(u>=1)X=new Tr(W,B.x,B.y,Ua,$n),X.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=X;else{X=new Tr(W,B.x,B.y,Zn,Bi),this.material.uniforms.covariancesTexture.value=X;const H=new Tr(new Uint32Array(32),2,2,Ua,$n);H.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=H,H.needsUpdate=!0}X.needsUpdate=!0,this.material.uniforms.covariancesAreHalfFloat.value=u>=1?1:0,this.material.uniforms.covariancesTextureSize.value.copy(B),this.splatDataTextures.covariances={data:W,texture:X,size:B,compressionLevel:u,elementsPerTexelStored:F,elementsPerTexelAllocated:U}}else{const F=s(Lf,6);let B=Float32Array,N=Bi;const U=new B(F.x*F.y*Lf);Bn.updateScaleRotationsPaddedData(0,n-1,g,m,U);const W=new Tr(U,F.x,F.y,Zn,N);W.needsUpdate=!0,this.material.uniforms.scaleRotationsTexture.value=W,this.material.uniforms.scaleRotationsTextureSize.value.copy(F),this.splatDataTextures.scaleRotations={data:U,texture:W,size:F,compressionLevel:d}}if(A){const E=f===2?yi:cr;let F=S;F%2!==0&&F++;const B=4,N=Zn;let U=s(B,F);if(U.x*U.y<=mx){const W=U.x*U.y*B,X=new M(W);for(let j=0;j<n;j++){const q=S*j,Y=F*j;for(let K=0;K<S;K++)X[Y+K]=A[q+K]}const H=new Tr(X,U.x,U.y,N,E);H.needsUpdate=!0,this.material.uniforms.sphericalHarmonicsTexture.value=H,this.splatDataTextures.sphericalHarmonics={componentCount:S,paddedComponentCount:F,data:X,textureCount:1,texture:H,size:U,compressionLevel:f,elementsPerTexel:B}}else{const W=S/3;F=W,F%2!==0&&F++,U=s(B,F);const X=U.x*U.y*B,H=[this.material.uniforms.sphericalHarmonicsTextureR,this.material.uniforms.sphericalHarmonicsTextureG,this.material.uniforms.sphericalHarmonicsTextureB],j=[],q=[];for(let Y=0;Y<3;Y++){const K=new M(X);j.push(K);for(let k=0;k<n;k++){const te=S*k,Me=F*k;if(W>=3){for(let Te=0;Te<3;Te++)K[Me+Te]=A[te+Y*3+Te];if(W>=8)for(let Te=0;Te<5;Te++)K[Me+3+Te]=A[te+9+Y*5+Te]}}const ne=new Tr(K,U.x,U.y,N,E);q.push(ne),ne.needsUpdate=!0,H[Y].value=ne}this.material.uniforms.sphericalHarmonicsMultiTextureMode.value=1,this.splatDataTextures.sphericalHarmonics={componentCount:S,componentCountPerChannel:W,paddedComponentCount:F,data:j,textureCount:3,textures:q,size:U,compressionLevel:f,elementsPerTexel:B}}this.material.uniforms.sphericalHarmonicsTextureSize.value.copy(U),this.material.uniforms.sphericalHarmonics8BitMode.value=f===2?1:0;for(let W=0;W<this.scenes.length;W++){const X=this.scenes[W].splatBuffer;this.material.uniforms.sphericalHarmonics8BitCompressionRangeMin.value[W]=X.minSphericalHarmonicsCoeff,this.material.uniforms.sphericalHarmonics8BitCompressionRangeMax.value[W]=X.maxSphericalHarmonicsCoeff}this.material.uniformsNeedUpdate=!0}const b=s(hx,4),I=new Uint32Array(b.x*b.y*hx);for(let E=0;E<n;E++)I[E]=this.globalSplatIndexToSceneIndexMap[E];const R=new Tr(I,b.x,b.y,au,$n);R.internalFormat="R32UI",R.needsUpdate=!0,this.material.uniforms.sceneIndexesTexture.value=R,this.material.uniforms.sceneIndexesTextureSize.value.copy(b),this.material.uniformsNeedUpdate=!0,this.splatDataTextures.sceneIndexes={data:I,texture:R,size:b},this.material.uniforms.sceneCount.value=this.scenes.length}updateBaseDataFromSplatBuffers(t,n){const s=this.splatDataTextures.covariances,o=s?s.compressionLevel:void 0,l=this.splatDataTextures.scaleRotations,u=l?l.compressionLevel:void 0,d=this.splatDataTextures.sphericalHarmonics,f=d?d.compressionLevel:0;this.fillSplatDataArrays(this.splatDataTextures.baseData.covariances,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,this.splatDataTextures.baseData.sphericalHarmonics,void 0,o,u,f,t,n,t)}updateDataTexturesFromBaseData(t,n){const s=this.splatDataTextures.covariances,o=s?s.compressionLevel:void 0,l=this.splatDataTextures.scaleRotations,u=l?l.compressionLevel:void 0,d=this.splatDataTextures.sphericalHarmonics,f=d?d.compressionLevel:0,p=this.splatDataTextures.centerColors,g=p.data,m=p.texture;Bn.updateCenterColorsPaddedData(t,n,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,g);const x=this.renderer?this.renderer.properties.get(m):null;if(!x||!x.__webglTexture?m.needsUpdate=!0:this.updateDataTexture(g,p.texture,p.size,x,Bf,G1,4,t,n),s){const P=s.texture,C=t*Uc,b=n*Uc;if(o===0)for(let R=C;R<=b;R++){const E=this.splatDataTextures.baseData.covariances[R];s.data[R]=E}else Bn.updatePaddedCompressedCovariancesTextureData(this.splatDataTextures.baseData.covariances,s.data,t*s.elementsPerTexelAllocated,C,b);const I=this.renderer?this.renderer.properties.get(P):null;!I||!I.__webglTexture?P.needsUpdate=!0:o===0?this.updateDataTexture(s.data,s.texture,s.size,I,s.elementsPerTexelStored,Uc,4,t,n):this.updateDataTexture(s.data,s.texture,s.size,I,s.elementsPerTexelAllocated,s.elementsPerTexelAllocated,2,t,n)}if(l){const P=l.data,C=l.texture,b=6,I=u===0?4:2;Bn.updateScaleRotationsPaddedData(t,n,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,P);const R=this.renderer?this.renderer.properties.get(C):null;!R||!R.__webglTexture?C.needsUpdate=!0:this.updateDataTexture(P,l.texture,l.size,R,Lf,b,I,t,n)}const y=this.splatDataTextures.baseData.sphericalHarmonics;if(y){let P=4;f===1?P=2:f===2&&(P=1);const C=(R,E,F,B,N)=>{const U=this.renderer?this.renderer.properties.get(R):null;!U||!U.__webglTexture?R.needsUpdate=!0:this.updateDataTexture(B,R,E,U,F,N,P,t,n)},b=d.componentCount,I=d.paddedComponentCount;if(d.textureCount===1){const R=d.data;for(let E=t;E<=n;E++){const F=b*E,B=I*E;for(let N=0;N<b;N++)R[B+N]=y[F+N]}C(d.texture,d.size,d.elementsPerTexel,R,I)}else{const R=d.componentCountPerChannel;for(let E=0;E<3;E++){const F=d.data[E];for(let B=t;B<=n;B++){const N=b*B,U=I*B;if(R>=3){for(let W=0;W<3;W++)F[U+W]=y[N+E*3+W];if(R>=8)for(let W=0;W<5;W++)F[U+3+W]=y[N+9+E*5+W]}}C(d.textures[E],d.size,d.elementsPerTexel,F,I)}}}const M=this.splatDataTextures.sceneIndexes,S=M.data;for(let P=this.lastBuildSplatCount;P<=n;P++)S[P]=this.globalSplatIndexToSceneIndexMap[P];const A=M.texture,T=this.renderer?this.renderer.properties.get(A):null;!T||!T.__webglTexture?A.needsUpdate=!0:this.updateDataTexture(S,M.texture,M.size,T,1,1,1,this.lastBuildSplatCount,n)}getTargetCovarianceCompressionLevel(){return this.halfPrecisionCovariancesOnGPU?1:0}getTargetSphericalHarmonicsCompressionLevel(){return Math.max(1,this.getMaximumSplatBufferCompressionLevel())}getMaximumSplatBufferCompressionLevel(){let t;for(let n=0;n<this.scenes.length;n++){const o=this.getScene(n).splatBuffer;(n===0||o.compressionLevel>t)&&(t=o.compressionLevel)}return t}getMinimumSplatBufferCompressionLevel(){let t;for(let n=0;n<this.scenes.length;n++){const o=this.getScene(n).splatBuffer;(n===0||o.compressionLevel<t)&&(t=o.compressionLevel)}return t}static computeTextureUpdateRegion(t,n,s,o,l){const u=l/o,d=t*u,f=Math.floor(d/s),p=f*s*o,g=n*u,m=Math.floor(g/s),x=m*s*o+s*o;return{dataStart:p,dataEnd:x,startRow:f,endRow:m}}updateDataTexture(t,n,s,o,l,u,d,f,p){const g=this.renderer.getContext(),m=Bn.computeTextureUpdateRegion(f,p,s.x,l,u),x=m.dataEnd-m.dataStart,y=new t.constructor(t.buffer,m.dataStart*d,x),M=m.endRow-m.startRow+1,S=this.webGLUtils.convert(n.type),A=this.webGLUtils.convert(n.format,n.colorSpace),T=g.getParameter(g.TEXTURE_BINDING_2D);g.bindTexture(g.TEXTURE_2D,o.__webglTexture),g.texSubImage2D(g.TEXTURE_2D,0,0,m.startRow,s.x,M,A,S,y),g.bindTexture(g.TEXTURE_2D,T)}static updatePaddedCompressedCovariancesTextureData(t,n,s,o,l){let u=new DataView(n.buffer),d=s,f=0;for(let p=o;p<=l;p+=2)u.setUint16(d*2,t[p],!0),u.setUint16(d*2+2,t[p+1],!0),d+=2,f++,f>=3&&(d+=2,f=0)}static updateCenterColorsPaddedData(t,n,s,o,l){for(let u=t;u<=n;u++){const d=u*4,f=u*3,p=u*4;l[p]=TT(o,d),l[p+1]=wf(s[f]),l[p+2]=wf(s[f+1]),l[p+3]=wf(s[f+2])}}static updateScaleRotationsPaddedData(t,n,s,o,l){for(let d=t;d<=n;d++){const f=d*3,p=d*4,g=d*6;l[g]=s[f],l[g+1]=s[f+1],l[g+2]=s[f+2],l[g+3]=o[p],l[g+4]=o[p+1],l[g+5]=o[p+2]}}updateVisibleRegion(t){const n=this.getSplatCount(!0),s=new z;if(!t){const l=new z;this.scenes.forEach(u=>{l.add(u.splatBuffer.sceneCenter)}),l.multiplyScalar(1/this.scenes.length),this.calculatedSceneCenter.copy(l),this.material.uniforms.sceneCenter.value.copy(this.calculatedSceneCenter),this.material.uniformsNeedUpdate=!0}const o=t?this.lastBuildSplatCount:0;for(let l=o;l<n;l++){this.getSplatCenter(l,s,!0);const u=s.sub(this.calculatedSceneCenter).length();u>this.maxSplatDistanceFromSceneCenter&&(this.maxSplatDistanceFromSceneCenter=u)}this.maxSplatDistanceFromSceneCenter-this.visibleRegionBufferRadius>px&&(this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter,this.visibleRegionRadius=Math.max(this.visibleRegionBufferRadius-px,0)),this.finalBuild&&(this.visibleRegionRadius=this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter),this.updateVisibleRegionFadeDistance()}updateVisibleRegionFadeDistance(t=Va.Default){const n=Y1*this.sceneFadeInRateMultiplier,s=j1*this.sceneFadeInRateMultiplier,o=this.finalBuild?n:s,l=t===Va.Default?o:s;this.visibleRegionFadeStartRadius=(this.visibleRegionRadius-this.visibleRegionFadeStartRadius)*l+this.visibleRegionFadeStartRadius;const d=(this.visibleRegionBufferRadius>0?this.visibleRegionFadeStartRadius/this.visibleRegionBufferRadius:0)>.99,f=d||t===Va.Instant?1:0;this.material.uniforms.visibleRegionFadeStartRadius.value=this.visibleRegionFadeStartRadius,this.material.uniforms.visibleRegionRadius.value=this.visibleRegionRadius,this.material.uniforms.firstRenderTime.value=this.firstRenderTime,this.material.uniforms.currentTime.value=performance.now(),this.material.uniforms.fadeInComplete.value=f,this.material.uniformsNeedUpdate=!0,this.visibleRegionChanging=!d}updateRenderIndexes(t,n){const s=this.geometry;s.attributes.splatIndex.set(t),s.attributes.splatIndex.needsUpdate=!0,n>0&&this.firstRenderTime===-1&&(this.firstRenderTime=performance.now()),s.instanceCount=n,s.setDrawRange(0,n)}updateTransforms(){for(let t=0;t<this.scenes.length;t++)this.getScene(t).updateTransform(this.dynamicMode)}setSplatScale(t=1){this.splatScale=t,this.material.uniforms.splatScale.value=t,this.material.uniformsNeedUpdate=!0}getSplatScale(){return this.splatScale}setPointCloudModeEnabled(t){this.pointCloudModeEnabled=t,this.material.uniforms.pointCloudModeEnabled.value=t?1:0,this.material.uniformsNeedUpdate=!0}getPointCloudModeEnabled(){return this.pointCloudModeEnabled}getSplatDataTextures(){return this.splatDataTextures}getSplatCount(t=!1){return t?Bn.getTotalSplatCountForScenes(this.scenes):this.lastBuildSplatCount}static getTotalSplatCountForScenes(t){let n=0;for(let s of t)s&&s.splatBuffer&&(n+=s.splatBuffer.getSplatCount());return n}static getTotalSplatCountForSplatBuffers(t){let n=0;for(let s of t)n+=s.getSplatCount();return n}getMaxSplatCount(){return Bn.getTotalMaxSplatCountForScenes(this.scenes)}static getTotalMaxSplatCountForScenes(t){let n=0;for(let s of t)s&&s.splatBuffer&&(n+=s.splatBuffer.getMaxSplatCount());return n}static getTotalMaxSplatCountForSplatBuffers(t){let n=0;for(let s of t)n+=s.getMaxSplatCount();return n}disposeDistancesComputationGPUResources(){if(!this.renderer)return;const t=this.renderer.getContext();this.distancesTransformFeedback.vao&&(t.deleteVertexArray(this.distancesTransformFeedback.vao),this.distancesTransformFeedback.vao=null),this.distancesTransformFeedback.program&&(t.deleteProgram(this.distancesTransformFeedback.program),t.deleteShader(this.distancesTransformFeedback.vertexShader),t.deleteShader(this.distancesTransformFeedback.fragmentShader),this.distancesTransformFeedback.program=null,this.distancesTransformFeedback.vertexShader=null,this.distancesTransformFeedback.fragmentShader=null),this.disposeDistancesComputationGPUBufferResources(),this.distancesTransformFeedback.id&&(t.deleteTransformFeedback(this.distancesTransformFeedback.id),this.distancesTransformFeedback.id=null)}disposeDistancesComputationGPUBufferResources(){if(!this.renderer)return;const t=this.renderer.getContext();this.distancesTransformFeedback.centersBuffer&&(this.distancesTransformFeedback.centersBuffer=null,t.deleteBuffer(this.distancesTransformFeedback.centersBuffer)),this.distancesTransformFeedback.outDistancesBuffer&&(t.deleteBuffer(this.distancesTransformFeedback.outDistancesBuffer),this.distancesTransformFeedback.outDistancesBuffer=null)}setRenderer(t){if(t!==this.renderer){this.renderer=t;const n=this.renderer.getContext(),s=new z1(n),o=new H1(n,s,{});if(s.init(o),this.webGLUtils=new nv(n,s),this.enableDistancesComputationOnGPU&&this.getSplatCount()>0){this.setupDistancesComputationTransformFeedback();const{centers:l,sceneIndexes:u}=this.getDataForDistancesComputation(0,this.getSplatCount()-1);this.refreshGPUBuffersForDistancesComputation(l,u)}}}updateGPUCentersBufferForDistancesComputation(t,n,s){if(!this.renderer)return;const o=this.renderer.getContext(),l=o.getParameter(o.VERTEX_ARRAY_BINDING);o.bindVertexArray(this.distancesTransformFeedback.vao);const u=this.integerBasedDistancesComputation?Uint32Array:Float32Array,d=16,f=s*d;if(o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),t)o.bufferSubData(o.ARRAY_BUFFER,f,n);else{const p=new u(this.getMaxSplatCount()*d);p.set(n),o.bufferData(o.ARRAY_BUFFER,p,o.STATIC_DRAW)}o.bindBuffer(o.ARRAY_BUFFER,null),l&&o.bindVertexArray(l)}updateGPUTransformIndexesBufferForDistancesComputation(t,n,s){if(!this.renderer||!this.dynamicMode)return;const o=this.renderer.getContext(),l=o.getParameter(o.VERTEX_ARRAY_BINDING);o.bindVertexArray(this.distancesTransformFeedback.vao);const u=s*4;if(o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),t)o.bufferSubData(o.ARRAY_BUFFER,u,n);else{const d=new Uint32Array(this.getMaxSplatCount()*4);d.set(n),o.bufferData(o.ARRAY_BUFFER,d,o.STATIC_DRAW)}o.bindBuffer(o.ARRAY_BUFFER,null),l&&o.bindVertexArray(l)}getSceneIndexes(t,n){let s;const o=n-t+1;s=new Uint32Array(o);for(let l=t;l<=n;l++)s[l]=this.globalSplatIndexToSceneIndexMap[l];return s}getLocalSplatParameters(t,n,s){s==null&&(s=!this.dynamicMode),n.splatBuffer=this.getSplatBufferForSplat(t),n.localIndex=this.getSplatLocalIndex(t),n.sceneTransform=s?this.getSceneTransformForSplat(t):null}fillSplatDataArrays(t,n,s,o,l,u,d,f=0,p=0,g=1,m,x,y=0,M){const S=new z;S.x=void 0,S.y=void 0,this.splatRenderMode===wr.ThreeD?S.z=void 0:S.z=1;const A=new gt;let T=0,P=this.scenes.length-1;M!=null&&M>=0&&M<=this.scenes.length&&(T=M,P=M);for(let C=T;C<=P;C++){d==null&&(d=!this.dynamicMode);const b=this.getScene(C),I=b.splatBuffer;let R;if(d&&(this.getSceneTransform(C,A),R=A),t&&I.fillSplatCovarianceArray(t,R,m,x,y,f),n||s){if(!n||!s)throw new Error('SplatMesh::fillSplatDataArrays() -> "scales" and "rotations" must both be valid.');I.fillSplatScaleRotationArray(n,s,R,m,x,y,p,S)}o&&I.fillSplatCenterArray(o,R,m,x,y),l&&I.fillSplatColorArray(l,b.minimumAlpha,m,x,y),u&&I.fillSphericalHarmonicsArray(u,this.minSphericalHarmonicsDegree,R,m,x,y,g),y+=I.getSplatCount()}}getIntegerCenters(t,n,s=!1){const o=n-t+1,l=new Float32Array(o*3);this.fillSplatDataArrays(null,null,null,l,null,null,void 0,void 0,void 0,void 0,t);let u,d=s?4:3;u=new Int32Array(o*d);for(let f=0;f<o;f++){for(let p=0;p<3;p++)u[f*d+p]=Math.round(l[f*3+p]*1e3);s&&(u[f*d+3]=1e3)}return u}getFloatCenters(t,n,s=!1){const o=n-t+1,l=new Float32Array(o*3);if(this.fillSplatDataArrays(null,null,null,l,null,null,void 0,void 0,void 0,void 0,t),!s)return l;let u=new Float32Array(o*4);for(let d=0;d<o;d++){for(let f=0;f<3;f++)u[d*4+f]=l[d*3+f];u[d*4+3]=1}return u}getSceneTransform(t,n){const s=this.getScene(t);s.updateTransform(this.dynamicMode),n.copy(s.transform)}getScene(t){if(t<0||t>=this.scenes.length)throw new Error("SplatMesh::getScene() -> Invalid scene index.");return this.scenes[t]}getSceneCount(){return this.scenes.length}getSplatBufferForSplat(t){return this.getScene(this.globalSplatIndexToSceneIndexMap[t]).splatBuffer}getSceneIndexForSplat(t){return this.globalSplatIndexToSceneIndexMap[t]}getSceneTransformForSplat(t){return this.getScene(this.globalSplatIndexToSceneIndexMap[t]).transform}getSplatLocalIndex(t){return this.globalSplatIndexToLocalSplatIndexMap[t]}static getIntegerMatrixArray(t){const n=t.elements,s=[];for(let o=0;o<16;o++)s[o]=Math.round(n[o]*1e3);return s}computeBoundingBox(t=!1,n){let s=this.getSplatCount();if(n!=null){if(n<0||n>=this.scenes.length)throw new Error("SplatMesh::computeBoundingBox() -> Invalid scene index.");s=this.scenes[n].splatBuffer.getSplatCount()}const o=new Float32Array(s*3);this.fillSplatDataArrays(null,null,null,o,null,null,t,void 0,void 0,void 0,void 0,n);const l=new z,u=new z;for(let d=0;d<s;d++){const f=d*3,p=o[f],g=o[f+1],m=o[f+2];(d===0||p<l.x)&&(l.x=p),(d===0||g<l.y)&&(l.y=g),(d===0||m<l.z)&&(l.z=m),(d===0||p>u.x)&&(u.x=p),(d===0||g>u.y)&&(u.y=g),(d===0||m>u.z)&&(u.z=m)}return new sr(l,u)}}var K1="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEbA2AAAGAQf39/f39/f39/f39/f39/fwBgAAF/AhIBA2VudgZtZW1vcnkCAwCAgAQDBAMAAQIHVAQRX193YXNtX2NhbGxfY3RvcnMAABhfX3dhc21fYXBwbHlfZGF0YV9yZWxvY3MAAAtzb3J0SW5kZXhlcwABE2Vtc2NyaXB0ZW5fdGxzX2luaXQAAgqWEAMDAAELihAEAXwDewN/A30gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEBA0AgAyABQQJ0IgVqIAIgACAFaigCAEECdGooAgAiBTYCACAFIAogBSAKSBshCiAFIA0gBSANShshDSABQQFqIgEgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiFWooAgAiFkECdGooAgAiFEcEQAJ/IAX9CQI4IAggFEEGdGoiDv0JAgwgDioCHP0gASAOKgIs/SACIA4qAjz9IAP95gEgBf0JAiggDv0JAgggDioCGP0gASAOKgIo/SACIA4qAjj9IAP95gEgBf0JAgggDv0JAgAgDioCEP0gASAOKgIg/SACIA4qAjD9IAP95gEgBf0JAhggDv0JAgQgDioCFP0gASAOKgIk/SACIA4qAjT9IAP95gH95AH95AH95AEiEf1f/QwAAAAAAECPQAAAAAAAQI9AIhL98gEiE/0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBP9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/REgDv0cAQJ/IBEgEf0NCAkKCwwNDg8AAAAAAAAAAP1fIBL98gEiEf0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9HAICfyAR/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAyESIBQhDwsgAyAVaiABIBZBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmogEf0bA2oiDjYCACAOIAogCiAOShshCiAOIA0gDSAOSBshDSACQQFqIgIgC0cNAAsMAwsCfyAFKgIIu/0UIAUqAhi7/SIB/QwAAAAAAECPQAAAAAAAQI9A/fIBIhH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIQ4CfyAR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyECAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQIgAv0RIA79HAEgBf0cAiESIAwhBQNAIAMgBUECdCICaiABIAAgAmooAgBBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmoiAjYCACACIAogAiAKSBshCiACIA0gAiANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEBA0AgAyABQQJ0IgVqAn8gAiAAIAVqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAFBAWoiASALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIRcgBSoCGCEYIAUqAgghGUH4////ByEKQYiAgIB4IQ0gDCEFA0ACfyAXIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCAZIAIqAgCUIBggAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIUaigCAEECdCIVaigCACIORwRAIAX9CQI4IAggDkEGdGoiD/0JAgwgDyoCHP0gASAPKgIs/SACIA8qAjz9IAP95gEgBf0JAiggD/0JAgggDyoCGP0gASAPKgIo/SACIA8qAjj9IAP95gEgBf0JAgggD/0JAgAgDyoCEP0gASAPKgIg/SACIA8qAjD9IAP95gEgBf0JAhggD/0JAgQgDyoCFP0gASAPKgIk/SACIA8qAjT9IAP95gH95AH95AH95AEhESAOIQ8LIAMgFGoCfyAR/R8DIAEgFUECdCIOQQxyaioCAJQgEf0fAiABIA5BCHJqKgIAlCAR/R8AIAEgDmoqAgCUIBH9HwEgASAOQQRyaioCAJSSkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSACQQFqIgIgC0cNAAsMAQtBiICAgHghDUH4////ByEKCyALIAxLBEAgCUEBa7MgDbIgCrKTlSEXIAwhDQNAAn8gFyADIA1BAnRqIgEoAgAgCmuylCIYi0MAAABPXQRAIBioDAELQYCAgIB4CyEOIAEgDjYCACAEIA5BAnRqIgEgASgCAEEBajYCACANQQFqIg0gC0cNAAsLIAlBAk8EQCAEKAIAIQ1BASEKA0AgBCAKQQJ0aiIBIAEoAgAgDWoiDTYCACAKQQFqIgogCUcNAAsLIAxBAEoEQCAMIQoDQCAGIApBAWsiAUECdCICaiAAIAJqKAIANgIAIApBAUshAiABIQogAg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCwsEAEEACw==",gx="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACEgEDZW52Bm1lbW9yeQIDAICABAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=",$1="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQrrDwICAAvlDwQBfAN7B30DfyALIAprIQwCQAJAIA4EQCANBEBB+P///wchCkGIgICAeCENIAsgDE0NAyAMIQUDQCADIAVBAnQiAWogAiAAIAFqKAIAQQJ0aigCACIBNgIAIAEgCiABIApIGyEKIAEgDSABIA1KGyENIAVBAWoiBSALRw0ACwwDCyAPBEAgCyAMTQ0CQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIcaigCACIdQQJ0aigCACIbRwRAAn8gBf0JAjggCCAbQQZ0aiIO/QkCDCAOKgIc/SABIA4qAiz9IAIgDioCPP0gA/3mASAF/QkCKCAO/QkCCCAOKgIY/SABIA4qAij9IAIgDioCOP0gA/3mASAF/QkCCCAO/QkCACAOKgIQ/SABIA4qAiD9IAIgDioCMP0gA/3mASAF/QkCGCAO/QkCBCAOKgIU/SABIA4qAiT9IAIgDioCNP0gA/3mAf3kAf3kAf3kASIR/V/9DAAAAAAAQI9AAAAAAABAj0AiEv3yASIT/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOAn8gE/0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9ESAO/RwBAn8gESAR/Q0ICQoLDA0ODwABAgMAAQID/V8gEv3yASIR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAgJ/IBH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/RwDIRIgGyEPCyADIBxqIAEgHUEEdGr9AAAAIBL9tQEiEf0bACAR/RsBaiAR/RsCaiAR/RsDaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAgi7/RQgBSoCGLv9IgH9DAAAAAAAQI9AAAAAAABAj0D98gEiEf0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBH9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQL9ESAO/RwBIAX9HAIhEiAMIQUDQCADIAVBAnQiAmogASAAIAJqKAIAQQR0av0AAAAgEv21ASIR/RsAIBH9GwFqIBH9GwJqIgI2AgAgAiAKIAIgCkgbIQogAiANIAIgDUobIQ0gBUEBaiIFIAtHDQALDAILIA0EQEH4////ByEKQYiAgIB4IQ0gCyAMTQ0CIAwhBQNAIAMgBUECdCIBagJ/IAIgACABaigCAEECdGoqAgC7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgD0UEQCALIAxNDQEgBSoCKCEUIAUqAhghFSAFKgIIIRZB+P///wchCkGIgICAeCENIAwhBQNAAn8gFCABIAAgBUECdCIHaigCAEEEdGoiAioCCJQgFiACKgIAlCAVIAIqAgSUkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDiADIAdqIA42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gBUEBaiIFIAtHDQALDAILIAsgDE0NAEF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiG2ooAgBBAnQiHGooAgAiDkcEQCAFKgI4IhQgCCAOQQZ0aiIPKgI8lCAFKgIoIhUgDyoCOJQgBSoCCCIWIA8qAjCUIAUqAhgiFyAPKgI0lJKSkiEYIBQgDyoCLJQgFSAPKgIolCAWIA8qAiCUIBcgDyoCJJSSkpIhGSAUIA8qAhyUIBUgDyoCGJQgFiAPKgIQlCAXIA8qAhSUkpKSIRogFCAPKgIMlCAVIA8qAgiUIBYgDyoCAJQgFyAPKgIElJKSkiEUIA4hDwsgAyAbagJ/IBggASAcQQJ0aiIOKgIMlCAZIA4qAgiUIBQgDioCAJQgGiAOKgIElJKSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAJBAWoiAiALRw0ACwwBC0GIgICAeCENQfj///8HIQoLIAsgDEsEQCAJQQFrsyANsiAKspOVIRQgDCENA0ACfyAUIAMgDUECdGoiASgCACAKa7KUIhWLQwAAAE9dBEAgFagMAQtBgICAgHgLIQ4gASAONgIAIAQgDkECdGoiASABKAIAQQFqNgIAIA1BAWoiDSALRw0ACwsgCUECTwRAIAQoAgAhDUEBIQoDQCAEIApBAnRqIgEgASgCACANaiINNgIAIApBAWoiCiAJRw0ACwsgDEEASgRAIAwhCgNAIAYgCkEBayIBQQJ0IgJqIAAgAmooAgA2AgAgCkEBSyABIQoNAAsLIAsgDEoEQCALIQoDQCAGIAsgBCADIApBAWsiCkECdCIBaigCAEECdGoiAigCACIFa0ECdGogACABaigCADYCACACIAVBAWs2AgAgCiAMSg0ACwsL",Z1="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=";function J1(a){let e,t,n,s,o,l,u,d,f,p,g,m,x,y,M,S,A,T,P,C;function b(I,R,E,F,B,N,U){const W=performance.now();if(!n&&(new Uint32Array(t,u,B.byteLength/C.BytesPerInt).set(B),new Float32Array(t,p,U.byteLength/C.BytesPerFloat).set(U),F)){let Y;s?Y=new Int32Array(t,g,N.byteLength/C.BytesPerInt):Y=new Float32Array(t,g,N.byteLength/C.BytesPerFloat),Y.set(N)}S||(S=new Uint32Array(T)),new Float32Array(t,M,16).set(E),new Uint32Array(t,x,T).set(S),e.exports.sortIndexes(u,y,g,m,x,M,d,f,p,T,I,R,l,F,s,o);const X={sortDone:!0,splatSortCount:I,splatRenderCount:R,sortTime:0};if(!n){const j=new Uint32Array(t,d,R);(!A||A.length<R)&&(A=new Uint32Array(R)),A.set(j),X.sortedIndexes=A}const H=performance.now();X.sortTime=H-W,a.postMessage(X)}a.onmessage=I=>{if(I.data.centers)centers=I.data.centers,sceneIndexes=I.data.sceneIndexes,s?new Int32Array(t,y+I.data.range.from*C.BytesPerInt*4,I.data.range.count*4).set(new Int32Array(centers)):new Float32Array(t,y+I.data.range.from*C.BytesPerFloat*4,I.data.range.count*4).set(new Float32Array(centers)),o&&new Uint32Array(t,f+I.data.range.from*4,I.data.range.count).set(new Uint32Array(sceneIndexes)),P=I.data.range.from+I.data.range.count;else if(I.data.sort){const R=Math.min(I.data.sort.splatRenderCount||0,P),E=Math.min(I.data.sort.splatSortCount||0,P),F=I.data.sort.usePrecomputedDistances;let B,N,U;n||(B=I.data.sort.indexesToSort,U=I.data.sort.transforms,F&&(N=I.data.sort.precomputedDistances)),b(E,R,I.data.sort.modelViewProj,F,B,N,U)}else if(I.data.init){C=I.data.init.Constants,l=I.data.init.splatCount,n=I.data.init.useSharedMemory,s=I.data.init.integerBasedSort,o=I.data.init.dynamicMode,T=I.data.init.distanceMapRange,P=0;const R=s?C.BytesPerInt*4:C.BytesPerFloat*4,E=new Uint8Array(I.data.init.sorterWasmBytes),F=16*C.BytesPerFloat,B=l*C.BytesPerInt,N=l*R,U=F,W=s?l*C.BytesPerInt:l*C.BytesPerFloat,X=l*C.BytesPerInt,H=l*C.BytesPerInt,j=s?T*C.BytesPerInt*2:T*C.BytesPerFloat*2,q=o?l*C.BytesPerInt:0,Y=o?C.MaxScenes*F:0,K=C.MemoryPageSize*32,ne=B+N+U+W+X+j+H+q+Y+K,k=Math.floor(ne/C.MemoryPageSize)+1,te={module:{},env:{memory:new WebAssembly.Memory({initial:k,maximum:k,shared:!0})}};WebAssembly.compile(E).then(Me=>WebAssembly.instantiate(Me,te)).then(Me=>{e=Me,u=0,y=u+B,M=y+N,g=M+U,m=g+W,x=m+X,d=x+j,f=d+H,p=f+q,t=te.env.memory.buffer,n?a.postMessage({sortSetupPhase1Complete:!0,indexesToSortBuffer:t,indexesToSortOffset:u,sortedIndexesBuffer:t,sortedIndexesOffset:d,precomputedDistancesBuffer:t,precomputedDistancesOffset:g,transformsBuffer:t,transformsOffset:p}):a.postMessage({sortSetupPhase1Complete:!0})})}}}function ew(a,e,t,n,s,o=wt.DefaultSplatSortDistanceMapPrecision){const l=new Worker(URL.createObjectURL(new Blob(["(",J1.toString(),")(self)"],{type:"application/javascript"})));let u=K1;const d=Kh()?sv():null;!t&&!e?(u=gx,d&&d.major<=16&&d.minor<4&&(u=Z1)):t?e||d&&d.major<=16&&d.minor<4&&(u=$1):u=gx;const f=atob(u),p=new Uint8Array(f.length);for(let g=0;g<f.length;g++)p[g]=f.charCodeAt(g);return l.postMessage({init:{sorterWasmBytes:p.buffer,splatCount:a,useSharedMemory:e,integerBasedSort:n,dynamicMode:s,distanceMapRange:1<<o,Constants:{BytesPerFloat:wt.BytesPerFloat,BytesPerInt:wt.BytesPerInt,MemoryPageSize:wt.MemoryPageSize,MaxScenes:wt.MaxScenes}}}),l}const La={None:0,VR:1,AR:2};class Ya{static createButton(e,t={}){const n=document.createElement("button");function s(){let f=null;async function p(x){x.addEventListener("end",g),await e.xr.setSession(x),n.textContent="EXIT VR",f=x}function g(){f.removeEventListener("end",g),n.textContent="ENTER VR",f=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";const m={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){f===null?navigator.xr.requestSession("immersive-vr",m).then(p):(f.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",m).then(p).catch(x=>{console.warn(x)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",m).then(p).catch(x=>{console.warn(x)})}function o(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function l(){o(),n.textContent="VR NOT SUPPORTED"}function u(f){o(),console.warn("Exception when trying to call xr.isSessionSupported",f),n.textContent="VR NOT ALLOWED"}function d(f){f.style.position="absolute",f.style.bottom="20px",f.style.padding="12px 6px",f.style.border="1px solid #fff",f.style.borderRadius="4px",f.style.background="rgba(0,0,0,0.1)",f.style.color="#fff",f.style.font="normal 13px sans-serif",f.style.textAlign="center",f.style.opacity="0.5",f.style.outline="none",f.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",d(n),navigator.xr.isSessionSupported("immersive-vr").then(function(f){f?s():l(),f&&Ya.xrSessionIsGranted&&n.click()}).catch(u),n;{const f=document.createElement("a");return window.isSecureContext===!1?(f.href=document.location.href.replace(/^http:/,"https:"),f.innerHTML="WEBXR NEEDS HTTPS"):(f.href="https://immersiveweb.dev/",f.innerHTML="WEBXR NOT AVAILABLE"),f.style.left="calc(50% - 90px)",f.style.width="180px",f.style.textDecoration="none",d(f),f}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{Ya.xrSessionIsGranted=!0})}}}Ya.xrSessionIsGranted=!1;Ya.registerSessionGrantedListener();class tw{static createButton(e,t={}){const n=document.createElement("button");function s(){if(t.domOverlay===void 0){const m=document.createElement("div");m.style.display="none",document.body.appendChild(m);const x=document.createElementNS("http://www.w3.org/2000/svg","svg");x.setAttribute("width",38),x.setAttribute("height",38),x.style.position="absolute",x.style.right="20px",x.style.top="20px",x.addEventListener("click",function(){f.end()}),m.appendChild(x);const y=document.createElementNS("http://www.w3.org/2000/svg","path");y.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),y.setAttribute("stroke","#fff"),y.setAttribute("stroke-width",2),x.appendChild(y),t.optionalFeatures===void 0&&(t.optionalFeatures=[]),t.optionalFeatures.push("dom-overlay"),t.domOverlay={root:m}}let f=null;async function p(m){m.addEventListener("end",g),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(m),n.textContent="STOP AR",t.domOverlay.root.style.display="",f=m}function g(){f.removeEventListener("end",g),n.textContent="START AR",t.domOverlay.root.style.display="none",f=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="START AR",n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){f===null?navigator.xr.requestSession("immersive-ar",t).then(p):(f.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(p).catch(m=>{console.warn(m)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(p).catch(m=>{console.warn(m)})}function o(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function l(){o(),n.textContent="AR NOT SUPPORTED"}function u(f){o(),console.warn("Exception when trying to call xr.isSessionSupported",f),n.textContent="AR NOT ALLOWED"}function d(f){f.style.position="absolute",f.style.bottom="20px",f.style.padding="12px 6px",f.style.border="1px solid #fff",f.style.borderRadius="4px",f.style.background="rgba(0,0,0,0.1)",f.style.color="#fff",f.style.font="normal 13px sans-serif",f.style.textAlign="center",f.style.opacity="0.5",f.style.outline="none",f.style.zIndex="999"}if("xr"in navigator)return n.id="ARButton",n.style.display="none",d(n),navigator.xr.isSessionSupported("immersive-ar").then(function(f){f?s():l()}).catch(u),n;{const f=document.createElement("a");return window.isSecureContext===!1?(f.href=document.location.href.replace(/^http:/,"https:"),f.innerHTML="WEBXR NEEDS HTTPS"):(f.href="https://immersiveweb.dev/",f.innerHTML="WEBXR NOT AVAILABLE"),f.style.left="calc(50% - 90px)",f.style.width="180px",f.style.textDecoration="none",d(f),f}}}const Nf={Always:0,Never:2},nw=50,iw=.75,rw=15e5,sw=10,aw=2.5,ow=60,os=class os{constructor(e={}){Fe(this,"onKeyDown",(function(){const e=new z,t=new gt,n=new gt;return function(s){switch(e.set(0,0,-1),e.transformDirection(this.camera.matrixWorld),t.makeRotationAxis(e,Math.PI/128),n.makeRotationAxis(e,-Math.PI/128),s.code){case"KeyG":this.focalAdjustment+=.02,this.forceRenderNextFrame();break;case"KeyF":this.focalAdjustment-=.02,this.forceRenderNextFrame();break;case"ArrowLeft":this.camera.up.transformDirection(t);break;case"ArrowRight":this.camera.up.transformDirection(n);break;case"KeyC":this.showMeshCursor=!this.showMeshCursor;break;case"KeyU":this.showControlPlane=!this.showControlPlane;break;case"KeyI":this.showInfo=!this.showInfo,this.showInfo?this.infoPanel.show():this.infoPanel.hide();break;case"KeyO":this.usingExternalCamera||this.setOrthographicMode(!this.camera.isOrthographicCamera);break;case"KeyP":this.usingExternalCamera||this.splatMesh.setPointCloudModeEnabled(!this.splatMesh.getPointCloudModeEnabled());break;case"Equal":this.usingExternalCamera||this.splatMesh.setSplatScale(this.splatMesh.getSplatScale()+.05);break;case"Minus":this.usingExternalCamera||this.splatMesh.setSplatScale(Math.max(this.splatMesh.getSplatScale()-.05,0));break}}})());Fe(this,"onMouseUp",(function(){const e=new qe;return function(t){e.copy(this.mousePosition).sub(this.mouseDownPosition),Da()-this.mouseDownTime<.5&&e.length()<2&&this.onMouseClick(t)}})());Fe(this,"checkForFocalPointChange",(function(){const e=new qe,t=new z,n=[];return function(){if(!this.transitioningCameraTarget&&(this.getRenderDimensions(e),n.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,e),this.raycaster.intersectSplatMesh(this.splatMesh,n),n.length>0)){const o=n[0].origin;t.copy(o).sub(this.camera.position),t.length()>iw&&(this.previousCameraTarget.copy(this.controls.target),this.nextCameraTarget.copy(o),this.transitioningCameraTarget=!0,this.transitioningCameraTargetStartTime=Da())}}})());Fe(this,"updateSplatMesh",(function(){const e=new qe;return function(){if(!this.splatMesh)return;if(this.splatMesh.getSplatCount()>0){this.splatMesh.updateVisibleRegionFadeDistance(this.sceneRevealMode),this.splatMesh.updateTransforms(),this.getRenderDimensions(e);const n=this.camera.projectionMatrix.elements[0]*.5*this.devicePixelRatio*e.x,s=this.camera.projectionMatrix.elements[5]*.5*this.devicePixelRatio*e.y,o=this.camera.isOrthographicCamera?1/this.devicePixelRatio:1,l=this.focalAdjustment*o,u=1/l;this.adjustForWebXRStereo(e),this.splatMesh.updateUniforms(e,n*l,s*l,this.camera.isOrthographicCamera,this.camera.zoom||1,u)}}})());Fe(this,"addSplatBuffers",(function(){return function(e,t=[],n=!0,s=!0,o=!0,l=!1,u=!1,d=!0){if(this.isDisposingOrDisposed())return Promise.resolve();let f=null;const p=()=>{f!==null&&(this.loadingSpinner.removeTask(f),f=null)};return this.splatRenderReady=!1,new Promise(g=>{s&&(f=this.loadingSpinner.addTask("Processing splats...")),_i(()=>{if(this.isDisposingOrDisposed())g();else{const m=this.addSplatBuffersToMesh(e,t,n,o,l,d),x=this.splatMesh.getMaxSplatCount();this.sortWorker&&this.sortWorker.maxSplatCount!==x&&this.disposeSortWorker(),this.gpuAcceleratedSort||this.preSortMessages.push({centers:m.centers.buffer,sceneIndexes:m.sceneIndexes.buffer,range:{from:m.from,to:m.to,count:m.count}}),(!this.sortWorker&&x>0?this.setupSortWorker(this.splatMesh):Promise.resolve()).then(()=>{this.isDisposingOrDisposed()||this.runSplatSort(!0,!0).then(M=>{!this.sortWorker||!M?(this.splatRenderReady=!0,p(),g()):(u?this.splatRenderReady=!0:this.runAfterNextSort.push(()=>{this.splatRenderReady=!0}),this.runAfterNextSort.push(()=>{p(),g()}))})})}},!0)})}})());Fe(this,"addSplatBuffersToMesh",(function(){let e;return function(t,n,s=!0,o=!1,l=!1,u=!0){if(this.isDisposingOrDisposed())return;let d=[],f=[];l||(d=this.splatMesh.scenes.map(x=>x.splatBuffer)||[],f=this.splatMesh.sceneOptions?this.splatMesh.sceneOptions.map(x=>x):[]),d.push(...t),f.push(...n),this.renderer&&this.splatMesh.setRenderer(this.renderer);const p=x=>{if(this.isDisposingOrDisposed())return;const y=this.splatMesh.getSplatCount();o&&y>=rw&&!x&&!e&&(this.loadingSpinner.setMinimized(!0,!0),e=this.loadingSpinner.addTask("Optimizing data structures..."))},g=x=>{this.isDisposingOrDisposed()||x&&e&&(this.loadingSpinner.removeTask(e),e=null)},m=this.splatMesh.build(d,f,!0,s,p,g,u);return s&&this.freeIntermediateSplatData&&this.splatMesh.freeIntermediateSplatData(),m}})());Fe(this,"shouldRender",(function(){let e=0;const t=new z,n=new en,s=1e-4;return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return!1;let o=!1,l=!1;if(this.camera){const u=this.camera.position,d=this.camera.quaternion;l=Math.abs(u.x-t.x)>s||Math.abs(u.y-t.y)>s||Math.abs(u.z-t.z)>s||Math.abs(d.x-n.x)>s||Math.abs(d.y-n.y)>s||Math.abs(d.z-n.z)>s||Math.abs(d.w-n.w)>s}return o=this.renderMode!==Nf.Never&&(e===0||this.splatMesh.visibleRegionChanging||l||this.renderMode===Nf.Always||this.dynamicMode===!0||this.renderNextFrame),this.camera&&(t.copy(this.camera.position),n.copy(this.camera.quaternion)),e++,o}})());Fe(this,"render",(function(){return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return;const e=n=>{for(let s of n.children)if(s.visible)return!0;return!1},t=this.renderer.autoClear;e(this.threeScene)&&(this.renderer.render(this.threeScene,this.camera),this.renderer.autoClear=!1),this.renderer.render(this.splatMesh,this.camera),this.renderer.autoClear=!1,this.sceneHelper.getFocusMarkerOpacity()>0&&this.renderer.render(this.sceneHelper.focusMarker,this.camera),this.showControlPlane&&this.renderer.render(this.sceneHelper.controlPlane,this.camera),this.renderer.autoClear=t}})());Fe(this,"updateFPS",(function(){let e=Da(),t=0;return function(){if(this.consecutiveRenderFrames>ow){const n=Da();n-e>=1?(this.currentFPS=t,t=0,e=n):t++}else this.currentFPS=null}})());Fe(this,"updateForRendererSizeChanges",(function(){const e=new qe,t=new qe;let n;return function(){this.usingExternalCamera||(this.renderer.getSize(t),(n===void 0||n!==this.camera.isOrthographicCamera||t.x!==e.x||t.y!==e.y)&&(this.camera.isOrthographicCamera?(this.camera.left=-t.x/2,this.camera.right=t.x/2,this.camera.top=t.y/2,this.camera.bottom=-t.y/2):this.camera.aspect=t.x/t.y,this.camera.updateProjectionMatrix(),e.copy(t),n=this.camera.isOrthographicCamera))}})());Fe(this,"timingSensitiveUpdates",(function(){let e;return function(){const t=Da();e||(e=t);const n=t-e;this.updateCameraTransition(t),this.updateFocusMarker(n),e=t}})());Fe(this,"updateCameraTransition",(function(){let e=new z,t=new z,n=new z;return function(s){if(this.transitioningCameraTarget){t.copy(this.previousCameraTarget).sub(this.camera.position).normalize(),n.copy(this.nextCameraTarget).sub(this.camera.position).normalize();const o=Math.acos(t.dot(n)),u=(o/(Math.PI/3)*.65+.3)/o*(s-this.transitioningCameraTargetStartTime);e.copy(this.previousCameraTarget).lerp(this.nextCameraTarget,u),this.camera.lookAt(e),this.controls.target.copy(e),u>=1&&(this.transitioningCameraTarget=!1)}}})());Fe(this,"updateFocusMarker",(function(){const e=new qe;let t=!1;return function(n){if(this.getRenderDimensions(e),this.transitioningCameraTarget){this.sceneHelper.setFocusMarkerVisibility(!0);const s=Math.max(this.sceneHelper.getFocusMarkerOpacity(),0);let o=Math.min(s+sw*n,1);this.sceneHelper.setFocusMarkerOpacity(o),this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e),t=!0,this.forceRenderNextFrame()}else{let s;if(t?s=1:s=Math.min(this.sceneHelper.getFocusMarkerOpacity(),1),s>0){this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e);let o=Math.max(s-aw*n,0);this.sceneHelper.setFocusMarkerOpacity(o),o===0&&this.sceneHelper.setFocusMarkerVisibility(!1)}s>0&&this.forceRenderNextFrame(),t=!1}}})());Fe(this,"updateMeshCursor",(function(){const e=[],t=new qe;return function(){this.showMeshCursor?(this.forceRenderNextFrame(),this.getRenderDimensions(t),e.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,t),this.raycaster.intersectSplatMesh(this.splatMesh,e),e.length>0?(this.sceneHelper.setMeshCursorVisibility(!0),this.sceneHelper.positionAndOrientMeshCursor(e[0].origin,this.camera)):this.sceneHelper.setMeshCursorVisibility(!1)):(this.sceneHelper.getMeschCursorVisibility()&&this.forceRenderNextFrame(),this.sceneHelper.setMeshCursorVisibility(!1))}})());Fe(this,"updateInfoPanel",(function(){const e=new qe;return function(){if(!this.showInfo)return;const t=this.splatMesh.getSplatCount();this.getRenderDimensions(e);const n=this.controls?this.controls.target:null,s=this.showMeshCursor?this.sceneHelper.meshCursor.position:null,o=t>0?this.splatRenderCount/t*100:0;this.infoPanel.update(e,this.camera.position,n,this.camera.up,this.camera.isOrthographicCamera,s,this.currentFPS||"N/A",t,this.splatRenderCount,o,this.lastSortTime,this.focalAdjustment,this.splatMesh.getSplatScale(),this.splatMesh.getPointCloudModeEnabled())}})());Fe(this,"runSplatSort",(function(){const e=new gt,t=[],n=new z(0,0,-1),s=new z(0,0,-1),o=new z,l=new z,u=[],d=[{angleThreshold:.55,sortFractions:[.125,.33333,.75]},{angleThreshold:.65,sortFractions:[.33333,.66667]},{angleThreshold:.8,sortFractions:[.5]}];return function(f=!1,p=!1){if(!this.initialized)return Promise.resolve(!1);if(this.sortRunning)return Promise.resolve(!0);if(this.splatMesh.getSplatCount()<=0)return this.splatRenderCount=0,Promise.resolve(!1);let g=0,m=0,x=!1,y=!1;if(s.set(0,0,-1).applyQuaternion(this.camera.quaternion),g=s.dot(n),m=l.copy(this.camera.position).sub(o).length(),!f&&!this.splatMesh.dynamicMode&&u.length===0&&(g<=.99&&(x=!0),m>=1&&(y=!0),!x&&!y))return Promise.resolve(!1);this.sortRunning=!0;let{splatRenderCount:M,shouldSortAll:S}=this.gatherSceneNodesForSort();S=S||p,this.splatRenderCount=M,e.copy(this.camera.matrixWorld).invert();const A=this.perspectiveCamera||this.camera;e.premultiply(A.projectionMatrix),this.splatMesh.dynamicMode||e.multiply(this.splatMesh.matrixWorld);let T=Promise.resolve(!0);return this.gpuAcceleratedSort&&(u.length<=1||u.length%2===0)&&(T=this.splatMesh.computeDistancesOnGPU(e,this.sortWorkerPrecomputedDistances)),T.then(()=>{if(u.length===0)if(this.splatMesh.dynamicMode||S)u.push(this.splatRenderCount);else{for(let b of d)if(g<b.angleThreshold){for(let I of b.sortFractions)u.push(Math.floor(this.splatRenderCount*I));break}u.push(this.splatRenderCount)}let P=Math.min(u.shift(),this.splatRenderCount);this.splatSortCount=P,t[0]=this.camera.position.x,t[1]=this.camera.position.y,t[2]=this.camera.position.z;const C={modelViewProj:e.elements,cameraPosition:t,splatRenderCount:this.splatRenderCount,splatSortCount:P,usePrecomputedDistances:this.gpuAcceleratedSort};return this.splatMesh.dynamicMode&&this.splatMesh.fillTransformsArray(this.sortWorkerTransforms),this.sharedMemoryForWorkers||(C.indexesToSort=this.sortWorkerIndexesToSort,C.transforms=this.sortWorkerTransforms,this.gpuAcceleratedSort&&(C.precomputedDistances=this.sortWorkerPrecomputedDistances)),this.sortPromise=new Promise(b=>{this.sortPromiseResolver=b}),this.preSortMessages.length>0&&(this.preSortMessages.forEach(b=>{this.sortWorker.postMessage(b)}),this.preSortMessages=[]),this.sortWorker.postMessage({sort:C}),u.length===0&&(o.copy(this.camera.position),n.copy(s)),!0}),T}})());Fe(this,"gatherSceneNodesForSort",(function(){const e=[];let t=null;const n=new z,s=new z,o=new z,l=new gt,u=new gt,d=new gt,f=new z,p=new z(0,0,-1),g=new z,m=x=>g.copy(x.max).sub(x.min).length();return function(x=!1){this.getRenderDimensions(f);const y=f.y/2/Math.tan(this.camera.fov/2*Ux.DEG2RAD),M=Math.atan(f.x/2/y),S=Math.atan(f.y/2/y),A=Math.cos(M),T=Math.cos(S),P=this.splatMesh.getSplatTree();if(P){u.copy(this.camera.matrixWorld).invert(),this.splatMesh.dynamicMode||u.multiply(this.splatMesh.matrixWorld);let C=0,b=0;for(let R=0;R<P.subTrees.length;R++){const E=P.subTrees[R];l.copy(u),this.splatMesh.dynamicMode&&(this.splatMesh.getSceneTransform(R,d),l.multiply(d));const F=E.nodesWithIndexes.length;for(let B=0;B<F;B++){const N=E.nodesWithIndexes[B];if(!N.data||!N.data.indexes||N.data.indexes.length===0)continue;o.copy(N.center).applyMatrix4(l);const U=o.length();o.normalize(),n.copy(o).setX(0).normalize(),s.copy(o).setY(0).normalize();const W=p.dot(s),X=p.dot(n),H=m(N),j=X<T-.6,q=W<A-.6;!x&&(q||j)&&U>H||(b+=N.data.indexes.length,e[C]=N,N.data.distanceToNode=U,C++)}}e.length=C,e.sort((R,E)=>R.data.distanceToNode<E.data.distanceToNode?-1:1);let I=b*wt.BytesPerInt;for(let R=0;R<C;R++){const E=e[R],F=E.data.indexes.length,B=F*wt.BytesPerInt;new Uint32Array(this.sortWorkerIndexesToSort.buffer,I-B,F).set(E.data.indexes),I-=B}return{splatRenderCount:b,shouldSortAll:!1}}else{const C=this.splatMesh.getSplatCount();if(!t||t.length!==C){t=new Uint32Array(C);for(let b=0;b<C;b++)t[b]=b}return this.sortWorkerIndexesToSort.set(t),{splatRenderCount:C,shouldSortAll:!0}}}})());if(e.cameraUp||(e.cameraUp=[0,1,0]),this.cameraUp=new z().fromArray(e.cameraUp),e.initialCameraPosition||(e.initialCameraPosition=[0,10,15]),this.initialCameraPosition=new z().fromArray(e.initialCameraPosition),e.initialCameraLookAt||(e.initialCameraLookAt=[0,0,0]),this.initialCameraLookAt=new z().fromArray(e.initialCameraLookAt),this.dropInMode=e.dropInMode||!1,(e.selfDrivenMode===void 0||e.selfDrivenMode===null)&&(e.selfDrivenMode=!0),this.selfDrivenMode=e.selfDrivenMode&&!this.dropInMode,this.selfDrivenUpdateFunc=this.selfDrivenUpdate.bind(this),e.useBuiltInControls===void 0&&(e.useBuiltInControls=!0),this.useBuiltInControls=e.useBuiltInControls,this.rootElement=e.rootElement,this.ignoreDevicePixelRatio=e.ignoreDevicePixelRatio||!1,this.devicePixelRatio=this.ignoreDevicePixelRatio?1:window.devicePixelRatio||1,this.halfPrecisionCovariancesOnGPU=e.halfPrecisionCovariancesOnGPU||!1,this.threeScene=e.threeScene,this.renderer=e.renderer,this.camera=e.camera,this.gpuAcceleratedSort=e.gpuAcceleratedSort||!1,(e.integerBasedSort===void 0||e.integerBasedSort===null)&&(e.integerBasedSort=!0),this.integerBasedSort=e.integerBasedSort,(e.sharedMemoryForWorkers===void 0||e.sharedMemoryForWorkers===null)&&(e.sharedMemoryForWorkers=!0),this.sharedMemoryForWorkers=e.sharedMemoryForWorkers,this.dynamicScene=!!e.dynamicScene,this.antialiased=e.antialiased||!1,this.kernel2DSize=e.kernel2DSize===void 0?.3:e.kernel2DSize,this.webXRMode=e.webXRMode||La.None,this.webXRMode!==La.None&&(this.gpuAcceleratedSort=!1),this.webXRActive=!1,this.webXRSessionInit=e.webXRSessionInit||{},this.renderMode=e.renderMode||Nf.Always,this.sceneRevealMode=e.sceneRevealMode||Va.Default,this.focalAdjustment=e.focalAdjustment||1,this.maxScreenSpaceSplatSize=e.maxScreenSpaceSplatSize||1024,this.logLevel=e.logLevel||Ga.None,this.sphericalHarmonicsDegree=e.sphericalHarmonicsDegree||0,this.enableOptionalEffects=e.enableOptionalEffects||!1,(e.enableSIMDInSort===void 0||e.enableSIMDInSort===null)&&(e.enableSIMDInSort=!0),this.enableSIMDInSort=e.enableSIMDInSort,(e.inMemoryCompressionLevel===void 0||e.inMemoryCompressionLevel===null)&&(e.inMemoryCompressionLevel=0),this.inMemoryCompressionLevel=e.inMemoryCompressionLevel,(e.optimizeSplatData===void 0||e.optimizeSplatData===null)&&(e.optimizeSplatData=!0),this.optimizeSplatData=e.optimizeSplatData,(e.freeIntermediateSplatData===void 0||e.freeIntermediateSplatData===null)&&(e.freeIntermediateSplatData=!1),this.freeIntermediateSplatData=e.freeIntermediateSplatData,Kh()){const n=sv();n.major<17&&(this.enableSIMDInSort=!1),n.major<16&&(this.sharedMemoryForWorkers=!1)}(e.splatRenderMode===void 0||e.splatRenderMode===null)&&(e.splatRenderMode=wr.ThreeD),this.splatRenderMode=e.splatRenderMode,this.sceneFadeInRateMultiplier=e.sceneFadeInRateMultiplier||1,this.splatSortDistanceMapPrecision=e.splatSortDistanceMapPrecision||wt.DefaultSplatSortDistanceMapPrecision;const t=this.integerBasedSort?20:24;this.splatSortDistanceMapPrecision=an(this.splatSortDistanceMapPrecision,10,t),this.onSplatMeshChangedCallback=null,this.createSplatMesh(),this.controls=null,this.perspectiveControls=null,this.orthographicControls=null,this.orthographicCamera=null,this.perspectiveCamera=null,this.showMeshCursor=!1,this.showControlPlane=!1,this.showInfo=!1,this.sceneHelper=null,this.sortWorker=null,this.sortRunning=!1,this.splatRenderCount=0,this.splatSortCount=0,this.lastSplatSortCount=0,this.sortWorkerIndexesToSort=null,this.sortWorkerSortedIndexes=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.preSortMessages=[],this.runAfterNextSort=[],this.selfDrivenModeRunning=!1,this.splatRenderReady=!1,this.raycaster=new F1,this.infoPanel=null,this.startInOrthographicMode=!1,this.currentFPS=0,this.lastSortTime=0,this.consecutiveRenderFrames=0,this.previousCameraTarget=new z,this.nextCameraTarget=new z,this.mousePosition=new qe,this.mouseDownPosition=new qe,this.mouseDownTime=null,this.resizeObserver=null,this.mouseMoveListener=null,this.mouseDownListener=null,this.mouseUpListener=null,this.keyDownListener=null,this.sortPromise=null,this.sortPromiseResolver=null,this.splatSceneDownloadPromises={},this.splatSceneDownloadAndBuildPromise=null,this.splatSceneRemovalPromise=null,this.loadingSpinner=new Lh(null,this.rootElement||document.body),this.loadingSpinner.hide(),this.loadingProgressBar=new w1(this.rootElement||document.body),this.loadingProgressBar.hide(),this.infoPanel=new b1(this.rootElement||document.body),this.infoPanel.hide(),this.usingExternalCamera=!!(this.dropInMode||this.camera),this.usingExternalRenderer=!!(this.dropInMode||this.renderer),this.initialized=!1,this.disposing=!1,this.disposed=!1,this.disposePromise=null,this.dropInMode||this.init()}createSplatMesh(){this.splatMesh=new Bn(this.splatRenderMode,this.dynamicScene,this.enableOptionalEffects,this.halfPrecisionCovariancesOnGPU,this.devicePixelRatio,this.gpuAcceleratedSort,this.integerBasedSort,this.antialiased,this.maxScreenSpaceSplatSize,this.logLevel,this.sphericalHarmonicsDegree,this.sceneFadeInRateMultiplier,this.kernel2DSize),this.splatMesh.frustumCulled=!1,this.onSplatMeshChangedCallback&&this.onSplatMeshChangedCallback()}init(){this.initialized||(this.rootElement||(this.usingExternalRenderer?this.rootElement=this.renderer.domElement||document.body:(this.rootElement=document.createElement("div"),this.rootElement.style.width="100%",this.rootElement.style.height="100%",this.rootElement.style.position="absolute",document.body.appendChild(this.rootElement))),this.setupCamera(),this.setupRenderer(),this.setupWebXR(this.webXRSessionInit),this.setupControls(),this.setupEventHandlers(),this.threeScene=this.threeScene||new oy,this.sceneHelper=new Qo(this.threeScene),this.sceneHelper.setupMeshCursor(),this.sceneHelper.setupFocusMarker(),this.sceneHelper.setupControlPlane(),this.loadingProgressBar.setContainer(this.rootElement),this.loadingSpinner.setContainer(this.rootElement),this.infoPanel.setContainer(this.rootElement),this.initialized=!0)}setupCamera(){if(!this.usingExternalCamera){const e=new qe;this.getRenderDimensions(e),this.perspectiveCamera=new Fi(nw,e.x/e.y,.1,1e3),this.orthographicCamera=new lu(e.x/-2,e.x/2,e.y/2,e.y/-2,.1,1e3),this.camera=this.startInOrthographicMode?this.orthographicCamera:this.perspectiveCamera,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt)}}setupRenderer(){if(!this.usingExternalRenderer){const e=new qe;this.getRenderDimensions(e),this.renderer=new CT({antialias:!1,precision:"highp"}),this.renderer.setPixelRatio(this.devicePixelRatio),this.renderer.autoClear=!0,this.renderer.setClearColor(new Dt(0),0),this.renderer.setSize(e.x,e.y),this.resizeObserver=new ResizeObserver(()=>{this.getRenderDimensions(e),this.renderer.setSize(e.x,e.y),this.forceRenderNextFrame()}),this.resizeObserver.observe(this.rootElement),this.rootElement.appendChild(this.renderer.domElement)}}setupWebXR(e){this.webXRMode&&(this.webXRMode===La.VR?this.rootElement.appendChild(Ya.createButton(this.renderer,e)):this.webXRMode===La.AR&&this.rootElement.appendChild(tw.createButton(this.renderer,e)),this.renderer.xr.addEventListener("sessionstart",t=>{this.webXRActive=!0}),this.renderer.xr.addEventListener("sessionend",t=>{this.webXRActive=!1}),this.renderer.xr.enabled=!0,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt))}setupControls(){if(this.useBuiltInControls&&this.webXRMode===La.None){this.usingExternalCamera?this.camera.isOrthographicCamera?this.orthographicControls=new Nc(this.camera,this.renderer.domElement):this.perspectiveControls=new Nc(this.camera,this.renderer.domElement):(this.perspectiveControls=new Nc(this.perspectiveCamera,this.renderer.domElement),this.orthographicControls=new Nc(this.orthographicCamera,this.renderer.domElement));for(let e of[this.orthographicControls,this.perspectiveControls])e&&(e.listenToKeyEvents(window),e.rotateSpeed=.5,e.maxPolarAngle=Math.PI*.75,e.minPolarAngle=.1,e.enableDamping=!0,e.dampingFactor=.05,e.target.copy(this.initialCameraLookAt),e.update());this.controls=this.camera.isOrthographicCamera?this.orthographicControls:this.perspectiveControls,this.controls.update()}}setupEventHandlers(){this.useBuiltInControls&&this.webXRMode===La.None&&(this.mouseMoveListener=this.onMouseMove.bind(this),this.renderer.domElement.addEventListener("pointermove",this.mouseMoveListener,!1),this.mouseDownListener=this.onMouseDown.bind(this),this.renderer.domElement.addEventListener("pointerdown",this.mouseDownListener,!1),this.mouseUpListener=this.onMouseUp.bind(this),this.renderer.domElement.addEventListener("pointerup",this.mouseUpListener,!1),this.keyDownListener=this.onKeyDown.bind(this),window.addEventListener("keydown",this.keyDownListener,!1))}removeEventHandlers(){this.useBuiltInControls&&(this.renderer.domElement.removeEventListener("pointermove",this.mouseMoveListener),this.mouseMoveListener=null,this.renderer.domElement.removeEventListener("pointerdown",this.mouseDownListener),this.mouseDownListener=null,this.renderer.domElement.removeEventListener("pointerup",this.mouseUpListener),this.mouseUpListener=null,window.removeEventListener("keydown",this.keyDownListener),this.keyDownListener=null)}setRenderMode(e){this.renderMode=e}setActiveSphericalHarmonicsDegrees(e){this.splatMesh.material.uniforms.sphericalHarmonicsDegree.value=e,this.splatMesh.material.uniformsNeedUpdate=!0}onSplatMeshChanged(e){this.onSplatMeshChangedCallback=e}onMouseMove(e){this.mousePosition.set(e.offsetX,e.offsetY)}onMouseDown(){this.mouseDownPosition.copy(this.mousePosition),this.mouseDownTime=Da()}onMouseClick(e){this.mousePosition.set(e.offsetX,e.offsetY),this.checkForFocalPointChange()}getRenderDimensions(e){this.rootElement?(e.x=this.rootElement.offsetWidth,e.y=this.rootElement.offsetHeight):this.renderer.getSize(e)}setOrthographicMode(e){if(e===this.camera.isOrthographicCamera)return;const t=this.camera,n=e?this.orthographicCamera:this.perspectiveCamera;if(n.position.copy(t.position),n.up.copy(t.up),n.rotation.copy(t.rotation),n.quaternion.copy(t.quaternion),n.matrix.copy(t.matrix),this.camera=n,this.controls){const s=u=>{u.saveState(),u.reset()},o=this.controls,l=e?this.orthographicControls:this.perspectiveControls;s(l),s(o),l.target.copy(o.target),e?os.setCameraZoomFromPosition(n,t,o):os.setCameraPositionFromZoom(n,t,l),this.controls=l,this.camera.lookAt(this.controls.target)}}adjustForWebXRStereo(e){if(this.camera&&this.webXRActive){const n=this.renderer.xr.getCamera().projectionMatrix.elements[0],s=this.camera.projectionMatrix.elements[0];e.x*=s/n}}isLoadingOrUnloading(){return Object.keys(this.splatSceneDownloadPromises).length>0||this.splatSceneDownloadAndBuildPromise!==null||this.splatSceneRemovalPromise!==null}isDisposingOrDisposed(){return this.disposing||this.disposed}addSplatSceneDownloadPromise(e){this.splatSceneDownloadPromises[e.id]=e}removeSplatSceneDownloadPromise(e){delete this.splatSceneDownloadPromises[e.id]}setSplatSceneDownloadAndBuildPromise(e){this.splatSceneDownloadAndBuildPromise=e}clearSplatSceneDownloadAndBuildPromise(){this.splatSceneDownloadAndBuildPromise=null}addSplatScene(e,t={}){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");t.progressiveLoad&&this.splatMesh.scenes&&this.splatMesh.scenes.length>0&&(console.log('addSplatScene(): "progressiveLoad" option ignore because there are multiple splat scenes'),t.progressiveLoad=!1);const n=t.format!==void 0&&t.format!==null?t.format:ox(e),s=os.isProgressivelyLoadable(n)&&t.progressiveLoad,o=t.showLoadingUI!==void 0&&t.showLoadingUI!==null?t.showLoadingUI:!0;let l=null;o&&(this.loadingSpinner.removeAllTasks(),l=this.loadingSpinner.addTask("Downloading..."));const u=()=>{this.loadingProgressBar.hide(),this.loadingSpinner.removeAllTasks()},d=(M,S,A)=>{if(o)if(A===xn.Downloading)if(M==100)this.loadingSpinner.setMessageForTask(l,"Download complete!");else if(s)this.loadingSpinner.setMessageForTask(l,"Downloading splats...");else{const T=S?`: ${S}`:"...";this.loadingSpinner.setMessageForTask(l,`Downloading${T}`)}else A===xn.Processing&&this.loadingSpinner.setMessageForTask(l,"Processing splats...")};let f=!1,p=0;const g=(M,S)=>{o&&((M&&s||S&&!s)&&(this.loadingSpinner.removeTask(l),!S&&!f&&this.loadingProgressBar.show()),s&&(S?(f=!0,this.loadingProgressBar.hide()):this.loadingProgressBar.setProgress(p)))},m=(M,S,A)=>{p=M,d(M,S,A),t.onProgress&&t.onProgress(M,S,A)},x=(M,S,A)=>{!s&&t.onProgress&&t.onProgress(0,"0%",xn.Processing);const T={rotation:t.rotation||t.orientation,position:t.position,scale:t.scale,splatAlphaRemovalThreshold:t.splatAlphaRemovalThreshold};return this.addSplatBuffers([M],[T],A,S&&o,o,s,s).then(()=>{!s&&t.onProgress&&t.onProgress(100,"100%",xn.Processing),g(S,A)})};return(s?this.downloadAndBuildSingleSplatSceneProgressiveLoad.bind(this):this.downloadAndBuildSingleSplatSceneStandardLoad.bind(this))(e,n,t.splatAlphaRemovalThreshold,x.bind(this),m,u.bind(this),t.headers)}downloadAndBuildSingleSplatSceneStandardLoad(e,t,n,s,o,l,u){const d=this.downloadSplatSceneToSplatBuffer(e,n,o,!1,void 0,t,u),f=bf(d.abortHandler);return d.then(p=>(this.removeSplatSceneDownloadPromise(d),s(p,!0,!0).then(()=>{f.resolve(),this.clearSplatSceneDownloadAndBuildPromise()}))).catch(p=>{l&&l(),this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(d),f.reject(this.updateError(p,`Viewer::addSplatScene -> Could not load file ${e}`))}),this.addSplatSceneDownloadPromise(d),this.setSplatSceneDownloadAndBuildPromise(f.promise),f.promise}downloadAndBuildSingleSplatSceneProgressiveLoad(e,t,n,s,o,l,u){let d=0,f=!1;const p=[],g=()=>{if(p.length>0&&!f&&!this.isDisposingOrDisposed()){f=!0;const S=p.shift();s(S.splatBuffer,S.firstBuild,S.finalBuild).then(()=>{f=!1,S.firstBuild?y.resolve():S.finalBuild&&(M.resolve(),this.clearSplatSceneDownloadAndBuildPromise()),p.length>0&&_i(()=>g())})}},m=(S,A)=>{this.isDisposingOrDisposed()||(A||p.length===0||S.getSplatCount()>p[0].splatBuffer.getSplatCount())&&(p.push({splatBuffer:S,firstBuild:d===0,finalBuild:A}),d++,g())},x=this.downloadSplatSceneToSplatBuffer(e,n,o,!0,m,t,u),y=bf(x.abortHandler),M=bf();return this.addSplatSceneDownloadPromise(x),this.setSplatSceneDownloadAndBuildPromise(M.promise),x.then(()=>{this.removeSplatSceneDownloadPromise(x)}).catch(S=>{this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(x);const A=this.updateError(S,"Viewer::addSplatScene -> Could not load one or more scenes");y.reject(A),l&&l(A)}),y.promise}addSplatScenes(e,t=!0,n=void 0){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");const s=e.length,o=[];let l;t&&(this.loadingSpinner.removeAllTasks(),l=this.loadingSpinner.addTask("Downloading..."));const u=(g,m,x,y)=>{o[g]=m;let M=0;for(let S=0;S<s;S++)M+=o[S]||0;M=M/s,x=`${M.toFixed(2)}%`,t&&y===xn.Downloading&&this.loadingSpinner.setMessageForTask(l,M==100?"Download complete!":`Downloading: ${x}`),n&&n(M,x,y)},d=[],f=[];for(let g=0;g<e.length;g++){const m=e[g],x=m.format!==void 0&&m.format!==null?m.format:ox(m.path),y=this.downloadSplatSceneToSplatBuffer(m.path,m.splatAlphaRemovalThreshold,u.bind(this,g),!1,void 0,x,m.headers);d.push(y),f.push(y.promise)}const p=new tl((g,m)=>{Promise.all(f).then(x=>{t&&this.loadingSpinner.removeTask(l),n&&n(0,"0%",xn.Processing),this.addSplatBuffers(x,e,!0,t,t,!1,!1).then(()=>{n&&n(100,"100%",xn.Processing),this.clearSplatSceneDownloadAndBuildPromise(),g()})}).catch(x=>{t&&this.loadingSpinner.removeTask(l),this.clearSplatSceneDownloadAndBuildPromise(),m(this.updateError(x,"Viewer::addSplatScenes -> Could not load one or more splat scenes."))}).finally(()=>{this.removeSplatSceneDownloadPromise(p)})},g=>{for(let m of d)m.abort(g)});return this.addSplatSceneDownloadPromise(p),this.setSplatSceneDownloadAndBuildPromise(p),p}downloadSplatSceneToSplatBuffer(e,t=1,n=void 0,s=!1,o=void 0,l,u){try{if(l===jn.Splat||l===jn.KSplat||l===jn.Ply){const d=s?!1:this.optimizeSplatData;if(l===jn.Splat)return lp.loadFromURL(e,n,s,o,t,this.inMemoryCompressionLevel,d,u);if(l===jn.KSplat)return Fh.loadFromURL(e,n,s,o,u);if(l===jn.Ply)return ap.loadFromURL(e,n,s,o,t,this.inMemoryCompressionLevel,d,this.sphericalHarmonicsDegree,u)}else if(l===jn.Spz)return op.loadFromURL(e,n,t,this.inMemoryCompressionLevel,this.optimizeSplatData,this.sphericalHarmonicsDegree,u)}catch(d){throw this.updateError(d,null)}throw new Error(`Viewer::downloadSplatSceneToSplatBuffer -> File format not supported: ${e}`)}static isProgressivelyLoadable(e){return e===jn.Splat||e===jn.KSplat||e===jn.Ply}setupSortWorker(e){if(!this.isDisposingOrDisposed())return new Promise(t=>{const n=this.integerBasedSort?Int32Array:Float32Array,s=e.getSplatCount(),o=e.getMaxSplatCount();this.sortWorker=ew(o,this.sharedMemoryForWorkers,this.enableSIMDInSort,this.integerBasedSort,this.splatMesh.dynamicMode,this.splatSortDistanceMapPrecision),this.sortWorker.onmessage=l=>{if(l.data.sortDone){if(this.sortRunning=!1,this.sharedMemoryForWorkers)this.splatMesh.updateRenderIndexes(this.sortWorkerSortedIndexes,l.data.splatRenderCount);else{const u=new Uint32Array(l.data.sortedIndexes.buffer,0,l.data.splatRenderCount);this.splatMesh.updateRenderIndexes(u,l.data.splatRenderCount)}this.lastSplatSortCount=this.splatSortCount,this.lastSortTime=l.data.sortTime,this.sortPromiseResolver(),this.sortPromiseResolver=null,this.forceRenderNextFrame(),this.runAfterNextSort.length>0&&(this.runAfterNextSort.forEach(u=>{u()}),this.runAfterNextSort.length=0)}else if(l.data.sortCanceled)this.sortRunning=!1;else if(l.data.sortSetupPhase1Complete){this.logLevel>=Ga.Info&&console.log("Sorting web worker WASM setup complete."),this.sharedMemoryForWorkers?(this.sortWorkerSortedIndexes=new Uint32Array(l.data.sortedIndexesBuffer,l.data.sortedIndexesOffset,o),this.sortWorkerIndexesToSort=new Uint32Array(l.data.indexesToSortBuffer,l.data.indexesToSortOffset,o),this.sortWorkerPrecomputedDistances=new n(l.data.precomputedDistancesBuffer,l.data.precomputedDistancesOffset,o),this.sortWorkerTransforms=new Float32Array(l.data.transformsBuffer,l.data.transformsOffset,wt.MaxScenes*16)):(this.sortWorkerIndexesToSort=new Uint32Array(o),this.sortWorkerPrecomputedDistances=new n(o),this.sortWorkerTransforms=new Float32Array(wt.MaxScenes*16));for(let u=0;u<s;u++)this.sortWorkerIndexesToSort[u]=u;if(this.sortWorker.maxSplatCount=o,this.logLevel>=Ga.Info){console.log("Sorting web worker ready.");const u=this.splatMesh.getSplatDataTextures(),d=u.covariances.size,f=u.centerColors.size;console.log("Covariances texture size: "+d.x+" x "+d.y),console.log("Centers/colors texture size: "+f.x+" x "+f.y)}t()}}})}updateError(e,t){return e instanceof rv?e:e instanceof Jc?new Error("File type or server does not support progressive loading."):t?new Error(t):e}disposeSortWorker(){this.sortWorker&&this.sortWorker.terminate(),this.sortWorker=null,this.sortPromise=null,this.sortPromiseResolver&&(this.sortPromiseResolver(),this.sortPromiseResolver=null),this.preSortMessages=[],this.sortRunning=!1}removeSplatScene(e,t=!0){return this.removeSplatScenes([e],t)}removeSplatScenes(e,t=!0){if(this.isLoadingOrUnloading())throw new Error("Cannot remove splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot remove splat scene after dispose() is called.");let n;return this.splatSceneRemovalPromise=new Promise((s,o)=>{let l;t&&(this.loadingSpinner.removeAllTasks(),this.loadingSpinner.show(),l=this.loadingSpinner.addTask("Removing splat scene..."));const u=()=>{t&&(this.loadingSpinner.hide(),this.loadingSpinner.removeTask(l))},d=p=>{u(),this.splatSceneRemovalPromise=null,p?o(p):s()},f=()=>this.isDisposingOrDisposed()?(d(),!0):!1;n=this.sortPromise||Promise.resolve(),n.then(()=>{if(f())return;const p=[],g=[],m=[];for(let x=0;x<this.splatMesh.scenes.length;x++){let y=!1;for(let M of e)if(M===x){y=!0;break}if(!y){const M=this.splatMesh.scenes[x];p.push(M.splatBuffer),g.push(this.splatMesh.sceneOptions[x]),m.push({position:M.position.clone(),quaternion:M.quaternion.clone(),scale:M.scale.clone()})}}this.disposeSortWorker(),this.splatMesh.dispose(),this.sceneRevealMode=Va.Instant,this.createSplatMesh(),this.addSplatBuffers(p,g,!0,!1,!0).then(()=>{f()||(u(),this.splatMesh.scenes.forEach((x,y)=>{x.position.copy(m[y].position),x.quaternion.copy(m[y].quaternion),x.scale.copy(m[y].scale)}),this.splatMesh.updateTransforms(),this.splatRenderReady=!1,this.runSplatSort(!0).then(()=>{if(f()){this.splatRenderReady=!0;return}n=this.sortPromise||Promise.resolve(),n.then(()=>{this.splatRenderReady=!0,d()})}))}).catch(x=>{d(x)})})}),this.splatSceneRemovalPromise}start(){if(this.selfDrivenMode)this.webXRMode?this.renderer.setAnimationLoop(this.selfDrivenUpdateFunc):this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc),this.selfDrivenModeRunning=!0;else throw new Error("Cannot start viewer unless it is in self driven mode.")}stop(){this.selfDrivenMode&&this.selfDrivenModeRunning&&(this.webXRMode?this.renderer.setAnimationLoop(null):cancelAnimationFrame(this.requestFrameId),this.selfDrivenModeRunning=!1)}async dispose(){if(this.isDisposingOrDisposed())return this.disposePromise;let e=[],t=[];for(let n in this.splatSceneDownloadPromises)if(this.splatSceneDownloadPromises.hasOwnProperty(n)){const s=this.splatSceneDownloadPromises[n];t.push(s),e.push(s.promise)}return this.sortPromise&&e.push(this.sortPromise),this.disposing=!0,this.disposePromise=Promise.all(e).finally(()=>{this.stop(),this.orthographicControls&&(this.orthographicControls.dispose(),this.orthographicControls=null),this.perspectiveControls&&(this.perspectiveControls.dispose(),this.perspectiveControls=null),this.controls=null,this.splatMesh&&(this.splatMesh.dispose(),this.splatMesh=null),this.sceneHelper&&(this.sceneHelper.dispose(),this.sceneHelper=null),this.resizeObserver&&(this.resizeObserver.unobserve(this.rootElement),this.resizeObserver=null),this.disposeSortWorker(),this.removeEventHandlers(),this.loadingSpinner.removeAllTasks(),this.loadingSpinner.setContainer(null),this.loadingProgressBar.hide(),this.loadingProgressBar.setContainer(null),this.infoPanel.setContainer(null),this.camera=null,this.threeScene=null,this.splatRenderReady=!1,this.initialized=!1,this.renderer&&(this.usingExternalRenderer||(this.rootElement.removeChild(this.renderer.domElement),this.renderer.dispose()),this.renderer=null),this.usingExternalRenderer||document.body.removeChild(this.rootElement),this.sortWorkerSortedIndexes=null,this.sortWorkerIndexesToSort=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.disposed=!0,this.disposing=!1,this.disposePromise=null}),t.forEach(n=>{n.abort("Scene disposed")}),this.disposePromise}selfDrivenUpdate(){this.selfDrivenMode&&!this.webXRMode&&(this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc)),this.update(),this.shouldRender()?(this.render(),this.consecutiveRenderFrames++):this.consecutiveRenderFrames=0,this.renderNextFrame=!1}forceRenderNextFrame(){this.renderNextFrame=!0}update(e,t){this.dropInMode&&this.updateForDropInMode(e,t),!(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())&&(this.controls&&(this.controls.update(),this.camera.isOrthographicCamera&&!this.usingExternalCamera&&os.setCameraPositionFromZoom(this.camera,this.camera,this.controls)),this.runSplatSort(),this.updateForRendererSizeChanges(),this.updateSplatMesh(),this.updateMeshCursor(),this.updateFPS(),this.timingSensitiveUpdates(),this.updateInfoPanel(),this.updateControlPlane())}updateForDropInMode(e,t){this.renderer=e,this.splatMesh&&this.splatMesh.setRenderer(this.renderer),this.camera=t,this.controls&&(this.controls.object=t),this.init()}updateControlPlane(){this.showControlPlane?(this.sceneHelper.setControlPlaneVisibility(!0),this.sceneHelper.positionAndOrientControlPlane(this.controls.target,this.camera.up)):this.sceneHelper.setControlPlaneVisibility(!1)}getSplatMesh(){return this.splatMesh}getSplatScene(e){return this.splatMesh.getScene(e)}getSceneCount(){return this.splatMesh.getSceneCount()}isMobile(){return navigator.userAgent.includes("Mobi")}};Fe(os,"setCameraPositionFromZoom",(function(){const e=new z;return function(t,n,s){const o=1/(n.zoom*.001);e.copy(s.target).sub(t.position).normalize().multiplyScalar(o).negate(),t.position.copy(s.target).add(e)}})()),Fe(os,"setCameraZoomFromPosition",(function(){const e=new z;return function(t,n,s){const o=e.copy(s.target).sub(n.position).length();t.zoom=1/(o*.001)}})());let Nh=os;/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hv=(...a)=>a.filter((e,t,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var cw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=Pn.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:n,className:s="",children:o,iconNode:l,...u},d)=>Pn.createElement("svg",{ref:d,...cw,width:e,height:e,stroke:a,strokeWidth:n?Number(t)*24/Number(e):t,className:hv("lucide",s),...u},[...l.map(([f,p])=>Pn.createElement(f,p)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=(a,e)=>{const t=Pn.forwardRef(({className:n,...s},o)=>Pn.createElement(uw,{ref:o,iconNode:e,className:hv(`lucide-${lw(a)}`,n),...s}));return t.displayName=`${a}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=fn("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=fn("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=fn("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=fn("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=fn("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=fn("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=fn("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=fn("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=fn("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=fn("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=fn("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=fn("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=fn("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=fn("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=fn("MousePointer2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=fn("Move3d",[["path",{d:"M5 3v16h16",key:"1mqmf9"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}],["path",{d:"m2 6 3-3 3 3",key:"tkyvxa"}],["path",{d:"m18 16 3 3-3 3",key:"1d4glt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=fn("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=fn("ScanLine",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=fn("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=fn("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=fn("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=fn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function fp({className:a=""}){return V.jsx("div",{className:`flex items-center ${a}`,children:V.jsx("img",{src:"/state-farm-logo.svg",alt:"State Farm",className:"h-[26px] w-auto"})})}const Tw={},vv=new URLSearchParams(window.location.search),Sv=Tw,ww=vv.get("scene")??Sv.VITE_SCENE_URL??"/demo/merged-rooms.ply",Wo=Sv.VITE_GUIDED_MODE==="1"||vv.get("guided")==="1";function bw(a,e,t){const n=a.camera,s=t.centers[0];let o=Math.atan2(t.forward[0],t.forward[2]),l=Math.asin(Math.max(-.98,Math.min(.98,t.forward[1]))),u=!1,d=0,f=0,p=0,g=performance.now();const m=new Set,x=()=>[Math.sin(o)*Math.cos(l),Math.sin(l),Math.cos(o)*Math.cos(l)],y=()=>{var N,U;const B=x();(N=n.lookAt)==null||N.call(n,n.position.x+B[0],n.position.y+B[1],n.position.z+B[2]),(U=a.forceRenderNextFrame)==null||U.call(a)},M=(B,N,U)=>{const W=t.radius*t.radius;return t.centers.some(X=>{const H=B-X[0],j=N-X[1],q=U-X[2];return H*H+j*j+q*q<=W})},S=(B,N,U)=>{const W=n.position.x+B,X=n.position.y+N,H=n.position.z+U;M(W,X,H)&&n.position.set(W,X,H)},A=()=>{n.position.set(s[0],s[1],s[2]),o=Math.atan2(t.forward[0],t.forward[2]),l=Math.asin(Math.max(-.98,Math.min(.98,t.forward[1]))),y()},T=B=>{const N=Math.min((B-g)/1e3,.05);g=B;const U=[Math.sin(o),0,Math.cos(o)],W=[Math.cos(o),0,-Math.sin(o)];let X=0,H=0,j=0;(m.has("KeyW")||m.has("ArrowUp"))&&(X+=U[0],j+=U[2]),(m.has("KeyS")||m.has("ArrowDown"))&&(X-=U[0],j-=U[2]),(m.has("KeyD")||m.has("ArrowRight"))&&(X+=W[0],j+=W[2]),(m.has("KeyA")||m.has("ArrowLeft"))&&(X-=W[0],j-=W[2]),(m.has("ControlLeft")||m.has("ControlRight")||m.has("KeyE"))&&(H+=1),(m.has("Space")||m.has("KeyQ"))&&(H-=1);const q=Math.hypot(X,H,j);q&&S(X/q*N*.7,H/q*N*.7,j/q*N*.7),y(),p=requestAnimationFrame(T)},P=B=>{["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","Space","ControlLeft","ControlRight","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(B.code)&&(B.preventDefault(),m.add(B.code))},C=B=>m.delete(B.code),b=()=>m.clear(),I=B=>{B.stopPropagation(),u=!0,d=B.clientX,f=B.clientY,e.setPointerCapture(B.pointerId),e.focus()},R=B=>{B.stopPropagation(),u&&(o+=(B.clientX-d)*.003,l=Math.max(-1.45,Math.min(1.45,l+(B.clientY-f)*.003)),d=B.clientX,f=B.clientY)},E=B=>{B.stopPropagation(),u=!1},F=B=>{B.preventDefault(),B.stopPropagation()};return window.addEventListener("keydown",P,!0),window.addEventListener("keyup",C,!0),window.addEventListener("blur",b),e.addEventListener("pointerdown",I,!0),e.addEventListener("pointermove",R,!0),e.addEventListener("pointerup",E,!0),e.addEventListener("pointercancel",E,!0),e.addEventListener("wheel",F,{passive:!1,capture:!0}),A(),p=requestAnimationFrame(T),{reset:A,dispose:()=>{cancelAnimationFrame(p),window.removeEventListener("keydown",P,!0),window.removeEventListener("keyup",C,!0),window.removeEventListener("blur",b),e.removeEventListener("pointerdown",I,!0),e.removeEventListener("pointermove",R,!0),e.removeEventListener("pointerup",E,!0),e.removeEventListener("pointercancel",E,!0),e.removeEventListener("wheel",F,!0)}}}const Rw=[{number:"01",icon:xv,title:"Record every viewpoint",text:"LiDAR dashcams capture synchronized video, metric depth, time, and camera motion before and during the collision."},{number:"02",icon:mv,title:"Reconstruct each stream",text:"A containerized worker projects depth frames into 3D and builds a time-indexed representation of each camera’s view."},{number:"03",icon:vw,title:"Align the vehicles",text:"Shared road geometry, landmarks, timestamps, and positioning data place separate recordings into one coordinate system."},{number:"04",icon:yw,title:"Walk through the accident",text:"The claims workspace lets an investigator scrub through time, move freely around the scene, and compare recorded perspectives."}];function Iw(){Pn.useEffect(()=>{const a=document.querySelectorAll("[data-reveal]"),e=new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting&&(n.target.classList.add("is-visible"),e.unobserve(n.target))})},{threshold:.12,rootMargin:"0px 0px -8% 0px"});return a.forEach(t=>e.observe(t)),()=>e.disconnect()},[])}function Pw(){Iw();const[a,e]=Pn.useState(!1);return Wo?V.jsx("main",{className:"fixed inset-0 bg-[#beb9b0] text-white",children:V.jsx(xx,{})}):V.jsxs("main",{className:"overflow-clip bg-[#f6f5f2] text-[#171717]",children:[V.jsx(Dw,{menuOpen:a,setMenuOpen:e}),V.jsxs("section",{className:"relative flex min-h-screen items-end overflow-hidden border-b border-black/10 bg-white px-5 pb-14 pt-32 md:px-10 md:pb-20 lg:px-16",children:[V.jsx("div",{className:"hero-grid absolute inset-0 opacity-35","aria-hidden":!0}),V.jsxs("div",{className:"relative z-10 max-w-[1120px]",children:[V.jsxs("div",{className:"mb-9 flex items-center gap-5 text-[11px] font-semibold uppercase tracking-[.16em] text-black/48 animate-enter",children:[V.jsx("span",{className:"h-px w-10 bg-[#d71920]"})," Prototype · July 2026"]}),V.jsx("h1",{className:"max-w-[1120px] text-balance text-[clamp(3rem,7vw,7rem)] font-medium leading-[.94] tracking-[-.06em] animate-enter [animation-delay:100ms]",children:"Walk through an accident from every recorded angle."}),V.jsxs("div",{className:"mt-9 grid max-w-[980px] gap-8 md:grid-cols-[1fr_1.2fr] md:items-end animate-enter [animation-delay:200ms]",children:[V.jsx("p",{className:"text-sm font-semibold leading-6 text-[#d71920]",children:"Multiple LiDAR dashcams → one navigable accident scene"}),V.jsxs("div",{children:[V.jsx("p",{className:"max-w-[650px] text-lg leading-8 text-black/62 md:text-xl",children:"A prototype claims tool that combines synchronized camera and LiDAR recordings from multiple vehicles, reconstructs the collision, and lets an investigator move through the event in 3D."}),V.jsxs("a",{href:"#reconstruction",className:"mt-7 inline-flex items-center gap-3 border-b-2 border-[#d71920] pb-2 text-sm font-semibold text-[#b5121b] transition hover:text-[#d71920]",children:["See the result ",V.jsx(dw,{className:"h-4 w-4"})]})]})]})]}),V.jsxs("div",{className:"absolute bottom-7 right-8 hidden items-center gap-3 text-[11px] font-semibold uppercase tracking-[.15em] text-black/45 lg:flex",children:["Scroll to investigate ",V.jsx(hw,{className:"h-4 w-4 animate-bounce"})]})]}),V.jsx("section",{id:"prototype",className:"px-5 py-24 md:px-10 md:py-36 lg:px-16",children:V.jsxs("div",{className:"mx-auto max-w-[1380px]",children:[V.jsx(Ho,{index:"01",text:"The idea"}),V.jsxs("div",{className:"mt-16 grid gap-12 lg:grid-cols-[.75fr_1.45fr] lg:gap-24",children:[V.jsx("p",{"data-reveal":!0,className:"reveal text-sm font-semibold uppercase leading-6 tracking-[.14em] text-black/48",children:"Video gives each driver one view. A spatial reconstruction can bring every available view into the same place and time."}),V.jsxs("div",{"data-reveal":!0,className:"reveal",children:[V.jsx("h2",{className:"text-balance text-[clamp(2.4rem,4.5vw,4.7rem)] font-medium leading-[1.02] tracking-[-.05em]",children:"A walkable record of the collision"}),V.jsx("p",{className:"mt-8 max-w-[790px] text-lg leading-8 text-black/58 md:text-xl",children:"Each participating dashcam sees only part of an accident. The proposed system synchronizes those recordings by time, uses LiDAR to preserve metric geometry, and aligns overlapping observations into one shared reconstruction."}),V.jsx("p",{className:"mt-5 max-w-[790px] text-base leading-7 text-black/52",children:"A claims professional could pause at a moment, move anywhere inside the reconstructed scene, inspect vehicle positions and sight lines, and compare what each camera observed."})]})]}),V.jsxs("div",{className:"mt-20 grid border-y border-black/10 sm:grid-cols-3",children:[V.jsx(Of,{value:"3",label:"Independent views merged"}),V.jsx(Of,{value:"797,928",label:"Rendered Gaussians"}),V.jsx(Of,{value:"≈ 5 cm",label:"Registration RMSE"})]})]})}),V.jsx("section",{id:"reconstruction",className:"bg-[#111] px-4 py-5 text-white md:px-6 md:py-6",children:V.jsxs("div",{className:"mx-auto max-w-[1500px] overflow-hidden border border-white/10 bg-[#090909]",children:[V.jsxs("div",{className:"flex flex-col justify-between gap-5 border-b border-white/10 px-6 py-5 md:flex-row md:items-center md:px-8",children:[V.jsxs("div",{children:[V.jsxs("div",{className:"flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.16em] text-white/48",children:[V.jsx("span",{className:"h-2 w-2 rounded-full bg-[#43b875]"})," Live reconstruction"]}),V.jsx("h2",{className:"mt-2 text-xl font-medium tracking-tight md:text-2xl",children:"Registration proof: three live feeds, one walkable space"})]}),V.jsxs("div",{className:"flex flex-wrap gap-2 text-[11px] font-medium text-white/65",children:[V.jsx(kf,{children:"52 MB PLY"}),V.jsx(kf,{children:"WebGL"}),V.jsx(kf,{children:"Real capture"})]})]}),V.jsx(xx,{})]})}),V.jsx("section",{id:"capture",className:"bg-white px-5 py-24 md:px-10 md:py-36 lg:px-16",children:V.jsxs("div",{className:"mx-auto max-w-[1380px]",children:[V.jsx(Ho,{index:"02",text:"Capture experience"}),V.jsxs("div",{className:"mt-16 grid items-center gap-16 lg:grid-cols-[.9fr_1.1fr] lg:gap-24",children:[V.jsx(Fw,{}),V.jsxs("div",{"data-reveal":!0,className:"reveal",children:[V.jsx("p",{className:"text-xs font-semibold uppercase tracking-[.14em] text-[#d71920]",children:"Native Swift + ARKit"}),V.jsx("h2",{className:"mt-7 text-balance text-[clamp(2.5rem,4.5vw,4.8rem)] font-medium leading-[1] tracking-[-.05em]",children:"The LiDAR dashcam prototype"}),V.jsx("p",{className:"mt-8 max-w-[650px] text-lg leading-8 text-black/58",children:"The iPhone stands in for a future LiDAR-enabled dashcam. It records color, depth, confidence data, camera intrinsics, poses, and timestamps together—the measurements needed to place each observation in a shared accident scene."}),V.jsxs("div",{className:"mt-10 space-y-0 border-t border-black/10",children:[V.jsx(Hf,{icon:dp,title:"Metric LiDAR depth",text:"Preserves road, vehicle, and surrounding geometry"}),V.jsx(Hf,{icon:pv,title:"Synchronized video",text:"Keeps appearance and motion tied to every depth frame"}),V.jsx(Hf,{icon:gw,title:"Time and camera pose",text:"Places observations along a common incident timeline"})]})]})]})]})}),V.jsx("section",{id:"pipeline",className:"px-5 py-24 md:px-10 md:py-36 lg:px-16",children:V.jsxs("div",{className:"mx-auto max-w-[1380px]",children:[V.jsx(Ho,{index:"03",text:"Working pipeline"}),V.jsxs("div",{className:"mt-16 grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-24",children:[V.jsxs("div",{"data-reveal":!0,className:"reveal lg:sticky lg:top-28 lg:self-start",children:[V.jsx("h2",{className:"text-balance text-[clamp(2.5rem,4.5vw,4.8rem)] font-medium leading-[1] tracking-[-.05em]",children:"How it works"}),V.jsx("p",{className:"mt-7 max-w-[570px] text-lg leading-8 text-black/58",children:"The current prototype proves spatial alignment and rendering. The finished pipeline adds clock synchronization and dynamic object tracking so the reconstructed scene can be explored at any moment in the accident."}),V.jsxs("div",{className:"mt-9 flex items-center gap-2 border-l-2 border-[#d71920] pl-4 text-xs font-semibold",children:[V.jsx(mw,{className:"h-4 w-4 text-[#d71920]"})," Uses existing Open3D algorithms; no custom model training"]})]}),V.jsx("div",{className:"space-y-4",children:Rw.map((t,n)=>V.jsx(Nw,{...t,delay:n*80},t.number))})]}),V.jsx(Bw,{})]})}),V.jsx("section",{id:"outcome",className:"bg-[#d71920] px-5 py-24 text-white md:px-10 md:py-36 lg:px-16",children:V.jsxs("div",{className:"mx-auto max-w-[1380px]",children:[V.jsx(Ho,{index:"04",text:"Prototype outcome",light:!0}),V.jsxs("div",{className:"mt-16 grid gap-12 lg:grid-cols-[1.3fr_.7fr] lg:gap-24",children:[V.jsx("h2",{"data-reveal":!0,className:"reveal text-balance text-[clamp(2.8rem,5.5vw,5.8rem)] font-medium leading-[.96] tracking-[-.055em]",children:"The room test proves the spatial foundation."}),V.jsxs("div",{"data-reveal":!0,className:"reveal flex flex-col justify-end",children:[V.jsx("p",{className:"text-lg leading-8 text-white/78",children:"The three recordings were captured separately and had no shared ARKit origin. Aligning them from overlap alone demonstrates the core capability a multi-dashcam system needs: placing independent views into one space."}),V.jsxs("div",{className:"mt-8 space-y-4 text-sm font-medium",children:[V.jsx(Oc,{text:"Main room used as the spatial anchor"}),V.jsx(Oc,{text:"Hallway registered at 0.217 overlap fitness"}),V.jsx(Oc,{text:"Room A registered at 0.398 overlap fitness"}),V.jsx(Oc,{text:"Merged output rendered interactively above"})]})]})]})]})}),V.jsx("section",{className:"bg-white px-5 py-24 md:px-10 md:py-36 lg:px-16",children:V.jsxs("div",{className:"mx-auto max-w-[1380px]",children:[V.jsx(Ho,{index:"05",text:"The iPhone is the dashcam"}),V.jsxs("div",{className:"mt-16 grid items-start gap-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-24",children:[V.jsxs("div",{"data-reveal":!0,className:"reveal",children:[V.jsx("h2",{className:"text-balance text-[clamp(2.7rem,4.8vw,5rem)] font-medium leading-[1] tracking-[-.05em]",children:"No separate camera to install. Mount the iPhone and it records the road."}),V.jsx("p",{className:"mt-8 max-w-[720px] text-xl leading-9 text-black/58",children:"The phone is not a remote control for another dashcam—it is the LiDAR dashcam. Mounted with its rear cameras facing the road and connected to power, the iPhone captures video, depth, pose, and time for the entire trip."}),V.jsx("p",{className:"mt-6 max-w-[720px] text-base leading-7 text-black/52",children:"This fits naturally beside Drive Safe & Save. That program already uses the State Farm app, smartphone sensors and location, and a Bluetooth beacon assigned to the vehicle to recognize and record trips automatically. Scene Capture would be a separate, opt-in mode that uses the same trip start signal to begin a rolling camera and LiDAR recording."}),V.jsxs("div",{className:"mt-10 border-y border-black/10",children:[V.jsx(Uf,{label:"Trip detection",current:"Beacon + phone motion",proposed:"Same automatic trigger"}),V.jsx(Uf,{label:"Phone input",current:"Location + driving sensors",proposed:"Video + LiDAR + camera pose"}),V.jsx(Uf,{label:"Purpose",current:"Driving feedback and savings",proposed:"Accident scene reconstruction"})]}),V.jsx("p",{className:"mt-6 max-w-[700px] text-sm leading-6 text-black/45",children:"Scene Capture is a prototype concept, not a current Drive Safe & Save feature. It would require explicit consent, clear retention controls, safe mounting, power management, redaction, encryption, and review before use in a claim."}),V.jsxs("a",{href:"https://www.statefarm.com/customer-care/download-mobile-apps/drive-safe-and-save-mobile",target:"_blank",rel:"noreferrer",className:"mt-7 inline-flex items-center gap-3 text-sm font-semibold text-[#b5121b] hover:text-[#d71920]",children:["How Drive Safe & Save works today ",V.jsx(Uh,{className:"h-4 w-4"})]})]}),V.jsx(Lw,{})]}),V.jsxs("div",{className:"mt-28 grid gap-12 border-t border-black/10 pt-16 lg:grid-cols-2 lg:gap-24",children:[V.jsx("h2",{"data-reveal":!0,className:"reveal text-balance text-[clamp(2.4rem,4vw,4.2rem)] font-medium leading-[1] tracking-[-.05em]",children:"An accident scene organized by time"}),V.jsxs("div",{"data-reveal":!0,className:"reveal",children:[V.jsx("p",{className:"text-xl leading-9 text-black/58",children:"The finished experience is not just a static model. A timeline controls the reconstructed event: vehicles move through the scene, available camera coverage changes, and the investigator can pause before, during, or after impact and walk to any useful viewpoint."}),V.jsxs("a",{href:"#reconstruction",className:"mt-9 inline-flex items-center gap-3 text-sm font-semibold text-[#b5121b] hover:text-[#d71920]",children:["Return to the live scene ",V.jsx(Uh,{className:"h-4 w-4"})]})]})]})]})}),V.jsx("footer",{className:"border-t border-black/10 bg-[#f6f5f2] px-5 py-10 md:px-10 lg:px-16",children:V.jsxs("div",{className:"mx-auto flex max-w-[1380px] flex-col gap-7 md:flex-row md:items-end md:justify-between",children:[V.jsxs("div",{children:[V.jsx(fp,{}),V.jsx("p",{className:"mt-4 max-w-[430px] text-xs leading-5 text-black/45",children:"Independent product prototype exploring spatial capture for claims. State Farm trademarks are the property of State Farm Mutual Automobile Insurance Company."})]}),V.jsx("div",{className:"text-xs font-semibold uppercase tracking-[.14em] text-black/40",children:"iPhone LiDAR · Open3D · Gaussian splats · React"})]})})]})}function Dw({menuOpen:a,setMenuOpen:e}){return V.jsxs("header",{className:"fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-md",children:[V.jsxs("div",{className:"mx-auto flex h-[74px] max-w-[1510px] items-center justify-between px-5 md:px-10",children:[V.jsx("a",{href:"#","aria-label":"Home",children:V.jsx(fp,{})}),V.jsxs("nav",{className:"hidden items-center gap-8 text-xs font-semibold md:flex",children:[V.jsx("a",{className:"nav-link",href:"#prototype",children:"Concept"}),V.jsx("a",{className:"nav-link",href:"#capture",children:"Capture"}),V.jsx("a",{className:"nav-link",href:"#pipeline",children:"Pipeline"}),V.jsx("a",{className:"nav-link",href:"#outcome",children:"Outcome"}),V.jsx("a",{href:"#reconstruction",className:"bg-[#d71920] px-5 py-2.5 text-white transition hover:bg-[#b5121b]",children:"View 3D scene"})]}),V.jsx("button",{className:"grid h-10 w-10 place-items-center rounded-full border border-black/10 md:hidden",onClick:()=>e(!a),"aria-label":"Toggle menu",children:a?V.jsx(Cw,{className:"h-5 w-5"}):V.jsx(Aw,{className:"h-5 w-5"})})]}),a&&V.jsx("nav",{className:"border-t border-black/10 bg-white p-5 text-sm font-semibold md:hidden",children:V.jsxs("div",{className:"flex flex-col gap-4",children:[V.jsx("a",{href:"#prototype",onClick:()=>e(!1),children:"Concept"}),V.jsx("a",{href:"#capture",onClick:()=>e(!1),children:"Capture"}),V.jsx("a",{href:"#pipeline",onClick:()=>e(!1),children:"Pipeline"}),V.jsx("a",{href:"#reconstruction",onClick:()=>e(!1),children:"View 3D scene"})]})})]})}function xx(){const a=Pn.useRef(null),e=Pn.useRef(null),t=Pn.useRef(null),n=Pn.useRef(null),[s,o]=Pn.useState("idle"),[l,u]=Pn.useState(0),d=Pn.useCallback(async()=>{var y,M,S,A;const m=e.current;if(!m)return;e.current=null,(y=t.current)==null||y.dispose(),t.current=null;const x=m.renderer;m.usingExternalRenderer=!0;try{await m.dispose()}finally{(M=x==null?void 0:x.dispose)==null||M.call(x),(A=(S=x==null?void 0:x.domElement)==null?void 0:S.remove)==null||A.call(S)}},[]),f=Pn.useCallback(async()=>{var m,x;if(!(!a.current||e.current||s==="loading")){o("loading"),u(12);try{const y=new Nh({rootElement:a.current,cameraUp:[0,-1,-.6],initialCameraPosition:[1,-4,6],initialCameraLookAt:[0,0,0],selfDrivenMode:!0,dynamicScene:!0,useBuiltInControls:!Wo,sphericalHarmonicsDegree:0,sharedMemoryForWorkers:!1,sceneRevealMode:Va.Gradual,antialiased:!0});if(e.current=y,u(35),await y.addSplatScene(ww,{format:jn.Ply,progressiveLoad:!0,showLoadingUI:!1,position:[0,0,0],rotation:[1,0,0,0],scale:[1,1,1]}),(x=(m=y.renderer)==null?void 0:m.setClearColor)==null||x.call(m,12499376,1),Wo){y.controls&&(y.controls.enabled=!1),y.perspectiveControls&&(y.perspectiveControls.enabled=!1),y.orthographicControls&&(y.orthographicControls.enabled=!1);const M=await fetch("/runtime/camera-path.json");if(!M.ok)throw new Error("Could not load guided camera path");t.current=bw(y,a.current,await M.json())}u(94),y.start(),u(100),o("ready")}catch(y){console.error(y),o("error"),await d()}}},[d,s]);Pn.useEffect(()=>{const m=n.current;if(!m)return;const x=new IntersectionObserver(([y])=>{y.isIntersecting&&(f(),x.disconnect())},{rootMargin:"180px"});return x.observe(m),()=>x.disconnect()},[f]),Pn.useEffect(()=>()=>{d()},[d]);const p=()=>{var x,y,M,S,A,T;if(t.current)return t.current.reset();const m=e.current;(y=(x=m==null?void 0:m.camera)==null?void 0:x.position)==null||y.set(1,-4,6),(S=(M=m==null?void 0:m.controls)==null?void 0:M.target)==null||S.set(0,0,0),(T=(A=m==null?void 0:m.controls)==null?void 0:A.update)==null||T.call(A)},g=()=>{var m,x;return(x=(m=n.current)==null?void 0:m.requestFullscreen)==null?void 0:x.call(m)};return V.jsxs("div",{ref:n,tabIndex:0,className:Wo?"relative h-screen w-screen bg-[#beb9b0] outline-none":"relative h-[72vh] min-h-[520px] max-h-[880px] bg-[#080808] outline-none",children:[V.jsx("div",{ref:a,className:"absolute inset-0"}),s!=="ready"&&V.jsx("div",{className:"absolute inset-0 z-10 grid place-items-center bg-[#0a0a0a]",children:V.jsx("div",{className:"w-[300px] text-center",children:s==="error"?V.jsxs(V.Fragment,{children:[V.jsx(up,{className:"mx-auto h-8 w-8 text-[#d71920]"}),V.jsx("p",{className:"mt-4 text-sm font-semibold",children:"The scene could not be loaded."}),V.jsx("button",{onClick:()=>{o("idle"),f()},className:"mt-5 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black",children:"Try again"})]}):V.jsxs(V.Fragment,{children:[V.jsx("div",{className:"scan-loader mx-auto",children:V.jsx(dp,{className:"h-7 w-7 text-[#d71920]"})}),V.jsx("p",{className:"mt-5 text-sm font-semibold",children:"Loading the merged scene"}),V.jsx("p",{className:"mt-2 text-xs text-white/45",children:"797,928 Gaussians · this may take a moment"}),V.jsx("div",{className:"mt-5 h-1 overflow-hidden rounded-full bg-white/10",children:V.jsx("div",{className:"h-full bg-[#d71920] transition-all duration-700",style:{width:`${l}%`}})})]})})}),s==="ready"&&V.jsxs(V.Fragment,{children:[V.jsxs("div",{className:"pointer-events-none absolute left-5 top-5 rounded-xl border border-white/10 bg-black/65 px-4 py-3 backdrop-blur md:left-7 md:top-7",children:[V.jsx("p",{className:"text-[10px] font-semibold uppercase tracking-[.15em] text-white/45",children:"Interactive scene"}),V.jsx("p",{className:"mt-1.5 text-sm font-medium",children:Wo?"Drag to look · WASD to move · Ctrl up / Space down · boundary locked":"Drag to orbit · scroll to zoom"})]}),V.jsxs("div",{className:"absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 bg-black/75 p-1.5 backdrop-blur",children:[V.jsx(zf,{label:"Orbit",children:V.jsx(gv,{className:"h-4 w-4"})}),V.jsx(zf,{label:"Reset",onClick:p,children:V.jsx(_w,{className:"h-4 w-4"})}),V.jsx(zf,{label:"Fullscreen",onClick:g,children:V.jsx(Sw,{className:"h-4 w-4"})})]})]})]})}function Fw(){return V.jsxs("div",{"data-reveal":!0,className:"reveal mx-auto w-full max-w-[440px]",children:[V.jsxs("div",{className:"phone-shell relative mx-auto aspect-[.52] w-[78%] max-w-[330px] overflow-hidden rounded-[54px] border-[9px] border-[#171717] bg-[#222] shadow-2xl",children:[V.jsx("div",{className:"absolute left-1/2 top-2 z-20 h-7 w-24 -translate-x-1/2 rounded-full bg-black"}),V.jsxs("div",{className:"capture-scene absolute inset-0",children:[V.jsx("div",{className:"absolute inset-0 opacity-55",children:V.jsx("div",{className:"lidar-lines"})}),V.jsxs("div",{className:"absolute inset-x-0 top-0 flex items-center gap-3 border-b border-white/15 bg-white/95 px-4 pb-3 pt-12 text-black",children:[V.jsx("div",{className:"grid h-8 w-8 place-items-center rounded-full bg-[#d71920] text-[9px] font-bold text-white",children:"SF"}),V.jsxs("div",{children:[V.jsx("p",{className:"text-xs font-bold tracking-wider text-[#d71920]",children:"STATE FARM"}),V.jsx("p",{className:"text-[10px] text-black/55",children:"Scene Capture"})]}),V.jsxs("div",{className:"ml-auto flex items-center gap-1.5 text-[10px] font-semibold",children:[V.jsx("span",{className:"h-2 w-2 rounded-full bg-[#34a464]"})," Ready"]})]}),V.jsxs("div",{className:"absolute bottom-0 inset-x-0 rounded-t-[28px] bg-white px-5 pb-8 pt-6 text-black",children:[V.jsx("p",{className:"text-lg font-bold",children:"Ready to scan"}),V.jsx("p",{className:"mt-1 text-[11px] text-black/50",children:"Record a complete view of the surrounding area."}),V.jsxs("div",{className:"mt-5 flex h-12 items-center justify-center gap-2 rounded-xl bg-[#d71920] text-sm font-semibold text-white",children:[V.jsx(pw,{className:"h-5 w-5"})," Start Capture"]}),V.jsxs("div",{className:"mt-3 grid grid-cols-2 gap-2",children:[V.jsxs("div",{className:"phone-action",children:[V.jsx(up,{className:"h-4 w-4"})," Preview"]}),V.jsxs("div",{className:"phone-action",children:[V.jsx(Ew,{className:"h-4 w-4"})," Export"]})]})]})]})]}),V.jsx("p",{className:"mt-7 text-center text-xs font-medium text-black/42",children:"SwiftUI capture interface · running on iPhone Pro"})]})}function Lw(){return V.jsx("div",{"data-reveal":!0,className:"reveal mx-auto w-full max-w-[430px] lg:pt-4",children:V.jsx("div",{className:"border border-black/15 bg-[#f7f7f7] p-3 shadow-[12px_14px_0_0_#eceae6]",children:V.jsxs("div",{className:"bg-white px-5 pb-5 pt-6",children:[V.jsxs("div",{className:"flex items-center justify-between border-b border-black/10 pb-5",children:[V.jsx(fp,{}),V.jsx("div",{className:"grid h-9 w-9 place-items-center rounded-full bg-[#f2f2f2] text-xs font-semibold",children:"EA"})]}),V.jsxs("div",{className:"pt-6",children:[V.jsx("p",{className:"text-xs font-semibold uppercase tracking-[.14em] text-black/42",children:"Safe & Save"}),V.jsx("h3",{className:"mt-2 text-2xl font-semibold tracking-tight",children:"Your vehicle"}),V.jsx("div",{className:"mt-5 border border-black/10 p-4",children:V.jsxs("div",{className:"flex items-center justify-between",children:[V.jsxs("div",{children:[V.jsx("p",{className:"text-sm font-semibold",children:"2024 Vehicle"}),V.jsx("p",{className:"mt-1 text-xs text-black/45",children:"Beacon connected"})]}),V.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-[#21945a]"})]})}),V.jsxs("div",{className:"mt-4 border-2 border-[#d71920] bg-[#fffafa] p-5",children:[V.jsxs("div",{className:"flex items-start justify-between gap-5",children:[V.jsx("div",{className:"grid h-10 w-10 shrink-0 place-items-center bg-[#d71920] text-white",children:V.jsx(pv,{className:"h-5 w-5"})}),V.jsx("span",{className:"bg-[#f3dddd] px-2 py-1 text-[9px] font-bold uppercase tracking-[.12em] text-[#a90f18]",children:"Concept"})]}),V.jsx("h4",{className:"mt-5 text-lg font-semibold",children:"Scene Capture"}),V.jsx("p",{className:"mt-2 text-sm leading-6 text-black/55",children:"Use this iPhone as a LiDAR dashcam whenever a trip is active."}),V.jsxs("div",{className:"mt-5 space-y-3 border-y border-black/10 py-4 text-xs",children:[V.jsxs("div",{className:"flex items-center justify-between",children:[V.jsx("span",{className:"text-black/52",children:"Trip detection"}),V.jsx("span",{className:"font-semibold",children:"Automatic"})]}),V.jsxs("div",{className:"flex items-center justify-between",children:[V.jsx("span",{className:"text-black/52",children:"Rolling history"}),V.jsx("span",{className:"font-semibold",children:"Last 10 minutes"})]}),V.jsxs("div",{className:"flex items-center justify-between",children:[V.jsx("span",{className:"text-black/52",children:"Upload"}),V.jsx("span",{className:"font-semibold",children:"Only after an incident"})]})]}),V.jsxs("button",{className:"mt-5 flex w-full items-center justify-center gap-2 bg-[#d71920] px-4 py-3 text-sm font-semibold text-white",children:[V.jsx(dp,{className:"h-4 w-4"})," Set up Scene Capture"]})]}),V.jsx("p",{className:"mt-4 text-center text-[10px] leading-4 text-black/38",children:"Proposed placement inside the existing State Farm app"})]})]})})})}function Uf({label:a,current:e,proposed:t}){return V.jsxs("div",{className:"grid gap-3 border-b border-black/10 py-5 last:border-b-0 sm:grid-cols-[.65fr_1fr_1fr] sm:items-center",children:[V.jsx("p",{className:"text-xs font-semibold uppercase tracking-[.12em] text-black/40",children:a}),V.jsxs("div",{children:[V.jsx("p",{className:"text-[10px] font-semibold uppercase tracking-[.1em] text-black/35",children:"Drive Safe & Save today"}),V.jsx("p",{className:"mt-1.5 text-sm font-medium",children:e})]}),V.jsxs("div",{children:[V.jsx("p",{className:"text-[10px] font-semibold uppercase tracking-[.1em] text-[#b5121b]",children:"Scene Capture proposal"}),V.jsx("p",{className:"mt-1.5 text-sm font-medium",children:t})]})]})}function Bw(){const a=[{icon:xv,label:"iPhone LiDAR",sub:"Swift + ARKit"},{icon:xw,label:"Capture ZIP",sub:"Depth + RGB + poses"},{icon:mv,label:"Docker worker",sub:"Open3D registration"},{icon:up,label:"Gaussian PLY",sub:"Merged metric scene"},{icon:gv,label:"Web viewer",sub:"React + WebGL"}];return V.jsxs("div",{"data-reveal":!0,className:"reveal mt-24 border border-black/10 bg-[#171717] p-6 text-white md:p-10",children:[V.jsxs("div",{className:"flex items-center justify-between",children:[V.jsx("p",{className:"text-xs font-semibold uppercase tracking-[.15em] text-white/45",children:"Prototype architecture"}),V.jsx(Mw,{className:"h-5 w-5 text-white/35"})]}),V.jsx("div",{className:"mt-10 grid gap-4 md:grid-cols-5",children:a.map(({icon:e,label:t,sub:n},s)=>V.jsxs("div",{className:"relative border border-white/10 bg-white/[.04] p-5",children:[V.jsx(e,{className:"h-5 w-5 text-[#ef3940]"}),V.jsx("p",{className:"mt-8 text-sm font-semibold",children:t}),V.jsx("p",{className:"mt-1 text-[11px] text-white/45",children:n}),s<a.length-1&&V.jsx(Uh,{className:"absolute -right-5 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-white/25 md:block"})]},t))})]})}function Ho({index:a,text:e,light:t=!1}){return V.jsxs("div",{className:`flex items-center gap-4 border-b pb-4 text-[11px] font-semibold uppercase tracking-[.16em] ${t?"border-white/25 text-white/65":"border-black/10 text-black/45"}`,children:[V.jsx("span",{className:t?"text-white":"text-[#d71920]",children:a}),V.jsx("span",{children:e})]})}function Of({value:a,label:e}){return V.jsxs("div",{"data-reveal":!0,className:"reveal border-b border-black/10 py-8 sm:border-b-0 sm:border-r sm:px-8 sm:first:pl-0 sm:last:border-r-0",children:[V.jsx("p",{className:"text-[clamp(2.4rem,4vw,4.7rem)] font-medium tracking-[-.055em]",children:a}),V.jsx("p",{className:"mt-2 text-xs font-semibold uppercase tracking-[.13em] text-black/42",children:e})]})}function kf({children:a}){return V.jsx("span",{className:"border border-white/10 bg-white/[.06] px-3 py-1.5",children:a})}function zf({label:a,children:e,onClick:t}){return V.jsxs("button",{onClick:t,className:"flex h-10 items-center gap-2 rounded-full px-3 text-xs font-medium text-white/70 transition hover:bg-white/10 hover:text-white","aria-label":a,children:[e,V.jsx("span",{className:"hidden sm:inline",children:a})]})}function Hf({icon:a,title:e,text:t}){return V.jsxs("div",{className:"grid grid-cols-[auto_1fr] gap-4 border-b border-black/10 py-5",children:[V.jsx("div",{className:"grid h-10 w-10 place-items-center rounded-full bg-[#f4f3f1]",children:V.jsx(a,{className:"h-4 w-4 text-[#d71920]"})}),V.jsxs("div",{children:[V.jsx("p",{className:"text-sm font-semibold",children:e}),V.jsx("p",{className:"mt-1 text-sm text-black/48",children:t})]})]})}function Nw({number:a,icon:e,title:t,text:n,delay:s}){return V.jsxs("article",{"data-reveal":!0,className:"reveal group grid gap-6 border-t border-black/15 bg-white p-6 transition duration-300 hover:border-[#d71920] md:grid-cols-[60px_1fr] md:p-8",style:{transitionDelay:`${s}ms`},children:[V.jsxs("div",{className:"flex items-center justify-between md:block",children:[V.jsx("span",{className:"text-xs font-semibold text-[#d71920]",children:a}),V.jsx("div",{className:"mt-0 grid h-11 w-11 place-items-center bg-[#f4f3f1] md:mt-8",children:V.jsx(e,{className:"h-5 w-5"})})]}),V.jsxs("div",{children:[V.jsx("h3",{className:"text-2xl font-medium tracking-tight",children:t}),V.jsx("p",{className:"mt-3 max-w-[600px] text-base leading-7 text-black/52",children:n})]})]})}function Oc({text:a}){return V.jsxs("div",{className:"flex items-center gap-3",children:[V.jsx("span",{className:"grid h-5 w-5 place-items-center rounded-full bg-white text-[#d71920]",children:V.jsx(fw,{className:"h-3 w-3 stroke-[3]"})}),V.jsx("span",{children:a})]})}uA.createRoot(document.getElementById("root")).render(V.jsx(iA.StrictMode,{children:V.jsx(Pw,{})}));
