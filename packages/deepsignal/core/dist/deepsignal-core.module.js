import{batch as t,Signal as e,signal as r,computed as n}from"@preact/signals-core";var a=new WeakMap,o=new WeakMap,c=new WeakMap,s=new WeakSet,i=new WeakMap,l=/^\$/,u=!1,f=function(t){if(!d(t))throw new Error("This object can't be observed.");return o.has(t)||o.set(t,y(t,v)),o.get(t)},p=function(t,e){u=!0;var r=t[e];try{u=!1}catch(t){}return r},y=function(t,e){var r=new Proxy(t,e);return s.add(r),r},h=function(){throw new Error("Don't mutate the signals directly.")},g=function(t){return function(e,s,i){var f;if(u)return Reflect.get(e,s,i);var p=t||"$"===s[0]&&"$"!==s;if(!t&&p&&Array.isArray(e)){if("$"===s)return c.has(e)||c.set(e,y(e,w)),c.get(e);p="$length"===s}a.has(i)||a.set(i,new Map);var h=a.get(i),g=p?s.replace(l,""):s;if(h.has(g)||"function"!=typeof(null==(f=Object.getOwnPropertyDescriptor(e,g))?void 0:f.get)){var A=Reflect.get(e,g,i);if(p&&"function"==typeof A)return;if("symbol"==typeof g&&b.has(g))return A;h.has(g)||(d(A)&&(o.has(A)||o.set(A,y(A,v)),A=o.get(A)),h.set(g,r(A)))}else h.set(g,n(function(){return Reflect.get(e,g,i)}));return p?h.get(g):h.get(g).value}},v={get:g(!1),set:function(t,n,c,s){a.has(s)||a.set(s,new Map);var i=a.get(s);if("$"===n[0]&&"$"!==n){c instanceof e||h();var u=n.replace(l,"");return i.set(u,c),Reflect.set(t,u,c.peek(),s)}var f=c;d(c)&&(o.has(c)||o.set(c,y(c,v)),f=o.get(c));var p=Reflect.set(t,n,c,s);return i.has(n)?i.get(n).value=f:i.set(n,r(f)),Array.isArray(t)&&i.has("length")&&(i.get("length").value=t.length),p},defineProperty:function(t,e,r){"$"===e[0]&&"$"!==e&&h();var n=!(e in t),c=a.get(o.get(t)),s=Reflect.defineProperty(t,e,r);return"value"in r&&c&&c.has(e)&&(c.get(e).value=r.value),n&&i.has(t)&&i.get(t).value++,s},deleteProperty:function(t,e){"$"===e[0]&&"$"!==e&&h();var r=a.get(o.get(t)),n=Reflect.deleteProperty(t,e);return r&&r.has(e)&&(r.get(e).value=void 0),i.has(t)&&i.get(t).value++,n},ownKeys:function(t){return i.has(t)||i.set(t,r(0)),i._=i.get(t).value,Reflect.ownKeys(t)}},w={get:g(!0),set:h,deleteProperty:h},b=new Set(Object.getOwnPropertyNames(Symbol).map(function(t){return Symbol[t]}).filter(function(t){return"symbol"==typeof t})),A=new Set([Object,Array]),d=function(t){return"object"==typeof t&&null!==t&&(!("function"==typeof t.constructor&&t.constructor.name in globalThis&&globalThis[t.constructor.name]===t.constructor)||A.has(t.constructor))&&!s.has(t)};function m(t){return s.has(t)}var $=Array.prototype.pop;Array.prototype.pop=function(){var e,r=this;return m(this)?(t(function(){e=$.call(r)}),e):$.call(this)};var P=Array.prototype.shift;Array.prototype.shift=function(){var e,r=this;return m(this)?(t(function(){e=P.call(r)}),e):P.call(this)};var R=Array.prototype.unshift;Array.prototype.unshift=function(){var e,r=this,n=[].slice.call(arguments);return m(this)?(t(function(){e=R.call.apply(R,[r].concat(n))}),e):R.call.apply(R,[this].concat(n))};var k=Array.prototype.splice;Array.prototype.splice=function(){var e,r=this,n=[].slice.call(arguments);return m(this)?(t(function(){e=k.call.apply(k,[r].concat(n))}),e):k.call.apply(k,[this].concat(n))};export{m as ValueIsDeeplyObserved,f as deepSignal,p as peek};
//# sourceMappingURL=deepsignal-core.module.js.map