import"@preact/signals-react";import{useMemo as e}from"react";import{Signal as t,signal as r,computed as n}from"@preact/signals-core";const s=new WeakMap,a=new WeakMap,o=new WeakMap,l=new WeakSet,c=new WeakMap,g=/^\$/;let u=!1;const i=e=>{if(!d(e))throw new Error("This object can't be observed.");return a.has(e)||a.set(e,p(e,w)),a.get(e)},f=(e,t)=>{u=!0;const r=e[t];try{u=!1}catch(e){}return r},p=(e,t)=>{const r=new Proxy(e,t);return l.add(r),r},h=()=>{throw new Error("Don't mutate the signals directly.")},y=e=>(t,l,c)=>{var i;if(u)return Reflect.get(t,l,c);let f=e||"$"===l[0]&&"$"!==l;if(!e&&f&&Array.isArray(t)){if("$"===l)return o.has(t)||o.set(t,p(t,v)),o.get(t);f="$length"===l}s.has(c)||s.set(c,new Map);const h=s.get(c),y=f?l.replace(g,""):l;if(h.has(y)||"function"!=typeof(null==(i=Object.getOwnPropertyDescriptor(t,y))?void 0:i.get)){let e=Reflect.get(t,y,c);if(f&&"function"==typeof e)return;if("symbol"==typeof y&&m.has(y))return e;h.has(y)||(d(e)&&(a.has(e)||a.set(e,p(e,w)),e=a.get(e)),h.set(y,r(e)))}else h.set(y,n(()=>Reflect.get(t,y,c)));return f?h.get(y):h.get(y).value},w={get:y(!1),set(e,n,o,l){s.has(l)||s.set(l,new Map);const c=s.get(l);if("$"===n[0]&&"$"!==n){o instanceof t||h();const r=n.replace(g,"");return c.set(r,o),Reflect.set(e,r,o.peek(),l)}{let t=o;d(o)&&(a.has(o)||a.set(o,p(o,w)),t=a.get(o));const s=Reflect.set(e,n,o,l);return c.has(n)?c.get(n).value=t:c.set(n,r(t)),Array.isArray(e)&&c.has("length")&&(c.get("length").value=e.length),s}},defineProperty(e,t,r){"$"===t[0]&&"$"!==t&&h();const n=!(t in e),o=s.get(a.get(e)),l=Reflect.defineProperty(e,t,r);return"value"in r&&o&&o.has(t)&&(o.get(t).value=r.value),n&&c.has(e)&&c.get(e).value++,l},deleteProperty(e,t){"$"===t[0]&&"$"!==t&&h();const r=s.get(a.get(e)),n=Reflect.deleteProperty(e,t);return r&&r.has(t)&&(r.get(t).value=void 0),c.has(e)&&c.get(e).value++,n},ownKeys:e=>(c.has(e)||c.set(e,r(0)),c.get(e).value=c.get(e).value,Reflect.ownKeys(e))},v={get:y(!0),set:h,deleteProperty:h},m=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(e=>"symbol"==typeof e)),b=new Set([Object,Array]),d=e=>"object"==typeof e&&null!==e&&(!("function"==typeof e.constructor&&e.constructor.name in globalThis&&globalThis[e.constructor.name]===e.constructor)||b.has(e.constructor))&&!l.has(e),$=t=>e(()=>i(t),[]);export{i as deepSignal,f as peek,$ as useDeepSignal};
//# sourceMappingURL=deepsignal-react.mjs.map
