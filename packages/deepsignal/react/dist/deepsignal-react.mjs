import"@preact/signals-react";import{useMemo as t}from"react";import{batch as e,Signal as r,signal as n,computed as o}from"@preact/signals-core";const s=new WeakMap,a=new WeakMap,l=new WeakMap,c=new WeakSet,i=new WeakMap,p=/^\$/;let u=!1;const h=t=>{if(!d(t))throw new Error("This object can't be observed.");return a.has(t)||a.set(t,y(t,m)),a.get(t)},f=(t,e)=>{u=!0;const r=t[e];try{u=!1}catch(t){}return r},y=(t,e)=>{const r=new Proxy(t,e);return c.add(r),r},g=()=>{throw new Error("Don't mutate the signals directly.")},w=t=>(e,r,c)=>{var i;if(u)return Reflect.get(e,r,c);let h=t||"$"===r[0]&&"$"!==r;if(!t&&h&&Array.isArray(e)){if("$"===r)return l.has(e)||l.set(e,y(e,v)),l.get(e);h="$length"===r}s.has(c)||s.set(c,new Map);const f=s.get(c),g=h?r.replace(p,""):r;if(f.has(g)||"function"!=typeof(null==(i=Object.getOwnPropertyDescriptor(e,g))?void 0:i.get)){let t=Reflect.get(e,g,c);if(h&&"function"==typeof t)return;if("symbol"==typeof g&&b.has(g))return t;f.has(g)||(d(t)&&(a.has(t)||a.set(t,y(t,m)),t=a.get(t)),f.set(g,n(t)))}else f.set(g,o(()=>Reflect.get(e,g,c)));return h?f.get(g):f.get(g).value},m={get:w(!1),set(t,e,o,l){s.has(l)||s.set(l,new Map);const c=s.get(l);if("$"===e[0]&&"$"!==e){o instanceof r||g();const n=e.replace(p,"");return c.set(n,o),Reflect.set(t,n,o.peek(),l)}{let r=o;d(o)&&(a.has(o)||a.set(o,y(o,m)),r=a.get(o));const s=Reflect.set(t,e,o,l);return c.has(e)?c.get(e).value=r:c.set(e,n(r)),Array.isArray(t)&&c.has("length")&&(c.get("length").value=t.length),s}},defineProperty(t,e,r){"$"===e[0]&&"$"!==e&&g();const n=!(e in t),o=s.get(a.get(t)),l=Reflect.defineProperty(t,e,r);return"value"in r&&o&&o.has(e)&&(o.get(e).value=r.value),n&&i.has(t)&&i.get(t).value++,l},deleteProperty(t,e){"$"===e[0]&&"$"!==e&&g();const r=s.get(a.get(t)),n=Reflect.deleteProperty(t,e);return r&&r.has(e)&&(r.get(e).value=void 0),i.has(t)&&i.get(t).value++,n},ownKeys:t=>(i.has(t)||i.set(t,n(0)),i._=i.get(t).value,Reflect.ownKeys(t))},v={get:w(!0),set:g,deleteProperty:g},b=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(t=>"symbol"==typeof t)),A=new Set([Object,Array]),d=t=>"object"==typeof t&&null!==t&&(!("function"==typeof t.constructor&&t.constructor.name in globalThis&&globalThis[t.constructor.name]===t.constructor)||A.has(t.constructor))&&!c.has(t);function $(t){return c.has(t)}const P=Array.prototype.pop;Array.prototype.pop=function(){if($(this)){let t;return e(()=>{t=P.call(this)}),t}return P.call(this)};const R=Array.prototype.shift;Array.prototype.shift=function(){if($(this)){let t;return e(()=>{t=R.call(this)}),t}return R.call(this)};const k=Array.prototype.unshift;Array.prototype.unshift=function(...t){if($(this)){let r;return e(()=>{r=k.call(this,...t)}),r}return k.call(this,...t)};const M=Array.prototype.splice;Array.prototype.splice=function(...t){if($(this)){let r;return e(()=>{r=M.call(this,...t)}),r}return M.call(this,...t)};const j=e=>t(()=>h(e),[]);export{$ as ValueIsDeeplyObserved,h as deepSignal,f as peek,j as useDeepSignal};
//# sourceMappingURL=deepsignal-react.mjs.map
