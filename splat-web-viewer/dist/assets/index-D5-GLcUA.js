var vy=Object.defineProperty;var Sy=(a,e,t)=>e in a?vy(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var Fe=(a,e,t)=>Sy(a,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();function Vx(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var tf={exports:{}},No={},nf={exports:{}},Mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function yy(){if(Zg)return Mt;Zg=1;var a=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;function g(O){return O===null||typeof O!="object"?null:(O=m&&O[m]||O["@@iterator"],typeof O=="function"?O:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,_={};function v(O,ee,ye){this.props=O,this.context=ee,this.refs=_,this.updater=ye||x}v.prototype.isReactComponent={},v.prototype.setState=function(O,ee){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ee,"setState")},v.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function y(){}y.prototype=v.prototype;function T(O,ee,ye){this.props=O,this.context=ee,this.refs=_,this.updater=ye||x}var P=T.prototype=new y;P.constructor=T,A(P,v.prototype),P.isPureReactComponent=!0;var C=Array.isArray,w=Object.prototype.hasOwnProperty,I={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function M(O,ee,ye){var Ce,be={},se=null,xe=null;if(ee!=null)for(Ce in ee.ref!==void 0&&(xe=ee.ref),ee.key!==void 0&&(se=""+ee.key),ee)w.call(ee,Ce)&&!R.hasOwnProperty(Ce)&&(be[Ce]=ee[Ce]);var pe=arguments.length-2;if(pe===1)be.children=ye;else if(1<pe){for(var Re=Array(pe),Oe=0;Oe<pe;Oe++)Re[Oe]=arguments[Oe+2];be.children=Re}if(O&&O.defaultProps)for(Ce in pe=O.defaultProps,pe)be[Ce]===void 0&&(be[Ce]=pe[Ce]);return{$$typeof:a,type:O,key:se,ref:xe,props:be,_owner:I.current}}function F(O,ee){return{$$typeof:a,type:O.type,key:ee,ref:O.ref,props:O.props,_owner:O._owner}}function B(O){return typeof O=="object"&&O!==null&&O.$$typeof===a}function N(O){var ee={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ye){return ee[ye]})}var H=/\/+/g;function q(O,ee){return typeof O=="object"&&O!==null&&O.key!=null?N(""+O.key):ee.toString(36)}function Y(O,ee,ye,Ce,be){var se=typeof O;(se==="undefined"||se==="boolean")&&(O=null);var xe=!1;if(O===null)xe=!0;else switch(se){case"string":case"number":xe=!0;break;case"object":switch(O.$$typeof){case a:case e:xe=!0}}if(xe)return xe=O,be=be(xe),O=Ce===""?"."+q(xe,0):Ce,C(be)?(ye="",O!=null&&(ye=O.replace(H,"$&/")+"/"),Y(be,ee,ye,"",function(Oe){return Oe})):be!=null&&(B(be)&&(be=F(be,ye+(!be.key||xe&&xe.key===be.key?"":(""+be.key).replace(H,"$&/")+"/")+O)),ee.push(be)),1;if(xe=0,Ce=Ce===""?".":Ce+":",C(O))for(var pe=0;pe<O.length;pe++){se=O[pe];var Re=Ce+q(se,pe);xe+=Y(se,ee,ye,Re,be)}else if(Re=g(O),typeof Re=="function")for(O=Re.call(O),pe=0;!(se=O.next()).done;)se=se.value,Re=Ce+q(se,pe++),xe+=Y(se,ee,ye,Re,be);else if(se==="object")throw ee=String(O),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return xe}function G(O,ee,ye){if(O==null)return O;var Ce=[],be=0;return Y(O,Ce,"","",function(se){return ee.call(ye,se,be++)}),Ce}function K(O){if(O._status===-1){var ee=O._result;ee=ee(),ee.then(function(ye){(O._status===0||O._status===-1)&&(O._status=1,O._result=ye)},function(ye){(O._status===0||O._status===-1)&&(O._status=2,O._result=ye)}),O._status===-1&&(O._status=0,O._result=ee)}if(O._status===1)return O._result.default;throw O._result}var j={current:null},k={transition:null},Q={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:k,ReactCurrentOwner:I};function J(){throw Error("act(...) is not supported in production builds of React.")}return Mt.Children={map:G,forEach:function(O,ee,ye){G(O,function(){ee.apply(this,arguments)},ye)},count:function(O){var ee=0;return G(O,function(){ee++}),ee},toArray:function(O){return G(O,function(ee){return ee})||[]},only:function(O){if(!B(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Mt.Component=v,Mt.Fragment=t,Mt.Profiler=s,Mt.PureComponent=T,Mt.StrictMode=n,Mt.Suspense=d,Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,Mt.act=J,Mt.cloneElement=function(O,ee,ye){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ce=A({},O.props),be=O.key,se=O.ref,xe=O._owner;if(ee!=null){if(ee.ref!==void 0&&(se=ee.ref,xe=I.current),ee.key!==void 0&&(be=""+ee.key),O.type&&O.type.defaultProps)var pe=O.type.defaultProps;for(Re in ee)w.call(ee,Re)&&!R.hasOwnProperty(Re)&&(Ce[Re]=ee[Re]===void 0&&pe!==void 0?pe[Re]:ee[Re])}var Re=arguments.length-2;if(Re===1)Ce.children=ye;else if(1<Re){pe=Array(Re);for(var Oe=0;Oe<Re;Oe++)pe[Oe]=arguments[Oe+2];Ce.children=pe}return{$$typeof:a,type:O.type,key:be,ref:se,props:Ce,_owner:xe}},Mt.createContext=function(O){return O={$$typeof:l,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:o,_context:O},O.Consumer=O},Mt.createElement=M,Mt.createFactory=function(O){var ee=M.bind(null,O);return ee.type=O,ee},Mt.createRef=function(){return{current:null}},Mt.forwardRef=function(O){return{$$typeof:u,render:O}},Mt.isValidElement=B,Mt.lazy=function(O){return{$$typeof:p,_payload:{_status:-1,_result:O},_init:K}},Mt.memo=function(O,ee){return{$$typeof:f,type:O,compare:ee===void 0?null:ee}},Mt.startTransition=function(O){var ee=k.transition;k.transition={};try{O()}finally{k.transition=ee}},Mt.unstable_act=J,Mt.useCallback=function(O,ee){return j.current.useCallback(O,ee)},Mt.useContext=function(O){return j.current.useContext(O)},Mt.useDebugValue=function(){},Mt.useDeferredValue=function(O){return j.current.useDeferredValue(O)},Mt.useEffect=function(O,ee){return j.current.useEffect(O,ee)},Mt.useId=function(){return j.current.useId()},Mt.useImperativeHandle=function(O,ee,ye){return j.current.useImperativeHandle(O,ee,ye)},Mt.useInsertionEffect=function(O,ee){return j.current.useInsertionEffect(O,ee)},Mt.useLayoutEffect=function(O,ee){return j.current.useLayoutEffect(O,ee)},Mt.useMemo=function(O,ee){return j.current.useMemo(O,ee)},Mt.useReducer=function(O,ee,ye){return j.current.useReducer(O,ee,ye)},Mt.useRef=function(O){return j.current.useRef(O)},Mt.useState=function(O){return j.current.useState(O)},Mt.useSyncExternalStore=function(O,ee,ye){return j.current.useSyncExternalStore(O,ee,ye)},Mt.useTransition=function(){return j.current.useTransition()},Mt.version="18.3.1",Mt}var Jg;function Jh(){return Jg||(Jg=1,nf.exports=yy()),nf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0;function Ay(){if(e0)return No;e0=1;var a=Jh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(u,d,f){var p,m={},g=null,x=null;f!==void 0&&(g=""+f),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(x=d.ref);for(p in d)n.call(d,p)&&!o.hasOwnProperty(p)&&(m[p]=d[p]);if(u&&u.defaultProps)for(p in d=u.defaultProps,d)m[p]===void 0&&(m[p]=d[p]);return{$$typeof:e,type:u,key:g,ref:x,props:m,_owner:s.current}}return No.Fragment=t,No.jsx=l,No.jsxs=l,No}var t0;function _y(){return t0||(t0=1,tf.exports=Ay()),tf.exports}var V=_y(),An=Jh();const Ey=Vx(An);var pc={},rf={exports:{}},ui={},sf={exports:{}},af={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n0;function My(){return n0||(n0=1,(function(a){function e(k,Q){var J=k.length;k.push(Q);e:for(;0<J;){var O=J-1>>>1,ee=k[O];if(0<s(ee,Q))k[O]=Q,k[J]=ee,J=O;else break e}}function t(k){return k.length===0?null:k[0]}function n(k){if(k.length===0)return null;var Q=k[0],J=k.pop();if(J!==Q){k[0]=J;e:for(var O=0,ee=k.length,ye=ee>>>1;O<ye;){var Ce=2*(O+1)-1,be=k[Ce],se=Ce+1,xe=k[se];if(0>s(be,J))se<ee&&0>s(xe,be)?(k[O]=xe,k[se]=J,O=se):(k[O]=be,k[Ce]=J,O=Ce);else if(se<ee&&0>s(xe,J))k[O]=xe,k[se]=J,O=se;else break e}}return Q}function s(k,Q){var J=k.sortIndex-Q.sortIndex;return J!==0?J:k.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;a.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();a.unstable_now=function(){return l.now()-u}}var d=[],f=[],p=1,m=null,g=3,x=!1,A=!1,_=!1,v=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(k){for(var Q=t(f);Q!==null;){if(Q.callback===null)n(f);else if(Q.startTime<=k)n(f),Q.sortIndex=Q.expirationTime,e(d,Q);else break;Q=t(f)}}function C(k){if(_=!1,P(k),!A)if(t(d)!==null)A=!0,K(w);else{var Q=t(f);Q!==null&&j(C,Q.startTime-k)}}function w(k,Q){A=!1,_&&(_=!1,y(M),M=-1),x=!0;var J=g;try{for(P(Q),m=t(d);m!==null&&(!(m.expirationTime>Q)||k&&!N());){var O=m.callback;if(typeof O=="function"){m.callback=null,g=m.priorityLevel;var ee=O(m.expirationTime<=Q);Q=a.unstable_now(),typeof ee=="function"?m.callback=ee:m===t(d)&&n(d),P(Q)}else n(d);m=t(d)}if(m!==null)var ye=!0;else{var Ce=t(f);Ce!==null&&j(C,Ce.startTime-Q),ye=!1}return ye}finally{m=null,g=J,x=!1}}var I=!1,R=null,M=-1,F=5,B=-1;function N(){return!(a.unstable_now()-B<F)}function H(){if(R!==null){var k=a.unstable_now();B=k;var Q=!0;try{Q=R(!0,k)}finally{Q?q():(I=!1,R=null)}}else I=!1}var q;if(typeof T=="function")q=function(){T(H)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,G=Y.port2;Y.port1.onmessage=H,q=function(){G.postMessage(null)}}else q=function(){v(H,0)};function K(k){R=k,I||(I=!0,q())}function j(k,Q){M=v(function(){k(a.unstable_now())},Q)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(k){k.callback=null},a.unstable_continueExecution=function(){A||x||(A=!0,K(w))},a.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<k?Math.floor(1e3/k):5},a.unstable_getCurrentPriorityLevel=function(){return g},a.unstable_getFirstCallbackNode=function(){return t(d)},a.unstable_next=function(k){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var J=g;g=Q;try{return k()}finally{g=J}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(k,Q){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var J=g;g=k;try{return Q()}finally{g=J}},a.unstable_scheduleCallback=function(k,Q,J){var O=a.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?O+J:O):J=O,k){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=J+ee,k={id:p++,callback:Q,priorityLevel:k,startTime:J,expirationTime:ee,sortIndex:-1},J>O?(k.sortIndex=J,e(f,k),t(d)===null&&k===t(f)&&(_?(y(M),M=-1):_=!0,j(C,J-O))):(k.sortIndex=ee,e(d,k),A||x||(A=!0,K(w))),k},a.unstable_shouldYield=N,a.unstable_wrapCallback=function(k){var Q=g;return function(){var J=g;g=Q;try{return k.apply(this,arguments)}finally{g=J}}}})(af)),af}var i0;function Cy(){return i0||(i0=1,sf.exports=My()),sf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r0;function Ty(){if(r0)return ui;r0=1;var a=Jh(),e=Cy();function t(i){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+i,c=1;c<arguments.length;c++)r+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,s={};function o(i,r){l(i,r),l(i+"Capture",r)}function l(i,r){for(s[i]=r,i=0;i<r.length;i++)n.add(r[i])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function g(i){return d.call(m,i)?!0:d.call(p,i)?!1:f.test(i)?m[i]=!0:(p[i]=!0,!1)}function x(i,r,c,h){if(c!==null&&c.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return h?!1:c!==null?!c.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function A(i,r,c,h){if(r===null||typeof r>"u"||x(i,r,c,h))return!0;if(h)return!1;if(c!==null)switch(c.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function _(i,r,c,h,S,E,D){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=h,this.attributeNamespace=S,this.mustUseProperty=c,this.propertyName=i,this.type=r,this.sanitizeURL=E,this.removeEmptyString=D}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){v[i]=new _(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var r=i[0];v[r]=new _(r,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){v[i]=new _(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){v[i]=new _(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){v[i]=new _(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){v[i]=new _(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){v[i]=new _(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){v[i]=new _(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){v[i]=new _(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function T(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var r=i.replace(y,T);v[r]=new _(r,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var r=i.replace(y,T);v[r]=new _(r,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var r=i.replace(y,T);v[r]=new _(r,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){v[i]=new _(i,1,!1,i.toLowerCase(),null,!1,!1)}),v.xlinkHref=new _("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){v[i]=new _(i,1,!1,i.toLowerCase(),null,!0,!0)});function P(i,r,c,h){var S=v.hasOwnProperty(r)?v[r]:null;(S!==null?S.type!==0:h||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(A(r,c,S,h)&&(c=null),h||S===null?g(r)&&(c===null?i.removeAttribute(r):i.setAttribute(r,""+c)):S.mustUseProperty?i[S.propertyName]=c===null?S.type===3?!1:"":c:(r=S.attributeName,h=S.attributeNamespace,c===null?i.removeAttribute(r):(S=S.type,c=S===3||S===4&&c===!0?"":""+c,h?i.setAttributeNS(h,r,c):i.setAttribute(r,c))))}var C=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),I=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),N=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),j=Symbol.for("react.offscreen"),k=Symbol.iterator;function Q(i){return i===null||typeof i!="object"?null:(i=k&&i[k]||i["@@iterator"],typeof i=="function"?i:null)}var J=Object.assign,O;function ee(i){if(O===void 0)try{throw Error()}catch(c){var r=c.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+i}var ye=!1;function Ce(i,r){if(!i||ye)return"";ye=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(he){var h=he}Reflect.construct(i,[],r)}else{try{r.call()}catch(he){h=he}i.call(r.prototype)}else{try{throw Error()}catch(he){h=he}i()}}catch(he){if(he&&h&&typeof he.stack=="string"){for(var S=he.stack.split(`
`),E=h.stack.split(`
`),D=S.length-1,W=E.length-1;1<=D&&0<=W&&S[D]!==E[W];)W--;for(;1<=D&&0<=W;D--,W--)if(S[D]!==E[W]){if(D!==1||W!==1)do if(D--,W--,0>W||S[D]!==E[W]){var Z=`
`+S[D].replace(" at new "," at ");return i.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",i.displayName)),Z}while(1<=D&&0<=W);break}}}finally{ye=!1,Error.prepareStackTrace=c}return(i=i?i.displayName||i.name:"")?ee(i):""}function be(i){switch(i.tag){case 5:return ee(i.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return i=Ce(i.type,!1),i;case 11:return i=Ce(i.type.render,!1),i;case 1:return i=Ce(i.type,!0),i;default:return""}}function se(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case R:return"Fragment";case I:return"Portal";case F:return"Profiler";case M:return"StrictMode";case q:return"Suspense";case Y:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case N:return(i.displayName||"Context")+".Consumer";case B:return(i._context.displayName||"Context")+".Provider";case H:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case G:return r=i.displayName||null,r!==null?r:se(i.type)||"Memo";case K:r=i._payload,i=i._init;try{return se(i(r))}catch{}}return null}function xe(i){var r=i.type;switch(i.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=r.render,i=i.displayName||i.name||"",r.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(r);case 8:return r===M?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function pe(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Re(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Oe(i){var r=Re(i)?"checked":"value",c=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),h=""+i[r];if(!i.hasOwnProperty(r)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var S=c.get,E=c.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return S.call(this)},set:function(D){h=""+D,E.call(this,D)}}),Object.defineProperty(i,r,{enumerable:c.enumerable}),{getValue:function(){return h},setValue:function(D){h=""+D},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function Ge(i){i._valueTracker||(i._valueTracker=Oe(i))}function xt(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var c=r.getValue(),h="";return i&&(h=Re(i)?i.checked?"true":"false":i.value),i=h,i!==c?(r.setValue(i),!0):!1}function Ye(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function dt(i,r){var c=r.checked;return J({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:c??i._wrapperState.initialChecked})}function nt(i,r){var c=r.defaultValue==null?"":r.defaultValue,h=r.checked!=null?r.checked:r.defaultChecked;c=pe(r.value!=null?r.value:c),i._wrapperState={initialChecked:h,initialValue:c,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function pt(i,r){r=r.checked,r!=null&&P(i,"checked",r,!1)}function Rt(i,r){pt(i,r);var c=pe(r.value),h=r.type;if(c!=null)h==="number"?(c===0&&i.value===""||i.value!=c)&&(i.value=""+c):i.value!==""+c&&(i.value=""+c);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}r.hasOwnProperty("value")?Tt(i,r.type,c):r.hasOwnProperty("defaultValue")&&Tt(i,r.type,pe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(i.defaultChecked=!!r.defaultChecked)}function yt(i,r,c){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var h=r.type;if(!(h!=="submit"&&h!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+i._wrapperState.initialValue,c||r===i.value||(i.value=r),i.defaultValue=r}c=i.name,c!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,c!==""&&(i.name=c)}function Tt(i,r,c){(r!=="number"||Ye(i.ownerDocument)!==i)&&(c==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+c&&(i.defaultValue=""+c))}var Bt=Array.isArray;function Ut(i,r,c,h){if(i=i.options,r){r={};for(var S=0;S<c.length;S++)r["$"+c[S]]=!0;for(c=0;c<i.length;c++)S=r.hasOwnProperty("$"+i[c].value),i[c].selected!==S&&(i[c].selected=S),S&&h&&(i[c].defaultSelected=!0)}else{for(c=""+pe(c),r=null,S=0;S<i.length;S++){if(i[S].value===c){i[S].selected=!0,h&&(i[S].defaultSelected=!0);return}r!==null||i[S].disabled||(r=i[S])}r!==null&&(r.selected=!0)}}function qt(i,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return J({},r,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function ne(i,r){var c=r.value;if(c==null){if(c=r.children,r=r.defaultValue,c!=null){if(r!=null)throw Error(t(92));if(Bt(c)){if(1<c.length)throw Error(t(93));c=c[0]}r=c}r==null&&(r=""),c=r}i._wrapperState={initialValue:pe(c)}}function pn(i,r){var c=pe(r.value),h=pe(r.defaultValue);c!=null&&(c=""+c,c!==i.value&&(i.value=c),r.defaultValue==null&&i.defaultValue!==c&&(i.defaultValue=c)),h!=null&&(i.defaultValue=""+h)}function Pt(i){var r=i.textContent;r===i._wrapperState.initialValue&&r!==""&&r!==null&&(i.value=r)}function z(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function b(i,r){return i==null||i==="http://www.w3.org/1999/xhtml"?z(r):i==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var ae,de=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,c,h,S){MSApp.execUnsafeLocalFunction(function(){return i(r,c,h,S)})}:i})(function(i,r){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=r;else{for(ae=ae||document.createElement("div"),ae.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ae.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;r.firstChild;)i.appendChild(r.firstChild)}});function ge(i,r){if(r){var c=i.firstChild;if(c&&c===i.lastChild&&c.nodeType===3){c.nodeValue=r;return}}i.textContent=r}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},X=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(i){X.forEach(function(r){r=r+i.charAt(0).toUpperCase()+i.substring(1),we[r]=we[i]})});function ie(i,r,c){return r==null||typeof r=="boolean"||r===""?"":c||typeof r!="number"||r===0||we.hasOwnProperty(i)&&we[i]?(""+r).trim():r+"px"}function me(i,r){i=i.style;for(var c in r)if(r.hasOwnProperty(c)){var h=c.indexOf("--")===0,S=ie(c,r[c],h);c==="float"&&(c="cssFloat"),h?i.setProperty(c,S):i[c]=S}}var Me=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function He(i,r){if(r){if(Me[i]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Le(i,r){if(i.indexOf("-")===-1)return typeof r.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ie=null;function st(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var lt=null,at=null,$=null;function De(i){if(i=Ao(i)){if(typeof lt!="function")throw Error(t(280));var r=i.stateNode;r&&(r=Rl(r),lt(i.stateNode,i.type,r))}}function Se(i){at?$?$.push(i):$=[i]:at=i}function Be(){if(at){var i=at,r=$;if($=at=null,De(i),r)for(i=0;i<r.length;i++)De(r[i])}}function ke(i,r){return i(r)}function Ae(){}var Je=!1;function $e(i,r,c){if(Je)return i(r,c);Je=!0;try{return ke(i,r,c)}finally{Je=!1,(at!==null||$!==null)&&(Ae(),Be())}}function Xt(i,r){var c=i.stateNode;if(c===null)return null;var h=Rl(c);if(h===null)return null;c=h[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(c&&typeof c!="function")throw Error(t(231,r,typeof c));return c}var Ot=!1;if(u)try{var On={};Object.defineProperty(On,"passive",{get:function(){Ot=!0}}),window.addEventListener("test",On,On),window.removeEventListener("test",On,On)}catch{Ot=!1}function Ci(i,r,c,h,S,E,D,W,Z){var he=Array.prototype.slice.call(arguments,3);try{r.apply(c,he)}catch(Ee){this.onError(Ee)}}var ms=!1,js=null,gs=!1,xs=null,Mu={onError:function(i){ms=!0,js=i}};function dl(i,r,c,h,S,E,D,W,Z){ms=!1,js=null,Ci.apply(Mu,arguments)}function fl(i,r,c,h,S,E,D,W,Z){if(dl.apply(this,arguments),ms){if(ms){var he=js;ms=!1,js=null}else throw Error(t(198));gs||(gs=!0,xs=he)}}function Yn(i){var r=i,c=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(c=r.return),i=r.return;while(i)}return r.tag===3?c:null}function Ks(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function eo(i){if(Yn(i)!==i)throw Error(t(188))}function hl(i){var r=i.alternate;if(!r){if(r=Yn(i),r===null)throw Error(t(188));return r!==i?null:i}for(var c=i,h=r;;){var S=c.return;if(S===null)break;var E=S.alternate;if(E===null){if(h=S.return,h!==null){c=h;continue}break}if(S.child===E.child){for(E=S.child;E;){if(E===c)return eo(S),i;if(E===h)return eo(S),r;E=E.sibling}throw Error(t(188))}if(c.return!==h.return)c=S,h=E;else{for(var D=!1,W=S.child;W;){if(W===c){D=!0,c=S,h=E;break}if(W===h){D=!0,h=S,c=E;break}W=W.sibling}if(!D){for(W=E.child;W;){if(W===c){D=!0,c=E,h=S;break}if(W===h){D=!0,h=E,c=S;break}W=W.sibling}if(!D)throw Error(t(189))}}if(c.alternate!==h)throw Error(t(190))}if(c.tag!==3)throw Error(t(188));return c.stateNode.current===c?i:r}function vs(i){return i=hl(i),i!==null?to(i):null}function to(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var r=to(i);if(r!==null)return r;i=i.sibling}return null}var Ss=e.unstable_scheduleCallback,no=e.unstable_cancelCallback,pl=e.unstable_shouldYield,Cu=e.unstable_requestPaint,ln=e.unstable_now,Tu=e.unstable_getCurrentPriorityLevel,io=e.unstable_ImmediatePriority,L=e.unstable_UserBlockingPriority,re=e.unstable_NormalPriority,fe=e.unstable_LowPriority,ce=e.unstable_IdlePriority,le=null,Ue=null;function Qe(i){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(le,i,void 0,(i.current.flags&128)===128)}catch{}}var Ne=Math.clz32?Math.clz32:vt,et=Math.log,ot=Math.LN2;function vt(i){return i>>>=0,i===0?32:31-(et(i)/ot|0)|0}var St=64,it=4194304;function Dt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Yt(i,r){var c=i.pendingLanes;if(c===0)return 0;var h=0,S=i.suspendedLanes,E=i.pingedLanes,D=c&268435455;if(D!==0){var W=D&~S;W!==0?h=Dt(W):(E&=D,E!==0&&(h=Dt(E)))}else D=c&~S,D!==0?h=Dt(D):E!==0&&(h=Dt(E));if(h===0)return 0;if(r!==0&&r!==h&&(r&S)===0&&(S=h&-h,E=r&-r,S>=E||S===16&&(E&4194240)!==0))return r;if((h&4)!==0&&(h|=c&16),r=i.entangledLanes,r!==0)for(i=i.entanglements,r&=h;0<r;)c=31-Ne(r),S=1<<c,h|=i[c],r&=~S;return h}function rn(i,r){switch(i){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ht(i,r){for(var c=i.suspendedLanes,h=i.pingedLanes,S=i.expirationTimes,E=i.pendingLanes;0<E;){var D=31-Ne(E),W=1<<D,Z=S[D];Z===-1?((W&c)===0||(W&h)!==0)&&(S[D]=rn(W,r)):Z<=r&&(i.expiredLanes|=W),E&=~W}}function vn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function We(){var i=St;return St<<=1,(St&4194240)===0&&(St=64),i}function Fn(i){for(var r=[],c=0;31>c;c++)r.push(i);return r}function _t(i,r,c){i.pendingLanes|=r,r!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,r=31-Ne(r),i[r]=c}function ii(i,r){var c=i.pendingLanes&~r;i.pendingLanes=r,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=r,i.mutableReadLanes&=r,i.entangledLanes&=r,r=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<c;){var S=31-Ne(c),E=1<<S;r[S]=0,h[S]=-1,i[S]=-1,c&=~E}}function ri(i,r){var c=i.entangledLanes|=r;for(i=i.entanglements;c;){var h=31-Ne(c),S=1<<h;S&r|i[h]&r&&(i[h]|=r),c&=~S}}var Et=0;function fr(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var kt,Kt,Oi,Vt,ki,Ki=!1,ys=[],Br=null,Nr=null,Ur=null,ro=new Map,so=new Map,Or=[],zv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bp(i,r){switch(i){case"focusin":case"focusout":Br=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":Ur=null;break;case"pointerover":case"pointerout":ro.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":so.delete(r.pointerId)}}function ao(i,r,c,h,S,E){return i===null||i.nativeEvent!==E?(i={blockedOn:r,domEventName:c,eventSystemFlags:h,nativeEvent:E,targetContainers:[S]},r!==null&&(r=Ao(r),r!==null&&Kt(r)),i):(i.eventSystemFlags|=h,r=i.targetContainers,S!==null&&r.indexOf(S)===-1&&r.push(S),i)}function Hv(i,r,c,h,S){switch(r){case"focusin":return Br=ao(Br,i,r,c,h,S),!0;case"dragenter":return Nr=ao(Nr,i,r,c,h,S),!0;case"mouseover":return Ur=ao(Ur,i,r,c,h,S),!0;case"pointerover":var E=S.pointerId;return ro.set(E,ao(ro.get(E)||null,i,r,c,h,S)),!0;case"gotpointercapture":return E=S.pointerId,so.set(E,ao(so.get(E)||null,i,r,c,h,S)),!0}return!1}function Np(i){var r=As(i.target);if(r!==null){var c=Yn(r);if(c!==null){if(r=c.tag,r===13){if(r=Ks(c),r!==null){i.blockedOn=r,ki(i.priority,function(){Oi(c)});return}}else if(r===3&&c.stateNode.current.memoizedState.isDehydrated){i.blockedOn=c.tag===3?c.stateNode.containerInfo:null;return}}}i.blockedOn=null}function ml(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var c=bu(i.domEventName,i.eventSystemFlags,r[0],i.nativeEvent);if(c===null){c=i.nativeEvent;var h=new c.constructor(c.type,c);Ie=h,c.target.dispatchEvent(h),Ie=null}else return r=Ao(c),r!==null&&Kt(r),i.blockedOn=c,!1;r.shift()}return!0}function Up(i,r,c){ml(i)&&c.delete(r)}function Vv(){Ki=!1,Br!==null&&ml(Br)&&(Br=null),Nr!==null&&ml(Nr)&&(Nr=null),Ur!==null&&ml(Ur)&&(Ur=null),ro.forEach(Up),so.forEach(Up)}function oo(i,r){i.blockedOn===r&&(i.blockedOn=null,Ki||(Ki=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Vv)))}function lo(i){function r(S){return oo(S,i)}if(0<ys.length){oo(ys[0],i);for(var c=1;c<ys.length;c++){var h=ys[c];h.blockedOn===i&&(h.blockedOn=null)}}for(Br!==null&&oo(Br,i),Nr!==null&&oo(Nr,i),Ur!==null&&oo(Ur,i),ro.forEach(r),so.forEach(r),c=0;c<Or.length;c++)h=Or[c],h.blockedOn===i&&(h.blockedOn=null);for(;0<Or.length&&(c=Or[0],c.blockedOn===null);)Np(c),c.blockedOn===null&&Or.shift()}var $s=C.ReactCurrentBatchConfig,gl=!0;function Gv(i,r,c,h){var S=Et,E=$s.transition;$s.transition=null;try{Et=1,wu(i,r,c,h)}finally{Et=S,$s.transition=E}}function Wv(i,r,c,h){var S=Et,E=$s.transition;$s.transition=null;try{Et=4,wu(i,r,c,h)}finally{Et=S,$s.transition=E}}function wu(i,r,c,h){if(gl){var S=bu(i,r,c,h);if(S===null)Xu(i,r,h,xl,c),Bp(i,h);else if(Hv(S,i,r,c,h))h.stopPropagation();else if(Bp(i,h),r&4&&-1<zv.indexOf(i)){for(;S!==null;){var E=Ao(S);if(E!==null&&kt(E),E=bu(i,r,c,h),E===null&&Xu(i,r,h,xl,c),E===S)break;S=E}S!==null&&h.stopPropagation()}else Xu(i,r,h,null,c)}}var xl=null;function bu(i,r,c,h){if(xl=null,i=st(h),i=As(i),i!==null)if(r=Yn(i),r===null)i=null;else if(c=r.tag,c===13){if(i=Ks(r),i!==null)return i;i=null}else if(c===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null);return xl=i,null}function Op(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tu()){case io:return 1;case L:return 4;case re:case fe:return 16;case ce:return 536870912;default:return 16}default:return 16}}var kr=null,Ru=null,vl=null;function kp(){if(vl)return vl;var i,r=Ru,c=r.length,h,S="value"in kr?kr.value:kr.textContent,E=S.length;for(i=0;i<c&&r[i]===S[i];i++);var D=c-i;for(h=1;h<=D&&r[c-h]===S[E-h];h++);return vl=S.slice(i,1<h?1-h:void 0)}function Sl(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function yl(){return!0}function zp(){return!1}function mi(i){function r(c,h,S,E,D){this._reactName=c,this._targetInst=S,this.type=h,this.nativeEvent=E,this.target=D,this.currentTarget=null;for(var W in i)i.hasOwnProperty(W)&&(c=i[W],this[W]=c?c(E):E[W]);return this.isDefaultPrevented=(E.defaultPrevented!=null?E.defaultPrevented:E.returnValue===!1)?yl:zp,this.isPropagationStopped=zp,this}return J(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),r}var Zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Iu=mi(Zs),co=J({},Zs,{view:0,detail:0}),Xv=mi(co),Pu,Du,uo,Al=J({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lu,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==uo&&(uo&&i.type==="mousemove"?(Pu=i.screenX-uo.screenX,Du=i.screenY-uo.screenY):Du=Pu=0,uo=i),Pu)},movementY:function(i){return"movementY"in i?i.movementY:Du}}),Hp=mi(Al),Qv=J({},Al,{dataTransfer:0}),qv=mi(Qv),Yv=J({},co,{relatedTarget:0}),Fu=mi(Yv),jv=J({},Zs,{animationName:0,elapsedTime:0,pseudoElement:0}),Kv=mi(jv),$v=J({},Zs,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Zv=mi($v),Jv=J({},Zs,{data:0}),Vp=mi(Jv),eS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iS(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=nS[i])?!!r[i]:!1}function Lu(){return iS}var rS=J({},co,{key:function(i){if(i.key){var r=eS[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=Sl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?tS[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lu,charCode:function(i){return i.type==="keypress"?Sl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Sl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),sS=mi(rS),aS=J({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gp=mi(aS),oS=J({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lu}),lS=mi(oS),cS=J({},Zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),uS=mi(cS),dS=J({},Al,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),fS=mi(dS),hS=[9,13,27,32],Bu=u&&"CompositionEvent"in window,fo=null;u&&"documentMode"in document&&(fo=document.documentMode);var pS=u&&"TextEvent"in window&&!fo,Wp=u&&(!Bu||fo&&8<fo&&11>=fo),Xp=" ",Qp=!1;function qp(i,r){switch(i){case"keyup":return hS.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yp(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Js=!1;function mS(i,r){switch(i){case"compositionend":return Yp(r);case"keypress":return r.which!==32?null:(Qp=!0,Xp);case"textInput":return i=r.data,i===Xp&&Qp?null:i;default:return null}}function gS(i,r){if(Js)return i==="compositionend"||!Bu&&qp(i,r)?(i=kp(),vl=Ru=kr=null,Js=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Wp&&r.locale!=="ko"?null:r.data;default:return null}}var xS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jp(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!xS[i.type]:r==="textarea"}function Kp(i,r,c,h){Se(h),r=Tl(r,"onChange"),0<r.length&&(c=new Iu("onChange","change",null,c,h),i.push({event:c,listeners:r}))}var ho=null,po=null;function vS(i){pm(i,0)}function _l(i){var r=ra(i);if(xt(r))return i}function SS(i,r){if(i==="change")return r}var $p=!1;if(u){var Nu;if(u){var Uu="oninput"in document;if(!Uu){var Zp=document.createElement("div");Zp.setAttribute("oninput","return;"),Uu=typeof Zp.oninput=="function"}Nu=Uu}else Nu=!1;$p=Nu&&(!document.documentMode||9<document.documentMode)}function Jp(){ho&&(ho.detachEvent("onpropertychange",em),po=ho=null)}function em(i){if(i.propertyName==="value"&&_l(po)){var r=[];Kp(r,po,i,st(i)),$e(vS,r)}}function yS(i,r,c){i==="focusin"?(Jp(),ho=r,po=c,ho.attachEvent("onpropertychange",em)):i==="focusout"&&Jp()}function AS(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return _l(po)}function _S(i,r){if(i==="click")return _l(r)}function ES(i,r){if(i==="input"||i==="change")return _l(r)}function MS(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var zi=typeof Object.is=="function"?Object.is:MS;function mo(i,r){if(zi(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var c=Object.keys(i),h=Object.keys(r);if(c.length!==h.length)return!1;for(h=0;h<c.length;h++){var S=c[h];if(!d.call(r,S)||!zi(i[S],r[S]))return!1}return!0}function tm(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function nm(i,r){var c=tm(i);i=0;for(var h;c;){if(c.nodeType===3){if(h=i+c.textContent.length,i<=r&&h>=r)return{node:c,offset:r-i};i=h}e:{for(;c;){if(c.nextSibling){c=c.nextSibling;break e}c=c.parentNode}c=void 0}c=tm(c)}}function im(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?im(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function rm(){for(var i=window,r=Ye();r instanceof i.HTMLIFrameElement;){try{var c=typeof r.contentWindow.location.href=="string"}catch{c=!1}if(c)i=r.contentWindow;else break;r=Ye(i.document)}return r}function Ou(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}function CS(i){var r=rm(),c=i.focusedElem,h=i.selectionRange;if(r!==c&&c&&c.ownerDocument&&im(c.ownerDocument.documentElement,c)){if(h!==null&&Ou(c)){if(r=h.start,i=h.end,i===void 0&&(i=r),"selectionStart"in c)c.selectionStart=r,c.selectionEnd=Math.min(i,c.value.length);else if(i=(r=c.ownerDocument||document)&&r.defaultView||window,i.getSelection){i=i.getSelection();var S=c.textContent.length,E=Math.min(h.start,S);h=h.end===void 0?E:Math.min(h.end,S),!i.extend&&E>h&&(S=h,h=E,E=S),S=nm(c,E);var D=nm(c,h);S&&D&&(i.rangeCount!==1||i.anchorNode!==S.node||i.anchorOffset!==S.offset||i.focusNode!==D.node||i.focusOffset!==D.offset)&&(r=r.createRange(),r.setStart(S.node,S.offset),i.removeAllRanges(),E>h?(i.addRange(r),i.extend(D.node,D.offset)):(r.setEnd(D.node,D.offset),i.addRange(r)))}}for(r=[],i=c;i=i.parentNode;)i.nodeType===1&&r.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<r.length;c++)i=r[c],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var TS=u&&"documentMode"in document&&11>=document.documentMode,ea=null,ku=null,go=null,zu=!1;function sm(i,r,c){var h=c.window===c?c.document:c.nodeType===9?c:c.ownerDocument;zu||ea==null||ea!==Ye(h)||(h=ea,"selectionStart"in h&&Ou(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),go&&mo(go,h)||(go=h,h=Tl(ku,"onSelect"),0<h.length&&(r=new Iu("onSelect","select",null,r,c),i.push({event:r,listeners:h}),r.target=ea)))}function El(i,r){var c={};return c[i.toLowerCase()]=r.toLowerCase(),c["Webkit"+i]="webkit"+r,c["Moz"+i]="moz"+r,c}var ta={animationend:El("Animation","AnimationEnd"),animationiteration:El("Animation","AnimationIteration"),animationstart:El("Animation","AnimationStart"),transitionend:El("Transition","TransitionEnd")},Hu={},am={};u&&(am=document.createElement("div").style,"AnimationEvent"in window||(delete ta.animationend.animation,delete ta.animationiteration.animation,delete ta.animationstart.animation),"TransitionEvent"in window||delete ta.transitionend.transition);function Ml(i){if(Hu[i])return Hu[i];if(!ta[i])return i;var r=ta[i],c;for(c in r)if(r.hasOwnProperty(c)&&c in am)return Hu[i]=r[c];return i}var om=Ml("animationend"),lm=Ml("animationiteration"),cm=Ml("animationstart"),um=Ml("transitionend"),dm=new Map,fm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(i,r){dm.set(i,r),o(r,[i])}for(var Vu=0;Vu<fm.length;Vu++){var Gu=fm[Vu],wS=Gu.toLowerCase(),bS=Gu[0].toUpperCase()+Gu.slice(1);zr(wS,"on"+bS)}zr(om,"onAnimationEnd"),zr(lm,"onAnimationIteration"),zr(cm,"onAnimationStart"),zr("dblclick","onDoubleClick"),zr("focusin","onFocus"),zr("focusout","onBlur"),zr(um,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RS=new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));function hm(i,r,c){var h=i.type||"unknown-event";i.currentTarget=c,fl(h,r,void 0,i),i.currentTarget=null}function pm(i,r){r=(r&4)!==0;for(var c=0;c<i.length;c++){var h=i[c],S=h.event;h=h.listeners;e:{var E=void 0;if(r)for(var D=h.length-1;0<=D;D--){var W=h[D],Z=W.instance,he=W.currentTarget;if(W=W.listener,Z!==E&&S.isPropagationStopped())break e;hm(S,W,he),E=Z}else for(D=0;D<h.length;D++){if(W=h[D],Z=W.instance,he=W.currentTarget,W=W.listener,Z!==E&&S.isPropagationStopped())break e;hm(S,W,he),E=Z}}}if(gs)throw i=xs,gs=!1,xs=null,i}function $t(i,r){var c=r[$u];c===void 0&&(c=r[$u]=new Set);var h=i+"__bubble";c.has(h)||(mm(r,i,2,!1),c.add(h))}function Wu(i,r,c){var h=0;r&&(h|=4),mm(c,i,h,r)}var Cl="_reactListening"+Math.random().toString(36).slice(2);function vo(i){if(!i[Cl]){i[Cl]=!0,n.forEach(function(c){c!=="selectionchange"&&(RS.has(c)||Wu(c,!1,i),Wu(c,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[Cl]||(r[Cl]=!0,Wu("selectionchange",!1,r))}}function mm(i,r,c,h){switch(Op(r)){case 1:var S=Gv;break;case 4:S=Wv;break;default:S=wu}c=S.bind(null,r,c,i),S=void 0,!Ot||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(S=!0),h?S!==void 0?i.addEventListener(r,c,{capture:!0,passive:S}):i.addEventListener(r,c,!0):S!==void 0?i.addEventListener(r,c,{passive:S}):i.addEventListener(r,c,!1)}function Xu(i,r,c,h,S){var E=h;if((r&1)===0&&(r&2)===0&&h!==null)e:for(;;){if(h===null)return;var D=h.tag;if(D===3||D===4){var W=h.stateNode.containerInfo;if(W===S||W.nodeType===8&&W.parentNode===S)break;if(D===4)for(D=h.return;D!==null;){var Z=D.tag;if((Z===3||Z===4)&&(Z=D.stateNode.containerInfo,Z===S||Z.nodeType===8&&Z.parentNode===S))return;D=D.return}for(;W!==null;){if(D=As(W),D===null)return;if(Z=D.tag,Z===5||Z===6){h=E=D;continue e}W=W.parentNode}}h=h.return}$e(function(){var he=E,Ee=st(c),Te=[];e:{var _e=dm.get(i);if(_e!==void 0){var Xe=Iu,Ze=i;switch(i){case"keypress":if(Sl(c)===0)break e;case"keydown":case"keyup":Xe=sS;break;case"focusin":Ze="focus",Xe=Fu;break;case"focusout":Ze="blur",Xe=Fu;break;case"beforeblur":case"afterblur":Xe=Fu;break;case"click":if(c.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Xe=Hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Xe=qv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Xe=lS;break;case om:case lm:case cm:Xe=Kv;break;case um:Xe=uS;break;case"scroll":Xe=Xv;break;case"wheel":Xe=fS;break;case"copy":case"cut":case"paste":Xe=Zv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Xe=Gp}var tt=(r&4)!==0,mn=!tt&&i==="scroll",oe=tt?_e!==null?_e+"Capture":null:_e;tt=[];for(var te=he,ue;te!==null;){ue=te;var Pe=ue.stateNode;if(ue.tag===5&&Pe!==null&&(ue=Pe,oe!==null&&(Pe=Xt(te,oe),Pe!=null&&tt.push(So(te,Pe,ue)))),mn)break;te=te.return}0<tt.length&&(_e=new Xe(_e,Ze,null,c,Ee),Te.push({event:_e,listeners:tt}))}}if((r&7)===0){e:{if(_e=i==="mouseover"||i==="pointerover",Xe=i==="mouseout"||i==="pointerout",_e&&c!==Ie&&(Ze=c.relatedTarget||c.fromElement)&&(As(Ze)||Ze[hr]))break e;if((Xe||_e)&&(_e=Ee.window===Ee?Ee:(_e=Ee.ownerDocument)?_e.defaultView||_e.parentWindow:window,Xe?(Ze=c.relatedTarget||c.toElement,Xe=he,Ze=Ze?As(Ze):null,Ze!==null&&(mn=Yn(Ze),Ze!==mn||Ze.tag!==5&&Ze.tag!==6)&&(Ze=null)):(Xe=null,Ze=he),Xe!==Ze)){if(tt=Hp,Pe="onMouseLeave",oe="onMouseEnter",te="mouse",(i==="pointerout"||i==="pointerover")&&(tt=Gp,Pe="onPointerLeave",oe="onPointerEnter",te="pointer"),mn=Xe==null?_e:ra(Xe),ue=Ze==null?_e:ra(Ze),_e=new tt(Pe,te+"leave",Xe,c,Ee),_e.target=mn,_e.relatedTarget=ue,Pe=null,As(Ee)===he&&(tt=new tt(oe,te+"enter",Ze,c,Ee),tt.target=ue,tt.relatedTarget=mn,Pe=tt),mn=Pe,Xe&&Ze)t:{for(tt=Xe,oe=Ze,te=0,ue=tt;ue;ue=na(ue))te++;for(ue=0,Pe=oe;Pe;Pe=na(Pe))ue++;for(;0<te-ue;)tt=na(tt),te--;for(;0<ue-te;)oe=na(oe),ue--;for(;te--;){if(tt===oe||oe!==null&&tt===oe.alternate)break t;tt=na(tt),oe=na(oe)}tt=null}else tt=null;Xe!==null&&gm(Te,_e,Xe,tt,!1),Ze!==null&&mn!==null&&gm(Te,mn,Ze,tt,!0)}}e:{if(_e=he?ra(he):window,Xe=_e.nodeName&&_e.nodeName.toLowerCase(),Xe==="select"||Xe==="input"&&_e.type==="file")var rt=SS;else if(jp(_e))if($p)rt=ES;else{rt=AS;var ct=yS}else(Xe=_e.nodeName)&&Xe.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(rt=_S);if(rt&&(rt=rt(i,he))){Kp(Te,rt,c,Ee);break e}ct&&ct(i,_e,he),i==="focusout"&&(ct=_e._wrapperState)&&ct.controlled&&_e.type==="number"&&Tt(_e,"number",_e.value)}switch(ct=he?ra(he):window,i){case"focusin":(jp(ct)||ct.contentEditable==="true")&&(ea=ct,ku=he,go=null);break;case"focusout":go=ku=ea=null;break;case"mousedown":zu=!0;break;case"contextmenu":case"mouseup":case"dragend":zu=!1,sm(Te,c,Ee);break;case"selectionchange":if(TS)break;case"keydown":case"keyup":sm(Te,c,Ee)}var ut;if(Bu)e:{switch(i){case"compositionstart":var gt="onCompositionStart";break e;case"compositionend":gt="onCompositionEnd";break e;case"compositionupdate":gt="onCompositionUpdate";break e}gt=void 0}else Js?qp(i,c)&&(gt="onCompositionEnd"):i==="keydown"&&c.keyCode===229&&(gt="onCompositionStart");gt&&(Wp&&c.locale!=="ko"&&(Js||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&Js&&(ut=kp()):(kr=Ee,Ru="value"in kr?kr.value:kr.textContent,Js=!0)),ct=Tl(he,gt),0<ct.length&&(gt=new Vp(gt,i,null,c,Ee),Te.push({event:gt,listeners:ct}),ut?gt.data=ut:(ut=Yp(c),ut!==null&&(gt.data=ut)))),(ut=pS?mS(i,c):gS(i,c))&&(he=Tl(he,"onBeforeInput"),0<he.length&&(Ee=new Vp("onBeforeInput","beforeinput",null,c,Ee),Te.push({event:Ee,listeners:he}),Ee.data=ut))}pm(Te,r)})}function So(i,r,c){return{instance:i,listener:r,currentTarget:c}}function Tl(i,r){for(var c=r+"Capture",h=[];i!==null;){var S=i,E=S.stateNode;S.tag===5&&E!==null&&(S=E,E=Xt(i,c),E!=null&&h.unshift(So(i,E,S)),E=Xt(i,r),E!=null&&h.push(So(i,E,S))),i=i.return}return h}function na(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function gm(i,r,c,h,S){for(var E=r._reactName,D=[];c!==null&&c!==h;){var W=c,Z=W.alternate,he=W.stateNode;if(Z!==null&&Z===h)break;W.tag===5&&he!==null&&(W=he,S?(Z=Xt(c,E),Z!=null&&D.unshift(So(c,Z,W))):S||(Z=Xt(c,E),Z!=null&&D.push(So(c,Z,W)))),c=c.return}D.length!==0&&i.push({event:r,listeners:D})}var IS=/\r\n?/g,PS=/\u0000|\uFFFD/g;function xm(i){return(typeof i=="string"?i:""+i).replace(IS,`
`).replace(PS,"")}function wl(i,r,c){if(r=xm(r),xm(i)!==r&&c)throw Error(t(425))}function bl(){}var Qu=null,qu=null;function Yu(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var ju=typeof setTimeout=="function"?setTimeout:void 0,DS=typeof clearTimeout=="function"?clearTimeout:void 0,vm=typeof Promise=="function"?Promise:void 0,FS=typeof queueMicrotask=="function"?queueMicrotask:typeof vm<"u"?function(i){return vm.resolve(null).then(i).catch(LS)}:ju;function LS(i){setTimeout(function(){throw i})}function Ku(i,r){var c=r,h=0;do{var S=c.nextSibling;if(i.removeChild(c),S&&S.nodeType===8)if(c=S.data,c==="/$"){if(h===0){i.removeChild(S),lo(r);return}h--}else c!=="$"&&c!=="$?"&&c!=="$!"||h++;c=S}while(c);lo(r)}function Hr(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return i}function Sm(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var c=i.data;if(c==="$"||c==="$!"||c==="$?"){if(r===0)return i;r--}else c==="/$"&&r++}i=i.previousSibling}return null}var ia=Math.random().toString(36).slice(2),$i="__reactFiber$"+ia,yo="__reactProps$"+ia,hr="__reactContainer$"+ia,$u="__reactEvents$"+ia,BS="__reactListeners$"+ia,NS="__reactHandles$"+ia;function As(i){var r=i[$i];if(r)return r;for(var c=i.parentNode;c;){if(r=c[hr]||c[$i]){if(c=r.alternate,r.child!==null||c!==null&&c.child!==null)for(i=Sm(i);i!==null;){if(c=i[$i])return c;i=Sm(i)}return r}i=c,c=i.parentNode}return null}function Ao(i){return i=i[$i]||i[hr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ra(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Rl(i){return i[yo]||null}var Zu=[],sa=-1;function Vr(i){return{current:i}}function Zt(i){0>sa||(i.current=Zu[sa],Zu[sa]=null,sa--)}function jt(i,r){sa++,Zu[sa]=i.current,i.current=r}var Gr={},kn=Vr(Gr),si=Vr(!1),_s=Gr;function aa(i,r){var c=i.type.contextTypes;if(!c)return Gr;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===r)return h.__reactInternalMemoizedMaskedChildContext;var S={},E;for(E in c)S[E]=r[E];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=r,i.__reactInternalMemoizedMaskedChildContext=S),S}function ai(i){return i=i.childContextTypes,i!=null}function Il(){Zt(si),Zt(kn)}function ym(i,r,c){if(kn.current!==Gr)throw Error(t(168));jt(kn,r),jt(si,c)}function Am(i,r,c){var h=i.stateNode;if(r=r.childContextTypes,typeof h.getChildContext!="function")return c;h=h.getChildContext();for(var S in h)if(!(S in r))throw Error(t(108,xe(i)||"Unknown",S));return J({},c,h)}function Pl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Gr,_s=kn.current,jt(kn,i),jt(si,si.current),!0}function _m(i,r,c){var h=i.stateNode;if(!h)throw Error(t(169));c?(i=Am(i,r,_s),h.__reactInternalMemoizedMergedChildContext=i,Zt(si),Zt(kn),jt(kn,i)):Zt(si),jt(si,c)}var pr=null,Dl=!1,Ju=!1;function Em(i){pr===null?pr=[i]:pr.push(i)}function US(i){Dl=!0,Em(i)}function Wr(){if(!Ju&&pr!==null){Ju=!0;var i=0,r=Et;try{var c=pr;for(Et=1;i<c.length;i++){var h=c[i];do h=h(!0);while(h!==null)}pr=null,Dl=!1}catch(S){throw pr!==null&&(pr=pr.slice(i+1)),Ss(io,Wr),S}finally{Et=r,Ju=!1}}return null}var oa=[],la=0,Fl=null,Ll=0,Ti=[],wi=0,Es=null,mr=1,gr="";function Ms(i,r){oa[la++]=Ll,oa[la++]=Fl,Fl=i,Ll=r}function Mm(i,r,c){Ti[wi++]=mr,Ti[wi++]=gr,Ti[wi++]=Es,Es=i;var h=mr;i=gr;var S=32-Ne(h)-1;h&=~(1<<S),c+=1;var E=32-Ne(r)+S;if(30<E){var D=S-S%5;E=(h&(1<<D)-1).toString(32),h>>=D,S-=D,mr=1<<32-Ne(r)+S|c<<S|h,gr=E+i}else mr=1<<E|c<<S|h,gr=i}function ed(i){i.return!==null&&(Ms(i,1),Mm(i,1,0))}function td(i){for(;i===Fl;)Fl=oa[--la],oa[la]=null,Ll=oa[--la],oa[la]=null;for(;i===Es;)Es=Ti[--wi],Ti[wi]=null,gr=Ti[--wi],Ti[wi]=null,mr=Ti[--wi],Ti[wi]=null}var gi=null,xi=null,sn=!1,Hi=null;function Cm(i,r){var c=Pi(5,null,null,0);c.elementType="DELETED",c.stateNode=r,c.return=i,r=i.deletions,r===null?(i.deletions=[c],i.flags|=16):r.push(c)}function Tm(i,r){switch(i.tag){case 5:var c=i.type;return r=r.nodeType!==1||c.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(i.stateNode=r,gi=i,xi=Hr(r.firstChild),!0):!1;case 6:return r=i.pendingProps===""||r.nodeType!==3?null:r,r!==null?(i.stateNode=r,gi=i,xi=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(c=Es!==null?{id:mr,overflow:gr}:null,i.memoizedState={dehydrated:r,treeContext:c,retryLane:1073741824},c=Pi(18,null,null,0),c.stateNode=r,c.return=i,i.child=c,gi=i,xi=null,!0):!1;default:return!1}}function nd(i){return(i.mode&1)!==0&&(i.flags&128)===0}function id(i){if(sn){var r=xi;if(r){var c=r;if(!Tm(i,r)){if(nd(i))throw Error(t(418));r=Hr(c.nextSibling);var h=gi;r&&Tm(i,r)?Cm(h,c):(i.flags=i.flags&-4097|2,sn=!1,gi=i)}}else{if(nd(i))throw Error(t(418));i.flags=i.flags&-4097|2,sn=!1,gi=i}}}function wm(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;gi=i}function Bl(i){if(i!==gi)return!1;if(!sn)return wm(i),sn=!0,!1;var r;if((r=i.tag!==3)&&!(r=i.tag!==5)&&(r=i.type,r=r!=="head"&&r!=="body"&&!Yu(i.type,i.memoizedProps)),r&&(r=xi)){if(nd(i))throw bm(),Error(t(418));for(;r;)Cm(i,r),r=Hr(r.nextSibling)}if(wm(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8){var c=i.data;if(c==="/$"){if(r===0){xi=Hr(i.nextSibling);break e}r--}else c!=="$"&&c!=="$!"&&c!=="$?"||r++}i=i.nextSibling}xi=null}}else xi=gi?Hr(i.stateNode.nextSibling):null;return!0}function bm(){for(var i=xi;i;)i=Hr(i.nextSibling)}function ca(){xi=gi=null,sn=!1}function rd(i){Hi===null?Hi=[i]:Hi.push(i)}var OS=C.ReactCurrentBatchConfig;function _o(i,r,c){if(i=c.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(c._owner){if(c=c._owner,c){if(c.tag!==1)throw Error(t(309));var h=c.stateNode}if(!h)throw Error(t(147,i));var S=h,E=""+i;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===E?r.ref:(r=function(D){var W=S.refs;D===null?delete W[E]:W[E]=D},r._stringRef=E,r)}if(typeof i!="string")throw Error(t(284));if(!c._owner)throw Error(t(290,i))}return i}function Nl(i,r){throw i=Object.prototype.toString.call(r),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i))}function Rm(i){var r=i._init;return r(i._payload)}function Im(i){function r(oe,te){if(i){var ue=oe.deletions;ue===null?(oe.deletions=[te],oe.flags|=16):ue.push(te)}}function c(oe,te){if(!i)return null;for(;te!==null;)r(oe,te),te=te.sibling;return null}function h(oe,te){for(oe=new Map;te!==null;)te.key!==null?oe.set(te.key,te):oe.set(te.index,te),te=te.sibling;return oe}function S(oe,te){return oe=Zr(oe,te),oe.index=0,oe.sibling=null,oe}function E(oe,te,ue){return oe.index=ue,i?(ue=oe.alternate,ue!==null?(ue=ue.index,ue<te?(oe.flags|=2,te):ue):(oe.flags|=2,te)):(oe.flags|=1048576,te)}function D(oe){return i&&oe.alternate===null&&(oe.flags|=2),oe}function W(oe,te,ue,Pe){return te===null||te.tag!==6?(te=jd(ue,oe.mode,Pe),te.return=oe,te):(te=S(te,ue),te.return=oe,te)}function Z(oe,te,ue,Pe){var rt=ue.type;return rt===R?Ee(oe,te,ue.props.children,Pe,ue.key):te!==null&&(te.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===K&&Rm(rt)===te.type)?(Pe=S(te,ue.props),Pe.ref=_o(oe,te,ue),Pe.return=oe,Pe):(Pe=ac(ue.type,ue.key,ue.props,null,oe.mode,Pe),Pe.ref=_o(oe,te,ue),Pe.return=oe,Pe)}function he(oe,te,ue,Pe){return te===null||te.tag!==4||te.stateNode.containerInfo!==ue.containerInfo||te.stateNode.implementation!==ue.implementation?(te=Kd(ue,oe.mode,Pe),te.return=oe,te):(te=S(te,ue.children||[]),te.return=oe,te)}function Ee(oe,te,ue,Pe,rt){return te===null||te.tag!==7?(te=Ds(ue,oe.mode,Pe,rt),te.return=oe,te):(te=S(te,ue),te.return=oe,te)}function Te(oe,te,ue){if(typeof te=="string"&&te!==""||typeof te=="number")return te=jd(""+te,oe.mode,ue),te.return=oe,te;if(typeof te=="object"&&te!==null){switch(te.$$typeof){case w:return ue=ac(te.type,te.key,te.props,null,oe.mode,ue),ue.ref=_o(oe,null,te),ue.return=oe,ue;case I:return te=Kd(te,oe.mode,ue),te.return=oe,te;case K:var Pe=te._init;return Te(oe,Pe(te._payload),ue)}if(Bt(te)||Q(te))return te=Ds(te,oe.mode,ue,null),te.return=oe,te;Nl(oe,te)}return null}function _e(oe,te,ue,Pe){var rt=te!==null?te.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number")return rt!==null?null:W(oe,te,""+ue,Pe);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case w:return ue.key===rt?Z(oe,te,ue,Pe):null;case I:return ue.key===rt?he(oe,te,ue,Pe):null;case K:return rt=ue._init,_e(oe,te,rt(ue._payload),Pe)}if(Bt(ue)||Q(ue))return rt!==null?null:Ee(oe,te,ue,Pe,null);Nl(oe,ue)}return null}function Xe(oe,te,ue,Pe,rt){if(typeof Pe=="string"&&Pe!==""||typeof Pe=="number")return oe=oe.get(ue)||null,W(te,oe,""+Pe,rt);if(typeof Pe=="object"&&Pe!==null){switch(Pe.$$typeof){case w:return oe=oe.get(Pe.key===null?ue:Pe.key)||null,Z(te,oe,Pe,rt);case I:return oe=oe.get(Pe.key===null?ue:Pe.key)||null,he(te,oe,Pe,rt);case K:var ct=Pe._init;return Xe(oe,te,ue,ct(Pe._payload),rt)}if(Bt(Pe)||Q(Pe))return oe=oe.get(ue)||null,Ee(te,oe,Pe,rt,null);Nl(te,Pe)}return null}function Ze(oe,te,ue,Pe){for(var rt=null,ct=null,ut=te,gt=te=0,In=null;ut!==null&&gt<ue.length;gt++){ut.index>gt?(In=ut,ut=null):In=ut.sibling;var Nt=_e(oe,ut,ue[gt],Pe);if(Nt===null){ut===null&&(ut=In);break}i&&ut&&Nt.alternate===null&&r(oe,ut),te=E(Nt,te,gt),ct===null?rt=Nt:ct.sibling=Nt,ct=Nt,ut=In}if(gt===ue.length)return c(oe,ut),sn&&Ms(oe,gt),rt;if(ut===null){for(;gt<ue.length;gt++)ut=Te(oe,ue[gt],Pe),ut!==null&&(te=E(ut,te,gt),ct===null?rt=ut:ct.sibling=ut,ct=ut);return sn&&Ms(oe,gt),rt}for(ut=h(oe,ut);gt<ue.length;gt++)In=Xe(ut,oe,gt,ue[gt],Pe),In!==null&&(i&&In.alternate!==null&&ut.delete(In.key===null?gt:In.key),te=E(In,te,gt),ct===null?rt=In:ct.sibling=In,ct=In);return i&&ut.forEach(function(Jr){return r(oe,Jr)}),sn&&Ms(oe,gt),rt}function tt(oe,te,ue,Pe){var rt=Q(ue);if(typeof rt!="function")throw Error(t(150));if(ue=rt.call(ue),ue==null)throw Error(t(151));for(var ct=rt=null,ut=te,gt=te=0,In=null,Nt=ue.next();ut!==null&&!Nt.done;gt++,Nt=ue.next()){ut.index>gt?(In=ut,ut=null):In=ut.sibling;var Jr=_e(oe,ut,Nt.value,Pe);if(Jr===null){ut===null&&(ut=In);break}i&&ut&&Jr.alternate===null&&r(oe,ut),te=E(Jr,te,gt),ct===null?rt=Jr:ct.sibling=Jr,ct=Jr,ut=In}if(Nt.done)return c(oe,ut),sn&&Ms(oe,gt),rt;if(ut===null){for(;!Nt.done;gt++,Nt=ue.next())Nt=Te(oe,Nt.value,Pe),Nt!==null&&(te=E(Nt,te,gt),ct===null?rt=Nt:ct.sibling=Nt,ct=Nt);return sn&&Ms(oe,gt),rt}for(ut=h(oe,ut);!Nt.done;gt++,Nt=ue.next())Nt=Xe(ut,oe,gt,Nt.value,Pe),Nt!==null&&(i&&Nt.alternate!==null&&ut.delete(Nt.key===null?gt:Nt.key),te=E(Nt,te,gt),ct===null?rt=Nt:ct.sibling=Nt,ct=Nt);return i&&ut.forEach(function(xy){return r(oe,xy)}),sn&&Ms(oe,gt),rt}function mn(oe,te,ue,Pe){if(typeof ue=="object"&&ue!==null&&ue.type===R&&ue.key===null&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case w:e:{for(var rt=ue.key,ct=te;ct!==null;){if(ct.key===rt){if(rt=ue.type,rt===R){if(ct.tag===7){c(oe,ct.sibling),te=S(ct,ue.props.children),te.return=oe,oe=te;break e}}else if(ct.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===K&&Rm(rt)===ct.type){c(oe,ct.sibling),te=S(ct,ue.props),te.ref=_o(oe,ct,ue),te.return=oe,oe=te;break e}c(oe,ct);break}else r(oe,ct);ct=ct.sibling}ue.type===R?(te=Ds(ue.props.children,oe.mode,Pe,ue.key),te.return=oe,oe=te):(Pe=ac(ue.type,ue.key,ue.props,null,oe.mode,Pe),Pe.ref=_o(oe,te,ue),Pe.return=oe,oe=Pe)}return D(oe);case I:e:{for(ct=ue.key;te!==null;){if(te.key===ct)if(te.tag===4&&te.stateNode.containerInfo===ue.containerInfo&&te.stateNode.implementation===ue.implementation){c(oe,te.sibling),te=S(te,ue.children||[]),te.return=oe,oe=te;break e}else{c(oe,te);break}else r(oe,te);te=te.sibling}te=Kd(ue,oe.mode,Pe),te.return=oe,oe=te}return D(oe);case K:return ct=ue._init,mn(oe,te,ct(ue._payload),Pe)}if(Bt(ue))return Ze(oe,te,ue,Pe);if(Q(ue))return tt(oe,te,ue,Pe);Nl(oe,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"?(ue=""+ue,te!==null&&te.tag===6?(c(oe,te.sibling),te=S(te,ue),te.return=oe,oe=te):(c(oe,te),te=jd(ue,oe.mode,Pe),te.return=oe,oe=te),D(oe)):c(oe,te)}return mn}var ua=Im(!0),Pm=Im(!1),Ul=Vr(null),Ol=null,da=null,sd=null;function ad(){sd=da=Ol=null}function od(i){var r=Ul.current;Zt(Ul),i._currentValue=r}function ld(i,r,c){for(;i!==null;){var h=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,h!==null&&(h.childLanes|=r)):h!==null&&(h.childLanes&r)!==r&&(h.childLanes|=r),i===c)break;i=i.return}}function fa(i,r){Ol=i,sd=da=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&r)!==0&&(oi=!0),i.firstContext=null)}function bi(i){var r=i._currentValue;if(sd!==i)if(i={context:i,memoizedValue:r,next:null},da===null){if(Ol===null)throw Error(t(308));da=i,Ol.dependencies={lanes:0,firstContext:i}}else da=da.next=i;return r}var Cs=null;function cd(i){Cs===null?Cs=[i]:Cs.push(i)}function Dm(i,r,c,h){var S=r.interleaved;return S===null?(c.next=c,cd(r)):(c.next=S.next,S.next=c),r.interleaved=c,xr(i,h)}function xr(i,r){i.lanes|=r;var c=i.alternate;for(c!==null&&(c.lanes|=r),c=i,i=i.return;i!==null;)i.childLanes|=r,c=i.alternate,c!==null&&(c.childLanes|=r),c=i,i=i.return;return c.tag===3?c.stateNode:null}var Xr=!1;function ud(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fm(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function vr(i,r){return{eventTime:i,lane:r,tag:0,payload:null,callback:null,next:null}}function Qr(i,r,c){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(Ft&2)!==0){var S=h.pending;return S===null?r.next=r:(r.next=S.next,S.next=r),h.pending=r,xr(i,c)}return S=h.interleaved,S===null?(r.next=r,cd(h)):(r.next=S.next,S.next=r),h.interleaved=r,xr(i,c)}function kl(i,r,c){if(r=r.updateQueue,r!==null&&(r=r.shared,(c&4194240)!==0)){var h=r.lanes;h&=i.pendingLanes,c|=h,r.lanes=c,ri(i,c)}}function Lm(i,r){var c=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,c===h)){var S=null,E=null;if(c=c.firstBaseUpdate,c!==null){do{var D={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};E===null?S=E=D:E=E.next=D,c=c.next}while(c!==null);E===null?S=E=r:E=E.next=r}else S=E=r;c={baseState:h.baseState,firstBaseUpdate:S,lastBaseUpdate:E,shared:h.shared,effects:h.effects},i.updateQueue=c;return}i=c.lastBaseUpdate,i===null?c.firstBaseUpdate=r:i.next=r,c.lastBaseUpdate=r}function zl(i,r,c,h){var S=i.updateQueue;Xr=!1;var E=S.firstBaseUpdate,D=S.lastBaseUpdate,W=S.shared.pending;if(W!==null){S.shared.pending=null;var Z=W,he=Z.next;Z.next=null,D===null?E=he:D.next=he,D=Z;var Ee=i.alternate;Ee!==null&&(Ee=Ee.updateQueue,W=Ee.lastBaseUpdate,W!==D&&(W===null?Ee.firstBaseUpdate=he:W.next=he,Ee.lastBaseUpdate=Z))}if(E!==null){var Te=S.baseState;D=0,Ee=he=Z=null,W=E;do{var _e=W.lane,Xe=W.eventTime;if((h&_e)===_e){Ee!==null&&(Ee=Ee.next={eventTime:Xe,lane:0,tag:W.tag,payload:W.payload,callback:W.callback,next:null});e:{var Ze=i,tt=W;switch(_e=r,Xe=c,tt.tag){case 1:if(Ze=tt.payload,typeof Ze=="function"){Te=Ze.call(Xe,Te,_e);break e}Te=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=tt.payload,_e=typeof Ze=="function"?Ze.call(Xe,Te,_e):Ze,_e==null)break e;Te=J({},Te,_e);break e;case 2:Xr=!0}}W.callback!==null&&W.lane!==0&&(i.flags|=64,_e=S.effects,_e===null?S.effects=[W]:_e.push(W))}else Xe={eventTime:Xe,lane:_e,tag:W.tag,payload:W.payload,callback:W.callback,next:null},Ee===null?(he=Ee=Xe,Z=Te):Ee=Ee.next=Xe,D|=_e;if(W=W.next,W===null){if(W=S.shared.pending,W===null)break;_e=W,W=_e.next,_e.next=null,S.lastBaseUpdate=_e,S.shared.pending=null}}while(!0);if(Ee===null&&(Z=Te),S.baseState=Z,S.firstBaseUpdate=he,S.lastBaseUpdate=Ee,r=S.shared.interleaved,r!==null){S=r;do D|=S.lane,S=S.next;while(S!==r)}else E===null&&(S.shared.lanes=0);bs|=D,i.lanes=D,i.memoizedState=Te}}function Bm(i,r,c){if(i=r.effects,r.effects=null,i!==null)for(r=0;r<i.length;r++){var h=i[r],S=h.callback;if(S!==null){if(h.callback=null,h=c,typeof S!="function")throw Error(t(191,S));S.call(h)}}}var Eo={},Zi=Vr(Eo),Mo=Vr(Eo),Co=Vr(Eo);function Ts(i){if(i===Eo)throw Error(t(174));return i}function dd(i,r){switch(jt(Co,r),jt(Mo,i),jt(Zi,Eo),i=r.nodeType,i){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:b(null,"");break;default:i=i===8?r.parentNode:r,r=i.namespaceURI||null,i=i.tagName,r=b(r,i)}Zt(Zi),jt(Zi,r)}function ha(){Zt(Zi),Zt(Mo),Zt(Co)}function Nm(i){Ts(Co.current);var r=Ts(Zi.current),c=b(r,i.type);r!==c&&(jt(Mo,i),jt(Zi,c))}function fd(i){Mo.current===i&&(Zt(Zi),Zt(Mo))}var cn=Vr(0);function Hl(i){for(var r=i;r!==null;){if(r.tag===13){var c=r.memoizedState;if(c!==null&&(c=c.dehydrated,c===null||c.data==="$?"||c.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var hd=[];function pd(){for(var i=0;i<hd.length;i++)hd[i]._workInProgressVersionPrimary=null;hd.length=0}var Vl=C.ReactCurrentDispatcher,md=C.ReactCurrentBatchConfig,ws=0,un=null,En=null,bn=null,Gl=!1,To=!1,wo=0,kS=0;function zn(){throw Error(t(321))}function gd(i,r){if(r===null)return!1;for(var c=0;c<r.length&&c<i.length;c++)if(!zi(i[c],r[c]))return!1;return!0}function xd(i,r,c,h,S,E){if(ws=E,un=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Vl.current=i===null||i.memoizedState===null?GS:WS,i=c(h,S),To){E=0;do{if(To=!1,wo=0,25<=E)throw Error(t(301));E+=1,bn=En=null,r.updateQueue=null,Vl.current=XS,i=c(h,S)}while(To)}if(Vl.current=Ql,r=En!==null&&En.next!==null,ws=0,bn=En=un=null,Gl=!1,r)throw Error(t(300));return i}function vd(){var i=wo!==0;return wo=0,i}function Ji(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bn===null?un.memoizedState=bn=i:bn=bn.next=i,bn}function Ri(){if(En===null){var i=un.alternate;i=i!==null?i.memoizedState:null}else i=En.next;var r=bn===null?un.memoizedState:bn.next;if(r!==null)bn=r,En=i;else{if(i===null)throw Error(t(310));En=i,i={memoizedState:En.memoizedState,baseState:En.baseState,baseQueue:En.baseQueue,queue:En.queue,next:null},bn===null?un.memoizedState=bn=i:bn=bn.next=i}return bn}function bo(i,r){return typeof r=="function"?r(i):r}function Sd(i){var r=Ri(),c=r.queue;if(c===null)throw Error(t(311));c.lastRenderedReducer=i;var h=En,S=h.baseQueue,E=c.pending;if(E!==null){if(S!==null){var D=S.next;S.next=E.next,E.next=D}h.baseQueue=S=E,c.pending=null}if(S!==null){E=S.next,h=h.baseState;var W=D=null,Z=null,he=E;do{var Ee=he.lane;if((ws&Ee)===Ee)Z!==null&&(Z=Z.next={lane:0,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),h=he.hasEagerState?he.eagerState:i(h,he.action);else{var Te={lane:Ee,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null};Z===null?(W=Z=Te,D=h):Z=Z.next=Te,un.lanes|=Ee,bs|=Ee}he=he.next}while(he!==null&&he!==E);Z===null?D=h:Z.next=W,zi(h,r.memoizedState)||(oi=!0),r.memoizedState=h,r.baseState=D,r.baseQueue=Z,c.lastRenderedState=h}if(i=c.interleaved,i!==null){S=i;do E=S.lane,un.lanes|=E,bs|=E,S=S.next;while(S!==i)}else S===null&&(c.lanes=0);return[r.memoizedState,c.dispatch]}function yd(i){var r=Ri(),c=r.queue;if(c===null)throw Error(t(311));c.lastRenderedReducer=i;var h=c.dispatch,S=c.pending,E=r.memoizedState;if(S!==null){c.pending=null;var D=S=S.next;do E=i(E,D.action),D=D.next;while(D!==S);zi(E,r.memoizedState)||(oi=!0),r.memoizedState=E,r.baseQueue===null&&(r.baseState=E),c.lastRenderedState=E}return[E,h]}function Um(){}function Om(i,r){var c=un,h=Ri(),S=r(),E=!zi(h.memoizedState,S);if(E&&(h.memoizedState=S,oi=!0),h=h.queue,Ad(Hm.bind(null,c,h,i),[i]),h.getSnapshot!==r||E||bn!==null&&bn.memoizedState.tag&1){if(c.flags|=2048,Ro(9,zm.bind(null,c,h,S,r),void 0,null),Rn===null)throw Error(t(349));(ws&30)!==0||km(c,r,S)}return S}function km(i,r,c){i.flags|=16384,i={getSnapshot:r,value:c},r=un.updateQueue,r===null?(r={lastEffect:null,stores:null},un.updateQueue=r,r.stores=[i]):(c=r.stores,c===null?r.stores=[i]:c.push(i))}function zm(i,r,c,h){r.value=c,r.getSnapshot=h,Vm(r)&&Gm(i)}function Hm(i,r,c){return c(function(){Vm(r)&&Gm(i)})}function Vm(i){var r=i.getSnapshot;i=i.value;try{var c=r();return!zi(i,c)}catch{return!0}}function Gm(i){var r=xr(i,1);r!==null&&Xi(r,i,1,-1)}function Wm(i){var r=Ji();return typeof i=="function"&&(i=i()),r.memoizedState=r.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:i},r.queue=i,i=i.dispatch=VS.bind(null,un,i),[r.memoizedState,i]}function Ro(i,r,c,h){return i={tag:i,create:r,destroy:c,deps:h,next:null},r=un.updateQueue,r===null?(r={lastEffect:null,stores:null},un.updateQueue=r,r.lastEffect=i.next=i):(c=r.lastEffect,c===null?r.lastEffect=i.next=i:(h=c.next,c.next=i,i.next=h,r.lastEffect=i)),i}function Xm(){return Ri().memoizedState}function Wl(i,r,c,h){var S=Ji();un.flags|=i,S.memoizedState=Ro(1|r,c,void 0,h===void 0?null:h)}function Xl(i,r,c,h){var S=Ri();h=h===void 0?null:h;var E=void 0;if(En!==null){var D=En.memoizedState;if(E=D.destroy,h!==null&&gd(h,D.deps)){S.memoizedState=Ro(r,c,E,h);return}}un.flags|=i,S.memoizedState=Ro(1|r,c,E,h)}function Qm(i,r){return Wl(8390656,8,i,r)}function Ad(i,r){return Xl(2048,8,i,r)}function qm(i,r){return Xl(4,2,i,r)}function Ym(i,r){return Xl(4,4,i,r)}function jm(i,r){if(typeof r=="function")return i=i(),r(i),function(){r(null)};if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function Km(i,r,c){return c=c!=null?c.concat([i]):null,Xl(4,4,jm.bind(null,r,i),c)}function _d(){}function $m(i,r){var c=Ri();r=r===void 0?null:r;var h=c.memoizedState;return h!==null&&r!==null&&gd(r,h[1])?h[0]:(c.memoizedState=[i,r],i)}function Zm(i,r){var c=Ri();r=r===void 0?null:r;var h=c.memoizedState;return h!==null&&r!==null&&gd(r,h[1])?h[0]:(i=i(),c.memoizedState=[i,r],i)}function Jm(i,r,c){return(ws&21)===0?(i.baseState&&(i.baseState=!1,oi=!0),i.memoizedState=c):(zi(c,r)||(c=We(),un.lanes|=c,bs|=c,i.baseState=!0),r)}function zS(i,r){var c=Et;Et=c!==0&&4>c?c:4,i(!0);var h=md.transition;md.transition={};try{i(!1),r()}finally{Et=c,md.transition=h}}function eg(){return Ri().memoizedState}function HS(i,r,c){var h=Kr(i);if(c={lane:h,action:c,hasEagerState:!1,eagerState:null,next:null},tg(i))ng(r,c);else if(c=Dm(i,r,c,h),c!==null){var S=Kn();Xi(c,i,h,S),ig(c,r,h)}}function VS(i,r,c){var h=Kr(i),S={lane:h,action:c,hasEagerState:!1,eagerState:null,next:null};if(tg(i))ng(r,S);else{var E=i.alternate;if(i.lanes===0&&(E===null||E.lanes===0)&&(E=r.lastRenderedReducer,E!==null))try{var D=r.lastRenderedState,W=E(D,c);if(S.hasEagerState=!0,S.eagerState=W,zi(W,D)){var Z=r.interleaved;Z===null?(S.next=S,cd(r)):(S.next=Z.next,Z.next=S),r.interleaved=S;return}}catch{}finally{}c=Dm(i,r,S,h),c!==null&&(S=Kn(),Xi(c,i,h,S),ig(c,r,h))}}function tg(i){var r=i.alternate;return i===un||r!==null&&r===un}function ng(i,r){To=Gl=!0;var c=i.pending;c===null?r.next=r:(r.next=c.next,c.next=r),i.pending=r}function ig(i,r,c){if((c&4194240)!==0){var h=r.lanes;h&=i.pendingLanes,c|=h,r.lanes=c,ri(i,c)}}var Ql={readContext:bi,useCallback:zn,useContext:zn,useEffect:zn,useImperativeHandle:zn,useInsertionEffect:zn,useLayoutEffect:zn,useMemo:zn,useReducer:zn,useRef:zn,useState:zn,useDebugValue:zn,useDeferredValue:zn,useTransition:zn,useMutableSource:zn,useSyncExternalStore:zn,useId:zn,unstable_isNewReconciler:!1},GS={readContext:bi,useCallback:function(i,r){return Ji().memoizedState=[i,r===void 0?null:r],i},useContext:bi,useEffect:Qm,useImperativeHandle:function(i,r,c){return c=c!=null?c.concat([i]):null,Wl(4194308,4,jm.bind(null,r,i),c)},useLayoutEffect:function(i,r){return Wl(4194308,4,i,r)},useInsertionEffect:function(i,r){return Wl(4,2,i,r)},useMemo:function(i,r){var c=Ji();return r=r===void 0?null:r,i=i(),c.memoizedState=[i,r],i},useReducer:function(i,r,c){var h=Ji();return r=c!==void 0?c(r):r,h.memoizedState=h.baseState=r,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:r},h.queue=i,i=i.dispatch=HS.bind(null,un,i),[h.memoizedState,i]},useRef:function(i){var r=Ji();return i={current:i},r.memoizedState=i},useState:Wm,useDebugValue:_d,useDeferredValue:function(i){return Ji().memoizedState=i},useTransition:function(){var i=Wm(!1),r=i[0];return i=zS.bind(null,i[1]),Ji().memoizedState=i,[r,i]},useMutableSource:function(){},useSyncExternalStore:function(i,r,c){var h=un,S=Ji();if(sn){if(c===void 0)throw Error(t(407));c=c()}else{if(c=r(),Rn===null)throw Error(t(349));(ws&30)!==0||km(h,r,c)}S.memoizedState=c;var E={value:c,getSnapshot:r};return S.queue=E,Qm(Hm.bind(null,h,E,i),[i]),h.flags|=2048,Ro(9,zm.bind(null,h,E,c,r),void 0,null),c},useId:function(){var i=Ji(),r=Rn.identifierPrefix;if(sn){var c=gr,h=mr;c=(h&~(1<<32-Ne(h)-1)).toString(32)+c,r=":"+r+"R"+c,c=wo++,0<c&&(r+="H"+c.toString(32)),r+=":"}else c=kS++,r=":"+r+"r"+c.toString(32)+":";return i.memoizedState=r},unstable_isNewReconciler:!1},WS={readContext:bi,useCallback:$m,useContext:bi,useEffect:Ad,useImperativeHandle:Km,useInsertionEffect:qm,useLayoutEffect:Ym,useMemo:Zm,useReducer:Sd,useRef:Xm,useState:function(){return Sd(bo)},useDebugValue:_d,useDeferredValue:function(i){var r=Ri();return Jm(r,En.memoizedState,i)},useTransition:function(){var i=Sd(bo)[0],r=Ri().memoizedState;return[i,r]},useMutableSource:Um,useSyncExternalStore:Om,useId:eg,unstable_isNewReconciler:!1},XS={readContext:bi,useCallback:$m,useContext:bi,useEffect:Ad,useImperativeHandle:Km,useInsertionEffect:qm,useLayoutEffect:Ym,useMemo:Zm,useReducer:yd,useRef:Xm,useState:function(){return yd(bo)},useDebugValue:_d,useDeferredValue:function(i){var r=Ri();return En===null?r.memoizedState=i:Jm(r,En.memoizedState,i)},useTransition:function(){var i=yd(bo)[0],r=Ri().memoizedState;return[i,r]},useMutableSource:Um,useSyncExternalStore:Om,useId:eg,unstable_isNewReconciler:!1};function Vi(i,r){if(i&&i.defaultProps){r=J({},r),i=i.defaultProps;for(var c in i)r[c]===void 0&&(r[c]=i[c]);return r}return r}function Ed(i,r,c,h){r=i.memoizedState,c=c(h,r),c=c==null?r:J({},r,c),i.memoizedState=c,i.lanes===0&&(i.updateQueue.baseState=c)}var ql={isMounted:function(i){return(i=i._reactInternals)?Yn(i)===i:!1},enqueueSetState:function(i,r,c){i=i._reactInternals;var h=Kn(),S=Kr(i),E=vr(h,S);E.payload=r,c!=null&&(E.callback=c),r=Qr(i,E,S),r!==null&&(Xi(r,i,S,h),kl(r,i,S))},enqueueReplaceState:function(i,r,c){i=i._reactInternals;var h=Kn(),S=Kr(i),E=vr(h,S);E.tag=1,E.payload=r,c!=null&&(E.callback=c),r=Qr(i,E,S),r!==null&&(Xi(r,i,S,h),kl(r,i,S))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var c=Kn(),h=Kr(i),S=vr(c,h);S.tag=2,r!=null&&(S.callback=r),r=Qr(i,S,h),r!==null&&(Xi(r,i,h,c),kl(r,i,h))}};function rg(i,r,c,h,S,E,D){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,E,D):r.prototype&&r.prototype.isPureReactComponent?!mo(c,h)||!mo(S,E):!0}function sg(i,r,c){var h=!1,S=Gr,E=r.contextType;return typeof E=="object"&&E!==null?E=bi(E):(S=ai(r)?_s:kn.current,h=r.contextTypes,E=(h=h!=null)?aa(i,S):Gr),r=new r(c,E),i.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ql,i.stateNode=r,r._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=S,i.__reactInternalMemoizedMaskedChildContext=E),r}function ag(i,r,c,h){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(c,h),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(c,h),r.state!==i&&ql.enqueueReplaceState(r,r.state,null)}function Md(i,r,c,h){var S=i.stateNode;S.props=c,S.state=i.memoizedState,S.refs={},ud(i);var E=r.contextType;typeof E=="object"&&E!==null?S.context=bi(E):(E=ai(r)?_s:kn.current,S.context=aa(i,E)),S.state=i.memoizedState,E=r.getDerivedStateFromProps,typeof E=="function"&&(Ed(i,r,E,c),S.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof S.getSnapshotBeforeUpdate=="function"||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(r=S.state,typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount(),r!==S.state&&ql.enqueueReplaceState(S,S.state,null),zl(i,c,S,h),S.state=i.memoizedState),typeof S.componentDidMount=="function"&&(i.flags|=4194308)}function pa(i,r){try{var c="",h=r;do c+=be(h),h=h.return;while(h);var S=c}catch(E){S=`
Error generating stack: `+E.message+`
`+E.stack}return{value:i,source:r,stack:S,digest:null}}function Cd(i,r,c){return{value:i,source:null,stack:c??null,digest:r??null}}function Td(i,r){try{console.error(r.value)}catch(c){setTimeout(function(){throw c})}}var QS=typeof WeakMap=="function"?WeakMap:Map;function og(i,r,c){c=vr(-1,c),c.tag=3,c.payload={element:null};var h=r.value;return c.callback=function(){ec||(ec=!0,Hd=h),Td(i,r)},c}function lg(i,r,c){c=vr(-1,c),c.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var S=r.value;c.payload=function(){return h(S)},c.callback=function(){Td(i,r)}}var E=i.stateNode;return E!==null&&typeof E.componentDidCatch=="function"&&(c.callback=function(){Td(i,r),typeof h!="function"&&(Yr===null?Yr=new Set([this]):Yr.add(this));var D=r.stack;this.componentDidCatch(r.value,{componentStack:D!==null?D:""})}),c}function cg(i,r,c){var h=i.pingCache;if(h===null){h=i.pingCache=new QS;var S=new Set;h.set(r,S)}else S=h.get(r),S===void 0&&(S=new Set,h.set(r,S));S.has(c)||(S.add(c),i=ay.bind(null,i,r,c),r.then(i,i))}function ug(i){do{var r;if((r=i.tag===13)&&(r=i.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return i;i=i.return}while(i!==null);return null}function dg(i,r,c,h,S){return(i.mode&1)===0?(i===r?i.flags|=65536:(i.flags|=128,c.flags|=131072,c.flags&=-52805,c.tag===1&&(c.alternate===null?c.tag=17:(r=vr(-1,1),r.tag=2,Qr(c,r,1))),c.lanes|=1),i):(i.flags|=65536,i.lanes=S,i)}var qS=C.ReactCurrentOwner,oi=!1;function jn(i,r,c,h){r.child=i===null?Pm(r,null,c,h):ua(r,i.child,c,h)}function fg(i,r,c,h,S){c=c.render;var E=r.ref;return fa(r,S),h=xd(i,r,c,h,E,S),c=vd(),i!==null&&!oi?(r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~S,Sr(i,r,S)):(sn&&c&&ed(r),r.flags|=1,jn(i,r,h,S),r.child)}function hg(i,r,c,h,S){if(i===null){var E=c.type;return typeof E=="function"&&!Yd(E)&&E.defaultProps===void 0&&c.compare===null&&c.defaultProps===void 0?(r.tag=15,r.type=E,pg(i,r,E,h,S)):(i=ac(c.type,null,h,r,r.mode,S),i.ref=r.ref,i.return=r,r.child=i)}if(E=i.child,(i.lanes&S)===0){var D=E.memoizedProps;if(c=c.compare,c=c!==null?c:mo,c(D,h)&&i.ref===r.ref)return Sr(i,r,S)}return r.flags|=1,i=Zr(E,h),i.ref=r.ref,i.return=r,r.child=i}function pg(i,r,c,h,S){if(i!==null){var E=i.memoizedProps;if(mo(E,h)&&i.ref===r.ref)if(oi=!1,r.pendingProps=h=E,(i.lanes&S)!==0)(i.flags&131072)!==0&&(oi=!0);else return r.lanes=i.lanes,Sr(i,r,S)}return wd(i,r,c,h,S)}function mg(i,r,c){var h=r.pendingProps,S=h.children,E=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},jt(ga,vi),vi|=c;else{if((c&1073741824)===0)return i=E!==null?E.baseLanes|c:c,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:i,cachePool:null,transitions:null},r.updateQueue=null,jt(ga,vi),vi|=i,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=E!==null?E.baseLanes:c,jt(ga,vi),vi|=h}else E!==null?(h=E.baseLanes|c,r.memoizedState=null):h=c,jt(ga,vi),vi|=h;return jn(i,r,S,c),r.child}function gg(i,r){var c=r.ref;(i===null&&c!==null||i!==null&&i.ref!==c)&&(r.flags|=512,r.flags|=2097152)}function wd(i,r,c,h,S){var E=ai(c)?_s:kn.current;return E=aa(r,E),fa(r,S),c=xd(i,r,c,h,E,S),h=vd(),i!==null&&!oi?(r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~S,Sr(i,r,S)):(sn&&h&&ed(r),r.flags|=1,jn(i,r,c,S),r.child)}function xg(i,r,c,h,S){if(ai(c)){var E=!0;Pl(r)}else E=!1;if(fa(r,S),r.stateNode===null)jl(i,r),sg(r,c,h),Md(r,c,h,S),h=!0;else if(i===null){var D=r.stateNode,W=r.memoizedProps;D.props=W;var Z=D.context,he=c.contextType;typeof he=="object"&&he!==null?he=bi(he):(he=ai(c)?_s:kn.current,he=aa(r,he));var Ee=c.getDerivedStateFromProps,Te=typeof Ee=="function"||typeof D.getSnapshotBeforeUpdate=="function";Te||typeof D.UNSAFE_componentWillReceiveProps!="function"&&typeof D.componentWillReceiveProps!="function"||(W!==h||Z!==he)&&ag(r,D,h,he),Xr=!1;var _e=r.memoizedState;D.state=_e,zl(r,h,D,S),Z=r.memoizedState,W!==h||_e!==Z||si.current||Xr?(typeof Ee=="function"&&(Ed(r,c,Ee,h),Z=r.memoizedState),(W=Xr||rg(r,c,W,h,_e,Z,he))?(Te||typeof D.UNSAFE_componentWillMount!="function"&&typeof D.componentWillMount!="function"||(typeof D.componentWillMount=="function"&&D.componentWillMount(),typeof D.UNSAFE_componentWillMount=="function"&&D.UNSAFE_componentWillMount()),typeof D.componentDidMount=="function"&&(r.flags|=4194308)):(typeof D.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=h,r.memoizedState=Z),D.props=h,D.state=Z,D.context=he,h=W):(typeof D.componentDidMount=="function"&&(r.flags|=4194308),h=!1)}else{D=r.stateNode,Fm(i,r),W=r.memoizedProps,he=r.type===r.elementType?W:Vi(r.type,W),D.props=he,Te=r.pendingProps,_e=D.context,Z=c.contextType,typeof Z=="object"&&Z!==null?Z=bi(Z):(Z=ai(c)?_s:kn.current,Z=aa(r,Z));var Xe=c.getDerivedStateFromProps;(Ee=typeof Xe=="function"||typeof D.getSnapshotBeforeUpdate=="function")||typeof D.UNSAFE_componentWillReceiveProps!="function"&&typeof D.componentWillReceiveProps!="function"||(W!==Te||_e!==Z)&&ag(r,D,h,Z),Xr=!1,_e=r.memoizedState,D.state=_e,zl(r,h,D,S);var Ze=r.memoizedState;W!==Te||_e!==Ze||si.current||Xr?(typeof Xe=="function"&&(Ed(r,c,Xe,h),Ze=r.memoizedState),(he=Xr||rg(r,c,he,h,_e,Ze,Z)||!1)?(Ee||typeof D.UNSAFE_componentWillUpdate!="function"&&typeof D.componentWillUpdate!="function"||(typeof D.componentWillUpdate=="function"&&D.componentWillUpdate(h,Ze,Z),typeof D.UNSAFE_componentWillUpdate=="function"&&D.UNSAFE_componentWillUpdate(h,Ze,Z)),typeof D.componentDidUpdate=="function"&&(r.flags|=4),typeof D.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof D.componentDidUpdate!="function"||W===i.memoizedProps&&_e===i.memoizedState||(r.flags|=4),typeof D.getSnapshotBeforeUpdate!="function"||W===i.memoizedProps&&_e===i.memoizedState||(r.flags|=1024),r.memoizedProps=h,r.memoizedState=Ze),D.props=h,D.state=Ze,D.context=Z,h=he):(typeof D.componentDidUpdate!="function"||W===i.memoizedProps&&_e===i.memoizedState||(r.flags|=4),typeof D.getSnapshotBeforeUpdate!="function"||W===i.memoizedProps&&_e===i.memoizedState||(r.flags|=1024),h=!1)}return bd(i,r,c,h,E,S)}function bd(i,r,c,h,S,E){gg(i,r);var D=(r.flags&128)!==0;if(!h&&!D)return S&&_m(r,c,!1),Sr(i,r,E);h=r.stateNode,qS.current=r;var W=D&&typeof c.getDerivedStateFromError!="function"?null:h.render();return r.flags|=1,i!==null&&D?(r.child=ua(r,i.child,null,E),r.child=ua(r,null,W,E)):jn(i,r,W,E),r.memoizedState=h.state,S&&_m(r,c,!0),r.child}function vg(i){var r=i.stateNode;r.pendingContext?ym(i,r.pendingContext,r.pendingContext!==r.context):r.context&&ym(i,r.context,!1),dd(i,r.containerInfo)}function Sg(i,r,c,h,S){return ca(),rd(S),r.flags|=256,jn(i,r,c,h),r.child}var Rd={dehydrated:null,treeContext:null,retryLane:0};function Id(i){return{baseLanes:i,cachePool:null,transitions:null}}function yg(i,r,c){var h=r.pendingProps,S=cn.current,E=!1,D=(r.flags&128)!==0,W;if((W=D)||(W=i!==null&&i.memoizedState===null?!1:(S&2)!==0),W?(E=!0,r.flags&=-129):(i===null||i.memoizedState!==null)&&(S|=1),jt(cn,S&1),i===null)return id(r),i=r.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((r.mode&1)===0?r.lanes=1:i.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(D=h.children,i=h.fallback,E?(h=r.mode,E=r.child,D={mode:"hidden",children:D},(h&1)===0&&E!==null?(E.childLanes=0,E.pendingProps=D):E=oc(D,h,0,null),i=Ds(i,h,c,null),E.return=r,i.return=r,E.sibling=i,r.child=E,r.child.memoizedState=Id(c),r.memoizedState=Rd,i):Pd(r,D));if(S=i.memoizedState,S!==null&&(W=S.dehydrated,W!==null))return YS(i,r,D,h,W,S,c);if(E){E=h.fallback,D=r.mode,S=i.child,W=S.sibling;var Z={mode:"hidden",children:h.children};return(D&1)===0&&r.child!==S?(h=r.child,h.childLanes=0,h.pendingProps=Z,r.deletions=null):(h=Zr(S,Z),h.subtreeFlags=S.subtreeFlags&14680064),W!==null?E=Zr(W,E):(E=Ds(E,D,c,null),E.flags|=2),E.return=r,h.return=r,h.sibling=E,r.child=h,h=E,E=r.child,D=i.child.memoizedState,D=D===null?Id(c):{baseLanes:D.baseLanes|c,cachePool:null,transitions:D.transitions},E.memoizedState=D,E.childLanes=i.childLanes&~c,r.memoizedState=Rd,h}return E=i.child,i=E.sibling,h=Zr(E,{mode:"visible",children:h.children}),(r.mode&1)===0&&(h.lanes=c),h.return=r,h.sibling=null,i!==null&&(c=r.deletions,c===null?(r.deletions=[i],r.flags|=16):c.push(i)),r.child=h,r.memoizedState=null,h}function Pd(i,r){return r=oc({mode:"visible",children:r},i.mode,0,null),r.return=i,i.child=r}function Yl(i,r,c,h){return h!==null&&rd(h),ua(r,i.child,null,c),i=Pd(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function YS(i,r,c,h,S,E,D){if(c)return r.flags&256?(r.flags&=-257,h=Cd(Error(t(422))),Yl(i,r,D,h)):r.memoizedState!==null?(r.child=i.child,r.flags|=128,null):(E=h.fallback,S=r.mode,h=oc({mode:"visible",children:h.children},S,0,null),E=Ds(E,S,D,null),E.flags|=2,h.return=r,E.return=r,h.sibling=E,r.child=h,(r.mode&1)!==0&&ua(r,i.child,null,D),r.child.memoizedState=Id(D),r.memoizedState=Rd,E);if((r.mode&1)===0)return Yl(i,r,D,null);if(S.data==="$!"){if(h=S.nextSibling&&S.nextSibling.dataset,h)var W=h.dgst;return h=W,E=Error(t(419)),h=Cd(E,h,void 0),Yl(i,r,D,h)}if(W=(D&i.childLanes)!==0,oi||W){if(h=Rn,h!==null){switch(D&-D){case 4:S=2;break;case 16:S=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:S=32;break;case 536870912:S=268435456;break;default:S=0}S=(S&(h.suspendedLanes|D))!==0?0:S,S!==0&&S!==E.retryLane&&(E.retryLane=S,xr(i,S),Xi(h,i,S,-1))}return qd(),h=Cd(Error(t(421))),Yl(i,r,D,h)}return S.data==="$?"?(r.flags|=128,r.child=i.child,r=oy.bind(null,i),S._reactRetry=r,null):(i=E.treeContext,xi=Hr(S.nextSibling),gi=r,sn=!0,Hi=null,i!==null&&(Ti[wi++]=mr,Ti[wi++]=gr,Ti[wi++]=Es,mr=i.id,gr=i.overflow,Es=r),r=Pd(r,h.children),r.flags|=4096,r)}function Ag(i,r,c){i.lanes|=r;var h=i.alternate;h!==null&&(h.lanes|=r),ld(i.return,r,c)}function Dd(i,r,c,h,S){var E=i.memoizedState;E===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:h,tail:c,tailMode:S}:(E.isBackwards=r,E.rendering=null,E.renderingStartTime=0,E.last=h,E.tail=c,E.tailMode=S)}function _g(i,r,c){var h=r.pendingProps,S=h.revealOrder,E=h.tail;if(jn(i,r,h.children,c),h=cn.current,(h&2)!==0)h=h&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Ag(i,c,r);else if(i.tag===19)Ag(i,c,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(jt(cn,h),(r.mode&1)===0)r.memoizedState=null;else switch(S){case"forwards":for(c=r.child,S=null;c!==null;)i=c.alternate,i!==null&&Hl(i)===null&&(S=c),c=c.sibling;c=S,c===null?(S=r.child,r.child=null):(S=c.sibling,c.sibling=null),Dd(r,!1,S,c,E);break;case"backwards":for(c=null,S=r.child,r.child=null;S!==null;){if(i=S.alternate,i!==null&&Hl(i)===null){r.child=S;break}i=S.sibling,S.sibling=c,c=S,S=i}Dd(r,!0,c,null,E);break;case"together":Dd(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function jl(i,r){(r.mode&1)===0&&i!==null&&(i.alternate=null,r.alternate=null,r.flags|=2)}function Sr(i,r,c){if(i!==null&&(r.dependencies=i.dependencies),bs|=r.lanes,(c&r.childLanes)===0)return null;if(i!==null&&r.child!==i.child)throw Error(t(153));if(r.child!==null){for(i=r.child,c=Zr(i,i.pendingProps),r.child=c,c.return=r;i.sibling!==null;)i=i.sibling,c=c.sibling=Zr(i,i.pendingProps),c.return=r;c.sibling=null}return r.child}function jS(i,r,c){switch(r.tag){case 3:vg(r),ca();break;case 5:Nm(r);break;case 1:ai(r.type)&&Pl(r);break;case 4:dd(r,r.stateNode.containerInfo);break;case 10:var h=r.type._context,S=r.memoizedProps.value;jt(Ul,h._currentValue),h._currentValue=S;break;case 13:if(h=r.memoizedState,h!==null)return h.dehydrated!==null?(jt(cn,cn.current&1),r.flags|=128,null):(c&r.child.childLanes)!==0?yg(i,r,c):(jt(cn,cn.current&1),i=Sr(i,r,c),i!==null?i.sibling:null);jt(cn,cn.current&1);break;case 19:if(h=(c&r.childLanes)!==0,(i.flags&128)!==0){if(h)return _g(i,r,c);r.flags|=128}if(S=r.memoizedState,S!==null&&(S.rendering=null,S.tail=null,S.lastEffect=null),jt(cn,cn.current),h)break;return null;case 22:case 23:return r.lanes=0,mg(i,r,c)}return Sr(i,r,c)}var Eg,Fd,Mg,Cg;Eg=function(i,r){for(var c=r.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===r)break;for(;c.sibling===null;){if(c.return===null||c.return===r)return;c=c.return}c.sibling.return=c.return,c=c.sibling}},Fd=function(){},Mg=function(i,r,c,h){var S=i.memoizedProps;if(S!==h){i=r.stateNode,Ts(Zi.current);var E=null;switch(c){case"input":S=dt(i,S),h=dt(i,h),E=[];break;case"select":S=J({},S,{value:void 0}),h=J({},h,{value:void 0}),E=[];break;case"textarea":S=qt(i,S),h=qt(i,h),E=[];break;default:typeof S.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=bl)}He(c,h);var D;c=null;for(he in S)if(!h.hasOwnProperty(he)&&S.hasOwnProperty(he)&&S[he]!=null)if(he==="style"){var W=S[he];for(D in W)W.hasOwnProperty(D)&&(c||(c={}),c[D]="")}else he!=="dangerouslySetInnerHTML"&&he!=="children"&&he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&he!=="autoFocus"&&(s.hasOwnProperty(he)?E||(E=[]):(E=E||[]).push(he,null));for(he in h){var Z=h[he];if(W=S!=null?S[he]:void 0,h.hasOwnProperty(he)&&Z!==W&&(Z!=null||W!=null))if(he==="style")if(W){for(D in W)!W.hasOwnProperty(D)||Z&&Z.hasOwnProperty(D)||(c||(c={}),c[D]="");for(D in Z)Z.hasOwnProperty(D)&&W[D]!==Z[D]&&(c||(c={}),c[D]=Z[D])}else c||(E||(E=[]),E.push(he,c)),c=Z;else he==="dangerouslySetInnerHTML"?(Z=Z?Z.__html:void 0,W=W?W.__html:void 0,Z!=null&&W!==Z&&(E=E||[]).push(he,Z)):he==="children"?typeof Z!="string"&&typeof Z!="number"||(E=E||[]).push(he,""+Z):he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&(s.hasOwnProperty(he)?(Z!=null&&he==="onScroll"&&$t("scroll",i),E||W===Z||(E=[])):(E=E||[]).push(he,Z))}c&&(E=E||[]).push("style",c);var he=E;(r.updateQueue=he)&&(r.flags|=4)}},Cg=function(i,r,c,h){c!==h&&(r.flags|=4)};function Io(i,r){if(!sn)switch(i.tailMode){case"hidden":r=i.tail;for(var c=null;r!==null;)r.alternate!==null&&(c=r),r=r.sibling;c===null?i.tail=null:c.sibling=null;break;case"collapsed":c=i.tail;for(var h=null;c!==null;)c.alternate!==null&&(h=c),c=c.sibling;h===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function Hn(i){var r=i.alternate!==null&&i.alternate.child===i.child,c=0,h=0;if(r)for(var S=i.child;S!==null;)c|=S.lanes|S.childLanes,h|=S.subtreeFlags&14680064,h|=S.flags&14680064,S.return=i,S=S.sibling;else for(S=i.child;S!==null;)c|=S.lanes|S.childLanes,h|=S.subtreeFlags,h|=S.flags,S.return=i,S=S.sibling;return i.subtreeFlags|=h,i.childLanes=c,r}function KS(i,r,c){var h=r.pendingProps;switch(td(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Hn(r),null;case 1:return ai(r.type)&&Il(),Hn(r),null;case 3:return h=r.stateNode,ha(),Zt(si),Zt(kn),pd(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(Bl(r)?r.flags|=4:i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Hi!==null&&(Wd(Hi),Hi=null))),Fd(i,r),Hn(r),null;case 5:fd(r);var S=Ts(Co.current);if(c=r.type,i!==null&&r.stateNode!=null)Mg(i,r,c,h,S),i.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!h){if(r.stateNode===null)throw Error(t(166));return Hn(r),null}if(i=Ts(Zi.current),Bl(r)){h=r.stateNode,c=r.type;var E=r.memoizedProps;switch(h[$i]=r,h[yo]=E,i=(r.mode&1)!==0,c){case"dialog":$t("cancel",h),$t("close",h);break;case"iframe":case"object":case"embed":$t("load",h);break;case"video":case"audio":for(S=0;S<xo.length;S++)$t(xo[S],h);break;case"source":$t("error",h);break;case"img":case"image":case"link":$t("error",h),$t("load",h);break;case"details":$t("toggle",h);break;case"input":nt(h,E),$t("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!E.multiple},$t("invalid",h);break;case"textarea":ne(h,E),$t("invalid",h)}He(c,E),S=null;for(var D in E)if(E.hasOwnProperty(D)){var W=E[D];D==="children"?typeof W=="string"?h.textContent!==W&&(E.suppressHydrationWarning!==!0&&wl(h.textContent,W,i),S=["children",W]):typeof W=="number"&&h.textContent!==""+W&&(E.suppressHydrationWarning!==!0&&wl(h.textContent,W,i),S=["children",""+W]):s.hasOwnProperty(D)&&W!=null&&D==="onScroll"&&$t("scroll",h)}switch(c){case"input":Ge(h),yt(h,E,!0);break;case"textarea":Ge(h),Pt(h);break;case"select":case"option":break;default:typeof E.onClick=="function"&&(h.onclick=bl)}h=S,r.updateQueue=h,h!==null&&(r.flags|=4)}else{D=S.nodeType===9?S:S.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=z(c)),i==="http://www.w3.org/1999/xhtml"?c==="script"?(i=D.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=D.createElement(c,{is:h.is}):(i=D.createElement(c),c==="select"&&(D=i,h.multiple?D.multiple=!0:h.size&&(D.size=h.size))):i=D.createElementNS(i,c),i[$i]=r,i[yo]=h,Eg(i,r,!1,!1),r.stateNode=i;e:{switch(D=Le(c,h),c){case"dialog":$t("cancel",i),$t("close",i),S=h;break;case"iframe":case"object":case"embed":$t("load",i),S=h;break;case"video":case"audio":for(S=0;S<xo.length;S++)$t(xo[S],i);S=h;break;case"source":$t("error",i),S=h;break;case"img":case"image":case"link":$t("error",i),$t("load",i),S=h;break;case"details":$t("toggle",i),S=h;break;case"input":nt(i,h),S=dt(i,h),$t("invalid",i);break;case"option":S=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},S=J({},h,{value:void 0}),$t("invalid",i);break;case"textarea":ne(i,h),S=qt(i,h),$t("invalid",i);break;default:S=h}He(c,S),W=S;for(E in W)if(W.hasOwnProperty(E)){var Z=W[E];E==="style"?me(i,Z):E==="dangerouslySetInnerHTML"?(Z=Z?Z.__html:void 0,Z!=null&&de(i,Z)):E==="children"?typeof Z=="string"?(c!=="textarea"||Z!=="")&&ge(i,Z):typeof Z=="number"&&ge(i,""+Z):E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&E!=="autoFocus"&&(s.hasOwnProperty(E)?Z!=null&&E==="onScroll"&&$t("scroll",i):Z!=null&&P(i,E,Z,D))}switch(c){case"input":Ge(i),yt(i,h,!1);break;case"textarea":Ge(i),Pt(i);break;case"option":h.value!=null&&i.setAttribute("value",""+pe(h.value));break;case"select":i.multiple=!!h.multiple,E=h.value,E!=null?Ut(i,!!h.multiple,E,!1):h.defaultValue!=null&&Ut(i,!!h.multiple,h.defaultValue,!0);break;default:typeof S.onClick=="function"&&(i.onclick=bl)}switch(c){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Hn(r),null;case 6:if(i&&r.stateNode!=null)Cg(i,r,i.memoizedProps,h);else{if(typeof h!="string"&&r.stateNode===null)throw Error(t(166));if(c=Ts(Co.current),Ts(Zi.current),Bl(r)){if(h=r.stateNode,c=r.memoizedProps,h[$i]=r,(E=h.nodeValue!==c)&&(i=gi,i!==null))switch(i.tag){case 3:wl(h.nodeValue,c,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&wl(h.nodeValue,c,(i.mode&1)!==0)}E&&(r.flags|=4)}else h=(c.nodeType===9?c:c.ownerDocument).createTextNode(h),h[$i]=r,r.stateNode=h}return Hn(r),null;case 13:if(Zt(cn),h=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(sn&&xi!==null&&(r.mode&1)!==0&&(r.flags&128)===0)bm(),ca(),r.flags|=98560,E=!1;else if(E=Bl(r),h!==null&&h.dehydrated!==null){if(i===null){if(!E)throw Error(t(318));if(E=r.memoizedState,E=E!==null?E.dehydrated:null,!E)throw Error(t(317));E[$i]=r}else ca(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Hn(r),E=!1}else Hi!==null&&(Wd(Hi),Hi=null),E=!0;if(!E)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=c,r):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(r.child.flags|=8192,(r.mode&1)!==0&&(i===null||(cn.current&1)!==0?Mn===0&&(Mn=3):qd())),r.updateQueue!==null&&(r.flags|=4),Hn(r),null);case 4:return ha(),Fd(i,r),i===null&&vo(r.stateNode.containerInfo),Hn(r),null;case 10:return od(r.type._context),Hn(r),null;case 17:return ai(r.type)&&Il(),Hn(r),null;case 19:if(Zt(cn),E=r.memoizedState,E===null)return Hn(r),null;if(h=(r.flags&128)!==0,D=E.rendering,D===null)if(h)Io(E,!1);else{if(Mn!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(D=Hl(i),D!==null){for(r.flags|=128,Io(E,!1),h=D.updateQueue,h!==null&&(r.updateQueue=h,r.flags|=4),r.subtreeFlags=0,h=c,c=r.child;c!==null;)E=c,i=h,E.flags&=14680066,D=E.alternate,D===null?(E.childLanes=0,E.lanes=i,E.child=null,E.subtreeFlags=0,E.memoizedProps=null,E.memoizedState=null,E.updateQueue=null,E.dependencies=null,E.stateNode=null):(E.childLanes=D.childLanes,E.lanes=D.lanes,E.child=D.child,E.subtreeFlags=0,E.deletions=null,E.memoizedProps=D.memoizedProps,E.memoizedState=D.memoizedState,E.updateQueue=D.updateQueue,E.type=D.type,i=D.dependencies,E.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),c=c.sibling;return jt(cn,cn.current&1|2),r.child}i=i.sibling}E.tail!==null&&ln()>xa&&(r.flags|=128,h=!0,Io(E,!1),r.lanes=4194304)}else{if(!h)if(i=Hl(D),i!==null){if(r.flags|=128,h=!0,c=i.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),Io(E,!0),E.tail===null&&E.tailMode==="hidden"&&!D.alternate&&!sn)return Hn(r),null}else 2*ln()-E.renderingStartTime>xa&&c!==1073741824&&(r.flags|=128,h=!0,Io(E,!1),r.lanes=4194304);E.isBackwards?(D.sibling=r.child,r.child=D):(c=E.last,c!==null?c.sibling=D:r.child=D,E.last=D)}return E.tail!==null?(r=E.tail,E.rendering=r,E.tail=r.sibling,E.renderingStartTime=ln(),r.sibling=null,c=cn.current,jt(cn,h?c&1|2:c&1),r):(Hn(r),null);case 22:case 23:return Qd(),h=r.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(r.flags|=8192),h&&(r.mode&1)!==0?(vi&1073741824)!==0&&(Hn(r),r.subtreeFlags&6&&(r.flags|=8192)):Hn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function $S(i,r){switch(td(r),r.tag){case 1:return ai(r.type)&&Il(),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return ha(),Zt(si),Zt(kn),pd(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 5:return fd(r),null;case 13:if(Zt(cn),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(t(340));ca()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return Zt(cn),null;case 4:return ha(),null;case 10:return od(r.type._context),null;case 22:case 23:return Qd(),null;case 24:return null;default:return null}}var Kl=!1,Vn=!1,ZS=typeof WeakSet=="function"?WeakSet:Set,je=null;function ma(i,r){var c=i.ref;if(c!==null)if(typeof c=="function")try{c(null)}catch(h){fn(i,r,h)}else c.current=null}function Ld(i,r,c){try{c()}catch(h){fn(i,r,h)}}var Tg=!1;function JS(i,r){if(Qu=gl,i=rm(),Ou(i)){if("selectionStart"in i)var c={start:i.selectionStart,end:i.selectionEnd};else e:{c=(c=i.ownerDocument)&&c.defaultView||window;var h=c.getSelection&&c.getSelection();if(h&&h.rangeCount!==0){c=h.anchorNode;var S=h.anchorOffset,E=h.focusNode;h=h.focusOffset;try{c.nodeType,E.nodeType}catch{c=null;break e}var D=0,W=-1,Z=-1,he=0,Ee=0,Te=i,_e=null;t:for(;;){for(var Xe;Te!==c||S!==0&&Te.nodeType!==3||(W=D+S),Te!==E||h!==0&&Te.nodeType!==3||(Z=D+h),Te.nodeType===3&&(D+=Te.nodeValue.length),(Xe=Te.firstChild)!==null;)_e=Te,Te=Xe;for(;;){if(Te===i)break t;if(_e===c&&++he===S&&(W=D),_e===E&&++Ee===h&&(Z=D),(Xe=Te.nextSibling)!==null)break;Te=_e,_e=Te.parentNode}Te=Xe}c=W===-1||Z===-1?null:{start:W,end:Z}}else c=null}c=c||{start:0,end:0}}else c=null;for(qu={focusedElem:i,selectionRange:c},gl=!1,je=r;je!==null;)if(r=je,i=r.child,(r.subtreeFlags&1028)!==0&&i!==null)i.return=r,je=i;else for(;je!==null;){r=je;try{var Ze=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Ze!==null){var tt=Ze.memoizedProps,mn=Ze.memoizedState,oe=r.stateNode,te=oe.getSnapshotBeforeUpdate(r.elementType===r.type?tt:Vi(r.type,tt),mn);oe.__reactInternalSnapshotBeforeUpdate=te}break;case 3:var ue=r.stateNode.containerInfo;ue.nodeType===1?ue.textContent="":ue.nodeType===9&&ue.documentElement&&ue.removeChild(ue.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Pe){fn(r,r.return,Pe)}if(i=r.sibling,i!==null){i.return=r.return,je=i;break}je=r.return}return Ze=Tg,Tg=!1,Ze}function Po(i,r,c){var h=r.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var S=h=h.next;do{if((S.tag&i)===i){var E=S.destroy;S.destroy=void 0,E!==void 0&&Ld(r,c,E)}S=S.next}while(S!==h)}}function $l(i,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var c=r=r.next;do{if((c.tag&i)===i){var h=c.create;c.destroy=h()}c=c.next}while(c!==r)}}function Bd(i){var r=i.ref;if(r!==null){var c=i.stateNode;switch(i.tag){case 5:i=c;break;default:i=c}typeof r=="function"?r(i):r.current=i}}function wg(i){var r=i.alternate;r!==null&&(i.alternate=null,wg(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&(delete r[$i],delete r[yo],delete r[$u],delete r[BS],delete r[NS])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function bg(i){return i.tag===5||i.tag===3||i.tag===4}function Rg(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||bg(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Nd(i,r,c){var h=i.tag;if(h===5||h===6)i=i.stateNode,r?c.nodeType===8?c.parentNode.insertBefore(i,r):c.insertBefore(i,r):(c.nodeType===8?(r=c.parentNode,r.insertBefore(i,c)):(r=c,r.appendChild(i)),c=c._reactRootContainer,c!=null||r.onclick!==null||(r.onclick=bl));else if(h!==4&&(i=i.child,i!==null))for(Nd(i,r,c),i=i.sibling;i!==null;)Nd(i,r,c),i=i.sibling}function Ud(i,r,c){var h=i.tag;if(h===5||h===6)i=i.stateNode,r?c.insertBefore(i,r):c.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(Ud(i,r,c),i=i.sibling;i!==null;)Ud(i,r,c),i=i.sibling}var Ln=null,Gi=!1;function qr(i,r,c){for(c=c.child;c!==null;)Ig(i,r,c),c=c.sibling}function Ig(i,r,c){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(le,c)}catch{}switch(c.tag){case 5:Vn||ma(c,r);case 6:var h=Ln,S=Gi;Ln=null,qr(i,r,c),Ln=h,Gi=S,Ln!==null&&(Gi?(i=Ln,c=c.stateNode,i.nodeType===8?i.parentNode.removeChild(c):i.removeChild(c)):Ln.removeChild(c.stateNode));break;case 18:Ln!==null&&(Gi?(i=Ln,c=c.stateNode,i.nodeType===8?Ku(i.parentNode,c):i.nodeType===1&&Ku(i,c),lo(i)):Ku(Ln,c.stateNode));break;case 4:h=Ln,S=Gi,Ln=c.stateNode.containerInfo,Gi=!0,qr(i,r,c),Ln=h,Gi=S;break;case 0:case 11:case 14:case 15:if(!Vn&&(h=c.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){S=h=h.next;do{var E=S,D=E.destroy;E=E.tag,D!==void 0&&((E&2)!==0||(E&4)!==0)&&Ld(c,r,D),S=S.next}while(S!==h)}qr(i,r,c);break;case 1:if(!Vn&&(ma(c,r),h=c.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=c.memoizedProps,h.state=c.memoizedState,h.componentWillUnmount()}catch(W){fn(c,r,W)}qr(i,r,c);break;case 21:qr(i,r,c);break;case 22:c.mode&1?(Vn=(h=Vn)||c.memoizedState!==null,qr(i,r,c),Vn=h):qr(i,r,c);break;default:qr(i,r,c)}}function Pg(i){var r=i.updateQueue;if(r!==null){i.updateQueue=null;var c=i.stateNode;c===null&&(c=i.stateNode=new ZS),r.forEach(function(h){var S=ly.bind(null,i,h);c.has(h)||(c.add(h),h.then(S,S))})}}function Wi(i,r){var c=r.deletions;if(c!==null)for(var h=0;h<c.length;h++){var S=c[h];try{var E=i,D=r,W=D;e:for(;W!==null;){switch(W.tag){case 5:Ln=W.stateNode,Gi=!1;break e;case 3:Ln=W.stateNode.containerInfo,Gi=!0;break e;case 4:Ln=W.stateNode.containerInfo,Gi=!0;break e}W=W.return}if(Ln===null)throw Error(t(160));Ig(E,D,S),Ln=null,Gi=!1;var Z=S.alternate;Z!==null&&(Z.return=null),S.return=null}catch(he){fn(S,r,he)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Dg(r,i),r=r.sibling}function Dg(i,r){var c=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Wi(r,i),er(i),h&4){try{Po(3,i,i.return),$l(3,i)}catch(tt){fn(i,i.return,tt)}try{Po(5,i,i.return)}catch(tt){fn(i,i.return,tt)}}break;case 1:Wi(r,i),er(i),h&512&&c!==null&&ma(c,c.return);break;case 5:if(Wi(r,i),er(i),h&512&&c!==null&&ma(c,c.return),i.flags&32){var S=i.stateNode;try{ge(S,"")}catch(tt){fn(i,i.return,tt)}}if(h&4&&(S=i.stateNode,S!=null)){var E=i.memoizedProps,D=c!==null?c.memoizedProps:E,W=i.type,Z=i.updateQueue;if(i.updateQueue=null,Z!==null)try{W==="input"&&E.type==="radio"&&E.name!=null&&pt(S,E),Le(W,D);var he=Le(W,E);for(D=0;D<Z.length;D+=2){var Ee=Z[D],Te=Z[D+1];Ee==="style"?me(S,Te):Ee==="dangerouslySetInnerHTML"?de(S,Te):Ee==="children"?ge(S,Te):P(S,Ee,Te,he)}switch(W){case"input":Rt(S,E);break;case"textarea":pn(S,E);break;case"select":var _e=S._wrapperState.wasMultiple;S._wrapperState.wasMultiple=!!E.multiple;var Xe=E.value;Xe!=null?Ut(S,!!E.multiple,Xe,!1):_e!==!!E.multiple&&(E.defaultValue!=null?Ut(S,!!E.multiple,E.defaultValue,!0):Ut(S,!!E.multiple,E.multiple?[]:"",!1))}S[yo]=E}catch(tt){fn(i,i.return,tt)}}break;case 6:if(Wi(r,i),er(i),h&4){if(i.stateNode===null)throw Error(t(162));S=i.stateNode,E=i.memoizedProps;try{S.nodeValue=E}catch(tt){fn(i,i.return,tt)}}break;case 3:if(Wi(r,i),er(i),h&4&&c!==null&&c.memoizedState.isDehydrated)try{lo(r.containerInfo)}catch(tt){fn(i,i.return,tt)}break;case 4:Wi(r,i),er(i);break;case 13:Wi(r,i),er(i),S=i.child,S.flags&8192&&(E=S.memoizedState!==null,S.stateNode.isHidden=E,!E||S.alternate!==null&&S.alternate.memoizedState!==null||(zd=ln())),h&4&&Pg(i);break;case 22:if(Ee=c!==null&&c.memoizedState!==null,i.mode&1?(Vn=(he=Vn)||Ee,Wi(r,i),Vn=he):Wi(r,i),er(i),h&8192){if(he=i.memoizedState!==null,(i.stateNode.isHidden=he)&&!Ee&&(i.mode&1)!==0)for(je=i,Ee=i.child;Ee!==null;){for(Te=je=Ee;je!==null;){switch(_e=je,Xe=_e.child,_e.tag){case 0:case 11:case 14:case 15:Po(4,_e,_e.return);break;case 1:ma(_e,_e.return);var Ze=_e.stateNode;if(typeof Ze.componentWillUnmount=="function"){h=_e,c=_e.return;try{r=h,Ze.props=r.memoizedProps,Ze.state=r.memoizedState,Ze.componentWillUnmount()}catch(tt){fn(h,c,tt)}}break;case 5:ma(_e,_e.return);break;case 22:if(_e.memoizedState!==null){Bg(Te);continue}}Xe!==null?(Xe.return=_e,je=Xe):Bg(Te)}Ee=Ee.sibling}e:for(Ee=null,Te=i;;){if(Te.tag===5){if(Ee===null){Ee=Te;try{S=Te.stateNode,he?(E=S.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none"):(W=Te.stateNode,Z=Te.memoizedProps.style,D=Z!=null&&Z.hasOwnProperty("display")?Z.display:null,W.style.display=ie("display",D))}catch(tt){fn(i,i.return,tt)}}}else if(Te.tag===6){if(Ee===null)try{Te.stateNode.nodeValue=he?"":Te.memoizedProps}catch(tt){fn(i,i.return,tt)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===i)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===i)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===i)break e;Ee===Te&&(Ee=null),Te=Te.return}Ee===Te&&(Ee=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:Wi(r,i),er(i),h&4&&Pg(i);break;case 21:break;default:Wi(r,i),er(i)}}function er(i){var r=i.flags;if(r&2){try{e:{for(var c=i.return;c!==null;){if(bg(c)){var h=c;break e}c=c.return}throw Error(t(160))}switch(h.tag){case 5:var S=h.stateNode;h.flags&32&&(ge(S,""),h.flags&=-33);var E=Rg(i);Ud(i,E,S);break;case 3:case 4:var D=h.stateNode.containerInfo,W=Rg(i);Nd(i,W,D);break;default:throw Error(t(161))}}catch(Z){fn(i,i.return,Z)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function ey(i,r,c){je=i,Fg(i)}function Fg(i,r,c){for(var h=(i.mode&1)!==0;je!==null;){var S=je,E=S.child;if(S.tag===22&&h){var D=S.memoizedState!==null||Kl;if(!D){var W=S.alternate,Z=W!==null&&W.memoizedState!==null||Vn;W=Kl;var he=Vn;if(Kl=D,(Vn=Z)&&!he)for(je=S;je!==null;)D=je,Z=D.child,D.tag===22&&D.memoizedState!==null?Ng(S):Z!==null?(Z.return=D,je=Z):Ng(S);for(;E!==null;)je=E,Fg(E),E=E.sibling;je=S,Kl=W,Vn=he}Lg(i)}else(S.subtreeFlags&8772)!==0&&E!==null?(E.return=S,je=E):Lg(i)}}function Lg(i){for(;je!==null;){var r=je;if((r.flags&8772)!==0){var c=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Vn||$l(5,r);break;case 1:var h=r.stateNode;if(r.flags&4&&!Vn)if(c===null)h.componentDidMount();else{var S=r.elementType===r.type?c.memoizedProps:Vi(r.type,c.memoizedProps);h.componentDidUpdate(S,c.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var E=r.updateQueue;E!==null&&Bm(r,E,h);break;case 3:var D=r.updateQueue;if(D!==null){if(c=null,r.child!==null)switch(r.child.tag){case 5:c=r.child.stateNode;break;case 1:c=r.child.stateNode}Bm(r,D,c)}break;case 5:var W=r.stateNode;if(c===null&&r.flags&4){c=W;var Z=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":Z.autoFocus&&c.focus();break;case"img":Z.src&&(c.src=Z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var he=r.alternate;if(he!==null){var Ee=he.memoizedState;if(Ee!==null){var Te=Ee.dehydrated;Te!==null&&lo(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Vn||r.flags&512&&Bd(r)}catch(_e){fn(r,r.return,_e)}}if(r===i){je=null;break}if(c=r.sibling,c!==null){c.return=r.return,je=c;break}je=r.return}}function Bg(i){for(;je!==null;){var r=je;if(r===i){je=null;break}var c=r.sibling;if(c!==null){c.return=r.return,je=c;break}je=r.return}}function Ng(i){for(;je!==null;){var r=je;try{switch(r.tag){case 0:case 11:case 15:var c=r.return;try{$l(4,r)}catch(Z){fn(r,c,Z)}break;case 1:var h=r.stateNode;if(typeof h.componentDidMount=="function"){var S=r.return;try{h.componentDidMount()}catch(Z){fn(r,S,Z)}}var E=r.return;try{Bd(r)}catch(Z){fn(r,E,Z)}break;case 5:var D=r.return;try{Bd(r)}catch(Z){fn(r,D,Z)}}}catch(Z){fn(r,r.return,Z)}if(r===i){je=null;break}var W=r.sibling;if(W!==null){W.return=r.return,je=W;break}je=r.return}}var ty=Math.ceil,Zl=C.ReactCurrentDispatcher,Od=C.ReactCurrentOwner,Ii=C.ReactCurrentBatchConfig,Ft=0,Rn=null,Sn=null,Bn=0,vi=0,ga=Vr(0),Mn=0,Do=null,bs=0,Jl=0,kd=0,Fo=null,li=null,zd=0,xa=1/0,yr=null,ec=!1,Hd=null,Yr=null,tc=!1,jr=null,nc=0,Lo=0,Vd=null,ic=-1,rc=0;function Kn(){return(Ft&6)!==0?ln():ic!==-1?ic:ic=ln()}function Kr(i){return(i.mode&1)===0?1:(Ft&2)!==0&&Bn!==0?Bn&-Bn:OS.transition!==null?(rc===0&&(rc=We()),rc):(i=Et,i!==0||(i=window.event,i=i===void 0?16:Op(i.type)),i)}function Xi(i,r,c,h){if(50<Lo)throw Lo=0,Vd=null,Error(t(185));_t(i,c,h),((Ft&2)===0||i!==Rn)&&(i===Rn&&((Ft&2)===0&&(Jl|=c),Mn===4&&$r(i,Bn)),ci(i,h),c===1&&Ft===0&&(r.mode&1)===0&&(xa=ln()+500,Dl&&Wr()))}function ci(i,r){var c=i.callbackNode;Ht(i,r);var h=Yt(i,i===Rn?Bn:0);if(h===0)c!==null&&no(c),i.callbackNode=null,i.callbackPriority=0;else if(r=h&-h,i.callbackPriority!==r){if(c!=null&&no(c),r===1)i.tag===0?US(Og.bind(null,i)):Em(Og.bind(null,i)),FS(function(){(Ft&6)===0&&Wr()}),c=null;else{switch(fr(h)){case 1:c=io;break;case 4:c=L;break;case 16:c=re;break;case 536870912:c=ce;break;default:c=re}c=Qg(c,Ug.bind(null,i))}i.callbackPriority=r,i.callbackNode=c}}function Ug(i,r){if(ic=-1,rc=0,(Ft&6)!==0)throw Error(t(327));var c=i.callbackNode;if(va()&&i.callbackNode!==c)return null;var h=Yt(i,i===Rn?Bn:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||r)r=sc(i,h);else{r=h;var S=Ft;Ft|=2;var E=zg();(Rn!==i||Bn!==r)&&(yr=null,xa=ln()+500,Is(i,r));do try{ry();break}catch(W){kg(i,W)}while(!0);ad(),Zl.current=E,Ft=S,Sn!==null?r=0:(Rn=null,Bn=0,r=Mn)}if(r!==0){if(r===2&&(S=vn(i),S!==0&&(h=S,r=Gd(i,S))),r===1)throw c=Do,Is(i,0),$r(i,h),ci(i,ln()),c;if(r===6)$r(i,h);else{if(S=i.current.alternate,(h&30)===0&&!ny(S)&&(r=sc(i,h),r===2&&(E=vn(i),E!==0&&(h=E,r=Gd(i,E))),r===1))throw c=Do,Is(i,0),$r(i,h),ci(i,ln()),c;switch(i.finishedWork=S,i.finishedLanes=h,r){case 0:case 1:throw Error(t(345));case 2:Ps(i,li,yr);break;case 3:if($r(i,h),(h&130023424)===h&&(r=zd+500-ln(),10<r)){if(Yt(i,0)!==0)break;if(S=i.suspendedLanes,(S&h)!==h){Kn(),i.pingedLanes|=i.suspendedLanes&S;break}i.timeoutHandle=ju(Ps.bind(null,i,li,yr),r);break}Ps(i,li,yr);break;case 4:if($r(i,h),(h&4194240)===h)break;for(r=i.eventTimes,S=-1;0<h;){var D=31-Ne(h);E=1<<D,D=r[D],D>S&&(S=D),h&=~E}if(h=S,h=ln()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*ty(h/1960))-h,10<h){i.timeoutHandle=ju(Ps.bind(null,i,li,yr),h);break}Ps(i,li,yr);break;case 5:Ps(i,li,yr);break;default:throw Error(t(329))}}}return ci(i,ln()),i.callbackNode===c?Ug.bind(null,i):null}function Gd(i,r){var c=Fo;return i.current.memoizedState.isDehydrated&&(Is(i,r).flags|=256),i=sc(i,r),i!==2&&(r=li,li=c,r!==null&&Wd(r)),i}function Wd(i){li===null?li=i:li.push.apply(li,i)}function ny(i){for(var r=i;;){if(r.flags&16384){var c=r.updateQueue;if(c!==null&&(c=c.stores,c!==null))for(var h=0;h<c.length;h++){var S=c[h],E=S.getSnapshot;S=S.value;try{if(!zi(E(),S))return!1}catch{return!1}}}if(c=r.child,r.subtreeFlags&16384&&c!==null)c.return=r,r=c;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function $r(i,r){for(r&=~kd,r&=~Jl,i.suspendedLanes|=r,i.pingedLanes&=~r,i=i.expirationTimes;0<r;){var c=31-Ne(r),h=1<<c;i[c]=-1,r&=~h}}function Og(i){if((Ft&6)!==0)throw Error(t(327));va();var r=Yt(i,0);if((r&1)===0)return ci(i,ln()),null;var c=sc(i,r);if(i.tag!==0&&c===2){var h=vn(i);h!==0&&(r=h,c=Gd(i,h))}if(c===1)throw c=Do,Is(i,0),$r(i,r),ci(i,ln()),c;if(c===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=r,Ps(i,li,yr),ci(i,ln()),null}function Xd(i,r){var c=Ft;Ft|=1;try{return i(r)}finally{Ft=c,Ft===0&&(xa=ln()+500,Dl&&Wr())}}function Rs(i){jr!==null&&jr.tag===0&&(Ft&6)===0&&va();var r=Ft;Ft|=1;var c=Ii.transition,h=Et;try{if(Ii.transition=null,Et=1,i)return i()}finally{Et=h,Ii.transition=c,Ft=r,(Ft&6)===0&&Wr()}}function Qd(){vi=ga.current,Zt(ga)}function Is(i,r){i.finishedWork=null,i.finishedLanes=0;var c=i.timeoutHandle;if(c!==-1&&(i.timeoutHandle=-1,DS(c)),Sn!==null)for(c=Sn.return;c!==null;){var h=c;switch(td(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Il();break;case 3:ha(),Zt(si),Zt(kn),pd();break;case 5:fd(h);break;case 4:ha();break;case 13:Zt(cn);break;case 19:Zt(cn);break;case 10:od(h.type._context);break;case 22:case 23:Qd()}c=c.return}if(Rn=i,Sn=i=Zr(i.current,null),Bn=vi=r,Mn=0,Do=null,kd=Jl=bs=0,li=Fo=null,Cs!==null){for(r=0;r<Cs.length;r++)if(c=Cs[r],h=c.interleaved,h!==null){c.interleaved=null;var S=h.next,E=c.pending;if(E!==null){var D=E.next;E.next=S,h.next=D}c.pending=h}Cs=null}return i}function kg(i,r){do{var c=Sn;try{if(ad(),Vl.current=Ql,Gl){for(var h=un.memoizedState;h!==null;){var S=h.queue;S!==null&&(S.pending=null),h=h.next}Gl=!1}if(ws=0,bn=En=un=null,To=!1,wo=0,Od.current=null,c===null||c.return===null){Mn=1,Do=r,Sn=null;break}e:{var E=i,D=c.return,W=c,Z=r;if(r=Bn,W.flags|=32768,Z!==null&&typeof Z=="object"&&typeof Z.then=="function"){var he=Z,Ee=W,Te=Ee.tag;if((Ee.mode&1)===0&&(Te===0||Te===11||Te===15)){var _e=Ee.alternate;_e?(Ee.updateQueue=_e.updateQueue,Ee.memoizedState=_e.memoizedState,Ee.lanes=_e.lanes):(Ee.updateQueue=null,Ee.memoizedState=null)}var Xe=ug(D);if(Xe!==null){Xe.flags&=-257,dg(Xe,D,W,E,r),Xe.mode&1&&cg(E,he,r),r=Xe,Z=he;var Ze=r.updateQueue;if(Ze===null){var tt=new Set;tt.add(Z),r.updateQueue=tt}else Ze.add(Z);break e}else{if((r&1)===0){cg(E,he,r),qd();break e}Z=Error(t(426))}}else if(sn&&W.mode&1){var mn=ug(D);if(mn!==null){(mn.flags&65536)===0&&(mn.flags|=256),dg(mn,D,W,E,r),rd(pa(Z,W));break e}}E=Z=pa(Z,W),Mn!==4&&(Mn=2),Fo===null?Fo=[E]:Fo.push(E),E=D;do{switch(E.tag){case 3:E.flags|=65536,r&=-r,E.lanes|=r;var oe=og(E,Z,r);Lm(E,oe);break e;case 1:W=Z;var te=E.type,ue=E.stateNode;if((E.flags&128)===0&&(typeof te.getDerivedStateFromError=="function"||ue!==null&&typeof ue.componentDidCatch=="function"&&(Yr===null||!Yr.has(ue)))){E.flags|=65536,r&=-r,E.lanes|=r;var Pe=lg(E,W,r);Lm(E,Pe);break e}}E=E.return}while(E!==null)}Vg(c)}catch(rt){r=rt,Sn===c&&c!==null&&(Sn=c=c.return);continue}break}while(!0)}function zg(){var i=Zl.current;return Zl.current=Ql,i===null?Ql:i}function qd(){(Mn===0||Mn===3||Mn===2)&&(Mn=4),Rn===null||(bs&268435455)===0&&(Jl&268435455)===0||$r(Rn,Bn)}function sc(i,r){var c=Ft;Ft|=2;var h=zg();(Rn!==i||Bn!==r)&&(yr=null,Is(i,r));do try{iy();break}catch(S){kg(i,S)}while(!0);if(ad(),Ft=c,Zl.current=h,Sn!==null)throw Error(t(261));return Rn=null,Bn=0,Mn}function iy(){for(;Sn!==null;)Hg(Sn)}function ry(){for(;Sn!==null&&!pl();)Hg(Sn)}function Hg(i){var r=Xg(i.alternate,i,vi);i.memoizedProps=i.pendingProps,r===null?Vg(i):Sn=r,Od.current=null}function Vg(i){var r=i;do{var c=r.alternate;if(i=r.return,(r.flags&32768)===0){if(c=KS(c,r,vi),c!==null){Sn=c;return}}else{if(c=$S(c,r),c!==null){c.flags&=32767,Sn=c;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Mn=6,Sn=null;return}}if(r=r.sibling,r!==null){Sn=r;return}Sn=r=i}while(r!==null);Mn===0&&(Mn=5)}function Ps(i,r,c){var h=Et,S=Ii.transition;try{Ii.transition=null,Et=1,sy(i,r,c,h)}finally{Ii.transition=S,Et=h}return null}function sy(i,r,c,h){do va();while(jr!==null);if((Ft&6)!==0)throw Error(t(327));c=i.finishedWork;var S=i.finishedLanes;if(c===null)return null;if(i.finishedWork=null,i.finishedLanes=0,c===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var E=c.lanes|c.childLanes;if(ii(i,E),i===Rn&&(Sn=Rn=null,Bn=0),(c.subtreeFlags&2064)===0&&(c.flags&2064)===0||tc||(tc=!0,Qg(re,function(){return va(),null})),E=(c.flags&15990)!==0,(c.subtreeFlags&15990)!==0||E){E=Ii.transition,Ii.transition=null;var D=Et;Et=1;var W=Ft;Ft|=4,Od.current=null,JS(i,c),Dg(c,i),CS(qu),gl=!!Qu,qu=Qu=null,i.current=c,ey(c),Cu(),Ft=W,Et=D,Ii.transition=E}else i.current=c;if(tc&&(tc=!1,jr=i,nc=S),E=i.pendingLanes,E===0&&(Yr=null),Qe(c.stateNode),ci(i,ln()),r!==null)for(h=i.onRecoverableError,c=0;c<r.length;c++)S=r[c],h(S.value,{componentStack:S.stack,digest:S.digest});if(ec)throw ec=!1,i=Hd,Hd=null,i;return(nc&1)!==0&&i.tag!==0&&va(),E=i.pendingLanes,(E&1)!==0?i===Vd?Lo++:(Lo=0,Vd=i):Lo=0,Wr(),null}function va(){if(jr!==null){var i=fr(nc),r=Ii.transition,c=Et;try{if(Ii.transition=null,Et=16>i?16:i,jr===null)var h=!1;else{if(i=jr,jr=null,nc=0,(Ft&6)!==0)throw Error(t(331));var S=Ft;for(Ft|=4,je=i.current;je!==null;){var E=je,D=E.child;if((je.flags&16)!==0){var W=E.deletions;if(W!==null){for(var Z=0;Z<W.length;Z++){var he=W[Z];for(je=he;je!==null;){var Ee=je;switch(Ee.tag){case 0:case 11:case 15:Po(8,Ee,E)}var Te=Ee.child;if(Te!==null)Te.return=Ee,je=Te;else for(;je!==null;){Ee=je;var _e=Ee.sibling,Xe=Ee.return;if(wg(Ee),Ee===he){je=null;break}if(_e!==null){_e.return=Xe,je=_e;break}je=Xe}}}var Ze=E.alternate;if(Ze!==null){var tt=Ze.child;if(tt!==null){Ze.child=null;do{var mn=tt.sibling;tt.sibling=null,tt=mn}while(tt!==null)}}je=E}}if((E.subtreeFlags&2064)!==0&&D!==null)D.return=E,je=D;else e:for(;je!==null;){if(E=je,(E.flags&2048)!==0)switch(E.tag){case 0:case 11:case 15:Po(9,E,E.return)}var oe=E.sibling;if(oe!==null){oe.return=E.return,je=oe;break e}je=E.return}}var te=i.current;for(je=te;je!==null;){D=je;var ue=D.child;if((D.subtreeFlags&2064)!==0&&ue!==null)ue.return=D,je=ue;else e:for(D=te;je!==null;){if(W=je,(W.flags&2048)!==0)try{switch(W.tag){case 0:case 11:case 15:$l(9,W)}}catch(rt){fn(W,W.return,rt)}if(W===D){je=null;break e}var Pe=W.sibling;if(Pe!==null){Pe.return=W.return,je=Pe;break e}je=W.return}}if(Ft=S,Wr(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(le,i)}catch{}h=!0}return h}finally{Et=c,Ii.transition=r}}return!1}function Gg(i,r,c){r=pa(c,r),r=og(i,r,1),i=Qr(i,r,1),r=Kn(),i!==null&&(_t(i,1,r),ci(i,r))}function fn(i,r,c){if(i.tag===3)Gg(i,i,c);else for(;r!==null;){if(r.tag===3){Gg(r,i,c);break}else if(r.tag===1){var h=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Yr===null||!Yr.has(h))){i=pa(c,i),i=lg(r,i,1),r=Qr(r,i,1),i=Kn(),r!==null&&(_t(r,1,i),ci(r,i));break}}r=r.return}}function ay(i,r,c){var h=i.pingCache;h!==null&&h.delete(r),r=Kn(),i.pingedLanes|=i.suspendedLanes&c,Rn===i&&(Bn&c)===c&&(Mn===4||Mn===3&&(Bn&130023424)===Bn&&500>ln()-zd?Is(i,0):kd|=c),ci(i,r)}function Wg(i,r){r===0&&((i.mode&1)===0?r=1:(r=it,it<<=1,(it&130023424)===0&&(it=4194304)));var c=Kn();i=xr(i,r),i!==null&&(_t(i,r,c),ci(i,c))}function oy(i){var r=i.memoizedState,c=0;r!==null&&(c=r.retryLane),Wg(i,c)}function ly(i,r){var c=0;switch(i.tag){case 13:var h=i.stateNode,S=i.memoizedState;S!==null&&(c=S.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(r),Wg(i,c)}var Xg;Xg=function(i,r,c){if(i!==null)if(i.memoizedProps!==r.pendingProps||si.current)oi=!0;else{if((i.lanes&c)===0&&(r.flags&128)===0)return oi=!1,jS(i,r,c);oi=(i.flags&131072)!==0}else oi=!1,sn&&(r.flags&1048576)!==0&&Mm(r,Ll,r.index);switch(r.lanes=0,r.tag){case 2:var h=r.type;jl(i,r),i=r.pendingProps;var S=aa(r,kn.current);fa(r,c),S=xd(null,r,h,i,S,c);var E=vd();return r.flags|=1,typeof S=="object"&&S!==null&&typeof S.render=="function"&&S.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,ai(h)?(E=!0,Pl(r)):E=!1,r.memoizedState=S.state!==null&&S.state!==void 0?S.state:null,ud(r),S.updater=ql,r.stateNode=S,S._reactInternals=r,Md(r,h,i,c),r=bd(null,r,h,!0,E,c)):(r.tag=0,sn&&E&&ed(r),jn(null,r,S,c),r=r.child),r;case 16:h=r.elementType;e:{switch(jl(i,r),i=r.pendingProps,S=h._init,h=S(h._payload),r.type=h,S=r.tag=uy(h),i=Vi(h,i),S){case 0:r=wd(null,r,h,i,c);break e;case 1:r=xg(null,r,h,i,c);break e;case 11:r=fg(null,r,h,i,c);break e;case 14:r=hg(null,r,h,Vi(h.type,i),c);break e}throw Error(t(306,h,""))}return r;case 0:return h=r.type,S=r.pendingProps,S=r.elementType===h?S:Vi(h,S),wd(i,r,h,S,c);case 1:return h=r.type,S=r.pendingProps,S=r.elementType===h?S:Vi(h,S),xg(i,r,h,S,c);case 3:e:{if(vg(r),i===null)throw Error(t(387));h=r.pendingProps,E=r.memoizedState,S=E.element,Fm(i,r),zl(r,h,null,c);var D=r.memoizedState;if(h=D.element,E.isDehydrated)if(E={element:h,isDehydrated:!1,cache:D.cache,pendingSuspenseBoundaries:D.pendingSuspenseBoundaries,transitions:D.transitions},r.updateQueue.baseState=E,r.memoizedState=E,r.flags&256){S=pa(Error(t(423)),r),r=Sg(i,r,h,c,S);break e}else if(h!==S){S=pa(Error(t(424)),r),r=Sg(i,r,h,c,S);break e}else for(xi=Hr(r.stateNode.containerInfo.firstChild),gi=r,sn=!0,Hi=null,c=Pm(r,null,h,c),r.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{if(ca(),h===S){r=Sr(i,r,c);break e}jn(i,r,h,c)}r=r.child}return r;case 5:return Nm(r),i===null&&id(r),h=r.type,S=r.pendingProps,E=i!==null?i.memoizedProps:null,D=S.children,Yu(h,S)?D=null:E!==null&&Yu(h,E)&&(r.flags|=32),gg(i,r),jn(i,r,D,c),r.child;case 6:return i===null&&id(r),null;case 13:return yg(i,r,c);case 4:return dd(r,r.stateNode.containerInfo),h=r.pendingProps,i===null?r.child=ua(r,null,h,c):jn(i,r,h,c),r.child;case 11:return h=r.type,S=r.pendingProps,S=r.elementType===h?S:Vi(h,S),fg(i,r,h,S,c);case 7:return jn(i,r,r.pendingProps,c),r.child;case 8:return jn(i,r,r.pendingProps.children,c),r.child;case 12:return jn(i,r,r.pendingProps.children,c),r.child;case 10:e:{if(h=r.type._context,S=r.pendingProps,E=r.memoizedProps,D=S.value,jt(Ul,h._currentValue),h._currentValue=D,E!==null)if(zi(E.value,D)){if(E.children===S.children&&!si.current){r=Sr(i,r,c);break e}}else for(E=r.child,E!==null&&(E.return=r);E!==null;){var W=E.dependencies;if(W!==null){D=E.child;for(var Z=W.firstContext;Z!==null;){if(Z.context===h){if(E.tag===1){Z=vr(-1,c&-c),Z.tag=2;var he=E.updateQueue;if(he!==null){he=he.shared;var Ee=he.pending;Ee===null?Z.next=Z:(Z.next=Ee.next,Ee.next=Z),he.pending=Z}}E.lanes|=c,Z=E.alternate,Z!==null&&(Z.lanes|=c),ld(E.return,c,r),W.lanes|=c;break}Z=Z.next}}else if(E.tag===10)D=E.type===r.type?null:E.child;else if(E.tag===18){if(D=E.return,D===null)throw Error(t(341));D.lanes|=c,W=D.alternate,W!==null&&(W.lanes|=c),ld(D,c,r),D=E.sibling}else D=E.child;if(D!==null)D.return=E;else for(D=E;D!==null;){if(D===r){D=null;break}if(E=D.sibling,E!==null){E.return=D.return,D=E;break}D=D.return}E=D}jn(i,r,S.children,c),r=r.child}return r;case 9:return S=r.type,h=r.pendingProps.children,fa(r,c),S=bi(S),h=h(S),r.flags|=1,jn(i,r,h,c),r.child;case 14:return h=r.type,S=Vi(h,r.pendingProps),S=Vi(h.type,S),hg(i,r,h,S,c);case 15:return pg(i,r,r.type,r.pendingProps,c);case 17:return h=r.type,S=r.pendingProps,S=r.elementType===h?S:Vi(h,S),jl(i,r),r.tag=1,ai(h)?(i=!0,Pl(r)):i=!1,fa(r,c),sg(r,h,S),Md(r,h,S,c),bd(null,r,h,!0,i,c);case 19:return _g(i,r,c);case 22:return mg(i,r,c)}throw Error(t(156,r.tag))};function Qg(i,r){return Ss(i,r)}function cy(i,r,c,h){this.tag=i,this.key=c,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pi(i,r,c,h){return new cy(i,r,c,h)}function Yd(i){return i=i.prototype,!(!i||!i.isReactComponent)}function uy(i){if(typeof i=="function")return Yd(i)?1:0;if(i!=null){if(i=i.$$typeof,i===H)return 11;if(i===G)return 14}return 2}function Zr(i,r){var c=i.alternate;return c===null?(c=Pi(i.tag,r,i.key,i.mode),c.elementType=i.elementType,c.type=i.type,c.stateNode=i.stateNode,c.alternate=i,i.alternate=c):(c.pendingProps=r,c.type=i.type,c.flags=0,c.subtreeFlags=0,c.deletions=null),c.flags=i.flags&14680064,c.childLanes=i.childLanes,c.lanes=i.lanes,c.child=i.child,c.memoizedProps=i.memoizedProps,c.memoizedState=i.memoizedState,c.updateQueue=i.updateQueue,r=i.dependencies,c.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},c.sibling=i.sibling,c.index=i.index,c.ref=i.ref,c}function ac(i,r,c,h,S,E){var D=2;if(h=i,typeof i=="function")Yd(i)&&(D=1);else if(typeof i=="string")D=5;else e:switch(i){case R:return Ds(c.children,S,E,r);case M:D=8,S|=8;break;case F:return i=Pi(12,c,r,S|2),i.elementType=F,i.lanes=E,i;case q:return i=Pi(13,c,r,S),i.elementType=q,i.lanes=E,i;case Y:return i=Pi(19,c,r,S),i.elementType=Y,i.lanes=E,i;case j:return oc(c,S,E,r);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case B:D=10;break e;case N:D=9;break e;case H:D=11;break e;case G:D=14;break e;case K:D=16,h=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return r=Pi(D,c,r,S),r.elementType=i,r.type=h,r.lanes=E,r}function Ds(i,r,c,h){return i=Pi(7,i,h,r),i.lanes=c,i}function oc(i,r,c,h){return i=Pi(22,i,h,r),i.elementType=j,i.lanes=c,i.stateNode={isHidden:!1},i}function jd(i,r,c){return i=Pi(6,i,null,r),i.lanes=c,i}function Kd(i,r,c){return r=Pi(4,i.children!==null?i.children:[],i.key,r),r.lanes=c,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}function dy(i,r,c,h,S){this.tag=r,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fn(0),this.expirationTimes=Fn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fn(0),this.identifierPrefix=h,this.onRecoverableError=S,this.mutableSourceEagerHydrationData=null}function $d(i,r,c,h,S,E,D,W,Z){return i=new dy(i,r,c,W,Z),r===1?(r=1,E===!0&&(r|=8)):r=0,E=Pi(3,null,null,r),i.current=E,E.stateNode=i,E.memoizedState={element:h,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null},ud(E),i}function fy(i,r,c){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:h==null?null:""+h,children:i,containerInfo:r,implementation:c}}function qg(i){if(!i)return Gr;i=i._reactInternals;e:{if(Yn(i)!==i||i.tag!==1)throw Error(t(170));var r=i;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(ai(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(i.tag===1){var c=i.type;if(ai(c))return Am(i,c,r)}return r}function Yg(i,r,c,h,S,E,D,W,Z){return i=$d(c,h,!0,i,S,E,D,W,Z),i.context=qg(null),c=i.current,h=Kn(),S=Kr(c),E=vr(h,S),E.callback=r??null,Qr(c,E,S),i.current.lanes=S,_t(i,S,h),ci(i,h),i}function lc(i,r,c,h){var S=r.current,E=Kn(),D=Kr(S);return c=qg(c),r.context===null?r.context=c:r.pendingContext=c,r=vr(E,D),r.payload={element:i},h=h===void 0?null:h,h!==null&&(r.callback=h),i=Qr(S,r,D),i!==null&&(Xi(i,S,D,E),kl(i,S,D)),D}function cc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function jg(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var c=i.retryLane;i.retryLane=c!==0&&c<r?c:r}}function Zd(i,r){jg(i,r),(i=i.alternate)&&jg(i,r)}function hy(){return null}var Kg=typeof reportError=="function"?reportError:function(i){console.error(i)};function Jd(i){this._internalRoot=i}uc.prototype.render=Jd.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(t(409));lc(i,r,null,null)},uc.prototype.unmount=Jd.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;Rs(function(){lc(null,i,null,null)}),r[hr]=null}};function uc(i){this._internalRoot=i}uc.prototype.unstable_scheduleHydration=function(i){if(i){var r=Vt();i={blockedOn:null,target:i,priority:r};for(var c=0;c<Or.length&&r!==0&&r<Or[c].priority;c++);Or.splice(c,0,i),c===0&&Np(i)}};function ef(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function dc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function $g(){}function py(i,r,c,h,S){if(S){if(typeof h=="function"){var E=h;h=function(){var he=cc(D);E.call(he)}}var D=Yg(r,h,i,0,null,!1,!1,"",$g);return i._reactRootContainer=D,i[hr]=D.current,vo(i.nodeType===8?i.parentNode:i),Rs(),D}for(;S=i.lastChild;)i.removeChild(S);if(typeof h=="function"){var W=h;h=function(){var he=cc(Z);W.call(he)}}var Z=$d(i,0,!1,null,null,!1,!1,"",$g);return i._reactRootContainer=Z,i[hr]=Z.current,vo(i.nodeType===8?i.parentNode:i),Rs(function(){lc(r,Z,c,h)}),Z}function fc(i,r,c,h,S){var E=c._reactRootContainer;if(E){var D=E;if(typeof S=="function"){var W=S;S=function(){var Z=cc(D);W.call(Z)}}lc(r,D,i,S)}else D=py(c,r,i,S,h);return cc(D)}kt=function(i){switch(i.tag){case 3:var r=i.stateNode;if(r.current.memoizedState.isDehydrated){var c=Dt(r.pendingLanes);c!==0&&(ri(r,c|1),ci(r,ln()),(Ft&6)===0&&(xa=ln()+500,Wr()))}break;case 13:Rs(function(){var h=xr(i,1);if(h!==null){var S=Kn();Xi(h,i,1,S)}}),Zd(i,1)}},Kt=function(i){if(i.tag===13){var r=xr(i,134217728);if(r!==null){var c=Kn();Xi(r,i,134217728,c)}Zd(i,134217728)}},Oi=function(i){if(i.tag===13){var r=Kr(i),c=xr(i,r);if(c!==null){var h=Kn();Xi(c,i,r,h)}Zd(i,r)}},Vt=function(){return Et},ki=function(i,r){var c=Et;try{return Et=i,r()}finally{Et=c}},lt=function(i,r,c){switch(r){case"input":if(Rt(i,c),r=c.name,c.type==="radio"&&r!=null){for(c=i;c.parentNode;)c=c.parentNode;for(c=c.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<c.length;r++){var h=c[r];if(h!==i&&h.form===i.form){var S=Rl(h);if(!S)throw Error(t(90));xt(h),Rt(h,S)}}}break;case"textarea":pn(i,c);break;case"select":r=c.value,r!=null&&Ut(i,!!c.multiple,r,!1)}},ke=Xd,Ae=Rs;var my={usingClientEntryPoint:!1,Events:[Ao,ra,Rl,Se,Be,Xd]},Bo={findFiberByHostInstance:As,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gy={bundleType:Bo.bundleType,version:Bo.version,rendererPackageName:Bo.rendererPackageName,rendererConfig:Bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=vs(i),i===null?null:i.stateNode},findFiberByHostInstance:Bo.findFiberByHostInstance||hy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hc.isDisabled&&hc.supportsFiber)try{le=hc.inject(gy),Ue=hc}catch{}}return ui.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=my,ui.createPortal=function(i,r){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ef(r))throw Error(t(200));return fy(i,r,null,c)},ui.createRoot=function(i,r){if(!ef(i))throw Error(t(299));var c=!1,h="",S=Kg;return r!=null&&(r.unstable_strictMode===!0&&(c=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onRecoverableError!==void 0&&(S=r.onRecoverableError)),r=$d(i,1,!1,null,null,c,!1,h,S),i[hr]=r.current,vo(i.nodeType===8?i.parentNode:i),new Jd(r)},ui.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=vs(r),i=i===null?null:i.stateNode,i},ui.flushSync=function(i){return Rs(i)},ui.hydrate=function(i,r,c){if(!dc(r))throw Error(t(200));return fc(null,i,r,!0,c)},ui.hydrateRoot=function(i,r,c){if(!ef(i))throw Error(t(405));var h=c!=null&&c.hydratedSources||null,S=!1,E="",D=Kg;if(c!=null&&(c.unstable_strictMode===!0&&(S=!0),c.identifierPrefix!==void 0&&(E=c.identifierPrefix),c.onRecoverableError!==void 0&&(D=c.onRecoverableError)),r=Yg(r,null,i,1,c??null,S,!1,E,D),i[hr]=r.current,vo(i),h)for(i=0;i<h.length;i++)c=h[i],S=c._getVersion,S=S(c._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[c,S]:r.mutableSourceEagerHydrationData.push(c,S);return new uc(r)},ui.render=function(i,r,c){if(!dc(r))throw Error(t(200));return fc(null,i,r,!1,c)},ui.unmountComponentAtNode=function(i){if(!dc(i))throw Error(t(40));return i._reactRootContainer?(Rs(function(){fc(null,null,i,!1,function(){i._reactRootContainer=null,i[hr]=null})}),!0):!1},ui.unstable_batchedUpdates=Xd,ui.unstable_renderSubtreeIntoContainer=function(i,r,c,h){if(!dc(c))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return fc(i,r,c,!1,h)},ui.version="18.3.1-next-f1338f8080-20240426",ui}var s0;function wy(){if(s0)return rf.exports;s0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),rf.exports=Ty(),rf.exports}var a0;function by(){if(a0)return pc;a0=1;var a=wy();return pc.createRoot=a.createRoot,pc.hydrateRoot=a.hydrateRoot,pc}var Ry=by();const Iy=Vx(Ry);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ep="185",Sa={ROTATE:0,DOLLY:1,PAN:2},ya={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Py=0,o0=1,Dy=2,Kc=1,Fy=2,Qo=3,lr=0,pi=1,_i=2,Dr=0,fs=1,l0=2,c0=3,u0=4,Gx=5,Us=100,Ly=101,By=102,Ny=103,Uy=104,Oy=200,ky=201,zy=202,Hy=203,el=204,tl=205,Vy=206,Gy=207,Wy=208,Xy=209,Qy=210,qy=211,Yy=212,jy=213,Ky=214,ih=0,rh=1,sh=2,ja=3,ah=4,oh=5,lh=6,ch=7,Wx=0,$y=1,Zy=2,or=0,Xx=1,Qx=2,qx=3,Yx=4,jx=5,Kx=6,$x=7,Zx=300,Ws=301,Ka=302,of=303,lf=304,gu=306,uh=1e3,Pr=1001,dh=1002,Un=1003,Jy=1004,mc=1005,Xn=1006,cf=1007,Hs=1008,Ei=1009,Jx=1010,ev=1011,nl=1012,tp=1013,ei=1014,Ni=1015,cr=1016,np=1017,ip=1018,il=1020,tv=35902,nv=35899,iv=1021,rv=1022,ti=1023,ur=1026,Vs=1027,sv=1028,xu=1029,Xs=1030,rp=1031,Va=1033,$c=33776,Zc=33777,Jc=33778,eu=33779,fh=35840,hh=35841,ph=35842,mh=35843,gh=36196,xh=37492,vh=37496,Sh=37488,yh=37489,nu=37490,Ah=37491,_h=37808,Eh=37809,Mh=37810,Ch=37811,Th=37812,wh=37813,bh=37814,Rh=37815,Ih=37816,Ph=37817,Dh=37818,Fh=37819,Lh=37820,Bh=37821,Nh=36492,Uh=36494,Oh=36495,kh=36283,zh=36284,iu=36285,Hh=36286,eA=3200,d0=0,tA=1,us="",Ai="srgb",ru="srgb-linear",su="linear",Wt="srgb",Aa=7680,f0=519,nA=512,iA=513,rA=514,sp=515,sA=516,aA=517,ap=518,oA=519,h0=35044,lA=35048,p0="300 es",rr=2e3,au=2001;function cA(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function rl(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function uA(){const a=rl("canvas");return a.style.display="block",a}const m0={};function g0(...a){const e="THREE."+a.shift();console.log(e,...a)}function av(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function ht(...a){a=av(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function Lt(...a){a=av(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function Ga(...a){const e=a.join(" ");e in m0||(m0[e]=!0,ht(...a))}function dA(a,e,t){return new Promise(function(n,s){function o(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:s();break;case a.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}const fA={[ih]:rh,[sh]:lh,[ah]:ch,[ja]:oh,[rh]:ih,[lh]:sh,[ch]:ah,[oh]:ja};class ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let o=0,l=s.length;o<l;o++)s[o].call(this,e);e.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jo=Math.PI/180,Vh=180/Math.PI;function ll(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gn[a&255]+Gn[a>>8&255]+Gn[a>>16&255]+Gn[a>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[t&63|128]+Gn[t>>8&255]+"-"+Gn[t>>16&255]+Gn[t>>24&255]+Gn[n&255]+Gn[n>>8&255]+Gn[n>>16&255]+Gn[n>>24&255]).toLowerCase()}function Ct(a,e,t){return Math.max(e,Math.min(t,a))}function hA(a,e){return(a%e+e)%e}function uf(a,e,t){return(1-t)*a+t*e}function Uo(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function di(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ov={DEG2RAD:jo},Ip=class Ip{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,l=this.y-e.y;return this.x=o*n-l*s+e.x,this.y=o*s+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ip.prototype.isVector2=!0;let qe=Ip;class tn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,o,l,u){let d=n[s+0],f=n[s+1],p=n[s+2],m=n[s+3],g=o[l+0],x=o[l+1],A=o[l+2],_=o[l+3];if(m!==_||d!==g||f!==x||p!==A){let v=d*g+f*x+p*A+m*_;v<0&&(g=-g,x=-x,A=-A,_=-_,v=-v);let y=1-u;if(v<.9995){const T=Math.acos(v),P=Math.sin(T);y=Math.sin(y*T)/P,u=Math.sin(u*T)/P,d=d*y+g*u,f=f*y+x*u,p=p*y+A*u,m=m*y+_*u}else{d=d*y+g*u,f=f*y+x*u,p=p*y+A*u,m=m*y+_*u;const T=1/Math.sqrt(d*d+f*f+p*p+m*m);d*=T,f*=T,p*=T,m*=T}}e[t]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,o,l){const u=n[s],d=n[s+1],f=n[s+2],p=n[s+3],m=o[l],g=o[l+1],x=o[l+2],A=o[l+3];return e[t]=u*A+p*m+d*x-f*g,e[t+1]=d*A+p*g+f*m-u*x,e[t+2]=f*A+p*x+u*g-d*m,e[t+3]=p*A-u*m-d*g-f*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,o=e._z,l=e._order,u=Math.cos,d=Math.sin,f=u(n/2),p=u(s/2),m=u(o/2),g=d(n/2),x=d(s/2),A=d(o/2);switch(l){case"XYZ":this._x=g*p*m+f*x*A,this._y=f*x*m-g*p*A,this._z=f*p*A+g*x*m,this._w=f*p*m-g*x*A;break;case"YXZ":this._x=g*p*m+f*x*A,this._y=f*x*m-g*p*A,this._z=f*p*A-g*x*m,this._w=f*p*m+g*x*A;break;case"ZXY":this._x=g*p*m-f*x*A,this._y=f*x*m+g*p*A,this._z=f*p*A+g*x*m,this._w=f*p*m-g*x*A;break;case"ZYX":this._x=g*p*m-f*x*A,this._y=f*x*m+g*p*A,this._z=f*p*A-g*x*m,this._w=f*p*m+g*x*A;break;case"YZX":this._x=g*p*m+f*x*A,this._y=f*x*m+g*p*A,this._z=f*p*A-g*x*m,this._w=f*p*m-g*x*A;break;case"XZY":this._x=g*p*m-f*x*A,this._y=f*x*m-g*p*A,this._z=f*p*A+g*x*m,this._w=f*p*m+g*x*A;break;default:ht("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],o=t[8],l=t[1],u=t[5],d=t[9],f=t[2],p=t[6],m=t[10],g=n+u+m;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(p-d)*x,this._y=(o-f)*x,this._z=(l-s)*x}else if(n>u&&n>m){const x=2*Math.sqrt(1+n-u-m);this._w=(p-d)/x,this._x=.25*x,this._y=(s+l)/x,this._z=(o+f)/x}else if(u>m){const x=2*Math.sqrt(1+u-n-m);this._w=(o-f)/x,this._x=(s+l)/x,this._y=.25*x,this._z=(d+p)/x}else{const x=2*Math.sqrt(1+m-n-u);this._w=(l-s)/x,this._x=(o+f)/x,this._y=(d+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,o=e._z,l=e._w,u=t._x,d=t._y,f=t._z,p=t._w;return this._x=n*p+l*u+s*f-o*d,this._y=s*p+l*d+o*u-n*f,this._z=o*p+l*f+n*d-s*u,this._w=l*p-n*u-s*d-o*f,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,o=e._z,l=e._w,u=this.dot(e);u<0&&(n=-n,s=-s,o=-o,l=-l,u=-u);let d=1-t;if(u<.9995){const f=Math.acos(u),p=Math.sin(f);d=Math.sin(d*f)/p,t=Math.sin(t*f)/p,this._x=this._x*d+n*t,this._y=this._y*d+s*t,this._z=this._z*d+o*t,this._w=this._w*d+l*t,this._onChangeCallback()}else this._x=this._x*d+n*t,this._y=this._y*d+s*t,this._z=this._z*d+o*t,this._w=this._w*d+l*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Pp=class Pp{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(x0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(x0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*s,this.y=o[1]*t+o[4]*n+o[7]*s,this.z=o[2]*t+o[5]*n+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=e.elements,l=1/(o[3]*t+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*s+o[12])*l,this.y=(o[1]*t+o[5]*n+o[9]*s+o[13])*l,this.z=(o[2]*t+o[6]*n+o[10]*s+o[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,o=e.x,l=e.y,u=e.z,d=e.w,f=2*(l*s-u*n),p=2*(u*t-o*s),m=2*(o*n-l*t);return this.x=t+d*f+l*m-u*p,this.y=n+d*p+u*f-o*m,this.z=s+d*m+o*p-l*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s,this.y=o[1]*t+o[5]*n+o[9]*s,this.z=o[2]*t+o[6]*n+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,o=e.z,l=t.x,u=t.y,d=t.z;return this.x=s*d-o*u,this.y=o*l-n*d,this.z=n*u-s*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return df.copy(this).projectOnVector(e),this.sub(df)}reflect(e){return this.sub(df.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Pp.prototype.isVector3=!0;let U=Pp;const df=new U,x0=new tn,Dp=class Dp{constructor(e,t,n,s,o,l,u,d,f){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,l,u,d,f)}set(e,t,n,s,o,l,u,d,f){const p=this.elements;return p[0]=e,p[1]=s,p[2]=u,p[3]=t,p[4]=o,p[5]=d,p[6]=n,p[7]=l,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,l=n[0],u=n[3],d=n[6],f=n[1],p=n[4],m=n[7],g=n[2],x=n[5],A=n[8],_=s[0],v=s[3],y=s[6],T=s[1],P=s[4],C=s[7],w=s[2],I=s[5],R=s[8];return o[0]=l*_+u*T+d*w,o[3]=l*v+u*P+d*I,o[6]=l*y+u*C+d*R,o[1]=f*_+p*T+m*w,o[4]=f*v+p*P+m*I,o[7]=f*y+p*C+m*R,o[2]=g*_+x*T+A*w,o[5]=g*v+x*P+A*I,o[8]=g*y+x*C+A*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],l=e[4],u=e[5],d=e[6],f=e[7],p=e[8];return t*l*p-t*u*f-n*o*p+n*u*d+s*o*f-s*l*d}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],l=e[4],u=e[5],d=e[6],f=e[7],p=e[8],m=p*l-u*f,g=u*d-p*o,x=f*o-l*d,A=t*m+n*g+s*x;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/A;return e[0]=m*_,e[1]=(s*f-p*n)*_,e[2]=(u*n-s*l)*_,e[3]=g*_,e[4]=(p*t-s*d)*_,e[5]=(s*o-u*t)*_,e[6]=x*_,e[7]=(n*d-f*t)*_,e[8]=(l*t-n*o)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,l,u){const d=Math.cos(o),f=Math.sin(o);return this.set(n*d,n*f,-n*(d*l+f*u)+l+e,-s*f,s*d,-s*(-f*l+d*u)+u+t,0,0,1),this}scale(e,t){return Ga("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ff.makeScale(e,t)),this}rotate(e){return Ga("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ff.makeRotation(-e)),this}translate(e,t){return Ga("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ff.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Dp.prototype.isMatrix3=!0;let ft=Dp;const ff=new ft,v0=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),S0=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pA(){const a={enabled:!0,workingColorSpace:ru,spaces:{},convert:function(s,o,l){return this.enabled===!1||o===l||!o||!l||(this.spaces[o].transfer===Wt&&(s.r=Fr(s.r),s.g=Fr(s.g),s.b=Fr(s.b)),this.spaces[o].primaries!==this.spaces[l].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Wt&&(s.r=Wa(s.r),s.g=Wa(s.g),s.b=Wa(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===us?su:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,l){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return Ga("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return Ga("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(s,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return a.define({[ru]:{primaries:e,whitePoint:n,transfer:su,toXYZ:v0,fromXYZ:S0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ai},outputColorSpaceConfig:{drawingBufferColorSpace:Ai}},[Ai]:{primaries:e,whitePoint:n,transfer:Wt,toXYZ:v0,fromXYZ:S0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ai}}}),a}const It=pA();function Fr(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Wa(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let _a;class mA{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_a===void 0&&(_a=rl("canvas")),_a.width=e.width,_a.height=e.height;const s=_a.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=_a}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),o=s.data;for(let l=0;l<o.length;l++)o[l]=Fr(o[l]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fr(t[n]/255)*255):t[n]=Fr(t[n]);return{data:t,width:e.width,height:e.height}}else return ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gA=0;class op{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gA++}),this.uuid=ll(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let l=0,u=s.length;l<u;l++)s[l].isDataTexture?o.push(hf(s[l].image)):o.push(hf(s[l]))}else o=hf(s);n.url=o}return t||(e.images[this.uuid]=n),n}}function hf(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?mA.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(ht("Texture: Unable to serialize Texture."),{})}let xA=0;const pf=new U;class Qn extends ps{constructor(e=Qn.DEFAULT_IMAGE,t=Qn.DEFAULT_MAPPING,n=Pr,s=Pr,o=Xn,l=Hs,u=ti,d=Ei,f=Qn.DEFAULT_ANISOTROPY,p=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xA++}),this.uuid=ll(),this.name="",this.source=new op(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=l,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=d,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pf).x}get height(){return this.source.getSize(pf).y}get depth(){return this.source.getSize(pf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ht(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ht(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uh:e.x=e.x-Math.floor(e.x);break;case Pr:e.x=e.x<0?0:1;break;case dh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uh:e.y=e.y-Math.floor(e.y);break;case Pr:e.y=e.y<0?0:1;break;case dh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=Zx;Qn.DEFAULT_ANISOTROPY=1;const Fp=class Fp{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*s+l[12]*o,this.y=l[1]*t+l[5]*n+l[9]*s+l[13]*o,this.z=l[2]*t+l[6]*n+l[10]*s+l[14]*o,this.w=l[3]*t+l[7]*n+l[11]*s+l[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,o;const d=e.elements,f=d[0],p=d[4],m=d[8],g=d[1],x=d[5],A=d[9],_=d[2],v=d[6],y=d[10];if(Math.abs(p-g)<.01&&Math.abs(m-_)<.01&&Math.abs(A-v)<.01){if(Math.abs(p+g)<.1&&Math.abs(m+_)<.1&&Math.abs(A+v)<.1&&Math.abs(f+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(f+1)/2,C=(x+1)/2,w=(y+1)/2,I=(p+g)/4,R=(m+_)/4,M=(A+v)/4;return P>C&&P>w?P<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(P),s=I/n,o=R/n):C>w?C<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(C),n=I/s,o=M/s):w<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(w),n=R/o,s=M/o),this.set(n,s,o,t),this}let T=Math.sqrt((v-A)*(v-A)+(m-_)*(m-_)+(g-p)*(g-p));return Math.abs(T)<.001&&(T=1),this.x=(v-A)/T,this.y=(m-_)/T,this.z=(g-p)/T,this.w=Math.acos((f+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this.w=Ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this.w=Ct(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fp.prototype.isVector4=!0;let nn=Fp;class vA extends ps{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},o=new Qn(s),l=n.count;for(let u=0;u<l;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new op(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends vA{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class lv extends Qn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class SA extends Qn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hu=class hu{constructor(e,t,n,s,o,l,u,d,f,p,m,g,x,A,_,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,l,u,d,f,p,m,g,x,A,_,v)}set(e,t,n,s,o,l,u,d,f,p,m,g,x,A,_,v){const y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=s,y[1]=o,y[5]=l,y[9]=u,y[13]=d,y[2]=f,y[6]=p,y[10]=m,y[14]=g,y[3]=x,y[7]=A,y[11]=_,y[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hu().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Ea.setFromMatrixColumn(e,0).length(),o=1/Ea.setFromMatrixColumn(e,1).length(),l=1/Ea.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,o=e.z,l=Math.cos(n),u=Math.sin(n),d=Math.cos(s),f=Math.sin(s),p=Math.cos(o),m=Math.sin(o);if(e.order==="XYZ"){const g=l*p,x=l*m,A=u*p,_=u*m;t[0]=d*p,t[4]=-d*m,t[8]=f,t[1]=x+A*f,t[5]=g-_*f,t[9]=-u*d,t[2]=_-g*f,t[6]=A+x*f,t[10]=l*d}else if(e.order==="YXZ"){const g=d*p,x=d*m,A=f*p,_=f*m;t[0]=g+_*u,t[4]=A*u-x,t[8]=l*f,t[1]=l*m,t[5]=l*p,t[9]=-u,t[2]=x*u-A,t[6]=_+g*u,t[10]=l*d}else if(e.order==="ZXY"){const g=d*p,x=d*m,A=f*p,_=f*m;t[0]=g-_*u,t[4]=-l*m,t[8]=A+x*u,t[1]=x+A*u,t[5]=l*p,t[9]=_-g*u,t[2]=-l*f,t[6]=u,t[10]=l*d}else if(e.order==="ZYX"){const g=l*p,x=l*m,A=u*p,_=u*m;t[0]=d*p,t[4]=A*f-x,t[8]=g*f+_,t[1]=d*m,t[5]=_*f+g,t[9]=x*f-A,t[2]=-f,t[6]=u*d,t[10]=l*d}else if(e.order==="YZX"){const g=l*d,x=l*f,A=u*d,_=u*f;t[0]=d*p,t[4]=_-g*m,t[8]=A*m+x,t[1]=m,t[5]=l*p,t[9]=-u*p,t[2]=-f*p,t[6]=x*m+A,t[10]=g-_*m}else if(e.order==="XZY"){const g=l*d,x=l*f,A=u*d,_=u*f;t[0]=d*p,t[4]=-m,t[8]=f*p,t[1]=g*m+_,t[5]=l*p,t[9]=x*m-A,t[2]=A*m-x,t[6]=u*p,t[10]=_*m+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yA,e,AA)}lookAt(e,t,n){const s=this.elements;return Si.subVectors(e,t),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),es.crossVectors(n,Si),es.lengthSq()===0&&(Math.abs(n.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),es.crossVectors(n,Si)),es.normalize(),gc.crossVectors(Si,es),s[0]=es.x,s[4]=gc.x,s[8]=Si.x,s[1]=es.y,s[5]=gc.y,s[9]=Si.y,s[2]=es.z,s[6]=gc.z,s[10]=Si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,l=n[0],u=n[4],d=n[8],f=n[12],p=n[1],m=n[5],g=n[9],x=n[13],A=n[2],_=n[6],v=n[10],y=n[14],T=n[3],P=n[7],C=n[11],w=n[15],I=s[0],R=s[4],M=s[8],F=s[12],B=s[1],N=s[5],H=s[9],q=s[13],Y=s[2],G=s[6],K=s[10],j=s[14],k=s[3],Q=s[7],J=s[11],O=s[15];return o[0]=l*I+u*B+d*Y+f*k,o[4]=l*R+u*N+d*G+f*Q,o[8]=l*M+u*H+d*K+f*J,o[12]=l*F+u*q+d*j+f*O,o[1]=p*I+m*B+g*Y+x*k,o[5]=p*R+m*N+g*G+x*Q,o[9]=p*M+m*H+g*K+x*J,o[13]=p*F+m*q+g*j+x*O,o[2]=A*I+_*B+v*Y+y*k,o[6]=A*R+_*N+v*G+y*Q,o[10]=A*M+_*H+v*K+y*J,o[14]=A*F+_*q+v*j+y*O,o[3]=T*I+P*B+C*Y+w*k,o[7]=T*R+P*N+C*G+w*Q,o[11]=T*M+P*H+C*K+w*J,o[15]=T*F+P*q+C*j+w*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[12],l=e[1],u=e[5],d=e[9],f=e[13],p=e[2],m=e[6],g=e[10],x=e[14],A=e[3],_=e[7],v=e[11],y=e[15],T=d*x-f*g,P=u*x-f*m,C=u*g-d*m,w=l*x-f*p,I=l*g-d*p,R=l*m-u*p;return t*(_*T-v*P+y*C)-n*(A*T-v*w+y*I)+s*(A*P-_*w+y*R)-o*(A*C-_*I+v*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[1],l=e[5],u=e[9],d=e[2],f=e[6],p=e[10];return t*(l*p-u*f)-n*(o*p-u*d)+s*(o*f-l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],l=e[4],u=e[5],d=e[6],f=e[7],p=e[8],m=e[9],g=e[10],x=e[11],A=e[12],_=e[13],v=e[14],y=e[15],T=t*u-n*l,P=t*d-s*l,C=t*f-o*l,w=n*d-s*u,I=n*f-o*u,R=s*f-o*d,M=p*_-m*A,F=p*v-g*A,B=p*y-x*A,N=m*v-g*_,H=m*y-x*_,q=g*y-x*v,Y=T*q-P*H+C*N+w*B-I*F+R*M;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/Y;return e[0]=(u*q-d*H+f*N)*G,e[1]=(s*H-n*q-o*N)*G,e[2]=(_*R-v*I+y*w)*G,e[3]=(g*I-m*R-x*w)*G,e[4]=(d*B-l*q-f*F)*G,e[5]=(t*q-s*B+o*F)*G,e[6]=(v*C-A*R-y*P)*G,e[7]=(p*R-g*C+x*P)*G,e[8]=(l*H-u*B+f*M)*G,e[9]=(n*B-t*H-o*M)*G,e[10]=(A*I-_*C+y*T)*G,e[11]=(m*C-p*I-x*T)*G,e[12]=(u*F-l*N-d*M)*G,e[13]=(t*N-n*F+s*M)*G,e[14]=(_*P-A*w-v*T)*G,e[15]=(p*w-m*P+g*T)*G,this}scale(e){const t=this.elements,n=e.x,s=e.y,o=e.z;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),o=1-n,l=e.x,u=e.y,d=e.z,f=o*l,p=o*u;return this.set(f*l+n,f*u-s*d,f*d+s*u,0,f*u+s*d,p*u+n,p*d-s*l,0,f*d-s*u,p*d+s*l,o*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,o,l){return this.set(1,n,o,0,e,1,l,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,o=t._x,l=t._y,u=t._z,d=t._w,f=o+o,p=l+l,m=u+u,g=o*f,x=o*p,A=o*m,_=l*p,v=l*m,y=u*m,T=d*f,P=d*p,C=d*m,w=n.x,I=n.y,R=n.z;return s[0]=(1-(_+y))*w,s[1]=(x+C)*w,s[2]=(A-P)*w,s[3]=0,s[4]=(x-C)*I,s[5]=(1-(g+y))*I,s[6]=(v+T)*I,s[7]=0,s[8]=(A+P)*R,s[9]=(v-T)*R,s[10]=(1-(g+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const o=this.determinantAffine();if(o===0)return n.set(1,1,1),t.identity(),this;let l=Ea.set(s[0],s[1],s[2]).length();const u=Ea.set(s[4],s[5],s[6]).length(),d=Ea.set(s[8],s[9],s[10]).length();o<0&&(l=-l),Qi.copy(this);const f=1/l,p=1/u,m=1/d;return Qi.elements[0]*=f,Qi.elements[1]*=f,Qi.elements[2]*=f,Qi.elements[4]*=p,Qi.elements[5]*=p,Qi.elements[6]*=p,Qi.elements[8]*=m,Qi.elements[9]*=m,Qi.elements[10]*=m,t.setFromRotationMatrix(Qi),n.x=l,n.y=u,n.z=d,this}makePerspective(e,t,n,s,o,l,u=rr,d=!1){const f=this.elements,p=2*o/(t-e),m=2*o/(n-s),g=(t+e)/(t-e),x=(n+s)/(n-s);let A,_;if(d)A=o/(l-o),_=l*o/(l-o);else if(u===rr)A=-(l+o)/(l-o),_=-2*l*o/(l-o);else if(u===au)A=-l/(l-o),_=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=p,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=m,f[9]=x,f[13]=0,f[2]=0,f[6]=0,f[10]=A,f[14]=_,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,s,o,l,u=rr,d=!1){const f=this.elements,p=2/(t-e),m=2/(n-s),g=-(t+e)/(t-e),x=-(n+s)/(n-s);let A,_;if(d)A=1/(l-o),_=l/(l-o);else if(u===rr)A=-2/(l-o),_=-(l+o)/(l-o);else if(u===au)A=-1/(l-o),_=-o/(l-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=p,f[4]=0,f[8]=0,f[12]=g,f[1]=0,f[5]=m,f[9]=0,f[13]=x,f[2]=0,f[6]=0,f[10]=A,f[14]=_,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};hu.prototype.isMatrix4=!0;let mt=hu;const Ea=new U,Qi=new mt,yA=new U(0,0,0),AA=new U(1,1,1),es=new U,gc=new U,Si=new U,y0=new mt,A0=new tn;class Qs{constructor(e=0,t=0,n=0,s=Qs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,o=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],g=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(g,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,x),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-Ct(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(g,f),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,x),this._y=0);break;default:ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return y0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(y0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return A0.setFromEuler(this),this.setFromQuaternion(A0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qs.DEFAULT_ORDER="XYZ";let cv=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_A=0;const _0=new U,Ma=new tn,Ar=new mt,xc=new U,Oo=new U,EA=new U,MA=new tn,E0=new U(1,0,0),M0=new U(0,1,0),C0=new U(0,0,1),T0={type:"added"},CA={type:"removed"},Ca={type:"childadded",child:null},mf={type:"childremoved",child:null};class _n extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_A++}),this.uuid=ll(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new U,t=new Qs,n=new tn,s=new U(1,1,1);function o(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new ft}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ma.setFromAxisAngle(e,t),this.quaternion.multiply(Ma),this}rotateOnWorldAxis(e,t){return Ma.setFromAxisAngle(e,t),this.quaternion.premultiply(Ma),this}rotateX(e){return this.rotateOnAxis(E0,e)}rotateY(e){return this.rotateOnAxis(M0,e)}rotateZ(e){return this.rotateOnAxis(C0,e)}translateOnAxis(e,t){return _0.copy(e).applyQuaternion(this.quaternion),this.position.add(_0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(E0,e)}translateY(e){return this.translateOnAxis(M0,e)}translateZ(e){return this.translateOnAxis(C0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ar.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xc.copy(e):xc.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ar.lookAt(Oo,xc,this.up):Ar.lookAt(xc,Oo,this.up),this.quaternion.setFromRotationMatrix(Ar),s&&(Ar.extractRotation(s.matrixWorld),Ma.setFromRotationMatrix(Ar),this.quaternion.premultiply(Ma.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(T0),Ca.child=e,this.dispatchEvent(Ca),Ca.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(CA),mf.child=e,this.dispatchEvent(mf),mf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ar.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ar.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ar),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(T0),Ca.child=e,this.dispatchEvent(Ca),Ca.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let o=0,l=s.length;o<l;o++)s[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,EA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,MA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*n-o[8]*s,o[13]+=n-o[1]*t-o[5]*n-o[9]*s,o[14]+=s-o[2]*t-o[6]*n-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(u=>({...u})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let f=0,p=d.length;f<p;f++){const m=d[f];o(e.shapes,m)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,f=this.material.length;d<f;d++)u.push(o(e.materials,this.material[d]));s.material=u}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];s.animations.push(o(e.animations,d))}}if(t){const u=l(e.geometries),d=l(e.materials),f=l(e.textures),p=l(e.images),m=l(e.shapes),g=l(e.skeletons),x=l(e.animations),A=l(e.nodes);u.length>0&&(n.geometries=u),d.length>0&&(n.materials=d),f.length>0&&(n.textures=f),p.length>0&&(n.images=p),m.length>0&&(n.shapes=m),g.length>0&&(n.skeletons=g),x.length>0&&(n.animations=x),A.length>0&&(n.nodes=A)}return n.object=s,n;function l(u){const d=[];for(const f in u){const p=u[f];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}_n.DEFAULT_UP=new U(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class za extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TA={type:"move"};class gf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new za,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new za,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new za,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,o=null,l=null;const u=this._targetRay,d=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){l=!0;for(const _ of e.hand.values()){const v=t.getJointPose(_,n),y=this._getHandJoint(f,_);v!==null&&(y.matrix.fromArray(v.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=v.radius),y.visible=v!==null}const p=f.joints["index-finger-tip"],m=f.joints["thumb-tip"],g=p.position.distanceTo(m.position),x=.02,A=.005;f.inputState.pinching&&g>x+A?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&g<=x-A&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));u!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(TA)))}return u!==null&&(u.visible=s!==null),d!==null&&(d.visible=o!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new za;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const uv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},vc={h:0,s:0,l:0};function xf(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class bt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=It.workingColorSpace){return this.r=e,this.g=t,this.b=n,It.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=It.workingColorSpace){if(e=hA(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,l=2*n-o;this.r=xf(l,o,e+1/3),this.g=xf(l,o,e),this.b=xf(l,o,e-1/3)}return It.colorSpaceToWorking(this,s),this}setStyle(e,t=Ai){function n(o){o!==void 0&&parseFloat(o)<1&&ht("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const l=s[1],u=s[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:ht("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(o,16),t);ht("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ai){const n=uv[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ht("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}copyLinearToSRGB(e){return this.r=Wa(e.r),this.g=Wa(e.g),this.b=Wa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ai){return It.workingToColorSpace(Wn.copy(this),e),Math.round(Ct(Wn.r*255,0,255))*65536+Math.round(Ct(Wn.g*255,0,255))*256+Math.round(Ct(Wn.b*255,0,255))}getHexString(e=Ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.workingToColorSpace(Wn.copy(this),t);const n=Wn.r,s=Wn.g,o=Wn.b,l=Math.max(n,s,o),u=Math.min(n,s,o);let d,f;const p=(u+l)/2;if(u===l)d=0,f=0;else{const m=l-u;switch(f=p<=.5?m/(l+u):m/(2-l-u),l){case n:d=(s-o)/m+(s<o?6:0);break;case s:d=(o-n)/m+2;break;case o:d=(n-s)/m+4;break}d/=6}return e.h=d,e.s=f,e.l=p,e}getRGB(e,t=It.workingColorSpace){return It.workingToColorSpace(Wn.copy(this),t),e.r=Wn.r,e.g=Wn.g,e.b=Wn.b,e}getStyle(e=Ai){It.workingToColorSpace(Wn.copy(this),e);const t=Wn.r,n=Wn.g,s=Wn.b;return e!==Ai?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ts),this.setHSL(ts.h+e,ts.s+t,ts.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ts),e.getHSL(vc);const n=uf(ts.h,vc.h,t),s=uf(ts.s,vc.s,t),o=uf(ts.l,vc.l,t);return this.setHSL(n,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*s,this.g=o[1]*t+o[4]*n+o[7]*s,this.b=o[2]*t+o[5]*n+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wn=new bt;bt.NAMES=uv;class wA extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qs,this.environmentIntensity=1,this.environmentRotation=new Qs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const qi=new U,_r=new U,vf=new U,Er=new U,Ta=new U,wa=new U,w0=new U,Sf=new U,yf=new U,Af=new U,_f=new nn,Ef=new nn,Mf=new nn;class Bi{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),qi.subVectors(e,t),s.cross(qi);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,n,s,o){qi.subVectors(s,t),_r.subVectors(n,t),vf.subVectors(e,t);const l=qi.dot(qi),u=qi.dot(_r),d=qi.dot(vf),f=_r.dot(_r),p=_r.dot(vf),m=l*f-u*u;if(m===0)return o.set(0,0,0),null;const g=1/m,x=(f*d-u*p)*g,A=(l*p-u*d)*g;return o.set(1-x-A,A,x)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Er)===null?!1:Er.x>=0&&Er.y>=0&&Er.x+Er.y<=1}static getInterpolation(e,t,n,s,o,l,u,d){return this.getBarycoord(e,t,n,s,Er)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(o,Er.x),d.addScaledVector(l,Er.y),d.addScaledVector(u,Er.z),d)}static getInterpolatedAttribute(e,t,n,s,o,l){return _f.setScalar(0),Ef.setScalar(0),Mf.setScalar(0),_f.fromBufferAttribute(e,t),Ef.fromBufferAttribute(e,n),Mf.fromBufferAttribute(e,s),l.setScalar(0),l.addScaledVector(_f,o.x),l.addScaledVector(Ef,o.y),l.addScaledVector(Mf,o.z),l}static isFrontFacing(e,t,n,s){return qi.subVectors(n,t),_r.subVectors(e,t),qi.cross(_r).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qi.subVectors(this.c,this.b),_r.subVectors(this.a,this.b),qi.cross(_r).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,o){return Bi.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return Bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,o=this.c;let l,u;Ta.subVectors(s,n),wa.subVectors(o,n),Sf.subVectors(e,n);const d=Ta.dot(Sf),f=wa.dot(Sf);if(d<=0&&f<=0)return t.copy(n);yf.subVectors(e,s);const p=Ta.dot(yf),m=wa.dot(yf);if(p>=0&&m<=p)return t.copy(s);const g=d*m-p*f;if(g<=0&&d>=0&&p<=0)return l=d/(d-p),t.copy(n).addScaledVector(Ta,l);Af.subVectors(e,o);const x=Ta.dot(Af),A=wa.dot(Af);if(A>=0&&x<=A)return t.copy(o);const _=x*f-d*A;if(_<=0&&f>=0&&A<=0)return u=f/(f-A),t.copy(n).addScaledVector(wa,u);const v=p*A-x*m;if(v<=0&&m-p>=0&&x-A>=0)return w0.subVectors(o,s),u=(m-p)/(m-p+(x-A)),t.copy(s).addScaledVector(w0,u);const y=1/(v+_+g);return l=_*y,u=g*y,t.copy(n).addScaledVector(Ta,l).addScaledVector(wa,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class sr{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let l=0,u=o.count;l<u;l++)e.isMesh===!0?e.getVertexPosition(l,Yi):Yi.fromBufferAttribute(o,l),Yi.applyMatrix4(e.matrixWorld),this.expandByPoint(Yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sc.copy(n.boundingBox)),Sc.applyMatrix4(e.matrixWorld),this.union(Sc)}const s=e.children;for(let o=0,l=s.length;o<l;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),yc.subVectors(this.max,ko),ba.subVectors(e.a,ko),Ra.subVectors(e.b,ko),Ia.subVectors(e.c,ko),ns.subVectors(Ra,ba),is.subVectors(Ia,Ra),Fs.subVectors(ba,Ia);let t=[0,-ns.z,ns.y,0,-is.z,is.y,0,-Fs.z,Fs.y,ns.z,0,-ns.x,is.z,0,-is.x,Fs.z,0,-Fs.x,-ns.y,ns.x,0,-is.y,is.x,0,-Fs.y,Fs.x,0];return!Cf(t,ba,Ra,Ia,yc)||(t=[1,0,0,0,1,0,0,0,1],!Cf(t,ba,Ra,Ia,yc))?!1:(Ac.crossVectors(ns,is),t=[Ac.x,Ac.y,Ac.z],Cf(t,ba,Ra,Ia,yc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mr=[new U,new U,new U,new U,new U,new U,new U,new U],Yi=new U,Sc=new sr,ba=new U,Ra=new U,Ia=new U,ns=new U,is=new U,Fs=new U,ko=new U,yc=new U,Ac=new U,Ls=new U;function Cf(a,e,t,n,s){for(let o=0,l=a.length-3;o<=l;o+=3){Ls.fromArray(a,o);const u=s.x*Math.abs(Ls.x)+s.y*Math.abs(Ls.y)+s.z*Math.abs(Ls.z),d=e.dot(Ls),f=t.dot(Ls),p=n.dot(Ls);if(Math.max(-Math.max(d,f,p),Math.min(d,f,p))>u)return!1}return!0}const Rr=bA();function bA(){const a=new ArrayBuffer(4),e=new Float32Array(a),t=new Uint32Array(a),n=new Uint32Array(512),s=new Uint32Array(512);for(let d=0;d<256;++d){const f=d-127;f<-27?(n[d]=0,n[d|256]=32768,s[d]=24,s[d|256]=24):f<-14?(n[d]=1024>>-f-14,n[d|256]=1024>>-f-14|32768,s[d]=-f-1,s[d|256]=-f-1):f<=15?(n[d]=f+15<<10,n[d|256]=f+15<<10|32768,s[d]=13,s[d|256]=13):f<128?(n[d]=31744,n[d|256]=64512,s[d]=24,s[d|256]=24):(n[d]=31744,n[d|256]=64512,s[d]=13,s[d|256]=13)}const o=new Uint32Array(2048),l=new Uint32Array(64),u=new Uint32Array(64);for(let d=1;d<1024;++d){let f=d<<13,p=0;for(;(f&8388608)===0;)f<<=1,p-=8388608;f&=-8388609,p+=947912704,o[d]=f|p}for(let d=1024;d<2048;++d)o[d]=939524096+(d-1024<<13);for(let d=1;d<31;++d)l[d]=d<<23;l[31]=1199570944,l[32]=2147483648;for(let d=33;d<63;++d)l[d]=2147483648+(d-32<<23);l[63]=3347054592;for(let d=1;d<64;++d)d!==32&&(u[d]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:o,exponentTable:l,offsetTable:u}}function RA(a){Math.abs(a)>65504&&ht("DataUtils.toHalfFloat(): Value out of range."),a=Ct(a,-65504,65504),Rr.floatView[0]=a;const e=Rr.uint32View[0],t=e>>23&511;return Rr.baseTable[t]+((e&8388607)>>Rr.shiftTable[t])}function IA(a){const e=a>>10;return Rr.uint32View[0]=Rr.mantissaTable[Rr.offsetTable[e]+(a&1023)]+Rr.exponentTable[e],Rr.floatView[0]}class sl{static toHalfFloat(e){return RA(e)}static fromHalfFloat(e){return IA(e)}}const yn=new U,_c=new qe;let PA=0;class Ui extends ps{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PA++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=h0,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_c.fromBufferAttribute(this,t),_c.applyMatrix3(e),this.setXY(t,_c.x,_c.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix3(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Uo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=di(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Uo(t,this.array)),t}setX(e,t){return this.normalized&&(t=di(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Uo(t,this.array)),t}setY(e,t){return this.normalized&&(t=di(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Uo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=di(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Uo(t,this.array)),t}setW(e,t){return this.normalized&&(t=di(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=di(t,this.array),n=di(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=di(t,this.array),n=di(n,this.array),s=di(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=di(t,this.array),n=di(n,this.array),s=di(s,this.array),o=di(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==h0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class dv extends Ui{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class fv extends Ui{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Dn extends Ui{constructor(e,t,n){super(new Float32Array(e),t,n)}}const DA=new sr,zo=new U,Tf=new U;class vu{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):DA.setFromPoints(e).getCenter(n);let s=0;for(let o=0,l=e.length;o<l;o++)s=Math.max(s,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);const t=zo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(zo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(Tf)),this.expandByPoint(zo.copy(e.center).sub(Tf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let FA=0;const Di=new mt,wf=new _n,Pa=new U,yi=new sr,Ho=new sr,Pn=new U;class qn extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FA++}),this.uuid=ll(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cA(e)?fv:dv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ft().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,t,n){return Di.makeTranslation(e,t,n),this.applyMatrix4(Di),this}scale(e,t,n){return Di.makeScale(e,t,n),this.applyMatrix4(Di),this}lookAt(e){return wf.lookAt(e),wf.updateMatrix(),this.applyMatrix4(wf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pa).negate(),this.translate(Pa.x,Pa.y,Pa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,o=e.length;s<o;s++){const l=e[s];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Dn(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];yi.setFromBufferAttribute(o),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(yi.setFromBufferAttribute(e),t)for(let o=0,l=t.length;o<l;o++){const u=t[o];Ho.setFromBufferAttribute(u),this.morphTargetsRelative?(Pn.addVectors(yi.min,Ho.min),yi.expandByPoint(Pn),Pn.addVectors(yi.max,Ho.max),yi.expandByPoint(Pn)):(yi.expandByPoint(Ho.min),yi.expandByPoint(Ho.max))}yi.getCenter(n);let s=0;for(let o=0,l=e.count;o<l;o++)Pn.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared(Pn));if(t)for(let o=0,l=t.length;o<l;o++){const u=t[o],d=this.morphTargetsRelative;for(let f=0,p=u.count;f<p;f++)Pn.fromBufferAttribute(u,f),d&&(Pa.fromBufferAttribute(e,f),Pn.add(Pa)),s=Math.max(s,n.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,o=t.uv;let l=this.getAttribute("tangent");(l===void 0||l.count!==n.count)&&(l=new Ui(new Float32Array(4*n.count),4),this.setAttribute("tangent",l));const u=[],d=[];for(let M=0;M<n.count;M++)u[M]=new U,d[M]=new U;const f=new U,p=new U,m=new U,g=new qe,x=new qe,A=new qe,_=new U,v=new U;function y(M,F,B){f.fromBufferAttribute(n,M),p.fromBufferAttribute(n,F),m.fromBufferAttribute(n,B),g.fromBufferAttribute(o,M),x.fromBufferAttribute(o,F),A.fromBufferAttribute(o,B),p.sub(f),m.sub(f),x.sub(g),A.sub(g);const N=1/(x.x*A.y-A.x*x.y);isFinite(N)&&(_.copy(p).multiplyScalar(A.y).addScaledVector(m,-x.y).multiplyScalar(N),v.copy(m).multiplyScalar(x.x).addScaledVector(p,-A.x).multiplyScalar(N),u[M].add(_),u[F].add(_),u[B].add(_),d[M].add(v),d[F].add(v),d[B].add(v))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let M=0,F=T.length;M<F;++M){const B=T[M],N=B.start,H=B.count;for(let q=N,Y=N+H;q<Y;q+=3)y(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const P=new U,C=new U,w=new U,I=new U;function R(M){w.fromBufferAttribute(s,M),I.copy(w);const F=u[M];P.copy(F),P.sub(w.multiplyScalar(w.dot(F))).normalize(),C.crossVectors(I,F);const N=C.dot(d[M])<0?-1:1;l.setXYZW(M,P.x,P.y,P.z,N)}for(let M=0,F=T.length;M<F;++M){const B=T[M],N=B.start,H=B.count;for(let q=N,Y=N+H;q<Y;q+=3)R(e.getX(q+0)),R(e.getX(q+1)),R(e.getX(q+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ui(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,x=n.count;g<x;g++)n.setXYZ(g,0,0,0);const s=new U,o=new U,l=new U,u=new U,d=new U,f=new U,p=new U,m=new U;if(e)for(let g=0,x=e.count;g<x;g+=3){const A=e.getX(g+0),_=e.getX(g+1),v=e.getX(g+2);s.fromBufferAttribute(t,A),o.fromBufferAttribute(t,_),l.fromBufferAttribute(t,v),p.subVectors(l,o),m.subVectors(s,o),p.cross(m),u.fromBufferAttribute(n,A),d.fromBufferAttribute(n,_),f.fromBufferAttribute(n,v),u.add(p),d.add(p),f.add(p),n.setXYZ(A,u.x,u.y,u.z),n.setXYZ(_,d.x,d.y,d.z),n.setXYZ(v,f.x,f.y,f.z)}else for(let g=0,x=t.count;g<x;g+=3)s.fromBufferAttribute(t,g+0),o.fromBufferAttribute(t,g+1),l.fromBufferAttribute(t,g+2),p.subVectors(l,o),m.subVectors(s,o),p.cross(m),n.setXYZ(g+0,p.x,p.y,p.z),n.setXYZ(g+1,p.x,p.y,p.z),n.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pn.fromBufferAttribute(e,t),Pn.normalize(),e.setXYZ(t,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(u,d){const f=u.array,p=u.itemSize,m=u.normalized,g=new f.constructor(d.length*p);let x=0,A=0;for(let _=0,v=d.length;_<v;_++){u.isInterleavedBufferAttribute?x=d[_]*u.data.stride+u.offset:x=d[_]*p;for(let y=0;y<p;y++)g[A++]=f[x++]}return new Ui(g,p,m)}if(this.index===null)return ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qn,n=this.index.array,s=this.attributes;for(const u in s){const d=s[u],f=e(d,n);t.setAttribute(u,f)}const o=this.morphAttributes;for(const u in o){const d=[],f=o[u];for(let p=0,m=f.length;p<m;p++){const g=f[p],x=e(g,n);d.push(x)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,d=l.length;u<d;u++){const f=l[u];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const f in d)d[f]!==void 0&&(e[f]=d[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const f=n[d];e.data.attributes[d]=f.toJSON(e.data)}const s={};let o=!1;for(const d in this.morphAttributes){const f=this.morphAttributes[d],p=[];for(let m=0,g=f.length;m<g;m++){const x=f[m];p.push(x.toJSON(e.data))}p.length>0&&(s[d]=p,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const f in s){const p=s[f];this.setAttribute(f,p.clone(t))}const o=e.morphAttributes;for(const f in o){const p=[],m=o[f];for(let g=0,x=m.length;g<x;g++)p.push(m[g].clone(t));this.morphAttributes[f]=p}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let f=0,p=l.length;f<p;f++){const m=l[f];this.addGroup(m.start,m.count,m.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let LA=0;class cl extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LA++}),this.uuid=ll(),this.name="",this.type="Material",this.blending=fs,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=el,this.blendDst=tl,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=ja,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=f0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Aa,this.stencilZFail=Aa,this.stencilZPass=Aa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ht(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ht(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(n.blending=this.blending),this.side!==lr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==el&&(n.blendSrc=this.blendSrc),this.blendDst!==tl&&(n.blendDst=this.blendDst),this.blendEquation!==Us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ja&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==f0&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Aa&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Aa&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Aa&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const l=[];for(const u in o){const d=o[u];delete d.metadata,l.push(d)}return l}if(t){const o=s(e.textures),l=s(e.images);o.length>0&&(n.textures=o),l.length>0&&(n.images=l)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new bt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new qe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Cr=new U,bf=new U,Ec=new U,rs=new U,Rf=new U,Mc=new U,If=new U;let lp=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cr.copy(this.origin).addScaledVector(this.direction,t),Cr.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){bf.copy(e).add(t).multiplyScalar(.5),Ec.copy(t).sub(e).normalize(),rs.copy(this.origin).sub(bf);const o=e.distanceTo(t)*.5,l=-this.direction.dot(Ec),u=rs.dot(this.direction),d=-rs.dot(Ec),f=rs.lengthSq(),p=Math.abs(1-l*l);let m,g,x,A;if(p>0)if(m=l*d-u,g=l*u-d,A=o*p,m>=0)if(g>=-A)if(g<=A){const _=1/p;m*=_,g*=_,x=m*(m+l*g+2*u)+g*(l*m+g+2*d)+f}else g=o,m=Math.max(0,-(l*g+u)),x=-m*m+g*(g+2*d)+f;else g=-o,m=Math.max(0,-(l*g+u)),x=-m*m+g*(g+2*d)+f;else g<=-A?(m=Math.max(0,-(-l*o+u)),g=m>0?-o:Math.min(Math.max(-o,-d),o),x=-m*m+g*(g+2*d)+f):g<=A?(m=0,g=Math.min(Math.max(-o,-d),o),x=g*(g+2*d)+f):(m=Math.max(0,-(l*o+u)),g=m>0?o:Math.min(Math.max(-o,-d),o),x=-m*m+g*(g+2*d)+f);else g=l>0?-o:o,m=Math.max(0,-(l*g+u)),x=-m*m+g*(g+2*d)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(bf).addScaledVector(Ec,g),x}intersectSphere(e,t){Cr.subVectors(e.center,this.origin);const n=Cr.dot(this.direction),s=Cr.dot(Cr)-n*n,o=e.radius*e.radius;if(s>o)return null;const l=Math.sqrt(o-s),u=n-l,d=n+l;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,o,l,u,d;const f=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,g=this.origin;return f>=0?(n=(e.min.x-g.x)*f,s=(e.max.x-g.x)*f):(n=(e.max.x-g.x)*f,s=(e.min.x-g.x)*f),p>=0?(o=(e.min.y-g.y)*p,l=(e.max.y-g.y)*p):(o=(e.max.y-g.y)*p,l=(e.min.y-g.y)*p),n>l||o>s||((o>n||isNaN(n))&&(n=o),(l<s||isNaN(s))&&(s=l),m>=0?(u=(e.min.z-g.z)*m,d=(e.max.z-g.z)*m):(u=(e.max.z-g.z)*m,d=(e.min.z-g.z)*m),n>d||u>s)||((u>n||n!==n)&&(n=u),(d<s||s!==s)&&(s=d),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Cr)!==null}intersectTriangle(e,t,n,s,o){Rf.subVectors(t,e),Mc.subVectors(n,e),If.crossVectors(Rf,Mc);let l=this.direction.dot(If),u;if(l>0){if(s)return null;u=1}else if(l<0)u=-1,l=-l;else return null;rs.subVectors(this.origin,e);const d=u*this.direction.dot(Mc.crossVectors(rs,Mc));if(d<0)return null;const f=u*this.direction.dot(Rf.cross(rs));if(f<0||d+f>l)return null;const p=-u*rs.dot(If);return p<0?null:this.at(p/l,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class dr extends cl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qs,this.combine=Wx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const b0=new mt,Bs=new lp,Cc=new vu,R0=new U,Tc=new U,wc=new U,bc=new U,Pf=new U,Rc=new U,I0=new U,Ic=new U;class en extends _n{constructor(e=new qn,t=new dr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(o&&u){Rc.set(0,0,0);for(let d=0,f=o.length;d<f;d++){const p=u[d],m=o[d];p!==0&&(Pf.fromBufferAttribute(m,e),l?Rc.addScaledVector(Pf,p):Rc.addScaledVector(Pf.sub(t),p))}t.add(Rc)}return t}raycast(e,t){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cc.copy(n.boundingSphere),Cc.applyMatrix4(o),Bs.copy(e.ray).recast(e.near),!(Cc.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(Cc,R0)===null||Bs.origin.distanceToSquared(R0)>(e.far-e.near)**2))&&(b0.copy(o).invert(),Bs.copy(e.ray).applyMatrix4(b0),!(n.boundingBox!==null&&Bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bs)))}_computeIntersections(e,t,n){let s;const o=this.geometry,l=this.material,u=o.index,d=o.attributes.position,f=o.attributes.uv,p=o.attributes.uv1,m=o.attributes.normal,g=o.groups,x=o.drawRange;if(u!==null)if(Array.isArray(l))for(let A=0,_=g.length;A<_;A++){const v=g[A],y=l[v.materialIndex],T=Math.max(v.start,x.start),P=Math.min(u.count,Math.min(v.start+v.count,x.start+x.count));for(let C=T,w=P;C<w;C+=3){const I=u.getX(C),R=u.getX(C+1),M=u.getX(C+2);s=Pc(this,y,e,n,f,p,m,I,R,M),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const A=Math.max(0,x.start),_=Math.min(u.count,x.start+x.count);for(let v=A,y=_;v<y;v+=3){const T=u.getX(v),P=u.getX(v+1),C=u.getX(v+2);s=Pc(this,l,e,n,f,p,m,T,P,C),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(l))for(let A=0,_=g.length;A<_;A++){const v=g[A],y=l[v.materialIndex],T=Math.max(v.start,x.start),P=Math.min(d.count,Math.min(v.start+v.count,x.start+x.count));for(let C=T,w=P;C<w;C+=3){const I=C,R=C+1,M=C+2;s=Pc(this,y,e,n,f,p,m,I,R,M),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const A=Math.max(0,x.start),_=Math.min(d.count,x.start+x.count);for(let v=A,y=_;v<y;v+=3){const T=v,P=v+1,C=v+2;s=Pc(this,l,e,n,f,p,m,T,P,C),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}}}function BA(a,e,t,n,s,o,l,u){let d;if(e.side===pi?d=n.intersectTriangle(l,o,s,!0,u):d=n.intersectTriangle(s,o,l,e.side===lr,u),d===null)return null;Ic.copy(u),Ic.applyMatrix4(a.matrixWorld);const f=t.ray.origin.distanceTo(Ic);return f<t.near||f>t.far?null:{distance:f,point:Ic.clone(),object:a}}function Pc(a,e,t,n,s,o,l,u,d,f){a.getVertexPosition(u,Tc),a.getVertexPosition(d,wc),a.getVertexPosition(f,bc);const p=BA(a,e,t,n,Tc,wc,bc,I0);if(p){const m=new U;Bi.getBarycoord(I0,Tc,wc,bc,m),s&&(p.uv=Bi.getInterpolatedAttribute(s,u,d,f,m,new qe)),o&&(p.uv1=Bi.getInterpolatedAttribute(o,u,d,f,m,new qe)),l&&(p.normal=Bi.getInterpolatedAttribute(l,u,d,f,m,new U),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const g={a:u,b:d,c:f,normal:new U,materialIndex:0};Bi.getNormal(Tc,wc,bc,g.normal),p.face=g,p.barycoord=m}return p}class wr extends Qn{constructor(e=null,t=1,n=1,s,o,l,u,d,f=Un,p=Un,m,g){super(null,l,u,d,f,p,s,o,m,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class NA extends Ui{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Df=new U,UA=new U,OA=new ft;class os{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Df.subVectors(n,t).cross(UA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Df),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return n===!0&&(l<0||l>1)?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||OA.getNormalMatrix(e),s=this.coplanarPoint(Df).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ns=new vu,kA=new qe(.5,.5),Dc=new U;class hv{constructor(e=new os,t=new os,n=new os,s=new os,o=new os,l=new os){this.planes=[e,t,n,s,o,l]}set(e,t,n,s,o,l){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(n),u[3].copy(s),u[4].copy(o),u[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=rr,n=!1){const s=this.planes,o=e.elements,l=o[0],u=o[1],d=o[2],f=o[3],p=o[4],m=o[5],g=o[6],x=o[7],A=o[8],_=o[9],v=o[10],y=o[11],T=o[12],P=o[13],C=o[14],w=o[15];if(s[0].setComponents(f-l,x-p,y-A,w-T).normalize(),s[1].setComponents(f+l,x+p,y+A,w+T).normalize(),s[2].setComponents(f+u,x+m,y+_,w+P).normalize(),s[3].setComponents(f-u,x-m,y-_,w-P).normalize(),n)s[4].setComponents(d,g,v,C).normalize(),s[5].setComponents(f-d,x-g,y-v,w-C).normalize();else if(s[4].setComponents(f-d,x-g,y-v,w-C).normalize(),t===rr)s[5].setComponents(f+d,x+g,y+v,w+C).normalize();else if(t===au)s[5].setComponents(d,g,v,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(e){Ns.center.set(0,0,0);const t=kA.distanceTo(e.center);return Ns.radius=.7071067811865476+t,Ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Dc.x=s.normal.x>0?e.max.x:e.min.x,Dc.y=s.normal.y>0?e.max.y:e.min.y,Dc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pv extends cl{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ou=new U,lu=new U,P0=new mt,Vo=new lp,Fc=new vu,Ff=new U,D0=new U;class zA extends _n{constructor(e=new qn,t=new pv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,o=t.count;s<o;s++)ou.fromBufferAttribute(t,s-1),lu.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ou.distanceTo(lu);e.setAttribute("lineDistance",new Dn(n,1))}else ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fc.copy(n.boundingSphere),Fc.applyMatrix4(s),Fc.radius+=o,e.ray.intersectsSphere(Fc)===!1)return;P0.copy(s).invert(),Vo.copy(e.ray).applyMatrix4(P0);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,f=this.isLineSegments?2:1,p=n.index,g=n.attributes.position;if(p!==null){const x=Math.max(0,l.start),A=Math.min(p.count,l.start+l.count);for(let _=x,v=A-1;_<v;_+=f){const y=p.getX(_),T=p.getX(_+1),P=Lc(this,e,Vo,d,y,T,_);P&&t.push(P)}if(this.isLineLoop){const _=p.getX(A-1),v=p.getX(x),y=Lc(this,e,Vo,d,_,v,A-1);y&&t.push(y)}}else{const x=Math.max(0,l.start),A=Math.min(g.count,l.start+l.count);for(let _=x,v=A-1;_<v;_+=f){const y=Lc(this,e,Vo,d,_,_+1,_);y&&t.push(y)}if(this.isLineLoop){const _=Lc(this,e,Vo,d,A-1,x,A-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function Lc(a,e,t,n,s,o,l){const u=a.geometry.attributes.position;if(ou.fromBufferAttribute(u,s),lu.fromBufferAttribute(u,o),t.distanceSqToSegment(ou,lu,Ff,D0)>n)return;Ff.applyMatrix4(a.matrixWorld);const f=e.ray.origin.distanceTo(Ff);if(!(f<e.near||f>e.far))return{distance:f,point:D0.clone().applyMatrix4(a.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:a}}const F0=new U,L0=new U;class HA extends zA{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,o=t.count;s<o;s+=2)F0.fromBufferAttribute(t,s),L0.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+F0.distanceTo(L0);e.setAttribute("lineDistance",new Dn(n,1))}else ht("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mv extends Qn{constructor(e=[],t=Ws,n,s,o,l,u,d,f,p){super(e,t,n,s,o,l,u,d,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qs extends Qn{constructor(e,t,n=ei,s,o,l,u=Un,d=Un,f,p=ur,m=1){if(p!==ur&&p!==Vs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:m};super(g,s,o,l,u,d,p,n,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new op(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class VA extends qs{constructor(e,t=ei,n=Ws,s,o,l=Un,u=Un,d,f=ur){const p={width:e,height:e,depth:1},m=[p,p,p,p,p,p];super(e,e,t,n,s,o,l,u,d,f),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class gv extends Qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class hs extends qn{constructor(e=1,t=1,n=1,s=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:o,depthSegments:l};const u=this;s=Math.floor(s),o=Math.floor(o),l=Math.floor(l);const d=[],f=[],p=[],m=[];let g=0,x=0;A("z","y","x",-1,-1,n,t,e,l,o,0),A("z","y","x",1,-1,n,t,-e,l,o,1),A("x","z","y",1,1,e,n,t,s,l,2),A("x","z","y",1,-1,e,n,-t,s,l,3),A("x","y","z",1,-1,e,t,n,s,o,4),A("x","y","z",-1,-1,e,t,-n,s,o,5),this.setIndex(d),this.setAttribute("position",new Dn(f,3)),this.setAttribute("normal",new Dn(p,3)),this.setAttribute("uv",new Dn(m,2));function A(_,v,y,T,P,C,w,I,R,M,F){const B=C/R,N=w/M,H=C/2,q=w/2,Y=I/2,G=R+1,K=M+1;let j=0,k=0;const Q=new U;for(let J=0;J<K;J++){const O=J*N-q;for(let ee=0;ee<G;ee++){const ye=ee*B-H;Q[_]=ye*T,Q[v]=O*P,Q[y]=Y,f.push(Q.x,Q.y,Q.z),Q[_]=0,Q[v]=0,Q[y]=I>0?1:-1,p.push(Q.x,Q.y,Q.z),m.push(ee/R),m.push(1-J/M),j+=1}}for(let J=0;J<M;J++)for(let O=0;O<R;O++){const ee=g+O+G*J,ye=g+O+G*(J+1),Ce=g+(O+1)+G*(J+1),be=g+(O+1)+G*J;d.push(ee,ye,be),d.push(ye,Ce,be),k+=6}u.addGroup(x,k,F),x+=k,g+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class al extends qn{constructor(e=1,t=1,n=1,s=32,o=1,l=!1,u=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:d};const f=this;s=Math.floor(s),o=Math.floor(o);const p=[],m=[],g=[],x=[];let A=0;const _=[],v=n/2;let y=0;T(),l===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(p),this.setAttribute("position",new Dn(m,3)),this.setAttribute("normal",new Dn(g,3)),this.setAttribute("uv",new Dn(x,2));function T(){const C=new U,w=new U;let I=0;const R=(t-e)/n;for(let M=0;M<=o;M++){const F=[],B=M/o,N=B*(t-e)+e;for(let H=0;H<=s;H++){const q=H/s,Y=q*d+u,G=Math.sin(Y),K=Math.cos(Y);w.x=N*G,w.y=-B*n+v,w.z=N*K,m.push(w.x,w.y,w.z),C.set(G,R,K).normalize(),g.push(C.x,C.y,C.z),x.push(q,1-B),F.push(A++)}_.push(F)}for(let M=0;M<s;M++)for(let F=0;F<o;F++){const B=_[F][M],N=_[F+1][M],H=_[F+1][M+1],q=_[F][M+1];(e>0||F!==0)&&(p.push(B,N,q),I+=3),(t>0||F!==o-1)&&(p.push(N,H,q),I+=3)}f.addGroup(y,I,0),y+=I}function P(C){const w=A,I=new qe,R=new U;let M=0;const F=C===!0?e:t,B=C===!0?1:-1;for(let H=1;H<=s;H++)m.push(0,v*B,0),g.push(0,B,0),x.push(.5,.5),A++;const N=A;for(let H=0;H<=s;H++){const Y=H/s*d+u,G=Math.cos(Y),K=Math.sin(Y);R.x=F*K,R.y=v*B,R.z=F*G,m.push(R.x,R.y,R.z),g.push(0,B,0),I.x=G*.5+.5,I.y=K*.5*B+.5,x.push(I.x,I.y),A++}for(let H=0;H<s;H++){const q=w+H,Y=N+H;C===!0?p.push(Y,Y+1,q):p.push(Y+1,Y,q),M+=3}f.addGroup(y,M,C===!0?1:2),y+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class cp extends al{constructor(e=1,t=1,n=32,s=1,o=!1,l=0,u=Math.PI*2){super(0,e,t,n,s,o,l,u),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:l,thetaLength:u}}static fromJSON(e){return new cp(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Bc=new U,Nc=new U,Lf=new U,Uc=new Bi;class GA extends qn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),o=Math.cos(jo*t),l=e.getIndex(),u=e.getAttribute("position"),d=l?l.count:u.count,f=[0,0,0],p=["a","b","c"],m=new Array(3),g={},x=[];for(let A=0;A<d;A+=3){l?(f[0]=l.getX(A),f[1]=l.getX(A+1),f[2]=l.getX(A+2)):(f[0]=A,f[1]=A+1,f[2]=A+2);const{a:_,b:v,c:y}=Uc;if(_.fromBufferAttribute(u,f[0]),v.fromBufferAttribute(u,f[1]),y.fromBufferAttribute(u,f[2]),Uc.getNormal(Lf),m[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,m[1]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,m[2]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,!(m[0]===m[1]||m[1]===m[2]||m[2]===m[0]))for(let T=0;T<3;T++){const P=(T+1)%3,C=m[T],w=m[P],I=Uc[p[T]],R=Uc[p[P]],M=`${C}_${w}`,F=`${w}_${C}`;F in g&&g[F]?(Lf.dot(g[F].normal)<=o&&(x.push(I.x,I.y,I.z),x.push(R.x,R.y,R.z)),g[F]=null):M in g||(g[M]={index0:f[T],index1:f[P],normal:Lf.clone()})}}for(const A in g)if(g[A]){const{index0:_,index1:v}=g[A];Bc.fromBufferAttribute(u,_),Nc.fromBufferAttribute(u,v),x.push(Bc.x,Bc.y,Bc.z),x.push(Nc.x,Nc.y,Nc.z)}this.setAttribute("position",new Dn(x,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ys extends qn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const o=e/2,l=t/2,u=Math.floor(n),d=Math.floor(s),f=u+1,p=d+1,m=e/u,g=t/d,x=[],A=[],_=[],v=[];for(let y=0;y<p;y++){const T=y*g-l;for(let P=0;P<f;P++){const C=P*m-o;A.push(C,-T,0),_.push(0,0,1),v.push(P/u),v.push(1-y/d)}}for(let y=0;y<d;y++)for(let T=0;T<u;T++){const P=T+f*y,C=T+f*(y+1),w=T+1+f*(y+1),I=T+1+f*y;x.push(P,C,I),x.push(C,w,I)}this.setIndex(x),this.setAttribute("position",new Dn(A,3)),this.setAttribute("normal",new Dn(_,3)),this.setAttribute("uv",new Dn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.widthSegments,e.heightSegments)}}class cu extends qn{constructor(e=1,t=32,n=16,s=0,o=Math.PI*2,l=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:o,thetaStart:l,thetaLength:u},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const d=Math.min(l+u,Math.PI);let f=0;const p=[],m=new U,g=new U,x=[],A=[],_=[],v=[];for(let y=0;y<=n;y++){const T=[],P=y/n,C=l+P*u,w=e*Math.cos(C),I=Math.sqrt(e*e-w*w);let R=0;y===0&&l===0?R=.5/t:y===n&&d===Math.PI&&(R=-.5/t);for(let M=0;M<=t;M++){const F=M/t,B=s+F*o;m.x=-I*Math.cos(B),m.y=w,m.z=I*Math.sin(B),A.push(m.x,m.y,m.z),g.copy(m).normalize(),_.push(g.x,g.y,g.z),v.push(F+R,1-P),T.push(f++)}p.push(T)}for(let y=0;y<n;y++)for(let T=0;T<t;T++){const P=p[y][T+1],C=p[y][T],w=p[y+1][T],I=p[y+1][T+1];(y!==0||l>0)&&x.push(P,C,I),(y!==n-1||d<Math.PI)&&x.push(C,w,I)}this.setIndex(x),this.setAttribute("position",new Dn(A,3)),this.setAttribute("normal",new Dn(_,3)),this.setAttribute("uv",new Dn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function $a(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const s=a[t][n];if(B0(s))s.isRenderTargetTexture?(ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(B0(s[0])){const o=[];for(let l=0,u=s.length;l<u;l++)o[l]=s[l].clone();e[t][n]=o}else e[t][n]=s.slice();else e[t][n]=s}}return e}function $n(a){const e={};for(let t=0;t<a.length;t++){const n=$a(a[t]);for(const s in n)e[s]=n[s]}return e}function B0(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function WA(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function xv(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}const XA={clone:$a,merge:$n};var QA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends cl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=QA,this.fragmentShader=qA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$a(e.uniforms),this.uniformsGroups=WA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?t.uniforms[s]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[s]={type:"m4",value:l.toArray()}:t.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new bt().setHex(s.value);break;case"v2":this.uniforms[n].value=new qe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new nn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ft().fromArray(s.value);break;case"m4":this.uniforms[n].value=new mt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class YA extends ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jA extends cl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class KA extends cl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Bf={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(N0(a)||(this.files[a]=e))},get:function(a){if(this.enabled!==!1&&!N0(a))return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};function N0(a){try{const e=a.slice(a.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class $A{constructor(e,t,n){const s=this;let o=!1,l=0,u=0,d;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(p){u++,o===!1&&s.onStart!==void 0&&s.onStart(p,l,u),o=!0},this.itemEnd=function(p){l++,s.onProgress!==void 0&&s.onProgress(p,l,u),l===u&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return p=p.normalize("NFC"),d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,m){return f.push(p,m),this},this.removeHandler=function(p){const m=f.indexOf(p);return m!==-1&&f.splice(m,2),this},this.getHandler=function(p){for(let m=0,g=f.length;m<g;m+=2){const x=f[m],A=f[m+1];if(x.global&&(x.lastIndex=0),x.test(p))return A}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ZA=new $A;class up{constructor(e){this.manager=e!==void 0?e:ZA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,o){n.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}up.DEFAULT_MATERIAL_NAME="__DEFAULT";const Da=new WeakMap;class JA extends up{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,l=Bf.get(`image:${e}`);if(l!==void 0){if(l.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(l),o.manager.itemEnd(e)},0);else{let m=Da.get(l);m===void 0&&(m=[],Da.set(l,m)),m.push({onLoad:t,onError:s})}return l}const u=rl("img");function d(){p(),t&&t(this);const m=Da.get(this)||[];for(let g=0;g<m.length;g++){const x=m[g];x.onLoad&&x.onLoad(this)}Da.delete(this),o.manager.itemEnd(e)}function f(m){p(),s&&s(m),Bf.remove(`image:${e}`);const g=Da.get(this)||[];for(let x=0;x<g.length;x++){const A=g[x];A.onError&&A.onError(m)}Da.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function p(){u.removeEventListener("load",d,!1),u.removeEventListener("error",f,!1)}return u.addEventListener("load",d,!1),u.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),Bf.add(`image:${e}`,u),o.manager.itemStart(e),u.src=e,u}}class e_ extends up{constructor(e){super(e)}load(e,t,n,s){const o=new Qn,l=new JA(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(u){o.image=u,o.needsUpdate=!0,t!==void 0&&t(o)},n,s),o}}const Oc=new U,kc=new tn,tr=new U;let vv=class extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=rr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Oc,kc,tr),tr.x===1&&tr.y===1&&tr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,kc,tr.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Oc,kc,tr),tr.x===1&&tr.y===1&&tr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,kc,tr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};const ss=new U,U0=new qe,O0=new qe;class Li extends vv{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vh*2*Math.atan(Math.tan(jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ss.x,ss.y).multiplyScalar(-e/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ss.x,ss.y).multiplyScalar(-e/ss.z)}getViewSize(e,t){return this.getViewBounds(e,U0,O0),t.subVectors(O0,U0)}setViewOffset(e,t,n,s,o,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const d=l.fullWidth,f=l.fullHeight;o+=l.offsetX*s/d,t-=l.offsetY*n/f,s*=l.width/d,n*=l.height/f}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Su extends vv{constructor(e=-1,t=1,n=1,s=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-e,l=n+e,u=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,l=o+f*this.view.width,u-=p*this.view.offsetY,d=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,l,u,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class t_ extends qn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Fa=-90,La=1;class n_ extends _n{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Li(Fa,La,e,t);s.layers=this.layers,this.add(s);const o=new Li(Fa,La,e,t);o.layers=this.layers,this.add(o);const l=new Li(Fa,La,e,t);l.layers=this.layers,this.add(l);const u=new Li(Fa,La,e,t);u.layers=this.layers,this.add(u);const d=new Li(Fa,La,e,t);d.layers=this.layers,this.add(d);const f=new Li(Fa,La,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,o,l,u,d]=t;for(const f of t)this.remove(f);if(e===rr)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===au)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,l,u,d,f,p]=this.children,m=e.getRenderTarget(),g=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,1,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,2,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(n,3,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(n,4,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(m,g,x),e.xr.enabled=A,n.texture.needsPMREMUpdate=!0}}class i_ extends Li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class k0{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ct(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Lp=class Lp{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const o=this.elements;return o[0]=e,o[2]=t,o[1]=n,o[3]=s,this}};Lp.prototype.isMatrix2=!0;let z0=Lp;function H0(a,e,t,n){const s=r_(n);switch(t){case iv:return a*e;case sv:return a*e/s.components*s.byteLength;case xu:return a*e/s.components*s.byteLength;case Xs:return a*e*2/s.components*s.byteLength;case rp:return a*e*2/s.components*s.byteLength;case rv:return a*e*3/s.components*s.byteLength;case ti:return a*e*4/s.components*s.byteLength;case Va:return a*e*4/s.components*s.byteLength;case $c:case Zc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Jc:case eu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case hh:case mh:return Math.max(a,16)*Math.max(e,8)/4;case fh:case ph:return Math.max(a,8)*Math.max(e,8)/2;case gh:case xh:case Sh:case yh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case vh:case nu:case Ah:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case _h:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Th:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case wh:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case bh:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Fh:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Lh:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Bh:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Nh:case Uh:case Oh:return Math.ceil(a/4)*Math.ceil(e/4)*16;case kh:case zh:return Math.ceil(a/4)*Math.ceil(e/4)*8;case iu:case Hh:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function r_(a){switch(a){case Ei:case Jx:return{byteLength:1,components:1};case nl:case ev:case cr:return{byteLength:2,components:1};case np:case ip:return{byteLength:2,components:4};case ei:case tp:case Ni:return{byteLength:4,components:1};case tv:case nv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ep}}));typeof window<"u"&&(window.__THREE__?ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ep);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sv(){let a=null,e=!1,t=null,n=null;function s(o,l){t(o,l),n=a.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&a!==null&&(n=a.requestAnimationFrame(s),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){a=o}}}function s_(a){const e=new WeakMap;function t(u,d){const f=u.array,p=u.usage,m=f.byteLength,g=a.createBuffer();a.bindBuffer(d,g),a.bufferData(d,f,p),u.onUploadCallback();let x;if(f instanceof Float32Array)x=a.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)x=a.HALF_FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?x=a.HALF_FLOAT:x=a.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=a.SHORT;else if(f instanceof Uint32Array)x=a.UNSIGNED_INT;else if(f instanceof Int32Array)x=a.INT;else if(f instanceof Int8Array)x=a.BYTE;else if(f instanceof Uint8Array)x=a.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:m}}function n(u,d,f){const p=d.array,m=d.updateRanges;if(a.bindBuffer(f,u),m.length===0)a.bufferSubData(f,0,p);else{m.sort((x,A)=>x.start-A.start);let g=0;for(let x=1;x<m.length;x++){const A=m[g],_=m[x];_.start<=A.start+A.count+1?A.count=Math.max(A.count,_.start+_.count-A.start):(++g,m[g]=_)}m.length=g+1;for(let x=0,A=m.length;x<A;x++){const _=m[x];a.bufferSubData(f,_.start*p.BYTES_PER_ELEMENT,p,_.start,_.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(a.deleteBuffer(d.buffer),e.delete(u))}function l(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const f=e.get(u);if(f===void 0)e.set(u,t(u,d));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,u,d),f.version=u.version}}return{get:s,remove:o,update:l}}var a_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,o_=`#ifdef USE_ALPHAHASH
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
#endif`,l_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,c_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f_=`#ifdef USE_AOMAP
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
#endif`,h_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,p_=`#ifdef USE_BATCHING
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
#endif`,m_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,g_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,x_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,S_=`#ifdef USE_IRIDESCENCE
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
#endif`,y_=`#ifdef USE_BUMPMAP
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
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,__=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,T_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,w_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,b_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,R_=`#define PI 3.141592653589793
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
} // validated`,I_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,P_=`vec3 transformedNormal = objectNormal;
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
#endif`,D_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N_="gl_FragColor = linearToOutputTexel( gl_FragColor );",U_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,O_=`#ifdef USE_ENVMAP
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
#endif`,k_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,z_=`#ifdef USE_ENVMAP
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
#endif`,H_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V_=`#ifdef USE_ENVMAP
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
#endif`,G_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,W_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,q_=`#ifdef USE_GRADIENTMAP
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
}`,Y_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Z_=`#ifdef USE_ENVMAP
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
#endif`,J_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iE=`PhysicalMaterial material;
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
#endif`,rE=`uniform sampler2D dfgLUT;
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
}`,sE=`
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
#endif`,aE=`#if defined( RE_IndirectDiffuse )
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
#endif`,oE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lE=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,cE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gE=`#if defined( USE_POINTS_UV )
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
#endif`,xE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_E=`#ifdef USE_MORPHTARGETS
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
#endif`,EE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ME=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,CE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,TE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,RE=`#ifdef USE_NORMALMAP
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
#endif`,IE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,DE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,NE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,XE=`float getShadowMask() {
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
}`,QE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qE=`#ifdef USE_SKINNING
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
#endif`,YE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jE=`#ifdef USE_SKINNING
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
#endif`,KE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$E=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eM=`#ifdef USE_TRANSMISSION
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
#endif`,tM=`#ifdef USE_TRANSMISSION
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
#endif`,nM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oM=`uniform sampler2D t2D;
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
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fM=`#include <common>
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
}`,hM=`#if DEPTH_PACKING == 3200
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
}`,pM=`#define DISTANCE
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
}`,mM=`#define DISTANCE
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
}`,gM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vM=`uniform float scale;
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
}`,SM=`uniform vec3 diffuse;
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
}`,yM=`#include <common>
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
}`,AM=`uniform vec3 diffuse;
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
}`,_M=`#define LAMBERT
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
}`,EM=`#define LAMBERT
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
}`,MM=`#define MATCAP
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
}`,CM=`#define MATCAP
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
}`,TM=`#define NORMAL
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
}`,wM=`#define NORMAL
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
}`,bM=`#define PHONG
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
}`,RM=`#define PHONG
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
}`,IM=`#define STANDARD
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
}`,PM=`#define STANDARD
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
}`,DM=`#define TOON
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
}`,FM=`#define TOON
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
}`,LM=`uniform float size;
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
}`,BM=`uniform vec3 diffuse;
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
}`,NM=`#include <common>
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
}`,UM=`uniform vec3 color;
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
}`,OM=`uniform float rotation;
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
}`,kM=`uniform vec3 diffuse;
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
}`,At={alphahash_fragment:a_,alphahash_pars_fragment:o_,alphamap_fragment:l_,alphamap_pars_fragment:c_,alphatest_fragment:u_,alphatest_pars_fragment:d_,aomap_fragment:f_,aomap_pars_fragment:h_,batching_pars_vertex:p_,batching_vertex:m_,begin_vertex:g_,beginnormal_vertex:x_,bsdfs:v_,iridescence_fragment:S_,bumpmap_pars_fragment:y_,clipping_planes_fragment:A_,clipping_planes_pars_fragment:__,clipping_planes_pars_vertex:E_,clipping_planes_vertex:M_,color_fragment:C_,color_pars_fragment:T_,color_pars_vertex:w_,color_vertex:b_,common:R_,cube_uv_reflection_fragment:I_,defaultnormal_vertex:P_,displacementmap_pars_vertex:D_,displacementmap_vertex:F_,emissivemap_fragment:L_,emissivemap_pars_fragment:B_,colorspace_fragment:N_,colorspace_pars_fragment:U_,envmap_fragment:O_,envmap_common_pars_fragment:k_,envmap_pars_fragment:z_,envmap_pars_vertex:H_,envmap_physical_pars_fragment:Z_,envmap_vertex:V_,fog_vertex:G_,fog_pars_vertex:W_,fog_fragment:X_,fog_pars_fragment:Q_,gradientmap_pars_fragment:q_,lightmap_pars_fragment:Y_,lights_lambert_fragment:j_,lights_lambert_pars_fragment:K_,lights_pars_begin:$_,lights_toon_fragment:J_,lights_toon_pars_fragment:eE,lights_phong_fragment:tE,lights_phong_pars_fragment:nE,lights_physical_fragment:iE,lights_physical_pars_fragment:rE,lights_fragment_begin:sE,lights_fragment_maps:aE,lights_fragment_end:oE,lightprobes_pars_fragment:lE,logdepthbuf_fragment:cE,logdepthbuf_pars_fragment:uE,logdepthbuf_pars_vertex:dE,logdepthbuf_vertex:fE,map_fragment:hE,map_pars_fragment:pE,map_particle_fragment:mE,map_particle_pars_fragment:gE,metalnessmap_fragment:xE,metalnessmap_pars_fragment:vE,morphinstance_vertex:SE,morphcolor_vertex:yE,morphnormal_vertex:AE,morphtarget_pars_vertex:_E,morphtarget_vertex:EE,normal_fragment_begin:ME,normal_fragment_maps:CE,normal_pars_fragment:TE,normal_pars_vertex:wE,normal_vertex:bE,normalmap_pars_fragment:RE,clearcoat_normal_fragment_begin:IE,clearcoat_normal_fragment_maps:PE,clearcoat_pars_fragment:DE,iridescence_pars_fragment:FE,opaque_fragment:LE,packing:BE,premultiplied_alpha_fragment:NE,project_vertex:UE,dithering_fragment:OE,dithering_pars_fragment:kE,roughnessmap_fragment:zE,roughnessmap_pars_fragment:HE,shadowmap_pars_fragment:VE,shadowmap_pars_vertex:GE,shadowmap_vertex:WE,shadowmask_pars_fragment:XE,skinbase_vertex:QE,skinning_pars_vertex:qE,skinning_vertex:YE,skinnormal_vertex:jE,specularmap_fragment:KE,specularmap_pars_fragment:$E,tonemapping_fragment:ZE,tonemapping_pars_fragment:JE,transmission_fragment:eM,transmission_pars_fragment:tM,uv_pars_fragment:nM,uv_pars_vertex:iM,uv_vertex:rM,worldpos_vertex:sM,background_vert:aM,background_frag:oM,backgroundCube_vert:lM,backgroundCube_frag:cM,cube_vert:uM,cube_frag:dM,depth_vert:fM,depth_frag:hM,distance_vert:pM,distance_frag:mM,equirect_vert:gM,equirect_frag:xM,linedashed_vert:vM,linedashed_frag:SM,meshbasic_vert:yM,meshbasic_frag:AM,meshlambert_vert:_M,meshlambert_frag:EM,meshmatcap_vert:MM,meshmatcap_frag:CM,meshnormal_vert:TM,meshnormal_frag:wM,meshphong_vert:bM,meshphong_frag:RM,meshphysical_vert:IM,meshphysical_frag:PM,meshtoon_vert:DM,meshtoon_frag:FM,points_vert:LM,points_frag:BM,shadow_vert:NM,shadow_frag:UM,sprite_vert:OM,sprite_frag:kM},Ve={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},ir={basic:{uniforms:$n([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:$n([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new bt(0)},envMapIntensity:{value:1}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:$n([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:$n([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:$n([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new bt(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:$n([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:$n([Ve.points,Ve.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:$n([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:$n([Ve.common,Ve.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:$n([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:$n([Ve.sprite,Ve.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distance:{uniforms:$n([Ve.common,Ve.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distance_vert,fragmentShader:At.distance_frag},shadow:{uniforms:$n([Ve.lights,Ve.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};ir.physical={uniforms:$n([ir.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};const zc={r:0,b:0,g:0},zM=new mt,yv=new ft;yv.set(-1,0,0,0,1,0,0,0,1);function HM(a,e,t,n,s,o){const l=new bt(0);let u=s===!0?0:1,d,f,p=null,m=0,g=null;function x(T){let P=T.isScene===!0?T.background:null;if(P&&P.isTexture){const C=T.backgroundBlurriness>0;P=e.get(P,C)}return P}function A(T){let P=!1;const C=x(T);C===null?v(l,u):C&&C.isColor&&(v(C,1),P=!0);const w=a.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(a.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function _(T,P){const C=x(P);C&&(C.isCubeTexture||C.mapping===gu)?(f===void 0&&(f=new en(new hs(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:$a(ir.backgroundCube.uniforms),vertexShader:ir.backgroundCube.vertexShader,fragmentShader:ir.backgroundCube.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(w,I,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(f)),f.material.uniforms.envMap.value=C,f.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(zM.makeRotationFromEuler(P.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply(yv),f.material.toneMapped=It.getTransfer(C.colorSpace)!==Wt,(p!==C||m!==C.version||g!==a.toneMapping)&&(f.material.needsUpdate=!0,p=C,m=C.version,g=a.toneMapping),f.layers.enableAll(),T.unshift(f,f.geometry,f.material,0,0,null)):C&&C.isTexture&&(d===void 0&&(d=new en(new Ys(2,2),new ni({name:"BackgroundMaterial",uniforms:$a(ir.background.uniforms),vertexShader:ir.background.vertexShader,fragmentShader:ir.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(d)),d.material.uniforms.t2D.value=C,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.toneMapped=It.getTransfer(C.colorSpace)!==Wt,C.matrixAutoUpdate===!0&&C.updateMatrix(),d.material.uniforms.uvTransform.value.copy(C.matrix),(p!==C||m!==C.version||g!==a.toneMapping)&&(d.material.needsUpdate=!0,p=C,m=C.version,g=a.toneMapping),d.layers.enableAll(),T.unshift(d,d.geometry,d.material,0,0,null))}function v(T,P){T.getRGB(zc,xv(a)),t.buffers.color.setClear(zc.r,zc.g,zc.b,P,o)}function y(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return l},setClearColor:function(T,P=1){l.set(T),u=P,v(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(T){u=T,v(l,u)},render:A,addToRenderList:_,dispose:y}}function VM(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},s=g(null);let o=s,l=!1;function u(N,H,q,Y,G){let K=!1;const j=m(N,Y,q,H);o!==j&&(o=j,f(o.object)),K=x(N,Y,q,G),K&&A(N,Y,q,G),G!==null&&e.update(G,a.ELEMENT_ARRAY_BUFFER),(K||l)&&(l=!1,C(N,H,q,Y),G!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function d(){return a.createVertexArray()}function f(N){return a.bindVertexArray(N)}function p(N){return a.deleteVertexArray(N)}function m(N,H,q,Y){const G=Y.wireframe===!0;let K=n[H.id];K===void 0&&(K={},n[H.id]=K);const j=N.isInstancedMesh===!0?N.id:0;let k=K[j];k===void 0&&(k={},K[j]=k);let Q=k[q.id];Q===void 0&&(Q={},k[q.id]=Q);let J=Q[G];return J===void 0&&(J=g(d()),Q[G]=J),J}function g(N){const H=[],q=[],Y=[];for(let G=0;G<t;G++)H[G]=0,q[G]=0,Y[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:q,attributeDivisors:Y,object:N,attributes:{},index:null}}function x(N,H,q,Y){const G=o.attributes,K=H.attributes;let j=0;const k=q.getAttributes();for(const Q in k)if(k[Q].location>=0){const O=G[Q];let ee=K[Q];if(ee===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor)),O===void 0||O.attribute!==ee||ee&&O.data!==ee.data)return!0;j++}return o.attributesNum!==j||o.index!==Y}function A(N,H,q,Y){const G={},K=H.attributes;let j=0;const k=q.getAttributes();for(const Q in k)if(k[Q].location>=0){let O=K[Q];O===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(O=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(O=N.instanceColor));const ee={};ee.attribute=O,O&&O.data&&(ee.data=O.data),G[Q]=ee,j++}o.attributes=G,o.attributesNum=j,o.index=Y}function _(){const N=o.newAttributes;for(let H=0,q=N.length;H<q;H++)N[H]=0}function v(N){y(N,0)}function y(N,H){const q=o.newAttributes,Y=o.enabledAttributes,G=o.attributeDivisors;q[N]=1,Y[N]===0&&(a.enableVertexAttribArray(N),Y[N]=1),G[N]!==H&&(a.vertexAttribDivisor(N,H),G[N]=H)}function T(){const N=o.newAttributes,H=o.enabledAttributes;for(let q=0,Y=H.length;q<Y;q++)H[q]!==N[q]&&(a.disableVertexAttribArray(q),H[q]=0)}function P(N,H,q,Y,G,K,j){j===!0?a.vertexAttribIPointer(N,H,q,G,K):a.vertexAttribPointer(N,H,q,Y,G,K)}function C(N,H,q,Y){_();const G=Y.attributes,K=q.getAttributes(),j=H.defaultAttributeValues;for(const k in K){const Q=K[k];if(Q.location>=0){let J=G[k];if(J===void 0&&(k==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),k==="instanceColor"&&N.instanceColor&&(J=N.instanceColor)),J!==void 0){const O=J.normalized,ee=J.itemSize,ye=e.get(J);if(ye===void 0)continue;const Ce=ye.buffer,be=ye.type,se=ye.bytesPerElement,xe=be===a.INT||be===a.UNSIGNED_INT||J.gpuType===tp;if(J.isInterleavedBufferAttribute){const pe=J.data,Re=pe.stride,Oe=J.offset;if(pe.isInstancedInterleavedBuffer){for(let Ge=0;Ge<Q.locationSize;Ge++)y(Q.location+Ge,pe.meshPerAttribute);N.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ge=0;Ge<Q.locationSize;Ge++)v(Q.location+Ge);a.bindBuffer(a.ARRAY_BUFFER,Ce);for(let Ge=0;Ge<Q.locationSize;Ge++)P(Q.location+Ge,ee/Q.locationSize,be,O,Re*se,(Oe+ee/Q.locationSize*Ge)*se,xe)}else{if(J.isInstancedBufferAttribute){for(let pe=0;pe<Q.locationSize;pe++)y(Q.location+pe,J.meshPerAttribute);N.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let pe=0;pe<Q.locationSize;pe++)v(Q.location+pe);a.bindBuffer(a.ARRAY_BUFFER,Ce);for(let pe=0;pe<Q.locationSize;pe++)P(Q.location+pe,ee/Q.locationSize,be,O,ee*se,ee/Q.locationSize*pe*se,xe)}}else if(j!==void 0){const O=j[k];if(O!==void 0)switch(O.length){case 2:a.vertexAttrib2fv(Q.location,O);break;case 3:a.vertexAttrib3fv(Q.location,O);break;case 4:a.vertexAttrib4fv(Q.location,O);break;default:a.vertexAttrib1fv(Q.location,O)}}}}T()}function w(){F();for(const N in n){const H=n[N];for(const q in H){const Y=H[q];for(const G in Y){const K=Y[G];for(const j in K)p(K[j].object),delete K[j];delete Y[G]}}delete n[N]}}function I(N){if(n[N.id]===void 0)return;const H=n[N.id];for(const q in H){const Y=H[q];for(const G in Y){const K=Y[G];for(const j in K)p(K[j].object),delete K[j];delete Y[G]}}delete n[N.id]}function R(N){for(const H in n){const q=n[H];for(const Y in q){const G=q[Y];if(G[N.id]===void 0)continue;const K=G[N.id];for(const j in K)p(K[j].object),delete K[j];delete G[N.id]}}}function M(N){for(const H in n){const q=n[H],Y=N.isInstancedMesh===!0?N.id:0,G=q[Y];if(G!==void 0){for(const K in G){const j=G[K];for(const k in j)p(j[k].object),delete j[k];delete G[K]}delete q[Y],Object.keys(q).length===0&&delete n[H]}}}function F(){B(),l=!0,o!==s&&(o=s,f(o.object))}function B(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:F,resetDefaultState:B,dispose:w,releaseStatesOfGeometry:I,releaseStatesOfObject:M,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:v,disableUnusedAttributes:T}}function GM(a,e,t){let n;function s(d){n=d}function o(d,f){a.drawArrays(n,d,f),t.update(f,n,1)}function l(d,f,p){p!==0&&(a.drawArraysInstanced(n,d,f,p),t.update(f,n,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,f,0,p);let g=0;for(let x=0;x<p;x++)g+=f[x];t.update(g,n,1)}this.setMode=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=u}function WM(a,e,t,n){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=a.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(R){return!(R!==ti&&n.convert(R)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(R){const M=R===cr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Ei&&n.convert(R)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ni&&!M)}function d(R){if(R==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const p=d(f);p!==f&&(ht("WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const m=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),A=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=a.getParameter(a.MAX_TEXTURE_SIZE),v=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),y=a.getParameter(a.MAX_VERTEX_ATTRIBS),T=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),P=a.getParameter(a.MAX_VARYING_VECTORS),C=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),w=a.getParameter(a.MAX_SAMPLES),I=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:d,textureFormatReadable:l,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:m,reversedDepthBuffer:g,maxTextures:x,maxVertexTextures:A,maxTextureSize:_,maxCubemapSize:v,maxAttributes:y,maxVertexUniforms:T,maxVaryings:P,maxFragmentUniforms:C,maxSamples:w,samples:I}}function XM(a){const e=this;let t=null,n=0,s=!1,o=!1;const l=new os,u=new ft,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const x=m.length!==0||g||n!==0||s;return s=g,n=m.length,x},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,g){t=p(m,g,0)},this.setState=function(m,g,x){const A=m.clippingPlanes,_=m.clipIntersection,v=m.clipShadows,y=a.get(m);if(!s||A===null||A.length===0||o&&!v)o?p(null):f();else{const T=o?0:n,P=T*4;let C=y.clippingState||null;d.value=C,C=p(A,g,P,x);for(let w=0;w!==P;++w)C[w]=t[w];y.clippingState=C,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function f(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(m,g,x,A){const _=m!==null?m.length:0;let v=null;if(_!==0){if(v=d.value,A!==!0||v===null){const y=x+_*4,T=g.matrixWorldInverse;u.getNormalMatrix(T),(v===null||v.length<y)&&(v=new Float32Array(y));for(let P=0,C=x;P!==_;++P,C+=4)l.copy(m[P]).applyMatrix4(T,u),l.normal.toArray(v,C),v[C+3]=l.constant}d.value=v,d.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,v}}const ds=4,V0=[.125,.215,.35,.446,.526,.582],Os=20,QM=256,Go=new Su,G0=new bt;let Nf=null,Uf=0,Of=0,kf=!1;const qM=new U;class W0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,o={}){const{size:l=256,position:u=qM}=o;Nf=this._renderer.getRenderTarget(),Uf=this._renderer.getActiveCubeFace(),Of=this._renderer.getActiveMipmapLevel(),kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,n,s,d,u),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=q0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Q0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nf,Uf,Of),this._renderer.xr.enabled=kf,e.scissorTest=!1,Ba(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ws||e.mapping===Ka?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nf=this._renderer.getRenderTarget(),Uf=this._renderer.getActiveCubeFace(),Of=this._renderer.getActiveMipmapLevel(),kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:cr,format:ti,colorSpace:ru,depthBuffer:!1},s=X0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=X0(e,t,n);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=YM(o)),this._blurMaterial=KM(o,e,t),this._ggxMaterial=jM(o,e,t)}return s}_compileMaterial(e){const t=new en(new qn,e);this._renderer.compile(t,Go)}_sceneToCubeUV(e,t,n,s,o){const d=new Li(90,1,t,n),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,x=m.toneMapping;m.getClearColor(G0),m.toneMapping=or,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new en(new hs,new dr({name:"PMREM.Background",side:pi,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,v=_.material;let y=!1;const T=e.background;T?T.isColor&&(v.color.copy(T),e.background=null,y=!0):(v.color.copy(G0),y=!0);for(let P=0;P<6;P++){const C=P%3;C===0?(d.up.set(0,f[P],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x+p[P],o.y,o.z)):C===1?(d.up.set(0,0,f[P]),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y+p[P],o.z)):(d.up.set(0,f[P],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y,o.z+p[P]));const w=this._cubeSize;Ba(s,C*w,P>2?w:0,w,w),m.setRenderTarget(s),y&&m.render(_,d),m.render(e,d)}m.toneMapping=x,m.autoClear=g,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ws||e.mapping===Ka;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=q0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Q0());const o=s?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=o;const u=o.uniforms;u.envMap.value=e;const d=this._cubeSize;Ba(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(l,Go)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,o=this._pingPongRenderTarget,l=this._ggxMaterial,u=this._lodMeshes[n];u.material=l;const d=l.uniforms,f=n/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),m=Math.sqrt(f*f-p*p),g=0+f*1.25,x=m*g,{_lodMax:A}=this,_=this._sizeLods[n],v=3*_*(n>A-ds?n-A+ds:0),y=4*(this._cubeSize-_);d.envMap.value=e.texture,d.roughness.value=x,d.mipInt.value=A-t,Ba(o,v,y,3*_,2*_),s.setRenderTarget(o),s.render(u,Go),d.envMap.value=o.texture,d.roughness.value=0,d.mipInt.value=A-n,Ba(e,v,y,3*_,2*_),s.setRenderTarget(e),s.render(u,Go)}_blur(e,t,n,s,o){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,s,"latitudinal",o),this._halfBlur(l,e,n,n,s,"longitudinal",o)}_halfBlur(e,t,n,s,o,l,u){const d=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&Lt("blur direction must be either latitudinal or longitudinal!");const p=3,m=this._lodMeshes[s];m.material=f;const g=f.uniforms,x=this._sizeLods[n]-1,A=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*Os-1),_=o/A,v=isFinite(o)?1+Math.floor(p*_):Os;v>Os&&ht(`sigmaRadians, ${o}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Os}`);const y=[];let T=0;for(let R=0;R<Os;++R){const M=R/_,F=Math.exp(-M*M/2);y.push(F),R===0?T+=F:R<v&&(T+=2*F)}for(let R=0;R<y.length;R++)y[R]=y[R]/T;g.envMap.value=e.texture,g.samples.value=v,g.weights.value=y,g.latitudinal.value=l==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:P}=this;g.dTheta.value=A,g.mipInt.value=P-n;const C=this._sizeLods[s],w=3*C*(s>P-ds?s-P+ds:0),I=4*(this._cubeSize-C);Ba(t,w,I,3*C,2*C),d.setRenderTarget(t),d.render(m,Go)}}function YM(a){const e=[],t=[],n=[];let s=a;const o=a-ds+1+V0.length;for(let l=0;l<o;l++){const u=Math.pow(2,s);e.push(u);let d=1/u;l>a-ds?d=V0[l-a+ds-1]:l===0&&(d=0),t.push(d);const f=1/(u-2),p=-f,m=1+f,g=[p,p,m,p,m,m,p,p,m,m,p,m],x=6,A=6,_=3,v=2,y=1,T=new Float32Array(_*A*x),P=new Float32Array(v*A*x),C=new Float32Array(y*A*x);for(let I=0;I<x;I++){const R=I%3*2/3-1,M=I>2?0:-1,F=[R,M,0,R+2/3,M,0,R+2/3,M+1,0,R,M,0,R+2/3,M+1,0,R,M+1,0];T.set(F,_*A*I),P.set(g,v*A*I);const B=[I,I,I,I,I,I];C.set(B,y*A*I)}const w=new qn;w.setAttribute("position",new Ui(T,_)),w.setAttribute("uv",new Ui(P,v)),w.setAttribute("faceIndex",new Ui(C,y)),n.push(new en(w,null)),s>ds&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function X0(a,e,t){const n=new ji(a,e,t);return n.texture.mapping=gu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ba(a,e,t,n,s){a.viewport.set(e,t,n,s),a.scissor.set(e,t,n,s)}function jM(a,e,t){return new ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:QM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yu(),fragmentShader:`

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
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function KM(a,e,t){const n=new Float32Array(Os),s=new U(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yu(),fragmentShader:`

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
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function Q0(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yu(),fragmentShader:`

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
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function q0(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function yu(){return`

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
	`}class Av extends ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new mv(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new hs(5,5,5),o=new ni({name:"CubemapFromEquirect",uniforms:$a(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pi,blending:Dr});o.uniforms.tEquirect.value=t;const l=new en(s,o),u=t.minFilter;return t.minFilter===Hs&&(t.minFilter=Xn),new n_(1,10,this).update(e,l),t.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,s);e.setRenderTarget(o)}}function $M(a){let e=new WeakMap,t=new WeakMap,n=null;function s(g,x=!1){return g==null?null:x?l(g):o(g)}function o(g){if(g&&g.isTexture){const x=g.mapping;if(x===of||x===lf)if(e.has(g)){const A=e.get(g).texture;return u(A,g.mapping)}else{const A=g.image;if(A&&A.height>0){const _=new Av(A.height);return _.fromEquirectangularTexture(a,g),e.set(g,_),g.addEventListener("dispose",f),u(_.texture,g.mapping)}else return null}}return g}function l(g){if(g&&g.isTexture){const x=g.mapping,A=x===of||x===lf,_=x===Ws||x===Ka;if(A||_){let v=t.get(g);const y=v!==void 0?v.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return n===null&&(n=new W0(a)),v=A?n.fromEquirectangular(g,v):n.fromCubemap(g,v),v.texture.pmremVersion=g.pmremVersion,t.set(g,v),v.texture;if(v!==void 0)return v.texture;{const T=g.image;return A&&T&&T.height>0||_&&T&&d(T)?(n===null&&(n=new W0(a)),v=A?n.fromEquirectangular(g):n.fromCubemap(g),v.texture.pmremVersion=g.pmremVersion,t.set(g,v),g.addEventListener("dispose",p),v.texture):null}}}return g}function u(g,x){return x===of?g.mapping=Ws:x===lf&&(g.mapping=Ka),g}function d(g){let x=0;const A=6;for(let _=0;_<A;_++)g[_]!==void 0&&x++;return x===A}function f(g){const x=g.target;x.removeEventListener("dispose",f);const A=e.get(x);A!==void 0&&(e.delete(x),A.dispose())}function p(g){const x=g.target;x.removeEventListener("dispose",p);const A=t.get(x);A!==void 0&&(t.delete(x),A.dispose())}function m(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function ZM(a){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=a.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ga("WebGLRenderer: "+n+" extension not supported."),s}}}function JM(a,e,t,n){const s={},o=new WeakMap;function l(m){const g=m.target;g.index!==null&&e.remove(g.index);for(const A in g.attributes)e.remove(g.attributes[A]);g.removeEventListener("dispose",l),delete s[g.id];const x=o.get(g);x&&(e.remove(x),o.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function u(m,g){return s[g.id]===!0||(g.addEventListener("dispose",l),s[g.id]=!0,t.memory.geometries++),g}function d(m){const g=m.attributes;for(const x in g)e.update(g[x],a.ARRAY_BUFFER)}function f(m){const g=[],x=m.index,A=m.attributes.position;let _=0;if(A===void 0)return;if(x!==null){const T=x.array;_=x.version;for(let P=0,C=T.length;P<C;P+=3){const w=T[P+0],I=T[P+1],R=T[P+2];g.push(w,I,I,R,R,w)}}else{const T=A.array;_=A.version;for(let P=0,C=T.length/3-1;P<C;P+=3){const w=P+0,I=P+1,R=P+2;g.push(w,I,I,R,R,w)}}const v=new(A.count>=65535?fv:dv)(g,1);v.version=_;const y=o.get(m);y&&e.remove(y),o.set(m,v)}function p(m){const g=o.get(m);if(g){const x=m.index;x!==null&&g.version<x.version&&f(m)}else f(m);return o.get(m)}return{get:u,update:d,getWireframeAttribute:p}}function eC(a,e,t){let n;function s(m){n=m}let o,l;function u(m){o=m.type,l=m.bytesPerElement}function d(m,g){a.drawElements(n,g,o,m*l),t.update(g,n,1)}function f(m,g,x){x!==0&&(a.drawElementsInstanced(n,g,o,m*l,x),t.update(g,n,x))}function p(m,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,o,m,0,x);let _=0;for(let v=0;v<x;v++)_+=g[v];t.update(_,n,1)}this.setMode=s,this.setIndex=u,this.render=d,this.renderInstances=f,this.renderMultiDraw=p}function tC(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,l,u){switch(t.calls++,l){case a.TRIANGLES:t.triangles+=u*(o/3);break;case a.LINES:t.lines+=u*(o/2);break;case a.LINE_STRIP:t.lines+=u*(o-1);break;case a.LINE_LOOP:t.lines+=u*o;break;case a.POINTS:t.points+=u*o;break;default:Lt("WebGLInfo: Unknown draw mode:",l);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function nC(a,e,t){const n=new WeakMap,s=new nn;function o(l,u,d){const f=l.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=p!==void 0?p.length:0;let g=n.get(u);if(g===void 0||g.count!==m){let B=function(){M.dispose(),n.delete(u),u.removeEventListener("dispose",B)};var x=B;g!==void 0&&g.texture.dispose();const A=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let C=0;A===!0&&(C=1),_===!0&&(C=2),v===!0&&(C=3);let w=u.attributes.position.count*C,I=1;w>e.maxTextureSize&&(I=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const R=new Float32Array(w*I*4*m),M=new lv(R,w,I,m);M.type=Ni,M.needsUpdate=!0;const F=C*4;for(let N=0;N<m;N++){const H=y[N],q=T[N],Y=P[N],G=w*I*4*N;for(let K=0;K<H.count;K++){const j=K*F;A===!0&&(s.fromBufferAttribute(H,K),R[G+j+0]=s.x,R[G+j+1]=s.y,R[G+j+2]=s.z,R[G+j+3]=0),_===!0&&(s.fromBufferAttribute(q,K),R[G+j+4]=s.x,R[G+j+5]=s.y,R[G+j+6]=s.z,R[G+j+7]=0),v===!0&&(s.fromBufferAttribute(Y,K),R[G+j+8]=s.x,R[G+j+9]=s.y,R[G+j+10]=s.z,R[G+j+11]=Y.itemSize===4?s.w:1)}}g={count:m,texture:M,size:new qe(w,I)},n.set(u,g),u.addEventListener("dispose",B)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)d.getUniforms().setValue(a,"morphTexture",l.morphTexture,t);else{let A=0;for(let v=0;v<f.length;v++)A+=f[v];const _=u.morphTargetsRelative?1:1-A;d.getUniforms().setValue(a,"morphTargetBaseInfluence",_),d.getUniforms().setValue(a,"morphTargetInfluences",f)}d.getUniforms().setValue(a,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(a,"morphTargetsTextureSize",g.size)}return{update:o}}function iC(a,e,t,n,s){let o=new WeakMap;function l(f){const p=s.render.frame,m=f.geometry,g=e.get(f,m);if(o.get(g)!==p&&(e.update(g),o.set(g,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",d)===!1&&f.addEventListener("dispose",d),o.get(f)!==p&&(t.update(f.instanceMatrix,a.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,a.ARRAY_BUFFER),o.set(f,p))),f.isSkinnedMesh){const x=f.skeleton;o.get(x)!==p&&(x.update(),o.set(x,p))}return g}function u(){o=new WeakMap}function d(f){const p=f.target;p.removeEventListener("dispose",d),n.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}const rC={[Xx]:"LINEAR_TONE_MAPPING",[Qx]:"REINHARD_TONE_MAPPING",[qx]:"CINEON_TONE_MAPPING",[Yx]:"ACES_FILMIC_TONE_MAPPING",[Kx]:"AGX_TONE_MAPPING",[$x]:"NEUTRAL_TONE_MAPPING",[jx]:"CUSTOM_TONE_MAPPING"};function sC(a,e,t,n,s,o){const l=new ji(e,t,{type:a,depthBuffer:s,stencilBuffer:o,samples:n?4:0,depthTexture:s?new qs(e,t):void 0}),u=new ji(e,t,{type:cr,depthBuffer:!1,stencilBuffer:!1}),d=new qn;d.setAttribute("position",new Dn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Dn([0,2,0,0,2,0],2));const f=new YA({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new en(d,f),m=new Su(-1,1,1,-1,0,1);let g=null,x=null,A=!1,_,v=null,y=[],T=!1;this.setSize=function(P,C){l.setSize(P,C),u.setSize(P,C);for(let w=0;w<y.length;w++){const I=y[w];I.setSize&&I.setSize(P,C)}},this.setEffects=function(P){y=P,T=y.length>0&&y[0].isRenderPass===!0;const C=l.width,w=l.height;for(let I=0;I<y.length;I++){const R=y[I];R.setSize&&R.setSize(C,w)}},this.begin=function(P,C){if(A||P.toneMapping===or&&y.length===0)return!1;if(v=C,C!==null){const w=C.width,I=C.height;(l.width!==w||l.height!==I)&&this.setSize(w,I)}return T===!1&&P.setRenderTarget(l),_=P.toneMapping,P.toneMapping=or,!0},this.hasRenderPass=function(){return T},this.end=function(P,C){P.toneMapping=_,A=!0;let w=l,I=u;for(let R=0;R<y.length;R++){const M=y[R];if(M.enabled!==!1&&(M.render(P,I,w,C),M.needsSwap!==!1)){const F=w;w=I,I=F}}if(g!==P.outputColorSpace||x!==P.toneMapping){g=P.outputColorSpace,x=P.toneMapping,f.defines={},It.getTransfer(g)===Wt&&(f.defines.SRGB_TRANSFER="");const R=rC[x];R&&(f.defines[R]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=w.texture,P.setRenderTarget(v),P.render(p,m),v=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),u.dispose(),d.dispose(),f.dispose()}}const _v=new Qn,Gh=new qs(1,1),Ev=new lv,Mv=new SA,Cv=new mv,Y0=[],j0=[],K0=new Float32Array(16),$0=new Float32Array(9),Z0=new Float32Array(4);function Ja(a,e,t){const n=a[0];if(n<=0||n>0)return a;const s=e*t;let o=Y0[s];if(o===void 0&&(o=new Float32Array(s),Y0[s]=o),e!==0){n.toArray(o,0);for(let l=1,u=0;l!==e;++l)u+=t,a[l].toArray(o,u)}return o}function Tn(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function wn(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Au(a,e){let t=j0[e];t===void 0&&(t=new Int32Array(e),j0[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function aC(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function oC(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;a.uniform2fv(this.addr,e),wn(t,e)}}function lC(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tn(t,e))return;a.uniform3fv(this.addr,e),wn(t,e)}}function cC(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;a.uniform4fv(this.addr,e),wn(t,e)}}function uC(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tn(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),wn(t,e)}else{if(Tn(t,n))return;Z0.set(n),a.uniformMatrix2fv(this.addr,!1,Z0),wn(t,n)}}function dC(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tn(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),wn(t,e)}else{if(Tn(t,n))return;$0.set(n),a.uniformMatrix3fv(this.addr,!1,$0),wn(t,n)}}function fC(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tn(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),wn(t,e)}else{if(Tn(t,n))return;K0.set(n),a.uniformMatrix4fv(this.addr,!1,K0),wn(t,n)}}function hC(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function pC(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;a.uniform2iv(this.addr,e),wn(t,e)}}function mC(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;a.uniform3iv(this.addr,e),wn(t,e)}}function gC(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;a.uniform4iv(this.addr,e),wn(t,e)}}function xC(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function vC(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;a.uniform2uiv(this.addr,e),wn(t,e)}}function SC(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;a.uniform3uiv(this.addr,e),wn(t,e)}}function yC(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;a.uniform4uiv(this.addr,e),wn(t,e)}}function AC(a,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(a.uniform1i(this.addr,s),n[0]=s);let o;this.type===a.SAMPLER_2D_SHADOW?(Gh.compareFunction=t.isReversedDepthBuffer()?ap:sp,o=Gh):o=_v,t.setTexture2D(e||o,s)}function _C(a,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(a.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Mv,s)}function EC(a,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(a.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Cv,s)}function MC(a,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(a.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ev,s)}function CC(a){switch(a){case 5126:return aC;case 35664:return oC;case 35665:return lC;case 35666:return cC;case 35674:return uC;case 35675:return dC;case 35676:return fC;case 5124:case 35670:return hC;case 35667:case 35671:return pC;case 35668:case 35672:return mC;case 35669:case 35673:return gC;case 5125:return xC;case 36294:return vC;case 36295:return SC;case 36296:return yC;case 35678:case 36198:case 36298:case 36306:case 35682:return AC;case 35679:case 36299:case 36307:return _C;case 35680:case 36300:case 36308:case 36293:return EC;case 36289:case 36303:case 36311:case 36292:return MC}}function TC(a,e){a.uniform1fv(this.addr,e)}function wC(a,e){const t=Ja(e,this.size,2);a.uniform2fv(this.addr,t)}function bC(a,e){const t=Ja(e,this.size,3);a.uniform3fv(this.addr,t)}function RC(a,e){const t=Ja(e,this.size,4);a.uniform4fv(this.addr,t)}function IC(a,e){const t=Ja(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function PC(a,e){const t=Ja(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function DC(a,e){const t=Ja(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function FC(a,e){a.uniform1iv(this.addr,e)}function LC(a,e){a.uniform2iv(this.addr,e)}function BC(a,e){a.uniform3iv(this.addr,e)}function NC(a,e){a.uniform4iv(this.addr,e)}function UC(a,e){a.uniform1uiv(this.addr,e)}function OC(a,e){a.uniform2uiv(this.addr,e)}function kC(a,e){a.uniform3uiv(this.addr,e)}function zC(a,e){a.uniform4uiv(this.addr,e)}function HC(a,e,t){const n=this.cache,s=e.length,o=Au(t,s);Tn(n,o)||(a.uniform1iv(this.addr,o),wn(n,o));let l;this.type===a.SAMPLER_2D_SHADOW?l=Gh:l=_v;for(let u=0;u!==s;++u)t.setTexture2D(e[u]||l,o[u])}function VC(a,e,t){const n=this.cache,s=e.length,o=Au(t,s);Tn(n,o)||(a.uniform1iv(this.addr,o),wn(n,o));for(let l=0;l!==s;++l)t.setTexture3D(e[l]||Mv,o[l])}function GC(a,e,t){const n=this.cache,s=e.length,o=Au(t,s);Tn(n,o)||(a.uniform1iv(this.addr,o),wn(n,o));for(let l=0;l!==s;++l)t.setTextureCube(e[l]||Cv,o[l])}function WC(a,e,t){const n=this.cache,s=e.length,o=Au(t,s);Tn(n,o)||(a.uniform1iv(this.addr,o),wn(n,o));for(let l=0;l!==s;++l)t.setTexture2DArray(e[l]||Ev,o[l])}function XC(a){switch(a){case 5126:return TC;case 35664:return wC;case 35665:return bC;case 35666:return RC;case 35674:return IC;case 35675:return PC;case 35676:return DC;case 5124:case 35670:return FC;case 35667:case 35671:return LC;case 35668:case 35672:return BC;case 35669:case 35673:return NC;case 5125:return UC;case 36294:return OC;case 36295:return kC;case 36296:return zC;case 35678:case 36198:case 36298:case 36306:case 35682:return HC;case 35679:case 36299:case 36307:return VC;case 35680:case 36300:case 36308:case 36293:return GC;case 36289:case 36303:case 36311:case 36292:return WC}}class QC{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=CC(t.type)}}class qC{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=XC(t.type)}}class YC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let o=0,l=s.length;o!==l;++o){const u=s[o];u.setValue(e,t[u.id],n)}}}const zf=/(\w+)(\])?(\[|\.)?/g;function J0(a,e){a.seq.push(e),a.map[e.id]=e}function jC(a,e,t){const n=a.name,s=n.length;for(zf.lastIndex=0;;){const o=zf.exec(n),l=zf.lastIndex;let u=o[1];const d=o[2]==="]",f=o[3];if(d&&(u=u|0),f===void 0||f==="["&&l+2===s){J0(t,f===void 0?new QC(u,a,e):new qC(u,a,e));break}else{let m=t.map[u];m===void 0&&(m=new YC(u),J0(t,m)),t=m}}}class tu{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let l=0;l<n;++l){const u=e.getActiveUniform(t,l),d=e.getUniformLocation(t,u.name);jC(u,d,this)}const s=[],o=[];for(const l of this.seq)l.type===e.SAMPLER_2D_SHADOW||l.type===e.SAMPLER_CUBE_SHADOW||l.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(l):o.push(l);s.length>0&&(this.seq=s.concat(o))}setValue(e,t,n,s){const o=this.map[t];o!==void 0&&o.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let o=0,l=t.length;o!==l;++o){const u=t[o],d=n[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,o=e.length;s!==o;++s){const l=e[s];l.id in t&&n.push(l)}return n}}function ex(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}const KC=37297;let $C=0;function ZC(a,e){const t=a.split(`
`),n=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let l=s;l<o;l++){const u=l+1;n.push(`${u===e?">":" "} ${u}: ${t[l]}`)}return n.join(`
`)}const tx=new ft;function JC(a){It._getMatrix(tx,It.workingColorSpace,a);const e=`mat3( ${tx.elements.map(t=>t.toFixed(4))} )`;switch(It.getTransfer(a)){case su:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return ht("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function nx(a,e,t){const n=a.getShaderParameter(e,a.COMPILE_STATUS),o=(a.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+ZC(a.getShaderSource(e),u)}else return o}function eT(a,e){const t=JC(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const tT={[Xx]:"Linear",[Qx]:"Reinhard",[qx]:"Cineon",[Yx]:"ACESFilmic",[Kx]:"AgX",[$x]:"Neutral",[jx]:"Custom"};function nT(a,e){const t=tT[e];return t===void 0?(ht("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hc=new U;function iT(){It.getLuminanceCoefficients(Hc);const a=Hc.x.toFixed(4),e=Hc.y.toFixed(4),t=Hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rT(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function sT(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function aT(a,e){const t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=a.getActiveAttrib(e,s),l=o.name;let u=1;o.type===a.FLOAT_MAT2&&(u=2),o.type===a.FLOAT_MAT3&&(u=3),o.type===a.FLOAT_MAT4&&(u=4),t[l]={type:o.type,location:a.getAttribLocation(e,l),locationSize:u}}return t}function qo(a){return a!==""}function ix(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rx(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(a){return a.replace(oT,cT)}const lT=new Map;function cT(a,e){let t=At[e];if(t===void 0){const n=lT.get(e);if(n!==void 0)t=At[n],ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Wh(t)}const uT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sx(a){return a.replace(uT,dT)}function dT(a,e,t,n){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function ax(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const fT={[Kc]:"SHADOWMAP_TYPE_PCF",[Qo]:"SHADOWMAP_TYPE_VSM"};function hT(a){return fT[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const pT={[Ws]:"ENVMAP_TYPE_CUBE",[Ka]:"ENVMAP_TYPE_CUBE",[gu]:"ENVMAP_TYPE_CUBE_UV"};function mT(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":pT[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const gT={[Ka]:"ENVMAP_MODE_REFRACTION"};function xT(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":gT[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const vT={[Wx]:"ENVMAP_BLENDING_MULTIPLY",[$y]:"ENVMAP_BLENDING_MIX",[Zy]:"ENVMAP_BLENDING_ADD"};function ST(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":vT[a.combine]||"ENVMAP_BLENDING_NONE"}function yT(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function AT(a,e,t,n){const s=a.getContext(),o=t.defines;let l=t.vertexShader,u=t.fragmentShader;const d=hT(t),f=mT(t),p=xT(t),m=ST(t),g=yT(t),x=rT(t),A=sT(o),_=s.createProgram();let v,y,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(qo).join(`
`),v.length>0&&(v+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(qo).join(`
`),y.length>0&&(y+=`
`)):(v=[ax(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),y=[ax(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==or?"#define TONE_MAPPING":"",t.toneMapping!==or?At.tonemapping_pars_fragment:"",t.toneMapping!==or?nT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,eT("linearToOutputTexel",t.outputColorSpace),iT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qo).join(`
`)),l=Wh(l),l=ix(l,t),l=rx(l,t),u=Wh(u),u=ix(u,t),u=rx(u,t),l=sx(l),u=sx(u),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,v=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,y=["#define varying in",t.glslVersion===p0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===p0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=T+v+l,C=T+y+u,w=ex(s,s.VERTEX_SHADER,P),I=ex(s,s.FRAGMENT_SHADER,C);s.attachShader(_,w),s.attachShader(_,I),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(N){if(a.debug.checkShaderErrors){const H=s.getProgramInfoLog(_)||"",q=s.getShaderInfoLog(w)||"",Y=s.getShaderInfoLog(I)||"",G=H.trim(),K=q.trim(),j=Y.trim();let k=!0,Q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(s,_,w,I);else{const J=nx(s,w,"vertex"),O=nx(s,I,"fragment");Lt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+G+`
`+J+`
`+O)}else G!==""?ht("WebGLProgram: Program Info Log:",G):(K===""||j==="")&&(Q=!1);Q&&(N.diagnostics={runnable:k,programLog:G,vertexShader:{log:K,prefix:v},fragmentShader:{log:j,prefix:y}})}s.deleteShader(w),s.deleteShader(I),M=new tu(s,_),F=aT(s,_)}let M;this.getUniforms=function(){return M===void 0&&R(this),M};let F;this.getAttributes=function(){return F===void 0&&R(this),F};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(_,KC)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$C++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=I,this}let _T=0;class ET{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new MT(e),t.set(e,n)),n}}class MT{constructor(e){this.id=_T++,this.code=e,this.usedTimes=0}}function CT(a){return a===Xs||a===nu||a===iu}function TT(a,e,t,n,s,o){const l=new cv,u=new ET,d=new Set,f=[],p=new Map,m=n.logarithmicDepthBuffer;let g=n.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(M){return d.add(M),M===0?"uv":`uv${M}`}function _(M,F,B,N,H,q){const Y=N.fog,G=H.geometry,K=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,j=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,k=e.get(M.envMap||K,j),Q=k&&k.mapping===gu?k.image.height:null,J=x[M.type];M.precision!==null&&(g=n.getMaxPrecision(M.precision),g!==M.precision&&ht("WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const O=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ee=O!==void 0?O.length:0;let ye=0;G.morphAttributes.position!==void 0&&(ye=1),G.morphAttributes.normal!==void 0&&(ye=2),G.morphAttributes.color!==void 0&&(ye=3);let Ce,be,se,xe;if(J){const $e=ir[J];Ce=$e.vertexShader,be=$e.fragmentShader}else{Ce=M.vertexShader,be=M.fragmentShader;const $e=u.getVertexShaderStage(M),Xt=u.getFragmentShaderStage(M);u.update(M,$e,Xt),se=$e.id,xe=Xt.id}const pe=a.getRenderTarget(),Re=a.state.buffers.depth.getReversed(),Oe=H.isInstancedMesh===!0,Ge=H.isBatchedMesh===!0,xt=!!M.map,Ye=!!M.matcap,dt=!!k,nt=!!M.aoMap,pt=!!M.lightMap,Rt=!!M.bumpMap&&M.wireframe===!1,yt=!!M.normalMap,Tt=!!M.displacementMap,Bt=!!M.emissiveMap,Ut=!!M.metalnessMap,qt=!!M.roughnessMap,ne=M.anisotropy>0,pn=M.clearcoat>0,Pt=M.dispersion>0,z=M.iridescence>0,b=M.sheen>0,ae=M.transmission>0,de=ne&&!!M.anisotropyMap,ge=pn&&!!M.clearcoatMap,we=pn&&!!M.clearcoatNormalMap,X=pn&&!!M.clearcoatRoughnessMap,ie=z&&!!M.iridescenceMap,me=z&&!!M.iridescenceThicknessMap,Me=b&&!!M.sheenColorMap,He=b&&!!M.sheenRoughnessMap,Le=!!M.specularMap,Ie=!!M.specularColorMap,st=!!M.specularIntensityMap,lt=ae&&!!M.transmissionMap,at=ae&&!!M.thicknessMap,$=!!M.gradientMap,De=!!M.alphaMap,Se=M.alphaTest>0,Be=!!M.alphaHash,ke=!!M.extensions;let Ae=or;M.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Ae=a.toneMapping);const Je={shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:Ce,fragmentShader:be,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:xe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:Ge,batchingColor:Ge&&H._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&H.instanceColor!==null,instancingMorph:Oe&&H.morphTexture!==null,outputColorSpace:pe===null?a.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:It.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:xt,matcap:Ye,envMap:dt,envMapMode:dt&&k.mapping,envMapCubeUVHeight:Q,aoMap:nt,lightMap:pt,bumpMap:Rt,normalMap:yt,displacementMap:Tt,emissiveMap:Bt,normalMapObjectSpace:yt&&M.normalMapType===tA,normalMapTangentSpace:yt&&M.normalMapType===d0,packedNormalMap:yt&&M.normalMapType===d0&&CT(M.normalMap.format),metalnessMap:Ut,roughnessMap:qt,anisotropy:ne,anisotropyMap:de,clearcoat:pn,clearcoatMap:ge,clearcoatNormalMap:we,clearcoatRoughnessMap:X,dispersion:Pt,iridescence:z,iridescenceMap:ie,iridescenceThicknessMap:me,sheen:b,sheenColorMap:Me,sheenRoughnessMap:He,specularMap:Le,specularColorMap:Ie,specularIntensityMap:st,transmission:ae,transmissionMap:lt,thicknessMap:at,gradientMap:$,opaque:M.transparent===!1&&M.blending===fs&&M.alphaToCoverage===!1,alphaMap:De,alphaTest:Se,alphaHash:Be,combine:M.combine,mapUv:xt&&A(M.map.channel),aoMapUv:nt&&A(M.aoMap.channel),lightMapUv:pt&&A(M.lightMap.channel),bumpMapUv:Rt&&A(M.bumpMap.channel),normalMapUv:yt&&A(M.normalMap.channel),displacementMapUv:Tt&&A(M.displacementMap.channel),emissiveMapUv:Bt&&A(M.emissiveMap.channel),metalnessMapUv:Ut&&A(M.metalnessMap.channel),roughnessMapUv:qt&&A(M.roughnessMap.channel),anisotropyMapUv:de&&A(M.anisotropyMap.channel),clearcoatMapUv:ge&&A(M.clearcoatMap.channel),clearcoatNormalMapUv:we&&A(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&A(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&A(M.iridescenceMap.channel),iridescenceThicknessMapUv:me&&A(M.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&A(M.sheenColorMap.channel),sheenRoughnessMapUv:He&&A(M.sheenRoughnessMap.channel),specularMapUv:Le&&A(M.specularMap.channel),specularColorMapUv:Ie&&A(M.specularColorMap.channel),specularIntensityMapUv:st&&A(M.specularIntensityMap.channel),transmissionMapUv:lt&&A(M.transmissionMap.channel),thicknessMapUv:at&&A(M.thicknessMap.channel),alphaMapUv:De&&A(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(yt||ne),vertexNormals:!!G.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!G.attributes.uv&&(xt||De),fog:!!Y,useFog:M.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||G.attributes.normal===void 0&&yt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Re,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ye,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:a.shadowMap.enabled&&B.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ae,decodeVideoTexture:xt&&M.map.isVideoTexture===!0&&It.getTransfer(M.map.colorSpace)===Wt,decodeVideoTextureEmissive:Bt&&M.emissiveMap.isVideoTexture===!0&&It.getTransfer(M.emissiveMap.colorSpace)===Wt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===_i,flipSided:M.side===pi,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ke&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&M.extensions.multiDraw===!0||Ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Je.vertexUv1s=d.has(1),Je.vertexUv2s=d.has(2),Je.vertexUv3s=d.has(3),d.clear(),Je}function v(M){const F=[];if(M.shaderID?F.push(M.shaderID):(F.push(M.customVertexShaderID),F.push(M.customFragmentShaderID)),M.defines!==void 0)for(const B in M.defines)F.push(B),F.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(y(F,M),T(F,M),F.push(a.outputColorSpace)),F.push(M.customProgramCacheKey),F.join()}function y(M,F){M.push(F.precision),M.push(F.outputColorSpace),M.push(F.envMapMode),M.push(F.envMapCubeUVHeight),M.push(F.mapUv),M.push(F.alphaMapUv),M.push(F.lightMapUv),M.push(F.aoMapUv),M.push(F.bumpMapUv),M.push(F.normalMapUv),M.push(F.displacementMapUv),M.push(F.emissiveMapUv),M.push(F.metalnessMapUv),M.push(F.roughnessMapUv),M.push(F.anisotropyMapUv),M.push(F.clearcoatMapUv),M.push(F.clearcoatNormalMapUv),M.push(F.clearcoatRoughnessMapUv),M.push(F.iridescenceMapUv),M.push(F.iridescenceThicknessMapUv),M.push(F.sheenColorMapUv),M.push(F.sheenRoughnessMapUv),M.push(F.specularMapUv),M.push(F.specularColorMapUv),M.push(F.specularIntensityMapUv),M.push(F.transmissionMapUv),M.push(F.thicknessMapUv),M.push(F.combine),M.push(F.fogExp2),M.push(F.sizeAttenuation),M.push(F.morphTargetsCount),M.push(F.morphAttributeCount),M.push(F.numDirLights),M.push(F.numPointLights),M.push(F.numSpotLights),M.push(F.numSpotLightMaps),M.push(F.numHemiLights),M.push(F.numRectAreaLights),M.push(F.numDirLightShadows),M.push(F.numPointLightShadows),M.push(F.numSpotLightShadows),M.push(F.numSpotLightShadowsWithMaps),M.push(F.numLightProbes),M.push(F.shadowMapType),M.push(F.toneMapping),M.push(F.numClippingPlanes),M.push(F.numClipIntersection),M.push(F.depthPacking)}function T(M,F){l.disableAll(),F.instancing&&l.enable(0),F.instancingColor&&l.enable(1),F.instancingMorph&&l.enable(2),F.matcap&&l.enable(3),F.envMap&&l.enable(4),F.normalMapObjectSpace&&l.enable(5),F.normalMapTangentSpace&&l.enable(6),F.clearcoat&&l.enable(7),F.iridescence&&l.enable(8),F.alphaTest&&l.enable(9),F.vertexColors&&l.enable(10),F.vertexAlphas&&l.enable(11),F.vertexUv1s&&l.enable(12),F.vertexUv2s&&l.enable(13),F.vertexUv3s&&l.enable(14),F.vertexTangents&&l.enable(15),F.anisotropy&&l.enable(16),F.alphaHash&&l.enable(17),F.batching&&l.enable(18),F.dispersion&&l.enable(19),F.batchingColor&&l.enable(20),F.gradientMap&&l.enable(21),F.packedNormalMap&&l.enable(22),F.vertexNormals&&l.enable(23),M.push(l.mask),l.disableAll(),F.fog&&l.enable(0),F.useFog&&l.enable(1),F.flatShading&&l.enable(2),F.logarithmicDepthBuffer&&l.enable(3),F.reversedDepthBuffer&&l.enable(4),F.skinning&&l.enable(5),F.morphTargets&&l.enable(6),F.morphNormals&&l.enable(7),F.morphColors&&l.enable(8),F.premultipliedAlpha&&l.enable(9),F.shadowMapEnabled&&l.enable(10),F.doubleSided&&l.enable(11),F.flipSided&&l.enable(12),F.useDepthPacking&&l.enable(13),F.dithering&&l.enable(14),F.transmission&&l.enable(15),F.sheen&&l.enable(16),F.opaque&&l.enable(17),F.pointsUvs&&l.enable(18),F.decodeVideoTexture&&l.enable(19),F.decodeVideoTextureEmissive&&l.enable(20),F.alphaToCoverage&&l.enable(21),F.numLightProbeGrids>0&&l.enable(22),F.hasPositionAttribute&&l.enable(23),M.push(l.mask)}function P(M){const F=x[M.type];let B;if(F){const N=ir[F];B=XA.clone(N.uniforms)}else B=M.uniforms;return B}function C(M,F){let B=p.get(F);return B!==void 0?++B.usedTimes:(B=new AT(a,F,M,s),f.push(B),p.set(F,B)),B}function w(M){if(--M.usedTimes===0){const F=f.indexOf(M);f[F]=f[f.length-1],f.pop(),p.delete(M.cacheKey),M.destroy()}}function I(M){u.remove(M)}function R(){u.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:P,acquireProgram:C,releaseProgram:w,releaseShaderCache:I,programs:f,dispose:R}}function wT(){let a=new WeakMap;function e(l){return a.has(l)}function t(l){let u=a.get(l);return u===void 0&&(u={},a.set(l,u)),u}function n(l){a.delete(l)}function s(l,u,d){a.get(l)[u]=d}function o(){a=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:o}}function bT(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function ox(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function lx(){const a=[];let e=0;const t=[],n=[],s=[];function o(){e=0,t.length=0,n.length=0,s.length=0}function l(g){let x=0;return g.isInstancedMesh&&(x+=2),g.isSkinnedMesh&&(x+=1),x}function u(g,x,A,_,v,y){let T=a[e];return T===void 0?(T={id:g.id,object:g,geometry:x,material:A,materialVariant:l(g),groupOrder:_,renderOrder:g.renderOrder,z:v,group:y},a[e]=T):(T.id=g.id,T.object=g,T.geometry=x,T.material=A,T.materialVariant=l(g),T.groupOrder=_,T.renderOrder=g.renderOrder,T.z=v,T.group=y),e++,T}function d(g,x,A,_,v,y){const T=u(g,x,A,_,v,y);A.transmission>0?n.push(T):A.transparent===!0?s.push(T):t.push(T)}function f(g,x,A,_,v,y){const T=u(g,x,A,_,v,y);A.transmission>0?n.unshift(T):A.transparent===!0?s.unshift(T):t.unshift(T)}function p(g,x,A){t.length>1&&t.sort(g||bT),n.length>1&&n.sort(x||ox),s.length>1&&s.sort(x||ox),A&&(t.reverse(),n.reverse(),s.reverse())}function m(){for(let g=e,x=a.length;g<x;g++){const A=a[g];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:t,transmissive:n,transparent:s,init:o,push:d,unshift:f,finish:m,sort:p}}function RT(){let a=new WeakMap;function e(n,s){const o=a.get(n);let l;return o===void 0?(l=new lx,a.set(n,[l])):s>=o.length?(l=new lx,o.push(l)):l=o[s],l}function t(){a=new WeakMap}return{get:e,dispose:t}}function IT(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new bt};break;case"SpotLight":t={position:new U,direction:new U,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new U,halfWidth:new U,halfHeight:new U};break}return a[e.id]=t,t}}}function PT(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let DT=0;function FT(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function LT(a){const e=new IT,t=PT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new U);const s=new U,o=new mt,l=new mt;function u(f){let p=0,m=0,g=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let x=0,A=0,_=0,v=0,y=0,T=0,P=0,C=0,w=0,I=0,R=0;f.sort(FT);for(let F=0,B=f.length;F<B;F++){const N=f[F],H=N.color,q=N.intensity,Y=N.distance;let G=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Xs?G=N.shadow.map.texture:G=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)p+=H.r*q,m+=H.g*q,g+=H.b*q;else if(N.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(N.sh.coefficients[K],q);R++}else if(N.isDirectionalLight){const K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const j=N.shadow,k=t.get(N);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,n.directionalShadow[x]=k,n.directionalShadowMap[x]=G,n.directionalShadowMatrix[x]=N.shadow.matrix,T++}n.directional[x]=K,x++}else if(N.isSpotLight){const K=e.get(N);K.position.setFromMatrixPosition(N.matrixWorld),K.color.copy(H).multiplyScalar(q),K.distance=Y,K.coneCos=Math.cos(N.angle),K.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),K.decay=N.decay,n.spot[_]=K;const j=N.shadow;if(N.map&&(n.spotLightMap[w]=N.map,w++,j.updateMatrices(N),N.castShadow&&I++),n.spotLightMatrix[_]=j.matrix,N.castShadow){const k=t.get(N);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=G,C++}_++}else if(N.isRectAreaLight){const K=e.get(N);K.color.copy(H).multiplyScalar(q),K.halfWidth.set(N.width*.5,0,0),K.halfHeight.set(0,N.height*.5,0),n.rectArea[v]=K,v++}else if(N.isPointLight){const K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),K.distance=N.distance,K.decay=N.decay,N.castShadow){const j=N.shadow,k=t.get(N);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,k.shadowCameraNear=j.camera.near,k.shadowCameraFar=j.camera.far,n.pointShadow[A]=k,n.pointShadowMap[A]=G,n.pointShadowMatrix[A]=N.shadow.matrix,P++}n.point[A]=K,A++}else if(N.isHemisphereLight){const K=e.get(N);K.skyColor.copy(N.color).multiplyScalar(q),K.groundColor.copy(N.groundColor).multiplyScalar(q),n.hemi[y]=K,y++}}v>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ve.LTC_FLOAT_1,n.rectAreaLTC2=Ve.LTC_FLOAT_2):(n.rectAreaLTC1=Ve.LTC_HALF_1,n.rectAreaLTC2=Ve.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=m,n.ambient[2]=g;const M=n.hash;(M.directionalLength!==x||M.pointLength!==A||M.spotLength!==_||M.rectAreaLength!==v||M.hemiLength!==y||M.numDirectionalShadows!==T||M.numPointShadows!==P||M.numSpotShadows!==C||M.numSpotMaps!==w||M.numLightProbes!==R)&&(n.directional.length=x,n.spot.length=_,n.rectArea.length=v,n.point.length=A,n.hemi.length=y,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=C+w-I,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=R,M.directionalLength=x,M.pointLength=A,M.spotLength=_,M.rectAreaLength=v,M.hemiLength=y,M.numDirectionalShadows=T,M.numPointShadows=P,M.numSpotShadows=C,M.numSpotMaps=w,M.numLightProbes=R,n.version=DT++)}function d(f,p){let m=0,g=0,x=0,A=0,_=0;const v=p.matrixWorldInverse;for(let y=0,T=f.length;y<T;y++){const P=f[y];if(P.isDirectionalLight){const C=n.directional[m];C.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(v),m++}else if(P.isSpotLight){const C=n.spot[x];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(v),C.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(v),x++}else if(P.isRectAreaLight){const C=n.rectArea[A];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(v),l.identity(),o.copy(P.matrixWorld),o.premultiply(v),l.extractRotation(o),C.halfWidth.set(P.width*.5,0,0),C.halfHeight.set(0,P.height*.5,0),C.halfWidth.applyMatrix4(l),C.halfHeight.applyMatrix4(l),A++}else if(P.isPointLight){const C=n.point[g];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(v),g++}else if(P.isHemisphereLight){const C=n.hemi[_];C.direction.setFromMatrixPosition(P.matrixWorld),C.direction.transformDirection(v),_++}}}return{setup:u,setupView:d,state:n}}function cx(a){const e=new LT(a),t=[],n=[],s=[];function o(g){m.camera=g,t.length=0,n.length=0,s.length=0}function l(g){t.push(g)}function u(g){n.push(g)}function d(g){s.push(g)}function f(){e.setup(t)}function p(g){e.setupView(t,g)}const m={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:m,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:u,pushLightProbeGrid:d}}function BT(a){let e=new WeakMap;function t(s,o=0){const l=e.get(s);let u;return l===void 0?(u=new cx(a),e.set(s,[u])):o>=l.length?(u=new cx(a),l.push(u)):u=l[o],u}function n(){e=new WeakMap}return{get:t,dispose:n}}const NT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UT=`uniform sampler2D shadow_pass;
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
}`,OT=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],kT=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],ux=new mt,Wo=new U,Hf=new U;function zT(a,e,t){let n=new hv;const s=new qe,o=new qe,l=new nn,u=new jA,d=new KA,f={},p=t.maxTextureSize,m={[lr]:pi,[pi]:lr,[_i]:_i},g=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:NT,fragmentShader:UT}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const A=new qn;A.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new en(A,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc;let y=this.type;this.render=function(I,R,M){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||I.length===0)return;this.type===Fy&&(ht("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Kc);const F=a.getRenderTarget(),B=a.getActiveCubeFace(),N=a.getActiveMipmapLevel(),H=a.state;H.setBlending(Dr),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const q=y!==this.type;q&&R.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(G=>G.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,G=I.length;Y<G;Y++){const K=I[Y],j=K.shadow;if(j===void 0){ht("WebGLShadowMap:",K,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const k=j.getFrameExtents();s.multiply(k),o.copy(j.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(o.x=Math.floor(p/k.x),s.x=o.x*k.x,j.mapSize.x=o.x),s.y>p&&(o.y=Math.floor(p/k.y),s.y=o.y*k.y,j.mapSize.y=o.y));const Q=a.state.buffers.depth.getReversed();if(j.camera._reversedDepth=Q,j.map===null||q===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Qo){if(K.isPointLight){ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new ji(s.x,s.y,{format:Xs,type:cr,minFilter:Xn,magFilter:Xn,generateMipmaps:!1}),j.map.texture.name=K.name+".shadowMap",j.map.depthTexture=new qs(s.x,s.y,Ni),j.map.depthTexture.name=K.name+".shadowMapDepth",j.map.depthTexture.format=ur,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Un,j.map.depthTexture.magFilter=Un}else K.isPointLight?(j.map=new Av(s.x),j.map.depthTexture=new VA(s.x,ei)):(j.map=new ji(s.x,s.y),j.map.depthTexture=new qs(s.x,s.y,ei)),j.map.depthTexture.name=K.name+".shadowMap",j.map.depthTexture.format=ur,this.type===Kc?(j.map.depthTexture.compareFunction=Q?ap:sp,j.map.depthTexture.minFilter=Xn,j.map.depthTexture.magFilter=Xn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Un,j.map.depthTexture.magFilter=Un);j.camera.updateProjectionMatrix()}const J=j.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<J;O++){if(j.map.isWebGLCubeRenderTarget)a.setRenderTarget(j.map,O),a.clear();else{O===0&&(a.setRenderTarget(j.map),a.clear());const ee=j.getViewport(O);l.set(o.x*ee.x,o.y*ee.y,o.x*ee.z,o.y*ee.w),H.viewport(l)}if(K.isPointLight){const ee=j.camera,ye=j.matrix,Ce=K.distance||ee.far;Ce!==ee.far&&(ee.far=Ce,ee.updateProjectionMatrix()),Wo.setFromMatrixPosition(K.matrixWorld),ee.position.copy(Wo),Hf.copy(ee.position),Hf.add(OT[O]),ee.up.copy(kT[O]),ee.lookAt(Hf),ee.updateMatrixWorld(),ye.makeTranslation(-Wo.x,-Wo.y,-Wo.z),ux.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),j._frustum.setFromProjectionMatrix(ux,ee.coordinateSystem,ee.reversedDepth)}else j.updateMatrices(K);n=j.getFrustum(),C(R,M,j.camera,K,this.type)}j.isPointLightShadow!==!0&&this.type===Qo&&T(j,M),j.needsUpdate=!1}y=this.type,v.needsUpdate=!1,a.setRenderTarget(F,B,N)};function T(I,R){const M=e.update(_);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,x.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new ji(s.x,s.y,{format:Xs,type:cr})),g.uniforms.shadow_pass.value=I.map.depthTexture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,a.setRenderTarget(I.mapPass),a.clear(),a.renderBufferDirect(R,null,M,g,_,null),x.uniforms.shadow_pass.value=I.mapPass.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,a.setRenderTarget(I.map),a.clear(),a.renderBufferDirect(R,null,M,x,_,null)}function P(I,R,M,F){let B=null;const N=M.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(N!==void 0)B=N;else if(B=M.isPointLight===!0?d:u,a.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const H=B.uuid,q=R.uuid;let Y=f[H];Y===void 0&&(Y={},f[H]=Y);let G=Y[q];G===void 0&&(G=B.clone(),Y[q]=G,R.addEventListener("dispose",w)),B=G}if(B.visible=R.visible,B.wireframe=R.wireframe,F===Qo?B.side=R.shadowSide!==null?R.shadowSide:R.side:B.side=R.shadowSide!==null?R.shadowSide:m[R.side],B.alphaMap=R.alphaMap,B.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,B.map=R.map,B.clipShadows=R.clipShadows,B.clippingPlanes=R.clippingPlanes,B.clipIntersection=R.clipIntersection,B.displacementMap=R.displacementMap,B.displacementScale=R.displacementScale,B.displacementBias=R.displacementBias,B.wireframeLinewidth=R.wireframeLinewidth,B.linewidth=R.linewidth,M.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const H=a.properties.get(B);H.light=M}return B}function C(I,R,M,F,B){if(I.visible===!1)return;if(I.layers.test(R.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&B===Qo)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,I.matrixWorld);const q=e.update(I),Y=I.material;if(Array.isArray(Y)){const G=q.groups;for(let K=0,j=G.length;K<j;K++){const k=G[K],Q=Y[k.materialIndex];if(Q&&Q.visible){const J=P(I,Q,F,B);I.onBeforeShadow(a,I,R,M,q,J,k),a.renderBufferDirect(M,null,q,J,I,k),I.onAfterShadow(a,I,R,M,q,J,k)}}}else if(Y.visible){const G=P(I,Y,F,B);I.onBeforeShadow(a,I,R,M,q,G,null),a.renderBufferDirect(M,null,q,G,I,null),I.onAfterShadow(a,I,R,M,q,G,null)}}const H=I.children;for(let q=0,Y=H.length;q<Y;q++)C(H[q],R,M,F,B)}function w(I){I.target.removeEventListener("dispose",w);for(const M in f){const F=f[M],B=I.target.uuid;B in F&&(F[B].dispose(),delete F[B])}}}function HT(a,e){function t(){let $=!1;const De=new nn;let Se=null;const Be=new nn(0,0,0,0);return{setMask:function(ke){Se!==ke&&!$&&(a.colorMask(ke,ke,ke,ke),Se=ke)},setLocked:function(ke){$=ke},setClear:function(ke,Ae,Je,$e,Xt){Xt===!0&&(ke*=$e,Ae*=$e,Je*=$e),De.set(ke,Ae,Je,$e),Be.equals(De)===!1&&(a.clearColor(ke,Ae,Je,$e),Be.copy(De))},reset:function(){$=!1,Se=null,Be.set(-1,0,0,0)}}}function n(){let $=!1,De=!1,Se=null,Be=null,ke=null;return{setReversed:function(Ae){if(De!==Ae){const Je=e.get("EXT_clip_control");Ae?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),De=Ae;const $e=ke;ke=null,this.setClear($e)}},getReversed:function(){return De},setTest:function(Ae){Ae?pe(a.DEPTH_TEST):Re(a.DEPTH_TEST)},setMask:function(Ae){Se!==Ae&&!$&&(a.depthMask(Ae),Se=Ae)},setFunc:function(Ae){if(De&&(Ae=fA[Ae]),Be!==Ae){switch(Ae){case ih:a.depthFunc(a.NEVER);break;case rh:a.depthFunc(a.ALWAYS);break;case sh:a.depthFunc(a.LESS);break;case ja:a.depthFunc(a.LEQUAL);break;case ah:a.depthFunc(a.EQUAL);break;case oh:a.depthFunc(a.GEQUAL);break;case lh:a.depthFunc(a.GREATER);break;case ch:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Be=Ae}},setLocked:function(Ae){$=Ae},setClear:function(Ae){ke!==Ae&&(ke=Ae,De&&(Ae=1-Ae),a.clearDepth(Ae))},reset:function(){$=!1,Se=null,Be=null,ke=null,De=!1}}}function s(){let $=!1,De=null,Se=null,Be=null,ke=null,Ae=null,Je=null,$e=null,Xt=null;return{setTest:function(Ot){$||(Ot?pe(a.STENCIL_TEST):Re(a.STENCIL_TEST))},setMask:function(Ot){De!==Ot&&!$&&(a.stencilMask(Ot),De=Ot)},setFunc:function(Ot,On,Ci){(Se!==Ot||Be!==On||ke!==Ci)&&(a.stencilFunc(Ot,On,Ci),Se=Ot,Be=On,ke=Ci)},setOp:function(Ot,On,Ci){(Ae!==Ot||Je!==On||$e!==Ci)&&(a.stencilOp(Ot,On,Ci),Ae=Ot,Je=On,$e=Ci)},setLocked:function(Ot){$=Ot},setClear:function(Ot){Xt!==Ot&&(a.clearStencil(Ot),Xt=Ot)},reset:function(){$=!1,De=null,Se=null,Be=null,ke=null,Ae=null,Je=null,$e=null,Xt=null}}}const o=new t,l=new n,u=new s,d=new WeakMap,f=new WeakMap;let p={},m={},g={},x=new WeakMap,A=[],_=null,v=!1,y=null,T=null,P=null,C=null,w=null,I=null,R=null,M=new bt(0,0,0),F=0,B=!1,N=null,H=null,q=null,Y=null,G=null;const K=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,k=0;const Q=a.getParameter(a.VERSION);Q.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Q)[1]),j=k>=1):Q.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),j=k>=2);let J=null,O={};const ee=a.getParameter(a.SCISSOR_BOX),ye=a.getParameter(a.VIEWPORT),Ce=new nn().fromArray(ee),be=new nn().fromArray(ye);function se($,De,Se,Be){const ke=new Uint8Array(4),Ae=a.createTexture();a.bindTexture($,Ae),a.texParameteri($,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri($,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Je=0;Je<Se;Je++)$===a.TEXTURE_3D||$===a.TEXTURE_2D_ARRAY?a.texImage3D(De,0,a.RGBA,1,1,Be,0,a.RGBA,a.UNSIGNED_BYTE,ke):a.texImage2D(De+Je,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ke);return Ae}const xe={};xe[a.TEXTURE_2D]=se(a.TEXTURE_2D,a.TEXTURE_2D,1),xe[a.TEXTURE_CUBE_MAP]=se(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[a.TEXTURE_2D_ARRAY]=se(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),xe[a.TEXTURE_3D]=se(a.TEXTURE_3D,a.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),pe(a.DEPTH_TEST),l.setFunc(ja),Rt(!1),yt(o0),pe(a.CULL_FACE),nt(Dr);function pe($){p[$]!==!0&&(a.enable($),p[$]=!0)}function Re($){p[$]!==!1&&(a.disable($),p[$]=!1)}function Oe($,De){return g[$]!==De?(a.bindFramebuffer($,De),g[$]=De,$===a.DRAW_FRAMEBUFFER&&(g[a.FRAMEBUFFER]=De),$===a.FRAMEBUFFER&&(g[a.DRAW_FRAMEBUFFER]=De),!0):!1}function Ge($,De){let Se=A,Be=!1;if($){Se=x.get(De),Se===void 0&&(Se=[],x.set(De,Se));const ke=$.textures;if(Se.length!==ke.length||Se[0]!==a.COLOR_ATTACHMENT0){for(let Ae=0,Je=ke.length;Ae<Je;Ae++)Se[Ae]=a.COLOR_ATTACHMENT0+Ae;Se.length=ke.length,Be=!0}}else Se[0]!==a.BACK&&(Se[0]=a.BACK,Be=!0);Be&&a.drawBuffers(Se)}function xt($){return _!==$?(a.useProgram($),_=$,!0):!1}const Ye={[Us]:a.FUNC_ADD,[Ly]:a.FUNC_SUBTRACT,[By]:a.FUNC_REVERSE_SUBTRACT};Ye[Ny]=a.MIN,Ye[Uy]=a.MAX;const dt={[Oy]:a.ZERO,[ky]:a.ONE,[zy]:a.SRC_COLOR,[el]:a.SRC_ALPHA,[Qy]:a.SRC_ALPHA_SATURATE,[Wy]:a.DST_COLOR,[Vy]:a.DST_ALPHA,[Hy]:a.ONE_MINUS_SRC_COLOR,[tl]:a.ONE_MINUS_SRC_ALPHA,[Xy]:a.ONE_MINUS_DST_COLOR,[Gy]:a.ONE_MINUS_DST_ALPHA,[qy]:a.CONSTANT_COLOR,[Yy]:a.ONE_MINUS_CONSTANT_COLOR,[jy]:a.CONSTANT_ALPHA,[Ky]:a.ONE_MINUS_CONSTANT_ALPHA};function nt($,De,Se,Be,ke,Ae,Je,$e,Xt,Ot){if($===Dr){v===!0&&(Re(a.BLEND),v=!1);return}if(v===!1&&(pe(a.BLEND),v=!0),$!==Gx){if($!==y||Ot!==B){if((T!==Us||w!==Us)&&(a.blendEquation(a.FUNC_ADD),T=Us,w=Us),Ot)switch($){case fs:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case l0:a.blendFunc(a.ONE,a.ONE);break;case c0:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case u0:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Lt("WebGLState: Invalid blending: ",$);break}else switch($){case fs:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case l0:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case c0:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case u0:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",$);break}P=null,C=null,I=null,R=null,M.set(0,0,0),F=0,y=$,B=Ot}return}ke=ke||De,Ae=Ae||Se,Je=Je||Be,(De!==T||ke!==w)&&(a.blendEquationSeparate(Ye[De],Ye[ke]),T=De,w=ke),(Se!==P||Be!==C||Ae!==I||Je!==R)&&(a.blendFuncSeparate(dt[Se],dt[Be],dt[Ae],dt[Je]),P=Se,C=Be,I=Ae,R=Je),($e.equals(M)===!1||Xt!==F)&&(a.blendColor($e.r,$e.g,$e.b,Xt),M.copy($e),F=Xt),y=$,B=!1}function pt($,De){$.side===_i?Re(a.CULL_FACE):pe(a.CULL_FACE);let Se=$.side===pi;De&&(Se=!Se),Rt(Se),$.blending===fs&&$.transparent===!1?nt(Dr):nt($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),l.setFunc($.depthFunc),l.setTest($.depthTest),l.setMask($.depthWrite),o.setMask($.colorWrite);const Be=$.stencilWrite;u.setTest(Be),Be&&(u.setMask($.stencilWriteMask),u.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),u.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),Bt($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?pe(a.SAMPLE_ALPHA_TO_COVERAGE):Re(a.SAMPLE_ALPHA_TO_COVERAGE)}function Rt($){N!==$&&($?a.frontFace(a.CW):a.frontFace(a.CCW),N=$)}function yt($){$!==Py?(pe(a.CULL_FACE),$!==H&&($===o0?a.cullFace(a.BACK):$===Dy?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Re(a.CULL_FACE),H=$}function Tt($){$!==q&&(j&&a.lineWidth($),q=$)}function Bt($,De,Se){$?(pe(a.POLYGON_OFFSET_FILL),(Y!==De||G!==Se)&&(Y=De,G=Se,l.getReversed()&&(De=-De),a.polygonOffset(De,Se))):Re(a.POLYGON_OFFSET_FILL)}function Ut($){$?pe(a.SCISSOR_TEST):Re(a.SCISSOR_TEST)}function qt($){$===void 0&&($=a.TEXTURE0+K-1),J!==$&&(a.activeTexture($),J=$)}function ne($,De,Se){Se===void 0&&(J===null?Se=a.TEXTURE0+K-1:Se=J);let Be=O[Se];Be===void 0&&(Be={type:void 0,texture:void 0},O[Se]=Be),(Be.type!==$||Be.texture!==De)&&(J!==Se&&(a.activeTexture(Se),J=Se),a.bindTexture($,De||xe[$]),Be.type=$,Be.texture=De)}function pn(){const $=O[J];$!==void 0&&$.type!==void 0&&(a.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function Pt(){try{a.compressedTexImage2D(...arguments)}catch($){Lt("WebGLState:",$)}}function z(){try{a.compressedTexImage3D(...arguments)}catch($){Lt("WebGLState:",$)}}function b(){try{a.texSubImage2D(...arguments)}catch($){Lt("WebGLState:",$)}}function ae(){try{a.texSubImage3D(...arguments)}catch($){Lt("WebGLState:",$)}}function de(){try{a.compressedTexSubImage2D(...arguments)}catch($){Lt("WebGLState:",$)}}function ge(){try{a.compressedTexSubImage3D(...arguments)}catch($){Lt("WebGLState:",$)}}function we(){try{a.texStorage2D(...arguments)}catch($){Lt("WebGLState:",$)}}function X(){try{a.texStorage3D(...arguments)}catch($){Lt("WebGLState:",$)}}function ie(){try{a.texImage2D(...arguments)}catch($){Lt("WebGLState:",$)}}function me(){try{a.texImage3D(...arguments)}catch($){Lt("WebGLState:",$)}}function Me($){return m[$]!==void 0?m[$]:a.getParameter($)}function He($,De){m[$]!==De&&(a.pixelStorei($,De),m[$]=De)}function Le($){Ce.equals($)===!1&&(a.scissor($.x,$.y,$.z,$.w),Ce.copy($))}function Ie($){be.equals($)===!1&&(a.viewport($.x,$.y,$.z,$.w),be.copy($))}function st($,De){let Se=f.get(De);Se===void 0&&(Se=new WeakMap,f.set(De,Se));let Be=Se.get($);Be===void 0&&(Be=a.getUniformBlockIndex(De,$.name),Se.set($,Be))}function lt($,De){const Be=f.get(De).get($);d.get(De)!==Be&&(a.uniformBlockBinding(De,Be,$.__bindingPointIndex),d.set(De,Be))}function at(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),l.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),p={},m={},J=null,O={},g={},x=new WeakMap,A=[],_=null,v=!1,y=null,T=null,P=null,C=null,w=null,I=null,R=null,M=new bt(0,0,0),F=0,B=!1,N=null,H=null,q=null,Y=null,G=null,Ce.set(0,0,a.canvas.width,a.canvas.height),be.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:pe,disable:Re,bindFramebuffer:Oe,drawBuffers:Ge,useProgram:xt,setBlending:nt,setMaterial:pt,setFlipSided:Rt,setCullFace:yt,setLineWidth:Tt,setPolygonOffset:Bt,setScissorTest:Ut,activeTexture:qt,bindTexture:ne,unbindTexture:pn,compressedTexImage2D:Pt,compressedTexImage3D:z,texImage2D:ie,texImage3D:me,pixelStorei:He,getParameter:Me,updateUBOMapping:st,uniformBlockBinding:lt,texStorage2D:we,texStorage3D:X,texSubImage2D:b,texSubImage3D:ae,compressedTexSubImage2D:de,compressedTexSubImage3D:ge,scissor:Le,viewport:Ie,reset:at}}function VT(a,e,t,n,s,o,l){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new qe,p=new WeakMap,m=new Set;let g;const x=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(z,b){return A?new OffscreenCanvas(z,b):rl("canvas")}function v(z,b,ae){let de=1;const ge=Pt(z);if((ge.width>ae||ge.height>ae)&&(de=ae/Math.max(ge.width,ge.height)),de<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const we=Math.floor(de*ge.width),X=Math.floor(de*ge.height);g===void 0&&(g=_(we,X));const ie=b?_(we,X):g;return ie.width=we,ie.height=X,ie.getContext("2d").drawImage(z,0,0,we,X),ht("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+we+"x"+X+")."),ie}else return"data"in z&&ht("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),z;return z}function y(z){return z.generateMipmaps}function T(z){a.generateMipmap(z)}function P(z){return z.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?a.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function C(z,b,ae,de,ge,we=!1){if(z!==null){if(a[z]!==void 0)return a[z];ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let X;de&&(X=e.get("EXT_texture_norm16"),X||ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=b;if(b===a.RED&&(ae===a.FLOAT&&(ie=a.R32F),ae===a.HALF_FLOAT&&(ie=a.R16F),ae===a.UNSIGNED_BYTE&&(ie=a.R8),ae===a.UNSIGNED_SHORT&&X&&(ie=X.R16_EXT),ae===a.SHORT&&X&&(ie=X.R16_SNORM_EXT)),b===a.RED_INTEGER&&(ae===a.UNSIGNED_BYTE&&(ie=a.R8UI),ae===a.UNSIGNED_SHORT&&(ie=a.R16UI),ae===a.UNSIGNED_INT&&(ie=a.R32UI),ae===a.BYTE&&(ie=a.R8I),ae===a.SHORT&&(ie=a.R16I),ae===a.INT&&(ie=a.R32I)),b===a.RG&&(ae===a.FLOAT&&(ie=a.RG32F),ae===a.HALF_FLOAT&&(ie=a.RG16F),ae===a.UNSIGNED_BYTE&&(ie=a.RG8),ae===a.UNSIGNED_SHORT&&X&&(ie=X.RG16_EXT),ae===a.SHORT&&X&&(ie=X.RG16_SNORM_EXT)),b===a.RG_INTEGER&&(ae===a.UNSIGNED_BYTE&&(ie=a.RG8UI),ae===a.UNSIGNED_SHORT&&(ie=a.RG16UI),ae===a.UNSIGNED_INT&&(ie=a.RG32UI),ae===a.BYTE&&(ie=a.RG8I),ae===a.SHORT&&(ie=a.RG16I),ae===a.INT&&(ie=a.RG32I)),b===a.RGB_INTEGER&&(ae===a.UNSIGNED_BYTE&&(ie=a.RGB8UI),ae===a.UNSIGNED_SHORT&&(ie=a.RGB16UI),ae===a.UNSIGNED_INT&&(ie=a.RGB32UI),ae===a.BYTE&&(ie=a.RGB8I),ae===a.SHORT&&(ie=a.RGB16I),ae===a.INT&&(ie=a.RGB32I)),b===a.RGBA_INTEGER&&(ae===a.UNSIGNED_BYTE&&(ie=a.RGBA8UI),ae===a.UNSIGNED_SHORT&&(ie=a.RGBA16UI),ae===a.UNSIGNED_INT&&(ie=a.RGBA32UI),ae===a.BYTE&&(ie=a.RGBA8I),ae===a.SHORT&&(ie=a.RGBA16I),ae===a.INT&&(ie=a.RGBA32I)),b===a.RGB&&(ae===a.UNSIGNED_SHORT&&X&&(ie=X.RGB16_EXT),ae===a.SHORT&&X&&(ie=X.RGB16_SNORM_EXT),ae===a.UNSIGNED_INT_5_9_9_9_REV&&(ie=a.RGB9_E5),ae===a.UNSIGNED_INT_10F_11F_11F_REV&&(ie=a.R11F_G11F_B10F)),b===a.RGBA){const me=we?su:It.getTransfer(ge);ae===a.FLOAT&&(ie=a.RGBA32F),ae===a.HALF_FLOAT&&(ie=a.RGBA16F),ae===a.UNSIGNED_BYTE&&(ie=me===Wt?a.SRGB8_ALPHA8:a.RGBA8),ae===a.UNSIGNED_SHORT&&X&&(ie=X.RGBA16_EXT),ae===a.SHORT&&X&&(ie=X.RGBA16_SNORM_EXT),ae===a.UNSIGNED_SHORT_4_4_4_4&&(ie=a.RGBA4),ae===a.UNSIGNED_SHORT_5_5_5_1&&(ie=a.RGB5_A1)}return(ie===a.R16F||ie===a.R32F||ie===a.RG16F||ie===a.RG32F||ie===a.RGBA16F||ie===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function w(z,b){let ae;return z?b===null||b===ei||b===il?ae=a.DEPTH24_STENCIL8:b===Ni?ae=a.DEPTH32F_STENCIL8:b===nl&&(ae=a.DEPTH24_STENCIL8,ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ei||b===il?ae=a.DEPTH_COMPONENT24:b===Ni?ae=a.DEPTH_COMPONENT32F:b===nl&&(ae=a.DEPTH_COMPONENT16),ae}function I(z,b){return y(z)===!0||z.isFramebufferTexture&&z.minFilter!==Un&&z.minFilter!==Xn?Math.log2(Math.max(b.width,b.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?b.mipmaps.length:1}function R(z){const b=z.target;b.removeEventListener("dispose",R),F(b),b.isVideoTexture&&p.delete(b),b.isHTMLTexture&&m.delete(b)}function M(z){const b=z.target;b.removeEventListener("dispose",M),N(b)}function F(z){const b=n.get(z);if(b.__webglInit===void 0)return;const ae=z.source,de=x.get(ae);if(de){const ge=de[b.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&B(z),Object.keys(de).length===0&&x.delete(ae)}n.remove(z)}function B(z){const b=n.get(z);a.deleteTexture(b.__webglTexture);const ae=z.source,de=x.get(ae);delete de[b.__cacheKey],l.memory.textures--}function N(z){const b=n.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),n.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(b.__webglFramebuffer[de]))for(let ge=0;ge<b.__webglFramebuffer[de].length;ge++)a.deleteFramebuffer(b.__webglFramebuffer[de][ge]);else a.deleteFramebuffer(b.__webglFramebuffer[de]);b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer[de])}else{if(Array.isArray(b.__webglFramebuffer))for(let de=0;de<b.__webglFramebuffer.length;de++)a.deleteFramebuffer(b.__webglFramebuffer[de]);else a.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&a.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let de=0;de<b.__webglColorRenderbuffer.length;de++)b.__webglColorRenderbuffer[de]&&a.deleteRenderbuffer(b.__webglColorRenderbuffer[de]);b.__webglDepthRenderbuffer&&a.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ae=z.textures;for(let de=0,ge=ae.length;de<ge;de++){const we=n.get(ae[de]);we.__webglTexture&&(a.deleteTexture(we.__webglTexture),l.memory.textures--),n.remove(ae[de])}n.remove(z)}let H=0;function q(){H=0}function Y(){return H}function G(z){H=z}function K(){const z=H;return z>=s.maxTextures&&ht("WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+s.maxTextures),H+=1,z}function j(z){const b=[];return b.push(z.wrapS),b.push(z.wrapT),b.push(z.wrapR||0),b.push(z.magFilter),b.push(z.minFilter),b.push(z.anisotropy),b.push(z.internalFormat),b.push(z.format),b.push(z.type),b.push(z.generateMipmaps),b.push(z.premultiplyAlpha),b.push(z.flipY),b.push(z.unpackAlignment),b.push(z.colorSpace),b.join()}function k(z,b){const ae=n.get(z);if(z.isVideoTexture&&ne(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&ae.__version!==z.version){const de=z.image;if(de===null)ht("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)ht("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(ae,z,b);return}}else z.isExternalTexture&&(ae.__webglTexture=z.sourceTexture?z.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,ae.__webglTexture,a.TEXTURE0+b)}function Q(z,b){const ae=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ae.__version!==z.version){Re(ae,z,b);return}else z.isExternalTexture&&(ae.__webglTexture=z.sourceTexture?z.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,ae.__webglTexture,a.TEXTURE0+b)}function J(z,b){const ae=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ae.__version!==z.version){Re(ae,z,b);return}t.bindTexture(a.TEXTURE_3D,ae.__webglTexture,a.TEXTURE0+b)}function O(z,b){const ae=n.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&ae.__version!==z.version){Oe(ae,z,b);return}t.bindTexture(a.TEXTURE_CUBE_MAP,ae.__webglTexture,a.TEXTURE0+b)}const ee={[uh]:a.REPEAT,[Pr]:a.CLAMP_TO_EDGE,[dh]:a.MIRRORED_REPEAT},ye={[Un]:a.NEAREST,[Jy]:a.NEAREST_MIPMAP_NEAREST,[mc]:a.NEAREST_MIPMAP_LINEAR,[Xn]:a.LINEAR,[cf]:a.LINEAR_MIPMAP_NEAREST,[Hs]:a.LINEAR_MIPMAP_LINEAR},Ce={[nA]:a.NEVER,[oA]:a.ALWAYS,[iA]:a.LESS,[sp]:a.LEQUAL,[rA]:a.EQUAL,[ap]:a.GEQUAL,[sA]:a.GREATER,[aA]:a.NOTEQUAL};function be(z,b){if(b.type===Ni&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Xn||b.magFilter===cf||b.magFilter===mc||b.magFilter===Hs||b.minFilter===Xn||b.minFilter===cf||b.minFilter===mc||b.minFilter===Hs)&&ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(z,a.TEXTURE_WRAP_S,ee[b.wrapS]),a.texParameteri(z,a.TEXTURE_WRAP_T,ee[b.wrapT]),(z===a.TEXTURE_3D||z===a.TEXTURE_2D_ARRAY)&&a.texParameteri(z,a.TEXTURE_WRAP_R,ee[b.wrapR]),a.texParameteri(z,a.TEXTURE_MAG_FILTER,ye[b.magFilter]),a.texParameteri(z,a.TEXTURE_MIN_FILTER,ye[b.minFilter]),b.compareFunction&&(a.texParameteri(z,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(z,a.TEXTURE_COMPARE_FUNC,Ce[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Un||b.minFilter!==mc&&b.minFilter!==Hs||b.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");a.texParameterf(z,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function se(z,b){let ae=!1;z.__webglInit===void 0&&(z.__webglInit=!0,b.addEventListener("dispose",R));const de=b.source;let ge=x.get(de);ge===void 0&&(ge={},x.set(de,ge));const we=j(b);if(we!==z.__cacheKey){ge[we]===void 0&&(ge[we]={texture:a.createTexture(),usedTimes:0},l.memory.textures++,ae=!0),ge[we].usedTimes++;const X=ge[z.__cacheKey];X!==void 0&&(ge[z.__cacheKey].usedTimes--,X.usedTimes===0&&B(b)),z.__cacheKey=we,z.__webglTexture=ge[we].texture}return ae}function xe(z,b,ae){return Math.floor(Math.floor(z/ae)/b)}function pe(z,b,ae,de){const we=z.updateRanges;if(we.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,b.width,b.height,ae,de,b.data);else{we.sort((He,Le)=>He.start-Le.start);let X=0;for(let He=1;He<we.length;He++){const Le=we[X],Ie=we[He],st=Le.start+Le.count,lt=xe(Ie.start,b.width,4),at=xe(Le.start,b.width,4);Ie.start<=st+1&&lt===at&&xe(Ie.start+Ie.count-1,b.width,4)===lt?Le.count=Math.max(Le.count,Ie.start+Ie.count-Le.start):(++X,we[X]=Ie)}we.length=X+1;const ie=t.getParameter(a.UNPACK_ROW_LENGTH),me=t.getParameter(a.UNPACK_SKIP_PIXELS),Me=t.getParameter(a.UNPACK_SKIP_ROWS);t.pixelStorei(a.UNPACK_ROW_LENGTH,b.width);for(let He=0,Le=we.length;He<Le;He++){const Ie=we[He],st=Math.floor(Ie.start/4),lt=Math.ceil(Ie.count/4),at=st%b.width,$=Math.floor(st/b.width),De=lt,Se=1;t.pixelStorei(a.UNPACK_SKIP_PIXELS,at),t.pixelStorei(a.UNPACK_SKIP_ROWS,$),t.texSubImage2D(a.TEXTURE_2D,0,at,$,De,Se,ae,de,b.data)}z.clearUpdateRanges(),t.pixelStorei(a.UNPACK_ROW_LENGTH,ie),t.pixelStorei(a.UNPACK_SKIP_PIXELS,me),t.pixelStorei(a.UNPACK_SKIP_ROWS,Me)}}function Re(z,b,ae){let de=a.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(de=a.TEXTURE_2D_ARRAY),b.isData3DTexture&&(de=a.TEXTURE_3D);const ge=se(z,b),we=b.source;t.bindTexture(de,z.__webglTexture,a.TEXTURE0+ae);const X=n.get(we);if(we.version!==X.__version||ge===!0){if(t.activeTexture(a.TEXTURE0+ae),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const Se=It.getPrimaries(It.workingColorSpace),Be=b.colorSpace===us?null:It.getPrimaries(b.colorSpace),ke=b.colorSpace===us||Se===Be?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment);let me=v(b.image,!1,s.maxTextureSize);me=pn(b,me);const Me=o.convert(b.format,b.colorSpace),He=o.convert(b.type);let Le=C(b.internalFormat,Me,He,b.normalized,b.colorSpace,b.isVideoTexture);be(de,b);let Ie;const st=b.mipmaps,lt=b.isVideoTexture!==!0,at=X.__version===void 0||ge===!0,$=we.dataReady,De=I(b,me);if(b.isDepthTexture)Le=w(b.format===Vs,b.type),at&&(lt?t.texStorage2D(a.TEXTURE_2D,1,Le,me.width,me.height):t.texImage2D(a.TEXTURE_2D,0,Le,me.width,me.height,0,Me,He,null));else if(b.isDataTexture)if(st.length>0){lt&&at&&t.texStorage2D(a.TEXTURE_2D,De,Le,st[0].width,st[0].height);for(let Se=0,Be=st.length;Se<Be;Se++)Ie=st[Se],lt?$&&t.texSubImage2D(a.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,Me,He,Ie.data):t.texImage2D(a.TEXTURE_2D,Se,Le,Ie.width,Ie.height,0,Me,He,Ie.data);b.generateMipmaps=!1}else lt?(at&&t.texStorage2D(a.TEXTURE_2D,De,Le,me.width,me.height),$&&pe(b,me,Me,He)):t.texImage2D(a.TEXTURE_2D,0,Le,me.width,me.height,0,Me,He,me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){lt&&at&&t.texStorage3D(a.TEXTURE_2D_ARRAY,De,Le,st[0].width,st[0].height,me.depth);for(let Se=0,Be=st.length;Se<Be;Se++)if(Ie=st[Se],b.format!==ti)if(Me!==null)if(lt){if($)if(b.layerUpdates.size>0){const ke=H0(Ie.width,Ie.height,b.format,b.type);for(const Ae of b.layerUpdates){const Je=Ie.data.subarray(Ae*ke/Ie.data.BYTES_PER_ELEMENT,(Ae+1)*ke/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Se,0,0,Ae,Ie.width,Ie.height,1,Me,Je)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Se,0,0,0,Ie.width,Ie.height,me.depth,Me,Ie.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Se,Le,Ie.width,Ie.height,me.depth,0,Ie.data,0,0);else ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?$&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,Se,0,0,0,Ie.width,Ie.height,me.depth,Me,He,Ie.data):t.texImage3D(a.TEXTURE_2D_ARRAY,Se,Le,Ie.width,Ie.height,me.depth,0,Me,He,Ie.data)}else{lt&&at&&t.texStorage2D(a.TEXTURE_2D,De,Le,st[0].width,st[0].height);for(let Se=0,Be=st.length;Se<Be;Se++)Ie=st[Se],b.format!==ti?Me!==null?lt?$&&t.compressedTexSubImage2D(a.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,Me,Ie.data):t.compressedTexImage2D(a.TEXTURE_2D,Se,Le,Ie.width,Ie.height,0,Ie.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?$&&t.texSubImage2D(a.TEXTURE_2D,Se,0,0,Ie.width,Ie.height,Me,He,Ie.data):t.texImage2D(a.TEXTURE_2D,Se,Le,Ie.width,Ie.height,0,Me,He,Ie.data)}else if(b.isDataArrayTexture)if(lt){if(at&&t.texStorage3D(a.TEXTURE_2D_ARRAY,De,Le,me.width,me.height,me.depth),$)if(b.layerUpdates.size>0){const Se=H0(me.width,me.height,b.format,b.type);for(const Be of b.layerUpdates){const ke=me.data.subarray(Be*Se/me.data.BYTES_PER_ELEMENT,(Be+1)*Se/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Be,me.width,me.height,1,Me,He,ke)}b.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Me,He,me.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Le,me.width,me.height,me.depth,0,Me,He,me.data);else if(b.isData3DTexture)lt?(at&&t.texStorage3D(a.TEXTURE_3D,De,Le,me.width,me.height,me.depth),$&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Me,He,me.data)):t.texImage3D(a.TEXTURE_3D,0,Le,me.width,me.height,me.depth,0,Me,He,me.data);else if(b.isFramebufferTexture){if(at)if(lt)t.texStorage2D(a.TEXTURE_2D,De,Le,me.width,me.height);else{let Se=me.width,Be=me.height;for(let ke=0;ke<De;ke++)t.texImage2D(a.TEXTURE_2D,ke,Le,Se,Be,0,Me,He,null),Se>>=1,Be>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in a){const Se=a.canvas;if(Se.hasAttribute("layoutsubtree")||Se.setAttribute("layoutsubtree","true"),me.parentNode!==Se){Se.appendChild(me),m.add(b),Se.onpaint=Be=>{const ke=Be.changedElements;for(const Ae of m)ke.includes(Ae.image)&&(Ae.needsUpdate=!0)},Se.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,me);else{const ke=a.RGBA,Ae=a.RGBA,Je=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,ke,Ae,Je,me)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(st.length>0){if(lt&&at){const Se=Pt(st[0]);t.texStorage2D(a.TEXTURE_2D,De,Le,Se.width,Se.height)}for(let Se=0,Be=st.length;Se<Be;Se++)Ie=st[Se],lt?$&&t.texSubImage2D(a.TEXTURE_2D,Se,0,0,Me,He,Ie):t.texImage2D(a.TEXTURE_2D,Se,Le,Me,He,Ie);b.generateMipmaps=!1}else if(lt){if(at){const Se=Pt(me);t.texStorage2D(a.TEXTURE_2D,De,Le,Se.width,Se.height)}$&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,Me,He,me)}else t.texImage2D(a.TEXTURE_2D,0,Le,Me,He,me);y(b)&&T(de),X.__version=we.version,b.onUpdate&&b.onUpdate(b)}z.__version=b.version}function Oe(z,b,ae){if(b.image.length!==6)return;const de=se(z,b),ge=b.source;t.bindTexture(a.TEXTURE_CUBE_MAP,z.__webglTexture,a.TEXTURE0+ae);const we=n.get(ge);if(ge.version!==we.__version||de===!0){t.activeTexture(a.TEXTURE0+ae);const X=It.getPrimaries(It.workingColorSpace),ie=b.colorSpace===us?null:It.getPrimaries(b.colorSpace),me=b.colorSpace===us||X===ie?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Me=b.isCompressedTexture||b.image[0].isCompressedTexture,He=b.image[0]&&b.image[0].isDataTexture,Le=[];for(let Ae=0;Ae<6;Ae++)!Me&&!He?Le[Ae]=v(b.image[Ae],!0,s.maxCubemapSize):Le[Ae]=He?b.image[Ae].image:b.image[Ae],Le[Ae]=pn(b,Le[Ae]);const Ie=Le[0],st=o.convert(b.format,b.colorSpace),lt=o.convert(b.type),at=C(b.internalFormat,st,lt,b.normalized,b.colorSpace),$=b.isVideoTexture!==!0,De=we.__version===void 0||de===!0,Se=ge.dataReady;let Be=I(b,Ie);be(a.TEXTURE_CUBE_MAP,b);let ke;if(Me){$&&De&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Be,at,Ie.width,Ie.height);for(let Ae=0;Ae<6;Ae++){ke=Le[Ae].mipmaps;for(let Je=0;Je<ke.length;Je++){const $e=ke[Je];b.format!==ti?st!==null?$?Se&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je,0,0,$e.width,$e.height,st,$e.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je,at,$e.width,$e.height,0,$e.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?Se&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je,0,0,$e.width,$e.height,st,lt,$e.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je,at,$e.width,$e.height,0,st,lt,$e.data)}}}else{if(ke=b.mipmaps,$&&De){ke.length>0&&Be++;const Ae=Pt(Le[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,Be,at,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(He){$?Se&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Le[Ae].width,Le[Ae].height,st,lt,Le[Ae].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,at,Le[Ae].width,Le[Ae].height,0,st,lt,Le[Ae].data);for(let Je=0;Je<ke.length;Je++){const Xt=ke[Je].image[Ae].image;$?Se&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je+1,0,0,Xt.width,Xt.height,st,lt,Xt.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je+1,at,Xt.width,Xt.height,0,st,lt,Xt.data)}}else{$?Se&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,st,lt,Le[Ae]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,at,st,lt,Le[Ae]);for(let Je=0;Je<ke.length;Je++){const $e=ke[Je];$?Se&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je+1,0,0,st,lt,$e.image[Ae]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je+1,at,st,lt,$e.image[Ae])}}}y(b)&&T(a.TEXTURE_CUBE_MAP),we.__version=ge.version,b.onUpdate&&b.onUpdate(b)}z.__version=b.version}function Ge(z,b,ae,de,ge,we){const X=o.convert(ae.format,ae.colorSpace),ie=o.convert(ae.type),me=C(ae.internalFormat,X,ie,ae.normalized,ae.colorSpace),Me=n.get(b),He=n.get(ae);if(He.__renderTarget=b,!Me.__hasExternalTextures){const Le=Math.max(1,b.width>>we),Ie=Math.max(1,b.height>>we);ge===a.TEXTURE_3D||ge===a.TEXTURE_2D_ARRAY?t.texImage3D(ge,we,me,Le,Ie,b.depth,0,X,ie,null):t.texImage2D(ge,we,me,Le,Ie,0,X,ie,null)}t.bindFramebuffer(a.FRAMEBUFFER,z),qt(b)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,de,ge,He.__webglTexture,0,Ut(b)):(ge===a.TEXTURE_2D||ge>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,de,ge,He.__webglTexture,we),t.bindFramebuffer(a.FRAMEBUFFER,null)}function xt(z,b,ae){if(a.bindRenderbuffer(a.RENDERBUFFER,z),b.depthBuffer){const de=b.depthTexture,ge=de&&de.isDepthTexture?de.type:null,we=w(b.stencilBuffer,ge),X=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;qt(b)?u.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ut(b),we,b.width,b.height):ae?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ut(b),we,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,we,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,X,a.RENDERBUFFER,z)}else{const de=b.textures;for(let ge=0;ge<de.length;ge++){const we=de[ge],X=o.convert(we.format,we.colorSpace),ie=o.convert(we.type),me=C(we.internalFormat,X,ie,we.normalized,we.colorSpace);qt(b)?u.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ut(b),me,b.width,b.height):ae?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ut(b),me,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,me,b.width,b.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Ye(z,b,ae){const de=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,z),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=n.get(b.depthTexture);if(ge.__renderTarget=b,(!ge.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),de){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,b.depthTexture.addEventListener("dispose",R)),ge.__webglTexture===void 0){ge.__webglTexture=a.createTexture(),t.bindTexture(a.TEXTURE_CUBE_MAP,ge.__webglTexture),be(a.TEXTURE_CUBE_MAP,b.depthTexture);const Me=o.convert(b.depthTexture.format),He=o.convert(b.depthTexture.type);let Le;b.depthTexture.format===ur?Le=a.DEPTH_COMPONENT24:b.depthTexture.format===Vs&&(Le=a.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Le,b.width,b.height,0,Me,He,null)}}else k(b.depthTexture,0);const we=ge.__webglTexture,X=Ut(b),ie=de?a.TEXTURE_CUBE_MAP_POSITIVE_X+ae:a.TEXTURE_2D,me=b.depthTexture.format===Vs?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(b.depthTexture.format===ur)qt(b)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,me,ie,we,0,X):a.framebufferTexture2D(a.FRAMEBUFFER,me,ie,we,0);else if(b.depthTexture.format===Vs)qt(b)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,me,ie,we,0,X):a.framebufferTexture2D(a.FRAMEBUFFER,me,ie,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(z){const b=n.get(z),ae=z.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==z.depthTexture){const de=z.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),de){const ge=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,de.removeEventListener("dispose",ge)};de.addEventListener("dispose",ge),b.__depthDisposeCallback=ge}b.__boundDepthTexture=de}if(z.depthTexture&&!b.__autoAllocateDepthBuffer)if(ae)for(let de=0;de<6;de++)Ye(b.__webglFramebuffer[de],z,de);else{const de=z.texture.mipmaps;de&&de.length>0?Ye(b.__webglFramebuffer[0],z,0):Ye(b.__webglFramebuffer,z,0)}else if(ae){b.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[de]),b.__webglDepthbuffer[de]===void 0)b.__webglDepthbuffer[de]=a.createRenderbuffer(),xt(b.__webglDepthbuffer[de],z,!1);else{const ge=z.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,we=b.__webglDepthbuffer[de];a.bindRenderbuffer(a.RENDERBUFFER,we),a.framebufferRenderbuffer(a.FRAMEBUFFER,ge,a.RENDERBUFFER,we)}}else{const de=z.texture.mipmaps;if(de&&de.length>0?t.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=a.createRenderbuffer(),xt(b.__webglDepthbuffer,z,!1);else{const ge=z.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,we=b.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,we),a.framebufferRenderbuffer(a.FRAMEBUFFER,ge,a.RENDERBUFFER,we)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function nt(z,b,ae){const de=n.get(z);b!==void 0&&Ge(de.__webglFramebuffer,z,z.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),ae!==void 0&&dt(z)}function pt(z){const b=z.texture,ae=n.get(z),de=n.get(b);z.addEventListener("dispose",M);const ge=z.textures,we=z.isWebGLCubeRenderTarget===!0,X=ge.length>1;if(X||(de.__webglTexture===void 0&&(de.__webglTexture=a.createTexture()),de.__version=b.version,l.memory.textures++),we){ae.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(b.mipmaps&&b.mipmaps.length>0){ae.__webglFramebuffer[ie]=[];for(let me=0;me<b.mipmaps.length;me++)ae.__webglFramebuffer[ie][me]=a.createFramebuffer()}else ae.__webglFramebuffer[ie]=a.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ae.__webglFramebuffer=[];for(let ie=0;ie<b.mipmaps.length;ie++)ae.__webglFramebuffer[ie]=a.createFramebuffer()}else ae.__webglFramebuffer=a.createFramebuffer();if(X)for(let ie=0,me=ge.length;ie<me;ie++){const Me=n.get(ge[ie]);Me.__webglTexture===void 0&&(Me.__webglTexture=a.createTexture(),l.memory.textures++)}if(z.samples>0&&qt(z)===!1){ae.__webglMultisampledFramebuffer=a.createFramebuffer(),ae.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let ie=0;ie<ge.length;ie++){const me=ge[ie];ae.__webglColorRenderbuffer[ie]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,ae.__webglColorRenderbuffer[ie]);const Me=o.convert(me.format,me.colorSpace),He=o.convert(me.type),Le=C(me.internalFormat,Me,He,me.normalized,me.colorSpace,z.isXRRenderTarget===!0),Ie=Ut(z);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ie,Le,z.width,z.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ie,a.RENDERBUFFER,ae.__webglColorRenderbuffer[ie])}a.bindRenderbuffer(a.RENDERBUFFER,null),z.depthBuffer&&(ae.__webglDepthRenderbuffer=a.createRenderbuffer(),xt(ae.__webglDepthRenderbuffer,z,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(we){t.bindTexture(a.TEXTURE_CUBE_MAP,de.__webglTexture),be(a.TEXTURE_CUBE_MAP,b);for(let ie=0;ie<6;ie++)if(b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)Ge(ae.__webglFramebuffer[ie][me],z,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,me);else Ge(ae.__webglFramebuffer[ie],z,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);y(b)&&T(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(X){for(let ie=0,me=ge.length;ie<me;ie++){const Me=ge[ie],He=n.get(Me);let Le=a.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Le=z.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(Le,He.__webglTexture),be(Le,Me),Ge(ae.__webglFramebuffer,z,Me,a.COLOR_ATTACHMENT0+ie,Le,0),y(Me)&&T(Le)}t.unbindTexture()}else{let ie=a.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(ie=z.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(ie,de.__webglTexture),be(ie,b),b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)Ge(ae.__webglFramebuffer[me],z,b,a.COLOR_ATTACHMENT0,ie,me);else Ge(ae.__webglFramebuffer,z,b,a.COLOR_ATTACHMENT0,ie,0);y(b)&&T(ie),t.unbindTexture()}z.depthBuffer&&dt(z)}function Rt(z){const b=z.textures;for(let ae=0,de=b.length;ae<de;ae++){const ge=b[ae];if(y(ge)){const we=P(z),X=n.get(ge).__webglTexture;t.bindTexture(we,X),T(we),t.unbindTexture()}}}const yt=[],Tt=[];function Bt(z){if(z.samples>0){if(qt(z)===!1){const b=z.textures,ae=z.width,de=z.height;let ge=a.COLOR_BUFFER_BIT;const we=z.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,X=n.get(z),ie=b.length>1;if(ie)for(let Me=0;Me<b.length;Me++)t.bindFramebuffer(a.FRAMEBUFFER,X.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Me,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,X.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Me,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,X.__webglMultisampledFramebuffer);const me=z.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,X.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,X.__webglFramebuffer);for(let Me=0;Me<b.length;Me++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(ge|=a.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(ge|=a.STENCIL_BUFFER_BIT)),ie){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,X.__webglColorRenderbuffer[Me]);const He=n.get(b[Me]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,He,0)}a.blitFramebuffer(0,0,ae,de,0,0,ae,de,ge,a.NEAREST),d===!0&&(yt.length=0,Tt.length=0,yt.push(a.COLOR_ATTACHMENT0+Me),z.depthBuffer&&z.resolveDepthBuffer===!1&&(yt.push(we),Tt.push(we),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Tt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,yt))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ie)for(let Me=0;Me<b.length;Me++){t.bindFramebuffer(a.FRAMEBUFFER,X.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Me,a.RENDERBUFFER,X.__webglColorRenderbuffer[Me]);const He=n.get(b[Me]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,X.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Me,a.TEXTURE_2D,He,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,X.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&d){const b=z.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[b])}}}function Ut(z){return Math.min(s.maxSamples,z.samples)}function qt(z){const b=n.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ne(z){const b=l.render.frame;p.get(z)!==b&&(p.set(z,b),z.update())}function pn(z,b){const ae=z.colorSpace,de=z.format,ge=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||ae!==ru&&ae!==us&&(It.getTransfer(ae)===Wt?(de!==ti||ge!==Ei)&&ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",ae)),b}function Pt(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(f.width=z.naturalWidth||z.width,f.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(f.width=z.displayWidth,f.height=z.displayHeight):(f.width=z.width,f.height=z.height),f}this.allocateTextureUnit=K,this.resetTextureUnits=q,this.getTextureUnits=Y,this.setTextureUnits=G,this.setTexture2D=k,this.setTexture2DArray=Q,this.setTexture3D=J,this.setTextureCube=O,this.rebindTextures=nt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=qt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Tv(a,e){function t(n,s=us){let o;const l=It.getTransfer(s);if(n===Ei)return a.UNSIGNED_BYTE;if(n===np)return a.UNSIGNED_SHORT_4_4_4_4;if(n===ip)return a.UNSIGNED_SHORT_5_5_5_1;if(n===tv)return a.UNSIGNED_INT_5_9_9_9_REV;if(n===nv)return a.UNSIGNED_INT_10F_11F_11F_REV;if(n===Jx)return a.BYTE;if(n===ev)return a.SHORT;if(n===nl)return a.UNSIGNED_SHORT;if(n===tp)return a.INT;if(n===ei)return a.UNSIGNED_INT;if(n===Ni)return a.FLOAT;if(n===cr)return a.HALF_FLOAT;if(n===iv)return a.ALPHA;if(n===rv)return a.RGB;if(n===ti)return a.RGBA;if(n===ur)return a.DEPTH_COMPONENT;if(n===Vs)return a.DEPTH_STENCIL;if(n===sv)return a.RED;if(n===xu)return a.RED_INTEGER;if(n===Xs)return a.RG;if(n===rp)return a.RG_INTEGER;if(n===Va)return a.RGBA_INTEGER;if(n===$c||n===Zc||n===Jc||n===eu)if(l===Wt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===$c)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===eu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===$c)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===eu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fh||n===hh||n===ph||n===mh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===fh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ph)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gh||n===xh||n===vh||n===Sh||n===yh||n===nu||n===Ah)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===gh||n===xh)return l===Wt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===vh)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===Sh)return o.COMPRESSED_R11_EAC;if(n===yh)return o.COMPRESSED_SIGNED_R11_EAC;if(n===nu)return o.COMPRESSED_RG11_EAC;if(n===Ah)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===_h||n===Eh||n===Mh||n===Ch||n===Th||n===wh||n===bh||n===Rh||n===Ih||n===Ph||n===Dh||n===Fh||n===Lh||n===Bh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===_h)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eh)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mh)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ch)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Th)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wh)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bh)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rh)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ih)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ph)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dh)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fh)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lh)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bh)return l===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nh||n===Uh||n===Oh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Nh)return l===Wt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kh||n===zh||n===iu||n===Hh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===kh)return o.COMPRESSED_RED_RGTC1_EXT;if(n===zh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===iu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===il?a.UNSIGNED_INT_24_8:a[n]!==void 0?a[n]:null}return{convert:t}}const GT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WT=`
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

}`;class XT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new gv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ni({vertexShader:GT,fragmentShader:WT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new en(new Ys(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QT extends ps{constructor(e,t){super();const n=this;let s=null,o=1,l=null,u="local-floor",d=1,f=null,p=null,m=null,g=null,x=null,A=null;const _=typeof XRWebGLBinding<"u",v=new XT,y={},T=t.getContextAttributes();let P=null,C=null;const w=[],I=[],R=new qe;let M=null;const F=new Li;F.viewport=new nn;const B=new Li;B.viewport=new nn;const N=[F,B],H=new i_;let q=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let xe=w[se];return xe===void 0&&(xe=new gf,w[se]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(se){let xe=w[se];return xe===void 0&&(xe=new gf,w[se]=xe),xe.getGripSpace()},this.getHand=function(se){let xe=w[se];return xe===void 0&&(xe=new gf,w[se]=xe),xe.getHandSpace()};function G(se){const xe=I.indexOf(se.inputSource);if(xe===-1)return;const pe=w[xe];pe!==void 0&&(pe.update(se.inputSource,se.frame,f||l),pe.dispatchEvent({type:se.type,data:se.inputSource}))}function K(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",j);for(let se=0;se<w.length;se++){const xe=I[se];xe!==null&&(I[se]=null,w[se].disconnect(xe))}q=null,Y=null,v.reset();for(const se in y)delete y[se];e.setRenderTarget(P),x=null,g=null,m=null,s=null,C=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){o=se,n.isPresenting===!0&&ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){u=se,n.isPresenting===!0&&ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(se){f=se},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return m===null&&_&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return A},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(P=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",K),s.addEventListener("inputsourceschange",j),T.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Re=null,Oe=null;T.depth&&(Oe=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=T.stencil?Vs:ur,Re=T.stencil?il:ei);const Ge={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:o};m=this.getBinding(),g=m.createProjectionLayer(Ge),s.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),C=new ji(g.textureWidth,g.textureHeight,{format:ti,type:Ei,depthTexture:new qs(g.textureWidth,g.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const pe={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),C=new ji(x.framebufferWidth,x.framebufferHeight,{format:ti,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(d),f=null,l=await s.requestReferenceSpace(u),be.setContext(s),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function j(se){for(let xe=0;xe<se.removed.length;xe++){const pe=se.removed[xe],Re=I.indexOf(pe);Re>=0&&(I[Re]=null,w[Re].disconnect(pe))}for(let xe=0;xe<se.added.length;xe++){const pe=se.added[xe];let Re=I.indexOf(pe);if(Re===-1){for(let Ge=0;Ge<w.length;Ge++)if(Ge>=I.length){I.push(pe),Re=Ge;break}else if(I[Ge]===null){I[Ge]=pe,Re=Ge;break}if(Re===-1)break}const Oe=w[Re];Oe&&Oe.connect(pe)}}const k=new U,Q=new U;function J(se,xe,pe){k.setFromMatrixPosition(xe.matrixWorld),Q.setFromMatrixPosition(pe.matrixWorld);const Re=k.distanceTo(Q),Oe=xe.projectionMatrix.elements,Ge=pe.projectionMatrix.elements,xt=Oe[14]/(Oe[10]-1),Ye=Oe[14]/(Oe[10]+1),dt=(Oe[9]+1)/Oe[5],nt=(Oe[9]-1)/Oe[5],pt=(Oe[8]-1)/Oe[0],Rt=(Ge[8]+1)/Ge[0],yt=xt*pt,Tt=xt*Rt,Bt=Re/(-pt+Rt),Ut=Bt*-pt;if(xe.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Ut),se.translateZ(Bt),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Oe[10]===-1)se.projectionMatrix.copy(xe.projectionMatrix),se.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const qt=xt+Bt,ne=Ye+Bt,pn=yt-Ut,Pt=Tt+(Re-Ut),z=dt*Ye/ne*qt,b=nt*Ye/ne*qt;se.projectionMatrix.makePerspective(pn,Pt,z,b,qt,ne),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function O(se,xe){xe===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(xe.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;let xe=se.near,pe=se.far;v.texture!==null&&(v.depthNear>0&&(xe=v.depthNear),v.depthFar>0&&(pe=v.depthFar)),H.near=B.near=F.near=xe,H.far=B.far=F.far=pe,(q!==H.near||Y!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),q=H.near,Y=H.far),H.layers.mask=se.layers.mask|6,F.layers.mask=H.layers.mask&-5,B.layers.mask=H.layers.mask&-3;const Re=se.parent,Oe=H.cameras;O(H,Re);for(let Ge=0;Ge<Oe.length;Ge++)O(Oe[Ge],Re);Oe.length===2?J(H,F,B):H.projectionMatrix.copy(F.projectionMatrix),ee(se,H,Re)};function ee(se,xe,pe){pe===null?se.matrix.copy(xe.matrixWorld):(se.matrix.copy(pe.matrixWorld),se.matrix.invert(),se.matrix.multiply(xe.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(xe.projectionMatrix),se.projectionMatrixInverse.copy(xe.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Vh*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(g===null&&x===null))return d},this.setFoveation=function(se){d=se,g!==null&&(g.fixedFoveation=se),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=se)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(H)},this.getCameraTexture=function(se){return y[se]};let ye=null;function Ce(se,xe){if(p=xe.getViewerPose(f||l),A=xe,p!==null){const pe=p.views;x!==null&&(e.setRenderTargetFramebuffer(C,x.framebuffer),e.setRenderTarget(C));let Re=!1;pe.length!==H.cameras.length&&(H.cameras.length=0,Re=!0);for(let Ye=0;Ye<pe.length;Ye++){const dt=pe[Ye];let nt=null;if(x!==null)nt=x.getViewport(dt);else{const Rt=m.getViewSubImage(g,dt);nt=Rt.viewport,Ye===0&&(e.setRenderTargetTextures(C,Rt.colorTexture,Rt.depthStencilTexture),e.setRenderTarget(C))}let pt=N[Ye];pt===void 0&&(pt=new Li,pt.layers.enable(Ye),pt.viewport=new nn,N[Ye]=pt),pt.matrix.fromArray(dt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(dt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(nt.x,nt.y,nt.width,nt.height),Ye===0&&(H.matrix.copy(pt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Re===!0&&H.cameras.push(pt)}const Oe=s.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){m=n.getBinding();const Ye=m.getDepthInformation(pe[0]);Ye&&Ye.isValid&&Ye.texture&&v.init(Ye,s.renderState)}if(Oe&&Oe.includes("camera-access")&&_){e.state.unbindTexture(),m=n.getBinding();for(let Ye=0;Ye<pe.length;Ye++){const dt=pe[Ye].camera;if(dt){let nt=y[dt];nt||(nt=new gv,y[dt]=nt);const pt=m.getCameraImage(dt);nt.sourceTexture=pt}}}}for(let pe=0;pe<w.length;pe++){const Re=I[pe],Oe=w[pe];Re!==null&&Oe!==void 0&&Oe.update(Re,xe,f||l)}ye&&ye(se,xe),xe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xe}),A=null}const be=new Sv;be.setAnimationLoop(Ce),this.setAnimationLoop=function(se){ye=se},this.dispose=function(){}}}const qT=new mt,wv=new ft;wv.set(-1,0,0,0,1,0,0,0,1);function YT(a,e){function t(v,y){v.matrixAutoUpdate===!0&&v.updateMatrix(),y.value.copy(v.matrix)}function n(v,y){y.color.getRGB(v.fogColor.value,xv(a)),y.isFog?(v.fogNear.value=y.near,v.fogFar.value=y.far):y.isFogExp2&&(v.fogDensity.value=y.density)}function s(v,y,T,P,C){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?o(v,y):y.isMeshLambertMaterial?(o(v,y),y.envMap&&(v.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(o(v,y),m(v,y)):y.isMeshPhongMaterial?(o(v,y),p(v,y),y.envMap&&(v.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(o(v,y),g(v,y),y.isMeshPhysicalMaterial&&x(v,y,C)):y.isMeshMatcapMaterial?(o(v,y),A(v,y)):y.isMeshDepthMaterial?o(v,y):y.isMeshDistanceMaterial?(o(v,y),_(v,y)):y.isMeshNormalMaterial?o(v,y):y.isLineBasicMaterial?(l(v,y),y.isLineDashedMaterial&&u(v,y)):y.isPointsMaterial?d(v,y,T,P):y.isSpriteMaterial?f(v,y):y.isShadowMaterial?(v.color.value.copy(y.color),v.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function o(v,y){v.opacity.value=y.opacity,y.color&&v.diffuse.value.copy(y.color),y.emissive&&v.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(v.map.value=y.map,t(y.map,v.mapTransform)),y.alphaMap&&(v.alphaMap.value=y.alphaMap,t(y.alphaMap,v.alphaMapTransform)),y.bumpMap&&(v.bumpMap.value=y.bumpMap,t(y.bumpMap,v.bumpMapTransform),v.bumpScale.value=y.bumpScale,y.side===pi&&(v.bumpScale.value*=-1)),y.normalMap&&(v.normalMap.value=y.normalMap,t(y.normalMap,v.normalMapTransform),v.normalScale.value.copy(y.normalScale),y.side===pi&&v.normalScale.value.negate()),y.displacementMap&&(v.displacementMap.value=y.displacementMap,t(y.displacementMap,v.displacementMapTransform),v.displacementScale.value=y.displacementScale,v.displacementBias.value=y.displacementBias),y.emissiveMap&&(v.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,v.emissiveMapTransform)),y.specularMap&&(v.specularMap.value=y.specularMap,t(y.specularMap,v.specularMapTransform)),y.alphaTest>0&&(v.alphaTest.value=y.alphaTest);const T=e.get(y),P=T.envMap,C=T.envMapRotation;P&&(v.envMap.value=P,v.envMapRotation.value.setFromMatrix4(qT.makeRotationFromEuler(C)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(wv),v.reflectivity.value=y.reflectivity,v.ior.value=y.ior,v.refractionRatio.value=y.refractionRatio),y.lightMap&&(v.lightMap.value=y.lightMap,v.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,v.lightMapTransform)),y.aoMap&&(v.aoMap.value=y.aoMap,v.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,v.aoMapTransform))}function l(v,y){v.diffuse.value.copy(y.color),v.opacity.value=y.opacity,y.map&&(v.map.value=y.map,t(y.map,v.mapTransform))}function u(v,y){v.dashSize.value=y.dashSize,v.totalSize.value=y.dashSize+y.gapSize,v.scale.value=y.scale}function d(v,y,T,P){v.diffuse.value.copy(y.color),v.opacity.value=y.opacity,v.size.value=y.size*T,v.scale.value=P*.5,y.map&&(v.map.value=y.map,t(y.map,v.uvTransform)),y.alphaMap&&(v.alphaMap.value=y.alphaMap,t(y.alphaMap,v.alphaMapTransform)),y.alphaTest>0&&(v.alphaTest.value=y.alphaTest)}function f(v,y){v.diffuse.value.copy(y.color),v.opacity.value=y.opacity,v.rotation.value=y.rotation,y.map&&(v.map.value=y.map,t(y.map,v.mapTransform)),y.alphaMap&&(v.alphaMap.value=y.alphaMap,t(y.alphaMap,v.alphaMapTransform)),y.alphaTest>0&&(v.alphaTest.value=y.alphaTest)}function p(v,y){v.specular.value.copy(y.specular),v.shininess.value=Math.max(y.shininess,1e-4)}function m(v,y){y.gradientMap&&(v.gradientMap.value=y.gradientMap)}function g(v,y){v.metalness.value=y.metalness,y.metalnessMap&&(v.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,v.metalnessMapTransform)),v.roughness.value=y.roughness,y.roughnessMap&&(v.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,v.roughnessMapTransform)),y.envMap&&(v.envMapIntensity.value=y.envMapIntensity)}function x(v,y,T){v.ior.value=y.ior,y.sheen>0&&(v.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),v.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(v.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,v.sheenColorMapTransform)),y.sheenRoughnessMap&&(v.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,v.sheenRoughnessMapTransform))),y.clearcoat>0&&(v.clearcoat.value=y.clearcoat,v.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(v.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,v.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(v.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===pi&&v.clearcoatNormalScale.value.negate())),y.dispersion>0&&(v.dispersion.value=y.dispersion),y.iridescence>0&&(v.iridescence.value=y.iridescence,v.iridescenceIOR.value=y.iridescenceIOR,v.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(v.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,v.iridescenceMapTransform)),y.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),y.transmission>0&&(v.transmission.value=y.transmission,v.transmissionSamplerMap.value=T.texture,v.transmissionSamplerSize.value.set(T.width,T.height),y.transmissionMap&&(v.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,v.transmissionMapTransform)),v.thickness.value=y.thickness,y.thicknessMap&&(v.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=y.attenuationDistance,v.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(v.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(v.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=y.specularIntensity,v.specularColor.value.copy(y.specularColor),y.specularColorMap&&(v.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,v.specularColorMapTransform)),y.specularIntensityMap&&(v.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,v.specularIntensityMapTransform))}function A(v,y){y.matcap&&(v.matcap.value=y.matcap)}function _(v,y){const T=e.get(y).light;v.referencePosition.value.setFromMatrixPosition(T.matrixWorld),v.nearDistance.value=T.shadow.camera.near,v.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function jT(a,e,t,n){let s={},o={},l=[];const u=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function d(C,w){const I=w.program;n.uniformBlockBinding(C,I)}function f(C,w){let I=s[C.id];I===void 0&&(v(C),I=p(C),s[C.id]=I,C.addEventListener("dispose",T));const R=w.program;n.updateUBOMapping(C,R);const M=e.render.frame;o[C.id]!==M&&(g(C),o[C.id]=M)}function p(C){const w=m();C.__bindingPointIndex=w;const I=a.createBuffer(),R=C.__size,M=C.usage;return a.bindBuffer(a.UNIFORM_BUFFER,I),a.bufferData(a.UNIFORM_BUFFER,R,M),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,w,I),I}function m(){for(let C=0;C<u;C++)if(l.indexOf(C)===-1)return l.push(C),C;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const w=s[C.id],I=C.uniforms,R=C.__cache;a.bindBuffer(a.UNIFORM_BUFFER,w);for(let M=0,F=I.length;M<F;M++){const B=I[M];if(Array.isArray(B))for(let N=0,H=B.length;N<H;N++)x(B[N],M,N,R);else x(B,M,0,R)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function x(C,w,I,R){if(_(C,w,I,R)===!0){const M=C.__offset,F=C.value;if(Array.isArray(F)){let B=0;for(let N=0;N<F.length;N++){const H=F[N],q=y(H);A(H,C.__data,B),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(B+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else A(F,C.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,M,C.__data)}}function A(C,w,I){typeof C=="number"||typeof C=="boolean"?w[0]=C:C.isMatrix3?(w[0]=C.elements[0],w[1]=C.elements[1],w[2]=C.elements[2],w[3]=0,w[4]=C.elements[3],w[5]=C.elements[4],w[6]=C.elements[5],w[7]=0,w[8]=C.elements[6],w[9]=C.elements[7],w[10]=C.elements[8],w[11]=0):ArrayBuffer.isView(C)?w.set(new C.constructor(C.buffer,C.byteOffset,w.length)):C.toArray(w,I)}function _(C,w,I,R){const M=C.value,F=w+"_"+I;if(R[F]===void 0)return typeof M=="number"||typeof M=="boolean"?R[F]=M:ArrayBuffer.isView(M)?R[F]=M.slice():R[F]=M.clone(),!0;{const B=R[F];if(typeof M=="number"||typeof M=="boolean"){if(B!==M)return R[F]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(B.equals(M)===!1)return B.copy(M),!0}}return!1}function v(C){const w=C.uniforms;let I=0;const R=16;for(let F=0,B=w.length;F<B;F++){const N=Array.isArray(w[F])?w[F]:[w[F]];for(let H=0,q=N.length;H<q;H++){const Y=N[H],G=Array.isArray(Y.value)?Y.value:[Y.value];for(let K=0,j=G.length;K<j;K++){const k=G[K],Q=y(k),J=I%R,O=J%Q.boundary,ee=J+O;I+=O,ee!==0&&R-ee<Q.storage&&(I+=R-ee),Y.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=I,I+=Q.storage}}}const M=I%R;return M>0&&(I+=R-M),C.__size=I,C.__cache={},this}function y(C){const w={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(w.boundary=4,w.storage=4):C.isVector2?(w.boundary=8,w.storage=8):C.isVector3||C.isColor?(w.boundary=16,w.storage=12):C.isVector4?(w.boundary=16,w.storage=16):C.isMatrix3?(w.boundary=48,w.storage=48):C.isMatrix4?(w.boundary=64,w.storage=64):C.isTexture?ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(w.boundary=16,w.storage=C.byteLength):ht("WebGLRenderer: Unsupported uniform value type.",C),w}function T(C){const w=C.target;w.removeEventListener("dispose",T);const I=l.indexOf(w.__bindingPointIndex);l.splice(I,1),a.deleteBuffer(s[w.id]),delete s[w.id],delete o[w.id]}function P(){for(const C in s)a.deleteBuffer(s[C]);l=[],s={},o={}}return{bind:d,update:f,dispose:P}}const KT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let nr=null;function $T(){return nr===null&&(nr=new wr(KT,16,16,Xs,cr),nr.name="DFG_LUT",nr.minFilter=Xn,nr.magFilter=Xn,nr.wrapS=Pr,nr.wrapT=Pr,nr.generateMipmaps=!1,nr.needsUpdate=!0),nr}class ZT{constructor(e={}){const{canvas:t=uA(),context:n=null,depth:s=!0,stencil:o=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:g=!1,outputBufferType:x=Ei}=e;this.isWebGLRenderer=!0;let A;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=n.getContextAttributes().alpha}else A=l;const _=x,v=new Set([Va,rp,xu]),y=new Set([Ei,ei,nl,il,np,ip]),T=new Uint32Array(4),P=new Int32Array(4),C=new U;let w=null,I=null;const R=[],M=[];let F=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let N=!1,H=null,q=null,Y=null,G=null;this._outputColorSpace=Ai;let K=0,j=0,k=null,Q=-1,J=null;const O=new nn,ee=new nn;let ye=null;const Ce=new bt(0);let be=0,se=t.width,xe=t.height,pe=1,Re=null,Oe=null;const Ge=new nn(0,0,se,xe),xt=new nn(0,0,se,xe);let Ye=!1;const dt=new hv;let nt=!1,pt=!1;const Rt=new mt,yt=new U,Tt=new nn,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function qt(){return k===null?pe:1}let ne=n;function pn(L,re){return t.getContext(L,re)}try{const L={alpha:!0,depth:s,stencil:o,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ep}`),t.addEventListener("webglcontextlost",Xt,!1),t.addEventListener("webglcontextrestored",Ot,!1),t.addEventListener("webglcontextcreationerror",On,!1),ne===null){const re="webgl2";if(ne=pn(re,L),ne===null)throw pn(re)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(L){throw Lt("WebGLRenderer: "+L.message),L}let Pt,z,b,ae,de,ge,we,X,ie,me,Me,He,Le,Ie,st,lt,at,$,De,Se,Be,ke,Ae;function Je(){Pt=new ZM(ne),Pt.init(),Be=new Tv(ne,Pt),z=new WM(ne,Pt,e,Be),b=new HT(ne,Pt),z.reversedDepthBuffer&&g&&b.buffers.depth.setReversed(!0),q=ne.createFramebuffer(),Y=ne.createFramebuffer(),G=ne.createFramebuffer(),ae=new tC(ne),de=new wT,ge=new VT(ne,Pt,b,de,z,Be,ae),we=new $M(B),X=new s_(ne),ke=new VM(ne,X),ie=new JM(ne,X,ae,ke),me=new iC(ne,ie,X,ke,ae),$=new nC(ne,z,ge),st=new XM(de),Me=new TT(B,we,Pt,z,ke,st),He=new YT(B,de),Le=new RT,Ie=new BT(Pt),at=new HM(B,we,b,me,A,d),lt=new zT(B,me,z),Ae=new jT(ne,ae,z,b),De=new GM(ne,Pt,ae),Se=new eC(ne,Pt,ae),ae.programs=Me.programs,B.capabilities=z,B.extensions=Pt,B.properties=de,B.renderLists=Le,B.shadowMap=lt,B.state=b,B.info=ae}Je(),_!==Ei&&(F=new sC(_,t.width,t.height,u,s,o));const $e=new QT(B,ne);this.xr=$e,this.getContext=function(){return ne},this.getContextAttributes=function(){return ne.getContextAttributes()},this.forceContextLoss=function(){const L=Pt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Pt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(L){L!==void 0&&(pe=L,this.setSize(se,xe,!1))},this.getSize=function(L){return L.set(se,xe)},this.setSize=function(L,re,fe=!0){if($e.isPresenting){ht("WebGLRenderer: Can't change size while VR device is presenting.");return}se=L,xe=re,t.width=Math.floor(L*pe),t.height=Math.floor(re*pe),fe===!0&&(t.style.width=L+"px",t.style.height=re+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,L,re)},this.getDrawingBufferSize=function(L){return L.set(se*pe,xe*pe).floor()},this.setDrawingBufferSize=function(L,re,fe){se=L,xe=re,pe=fe,t.width=Math.floor(L*fe),t.height=Math.floor(re*fe),this.setViewport(0,0,L,re)},this.setEffects=function(L){if(_===Ei){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let re=0;re<L.length;re++)if(L[re].isOutputPass===!0){ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(O)},this.getViewport=function(L){return L.copy(Ge)},this.setViewport=function(L,re,fe,ce){L.isVector4?Ge.set(L.x,L.y,L.z,L.w):Ge.set(L,re,fe,ce),b.viewport(O.copy(Ge).multiplyScalar(pe).round())},this.getScissor=function(L){return L.copy(xt)},this.setScissor=function(L,re,fe,ce){L.isVector4?xt.set(L.x,L.y,L.z,L.w):xt.set(L,re,fe,ce),b.scissor(ee.copy(xt).multiplyScalar(pe).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(L){b.setScissorTest(Ye=L)},this.setOpaqueSort=function(L){Re=L},this.setTransparentSort=function(L){Oe=L},this.getClearColor=function(L){return L.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(L=!0,re=!0,fe=!0){let ce=0;if(L){let le=!1;if(k!==null){const Ue=k.texture.format;le=v.has(Ue)}if(le){const Ue=k.texture.type,Qe=y.has(Ue),Ne=at.getClearColor(),et=at.getClearAlpha(),ot=Ne.r,vt=Ne.g,St=Ne.b;Qe?(T[0]=ot,T[1]=vt,T[2]=St,T[3]=et,ne.clearBufferuiv(ne.COLOR,0,T)):(P[0]=ot,P[1]=vt,P[2]=St,P[3]=et,ne.clearBufferiv(ne.COLOR,0,P))}else ce|=ne.COLOR_BUFFER_BIT}re&&(ce|=ne.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(ce|=ne.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&ne.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),H=L},this.dispose=function(){t.removeEventListener("webglcontextlost",Xt,!1),t.removeEventListener("webglcontextrestored",Ot,!1),t.removeEventListener("webglcontextcreationerror",On,!1),at.dispose(),Le.dispose(),Ie.dispose(),de.dispose(),we.dispose(),me.dispose(),ke.dispose(),Ae.dispose(),Me.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",dl),$e.removeEventListener("sessionend",fl),Yn.stop()};function Xt(L){L.preventDefault(),g0("WebGLRenderer: Context Lost."),N=!0}function Ot(){g0("WebGLRenderer: Context Restored."),N=!1;const L=ae.autoReset,re=lt.enabled,fe=lt.autoUpdate,ce=lt.needsUpdate,le=lt.type;Je(),ae.autoReset=L,lt.enabled=re,lt.autoUpdate=fe,lt.needsUpdate=ce,lt.type=le}function On(L){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Ci(L){const re=L.target;re.removeEventListener("dispose",Ci),ms(re)}function ms(L){js(L),de.remove(L)}function js(L){const re=de.get(L).programs;re!==void 0&&(re.forEach(function(fe){Me.releaseProgram(fe)}),L.isShaderMaterial&&Me.releaseShaderCache(L))}this.renderBufferDirect=function(L,re,fe,ce,le,Ue){re===null&&(re=Bt);const Qe=le.isMesh&&le.matrixWorld.determinantAffine()<0,Ne=ln(L,re,fe,ce,le);b.setMaterial(ce,Qe);let et=fe.index,ot=1;if(ce.wireframe===!0){if(et=ie.getWireframeAttribute(fe),et===void 0)return;ot=2}const vt=fe.drawRange,St=fe.attributes.position;let it=vt.start*ot,Dt=(vt.start+vt.count)*ot;Ue!==null&&(it=Math.max(it,Ue.start*ot),Dt=Math.min(Dt,(Ue.start+Ue.count)*ot)),et!==null?(it=Math.max(it,0),Dt=Math.min(Dt,et.count)):St!=null&&(it=Math.max(it,0),Dt=Math.min(Dt,St.count));const Yt=Dt-it;if(Yt<0||Yt===1/0)return;ke.setup(le,ce,Ne,fe,et);let rn,Ht=De;if(et!==null&&(rn=X.get(et),Ht=Se,Ht.setIndex(rn)),le.isMesh)ce.wireframe===!0?(b.setLineWidth(ce.wireframeLinewidth*qt()),Ht.setMode(ne.LINES)):Ht.setMode(ne.TRIANGLES);else if(le.isLine){let vn=ce.linewidth;vn===void 0&&(vn=1),b.setLineWidth(vn*qt()),le.isLineSegments?Ht.setMode(ne.LINES):le.isLineLoop?Ht.setMode(ne.LINE_LOOP):Ht.setMode(ne.LINE_STRIP)}else le.isPoints?Ht.setMode(ne.POINTS):le.isSprite&&Ht.setMode(ne.TRIANGLES);if(le.isBatchedMesh)if(Pt.get("WEBGL_multi_draw"))Ht.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{const vn=le._multiDrawStarts,We=le._multiDrawCounts,Fn=le._multiDrawCount,_t=et?X.get(et).bytesPerElement:1,ii=de.get(ce).currentProgram.getUniforms();for(let ri=0;ri<Fn;ri++)ii.setValue(ne,"_gl_DrawID",ri),Ht.render(vn[ri]/_t,We[ri])}else if(le.isInstancedMesh)Ht.renderInstances(it,Yt,le.count);else if(fe.isInstancedBufferGeometry){const vn=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,We=Math.min(fe.instanceCount,vn);Ht.renderInstances(it,Yt,We)}else Ht.render(it,Yt)};function gs(L,re,fe){L.transparent===!0&&L.side===_i&&L.forceSinglePass===!1?(L.side=pi,L.needsUpdate=!0,Ss(L,re,fe),L.side=lr,L.needsUpdate=!0,Ss(L,re,fe),L.side=_i):Ss(L,re,fe)}this.compile=function(L,re,fe=null){fe===null&&(fe=L),I=Ie.get(fe),I.init(re),M.push(I),fe.traverseVisible(function(le){le.isLight&&le.layers.test(re.layers)&&(I.pushLight(le),le.castShadow&&I.pushShadow(le))}),L!==fe&&L.traverseVisible(function(le){le.isLight&&le.layers.test(re.layers)&&(I.pushLight(le),le.castShadow&&I.pushShadow(le))}),I.setupLights();const ce=new Set;return L.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;const Ue=le.material;if(Ue)if(Array.isArray(Ue))for(let Qe=0;Qe<Ue.length;Qe++){const Ne=Ue[Qe];gs(Ne,fe,le),ce.add(Ne)}else gs(Ue,fe,le),ce.add(Ue)}),I=M.pop(),ce},this.compileAsync=function(L,re,fe=null){const ce=this.compile(L,re,fe);return new Promise(le=>{function Ue(){if(ce.forEach(function(Qe){de.get(Qe).currentProgram.isReady()&&ce.delete(Qe)}),ce.size===0){le(L);return}setTimeout(Ue,10)}Pt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let xs=null;function Mu(L){xs&&xs(L)}function dl(){Yn.stop()}function fl(){Yn.start()}const Yn=new Sv;Yn.setAnimationLoop(Mu),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(L){xs=L,$e.setAnimationLoop(L),L===null?Yn.stop():Yn.start()},$e.addEventListener("sessionstart",dl),$e.addEventListener("sessionend",fl),this.render=function(L,re){if(re!==void 0&&re.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;H!==null&&H.renderStart(L,re);const fe=$e.enabled===!0&&$e.isPresenting===!0,ce=F!==null&&(k===null||fe)&&F.begin(B,k);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),re.parent===null&&re.matrixWorldAutoUpdate===!0&&re.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&($e.cameraAutoUpdate===!0&&$e.updateCamera(re),re=$e.getCamera()),L.isScene===!0&&L.onBeforeRender(B,L,re,k),I=Ie.get(L,M.length),I.init(re),I.state.textureUnits=ge.getTextureUnits(),M.push(I),Rt.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),dt.setFromProjectionMatrix(Rt,rr,re.reversedDepth),pt=this.localClippingEnabled,nt=st.init(this.clippingPlanes,pt),w=Le.get(L,R.length),w.init(),R.push(w),$e.enabled===!0&&$e.isPresenting===!0){const Qe=B.xr.getDepthSensingMesh();Qe!==null&&Ks(Qe,re,-1/0,B.sortObjects)}Ks(L,re,0,B.sortObjects),w.finish(),B.sortObjects===!0&&w.sort(Re,Oe,re.reversedDepth),Ut=$e.enabled===!1||$e.isPresenting===!1||$e.hasDepthSensing()===!1,Ut&&at.addToRenderList(w,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),nt===!0&&st.beginShadows();const le=I.state.shadowsArray;if(lt.render(le,L,re),nt===!0&&st.endShadows(),(ce&&F.hasRenderPass())===!1){const Qe=w.opaque,Ne=w.transmissive;if(I.setupLights(),re.isArrayCamera){const et=re.cameras;if(Ne.length>0)for(let ot=0,vt=et.length;ot<vt;ot++){const St=et[ot];hl(Qe,Ne,L,St)}Ut&&at.render(L);for(let ot=0,vt=et.length;ot<vt;ot++){const St=et[ot];eo(w,L,St,St.viewport)}}else Ne.length>0&&hl(Qe,Ne,L,re),Ut&&at.render(L),eo(w,L,re)}k!==null&&j===0&&(ge.updateMultisampleRenderTarget(k),ge.updateRenderTargetMipmap(k)),ce&&F.end(B),L.isScene===!0&&L.onAfterRender(B,L,re),ke.resetDefaultState(),Q=-1,J=null,M.pop(),M.length>0?(I=M[M.length-1],ge.setTextureUnits(I.state.textureUnits),nt===!0&&st.setGlobalState(B.clippingPlanes,I.state.camera)):I=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,H!==null&&H.renderEnd()};function Ks(L,re,fe,ce){if(L.visible===!1)return;if(L.layers.test(re.layers)){if(L.isGroup)fe=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(re);else if(L.isLightProbeGrid)I.pushLightProbeGrid(L);else if(L.isLight)I.pushLight(L),L.castShadow&&I.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||dt.intersectsSprite(L)){ce&&Tt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Rt);const Qe=me.update(L),Ne=L.material;Ne.visible&&w.push(L,Qe,Ne,fe,Tt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||dt.intersectsObject(L))){const Qe=me.update(L),Ne=L.material;if(ce&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Tt.copy(L.boundingSphere.center)):(Qe.boundingSphere===null&&Qe.computeBoundingSphere(),Tt.copy(Qe.boundingSphere.center)),Tt.applyMatrix4(L.matrixWorld).applyMatrix4(Rt)),Array.isArray(Ne)){const et=Qe.groups;for(let ot=0,vt=et.length;ot<vt;ot++){const St=et[ot],it=Ne[St.materialIndex];it&&it.visible&&w.push(L,Qe,it,fe,Tt.z,St)}}else Ne.visible&&w.push(L,Qe,Ne,fe,Tt.z,null)}}const Ue=L.children;for(let Qe=0,Ne=Ue.length;Qe<Ne;Qe++)Ks(Ue[Qe],re,fe,ce)}function eo(L,re,fe,ce){const{opaque:le,transmissive:Ue,transparent:Qe}=L;I.setupLightsView(fe),nt===!0&&st.setGlobalState(B.clippingPlanes,fe),ce&&b.viewport(O.copy(ce)),le.length>0&&vs(le,re,fe),Ue.length>0&&vs(Ue,re,fe),Qe.length>0&&vs(Qe,re,fe),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function hl(L,re,fe,ce){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ce.id]===void 0){const it=Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ce.id]=new ji(1,1,{generateMipmaps:!0,type:it?cr:Ei,minFilter:Hs,samples:Math.max(4,z.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:It.workingColorSpace})}const Ue=I.state.transmissionRenderTarget[ce.id],Qe=ce.viewport||O;Ue.setSize(Qe.z*B.transmissionResolutionScale,Qe.w*B.transmissionResolutionScale);const Ne=B.getRenderTarget(),et=B.getActiveCubeFace(),ot=B.getActiveMipmapLevel();B.setRenderTarget(Ue),B.getClearColor(Ce),be=B.getClearAlpha(),be<1&&B.setClearColor(16777215,.5),B.clear(),Ut&&at.render(fe);const vt=B.toneMapping;B.toneMapping=or;const St=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),I.setupLightsView(ce),nt===!0&&st.setGlobalState(B.clippingPlanes,ce),vs(L,fe,ce),ge.updateMultisampleRenderTarget(Ue),ge.updateRenderTargetMipmap(Ue),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Dt=0,Yt=re.length;Dt<Yt;Dt++){const rn=re[Dt],{object:Ht,geometry:vn,material:We,group:Fn}=rn;if(We.side===_i&&Ht.layers.test(ce.layers)){const _t=We.side;We.side=pi,We.needsUpdate=!0,to(Ht,fe,ce,vn,We,Fn),We.side=_t,We.needsUpdate=!0,it=!0}}it===!0&&(ge.updateMultisampleRenderTarget(Ue),ge.updateRenderTargetMipmap(Ue))}B.setRenderTarget(Ne,et,ot),B.setClearColor(Ce,be),St!==void 0&&(ce.viewport=St),B.toneMapping=vt}function vs(L,re,fe){const ce=re.isScene===!0?re.overrideMaterial:null;for(let le=0,Ue=L.length;le<Ue;le++){const Qe=L[le],{object:Ne,geometry:et,group:ot}=Qe;let vt=Qe.material;vt.allowOverride===!0&&ce!==null&&(vt=ce),Ne.layers.test(fe.layers)&&to(Ne,re,fe,et,vt,ot)}}function to(L,re,fe,ce,le,Ue){L.onBeforeRender(B,re,fe,ce,le,Ue),L.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),le.onBeforeRender(B,re,fe,ce,L,Ue),le.transparent===!0&&le.side===_i&&le.forceSinglePass===!1?(le.side=pi,le.needsUpdate=!0,B.renderBufferDirect(fe,re,ce,le,L,Ue),le.side=lr,le.needsUpdate=!0,B.renderBufferDirect(fe,re,ce,le,L,Ue),le.side=_i):B.renderBufferDirect(fe,re,ce,le,L,Ue),L.onAfterRender(B,re,fe,ce,le,Ue)}function Ss(L,re,fe){re.isScene!==!0&&(re=Bt);const ce=de.get(L),le=I.state.lights,Ue=I.state.shadowsArray,Qe=le.state.version,Ne=Me.getParameters(L,le.state,Ue,re,fe,I.state.lightProbeGridArray),et=Me.getProgramCacheKey(Ne);let ot=ce.programs;ce.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?re.environment:null,ce.fog=re.fog;const vt=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;ce.envMap=we.get(L.envMap||ce.environment,vt),ce.envMapRotation=ce.environment!==null&&L.envMap===null?re.environmentRotation:L.envMapRotation,ot===void 0&&(L.addEventListener("dispose",Ci),ot=new Map,ce.programs=ot);let St=ot.get(et);if(St!==void 0){if(ce.currentProgram===St&&ce.lightsStateVersion===Qe)return pl(L,Ne),St}else Ne.uniforms=Me.getUniforms(L),H!==null&&L.isNodeMaterial&&H.build(L,fe,Ne),L.onBeforeCompile(Ne,B),St=Me.acquireProgram(Ne,et),ot.set(et,St),ce.uniforms=Ne.uniforms;const it=ce.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(it.clippingPlanes=st.uniform),pl(L,Ne),ce.needsLights=io(L),ce.lightsStateVersion=Qe,ce.needsLights&&(it.ambientLightColor.value=le.state.ambient,it.lightProbe.value=le.state.probe,it.directionalLights.value=le.state.directional,it.directionalLightShadows.value=le.state.directionalShadow,it.spotLights.value=le.state.spot,it.spotLightShadows.value=le.state.spotShadow,it.rectAreaLights.value=le.state.rectArea,it.ltc_1.value=le.state.rectAreaLTC1,it.ltc_2.value=le.state.rectAreaLTC2,it.pointLights.value=le.state.point,it.pointLightShadows.value=le.state.pointShadow,it.hemisphereLights.value=le.state.hemi,it.directionalShadowMatrix.value=le.state.directionalShadowMatrix,it.spotLightMatrix.value=le.state.spotLightMatrix,it.spotLightMap.value=le.state.spotLightMap,it.pointShadowMatrix.value=le.state.pointShadowMatrix),ce.lightProbeGrid=I.state.lightProbeGridArray.length>0,ce.currentProgram=St,ce.uniformsList=null,St}function no(L){if(L.uniformsList===null){const re=L.currentProgram.getUniforms();L.uniformsList=tu.seqWithValue(re.seq,L.uniforms)}return L.uniformsList}function pl(L,re){const fe=de.get(L);fe.outputColorSpace=re.outputColorSpace,fe.batching=re.batching,fe.batchingColor=re.batchingColor,fe.instancing=re.instancing,fe.instancingColor=re.instancingColor,fe.instancingMorph=re.instancingMorph,fe.skinning=re.skinning,fe.morphTargets=re.morphTargets,fe.morphNormals=re.morphNormals,fe.morphColors=re.morphColors,fe.morphTargetsCount=re.morphTargetsCount,fe.numClippingPlanes=re.numClippingPlanes,fe.numIntersection=re.numClipIntersection,fe.vertexAlphas=re.vertexAlphas,fe.vertexTangents=re.vertexTangents,fe.toneMapping=re.toneMapping}function Cu(L,re){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;C.setFromMatrixPosition(re.matrixWorld);for(let fe=0,ce=L.length;fe<ce;fe++){const le=L[fe];if(le.texture!==null&&le.boundingBox.containsPoint(C))return le}return null}function ln(L,re,fe,ce,le){re.isScene!==!0&&(re=Bt),ge.resetTextureUnits();const Ue=re.fog,Qe=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?re.environment:null,Ne=k===null?B.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:It.workingColorSpace,et=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,ot=we.get(ce.envMap||Qe,et),vt=ce.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,St=!!fe.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),it=!!fe.morphAttributes.position,Dt=!!fe.morphAttributes.normal,Yt=!!fe.morphAttributes.color;let rn=or;ce.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(rn=B.toneMapping);const Ht=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,vn=Ht!==void 0?Ht.length:0,We=de.get(ce),Fn=I.state.lights;if(nt===!0&&(pt===!0||L!==J)){const Vt=L===J&&ce.id===Q;st.setState(ce,L,Vt)}let _t=!1;ce.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Fn.state.version||We.outputColorSpace!==Ne||le.isBatchedMesh&&We.batching===!1||!le.isBatchedMesh&&We.batching===!0||le.isBatchedMesh&&We.batchingColor===!0&&le.colorTexture===null||le.isBatchedMesh&&We.batchingColor===!1&&le.colorTexture!==null||le.isInstancedMesh&&We.instancing===!1||!le.isInstancedMesh&&We.instancing===!0||le.isSkinnedMesh&&We.skinning===!1||!le.isSkinnedMesh&&We.skinning===!0||le.isInstancedMesh&&We.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&We.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&We.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&We.instancingMorph===!1&&le.morphTexture!==null||We.envMap!==ot||ce.fog===!0&&We.fog!==Ue||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==st.numPlanes||We.numIntersection!==st.numIntersection)||We.vertexAlphas!==vt||We.vertexTangents!==St||We.morphTargets!==it||We.morphNormals!==Dt||We.morphColors!==Yt||We.toneMapping!==rn||We.morphTargetsCount!==vn||!!We.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,We.__version=ce.version);let ii=We.currentProgram;_t===!0&&(ii=Ss(ce,re,le),H&&ce.isNodeMaterial&&H.onUpdateProgram(ce,ii,We));let ri=!1,Et=!1,fr=!1;const kt=ii.getUniforms(),Kt=We.uniforms;if(b.useProgram(ii.program)&&(ri=!0,Et=!0,fr=!0),ce.id!==Q&&(Q=ce.id,Et=!0),We.needsLights){const Vt=Cu(I.state.lightProbeGridArray,le);We.lightProbeGrid!==Vt&&(We.lightProbeGrid=Vt,Et=!0)}if(ri||J!==L){b.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),kt.setValue(ne,"projectionMatrix",L.projectionMatrix),kt.setValue(ne,"viewMatrix",L.matrixWorldInverse);const ki=kt.map.cameraPosition;ki!==void 0&&ki.setValue(ne,yt.setFromMatrixPosition(L.matrixWorld)),z.logarithmicDepthBuffer&&kt.setValue(ne,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&kt.setValue(ne,"isOrthographic",L.isOrthographicCamera===!0),J!==L&&(J=L,Et=!0,fr=!0)}if(We.needsLights&&(Fn.state.directionalShadowMap.length>0&&kt.setValue(ne,"directionalShadowMap",Fn.state.directionalShadowMap,ge),Fn.state.spotShadowMap.length>0&&kt.setValue(ne,"spotShadowMap",Fn.state.spotShadowMap,ge),Fn.state.pointShadowMap.length>0&&kt.setValue(ne,"pointShadowMap",Fn.state.pointShadowMap,ge)),le.isSkinnedMesh){kt.setOptional(ne,le,"bindMatrix"),kt.setOptional(ne,le,"bindMatrixInverse");const Vt=le.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),kt.setValue(ne,"boneTexture",Vt.boneTexture,ge))}le.isBatchedMesh&&(kt.setOptional(ne,le,"batchingTexture"),kt.setValue(ne,"batchingTexture",le._matricesTexture,ge),kt.setOptional(ne,le,"batchingIdTexture"),kt.setValue(ne,"batchingIdTexture",le._indirectTexture,ge),kt.setOptional(ne,le,"batchingColorTexture"),le._colorsTexture!==null&&kt.setValue(ne,"batchingColorTexture",le._colorsTexture,ge));const Oi=fe.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&$.update(le,fe,ii),(Et||We.receiveShadow!==le.receiveShadow)&&(We.receiveShadow=le.receiveShadow,kt.setValue(ne,"receiveShadow",le.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&re.environment!==null&&(Kt.envMapIntensity.value=re.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=$T()),Et){if(kt.setValue(ne,"toneMappingExposure",B.toneMappingExposure),We.needsLights&&Tu(Kt,fr),Ue&&ce.fog===!0&&He.refreshFogUniforms(Kt,Ue),He.refreshMaterialUniforms(Kt,ce,pe,xe,I.state.transmissionRenderTarget[L.id]),We.needsLights&&We.lightProbeGrid){const Vt=We.lightProbeGrid;Kt.probesSH.value=Vt.texture,Kt.probesMin.value.copy(Vt.boundingBox.min),Kt.probesMax.value.copy(Vt.boundingBox.max),Kt.probesResolution.value.copy(Vt.resolution)}tu.upload(ne,no(We),Kt,ge)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(tu.upload(ne,no(We),Kt,ge),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&kt.setValue(ne,"center",le.center),kt.setValue(ne,"modelViewMatrix",le.modelViewMatrix),kt.setValue(ne,"normalMatrix",le.normalMatrix),kt.setValue(ne,"modelMatrix",le.matrixWorld),ce.uniformsGroups!==void 0){const Vt=ce.uniformsGroups;for(let ki=0,Ki=Vt.length;ki<Ki;ki++){const ys=Vt[ki];Ae.update(ys,ii),Ae.bind(ys,ii)}}return ii}function Tu(L,re){L.ambientLightColor.needsUpdate=re,L.lightProbe.needsUpdate=re,L.directionalLights.needsUpdate=re,L.directionalLightShadows.needsUpdate=re,L.pointLights.needsUpdate=re,L.pointLightShadows.needsUpdate=re,L.spotLights.needsUpdate=re,L.spotLightShadows.needsUpdate=re,L.rectAreaLights.needsUpdate=re,L.hemisphereLights.needsUpdate=re}function io(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(L,re,fe){const ce=de.get(L);ce.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),de.get(L.texture).__webglTexture=re,de.get(L.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:fe,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,re){const fe=de.get(L);fe.__webglFramebuffer=re,fe.__useDefaultFramebuffer=re===void 0},this.setRenderTarget=function(L,re=0,fe=0){k=L,K=re,j=fe;let ce=null,le=!1,Ue=!1;if(L){const Ne=de.get(L);if(Ne.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(ne.FRAMEBUFFER,Ne.__webglFramebuffer),O.copy(L.viewport),ee.copy(L.scissor),ye=L.scissorTest,b.viewport(O),b.scissor(ee),b.setScissorTest(ye),Q=-1;return}else if(Ne.__webglFramebuffer===void 0)ge.setupRenderTarget(L);else if(Ne.__hasExternalTextures)ge.rebindTextures(L,de.get(L.texture).__webglTexture,de.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const vt=L.depthTexture;if(Ne.__boundDepthTexture!==vt){if(vt!==null&&de.has(vt)&&(L.width!==vt.image.width||L.height!==vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(L)}}const et=L.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ue=!0);const ot=de.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(ot[re])?ce=ot[re][fe]:ce=ot[re],le=!0):L.samples>0&&ge.useMultisampledRTT(L)===!1?ce=de.get(L).__webglMultisampledFramebuffer:Array.isArray(ot)?ce=ot[fe]:ce=ot,O.copy(L.viewport),ee.copy(L.scissor),ye=L.scissorTest}else O.copy(Ge).multiplyScalar(pe).floor(),ee.copy(xt).multiplyScalar(pe).floor(),ye=Ye;if(fe!==0&&(ce=q),b.bindFramebuffer(ne.FRAMEBUFFER,ce)&&b.drawBuffers(L,ce),b.viewport(O),b.scissor(ee),b.setScissorTest(ye),le){const Ne=de.get(L.texture);ne.framebufferTexture2D(ne.FRAMEBUFFER,ne.COLOR_ATTACHMENT0,ne.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne.__webglTexture,fe)}else if(Ue){const Ne=re;for(let et=0;et<L.textures.length;et++){const ot=de.get(L.textures[et]);ne.framebufferTextureLayer(ne.FRAMEBUFFER,ne.COLOR_ATTACHMENT0+et,ot.__webglTexture,fe,Ne)}}else if(L!==null&&fe!==0){const Ne=de.get(L.texture);ne.framebufferTexture2D(ne.FRAMEBUFFER,ne.COLOR_ATTACHMENT0,ne.TEXTURE_2D,Ne.__webglTexture,fe)}Q=-1},this.readRenderTargetPixels=function(L,re,fe,ce,le,Ue,Qe,Ne=0){if(!(L&&L.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let et=de.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Qe!==void 0&&(et=et[Qe]),et){b.bindFramebuffer(ne.FRAMEBUFFER,et);try{const ot=L.textures[Ne],vt=ot.format,St=ot.type;if(L.textures.length>1&&ne.readBuffer(ne.COLOR_ATTACHMENT0+Ne),!z.textureFormatReadable(vt)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(St)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}re>=0&&re<=L.width-ce&&fe>=0&&fe<=L.height-le&&ne.readPixels(re,fe,ce,le,Be.convert(vt),Be.convert(St),Ue)}finally{const ot=k!==null?de.get(k).__webglFramebuffer:null;b.bindFramebuffer(ne.FRAMEBUFFER,ot)}}},this.readRenderTargetPixelsAsync=async function(L,re,fe,ce,le,Ue,Qe,Ne=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let et=de.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Qe!==void 0&&(et=et[Qe]),et)if(re>=0&&re<=L.width-ce&&fe>=0&&fe<=L.height-le){b.bindFramebuffer(ne.FRAMEBUFFER,et);const ot=L.textures[Ne],vt=ot.format,St=ot.type;if(L.textures.length>1&&ne.readBuffer(ne.COLOR_ATTACHMENT0+Ne),!z.textureFormatReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=ne.createBuffer();ne.bindBuffer(ne.PIXEL_PACK_BUFFER,it),ne.bufferData(ne.PIXEL_PACK_BUFFER,Ue.byteLength,ne.STREAM_READ),ne.readPixels(re,fe,ce,le,Be.convert(vt),Be.convert(St),0);const Dt=k!==null?de.get(k).__webglFramebuffer:null;b.bindFramebuffer(ne.FRAMEBUFFER,Dt);const Yt=ne.fenceSync(ne.SYNC_GPU_COMMANDS_COMPLETE,0);return ne.flush(),await dA(ne,Yt,4),ne.bindBuffer(ne.PIXEL_PACK_BUFFER,it),ne.getBufferSubData(ne.PIXEL_PACK_BUFFER,0,Ue),ne.deleteBuffer(it),ne.deleteSync(Yt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,re=null,fe=0){const ce=Math.pow(2,-fe),le=Math.floor(L.image.width*ce),Ue=Math.floor(L.image.height*ce),Qe=re!==null?re.x:0,Ne=re!==null?re.y:0;ge.setTexture2D(L,0),ne.copyTexSubImage2D(ne.TEXTURE_2D,fe,0,0,Qe,Ne,le,Ue),b.unbindTexture()},this.copyTextureToTexture=function(L,re,fe=null,ce=null,le=0,Ue=0){let Qe,Ne,et,ot,vt,St,it,Dt,Yt;const rn=L.isCompressedTexture?L.mipmaps[Ue]:L.image;if(fe!==null)Qe=fe.max.x-fe.min.x,Ne=fe.max.y-fe.min.y,et=fe.isBox3?fe.max.z-fe.min.z:1,ot=fe.min.x,vt=fe.min.y,St=fe.isBox3?fe.min.z:0;else{const Kt=Math.pow(2,-le);Qe=Math.floor(rn.width*Kt),Ne=Math.floor(rn.height*Kt),L.isDataArrayTexture?et=rn.depth:L.isData3DTexture?et=Math.floor(rn.depth*Kt):et=1,ot=0,vt=0,St=0}ce!==null?(it=ce.x,Dt=ce.y,Yt=ce.z):(it=0,Dt=0,Yt=0);const Ht=Be.convert(re.format),vn=Be.convert(re.type);let We;re.isData3DTexture?(ge.setTexture3D(re,0),We=ne.TEXTURE_3D):re.isDataArrayTexture||re.isCompressedArrayTexture?(ge.setTexture2DArray(re,0),We=ne.TEXTURE_2D_ARRAY):(ge.setTexture2D(re,0),We=ne.TEXTURE_2D),b.activeTexture(ne.TEXTURE0),b.pixelStorei(ne.UNPACK_FLIP_Y_WEBGL,re.flipY),b.pixelStorei(ne.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),b.pixelStorei(ne.UNPACK_ALIGNMENT,re.unpackAlignment);const Fn=b.getParameter(ne.UNPACK_ROW_LENGTH),_t=b.getParameter(ne.UNPACK_IMAGE_HEIGHT),ii=b.getParameter(ne.UNPACK_SKIP_PIXELS),ri=b.getParameter(ne.UNPACK_SKIP_ROWS),Et=b.getParameter(ne.UNPACK_SKIP_IMAGES);b.pixelStorei(ne.UNPACK_ROW_LENGTH,rn.width),b.pixelStorei(ne.UNPACK_IMAGE_HEIGHT,rn.height),b.pixelStorei(ne.UNPACK_SKIP_PIXELS,ot),b.pixelStorei(ne.UNPACK_SKIP_ROWS,vt),b.pixelStorei(ne.UNPACK_SKIP_IMAGES,St);const fr=L.isDataArrayTexture||L.isData3DTexture,kt=re.isDataArrayTexture||re.isData3DTexture;if(L.isDepthTexture){const Kt=de.get(L),Oi=de.get(re),Vt=de.get(Kt.__renderTarget),ki=de.get(Oi.__renderTarget);b.bindFramebuffer(ne.READ_FRAMEBUFFER,Vt.__webglFramebuffer),b.bindFramebuffer(ne.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Ki=0;Ki<et;Ki++)fr&&(ne.framebufferTextureLayer(ne.READ_FRAMEBUFFER,ne.COLOR_ATTACHMENT0,de.get(L).__webglTexture,le,St+Ki),ne.framebufferTextureLayer(ne.DRAW_FRAMEBUFFER,ne.COLOR_ATTACHMENT0,de.get(re).__webglTexture,Ue,Yt+Ki)),ne.blitFramebuffer(ot,vt,Qe,Ne,it,Dt,Qe,Ne,ne.DEPTH_BUFFER_BIT,ne.NEAREST);b.bindFramebuffer(ne.READ_FRAMEBUFFER,null),b.bindFramebuffer(ne.DRAW_FRAMEBUFFER,null)}else if(le!==0||L.isRenderTargetTexture||de.has(L)){const Kt=de.get(L),Oi=de.get(re);b.bindFramebuffer(ne.READ_FRAMEBUFFER,Y),b.bindFramebuffer(ne.DRAW_FRAMEBUFFER,G);for(let Vt=0;Vt<et;Vt++)fr?ne.framebufferTextureLayer(ne.READ_FRAMEBUFFER,ne.COLOR_ATTACHMENT0,Kt.__webglTexture,le,St+Vt):ne.framebufferTexture2D(ne.READ_FRAMEBUFFER,ne.COLOR_ATTACHMENT0,ne.TEXTURE_2D,Kt.__webglTexture,le),kt?ne.framebufferTextureLayer(ne.DRAW_FRAMEBUFFER,ne.COLOR_ATTACHMENT0,Oi.__webglTexture,Ue,Yt+Vt):ne.framebufferTexture2D(ne.DRAW_FRAMEBUFFER,ne.COLOR_ATTACHMENT0,ne.TEXTURE_2D,Oi.__webglTexture,Ue),le!==0?ne.blitFramebuffer(ot,vt,Qe,Ne,it,Dt,Qe,Ne,ne.COLOR_BUFFER_BIT,ne.NEAREST):kt?ne.copyTexSubImage3D(We,Ue,it,Dt,Yt+Vt,ot,vt,Qe,Ne):ne.copyTexSubImage2D(We,Ue,it,Dt,ot,vt,Qe,Ne);b.bindFramebuffer(ne.READ_FRAMEBUFFER,null),b.bindFramebuffer(ne.DRAW_FRAMEBUFFER,null)}else kt?L.isDataTexture||L.isData3DTexture?ne.texSubImage3D(We,Ue,it,Dt,Yt,Qe,Ne,et,Ht,vn,rn.data):re.isCompressedArrayTexture?ne.compressedTexSubImage3D(We,Ue,it,Dt,Yt,Qe,Ne,et,Ht,rn.data):ne.texSubImage3D(We,Ue,it,Dt,Yt,Qe,Ne,et,Ht,vn,rn):L.isDataTexture?ne.texSubImage2D(ne.TEXTURE_2D,Ue,it,Dt,Qe,Ne,Ht,vn,rn.data):L.isCompressedTexture?ne.compressedTexSubImage2D(ne.TEXTURE_2D,Ue,it,Dt,rn.width,rn.height,Ht,rn.data):ne.texSubImage2D(ne.TEXTURE_2D,Ue,it,Dt,Qe,Ne,Ht,vn,rn);b.pixelStorei(ne.UNPACK_ROW_LENGTH,Fn),b.pixelStorei(ne.UNPACK_IMAGE_HEIGHT,_t),b.pixelStorei(ne.UNPACK_SKIP_PIXELS,ii),b.pixelStorei(ne.UNPACK_SKIP_ROWS,ri),b.pixelStorei(ne.UNPACK_SKIP_IMAGES,Et),Ue===0&&re.generateMipmaps&&ne.generateMipmap(We),b.unbindTexture()},this.initRenderTarget=function(L){de.get(L).__webglFramebuffer===void 0&&ge.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?ge.setTextureCube(L,0):L.isData3DTexture?ge.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?ge.setTexture2DArray(L,0):ge.setTexture2D(L,0),b.unbindTexture()},this.resetState=function(){K=0,j=0,k=null,b.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),t.unpackColorSpace=It._getUnpackColorSpace()}}const zs=class zs{constructor(e,t){let n,s;this.promise=new Promise((f,p)=>{n=f,s=p});const o=n.bind(this),l=s.bind(this),u=(...f)=>{o(...f)},d=f=>{l(f)};e(u.bind(this),d.bind(this)),this.abortHandler=t,this.id=zs.idGen++}then(e){return new zs((t,n)=>{this.promise=this.promise.then((...s)=>{const o=e(...s);o instanceof Promise||o instanceof zs?o.then((...l)=>{t(...l)}):t(o)}).catch(s=>{n(s)})},this.abortHandler)}catch(e){return new zs(t=>{this.promise=this.promise.then((...n)=>{t(...n)}).catch(e)},this.abortHandler)}abort(e){this.abortHandler&&this.abortHandler(e)}};Fe(zs,"idGen",0);let ol=zs;class bv extends Error{constructor(e){super(e)}}(function(){const a=new Float32Array(1),e=new Int32Array(a.buffer);return function(t){a[0]=t;const n=e[0];let s=n>>16&32768,o=n>>12&2047;const l=n>>23&255;return l<103?s:l>142?(s|=31744,s|=(l==255?0:1)&&n&8388607,s):l<113?(o|=2048,s|=(o>>114-l)+(o>>113-l&1),s):(s|=l-112<<10|o>>1,s+=o&1,s)}})();const Vf=(function(){const a=new Float32Array(1),e=new Int32Array(a.buffer);return function(t){return a[0]=t,e[0]}})(),JT=function(a,e){return a[e]+(a[e+1]<<8)+(a[e+2]<<16)+(a[e+3]<<24)},_u=function(a,e,t=!0,n){const s=new AbortController,o=s.signal;let l=!1;const u=p=>{s.abort(p),l=!0};let d=!1;const f=(p,m,g,x)=>{e&&!d&&(e(p,m,g,x),p===100&&(d=!0))};return new ol((p,m)=>{const g={signal:o};n&&(g.headers=n),fetch(a,g).then(async x=>{if(!x.ok){const P=await x.text();m(new Error(`Fetch failed: ${x.status} ${x.statusText} ${P}`));return}const A=x.body.getReader();let _=0,v=x.headers.get("Content-Length"),y=v?parseInt(v):void 0;const T=[];for(;!l;)try{const{value:P,done:C}=await A.read();if(C){if(f(100,"100%",P,y),t){const R=new Blob(T).arrayBuffer();p(R)}else p();break}_+=P.length;let w,I;y!==void 0&&(w=_/y*100,I=`${w.toFixed(2)}%`),t&&T.push(P),f(w,I,P,y)}catch(P){m(P);return}}).catch(x=>{m(new bv(x))})},u)},on=function(a,e,t){return Math.max(Math.min(a,t),e)},Na=function(){return performance.now()/1e3},ka=a=>{if(a.geometry&&(a.geometry.dispose(),a.geometry=null),a.material&&(a.material.dispose(),a.material=null),a.children)for(let e of a.children)ka(e)},Mi=(a,e)=>new Promise(t=>{window.setTimeout(()=>{t(a?a():void 0)},e?1:50)}),Xa=(a=0)=>{let e=0;if(a===1)e=9;else if(a===2)e=24;else if(a===3)e=45;else if(a>3)throw new Error("getSphericalHarmonicsComponentCountForDegree() -> Invalid spherical harmonics degree");return e},dp=()=>{let a,e;return{promise:new Promise((n,s)=>{a=n,e=s}),resolve:a,reject:e}},Gf=a=>{let e,t;return a||(a=()=>{}),{promise:new ol((s,o)=>{e=s,t=o},a),resolve:e,reject:t}};class e1{constructor(e,t,n){this.major=e,this.minor=t,this.patch=n}toString(){return`${this.major}_${this.minor}_${this.patch}`}}function fp(){const a=navigator.userAgent;return a.indexOf("iPhone")>0||a.indexOf("iPad")>0}function Rv(){if(fp()){const a=navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);return new e1(parseInt(a[1]||0,10),parseInt(a[2]||0,10),parseInt(a[3]||0,10))}else return null}const t1=14,Jo=class Jo{constructor(e=0){this.sphericalHarmonicsDegree=e,this.sphericalHarmonicsCount=Xa(this.sphericalHarmonicsDegree),this.componentCount=this.sphericalHarmonicsCount+t1,this.defaultSphericalHarmonics=new Array(this.sphericalHarmonicsCount).fill(0),this.splats=[],this.splatCount=0}static createSplat(e=0){const t=[0,0,0,1,1,1,1,0,0,0,0,0,0,0];let n=Xa(e);for(let s=0;s<n;s++)t.push(0);return t}addSplat(e){this.splats.push(e),this.splatCount++}getSplat(e){return this.splats[e]}addDefaultSplat(){const e=Jo.createSplat(this.sphericalHarmonicsDegree);return this.addSplat(e),e}addSplatFromComonents(e,t,n,s,o,l,u,d,f,p,m,g,x,A,..._){const v=[e,t,n,s,o,l,u,d,f,p,m,g,x,A,...this.defaultSphericalHarmonics];for(let y=0;y<_.length&&y<this.sphericalHarmonicsCount;y++)v[y]=_[y];return this.addSplat(v),v}addSplatFromArray(e,t){const n=e.splats[t],s=Jo.createSplat(this.sphericalHarmonicsDegree);for(let o=0;o<this.componentCount&&o<n.length;o++)s[o]=n[o];this.addSplat(s)}};Fe(Jo,"OFFSET",{X:0,Y:1,Z:2,SCALE0:3,SCALE1:4,SCALE2:5,ROTATION0:6,ROTATION1:7,ROTATION2:8,ROTATION3:9,FDC0:10,FDC1:11,FDC2:12,OPACITY:13,FRC0:14,FRC1:15,FRC2:16,FRC3:17,FRC4:18,FRC5:19,FRC6:20,FRC7:21,FRC8:22,FRC9:23,FRC10:24,FRC11:25,FRC12:26,FRC13:27,FRC14:28,FRC15:29,FRC16:30,FRC17:31,FRC18:32,FRC19:33,FRC20:34,FRC21:35,FRC22:36,FRC23:37});let ze=Jo;class wt{}Fe(wt,"DefaultSplatSortDistanceMapPrecision",16),Fe(wt,"MemoryPageSize",65536),Fe(wt,"BytesPerFloat",4),Fe(wt,"BytesPerInt",4),Fe(wt,"MaxScenes",32),Fe(wt,"ProgressiveLoadSectionSize",262144),Fe(wt,"ProgressiveLoadSectionDelayDuration",15),Fe(wt,"SphericalHarmonics8BitCompressionRange",3);const n1=wt.SphericalHarmonics8BitCompressionRange,as=n1/2,Cn=sl.toHalfFloat.bind(sl),hp=sl.fromHalfFloat.bind(sl),an=(a,e,t=!1,n,s)=>{if(e===0)return a;if(e===1||e===2&&!t)return sl.fromHalfFloat(a);if(e===2)return pp(a,n,s)},Ko=(a,e,t)=>{a=on(a,e,t);const n=t-e;return on(Math.floor((a-e)/n*255),0,255)},pp=(a,e,t)=>{const n=t-e;return a/255*n+e},Iv=(a,e,t)=>Ko(hp(a,e,t)),i1=(a,e,t)=>Cn(pp(a,e,t)),zt=(a,e,t,n=!1)=>t===0?a.getFloat32(e*4,!0):t===1||t===2&&!n?a.getUint16(e*2,!0):a.getUint8(e,!0),r1=(function(){const a=e=>e;return function(e,t,n,s=!1){if(t===n)return e;let o=a;return t===2&&s?n===1?o=i1:n==0&&(o=pp):t===2||t===1?n===0?o=hp:n==2&&(s?o=Iv:o=a):t===0&&(n===1?o=Cn:n==2&&(s?o=Ko:o=Cn)),o(e)}})(),Ua=(a,e,t,n,s=0)=>{const o=new Uint8Array(a,e),l=new Uint8Array(t,n);for(let u=0;u<s;u++)l[u]=o[u]},ve=class ve{constructor(e,t=!0){Fe(this,"getSplatScaleAndRotation",(function(){const e=new mt,t=new mt,n=new mt,s=new U,o=new U,l=new tn;return function(u,d,f,p,m){const g=this.globalSplatIndexToSectionMap[u],x=this.sections[g],A=u-x.splatCountOffset,_=x.bytesPerSplat*A+ve.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,v=new DataView(this.bufferData,x.dataBase+_);o.set(an(zt(v,0,this.compressionLevel),this.compressionLevel),an(zt(v,1,this.compressionLevel),this.compressionLevel),an(zt(v,2,this.compressionLevel),this.compressionLevel)),m&&(m.x!==void 0&&(o.x=m.x),m.y!==void 0&&(o.y=m.y),m.z!==void 0&&(o.z=m.z)),l.set(an(zt(v,4,this.compressionLevel),this.compressionLevel),an(zt(v,5,this.compressionLevel),this.compressionLevel),an(zt(v,6,this.compressionLevel),this.compressionLevel),an(zt(v,3,this.compressionLevel),this.compressionLevel)),p?(e.makeScale(o.x,o.y,o.z),t.makeRotationFromQuaternion(l),n.copy(e).multiply(t).multiply(p),n.decompose(s,f,d)):(d.copy(o),f.copy(l))}})());Fe(this,"fillSplatScaleRotationArray",(function(){const e=new mt,t=new mt,n=new mt,s=new U,o=new tn,l=new U,u=d=>{const f=d.w<0?-1:1;d.x*=f,d.y*=f,d.z*=f,d.w*=f};return function(d,f,p,m,g,x,A,_){const v=this.splatCount;m=m||0,g=g||v-1,x===void 0&&(x=m);const y=(T,P)=>r1(T,P,A);for(let T=m;T<=g;T++){const P=this.globalSplatIndexToSectionMap[T],C=this.sections[P],w=T-C.splatCountOffset,I=C.bytesPerSplat*w+ve.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,R=(T-m+x)*ve.ScaleComponentCount,M=(T-m+x)*ve.RotationComponentCount,F=new DataView(this.bufferData,C.dataBase+I),B=_&&_.x!==void 0?_.x:zt(F,0,this.compressionLevel),N=_&&_.y!==void 0?_.y:zt(F,1,this.compressionLevel),H=_&&_.z!==void 0?_.z:zt(F,2,this.compressionLevel),q=zt(F,3,this.compressionLevel),Y=zt(F,4,this.compressionLevel),G=zt(F,5,this.compressionLevel),K=zt(F,6,this.compressionLevel);s.set(an(B,this.compressionLevel),an(N,this.compressionLevel),an(H,this.compressionLevel)),o.set(an(Y,this.compressionLevel),an(G,this.compressionLevel),an(K,this.compressionLevel),an(q,this.compressionLevel)).normalize(),p&&(l.set(0,0,0),e.makeScale(s.x,s.y,s.z),t.makeRotationFromQuaternion(o),n.identity().premultiply(e).premultiply(t),n.premultiply(p),n.decompose(l,o,s),o.normalize()),u(o),d&&(d[R]=y(s.x,0),d[R+1]=y(s.y,0),d[R+2]=y(s.z,0)),f&&(f[M]=y(o.x,0),f[M+1]=y(o.y,0),f[M+2]=y(o.z,0),f[M+3]=y(o.w,0))}}})());Fe(this,"fillSphericalHarmonicsArray",(function(){const e=new ft,t=new mt,n=new U,s=new U,o=new tn,l=[],u=[],d=[],f=[],p=[],m=[],g=[],x=[],A=[],_=[],v=[],y=[],T=[],P=[],C=[],w=[],I=[],R=[],M=Y=>Y,F=(Y,G,K,j)=>{Y[0]=G,Y[1]=K,Y[2]=j},B=(Y,G,K,j,k)=>{Y[0]=zt(G,j,k,!0),Y[1]=zt(G,j+K,k,!0),Y[2]=zt(G,j+K+K,k,!0)},N=(Y,G)=>{G[0]=Y[0],G[1]=Y[1],G[2]=Y[2]},H=(Y,G,K,j)=>{G[K]=j(Y[0]),G[K+1]=j(Y[1]),G[K+2]=j(Y[2])},q=(Y,G,K,j,k)=>(G[0]=an(Y[0],K,!0,j,k),G[1]=an(Y[1],K,!0,j,k),G[2]=an(Y[2],K,!0,j,k),G);return function(Y,G,K,j,k,Q,J){const O=this.splatCount;j=j||0,k=k||O-1,Q===void 0&&(Q=j),K&&G>=1&&(t.copy(K),t.decompose(n,o,s),o.normalize(),t.makeRotationFromQuaternion(o),e.setFromMatrix4(t),F(l,e.elements[4],-e.elements[7],e.elements[1]),F(u,-e.elements[5],e.elements[8],-e.elements[2]),F(d,e.elements[3],-e.elements[6],e.elements[0]));const ee=Ce=>Iv(Ce,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff),ye=Ce=>Ko(Ce,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff);for(let Ce=j;Ce<=k;Ce++){const be=this.globalSplatIndexToSectionMap[Ce],se=this.sections[be];G=Math.min(G,se.sphericalHarmonicsDegree);const xe=Xa(G),pe=Ce-se.splatCountOffset,Re=se.bytesPerSplat*pe+ve.CompressionLevels[this.compressionLevel].SphericalHarmonicsOffsetBytes,Oe=new DataView(this.bufferData,se.dataBase+Re),Ge=(Ce-j+Q)*xe;let xt=K?0:this.compressionLevel,Ye=M;xt!==J&&(xt===1?J===0?Ye=hp:J==2&&(Ye=ee):xt===0&&(J===1?Ye=Cn:J==2&&(Ye=ye)));const dt=this.minSphericalHarmonicsCoeff,nt=this.maxSphericalHarmonicsCoeff;G>=1&&(B(A,Oe,3,0,this.compressionLevel),B(_,Oe,3,1,this.compressionLevel),B(v,Oe,3,2,this.compressionLevel),K?(q(A,A,this.compressionLevel,dt,nt),q(_,_,this.compressionLevel,dt,nt),q(v,v,this.compressionLevel,dt,nt),ve.rotateSphericalHarmonics3(A,_,v,l,u,d,P,C,w)):(N(A,P),N(_,C),N(v,w)),H(P,Y,Ge,Ye),H(C,Y,Ge+3,Ye),H(w,Y,Ge+6,Ye),G>=2&&(B(A,Oe,5,9,this.compressionLevel),B(_,Oe,5,10,this.compressionLevel),B(v,Oe,5,11,this.compressionLevel),B(y,Oe,5,12,this.compressionLevel),B(T,Oe,5,13,this.compressionLevel),K?(q(A,A,this.compressionLevel,dt,nt),q(_,_,this.compressionLevel,dt,nt),q(v,v,this.compressionLevel,dt,nt),q(y,y,this.compressionLevel,dt,nt),q(T,T,this.compressionLevel,dt,nt),ve.rotateSphericalHarmonics5(A,_,v,y,T,l,u,d,f,p,m,g,x,P,C,w,I,R)):(N(A,P),N(_,C),N(v,w),N(y,I),N(T,R)),H(P,Y,Ge+9,Ye),H(C,Y,Ge+12,Ye),H(w,Y,Ge+15,Ye),H(I,Y,Ge+18,Ye),H(R,Y,Ge+21,Ye)))}}})());this.constructFromBuffer(e,t)}getSplatCount(){return this.splatCount}getMaxSplatCount(){return this.maxSplatCount}getMinSphericalHarmonicsDegree(){let e=0;for(let t=0;t<this.sections.length;t++){const n=this.sections[t];(t===0||n.sphericalHarmonicsDegree<e)&&(e=n.sphericalHarmonicsDegree)}return e}getBucketIndex(e,t){let n;const s=e.fullBucketCount*e.bucketSize;if(t<s)n=Math.floor(t/e.bucketSize);else{let o=s;n=e.fullBucketCount;let l=0;for(;o<e.splatCount;){let u=e.partiallyFilledBucketLengths[l];if(t>=o&&t<o+u)break;o+=u,n++,l++}}return n}getSplatCenter(e,t,n){const s=this.globalSplatIndexToSectionMap[e],o=this.sections[s],l=e-o.splatCountOffset,u=o.bytesPerSplat*l,d=new DataView(this.bufferData,o.dataBase+u),f=zt(d,0,this.compressionLevel),p=zt(d,1,this.compressionLevel),m=zt(d,2,this.compressionLevel);if(this.compressionLevel>=1){const x=this.getBucketIndex(o,l)*ve.BucketStorageSizeFloats,A=o.compressionScaleFactor,_=o.compressionScaleRange;t.x=(f-_)*A+o.bucketArray[x],t.y=(p-_)*A+o.bucketArray[x+1],t.z=(m-_)*A+o.bucketArray[x+2]}else t.x=f,t.y=p,t.z=m;n&&t.applyMatrix4(n)}getSplatColor(e,t){const n=this.globalSplatIndexToSectionMap[e],s=this.sections[n],o=e-s.splatCountOffset,l=s.bytesPerSplat*o+ve.CompressionLevels[this.compressionLevel].ColorOffsetBytes,u=new Uint8Array(this.bufferData,s.dataBase+l,4);t.set(u[0],u[1],u[2],u[3])}fillSplatCenterArray(e,t,n,s,o){const l=this.splatCount;n=n||0,s=s||l-1,o===void 0&&(o=n);const u=new U;for(let d=n;d<=s;d++){const f=this.globalSplatIndexToSectionMap[d],p=this.sections[f],m=d-p.splatCountOffset,g=(d-n+o)*ve.CenterComponentCount,x=p.bytesPerSplat*m,A=new DataView(this.bufferData,p.dataBase+x),_=zt(A,0,this.compressionLevel),v=zt(A,1,this.compressionLevel),y=zt(A,2,this.compressionLevel);if(this.compressionLevel>=1){const P=this.getBucketIndex(p,m)*ve.BucketStorageSizeFloats,C=p.compressionScaleFactor,w=p.compressionScaleRange;u.x=(_-w)*C+p.bucketArray[P],u.y=(v-w)*C+p.bucketArray[P+1],u.z=(y-w)*C+p.bucketArray[P+2]}else u.x=_,u.y=v,u.z=y;t&&u.applyMatrix4(t),e[g]=u.x,e[g+1]=u.y,e[g+2]=u.z}}fillSplatCovarianceArray(e,t,n,s,o,l){const u=this.splatCount,d=new U,f=new tn;n=n||0,s=s||u-1,o===void 0&&(o=n);for(let p=n;p<=s;p++){const m=this.globalSplatIndexToSectionMap[p],g=this.sections[m],x=p-g.splatCountOffset,A=(p-n+o)*ve.CovarianceComponentCount,_=g.bytesPerSplat*x+ve.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,v=new DataView(this.bufferData,g.dataBase+_);d.set(an(zt(v,0,this.compressionLevel),this.compressionLevel),an(zt(v,1,this.compressionLevel),this.compressionLevel),an(zt(v,2,this.compressionLevel),this.compressionLevel)),f.set(an(zt(v,4,this.compressionLevel),this.compressionLevel),an(zt(v,5,this.compressionLevel),this.compressionLevel),an(zt(v,6,this.compressionLevel),this.compressionLevel),an(zt(v,3,this.compressionLevel),this.compressionLevel)),ve.computeCovariance(d,f,t,e,A,l)}}fillSplatColorArray(e,t,n,s,o){const l=this.splatCount;n=n||0,s=s||l-1,o===void 0&&(o=n);for(let u=n;u<=s;u++){const d=this.globalSplatIndexToSectionMap[u],f=this.sections[d],p=u-f.splatCountOffset,m=(u-n+o)*ve.ColorComponentCount,g=f.bytesPerSplat*p+ve.CompressionLevels[this.compressionLevel].ColorOffsetBytes,x=new Uint8Array(this.bufferData,f.dataBase+g);let A=x[3];A=A>=t?A:0,e[m]=x[0],e[m+1]=x[1],e[m+2]=x[2],e[m+3]=A}}static parseHeader(e){const t=new Uint8Array(e,0,ve.HeaderSizeBytes),n=new Uint16Array(e,0,ve.HeaderSizeBytes/2),s=new Uint32Array(e,0,ve.HeaderSizeBytes/4),o=new Float32Array(e,0,ve.HeaderSizeBytes/4),l=t[0],u=t[1],d=s[1],f=s[2],p=s[3],m=s[4],g=n[10],x=new U(o[6],o[7],o[8]),A=o[9]||-as,_=o[10]||as;return{versionMajor:l,versionMinor:u,maxSectionCount:d,sectionCount:f,maxSplatCount:p,splatCount:m,compressionLevel:g,sceneCenter:x,minSphericalHarmonicsCoeff:A,maxSphericalHarmonicsCoeff:_}}static writeHeaderCountsToBuffer(e,t,n){const s=new Uint32Array(n,0,ve.HeaderSizeBytes/4);s[2]=e,s[4]=t}static writeHeaderToBuffer(e,t){const n=new Uint8Array(t,0,ve.HeaderSizeBytes),s=new Uint16Array(t,0,ve.HeaderSizeBytes/2),o=new Uint32Array(t,0,ve.HeaderSizeBytes/4),l=new Float32Array(t,0,ve.HeaderSizeBytes/4);n[0]=e.versionMajor,n[1]=e.versionMinor,n[2]=0,n[3]=0,o[1]=e.maxSectionCount,o[2]=e.sectionCount,o[3]=e.maxSplatCount,o[4]=e.splatCount,s[10]=e.compressionLevel,l[6]=e.sceneCenter.x,l[7]=e.sceneCenter.y,l[8]=e.sceneCenter.z,l[9]=e.minSphericalHarmonicsCoeff||-as,l[10]=e.maxSphericalHarmonicsCoeff||as}static parseSectionHeaders(e,t,n=0,s){const o=e.compressionLevel,l=e.maxSectionCount,u=new Uint16Array(t,n,l*ve.SectionHeaderSizeBytes/2),d=new Uint32Array(t,n,l*ve.SectionHeaderSizeBytes/4),f=new Float32Array(t,n,l*ve.SectionHeaderSizeBytes/4),p=[];let m=0,g=m/2,x=m/4,A=ve.HeaderSizeBytes+e.maxSectionCount*ve.SectionHeaderSizeBytes,_=0;for(let v=0;v<l;v++){const y=d[x+1],T=d[x+2],P=d[x+3],C=f[x+4],w=C/2,I=u[g+10],R=d[x+6]||ve.CompressionLevels[o].ScaleRange,M=d[x+8],F=d[x+9],B=F*4,N=I*P+B,H=u[g+20],{bytesPerSplat:q}=ve.calculateComponentStorage(o,H),Y=q*y,G=Y+N,K={bytesPerSplat:q,splatCountOffset:_,splatCount:s?y:0,maxSplatCount:y,bucketSize:T,bucketCount:P,bucketBlockSize:C,halfBucketBlockSize:w,bucketStorageSizeBytes:I,bucketsStorageSizeBytes:N,splatDataStorageSizeBytes:Y,storageSizeBytes:G,compressionScaleRange:R,compressionScaleFactor:w/R,base:A,bucketsBase:A+B,dataBase:A+N,fullBucketCount:M,partiallyFilledBucketCount:F,sphericalHarmonicsDegree:H};p[v]=K,A+=G,m+=ve.SectionHeaderSizeBytes,g=m/2,x=m/4,_+=y}return p}static writeSectionHeaderToBuffer(e,t,n,s=0){const o=new Uint16Array(n,s,ve.SectionHeaderSizeBytes/2),l=new Uint32Array(n,s,ve.SectionHeaderSizeBytes/4),u=new Float32Array(n,s,ve.SectionHeaderSizeBytes/4);l[0]=e.splatCount,l[1]=e.maxSplatCount,l[2]=t>=1?e.bucketSize:0,l[3]=t>=1?e.bucketCount:0,u[4]=t>=1?e.bucketBlockSize:0,o[10]=t>=1?ve.BucketStorageSizeBytes:0,l[6]=t>=1?e.compressionScaleRange:0,l[7]=e.storageSizeBytes,l[8]=t>=1?e.fullBucketCount:0,l[9]=t>=1?e.partiallyFilledBucketCount:0,o[20]=e.sphericalHarmonicsDegree}static writeSectionHeaderSplatCountToBuffer(e,t,n=0){const s=new Uint32Array(t,n,ve.SectionHeaderSizeBytes/4);s[0]=e}constructFromBuffer(e,t){this.bufferData=e,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSectionMap=[];const n=ve.parseHeader(this.bufferData);this.versionMajor=n.versionMajor,this.versionMinor=n.versionMinor,this.maxSectionCount=n.maxSectionCount,this.sectionCount=t?n.maxSectionCount:0,this.maxSplatCount=n.maxSplatCount,this.splatCount=t?n.maxSplatCount:0,this.compressionLevel=n.compressionLevel,this.sceneCenter=new U().copy(n.sceneCenter),this.minSphericalHarmonicsCoeff=n.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff=n.maxSphericalHarmonicsCoeff,this.sections=ve.parseSectionHeaders(n,this.bufferData,ve.HeaderSizeBytes,t),this.linkBufferArrays(),this.buildMaps()}static calculateComponentStorage(e,t){const n=ve.CompressionLevels[e].BytesPerCenter,s=ve.CompressionLevels[e].BytesPerScale,o=ve.CompressionLevels[e].BytesPerRotation,l=ve.CompressionLevels[e].BytesPerColor,u=Xa(t),d=ve.CompressionLevels[e].BytesPerSphericalHarmonicsComponent*u,f=n+s+o+l+d;return{bytesPerCenter:n,bytesPerScale:s,bytesPerRotation:o,bytesPerColor:l,sphericalHarmonicsComponentsPerSplat:u,sphericalHarmonicsBytesPerSplat:d,bytesPerSplat:f}}linkBufferArrays(){for(let e=0;e<this.maxSectionCount;e++){const t=this.sections[e];t.bucketArray=new Float32Array(this.bufferData,t.bucketsBase,t.bucketCount*ve.BucketStorageSizeFloats),t.partiallyFilledBucketCount>0&&(t.partiallyFilledBucketLengths=new Uint32Array(this.bufferData,t.base,t.partiallyFilledBucketCount))}}buildMaps(){let e=0;for(let t=0;t<this.maxSectionCount;t++){const n=this.sections[t];for(let s=0;s<n.maxSplatCount;s++){const o=e+s;this.globalSplatIndexToLocalSplatIndexMap[o]=s,this.globalSplatIndexToSectionMap[o]=t}e+=n.maxSplatCount}}updateLoadedCounts(e,t){ve.writeHeaderCountsToBuffer(e,t,this.bufferData),this.sectionCount=e,this.splatCount=t}updateSectionLoadedCounts(e,t){const n=ve.HeaderSizeBytes+ve.SectionHeaderSizeBytes*e;ve.writeSectionHeaderSplatCountToBuffer(t,this.bufferData,n),this.sections[e].splatCount=t}static generateFromUncompressedSplatArrays(e,t,n,s,o,l,u=[]){let d=0;for(let w=0;w<e.length;w++){const I=e[w];d=Math.max(I.sphericalHarmonicsDegree,d)}let f,p;for(let w=0;w<e.length;w++){const I=e[w];for(let R=0;R<I.splats.length;R++){const M=I.splats[R];for(let F=ze.OFFSET.FRC0;F<ze.OFFSET.FRC23&&F<M.length;F++)(!f||M[F]<f)&&(f=M[F]),(!p||M[F]>p)&&(p=M[F])}}f=f||-as,p=p||as;const{bytesPerSplat:m}=ve.calculateComponentStorage(n,d),g=ve.CompressionLevels[n].ScaleRange,x=[],A=[];let _=0;for(let w=0;w<e.length;w++){const I=e[w],R=new ze(d);for(let be=0;be<I.splatCount;be++){const se=I.splats[be];(se[ze.OFFSET.OPACITY]||0)>=t&&R.addSplat(se)}const M=u[w]||{},F=(M.blockSizeFactor||1)*(o||ve.BucketBlockSize),B=Math.ceil((M.bucketSizeFactor||1)*(l||ve.BucketSize)),N=ve.computeBucketsForUncompressedSplatArray(R,F,B),H=N.fullBuckets.length,q=N.partiallyFullBuckets.map(be=>be.splats.length),Y=q.length,G=[...N.fullBuckets,...N.partiallyFullBuckets],K=R.splats.length*m,j=Y*4,k=n>=1?G.length*ve.BucketStorageSizeBytes+j:0,Q=K+k,J=new ArrayBuffer(Q),O=g/(F*.5),ee=new U;let ye=0;for(let be=0;be<G.length;be++){const se=G[be];ee.fromArray(se.center);for(let xe=0;xe<se.splats.length;xe++){let pe=se.splats[xe];const Re=R.splats[pe],Oe=k+ye*m;ve.writeSplatDataToSectionBuffer(Re,J,Oe,n,d,ee,O,g,f,p),ye++}}if(_+=ye,n>=1){const be=new Uint32Array(J,0,q.length*4);for(let xe=0;xe<q.length;xe++)be[xe]=q[xe];const se=new Float32Array(J,j,G.length*ve.BucketStorageSizeFloats);for(let xe=0;xe<G.length;xe++){const pe=G[xe],Re=xe*3;se[Re]=pe.center[0],se[Re+1]=pe.center[1],se[Re+2]=pe.center[2]}}x.push(J);const Ce=new ArrayBuffer(ve.SectionHeaderSizeBytes);ve.writeSectionHeaderToBuffer({maxSplatCount:ye,splatCount:ye,bucketSize:B,bucketCount:G.length,bucketBlockSize:F,compressionScaleRange:g,storageSizeBytes:Q,fullBucketCount:H,partiallyFilledBucketCount:Y,sphericalHarmonicsDegree:d},n,Ce,0),A.push(Ce)}let v=0;for(let w of x)v+=w.byteLength;const y=ve.HeaderSizeBytes+ve.SectionHeaderSizeBytes*x.length+v,T=new ArrayBuffer(y);ve.writeHeaderToBuffer({versionMajor:0,versionMinor:1,maxSectionCount:x.length,sectionCount:x.length,maxSplatCount:_,splatCount:_,compressionLevel:n,sceneCenter:s,minSphericalHarmonicsCoeff:f,maxSphericalHarmonicsCoeff:p},T);let P=ve.HeaderSizeBytes;for(let w of A)new Uint8Array(T,P,ve.SectionHeaderSizeBytes).set(new Uint8Array(w)),P+=ve.SectionHeaderSizeBytes;for(let w of x)new Uint8Array(T,P,w.byteLength).set(new Uint8Array(w)),P+=w.byteLength;return new ve(T)}static computeBucketsForUncompressedSplatArray(e,t,n){let s=e.splatCount;const o=t/2,l=new U,u=new U;for(let _=0;_<s;_++){const v=e.splats[_],y=[v[ze.OFFSET.X],v[ze.OFFSET.Y],v[ze.OFFSET.Z]];(_===0||y[0]<l.x)&&(l.x=y[0]),(_===0||y[0]>u.x)&&(u.x=y[0]),(_===0||y[1]<l.y)&&(l.y=y[1]),(_===0||y[1]>u.y)&&(u.y=y[1]),(_===0||y[2]<l.z)&&(l.z=y[2]),(_===0||y[2]>u.z)&&(u.z=y[2])}const d=new U().copy(u).sub(l),f=Math.ceil(d.y/t),p=Math.ceil(d.z/t),m=new U,g=[],x={};for(let _=0;_<s;_++){const v=e.splats[_],y=[v[ze.OFFSET.X],v[ze.OFFSET.Y],v[ze.OFFSET.Z]],T=Math.floor((y[0]-l.x)/t),P=Math.floor((y[1]-l.y)/t),C=Math.floor((y[2]-l.z)/t);m.x=T*t+l.x+o,m.y=P*t+l.y+o,m.z=C*t+l.z+o;const w=T*(f*p)+P*p+C;let I=x[w];I||(x[w]=I={splats:[],center:m.toArray()}),I.splats.push(_),I.splats.length>=n&&(g.push(I),x[w]=null)}const A=[];for(let _ in x)if(x.hasOwnProperty(_)){const v=x[_];v&&A.push(v)}return{fullBuckets:g,partiallyFullBuckets:A}}static preallocateUncompressed(e,t){const n=ve.CompressionLevels[0].SphericalHarmonicsDegrees[t],s=ve.HeaderSizeBytes+ve.SectionHeaderSizeBytes,o=s+n.BytesPerSplat*e,l=new ArrayBuffer(o);return ve.writeHeaderToBuffer({versionMajor:ve.CurrentMajorVersion,versionMinor:ve.CurrentMinorVersion,maxSectionCount:1,sectionCount:1,maxSplatCount:e,splatCount:e,compressionLevel:0,sceneCenter:new U},l),ve.writeSectionHeaderToBuffer({maxSplatCount:e,splatCount:e,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:t},0,l,ve.HeaderSizeBytes),{splatBuffer:new ve(l,!0),splatBufferDataOffsetBytes:s}}};Fe(ve,"CurrentMajorVersion",0),Fe(ve,"CurrentMinorVersion",1),Fe(ve,"CenterComponentCount",3),Fe(ve,"ScaleComponentCount",3),Fe(ve,"RotationComponentCount",4),Fe(ve,"ColorComponentCount",4),Fe(ve,"CovarianceComponentCount",6),Fe(ve,"SplatScaleOffsetFloat",3),Fe(ve,"SplatRotationOffsetFloat",6),Fe(ve,"CompressionLevels",{0:{BytesPerCenter:12,BytesPerScale:12,BytesPerRotation:16,BytesPerColor:4,ScaleOffsetBytes:12,RotationffsetBytes:24,ColorOffsetBytes:40,SphericalHarmonicsOffsetBytes:44,ScaleRange:1,BytesPerSphericalHarmonicsComponent:4,SphericalHarmonicsOffsetFloat:11,SphericalHarmonicsDegrees:{0:{BytesPerSplat:44},1:{BytesPerSplat:80},2:{BytesPerSplat:140}}},1:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:2,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:42},2:{BytesPerSplat:72}}},2:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:1,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:33},2:{BytesPerSplat:48}}}}),Fe(ve,"CovarianceSizeFloats",6),Fe(ve,"HeaderSizeBytes",4096),Fe(ve,"SectionHeaderSizeBytes",1024),Fe(ve,"BucketStorageSizeBytes",12),Fe(ve,"BucketStorageSizeFloats",3),Fe(ve,"BucketBlockSize",5),Fe(ve,"BucketSize",256),Fe(ve,"computeCovariance",(function(){const e=new mt,t=new ft,n=new ft,s=new ft,o=new ft,l=new ft,u=new ft;return function(d,f,p,m,g=0,x){e.makeScale(d.x,d.y,d.z),t.setFromMatrix4(e),e.makeRotationFromQuaternion(f),n.setFromMatrix4(e),s.copy(n).multiply(t),o.copy(s).transpose().premultiply(s),p&&(l.setFromMatrix4(p),u.copy(l).transpose(),o.multiply(u),o.premultiply(l)),x>=1?(m[g]=Cn(o.elements[0]),m[g+1]=Cn(o.elements[3]),m[g+2]=Cn(o.elements[6]),m[g+3]=Cn(o.elements[4]),m[g+4]=Cn(o.elements[7]),m[g+5]=Cn(o.elements[8])):(m[g]=o.elements[0],m[g+1]=o.elements[3],m[g+2]=o.elements[6],m[g+3]=o.elements[4],m[g+4]=o.elements[7],m[g+5]=o.elements[8])}})()),Fe(ve,"dot3",(e,t,n,s,o)=>{o[0]=o[1]=o[2]=0;const l=s[0],u=s[1],d=s[2];ve.addInto3(e[0]*l,e[1]*l,e[2]*l,o),ve.addInto3(t[0]*u,t[1]*u,t[2]*u,o),ve.addInto3(n[0]*d,n[1]*d,n[2]*d,o)}),Fe(ve,"addInto3",(e,t,n,s)=>{s[0]=s[0]+e,s[1]=s[1]+t,s[2]=s[2]+n}),Fe(ve,"dot5",(e,t,n,s,o,l,u)=>{u[0]=u[1]=u[2]=0;const d=l[0],f=l[1],p=l[2],m=l[3],g=l[4];ve.addInto3(e[0]*d,e[1]*d,e[2]*d,u),ve.addInto3(t[0]*f,t[1]*f,t[2]*f,u),ve.addInto3(n[0]*p,n[1]*p,n[2]*p,u),ve.addInto3(s[0]*m,s[1]*m,s[2]*m,u),ve.addInto3(o[0]*g,o[1]*g,o[2]*g,u)}),Fe(ve,"rotateSphericalHarmonics3",(e,t,n,s,o,l,u,d,f)=>{ve.dot3(e,t,n,s,u),ve.dot3(e,t,n,o,d),ve.dot3(e,t,n,l,f)}),Fe(ve,"rotateSphericalHarmonics5",(e,t,n,s,o,l,u,d,f,p,m,g,x,A,_,v,y,T)=>{const P=Math.sqrt(.25),C=Math.sqrt(3/4),w=Math.sqrt(1/3),I=Math.sqrt(4/3),R=Math.sqrt(1/12);f[0]=P*(d[2]*l[0]+d[0]*l[2]+(l[2]*d[0]+l[0]*d[2])),f[1]=d[1]*l[0]+l[1]*d[0],f[2]=C*(d[1]*l[1]+l[1]*d[1]),f[3]=d[1]*l[2]+l[1]*d[2],f[4]=P*(d[2]*l[2]-d[0]*l[0]+(l[2]*d[2]-l[0]*d[0])),ve.dot5(e,t,n,s,o,f,A),p[0]=P*(u[2]*l[0]+u[0]*l[2]+(l[2]*u[0]+l[0]*u[2])),p[1]=u[1]*l[0]+l[1]*u[0],p[2]=C*(u[1]*l[1]+l[1]*u[1]),p[3]=u[1]*l[2]+l[1]*u[2],p[4]=P*(u[2]*l[2]-u[0]*l[0]+(l[2]*u[2]-l[0]*u[0])),ve.dot5(e,t,n,s,o,p,_),m[0]=w*(u[2]*u[0]+u[0]*u[2])+-R*(d[2]*d[0]+d[0]*d[2]+(l[2]*l[0]+l[0]*l[2])),m[1]=I*u[1]*u[0]+-w*(d[1]*d[0]+l[1]*l[0]),m[2]=u[1]*u[1]+-P*(d[1]*d[1]+l[1]*l[1]),m[3]=I*u[1]*u[2]+-w*(d[1]*d[2]+l[1]*l[2]),m[4]=w*(u[2]*u[2]-u[0]*u[0])+-R*(d[2]*d[2]-d[0]*d[0]+(l[2]*l[2]-l[0]*l[0])),ve.dot5(e,t,n,s,o,m,v),g[0]=P*(u[2]*d[0]+u[0]*d[2]+(d[2]*u[0]+d[0]*u[2])),g[1]=u[1]*d[0]+d[1]*u[0],g[2]=C*(u[1]*d[1]+d[1]*u[1]),g[3]=u[1]*d[2]+d[1]*u[2],g[4]=P*(u[2]*d[2]-u[0]*d[0]+(d[2]*u[2]-d[0]*u[0])),ve.dot5(e,t,n,s,o,g,y),x[0]=P*(d[2]*d[0]+d[0]*d[2]-(l[2]*l[0]+l[0]*l[2])),x[1]=d[1]*d[0]-l[1]*l[0],x[2]=C*(d[1]*d[1]-l[1]*l[1]),x[3]=d[1]*d[2]-l[1]*l[2],x[4]=P*(d[2]*d[2]-d[0]*d[0]-(l[2]*l[2]-l[0]*l[0])),ve.dot5(e,t,n,s,o,x,T)}),Fe(ve,"writeSplatDataToSectionBuffer",(function(){const e=new ArrayBuffer(12),t=new ArrayBuffer(12),n=new ArrayBuffer(16),s=new ArrayBuffer(4),o=new ArrayBuffer(256),l=new tn,u=new U,d=new U,{X:f,Y:p,Z:m,SCALE0:g,SCALE1:x,SCALE2:A,ROTATION0:_,ROTATION1:v,ROTATION2:y,ROTATION3:T,FDC0:P,FDC1:C,FDC2:w,OPACITY:I,FRC0:R,FRC9:M}=ze.OFFSET,F=(B,N,H)=>{const q=H*2+1;return B=Math.round(B*N)+H,on(B,0,q)};return function(B,N,H,q,Y,G,K,j,k=-as,Q=as){const J=Xa(Y),O=ve.CompressionLevels[q].BytesPerCenter,ee=ve.CompressionLevels[q].BytesPerScale,ye=ve.CompressionLevels[q].BytesPerRotation,Ce=ve.CompressionLevels[q].BytesPerColor,be=H,se=be+O,xe=se+ee,pe=xe+ye,Re=pe+Ce;if(B[_]!==void 0?(l.set(B[_],B[v],B[y],B[T]),l.normalize()):l.set(1,0,0,0),B[g]!==void 0?u.set(B[g]||0,B[x]||0,B[A]||0):u.set(0,0,0),q===0){const Ge=new Float32Array(N,be,ve.CenterComponentCount),xt=new Float32Array(N,xe,ve.RotationComponentCount),Ye=new Float32Array(N,se,ve.ScaleComponentCount);if(xt.set([l.x,l.y,l.z,l.w]),Ye.set([u.x,u.y,u.z]),Ge.set([B[f],B[p],B[m]]),Y>0){const dt=new Float32Array(N,Re,J);if(Y>=1){for(let nt=0;nt<9;nt++)dt[nt]=B[R+nt]||0;if(Y>=2)for(let nt=0;nt<15;nt++)dt[nt+9]=B[M+nt]||0}}}else{const Ge=new Uint16Array(e,0,ve.CenterComponentCount),xt=new Uint16Array(n,0,ve.RotationComponentCount),Ye=new Uint16Array(t,0,ve.ScaleComponentCount);if(xt.set([Cn(l.x),Cn(l.y),Cn(l.z),Cn(l.w)]),Ye.set([Cn(u.x),Cn(u.y),Cn(u.z)]),d.set(B[f],B[p],B[m]).sub(G),d.x=F(d.x,K,j),d.y=F(d.y,K,j),d.z=F(d.z,K,j),Ge.set([d.x,d.y,d.z]),Y>0){const dt=q===1?Uint16Array:Uint8Array,nt=q===1?2:1,pt=new dt(o,0,J);if(Y>=1){for(let yt=0;yt<9;yt++){const Tt=B[R+yt]||0;pt[yt]=q===1?Cn(Tt):Ko(Tt,k,Q)}const Rt=9*nt;if(Ua(pt.buffer,0,N,Re,Rt),Y>=2){for(let yt=0;yt<15;yt++){const Tt=B[M+yt]||0;pt[yt+9]=q===1?Cn(Tt):Ko(Tt,k,Q)}Ua(pt.buffer,Rt,N,Re+Rt,15*nt)}}}Ua(Ge.buffer,0,N,be,6),Ua(Ye.buffer,0,N,se,6),Ua(xt.buffer,0,N,xe,8)}const Oe=new Uint8ClampedArray(s,0,4);Oe.set([B[P]||0,B[C]||0,B[w]||0]),Oe[3]=B[I]||0,Ua(Oe.buffer,0,N,pe,4)}})());let Ke=ve;const dx=new Uint8Array([112,108,121,10]),fx=new Uint8Array([10,101,110,100,95,104,101,97,100,101,114,10]),Wf="end_header",Xf=new Map([["char",Int8Array],["uchar",Uint8Array],["short",Int16Array],["ushort",Uint16Array],["int",Int32Array],["uint",Uint32Array],["float",Float32Array],["double",Float64Array]]),ar=(a,e)=>{const t=(1<<e)-1;return(a&t)/t},hx=(a,e)=>{a.x=ar(e>>>21,11),a.y=ar(e>>>11,10),a.z=ar(e,11)},s1=(a,e)=>{a.x=ar(e>>>24,8),a.y=ar(e>>>16,8),a.z=ar(e>>>8,8),a.w=ar(e,8)},a1=(a,e)=>{const t=1/(Math.sqrt(2)*.5),n=(ar(e>>>20,10)-.5)*t,s=(ar(e>>>10,10)-.5)*t,o=(ar(e,10)-.5)*t,l=Math.sqrt(1-(n*n+s*s+o*o));switch(e>>>30){case 0:a.set(l,n,s,o);break;case 1:a.set(n,l,s,o);break;case 2:a.set(n,s,l,o);break;case 3:a.set(n,s,o,l);break}},Tr=(a,e,t)=>a*(1-t)+e*t,dn=(a,e)=>{var t;return(t=a.properties.find(n=>n.name===e&&n.storage))==null?void 0:t.storage},Qt=class Qt{static decodeHeaderText(e){let t,n,s,o;const l=e.split(`
`).filter(m=>!m.startsWith("comment "));let u=0,d=!1;for(let m=1;m<l.length;++m){const g=l[m].split(" ");switch(g[0]){case"format":if(g[1]!=="binary_little_endian")throw new Error("Unsupported ply format");break;case"element":t={name:g[1],count:parseInt(g[2],10),properties:[],storageSizeBytes:0},t.name==="chunk"?n=t:t.name==="vertex"?s=t:t.name==="sh"&&(o=t);break;case"property":{if(!Xf.has(g[1]))throw new Error(`Unrecognized property data type '${g[1]}' in ply header`);const x=Xf.get(g[1]),A=x.BYTES_PER_ELEMENT*t.count;t.name==="vertex"&&(u+=x.BYTES_PER_ELEMENT),t.properties.push({type:g[1],name:g[2],storage:null,byteSize:x.BYTES_PER_ELEMENT,storageSizeByes:A}),t.storageSizeBytes+=A;break}case Wf:d=!0;break;default:throw new Error(`Unrecognized header value '${g[0]}' in ply header`)}if(d)break}let f=0,p=0;return o&&(p=o.properties.length,o.properties.length>=45?f=3:o.properties.length>=24?f=2:o.properties.length>=9&&(f=1)),{chunkElement:n,vertexElement:s,shElement:o,bytesPerSplat:u,headerSizeBytes:e.indexOf(Wf)+Wf.length+1,sphericalHarmonicsDegree:f,sphericalHarmonicsPerSplat:p}}static decodeHeader(e){const t=(x,A)=>{const _=x.length-A.length;let v,y;for(v=0;v<=_;++v){for(y=0;y<A.length&&x[v+y]===A[y];++y);if(y===A.length)return v}return-1},n=(x,A)=>{if(x.length<A.length)return!1;for(let _=0;_<A.length;++_)if(x[_]!==A[_])return!1;return!0};let s=new Uint8Array(e),o;if(s.length>=dx.length&&!n(s,dx))throw new Error("Invalid PLY header");if(o=t(s,fx),o===-1)throw new Error("End of PLY header not found");const l=new TextDecoder("ascii").decode(s.slice(0,o)),{chunkElement:u,vertexElement:d,shElement:f,sphericalHarmonicsDegree:p,sphericalHarmonicsPerSplat:m,bytesPerSplat:g}=Qt.decodeHeaderText(l);return{headerSizeBytes:o+fx.length,bytesPerSplat:g,chunkElement:u,vertexElement:d,shElement:f,sphericalHarmonicsDegree:p,sphericalHarmonicsPerSplat:m}}static readElementData(e,t,n,s,o,l=null){let u=t instanceof DataView?t:new DataView(t);s=s||0,o=o||e.count-1;for(let d=s;d<=o;++d)for(let f=0;f<e.properties.length;++f){const p=e.properties[f],m=Xf.get(p.type),g=m.BYTES_PER_ELEMENT*e.count;if((!p.storage||p.storage.byteLength<g)&&(!l||l(p.name))&&(p.storage=new m(e.count)),p.storage)switch(p.type){case"char":p.storage[d]=u.getInt8(n);break;case"uchar":p.storage[d]=u.getUint8(n);break;case"short":p.storage[d]=u.getInt16(n,!0);break;case"ushort":p.storage[d]=u.getUint16(n,!0);break;case"int":p.storage[d]=u.getInt32(n,!0);break;case"uint":p.storage[d]=u.getUint32(n,!0);break;case"float":p.storage[d]=u.getFloat32(n,!0);break;case"double":p.storage[d]=u.getFloat64(n,!0);break}n+=p.byteSize}return n}static readPly(e,t=null){const n=Qt.decodeHeader(e);let s=Qt.readElementData(n.chunkElement,e,n.headerSizeBytes,null,null,t);return s=Qt.readElementData(n.vertexElement,e,s,null,null,t),Qt.readElementData(n.shElement,e,s,null,null,t),{chunkElement:n.chunkElement,vertexElement:n.vertexElement,shElement:n.shElement,sphericalHarmonicsDegree:n.sphericalHarmonicsDegree,sphericalHarmonicsPerSplat:n.sphericalHarmonicsPerSplat}}static getElementStorageArrays(e,t,n){const s={};if(t){const o=dn(e,"min_r"),l=dn(e,"min_g"),u=dn(e,"min_b"),d=dn(e,"max_r"),f=dn(e,"max_g"),p=dn(e,"max_b"),m=dn(e,"min_x"),g=dn(e,"min_y"),x=dn(e,"min_z"),A=dn(e,"max_x"),_=dn(e,"max_y"),v=dn(e,"max_z"),y=dn(e,"min_scale_x"),T=dn(e,"min_scale_y"),P=dn(e,"min_scale_z"),C=dn(e,"max_scale_x"),w=dn(e,"max_scale_y"),I=dn(e,"max_scale_z"),R=dn(t,"packed_position"),M=dn(t,"packed_rotation"),F=dn(t,"packed_scale"),B=dn(t,"packed_color");s.colorExtremes={minR:o,maxR:d,minG:l,maxG:f,minB:u,maxB:p},s.positionExtremes={minX:m,maxX:A,minY:g,maxY:_,minZ:x,maxZ:v},s.scaleExtremes={minScaleX:y,maxScaleX:C,minScaleY:T,maxScaleY:w,minScaleZ:P,maxScaleZ:I},s.position=R,s.rotation=M,s.scale=F,s.color=B}if(n){const o={};for(let l=0;l<45;l++){const u=`f_rest_${l}`,d=dn(n,u);if(d)o[u]=d;else break}s.sh=o}return s}static parseToUncompressedSplatBufferSection(e,t,n,s,o,l,u,d,f=null){Qt.readElementData(t,l,0,n,s,f);const p=Ke.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,{positionExtremes:m,scaleExtremes:g,colorExtremes:x,position:A,rotation:_,scale:v,color:y}=Qt.getElementStorageArrays(e,t),T=ze.createSplat();for(let P=n;P<=s;++P){Qt.decompressBaseSplat(P,o,A,m,v,g,_,x,y,T);const C=P*p+d;Ke.writeSplatDataToSectionBuffer(T,u,C,0,0)}}static parseToUncompressedSplatArraySection(e,t,n,s,o,l,u,d=null){Qt.readElementData(t,l,0,n,s,d);const{positionExtremes:f,scaleExtremes:p,colorExtremes:m,position:g,rotation:x,scale:A,color:_}=Qt.getElementStorageArrays(e,t);for(let v=n;v<=s;++v){const y=ze.createSplat();Qt.decompressBaseSplat(v,o,g,f,A,p,x,m,_,y),u.addSplat(y)}}static parseSphericalHarmonicsToUncompressedSplatArraySection(e,t,n,s,o,l,u,d,f,p=null){Qt.readElementData(t,o,l,n,s,p);const{sh:m}=Qt.getElementStorageArrays(e,void 0,t),g=Object.values(m);for(let x=n;x<=s;++x)Qt.decompressSphericalHarmonics(x,g,u,d,f.splats[x])}static parseToUncompressedSplatArray(e,t){const{chunkElement:n,vertexElement:s,shElement:o,sphericalHarmonicsDegree:l}=Qt.readPly(e);t=Math.min(t,l);const u=new ze(t),{positionExtremes:d,scaleExtremes:f,colorExtremes:p,position:m,rotation:g,scale:x,color:A}=Qt.getElementStorageArrays(n,s);let _;if(t>0){const{sh:v}=Qt.getElementStorageArrays(n,void 0,o);_=Object.values(v)}for(let v=0;v<s.count;++v){u.addDefaultSplat();const y=u.getSplat(u.splatCount-1);Qt.decompressBaseSplat(v,0,m,d,x,f,g,p,A,y),t>0&&Qt.decompressSphericalHarmonics(v,_,t,l,y)}return u}static parseToUncompressedSplatBuffer(e,t){const{chunkElement:n,vertexElement:s,shElement:o,sphericalHarmonicsDegree:l}=Qt.readPly(e);t=Math.min(t,l);const{splatBuffer:u,splatBufferDataOffsetBytes:d}=Ke.preallocateUncompressed(s.count,t),{positionExtremes:f,scaleExtremes:p,colorExtremes:m,position:g,rotation:x,scale:A,color:_}=Qt.getElementStorageArrays(n,s);let v;if(t>0){const{sh:P}=Qt.getElementStorageArrays(n,void 0,o);v=Object.values(P)}const y=Ke.CompressionLevels[0].SphericalHarmonicsDegrees[t].BytesPerSplat,T=ze.createSplat(t);for(let P=0;P<s.count;++P){Qt.decompressBaseSplat(P,0,g,f,A,p,x,m,_,T),t>0&&Qt.decompressSphericalHarmonics(P,v,t,l,T);const C=P*y+d;Ke.writeSplatDataToSectionBuffer(T,u.bufferData,C,0,t)}return u}};Fe(Qt,"decompressBaseSplat",(function(){const e=new U,t=new tn,n=new U,s=new nn,o=ze.OFFSET;return function(l,u,d,f,p,m,g,x,A,_){_=_||ze.createSplat();const v=Math.floor((u+l)/256);return hx(e,d[l]),a1(t,g[l]),hx(n,p[l]),s1(s,A[l]),_[o.X]=Tr(f.minX[v],f.maxX[v],e.x),_[o.Y]=Tr(f.minY[v],f.maxY[v],e.y),_[o.Z]=Tr(f.minZ[v],f.maxZ[v],e.z),_[o.ROTATION0]=t.x,_[o.ROTATION1]=t.y,_[o.ROTATION2]=t.z,_[o.ROTATION3]=t.w,_[o.SCALE0]=Math.exp(Tr(m.minScaleX[v],m.maxScaleX[v],n.x)),_[o.SCALE1]=Math.exp(Tr(m.minScaleY[v],m.maxScaleY[v],n.y)),_[o.SCALE2]=Math.exp(Tr(m.minScaleZ[v],m.maxScaleZ[v],n.z)),x.minR&&x.maxR?_[o.FDC0]=on(Math.round(Tr(x.minR[v],x.maxR[v],s.x)*255),0,255):_[o.FDC0]=on(Math.floor(s.x*255),0,255),x.minG&&x.maxG?_[o.FDC1]=on(Math.round(Tr(x.minG[v],x.maxG[v],s.y)*255),0,255):_[o.FDC1]=on(Math.floor(s.y*255),0,255),x.minB&&x.maxB?_[o.FDC2]=on(Math.round(Tr(x.minB[v],x.maxB[v],s.z)*255),0,255):_[o.FDC2]=on(Math.floor(s.z*255),0,255),_[o.OPACITY]=on(Math.floor(s.w*255),0,255),_}})()),Fe(Qt,"decompressSphericalHarmonics",(function(){const e=[0,3,8,15],t=[0,1,2,9,10,11,12,13,24,25,26,27,28,29,30,3,4,5,14,15,16,17,18,31,32,33,34,35,36,37,6,7,8,19,20,21,22,23,38,39,40,41,42,43,44];return function(n,s,o,l,u){u=u||ze.createSplat();let d=e[o],f=e[l];for(let p=0;p<3;++p)for(let m=0;m<15;++m){const g=t[p*15+m];m<d&&m<f&&(u[ze.OFFSET.FRC0+g]=s[p*f+m][n]*(8/255)-4)}return u}})());let Ir=Qt;const Jn={INRIAV1:0,INRIAV2:1,PlayCanvasCompressed:2},[Pv,mp,gp,xp,vp,Sp,yp]=[0,1,2,3,4,5,6],px={double:Pv,int:mp,uint:gp,float:xp,short:vp,ushort:Sp,uchar:yp},o1={[Pv]:8,[mp]:4,[gp]:4,[xp]:4,[vp]:2,[Sp]:2,[yp]:1},fi=class fi{static decodeSectionHeader(e,t,n=0){const s=[];let o=!1,l=-1,u=0,d=!1,f=null;const p=[],m=[],g=[],x={};for(let y=n;y<e.length;y++){const T=e[y].trim();if(T.startsWith("element"))if(o){l--;break}else{o=!0,n=y,l=y;const P=T.split(" ");let C=0;for(let w of P){const I=w.trim();I.length>0&&(C++,C===2?f=I:C===3&&(u=parseInt(I)))}}else if(T.startsWith("property")){const P=T.match(/(\w+)\s+(\w+)\s+(\w+)/);if(P){const C=P[2],w=P[3];g.push(w);const I=t[w];x[w]=C;const R=px[C];I!==void 0&&(p.push(I),m[I]=R)}}if(T===fi.HeaderEndToken){d=!0;break}o&&(s.push(T),l++)}const A=[];let _=0;for(let y of g){const T=x[y];if(x.hasOwnProperty(y)){const P=t[y];P!==void 0&&(A[P]=_)}_+=o1[px[T]]}const v=fi.decodeSphericalHarmonicsFromSectionHeader(g,t);return{headerLines:s,headerStartLine:n,headerEndLine:l,fieldTypes:m,fieldIds:p,fieldOffsets:A,bytesPerVertex:_,vertexCount:u,dataSizeBytes:_*u,endOfHeader:d,sectionName:f,sphericalHarmonicsDegree:v.degree,sphericalHarmonicsCoefficientsPerChannel:v.coefficientsPerChannel,sphericalHarmonicsDegree1Fields:v.degree1Fields,sphericalHarmonicsDegree2Fields:v.degree2Fields}}static decodeSphericalHarmonicsFromSectionHeader(e,t){let n=0,s=0;for(let d of e)d.startsWith("f_rest")&&n++;s=n/3;let o=0;s>=3&&(o=1),s>=8&&(o=2);let l=[],u=[];for(let d=0;d<3;d++){if(o>=1)for(let f=0;f<3;f++)l.push(t["f_rest_"+(f+s*d)]);if(o>=2)for(let f=0;f<5;f++)u.push(t["f_rest_"+(f+s*d+3)])}return{degree:o,coefficientsPerChannel:s,degree1Fields:l,degree2Fields:u}}static getHeaderSectionNames(e){const t=[];for(let n of e)if(n.startsWith("element")){const s=n.split(" ");let o=0;for(let l of s){const u=l.trim();u.length>0&&(o++,o===2&&t.push(u))}}return t}static checkTextForEndHeader(e){return!!e.includes(fi.HeaderEndToken)}static checkBufferForEndHeader(e,t,n,s){const o=new Uint8Array(e,Math.max(0,t-n),n),l=s.decode(o);return fi.checkTextForEndHeader(l)}static extractHeaderFromBufferToText(e){const t=new TextDecoder;let n=0,s="";const o=100;for(;;){if(n+o>=e.byteLength)throw new Error("End of file reached while searching for end of header");const l=new Uint8Array(e,n,o);if(s+=t.decode(l),n+=o,fi.checkBufferForEndHeader(e,n,o*2,t))break}return s}static readHeaderFromBuffer(e){const t=new TextDecoder;let n=0,s="";const o=100;for(;;){if(n+o>=e.byteLength)throw new Error("End of file reached while searching for end of header");const l=new Uint8Array(e,n,o);if(s+=t.decode(l),n+=o,fi.checkBufferForEndHeader(e,n,o*2,t))break}return s}static convertHeaderTextToLines(e){const t=e.split(`
`),n=[];for(let s=0;s<t.length;s++){const o=t[s].trim();if(n.push(o),o===fi.HeaderEndToken)break}return n}static determineHeaderFormatFromHeaderText(e){const t=fi.convertHeaderTextToLines(e);let n=Jn.INRIAV1;for(let s=0;s<t.length;s++){const o=t[s].trim();if(o.startsWith("element chunk")||o.match(/[A-Za-z]*packed_[A-Za-z]*/))n=Jn.PlayCanvasCompressed;else if(o.startsWith("element codebook_centers"))n=Jn.INRIAV2;else if(o===fi.HeaderEndToken)break}return n}static determineHeaderFormatFromPlyBuffer(e){const t=fi.extractHeaderFromBufferToText(e);return fi.determineHeaderFormatFromHeaderText(t)}static readVertex(e,t,n,s,o,l,u=!0){const d=n*t.bytesPerVertex+s,f=t.fieldOffsets,p=t.fieldTypes;for(let m of o){const g=p[m];g===xp?l[m]=e.getFloat32(d+f[m],!0):g===vp?l[m]=e.getInt16(d+f[m],!0):g===Sp?l[m]=e.getUint16(d+f[m],!0):g===mp?l[m]=e.getInt32(d+f[m],!0):g===gp?l[m]=e.getUint32(d+f[m],!0):g===yp&&(u?l[m]=e.getUint8(d+f[m])/255:l[m]=e.getUint8(d+f[m]))}}};Fe(fi,"HeaderEndToken","end_header");let gn=fi;const Dv=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0"],l1=Dv.map((a,e)=>e),[mx,c1,u1,d1,f1,h1,p1,m1,g1,x1,gx,v1,S1,xx,vx,y1,A1,_1]=l1,Fi=class Fi{static decodeHeaderLines(e){let t=0;e.forEach(p=>{p.includes("f_rest_")&&t++});let n=0;t>=45?n=45:t>=24?n=24:t>=9&&(n=9);let o=Array.from(Array(Math.max(n-1,0))).map((p,m)=>`f_rest_${m+1}`);const l=[...Dv,...o],u=l.map((p,m)=>m),d=u.reduce((p,m)=>(p[l[m]]=m,p),{}),f=gn.decodeSectionHeader(e,d,0);return f.splatCount=f.vertexCount,f.bytesPerSplat=f.bytesPerVertex,f.fieldsToReadIndexes=u,f}static decodeHeaderText(e){const t=gn.convertHeaderTextToLines(e),n=Fi.decodeHeaderLines(t);return n.headerText=e,n.headerSizeBytes=e.indexOf(gn.HeaderEndToken)+gn.HeaderEndToken.length+1,n}static decodeHeaderFromBuffer(e){const t=gn.readHeaderFromBuffer(e);return Fi.decodeHeaderText(t)}static findSplatData(e,t){return new DataView(e,t.headerSizeBytes)}static parseToUncompressedSplatBufferSection(e,t,n,s,o,l,u,d=0){d=Math.min(d,e.sphericalHarmonicsDegree);const f=Ke.CompressionLevels[0].SphericalHarmonicsDegrees[d].BytesPerSplat;for(let p=t;p<=n;p++){const m=Fi.parseToUncompressedSplat(s,p,e,o,d),g=p*f+u;Ke.writeSplatDataToSectionBuffer(m,l,g,0,d)}}static parseToUncompressedSplatArraySection(e,t,n,s,o,l,u=0){u=Math.min(u,e.sphericalHarmonicsDegree);for(let d=t;d<=n;d++){const f=Fi.parseToUncompressedSplat(s,d,e,o,u);l.addSplat(f)}}static decodeSectionSplatData(e,t,n,s,o=!0){if(s=Math.min(s,n.sphericalHarmonicsDegree),o){const l=new ze(s);for(let u=0;u<t;u++){const d=Fi.parseToUncompressedSplat(e,u,n,0,s);l.addSplat(d)}return l}else{const{splatBuffer:l,splatBufferDataOffsetBytes:u}=Ke.preallocateUncompressed(t,s);return Fi.parseToUncompressedSplatBufferSection(n,0,t-1,e,0,l.bufferData,u,s),l}}static readSplat(e,t,n,s,o){return gn.readVertex(e,t,n,s,t.fieldsToReadIndexes,o,!0)}static parseToUncompressedSplatArray(e,t=0){const{header:n,splatCount:s,splatData:o}=Sx(e);return Fi.decodeSectionSplatData(o,s,n,t,!0)}static parseToUncompressedSplatBuffer(e,t=0){const{header:n,splatCount:s,splatData:o}=Sx(e);return Fi.decodeSectionSplatData(o,s,n,t,!1)}};Fe(Fi,"parseToUncompressedSplat",(function(){let e=[];const t=new tn,n=ze.OFFSET.X,s=ze.OFFSET.Y,o=ze.OFFSET.Z,l=ze.OFFSET.SCALE0,u=ze.OFFSET.SCALE1,d=ze.OFFSET.SCALE2,f=ze.OFFSET.ROTATION0,p=ze.OFFSET.ROTATION1,m=ze.OFFSET.ROTATION2,g=ze.OFFSET.ROTATION3,x=ze.OFFSET.FDC0,A=ze.OFFSET.FDC1,_=ze.OFFSET.FDC2,v=ze.OFFSET.OPACITY,y=[];for(let T=0;T<45;T++)y[T]=ze.OFFSET.FRC0+T;return function(T,P,C,w=0,I=0){I=Math.min(I,C.sphericalHarmonicsDegree),Fi.readSplat(T,C,P,w,e);const R=ze.createSplat(I);if(e[mx]!==void 0?(R[l]=Math.exp(e[mx]),R[u]=Math.exp(e[c1]),R[d]=Math.exp(e[u1])):(R[l]=.01,R[u]=.01,R[d]=.01),e[gx]!==void 0){const M=.28209479177387814;R[x]=(.5+M*e[gx])*255,R[A]=(.5+M*e[v1])*255,R[_]=(.5+M*e[S1])*255}else e[vx]!==void 0?(R[x]=e[vx]*255,R[A]=e[y1]*255,R[_]=e[A1]*255):(R[x]=0,R[A]=0,R[_]=0);if(e[xx]!==void 0&&(R[v]=1/(1+Math.exp(-e[xx]))*255),R[x]=on(Math.floor(R[x]),0,255),R[A]=on(Math.floor(R[A]),0,255),R[_]=on(Math.floor(R[_]),0,255),R[v]=on(Math.floor(R[v]),0,255),I>=1&&e[_1]!==void 0){for(let M=0;M<9;M++)R[y[M]]=e[C.sphericalHarmonicsDegree1Fields[M]];if(I>=2)for(let M=0;M<15;M++)R[y[9+M]]=e[C.sphericalHarmonicsDegree2Fields[M]]}return t.set(e[d1],e[f1],e[h1],e[p1]),t.normalize(),R[f]=t.x,R[p]=t.y,R[m]=t.z,R[g]=t.w,R[n]=e[m1],R[s]=e[g1],R[o]=e[x1],R}})());let Lr=Fi;function Sx(a){const e=Lr.decodeHeaderFromBuffer(a),t=e.splatCount,n=Lr.findSplatData(a,e);return{header:e,splatCount:t,splatData:n}}const Fv=["features_dc","features_rest_0","features_rest_1","features_rest_2","features_rest_3","features_rest_4","features_rest_5","features_rest_6","features_rest_7","features_rest_8","features_rest_9","features_rest_10","features_rest_11","features_rest_12","features_rest_13","features_rest_14","opacity","scaling","rotation_re","rotation_im"],Vc=Fv.map((a,e)=>e),[Gc,E1,M1,yx,Wc,C1,Qf]=[0,1,4,16,17,18,19],Lv=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0","f_rest_1","f_rest_2","f_rest_3","f_rest_4","f_rest_5","f_rest_6","f_rest_7","f_rest_8","f_rest_9","f_rest_10","f_rest_11","f_rest_12","f_rest_13","f_rest_14","f_rest_15","f_rest_16","f_rest_17","f_rest_18","f_rest_19","f_rest_20","f_rest_21","f_rest_22","f_rest_23","f_rest_24","f_rest_25","f_rest_26","f_rest_27","f_rest_28","f_rest_29","f_rest_30","f_rest_31","f_rest_32","f_rest_33","f_rest_34","f_rest_35","f_rest_36","f_rest_37","f_rest_38","f_rest_39","f_rest_40","f_rest_41","f_rest_42","f_rest_43","f_rest_44","f_rest_45"],Xh=Lv.map((a,e)=>e),[Ax,T1,w1,b1,R1,I1,P1,D1,F1,L1,Qh,Bv,Nv,_x]=Xh,Ex=Qh,B1=Bv,N1=Nv,Xc=a=>{const e=(31744&a)>>10,t=1023&a;return(a>>15?-1:1)*(e?e===31?t?NaN:1/0:Math.pow(2,e-15)*(1+t/1024):t/1024*6103515625e-14)},hi=class hi{static decodeSectionHeadersFromHeaderLines(e){const t=Xh.reduce((p,m)=>(p[Lv[m]]=m,p),{}),n=Vc.reduce((p,m)=>(p[Fv[m]]=m,p),{}),s=gn.getHeaderSectionNames(e);let o;for(let p=0;p<s.length;p++)s[p]==="codebook_centers"&&(o=p);let l=0,u=!1;const d=[];let f=0;for(;!u;){let p;f===o?p=gn.decodeSectionHeader(e,n,l):p=gn.decodeSectionHeader(e,t,l),u=p.endOfHeader,l=p.headerEndLine+1,u||(p.splatCount=p.vertexCount,p.bytesPerSplat=p.bytesPerVertex),d.push(p),f++}return d}static decodeSectionHeadersFromHeaderText(e){const t=gn.convertHeaderTextToLines(e);return hi.decodeSectionHeadersFromHeaderLines(t)}static getSplatCountFromSectionHeaders(e){let t=0;for(let n of e)n.sectionName!=="codebook_centers"&&(t+=n.vertexCount);return t}static decodeHeaderFromHeaderText(e){const t=e.indexOf(gn.HeaderEndToken)+gn.HeaderEndToken.length+1,n=hi.decodeSectionHeadersFromHeaderText(e),s=hi.getSplatCountFromSectionHeaders(n);return{headerSizeBytes:t,sectionHeaders:n,splatCount:s}}static decodeHeaderFromBuffer(e){const t=gn.readHeaderFromBuffer(e);return hi.decodeHeaderFromHeaderText(t)}static findVertexData(e,t,n){let s=t.headerSizeBytes;for(let o=0;o<n&&o<t.sectionHeaders.length;o++){const l=t.sectionHeaders[o];s+=l.dataSizeBytes}return new DataView(e,s,t.sectionHeaders[n].dataSizeBytes)}static decodeCodeBook(e,t){const n=[],s=[];for(let o=0;o<t.vertexCount;o++){gn.readVertex(e,t,o,0,Vc,n);for(let l of Vc){const u=Vc[l];let d=s[u];d||(s[u]=d=[]),d.push(n[l])}}for(let o=0;o<s.length;o++){const l=s[o],u=.28209479177387814;for(let d=0;d<l.length;d++){const f=Xc(l[d]);o===yx?l[d]=Math.round(1/(1+Math.exp(-f))*255):o===Gc?l[d]=Math.round((.5+u*f)*255):o===Wc?l[d]=Math.exp(f):l[d]=f}}return s}static decodeSectionSplatData(e,t,n,s,o){o=Math.min(o,n.sphericalHarmonicsDegree);const l=new ze(o);for(let u=0;u<t;u++){const d=hi.parseToUncompressedSplat(e,u,n,s,0,o);l.addSplat(d)}return l}static readSplat(e,t,n,s,o){return gn.readVertex(e,t,n,s,Xh,o,!1)}static parseToUncompressedSplatArray(e,t=0){const n=[],s=hi.decodeHeaderFromBuffer(e,t);let o;for(let u=0;u<s.sectionHeaders.length;u++){const d=s.sectionHeaders[u];if(d.sectionName==="codebook_centers"){const f=hi.findVertexData(e,s,u);o=hi.decodeCodeBook(f,d)}}for(let u=0;u<s.sectionHeaders.length;u++){const d=s.sectionHeaders[u];if(d.sectionName!=="codebook_centers"){const f=d.vertexCount,p=hi.findVertexData(e,s,u),m=hi.decodeSectionSplatData(p,f,d,o,t);n.push(m)}}const l=new ze(t);for(let u of n)for(let d of u.splats)l.addSplat(d);return l}};Fe(hi,"parseToUncompressedSplat",(function(){let e=[];const t=new tn,n=ze.OFFSET.X,s=ze.OFFSET.Y,o=ze.OFFSET.Z,l=ze.OFFSET.SCALE0,u=ze.OFFSET.SCALE1,d=ze.OFFSET.SCALE2,f=ze.OFFSET.ROTATION0,p=ze.OFFSET.ROTATION1,m=ze.OFFSET.ROTATION2,g=ze.OFFSET.ROTATION3,x=ze.OFFSET.FDC0,A=ze.OFFSET.FDC1,_=ze.OFFSET.FDC2,v=ze.OFFSET.OPACITY,y=[];for(let T=0;T<45;T++)y[T]=ze.OFFSET.FRC0+T;return function(T,P,C,w,I=0,R=0){R=Math.min(R,C.sphericalHarmonicsDegree),hi.readSplat(T,C,P,I,e);const M=ze.createSplat(R);if(e[Ax]!==void 0?(M[l]=w[Wc][e[Ax]],M[u]=w[Wc][e[T1]],M[d]=w[Wc][e[w1]]):(M[l]=.01,M[u]=.01,M[d]=.01),e[Qh]!==void 0?(M[x]=w[Gc][e[Qh]],M[A]=w[Gc][e[Bv]],M[_]=w[Gc][e[Nv]]):e[Ex]!==void 0?(M[x]=e[Ex]*255,M[A]=e[B1]*255,M[_]=e[N1]*255):(M[x]=0,M[A]=0,M[_]=0),e[_x]!==void 0&&(M[v]=w[yx][e[_x]]),M[x]=on(Math.floor(M[x]),0,255),M[A]=on(Math.floor(M[A]),0,255),M[_]=on(Math.floor(M[_]),0,255),M[v]=on(Math.floor(M[v]),0,255),R>=1&&C.sphericalHarmonicsDegree>=1){for(let q=0;q<9;q++){const Y=w[E1+q%3];M[y[q]]=Y[e[C.sphericalHarmonicsDegree1Fields[q]]]}if(R>=2&&C.sphericalHarmonicsDegree>=2)for(let q=0;q<15;q++){const Y=w[M1+q%5];M[y[9+q]]=Y[e[C.sphericalHarmonicsDegree2Fields[q]]]}}const F=w[C1][e[b1]],B=w[Qf][e[R1]],N=w[Qf][e[I1]],H=w[Qf][e[P1]];return t.set(F,B,N,H),t.normalize(),M[f]=t.x,M[p]=t.y,M[m]=t.z,M[g]=t.w,M[n]=Xc(e[D1]),M[s]=Xc(e[F1]),M[o]=Xc(e[L1]),M}})());let qh=hi;class Mx{static parseToUncompressedSplatArray(e,t=0){const n=gn.determineHeaderFormatFromPlyBuffer(e);if(n===Jn.PlayCanvasCompressed)return Ir.parseToUncompressedSplatArray(e,t);if(n===Jn.INRIAV1)return Lr.parseToUncompressedSplatArray(e,t);if(n===Jn.INRIAV2)return qh.parseToUncompressedSplatArray(e,t)}static parseToUncompressedSplatBuffer(e,t=0){const n=gn.determineHeaderFormatFromPlyBuffer(e);if(n===Jn.PlayCanvasCompressed)return Ir.parseToUncompressedSplatBuffer(e,t);if(n===Jn.INRIAV1)return Lr.parseToUncompressedSplatBuffer(e,t);if(n===Jn.INRIAV2)throw new Error("parseToUncompressedSplatBuffer() is not implemented for INRIA V2 PLY files")}}class Ap{constructor(e,t,n,s){this.sectionCount=e,this.sectionFilters=t,this.groupingParameters=n,this.partitionGenerator=s}partitionUncompressedSplatArray(e){let t,n,s;if(this.partitionGenerator){const l=this.partitionGenerator(e);t=l.groupingParameters,n=l.sectionCount,s=l.sectionFilters}else t=this.groupingParameters,n=this.sectionCount,s=this.sectionFilters;const o=[];for(let l=0;l<n;l++){const u=new ze(e.sphericalHarmonicsDegree),d=s[l];for(let f=0;f<e.splatCount;f++)d(f)&&u.addSplat(e.splats[f]);o.push(u)}return{splatArrays:o,parameters:t}}static getStandardPartitioner(e=0,t=new U,n=Ke.BucketBlockSize,s=Ke.BucketSize){const o=l=>{const u=ze.OFFSET.X,d=ze.OFFSET.Y,f=ze.OFFSET.Z;e<=0&&(e=l.splatCount);const p=new U,m=.5,g=y=>{y.x=Math.floor(y.x/m)*m,y.y=Math.floor(y.y/m)*m,y.z=Math.floor(y.z/m)*m};l.splats.forEach(y=>{p.set(y[u],y[d],y[f]).sub(t),g(p),y.centerDist=p.lengthSq()}),l.splats.sort((y,T)=>{let P=y.centerDist,C=T.centerDist;return P>C?1:-1});const x=[],A=[];e=Math.min(l.splatCount,e);const _=Math.ceil(l.splatCount/e);let v=0;for(let y=0;y<_;y++){let T=v;x.push(P=>P>=T&&P<T+e),A.push({blocksSize:n,bucketSize:s}),v+=e}return{sectionCount:x.length,sectionFilters:x,groupingParameters:A}};return new Ap(void 0,void 0,void 0,o)}}class ul{constructor(e,t,n,s,o,l,u){this.splatPartitioner=e,this.alphaRemovalThreshold=t,this.compressionLevel=n,this.sectionSize=s,this.sceneCenter=o?new U().copy(o):void 0,this.blockSize=l,this.bucketSize=u}generateFromUncompressedSplatArray(e){const t=this.splatPartitioner.partitionUncompressedSplatArray(e);return Ke.generateFromUncompressedSplatArrays(t.splatArrays,this.alphaRemovalThreshold,this.compressionLevel,this.sceneCenter,this.blockSize,this.bucketSize,t.parameters)}static getStandardGenerator(e=1,t=1,n=0,s=new U,o=Ke.BucketBlockSize,l=Ke.BucketSize){const u=Ap.getStandardPartitioner(n,s,o,l);return new ul(u,e,t,n,s,o,l)}}const xn={Downloading:0,Processing:1,Done:2};class uu extends Error{constructor(e){super(e)}}const Jt={ProgressiveToSplatBuffer:0,ProgressiveToSplatArray:1,DownloadBeforeProcessing:2};function Cx(a,e){let t=0;for(let s of a)t+=s.sizeBytes;(!e||e.byteLength<t)&&(e=new ArrayBuffer(t));let n=0;for(let s of a)new Uint8Array(e,n,s.sizeBytes).set(s.data),n+=s.sizeBytes;return e}function Tx(a,e,t,n,s,o,l,u){return e?ul.getStandardGenerator(t,n,s,o,l,u).generateFromUncompressedSplatArray(a):Ke.generateFromUncompressedSplatArrays([a],t,0,new U)}class _p{static loadFromURL(e,t,n,s,o,l,u=!0,d=0,f,p,m,g,x){let A;!n&&!u?A=Jt.DownloadBeforeProcessing:u?A=Jt.ProgressiveToSplatArray:A=Jt.ProgressiveToSplatBuffer;const _=wt.ProgressiveLoadSectionSize,v=Ke.HeaderSizeBytes+Ke.SectionHeaderSizeBytes,y=1;let T,P,C,w,I,R=0,M=0,F=0,B=!1,N=!1,H=!1;const q=dp();let Y=0,G=0,K=0,j=0,k="",Q=null,J=[],O;const ee=new TextDecoder,ye=(Ce,be,se)=>{const xe=Ce>=100;if(se&&(J.push({data:se,sizeBytes:se.byteLength,startBytes:K,endBytes:K+se.byteLength}),K+=se.byteLength),A===Jt.DownloadBeforeProcessing)xe&&q.resolve(J);else{if(B){if(T===Jn.PlayCanvasCompressed&&!N){const pe=Q.headerSizeBytes+Q.chunkElement.storageSizeBytes;I=Cx(J,I),I.byteLength>=pe&&(Ir.readElementData(Q.chunkElement,I,Q.headerSizeBytes),Y=pe,G=pe,N=!0)}}else if(k+=ee.decode(se),gn.checkTextForEndHeader(k)){if(T=gn.determineHeaderFormatFromHeaderText(k),T===Jn.INRIAV1)Q=Lr.decodeHeaderText(k),d=Math.min(d,Q.sphericalHarmonicsDegree),R=Q.splatCount,N=!0,j=Q.headerSizeBytes+Q.bytesPerSplat*R;else if(T===Jn.PlayCanvasCompressed){if(Q=Ir.decodeHeaderText(k),d=Math.min(d,Q.sphericalHarmonicsDegree),A===Jt.ProgressiveToSplatBuffer&&d>0)throw new uu("PlyLoader.loadFromURL() -> Selected PLY format has spherical harmonics data that cannot be progressively loaded.");R=Q.vertexElement.count,j=Q.headerSizeBytes+Q.bytesPerSplat*R+Q.chunkElement.storageSizeBytes}else{if(A===Jt.ProgressiveToSplatBuffer)throw new uu("PlyLoader.loadFromURL() -> Selected PLY format cannot be progressively loaded.");A=Jt.DownloadBeforeProcessing;return}if(A===Jt.ProgressiveToSplatBuffer){const pe=Ke.CompressionLevels[0].SphericalHarmonicsDegrees[d],Re=v+pe.BytesPerSplat*R;C=new ArrayBuffer(Re),Ke.writeHeaderToBuffer({versionMajor:Ke.CurrentMajorVersion,versionMinor:Ke.CurrentMinorVersion,maxSectionCount:y,sectionCount:y,maxSplatCount:R,splatCount:0,compressionLevel:0,sceneCenter:new U},C)}else O=new ze(d);Y=Q.headerSizeBytes,G=Q.headerSizeBytes,B=!0}if(B&&N&&J.length>0&&(P=Cx(J,P),K-Y>_||K>=j&&!H||xe)){const Re=H?Q.sphericalHarmonicsPerSplat:Q.bytesPerSplat,Ge=(H?K:Math.min(j,K))-G,xt=Math.floor(Ge/Re),Ye=xt*Re,dt=K-G-Ye,nt=G-J[0].startBytes,pt=new DataView(P,nt,Ye);if(H)T===Jn.PlayCanvasCompressed&&A===Jt.ProgressiveToSplatArray&&(Ir.parseSphericalHarmonicsToUncompressedSplatArraySection(Q.chunkElement,Q.shElement,F,F+xt-1,pt,0,d,Q.sphericalHarmonicsDegree,O),F+=xt);else{if(A===Jt.ProgressiveToSplatBuffer){const Rt=Ke.CompressionLevels[0].SphericalHarmonicsDegrees[d],yt=M*Rt.BytesPerSplat+v;T===Jn.PlayCanvasCompressed?Ir.parseToUncompressedSplatBufferSection(Q.chunkElement,Q.vertexElement,0,xt-1,M,pt,C,yt):Lr.parseToUncompressedSplatBufferSection(Q,0,xt-1,pt,0,C,yt,d)}else T===Jn.PlayCanvasCompressed?Ir.parseToUncompressedSplatArraySection(Q.chunkElement,Q.vertexElement,0,xt-1,M,pt,O):Lr.parseToUncompressedSplatArraySection(Q,0,xt-1,pt,0,O,d);M+=xt,A===Jt.ProgressiveToSplatBuffer&&(w||(Ke.writeSectionHeaderToBuffer({maxSplatCount:R,splatCount:M,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:d},0,C,Ke.HeaderSizeBytes),w=new Ke(C,!1)),w.updateLoadedCounts(1,M)),K>=j&&(H=!0)}if(dt===0)J=[];else{let Rt=[],yt=0;for(let Tt=J.length-1;Tt>=0;Tt--){const Bt=J[Tt];if(yt+=Bt.sizeBytes,Rt.unshift(Bt),yt>=dt)break}J=Rt}Y+=_,G+=Ye}s&&w&&s(w,xe),xe&&(A===Jt.ProgressiveToSplatBuffer?q.resolve(w):q.resolve(O))}t&&t(Ce,be,xn.Downloading)};return t&&t(0,"0%",xn.Downloading),_u(e,ye,!1,f).then(()=>(t&&t(0,"0%",xn.Processing),q.promise.then(Ce=>{if(t&&t(100,"100%",xn.Done),A===Jt.DownloadBeforeProcessing){const be=J.map(se=>se.data);return new Blob(be).arrayBuffer().then(se=>_p.loadFromFileData(se,o,l,u,d,p,m,g,x))}else return A===Jt.ProgressiveToSplatBuffer?Ce:Mi(()=>Tx(Ce,u,o,l,p,m,g,x))})))}static loadFromFileData(e,t,n,s,o=0,l,u,d,f){return s?Mi(()=>Mx.parseToUncompressedSplatArray(e,o)).then(p=>Tx(p,s,t,n,l,u,d,f)):Mi(()=>Mx.parseToUncompressedSplatBuffer(e,o))}}const U1=a=>new ReadableStream({async start(e){e.enqueue(a),e.close()}});async function O1(a){try{const e=U1(a);if(!e)throw new Error("Failed to create stream from data");return await k1(e)}catch(e){throw console.error("Error decompressing gzipped data:",e),e}}async function k1(a){const e=a.pipeThrough(new DecompressionStream("gzip")),n=await new Response(e).arrayBuffer();return new Uint8Array(n)}const z1=1347635022,H1=1,V1=.15;function G1(a){const e=a>>15&1,t=a>>10&31,n=a&1023,s=e===1?-1:1;return t===0?s*Math.pow(2,-14)*n/1024:t===31?n!==0?NaN:s*(1/0):s*Math.pow(2,t-15)*(1+n/1024)}function W1(a){return(a-128)/128}function Gs(a){switch(a){case 0:return 0;case 1:return 3;case 2:return 8;case 3:return 15;default:return console.error(`[SPZ: ERROR] Unsupported SH degree: ${a}`),0}}const X1=(function(){let a=[];const e=new tn,t=ze.OFFSET.X,n=ze.OFFSET.Y,s=ze.OFFSET.Z,o=ze.OFFSET.SCALE0,l=ze.OFFSET.SCALE1,u=ze.OFFSET.SCALE2,d=ze.OFFSET.ROTATION0,f=ze.OFFSET.ROTATION1,p=ze.OFFSET.ROTATION2,m=ze.OFFSET.ROTATION3,g=ze.OFFSET.FDC0,x=ze.OFFSET.FDC1,A=ze.OFFSET.FDC2,_=ze.OFFSET.OPACITY,v=[Gs(0),Gs(1),Gs(2),Gs(3)],y=[0,1,2,9,10,11,12,13,24,25,26,27,28,29,30,3,4,5,14,15,16,17,18,31,32,33,34,35,36,37,6,7,8,19,20,21,22,23,38,39,40,41,42,43,44];return function(T,P,C){C=Math.min(P,C);const w=ze.createSplat(C);T.scale[0]!==void 0?(w[o]=T.scale[0],w[l]=T.scale[1],w[u]=T.scale[2]):(w[o]=.01,w[l]=.01,w[u]=.01),T.color[0]!==void 0?(w[g]=T.color[0],w[x]=T.color[1],w[A]=T.color[2]):a[RED]!==void 0?(w[g]=a[RED]*255,w[x]=a[GREEN]*255,w[A]=a[BLUE]*255):(w[g]=0,w[x]=0,w[A]=0),T.alpha!==void 0&&(w[_]=T.alpha),w[g]=on(Math.floor(w[g]),0,255),w[x]=on(Math.floor(w[x]),0,255),w[A]=on(Math.floor(w[A]),0,255),w[_]=on(Math.floor(w[_]),0,255);let I=v[C],R=v[P];for(let M=0;M<3;++M)for(let F=0;F<15;++F){const B=y[M*15+F];F<I&&F<R&&(w[ze.OFFSET.FRC0+B]=T.sh[M*R+F])}return e.set(T.rotation[3],T.rotation[0],T.rotation[1],T.rotation[2]),e.normalize(),w[d]=e.x,w[f]=e.y,w[p]=e.z,w[m]=e.w,w[t]=T.position[0],w[n]=T.position[1],w[s]=T.position[2],w}})();function Q1(a,e,t,n){return!(a.positions.length!==e*3*(n?2:3)||a.scales.length!==e*3||a.rotations.length!==e*3||a.alphas.length!==e||a.colors.length!==e*3||a.sh.length!==e*t*3)}function wx(a,e,t,n,s){e=Math.min(e,a.shDegree);const o=a.numPoints,l=Gs(a.shDegree),u=a.positions.length===o*3*2;if(!Q1(a,o,l,u))return null;const d={position:[],scale:[],rotation:[],alpha:void 0,color:[],sh:[]};let f;u&&(f=new Uint16Array(a.positions.buffer,a.positions.byteOffset,o*3));const p=1/(1<<a.fractionalBits),m=Gs(a.shDegree),g=.28209479177387814;for(let x=0;x<o;x++){if(u)for(let T=0;T<3;T++)d.position[T]=G1(f[x*3+T]);else for(let T=0;T<3;T++){const P=x*9+T*3;let C=a.positions[P];C|=a.positions[P+1]<<8,C|=a.positions[P+2]<<16,C|=C&8388608?4278190080:0,d.position[T]=C*p}for(let T=0;T<3;T++)d.scale[T]=Math.exp(a.scales[x*3+T]/16-10);const A=a.rotations.subarray(x*3,x*3+3),_=[A[0]/127.5-1,A[1]/127.5-1,A[2]/127.5-1];d.rotation[0]=_[0],d.rotation[1]=_[1],d.rotation[2]=_[2];const v=_[0]*_[0]+_[1]*_[1]+_[2]*_[2];d.rotation[3]=Math.sqrt(Math.max(0,1-v)),d.alpha=Math.floor(a.alphas[x]);for(let T=0;T<3;T++)d.color[T]=Math.floor(((a.colors[x*3+T]/255-.5)/V1*g+.5)*255);for(let T=0;T<3;T++)for(let P=0;P<m;P++)d.sh[T*m+P]=W1(a.sh[m*3*x+P*3+T]);const y=X1(d,a.shDegree,e);if(t){const T=Ke.CompressionLevels[0].SphericalHarmonicsDegrees[e].BytesPerSplat,P=x*T+s;Ke.writeSplatDataToSectionBuffer(y,n,P,0,e)}else n.addSplat(y)}}const q1=16,Y1=1e7;function j1(a){const e=new DataView(a);let t=0;const n={magic:e.getUint32(t,!0),version:e.getUint32(t+4,!0),numPoints:e.getUint32(t+8,!0),shDegree:e.getUint8(t+12),fractionalBits:e.getUint8(t+13),flags:e.getUint8(t+14),reserved:e.getUint8(t+15)};if(t+=q1,n.magic!==z1)return console.error("[SPZ ERROR] deserializePackedGaussians: header not found"),null;if(n.version<1||n.version>2)return console.error(`[SPZ ERROR] deserializePackedGaussians: version not supported: ${n.version}`),null;if(n.numPoints>Y1)return console.error(`[SPZ ERROR] deserializePackedGaussians: Too many points: ${n.numPoints}`),null;if(n.shDegree>3)return console.error(`[SPZ ERROR] deserializePackedGaussians: Unsupported SH degree: ${n.shDegree}`),null;const s=n.numPoints,o=Gs(n.shDegree),l=n.version===1,u={numPoints:s,shDegree:n.shDegree,fractionalBits:n.fractionalBits,antialiased:(n.flags&H1)!==0,positions:new Uint8Array(s*3*(l?2:3)),scales:new Uint8Array(s*3),rotations:new Uint8Array(s*3),alphas:new Uint8Array(s),colors:new Uint8Array(s*3),sh:new Uint8Array(s*o*3)};try{const d=new Uint8Array(a);let f=u.positions.length,p=t;if(u.positions.set(d.slice(p,p+f)),p+=f,u.alphas.set(d.slice(p,p+u.alphas.length)),p+=u.alphas.length,u.colors.set(d.slice(p,p+u.colors.length)),p+=u.colors.length,u.scales.set(d.slice(p,p+u.scales.length)),p+=u.scales.length,u.rotations.set(d.slice(p,p+u.rotations.length)),p+=u.rotations.length,u.sh.set(d.slice(p,p+u.sh.length)),p+u.sh.length!==a.byteLength)return console.error("[SPZ ERROR] deserializePackedGaussians: incorrect buffer size"),null}catch(d){return console.error("[SPZ ERROR] deserializePackedGaussians: read error",d),null}return u}async function K1(a){try{const e=await O1(a);return j1(e.buffer)}catch(e){return console.error("[SPZ ERROR] loadSpzPacked: decompression error",e),null}}class Ep{static loadFromURL(e,t,n,s,o=!0,l=0,u,d,f,p,m){return t&&t(0,"0%",xn.Downloading),_u(e,t,!0,u).then(g=>(t&&t(0,"0%",xn.Processing),Ep.loadFromFileData(g,n,s,o,l,d,f,p,m)))}static async loadFromFileData(e,t,n,s,o=0,l,u,d,f){await Mi();const p=await K1(e);o=Math.min(p.shDegree,o);const m=new ze(o);if(s)return wx(p,o,!1,m,0),ul.getStandardGenerator(t,n,l,u,d,f).generateFromUncompressedSplatArray(m);{const{splatBuffer:g,splatBufferDataOffsetBytes:x}=Ke.preallocateUncompressed(p.numPoints,o);return wx(p,o,!0,g.bufferData,x),g}}}const Gt=class Gt{static parseToUncompressedSplatBufferSection(e,t,n,s,o,l){const u=Ke.CompressionLevels[0].BytesPerCenter,d=Ke.CompressionLevels[0].BytesPerScale,f=Ke.CompressionLevels[0].BytesPerRotation,p=Ke.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat;for(let m=e;m<=t;m++){const g=m*Gt.RowSizeBytes+s,x=new Float32Array(n,g,3),A=new Float32Array(n,g+Gt.CenterSizeBytes,3),_=new Uint8Array(n,g+Gt.CenterSizeBytes+Gt.ScaleSizeBytes,4),v=new Uint8Array(n,g+Gt.CenterSizeBytes+Gt.ScaleSizeBytes+Gt.RotationSizeBytes,4),y=new tn((v[1]-128)/128,(v[2]-128)/128,(v[3]-128)/128,(v[0]-128)/128);y.normalize();const T=m*p+l,P=new Float32Array(o,T,3),C=new Float32Array(o,T+u,3),w=new Float32Array(o,T+u+d,4),I=new Uint8Array(o,T+u+d+f,4);P[0]=x[0],P[1]=x[1],P[2]=x[2],C[0]=A[0],C[1]=A[1],C[2]=A[2],w[0]=y.w,w[1]=y.x,w[2]=y.y,w[3]=y.z,I[0]=_[0],I[1]=_[1],I[2]=_[2],I[3]=_[3]}}static parseToUncompressedSplatArraySection(e,t,n,s,o){for(let l=e;l<=t;l++){const u=l*Gt.RowSizeBytes+s,d=new Float32Array(n,u,3),f=new Float32Array(n,u+Gt.CenterSizeBytes,3),p=new Uint8Array(n,u+Gt.CenterSizeBytes+Gt.ScaleSizeBytes,4),m=new Uint8Array(n,u+Gt.CenterSizeBytes+Gt.ScaleSizeBytes+Gt.RotationSizeBytes,4),g=new tn((m[1]-128)/128,(m[2]-128)/128,(m[3]-128)/128,(m[0]-128)/128);g.normalize(),o.addSplatFromComonents(d[0],d[1],d[2],f[0],f[1],f[2],g.w,g.x,g.y,g.z,p[0],p[1],p[2],p[3])}}static parseStandardSplatToUncompressedSplatArray(e){const t=e.byteLength/Gt.RowSizeBytes,n=new ze;for(let s=0;s<t;s++){const o=s*Gt.RowSizeBytes,l=new Float32Array(e,o,3),u=new Float32Array(e,o+Gt.CenterSizeBytes,3),d=new Uint8Array(e,o+Gt.CenterSizeBytes+Gt.ScaleSizeBytes,4),f=new Uint8Array(e,o+Gt.CenterSizeBytes+Gt.ScaleSizeBytes+Gt.ColorSizeBytes,4),p=new tn((f[1]-128)/128,(f[2]-128)/128,(f[3]-128)/128,(f[0]-128)/128);p.normalize(),n.addSplatFromComonents(l[0],l[1],l[2],u[0],u[1],u[2],p.w,p.x,p.y,p.z,d[0],d[1],d[2],d[3])}return n}};Fe(Gt,"RowSizeBytes",32),Fe(Gt,"CenterSizeBytes",12),Fe(Gt,"ScaleSizeBytes",12),Fe(Gt,"RotationSizeBytes",4),Fe(Gt,"ColorSizeBytes",4);let ks=Gt;function bx(a,e,t,n,s,o,l,u){return e?ul.getStandardGenerator(t,n,s,o,l,u).generateFromUncompressedSplatArray(a):Ke.generateFromUncompressedSplatArrays([a],t,0,new U)}class Mp{static loadFromURL(e,t,n,s,o,l,u=!0,d,f,p,m,g){let x=n?Jt.ProgressiveToSplatBuffer:Jt.ProgressiveToSplatArray;u&&(x=Jt.ProgressiveToSplatArray);const A=Ke.HeaderSizeBytes+Ke.SectionHeaderSizeBytes,_=wt.ProgressiveLoadSectionSize,v=1;let y,T,P,C=0,w=0,I;const R=dp();let M=0,F=0,B=[];const N=(H,q,Y,G)=>{const K=H>=100;if(Y&&B.push(Y),x===Jt.DownloadBeforeProcessing){K&&R.resolve(B);return}if(!G){if(n)throw new uu("Cannon directly load .splat because no file size info is available.");x=Jt.DownloadBeforeProcessing;return}if(!y){C=G/ks.RowSizeBytes,y=new ArrayBuffer(G);const j=Ke.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,k=A+j*C;x===Jt.ProgressiveToSplatBuffer?(T=new ArrayBuffer(k),Ke.writeHeaderToBuffer({versionMajor:Ke.CurrentMajorVersion,versionMinor:Ke.CurrentMinorVersion,maxSectionCount:v,sectionCount:v,maxSplatCount:C,splatCount:w,compressionLevel:0,sceneCenter:new U},T)):I=new ze(0)}if(Y){new Uint8Array(y,F,Y.byteLength).set(new Uint8Array(Y)),F+=Y.byteLength;const j=F-M;if(j>_||K){const Q=(K?j:_)/ks.RowSizeBytes,J=w+Q;x===Jt.ProgressiveToSplatBuffer?ks.parseToUncompressedSplatBufferSection(w,J-1,y,0,T,A):ks.parseToUncompressedSplatArraySection(w,J-1,y,0,I),w=J,x===Jt.ProgressiveToSplatBuffer&&(P||(Ke.writeSectionHeaderToBuffer({maxSplatCount:C,splatCount:w,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0},0,T,Ke.HeaderSizeBytes),P=new Ke(T,!1)),P.updateLoadedCounts(1,w),s&&s(P,K)),M+=_}}K&&(x===Jt.ProgressiveToSplatBuffer?R.resolve(P):R.resolve(I)),t&&t(H,q,xn.Downloading)};return t&&t(0,"0%",xn.Downloading),_u(e,N,!1,d).then(()=>(t&&t(0,"0%",xn.Processing),R.promise.then(H=>(t&&t(100,"100%",xn.Done),x===Jt.DownloadBeforeProcessing?new Blob(B).arrayBuffer().then(q=>Mp.loadFromFileData(q,o,l,u,f,p,m,g)):x===Jt.ProgressiveToSplatBuffer?H:Mi(()=>bx(H,u,o,l,f,p,m,g))))))}static loadFromFileData(e,t,n,s,o,l,u,d){return Mi(()=>{const f=ks.parseStandardSplatToUncompressedSplatArray(e);return bx(f,s,t,n,o,l,u,d)})}}const Ha=class Ha{static checkVersion(e){const t=Ke.CurrentMajorVersion,n=Ke.CurrentMinorVersion,s=Ke.parseHeader(e);if(s.versionMajor===t&&s.versionMinor>=n||s.versionMajor>t)return!0;throw new Error(`KSplat version not supported: v${s.versionMajor}.${s.versionMinor}. Minimum required: v${t}.${n}`)}static loadFromURL(e,t,n,s,o){let l,u,d,f,p=!1,m=!1,g,x=[],A=!1,_=!1,v=0,y=0,T=0,P=!1,C=!1,w=!1,I=[];const R=dp(),M=()=>{!p&&!m&&v>=Ke.HeaderSizeBytes&&(m=!0,new Blob(I).arrayBuffer().then(G=>{d=new ArrayBuffer(Ke.HeaderSizeBytes),new Uint8Array(d).set(new Uint8Array(G,0,Ke.HeaderSizeBytes)),Ha.checkVersion(d),m=!1,p=!0,f=Ke.parseHeader(d),window.setTimeout(()=>{N()},1)}))};let F=0;const B=()=>{F===0&&(F++,window.setTimeout(()=>{F--,H()},1))},N=()=>{const Y=()=>{_=!0,new Blob(I).arrayBuffer().then(K=>{_=!1,A=!0,g=new ArrayBuffer(f.maxSectionCount*Ke.SectionHeaderSizeBytes),new Uint8Array(g).set(new Uint8Array(K,Ke.HeaderSizeBytes,f.maxSectionCount*Ke.SectionHeaderSizeBytes)),x=Ke.parseSectionHeaders(f,g,0,!1);let j=0;for(let Q=0;Q<f.maxSectionCount;Q++)j+=x[Q].storageSizeBytes;const k=Ke.HeaderSizeBytes+f.maxSectionCount*Ke.SectionHeaderSizeBytes+j;if(!l){l=new ArrayBuffer(k);let Q=0;for(let J=0;J<I.length;J++){const O=I[J];new Uint8Array(l,Q,O.byteLength).set(new Uint8Array(O)),Q+=O.byteLength}}T=Ke.HeaderSizeBytes+Ke.SectionHeaderSizeBytes*f.maxSectionCount;for(let Q=0;Q<=x.length&&Q<f.maxSectionCount;Q++)T+=x[Q].storageSizeBytes;B()})};!_&&!A&&p&&v>=Ke.HeaderSizeBytes+Ke.SectionHeaderSizeBytes*f.maxSectionCount&&Y()},H=()=>{if(w)return;w=!0;const Y=()=>{if(w=!1,A){if(C)return;if(P=v>=T,v-y>wt.ProgressiveLoadSectionSize||P){y+=wt.ProgressiveLoadSectionSize,C=y>=T,u||(u=new Ke(l,!1));const K=Ke.HeaderSizeBytes+Ke.SectionHeaderSizeBytes*f.maxSectionCount;let j=0,k=0,Q=0;for(let ee=0;ee<f.maxSectionCount;ee++){const ye=x[ee],Ce=j+ye.partiallyFilledBucketCount*4+ye.bucketStorageSizeBytes*ye.bucketCount,be=K+Ce;if(y>=be){k++;const se=y-be,Re=Ke.CompressionLevels[f.compressionLevel].SphericalHarmonicsDegrees[ye.sphericalHarmonicsDegree].BytesPerSplat;let Oe=Math.floor(se/Re);Oe=Math.min(Oe,ye.maxSplatCount),Q+=Oe,u.updateLoadedCounts(k,Q),u.updateSectionLoadedCounts(ee,Oe)}else break;j+=ye.storageSizeBytes}s(u,C);const J=y/T*100,O=J.toFixed(2)+"%";t&&t(J,O,xn.Downloading),C?R.resolve(u):H()}}};window.setTimeout(Y,wt.ProgressiveLoadSectionDelayDuration)};return _u(e,(Y,G,K)=>{K&&(I.push(K),l&&new Uint8Array(l,v,K.byteLength).set(new Uint8Array(K)),v+=K.byteLength),n?(M(),N(),H()):t&&t(Y,G,xn.Downloading)},!n,o).then(Y=>(t&&t(0,"0%",xn.Processing),(n?R.promise:Ha.loadFromFileData(Y)).then(K=>(t&&t(100,"100%",xn.Done),K))))}static loadFromFileData(e){return Mi(()=>(Ha.checkVersion(e),new Ke(e)))}};Fe(Ha,"downloadFile",(function(){let e;return function(t,n){const s=new Blob([t.bufferData],{type:"application/octet-stream"});e||(e=document.createElement("a"),document.body.appendChild(e)),e.download=n,e.href=URL.createObjectURL(s),e.click()}})());let Yh=Ha;const Zn={Splat:0,KSplat:1,Ply:2,Spz:3},Rx=a=>a.endsWith(".ply")?Zn.Ply:a.endsWith(".splat")?Zn.Splat:a.endsWith(".ksplat")?Zn.KSplat:a.endsWith(".spz")?Zn.Spz:null,Ix={type:"change"},qf={type:"start"},Px={type:"end"},Qc=new lp,Dx=new os,$1=Math.cos(70*ov.DEG2RAD);class qc extends ps{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"KeyA",UP:"KeyW",RIGHT:"KeyD",BOTTOM:"KeyS"},this.mouseButtons={LEFT:Sa.ROTATE,MIDDLE:Sa.DOLLY,RIGHT:Sa.PAN},this.touches={ONE:ya.ROTATE,TWO:ya.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return u.phi},this.getAzimuthalAngle=function(){return u.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(X){X.addEventListener("keydown",pn),this._domElementKeyEvents=X},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",pn),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,this.clearDampedRotation(),this.clearDampedPan(),n.object.updateProjectionMatrix(),n.dispatchEvent(Ix),n.update(),o=s.NONE},this.clearDampedRotation=function(){d.theta=0,d.phi=0},this.clearDampedPan=function(){p.set(0,0,0)},this.update=(function(){const X=new U,ie=new tn().setFromUnitVectors(e.up,new U(0,1,0)),me=ie.clone().invert(),Me=new U,He=new tn,Le=new U,Ie=2*Math.PI;return function(){ie.setFromUnitVectors(e.up,new U(0,1,0)),me.copy(ie).invert();const lt=n.object.position;X.copy(lt).sub(n.target),X.applyQuaternion(ie),u.setFromVector3(X),n.autoRotate&&o===s.NONE&&N(F()),n.enableDamping?(u.theta+=d.theta*n.dampingFactor,u.phi+=d.phi*n.dampingFactor):(u.theta+=d.theta,u.phi+=d.phi);let at=n.minAzimuthAngle,$=n.maxAzimuthAngle;isFinite(at)&&isFinite($)&&(at<-Math.PI?at+=Ie:at>Math.PI&&(at-=Ie),$<-Math.PI?$+=Ie:$>Math.PI&&($-=Ie),at<=$?u.theta=Math.max(at,Math.min($,u.theta)):u.theta=u.theta>(at+$)/2?Math.max(at,u.theta):Math.min($,u.theta)),u.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,u.phi)),u.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(p,n.dampingFactor):n.target.add(p),n.zoomToCursor&&I||n.object.isOrthographicCamera?u.radius=Q(u.radius):u.radius=Q(u.radius*f),X.setFromSpherical(u),X.applyQuaternion(me),lt.copy(n.target).add(X),n.object.lookAt(n.target),n.enableDamping===!0?(d.theta*=1-n.dampingFactor,d.phi*=1-n.dampingFactor,p.multiplyScalar(1-n.dampingFactor)):(d.set(0,0,0),p.set(0,0,0));let De=!1;if(n.zoomToCursor&&I){let Se=null;if(n.object.isPerspectiveCamera){const Be=X.length();Se=Q(Be*f);const ke=Be-Se;n.object.position.addScaledVector(C,ke),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Be=new U(w.x,w.y,0);Be.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/f)),n.object.updateProjectionMatrix(),De=!0;const ke=new U(w.x,w.y,0);ke.unproject(n.object),n.object.position.sub(ke).add(Be),n.object.updateMatrixWorld(),Se=X.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Se!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Se).add(n.object.position):(Qc.origin.copy(n.object.position),Qc.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Qc.direction))<$1?e.lookAt(n.target):(Dx.setFromNormalAndCoplanarPoint(n.object.up,n.target),Qc.intersectPlane(Dx,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/f)),n.object.updateProjectionMatrix(),De=!0);return f=1,I=!1,De||Me.distanceToSquared(n.object.position)>l||8*(1-He.dot(n.object.quaternion))>l||Le.distanceToSquared(n.target)>0?(n.dispatchEvent(Ix),Me.copy(n.object.position),He.copy(n.object.quaternion),Le.copy(n.target),De=!1,!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",b),n.domElement.removeEventListener("pointerdown",yt),n.domElement.removeEventListener("pointercancel",Bt),n.domElement.removeEventListener("wheel",ne),n.domElement.removeEventListener("pointermove",Tt),n.domElement.removeEventListener("pointerup",Bt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",pn),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=s.NONE;const l=1e-6,u=new k0,d=new k0;let f=1;const p=new U,m=new qe,g=new qe,x=new qe,A=new qe,_=new qe,v=new qe,y=new qe,T=new qe,P=new qe,C=new U,w=new qe;let I=!1;const R=[],M={};function F(){return 2*Math.PI/60/60*n.autoRotateSpeed}function B(){return Math.pow(.95,n.zoomSpeed)}function N(X){d.theta-=X}function H(X){d.phi-=X}const q=(function(){const X=new U;return function(me,Me){X.setFromMatrixColumn(Me,0),X.multiplyScalar(-me),p.add(X)}})(),Y=(function(){const X=new U;return function(me,Me){n.screenSpacePanning===!0?X.setFromMatrixColumn(Me,1):(X.setFromMatrixColumn(Me,0),X.crossVectors(n.object.up,X)),X.multiplyScalar(me),p.add(X)}})(),G=(function(){const X=new U;return function(me,Me){const He=n.domElement;if(n.object.isPerspectiveCamera){const Le=n.object.position;X.copy(Le).sub(n.target);let Ie=X.length();Ie*=Math.tan(n.object.fov/2*Math.PI/180),q(2*me*Ie/He.clientHeight,n.object.matrix),Y(2*Me*Ie/He.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(q(me*(n.object.right-n.object.left)/n.object.zoom/He.clientWidth,n.object.matrix),Y(Me*(n.object.top-n.object.bottom)/n.object.zoom/He.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function K(X){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?f/=X:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(X){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?f*=X:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(X){if(!n.zoomToCursor)return;I=!0;const ie=n.domElement.getBoundingClientRect(),me=X.clientX-ie.left,Me=X.clientY-ie.top,He=ie.width,Le=ie.height;w.x=me/He*2-1,w.y=-(Me/Le)*2+1,C.set(w.x,w.y,1).unproject(e).sub(e.position).normalize()}function Q(X){return Math.max(n.minDistance,Math.min(n.maxDistance,X))}function J(X){m.set(X.clientX,X.clientY)}function O(X){k(X),y.set(X.clientX,X.clientY)}function ee(X){A.set(X.clientX,X.clientY)}function ye(X){g.set(X.clientX,X.clientY),x.subVectors(g,m).multiplyScalar(n.rotateSpeed);const ie=n.domElement;N(2*Math.PI*x.x/ie.clientHeight),H(2*Math.PI*x.y/ie.clientHeight),m.copy(g),n.update()}function Ce(X){T.set(X.clientX,X.clientY),P.subVectors(T,y),P.y>0?K(B()):P.y<0&&j(B()),y.copy(T),n.update()}function be(X){_.set(X.clientX,X.clientY),v.subVectors(_,A).multiplyScalar(n.panSpeed),G(v.x,v.y),A.copy(_),n.update()}function se(X){k(X),X.deltaY<0?j(B()):X.deltaY>0&&K(B()),n.update()}function xe(X){let ie=!1;switch(X.code){case n.keys.UP:X.ctrlKey||X.metaKey||X.shiftKey?H(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,n.keyPanSpeed),ie=!0;break;case n.keys.BOTTOM:X.ctrlKey||X.metaKey||X.shiftKey?H(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,-n.keyPanSpeed),ie=!0;break;case n.keys.LEFT:X.ctrlKey||X.metaKey||X.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(n.keyPanSpeed,0),ie=!0;break;case n.keys.RIGHT:X.ctrlKey||X.metaKey||X.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(-n.keyPanSpeed,0),ie=!0;break}ie&&(X.preventDefault(),n.update())}function pe(){if(R.length===1)m.set(R[0].pageX,R[0].pageY);else{const X=.5*(R[0].pageX+R[1].pageX),ie=.5*(R[0].pageY+R[1].pageY);m.set(X,ie)}}function Re(){if(R.length===1)A.set(R[0].pageX,R[0].pageY);else{const X=.5*(R[0].pageX+R[1].pageX),ie=.5*(R[0].pageY+R[1].pageY);A.set(X,ie)}}function Oe(){const X=R[0].pageX-R[1].pageX,ie=R[0].pageY-R[1].pageY,me=Math.sqrt(X*X+ie*ie);y.set(0,me)}function Ge(){n.enableZoom&&Oe(),n.enablePan&&Re()}function xt(){n.enableZoom&&Oe(),n.enableRotate&&pe()}function Ye(X){if(R.length==1)g.set(X.pageX,X.pageY);else{const me=we(X),Me=.5*(X.pageX+me.x),He=.5*(X.pageY+me.y);g.set(Me,He)}x.subVectors(g,m).multiplyScalar(n.rotateSpeed);const ie=n.domElement;N(2*Math.PI*x.x/ie.clientHeight),H(2*Math.PI*x.y/ie.clientHeight),m.copy(g)}function dt(X){if(R.length===1)_.set(X.pageX,X.pageY);else{const ie=we(X),me=.5*(X.pageX+ie.x),Me=.5*(X.pageY+ie.y);_.set(me,Me)}v.subVectors(_,A).multiplyScalar(n.panSpeed),G(v.x,v.y),A.copy(_)}function nt(X){const ie=we(X),me=X.pageX-ie.x,Me=X.pageY-ie.y,He=Math.sqrt(me*me+Me*Me);T.set(0,He),P.set(0,Math.pow(T.y/y.y,n.zoomSpeed)),K(P.y),y.copy(T)}function pt(X){n.enableZoom&&nt(X),n.enablePan&&dt(X)}function Rt(X){n.enableZoom&&nt(X),n.enableRotate&&Ye(X)}function yt(X){n.enabled!==!1&&(R.length===0&&(n.domElement.setPointerCapture(X.pointerId),n.domElement.addEventListener("pointermove",Tt),n.domElement.addEventListener("pointerup",Bt)),ae(X),X.pointerType==="touch"?Pt(X):Ut(X))}function Tt(X){n.enabled!==!1&&(X.pointerType==="touch"?z(X):qt(X))}function Bt(X){de(X),R.length===0&&(n.domElement.releasePointerCapture(X.pointerId),n.domElement.removeEventListener("pointermove",Tt),n.domElement.removeEventListener("pointerup",Bt)),n.dispatchEvent(Px),o=s.NONE}function Ut(X){let ie;switch(X.button){case 0:ie=n.mouseButtons.LEFT;break;case 1:ie=n.mouseButtons.MIDDLE;break;case 2:ie=n.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case Sa.DOLLY:if(n.enableZoom===!1)return;O(X),o=s.DOLLY;break;case Sa.ROTATE:if(X.ctrlKey||X.metaKey||X.shiftKey){if(n.enablePan===!1)return;ee(X),o=s.PAN}else{if(n.enableRotate===!1)return;J(X),o=s.ROTATE}break;case Sa.PAN:if(X.ctrlKey||X.metaKey||X.shiftKey){if(n.enableRotate===!1)return;J(X),o=s.ROTATE}else{if(n.enablePan===!1)return;ee(X),o=s.PAN}break;default:o=s.NONE}o!==s.NONE&&n.dispatchEvent(qf)}function qt(X){switch(o){case s.ROTATE:if(n.enableRotate===!1)return;ye(X);break;case s.DOLLY:if(n.enableZoom===!1)return;Ce(X);break;case s.PAN:if(n.enablePan===!1)return;be(X);break}}function ne(X){n.enabled===!1||n.enableZoom===!1||o!==s.NONE||(X.preventDefault(),n.dispatchEvent(qf),se(X),n.dispatchEvent(Px))}function pn(X){n.enabled===!1||n.enablePan===!1||xe(X)}function Pt(X){switch(ge(X),R.length){case 1:switch(n.touches.ONE){case ya.ROTATE:if(n.enableRotate===!1)return;pe(),o=s.TOUCH_ROTATE;break;case ya.PAN:if(n.enablePan===!1)return;Re(),o=s.TOUCH_PAN;break;default:o=s.NONE}break;case 2:switch(n.touches.TWO){case ya.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ge(),o=s.TOUCH_DOLLY_PAN;break;case ya.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xt(),o=s.TOUCH_DOLLY_ROTATE;break;default:o=s.NONE}break;default:o=s.NONE}o!==s.NONE&&n.dispatchEvent(qf)}function z(X){switch(ge(X),o){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ye(X),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;dt(X),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;pt(X),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Rt(X),n.update();break;default:o=s.NONE}}function b(X){n.enabled!==!1&&X.preventDefault()}function ae(X){R.push(X)}function de(X){delete M[X.pointerId];for(let ie=0;ie<R.length;ie++)if(R[ie].pointerId==X.pointerId){R.splice(ie,1);return}}function ge(X){let ie=M[X.pointerId];ie===void 0&&(ie=new qe,M[X.pointerId]=ie),ie.set(X.pageX,X.pageY)}function we(X){const ie=X.pointerId===R[0].pointerId?R[1]:R[0];return M[ie.pointerId]}n.domElement.addEventListener("contextmenu",b),n.domElement.addEventListener("pointerdown",yt),n.domElement.addEventListener("pointercancel",Bt),n.domElement.addEventListener("wheel",ne,{passive:!1}),this.update()}}const Z1=(a,e,t,n,s)=>{const o=performance.now();let l=a.style.display==="none"?0:parseFloat(a.style.opacity);isNaN(l)&&(l=1);const u=window.setInterval(()=>{const f=performance.now()-o;let p=Math.min(f/n,1);p>.999&&(p=1);let m;e?(m=(1-p)*l,m<1e-4&&(m=0)):m=(1-l)*p+l,m>0?(a.style.display=t,a.style.opacity=m):a.style.display="none",p>=1&&(s&&s(),window.clearInterval(u))},16);return u},J1=500,pu=class pu{constructor(e,t){this.taskIDGen=0,this.elementID=pu.elementIDGen++,this.tasks=[],this.message=e||"Loading...",this.container=t||document.body,this.spinnerContainerOuter=document.createElement("div"),this.spinnerContainerOuter.className=`spinnerOuterContainer${this.elementID}`,this.spinnerContainerOuter.style.display="none",this.spinnerContainerPrimary=document.createElement("div"),this.spinnerContainerPrimary.className=`spinnerContainerPrimary${this.elementID}`,this.spinnerPrimary=document.createElement("div"),this.spinnerPrimary.classList.add(`spinner${this.elementID}`,`spinnerPrimary${this.elementID}`),this.messageContainerPrimary=document.createElement("div"),this.messageContainerPrimary.classList.add(`messageContainer${this.elementID}`,`messageContainerPrimary${this.elementID}`),this.messageContainerPrimary.innerHTML=this.message,this.spinnerContainerMin=document.createElement("div"),this.spinnerContainerMin.className=`spinnerContainerMin${this.elementID}`,this.spinnerMin=document.createElement("div"),this.spinnerMin.classList.add(`spinner${this.elementID}`,`spinnerMin${this.elementID}`),this.messageContainerMin=document.createElement("div"),this.messageContainerMin.classList.add(`messageContainer${this.elementID}`,`messageContainerMin${this.elementID}`),this.messageContainerMin.innerHTML=this.message,this.spinnerContainerPrimary.appendChild(this.spinnerPrimary),this.spinnerContainerPrimary.appendChild(this.messageContainerPrimary),this.spinnerContainerOuter.appendChild(this.spinnerContainerPrimary),this.spinnerContainerMin.appendChild(this.spinnerMin),this.spinnerContainerMin.appendChild(this.messageContainerMin),this.spinnerContainerOuter.appendChild(this.spinnerContainerMin);const n=document.createElement("style");n.innerHTML=`

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

        `,this.spinnerContainerOuter.appendChild(n),this.container.appendChild(this.spinnerContainerOuter),this.setMinimized(!1,!0),this.fadeTransitions=[]}addTask(e){const t={message:e,id:this.taskIDGen++};return this.tasks.push(t),this.update(),t.id}removeTask(e){let t=0;for(let n of this.tasks){if(n.id===e){this.tasks.splice(t,1);break}t++}this.update()}removeAllTasks(){this.tasks=[],this.update()}setMessageForTask(e,t){for(let n of this.tasks)if(n.id===e){n.message=t;break}this.update()}update(){this.tasks.length>0?(this.show(),this.setMessage(this.tasks[this.tasks.length-1].message)):this.hide()}show(){this.spinnerContainerOuter.style.display="block",this.visible=!0}hide(){this.spinnerContainerOuter.style.display="none",this.visible=!1}setContainer(e){this.container&&this.spinnerContainerOuter.parentElement===this.container&&this.container.removeChild(this.spinnerContainerOuter),e&&(this.container=e,this.container.appendChild(this.spinnerContainerOuter),this.spinnerContainerOuter.style.zIndex=this.container.style.zIndex+1)}setMinimized(e,t){const n=(s,o,l,u,d)=>{l?s.style.display=o?u:"none":this.fadeTransitions[d]=Z1(s,!o,u,J1,()=>{this.fadeTransitions[d]=null})};n(this.spinnerContainerPrimary,!e,t,"block",0),n(this.spinnerContainerMin,e,t,"flex",1),this.minimized=e}setMessage(e){this.messageContainerPrimary.innerHTML=e,this.messageContainerMin.innerHTML=e}};Fe(pu,"elementIDGen",0);let jh=pu;class ew{constructor(e){this.idGen=0,this.tasks=[],this.container=e||document.body,this.progressBarContainerOuter=document.createElement("div"),this.progressBarContainerOuter.className="progressBarOuterContainer",this.progressBarContainerOuter.style.display="none",this.progressBarBox=document.createElement("div"),this.progressBarBox.className="progressBarBox",this.progressBarBackground=document.createElement("div"),this.progressBarBackground.className="progressBarBackground",this.progressBar=document.createElement("div"),this.progressBar.className="progressBar",this.progressBarBackground.appendChild(this.progressBar),this.progressBarBox.appendChild(this.progressBarBackground),this.progressBarContainerOuter.appendChild(this.progressBarBox);const t=document.createElement("style");t.innerHTML=`

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

        `,this.progressBarContainerOuter.appendChild(t),this.container.appendChild(this.progressBarContainerOuter)}show(){this.progressBarContainerOuter.style.display="block"}hide(){this.progressBarContainerOuter.style.display="none"}setProgress(e){this.progressBar.style.width=e+"%"}setContainer(e){this.container&&this.progressBarContainerOuter.parentElement===this.container&&this.container.removeChild(this.progressBarContainerOuter),e&&(this.container=e,this.container.appendChild(this.progressBarContainerOuter),this.progressBarContainerOuter.style.zIndex=this.container.style.zIndex+1)}}class tw{constructor(e){Fe(this,"update",function(e,t,n,s,o,l,u,d,f,p,m,g,x,A){const _=`${t.x.toFixed(5)}, ${t.y.toFixed(5)}, ${t.z.toFixed(5)}`;if(this.infoCells.cameraPosition.innerHTML!==_&&(this.infoCells.cameraPosition.innerHTML=_),n){const y=n,T=`${y.x.toFixed(5)}, ${y.y.toFixed(5)}, ${y.z.toFixed(5)}`;this.infoCells.cameraLookAt.innerHTML!==T&&(this.infoCells.cameraLookAt.innerHTML=T)}const v=`${s.x.toFixed(5)}, ${s.y.toFixed(5)}, ${s.z.toFixed(5)}`;if(this.infoCells.cameraUp.innerHTML!==v&&(this.infoCells.cameraUp.innerHTML=v),this.infoCells.orthographicCamera.innerHTML=o?"Orthographic":"Perspective",l){const y=l,T=`${y.x.toFixed(5)}, ${y.y.toFixed(5)}, ${y.z.toFixed(5)}`;this.infoCells.cursorPosition.innerHTML=T}else this.infoCells.cursorPosition.innerHTML="N/A";this.infoCells.fps.innerHTML=u,this.infoCells.renderWindow.innerHTML=`${e.x} x ${e.y}`,this.infoCells.renderSplatCount.innerHTML=`${f} splats out of ${d} (${p.toFixed(2)}%)`,this.infoCells.sortTime.innerHTML=`${m.toFixed(3)} ms`,this.infoCells.focalAdjustment.innerHTML=`${g.toFixed(3)}`,this.infoCells.splatScale.innerHTML=`${x.toFixed(3)}`,this.infoCells.pointCloudMode.innerHTML=`${A}`});this.container=e||document.body,this.infoCells={};const t=[["Camera position","cameraPosition"],["Camera look-at","cameraLookAt"],["Camera up","cameraUp"],["Camera mode","orthographicCamera"],["Cursor position","cursorPosition"],["FPS","fps"],["Rendering:","renderSplatCount"],["Sort time","sortTime"],["Render window","renderWindow"],["Focal adjustment","focalAdjustment"],["Splat scale","splatScale"],["Point cloud mode","pointCloudMode"]];this.infoPanelContainer=document.createElement("div");const n=document.createElement("style");n.innerHTML=`

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

        `,this.infoPanelContainer.append(n),this.infoPanel=document.createElement("div"),this.infoPanel.className="infoPanel";const s=document.createElement("div");s.style.display="table";for(let o of t){const l=document.createElement("div");l.style.display="table-row",l.className="info-panel-row";const u=document.createElement("div");u.style.display="table-cell",u.innerHTML=`${o[0]}: `,u.classList.add("info-panel-cell","label-cell");const d=document.createElement("div");d.style.display="table-cell",d.style.width="10px",d.innerHTML=" ",d.className="info-panel-cell";const f=document.createElement("div");f.style.display="table-cell",f.innerHTML="",f.className="info-panel-cell",this.infoCells[o[1]]=f,l.appendChild(u),l.appendChild(d),l.appendChild(f),s.appendChild(l)}this.infoPanel.appendChild(s),this.infoPanelContainer.append(this.infoPanel),this.infoPanelContainer.style.display="none",this.container.appendChild(this.infoPanelContainer),this.visible=!1}setContainer(e){this.container&&this.infoPanelContainer.parentElement===this.container&&this.container.removeChild(this.infoPanelContainer),e&&(this.container=e,this.container.appendChild(this.infoPanelContainer),this.infoPanelContainer.style.zIndex=this.container.style.zIndex+1)}show(){this.infoPanelContainer.style.display="block",this.visible=!0}hide(){this.infoPanelContainer.style.display="none",this.visible=!1}}const Fx=new U;class nw extends _n{constructor(e=new U(0,0,1),t=new U(0,0,0),n=1,s=.1,o=16776960,l=n*.2,u=l*.2){super(),this.type="ArrowHelper";const d=new al(s,s,n,32);d.translate(0,n/2,0);const f=new al(0,u,l,32);f.translate(0,n,0),this.position.copy(t),this.line=new en(d,new dr({color:o,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new en(f,new dr({color:o,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Fx.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Fx,t)}}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class $o{constructor(e){Fe(this,"updateFocusMarker",(function(){const e=new U,t=new mt,n=new U;return function(s,o,l){t.copy(o.matrixWorld).invert(),e.copy(s).applyMatrix4(t),e.normalize().multiplyScalar(10),e.applyMatrix4(o.matrixWorld),n.copy(o.position).sub(s);const u=n.length();this.focusMarker.position.copy(s),this.focusMarker.scale.set(u,u,u),this.focusMarker.material.uniforms.realFocusPosition.value.copy(s),this.focusMarker.material.uniforms.viewport.value.copy(l),this.focusMarker.material.uniformsNeedUpdate=!0}})());Fe(this,"positionAndOrientControlPlane",(function(){const e=new tn,t=new U(0,1,0);return function(n,s){e.setFromUnitVectors(t,s),this.controlPlane.position.copy(n),this.controlPlane.quaternion.copy(e)}})());this.threeScene=e,this.splatRenderTarget=null,this.renderTargetCopyQuad=null,this.renderTargetCopyCamera=null,this.meshCursor=null,this.focusMarker=null,this.controlPlane=null,this.debugRoot=null,this.secondaryDebugRoot=null}updateSplatRenderTargetForRenderDimensions(e,t){this.destroySplatRendertarget(),this.splatRenderTarget=new ji(e,t,{format:ti,stencilBuffer:!1,depthBuffer:!0}),this.splatRenderTarget.depthTexture=new qs(e,t),this.splatRenderTarget.depthTexture.format=ur,this.splatRenderTarget.depthTexture.type=ei}destroySplatRendertarget(){this.splatRenderTarget&&(this.splatRenderTarget=null)}setupRenderTargetCopyObjects(){const e={sourceColorTexture:{type:"t",value:null},sourceDepthTexture:{type:"t",value:null}},t=new ni({vertexShader:`
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
            `,uniforms:e,depthWrite:!1,depthTest:!1,transparent:!0,blending:Gx,blendSrc:el,blendSrcAlpha:el,blendDst:tl,blendDstAlpha:tl});t.extensions.fragDepth=!0,this.renderTargetCopyQuad=new en(new Ys(2,2),t),this.renderTargetCopyCamera=new Su(-1,1,1,-1,0,1)}destroyRenderTargetCopyObjects(){this.renderTargetCopyQuad&&(ka(this.renderTargetCopyQuad),this.renderTargetCopyQuad=null)}setupMeshCursor(){if(!this.meshCursor){const e=new cp(.5,1.5,32),t=new dr({color:16777215}),n=new en(e,t);n.rotation.set(0,0,Math.PI),n.position.set(0,1,0);const s=new en(e,t);s.position.set(0,-1,0);const o=new en(e,t);o.rotation.set(0,0,Math.PI/2),o.position.set(1,0,0);const l=new en(e,t);l.rotation.set(0,0,-Math.PI/2),l.position.set(-1,0,0),this.meshCursor=new _n,this.meshCursor.add(n),this.meshCursor.add(s),this.meshCursor.add(o),this.meshCursor.add(l),this.meshCursor.scale.set(.1,.1,.1),this.threeScene.add(this.meshCursor),this.meshCursor.visible=!1}}destroyMeshCursor(){this.meshCursor&&(ka(this.meshCursor),this.threeScene.remove(this.meshCursor),this.meshCursor=null)}setMeshCursorVisibility(e){this.meshCursor.visible=e}getMeschCursorVisibility(){return this.meshCursor.visible}setMeshCursorPosition(e){this.meshCursor.position.copy(e)}positionAndOrientMeshCursor(e,t){this.meshCursor.position.copy(e),this.meshCursor.up.copy(t.up),this.meshCursor.lookAt(t.position)}setupFocusMarker(){if(!this.focusMarker){const e=new cu(.5,32,32),t=$o.buildFocusMarkerMaterial();t.depthTest=!1,t.depthWrite=!1,t.transparent=!0,this.focusMarker=new en(e,t)}}destroyFocusMarker(){this.focusMarker&&(ka(this.focusMarker),this.focusMarker=null)}setFocusMarkerVisibility(e){this.focusMarker.visible=e}setFocusMarkerOpacity(e){this.focusMarker.material.uniforms.opacity.value=e,this.focusMarker.material.uniformsNeedUpdate=!0}getFocusMarkerOpacity(){return this.focusMarker.material.uniforms.opacity.value}setupControlPlane(){if(!this.controlPlane){const e=new Ys(1,1);e.rotateX(-Math.PI/2);const t=new dr({color:16777215});t.transparent=!0,t.opacity=.6,t.depthTest=!1,t.depthWrite=!1,t.side=_i;const n=new en(e,t),s=new U(0,1,0);s.normalize();const o=new U(0,0,0),l=.5,u=.01,d=56576,f=new nw(s,o,l,u,d,.1,.03);this.controlPlane=new _n,this.controlPlane.add(n),this.controlPlane.add(f)}}destroyControlPlane(){this.controlPlane&&(ka(this.controlPlane),this.controlPlane=null)}setControlPlaneVisibility(e){this.controlPlane.visible=e}addDebugMeshes(){this.debugRoot=this.createDebugMeshes(),this.secondaryDebugRoot=this.createSecondaryDebugMeshes(),this.threeScene.add(this.debugRoot),this.threeScene.add(this.secondaryDebugRoot)}destroyDebugMeshes(){for(let e of[this.debugRoot,this.secondaryDebugRoot])e&&(ka(e),this.threeScene.remove(e));this.debugRoot=null,this.secondaryDebugRoot=null}createDebugMeshes(e){const t=new cu(1,32,32),n=new _n,s=(o,l)=>{let u=new en(t,$o.buildDebugMaterial(o));u.renderOrder=e,n.add(u),u.position.fromArray(l)};return s(16711680,[-50,0,0]),s(16711680,[50,0,0]),s(65280,[0,0,-50]),s(65280,[0,0,50]),s(16755200,[5,0,5]),n}createSecondaryDebugMeshes(e){const t=new hs(3,3,3),n=new _n;let s=12303291;const o=u=>{let d=new en(t,$o.buildDebugMaterial(s));d.renderOrder=e,n.add(d),d.position.fromArray(u)};let l=10;return o([-l,0,-l]),o([-l,0,l]),o([l,0,-l]),o([l,0,l]),n}static buildDebugMaterial(e){const t=`
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
        `,s={color:{type:"v3",value:new bt(e)}},o=new ni({uniforms:s,vertexShader:t,fragmentShader:n,transparent:!1,depthTest:!0,depthWrite:!0,side:lr});return o.extensions.fragDepth=!0,o}static buildFocusMarkerMaterial(e){const t=`
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
        `,s={color:{type:"v3",value:new bt(e)},realFocusPosition:{type:"v3",value:new U},viewport:{type:"v2",value:new qe},opacity:{value:0}};return new ni({uniforms:s,vertexShader:t,fragmentShader:n,transparent:!0,depthTest:!1,depthWrite:!1,side:lr})}dispose(){this.destroyMeshCursor(),this.destroyFocusMarker(),this.destroyDebugMeshes(),this.destroyControlPlane(),this.destroyRenderTargetCopyObjects(),this.destroySplatRendertarget()}}const iw=new U(1,0,0),rw=new U(0,1,0),sw=new U(0,0,1);class Yf{constructor(e=new U,t=new U){Fe(this,"intersectBox",(function(){const e=new U,t=[],n=[],s=[];return function(o,l){if(n[0]=this.origin.x,n[1]=this.origin.y,n[2]=this.origin.z,s[0]=this.direction.x,s[1]=this.direction.y,s[2]=this.direction.z,this.boxContainsPoint(o,this.origin,1e-4))return l&&(l.origin.copy(this.origin),l.normal.set(0,0,0),l.distance=-1),!0;for(let u=0;u<3;u++){if(s[u]==0)continue;const d=u==0?iw:u==1?rw:sw,f=s[u]<0?o.max:o.min;let p=-Math.sign(s[u]);t[0]=u==0?f.x:u==1?f.y:f.z;let m=t[0]-n[u];if(m*p<0){const g=(u+1)%3,x=(u+2)%3;if(t[2]=s[g]/s[u]*m+n[g],t[1]=s[x]/s[u]*m+n[x],e.set(t[u],t[x],t[g]),this.boxContainsPoint(o,e,1e-4))return l&&(l.origin.copy(e),l.normal.copy(d).multiplyScalar(p),l.distance=e.sub(this.origin).length()),!0}}return!1}})());Fe(this,"intersectSphere",(function(){const e=new U;return function(t,n,s){e.copy(t).sub(this.origin);const o=e.dot(this.direction),l=o*o,d=e.dot(e)-l,f=n*n;if(d>f)return!1;const p=Math.sqrt(f-d),m=o-p,g=o+p;if(g<0)return!1;let x=m<0?g:m;return s&&(s.origin.copy(this.origin).addScaledVector(this.direction,x),s.normal.copy(s.origin).sub(t).normalize(),s.distance=x),!0}})());this.origin=new U,this.direction=new U,this.setParameters(e,t)}setParameters(e,t){this.origin.copy(e),this.direction.copy(t).normalize()}boxContainsPoint(e,t,n){return!(t.x<e.min.x-n||t.x>e.max.x+n||t.y<e.min.y-n||t.y>e.max.y+n||t.z<e.min.z-n||t.z>e.max.z+n)}}class Cp{constructor(){this.origin=new U,this.normal=new U,this.distance=0,this.splatIndex=0}set(e,t,n,s){this.origin.copy(e),this.normal.copy(t),this.distance=n,this.splatIndex=s}clone(){const e=new Cp;return e.origin.copy(this.origin),e.normal.copy(this.normal),e.distance=this.distance,e.splatIndex=this.splatIndex,e}}const br={ThreeD:0,TwoD:1};class aw{constructor(e,t,n=!1){Fe(this,"setFromCameraAndScreenPosition",(function(){const e=new qe;return function(t,n,s){if(e.x=n.x/s.x*2-1,e.y=(s.y-n.y)/s.y*2-1,t.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t;else if(t.isOrthographicCamera)this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t;else throw new Error("Raycaster::setFromCameraAndScreenPosition() -> Unsupported camera type")}})());Fe(this,"intersectSplatMesh",(function(){const e=new mt,t=new mt,n=new mt,s=new Yf,o=new U;return function(l,u=[]){const d=l.getSplatTree();if(d){for(let f=0;f<d.subTrees.length;f++){const p=d.subTrees[f];t.copy(l.matrixWorld),l.dynamicMode&&(l.getSceneTransform(f,n),t.multiply(n)),e.copy(t).invert(),s.origin.copy(this.ray.origin).applyMatrix4(e),s.direction.copy(this.ray.origin).add(this.ray.direction),s.direction.applyMatrix4(e).sub(s.origin).normalize();const m=[];p.rootNode&&this.castRayAtSplatTreeNode(s,d,p.rootNode,m),m.forEach(g=>{g.origin.applyMatrix4(t),g.normal.applyMatrix4(t).normalize(),g.distance=o.copy(g.origin).sub(this.ray.origin).length()}),u.push(...m)}return u.sort((f,p)=>f.distance>p.distance?1:-1),u}}})());Fe(this,"castRayAtSplatTreeNode",(function(){const e=new nn,t=new U,n=new U,s=new tn,o=new Cp,l=1e-7,u=new U(0,0,0),d=new mt,f=new mt,p=new mt,m=new mt,g=new mt,x=new Yf;return function(A,_,v,y=[]){if(A.intersectBox(v.boundingBox)){if(v.data&&v.data.indexes&&v.data.indexes.length>0)for(let T=0;T<v.data.indexes.length;T++){const P=v.data.indexes[T],C=_.splatMesh.getSceneIndexForSplat(P);if(_.splatMesh.getScene(C).visible&&(_.splatMesh.getSplatColor(P,e),_.splatMesh.getSplatCenter(P,t),_.splatMesh.getSplatScaleAndRotation(P,n,s),!(n.x<=l||n.y<=l||_.splatMesh.splatRenderMode===br.ThreeD&&n.z<=l)))if(this.raycastAgainstTrueSplatEllipsoid){f.makeScale(n.x,n.y,n.z),p.makeRotationFromQuaternion(s);const I=Math.log10(e.w)*2;if(d.makeScale(I,I,I),g.copy(d).multiply(p).multiply(f),m.copy(g).invert(),x.origin.copy(A.origin).sub(t).applyMatrix4(m),x.direction.copy(A.origin).add(A.direction).sub(t),x.direction.applyMatrix4(m).sub(x.origin).normalize(),x.intersectSphere(u,1,o)){const R=o.clone();R.splatIndex=P,R.origin.applyMatrix4(g).add(t),y.push(R)}}else{let I=n.x+n.y,R=2;if(_.splatMesh.splatRenderMode===br.ThreeD&&(I+=n.z,R=3),I=I/R,A.intersectSphere(t,I,o)){const M=o.clone();M.splatIndex=P,y.push(M)}}}if(v.children&&v.children.length>0)for(let T of v.children)this.castRayAtSplatTreeNode(A,_,T,y);return y}}})());this.ray=new Yf(e,t),this.raycastAgainstTrueSplatEllipsoid=n}}class Qa{static buildVertexShaderBase(e=!1,t=!1,n=0,s=""){let o=`
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
        `}static getUniforms(e=!1,t=!1,n=0,s=1,o=!1){const l={sceneCenter:{type:"v3",value:new U},fadeInComplete:{type:"i",value:0},orthographicMode:{type:"i",value:0},visibleRegionFadeStartRadius:{type:"f",value:0},visibleRegionRadius:{type:"f",value:0},currentTime:{type:"f",value:0},firstRenderTime:{type:"f",value:0},centersColorsTexture:{type:"t",value:null},sphericalHarmonicsTexture:{type:"t",value:null},sphericalHarmonicsTextureR:{type:"t",value:null},sphericalHarmonicsTextureG:{type:"t",value:null},sphericalHarmonicsTextureB:{type:"t",value:null},sphericalHarmonics8BitCompressionRangeMin:{type:"f",value:[]},sphericalHarmonics8BitCompressionRangeMax:{type:"f",value:[]},focal:{type:"v2",value:new qe},orthoZoom:{type:"f",value:1},inverseFocalAdjustment:{type:"f",value:1},viewport:{type:"v2",value:new qe},basisViewport:{type:"v2",value:new qe},debugColor:{type:"v3",value:new bt},centersColorsTextureSize:{type:"v2",value:new qe(1024,1024)},sphericalHarmonicsDegree:{type:"i",value:n},sphericalHarmonicsTextureSize:{type:"v2",value:new qe(1024,1024)},sphericalHarmonics8BitMode:{type:"i",value:0},sphericalHarmonicsMultiTextureMode:{type:"i",value:0},splatScale:{type:"f",value:s},pointCloudModeEnabled:{type:"i",value:o?1:0},sceneIndexesTexture:{type:"t",value:null},sceneIndexesTextureSize:{type:"v2",value:new qe(1024,1024)},sceneCount:{type:"i",value:1}};for(let u=0;u<wt.MaxScenes;u++)l.sphericalHarmonics8BitCompressionRangeMin.value.push(-3/2),l.sphericalHarmonics8BitCompressionRangeMax.value.push(wt.SphericalHarmonics8BitCompressionRange/2);if(t){const u=[];for(let f=0;f<wt.MaxScenes;f++)u.push(1);l.sceneOpacity={type:"f",value:u};const d=[];for(let f=0;f<wt.MaxScenes;f++)d.push(1);l.sceneVisibility={type:"i",value:d}}if(e){const u=[];for(let d=0;d<wt.MaxScenes;d++)u.push(new mt);l.transforms={type:"mat4",value:u}}return l}}class du{static build(e=!1,t=!1,n=!1,s=2048,o=1,l=!1,u=0,d=.3){let p=Qa.buildVertexShaderBase(e,t,u,`
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
        `);p+=du.buildVertexShaderProjection(n,t,s,d);const m=du.buildFragmentShader(),g=Qa.getUniforms(e,t,u,o,l);return g.covariancesTextureSize={type:"v2",value:new qe(1024,1024)},g.covariancesTexture={type:"t",value:null},g.covariancesTextureHalfFloat={type:"t",value:null},g.covariancesAreHalfFloat={type:"i",value:0},new ni({uniforms:g,vertexShader:p,fragmentShader:m,transparent:!0,alphaTest:1,blending:fs,depthTest:!0,depthWrite:!1,side:_i})}static buildVertexShaderProjection(e,t,n,s){let o=`

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
        `,o+=Qa.getVertexShaderFadeIn(),o+="}",o}static buildFragmentShader(){let e=`
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
        `,e}}class fu{static build(e=!1,t=!1,n=1,s=!1,o=0){let u=Qa.buildVertexShaderBase(e,t,o,`
            uniform vec2 scaleRotationsTextureSize;
            uniform highp sampler2D scaleRotationsTexture;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;
        `);u+=fu.buildVertexShaderProjection();const d=fu.buildFragmentShader(),f=Qa.getUniforms(e,t,o,n,s);return f.scaleRotationsTexture={type:"t",value:null},f.scaleRotationsTextureSize={type:"v2",value:new qe(1024,1024)},new ni({uniforms:f,vertexShader:u,fragmentShader:d,transparent:!0,alphaTest:1,blending:fs,depthTest:!0,depthWrite:!1,side:_i})}static buildVertexShaderProjection(){let e=`

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
            `,e+=Qa.getVertexShaderFadeIn(),e+="}",e}static buildFragmentShader(){return`
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
        `}}class ow{static build(e){const t=new qn;t.setIndex([0,1,2,0,2,3]);const n=new Float32Array(12),s=new Ui(n,3);t.setAttribute("position",s),s.setXYZ(0,-1,-1,0),s.setXYZ(1,-1,1,0),s.setXYZ(2,1,1,0),s.setXYZ(3,1,-1,0),s.needsUpdate=!0;const o=new t_().copy(t),l=new Uint32Array(e),u=new NA(l,1,!1);return u.setUsage(lA),o.setAttribute("splatIndex",u),o.instanceCount=0,o}}class lw extends _n{constructor(e,t=new U,n=new tn,s=new U(1,1,1),o=1,l=1,u=!0){super(),this.splatBuffer=e,this.position.copy(t),this.quaternion.copy(n),this.scale.copy(s),this.transform=new mt,this.minimumAlpha=o,this.opacity=l,this.visible=u}copyTransformData(e){this.position.copy(e.position),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.transform.copy(e.transform)}updateTransform(e){e?(this.matrixWorldAutoUpdate&&this.updateWorldMatrix(!0,!1),this.transform.copy(this.matrixWorld)):(this.matrixAutoUpdate&&this.updateMatrix(),this.transform.copy(this.matrix))}}const mu=class mu{constructor(e,t,n,s){this.min=new U().copy(e),this.max=new U().copy(t),this.boundingBox=new sr(this.min,this.max),this.center=new U().copy(this.max).sub(this.min).multiplyScalar(.5).add(this.min),this.depth=n,this.children=[],this.data=null,this.id=s||mu.idGen++}};Fe(mu,"idGen",0);let Kh=mu;class Zo{constructor(e,t){this.maxDepth=e,this.maxCentersPerNode=t,this.sceneDimensions=new U,this.sceneMin=new U,this.sceneMax=new U,this.rootNode=null,this.nodesWithIndexes=[],this.splatMesh=null}static convertWorkerSubTreeNode(e){const t=new U().fromArray(e.min),n=new U().fromArray(e.max),s=new Kh(t,n,e.depth,e.id);if(e.data.indexes){s.data={indexes:[]};for(let o of e.data.indexes)s.data.indexes.push(o)}if(e.children)for(let o of e.children)s.children.push(Zo.convertWorkerSubTreeNode(o));return s}static convertWorkerSubTree(e,t){const n=new Zo(e.maxDepth,e.maxCentersPerNode);n.sceneMin=new U().fromArray(e.sceneMin),n.sceneMax=new U().fromArray(e.sceneMax),n.splatMesh=t,n.rootNode=Zo.convertWorkerSubTreeNode(e.rootNode);const s=(o,l)=>{o.children.length===0&&l(o);for(let u of o.children)s(u,l)};return n.nodesWithIndexes=[],s(n.rootNode,o=>{o.data&&o.data.indexes&&o.data.indexes.length>0&&n.nodesWithIndexes.push(o)}),n}}function cw(a){let e=0;class t{constructor(d,f){this.min=[d[0],d[1],d[2]],this.max=[f[0],f[1],f[2]]}containsPoint(d){return d[0]>=this.min[0]&&d[0]<=this.max[0]&&d[1]>=this.min[1]&&d[1]<=this.max[1]&&d[2]>=this.min[2]&&d[2]<=this.max[2]}}class n{constructor(d,f){this.maxDepth=d,this.maxCentersPerNode=f,this.sceneDimensions=[],this.sceneMin=[],this.sceneMax=[],this.rootNode=null,this.addedIndexes={},this.nodesWithIndexes=[],this.splatMesh=null,this.disposed=!1}}class s{constructor(d,f,p,m){this.min=[d[0],d[1],d[2]],this.max=[f[0],f[1],f[2]],this.center=[(f[0]-d[0])*.5+d[0],(f[1]-d[1])*.5+d[1],(f[2]-d[2])*.5+d[2]],this.depth=p,this.children=[],this.data=null,this.id=m||e++}}processSplatTreeNode=function(u,d,f,p){const m=d.data.indexes.length;if(m<u.maxCentersPerNode||d.depth>u.maxDepth){const T=[];for(let P=0;P<d.data.indexes.length;P++)u.addedIndexes[d.data.indexes[P]]||(T.push(d.data.indexes[P]),u.addedIndexes[d.data.indexes[P]]=!0);d.data.indexes=T,d.data.indexes.sort((P,C)=>P>C?1:-1),u.nodesWithIndexes.push(d);return}const g=[d.max[0]-d.min[0],d.max[1]-d.min[1],d.max[2]-d.min[2]],x=[g[0]*.5,g[1]*.5,g[2]*.5],A=[d.min[0]+x[0],d.min[1]+x[1],d.min[2]+x[2]],_=[new t([A[0]-x[0],A[1],A[2]-x[2]],[A[0],A[1]+x[1],A[2]]),new t([A[0],A[1],A[2]-x[2]],[A[0]+x[0],A[1]+x[1],A[2]]),new t([A[0],A[1],A[2]],[A[0]+x[0],A[1]+x[1],A[2]+x[2]]),new t([A[0]-x[0],A[1],A[2]],[A[0],A[1]+x[1],A[2]+x[2]]),new t([A[0]-x[0],A[1]-x[1],A[2]-x[2]],[A[0],A[1],A[2]]),new t([A[0],A[1]-x[1],A[2]-x[2]],[A[0]+x[0],A[1],A[2]]),new t([A[0],A[1]-x[1],A[2]],[A[0]+x[0],A[1],A[2]+x[2]]),new t([A[0]-x[0],A[1]-x[1],A[2]],[A[0],A[1],A[2]+x[2]])],v=[];for(let T=0;T<_.length;T++)v[T]=[];const y=[0,0,0];for(let T=0;T<m;T++){const P=d.data.indexes[T],C=f[P];y[0]=p[C],y[1]=p[C+1],y[2]=p[C+2];for(let w=0;w<_.length;w++)_[w].containsPoint(y)&&v[w].push(P)}for(let T=0;T<_.length;T++){const P=new s(_[T].min,_[T].max,d.depth+1);P.data={indexes:v[T]},d.children.push(P)}d.data={};for(let T of d.children)processSplatTreeNode(u,T,f,p)};const o=(u,d,f)=>{const p=[0,0,0],m=[0,0,0],g=[],x=Math.floor(u.length/4);for(let _=0;_<x;_++){const v=_*4,y=u[v],T=u[v+1],P=u[v+2],C=Math.round(u[v+3]);(_===0||y<p[0])&&(p[0]=y),(_===0||y>m[0])&&(m[0]=y),(_===0||T<p[1])&&(p[1]=T),(_===0||T>m[1])&&(m[1]=T),(_===0||P<p[2])&&(p[2]=P),(_===0||P>m[2])&&(m[2]=P),g.push(C)}const A=new n(d,f);return A.sceneMin=p,A.sceneMax=m,A.rootNode=new s(A.sceneMin,A.sceneMax,0),A.rootNode.data={indexes:g},A};function l(u,d,f){const p=[];for(let g of u){const x=Math.floor(g.length/4);for(let A=0;A<x;A++){const _=A*4,v=Math.round(g[_+3]);p[v]=_}}const m=[];for(let g of u){const x=o(g,d,f);m.push(x),processSplatTreeNode(x,x.rootNode,p,g)}a.postMessage({subTrees:m})}a.onmessage=u=>{u.data.process&&l(u.data.process.centers,u.data.process.maxDepth,u.data.process.maxCentersPerNode)}}function uw(a,e,t,n,s){a.postMessage({process:{centers:e,maxDepth:n,maxCentersPerNode:s}},t)}function dw(){return new Worker(URL.createObjectURL(new Blob(["(",cw.toString(),")(self)"],{type:"application/javascript"})))}class fw{constructor(e,t){Fe(this,"processSplatMesh",function(e,t=()=>!0,n,s){this.splatTreeWorker||(this.splatTreeWorker=dw()),this.splatMesh=e,this.subTrees=[];const o=new U,l=(u,d)=>{const f=new Float32Array(d*4);let p=0;for(let m=0;m<d;m++){const g=m+u;if(t(g)){e.getSplatCenter(g,o);const x=p*4;f[x]=o.x,f[x+1]=o.y,f[x+2]=o.z,f[x+3]=g,p++}}return f};return new Promise(u=>{const d=()=>this.disposed?(this.diposeSplatTreeWorker(),u(),!0):!1;n&&n(!1),Mi(()=>{if(d())return;const f=[];if(e.dynamicMode){let p=0;for(let m=0;m<e.scenes.length;m++){const x=e.getScene(m).splatBuffer.getSplatCount(),A=l(p,x);f.push(A),p+=x}}else{const p=l(0,e.getSplatCount());f.push(p)}this.splatTreeWorker.onmessage=p=>{d()||p.data.subTrees&&(s&&s(!1),Mi(()=>{if(!d()){for(let m of p.data.subTrees){const g=Zo.convertWorkerSubTree(m,e);this.subTrees.push(g)}this.diposeSplatTreeWorker(),s&&s(!0),Mi(()=>{u()})}}))},Mi(()=>{if(d())return;n&&n(!0);const p=f.map(m=>m.buffer);uw(this.splatTreeWorker,f,p,this.maxDepth,this.maxCentersPerNode)})})})});this.maxDepth=e,this.maxCentersPerNode=t,this.subTrees=[],this.splatMesh=null}dispose(){this.diposeSplatTreeWorker(),this.disposed=!0}diposeSplatTreeWorker(){this.splatTreeWorker&&this.splatTreeWorker.terminate(),this.splatTreeWorker=null}countLeaves(){let e=0;return this.visitLeaves(()=>{e++}),e}visitLeaves(e){const t=(n,s)=>{n.children.length===0&&s(n);for(let o of n.children)t(o,s)};for(let n of this.subTrees)t(n.rootNode,e)}}function hw(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=a.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function pw(a,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(R){if(R==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext";let u=t.precision!==void 0?t.precision:"highp";const d=o(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const f=l||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,m=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),g=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=a.getParameter(a.MAX_TEXTURE_SIZE),A=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),_=a.getParameter(a.MAX_VERTEX_ATTRIBS),v=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),y=a.getParameter(a.MAX_VARYING_VECTORS),T=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,C=l||e.has("OES_texture_float"),w=P&&C,I=l?a.getParameter(a.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:f,getMaxAnisotropy:s,getMaxPrecision:o,precision:u,logarithmicDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:A,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:T,vertexTextures:P,floatFragmentTextures:C,floatVertexTextures:w,maxSamples:I}}const qa={Default:0,Gradual:1,Instant:2},Ya={None:0,Info:3},Lx=new qn,mw=new dr,Yc=6,gw=4,xw=4,vw=4,Sw=6,yw=8,jf=4,Kf=4,Bx=1,Aw=.012,_w=.003,Nx=1,Ux=16777216;class Nn extends en{constructor(t=br.ThreeD,n=!1,s=!1,o=!1,l=1,u=!0,d=!1,f=!1,p=1024,m=Ya.None,g=0,x=1,A=.3){super(Lx,mw);Fe(this,"buildSplatTree",function(t=[],n,s){return new Promise(o=>{this.disposeSplatTree(),this.baseSplatTree=new fw(8,1e3);const l=performance.now(),u=new nn;this.baseSplatTree.processSplatMesh(this,d=>{this.getSplatColor(d,u);const f=this.getSceneIndexForSplat(d),p=t[f]||1;return u.w>=p},n,s).then(()=>{const d=performance.now()-l;if(this.logLevel>=Ya.Info&&console.log("SplatTree build: "+d+" ms"),this.disposed)o();else{this.splatTree=this.baseSplatTree,this.baseSplatTree=null;let f=0,p=0,m=0;this.splatTree.visitLeaves(g=>{const x=g.data.indexes.length;x>0&&(p+=x,m++,f++)}),this.logLevel>=Ya.Info&&(console.log(`SplatTree leaves: ${this.splatTree.countLeaves()}`),console.log(`SplatTree leaves with splats:${f}`),p=p/m,console.log(`Avg splat count per node: ${p}`),console.log(`Total splat count: ${this.getSplatCount()}`)),o()}})})});Fe(this,"updateUniforms",(function(){const t=new qe;return function(n,s,o,l,u,d){if(this.getSplatCount()>0){if(t.set(n.x*this.devicePixelRatio,n.y*this.devicePixelRatio),this.material.uniforms.viewport.value.copy(t),this.material.uniforms.basisViewport.value.set(1/t.x,1/t.y),this.material.uniforms.focal.value.set(s,o),this.material.uniforms.orthographicMode.value=l?1:0,this.material.uniforms.orthoZoom.value=u,this.material.uniforms.inverseFocalAdjustment.value=d,this.dynamicMode)for(let p=0;p<this.scenes.length;p++)this.material.uniforms.transforms.value[p].copy(this.getScene(p).transform);if(this.enableOptionalEffects)for(let p=0;p<this.scenes.length;p++)this.material.uniforms.sceneOpacity.value[p]=on(this.getScene(p).opacity,0,1),this.material.uniforms.sceneVisibility.value[p]=this.getScene(p).visible?1:0,this.material.uniformsNeedUpdate=!0;this.material.uniformsNeedUpdate=!0}}})());Fe(this,"setupDistancesComputationTransformFeedback",(function(){let t;return function(){const n=this.getMaxSplatCount();if(!this.renderer)return;const s=this.lastRenderer!==this.renderer,o=t!==n;if(!s&&!o)return;s?this.disposeDistancesComputationGPUResources():o&&this.disposeDistancesComputationGPUBufferResources();const l=this.renderer.getContext(),u=(x,A,_)=>{const v=x.createShader(A);if(!v)return console.error("Fatal error: gl could not create a shader object."),null;if(x.shaderSource(v,_),x.compileShader(v),!x.getShaderParameter(v,x.COMPILE_STATUS)){let T="unknown";A===x.VERTEX_SHADER?T="vertex shader":A===x.FRAGMENT_SHADER&&(T="fragement shader");const P=x.getShaderInfoLog(v);return console.error("Failed to compile "+T+" with these errors:"+P),x.deleteShader(v),null}return v};let d;this.integerBasedDistancesComputation?(d=`#version 300 es
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
            `,p=l.getParameter(l.VERTEX_ARRAY_BINDING),m=l.getParameter(l.CURRENT_PROGRAM),g=m?l.getProgramParameter(m,l.DELETE_STATUS):!1;if(s&&(this.distancesTransformFeedback.vao=l.createVertexArray()),l.bindVertexArray(this.distancesTransformFeedback.vao),s){const x=l.createProgram(),A=u(l,l.VERTEX_SHADER,d),_=u(l,l.FRAGMENT_SHADER,f);if(!A||!_)throw new Error("Could not compile shaders for distances computation on GPU.");if(l.attachShader(x,A),l.attachShader(x,_),l.transformFeedbackVaryings(x,["distance"],l.SEPARATE_ATTRIBS),l.linkProgram(x),!l.getProgramParameter(x,l.LINK_STATUS)){const y=l.getProgramInfoLog(x);throw console.error("Fatal error: Failed to link program: "+y),l.deleteProgram(x),l.deleteShader(_),l.deleteShader(A),new Error("Could not link shaders for distances computation on GPU.")}this.distancesTransformFeedback.program=x,this.distancesTransformFeedback.vertexShader=A,this.distancesTransformFeedback.vertexShader=_}if(l.useProgram(this.distancesTransformFeedback.program),this.distancesTransformFeedback.centersLoc=l.getAttribLocation(this.distancesTransformFeedback.program,"center"),this.dynamicMode){this.distancesTransformFeedback.sceneIndexesLoc=l.getAttribLocation(this.distancesTransformFeedback.program,"sceneIndex");for(let x=0;x<this.scenes.length;x++)this.distancesTransformFeedback.transformsLocs[x]=l.getUniformLocation(this.distancesTransformFeedback.program,`transforms[${x}]`)}else this.distancesTransformFeedback.modelViewProjLoc=l.getUniformLocation(this.distancesTransformFeedback.program,"modelViewProj");(s||o)&&(this.distancesTransformFeedback.centersBuffer=l.createBuffer(),l.bindBuffer(l.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),l.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?l.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,l.INT,0,0):l.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,l.FLOAT,!1,0,0),this.dynamicMode&&(this.distancesTransformFeedback.sceneIndexesBuffer=l.createBuffer(),l.bindBuffer(l.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),l.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),l.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,l.UNSIGNED_INT,0,0))),(s||o)&&(this.distancesTransformFeedback.outDistancesBuffer=l.createBuffer()),l.bindBuffer(l.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),l.bufferData(l.ARRAY_BUFFER,n*4,l.STATIC_READ),s&&(this.distancesTransformFeedback.id=l.createTransformFeedback()),l.bindTransformFeedback(l.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),l.bindBufferBase(l.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),m&&g!==!0&&l.useProgram(m),p&&l.bindVertexArray(p),this.lastRenderer=this.renderer,t=n}})());Fe(this,"fillTransformsArray",(function(){const t=[];return function(n){t.length!==n.length&&(t.length=n.length);for(let s=0;s<this.scenes.length;s++){const l=this.getScene(s).transform.elements;for(let u=0;u<16;u++)t[s*16+u]=l[u]}n.set(t)}})());Fe(this,"computeDistancesOnGPU",(function(){const t=new mt;return function(n,s){if(!this.renderer)return;const o=this.renderer.getContext(),l=o.getParameter(o.VERTEX_ARRAY_BINDING),u=o.getParameter(o.CURRENT_PROGRAM),d=u?o.getProgramParameter(u,o.DELETE_STATUS):!1;if(o.bindVertexArray(this.distancesTransformFeedback.vao),o.useProgram(this.distancesTransformFeedback.program),o.enable(o.RASTERIZER_DISCARD),this.dynamicMode)for(let m=0;m<this.scenes.length;m++)if(t.copy(this.getScene(m).transform),t.premultiply(n),this.integerBasedDistancesComputation){const g=Nn.getIntegerMatrixArray(t),x=[g[2],g[6],g[10],g[14]];o.uniform4i(this.distancesTransformFeedback.transformsLocs[m],x[0],x[1],x[2],x[3])}else o.uniformMatrix4fv(this.distancesTransformFeedback.transformsLocs[m],!1,t.elements);else if(this.integerBasedDistancesComputation){const m=Nn.getIntegerMatrixArray(n),g=[m[2],m[6],m[10]];o.uniform3i(this.distancesTransformFeedback.modelViewProjLoc,g[0],g[1],g[2])}else{const m=[n.elements[2],n.elements[6],n.elements[10]];o.uniform3f(this.distancesTransformFeedback.modelViewProjLoc,m[0],m[1],m[2])}o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),o.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?o.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,o.INT,0,0):o.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,o.FLOAT,!1,0,0),this.dynamicMode&&(o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),o.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),o.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,o.UNSIGNED_INT,0,0)),o.bindTransformFeedback(o.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),o.bindBufferBase(o.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),o.beginTransformFeedback(o.POINTS),o.drawArrays(o.POINTS,0,this.getSplatCount()),o.endTransformFeedback(),o.bindBufferBase(o.TRANSFORM_FEEDBACK_BUFFER,0,null),o.bindTransformFeedback(o.TRANSFORM_FEEDBACK,null),o.disable(o.RASTERIZER_DISCARD);const f=o.fenceSync(o.SYNC_GPU_COMMANDS_COMPLETE,0);o.flush();const p=new Promise(m=>{const g=()=>{if(this.disposed)m();else switch(o.clientWaitSync(f,0,0)){case o.TIMEOUT_EXPIRED:return this.computeDistancesOnGPUSyncTimeout=setTimeout(g),this.computeDistancesOnGPUSyncTimeout;case o.WAIT_FAILED:throw new Error("should never get here");default:this.computeDistancesOnGPUSyncTimeout=null,o.deleteSync(f);const v=o.getParameter(o.VERTEX_ARRAY_BINDING);o.bindVertexArray(this.distancesTransformFeedback.vao),o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),o.getBufferSubData(o.ARRAY_BUFFER,0,s),o.bindBuffer(o.ARRAY_BUFFER,null),v&&o.bindVertexArray(v),m()}};this.computeDistancesOnGPUSyncTimeout=setTimeout(g)});return u&&d!==!0&&o.useProgram(u),l&&o.bindVertexArray(l),p}})());Fe(this,"getSplatCenter",(function(){const t={};return function(n,s,o){this.getLocalSplatParameters(n,t,o),t.splatBuffer.getSplatCenter(t.localIndex,s,t.sceneTransform)}})());Fe(this,"getSplatScaleAndRotation",(function(){const t={},n=new U;return function(s,o,l,u){this.getLocalSplatParameters(s,t,u),n.x=void 0,n.y=void 0,n.z=void 0,this.splatRenderMode===br.TwoD&&(n.z=0),t.splatBuffer.getSplatScaleAndRotation(t.localIndex,o,l,t.sceneTransform,n)}})());Fe(this,"getSplatColor",(function(){const t={};return function(n,s){this.getLocalSplatParameters(n,t),t.splatBuffer.getSplatColor(t.localIndex,s)}})());this.renderer=void 0,this.splatRenderMode=t,this.dynamicMode=n,this.enableOptionalEffects=s,this.halfPrecisionCovariancesOnGPU=o,this.devicePixelRatio=l,this.enableDistancesComputationOnGPU=u,this.integerBasedDistancesComputation=d,this.antialiased=f,this.kernel2DSize=A,this.maxScreenSpaceSplatSize=p,this.logLevel=m,this.sphericalHarmonicsDegree=g,this.minSphericalHarmonicsDegree=0,this.sceneFadeInRateMultiplier=x,this.scenes=[],this.splatTree=null,this.baseSplatTree=null,this.splatDataTextures={},this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new sr,this.calculatedSceneCenter=new U,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!1,this.lastRenderer=null,this.visible=!1}static buildScenes(t,n,s){const o=[];o.length=n.length;for(let l=0;l<n.length;l++){const u=n[l],d=s[l]||{};let f=d.position||[0,0,0],p=d.rotation||[0,0,0,1],m=d.scale||[1,1,1];const g=new U().fromArray(f),x=new tn().fromArray(p),A=new U().fromArray(m),_=Nn.createScene(u,g,x,A,d.splatAlphaRemovalThreshold||1,d.opacity,d.visible);t.add(_),o[l]=_}return o}static createScene(t,n,s,o,l,u=1,d=!0){return new lw(t,n,s,o,l,u,d)}static buildSplatIndexMaps(t){const n=[],s=[];let o=0;for(let l=0;l<t.length;l++){const d=t[l].getMaxSplatCount();for(let f=0;f<d;f++)n[o]=f,s[o]=l,o++}return{localSplatIndexMap:n,sceneIndexMap:s}}build(t,n,s=!0,o=!1,l,u,d=!0){this.sceneOptions=n,this.finalBuild=o;const f=Nn.getTotalMaxSplatCountForSplatBuffers(t),p=Nn.buildScenes(this,t,n);if(s)for(let v=0;v<this.scenes.length&&v<p.length;v++){const y=p[v],T=this.getScene(v);y.copyTransformData(T)}this.scenes=p;let m=3;for(let v of t){const y=v.getMinSphericalHarmonicsDegree();y<m&&(m=y)}this.minSphericalHarmonicsDegree=Math.min(m,this.sphericalHarmonicsDegree);let g=!1;if(t.length!==this.lastBuildScenes.length)g=!0;else for(let v=0;v<t.length;v++)if(t[v]!==this.lastBuildScenes[v].splatBuffer){g=!0;break}let x=!0;if((this.scenes.length!==1||this.lastBuildSceneCount!==this.scenes.length||this.lastBuildMaxSplatCount!==f||g)&&(x=!1),!x){this.boundingBox=new sr,d||(this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.firstRenderTime=-1),this.lastBuildScenes=[],this.lastBuildSplatCount=0,this.lastBuildMaxSplatCount=0,this.disposeMeshData(),this.geometry=ow.build(f),this.splatRenderMode===br.ThreeD?this.material=du.build(this.dynamicMode,this.enableOptionalEffects,this.antialiased,this.maxScreenSpaceSplatSize,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree,this.kernel2DSize):this.material=fu.build(this.dynamicMode,this.enableOptionalEffects,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree);const v=Nn.buildSplatIndexMaps(t);this.globalSplatIndexToLocalSplatIndexMap=v.localSplatIndexMap,this.globalSplatIndexToSceneIndexMap=v.sceneIndexMap}const A=this.getSplatCount(!0);this.enableDistancesComputationOnGPU&&this.setupDistancesComputationTransformFeedback();const _=this.refreshGPUDataFromSplatBuffers(x);for(let v=0;v<this.scenes.length;v++)this.lastBuildScenes[v]=this.scenes[v];return this.lastBuildSplatCount=A,this.lastBuildMaxSplatCount=this.getMaxSplatCount(),this.lastBuildSceneCount=this.scenes.length,o&&this.scenes.length>0&&this.buildSplatTree(n.map(v=>v.splatAlphaRemovalThreshold||1),l,u).then(()=>{this.onSplatTreeReadyCallback&&this.onSplatTreeReadyCallback(this.splatTree),this.onSplatTreeReadyCallback=null}),this.visible=this.scenes.length>0,_}freeIntermediateSplatData(){const t=n=>{delete n.source.data,delete n.image,n.onUpdate=null};delete this.splatDataTextures.baseData.covariances,delete this.splatDataTextures.baseData.centers,delete this.splatDataTextures.baseData.colors,delete this.splatDataTextures.baseData.sphericalHarmonics,delete this.splatDataTextures.centerColors.data,delete this.splatDataTextures.covariances.data,this.splatDataTextures.sphericalHarmonics&&delete this.splatDataTextures.sphericalHarmonics.data,this.splatDataTextures.sceneIndexes&&delete this.splatDataTextures.sceneIndexes.data,this.splatDataTextures.centerColors.texture.needsUpdate=!0,this.splatDataTextures.centerColors.texture.onUpdate=()=>{t(this.splatDataTextures.centerColors.texture)},this.splatDataTextures.covariances.texture.needsUpdate=!0,this.splatDataTextures.covariances.texture.onUpdate=()=>{t(this.splatDataTextures.covariances.texture)},this.splatDataTextures.sphericalHarmonics&&(this.splatDataTextures.sphericalHarmonics.texture?(this.splatDataTextures.sphericalHarmonics.texture.needsUpdate=!0,this.splatDataTextures.sphericalHarmonics.texture.onUpdate=()=>{t(this.splatDataTextures.sphericalHarmonics.texture)}):this.splatDataTextures.sphericalHarmonics.textures.forEach(n=>{n.needsUpdate=!0,n.onUpdate=()=>{t(n)}})),this.splatDataTextures.sceneIndexes&&(this.splatDataTextures.sceneIndexes.texture.needsUpdate=!0,this.splatDataTextures.sceneIndexes.texture.onUpdate=()=>{t(this.splatDataTextures.sceneIndexes.texture)})}dispose(){this.disposeMeshData(),this.disposeTextures(),this.disposeSplatTree(),this.enableDistancesComputationOnGPU&&(this.computeDistancesOnGPUSyncTimeout&&(clearTimeout(this.computeDistancesOnGPUSyncTimeout),this.computeDistancesOnGPUSyncTimeout=null),this.disposeDistancesComputationGPUResources()),this.scenes=[],this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.renderer=null,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new sr,this.calculatedSceneCenter=new U,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!0,this.lastRenderer=null,this.visible=!1}disposeMeshData(){this.geometry&&this.geometry!==Lx&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null)}disposeTextures(){for(let t in this.splatDataTextures)if(this.splatDataTextures.hasOwnProperty(t)){const n=this.splatDataTextures[t];n.texture&&(n.texture.dispose(),n.texture=null)}this.splatDataTextures=null}disposeSplatTree(){this.splatTree&&(this.splatTree.dispose(),this.splatTree=null),this.baseSplatTree&&(this.baseSplatTree.dispose(),this.baseSplatTree=null)}getSplatTree(){return this.splatTree}onSplatTreeReady(t){this.onSplatTreeReadyCallback=t}getDataForDistancesComputation(t,n){const s=this.integerBasedDistancesComputation?this.getIntegerCenters(t,n,!0):this.getFloatCenters(t,n,!0),o=this.getSceneIndexes(t,n);return{centers:s,sceneIndexes:o}}refreshGPUDataFromSplatBuffers(t){const n=this.getSplatCount(!0);this.refreshDataTexturesFromSplatBuffers(t);const s=t?this.lastBuildSplatCount:0,{centers:o,sceneIndexes:l}=this.getDataForDistancesComputation(s,n-1);return this.enableDistancesComputationOnGPU&&this.refreshGPUBuffersForDistancesComputation(o,l,t),{from:s,to:n-1,count:n-s,centers:o,sceneIndexes:l}}refreshGPUBuffersForDistancesComputation(t,n,s=!1){const o=s?this.lastBuildSplatCount:0;this.updateGPUCentersBufferForDistancesComputation(s,t,o),this.updateGPUTransformIndexesBufferForDistancesComputation(s,n,o)}refreshDataTexturesFromSplatBuffers(t){const n=this.getSplatCount(!0),s=this.lastBuildSplatCount,o=n-1;t?this.updateBaseDataFromSplatBuffers(s,o):(this.setupDataTextures(),this.updateBaseDataFromSplatBuffers()),this.updateDataTexturesFromBaseData(s,o),this.updateVisibleRegion(t)}setupDataTextures(){const t=this.getMaxSplatCount(),n=this.getSplatCount(!0);this.disposeTextures();const s=(M,F)=>{const B=new qe(4096,1024);for(;B.x*B.y*M<t*F;)B.y*=2;return B},o=M=>M>=1?Sw:xw,l=M=>{const F=o(M),B=s(F,6);return{elementsPerTexelStored:F,texSize:B}};let u=this.getTargetCovarianceCompressionLevel();const d=0,f=this.getTargetSphericalHarmonicsCompressionLevel();let p,m,g;if(this.splatRenderMode===br.ThreeD){const M=l(u);M.texSize.x*M.texSize.y>Ux&&u===0&&(u=1),p=new Float32Array(t*Yc)}else m=new Float32Array(t*3),g=new Float32Array(t*4);const x=new Float32Array(t*3),A=new Uint8Array(t*4);let _=Float32Array;f===1?_=Uint16Array:f===2&&(_=Uint8Array);const v=Xa(this.minSphericalHarmonicsDegree),y=this.minSphericalHarmonicsDegree?new _(t*v):void 0,T=s(Kf,4),P=new Uint32Array(T.x*T.y*Kf);Nn.updateCenterColorsPaddedData(0,n-1,x,A,P);const C=new wr(P,T.x,T.y,Va,ei);if(C.internalFormat="RGBA32UI",C.needsUpdate=!0,this.material.uniforms.centersColorsTexture.value=C,this.material.uniforms.centersColorsTextureSize.value.copy(T),this.material.uniformsNeedUpdate=!0,this.splatDataTextures={baseData:{covariances:p,scales:m,rotations:g,centers:x,colors:A,sphericalHarmonics:y},centerColors:{data:P,texture:C,size:T}},this.splatRenderMode===br.ThreeD){const M=l(u),F=M.elementsPerTexelStored,B=M.texSize;let N=u>=1?Uint32Array:Float32Array;const H=u>=1?yw:vw,q=new N(B.x*B.y*H);u===0?q.set(p):Nn.updatePaddedCompressedCovariancesTextureData(p,q,0,0,p.length);let Y;if(u>=1)Y=new wr(q,B.x,B.y,Va,ei),Y.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=Y;else{Y=new wr(q,B.x,B.y,ti,Ni),this.material.uniforms.covariancesTexture.value=Y;const G=new wr(new Uint32Array(32),2,2,Va,ei);G.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=G,G.needsUpdate=!0}Y.needsUpdate=!0,this.material.uniforms.covariancesAreHalfFloat.value=u>=1?1:0,this.material.uniforms.covariancesTextureSize.value.copy(B),this.splatDataTextures.covariances={data:q,texture:Y,size:B,compressionLevel:u,elementsPerTexelStored:F,elementsPerTexelAllocated:H}}else{const F=s(jf,6);let B=Float32Array,N=Ni;const H=new B(F.x*F.y*jf);Nn.updateScaleRotationsPaddedData(0,n-1,m,g,H);const q=new wr(H,F.x,F.y,ti,N);q.needsUpdate=!0,this.material.uniforms.scaleRotationsTexture.value=q,this.material.uniforms.scaleRotationsTextureSize.value.copy(F),this.splatDataTextures.scaleRotations={data:H,texture:q,size:F,compressionLevel:d}}if(y){const M=f===2?Ei:cr;let F=v;F%2!==0&&F++;const B=4,N=ti;let H=s(B,F);if(H.x*H.y<=Ux){const q=H.x*H.y*B,Y=new _(q);for(let K=0;K<n;K++){const j=v*K,k=F*K;for(let Q=0;Q<v;Q++)Y[k+Q]=y[j+Q]}const G=new wr(Y,H.x,H.y,N,M);G.needsUpdate=!0,this.material.uniforms.sphericalHarmonicsTexture.value=G,this.splatDataTextures.sphericalHarmonics={componentCount:v,paddedComponentCount:F,data:Y,textureCount:1,texture:G,size:H,compressionLevel:f,elementsPerTexel:B}}else{const q=v/3;F=q,F%2!==0&&F++,H=s(B,F);const Y=H.x*H.y*B,G=[this.material.uniforms.sphericalHarmonicsTextureR,this.material.uniforms.sphericalHarmonicsTextureG,this.material.uniforms.sphericalHarmonicsTextureB],K=[],j=[];for(let k=0;k<3;k++){const Q=new _(Y);K.push(Q);for(let O=0;O<n;O++){const ee=v*O,ye=F*O;if(q>=3){for(let Ce=0;Ce<3;Ce++)Q[ye+Ce]=y[ee+k*3+Ce];if(q>=8)for(let Ce=0;Ce<5;Ce++)Q[ye+3+Ce]=y[ee+9+k*5+Ce]}}const J=new wr(Q,H.x,H.y,N,M);j.push(J),J.needsUpdate=!0,G[k].value=J}this.material.uniforms.sphericalHarmonicsMultiTextureMode.value=1,this.splatDataTextures.sphericalHarmonics={componentCount:v,componentCountPerChannel:q,paddedComponentCount:F,data:K,textureCount:3,textures:j,size:H,compressionLevel:f,elementsPerTexel:B}}this.material.uniforms.sphericalHarmonicsTextureSize.value.copy(H),this.material.uniforms.sphericalHarmonics8BitMode.value=f===2?1:0;for(let q=0;q<this.scenes.length;q++){const Y=this.scenes[q].splatBuffer;this.material.uniforms.sphericalHarmonics8BitCompressionRangeMin.value[q]=Y.minSphericalHarmonicsCoeff,this.material.uniforms.sphericalHarmonics8BitCompressionRangeMax.value[q]=Y.maxSphericalHarmonicsCoeff}this.material.uniformsNeedUpdate=!0}const w=s(Bx,4),I=new Uint32Array(w.x*w.y*Bx);for(let M=0;M<n;M++)I[M]=this.globalSplatIndexToSceneIndexMap[M];const R=new wr(I,w.x,w.y,xu,ei);R.internalFormat="R32UI",R.needsUpdate=!0,this.material.uniforms.sceneIndexesTexture.value=R,this.material.uniforms.sceneIndexesTextureSize.value.copy(w),this.material.uniformsNeedUpdate=!0,this.splatDataTextures.sceneIndexes={data:I,texture:R,size:w},this.material.uniforms.sceneCount.value=this.scenes.length}updateBaseDataFromSplatBuffers(t,n){const s=this.splatDataTextures.covariances,o=s?s.compressionLevel:void 0,l=this.splatDataTextures.scaleRotations,u=l?l.compressionLevel:void 0,d=this.splatDataTextures.sphericalHarmonics,f=d?d.compressionLevel:0;this.fillSplatDataArrays(this.splatDataTextures.baseData.covariances,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,this.splatDataTextures.baseData.sphericalHarmonics,void 0,o,u,f,t,n,t)}updateDataTexturesFromBaseData(t,n){const s=this.splatDataTextures.covariances,o=s?s.compressionLevel:void 0,l=this.splatDataTextures.scaleRotations,u=l?l.compressionLevel:void 0,d=this.splatDataTextures.sphericalHarmonics,f=d?d.compressionLevel:0,p=this.splatDataTextures.centerColors,m=p.data,g=p.texture;Nn.updateCenterColorsPaddedData(t,n,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,m);const x=this.renderer?this.renderer.properties.get(g):null;if(!x||!x.__webglTexture?g.needsUpdate=!0:this.updateDataTexture(m,p.texture,p.size,x,Kf,gw,4,t,n),s){const P=s.texture,C=t*Yc,w=n*Yc;if(o===0)for(let R=C;R<=w;R++){const M=this.splatDataTextures.baseData.covariances[R];s.data[R]=M}else Nn.updatePaddedCompressedCovariancesTextureData(this.splatDataTextures.baseData.covariances,s.data,t*s.elementsPerTexelAllocated,C,w);const I=this.renderer?this.renderer.properties.get(P):null;!I||!I.__webglTexture?P.needsUpdate=!0:o===0?this.updateDataTexture(s.data,s.texture,s.size,I,s.elementsPerTexelStored,Yc,4,t,n):this.updateDataTexture(s.data,s.texture,s.size,I,s.elementsPerTexelAllocated,s.elementsPerTexelAllocated,2,t,n)}if(l){const P=l.data,C=l.texture,w=6,I=u===0?4:2;Nn.updateScaleRotationsPaddedData(t,n,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,P);const R=this.renderer?this.renderer.properties.get(C):null;!R||!R.__webglTexture?C.needsUpdate=!0:this.updateDataTexture(P,l.texture,l.size,R,jf,w,I,t,n)}const A=this.splatDataTextures.baseData.sphericalHarmonics;if(A){let P=4;f===1?P=2:f===2&&(P=1);const C=(R,M,F,B,N)=>{const H=this.renderer?this.renderer.properties.get(R):null;!H||!H.__webglTexture?R.needsUpdate=!0:this.updateDataTexture(B,R,M,H,F,N,P,t,n)},w=d.componentCount,I=d.paddedComponentCount;if(d.textureCount===1){const R=d.data;for(let M=t;M<=n;M++){const F=w*M,B=I*M;for(let N=0;N<w;N++)R[B+N]=A[F+N]}C(d.texture,d.size,d.elementsPerTexel,R,I)}else{const R=d.componentCountPerChannel;for(let M=0;M<3;M++){const F=d.data[M];for(let B=t;B<=n;B++){const N=w*B,H=I*B;if(R>=3){for(let q=0;q<3;q++)F[H+q]=A[N+M*3+q];if(R>=8)for(let q=0;q<5;q++)F[H+3+q]=A[N+9+M*5+q]}}C(d.textures[M],d.size,d.elementsPerTexel,F,I)}}}const _=this.splatDataTextures.sceneIndexes,v=_.data;for(let P=this.lastBuildSplatCount;P<=n;P++)v[P]=this.globalSplatIndexToSceneIndexMap[P];const y=_.texture,T=this.renderer?this.renderer.properties.get(y):null;!T||!T.__webglTexture?y.needsUpdate=!0:this.updateDataTexture(v,_.texture,_.size,T,1,1,1,this.lastBuildSplatCount,n)}getTargetCovarianceCompressionLevel(){return this.halfPrecisionCovariancesOnGPU?1:0}getTargetSphericalHarmonicsCompressionLevel(){return Math.max(1,this.getMaximumSplatBufferCompressionLevel())}getMaximumSplatBufferCompressionLevel(){let t;for(let n=0;n<this.scenes.length;n++){const o=this.getScene(n).splatBuffer;(n===0||o.compressionLevel>t)&&(t=o.compressionLevel)}return t}getMinimumSplatBufferCompressionLevel(){let t;for(let n=0;n<this.scenes.length;n++){const o=this.getScene(n).splatBuffer;(n===0||o.compressionLevel<t)&&(t=o.compressionLevel)}return t}static computeTextureUpdateRegion(t,n,s,o,l){const u=l/o,d=t*u,f=Math.floor(d/s),p=f*s*o,m=n*u,g=Math.floor(m/s),x=g*s*o+s*o;return{dataStart:p,dataEnd:x,startRow:f,endRow:g}}updateDataTexture(t,n,s,o,l,u,d,f,p){const m=this.renderer.getContext(),g=Nn.computeTextureUpdateRegion(f,p,s.x,l,u),x=g.dataEnd-g.dataStart,A=new t.constructor(t.buffer,g.dataStart*d,x),_=g.endRow-g.startRow+1,v=this.webGLUtils.convert(n.type),y=this.webGLUtils.convert(n.format,n.colorSpace),T=m.getParameter(m.TEXTURE_BINDING_2D);m.bindTexture(m.TEXTURE_2D,o.__webglTexture),m.texSubImage2D(m.TEXTURE_2D,0,0,g.startRow,s.x,_,y,v,A),m.bindTexture(m.TEXTURE_2D,T)}static updatePaddedCompressedCovariancesTextureData(t,n,s,o,l){let u=new DataView(n.buffer),d=s,f=0;for(let p=o;p<=l;p+=2)u.setUint16(d*2,t[p],!0),u.setUint16(d*2+2,t[p+1],!0),d+=2,f++,f>=3&&(d+=2,f=0)}static updateCenterColorsPaddedData(t,n,s,o,l){for(let u=t;u<=n;u++){const d=u*4,f=u*3,p=u*4;l[p]=JT(o,d),l[p+1]=Vf(s[f]),l[p+2]=Vf(s[f+1]),l[p+3]=Vf(s[f+2])}}static updateScaleRotationsPaddedData(t,n,s,o,l){for(let d=t;d<=n;d++){const f=d*3,p=d*4,m=d*6;l[m]=s[f],l[m+1]=s[f+1],l[m+2]=s[f+2],l[m+3]=o[p],l[m+4]=o[p+1],l[m+5]=o[p+2]}}updateVisibleRegion(t){const n=this.getSplatCount(!0),s=new U;if(!t){const l=new U;this.scenes.forEach(u=>{l.add(u.splatBuffer.sceneCenter)}),l.multiplyScalar(1/this.scenes.length),this.calculatedSceneCenter.copy(l),this.material.uniforms.sceneCenter.value.copy(this.calculatedSceneCenter),this.material.uniformsNeedUpdate=!0}const o=t?this.lastBuildSplatCount:0;for(let l=o;l<n;l++){this.getSplatCenter(l,s,!0);const u=s.sub(this.calculatedSceneCenter).length();u>this.maxSplatDistanceFromSceneCenter&&(this.maxSplatDistanceFromSceneCenter=u)}this.maxSplatDistanceFromSceneCenter-this.visibleRegionBufferRadius>Nx&&(this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter,this.visibleRegionRadius=Math.max(this.visibleRegionBufferRadius-Nx,0)),this.finalBuild&&(this.visibleRegionRadius=this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter),this.updateVisibleRegionFadeDistance()}updateVisibleRegionFadeDistance(t=qa.Default){const n=Aw*this.sceneFadeInRateMultiplier,s=_w*this.sceneFadeInRateMultiplier,o=this.finalBuild?n:s,l=t===qa.Default?o:s;this.visibleRegionFadeStartRadius=(this.visibleRegionRadius-this.visibleRegionFadeStartRadius)*l+this.visibleRegionFadeStartRadius;const d=(this.visibleRegionBufferRadius>0?this.visibleRegionFadeStartRadius/this.visibleRegionBufferRadius:0)>.99,f=d||t===qa.Instant?1:0;this.material.uniforms.visibleRegionFadeStartRadius.value=this.visibleRegionFadeStartRadius,this.material.uniforms.visibleRegionRadius.value=this.visibleRegionRadius,this.material.uniforms.firstRenderTime.value=this.firstRenderTime,this.material.uniforms.currentTime.value=performance.now(),this.material.uniforms.fadeInComplete.value=f,this.material.uniformsNeedUpdate=!0,this.visibleRegionChanging=!d}updateRenderIndexes(t,n){const s=this.geometry;s.attributes.splatIndex.set(t),s.attributes.splatIndex.needsUpdate=!0,n>0&&this.firstRenderTime===-1&&(this.firstRenderTime=performance.now()),s.instanceCount=n,s.setDrawRange(0,n)}updateTransforms(){for(let t=0;t<this.scenes.length;t++)this.getScene(t).updateTransform(this.dynamicMode)}setSplatScale(t=1){this.splatScale=t,this.material.uniforms.splatScale.value=t,this.material.uniformsNeedUpdate=!0}getSplatScale(){return this.splatScale}setPointCloudModeEnabled(t){this.pointCloudModeEnabled=t,this.material.uniforms.pointCloudModeEnabled.value=t?1:0,this.material.uniformsNeedUpdate=!0}getPointCloudModeEnabled(){return this.pointCloudModeEnabled}getSplatDataTextures(){return this.splatDataTextures}getSplatCount(t=!1){return t?Nn.getTotalSplatCountForScenes(this.scenes):this.lastBuildSplatCount}static getTotalSplatCountForScenes(t){let n=0;for(let s of t)s&&s.splatBuffer&&(n+=s.splatBuffer.getSplatCount());return n}static getTotalSplatCountForSplatBuffers(t){let n=0;for(let s of t)n+=s.getSplatCount();return n}getMaxSplatCount(){return Nn.getTotalMaxSplatCountForScenes(this.scenes)}static getTotalMaxSplatCountForScenes(t){let n=0;for(let s of t)s&&s.splatBuffer&&(n+=s.splatBuffer.getMaxSplatCount());return n}static getTotalMaxSplatCountForSplatBuffers(t){let n=0;for(let s of t)n+=s.getMaxSplatCount();return n}disposeDistancesComputationGPUResources(){if(!this.renderer)return;const t=this.renderer.getContext();this.distancesTransformFeedback.vao&&(t.deleteVertexArray(this.distancesTransformFeedback.vao),this.distancesTransformFeedback.vao=null),this.distancesTransformFeedback.program&&(t.deleteProgram(this.distancesTransformFeedback.program),t.deleteShader(this.distancesTransformFeedback.vertexShader),t.deleteShader(this.distancesTransformFeedback.fragmentShader),this.distancesTransformFeedback.program=null,this.distancesTransformFeedback.vertexShader=null,this.distancesTransformFeedback.fragmentShader=null),this.disposeDistancesComputationGPUBufferResources(),this.distancesTransformFeedback.id&&(t.deleteTransformFeedback(this.distancesTransformFeedback.id),this.distancesTransformFeedback.id=null)}disposeDistancesComputationGPUBufferResources(){if(!this.renderer)return;const t=this.renderer.getContext();this.distancesTransformFeedback.centersBuffer&&(this.distancesTransformFeedback.centersBuffer=null,t.deleteBuffer(this.distancesTransformFeedback.centersBuffer)),this.distancesTransformFeedback.outDistancesBuffer&&(t.deleteBuffer(this.distancesTransformFeedback.outDistancesBuffer),this.distancesTransformFeedback.outDistancesBuffer=null)}setRenderer(t){if(t!==this.renderer){this.renderer=t;const n=this.renderer.getContext(),s=new hw(n),o=new pw(n,s,{});if(s.init(o),this.webGLUtils=new Tv(n,s),this.enableDistancesComputationOnGPU&&this.getSplatCount()>0){this.setupDistancesComputationTransformFeedback();const{centers:l,sceneIndexes:u}=this.getDataForDistancesComputation(0,this.getSplatCount()-1);this.refreshGPUBuffersForDistancesComputation(l,u)}}}updateGPUCentersBufferForDistancesComputation(t,n,s){if(!this.renderer)return;const o=this.renderer.getContext(),l=o.getParameter(o.VERTEX_ARRAY_BINDING);o.bindVertexArray(this.distancesTransformFeedback.vao);const u=this.integerBasedDistancesComputation?Uint32Array:Float32Array,d=16,f=s*d;if(o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),t)o.bufferSubData(o.ARRAY_BUFFER,f,n);else{const p=new u(this.getMaxSplatCount()*d);p.set(n),o.bufferData(o.ARRAY_BUFFER,p,o.STATIC_DRAW)}o.bindBuffer(o.ARRAY_BUFFER,null),l&&o.bindVertexArray(l)}updateGPUTransformIndexesBufferForDistancesComputation(t,n,s){if(!this.renderer||!this.dynamicMode)return;const o=this.renderer.getContext(),l=o.getParameter(o.VERTEX_ARRAY_BINDING);o.bindVertexArray(this.distancesTransformFeedback.vao);const u=s*4;if(o.bindBuffer(o.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),t)o.bufferSubData(o.ARRAY_BUFFER,u,n);else{const d=new Uint32Array(this.getMaxSplatCount()*4);d.set(n),o.bufferData(o.ARRAY_BUFFER,d,o.STATIC_DRAW)}o.bindBuffer(o.ARRAY_BUFFER,null),l&&o.bindVertexArray(l)}getSceneIndexes(t,n){let s;const o=n-t+1;s=new Uint32Array(o);for(let l=t;l<=n;l++)s[l]=this.globalSplatIndexToSceneIndexMap[l];return s}getLocalSplatParameters(t,n,s){s==null&&(s=!this.dynamicMode),n.splatBuffer=this.getSplatBufferForSplat(t),n.localIndex=this.getSplatLocalIndex(t),n.sceneTransform=s?this.getSceneTransformForSplat(t):null}fillSplatDataArrays(t,n,s,o,l,u,d,f=0,p=0,m=1,g,x,A=0,_){const v=new U;v.x=void 0,v.y=void 0,this.splatRenderMode===br.ThreeD?v.z=void 0:v.z=1;const y=new mt;let T=0,P=this.scenes.length-1;_!=null&&_>=0&&_<=this.scenes.length&&(T=_,P=_);for(let C=T;C<=P;C++){d==null&&(d=!this.dynamicMode);const w=this.getScene(C),I=w.splatBuffer;let R;if(d&&(this.getSceneTransform(C,y),R=y),t&&I.fillSplatCovarianceArray(t,R,g,x,A,f),n||s){if(!n||!s)throw new Error('SplatMesh::fillSplatDataArrays() -> "scales" and "rotations" must both be valid.');I.fillSplatScaleRotationArray(n,s,R,g,x,A,p,v)}o&&I.fillSplatCenterArray(o,R,g,x,A),l&&I.fillSplatColorArray(l,w.minimumAlpha,g,x,A),u&&I.fillSphericalHarmonicsArray(u,this.minSphericalHarmonicsDegree,R,g,x,A,m),A+=I.getSplatCount()}}getIntegerCenters(t,n,s=!1){const o=n-t+1,l=new Float32Array(o*3);this.fillSplatDataArrays(null,null,null,l,null,null,void 0,void 0,void 0,void 0,t);let u,d=s?4:3;u=new Int32Array(o*d);for(let f=0;f<o;f++){for(let p=0;p<3;p++)u[f*d+p]=Math.round(l[f*3+p]*1e3);s&&(u[f*d+3]=1e3)}return u}getFloatCenters(t,n,s=!1){const o=n-t+1,l=new Float32Array(o*3);if(this.fillSplatDataArrays(null,null,null,l,null,null,void 0,void 0,void 0,void 0,t),!s)return l;let u=new Float32Array(o*4);for(let d=0;d<o;d++){for(let f=0;f<3;f++)u[d*4+f]=l[d*3+f];u[d*4+3]=1}return u}getSceneTransform(t,n){const s=this.getScene(t);s.updateTransform(this.dynamicMode),n.copy(s.transform)}getScene(t){if(t<0||t>=this.scenes.length)throw new Error("SplatMesh::getScene() -> Invalid scene index.");return this.scenes[t]}getSceneCount(){return this.scenes.length}getSplatBufferForSplat(t){return this.getScene(this.globalSplatIndexToSceneIndexMap[t]).splatBuffer}getSceneIndexForSplat(t){return this.globalSplatIndexToSceneIndexMap[t]}getSceneTransformForSplat(t){return this.getScene(this.globalSplatIndexToSceneIndexMap[t]).transform}getSplatLocalIndex(t){return this.globalSplatIndexToLocalSplatIndexMap[t]}static getIntegerMatrixArray(t){const n=t.elements,s=[];for(let o=0;o<16;o++)s[o]=Math.round(n[o]*1e3);return s}computeBoundingBox(t=!1,n){let s=this.getSplatCount();if(n!=null){if(n<0||n>=this.scenes.length)throw new Error("SplatMesh::computeBoundingBox() -> Invalid scene index.");s=this.scenes[n].splatBuffer.getSplatCount()}const o=new Float32Array(s*3);this.fillSplatDataArrays(null,null,null,o,null,null,t,void 0,void 0,void 0,void 0,n);const l=new U,u=new U;for(let d=0;d<s;d++){const f=d*3,p=o[f],m=o[f+1],g=o[f+2];(d===0||p<l.x)&&(l.x=p),(d===0||m<l.y)&&(l.y=m),(d===0||g<l.z)&&(l.z=g),(d===0||p>u.x)&&(u.x=p),(d===0||m>u.y)&&(u.y=m),(d===0||g>u.z)&&(u.z=g)}return new sr(l,u)}}var Ew="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEbA2AAAGAQf39/f39/f39/f39/f39/fwBgAAF/AhIBA2VudgZtZW1vcnkCAwCAgAQDBAMAAQIHVAQRX193YXNtX2NhbGxfY3RvcnMAABhfX3dhc21fYXBwbHlfZGF0YV9yZWxvY3MAAAtzb3J0SW5kZXhlcwABE2Vtc2NyaXB0ZW5fdGxzX2luaXQAAgqWEAMDAAELihAEAXwDewN/A30gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEBA0AgAyABQQJ0IgVqIAIgACAFaigCAEECdGooAgAiBTYCACAFIAogBSAKSBshCiAFIA0gBSANShshDSABQQFqIgEgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiFWooAgAiFkECdGooAgAiFEcEQAJ/IAX9CQI4IAggFEEGdGoiDv0JAgwgDioCHP0gASAOKgIs/SACIA4qAjz9IAP95gEgBf0JAiggDv0JAgggDioCGP0gASAOKgIo/SACIA4qAjj9IAP95gEgBf0JAgggDv0JAgAgDioCEP0gASAOKgIg/SACIA4qAjD9IAP95gEgBf0JAhggDv0JAgQgDioCFP0gASAOKgIk/SACIA4qAjT9IAP95gH95AH95AH95AEiEf1f/QwAAAAAAECPQAAAAAAAQI9AIhL98gEiE/0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBP9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/REgDv0cAQJ/IBEgEf0NCAkKCwwNDg8AAAAAAAAAAP1fIBL98gEiEf0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9HAICfyAR/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAyESIBQhDwsgAyAVaiABIBZBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmogEf0bA2oiDjYCACAOIAogCiAOShshCiAOIA0gDSAOSBshDSACQQFqIgIgC0cNAAsMAwsCfyAFKgIIu/0UIAUqAhi7/SIB/QwAAAAAAECPQAAAAAAAQI9A/fIBIhH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIQ4CfyAR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyECAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQIgAv0RIA79HAEgBf0cAiESIAwhBQNAIAMgBUECdCICaiABIAAgAmooAgBBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmoiAjYCACACIAogAiAKSBshCiACIA0gAiANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEBA0AgAyABQQJ0IgVqAn8gAiAAIAVqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAFBAWoiASALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIRcgBSoCGCEYIAUqAgghGUH4////ByEKQYiAgIB4IQ0gDCEFA0ACfyAXIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCAZIAIqAgCUIBggAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIUaigCAEECdCIVaigCACIORwRAIAX9CQI4IAggDkEGdGoiD/0JAgwgDyoCHP0gASAPKgIs/SACIA8qAjz9IAP95gEgBf0JAiggD/0JAgggDyoCGP0gASAPKgIo/SACIA8qAjj9IAP95gEgBf0JAgggD/0JAgAgDyoCEP0gASAPKgIg/SACIA8qAjD9IAP95gEgBf0JAhggD/0JAgQgDyoCFP0gASAPKgIk/SACIA8qAjT9IAP95gH95AH95AH95AEhESAOIQ8LIAMgFGoCfyAR/R8DIAEgFUECdCIOQQxyaioCAJQgEf0fAiABIA5BCHJqKgIAlCAR/R8AIAEgDmoqAgCUIBH9HwEgASAOQQRyaioCAJSSkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSACQQFqIgIgC0cNAAsMAQtBiICAgHghDUH4////ByEKCyALIAxLBEAgCUEBa7MgDbIgCrKTlSEXIAwhDQNAAn8gFyADIA1BAnRqIgEoAgAgCmuylCIYi0MAAABPXQRAIBioDAELQYCAgIB4CyEOIAEgDjYCACAEIA5BAnRqIgEgASgCAEEBajYCACANQQFqIg0gC0cNAAsLIAlBAk8EQCAEKAIAIQ1BASEKA0AgBCAKQQJ0aiIBIAEoAgAgDWoiDTYCACAKQQFqIgogCUcNAAsLIAxBAEoEQCAMIQoDQCAGIApBAWsiAUECdCICaiAAIAJqKAIANgIAIApBAUshAiABIQogAg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCwsEAEEACw==",Ox="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACEgEDZW52Bm1lbW9yeQIDAICABAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=",Mw="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQrrDwICAAvlDwQBfAN7B30DfyALIAprIQwCQAJAIA4EQCANBEBB+P///wchCkGIgICAeCENIAsgDE0NAyAMIQUDQCADIAVBAnQiAWogAiAAIAFqKAIAQQJ0aigCACIBNgIAIAEgCiABIApIGyEKIAEgDSABIA1KGyENIAVBAWoiBSALRw0ACwwDCyAPBEAgCyAMTQ0CQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIcaigCACIdQQJ0aigCACIbRwRAAn8gBf0JAjggCCAbQQZ0aiIO/QkCDCAOKgIc/SABIA4qAiz9IAIgDioCPP0gA/3mASAF/QkCKCAO/QkCCCAOKgIY/SABIA4qAij9IAIgDioCOP0gA/3mASAF/QkCCCAO/QkCACAOKgIQ/SABIA4qAiD9IAIgDioCMP0gA/3mASAF/QkCGCAO/QkCBCAOKgIU/SABIA4qAiT9IAIgDioCNP0gA/3mAf3kAf3kAf3kASIR/V/9DAAAAAAAQI9AAAAAAABAj0AiEv3yASIT/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOAn8gE/0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9ESAO/RwBAn8gESAR/Q0ICQoLDA0ODwABAgMAAQID/V8gEv3yASIR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAgJ/IBH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/RwDIRIgGyEPCyADIBxqIAEgHUEEdGr9AAAAIBL9tQEiEf0bACAR/RsBaiAR/RsCaiAR/RsDaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAgi7/RQgBSoCGLv9IgH9DAAAAAAAQI9AAAAAAABAj0D98gEiEf0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBH9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQL9ESAO/RwBIAX9HAIhEiAMIQUDQCADIAVBAnQiAmogASAAIAJqKAIAQQR0av0AAAAgEv21ASIR/RsAIBH9GwFqIBH9GwJqIgI2AgAgAiAKIAIgCkgbIQogAiANIAIgDUobIQ0gBUEBaiIFIAtHDQALDAILIA0EQEH4////ByEKQYiAgIB4IQ0gCyAMTQ0CIAwhBQNAIAMgBUECdCIBagJ/IAIgACABaigCAEECdGoqAgC7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgD0UEQCALIAxNDQEgBSoCKCEUIAUqAhghFSAFKgIIIRZB+P///wchCkGIgICAeCENIAwhBQNAAn8gFCABIAAgBUECdCIHaigCAEEEdGoiAioCCJQgFiACKgIAlCAVIAIqAgSUkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDiADIAdqIA42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gBUEBaiIFIAtHDQALDAILIAsgDE0NAEF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiG2ooAgBBAnQiHGooAgAiDkcEQCAFKgI4IhQgCCAOQQZ0aiIPKgI8lCAFKgIoIhUgDyoCOJQgBSoCCCIWIA8qAjCUIAUqAhgiFyAPKgI0lJKSkiEYIBQgDyoCLJQgFSAPKgIolCAWIA8qAiCUIBcgDyoCJJSSkpIhGSAUIA8qAhyUIBUgDyoCGJQgFiAPKgIQlCAXIA8qAhSUkpKSIRogFCAPKgIMlCAVIA8qAgiUIBYgDyoCAJQgFyAPKgIElJKSkiEUIA4hDwsgAyAbagJ/IBggASAcQQJ0aiIOKgIMlCAZIA4qAgiUIBQgDioCAJQgGiAOKgIElJKSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAJBAWoiAiALRw0ACwwBC0GIgICAeCENQfj///8HIQoLIAsgDEsEQCAJQQFrsyANsiAKspOVIRQgDCENA0ACfyAUIAMgDUECdGoiASgCACAKa7KUIhWLQwAAAE9dBEAgFagMAQtBgICAgHgLIQ4gASAONgIAIAQgDkECdGoiASABKAIAQQFqNgIAIA1BAWoiDSALRw0ACwsgCUECTwRAIAQoAgAhDUEBIQoDQCAEIApBAnRqIgEgASgCACANaiINNgIAIApBAWoiCiAJRw0ACwsgDEEASgRAIAwhCgNAIAYgCkEBayIBQQJ0IgJqIAAgAmooAgA2AgAgCkEBSyABIQoNAAsLIAsgDEoEQCALIQoDQCAGIAsgBCADIApBAWsiCkECdCIBaigCAEECdGoiAigCACIFa0ECdGogACABaigCADYCACACIAVBAWs2AgAgCiAMSg0ACwsL",Cw="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=";function Tw(a){let e,t,n,s,o,l,u,d,f,p,m,g,x,A,_,v,y,T,P,C;function w(I,R,M,F,B,N,H){const q=performance.now();if(!n&&(new Uint32Array(t,u,B.byteLength/C.BytesPerInt).set(B),new Float32Array(t,p,H.byteLength/C.BytesPerFloat).set(H),F)){let k;s?k=new Int32Array(t,m,N.byteLength/C.BytesPerInt):k=new Float32Array(t,m,N.byteLength/C.BytesPerFloat),k.set(N)}v||(v=new Uint32Array(T)),new Float32Array(t,_,16).set(M),new Uint32Array(t,x,T).set(v),e.exports.sortIndexes(u,A,m,g,x,_,d,f,p,T,I,R,l,F,s,o);const Y={sortDone:!0,splatSortCount:I,splatRenderCount:R,sortTime:0};if(!n){const K=new Uint32Array(t,d,R);(!y||y.length<R)&&(y=new Uint32Array(R)),y.set(K),Y.sortedIndexes=y}const G=performance.now();Y.sortTime=G-q,a.postMessage(Y)}a.onmessage=I=>{if(I.data.centers)centers=I.data.centers,sceneIndexes=I.data.sceneIndexes,s?new Int32Array(t,A+I.data.range.from*C.BytesPerInt*4,I.data.range.count*4).set(new Int32Array(centers)):new Float32Array(t,A+I.data.range.from*C.BytesPerFloat*4,I.data.range.count*4).set(new Float32Array(centers)),o&&new Uint32Array(t,f+I.data.range.from*4,I.data.range.count).set(new Uint32Array(sceneIndexes)),P=I.data.range.from+I.data.range.count;else if(I.data.sort){const R=Math.min(I.data.sort.splatRenderCount||0,P),M=Math.min(I.data.sort.splatSortCount||0,P),F=I.data.sort.usePrecomputedDistances;let B,N,H;n||(B=I.data.sort.indexesToSort,H=I.data.sort.transforms,F&&(N=I.data.sort.precomputedDistances)),w(M,R,I.data.sort.modelViewProj,F,B,N,H)}else if(I.data.init){C=I.data.init.Constants,l=I.data.init.splatCount,n=I.data.init.useSharedMemory,s=I.data.init.integerBasedSort,o=I.data.init.dynamicMode,T=I.data.init.distanceMapRange,P=0;const R=s?C.BytesPerInt*4:C.BytesPerFloat*4,M=new Uint8Array(I.data.init.sorterWasmBytes),F=16*C.BytesPerFloat,B=l*C.BytesPerInt,N=l*R,H=F,q=s?l*C.BytesPerInt:l*C.BytesPerFloat,Y=l*C.BytesPerInt,G=l*C.BytesPerInt,K=s?T*C.BytesPerInt*2:T*C.BytesPerFloat*2,j=o?l*C.BytesPerInt:0,k=o?C.MaxScenes*F:0,Q=C.MemoryPageSize*32,J=B+N+H+q+Y+K+G+j+k+Q,O=Math.floor(J/C.MemoryPageSize)+1,ee={module:{},env:{memory:new WebAssembly.Memory({initial:O,maximum:O,shared:!0})}};WebAssembly.compile(M).then(ye=>WebAssembly.instantiate(ye,ee)).then(ye=>{e=ye,u=0,A=u+B,_=A+N,m=_+H,g=m+q,x=g+Y,d=x+K,f=d+G,p=f+j,t=ee.env.memory.buffer,n?a.postMessage({sortSetupPhase1Complete:!0,indexesToSortBuffer:t,indexesToSortOffset:u,sortedIndexesBuffer:t,sortedIndexesOffset:d,precomputedDistancesBuffer:t,precomputedDistancesOffset:m,transformsBuffer:t,transformsOffset:p}):a.postMessage({sortSetupPhase1Complete:!0})})}}}function ww(a,e,t,n,s,o=wt.DefaultSplatSortDistanceMapPrecision){const l=new Worker(URL.createObjectURL(new Blob(["(",Tw.toString(),")(self)"],{type:"application/javascript"})));let u=Ew;const d=fp()?Rv():null;!t&&!e?(u=Ox,d&&d.major<=16&&d.minor<4&&(u=Cw)):t?e||d&&d.major<=16&&d.minor<4&&(u=Mw):u=Ox;const f=atob(u),p=new Uint8Array(f.length);for(let m=0;m<f.length;m++)p[m]=f.charCodeAt(m);return l.postMessage({init:{sorterWasmBytes:p.buffer,splatCount:a,useSharedMemory:e,integerBasedSort:n,dynamicMode:s,distanceMapRange:1<<o,Constants:{BytesPerFloat:wt.BytesPerFloat,BytesPerInt:wt.BytesPerInt,MemoryPageSize:wt.MemoryPageSize,MaxScenes:wt.MaxScenes}}}),l}const Oa={None:0,VR:1,AR:2};class Za{static createButton(e,t={}){const n=document.createElement("button");function s(){let f=null;async function p(x){x.addEventListener("end",m),await e.xr.setSession(x),n.textContent="EXIT VR",f=x}function m(){f.removeEventListener("end",m),n.textContent="ENTER VR",f=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";const g={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){f===null?navigator.xr.requestSession("immersive-vr",g).then(p):(f.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",g).then(p).catch(x=>{console.warn(x)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",g).then(p).catch(x=>{console.warn(x)})}function o(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function l(){o(),n.textContent="VR NOT SUPPORTED"}function u(f){o(),console.warn("Exception when trying to call xr.isSessionSupported",f),n.textContent="VR NOT ALLOWED"}function d(f){f.style.position="absolute",f.style.bottom="20px",f.style.padding="12px 6px",f.style.border="1px solid #fff",f.style.borderRadius="4px",f.style.background="rgba(0,0,0,0.1)",f.style.color="#fff",f.style.font="normal 13px sans-serif",f.style.textAlign="center",f.style.opacity="0.5",f.style.outline="none",f.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",d(n),navigator.xr.isSessionSupported("immersive-vr").then(function(f){f?s():l(),f&&Za.xrSessionIsGranted&&n.click()}).catch(u),n;{const f=document.createElement("a");return window.isSecureContext===!1?(f.href=document.location.href.replace(/^http:/,"https:"),f.innerHTML="WEBXR NEEDS HTTPS"):(f.href="https://immersiveweb.dev/",f.innerHTML="WEBXR NOT AVAILABLE"),f.style.left="calc(50% - 90px)",f.style.width="180px",f.style.textDecoration="none",d(f),f}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{Za.xrSessionIsGranted=!0})}}}Za.xrSessionIsGranted=!1;Za.registerSessionGrantedListener();class bw{static createButton(e,t={}){const n=document.createElement("button");function s(){if(t.domOverlay===void 0){const g=document.createElement("div");g.style.display="none",document.body.appendChild(g);const x=document.createElementNS("http://www.w3.org/2000/svg","svg");x.setAttribute("width",38),x.setAttribute("height",38),x.style.position="absolute",x.style.right="20px",x.style.top="20px",x.addEventListener("click",function(){f.end()}),g.appendChild(x);const A=document.createElementNS("http://www.w3.org/2000/svg","path");A.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),A.setAttribute("stroke","#fff"),A.setAttribute("stroke-width",2),x.appendChild(A),t.optionalFeatures===void 0&&(t.optionalFeatures=[]),t.optionalFeatures.push("dom-overlay"),t.domOverlay={root:g}}let f=null;async function p(g){g.addEventListener("end",m),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(g),n.textContent="STOP AR",t.domOverlay.root.style.display="",f=g}function m(){f.removeEventListener("end",m),n.textContent="START AR",t.domOverlay.root.style.display="none",f=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="START AR",n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){f===null?navigator.xr.requestSession("immersive-ar",t).then(p):(f.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(p).catch(g=>{console.warn(g)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(p).catch(g=>{console.warn(g)})}function o(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function l(){o(),n.textContent="AR NOT SUPPORTED"}function u(f){o(),console.warn("Exception when trying to call xr.isSessionSupported",f),n.textContent="AR NOT ALLOWED"}function d(f){f.style.position="absolute",f.style.bottom="20px",f.style.padding="12px 6px",f.style.border="1px solid #fff",f.style.borderRadius="4px",f.style.background="rgba(0,0,0,0.1)",f.style.color="#fff",f.style.font="normal 13px sans-serif",f.style.textAlign="center",f.style.opacity="0.5",f.style.outline="none",f.style.zIndex="999"}if("xr"in navigator)return n.id="ARButton",n.style.display="none",d(n),navigator.xr.isSessionSupported("immersive-ar").then(function(f){f?s():l()}).catch(u),n;{const f=document.createElement("a");return window.isSecureContext===!1?(f.href=document.location.href.replace(/^http:/,"https:"),f.innerHTML="WEBXR NEEDS HTTPS"):(f.href="https://immersiveweb.dev/",f.innerHTML="WEBXR NOT AVAILABLE"),f.style.left="calc(50% - 90px)",f.style.width="180px",f.style.textDecoration="none",d(f),f}}}const $f={Always:0,Never:2},Rw=50,Iw=.75,Pw=15e5,Dw=10,Fw=2.5,Lw=60,cs=class cs{constructor(e={}){Fe(this,"onKeyDown",(function(){const e=new U,t=new mt,n=new mt;return function(s){switch(e.set(0,0,-1),e.transformDirection(this.camera.matrixWorld),t.makeRotationAxis(e,Math.PI/128),n.makeRotationAxis(e,-Math.PI/128),s.code){case"KeyG":this.focalAdjustment+=.02,this.forceRenderNextFrame();break;case"KeyF":this.focalAdjustment-=.02,this.forceRenderNextFrame();break;case"ArrowLeft":this.camera.up.transformDirection(t);break;case"ArrowRight":this.camera.up.transformDirection(n);break;case"KeyC":this.showMeshCursor=!this.showMeshCursor;break;case"KeyU":this.showControlPlane=!this.showControlPlane;break;case"KeyI":this.showInfo=!this.showInfo,this.showInfo?this.infoPanel.show():this.infoPanel.hide();break;case"KeyO":this.usingExternalCamera||this.setOrthographicMode(!this.camera.isOrthographicCamera);break;case"KeyP":this.usingExternalCamera||this.splatMesh.setPointCloudModeEnabled(!this.splatMesh.getPointCloudModeEnabled());break;case"Equal":this.usingExternalCamera||this.splatMesh.setSplatScale(this.splatMesh.getSplatScale()+.05);break;case"Minus":this.usingExternalCamera||this.splatMesh.setSplatScale(Math.max(this.splatMesh.getSplatScale()-.05,0));break}}})());Fe(this,"onMouseUp",(function(){const e=new qe;return function(t){e.copy(this.mousePosition).sub(this.mouseDownPosition),Na()-this.mouseDownTime<.5&&e.length()<2&&this.onMouseClick(t)}})());Fe(this,"checkForFocalPointChange",(function(){const e=new qe,t=new U,n=[];return function(){if(!this.transitioningCameraTarget&&(this.getRenderDimensions(e),n.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,e),this.raycaster.intersectSplatMesh(this.splatMesh,n),n.length>0)){const o=n[0].origin;t.copy(o).sub(this.camera.position),t.length()>Iw&&(this.previousCameraTarget.copy(this.controls.target),this.nextCameraTarget.copy(o),this.transitioningCameraTarget=!0,this.transitioningCameraTargetStartTime=Na())}}})());Fe(this,"updateSplatMesh",(function(){const e=new qe;return function(){if(!this.splatMesh)return;if(this.splatMesh.getSplatCount()>0){this.splatMesh.updateVisibleRegionFadeDistance(this.sceneRevealMode),this.splatMesh.updateTransforms(),this.getRenderDimensions(e);const n=this.camera.projectionMatrix.elements[0]*.5*this.devicePixelRatio*e.x,s=this.camera.projectionMatrix.elements[5]*.5*this.devicePixelRatio*e.y,o=this.camera.isOrthographicCamera?1/this.devicePixelRatio:1,l=this.focalAdjustment*o,u=1/l;this.adjustForWebXRStereo(e),this.splatMesh.updateUniforms(e,n*l,s*l,this.camera.isOrthographicCamera,this.camera.zoom||1,u)}}})());Fe(this,"addSplatBuffers",(function(){return function(e,t=[],n=!0,s=!0,o=!0,l=!1,u=!1,d=!0){if(this.isDisposingOrDisposed())return Promise.resolve();let f=null;const p=()=>{f!==null&&(this.loadingSpinner.removeTask(f),f=null)};return this.splatRenderReady=!1,new Promise(m=>{s&&(f=this.loadingSpinner.addTask("Processing splats...")),Mi(()=>{if(this.isDisposingOrDisposed())m();else{const g=this.addSplatBuffersToMesh(e,t,n,o,l,d),x=this.splatMesh.getMaxSplatCount();this.sortWorker&&this.sortWorker.maxSplatCount!==x&&this.disposeSortWorker(),this.gpuAcceleratedSort||this.preSortMessages.push({centers:g.centers.buffer,sceneIndexes:g.sceneIndexes.buffer,range:{from:g.from,to:g.to,count:g.count}}),(!this.sortWorker&&x>0?this.setupSortWorker(this.splatMesh):Promise.resolve()).then(()=>{this.isDisposingOrDisposed()||this.runSplatSort(!0,!0).then(_=>{!this.sortWorker||!_?(this.splatRenderReady=!0,p(),m()):(u?this.splatRenderReady=!0:this.runAfterNextSort.push(()=>{this.splatRenderReady=!0}),this.runAfterNextSort.push(()=>{p(),m()}))})})}},!0)})}})());Fe(this,"addSplatBuffersToMesh",(function(){let e;return function(t,n,s=!0,o=!1,l=!1,u=!0){if(this.isDisposingOrDisposed())return;let d=[],f=[];l||(d=this.splatMesh.scenes.map(x=>x.splatBuffer)||[],f=this.splatMesh.sceneOptions?this.splatMesh.sceneOptions.map(x=>x):[]),d.push(...t),f.push(...n),this.renderer&&this.splatMesh.setRenderer(this.renderer);const p=x=>{if(this.isDisposingOrDisposed())return;const A=this.splatMesh.getSplatCount();o&&A>=Pw&&!x&&!e&&(this.loadingSpinner.setMinimized(!0,!0),e=this.loadingSpinner.addTask("Optimizing data structures..."))},m=x=>{this.isDisposingOrDisposed()||x&&e&&(this.loadingSpinner.removeTask(e),e=null)},g=this.splatMesh.build(d,f,!0,s,p,m,u);return s&&this.freeIntermediateSplatData&&this.splatMesh.freeIntermediateSplatData(),g}})());Fe(this,"shouldRender",(function(){let e=0;const t=new U,n=new tn,s=1e-4;return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return!1;let o=!1,l=!1;if(this.camera){const u=this.camera.position,d=this.camera.quaternion;l=Math.abs(u.x-t.x)>s||Math.abs(u.y-t.y)>s||Math.abs(u.z-t.z)>s||Math.abs(d.x-n.x)>s||Math.abs(d.y-n.y)>s||Math.abs(d.z-n.z)>s||Math.abs(d.w-n.w)>s}return o=this.renderMode!==$f.Never&&(e===0||this.splatMesh.visibleRegionChanging||l||this.renderMode===$f.Always||this.dynamicMode===!0||this.renderNextFrame),this.camera&&(t.copy(this.camera.position),n.copy(this.camera.quaternion)),e++,o}})());Fe(this,"render",(function(){return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return;const e=n=>{for(let s of n.children)if(s.visible)return!0;return!1},t=this.renderer.autoClear;e(this.threeScene)&&(this.renderer.render(this.threeScene,this.camera),this.renderer.autoClear=!1),this.renderer.render(this.splatMesh,this.camera),this.renderer.autoClear=!1,this.sceneHelper.getFocusMarkerOpacity()>0&&this.renderer.render(this.sceneHelper.focusMarker,this.camera),this.showControlPlane&&this.renderer.render(this.sceneHelper.controlPlane,this.camera),this.renderer.autoClear=t}})());Fe(this,"updateFPS",(function(){let e=Na(),t=0;return function(){if(this.consecutiveRenderFrames>Lw){const n=Na();n-e>=1?(this.currentFPS=t,t=0,e=n):t++}else this.currentFPS=null}})());Fe(this,"updateForRendererSizeChanges",(function(){const e=new qe,t=new qe;let n;return function(){this.usingExternalCamera||(this.renderer.getSize(t),(n===void 0||n!==this.camera.isOrthographicCamera||t.x!==e.x||t.y!==e.y)&&(this.camera.isOrthographicCamera?(this.camera.left=-t.x/2,this.camera.right=t.x/2,this.camera.top=t.y/2,this.camera.bottom=-t.y/2):this.camera.aspect=t.x/t.y,this.camera.updateProjectionMatrix(),e.copy(t),n=this.camera.isOrthographicCamera))}})());Fe(this,"timingSensitiveUpdates",(function(){let e;return function(){const t=Na();e||(e=t);const n=t-e;this.updateCameraTransition(t),this.updateFocusMarker(n),e=t}})());Fe(this,"updateCameraTransition",(function(){let e=new U,t=new U,n=new U;return function(s){if(this.transitioningCameraTarget){t.copy(this.previousCameraTarget).sub(this.camera.position).normalize(),n.copy(this.nextCameraTarget).sub(this.camera.position).normalize();const o=Math.acos(t.dot(n)),u=(o/(Math.PI/3)*.65+.3)/o*(s-this.transitioningCameraTargetStartTime);e.copy(this.previousCameraTarget).lerp(this.nextCameraTarget,u),this.camera.lookAt(e),this.controls.target.copy(e),u>=1&&(this.transitioningCameraTarget=!1)}}})());Fe(this,"updateFocusMarker",(function(){const e=new qe;let t=!1;return function(n){if(this.getRenderDimensions(e),this.transitioningCameraTarget){this.sceneHelper.setFocusMarkerVisibility(!0);const s=Math.max(this.sceneHelper.getFocusMarkerOpacity(),0);let o=Math.min(s+Dw*n,1);this.sceneHelper.setFocusMarkerOpacity(o),this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e),t=!0,this.forceRenderNextFrame()}else{let s;if(t?s=1:s=Math.min(this.sceneHelper.getFocusMarkerOpacity(),1),s>0){this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e);let o=Math.max(s-Fw*n,0);this.sceneHelper.setFocusMarkerOpacity(o),o===0&&this.sceneHelper.setFocusMarkerVisibility(!1)}s>0&&this.forceRenderNextFrame(),t=!1}}})());Fe(this,"updateMeshCursor",(function(){const e=[],t=new qe;return function(){this.showMeshCursor?(this.forceRenderNextFrame(),this.getRenderDimensions(t),e.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,t),this.raycaster.intersectSplatMesh(this.splatMesh,e),e.length>0?(this.sceneHelper.setMeshCursorVisibility(!0),this.sceneHelper.positionAndOrientMeshCursor(e[0].origin,this.camera)):this.sceneHelper.setMeshCursorVisibility(!1)):(this.sceneHelper.getMeschCursorVisibility()&&this.forceRenderNextFrame(),this.sceneHelper.setMeshCursorVisibility(!1))}})());Fe(this,"updateInfoPanel",(function(){const e=new qe;return function(){if(!this.showInfo)return;const t=this.splatMesh.getSplatCount();this.getRenderDimensions(e);const n=this.controls?this.controls.target:null,s=this.showMeshCursor?this.sceneHelper.meshCursor.position:null,o=t>0?this.splatRenderCount/t*100:0;this.infoPanel.update(e,this.camera.position,n,this.camera.up,this.camera.isOrthographicCamera,s,this.currentFPS||"N/A",t,this.splatRenderCount,o,this.lastSortTime,this.focalAdjustment,this.splatMesh.getSplatScale(),this.splatMesh.getPointCloudModeEnabled())}})());Fe(this,"runSplatSort",(function(){const e=new mt,t=[],n=new U(0,0,-1),s=new U(0,0,-1),o=new U,l=new U,u=[],d=[{angleThreshold:.55,sortFractions:[.125,.33333,.75]},{angleThreshold:.65,sortFractions:[.33333,.66667]},{angleThreshold:.8,sortFractions:[.5]}];return function(f=!1,p=!1){if(!this.initialized)return Promise.resolve(!1);if(this.sortRunning)return Promise.resolve(!0);if(this.splatMesh.getSplatCount()<=0)return this.splatRenderCount=0,Promise.resolve(!1);let m=0,g=0,x=!1,A=!1;if(s.set(0,0,-1).applyQuaternion(this.camera.quaternion),m=s.dot(n),g=l.copy(this.camera.position).sub(o).length(),!f&&!this.splatMesh.dynamicMode&&u.length===0&&(m<=.99&&(x=!0),g>=1&&(A=!0),!x&&!A))return Promise.resolve(!1);this.sortRunning=!0;let{splatRenderCount:_,shouldSortAll:v}=this.gatherSceneNodesForSort();v=v||p,this.splatRenderCount=_,e.copy(this.camera.matrixWorld).invert();const y=this.perspectiveCamera||this.camera;e.premultiply(y.projectionMatrix),this.splatMesh.dynamicMode||e.multiply(this.splatMesh.matrixWorld);let T=Promise.resolve(!0);return this.gpuAcceleratedSort&&(u.length<=1||u.length%2===0)&&(T=this.splatMesh.computeDistancesOnGPU(e,this.sortWorkerPrecomputedDistances)),T.then(()=>{if(u.length===0)if(this.splatMesh.dynamicMode||v)u.push(this.splatRenderCount);else{for(let w of d)if(m<w.angleThreshold){for(let I of w.sortFractions)u.push(Math.floor(this.splatRenderCount*I));break}u.push(this.splatRenderCount)}let P=Math.min(u.shift(),this.splatRenderCount);this.splatSortCount=P,t[0]=this.camera.position.x,t[1]=this.camera.position.y,t[2]=this.camera.position.z;const C={modelViewProj:e.elements,cameraPosition:t,splatRenderCount:this.splatRenderCount,splatSortCount:P,usePrecomputedDistances:this.gpuAcceleratedSort};return this.splatMesh.dynamicMode&&this.splatMesh.fillTransformsArray(this.sortWorkerTransforms),this.sharedMemoryForWorkers||(C.indexesToSort=this.sortWorkerIndexesToSort,C.transforms=this.sortWorkerTransforms,this.gpuAcceleratedSort&&(C.precomputedDistances=this.sortWorkerPrecomputedDistances)),this.sortPromise=new Promise(w=>{this.sortPromiseResolver=w}),this.preSortMessages.length>0&&(this.preSortMessages.forEach(w=>{this.sortWorker.postMessage(w)}),this.preSortMessages=[]),this.sortWorker.postMessage({sort:C}),u.length===0&&(o.copy(this.camera.position),n.copy(s)),!0}),T}})());Fe(this,"gatherSceneNodesForSort",(function(){const e=[];let t=null;const n=new U,s=new U,o=new U,l=new mt,u=new mt,d=new mt,f=new U,p=new U(0,0,-1),m=new U,g=x=>m.copy(x.max).sub(x.min).length();return function(x=!1){this.getRenderDimensions(f);const A=f.y/2/Math.tan(this.camera.fov/2*ov.DEG2RAD),_=Math.atan(f.x/2/A),v=Math.atan(f.y/2/A),y=Math.cos(_),T=Math.cos(v),P=this.splatMesh.getSplatTree();if(P){u.copy(this.camera.matrixWorld).invert(),this.splatMesh.dynamicMode||u.multiply(this.splatMesh.matrixWorld);let C=0,w=0;for(let R=0;R<P.subTrees.length;R++){const M=P.subTrees[R];l.copy(u),this.splatMesh.dynamicMode&&(this.splatMesh.getSceneTransform(R,d),l.multiply(d));const F=M.nodesWithIndexes.length;for(let B=0;B<F;B++){const N=M.nodesWithIndexes[B];if(!N.data||!N.data.indexes||N.data.indexes.length===0)continue;o.copy(N.center).applyMatrix4(l);const H=o.length();o.normalize(),n.copy(o).setX(0).normalize(),s.copy(o).setY(0).normalize();const q=p.dot(s),Y=p.dot(n),G=g(N),K=Y<T-.6,j=q<y-.6;!x&&(j||K)&&H>G||(w+=N.data.indexes.length,e[C]=N,N.data.distanceToNode=H,C++)}}e.length=C,e.sort((R,M)=>R.data.distanceToNode<M.data.distanceToNode?-1:1);let I=w*wt.BytesPerInt;for(let R=0;R<C;R++){const M=e[R],F=M.data.indexes.length,B=F*wt.BytesPerInt;new Uint32Array(this.sortWorkerIndexesToSort.buffer,I-B,F).set(M.data.indexes),I-=B}return{splatRenderCount:w,shouldSortAll:!1}}else{const C=this.splatMesh.getSplatCount();if(!t||t.length!==C){t=new Uint32Array(C);for(let w=0;w<C;w++)t[w]=w}return this.sortWorkerIndexesToSort.set(t),{splatRenderCount:C,shouldSortAll:!0}}}})());if(e.cameraUp||(e.cameraUp=[0,1,0]),this.cameraUp=new U().fromArray(e.cameraUp),e.initialCameraPosition||(e.initialCameraPosition=[0,10,15]),this.initialCameraPosition=new U().fromArray(e.initialCameraPosition),e.initialCameraLookAt||(e.initialCameraLookAt=[0,0,0]),this.initialCameraLookAt=new U().fromArray(e.initialCameraLookAt),this.dropInMode=e.dropInMode||!1,(e.selfDrivenMode===void 0||e.selfDrivenMode===null)&&(e.selfDrivenMode=!0),this.selfDrivenMode=e.selfDrivenMode&&!this.dropInMode,this.selfDrivenUpdateFunc=this.selfDrivenUpdate.bind(this),e.useBuiltInControls===void 0&&(e.useBuiltInControls=!0),this.useBuiltInControls=e.useBuiltInControls,this.rootElement=e.rootElement,this.ignoreDevicePixelRatio=e.ignoreDevicePixelRatio||!1,this.devicePixelRatio=this.ignoreDevicePixelRatio?1:window.devicePixelRatio||1,this.halfPrecisionCovariancesOnGPU=e.halfPrecisionCovariancesOnGPU||!1,this.threeScene=e.threeScene,this.renderer=e.renderer,this.camera=e.camera,this.gpuAcceleratedSort=e.gpuAcceleratedSort||!1,(e.integerBasedSort===void 0||e.integerBasedSort===null)&&(e.integerBasedSort=!0),this.integerBasedSort=e.integerBasedSort,(e.sharedMemoryForWorkers===void 0||e.sharedMemoryForWorkers===null)&&(e.sharedMemoryForWorkers=!0),this.sharedMemoryForWorkers=e.sharedMemoryForWorkers,this.dynamicScene=!!e.dynamicScene,this.antialiased=e.antialiased||!1,this.kernel2DSize=e.kernel2DSize===void 0?.3:e.kernel2DSize,this.webXRMode=e.webXRMode||Oa.None,this.webXRMode!==Oa.None&&(this.gpuAcceleratedSort=!1),this.webXRActive=!1,this.webXRSessionInit=e.webXRSessionInit||{},this.renderMode=e.renderMode||$f.Always,this.sceneRevealMode=e.sceneRevealMode||qa.Default,this.focalAdjustment=e.focalAdjustment||1,this.maxScreenSpaceSplatSize=e.maxScreenSpaceSplatSize||1024,this.logLevel=e.logLevel||Ya.None,this.sphericalHarmonicsDegree=e.sphericalHarmonicsDegree||0,this.enableOptionalEffects=e.enableOptionalEffects||!1,(e.enableSIMDInSort===void 0||e.enableSIMDInSort===null)&&(e.enableSIMDInSort=!0),this.enableSIMDInSort=e.enableSIMDInSort,(e.inMemoryCompressionLevel===void 0||e.inMemoryCompressionLevel===null)&&(e.inMemoryCompressionLevel=0),this.inMemoryCompressionLevel=e.inMemoryCompressionLevel,(e.optimizeSplatData===void 0||e.optimizeSplatData===null)&&(e.optimizeSplatData=!0),this.optimizeSplatData=e.optimizeSplatData,(e.freeIntermediateSplatData===void 0||e.freeIntermediateSplatData===null)&&(e.freeIntermediateSplatData=!1),this.freeIntermediateSplatData=e.freeIntermediateSplatData,fp()){const n=Rv();n.major<17&&(this.enableSIMDInSort=!1),n.major<16&&(this.sharedMemoryForWorkers=!1)}(e.splatRenderMode===void 0||e.splatRenderMode===null)&&(e.splatRenderMode=br.ThreeD),this.splatRenderMode=e.splatRenderMode,this.sceneFadeInRateMultiplier=e.sceneFadeInRateMultiplier||1,this.splatSortDistanceMapPrecision=e.splatSortDistanceMapPrecision||wt.DefaultSplatSortDistanceMapPrecision;const t=this.integerBasedSort?20:24;this.splatSortDistanceMapPrecision=on(this.splatSortDistanceMapPrecision,10,t),this.onSplatMeshChangedCallback=null,this.createSplatMesh(),this.controls=null,this.perspectiveControls=null,this.orthographicControls=null,this.orthographicCamera=null,this.perspectiveCamera=null,this.showMeshCursor=!1,this.showControlPlane=!1,this.showInfo=!1,this.sceneHelper=null,this.sortWorker=null,this.sortRunning=!1,this.splatRenderCount=0,this.splatSortCount=0,this.lastSplatSortCount=0,this.sortWorkerIndexesToSort=null,this.sortWorkerSortedIndexes=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.preSortMessages=[],this.runAfterNextSort=[],this.selfDrivenModeRunning=!1,this.splatRenderReady=!1,this.raycaster=new aw,this.infoPanel=null,this.startInOrthographicMode=!1,this.currentFPS=0,this.lastSortTime=0,this.consecutiveRenderFrames=0,this.previousCameraTarget=new U,this.nextCameraTarget=new U,this.mousePosition=new qe,this.mouseDownPosition=new qe,this.mouseDownTime=null,this.resizeObserver=null,this.mouseMoveListener=null,this.mouseDownListener=null,this.mouseUpListener=null,this.keyDownListener=null,this.sortPromise=null,this.sortPromiseResolver=null,this.splatSceneDownloadPromises={},this.splatSceneDownloadAndBuildPromise=null,this.splatSceneRemovalPromise=null,this.loadingSpinner=new jh(null,this.rootElement||document.body),this.loadingSpinner.hide(),this.loadingProgressBar=new ew(this.rootElement||document.body),this.loadingProgressBar.hide(),this.infoPanel=new tw(this.rootElement||document.body),this.infoPanel.hide(),this.usingExternalCamera=!!(this.dropInMode||this.camera),this.usingExternalRenderer=!!(this.dropInMode||this.renderer),this.initialized=!1,this.disposing=!1,this.disposed=!1,this.disposePromise=null,this.dropInMode||this.init()}createSplatMesh(){this.splatMesh=new Nn(this.splatRenderMode,this.dynamicScene,this.enableOptionalEffects,this.halfPrecisionCovariancesOnGPU,this.devicePixelRatio,this.gpuAcceleratedSort,this.integerBasedSort,this.antialiased,this.maxScreenSpaceSplatSize,this.logLevel,this.sphericalHarmonicsDegree,this.sceneFadeInRateMultiplier,this.kernel2DSize),this.splatMesh.frustumCulled=!1,this.onSplatMeshChangedCallback&&this.onSplatMeshChangedCallback()}init(){this.initialized||(this.rootElement||(this.usingExternalRenderer?this.rootElement=this.renderer.domElement||document.body:(this.rootElement=document.createElement("div"),this.rootElement.style.width="100%",this.rootElement.style.height="100%",this.rootElement.style.position="absolute",document.body.appendChild(this.rootElement))),this.setupCamera(),this.setupRenderer(),this.setupWebXR(this.webXRSessionInit),this.setupControls(),this.setupEventHandlers(),this.threeScene=this.threeScene||new wA,this.sceneHelper=new $o(this.threeScene),this.sceneHelper.setupMeshCursor(),this.sceneHelper.setupFocusMarker(),this.sceneHelper.setupControlPlane(),this.loadingProgressBar.setContainer(this.rootElement),this.loadingSpinner.setContainer(this.rootElement),this.infoPanel.setContainer(this.rootElement),this.initialized=!0)}setupCamera(){if(!this.usingExternalCamera){const e=new qe;this.getRenderDimensions(e),this.perspectiveCamera=new Li(Rw,e.x/e.y,.1,1e3),this.orthographicCamera=new Su(e.x/-2,e.x/2,e.y/2,e.y/-2,.1,1e3),this.camera=this.startInOrthographicMode?this.orthographicCamera:this.perspectiveCamera,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt)}}setupRenderer(){if(!this.usingExternalRenderer){const e=new qe;this.getRenderDimensions(e),this.renderer=new ZT({antialias:!1,precision:"highp"}),this.renderer.setPixelRatio(this.devicePixelRatio),this.renderer.autoClear=!0,this.renderer.setClearColor(new bt(0),0),this.renderer.setSize(e.x,e.y),this.resizeObserver=new ResizeObserver(()=>{this.getRenderDimensions(e),this.renderer.setSize(e.x,e.y),this.forceRenderNextFrame()}),this.resizeObserver.observe(this.rootElement),this.rootElement.appendChild(this.renderer.domElement)}}setupWebXR(e){this.webXRMode&&(this.webXRMode===Oa.VR?this.rootElement.appendChild(Za.createButton(this.renderer,e)):this.webXRMode===Oa.AR&&this.rootElement.appendChild(bw.createButton(this.renderer,e)),this.renderer.xr.addEventListener("sessionstart",t=>{this.webXRActive=!0}),this.renderer.xr.addEventListener("sessionend",t=>{this.webXRActive=!1}),this.renderer.xr.enabled=!0,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt))}setupControls(){if(this.useBuiltInControls&&this.webXRMode===Oa.None){this.usingExternalCamera?this.camera.isOrthographicCamera?this.orthographicControls=new qc(this.camera,this.renderer.domElement):this.perspectiveControls=new qc(this.camera,this.renderer.domElement):(this.perspectiveControls=new qc(this.perspectiveCamera,this.renderer.domElement),this.orthographicControls=new qc(this.orthographicCamera,this.renderer.domElement));for(let e of[this.orthographicControls,this.perspectiveControls])e&&(e.listenToKeyEvents(window),e.rotateSpeed=.5,e.maxPolarAngle=Math.PI*.75,e.minPolarAngle=.1,e.enableDamping=!0,e.dampingFactor=.05,e.target.copy(this.initialCameraLookAt),e.update());this.controls=this.camera.isOrthographicCamera?this.orthographicControls:this.perspectiveControls,this.controls.update()}}setupEventHandlers(){this.useBuiltInControls&&this.webXRMode===Oa.None&&(this.mouseMoveListener=this.onMouseMove.bind(this),this.renderer.domElement.addEventListener("pointermove",this.mouseMoveListener,!1),this.mouseDownListener=this.onMouseDown.bind(this),this.renderer.domElement.addEventListener("pointerdown",this.mouseDownListener,!1),this.mouseUpListener=this.onMouseUp.bind(this),this.renderer.domElement.addEventListener("pointerup",this.mouseUpListener,!1),this.keyDownListener=this.onKeyDown.bind(this),window.addEventListener("keydown",this.keyDownListener,!1))}removeEventHandlers(){this.useBuiltInControls&&(this.renderer.domElement.removeEventListener("pointermove",this.mouseMoveListener),this.mouseMoveListener=null,this.renderer.domElement.removeEventListener("pointerdown",this.mouseDownListener),this.mouseDownListener=null,this.renderer.domElement.removeEventListener("pointerup",this.mouseUpListener),this.mouseUpListener=null,window.removeEventListener("keydown",this.keyDownListener),this.keyDownListener=null)}setRenderMode(e){this.renderMode=e}setActiveSphericalHarmonicsDegrees(e){this.splatMesh.material.uniforms.sphericalHarmonicsDegree.value=e,this.splatMesh.material.uniformsNeedUpdate=!0}onSplatMeshChanged(e){this.onSplatMeshChangedCallback=e}onMouseMove(e){this.mousePosition.set(e.offsetX,e.offsetY)}onMouseDown(){this.mouseDownPosition.copy(this.mousePosition),this.mouseDownTime=Na()}onMouseClick(e){this.mousePosition.set(e.offsetX,e.offsetY),this.checkForFocalPointChange()}getRenderDimensions(e){this.rootElement?(e.x=this.rootElement.offsetWidth,e.y=this.rootElement.offsetHeight):this.renderer.getSize(e)}setOrthographicMode(e){if(e===this.camera.isOrthographicCamera)return;const t=this.camera,n=e?this.orthographicCamera:this.perspectiveCamera;if(n.position.copy(t.position),n.up.copy(t.up),n.rotation.copy(t.rotation),n.quaternion.copy(t.quaternion),n.matrix.copy(t.matrix),this.camera=n,this.controls){const s=u=>{u.saveState(),u.reset()},o=this.controls,l=e?this.orthographicControls:this.perspectiveControls;s(l),s(o),l.target.copy(o.target),e?cs.setCameraZoomFromPosition(n,t,o):cs.setCameraPositionFromZoom(n,t,l),this.controls=l,this.camera.lookAt(this.controls.target)}}adjustForWebXRStereo(e){if(this.camera&&this.webXRActive){const n=this.renderer.xr.getCamera().projectionMatrix.elements[0],s=this.camera.projectionMatrix.elements[0];e.x*=s/n}}isLoadingOrUnloading(){return Object.keys(this.splatSceneDownloadPromises).length>0||this.splatSceneDownloadAndBuildPromise!==null||this.splatSceneRemovalPromise!==null}isDisposingOrDisposed(){return this.disposing||this.disposed}addSplatSceneDownloadPromise(e){this.splatSceneDownloadPromises[e.id]=e}removeSplatSceneDownloadPromise(e){delete this.splatSceneDownloadPromises[e.id]}setSplatSceneDownloadAndBuildPromise(e){this.splatSceneDownloadAndBuildPromise=e}clearSplatSceneDownloadAndBuildPromise(){this.splatSceneDownloadAndBuildPromise=null}addSplatScene(e,t={}){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");t.progressiveLoad&&this.splatMesh.scenes&&this.splatMesh.scenes.length>0&&(console.log('addSplatScene(): "progressiveLoad" option ignore because there are multiple splat scenes'),t.progressiveLoad=!1);const n=t.format!==void 0&&t.format!==null?t.format:Rx(e),s=cs.isProgressivelyLoadable(n)&&t.progressiveLoad,o=t.showLoadingUI!==void 0&&t.showLoadingUI!==null?t.showLoadingUI:!0;let l=null;o&&(this.loadingSpinner.removeAllTasks(),l=this.loadingSpinner.addTask("Downloading..."));const u=()=>{this.loadingProgressBar.hide(),this.loadingSpinner.removeAllTasks()},d=(_,v,y)=>{if(o)if(y===xn.Downloading)if(_==100)this.loadingSpinner.setMessageForTask(l,"Download complete!");else if(s)this.loadingSpinner.setMessageForTask(l,"Downloading splats...");else{const T=v?`: ${v}`:"...";this.loadingSpinner.setMessageForTask(l,`Downloading${T}`)}else y===xn.Processing&&this.loadingSpinner.setMessageForTask(l,"Processing splats...")};let f=!1,p=0;const m=(_,v)=>{o&&((_&&s||v&&!s)&&(this.loadingSpinner.removeTask(l),!v&&!f&&this.loadingProgressBar.show()),s&&(v?(f=!0,this.loadingProgressBar.hide()):this.loadingProgressBar.setProgress(p)))},g=(_,v,y)=>{p=_,d(_,v,y),t.onProgress&&t.onProgress(_,v,y)},x=(_,v,y)=>{!s&&t.onProgress&&t.onProgress(0,"0%",xn.Processing);const T={rotation:t.rotation||t.orientation,position:t.position,scale:t.scale,splatAlphaRemovalThreshold:t.splatAlphaRemovalThreshold};return this.addSplatBuffers([_],[T],y,v&&o,o,s,s).then(()=>{!s&&t.onProgress&&t.onProgress(100,"100%",xn.Processing),m(v,y)})};return(s?this.downloadAndBuildSingleSplatSceneProgressiveLoad.bind(this):this.downloadAndBuildSingleSplatSceneStandardLoad.bind(this))(e,n,t.splatAlphaRemovalThreshold,x.bind(this),g,u.bind(this),t.headers)}downloadAndBuildSingleSplatSceneStandardLoad(e,t,n,s,o,l,u){const d=this.downloadSplatSceneToSplatBuffer(e,n,o,!1,void 0,t,u),f=Gf(d.abortHandler);return d.then(p=>(this.removeSplatSceneDownloadPromise(d),s(p,!0,!0).then(()=>{f.resolve(),this.clearSplatSceneDownloadAndBuildPromise()}))).catch(p=>{l&&l(),this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(d),f.reject(this.updateError(p,`Viewer::addSplatScene -> Could not load file ${e}`))}),this.addSplatSceneDownloadPromise(d),this.setSplatSceneDownloadAndBuildPromise(f.promise),f.promise}downloadAndBuildSingleSplatSceneProgressiveLoad(e,t,n,s,o,l,u){let d=0,f=!1;const p=[],m=()=>{if(p.length>0&&!f&&!this.isDisposingOrDisposed()){f=!0;const v=p.shift();s(v.splatBuffer,v.firstBuild,v.finalBuild).then(()=>{f=!1,v.firstBuild?A.resolve():v.finalBuild&&(_.resolve(),this.clearSplatSceneDownloadAndBuildPromise()),p.length>0&&Mi(()=>m())})}},g=(v,y)=>{this.isDisposingOrDisposed()||(y||p.length===0||v.getSplatCount()>p[0].splatBuffer.getSplatCount())&&(p.push({splatBuffer:v,firstBuild:d===0,finalBuild:y}),d++,m())},x=this.downloadSplatSceneToSplatBuffer(e,n,o,!0,g,t,u),A=Gf(x.abortHandler),_=Gf();return this.addSplatSceneDownloadPromise(x),this.setSplatSceneDownloadAndBuildPromise(_.promise),x.then(()=>{this.removeSplatSceneDownloadPromise(x)}).catch(v=>{this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(x);const y=this.updateError(v,"Viewer::addSplatScene -> Could not load one or more scenes");A.reject(y),l&&l(y)}),A.promise}addSplatScenes(e,t=!0,n=void 0){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");const s=e.length,o=[];let l;t&&(this.loadingSpinner.removeAllTasks(),l=this.loadingSpinner.addTask("Downloading..."));const u=(m,g,x,A)=>{o[m]=g;let _=0;for(let v=0;v<s;v++)_+=o[v]||0;_=_/s,x=`${_.toFixed(2)}%`,t&&A===xn.Downloading&&this.loadingSpinner.setMessageForTask(l,_==100?"Download complete!":`Downloading: ${x}`),n&&n(_,x,A)},d=[],f=[];for(let m=0;m<e.length;m++){const g=e[m],x=g.format!==void 0&&g.format!==null?g.format:Rx(g.path),A=this.downloadSplatSceneToSplatBuffer(g.path,g.splatAlphaRemovalThreshold,u.bind(this,m),!1,void 0,x,g.headers);d.push(A),f.push(A.promise)}const p=new ol((m,g)=>{Promise.all(f).then(x=>{t&&this.loadingSpinner.removeTask(l),n&&n(0,"0%",xn.Processing),this.addSplatBuffers(x,e,!0,t,t,!1,!1).then(()=>{n&&n(100,"100%",xn.Processing),this.clearSplatSceneDownloadAndBuildPromise(),m()})}).catch(x=>{t&&this.loadingSpinner.removeTask(l),this.clearSplatSceneDownloadAndBuildPromise(),g(this.updateError(x,"Viewer::addSplatScenes -> Could not load one or more splat scenes."))}).finally(()=>{this.removeSplatSceneDownloadPromise(p)})},m=>{for(let g of d)g.abort(m)});return this.addSplatSceneDownloadPromise(p),this.setSplatSceneDownloadAndBuildPromise(p),p}downloadSplatSceneToSplatBuffer(e,t=1,n=void 0,s=!1,o=void 0,l,u){try{if(l===Zn.Splat||l===Zn.KSplat||l===Zn.Ply){const d=s?!1:this.optimizeSplatData;if(l===Zn.Splat)return Mp.loadFromURL(e,n,s,o,t,this.inMemoryCompressionLevel,d,u);if(l===Zn.KSplat)return Yh.loadFromURL(e,n,s,o,u);if(l===Zn.Ply)return _p.loadFromURL(e,n,s,o,t,this.inMemoryCompressionLevel,d,this.sphericalHarmonicsDegree,u)}else if(l===Zn.Spz)return Ep.loadFromURL(e,n,t,this.inMemoryCompressionLevel,this.optimizeSplatData,this.sphericalHarmonicsDegree,u)}catch(d){throw this.updateError(d,null)}throw new Error(`Viewer::downloadSplatSceneToSplatBuffer -> File format not supported: ${e}`)}static isProgressivelyLoadable(e){return e===Zn.Splat||e===Zn.KSplat||e===Zn.Ply}setupSortWorker(e){if(!this.isDisposingOrDisposed())return new Promise(t=>{const n=this.integerBasedSort?Int32Array:Float32Array,s=e.getSplatCount(),o=e.getMaxSplatCount();this.sortWorker=ww(o,this.sharedMemoryForWorkers,this.enableSIMDInSort,this.integerBasedSort,this.splatMesh.dynamicMode,this.splatSortDistanceMapPrecision),this.sortWorker.onmessage=l=>{if(l.data.sortDone){if(this.sortRunning=!1,this.sharedMemoryForWorkers)this.splatMesh.updateRenderIndexes(this.sortWorkerSortedIndexes,l.data.splatRenderCount);else{const u=new Uint32Array(l.data.sortedIndexes.buffer,0,l.data.splatRenderCount);this.splatMesh.updateRenderIndexes(u,l.data.splatRenderCount)}this.lastSplatSortCount=this.splatSortCount,this.lastSortTime=l.data.sortTime,this.sortPromiseResolver(),this.sortPromiseResolver=null,this.forceRenderNextFrame(),this.runAfterNextSort.length>0&&(this.runAfterNextSort.forEach(u=>{u()}),this.runAfterNextSort.length=0)}else if(l.data.sortCanceled)this.sortRunning=!1;else if(l.data.sortSetupPhase1Complete){this.logLevel>=Ya.Info&&console.log("Sorting web worker WASM setup complete."),this.sharedMemoryForWorkers?(this.sortWorkerSortedIndexes=new Uint32Array(l.data.sortedIndexesBuffer,l.data.sortedIndexesOffset,o),this.sortWorkerIndexesToSort=new Uint32Array(l.data.indexesToSortBuffer,l.data.indexesToSortOffset,o),this.sortWorkerPrecomputedDistances=new n(l.data.precomputedDistancesBuffer,l.data.precomputedDistancesOffset,o),this.sortWorkerTransforms=new Float32Array(l.data.transformsBuffer,l.data.transformsOffset,wt.MaxScenes*16)):(this.sortWorkerIndexesToSort=new Uint32Array(o),this.sortWorkerPrecomputedDistances=new n(o),this.sortWorkerTransforms=new Float32Array(wt.MaxScenes*16));for(let u=0;u<s;u++)this.sortWorkerIndexesToSort[u]=u;if(this.sortWorker.maxSplatCount=o,this.logLevel>=Ya.Info){console.log("Sorting web worker ready.");const u=this.splatMesh.getSplatDataTextures(),d=u.covariances.size,f=u.centerColors.size;console.log("Covariances texture size: "+d.x+" x "+d.y),console.log("Centers/colors texture size: "+f.x+" x "+f.y)}t()}}})}updateError(e,t){return e instanceof bv?e:e instanceof uu?new Error("File type or server does not support progressive loading."):t?new Error(t):e}disposeSortWorker(){this.sortWorker&&this.sortWorker.terminate(),this.sortWorker=null,this.sortPromise=null,this.sortPromiseResolver&&(this.sortPromiseResolver(),this.sortPromiseResolver=null),this.preSortMessages=[],this.sortRunning=!1}removeSplatScene(e,t=!0){return this.removeSplatScenes([e],t)}removeSplatScenes(e,t=!0){if(this.isLoadingOrUnloading())throw new Error("Cannot remove splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot remove splat scene after dispose() is called.");let n;return this.splatSceneRemovalPromise=new Promise((s,o)=>{let l;t&&(this.loadingSpinner.removeAllTasks(),this.loadingSpinner.show(),l=this.loadingSpinner.addTask("Removing splat scene..."));const u=()=>{t&&(this.loadingSpinner.hide(),this.loadingSpinner.removeTask(l))},d=p=>{u(),this.splatSceneRemovalPromise=null,p?o(p):s()},f=()=>this.isDisposingOrDisposed()?(d(),!0):!1;n=this.sortPromise||Promise.resolve(),n.then(()=>{if(f())return;const p=[],m=[],g=[];for(let x=0;x<this.splatMesh.scenes.length;x++){let A=!1;for(let _ of e)if(_===x){A=!0;break}if(!A){const _=this.splatMesh.scenes[x];p.push(_.splatBuffer),m.push(this.splatMesh.sceneOptions[x]),g.push({position:_.position.clone(),quaternion:_.quaternion.clone(),scale:_.scale.clone()})}}this.disposeSortWorker(),this.splatMesh.dispose(),this.sceneRevealMode=qa.Instant,this.createSplatMesh(),this.addSplatBuffers(p,m,!0,!1,!0).then(()=>{f()||(u(),this.splatMesh.scenes.forEach((x,A)=>{x.position.copy(g[A].position),x.quaternion.copy(g[A].quaternion),x.scale.copy(g[A].scale)}),this.splatMesh.updateTransforms(),this.splatRenderReady=!1,this.runSplatSort(!0).then(()=>{if(f()){this.splatRenderReady=!0;return}n=this.sortPromise||Promise.resolve(),n.then(()=>{this.splatRenderReady=!0,d()})}))}).catch(x=>{d(x)})})}),this.splatSceneRemovalPromise}start(){if(this.selfDrivenMode)this.webXRMode?this.renderer.setAnimationLoop(this.selfDrivenUpdateFunc):this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc),this.selfDrivenModeRunning=!0;else throw new Error("Cannot start viewer unless it is in self driven mode.")}stop(){this.selfDrivenMode&&this.selfDrivenModeRunning&&(this.webXRMode?this.renderer.setAnimationLoop(null):cancelAnimationFrame(this.requestFrameId),this.selfDrivenModeRunning=!1)}async dispose(){if(this.isDisposingOrDisposed())return this.disposePromise;let e=[],t=[];for(let n in this.splatSceneDownloadPromises)if(this.splatSceneDownloadPromises.hasOwnProperty(n)){const s=this.splatSceneDownloadPromises[n];t.push(s),e.push(s.promise)}return this.sortPromise&&e.push(this.sortPromise),this.disposing=!0,this.disposePromise=Promise.all(e).finally(()=>{this.stop(),this.orthographicControls&&(this.orthographicControls.dispose(),this.orthographicControls=null),this.perspectiveControls&&(this.perspectiveControls.dispose(),this.perspectiveControls=null),this.controls=null,this.splatMesh&&(this.splatMesh.dispose(),this.splatMesh=null),this.sceneHelper&&(this.sceneHelper.dispose(),this.sceneHelper=null),this.resizeObserver&&(this.resizeObserver.unobserve(this.rootElement),this.resizeObserver=null),this.disposeSortWorker(),this.removeEventHandlers(),this.loadingSpinner.removeAllTasks(),this.loadingSpinner.setContainer(null),this.loadingProgressBar.hide(),this.loadingProgressBar.setContainer(null),this.infoPanel.setContainer(null),this.camera=null,this.threeScene=null,this.splatRenderReady=!1,this.initialized=!1,this.renderer&&(this.usingExternalRenderer||(this.rootElement.removeChild(this.renderer.domElement),this.renderer.dispose()),this.renderer=null),this.usingExternalRenderer||document.body.removeChild(this.rootElement),this.sortWorkerSortedIndexes=null,this.sortWorkerIndexesToSort=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.disposed=!0,this.disposing=!1,this.disposePromise=null}),t.forEach(n=>{n.abort("Scene disposed")}),this.disposePromise}selfDrivenUpdate(){this.selfDrivenMode&&!this.webXRMode&&(this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc)),this.update(),this.shouldRender()?(this.render(),this.consecutiveRenderFrames++):this.consecutiveRenderFrames=0,this.renderNextFrame=!1}forceRenderNextFrame(){this.renderNextFrame=!0}update(e,t){this.dropInMode&&this.updateForDropInMode(e,t),!(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())&&(this.controls&&(this.controls.update(),this.camera.isOrthographicCamera&&!this.usingExternalCamera&&cs.setCameraPositionFromZoom(this.camera,this.camera,this.controls)),this.runSplatSort(),this.updateForRendererSizeChanges(),this.updateSplatMesh(),this.updateMeshCursor(),this.updateFPS(),this.timingSensitiveUpdates(),this.updateInfoPanel(),this.updateControlPlane())}updateForDropInMode(e,t){this.renderer=e,this.splatMesh&&this.splatMesh.setRenderer(this.renderer),this.camera=t,this.controls&&(this.controls.object=t),this.init()}updateControlPlane(){this.showControlPlane?(this.sceneHelper.setControlPlaneVisibility(!0),this.sceneHelper.positionAndOrientControlPlane(this.controls.target,this.camera.up)):this.sceneHelper.setControlPlaneVisibility(!1)}getSplatMesh(){return this.splatMesh}getSplatScene(e){return this.splatMesh.getScene(e)}getSceneCount(){return this.splatMesh.getSceneCount()}isMobile(){return navigator.userAgent.includes("Mobi")}};Fe(cs,"setCameraPositionFromZoom",(function(){const e=new U;return function(t,n,s){const o=1/(n.zoom*.001);e.copy(s.target).sub(t.position).normalize().multiplyScalar(o).negate(),t.position.copy(s.target).add(e)}})()),Fe(cs,"setCameraZoomFromPosition",(function(){const e=new U;return function(t,n,s){const o=e.copy(s.target).sub(n.position).length();t.zoom=1/(o*.001)}})());let $h=cs;/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Uv=(...a)=>a.filter((e,t,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Nw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=An.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:n,className:s="",children:o,iconNode:l,...u},d)=>An.createElement("svg",{ref:d,...Nw,width:e,height:e,stroke:a,strokeWidth:n?Number(t)*24/Number(e):t,className:Uv("lucide",s),...u},[...l.map(([f,p])=>An.createElement(f,p)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=(a,e)=>{const t=An.forwardRef(({className:n,...s},o)=>An.createElement(Uw,{ref:o,iconNode:e,className:Uv(`lucide-${Bw(a)}`,n),...s}));return t.displayName=`${a}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ow=hn("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=hn("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=hn("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=hn("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=hn("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=hn("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=hn("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=hn("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=hn("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=hn("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=hn("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=hn("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=hn("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=hn("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=hn("MousePointer2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=hn("Move3d",[["path",{d:"M5 3v16h16",key:"1mqmf9"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}],["path",{d:"m2 6 3-3 3 3",key:"tkyvxa"}],["path",{d:"m18 16 3 3-3 3",key:"1d4glt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=hn("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=hn("ScanLine",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=hn("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=hn("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=hn("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=hn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Rp({className:a=""}){return V.jsx("div",{className:`flex items-center ${a}`,children:V.jsx("img",{src:"/state-farm-logo.svg",alt:"State Farm",className:"h-[26px] w-auto"})})}const eb={},ls=new URLSearchParams(window.location.search),Eu=eb,tb=ls.get("scene")??Eu.VITE_SCENE_URL??"/demo/merged-rooms.ply",Yo=Eu.VITE_GUIDED_MODE==="1"||ls.get("guided")==="1",kx=Eu.VITE_TIMELINE_URL,zx=Eu.VITE_GEO_CONTEXT_URL;async function nb(a,e,t){const n=await new e_().loadAsync(t.image);n.colorSpace=Ai;const s=Number(ls.get("geoOpacity")??.92),o=new dr({map:n,side:_i,depthWrite:!0,transparent:s<1,opacity:s}),l=Number(ls.get("geoScale")??1),u=new en(new Ys(t.sizeSceneUnits*l,t.sizeSceneUnits*l),o);u.position.set(Number(ls.get("geoX")??t.center[0]),Number(ls.get("geoY")??t.center[1]),Number(ls.get("geoZ")??t.center[2])),u.rotation.z=-Number(ls.get("geoHeading")??t.headingDegrees)*Math.PI/180,u.renderOrder=-10,a.threeScene.add(u);const d=document.createElement("div");d.dataset.viewerUi="true",d.className="pointer-events-none absolute bottom-3 right-3 z-10 max-w-[420px] rounded bg-black/65 px-2 py-1 text-[9px] text-white/70",d.textContent=`${t.attribution} · ${t.classification}`,e.append(d);const f=document.createElement("button");f.dataset.viewerUi="true",f.className="absolute right-5 top-5 z-20 rounded-full border border-white/15 bg-black/75 px-4 py-2 text-xs font-semibold text-white backdrop-blur";let p=!1;const m=()=>{var x,A,_;const g=(A=(x=a.splatMesh)==null?void 0:x.getScene)==null?void 0:A.call(x,0);g&&(g.visible=p),f.textContent=p?"Hide blurry evidence splat":"Show evidence splat",(_=a.forceRenderNextFrame)==null||_.call(a)};return f.onclick=()=>{p=!p,m()},e.append(f),m(),{context:t,dispose:()=>{f.remove(),d.remove(),a.threeScene.remove(u),u.geometry.dispose(),o.dispose(),n.dispose()}}}function ib(a,e,t){const n=new za;a.threeScene.add(n);const s=document.createElement("div");s.dataset.viewerUi="true",s.className="absolute bottom-24 left-1/2 z-20 w-[min(620px,calc(100%-2rem))] -translate-x-1/2 rounded-xl border border-white/10 bg-black/75 px-4 py-3 text-white backdrop-blur";const o=document.createElement("div");o.className="mb-2 text-xs font-semibold";const l=document.createElement("input");l.type="range",l.min="0",l.max=String(Math.max(0,t.frameCount-1)),l.value="0",l.className="w-full accent-red-600",s.append(o,l),e.append(s);const u=d=>{var p;n.traverse(m=>{m instanceof en&&(m.geometry.dispose(),m.material.dispose())}),n.clear();const f=t.frames[d];o.textContent=`Timestep ${d+1} / ${t.frameCount} · source ${f.frameId}`,f.objects.forEach(m=>{const g=new bt().setHSL(Number(m.id)*.137%1,.72,.48),x=new za,A=new en(new hs(m.size[0],m.size[1],m.size[2]*.55),new dr({color:g})),_=new en(new hs(m.size[0]*.48,m.size[1]*.78,m.size[2]*.38),new dr({color:g.clone().offsetHSL(0,-.15,.15)}));_.position.z=-m.size[2]*.38;const v=new HA(new GA(A.geometry),new pv({color:1118481,transparent:!0,opacity:.65}));x.add(A,_,v),x.position.set(m.center[0],m.center[1],m.center[2]),x.rotation.z=-m.yawDegrees*Math.PI/180,n.add(x)}),(p=a.forceRenderNextFrame)==null||p.call(a)};return l.addEventListener("input",()=>u(Number(l.value))),u(0),{dispose:()=>{s.remove(),a.threeScene.remove(n),n.clear()}}}function rb(a,e,t){const n=a.camera,s=t.centers[0];let o=0,l=new U(...t.forwards[0]).normalize(),u=new U(...t.ups[0]).normalize(),d=0,f=0,p=!1,m=0,g=0,x=0,A=performance.now();const _=new Set;let v=!1,y=new U,T=0;const P=()=>{const k=l.clone().applyAxisAngle(u,d).normalize(),Q=u.clone().cross(k).normalize();return k.applyAxisAngle(Q,f).normalize()},C=()=>{var Q,J;const k=P();n.up.copy(u),(Q=n.lookAt)==null||Q.call(n,n.position.x+k.x,n.position.y+k.y,n.position.z+k.z),(J=a.forceRenderNextFrame)==null||J.call(a)},w=(k,Q,J)=>{if(v)return Math.abs(k-y.x)<=T*.48&&Math.abs(Q-y.y)<=T*.48&&J>=y.z-T&&J<=y.z-.15;const O=t.radius*t.radius;return t.centers.some(ee=>{const ye=k-ee[0],Ce=Q-ee[1],be=J-ee[2];return ye*ye+Ce*Ce+be*be<=O})},I=(k,Q,J)=>{const O=n.position.x+k,ee=n.position.y+Q,ye=n.position.z+J;w(O,ee,ye)&&n.position.set(O,ee,ye)},R=()=>{if(v){n.position.set(y.x,y.y,y.z-Math.min(2.4,T*.42)),l=new U(0,0,1),u=new U(0,1,0),d=0,f=0,C();return}const k=t.centers[o]??s,Q=t.forwards[o]??t.forwards[0],J=t.ups[o]??t.ups[0];n.position.set(k[0],k[1],k[2]),l=new U(...Q).normalize(),u=new U(...J).normalize(),d=0,f=0,C()},M=()=>{v=!1,o=(o+1)%t.centers.length,R()},F=(k,Q)=>{v=!0,y=new U(...k),T=Q,n.position.set(y.x,y.y,y.z-Math.min(2.4,Q*.42)),l=new U(0,0,1),u=new U(0,1,0),d=0,f=0,C()},B=k=>{const Q=Math.min((k-A)/1e3,.05);A=k;const J=P(),O=J.clone().addScaledVector(u,-J.dot(u)).normalize(),ee=u.clone().cross(O).normalize(),ye=new U;(_.has("KeyW")||_.has("ArrowUp"))&&ye.add(O),(_.has("KeyS")||_.has("ArrowDown"))&&ye.sub(O),(_.has("KeyD")||_.has("ArrowRight"))&&ye.add(ee),(_.has("KeyA")||_.has("ArrowLeft"))&&ye.sub(ee),(_.has("ControlLeft")||_.has("ControlRight")||_.has("KeyE"))&&(ye.y+=1),(_.has("Space")||_.has("KeyQ"))&&(ye.y-=1),ye.lengthSq()&&(ye.normalize().multiplyScalar(Q*.7),I(ye.x,ye.y,ye.z)),C(),x=requestAnimationFrame(B)},N=k=>{["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","Space","ControlLeft","ControlRight","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(k.code)&&(k.preventDefault(),_.add(k.code))},H=k=>_.delete(k.code),q=()=>_.clear(),Y=k=>{var Q,J;(J=(Q=k.target)==null?void 0:Q.closest)!=null&&J.call(Q,'[data-viewer-ui="true"]')||(k.stopPropagation(),p=!0,m=k.clientX,g=k.clientY,e.setPointerCapture(k.pointerId),e.focus())},G=k=>{k.stopPropagation(),p&&(d+=(k.clientX-m)*.003,f=Math.max(-1.45,Math.min(1.45,f+(k.clientY-g)*.003)),m=k.clientX,g=k.clientY)},K=k=>{k.stopPropagation(),p=!1},j=k=>{var Q,J;(J=(Q=k.target)==null?void 0:Q.closest)!=null&&J.call(Q,'[data-viewer-ui="true"]')||(k.preventDefault(),k.stopPropagation())};return window.addEventListener("keydown",N,!0),window.addEventListener("keyup",H,!0),window.addEventListener("blur",q),e.addEventListener("pointerdown",Y,!0),e.addEventListener("pointermove",G,!0),e.addEventListener("pointerup",K,!0),e.addEventListener("pointercancel",K,!0),e.addEventListener("wheel",j,{passive:!1,capture:!0}),R(),x=requestAnimationFrame(B),{reset:R,nextRecordedView:M,setMapView:F,dispose:()=>{cancelAnimationFrame(x),window.removeEventListener("keydown",N,!0),window.removeEventListener("keyup",H,!0),window.removeEventListener("blur",q),e.removeEventListener("pointerdown",Y,!0),e.removeEventListener("pointermove",G,!0),e.removeEventListener("pointerup",K,!0),e.removeEventListener("pointercancel",K,!0),e.removeEventListener("wheel",j,!0)}}}const sb=[{number:"01",icon:kv,title:"Record every viewpoint",text:"LiDAR dashcams capture synchronized video, metric depth, time, and camera motion before and during the collision."},{number:"02",icon:Ov,title:"Reconstruct each stream",text:"A containerized worker projects depth frames into 3D and builds a time-indexed representation of each camera’s view."},{number:"03",icon:Xw,title:"Align the vehicles",text:"Shared road geometry, landmarks, timestamps, and positioning data place separate recordings into one coordinate system."},{number:"04",icon:jw,title:"Walk through the accident",text:"The claims workspace lets an investigator scrub through time, move freely around the scene, and compare recorded perspectives."}];function ab(){An.useEffect(()=>{const a=document.querySelectorAll("[data-reveal]"),e=new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting&&(n.target.classList.add("is-visible"),e.unobserve(n.target))})},{threshold:.12,rootMargin:"0px 0px -8% 0px"});return a.forEach(t=>e.observe(t)),()=>e.disconnect()},[])}function ob(){ab();const[a,e]=An.useState(!1);return Yo?V.jsx("main",{className:"fixed inset-0 bg-[#beb9b0] text-white",children:V.jsx(Hx,{})}):V.jsxs("main",{className:"overflow-clip bg-[#f6f5f2] text-[#171717]",children:[V.jsx(lb,{menuOpen:a,setMenuOpen:e}),V.jsxs("section",{className:"relative flex min-h-screen items-end overflow-hidden border-b border-black/10 bg-white px-5 pb-14 pt-32 md:px-10 md:pb-20 lg:px-16",children:[V.jsx("div",{className:"hero-grid absolute inset-0 opacity-35","aria-hidden":!0}),V.jsxs("div",{className:"relative z-10 max-w-[1120px]",children:[V.jsxs("div",{className:"mb-9 flex items-center gap-5 text-[11px] font-semibold uppercase tracking-[.16em] text-black/48 animate-enter",children:[V.jsx("span",{className:"h-px w-10 bg-[#d71920]"})," Prototype · July 2026"]}),V.jsx("h1",{className:"max-w-[1120px] text-balance text-[clamp(3rem,7vw,7rem)] font-medium leading-[.94] tracking-[-.06em] animate-enter [animation-delay:100ms]",children:"Walk through an accident from every recorded angle."}),V.jsxs("div",{className:"mt-9 grid max-w-[980px] gap-8 md:grid-cols-[1fr_1.2fr] md:items-end animate-enter [animation-delay:200ms]",children:[V.jsx("p",{className:"text-sm font-semibold leading-6 text-[#d71920]",children:"Multiple LiDAR dashcams → one navigable accident scene"}),V.jsxs("div",{children:[V.jsx("p",{className:"max-w-[650px] text-lg leading-8 text-black/62 md:text-xl",children:"A prototype claims tool that combines synchronized camera and LiDAR recordings from multiple vehicles, reconstructs the collision, and lets an investigator move through the event in 3D."}),V.jsxs("a",{href:"#reconstruction",className:"mt-7 inline-flex items-center gap-3 border-b-2 border-[#d71920] pb-2 text-sm font-semibold text-[#b5121b] transition hover:text-[#d71920]",children:["See the result ",V.jsx(Ow,{className:"h-4 w-4"})]})]})]})]}),V.jsxs("div",{className:"absolute bottom-7 right-8 hidden items-center gap-3 text-[11px] font-semibold uppercase tracking-[.15em] text-black/45 lg:flex",children:["Scroll to investigate ",V.jsx(zw,{className:"h-4 w-4 animate-bounce"})]})]}),V.jsx("section",{id:"prototype",className:"px-5 py-24 md:px-10 md:py-36 lg:px-16",children:V.jsxs("div",{className:"mx-auto max-w-[1380px]",children:[V.jsx(Xo,{index:"01",text:"The idea"}),V.jsxs("div",{className:"mt-16 grid gap-12 lg:grid-cols-[.75fr_1.45fr] lg:gap-24",children:[V.jsx("p",{"data-reveal":!0,className:"reveal text-sm font-semibold uppercase leading-6 tracking-[.14em] text-black/48",children:"Video gives each driver one view. A spatial reconstruction can bring every available view into the same place and time."}),V.jsxs("div",{"data-reveal":!0,className:"reveal",children:[V.jsx("h2",{className:"text-balance text-[clamp(2.4rem,4.5vw,4.7rem)] font-medium leading-[1.02] tracking-[-.05em]",children:"A walkable record of the collision"}),V.jsx("p",{className:"mt-8 max-w-[790px] text-lg leading-8 text-black/58 md:text-xl",children:"Each participating dashcam sees only part of an accident. The proposed system synchronizes those recordings by time, uses LiDAR to preserve metric geometry, and aligns overlapping observations into one shared reconstruction."}),V.jsx("p",{className:"mt-5 max-w-[790px] text-base leading-7 text-black/52",children:"A claims professional could pause at a moment, move anywhere inside the reconstructed scene, inspect vehicle positions and sight lines, and compare what each camera observed."})]})]}),V.jsxs("div",{className:"mt-20 grid border-y border-black/10 sm:grid-cols-3",children:[V.jsx(Jf,{value:"3",label:"Independent views merged"}),V.jsx(Jf,{value:"797,928",label:"Rendered Gaussians"}),V.jsx(Jf,{value:"≈ 5 cm",label:"Registration RMSE"})]})]})}),V.jsx("section",{id:"reconstruction",className:"bg-[#111] px-4 py-5 text-white md:px-6 md:py-6",children:V.jsxs("div",{className:"mx-auto max-w-[1500px] overflow-hidden border border-white/10 bg-[#090909]",children:[V.jsxs("div",{className:"flex flex-col justify-between gap-5 border-b border-white/10 px-6 py-5 md:flex-row md:items-center md:px-8",children:[V.jsxs("div",{children:[V.jsxs("div",{className:"flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.16em] text-white/48",children:[V.jsx("span",{className:"h-2 w-2 rounded-full bg-[#43b875]"})," Live reconstruction"]}),V.jsx("h2",{className:"mt-2 text-xl font-medium tracking-tight md:text-2xl",children:"Registration proof: three live feeds, one walkable space"})]}),V.jsxs("div",{className:"flex flex-wrap gap-2 text-[11px] font-medium text-white/65",children:[V.jsx(eh,{children:"52 MB PLY"}),V.jsx(eh,{children:"WebGL"}),V.jsx(eh,{children:"Real capture"})]})]}),V.jsx(Hx,{})]})}),V.jsx("section",{id:"capture",className:"bg-white px-5 py-24 md:px-10 md:py-36 lg:px-16",children:V.jsxs("div",{className:"mx-auto max-w-[1380px]",children:[V.jsx(Xo,{index:"02",text:"Capture experience"}),V.jsxs("div",{className:"mt-16 grid items-center gap-16 lg:grid-cols-[.9fr_1.1fr] lg:gap-24",children:[V.jsx(cb,{}),V.jsxs("div",{"data-reveal":!0,className:"reveal",children:[V.jsx("p",{className:"text-xs font-semibold uppercase tracking-[.14em] text-[#d71920]",children:"Native Swift + ARKit"}),V.jsx("h2",{className:"mt-7 text-balance text-[clamp(2.5rem,4.5vw,4.8rem)] font-medium leading-[1] tracking-[-.05em]",children:"The LiDAR dashcam prototype"}),V.jsx("p",{className:"mt-8 max-w-[650px] text-lg leading-8 text-black/58",children:"The iPhone stands in for a future LiDAR-enabled dashcam. It records color, depth, confidence data, camera intrinsics, poses, and timestamps together—the measurements needed to place each observation in a shared accident scene."}),V.jsxs("div",{className:"mt-10 space-y-0 border-t border-black/10",children:[V.jsx(nh,{icon:bp,title:"Metric LiDAR depth",text:"Preserves road, vehicle, and surrounding geometry"}),V.jsx(nh,{icon:wp,title:"Synchronized video",text:"Keeps appearance and motion tied to every depth frame"}),V.jsx(nh,{icon:Gw,title:"Time and camera pose",text:"Places observations along a common incident timeline"})]})]})]})]})}),V.jsx("section",{id:"pipeline",className:"px-5 py-24 md:px-10 md:py-36 lg:px-16",children:V.jsxs("div",{className:"mx-auto max-w-[1380px]",children:[V.jsx(Xo,{index:"03",text:"Working pipeline"}),V.jsxs("div",{className:"mt-16 grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-24",children:[V.jsxs("div",{"data-reveal":!0,className:"reveal lg:sticky lg:top-28 lg:self-start",children:[V.jsx("h2",{className:"text-balance text-[clamp(2.5rem,4.5vw,4.8rem)] font-medium leading-[1] tracking-[-.05em]",children:"How it works"}),V.jsx("p",{className:"mt-7 max-w-[570px] text-lg leading-8 text-black/58",children:"The current prototype proves spatial alignment and rendering. The finished pipeline adds clock synchronization and dynamic object tracking so the reconstructed scene can be explored at any moment in the accident."}),V.jsxs("div",{className:"mt-9 flex items-center gap-2 border-l-2 border-[#d71920] pl-4 text-xs font-semibold",children:[V.jsx(Vw,{className:"h-4 w-4 text-[#d71920]"})," Uses existing Open3D algorithms; no custom model training"]})]}),V.jsx("div",{className:"space-y-4",children:sb.map((t,n)=>V.jsx(fb,{...t,delay:n*80},t.number))})]}),V.jsx(db,{})]})}),V.jsx("section",{id:"outcome",className:"bg-[#d71920] px-5 py-24 text-white md:px-10 md:py-36 lg:px-16",children:V.jsxs("div",{className:"mx-auto max-w-[1380px]",children:[V.jsx(Xo,{index:"04",text:"Prototype outcome",light:!0}),V.jsxs("div",{className:"mt-16 grid gap-12 lg:grid-cols-[1.3fr_.7fr] lg:gap-24",children:[V.jsx("h2",{"data-reveal":!0,className:"reveal text-balance text-[clamp(2.8rem,5.5vw,5.8rem)] font-medium leading-[.96] tracking-[-.055em]",children:"The room test proves the spatial foundation."}),V.jsxs("div",{"data-reveal":!0,className:"reveal flex flex-col justify-end",children:[V.jsx("p",{className:"text-lg leading-8 text-white/78",children:"The three recordings were captured separately and had no shared ARKit origin. Aligning them from overlap alone demonstrates the core capability a multi-dashcam system needs: placing independent views into one space."}),V.jsxs("div",{className:"mt-8 space-y-4 text-sm font-medium",children:[V.jsx(jc,{text:"Main room used as the spatial anchor"}),V.jsx(jc,{text:"Hallway registered at 0.217 overlap fitness"}),V.jsx(jc,{text:"Room A registered at 0.398 overlap fitness"}),V.jsx(jc,{text:"Merged output rendered interactively above"})]})]})]})]})}),V.jsx("section",{className:"bg-white px-5 py-24 md:px-10 md:py-36 lg:px-16",children:V.jsxs("div",{className:"mx-auto max-w-[1380px]",children:[V.jsx(Xo,{index:"05",text:"The iPhone is the dashcam"}),V.jsxs("div",{className:"mt-16 grid items-start gap-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-24",children:[V.jsxs("div",{"data-reveal":!0,className:"reveal",children:[V.jsx("h2",{className:"text-balance text-[clamp(2.7rem,4.8vw,5rem)] font-medium leading-[1] tracking-[-.05em]",children:"No separate camera to install. Mount the iPhone and it records the road."}),V.jsx("p",{className:"mt-8 max-w-[720px] text-xl leading-9 text-black/58",children:"The phone is not a remote control for another dashcam—it is the LiDAR dashcam. Mounted with its rear cameras facing the road and connected to power, the iPhone captures video, depth, pose, and time for the entire trip."}),V.jsx("p",{className:"mt-6 max-w-[720px] text-base leading-7 text-black/52",children:"This fits naturally beside Drive Safe & Save. That program already uses the State Farm app, smartphone sensors and location, and a Bluetooth beacon assigned to the vehicle to recognize and record trips automatically. Scene Capture would be a separate, opt-in mode that uses the same trip start signal to begin a rolling camera and LiDAR recording."}),V.jsxs("div",{className:"mt-10 border-y border-black/10",children:[V.jsx(Zf,{label:"Trip detection",current:"Beacon + phone motion",proposed:"Same automatic trigger"}),V.jsx(Zf,{label:"Phone input",current:"Location + driving sensors",proposed:"Video + LiDAR + camera pose"}),V.jsx(Zf,{label:"Purpose",current:"Driving feedback and savings",proposed:"Accident scene reconstruction"})]}),V.jsx("p",{className:"mt-6 max-w-[700px] text-sm leading-6 text-black/45",children:"Scene Capture is a prototype concept, not a current Drive Safe & Save feature. It would require explicit consent, clear retention controls, safe mounting, power management, redaction, encryption, and review before use in a claim."}),V.jsxs("a",{href:"https://www.statefarm.com/customer-care/download-mobile-apps/drive-safe-and-save-mobile",target:"_blank",rel:"noreferrer",className:"mt-7 inline-flex items-center gap-3 text-sm font-semibold text-[#b5121b] hover:text-[#d71920]",children:["How Drive Safe & Save works today ",V.jsx(Zh,{className:"h-4 w-4"})]})]}),V.jsx(ub,{})]}),V.jsxs("div",{className:"mt-28 grid gap-12 border-t border-black/10 pt-16 lg:grid-cols-2 lg:gap-24",children:[V.jsx("h2",{"data-reveal":!0,className:"reveal text-balance text-[clamp(2.4rem,4vw,4.2rem)] font-medium leading-[1] tracking-[-.05em]",children:"An accident scene organized by time"}),V.jsxs("div",{"data-reveal":!0,className:"reveal",children:[V.jsx("p",{className:"text-xl leading-9 text-black/58",children:"The finished experience is not just a static model. A timeline controls the reconstructed event: vehicles move through the scene, available camera coverage changes, and the investigator can pause before, during, or after impact and walk to any useful viewpoint."}),V.jsxs("a",{href:"#reconstruction",className:"mt-9 inline-flex items-center gap-3 text-sm font-semibold text-[#b5121b] hover:text-[#d71920]",children:["Return to the live scene ",V.jsx(Zh,{className:"h-4 w-4"})]})]})]})]})}),V.jsx("footer",{className:"border-t border-black/10 bg-[#f6f5f2] px-5 py-10 md:px-10 lg:px-16",children:V.jsxs("div",{className:"mx-auto flex max-w-[1380px] flex-col gap-7 md:flex-row md:items-end md:justify-between",children:[V.jsxs("div",{children:[V.jsx(Rp,{}),V.jsx("p",{className:"mt-4 max-w-[430px] text-xs leading-5 text-black/45",children:"Independent product prototype exploring spatial capture for claims. State Farm trademarks are the property of State Farm Mutual Automobile Insurance Company."})]}),V.jsx("div",{className:"text-xs font-semibold uppercase tracking-[.14em] text-black/40",children:"iPhone LiDAR · Open3D · Gaussian splats · React"})]})})]})}function lb({menuOpen:a,setMenuOpen:e}){return V.jsxs("header",{className:"fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-md",children:[V.jsxs("div",{className:"mx-auto flex h-[74px] max-w-[1510px] items-center justify-between px-5 md:px-10",children:[V.jsx("a",{href:"#","aria-label":"Home",children:V.jsx(Rp,{})}),V.jsxs("nav",{className:"hidden items-center gap-8 text-xs font-semibold md:flex",children:[V.jsx("a",{className:"nav-link",href:"#prototype",children:"Concept"}),V.jsx("a",{className:"nav-link",href:"#capture",children:"Capture"}),V.jsx("a",{className:"nav-link",href:"#pipeline",children:"Pipeline"}),V.jsx("a",{className:"nav-link",href:"#outcome",children:"Outcome"}),V.jsx("a",{href:"#reconstruction",className:"bg-[#d71920] px-5 py-2.5 text-white transition hover:bg-[#b5121b]",children:"View 3D scene"})]}),V.jsx("button",{className:"grid h-10 w-10 place-items-center rounded-full border border-black/10 md:hidden",onClick:()=>e(!a),"aria-label":"Toggle menu",children:a?V.jsx(Jw,{className:"h-5 w-5"}):V.jsx(qw,{className:"h-5 w-5"})})]}),a&&V.jsx("nav",{className:"border-t border-black/10 bg-white p-5 text-sm font-semibold md:hidden",children:V.jsxs("div",{className:"flex flex-col gap-4",children:[V.jsx("a",{href:"#prototype",onClick:()=>e(!1),children:"Concept"}),V.jsx("a",{href:"#capture",onClick:()=>e(!1),children:"Capture"}),V.jsx("a",{href:"#pipeline",onClick:()=>e(!1),children:"Pipeline"}),V.jsx("a",{href:"#reconstruction",onClick:()=>e(!1),children:"View 3D scene"})]})})]})}function Hx(){const a=An.useRef(null),e=An.useRef(null),t=An.useRef(null),n=An.useRef(null),s=An.useRef(null),o=An.useRef(null),[l,u]=An.useState("idle"),[d,f]=An.useState(0),p=An.useCallback(async()=>{var v,y,T,P,C,w;const A=e.current;if(!A)return;e.current=null,(v=t.current)==null||v.dispose(),t.current=null,(y=n.current)==null||y.dispose(),n.current=null,(T=s.current)==null||T.dispose(),s.current=null;const _=A.renderer;A.usingExternalRenderer=!0;try{await A.dispose()}finally{(P=_==null?void 0:_.dispose)==null||P.call(_),(w=(C=_==null?void 0:_.domElement)==null?void 0:C.remove)==null||w.call(C)}},[]),m=An.useCallback(async()=>{var A,_;if(!(!a.current||e.current||l==="loading")){u("loading"),f(12);try{const v=new $h({rootElement:a.current,cameraUp:[0,-1,-.6],initialCameraPosition:[1,-4,6],initialCameraLookAt:[0,0,0],selfDrivenMode:!0,dynamicScene:!0,enableOptionalEffects:!0,useBuiltInControls:!Yo,sphericalHarmonicsDegree:0,sharedMemoryForWorkers:!1,sceneRevealMode:qa.Gradual,antialiased:!0});if(e.current=v,f(35),await v.addSplatScene(tb,{format:Zn.Ply,progressiveLoad:!0,showLoadingUI:!1,position:[0,0,0],rotation:[1,0,0,0],scale:[1,1,1]}),(_=(A=v.renderer)==null?void 0:A.setClearColor)==null||_.call(A,12499376,1),Yo){v.controls&&(v.controls.enabled=!1),v.perspectiveControls&&(v.perspectiveControls.enabled=!1),v.orthographicControls&&(v.orthographicControls.enabled=!1);const y=await fetch("/runtime/camera-path.json");if(!y.ok)throw new Error("Could not load guided camera path");if(t.current=rb(v,a.current,await y.json()),zx){const T=await fetch(zx);T.ok&&(s.current=await nb(v,a.current,await T.json()),t.current.setMapView(s.current.context.center,s.current.context.sizeSceneUnits))}if(kx){const T=await fetch(kx);T.ok&&(n.current=ib(v,a.current,await T.json()))}}f(94),v.start(),f(100),u("ready")}catch(v){console.error(v),u("error"),await p()}}},[p,l]);An.useEffect(()=>{const A=o.current;if(!A)return;const _=new IntersectionObserver(([v])=>{v.isIntersecting&&(m(),_.disconnect())},{rootMargin:"180px"});return _.observe(A),()=>_.disconnect()},[m]),An.useEffect(()=>()=>{p()},[p]);const g=()=>{var _,v,y,T,P,C;if(t.current)return t.current.reset();const A=e.current;(v=(_=A==null?void 0:A.camera)==null?void 0:_.position)==null||v.set(1,-4,6),(T=(y=A==null?void 0:A.controls)==null?void 0:y.target)==null||T.set(0,0,0),(C=(P=A==null?void 0:A.controls)==null?void 0:P.update)==null||C.call(P)},x=()=>{var A,_;return(_=(A=o.current)==null?void 0:A.requestFullscreen)==null?void 0:_.call(A)};return V.jsxs("div",{ref:o,tabIndex:0,className:Yo?"relative h-screen w-screen bg-[#beb9b0] outline-none":"relative h-[72vh] min-h-[520px] max-h-[880px] bg-[#080808] outline-none",children:[V.jsx("div",{ref:a,className:"absolute inset-0"}),l!=="ready"&&V.jsx("div",{className:"absolute inset-0 z-10 grid place-items-center bg-[#0a0a0a]",children:V.jsx("div",{className:"w-[300px] text-center",children:l==="error"?V.jsxs(V.Fragment,{children:[V.jsx(Tp,{className:"mx-auto h-8 w-8 text-[#d71920]"}),V.jsx("p",{className:"mt-4 text-sm font-semibold",children:"The scene could not be loaded."}),V.jsx("button",{onClick:()=>{u("idle"),m()},className:"mt-5 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black",children:"Try again"})]}):V.jsxs(V.Fragment,{children:[V.jsx("div",{className:"scan-loader mx-auto",children:V.jsx(bp,{className:"h-7 w-7 text-[#d71920]"})}),V.jsx("p",{className:"mt-5 text-sm font-semibold",children:"Loading the merged scene"}),V.jsx("p",{className:"mt-2 text-xs text-white/45",children:"797,928 Gaussians · this may take a moment"}),V.jsx("div",{className:"mt-5 h-1 overflow-hidden rounded-full bg-white/10",children:V.jsx("div",{className:"h-full bg-[#d71920] transition-all duration-700",style:{width:`${d}%`}})})]})})}),l==="ready"&&V.jsxs(V.Fragment,{children:[V.jsxs("div",{className:"pointer-events-none absolute left-5 top-5 rounded-xl border border-white/10 bg-black/65 px-4 py-3 backdrop-blur md:left-7 md:top-7",children:[V.jsx("p",{className:"text-[10px] font-semibold uppercase tracking-[.15em] text-white/45",children:"Interactive scene"}),V.jsx("p",{className:"mt-1.5 text-sm font-medium",children:Yo?"Drag to look · WASD to move · Ctrl up / Space down · boundary locked":"Drag to orbit · scroll to zoom"})]}),V.jsxs("div",{className:"absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 bg-black/75 p-1.5 backdrop-blur",children:[V.jsx(th,{label:"Recorded view",onClick:()=>{var A,_;return(_=(A=t.current)==null?void 0:A.nextRecordedView)==null?void 0:_.call(A)},children:V.jsx(wp,{className:"h-4 w-4"})}),V.jsx(th,{label:"Reset",onClick:g,children:V.jsx(Kw,{className:"h-4 w-4"})}),V.jsx(th,{label:"Fullscreen",onClick:x,children:V.jsx(Qw,{className:"h-4 w-4"})})]})]})]})}function cb(){return V.jsxs("div",{"data-reveal":!0,className:"reveal mx-auto w-full max-w-[440px]",children:[V.jsxs("div",{className:"phone-shell relative mx-auto aspect-[.52] w-[78%] max-w-[330px] overflow-hidden rounded-[54px] border-[9px] border-[#171717] bg-[#222] shadow-2xl",children:[V.jsx("div",{className:"absolute left-1/2 top-2 z-20 h-7 w-24 -translate-x-1/2 rounded-full bg-black"}),V.jsxs("div",{className:"capture-scene absolute inset-0",children:[V.jsx("div",{className:"absolute inset-0 opacity-55",children:V.jsx("div",{className:"lidar-lines"})}),V.jsxs("div",{className:"absolute inset-x-0 top-0 flex items-center gap-3 border-b border-white/15 bg-white/95 px-4 pb-3 pt-12 text-black",children:[V.jsx("div",{className:"grid h-8 w-8 place-items-center rounded-full bg-[#d71920] text-[9px] font-bold text-white",children:"SF"}),V.jsxs("div",{children:[V.jsx("p",{className:"text-xs font-bold tracking-wider text-[#d71920]",children:"STATE FARM"}),V.jsx("p",{className:"text-[10px] text-black/55",children:"Scene Capture"})]}),V.jsxs("div",{className:"ml-auto flex items-center gap-1.5 text-[10px] font-semibold",children:[V.jsx("span",{className:"h-2 w-2 rounded-full bg-[#34a464]"})," Ready"]})]}),V.jsxs("div",{className:"absolute bottom-0 inset-x-0 rounded-t-[28px] bg-white px-5 pb-8 pt-6 text-black",children:[V.jsx("p",{className:"text-lg font-bold",children:"Ready to scan"}),V.jsx("p",{className:"mt-1 text-[11px] text-black/50",children:"Record a complete view of the surrounding area."}),V.jsxs("div",{className:"mt-5 flex h-12 items-center justify-center gap-2 rounded-xl bg-[#d71920] text-sm font-semibold text-white",children:[V.jsx(Hw,{className:"h-5 w-5"})," Start Capture"]}),V.jsxs("div",{className:"mt-3 grid grid-cols-2 gap-2",children:[V.jsxs("div",{className:"phone-action",children:[V.jsx(Tp,{className:"h-4 w-4"})," Preview"]}),V.jsxs("div",{className:"phone-action",children:[V.jsx(Zw,{className:"h-4 w-4"})," Export"]})]})]})]})]}),V.jsx("p",{className:"mt-7 text-center text-xs font-medium text-black/42",children:"SwiftUI capture interface · running on iPhone Pro"})]})}function ub(){return V.jsx("div",{"data-reveal":!0,className:"reveal mx-auto w-full max-w-[430px] lg:pt-4",children:V.jsx("div",{className:"border border-black/15 bg-[#f7f7f7] p-3 shadow-[12px_14px_0_0_#eceae6]",children:V.jsxs("div",{className:"bg-white px-5 pb-5 pt-6",children:[V.jsxs("div",{className:"flex items-center justify-between border-b border-black/10 pb-5",children:[V.jsx(Rp,{}),V.jsx("div",{className:"grid h-9 w-9 place-items-center rounded-full bg-[#f2f2f2] text-xs font-semibold",children:"EA"})]}),V.jsxs("div",{className:"pt-6",children:[V.jsx("p",{className:"text-xs font-semibold uppercase tracking-[.14em] text-black/42",children:"Safe & Save"}),V.jsx("h3",{className:"mt-2 text-2xl font-semibold tracking-tight",children:"Your vehicle"}),V.jsx("div",{className:"mt-5 border border-black/10 p-4",children:V.jsxs("div",{className:"flex items-center justify-between",children:[V.jsxs("div",{children:[V.jsx("p",{className:"text-sm font-semibold",children:"2024 Vehicle"}),V.jsx("p",{className:"mt-1 text-xs text-black/45",children:"Beacon connected"})]}),V.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-[#21945a]"})]})}),V.jsxs("div",{className:"mt-4 border-2 border-[#d71920] bg-[#fffafa] p-5",children:[V.jsxs("div",{className:"flex items-start justify-between gap-5",children:[V.jsx("div",{className:"grid h-10 w-10 shrink-0 place-items-center bg-[#d71920] text-white",children:V.jsx(wp,{className:"h-5 w-5"})}),V.jsx("span",{className:"bg-[#f3dddd] px-2 py-1 text-[9px] font-bold uppercase tracking-[.12em] text-[#a90f18]",children:"Concept"})]}),V.jsx("h4",{className:"mt-5 text-lg font-semibold",children:"Scene Capture"}),V.jsx("p",{className:"mt-2 text-sm leading-6 text-black/55",children:"Use this iPhone as a LiDAR dashcam whenever a trip is active."}),V.jsxs("div",{className:"mt-5 space-y-3 border-y border-black/10 py-4 text-xs",children:[V.jsxs("div",{className:"flex items-center justify-between",children:[V.jsx("span",{className:"text-black/52",children:"Trip detection"}),V.jsx("span",{className:"font-semibold",children:"Automatic"})]}),V.jsxs("div",{className:"flex items-center justify-between",children:[V.jsx("span",{className:"text-black/52",children:"Rolling history"}),V.jsx("span",{className:"font-semibold",children:"Last 10 minutes"})]}),V.jsxs("div",{className:"flex items-center justify-between",children:[V.jsx("span",{className:"text-black/52",children:"Upload"}),V.jsx("span",{className:"font-semibold",children:"Only after an incident"})]})]}),V.jsxs("button",{className:"mt-5 flex w-full items-center justify-center gap-2 bg-[#d71920] px-4 py-3 text-sm font-semibold text-white",children:[V.jsx(bp,{className:"h-4 w-4"})," Set up Scene Capture"]})]}),V.jsx("p",{className:"mt-4 text-center text-[10px] leading-4 text-black/38",children:"Proposed placement inside the existing State Farm app"})]})]})})})}function Zf({label:a,current:e,proposed:t}){return V.jsxs("div",{className:"grid gap-3 border-b border-black/10 py-5 last:border-b-0 sm:grid-cols-[.65fr_1fr_1fr] sm:items-center",children:[V.jsx("p",{className:"text-xs font-semibold uppercase tracking-[.12em] text-black/40",children:a}),V.jsxs("div",{children:[V.jsx("p",{className:"text-[10px] font-semibold uppercase tracking-[.1em] text-black/35",children:"Drive Safe & Save today"}),V.jsx("p",{className:"mt-1.5 text-sm font-medium",children:e})]}),V.jsxs("div",{children:[V.jsx("p",{className:"text-[10px] font-semibold uppercase tracking-[.1em] text-[#b5121b]",children:"Scene Capture proposal"}),V.jsx("p",{className:"mt-1.5 text-sm font-medium",children:t})]})]})}function db(){const a=[{icon:kv,label:"iPhone LiDAR",sub:"Swift + ARKit"},{icon:Ww,label:"Capture ZIP",sub:"Depth + RGB + poses"},{icon:Ov,label:"Docker worker",sub:"Open3D registration"},{icon:Tp,label:"Gaussian PLY",sub:"Merged metric scene"},{icon:Yw,label:"Web viewer",sub:"React + WebGL"}];return V.jsxs("div",{"data-reveal":!0,className:"reveal mt-24 border border-black/10 bg-[#171717] p-6 text-white md:p-10",children:[V.jsxs("div",{className:"flex items-center justify-between",children:[V.jsx("p",{className:"text-xs font-semibold uppercase tracking-[.15em] text-white/45",children:"Prototype architecture"}),V.jsx($w,{className:"h-5 w-5 text-white/35"})]}),V.jsx("div",{className:"mt-10 grid gap-4 md:grid-cols-5",children:a.map(({icon:e,label:t,sub:n},s)=>V.jsxs("div",{className:"relative border border-white/10 bg-white/[.04] p-5",children:[V.jsx(e,{className:"h-5 w-5 text-[#ef3940]"}),V.jsx("p",{className:"mt-8 text-sm font-semibold",children:t}),V.jsx("p",{className:"mt-1 text-[11px] text-white/45",children:n}),s<a.length-1&&V.jsx(Zh,{className:"absolute -right-5 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-white/25 md:block"})]},t))})]})}function Xo({index:a,text:e,light:t=!1}){return V.jsxs("div",{className:`flex items-center gap-4 border-b pb-4 text-[11px] font-semibold uppercase tracking-[.16em] ${t?"border-white/25 text-white/65":"border-black/10 text-black/45"}`,children:[V.jsx("span",{className:t?"text-white":"text-[#d71920]",children:a}),V.jsx("span",{children:e})]})}function Jf({value:a,label:e}){return V.jsxs("div",{"data-reveal":!0,className:"reveal border-b border-black/10 py-8 sm:border-b-0 sm:border-r sm:px-8 sm:first:pl-0 sm:last:border-r-0",children:[V.jsx("p",{className:"text-[clamp(2.4rem,4vw,4.7rem)] font-medium tracking-[-.055em]",children:a}),V.jsx("p",{className:"mt-2 text-xs font-semibold uppercase tracking-[.13em] text-black/42",children:e})]})}function eh({children:a}){return V.jsx("span",{className:"border border-white/10 bg-white/[.06] px-3 py-1.5",children:a})}function th({label:a,children:e,onClick:t}){return V.jsxs("button",{onClick:t,className:"flex h-10 items-center gap-2 rounded-full px-3 text-xs font-medium text-white/70 transition hover:bg-white/10 hover:text-white","aria-label":a,children:[e,V.jsx("span",{className:"hidden sm:inline",children:a})]})}function nh({icon:a,title:e,text:t}){return V.jsxs("div",{className:"grid grid-cols-[auto_1fr] gap-4 border-b border-black/10 py-5",children:[V.jsx("div",{className:"grid h-10 w-10 place-items-center rounded-full bg-[#f4f3f1]",children:V.jsx(a,{className:"h-4 w-4 text-[#d71920]"})}),V.jsxs("div",{children:[V.jsx("p",{className:"text-sm font-semibold",children:e}),V.jsx("p",{className:"mt-1 text-sm text-black/48",children:t})]})]})}function fb({number:a,icon:e,title:t,text:n,delay:s}){return V.jsxs("article",{"data-reveal":!0,className:"reveal group grid gap-6 border-t border-black/15 bg-white p-6 transition duration-300 hover:border-[#d71920] md:grid-cols-[60px_1fr] md:p-8",style:{transitionDelay:`${s}ms`},children:[V.jsxs("div",{className:"flex items-center justify-between md:block",children:[V.jsx("span",{className:"text-xs font-semibold text-[#d71920]",children:a}),V.jsx("div",{className:"mt-0 grid h-11 w-11 place-items-center bg-[#f4f3f1] md:mt-8",children:V.jsx(e,{className:"h-5 w-5"})})]}),V.jsxs("div",{children:[V.jsx("h3",{className:"text-2xl font-medium tracking-tight",children:t}),V.jsx("p",{className:"mt-3 max-w-[600px] text-base leading-7 text-black/52",children:n})]})]})}function jc({text:a}){return V.jsxs("div",{className:"flex items-center gap-3",children:[V.jsx("span",{className:"grid h-5 w-5 place-items-center rounded-full bg-white text-[#d71920]",children:V.jsx(kw,{className:"h-3 w-3 stroke-[3]"})}),V.jsx("span",{children:a})]})}Iy.createRoot(document.getElementById("root")).render(V.jsx(Ey.StrictMode,{children:V.jsx(ob,{})}));
