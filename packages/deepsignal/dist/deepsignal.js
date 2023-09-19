require("@preact/signals");var e=require("preact/hooks"),t=require("@preact/signals-core"),r=new WeakMap,n=new WeakMap,a=new WeakMap,o=new WeakSet,s=new WeakMap,c=/^\$/,u=!1,i=function(e){if(!w(e))throw new Error("This object can't be observed.");return n.has(e)||n.set(e,l(e,g)),n.get(e)},l=function(e,t){var r=new Proxy(e,t);return o.add(r),r},f=function(){throw new Error("Don't mutate the signals directly.")},p=function(e){return function(o,s,i){var f;if(u)return Reflect.get(o,s,i);var p=e||"$"===s[0]&&"$"!==s;if(!e&&p&&Array.isArray(o)){if("$"===s)return a.has(o)||a.set(o,l(o,h)),a.get(o);p="$length"===s}r.has(i)||r.set(i,new Map);var v=r.get(i),b=p?s.replace(c,""):s;if(v.has(b)||"function"!=typeof(null==(f=Object.getOwnPropertyDescriptor(o,b))?void 0:f.get)){var d=Reflect.get(o,b,i);if(p&&"function"==typeof d)return;if("symbol"==typeof b&&y.has(b))return d;v.has(b)||(w(d)&&(n.has(d)||n.set(d,l(d,g)),d=n.get(d)),v.set(b,t.signal(d)))}else v.set(b,t.computed(function(){return Reflect.get(o,b,i)}));return p?v.get(b):v.get(b).value}},g={get:p(!1),set:function(e,a,o,s){r.has(s)||r.set(s,new Map);var u=r.get(s);if("$"===a[0]&&"$"!==a){o instanceof t.Signal||f();var i=a.replace(c,"");return u.set(i,o),Reflect.set(e,i,o.peek(),s)}var p=o;w(o)&&(n.has(o)||n.set(o,l(o,g)),p=n.get(o));var h=Reflect.set(e,a,o,s);return u.has(a)?u.get(a).value=p:u.set(a,t.signal(p)),Array.isArray(e)&&u.has("length")&&(u.get("length").value=e.length),h},defineProperty:function(e,t,a){"$"===t[0]&&"$"!==t&&f();var o=!(t in e),c=r.get(n.get(e)),u=Reflect.defineProperty(e,t,a);return"value"in a&&c&&c.has(t)&&(c.get(t).value=a.value),o&&s.has(e)&&s.get(e).value++,u},deleteProperty:function(e,t){"$"===t[0]&&"$"!==t&&f();var a=r.get(n.get(e)),o=Reflect.deleteProperty(e,t);return a&&a.has(t)&&(a.get(t).value=void 0),s.has(e)&&s.get(e).value++,o},ownKeys:function(e){return s.has(e)||s.set(e,t.signal(0)),s._=s.get(e).value,Reflect.ownKeys(e)}},h={get:p(!0),set:f,deleteProperty:f},y=new Set(Object.getOwnPropertyNames(Symbol).map(function(e){return Symbol[e]}).filter(function(e){return"symbol"==typeof e})),v=new Set([Object,Array]),w=function(e){return"object"==typeof e&&null!==e&&(!("function"==typeof e.constructor&&e.constructor.name in globalThis&&globalThis[e.constructor.name]===e.constructor)||v.has(e.constructor))&&!o.has(e)};function b(e){return o.has(e)}["copyWithin","fill","pop","reverse","shift","sort","splice","unshift"].forEach(function(e){var r;Array.prototype[e]=(r=Array.prototype[e],function(){var e,n=this,a=[].slice.call(arguments);return b(this)?(t.batch(function(){e=r.call.apply(r,[n].concat(a))}),e):r.call.apply(r,[this].concat(a))})}),exports.ValueIsDeeplyObserved=b,exports.deepSignal=i,exports.peek=function(e,t){u=!0;var r=e[t];try{u=!1}catch(e){}return r},exports.useDeepSignal=function(t){return e.useMemo(function(){return i(t)},[])};
//# sourceMappingURL=deepsignal.js.map
