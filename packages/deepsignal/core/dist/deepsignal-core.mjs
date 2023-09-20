import{batch as e,Signal as t,signal as r,computed as n}from"@preact/signals-core";const s=new WeakMap,o=new WeakMap,a=new WeakMap,l=new WeakSet,c=new WeakMap,i=/^\$/;let u=!1;const f=e=>{if(!$(e))throw new Error("This object can't be observed.");return o.has(e)||o.set(e,p(e,v)),o.get(e)},h=(e,t)=>{u=!0;const r=e[t];try{u=!1}catch(e){}return r};function g(e,t){const r=t?h(e,t):e;return l.add(r),r}const p=(e,t)=>{const r=new Proxy(e,t);return l.add(r),r},y=()=>{throw new Error("Don't mutate the signals directly.")},w=e=>(t,l,c)=>{var f;if(u)return Reflect.get(t,l,c);let h=e||"$"===l[0]&&"$"!==l;if(!e&&h&&Array.isArray(t)){if("$"===l)return a.has(t)||a.set(t,p(t,b)),a.get(t);h="$length"===l}s.has(c)||s.set(c,new Map);const g=s.get(c),y=h?l.replace(i,""):l;if(g.has(y)||"function"!=typeof(null==(f=Object.getOwnPropertyDescriptor(t,y))?void 0:f.get)){let e=Reflect.get(t,y,c);if(h&&"function"==typeof e)return;if("symbol"==typeof y&&d.has(y))return e;g.has(y)||($(e)&&(o.has(e)||o.set(e,p(e,v)),e=o.get(e)),g.set(y,r(e))),h||(g.get(y).value=e)}else g.set(y,n(()=>Reflect.get(t,y,c)));return h?g.get(y):g.get(y).value},v={get:w(!1),set(e,n,a,l){s.has(l)||s.set(l,new Map);const c=s.get(l);if("$"===n[0]&&"$"!==n){a instanceof t||y();const r=n.replace(i,"");return c.set(r,a),Reflect.set(e,r,a.peek(),l)}{let t=a;$(a)&&(o.has(a)||o.set(a,p(a,v)),t=o.get(a));const s=Reflect.set(e,n,a,l);return c.has(n)?c.get(n).value=t:c.set(n,r(t)),Array.isArray(e)&&c.has("length")&&(c.get("length").value=e.length),s}},defineProperty(e,t,r){"$"===t[0]&&"$"!==t&&y();const n=!(t in e),a=s.get(o.get(e)),l=Reflect.defineProperty(e,t,r);return"value"in r&&a&&a.has(t)&&(a.get(t).value=r.value),n&&c.has(e)&&c.get(e).value++,l},deleteProperty(e,t){"$"===t[0]&&"$"!==t&&y();const r=s.get(o.get(e)),n=Reflect.deleteProperty(e,t);return r&&r.has(t)&&(r.get(t).value=void 0),c.has(e)&&c.get(e).value++,n},ownKeys:e=>(c.has(e)||c.set(e,r(0)),c._=c.get(e).value,Reflect.ownKeys(e))},b={get:w(!0),set:y,deleteProperty:y},d=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(e=>"symbol"==typeof e)),m=new Set([Object,Array]),$=e=>"object"==typeof e&&null!==e&&(!("function"==typeof e.constructor&&e.constructor.name in globalThis&&globalThis[e.constructor.name]===e.constructor)||m.has(e.constructor))&&!l.has(e);function P(e){return o.has(e)}["copyWithin","fill","pop","reverse","shift","sort","splice","unshift"].forEach(t=>{var r;Array.prototype[t]=(r=Array.prototype[t],function(...t){if(P(this)){let n;return e(()=>{n=r.call(this,...t)}),n}return r.call(this,...t)})});export{P as ValueIsDeeplyObserved,f as deepSignal,h as peek,g as shallow};
//# sourceMappingURL=deepsignal-core.mjs.map
