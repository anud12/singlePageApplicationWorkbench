!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=11)}([function(t,e){var r,n,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function c(t){if(r===setTimeout)return setTimeout(t,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(t){r=i}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(t){n=s}}();var u,a=[],f=!1,p=-1;function h(){f&&u&&(f=!1,u.length?a=u.concat(a):p=-1,a.length&&l())}function l(){if(!f){var t=c(h);f=!0;for(var e=a.length;e;){for(u=a,a=[];++p<e;)u&&u[p].run();p=-1,e=a.length}u=null,f=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];a.push(new d(t,e)),1!==a.length||f||c(l)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,r){"use strict";(function(e,n){var o=new Function("try {return this===window;}catch(e){return false;}"),i=new Function("try {return self instanceof WorkerGlobalScope;}catch(e){return false;}"),s=!1;if(!o()&&!i()&&!(s="true"===e.env.ES6)){var c=r(7),u=r(6),a=function(){for(var t=u.join(n,"ioc.config");!c.existsSync(t);){var e=u.normalize(u.join(u.dirname(t),"..","ioc.config"));if(t===e)return null;t=e}return t}();if(a&&c.existsSync(a))JSON.parse(c.readFileSync(a)).es6&&(s=!0)}t.exports=r(s?5:3)}).call(this,r(0),"/")},function(t,e,r){(function(t,e){
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var r;!function(r){!function(n){var o="object"==typeof e?e:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),i=s(r);function s(t,e){return function(r,n){"function"!=typeof t[r]&&Object.defineProperty(t,r,{configurable:!0,writable:!0,value:n}),e&&e(r,n)}}void 0===o.Reflect?o.Reflect=r:i=s(o.Reflect,i),function(e){var r=Object.prototype.hasOwnProperty,n="function"==typeof Symbol,o=n&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",i=n&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",s="function"==typeof Object.create,c={__proto__:[]}instanceof Array,u=!s&&!c,a={create:s?function(){return A(Object.create(null))}:c?function(){return A({__proto__:null})}:function(){return A({})},has:u?function(t,e){return r.call(t,e)}:function(t,e){return e in t},get:u?function(t,e){return r.call(t,e)?t[e]:void 0}:function(t,e){return t[e]}},f=Object.getPrototypeOf(Function),p="object"==typeof t&&t.env&&"true"===t.env.REFLECT_METADATA_USE_MAP_POLYFILL,h=p||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?function(){var t={},e=[],r=function(){function t(t,e,r){this._index=0,this._keys=t,this._values=e,this._selector=r}return t.prototype["@@iterator"]=function(){return this},t.prototype[i]=function(){return this},t.prototype.next=function(){var t=this._index;if(t>=0&&t<this._keys.length){var r=this._selector(this._keys[t],this._values[t]);return t+1>=this._keys.length?(this._index=-1,this._keys=e,this._values=e):this._index++,{value:r,done:!1}}return{value:void 0,done:!0}},t.prototype.throw=function(t){throw this._index>=0&&(this._index=-1,this._keys=e,this._values=e),t},t.prototype.return=function(t){return this._index>=0&&(this._index=-1,this._keys=e,this._values=e),{value:t,done:!0}},t}();return function(){function e(){this._keys=[],this._values=[],this._cacheKey=t,this._cacheIndex=-2}return Object.defineProperty(e.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),e.prototype.has=function(t){return this._find(t,!1)>=0},e.prototype.get=function(t){var e=this._find(t,!1);return e>=0?this._values[e]:void 0},e.prototype.set=function(t,e){var r=this._find(t,!0);return this._values[r]=e,this},e.prototype.delete=function(e){var r=this._find(e,!1);if(r>=0){for(var n=this._keys.length,o=r+1;o<n;o++)this._keys[o-1]=this._keys[o],this._values[o-1]=this._values[o];return this._keys.length--,this._values.length--,e===this._cacheKey&&(this._cacheKey=t,this._cacheIndex=-2),!0}return!1},e.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=t,this._cacheIndex=-2},e.prototype.keys=function(){return new r(this._keys,this._values,n)},e.prototype.values=function(){return new r(this._keys,this._values,o)},e.prototype.entries=function(){return new r(this._keys,this._values,s)},e.prototype["@@iterator"]=function(){return this.entries()},e.prototype[i]=function(){return this.entries()},e.prototype._find=function(t,e){return this._cacheKey!==t&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=t)),this._cacheIndex<0&&e&&(this._cacheIndex=this._keys.length,this._keys.push(t),this._values.push(void 0)),this._cacheIndex},e}();function n(t,e){return t}function o(t,e){return e}function s(t,e){return[t,e]}}():Map,l=p||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?function(){function t(){this._map=new h}return Object.defineProperty(t.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),t.prototype.has=function(t){return this._map.has(t)},t.prototype.add=function(t){return this._map.set(t,t),this},t.prototype.delete=function(t){return this._map.delete(t)},t.prototype.clear=function(){this._map.clear()},t.prototype.keys=function(){return this._map.keys()},t.prototype.values=function(){return this._map.values()},t.prototype.entries=function(){return this._map.entries()},t.prototype["@@iterator"]=function(){return this.keys()},t.prototype[i]=function(){return this.keys()},t}():Set,d=new(p||"function"!=typeof WeakMap?function(){var t=16,e=a.create(),n=o();return function(){function t(){this._key=o()}return t.prototype.has=function(t){var e=i(t,!1);return void 0!==e&&a.has(e,this._key)},t.prototype.get=function(t){var e=i(t,!1);return void 0!==e?a.get(e,this._key):void 0},t.prototype.set=function(t,e){var r=i(t,!0);return r[this._key]=e,this},t.prototype.delete=function(t){var e=i(t,!1);return void 0!==e&&delete e[this._key]},t.prototype.clear=function(){this._key=o()},t}();function o(){var t;do{t="@@WeakMap@@"+c()}while(a.has(e,t));return e[t]=!0,t}function i(t,e){if(!r.call(t,n)){if(!e)return;Object.defineProperty(t,n,{value:a.create()})}return t[n]}function s(t,e){for(var r=0;r<e;++r)t[r]=255*Math.random()|0;return t}function c(){var e=function(t){if("function"==typeof Uint8Array)return"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(t)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(t)):s(new Uint8Array(t),t);return s(new Array(t),t)}(t);e[6]=79&e[6]|64,e[8]=191&e[8]|128;for(var r="",n=0;n<t;++n){var o=e[n];4!==n&&6!==n&&8!==n||(r+="-"),o<16&&(r+="0"),r+=o.toString(16).toLowerCase()}return r}}():WeakMap);function y(t,e,r){var n=d.get(t);if(m(n)){if(!r)return;n=new h,d.set(t,n)}var o=n.get(e);if(m(o)){if(!r)return;o=new h,n.set(e,o)}return o}function v(t,e,r){var n=y(e,r,!1);return!m(n)&&!!n.has(t)}function g(t,e,r){var n=y(e,r,!1);if(!m(n))return n.get(t)}function _(t,e,r,n){var o=y(r,n,!0);o.set(t,e)}function w(t,e){var r=[],n=y(t,e,!1);if(m(n))return r;for(var o=n.keys(),s=function(t){var e=I(t,i);if(!S(e))throw new TypeError;var r=e.call(t);if(!j(r))throw new TypeError;return r}(o),c=0;;){var u=P(s);if(!u)return r.length=c,r;var a=u.value;try{r[c]=a}catch(t){try{M(s)}finally{throw t}}c++}}function b(t){if(null===t)return 1;switch(typeof t){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===t?1:6;default:return 6}}function m(t){return void 0===t}function T(t){return null===t}function j(t){return"object"==typeof t?null!==t:"function"==typeof t}function C(t,e){switch(b(t)){case 0:case 1:case 2:case 3:case 4:case 5:return t}var r=3===e?"string":5===e?"number":"default",n=I(t,o);if(void 0!==n){var i=n.call(t,r);if(j(i))throw new TypeError;return i}return function(t,e){if("string"===e){var r=t.toString;if(S(r)){var n=r.call(t);if(!j(n))return n}var o=t.valueOf;if(S(o)){var n=o.call(t);if(!j(n))return n}}else{var o=t.valueOf;if(S(o)){var n=o.call(t);if(!j(n))return n}var i=t.toString;if(S(i)){var n=i.call(t);if(!j(n))return n}}throw new TypeError}(t,"default"===r?"number":r)}function O(t){var e=C(t,3);return"symbol"==typeof e?e:function(t){return""+t}(e)}function k(t){return Array.isArray?Array.isArray(t):t instanceof Object?t instanceof Array:"[object Array]"===Object.prototype.toString.call(t)}function S(t){return"function"==typeof t}function E(t){return"function"==typeof t}function I(t,e){var r=t[e];if(void 0!==r&&null!==r){if(!S(r))throw new TypeError;return r}}function P(t){var e=t.next();return!e.done&&e}function M(t){var e=t.return;e&&e.call(t)}function x(t){var e=Object.getPrototypeOf(t);if("function"!=typeof t||t===f)return e;if(e!==f)return e;var r=t.prototype,n=r&&Object.getPrototypeOf(r);if(null==n||n===Object.prototype)return e;var o=n.constructor;return"function"!=typeof o?e:o===t?e:o}function A(t){return t.__=void 0,delete t.__,t}e("decorate",function(t,e,r,n){if(m(r)){if(!k(t))throw new TypeError;if(!E(e))throw new TypeError;return function(t,e){for(var r=t.length-1;r>=0;--r){var n=t[r],o=n(e);if(!m(o)&&!T(o)){if(!E(o))throw new TypeError;e=o}}return e}(t,e)}if(!k(t))throw new TypeError;if(!j(e))throw new TypeError;if(!j(n)&&!m(n)&&!T(n))throw new TypeError;return T(n)&&(n=void 0),r=O(r),function(t,e,r,n){for(var o=t.length-1;o>=0;--o){var i=t[o],s=i(e,r,n);if(!m(s)&&!T(s)){if(!j(s))throw new TypeError;n=s}}return n}(t,e,r,n)}),e("metadata",function(t,e){return function(r,n){if(!j(r))throw new TypeError;if(!m(n)&&!function(t){switch(b(t)){case 3:case 4:return!0;default:return!1}}(n))throw new TypeError;_(t,e,r,n)}}),e("defineMetadata",function(t,e,r,n){if(!j(r))throw new TypeError;m(n)||(n=O(n));return _(t,e,r,n)}),e("hasMetadata",function(t,e,r){if(!j(e))throw new TypeError;m(r)||(r=O(r));return function t(e,r,n){var o=v(e,r,n);if(o)return!0;var i=x(r);if(!T(i))return t(e,i,n);return!1}(t,e,r)}),e("hasOwnMetadata",function(t,e,r){if(!j(e))throw new TypeError;m(r)||(r=O(r));return v(t,e,r)}),e("getMetadata",function(t,e,r){if(!j(e))throw new TypeError;m(r)||(r=O(r));return function t(e,r,n){var o=v(e,r,n);if(o)return g(e,r,n);var i=x(r);if(!T(i))return t(e,i,n);return}(t,e,r)}),e("getOwnMetadata",function(t,e,r){if(!j(e))throw new TypeError;m(r)||(r=O(r));return g(t,e,r)}),e("getMetadataKeys",function(t,e){if(!j(t))throw new TypeError;m(e)||(e=O(e));return function t(e,r){var n=w(e,r);var o=x(e);if(null===o)return n;var i=t(o,r);if(i.length<=0)return n;if(n.length<=0)return i;var s=new l;var c=[];for(var u=0,a=n;u<a.length;u++){var f=a[u],p=s.has(f);p||(s.add(f),c.push(f))}for(var h=0,d=i;h<d.length;h++){var f=d[h],p=s.has(f);p||(s.add(f),c.push(f))}return c}(t,e)}),e("getOwnMetadataKeys",function(t,e){if(!j(t))throw new TypeError;m(e)||(e=O(e));return w(t,e)}),e("deleteMetadata",function(t,e,r){if(!j(e))throw new TypeError;m(r)||(r=O(r));var n=y(e,r,!1);if(m(n))return!1;if(!n.delete(t))return!1;if(n.size>0)return!0;var o=d.get(e);return o.delete(r),o.size>0||(d.delete(e),!0)})}(i)}()}(r||(r={}))}).call(this,r(0),r(10))},function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});function i(t){var e=l.decorateConstructor(t);return c.bind(t).toConstructor(e),e}Object.defineProperty(e,"__esModule",{value:!0}),r(2),e.Singleton=function(t){c.bind(t).scope(f.Singleton)},e.Scoped=function(t){return function(e){c.bind(e).scope(t)}},e.Provided=function(t){return function(e){c.bind(e).provider(t)}},e.Provides=function(t){return function(e){c.bind(t).to(e)}},e.AutoWired=i,e.Inject=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t.length<3||void 0===t[2])return function(t,e){var r=Reflect.getMetadata("design:type",t,e);r||(r=Reflect.getMetadata("design:type",t.constructor,e)),c.injectProperty(t.constructor,e,r)}.apply(this,t);if(3===t.length&&"number"==typeof t[2])return function(t,e,r){if(!e){var n=c.bind(t);n.paramTypes=n.paramTypes||[];var o=Reflect.getMetadata("design:paramtypes",t);n.paramTypes.unshift(o[r])}}.apply(this,t);throw new Error("Invalid @Inject Decorator declaration.")};var s=function(){function t(){}return t.bind=function(t){return c.isBound(t)?c.bind(t):(i(t),c.bind(t).to(t))},t.get=function(t){return c.get(t)},t.getType=function(t){return c.getType(t)},t.snapshot=function(e){var r=t.bind(e);t.snapshots.providers.set(e,r.iocprovider),r.iocscope&&t.snapshots.scopes.set(e,r.iocscope)},t.restore=function(e){if(!t.snapshots.providers.has(e))throw new TypeError("Config for source was never snapshoted.");var r=t.bind(e);r.provider(t.snapshots.providers.get(e)),t.snapshots.scopes.has(e)&&r.scope(t.snapshots.scopes.get(e))},t.snapshots={providers:new Map,scopes:new Map},t}();e.Container=s;var c=function(){function t(){}return t.isBound=function(e){u(e);var r=l.getConstructorFromType(e);return!!t.bindings.get(r)},t.bind=function(e){u(e);var r=l.getConstructorFromType(e),n=t.bindings.get(r);return n||(n=new a(r),t.bindings.set(r,n)),n},t.get=function(e){var r=t.bind(e);return r.iocprovider||r.to(r.source),r.getInstance()},t.getType=function(e){u(e);var r=l.getConstructorFromType(e),n=t.bindings.get(r);if(!n)throw new TypeError("The type "+e.name+" hasn't been registered with the IOC Container");return n.targetSource||n.source},t.injectProperty=function(e,r,n){var o="__"+r;Object.defineProperty(e.prototype,r,{enumerable:!0,get:function(){return this[o]?this[o]:this[o]=t.get(n)},set:function(t){this[o]=t}})},t.assertInstantiable=function(t){if(t.__block_Instantiation)throw new TypeError("Can not instantiate Singleton class. Ask Container for it, using Container.get")},t.bindings=new Map,t}();function u(t){if(!t)throw new TypeError("Invalid type requested to IoC container. Type is not defined.")}var a=function(){function t(t){this.source=t}return t.prototype.to=function(t){u(t);var e=l.getConstructorFromType(t);if(this.targetSource=e,this.source===e){var r=this;this.iocprovider={get:function(){var e,n=r.getParameters();return r.decoratedConstructor?n?new((e=r.decoratedConstructor).bind.apply(e,[void 0].concat(n))):new r.decoratedConstructor:n?new(t.bind.apply(t,[void 0].concat(n))):new t}}}else this.iocprovider={get:function(){return c.get(t)}};return this.iocscope&&this.iocscope.reset(this.source),this},t.prototype.provider=function(t){return this.iocprovider=t,this.iocscope&&this.iocscope.reset(this.source),this},t.prototype.scope=function(t){return this.iocscope=t,t===f.Singleton?(this.source.__block_Instantiation=!0,t.reset(this.source)):this.source.__block_Instantiation&&delete this.source.__block_Instantiation,this},t.prototype.withParams=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this.paramTypes=t,this},t.prototype.toConstructor=function(t){return this.decoratedConstructor=t,this},t.prototype.getInstance=function(){return this.iocscope||this.scope(f.Local),this.iocscope.resolve(this.iocprovider,this.source)},t.prototype.getParameters=function(){return this.paramTypes?this.paramTypes.map(function(t){return c.get(t)}):null},t}(),f=function(){function t(){}return t.prototype.reset=function(t){},t}();e.Scope=f;var p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.resolve=function(t,e){return t.get()},e}(f);f.Local=new p;var h=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.resolve=function(t,r){var n=e.instances.get(r);return n||(r.__block_Instantiation=!1,n=t.get(),r.__block_Instantiation=!0,e.instances.set(r,n)),n},e.prototype.reset=function(t){e.instances.delete(l.getConstructorFromType(t))},e.instances=new Map,e}(f);f.Singleton=new h;var l=function(){function t(){}return t.decorateConstructor=function(t){var e;return(e=function(e){function r(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return c.assertInstantiable(t),o}return o(r,e),r}(t)).__parent=t,e},t.hasNamedConstructor=function(t){if(t.name)return"ioc_wrapper"!==t.name;try{var e=t.prototype.constructor.toString().match(this.constructorNameRegEx)[1];return e&&"ioc_wrapper"!==e}catch(t){}return!1},t.getConstructorFromType=function(t){var e=t;if(this.hasNamedConstructor(e))return e;for(;e=e.__parent;)if(this.hasNamedConstructor(e))return e;throw TypeError("Can not identify the base Type for requested target")},t.constructorNameRegEx=/function (\w*)/,t}()},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1),o=[];function i(){console.log("loadAll"),o.forEach(function(t){n.Container.get(t)})}e.OnInit=function(t){console.log("OnInit"),o.push(t),n.Singleton(t)},e.loadAll=i,window.onload=i},function(t,e,r){"use strict";function n(t){const e=f.decorateConstructor(t);return i.bind(t).toConstructor(e),e}Object.defineProperty(e,"__esModule",{value:!0}),r(2),e.Singleton=function(t){i.bind(t).scope(u.Singleton)},e.Scoped=function(t){return function(e){i.bind(e).scope(t)}},e.Provided=function(t){return function(e){i.bind(e).provider(t)}},e.Provides=function(t){return function(e){i.bind(t).to(e)}},e.AutoWired=n,e.Inject=function(...t){if(t.length<3||void 0===t[2])return function(t,e){let r=Reflect.getMetadata("design:type",t,e);r||(r=Reflect.getMetadata("design:type",t.constructor,e)),i.injectProperty(t.constructor,e,r)}.apply(this,t);if(3===t.length&&"number"==typeof t[2])return function(t,e,r){if(!e){const e=i.bind(t);e.paramTypes=e.paramTypes||[];const n=Reflect.getMetadata("design:paramtypes",t);e.paramTypes.unshift(n[r])}}.apply(this,t);throw new Error("Invalid @Inject Decorator declaration.")};class o{static bind(t){return i.isBound(t)?i.bind(t):(n(t),i.bind(t).to(t))}static get(t){return i.get(t)}static getType(t){return i.getType(t)}static snapshot(t){const e=o.bind(t);o.snapshots.providers.set(t,e.iocprovider),e.iocscope&&o.snapshots.scopes.set(t,e.iocscope)}static restore(t){if(!o.snapshots.providers.has(t))throw new TypeError("Config for source was never snapshoted.");const e=o.bind(t);e.provider(o.snapshots.providers.get(t)),o.snapshots.scopes.has(t)&&e.scope(o.snapshots.scopes.get(t))}}o.snapshots={providers:new Map,scopes:new Map},e.Container=o;class i{static isBound(t){s(t);const e=f.getConstructorFromType(t);return!!i.bindings.get(e)}static bind(t){s(t);const e=f.getConstructorFromType(t);let r=i.bindings.get(e);return r||(r=new c(e),i.bindings.set(e,r)),r}static get(t){const e=i.bind(t);return e.iocprovider||e.to(e.source),e.getInstance()}static getType(t){s(t);const e=f.getConstructorFromType(t),r=i.bindings.get(e);if(!r)throw new TypeError(`The type ${t.name} hasn't been registered with the IOC Container`);return r.targetSource||r.source}static injectProperty(t,e,r){const n=`__${e}`;Object.defineProperty(t.prototype,e,{enumerable:!0,get:function(){return this[n]?this[n]:this[n]=i.get(r)},set:function(t){this[n]=t}})}static assertInstantiable(t){if(t.__block_Instantiation)throw new TypeError("Can not instantiate Singleton class. Ask Container for it, using Container.get")}}function s(t){if(!t)throw new TypeError("Invalid type requested to IoC container. Type is not defined.")}i.bindings=new Map;class c{constructor(t){this.source=t}to(t){s(t);const e=f.getConstructorFromType(t);if(this.targetSource=e,this.source===e){const e=this;this.iocprovider={get:()=>{const r=e.getParameters();return e.decoratedConstructor?r?new e.decoratedConstructor(...r):new e.decoratedConstructor:r?new t(...r):new t}}}else this.iocprovider={get:()=>i.get(t)};return this.iocscope&&this.iocscope.reset(this.source),this}provider(t){return this.iocprovider=t,this.iocscope&&this.iocscope.reset(this.source),this}scope(t){return this.iocscope=t,t===u.Singleton?(this.source.__block_Instantiation=!0,t.reset(this.source)):this.source.__block_Instantiation&&delete this.source.__block_Instantiation,this}withParams(...t){return this.paramTypes=t,this}toConstructor(t){return this.decoratedConstructor=t,this}getInstance(){return this.iocscope||this.scope(u.Local),this.iocscope.resolve(this.iocprovider,this.source)}getParameters(){return this.paramTypes?this.paramTypes.map(t=>i.get(t)):null}}class u{reset(t){}}e.Scope=u;u.Local=new class extends u{resolve(t,e){return t.get()}};class a extends u{resolve(t,e){let r=a.instances.get(e);return r||(e.__block_Instantiation=!1,r=t.get(),e.__block_Instantiation=!0,a.instances.set(e,r)),r}reset(t){a.instances.delete(f.getConstructorFromType(t))}}a.instances=new Map,u.Singleton=new a;class f{static decorateConstructor(t){let e;return(e=class extends t{constructor(...e){super(...e),i.assertInstantiable(t)}}).__parent=t,e}static hasNamedConstructor(t){if(t.name)return"ioc_wrapper"!==t.name;try{const e=t.prototype.constructor.toString().match(this.constructorNameRegEx)[1];return e&&"ioc_wrapper"!==e}catch(t){}return!1}static getConstructorFromType(t){let e=t;if(this.hasNamedConstructor(e))return e;for(;e=e.__parent;)if(this.hasNamedConstructor(e))return e;throw TypeError("Can not identify the base Type for requested target")}}f.constructorNameRegEx=/function (\w*)/},function(t,e,r){(function(t){function r(t,e){for(var r=0,n=t.length-1;n>=0;n--){var o=t[n];"."===o?t.splice(n,1):".."===o?(t.splice(n,1),r++):r&&(t.splice(n,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}var n=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(t){return n.exec(t).slice(1)};function i(t,e){if(t.filter)return t.filter(e);for(var r=[],n=0;n<t.length;n++)e(t[n],n,t)&&r.push(t[n]);return r}e.resolve=function(){for(var e="",n=!1,o=arguments.length-1;o>=-1&&!n;o--){var s=o>=0?arguments[o]:t.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(e=s+"/"+e,n="/"===s.charAt(0))}return e=r(i(e.split("/"),function(t){return!!t}),!n).join("/"),(n?"/":"")+e||"."},e.normalize=function(t){var n=e.isAbsolute(t),o="/"===s(t,-1);return(t=r(i(t.split("/"),function(t){return!!t}),!n).join("/"))||n||(t="."),t&&o&&(t+="/"),(n?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,r){function n(t){for(var e=0;e<t.length&&""===t[e];e++);for(var r=t.length-1;r>=0&&""===t[r];r--);return e>r?[]:t.slice(e,r-e+1)}t=e.resolve(t).substr(1),r=e.resolve(r).substr(1);for(var o=n(t.split("/")),i=n(r.split("/")),s=Math.min(o.length,i.length),c=s,u=0;u<s;u++)if(o[u]!==i[u]){c=u;break}var a=[];for(u=c;u<o.length;u++)a.push("..");return(a=a.concat(i.slice(c))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=o(t),r=e[0],n=e[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."},e.basename=function(t,e){var r=o(t)[2];return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r},e.extname=function(t){return o(t)[3]};var s="b"==="ab".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){return e<0&&(e=t.length+e),t.substr(e,r)}}).call(this,r(0))},function(t,e){},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){}return t.prototype.print=function(t){console.log(t)},t}();e.PrintService=n},function(t,e,r){"use strict";var n=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(s=(i<3?o(s):i>3?o(e,r,s):o(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var i=r(8),s=r(1),c=function(){function t(){this.printService.print("HelloWorldService initialized")}return n([s.Inject,o("design:type",i.PrintService)],t.prototype,"printService",void 0),t=n([s.AutoWired,o("design:paramtypes",[])],t)}();e.HelloWorldService=c},function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";var n=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(s=(i<3?o(s):i>3?o(e,r,s):o(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var i=r(3),s=r(9),c=r(4);(function(){function t(){this.helloWorldService.printService.print("My Class initialized")}n([i.Inject,o("design:type",s.HelloWorldService)],t.prototype,"helloWorldService",void 0),t=n([c.OnInit,o("design:paramtypes",[])],t)})(),function(){function t(){console.log("TestClass initialized")}t=n([c.OnInit,o("design:paramtypes",[])],t)}()}]);
//# sourceMappingURL=app.js.map