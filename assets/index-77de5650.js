var po=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Cd=po((Sd,bn)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function aa(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const oe={},Lt=[],Ue=()=>{},go=()=>!1,vo=/^on[^a-z]/,tr=e=>vo.test(e),ia=e=>e.startsWith("onUpdate:"),ve=Object.assign,sa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},bo=Object.prototype.hasOwnProperty,X=(e,t)=>bo.call(e,t),U=Array.isArray,zt=e=>nr(e)==="[object Map]",$i=e=>nr(e)==="[object Set]",B=e=>typeof e=="function",me=e=>typeof e=="string",oa=e=>typeof e=="symbol",le=e=>e!==null&&typeof e=="object",Vi=e=>le(e)&&B(e.then)&&B(e.catch),qi=Object.prototype.toString,nr=e=>qi.call(e),yo=e=>nr(e).slice(8,-1),Xi=e=>nr(e)==="[object Object]",la=e=>me(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,zn=aa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),rr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},xo=/-(\w)/g,Bt=rr(e=>e.replace(xo,(t,n)=>n?n.toUpperCase():"")),_o=/\B([A-Z])/g,$t=rr(e=>e.replace(_o,"-$1").toLowerCase()),Ji=rr(e=>e.charAt(0).toUpperCase()+e.slice(1)),gr=rr(e=>e?`on${Ji(e)}`:""),$n=(e,t)=>!Object.is(e,t),vr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Vn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},wo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ba;const Mr=()=>Ba||(Ba=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ar(e){if(U(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=me(r)?Eo(r):ar(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(me(e))return e;if(le(e))return e}}const ko=/;(?![^(]*\))/g,Ao=/:([^]+)/,Oo=/\/\*[^]*?\*\//g;function Eo(e){const t={};return e.replace(Oo,"").split(ko).forEach(n=>{if(n){const r=n.split(Ao);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ne(e){let t="";if(me(e))t=e;else if(U(e))for(let n=0;n<e.length;n++){const r=Ne(e[n]);r&&(t+=r+" ")}else if(le(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Co="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Po=aa(Co);function Zi(e){return!!e||e===""}const Te=e=>me(e)?e:e==null?"":U(e)||le(e)&&(e.toString===qi||!B(e.toString))?JSON.stringify(e,Gi,2):String(e),Gi=(e,t)=>t&&t.__v_isRef?Gi(e,t.value):zt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:$i(t)?{[`Set(${t.size})`]:[...t.values()]}:le(t)&&!U(t)&&!Xi(t)?String(t):t;let je;class So{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=je,!t&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=je;try{return je=this,t()}finally{je=n}}}on(){je=this}off(){je=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Io(e,t=je){t&&t.active&&t.effects.push(e)}function Mo(){return je}const fa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Qi=e=>(e.w&mt)>0,es=e=>(e.n&mt)>0,To=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=mt},No=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Qi(a)&&!es(a)?a.delete(e):t[n++]=a,a.w&=~mt,a.n&=~mt}t.length=n}},Tr=new WeakMap;let Qt=0,mt=1;const Nr=30;let Le;const Et=Symbol(""),Fr=Symbol("");class ca{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Io(this,r)}run(){if(!this.active)return this.fn();let t=Le,n=ut;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Le,Le=this,ut=!0,mt=1<<++Qt,Qt<=Nr?To(this):Ya(this),this.fn()}finally{Qt<=Nr&&No(this),mt=1<<--Qt,Le=this.parent,ut=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Le===this?this.deferStop=!0:this.active&&(Ya(this),this.onStop&&this.onStop(),this.active=!1)}}function Ya(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ut=!0;const ts=[];function Vt(){ts.push(ut),ut=!1}function qt(){const e=ts.pop();ut=e===void 0?!0:e}function Oe(e,t,n){if(ut&&Le){let r=Tr.get(e);r||Tr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=fa()),ns(a)}}function ns(e,t){let n=!1;Qt<=Nr?es(e)||(e.n|=mt,n=!Qi(e)):n=!e.has(Le),n&&(e.add(Le),Le.deps.push(e))}function Qe(e,t,n,r,a,i){const s=Tr.get(e);if(!s)return;let o=[];if(t==="clear")o=[...s.values()];else if(n==="length"&&U(e)){const l=Number(r);s.forEach((c,d)=>{(d==="length"||d>=l)&&o.push(c)})}else switch(n!==void 0&&o.push(s.get(n)),t){case"add":U(e)?la(n)&&o.push(s.get("length")):(o.push(s.get(Et)),zt(e)&&o.push(s.get(Fr)));break;case"delete":U(e)||(o.push(s.get(Et)),zt(e)&&o.push(s.get(Fr)));break;case"set":zt(e)&&o.push(s.get(Et));break}if(o.length===1)o[0]&&Rr(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);Rr(fa(l))}}function Rr(e,t){const n=U(e)?e:[...e];for(const r of n)r.computed&&Wa(r);for(const r of n)r.computed||Wa(r)}function Wa(e,t){(e!==Le||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Fo=aa("__proto__,__v_isRef,__isVue"),rs=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(oa)),Ro=ua(),jo=ua(!1,!0),Lo=ua(!0),Ka=zo();function zo(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=te(this);for(let i=0,s=this.length;i<s;i++)Oe(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(te)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Vt();const r=te(this)[t].apply(this,n);return qt(),r}}),e}function Do(e){const t=te(this);return Oe(t,"has",e),t.hasOwnProperty(e)}function ua(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?tl:ls:t?os:ss).get(r))return r;const s=U(r);if(!e){if(s&&X(Ka,a))return Reflect.get(Ka,a,i);if(a==="hasOwnProperty")return Do}const o=Reflect.get(r,a,i);return(oa(a)?rs.has(a):Fo(a))||(e||Oe(r,"get",a),t)?o:_e(o)?s&&la(a)?o:o.value:le(o)?e?fs(o):ha(o):o}}const Uo=as(),Ho=as(!0);function as(e=!1){return function(n,r,a,i){let s=n[r];if(ln(s)&&_e(s)&&!_e(a))return!1;if(!e&&(!jr(a)&&!ln(a)&&(s=te(s),a=te(a)),!U(n)&&_e(s)&&!_e(a)))return s.value=a,!0;const o=U(n)&&la(r)?Number(r)<n.length:X(n,r),l=Reflect.set(n,r,a,i);return n===te(i)&&(o?$n(a,s)&&Qe(n,"set",r,a):Qe(n,"add",r,a)),l}}function Bo(e,t){const n=X(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Qe(e,"delete",t,void 0),r}function Yo(e,t){const n=Reflect.has(e,t);return(!oa(t)||!rs.has(t))&&Oe(e,"has",t),n}function Wo(e){return Oe(e,"iterate",U(e)?"length":Et),Reflect.ownKeys(e)}const is={get:Ro,set:Uo,deleteProperty:Bo,has:Yo,ownKeys:Wo},Ko={get:Lo,set(e,t){return!0},deleteProperty(e,t){return!0}},$o=ve({},is,{get:jo,set:Ho}),da=e=>e,ir=e=>Reflect.getPrototypeOf(e);function kn(e,t,n=!1,r=!1){e=e.__v_raw;const a=te(e),i=te(t);n||(t!==i&&Oe(a,"get",t),Oe(a,"get",i));const{has:s}=ir(a),o=r?da:n?va:ga;if(s.call(a,t))return o(e.get(t));if(s.call(a,i))return o(e.get(i));e!==a&&e.get(t)}function An(e,t=!1){const n=this.__v_raw,r=te(n),a=te(e);return t||(e!==a&&Oe(r,"has",e),Oe(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function On(e,t=!1){return e=e.__v_raw,!t&&Oe(te(e),"iterate",Et),Reflect.get(e,"size",e)}function $a(e){e=te(e);const t=te(this);return ir(t).has.call(t,e)||(t.add(e),Qe(t,"add",e,e)),this}function Va(e,t){t=te(t);const n=te(this),{has:r,get:a}=ir(n);let i=r.call(n,e);i||(e=te(e),i=r.call(n,e));const s=a.call(n,e);return n.set(e,t),i?$n(t,s)&&Qe(n,"set",e,t):Qe(n,"add",e,t),this}function qa(e){const t=te(this),{has:n,get:r}=ir(t);let a=n.call(t,e);a||(e=te(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Qe(t,"delete",e,void 0),i}function Xa(){const e=te(this),t=e.size!==0,n=e.clear();return t&&Qe(e,"clear",void 0,void 0),n}function En(e,t){return function(r,a){const i=this,s=i.__v_raw,o=te(s),l=t?da:e?va:ga;return!e&&Oe(o,"iterate",Et),s.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function Cn(e,t,n){return function(...r){const a=this.__v_raw,i=te(a),s=zt(i),o=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,c=a[e](...r),d=n?da:t?va:ga;return!t&&Oe(i,"iterate",l?Fr:Et),{next(){const{value:h,done:y}=c.next();return y?{value:h,done:y}:{value:o?[d(h[0]),d(h[1])]:d(h),done:y}},[Symbol.iterator](){return this}}}}function lt(e){return function(...t){return e==="delete"?!1:this}}function Vo(){const e={get(i){return kn(this,i)},get size(){return On(this)},has:An,add:$a,set:Va,delete:qa,clear:Xa,forEach:En(!1,!1)},t={get(i){return kn(this,i,!1,!0)},get size(){return On(this)},has:An,add:$a,set:Va,delete:qa,clear:Xa,forEach:En(!1,!0)},n={get(i){return kn(this,i,!0)},get size(){return On(this,!0)},has(i){return An.call(this,i,!0)},add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear"),forEach:En(!0,!1)},r={get(i){return kn(this,i,!0,!0)},get size(){return On(this,!0)},has(i){return An.call(this,i,!0)},add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear"),forEach:En(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Cn(i,!1,!1),n[i]=Cn(i,!0,!1),t[i]=Cn(i,!1,!0),r[i]=Cn(i,!0,!0)}),[e,n,t,r]}const[qo,Xo,Jo,Zo]=Vo();function ma(e,t){const n=t?e?Zo:Jo:e?Xo:qo;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(X(n,a)&&a in r?n:r,a,i)}const Go={get:ma(!1,!1)},Qo={get:ma(!1,!0)},el={get:ma(!0,!1)},ss=new WeakMap,os=new WeakMap,ls=new WeakMap,tl=new WeakMap;function nl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rl(e){return e.__v_skip||!Object.isExtensible(e)?0:nl(yo(e))}function ha(e){return ln(e)?e:pa(e,!1,is,Go,ss)}function al(e){return pa(e,!1,$o,Qo,os)}function fs(e){return pa(e,!0,Ko,el,ls)}function pa(e,t,n,r,a){if(!le(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const s=rl(e);if(s===0)return e;const o=new Proxy(e,s===2?r:n);return a.set(e,o),o}function Dt(e){return ln(e)?Dt(e.__v_raw):!!(e&&e.__v_isReactive)}function ln(e){return!!(e&&e.__v_isReadonly)}function jr(e){return!!(e&&e.__v_isShallow)}function cs(e){return Dt(e)||ln(e)}function te(e){const t=e&&e.__v_raw;return t?te(t):e}function us(e){return Vn(e,"__v_skip",!0),e}const ga=e=>le(e)?ha(e):e,va=e=>le(e)?fs(e):e;function il(e){ut&&Le&&(e=te(e),ns(e.dep||(e.dep=fa())))}function sl(e,t){e=te(e);const n=e.dep;n&&Rr(n)}function _e(e){return!!(e&&e.__v_isRef===!0)}function ol(e){return _e(e)?e.value:e}const ll={get:(e,t,n)=>ol(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return _e(a)&&!_e(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function ds(e){return Dt(e)?e:new Proxy(e,ll)}class fl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ca(t,()=>{this._dirty||(this._dirty=!0,sl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=te(this);return il(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function cl(e,t,n=!1){let r,a;const i=B(e);return i?(r=e,a=Ue):(r=e.get,a=e.set),new fl(r,a,i||!a,n)}function dt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){sr(i,t,n)}return a}function He(e,t,n,r){if(B(e)){const i=dt(e,t,n,r);return i&&Vi(i)&&i.catch(s=>{sr(s,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(He(e[i],t,n,r));return a}function sr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const s=t.proxy,o=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,s,o)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){dt(l,null,10,[e,s,o]);return}}ul(e,n,a,r)}function ul(e,t,n,r=!0){console.error(e)}let fn=!1,Lr=!1;const be=[];let qe=0;const Ut=[];let Ze=null,wt=0;const ms=Promise.resolve();let ba=null;function dl(e){const t=ba||ms;return e?t.then(this?e.bind(this):e):t}function ml(e){let t=qe+1,n=be.length;for(;t<n;){const r=t+n>>>1;cn(be[r])<e?t=r+1:n=r}return t}function ya(e){(!be.length||!be.includes(e,fn&&e.allowRecurse?qe+1:qe))&&(e.id==null?be.push(e):be.splice(ml(e.id),0,e),hs())}function hs(){!fn&&!Lr&&(Lr=!0,ba=ms.then(gs))}function hl(e){const t=be.indexOf(e);t>qe&&be.splice(t,1)}function pl(e){U(e)?Ut.push(...e):(!Ze||!Ze.includes(e,e.allowRecurse?wt+1:wt))&&Ut.push(e),hs()}function Ja(e,t=fn?qe+1:0){for(;t<be.length;t++){const n=be[t];n&&n.pre&&(be.splice(t,1),t--,n())}}function ps(e){if(Ut.length){const t=[...new Set(Ut)];if(Ut.length=0,Ze){Ze.push(...t);return}for(Ze=t,Ze.sort((n,r)=>cn(n)-cn(r)),wt=0;wt<Ze.length;wt++)Ze[wt]();Ze=null,wt=0}}const cn=e=>e.id==null?1/0:e.id,gl=(e,t)=>{const n=cn(e)-cn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function gs(e){Lr=!1,fn=!0,be.sort(gl);const t=Ue;try{for(qe=0;qe<be.length;qe++){const n=be[qe];n&&n.active!==!1&&dt(n,null,14)}}finally{qe=0,be.length=0,ps(),fn=!1,ba=null,(be.length||Ut.length)&&gs()}}function vl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||oe;let a=n;const i=t.startsWith("update:"),s=i&&t.slice(7);if(s&&s in r){const d=`${s==="modelValue"?"model":s}Modifiers`,{number:h,trim:y}=r[d]||oe;y&&(a=n.map(_=>me(_)?_.trim():_)),h&&(a=n.map(wo))}let o,l=r[o=gr(t)]||r[o=gr(Bt(t))];!l&&i&&(l=r[o=gr($t(t))]),l&&He(l,e,6,a);const c=r[o+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,He(c,e,6,a)}}function vs(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let s={},o=!1;if(!B(e)){const l=c=>{const d=vs(c,t,!0);d&&(o=!0,ve(s,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!o?(le(e)&&r.set(e,null),null):(U(i)?i.forEach(l=>s[l]=null):ve(s,i),le(e)&&r.set(e,s),s)}function or(e,t){return!e||!tr(t)?!1:(t=t.slice(2).replace(/Once$/,""),X(e,t[0].toLowerCase()+t.slice(1))||X(e,$t(t))||X(e,t))}let Xe=null,lr=null;function qn(e){const t=Xe;return Xe=e,lr=e&&e.type.__scopeId||null,t}function bl(e){lr=e}function yl(){lr=null}function xl(e,t=Xe,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&si(-1);const i=qn(t);let s;try{s=e(...a)}finally{qn(i),r._d&&si(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function br(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[s],slots:o,attrs:l,emit:c,render:d,renderCache:h,data:y,setupState:_,ctx:H,inheritAttrs:R}=e;let W,O;const C=qn(e);try{if(n.shapeFlag&4){const I=a||r;W=Ve(d.call(I,I,h,i,_,y,H)),O=l}else{const I=t;W=Ve(I.length>1?I(i,{attrs:l,slots:o,emit:c}):I(i,null)),O=t.props?l:_l(l)}}catch(I){rn.length=0,sr(I,e,1),W=Se(Pt)}let L=W;if(O&&R!==!1){const I=Object.keys(O),{shapeFlag:Z}=L;I.length&&Z&7&&(s&&I.some(ia)&&(O=wl(O,s)),L=Yt(L,O))}return n.dirs&&(L=Yt(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),W=L,qn(C),W}const _l=e=>{let t;for(const n in e)(n==="class"||n==="style"||tr(n))&&((t||(t={}))[n]=e[n]);return t},wl=(e,t)=>{const n={};for(const r in e)(!ia(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function kl(e,t,n){const{props:r,children:a,component:i}=e,{props:s,children:o,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Za(r,s,c):!!s;if(l&8){const d=t.dynamicProps;for(let h=0;h<d.length;h++){const y=d[h];if(s[y]!==r[y]&&!or(c,y))return!0}}}else return(a||o)&&(!o||!o.$stable)?!0:r===s?!1:r?s?Za(r,s,c):!0:!!s;return!1}function Za(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!or(n,i))return!0}return!1}function Al({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Ol=e=>e.__isSuspense;function El(e,t){t&&t.pendingBranch?U(e)?t.effects.push(...e):t.effects.push(e):pl(e)}const Pn={};function Dn(e,t,n){return bs(e,t,n)}function bs(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:s}=oe){var o;const l=Mo()===((o=ye)==null?void 0:o.scope)?ye:null;let c,d=!1,h=!1;if(_e(e)?(c=()=>e.value,d=jr(e)):Dt(e)?(c=()=>e,r=!0):U(e)?(h=!0,d=e.some(I=>Dt(I)||jr(I)),c=()=>e.map(I=>{if(_e(I))return I.value;if(Dt(I))return Ft(I);if(B(I))return dt(I,l,2)})):B(e)?t?c=()=>dt(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return y&&y(),He(e,l,3,[_])}:c=Ue,t&&r){const I=c;c=()=>Ft(I())}let y,_=I=>{y=C.onStop=()=>{dt(I,l,4)}},H;if(dn)if(_=Ue,t?n&&He(t,l,3,[c(),h?[]:void 0,_]):c(),a==="sync"){const I=_f();H=I.__watcherHandles||(I.__watcherHandles=[])}else return Ue;let R=h?new Array(e.length).fill(Pn):Pn;const W=()=>{if(C.active)if(t){const I=C.run();(r||d||(h?I.some((Z,pe)=>$n(Z,R[pe])):$n(I,R)))&&(y&&y(),He(t,l,3,[I,R===Pn?void 0:h&&R[0]===Pn?[]:R,_]),R=I)}else C.run()};W.allowRecurse=!!t;let O;a==="sync"?O=W:a==="post"?O=()=>Ae(W,l&&l.suspense):(W.pre=!0,l&&(W.id=l.uid),O=()=>ya(W));const C=new ca(c,O);t?n?W():R=C.run():a==="post"?Ae(C.run.bind(C),l&&l.suspense):C.run();const L=()=>{C.stop(),l&&l.scope&&sa(l.scope.effects,C)};return H&&H.push(L),L}function Cl(e,t,n){const r=this.proxy,a=me(e)?e.includes(".")?ys(r,e):()=>r[e]:e.bind(r,r);let i;B(t)?i=t:(i=t.handler,n=t);const s=ye;Wt(this);const o=bs(a,i.bind(r),n);return s?Wt(s):Ct(),o}function ys(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Ft(e,t){if(!le(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),_e(e))Ft(e.value,t);else if(U(e))for(let n=0;n<e.length;n++)Ft(e[n],t);else if($i(e)||zt(e))e.forEach(n=>{Ft(n,t)});else if(Xi(e))for(const n in e)Ft(e[n],t);return e}function bt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let s=0;s<a.length;s++){const o=a[s];i&&(o.oldValue=i[s].value);let l=o.dir[r];l&&(Vt(),He(l,n,8,[e.el,o,e,t]),qt())}}function Pl(e,t){return B(e)?(()=>ve({name:e.name},t,{setup:e}))():e}const Un=e=>!!e.type.__asyncLoader,xs=e=>e.type.__isKeepAlive;function Sl(e,t){_s(e,"a",t)}function Il(e,t){_s(e,"da",t)}function _s(e,t,n=ye){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(fr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)xs(a.parent.vnode)&&Ml(r,t,n,a),a=a.parent}}function Ml(e,t,n,r){const a=fr(t,e,r,!0);ws(()=>{sa(r[t],a)},n)}function fr(e,t,n=ye,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;Vt(),Wt(n);const o=He(t,n,e,s);return Ct(),qt(),o});return r?a.unshift(i):a.push(i),i}}const rt=e=>(t,n=ye)=>(!dn||e==="sp")&&fr(e,(...r)=>t(...r),n),Tl=rt("bm"),Nl=rt("m"),Fl=rt("bu"),Rl=rt("u"),jl=rt("bum"),ws=rt("um"),Ll=rt("sp"),zl=rt("rtg"),Dl=rt("rtc");function Ul(e,t=ye){fr("ec",e,t)}const Hl=Symbol.for("v-ndc");function Ke(e,t,n,r){let a;const i=n&&n[r];if(U(e)||me(e)){a=new Array(e.length);for(let s=0,o=e.length;s<o;s++)a[s]=t(e[s],s,void 0,i&&i[s])}else if(typeof e=="number"){a=new Array(e);for(let s=0;s<e;s++)a[s]=t(s+1,s,void 0,i&&i[s])}else if(le(e))if(e[Symbol.iterator])a=Array.from(e,(s,o)=>t(s,o,void 0,i&&i[o]));else{const s=Object.keys(e);a=new Array(s.length);for(let o=0,l=s.length;o<l;o++){const c=s[o];a[o]=t(e[c],c,o,i&&i[o])}}else a=[];return n&&(n[r]=a),a}const zr=e=>e?Fs(e)?Aa(e)||e.proxy:zr(e.parent):null,nn=ve(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>zr(e.parent),$root:e=>zr(e.root),$emit:e=>e.emit,$options:e=>xa(e),$forceUpdate:e=>e.f||(e.f=()=>ya(e.update)),$nextTick:e=>e.n||(e.n=dl.bind(e.proxy)),$watch:e=>Cl.bind(e)}),yr=(e,t)=>e!==oe&&!e.__isScriptSetup&&X(e,t),Bl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:s,type:o,appContext:l}=e;let c;if(t[0]!=="$"){const _=s[t];if(_!==void 0)switch(_){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(yr(r,t))return s[t]=1,r[t];if(a!==oe&&X(a,t))return s[t]=2,a[t];if((c=e.propsOptions[0])&&X(c,t))return s[t]=3,i[t];if(n!==oe&&X(n,t))return s[t]=4,n[t];Dr&&(s[t]=0)}}const d=nn[t];let h,y;if(d)return t==="$attrs"&&Oe(e,"get",t),d(e);if((h=o.__cssModules)&&(h=h[t]))return h;if(n!==oe&&X(n,t))return s[t]=4,n[t];if(y=l.config.globalProperties,X(y,t))return y[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return yr(a,t)?(a[t]=n,!0):r!==oe&&X(r,t)?(r[t]=n,!0):X(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},s){let o;return!!n[s]||e!==oe&&X(e,s)||yr(t,s)||(o=i[0])&&X(o,s)||X(r,s)||X(nn,s)||X(a.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:X(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ga(e){return U(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Dr=!0;function Yl(e){const t=xa(e),n=e.proxy,r=e.ctx;Dr=!1,t.beforeCreate&&Qa(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:s,watch:o,provide:l,inject:c,created:d,beforeMount:h,mounted:y,beforeUpdate:_,updated:H,activated:R,deactivated:W,beforeDestroy:O,beforeUnmount:C,destroyed:L,unmounted:I,render:Z,renderTracked:pe,renderTriggered:ge,errorCaptured:Ee,serverPrefetch:we,expose:Fe,inheritAttrs:it,components:st,directives:vt,filters:g}=t;if(c&&Wl(c,r,null),s)for(const F in s){const j=s[F];B(j)&&(r[F]=j.bind(n))}if(a){const F=a.call(n,n);le(F)&&(e.data=ha(F))}if(Dr=!0,i)for(const F in i){const j=i[F],$=B(j)?j.bind(n,n):B(j.get)?j.get.bind(n,n):Ue,V=!B(j)&&B(j.set)?j.set.bind(n):Ue,Y=_t({get:$,set:V});Object.defineProperty(r,F,{enumerable:!0,configurable:!0,get:()=>Y.value,set:q=>Y.value=q})}if(o)for(const F in o)ks(o[F],r,n,F);if(l){const F=B(l)?l.call(n):l;Reflect.ownKeys(F).forEach(j=>{Jl(j,F[j])})}d&&Qa(d,e,"c");function D(F,j){U(j)?j.forEach($=>F($.bind(n))):j&&F(j.bind(n))}if(D(Tl,h),D(Nl,y),D(Fl,_),D(Rl,H),D(Sl,R),D(Il,W),D(Ul,Ee),D(Dl,pe),D(zl,ge),D(jl,C),D(ws,I),D(Ll,we),U(Fe))if(Fe.length){const F=e.exposed||(e.exposed={});Fe.forEach(j=>{Object.defineProperty(F,j,{get:()=>n[j],set:$=>n[j]=$})})}else e.exposed||(e.exposed={});Z&&e.render===Ue&&(e.render=Z),it!=null&&(e.inheritAttrs=it),st&&(e.components=st),vt&&(e.directives=vt)}function Wl(e,t,n=Ue){U(e)&&(e=Ur(e));for(const r in e){const a=e[r];let i;le(a)?"default"in a?i=Hn(a.from||r,a.default,!0):i=Hn(a.from||r):i=Hn(a),_e(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):t[r]=i}}function Qa(e,t,n){He(U(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ks(e,t,n,r){const a=r.includes(".")?ys(n,r):()=>n[r];if(me(e)){const i=t[e];B(i)&&Dn(a,i)}else if(B(e))Dn(a,e.bind(n));else if(le(e))if(U(e))e.forEach(i=>ks(i,t,n,r));else{const i=B(e.handler)?e.handler.bind(n):t[e.handler];B(i)&&Dn(a,i,e)}}function xa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,o=i.get(t);let l;return o?l=o:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Xn(l,c,s,!0)),Xn(l,t,s)),le(t)&&i.set(t,l),l}function Xn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Xn(e,i,n,!0),a&&a.forEach(s=>Xn(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const o=Kl[s]||n&&n[s];e[s]=o?o(e[s],t[s]):t[s]}return e}const Kl={data:ei,props:ti,emits:ti,methods:en,computed:en,beforeCreate:xe,created:xe,beforeMount:xe,mounted:xe,beforeUpdate:xe,updated:xe,beforeDestroy:xe,beforeUnmount:xe,destroyed:xe,unmounted:xe,activated:xe,deactivated:xe,errorCaptured:xe,serverPrefetch:xe,components:en,directives:en,watch:Vl,provide:ei,inject:$l};function ei(e,t){return t?e?function(){return ve(B(e)?e.call(this,this):e,B(t)?t.call(this,this):t)}:t:e}function $l(e,t){return en(Ur(e),Ur(t))}function Ur(e){if(U(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function xe(e,t){return e?[...new Set([].concat(e,t))]:t}function en(e,t){return e?ve(Object.create(null),e,t):t}function ti(e,t){return e?U(e)&&U(t)?[...new Set([...e,...t])]:ve(Object.create(null),Ga(e),Ga(t??{})):t}function Vl(e,t){if(!e)return t;if(!t)return e;const n=ve(Object.create(null),e);for(const r in t)n[r]=xe(e[r],t[r]);return n}function As(){return{app:null,config:{isNativeTag:go,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ql=0;function Xl(e,t){return function(r,a=null){B(r)||(r=ve({},r)),a!=null&&!le(a)&&(a=null);const i=As(),s=new Set;let o=!1;const l=i.app={_uid:ql++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:wf,get config(){return i.config},set config(c){},use(c,...d){return s.has(c)||(c&&B(c.install)?(s.add(c),c.install(l,...d)):B(c)&&(s.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,h){if(!o){const y=Se(r,a);return y.appContext=i,d&&t?t(y,c):e(y,c,h),o=!0,l._container=c,c.__vue_app__=l,Aa(y.component)||y.component.proxy}},unmount(){o&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){Jn=l;try{return c()}finally{Jn=null}}};return l}}let Jn=null;function Jl(e,t){if(ye){let n=ye.provides;const r=ye.parent&&ye.parent.provides;r===n&&(n=ye.provides=Object.create(r)),n[e]=t}}function Hn(e,t,n=!1){const r=ye||Xe;if(r||Jn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Jn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&B(t)?t.call(r&&r.proxy):t}}function Zl(e,t,n,r=!1){const a={},i={};Vn(i,ur,1),e.propsDefaults=Object.create(null),Os(e,t,a,i);for(const s in e.propsOptions[0])s in a||(a[s]=void 0);n?e.props=r?a:al(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Gl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:s}}=e,o=te(a),[l]=e.propsOptions;let c=!1;if((r||s>0)&&!(s&16)){if(s&8){const d=e.vnode.dynamicProps;for(let h=0;h<d.length;h++){let y=d[h];if(or(e.emitsOptions,y))continue;const _=t[y];if(l)if(X(i,y))_!==i[y]&&(i[y]=_,c=!0);else{const H=Bt(y);a[H]=Hr(l,o,H,_,e,!1)}else _!==i[y]&&(i[y]=_,c=!0)}}}else{Os(e,t,a,i)&&(c=!0);let d;for(const h in o)(!t||!X(t,h)&&((d=$t(h))===h||!X(t,d)))&&(l?n&&(n[h]!==void 0||n[d]!==void 0)&&(a[h]=Hr(l,o,h,void 0,e,!0)):delete a[h]);if(i!==o)for(const h in i)(!t||!X(t,h))&&(delete i[h],c=!0)}c&&Qe(e,"set","$attrs")}function Os(e,t,n,r){const[a,i]=e.propsOptions;let s=!1,o;if(t)for(let l in t){if(zn(l))continue;const c=t[l];let d;a&&X(a,d=Bt(l))?!i||!i.includes(d)?n[d]=c:(o||(o={}))[d]=c:or(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,s=!0)}if(i){const l=te(n),c=o||oe;for(let d=0;d<i.length;d++){const h=i[d];n[h]=Hr(a,l,h,c[h],e,!X(c,h))}}return s}function Hr(e,t,n,r,a,i){const s=e[n];if(s!=null){const o=X(s,"default");if(o&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&B(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Wt(a),r=c[n]=l.call(null,t),Ct())}else r=l}s[0]&&(i&&!o?r=!1:s[1]&&(r===""||r===$t(n))&&(r=!0))}return r}function Es(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,s={},o=[];let l=!1;if(!B(e)){const d=h=>{l=!0;const[y,_]=Es(h,t,!0);ve(s,y),_&&o.push(..._)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return le(e)&&r.set(e,Lt),Lt;if(U(i))for(let d=0;d<i.length;d++){const h=Bt(i[d]);ni(h)&&(s[h]=oe)}else if(i)for(const d in i){const h=Bt(d);if(ni(h)){const y=i[d],_=s[h]=U(y)||B(y)?{type:y}:ve({},y);if(_){const H=ii(Boolean,_.type),R=ii(String,_.type);_[0]=H>-1,_[1]=R<0||H<R,(H>-1||X(_,"default"))&&o.push(h)}}}const c=[s,o];return le(e)&&r.set(e,c),c}function ni(e){return e[0]!=="$"}function ri(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ai(e,t){return ri(e)===ri(t)}function ii(e,t){return U(t)?t.findIndex(n=>ai(n,e)):B(t)&&ai(t,e)?0:-1}const Cs=e=>e[0]==="_"||e==="$stable",_a=e=>U(e)?e.map(Ve):[Ve(e)],Ql=(e,t,n)=>{if(t._n)return t;const r=xl((...a)=>_a(t(...a)),n);return r._c=!1,r},Ps=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Cs(a))continue;const i=e[a];if(B(i))t[a]=Ql(a,i,r);else if(i!=null){const s=_a(i);t[a]=()=>s}}},Ss=(e,t)=>{const n=_a(t);e.slots.default=()=>n},ef=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=te(t),Vn(t,"_",n)):Ps(t,e.slots={})}else e.slots={},t&&Ss(e,t);Vn(e.slots,ur,1)},tf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,s=oe;if(r.shapeFlag&32){const o=t._;o?n&&o===1?i=!1:(ve(a,t),!n&&o===1&&delete a._):(i=!t.$stable,Ps(t,a)),s=t}else t&&(Ss(e,t),s={default:1});if(i)for(const o in a)!Cs(o)&&!(o in s)&&delete a[o]};function Br(e,t,n,r,a=!1){if(U(e)){e.forEach((y,_)=>Br(y,t&&(U(t)?t[_]:t),n,r,a));return}if(Un(r)&&!a)return;const i=r.shapeFlag&4?Aa(r.component)||r.component.proxy:r.el,s=a?null:i,{i:o,r:l}=e,c=t&&t.r,d=o.refs===oe?o.refs={}:o.refs,h=o.setupState;if(c!=null&&c!==l&&(me(c)?(d[c]=null,X(h,c)&&(h[c]=null)):_e(c)&&(c.value=null)),B(l))dt(l,o,12,[s,d]);else{const y=me(l),_=_e(l);if(y||_){const H=()=>{if(e.f){const R=y?X(h,l)?h[l]:d[l]:l.value;a?U(R)&&sa(R,i):U(R)?R.includes(i)||R.push(i):y?(d[l]=[i],X(h,l)&&(h[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else y?(d[l]=s,X(h,l)&&(h[l]=s)):_&&(l.value=s,e.k&&(d[e.k]=s))};s?(H.id=-1,Ae(H,n)):H()}}}const Ae=El;function nf(e){return rf(e)}function rf(e,t){const n=Mr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:s,createText:o,createComment:l,setText:c,setElementText:d,parentNode:h,nextSibling:y,setScopeId:_=Ue,insertStaticContent:H}=e,R=(f,u,p,b=null,v=null,k=null,E=!1,w=null,A=!!u.dynamicChildren)=>{if(f===u)return;f&&!Zt(f,u)&&(b=G(f),q(f,v,k,!0),f=null),u.patchFlag===-2&&(A=!1,u.dynamicChildren=null);const{type:x,ref:T,shapeFlag:S}=u;switch(x){case cr:W(f,u,p,b);break;case Pt:O(f,u,p,b);break;case xr:f==null&&C(u,p,b,E);break;case ue:st(f,u,p,b,v,k,E,w,A);break;default:S&1?Z(f,u,p,b,v,k,E,w,A):S&6?vt(f,u,p,b,v,k,E,w,A):(S&64||S&128)&&x.process(f,u,p,b,v,k,E,w,A,Be)}T!=null&&v&&Br(T,f&&f.ref,k,u||f,!u)},W=(f,u,p,b)=>{if(f==null)r(u.el=o(u.children),p,b);else{const v=u.el=f.el;u.children!==f.children&&c(v,u.children)}},O=(f,u,p,b)=>{f==null?r(u.el=l(u.children||""),p,b):u.el=f.el},C=(f,u,p,b)=>{[f.el,f.anchor]=H(f.children,u,p,b,f.el,f.anchor)},L=({el:f,anchor:u},p,b)=>{let v;for(;f&&f!==u;)v=y(f),r(f,p,b),f=v;r(u,p,b)},I=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=y(f),a(f),f=p;a(u)},Z=(f,u,p,b,v,k,E,w,A)=>{E=E||u.type==="svg",f==null?pe(u,p,b,v,k,E,w,A):we(f,u,v,k,E,w,A)},pe=(f,u,p,b,v,k,E,w)=>{let A,x;const{type:T,props:S,shapeFlag:N,transition:z,dirs:K}=f;if(A=f.el=s(f.type,k,S&&S.is,S),N&8?d(A,f.children):N&16&&Ee(f.children,A,null,b,v,k&&T!=="foreignObject",E,w),K&&bt(f,null,b,"created"),ge(A,f,f.scopeId,E,b),S){for(const ne in S)ne!=="value"&&!zn(ne)&&i(A,ne,null,S[ne],k,f.children,b,v,fe);"value"in S&&i(A,"value",null,S.value),(x=S.onVnodeBeforeMount)&&$e(x,b,f)}K&&bt(f,null,b,"beforeMount");const ae=(!v||v&&!v.pendingBranch)&&z&&!z.persisted;ae&&z.beforeEnter(A),r(A,u,p),((x=S&&S.onVnodeMounted)||ae||K)&&Ae(()=>{x&&$e(x,b,f),ae&&z.enter(A),K&&bt(f,null,b,"mounted")},v)},ge=(f,u,p,b,v)=>{if(p&&_(f,p),b)for(let k=0;k<b.length;k++)_(f,b[k]);if(v){let k=v.subTree;if(u===k){const E=v.vnode;ge(f,E,E.scopeId,E.slotScopeIds,v.parent)}}},Ee=(f,u,p,b,v,k,E,w,A=0)=>{for(let x=A;x<f.length;x++){const T=f[x]=w?ct(f[x]):Ve(f[x]);R(null,T,u,p,b,v,k,E,w)}},we=(f,u,p,b,v,k,E)=>{const w=u.el=f.el;let{patchFlag:A,dynamicChildren:x,dirs:T}=u;A|=f.patchFlag&16;const S=f.props||oe,N=u.props||oe;let z;p&&yt(p,!1),(z=N.onVnodeBeforeUpdate)&&$e(z,p,u,f),T&&bt(u,f,p,"beforeUpdate"),p&&yt(p,!0);const K=v&&u.type!=="foreignObject";if(x?Fe(f.dynamicChildren,x,w,p,b,K,k):E||j(f,u,w,null,p,b,K,k,!1),A>0){if(A&16)it(w,u,S,N,p,b,v);else if(A&2&&S.class!==N.class&&i(w,"class",null,N.class,v),A&4&&i(w,"style",S.style,N.style,v),A&8){const ae=u.dynamicProps;for(let ne=0;ne<ae.length;ne++){const de=ae[ne],Re=S[de],Tt=N[de];(Tt!==Re||de==="value")&&i(w,de,Re,Tt,v,f.children,p,b,fe)}}A&1&&f.children!==u.children&&d(w,u.children)}else!E&&x==null&&it(w,u,S,N,p,b,v);((z=N.onVnodeUpdated)||T)&&Ae(()=>{z&&$e(z,p,u,f),T&&bt(u,f,p,"updated")},b)},Fe=(f,u,p,b,v,k,E)=>{for(let w=0;w<u.length;w++){const A=f[w],x=u[w],T=A.el&&(A.type===ue||!Zt(A,x)||A.shapeFlag&70)?h(A.el):p;R(A,x,T,null,b,v,k,E,!0)}},it=(f,u,p,b,v,k,E)=>{if(p!==b){if(p!==oe)for(const w in p)!zn(w)&&!(w in b)&&i(f,w,p[w],null,E,u.children,v,k,fe);for(const w in b){if(zn(w))continue;const A=b[w],x=p[w];A!==x&&w!=="value"&&i(f,w,x,A,E,u.children,v,k,fe)}"value"in b&&i(f,"value",p.value,b.value)}},st=(f,u,p,b,v,k,E,w,A)=>{const x=u.el=f?f.el:o(""),T=u.anchor=f?f.anchor:o("");let{patchFlag:S,dynamicChildren:N,slotScopeIds:z}=u;z&&(w=w?w.concat(z):z),f==null?(r(x,p,b),r(T,p,b),Ee(u.children,p,T,v,k,E,w,A)):S>0&&S&64&&N&&f.dynamicChildren?(Fe(f.dynamicChildren,N,p,v,k,E,w),(u.key!=null||v&&u===v.subTree)&&Is(f,u,!0)):j(f,u,p,T,v,k,E,w,A)},vt=(f,u,p,b,v,k,E,w,A)=>{u.slotScopeIds=w,f==null?u.shapeFlag&512?v.ctx.activate(u,p,b,E,A):g(u,p,b,v,k,E,A):m(f,u,A)},g=(f,u,p,b,v,k,E)=>{const w=f.component=mf(f,b,v);if(xs(f)&&(w.ctx.renderer=Be),hf(w),w.asyncDep){if(v&&v.registerDep(w,D),!f.el){const A=w.subTree=Se(Pt);O(null,A,u,p)}return}D(w,f,u,p,v,k,E)},m=(f,u,p)=>{const b=u.component=f.component;if(kl(f,u,p))if(b.asyncDep&&!b.asyncResolved){F(b,u,p);return}else b.next=u,hl(b.update),b.update();else u.el=f.el,b.vnode=u},D=(f,u,p,b,v,k,E)=>{const w=()=>{if(f.isMounted){let{next:T,bu:S,u:N,parent:z,vnode:K}=f,ae=T,ne;yt(f,!1),T?(T.el=K.el,F(f,T,E)):T=K,S&&vr(S),(ne=T.props&&T.props.onVnodeBeforeUpdate)&&$e(ne,z,T,K),yt(f,!0);const de=br(f),Re=f.subTree;f.subTree=de,R(Re,de,h(Re.el),G(Re),f,v,k),T.el=de.el,ae===null&&Al(f,de.el),N&&Ae(N,v),(ne=T.props&&T.props.onVnodeUpdated)&&Ae(()=>$e(ne,z,T,K),v)}else{let T;const{el:S,props:N}=u,{bm:z,m:K,parent:ae}=f,ne=Un(u);if(yt(f,!1),z&&vr(z),!ne&&(T=N&&N.onVnodeBeforeMount)&&$e(T,ae,u),yt(f,!0),S&&ot){const de=()=>{f.subTree=br(f),ot(S,f.subTree,f,v,null)};ne?u.type.__asyncLoader().then(()=>!f.isUnmounted&&de()):de()}else{const de=f.subTree=br(f);R(null,de,p,b,f,v,k),u.el=de.el}if(K&&Ae(K,v),!ne&&(T=N&&N.onVnodeMounted)){const de=u;Ae(()=>$e(T,ae,de),v)}(u.shapeFlag&256||ae&&Un(ae.vnode)&&ae.vnode.shapeFlag&256)&&f.a&&Ae(f.a,v),f.isMounted=!0,u=p=b=null}},A=f.effect=new ca(w,()=>ya(x),f.scope),x=f.update=()=>A.run();x.id=f.uid,yt(f,!0),x()},F=(f,u,p)=>{u.component=f;const b=f.vnode.props;f.vnode=u,f.next=null,Gl(f,u.props,b,p),tf(f,u.children,p),Vt(),Ja(),qt()},j=(f,u,p,b,v,k,E,w,A=!1)=>{const x=f&&f.children,T=f?f.shapeFlag:0,S=u.children,{patchFlag:N,shapeFlag:z}=u;if(N>0){if(N&128){V(x,S,p,b,v,k,E,w,A);return}else if(N&256){$(x,S,p,b,v,k,E,w,A);return}}z&8?(T&16&&fe(x,v,k),S!==x&&d(p,S)):T&16?z&16?V(x,S,p,b,v,k,E,w,A):fe(x,v,k,!0):(T&8&&d(p,""),z&16&&Ee(S,p,b,v,k,E,w,A))},$=(f,u,p,b,v,k,E,w,A)=>{f=f||Lt,u=u||Lt;const x=f.length,T=u.length,S=Math.min(x,T);let N;for(N=0;N<S;N++){const z=u[N]=A?ct(u[N]):Ve(u[N]);R(f[N],z,p,null,v,k,E,w,A)}x>T?fe(f,v,k,!0,!1,S):Ee(u,p,b,v,k,E,w,A,S)},V=(f,u,p,b,v,k,E,w,A)=>{let x=0;const T=u.length;let S=f.length-1,N=T-1;for(;x<=S&&x<=N;){const z=f[x],K=u[x]=A?ct(u[x]):Ve(u[x]);if(Zt(z,K))R(z,K,p,null,v,k,E,w,A);else break;x++}for(;x<=S&&x<=N;){const z=f[S],K=u[N]=A?ct(u[N]):Ve(u[N]);if(Zt(z,K))R(z,K,p,null,v,k,E,w,A);else break;S--,N--}if(x>S){if(x<=N){const z=N+1,K=z<T?u[z].el:b;for(;x<=N;)R(null,u[x]=A?ct(u[x]):Ve(u[x]),p,K,v,k,E,w,A),x++}}else if(x>N)for(;x<=S;)q(f[x],v,k,!0),x++;else{const z=x,K=x,ae=new Map;for(x=K;x<=N;x++){const Pe=u[x]=A?ct(u[x]):Ve(u[x]);Pe.key!=null&&ae.set(Pe.key,x)}let ne,de=0;const Re=N-K+1;let Tt=!1,Da=0;const Jt=new Array(Re);for(x=0;x<Re;x++)Jt[x]=0;for(x=z;x<=S;x++){const Pe=f[x];if(de>=Re){q(Pe,v,k,!0);continue}let We;if(Pe.key!=null)We=ae.get(Pe.key);else for(ne=K;ne<=N;ne++)if(Jt[ne-K]===0&&Zt(Pe,u[ne])){We=ne;break}We===void 0?q(Pe,v,k,!0):(Jt[We-K]=x+1,We>=Da?Da=We:Tt=!0,R(Pe,u[We],p,null,v,k,E,w,A),de++)}const Ua=Tt?af(Jt):Lt;for(ne=Ua.length-1,x=Re-1;x>=0;x--){const Pe=K+x,We=u[Pe],Ha=Pe+1<T?u[Pe+1].el:b;Jt[x]===0?R(null,We,p,Ha,v,k,E,w,A):Tt&&(ne<0||x!==Ua[ne]?Y(We,p,Ha,2):ne--)}}},Y=(f,u,p,b,v=null)=>{const{el:k,type:E,transition:w,children:A,shapeFlag:x}=f;if(x&6){Y(f.component.subTree,u,p,b);return}if(x&128){f.suspense.move(u,p,b);return}if(x&64){E.move(f,u,p,Be);return}if(E===ue){r(k,u,p);for(let S=0;S<A.length;S++)Y(A[S],u,p,b);r(f.anchor,u,p);return}if(E===xr){L(f,u,p);return}if(b!==2&&x&1&&w)if(b===0)w.beforeEnter(k),r(k,u,p),Ae(()=>w.enter(k),v);else{const{leave:S,delayLeave:N,afterLeave:z}=w,K=()=>r(k,u,p),ae=()=>{S(k,()=>{K(),z&&z()})};N?N(k,K,ae):ae()}else r(k,u,p)},q=(f,u,p,b=!1,v=!1)=>{const{type:k,props:E,ref:w,children:A,dynamicChildren:x,shapeFlag:T,patchFlag:S,dirs:N}=f;if(w!=null&&Br(w,null,p,f,!0),T&256){u.ctx.deactivate(f);return}const z=T&1&&N,K=!Un(f);let ae;if(K&&(ae=E&&E.onVnodeBeforeUnmount)&&$e(ae,u,f),T&6)Ce(f.component,p,b);else{if(T&128){f.suspense.unmount(p,b);return}z&&bt(f,null,u,"beforeUnmount"),T&64?f.type.remove(f,u,p,v,Be,b):x&&(k!==ue||S>0&&S&64)?fe(x,u,p,!1,!0):(k===ue&&S&384||!v&&T&16)&&fe(A,u,p),b&&Me(f)}(K&&(ae=E&&E.onVnodeUnmounted)||z)&&Ae(()=>{ae&&$e(ae,u,f),z&&bt(f,null,u,"unmounted")},p)},Me=f=>{const{type:u,el:p,anchor:b,transition:v}=f;if(u===ue){re(p,b);return}if(u===xr){I(f);return}const k=()=>{a(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:E,delayLeave:w}=v,A=()=>E(p,k);w?w(f.el,k,A):A()}else k()},re=(f,u)=>{let p;for(;f!==u;)p=y(f),a(f),f=p;a(u)},Ce=(f,u,p)=>{const{bum:b,scope:v,update:k,subTree:E,um:w}=f;b&&vr(b),v.stop(),k&&(k.active=!1,q(E,f,u,p)),w&&Ae(w,u),Ae(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},fe=(f,u,p,b=!1,v=!1,k=0)=>{for(let E=k;E<f.length;E++)q(f[E],u,p,b,v)},G=f=>f.shapeFlag&6?G(f.component.subTree):f.shapeFlag&128?f.suspense.next():y(f.anchor||f.el),Mt=(f,u,p)=>{f==null?u._vnode&&q(u._vnode,null,null,!0):R(u._vnode||null,f,u,null,null,null,p),Ja(),ps(),u._vnode=f},Be={p:R,um:q,m:Y,r:Me,mt:g,mc:Ee,pc:j,pbc:Fe,n:G,o:e};let Ye,ot;return t&&([Ye,ot]=t(Be)),{render:Mt,hydrate:Ye,createApp:Xl(Mt,Ye)}}function yt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Is(e,t,n=!1){const r=e.children,a=t.children;if(U(r)&&U(a))for(let i=0;i<r.length;i++){const s=r[i];let o=a[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=a[i]=ct(a[i]),o.el=s.el),n||Is(s,o)),o.type===cr&&(o.el=s.el)}}function af(e){const t=e.slice(),n=[0];let r,a,i,s,o;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,s=n.length-1;i<s;)o=i+s>>1,e[n[o]]<c?i=o+1:s=o;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=t[s];return n}const sf=e=>e.__isTeleport,ue=Symbol.for("v-fgt"),cr=Symbol.for("v-txt"),Pt=Symbol.for("v-cmt"),xr=Symbol.for("v-stc"),rn=[];let ze=null;function J(e=!1){rn.push(ze=e?null:[])}function of(){rn.pop(),ze=rn[rn.length-1]||null}let un=1;function si(e){un+=e}function Ms(e){return e.dynamicChildren=un>0?ze||Lt:null,of(),un>0&&ze&&ze.push(e),e}function Q(e,t,n,r,a,i){return Ms(ee(e,t,n,r,a,i,!0))}function Ts(e,t,n,r,a){return Ms(Se(e,t,n,r,a,!0))}function Yr(e){return e?e.__v_isVNode===!0:!1}function Zt(e,t){return e.type===t.type&&e.key===t.key}const ur="__vInternal",Ns=({key:e})=>e??null,Bn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?me(e)||_e(e)||B(e)?{i:Xe,r:e,k:t,f:!!n}:e:null);function ee(e,t=null,n=null,r=0,a=null,i=e===ue?0:1,s=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ns(t),ref:t&&Bn(t),scopeId:lr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Xe};return o?(wa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=me(n)?8:16),un>0&&!s&&ze&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ze.push(l),l}const Se=lf;function lf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Hl)&&(e=Pt),Yr(e)){const o=Yt(e,t,!0);return n&&wa(o,n),un>0&&!i&&ze&&(o.shapeFlag&6?ze[ze.indexOf(e)]=o:ze.push(o)),o.patchFlag|=-2,o}if(bf(e)&&(e=e.__vccOpts),t){t=ff(t);let{class:o,style:l}=t;o&&!me(o)&&(t.class=Ne(o)),le(l)&&(cs(l)&&!U(l)&&(l=ve({},l)),t.style=ar(l))}const s=me(e)?1:Ol(e)?128:sf(e)?64:le(e)?4:B(e)?2:0;return ee(e,t,n,r,a,s,i,!0)}function ff(e){return e?cs(e)||ur in e?ve({},e):e:null}function Yt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:s}=e,o=t?cf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&Ns(o),ref:t&&t.ref?n&&a?U(a)?a.concat(Bn(t)):[a,Bn(t)]:Bn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ue?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Yt(e.ssContent),ssFallback:e.ssFallback&&Yt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Yn(e=" ",t=0){return Se(cr,null,e,t)}function xt(e="",t=!1){return t?(J(),Ts(Pt,null,e)):Se(Pt,null,e)}function Ve(e){return e==null||typeof e=="boolean"?Se(Pt):U(e)?Se(ue,null,e.slice()):typeof e=="object"?ct(e):Se(cr,null,String(e))}function ct(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Yt(e)}function wa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(U(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),wa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(ur in t)?t._ctx=Xe:a===3&&Xe&&(Xe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else B(t)?(t={default:t,_ctx:Xe},n=32):(t=String(t),r&64?(n=16,t=[Yn(t)]):n=8);e.children=t,e.shapeFlag|=n}function cf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Ne([t.class,r.class]));else if(a==="style")t.style=ar([t.style,r.style]);else if(tr(a)){const i=t[a],s=r[a];s&&i!==s&&!(U(i)&&i.includes(s))&&(t[a]=i?[].concat(i,s):s)}else a!==""&&(t[a]=r[a])}return t}function $e(e,t,n,r=null){He(e,t,7,[n,r])}const uf=As();let df=0;function mf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||uf,i={uid:df++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new So(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Es(r,a),emitsOptions:vs(r,a),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:r.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=vl.bind(null,i),e.ce&&e.ce(i),i}let ye=null,ka,Nt,oi="__VUE_INSTANCE_SETTERS__";(Nt=Mr()[oi])||(Nt=Mr()[oi]=[]),Nt.push(e=>ye=e),ka=e=>{Nt.length>1?Nt.forEach(t=>t(e)):Nt[0](e)};const Wt=e=>{ka(e),e.scope.on()},Ct=()=>{ye&&ye.scope.off(),ka(null)};function Fs(e){return e.vnode.shapeFlag&4}let dn=!1;function hf(e,t=!1){dn=t;const{props:n,children:r}=e.vnode,a=Fs(e);Zl(e,n,a,t),ef(e,r);const i=a?pf(e,t):void 0;return dn=!1,i}function pf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=us(new Proxy(e.ctx,Bl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?vf(e):null;Wt(e),Vt();const i=dt(r,e,0,[e.props,a]);if(qt(),Ct(),Vi(i)){if(i.then(Ct,Ct),t)return i.then(s=>{li(e,s,t)}).catch(s=>{sr(s,e,0)});e.asyncDep=i}else li(e,i,t)}else Rs(e,t)}function li(e,t,n){B(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:le(t)&&(e.setupState=ds(t)),Rs(e,n)}let fi;function Rs(e,t,n){const r=e.type;if(!e.render){if(!t&&fi&&!r.render){const a=r.template||xa(e).template;if(a){const{isCustomElement:i,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:l}=r,c=ve(ve({isCustomElement:i,delimiters:o},s),l);r.render=fi(a,c)}}e.render=r.render||Ue}Wt(e),Vt(),Yl(e),qt(),Ct()}function gf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Oe(e,"get","$attrs"),t[n]}}))}function vf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return gf(e)},slots:e.slots,emit:e.emit,expose:t}}function Aa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ds(us(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in nn)return nn[n](e)},has(t,n){return n in t||n in nn}}))}function bf(e){return B(e)&&"__vccOpts"in e}const _t=(e,t)=>cl(e,t,dn);function yf(e,t,n){const r=arguments.length;return r===2?le(t)&&!U(t)?Yr(t)?Se(e,null,[t]):Se(e,t):Se(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Yr(n)&&(n=[n]),Se(e,t,n))}const xf=Symbol.for("v-scx"),_f=()=>Hn(xf),wf="3.3.4",kf="http://www.w3.org/2000/svg",kt=typeof document<"u"?document:null,ci=kt&&kt.createElement("template"),Af={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?kt.createElementNS(kf,e):kt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>kt.createTextNode(e),createComment:e=>kt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>kt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const s=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ci.innerHTML=r?`<svg>${e}</svg>`:e;const o=ci.content;if(r){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Of(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Ef(e,t,n){const r=e.style,a=me(n);if(n&&!a){if(t&&!me(t))for(const i in t)n[i]==null&&Wr(r,i,"");for(const i in n)Wr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ui=/\s*!important$/;function Wr(e,t,n){if(U(n))n.forEach(r=>Wr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Cf(e,t);ui.test(n)?e.setProperty($t(r),n.replace(ui,""),"important"):e[r]=n}}const di=["Webkit","Moz","ms"],_r={};function Cf(e,t){const n=_r[t];if(n)return n;let r=Bt(t);if(r!=="filter"&&r in e)return _r[t]=r;r=Ji(r);for(let a=0;a<di.length;a++){const i=di[a]+r;if(i in e)return _r[t]=i}return t}const mi="http://www.w3.org/1999/xlink";function Pf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(mi,t.slice(6,t.length)):e.setAttributeNS(mi,t,n);else{const i=Po(t);n==null||i&&!Zi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Sf(e,t,n,r,a,i,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,a,i),e[t]=n??"";return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){e._value=n;const c=o==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Zi(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function If(e,t,n,r){e.addEventListener(t,n,r)}function Mf(e,t,n,r){e.removeEventListener(t,n,r)}function Tf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),s=i[t];if(r&&s)s.value=r;else{const[o,l]=Nf(t);if(r){const c=i[t]=jf(r,a);If(e,o,c,l)}else s&&(Mf(e,o,s,l),i[t]=void 0)}}const hi=/(?:Once|Passive|Capture)$/;function Nf(e){let t;if(hi.test(e)){t={};let r;for(;r=e.match(hi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):$t(e.slice(2)),t]}let wr=0;const Ff=Promise.resolve(),Rf=()=>wr||(Ff.then(()=>wr=0),wr=Date.now());function jf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;He(Lf(r,n.value),t,5,[r])};return n.value=e,n.attached=Rf(),n}function Lf(e,t){if(U(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const pi=/^on[a-z]/,zf=(e,t,n,r,a=!1,i,s,o,l)=>{t==="class"?Of(e,r,a):t==="style"?Ef(e,n,r):tr(t)?ia(t)||Tf(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Df(e,t,r,a))?Sf(e,t,r,i,s,o,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Pf(e,t,r,a))};function Df(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&pi.test(t)&&B(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||pi.test(t)&&me(n)?!1:t in e}const Uf=ve({patchProp:zf},Af);let gi;function Hf(){return gi||(gi=nf(Uf))}const Bf=(...e)=>{const t=Hf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Yf(r);if(!a)return;const i=t._component;!B(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const s=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),s},t};function Yf(e){return me(e)?document.querySelector(e):e}const Wf="/calculo-mental/assets/brain-6b6b6ad1.png",Kf="/calculo-mental/assets/dot-8a0d8658.png",$f="/calculo-mental/assets/pinky-8f1f3d2b.png",Vf="/calculo-mental/assets/wakko-eb3aac47.png",qf="/calculo-mental/assets/yakko-79bc4bbd.png";let an,Kr,kr=0;function js(){kr++,console.log(`load_voices attempt: ${kr}`);const e=an.getVoices();e.length&&(Kr=e.find(t=>/es[-_]ES/.test(t.lang))),Kr||(kr<10?setTimeout(()=>js(),250):console.error("`es-ES` voice NOT found."))}"speechSynthesis"in window&&(an=window.speechSynthesis,js());const Ar={speak(e){if(!an||an.speaking)return;const t=e.replace(/(…|[._]{2,})/,""),n=new SpeechSynthesisUtterance(t);n.addEventListener("error",r=>console.error(r)),n.lang="es-ES",n.pitch=1,n.rate=.7,n.voice=Kr,n.volume=1,an.speak(n)}};var bn={};(function e(t,n,r,a){var i=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL);function s(){}function o(g){var m=n.exports.Promise,D=m!==void 0?m:t.Promise;return typeof D=="function"?new D(g):(g(s,s),null)}var l=function(){var g=Math.floor(16.666666666666668),m,D,F={},j=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(m=function($){var V=Math.random();return F[V]=requestAnimationFrame(function Y(q){j===q||j+g-1<q?(j=q,delete F[V],$()):F[V]=requestAnimationFrame(Y)}),V},D=function($){F[$]&&cancelAnimationFrame(F[$])}):(m=function($){return setTimeout($,g)},D=function($){return clearTimeout($)}),{frame:m,cancel:D}}(),c=function(){var g,m,D={};function F(j){function $(V,Y){j.postMessage({options:V||{},callback:Y})}j.init=function(Y){var q=Y.transferControlToOffscreen();j.postMessage({canvas:q},[q])},j.fire=function(Y,q,Me){if(m)return $(Y,null),m;var re=Math.random().toString(36).slice(2);return m=o(function(Ce){function fe(G){G.data.callback===re&&(delete D[re],j.removeEventListener("message",fe),m=null,Me(),Ce())}j.addEventListener("message",fe),$(Y,re),D[re]=fe.bind(null,{data:{callback:re}})}),m},j.reset=function(){j.postMessage({reset:!0});for(var Y in D)D[Y](),delete D[Y]}}return function(){if(g)return g;if(!r&&i){var j=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{g=new Worker(URL.createObjectURL(new Blob([j])))}catch($){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",$),null}F(g)}return g}}(),d={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function h(g,m){return m?m(g):g}function y(g){return g!=null}function _(g,m,D){return h(g&&y(g[m])?g[m]:d[m],D)}function H(g){return g<0?0:Math.floor(g)}function R(g,m){return Math.floor(Math.random()*(m-g))+g}function W(g){return parseInt(g,16)}function O(g){return g.map(C)}function C(g){var m=String(g).replace(/[^0-9a-f]/gi,"");return m.length<6&&(m=m[0]+m[0]+m[1]+m[1]+m[2]+m[2]),{r:W(m.substring(0,2)),g:W(m.substring(2,4)),b:W(m.substring(4,6))}}function L(g){var m=_(g,"origin",Object);return m.x=_(m,"x",Number),m.y=_(m,"y",Number),m}function I(g){g.width=document.documentElement.clientWidth,g.height=document.documentElement.clientHeight}function Z(g){var m=g.getBoundingClientRect();g.width=m.width,g.height=m.height}function pe(g){var m=document.createElement("canvas");return m.style.position="fixed",m.style.top="0px",m.style.left="0px",m.style.pointerEvents="none",m.style.zIndex=g,m}function ge(g,m,D,F,j,$,V,Y,q){g.save(),g.translate(m,D),g.rotate($),g.scale(F,j),g.arc(0,0,1,V,Y,q),g.restore()}function Ee(g){var m=g.angle*(Math.PI/180),D=g.spread*(Math.PI/180);return{x:g.x,y:g.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:g.startVelocity*.5+Math.random()*g.startVelocity,angle2D:-m+(.5*D-Math.random()*D),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:g.color,shape:g.shape,tick:0,totalTicks:g.ticks,decay:g.decay,drift:g.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:g.gravity*3,ovalScalar:.6,scalar:g.scalar}}function we(g,m){m.x+=Math.cos(m.angle2D)*m.velocity+m.drift,m.y+=Math.sin(m.angle2D)*m.velocity+m.gravity,m.wobble+=m.wobbleSpeed,m.velocity*=m.decay,m.tiltAngle+=.1,m.tiltSin=Math.sin(m.tiltAngle),m.tiltCos=Math.cos(m.tiltAngle),m.random=Math.random()+2,m.wobbleX=m.x+10*m.scalar*Math.cos(m.wobble),m.wobbleY=m.y+10*m.scalar*Math.sin(m.wobble);var D=m.tick++/m.totalTicks,F=m.x+m.random*m.tiltCos,j=m.y+m.random*m.tiltSin,$=m.wobbleX+m.random*m.tiltCos,V=m.wobbleY+m.random*m.tiltSin;if(g.fillStyle="rgba("+m.color.r+", "+m.color.g+", "+m.color.b+", "+(1-D)+")",g.beginPath(),m.shape==="circle")g.ellipse?g.ellipse(m.x,m.y,Math.abs($-F)*m.ovalScalar,Math.abs(V-j)*m.ovalScalar,Math.PI/10*m.wobble,0,2*Math.PI):ge(g,m.x,m.y,Math.abs($-F)*m.ovalScalar,Math.abs(V-j)*m.ovalScalar,Math.PI/10*m.wobble,0,2*Math.PI);else if(m.shape==="star")for(var Y=Math.PI/2*3,q=4*m.scalar,Me=8*m.scalar,re=m.x,Ce=m.y,fe=5,G=Math.PI/fe;fe--;)re=m.x+Math.cos(Y)*Me,Ce=m.y+Math.sin(Y)*Me,g.lineTo(re,Ce),Y+=G,re=m.x+Math.cos(Y)*q,Ce=m.y+Math.sin(Y)*q,g.lineTo(re,Ce),Y+=G;else g.moveTo(Math.floor(m.x),Math.floor(m.y)),g.lineTo(Math.floor(m.wobbleX),Math.floor(j)),g.lineTo(Math.floor($),Math.floor(V)),g.lineTo(Math.floor(F),Math.floor(m.wobbleY));return g.closePath(),g.fill(),m.tick<m.totalTicks}function Fe(g,m,D,F,j){var $=m.slice(),V=g.getContext("2d"),Y,q,Me=o(function(re){function Ce(){Y=q=null,V.clearRect(0,0,F.width,F.height),j(),re()}function fe(){r&&!(F.width===a.width&&F.height===a.height)&&(F.width=g.width=a.width,F.height=g.height=a.height),!F.width&&!F.height&&(D(g),F.width=g.width,F.height=g.height),V.clearRect(0,0,F.width,F.height),$=$.filter(function(G){return we(V,G)}),$.length?Y=l.frame(fe):Ce()}Y=l.frame(fe),q=Ce});return{addFettis:function(re){return $=$.concat(re),Me},canvas:g,promise:Me,reset:function(){Y&&l.cancel(Y),q&&q()}}}function it(g,m){var D=!g,F=!!_(m||{},"resize"),j=_(m,"disableForReducedMotion",Boolean),$=i&&!!_(m||{},"useWorker"),V=$?c():null,Y=D?I:Z,q=g&&V?!!g.__confetti_initialized:!1,Me=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,re;function Ce(G,Mt,Be){for(var Ye=_(G,"particleCount",H),ot=_(G,"angle",Number),f=_(G,"spread",Number),u=_(G,"startVelocity",Number),p=_(G,"decay",Number),b=_(G,"gravity",Number),v=_(G,"drift",Number),k=_(G,"colors",O),E=_(G,"ticks",Number),w=_(G,"shapes"),A=_(G,"scalar"),x=L(G),T=Ye,S=[],N=g.width*x.x,z=g.height*x.y;T--;)S.push(Ee({x:N,y:z,angle:ot,spread:f,startVelocity:u,color:k[T%k.length],shape:w[R(0,w.length)],ticks:E,decay:p,gravity:b,drift:v,scalar:A}));return re?re.addFettis(S):(re=Fe(g,S,Y,Mt,Be),re.promise)}function fe(G){var Mt=j||_(G,"disableForReducedMotion",Boolean),Be=_(G,"zIndex",Number);if(Mt&&Me)return o(function(u){u()});D&&re?g=re.canvas:D&&!g&&(g=pe(Be),document.body.appendChild(g)),F&&!q&&Y(g);var Ye={width:g.width,height:g.height};V&&!q&&V.init(g),q=!0,V&&(g.__confetti_initialized=!0);function ot(){if(V){var u={getBoundingClientRect:function(){if(!D)return g.getBoundingClientRect()}};Y(u),V.postMessage({resize:{width:u.width,height:u.height}});return}Ye.width=Ye.height=null}function f(){re=null,F&&t.removeEventListener("resize",ot),D&&g&&(document.body.removeChild(g),g=null,q=!1)}return F&&t.addEventListener("resize",ot,!1),V?V.fire(G,Ye,f):Ce(G,Ye,f)}return fe.reset=function(){V&&V.reset(),re&&re.reset()},fe}var st;function vt(){return st||(st=it(null,{useWorker:!0,resize:!0})),st}n.exports=function(){return vt().apply(this,arguments)},n.exports.reset=function(){vt().reset()},n.exports.create=it})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),bn,!1);const Xf=bn.exports;bn.exports.create;let Or=!1;const vi={particleCount:500,spread:80,angle:90},Gt=(e,t)=>{Xf(Object.assign({},vi,t,{particleCount:Math.floor(vi.particleCount*e)}))},Jf={explode(){Or||(Or=!0,setTimeout(()=>{Gt(.25,{spread:26,startVelocity:55}),Gt(.2,{spread:60}),Gt(.35,{spread:100,decay:.91,scalar:.8}),Gt(.1,{spread:120,startVelocity:25,decay:.92,scalar:1.2}),Gt(.1,{spread:120,startVelocity:45}),setTimeout(()=>{Or=!1},300)},300))}},yn=e=>(bl("data-v-7a194f98"),e=e(),yl(),e),Zf={class:"container-fluid d-flex flex-column vh-100"},Gf={class:"navbar navbar-expand-lg bg-body-tertiary"},Qf={class:"container-fluid"},ec=yn(()=>ee("a",{class:"navbar-brand"},"🤔 Cálculo Mental 😬",-1)),tc={class:"d-flex flex-column flex-grow-1"},nc={class:"d-flex justify-content-center p-2"},rc={class:"d-flex justify-content-center"},ac=["onClick","disabled"],ic={class:"d-flex justify-content-center p-2 confetti-anim"},sc={key:0,class:"d-flex flex-column"},oc=["disabled"],lc={class:"d-flex justify-content-center"},fc={key:1},cc={key:2},uc={class:"d-flex flex-grow-1 align-items-center flex-column justify-content-center"},dc={class:"d-flex"},mc=yn(()=>ee("div",{class:"rect"},null,-1)),hc={class:"rect"},pc=["src"],gc={class:"d-flex"},vc=yn(()=>ee("div",{class:"caja"},null,-1)),bc={class:"caja"},yc={class:"d-flex"},xc={class:"rect"},_c=["src"],wc={class:"d-flex"},kc=yn(()=>ee("div",{class:"caja"},null,-1)),Ac={class:"rect"},Oc={class:"d-flex"},Ec=yn(()=>ee("div",{class:"caja"},null,-1));function Cc(e,t,n,r,a,i){return J(),Q("div",Zf,[ee("div",Gf,[ee("div",Qf,[ee("button",{class:"btn btn-outline-success",onClick:t[0]||(t[0]=(...s)=>i.limpiar_puntaje&&i.limpiar_puntaje(...s))},[Yn("Ptos "),(J(!0),Q(ue,null,Ke(a.puntaje,(s,o)=>(J(),Q(ue,null,[Yn(Te(a.textos[o])+" "+Te(a.puntaje[o]+"  "),1)],64))),256))]),ec])]),ee("div",tc,[ee("div",nc,[ee("h2",{onClick:t[1]||(t[1]=(...s)=>i.pregunta&&i.pregunta(...s))},"¿Cuánto es "+Te(a.a)+" "+Te(a.oper)+" "+Te(a.b)+"?",1)]),ee("div",rc,[(J(!0),Q(ue,null,Ke(a.respuestas,s=>(J(),Q("button",{class:Ne(["btn",i.class_boton_respuesta(s)]),onClick:o=>i.validar(s),disabled:a.correcto},Te(s),11,ac))),256))]),ee("div",ic,[a.correcto?(J(),Q("div",sc,[ee("h2",null,[Yn("🎉 ¡Correcto, es "+Te(a.r)+" ! 🎉",1),ee("button",{class:"btn btn-success mx-2",style:ar(a.correcto?"opacity: 100":"opacity: 0"),onClick:t[2]||(t[2]=(...s)=>i.próxima_suma&&i.próxima_suma(...s)),disabled:!a.correcto},"Siguiente »",12,oc)]),ee("small",lc,Te(a.frase),1)])):a.incorrecto?(J(),Q("h2",fc,"intenta de nuevo… 🧐")):(J(),Q("h2",cc,"…"))]),ee("div",uc,[a.mostrar_ayuda?(J(),Q(ue,{key:0},[ee("div",dc,[mc,a.b>a.a?(J(!0),Q(ue,{key:0},Ke([...Array(a.b-a.a).keys()],s=>(J(),Q("div",hc))),256)):xt("",!0),(J(!0),Q(ue,null,Ke([...Array(a.a).keys()],s=>(J(),Q("div",{class:Ne(["rect",i.class_anim(s)])},[ee("img",{src:i.asset_url(a.imagenes[0])},null,8,pc)],2))),256))]),ee("div",gc,[vc,a.b>a.a?(J(!0),Q(ue,{key:0},Ke([...Array(a.b-a.a).keys()],s=>(J(),Q("div",bc))),256)):xt("",!0),(J(!0),Q(ue,null,Ke([...Array(a.a).keys()],s=>(J(),Q("div",{class:Ne(["caja",i.class_anim(s)])},[ee("p",{class:Ne({ocultar:!a.mostrar_super_ayuda})},Te(s+1),3)],2))),256))]),ee("div",yc,[ee("div",{class:Ne(["rect align-items-end",i.class_anim(a.a+1)])},[ee("h1",null,Te(a.oper),1)],2),a.a>a.b?(J(!0),Q(ue,{key:0},Ke([...Array(a.a-a.b).keys()],s=>(J(),Q("div",xc))),256)):xt("",!0),(J(!0),Q(ue,null,Ke([...Array(a.b).keys()],s=>(J(),Q("div",{class:Ne(["rect",i.class_anim(s+a.a+2)])},[ee("img",{src:i.asset_url(a.imagenes[1])},null,8,_c)],2))),256))]),ee("div",wc,[kc,a.a>a.b?(J(!0),Q(ue,{key:0},Ke([...Array(a.a-a.b).keys()],s=>(J(),Q("div",Ac))),256)):xt("",!0),(J(!0),Q(ue,null,Ke([...Array(a.b).keys()],s=>(J(),Q("div",{class:Ne(["caja",i.class_anim(s)])},[a.oper=="+"?(J(),Q("p",{key:0,class:Ne({ocultar:!a.mostrar_super_ayuda})},Te(s+a.a+1),3)):xt("",!0),a.oper=="-"?(J(),Q("p",{key:1,class:Ne({ocultar:!a.mostrar_super_ayuda})},Te(a.a-s-1),3)):xt("",!0)],2))),256))]),ee("div",Oc,[Ec,a.mostrar_super_ayuda?xt("",!0):(J(),Q("button",{key:0,class:"btn btn-light",onClick:t[3]||(t[3]=s=>a.mostrar_super_ayuda=!0)},"Más ayuda"))])],64)):(J(),Q("button",{key:1,class:"btn btn-light",onClick:t[4]||(t[4]=s=>a.mostrar_ayuda=!0)},"Ayúdame"))])])])}const Pc=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Sc=e=>typeof e=="object"&&e!==null,bi=e=>typeof e=="number";let Ls=["+","-"],Ic=["dot","yakko","wakko","brain","pinky"],Mc=["¿por qué no aparece pinky y cerebro al mismo tiempo?","quiero sopaipillas","ojala tomar la leche pronto","espero no cansarme pronto","esto es muy entretenido","estoy muy contento","¿a que jugaremos después?","jugar ro-blox sería mas entretenido","ya me dio hambre","vamos","esto es muy fácil","que las sumas las haga mi mascota","quiero mucho a mi mascota","mis papás son los mejores"];window.opers=Ls;const Tc={data(){return{a:null,b:null,r:null,mc:null,mi:null,respuestas:[],imagenes:[],mostrar_ayuda:!1,mostrar_super_ayuda:!1,super_ayuda:!1,correcto:!1,incorrecto:!1,rotando:!1,animado:!1,oper:"+",puntaje:{},frase:null,textos:{"+":"sumas","-":"restas"}}},mounted(){this.próxima_suma();try{this.puntaje=JSON.parse(localStorage.getItem("puntaje"))}catch{}Sc(this.puntaje)||(this.puntaje={}),bi(this.puntaje["+"])||(this.puntaje["+"]=0),bi(this.puntaje["-"])||(this.puntaje["-"]=0)},methods:{class_boton_respuesta(e){return e==this.mc?"btn-success":e==this.mi?"btn-danger":"btn-light btn-outline-secondary"},class_anim(e){return`anim anim_${e}`},limpiar_puntaje(){Object.keys(this.puntaje).forEach(e=>{this.puntaje[e]=0})},asset_url(e){return new URL(Object.assign({"../assets/brain.png":Wf,"../assets/dot.png":Kf,"../assets/pinky.png":$f,"../assets/wakko.png":Vf,"../assets/yakko.png":qf})[`../assets/${e}.png`],self.location).href},rotar_transition_left(e){return this.rotando?`transition: 2s ease-in-out; --from-translate: ${4*(this.b+1)}em; --to-translate: 0; }`:null},rotar_transition_right(e){return this.rotando?`transition: 2s ease-in-out; --from-translate: -${4*(this.a+1)}em; --to-translate: 0; }`:null},próxima_suma(){this.oper=Ls.sort(()=>.5-Math.random())[0],this.oper=="+"?(this.a=Math.floor(Math.random()*11),this.b=Math.floor(Math.random()*11),this.r=this.a+this.b):(this.a=Math.floor(Math.random()*11),this.b=Math.floor(Math.random()*11),this.a<this.b&&(this.b=this.a),this.r=this.a-this.b);let e=this.r-Math.floor(Math.random()*10);e=e<0?0:e,this.respuestas=[...Array(10).keys()].map(t=>e+t),this.imagenes=Ic.sort(()=>.5-Math.random()).slice(0,2),this.pregunta(),this.mostrar_super_ayuda=this.mostrar_ayuda=this.correcto=this.incorrecto=this.rotando=!1,this.animado=!0,this.rotando=!1,this.mc=this.mi=null},validar(e){e==this.r?(this.mc=e,this.correcto=!0,Jf.explode(),this.frase=Mc.sort(()=>.5-Math.random()).slice(0,1)[0],!this.mostrar_super_ayuda&&(this.puntaje[this.oper]+=1),localStorage.setItem("puntaje",JSON.stringify(this.puntaje)),Ar.speak(`¡Correcto! es ${this.r}! ${this.frase}`)):(this.mi=e,this.incorrecto=!0,this.mostrar_ayuda?this.mostrar_super_ayuda=!0:this.mostrar_ayuda=!0,Ar.speak("Intenta de nuevo"))},pregunta(){let e=this.oper=="+"?"mas":"menos";Ar.speak(`¿Cuánto es ${this.a} ${e} ${this.b}?`)},rotar(){if(this.oper=="+"){this.rotando=!0,this.animado=!1;let e=this.a,t=this.b;this.a=t,this.b=e,this.pregunta(),this.imagenes=this.imagenes.reverse(),this.cancel_rotar&&clearTimeout(this.cancel_rotar),this.cancel_rotar=setTimeout(()=>{this.rotando=!1},2500)}}}},Nc=Pc(Tc,[["render",Cc],["__scopeId","data-v-7a194f98"]]),Fc={__name:"App",setup(e){return(t,n)=>(J(),Ts(Nc))}};function yi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yi(Object(n),!0).forEach(function(r){he(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Zn(e){"@babel/helpers - typeof";return Zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zn(e)}function Rc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function jc(e,t,n){return t&&xi(e.prototype,t),n&&xi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function he(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Oa(e,t){return zc(e)||Uc(e,t)||zs(e,t)||Bc()}function xn(e){return Lc(e)||Dc(e)||zs(e)||Hc()}function Lc(e){if(Array.isArray(e))return $r(e)}function zc(e){if(Array.isArray(e))return e}function Dc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Uc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,s,o;try{for(n=n.call(e);!(a=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,o=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw o}}return r}}function zs(e,t){if(e){if(typeof e=="string")return $r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $r(e,t)}}function $r(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Hc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var _i=function(){},Ea={},Ds={},Us=null,Hs={mark:_i,measure:_i};try{typeof window<"u"&&(Ea=window),typeof document<"u"&&(Ds=document),typeof MutationObserver<"u"&&(Us=MutationObserver),typeof performance<"u"&&(Hs=performance)}catch{}var Yc=Ea.navigator||{},wi=Yc.userAgent,ki=wi===void 0?"":wi,ht=Ea,se=Ds,Ai=Us,Sn=Hs;ht.document;var at=!!se.documentElement&&!!se.head&&typeof se.addEventListener=="function"&&typeof se.createElement=="function",Bs=~ki.indexOf("MSIE")||~ki.indexOf("Trident/"),In,Mn,Tn,Nn,Fn,et="___FONT_AWESOME___",Vr=16,Ys="fa",Ws="svg-inline--fa",St="data-fa-i2svg",qr="data-fa-pseudo-element",Wc="data-fa-pseudo-element-pending",Ca="data-prefix",Pa="data-icon",Oi="fontawesome-i2svg",Kc="async",$c=["HTML","HEAD","STYLE","SCRIPT"],Ks=function(){try{return!0}catch{return!1}}(),ie="classic",ce="sharp",Sa=[ie,ce];function _n(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ie]}})}var mn=_n((In={},he(In,ie,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),he(In,ce,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),In)),hn=_n((Mn={},he(Mn,ie,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),he(Mn,ce,{solid:"fass",regular:"fasr",light:"fasl"}),Mn)),pn=_n((Tn={},he(Tn,ie,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),he(Tn,ce,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Tn)),Vc=_n((Nn={},he(Nn,ie,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),he(Nn,ce,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Nn)),qc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,$s="fa-layers-text",Xc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Jc=_n((Fn={},he(Fn,ie,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),he(Fn,ce,{900:"fass",400:"fasr",300:"fasl"}),Fn)),Vs=[1,2,3,4,5,6,7,8,9,10],Zc=Vs.concat([11,12,13,14,15,16,17,18,19,20]),Gc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],At={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},gn=new Set;Object.keys(hn[ie]).map(gn.add.bind(gn));Object.keys(hn[ce]).map(gn.add.bind(gn));var Qc=[].concat(Sa,xn(gn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",At.GROUP,At.SWAP_OPACITY,At.PRIMARY,At.SECONDARY]).concat(Vs.map(function(e){return"".concat(e,"x")})).concat(Zc.map(function(e){return"w-".concat(e)})),sn=ht.FontAwesomeConfig||{};function eu(e){var t=se.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function tu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(se&&typeof se.querySelector=="function"){var nu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];nu.forEach(function(e){var t=Oa(e,2),n=t[0],r=t[1],a=tu(eu(n));a!=null&&(sn[r]=a)})}var qs={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ys,replacementClass:Ws,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};sn.familyPrefix&&(sn.cssPrefix=sn.familyPrefix);var Kt=P(P({},qs),sn);Kt.autoReplaceSvg||(Kt.observeMutations=!1);var M={};Object.keys(qs).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){Kt[e]=n,on.forEach(function(r){return r(M)})},get:function(){return Kt[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){Kt.cssPrefix=t,on.forEach(function(n){return n(M)})},get:function(){return Kt.cssPrefix}});ht.FontAwesomeConfig=M;var on=[];function ru(e){return on.push(e),function(){on.splice(on.indexOf(e),1)}}var ft=Vr,Je={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function au(e){if(!(!e||!at)){var t=se.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=se.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=i)}return se.head.insertBefore(t,r),e}}var iu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function vn(){for(var e=12,t="";e-- >0;)t+=iu[Math.random()*62|0];return t}function Xt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ia(e){return e.classList?Xt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Xs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function su(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Xs(e[n]),'" ')},"").trim()}function dr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ma(e){return e.size!==Je.size||e.x!==Je.x||e.y!==Je.y||e.rotate!==Je.rotate||e.flipX||e.flipY}function ou(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(s," ").concat(o)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function lu(e){var t=e.transform,n=e.width,r=n===void 0?Vr:n,a=e.height,i=a===void 0?Vr:a,s=e.startCentered,o=s===void 0?!1:s,l="";return o&&Bs?l+="translate(".concat(t.x/ft-r/2,"em, ").concat(t.y/ft-i/2,"em) "):o?l+="translate(calc(-50% + ".concat(t.x/ft,"em), calc(-50% + ").concat(t.y/ft,"em)) "):l+="translate(".concat(t.x/ft,"em, ").concat(t.y/ft,"em) "),l+="scale(".concat(t.size/ft*(t.flipX?-1:1),", ").concat(t.size/ft*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var fu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Js(){var e=Ys,t=Ws,n=M.cssPrefix,r=M.replacementClass,a=fu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return a}var Ei=!1;function Er(){M.autoAddCss&&!Ei&&(au(Js()),Ei=!0)}var cu={mixout:function(){return{dom:{css:Js,insertCss:Er}}},hooks:function(){return{beforeDOMElementCreation:function(){Er()},beforeI2svg:function(){Er()}}}},tt=ht||{};tt[et]||(tt[et]={});tt[et].styles||(tt[et].styles={});tt[et].hooks||(tt[et].hooks={});tt[et].shims||(tt[et].shims=[]);var De=tt[et],Zs=[],uu=function e(){se.removeEventListener("DOMContentLoaded",e),Gn=1,Zs.map(function(t){return t()})},Gn=!1;at&&(Gn=(se.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(se.readyState),Gn||se.addEventListener("DOMContentLoaded",uu));function du(e){at&&(Gn?setTimeout(e,0):Zs.push(e))}function wn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Xs(e):"<".concat(t," ").concat(su(r),">").concat(i.map(wn).join(""),"</").concat(t,">")}function Ci(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var mu=function(t,n){return function(r,a,i,s){return t.call(n,r,a,i,s)}},Cr=function(t,n,r,a){var i=Object.keys(t),s=i.length,o=a!==void 0?mu(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<s;l++)c=i[l],d=o(d,t[c],c,t);return d};function hu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Xr(e){var t=hu(e);return t.length===1?t[0].toString(16):null}function pu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Pi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Jr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Pi(t);typeof De.hooks.addPack=="function"&&!a?De.hooks.addPack(e,Pi(t)):De.styles[e]=P(P({},De.styles[e]||{}),i),e==="fas"&&Jr("fa",t)}var Rn,jn,Ln,Rt=De.styles,gu=De.shims,vu=(Rn={},he(Rn,ie,Object.values(pn[ie])),he(Rn,ce,Object.values(pn[ce])),Rn),Ta=null,Gs={},Qs={},eo={},to={},no={},bu=(jn={},he(jn,ie,Object.keys(mn[ie])),he(jn,ce,Object.keys(mn[ce])),jn);function yu(e){return~Qc.indexOf(e)}function xu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!yu(a)?a:null}var ro=function(){var t=function(i){return Cr(Rt,function(s,o,l){return s[l]=Cr(o,i,{}),s},{})};Gs=t(function(a,i,s){if(i[3]&&(a[i[3]]=s),i[2]){var o=i[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){a[l.toString(16)]=s})}return a}),Qs=t(function(a,i,s){if(a[s]=s,i[2]){var o=i[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){a[l]=s})}return a}),no=t(function(a,i,s){var o=i[2];return a[s]=s,o.forEach(function(l){a[l]=s}),a});var n="far"in Rt||M.autoFetchSvg,r=Cr(gu,function(a,i){var s=i[0],o=i[1],l=i[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(a.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});eo=r.names,to=r.unicodes,Ta=mr(M.styleDefault,{family:M.familyDefault})};ru(function(e){Ta=mr(e.styleDefault,{family:M.familyDefault})});ro();function Na(e,t){return(Gs[e]||{})[t]}function _u(e,t){return(Qs[e]||{})[t]}function Ot(e,t){return(no[e]||{})[t]}function ao(e){return eo[e]||{prefix:null,iconName:null}}function wu(e){var t=to[e],n=Na("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function pt(){return Ta}var Fa=function(){return{prefix:null,iconName:null,rest:[]}};function mr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ie:n,a=mn[r][e],i=hn[r][e]||hn[r][a],s=e in De.styles?e:null;return i||s||null}var Si=(Ln={},he(Ln,ie,Object.keys(pn[ie])),he(Ln,ce,Object.keys(pn[ce])),Ln);function hr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},he(t,ie,"".concat(M.cssPrefix,"-").concat(ie)),he(t,ce,"".concat(M.cssPrefix,"-").concat(ce)),t),s=null,o=ie;(e.includes(i[ie])||e.some(function(c){return Si[ie].includes(c)}))&&(o=ie),(e.includes(i[ce])||e.some(function(c){return Si[ce].includes(c)}))&&(o=ce);var l=e.reduce(function(c,d){var h=xu(M.cssPrefix,d);if(Rt[d]?(d=vu[o].includes(d)?Vc[o][d]:d,s=d,c.prefix=d):bu[o].indexOf(d)>-1?(s=d,c.prefix=mr(d,{family:o})):h?c.iconName=h:d!==M.replacementClass&&d!==i[ie]&&d!==i[ce]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var y=s==="fa"?ao(c.iconName):{},_=Ot(c.prefix,c.iconName);y.prefix&&(s=null),c.iconName=y.iconName||_||c.iconName,c.prefix=y.prefix||c.prefix,c.prefix==="far"&&!Rt.far&&Rt.fas&&!M.autoFetchSvg&&(c.prefix="fas")}return c},Fa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===ce&&(Rt.fass||M.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ot(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=pt()||"fas"),l}var ku=function(){function e(){Rc(this,e),this.definitions={}}return jc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var s=a.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=P(P({},n.definitions[o]||{}),s[o]),Jr(o,s[o]);var l=pn[ie][o];l&&Jr(l,s[o]),ro()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var s=a[i],o=s.prefix,l=s.iconName,c=s.icon,d=c[2];n[o]||(n[o]={}),d.length>0&&d.forEach(function(h){typeof h=="string"&&(n[o][h]=c)}),n[o][l]=c}),n}}]),e}(),Ii=[],jt={},Ht={},Au=Object.keys(Ht);function Ou(e,t){var n=t.mixoutsTo;return Ii=e,jt={},Object.keys(Ht).forEach(function(r){Au.indexOf(r)===-1&&delete Ht[r]}),Ii.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(s){typeof a[s]=="function"&&(n[s]=a[s]),Zn(a[s])==="object"&&Object.keys(a[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=a[s][o]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(s){jt[s]||(jt[s]=[]),jt[s].push(i[s])})}r.provides&&r.provides(Ht)}),n}function Zr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=jt[e]||[];return i.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function It(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=jt[e]||[];a.forEach(function(i){i.apply(null,n)})}function nt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ht[e]?Ht[e].apply(null,t):void 0}function Gr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||pt();if(t)return t=Ot(n,t)||t,Ci(io.definitions,n,t)||Ci(De.styles,n,t)}var io=new ku,Eu=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,It("noAuto")},Cu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return at?(It("beforeI2svg",t),nt("pseudoElements2svg",t),nt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,du(function(){Su({autoReplaceSvgRoot:n}),It("watch",t)})}},Pu={icon:function(t){if(t===null)return null;if(Zn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ot(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=mr(t[0]);return{prefix:r,iconName:Ot(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(qc))){var a=hr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||pt(),iconName:Ot(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=pt();return{prefix:i,iconName:Ot(i,t)||t}}}},Ie={noAuto:Eu,config:M,dom:Cu,parse:Pu,library:io,findIconDefinition:Gr,toHtml:wn},Su=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?se:n;(Object.keys(De.styles).length>0||M.autoFetchSvg)&&at&&M.autoReplaceSvg&&Ie.dom.i2svg({node:r})};function pr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return wn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(at){var r=se.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Iu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,s=e.transform;if(Ma(s)&&n.found&&!r.found){var o=n.width,l=n.height,c={x:o/l/2,y:.5};a.style=dr(P(P({},i),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Mu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,s=i===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P(P({},a),{},{id:s}),children:r}]}]}function Ra(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,s=e.transform,o=e.symbol,l=e.title,c=e.maskId,d=e.titleId,h=e.extra,y=e.watchable,_=y===void 0?!1:y,H=r.found?r:n,R=H.width,W=H.height,O=a==="fak",C=[M.replacementClass,i?"".concat(M.cssPrefix,"-").concat(i):""].filter(function(we){return h.classes.indexOf(we)===-1}).filter(function(we){return we!==""||!!we}).concat(h.classes).join(" "),L={children:[],attributes:P(P({},h.attributes),{},{"data-prefix":a,"data-icon":i,class:C,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(R," ").concat(W)})},I=O&&!~h.classes.indexOf("fa-fw")?{width:"".concat(R/W*16*.0625,"em")}:{};_&&(L.attributes[St]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(d||vn())},children:[l]}),delete L.attributes.title);var Z=P(P({},L),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:s,symbol:o,styles:P(P({},I),h.styles)}),pe=r.found&&n.found?nt("generateAbstractMask",Z)||{children:[],attributes:{}}:nt("generateAbstractIcon",Z)||{children:[],attributes:{}},ge=pe.children,Ee=pe.attributes;return Z.children=ge,Z.attributes=Ee,o?Mu(Z):Iu(Z)}function Mi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,s=e.extra,o=e.watchable,l=o===void 0?!1:o,c=P(P(P({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});l&&(c[St]="");var d=P({},s.styles);Ma(a)&&(d.transform=lu({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var h=dr(d);h.length>0&&(c.style=h);var y=[];return y.push({tag:"span",attributes:c,children:[t]}),i&&y.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),y}function Tu(e){var t=e.content,n=e.title,r=e.extra,a=P(P(P({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=dr(r.styles);i.length>0&&(a.style=i);var s=[];return s.push({tag:"span",attributes:a,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var Pr=De.styles;function Qr(e){var t=e[0],n=e[1],r=e.slice(4),a=Oa(r,1),i=a[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(At.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(At.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(At.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:s}}var Nu={found:!1,width:512,height:512};function Fu(e,t){!Ks&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ea(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=pt()),new Promise(function(r,a){if(nt("missingIconAbstract"),n==="fa"){var i=ao(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Pr[t]&&Pr[t][e]){var s=Pr[t][e];return r(Qr(s))}Fu(e,t),r(P(P({},Nu),{},{icon:M.showMissingIcons&&e?nt("missingIconAbstract")||{}:{}}))})}var Ti=function(){},ta=M.measurePerformance&&Sn&&Sn.mark&&Sn.measure?Sn:{mark:Ti,measure:Ti},tn='FA "6.4.0"',Ru=function(t){return ta.mark("".concat(tn," ").concat(t," begins")),function(){return so(t)}},so=function(t){ta.mark("".concat(tn," ").concat(t," ends")),ta.measure("".concat(tn," ").concat(t),"".concat(tn," ").concat(t," begins"),"".concat(tn," ").concat(t," ends"))},ja={begin:Ru,end:so},Wn=function(){};function Ni(e){var t=e.getAttribute?e.getAttribute(St):null;return typeof t=="string"}function ju(e){var t=e.getAttribute?e.getAttribute(Ca):null,n=e.getAttribute?e.getAttribute(Pa):null;return t&&n}function Lu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function zu(){if(M.autoReplaceSvg===!0)return Kn.replace;var e=Kn[M.autoReplaceSvg];return e||Kn.replace}function Du(e){return se.createElementNS("http://www.w3.org/2000/svg",e)}function Uu(e){return se.createElement(e)}function oo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Du:Uu:n;if(typeof e=="string")return se.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){a.setAttribute(s,e.attributes[s])});var i=e.children||[];return i.forEach(function(s){a.appendChild(oo(s,{ceFn:r}))}),a}function Hu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Kn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(oo(a),n)}),n.getAttribute(St)===null&&M.keepOriginalSource){var r=se.createComment(Hu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ia(n).indexOf(M.replacementClass))return Kn.replace(t);var a=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(o,l){return l===M.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var s=r.map(function(o){return wn(o)}).join(`
`);n.setAttribute(St,""),n.innerHTML=s}};function Fi(e){e()}function lo(e,t){var n=typeof t=="function"?t:Wn;if(e.length===0)n();else{var r=Fi;M.mutateApproach===Kc&&(r=ht.requestAnimationFrame||Fi),r(function(){var a=zu(),i=ja.begin("mutate");e.map(a),i(),n()})}}var La=!1;function fo(){La=!0}function na(){La=!1}var Qn=null;function Ri(e){if(Ai&&M.observeMutations){var t=e.treeCallback,n=t===void 0?Wn:t,r=e.nodeCallback,a=r===void 0?Wn:r,i=e.pseudoElementsCallback,s=i===void 0?Wn:i,o=e.observeMutationsRoot,l=o===void 0?se:o;Qn=new Ai(function(c){if(!La){var d=pt();Xt(c).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!Ni(h.addedNodes[0])&&(M.searchPseudoElements&&s(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&M.searchPseudoElements&&s(h.target.parentNode),h.type==="attributes"&&Ni(h.target)&&~Gc.indexOf(h.attributeName))if(h.attributeName==="class"&&ju(h.target)){var y=hr(Ia(h.target)),_=y.prefix,H=y.iconName;h.target.setAttribute(Ca,_||d),H&&h.target.setAttribute(Pa,H)}else Lu(h.target)&&a(h.target)})}}),at&&Qn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Bu(){Qn&&Qn.disconnect()}function Yu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function Wu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=hr(Ia(e));return a.prefix||(a.prefix=pt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=_u(a.prefix,e.innerText)||Na(a.prefix,Xr(e.innerText))),!a.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Ku(e){var t=Xt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||vn()):(t["aria-hidden"]="true",t.focusable="false")),t}function $u(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Je,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ji(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Wu(e),r=n.iconName,a=n.prefix,i=n.rest,s=Ku(e),o=Zr("parseNodeAttributes",{},e),l=t.styleParser?Yu(e):[];return P({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Je,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s}},o)}var Vu=De.styles;function co(e){var t=M.autoReplaceSvg==="nest"?ji(e,{styleParser:!1}):ji(e);return~t.extra.classes.indexOf($s)?nt("generateLayersText",e,t):nt("generateSvgReplacementMutation",e,t)}var gt=new Set;Sa.map(function(e){gt.add("fa-".concat(e))});Object.keys(mn[ie]).map(gt.add.bind(gt));Object.keys(mn[ce]).map(gt.add.bind(gt));gt=xn(gt);function Li(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!at)return Promise.resolve();var n=se.documentElement.classList,r=function(h){return n.add("".concat(Oi,"-").concat(h))},a=function(h){return n.remove("".concat(Oi,"-").concat(h))},i=M.autoFetchSvg?gt:Sa.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Vu));i.includes("fa")||i.push("fa");var s=[".".concat($s,":not([").concat(St,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(St,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=Xt(e.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ja.begin("onTree"),c=o.reduce(function(d,h){try{var y=co(h);y&&d.push(y)}catch(_){Ks||_.name==="MissingIcon"&&console.error(_)}return d},[]);return new Promise(function(d,h){Promise.all(c).then(function(y){lo(y,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(y){l(),h(y)})})}function qu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;co(e).then(function(n){n&&lo([n],t)})}function Xu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Gr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Gr(a||{})),e(r,P(P({},n),{},{mask:a}))}}var Ju=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Je:r,i=n.symbol,s=i===void 0?!1:i,o=n.mask,l=o===void 0?null:o,c=n.maskId,d=c===void 0?null:c,h=n.title,y=h===void 0?null:h,_=n.titleId,H=_===void 0?null:_,R=n.classes,W=R===void 0?[]:R,O=n.attributes,C=O===void 0?{}:O,L=n.styles,I=L===void 0?{}:L;if(t){var Z=t.prefix,pe=t.iconName,ge=t.icon;return pr(P({type:"icon"},t),function(){return It("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(y?C["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(H||vn()):(C["aria-hidden"]="true",C.focusable="false")),Ra({icons:{main:Qr(ge),mask:l?Qr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Z,iconName:pe,transform:P(P({},Je),a),symbol:s,title:y,maskId:d,titleId:H,extra:{attributes:C,styles:I,classes:W}})})}},Zu={mixout:function(){return{icon:Xu(Ju)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Li,n.nodeCallback=qu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?se:r,i=n.callback,s=i===void 0?function(){}:i;return Li(a,s)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,s=r.titleId,o=r.prefix,l=r.transform,c=r.symbol,d=r.mask,h=r.maskId,y=r.extra;return new Promise(function(_,H){Promise.all([ea(a,o),d.iconName?ea(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(R){var W=Oa(R,2),O=W[0],C=W[1];_([n,Ra({icons:{main:O,mask:C},prefix:o,iconName:a,transform:l,symbol:c,maskId:h,title:i,titleId:s,extra:y,watchable:!0})])}).catch(H)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.transform,o=n.styles,l=dr(o);l.length>0&&(a.style=l);var c;return Ma(s)&&(c=nt("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Gu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return pr({type:"layer"},function(){It("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(xn(i)).join(" ")},children:s}]})}}}},Qu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,s=r.classes,o=s===void 0?[]:s,l=r.attributes,c=l===void 0?{}:l,d=r.styles,h=d===void 0?{}:d;return pr({type:"counter",content:n},function(){return It("beforeDOMElementCreation",{content:n,params:r}),Tu({content:n.toString(),title:i,extra:{attributes:c,styles:h,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(xn(o))}})})}}}},ed={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Je:a,s=r.title,o=s===void 0?null:s,l=r.classes,c=l===void 0?[]:l,d=r.attributes,h=d===void 0?{}:d,y=r.styles,_=y===void 0?{}:y;return pr({type:"text",content:n},function(){return It("beforeDOMElementCreation",{content:n,params:r}),Mi({content:n,transform:P(P({},Je),i),title:o,extra:{attributes:h,styles:_,classes:["".concat(M.cssPrefix,"-layers-text")].concat(xn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,s=r.extra,o=null,l=null;if(Bs){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();o=d.width/c,l=d.height/c}return M.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,Mi({content:n.innerHTML,width:o,height:l,transform:i,title:a,extra:s,watchable:!0})])}}},td=new RegExp('"',"ug"),zi=[1105920,1112319];function nd(e){var t=e.replace(td,""),n=pu(t,0),r=n>=zi[0]&&n<=zi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Xr(a?t[0]:t),isSecondary:r||a}}function Di(e,t){var n="".concat(Wc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Xt(e.children),s=i.filter(function(ge){return ge.getAttribute(qr)===t})[0],o=ht.getComputedStyle(e,t),l=o.getPropertyValue("font-family").match(Xc),c=o.getPropertyValue("font-weight"),d=o.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&d!=="none"&&d!==""){var h=o.getPropertyValue("content"),y=~["Sharp"].indexOf(l[2])?ce:ie,_=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?hn[y][l[2].toLowerCase()]:Jc[y][c],H=nd(h),R=H.value,W=H.isSecondary,O=l[0].startsWith("FontAwesome"),C=Na(_,R),L=C;if(O){var I=wu(R);I.iconName&&I.prefix&&(C=I.iconName,_=I.prefix)}if(C&&!W&&(!s||s.getAttribute(Ca)!==_||s.getAttribute(Pa)!==L)){e.setAttribute(n,L),s&&e.removeChild(s);var Z=$u(),pe=Z.extra;pe.attributes[qr]=t,ea(C,_).then(function(ge){var Ee=Ra(P(P({},Z),{},{icons:{main:ge,mask:Fa()},prefix:_,iconName:L,extra:pe,watchable:!0})),we=se.createElement("svg");t==="::before"?e.insertBefore(we,e.firstChild):e.appendChild(we),we.outerHTML=Ee.map(function(Fe){return wn(Fe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function rd(e){return Promise.all([Di(e,"::before"),Di(e,"::after")])}function ad(e){return e.parentNode!==document.head&&!~$c.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(qr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ui(e){if(at)return new Promise(function(t,n){var r=Xt(e.querySelectorAll("*")).filter(ad).map(rd),a=ja.begin("searchPseudoElements");fo(),Promise.all(r).then(function(){a(),na(),t()}).catch(function(){a(),na(),n()})})}var id={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ui,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?se:r;M.searchPseudoElements&&Ui(a)}}},Hi=!1,sd={mixout:function(){return{dom:{unwatch:function(){fo(),Hi=!0}}}},hooks:function(){return{bootstrap:function(){Ri(Zr("mutationObserverCallbacks",{}))},noAuto:function(){Bu()},watch:function(n){var r=n.observeMutationsRoot;Hi?na():Ri(Zr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Bi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),s=i[0],o=i.slice(1).join("-");if(s&&o==="h")return r.flipX=!0,r;if(s&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(s){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},od={mixout:function(){return{parse:{transform:function(n){return Bi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Bi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),h={transform:"".concat(l," ").concat(c," ").concat(d)},y={transform:"translate(".concat(s/2*-1," -256)")},_={outer:o,inner:h,path:y};return{tag:"g",attributes:P({},_.outer),children:[{tag:"g",attributes:P({},_.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:P(P({},r.icon.attributes),_.path)}]}]}}}},Sr={x:0,y:0,width:"100%",height:"100%"};function Yi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ld(e){return e.tag==="g"?e.children:[e]}var fd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?hr(a.split(" ").map(function(s){return s.trim()})):Fa();return i.prefix||(i.prefix=pt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.mask,o=n.maskId,l=n.transform,c=i.width,d=i.icon,h=s.width,y=s.icon,_=ou({transform:l,containerWidth:h,iconWidth:c}),H={tag:"rect",attributes:P(P({},Sr),{},{fill:"white"})},R=d.children?{children:d.children.map(Yi)}:{},W={tag:"g",attributes:P({},_.inner),children:[Yi(P({tag:d.tag,attributes:P(P({},d.attributes),_.path)},R))]},O={tag:"g",attributes:P({},_.outer),children:[W]},C="mask-".concat(o||vn()),L="clip-".concat(o||vn()),I={tag:"mask",attributes:P(P({},Sr),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[H,O]},Z={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:ld(y)},I]};return r.push(Z,{tag:"rect",attributes:P({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(C,")")},Sr)}),{children:r,attributes:a}}}},cd={provides:function(t){var n=!1;ht.matchMedia&&(n=ht.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:P(P({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=P(P({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:P(P({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:P(P({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:P(P({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:P(P({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:P(P({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:P(P({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:P(P({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},ud={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},dd=[cu,Zu,Gu,Qu,ed,id,sd,od,fd,cd,ud];Ou(dd,{mixoutsTo:Ie});Ie.noAuto;Ie.config;var za=Ie.library;Ie.dom;var ra=Ie.parse;Ie.findIconDefinition;Ie.toHtml;var md=Ie.icon;Ie.layer;Ie.text;Ie.counter;function Wi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ge(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wi(Object(n),!0).forEach(function(r){ke(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function er(e){"@babel/helpers - typeof";return er=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},er(e)}function ke(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hd(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function pd(e,t){if(e==null)return{};var n=hd(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var gd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},uo={exports:{}};(function(e){(function(t){var n=function(O,C,L){if(!c(C)||h(C)||y(C)||_(C)||l(C))return C;var I,Z=0,pe=0;if(d(C))for(I=[],pe=C.length;Z<pe;Z++)I.push(n(O,C[Z],L));else{I={};for(var ge in C)Object.prototype.hasOwnProperty.call(C,ge)&&(I[O(ge,L)]=n(O,C[ge],L))}return I},r=function(O,C){C=C||{};var L=C.separator||"_",I=C.split||/(?=[A-Z])/;return O.split(I).join(L)},a=function(O){return H(O)?O:(O=O.replace(/[\-_\s]+(.)?/g,function(C,L){return L?L.toUpperCase():""}),O.substr(0,1).toLowerCase()+O.substr(1))},i=function(O){var C=a(O);return C.substr(0,1).toUpperCase()+C.substr(1)},s=function(O,C){return r(O,C).toLowerCase()},o=Object.prototype.toString,l=function(O){return typeof O=="function"},c=function(O){return O===Object(O)},d=function(O){return o.call(O)=="[object Array]"},h=function(O){return o.call(O)=="[object Date]"},y=function(O){return o.call(O)=="[object RegExp]"},_=function(O){return o.call(O)=="[object Boolean]"},H=function(O){return O=O-0,O===O},R=function(O,C){var L=C&&"process"in C?C.process:C;return typeof L!="function"?O:function(I,Z){return L(I,O,Z)}},W={camelize:a,decamelize:s,pascalize:i,depascalize:s,camelizeKeys:function(O,C){return n(R(a,C),O)},decamelizeKeys:function(O,C){return n(R(s,C),O,C)},pascalizeKeys:function(O,C){return n(R(i,C),O)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=W:t.humps=W})(gd)})(uo);var vd=uo.exports,bd=["class","style"];function yd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=vd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function xd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function mo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return mo(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=xd(d);break;case"style":l.style=yd(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,s=i===void 0?{}:i,o=pd(n,bd);return yf(e.tag,Ge(Ge(Ge({},t),{},{class:a.class,style:Ge(Ge({},a.style),s)},a.attrs),o),r)}var ho=!1;try{ho=!0}catch{}function _d(){if(!ho&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ir(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ke({},e,t):{}}function wd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ke(t,"fa-".concat(e.size),e.size!==null),ke(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ke(t,"fa-pull-".concat(e.pull),e.pull!==null),ke(t,"fa-swap-opacity",e.swapOpacity),ke(t,"fa-bounce",e.bounce),ke(t,"fa-shake",e.shake),ke(t,"fa-beat",e.beat),ke(t,"fa-fade",e.fade),ke(t,"fa-beat-fade",e.beatFade),ke(t,"fa-flash",e.flash),ke(t,"fa-spin-pulse",e.spinPulse),ke(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ki(e){if(e&&er(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ra.icon)return ra.icon(e);if(e===null)return null;if(er(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var kd=Pl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=_t(function(){return Ki(t.icon)}),i=_t(function(){return Ir("classes",wd(t))}),s=_t(function(){return Ir("transform",typeof t.transform=="string"?ra.transform(t.transform):t.transform)}),o=_t(function(){return Ir("mask",Ki(t.mask))}),l=_t(function(){return md(a.value,Ge(Ge(Ge(Ge({},i.value),s.value),o.value),{},{symbol:t.symbol,title:t.title}))});Dn(l,function(d){if(!d)return _d("Could not find one or more icon(s)",a.value,o.value)},{immediate:!0});var c=_t(function(){return l.value?mo(l.value.abstract[0],{},r):null});return function(){return c.value}}}),Ad={prefix:"fas",iconName:"forward-step",icon:[320,512,["step-forward"],"f051","M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z"]},Od={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},Ed={prefix:"fas",iconName:"rotate",icon:[512,512,[128260,"sync-alt"],"f2f1","M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z"]};za.add(Od);za.add(Ad);za.add(Ed);Bf(Fc).component("ficon",kd).mount("#app")});export default Cd();
