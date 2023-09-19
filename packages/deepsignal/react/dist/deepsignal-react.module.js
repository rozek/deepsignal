import"@preact/signals-react";import{useMemo as t}from"react";import{batch as e,Signal as r,signal as n,computed as a}from"@preact/signals-core";var o=new WeakMap,c=new WeakMap,s=new WeakMap,i=new WeakSet,l=new WeakMap,u=/^\$/,f=!1,p=function(t){if(!d(t))throw new Error("This object can't be observed.");return c.has(t)||c.set(t,h(t,w)),c.get(t)},y=function(t,e){f=!0;var r=t[e];try{f=!1}catch(t){}return r},h=function(t,e){var r=new Proxy(t,e);return i.add(r),r},g=function(){throw new Error("Don't mutate the signals directly.")},v=function(t){return function(e,r,i){var l;if(f)return Reflect.get(e,r,i);var p=t||"$"===r[0]&&"$"!==r;if(!t&&p&&Array.isArray(e)){if("$"===r)return s.has(e)||s.set(e,h(e,m)),s.get(e);p="$length"===r}o.has(i)||o.set(i,new Map);var y=o.get(i),g=p?r.replace(u,""):r;if(y.has(g)||"function"!=typeof(null==(l=Object.getOwnPropertyDescriptor(e,g))?void 0:l.get)){var v=Reflect.get(e,g,i);if(p&&"function"==typeof v)return;if("symbol"==typeof g&&b.has(g))return v;y.has(g)||(d(v)&&(c.has(v)||c.set(v,h(v,w)),v=c.get(v)),y.set(g,n(v)))}else y.set(g,a(function(){return Reflect.get(e,g,i)}));return p?y.get(g):y.get(g).value}},w={get:v(!1),set:function(t,e,a,s){o.has(s)||o.set(s,new Map);var i=o.get(s);if("$"===e[0]&&"$"!==e){a instanceof r||g();var l=e.replace(u,"");return i.set(l,a),Reflect.set(t,l,a.peek(),s)}var f=a;d(a)&&(c.has(a)||c.set(a,h(a,w)),f=c.get(a));var p=Reflect.set(t,e,a,s);return i.has(e)?i.get(e).value=f:i.set(e,n(f)),Array.isArray(t)&&i.has("length")&&(i.get("length").value=t.length),p},defineProperty:function(t,e,r){"$"===e[0]&&"$"!==e&&g();var n=!(e in t),a=o.get(c.get(t)),s=Reflect.defineProperty(t,e,r);return"value"in r&&a&&a.has(e)&&(a.get(e).value=r.value),n&&l.has(t)&&l.get(t).value++,s},deleteProperty:function(t,e){"$"===e[0]&&"$"!==e&&g();var r=o.get(c.get(t)),n=Reflect.deleteProperty(t,e);return r&&r.has(e)&&(r.get(e).value=void 0),l.has(t)&&l.get(t).value++,n},ownKeys:function(t){return l.has(t)||l.set(t,n(0)),l._=l.get(t).value,Reflect.ownKeys(t)}},m={get:v(!0),set:g,deleteProperty:g},b=new Set(Object.getOwnPropertyNames(Symbol).map(function(t){return Symbol[t]}).filter(function(t){return"symbol"==typeof t})),A=new Set([Object,Array]),d=function(t){return"object"==typeof t&&null!==t&&(!("function"==typeof t.constructor&&t.constructor.name in globalThis&&globalThis[t.constructor.name]===t.constructor)||A.has(t.constructor))&&!i.has(t)};function $(t){return i.has(t)}var P=Array.prototype.pop;Array.prototype.pop=function(){var t,r=this;return $(this)?(e(function(){t=P.call(r)}),t):P.call(this)};var R=Array.prototype.shift;Array.prototype.shift=function(){var t,r=this;return $(this)?(e(function(){t=R.call(r)}),t):R.call(this)};var k=Array.prototype.unshift;Array.prototype.unshift=function(){var t,r=this,n=[].slice.call(arguments);return $(this)?(e(function(){t=k.call.apply(k,[r].concat(n))}),t):k.call.apply(k,[this].concat(n))};var M=Array.prototype.splice;Array.prototype.splice=function(){var t,r=this,n=[].slice.call(arguments);return $(this)?(e(function(){t=M.call.apply(M,[r].concat(n))}),t):M.call.apply(M,[this].concat(n))};var j=function(e){return t(function(){return p(e)},[])};export{$ as ValueIsDeeplyObserved,p as deepSignal,y as peek,j as useDeepSignal};
//# sourceMappingURL=deepsignal-react.module.js.map