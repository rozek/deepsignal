import"@preact/signals-react";import{useMemo as e}from"react";import{Signal as t,signal as r,computed as s}from"@preact/signals-core";const n=new WeakMap,o=new WeakMap,a=new WeakMap,c=new WeakSet,l=new WeakMap,g=/^\$/;let i=!1;const f=e=>{if(!d(e))throw new Error("This object can't be observed.");return o.has(e)||o.set(e,h(e,w)),o.get(e)},p=(e,t)=>(i=!0,i=!1,e[t]),h=(e,t)=>{const r=new Proxy(e,t);return c.add(r),r},u=()=>{throw new Error("Don't mutate the signals directly.")},y=e=>(t,c,l)=>{var f;if(i)return Reflect.get(t,c,l);let p=e||"$"===c[0];if(!e&&p&&Array.isArray(t)){if("$"===c)return a.has(t)||a.set(t,h(t,m)),a.get(t);p="$length"===c}n.has(l)||n.set(l,new Map);const u=n.get(l),y=p?c.replace(g,""):c;if(u.has(y)||"function"!=typeof(null==(f=Object.getOwnPropertyDescriptor(t,y))?void 0:f.get)){let e=Reflect.get(t,y,l);if(p&&"function"==typeof e)return;if("symbol"==typeof y&&b.has(y))return e;u.has(y)||(d(e)&&(o.has(e)||o.set(e,h(e,w)),e=o.get(e)),u.set(y,r(e)))}else u.set(y,s(()=>Reflect.get(t,y,l)));return p?u.get(y):u.get(y).value},w={get:y(!1),set(e,s,a,c){n.has(c)||n.set(c,new Map);const i=n.get(c);if("$"===s[0]){a instanceof t||u();const r=s.replace(g,"");return i.set(r,a),Reflect.set(e,r,a.peek(),c)}{let t=a;d(a)&&(o.has(a)||o.set(a,h(a,w)),t=o.get(a));const n=!(s in e),g=Reflect.set(e,s,a,c);return i.has(s)?i.get(s).value=t:i.set(s,r(t)),n&&l.has(e)&&l.get(e).value++,Array.isArray(e)&&i.has("length")&&(i.get("length").value=e.length),g}},deleteProperty(e,t){"$"===t[0]&&u();const r=n.get(o.get(e)),s=Reflect.deleteProperty(e,t);return r&&r.has(t)&&(r.get(t).value=void 0),l.has(e)&&l.get(e).value++,s},ownKeys:e=>(l.has(e)||l.set(e,r(0)),l.get(e),Reflect.ownKeys(e))},m={get:y(!0),set:u,deleteProperty:u},b=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(e=>"symbol"==typeof e)),v=new Set([Object,Array]),d=e=>"object"==typeof e&&null!==e&&(!("function"==typeof e.constructor&&e.constructor.name in globalThis&&globalThis[e.constructor.name]===e.constructor)||v.has(e.constructor))&&!c.has(e),R=t=>e(()=>f(t),[]);export{f as deepSignal,p as peek,R as useDeepSignal};
//# sourceMappingURL=deepsignal-react.mjs.map
