import{Signal as e,signal as t,computed as r}from"@preact/signals-core";var n=new WeakMap,a=new WeakMap,o=new WeakMap,s=new WeakSet,u=new WeakMap,c=/^\$/,f=!1,i=function(e){if(!d(e))throw new Error("This object can't be observed.");return a.has(e)||a.set(e,g(e,y)),a.get(e)},l=function(e,t){f=!0;var r=e[t];try{f=!1}catch(e){}return r},g=function(e,t){var r=new Proxy(e,t);return s.add(r),r},h=function(){throw new Error("Don't mutate the signals directly.")},p=function(e){return function(s,u,i){var l;if(f)return Reflect.get(s,u,i);var h=e||"$"===u[0]&&"$"!==u;if(!e&&h&&Array.isArray(s)){if("$"===u)return o.has(s)||o.set(s,g(s,v)),o.get(s);h="$length"===u}n.has(i)||n.set(i,new Map);var p=n.get(i),b=h?u.replace(c,""):u;if(p.has(b)||"function"!=typeof(null==(l=Object.getOwnPropertyDescriptor(s,b))?void 0:l.get)){var m=Reflect.get(s,b,i);if(h&&"function"==typeof m)return;if("symbol"==typeof b&&w.has(b))return m;p.has(b)||(d(m)&&(a.has(m)||a.set(m,g(m,y)),m=a.get(m)),p.set(b,t(m)))}else p.set(b,r(function(){return Reflect.get(s,b,i)}));return h?p.get(b):p.get(b).value}},y={get:p(!1),set:function(r,o,s,u){n.has(u)||n.set(u,new Map);var f=n.get(u);if("$"===o[0]&&"$"!==o){s instanceof e||h();var i=o.replace(c,"");return f.set(i,s),Reflect.set(r,i,s.peek(),u)}var l=s;d(s)&&(a.has(s)||a.set(s,g(s,y)),l=a.get(s));var p=Reflect.set(r,o,s,u);return f.has(o)?f.get(o).value=l:f.set(o,t(l)),Array.isArray(r)&&f.has("length")&&(f.get("length").value=r.length),p},defineProperty:function(e,t,r){"$"===t[0]&&"$"!==t&&h();var o=!(t in e),s=n.get(a.get(e)),c=Reflect.defineProperty(e,t,r);return"value"in r&&s&&s.has(t)&&(s.get(t).value=r.value),o&&u.has(e)&&u.get(e).value++,c},deleteProperty:function(e,t){"$"===t[0]&&"$"!==t&&h();var r=n.get(a.get(e)),o=Reflect.deleteProperty(e,t);return r&&r.has(t)&&(r.get(t).value=void 0),u.has(e)&&u.get(e).value++,o},ownKeys:function(e){return u.has(e)||u.set(e,t(0)),u._=u.get(e).value,Reflect.ownKeys(e)}},v={get:p(!0),set:h,deleteProperty:h},w=new Set(Object.getOwnPropertyNames(Symbol).map(function(e){return Symbol[e]}).filter(function(e){return"symbol"==typeof e})),b=new Set([Object,Array]),d=function(e){return"object"==typeof e&&null!==e&&(!("function"==typeof e.constructor&&e.constructor.name in globalThis&&globalThis[e.constructor.name]===e.constructor)||b.has(e.constructor))&&!s.has(e)};export{i as deepSignal,l as peek};
//# sourceMappingURL=deepsignal-core.module.js.map
