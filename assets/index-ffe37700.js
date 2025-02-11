var be=Object.defineProperty;var ke=(e,t,n)=>t in e?be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var D=(e,t,n)=>(ke(e,typeof t!="symbol"?t+"":t,n),n);import"https://tomashubelbauer.github.io/github-pages-local-storage/index.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function L(){}function oe(e){return e()}function Y(){return Object.create(null)}function T(e){e.forEach(oe)}function re(e){return typeof e=="function"}function X(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function $e(e){return Object.keys(e).length===0}function ye(e,...t){if(e==null){for(const l of t)l(void 0);return L}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function ve(e,t,n){e.$$.on_destroy.push(ye(t,n))}function a(e,t){e.appendChild(t)}function P(e,t,n){e.insertBefore(t,n||null)}function N(e){e.parentNode&&e.parentNode.removeChild(e)}function Z(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function g(e){return document.createElement(e)}function E(e){return document.createTextNode(e)}function y(){return E(" ")}function ue(){return E("")}function fe(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function b(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function we(e){return Array.from(e.childNodes)}function I(e,t){t=""+t,e.data!==t&&(e.data=t)}let H;function j(e){H=e}function Ce(){if(!H)throw new Error("Function called outside component initialization");return H}function Oe(e){Ce().$$.on_mount.push(e)}const M=[],ee=[];let R=[];const te=[],Se=Promise.resolve();let U=!1;function Ve(){U||(U=!0,Se.then(de))}function Q(e){R.push(e)}const q=new Set;let F=0;function de(){if(F!==0)return;const e=H;do{try{for(;F<M.length;){const t=M[F];F++,j(t),Ne(t.$$)}}catch(t){throw M.length=0,F=0,t}for(j(null),M.length=0,F=0;ee.length;)ee.pop()();for(let t=0;t<R.length;t+=1){const n=R[t];q.has(n)||(q.add(n),n())}R.length=0}while(M.length);for(;te.length;)te.pop()();U=!1,q.clear(),j(e)}function Ne(e){if(e.fragment!==null){e.update(),T(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Q)}}function Ee(e){const t=[],n=[];R.forEach(l=>e.indexOf(l)===-1?t.push(l):n.push(l)),n.forEach(l=>l()),R=t}const K=new Set;let Le;function pe(e,t){e&&e.i&&(K.delete(e),e.i(t))}function Pe(e,t,n,l){if(e&&e.o){if(K.has(e))return;K.add(e),Le.c.push(()=>{K.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function J(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Ie(e){e&&e.c()}function he(e,t,n){const{fragment:l,after_update:s}=e.$$;l&&l.m(t,n),Q(()=>{const r=e.$$.on_mount.map(oe).filter(re);e.$$.on_destroy?e.$$.on_destroy.push(...r):T(r),e.$$.on_mount=[]}),s.forEach(Q)}function ge(e,t){const n=e.$$;n.fragment!==null&&(Ee(n.after_update),T(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ae(e,t){e.$$.dirty[0]===-1&&(M.push(e),Ve(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function _e(e,t,n,l,s,r,o=null,d=[-1]){const f=H;j(e);const c=e.$$={fragment:null,ctx:[],props:r,update:L,not_equal:s,bound:Y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:Y(),dirty:d,skip_bound:!1,root:t.target||f.$$.root};o&&o(c.root);let p=!1;if(c.ctx=n?n(e,t.props||{},(_,k,...$)=>{const v=$.length?$[0]:k;return c.ctx&&s(c.ctx[_],c.ctx[_]=v)&&(!c.skip_bound&&c.bound[_]&&c.bound[_](v),p&&Ae(e,_)),k}):[],c.update(),p=!0,T(c.before_update),c.fragment=l?l(c.ctx):!1,t.target){if(t.hydrate){const _=we(t.target);c.fragment&&c.fragment.l(_),_.forEach(N)}else c.fragment&&c.fragment.c();t.intro&&pe(e.$$.fragment),he(e,t.target,t.anchor),de()}j(f)}class me{constructor(){D(this,"$$");D(this,"$$set")}$destroy(){ge(this,1),this.$destroy=L}$on(t,n){if(!re(n))return L;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(t){this.$$set&&!$e(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Be="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Be);const G=[];function Fe(e,t=L){let n;const l=new Set;function s(d){if(X(e,d)&&(e=d,n)){const f=!G.length;for(const c of l)c[1](),G.push(c,e);if(f){for(let c=0;c<G.length;c+=2)G[c][0](G[c+1]);G.length=0}}}function r(d){s(d(e))}function o(d,f=L){const c=[d,f];return l.add(c),l.size===1&&(n=t(s,r)||L),d(e),()=>{l.delete(c),l.size===0&&n&&(n(),n=null)}}return{set:s,update:r,subscribe:o}}function ne(e,t,n){const l=e.slice();return l[7]=t[n],l[9]=n,l}function le(e,t,n){const l=e.slice();return l[7]=t[n],l[9]=n,l}function se(e){let t,n,l,s,r,o,d,f=e[7].flag+"",c,p,_,k=e[7].wine+"",$,v,h,O,m=e[7].source+"",u,S,i,w=e[7].price+"",A,x,B,z;function W(){return e[4](e[9])}return{c(){t=g("li"),n=g("label"),l=g("input"),r=y(),o=g("span"),d=g("span"),c=E(f),p=y(),_=g("span"),$=E(k),v=y(),h=g("p"),O=g("span"),u=E(m),S=y(),i=g("span"),A=E(w),x=y(),b(l,"type","checkbox"),l.checked=s=e[7].checked,b(_,"class","wine svelte-1xp3vk0"),b(o,"class","name"),b(i,"class","price"),b(h,"class","details svelte-1xp3vk0"),b(t,"class","svelte-1xp3vk0")},m(V,C){P(V,t,C),a(t,n),a(n,l),a(n,r),a(n,o),a(o,d),a(d,c),a(o,p),a(o,_),a(_,$),a(n,v),a(n,h),a(h,O),a(O,u),a(h,S),a(h,i),a(i,A),a(t,x),B||(z=fe(l,"change",W),B=!0)},p(V,C){e=V,C&1&&s!==(s=e[7].checked)&&(l.checked=s),C&1&&f!==(f=e[7].flag+"")&&I(c,f),C&1&&k!==(k=e[7].wine+"")&&I($,k),C&1&&m!==(m=e[7].source+"")&&I(u,m),C&1&&w!==(w=e[7].price+"")&&I(A,w)},d(V){V&&N(t),B=!1,z()}}}function ie(e){let t,n=e[7].list==="local"&&se(e);return{c(){n&&n.c(),t=ue()},m(l,s){n&&n.m(l,s),P(l,t,s)},p(l,s){l[7].list==="local"?n?n.p(l,s):(n=se(l),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(l){l&&N(t),n&&n.d(l)}}}function ae(e){let t,n,l,s,r,o,d,f=e[7].flag+"",c,p,_,k=e[7].wine+"",$,v,h,O,m=e[7].source+"",u,S,i,w=e[7].price+"",A,x,B,z;function W(){return e[5](e[9])}return{c(){t=g("li"),n=g("label"),l=g("input"),r=y(),o=g("span"),d=g("span"),c=E(f),p=y(),_=g("span"),$=E(k),v=y(),h=g("p"),O=g("span"),u=E(m),S=y(),i=g("span"),A=E(w),x=y(),b(l,"type","checkbox"),l.checked=s=e[7].checked,b(_,"class","wine svelte-1xp3vk0"),b(o,"class","name"),b(i,"class","price"),b(h,"class","details svelte-1xp3vk0"),b(t,"class","svelte-1xp3vk0")},m(V,C){P(V,t,C),a(t,n),a(n,l),a(n,r),a(n,o),a(o,d),a(d,c),a(o,p),a(o,_),a(_,$),a(n,v),a(n,h),a(h,O),a(O,u),a(h,S),a(h,i),a(i,A),a(t,x),B||(z=fe(l,"change",W),B=!0)},p(V,C){e=V,C&1&&s!==(s=e[7].checked)&&(l.checked=s),C&1&&f!==(f=e[7].flag+"")&&I(c,f),C&1&&k!==(k=e[7].wine+"")&&I($,k),C&1&&m!==(m=e[7].source+"")&&I(u,m),C&1&&w!==(w=e[7].price+"")&&I(A,w)},d(V){V&&N(t),B=!1,z()}}}function ce(e){let t,n=e[7].list==="global"&&ae(e);return{c(){n&&n.c(),t=ue()},m(l,s){n&&n.m(l,s),P(l,t,s)},p(l,s){l[7].list==="global"?n?n.p(l,s):(n=ae(l),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(l){l&&N(t),n&&n.d(l)}}}function Ge(e){let t,n,l,s,r,o,d,f,c,p,_,k,$,v=J(e[0]),h=[];for(let u=0;u<v.length;u+=1)h[u]=ie(le(e,v,u));let O=J(e[0]),m=[];for(let u=0;u<O.length;u+=1)m[u]=ce(ne(e,O,u));return{c(){t=g("div"),n=g("p"),n.textContent="🇨🇦  12 Canadian wines to try  🇨🇦",l=y(),s=g("p"),s.textContent="Picking the best local wines is fast becoming a challenge. Here is a look at some of the do-not-miss local heroes being poured at the festival.",r=y(),o=g("ul");for(let u=0;u<h.length;u+=1)h[u].c();d=y(),f=g("div"),c=g("p"),c.textContent="🌎 VIFW’s 12 must-visit booths 🌎",p=y(),_=g("p"),_.textContent="Our annual best booths list is an ode to wineries that bring their best Vancouver. Here’s a list of producers pouring their best in 2025, including one super pick from their line-up. Don’t forget to taste them all.",k=y(),$=g("ul");for(let u=0;u<m.length;u+=1)m[u].c();b(n,"class","section-head svelte-1xp3vk0"),b(s,"class","section-copy svelte-1xp3vk0"),b(o,"class","wine-list svelte-1xp3vk0"),b(t,"class","local-list"),b(c,"class","section-head svelte-1xp3vk0"),b(_,"class","section-copy svelte-1xp3vk0"),b($,"class","wine-list svelte-1xp3vk0"),b(f,"class","global-list svelte-1xp3vk0")},m(u,S){P(u,t,S),a(t,n),a(t,l),a(t,s),a(t,r),a(t,o);for(let i=0;i<h.length;i+=1)h[i]&&h[i].m(o,null);P(u,d,S),P(u,f,S),a(f,c),a(f,p),a(f,_),a(f,k),a(f,$);for(let i=0;i<m.length;i+=1)m[i]&&m[i].m($,null)},p(u,[S]){if(S&5){v=J(u[0]);let i;for(i=0;i<v.length;i+=1){const w=le(u,v,i);h[i]?h[i].p(w,S):(h[i]=ie(w),h[i].c(),h[i].m(o,null))}for(;i<h.length;i+=1)h[i].d(1);h.length=v.length}if(S&5){O=J(u[0]);let i;for(i=0;i<O.length;i+=1){const w=ne(u,O,i);m[i]?m[i].p(w,S):(m[i]=ce(w),m[i].c(),m[i].m($,null))}for(;i<m.length;i+=1)m[i].d(1);m.length=O.length}},i:L,o:L,d(u){u&&(N(t),N(d),N(f)),Z(h,u),Z(m,u)}}}function Me(e,t,n){let l,{data:s=[]}=t;const r=Fe([{flag:"",list:"",wine:"",source:"",price:"",checked:!1}]);ve(e,r,p=>n(0,l=p)),Oe(o);function o(){let p=JSON.parse(localStorage.getItem("checklist"));(!p||!Array.isArray(p)||p.length===0)&&(p=s,localStorage.setItem("checklist",JSON.stringify(p))),r.set(p),r.subscribe(_=>{localStorage.setItem("checklist",JSON.stringify(_))})}function d(p){r.update(_=>_.map((k,$)=>$===p?{...k,checked:!k.checked}:k))}const f=p=>d(p),c=p=>d(p);return e.$$set=p=>{"data"in p&&n(3,s=p.data)},[l,r,d,s,f,c]}class Re extends me{constructor(t){super(),_e(this,t,Me,Ge,X,{data:3})}}const xe={all:[{flag:"🇨🇦",list:"local",wine:"Blue Grouse Estate 2022 Pinot Noir",source:"Cowichan Valley",price:"$36",checked:!1},{flag:"🇨🇦",list:"local",wine:"Da Silva Vineyards 2019 Legado Nobreza",source:"Okanagan Valley",price:"$29",checked:!1},{flag:"🇨🇦",list:"local",wine:"Frind Sparkling Brut NV",source:"Okanagan Valley",price:"$28.99",checked:!1},{flag:"🇨🇦",list:"local",wine:"Jason Parkes Customs - The Hatch 2020 I’m Your Huckleberry",source:"Okanagan Valley",price:"$45",checked:!1},{flag:"🇨🇦",list:"local",wine:"La Frenz Estate 2022 Desperation Hill Vineyard Pinot Noir",source:"Naramata Bench",price:"$31",checked:!1},{flag:"🇨🇦",list:"local",wine:"Lakeside Cellars 2023 Rosé",source:"South Okanagan Valley",price:"$22",checked:!1},{flag:"🇨🇦",list:"local",wine:"Moraine Estate Winery 2022 Pinot Noir",source:"Naramata Bench",price:"$33",checked:!1},{flag:"🇨🇦",list:"local",wine:"Osoyoos Larose 2020 Le Grand Vin",source:"Okanagan Valley",price:"$60",checked:!1},{flag:"🇨🇦",list:"local",wine:"Phantom Creek Estates 2021 Kobau Syrah",source:"Okanagan Valley",price:"$68",checked:!1},{flag:"🇨🇦",list:"local",wine:"Poplar Grove Winery 2020 Cabernet Franc",source:"Okanagan Valley",price:"$39",checked:!1},{flag:"🇨🇦",list:"local",wine:"Quails’ Gate Stewart Family 2022 Reserve Chardonnay",source:"Okanagan Valleya",price:"$50",checked:!1},{flag:"🇨🇦",list:"local",wine:"Unsworth Vineyards 2023 Pinot Gris",source:"Cowichan Valley",price:"$27"},{flag:"🇬🇷",list:"global",wine:"2022 Fine Mavroudi of Thrace Organic, Macedonia",source:"Anatolikos Vineyards, Greece",price:"$56",checked:!1},{flag:"🇮🇹",list:"global",wine:"2018 Montefalco Sagrantino Ennio",source:"Bocale di Valentini, Italy",price:"$96",checked:!1},{flag:"🇫🇷",list:"global",wine:"NV Rosé de Saignee Brut",source:"Champagne Duval-Leroy, France",price:"$70",checked:!1},{flag:"🇨🇱",list:"global",wine:"2021 Coyam Organic Red Blend",source:"Emiliana Organic Vineyards, Chile",price:"$30",checked:!1},{flag:"🇮🇹",list:"global",wine:"2018 Taurasi",source:"Feudi di San Gregorio, Italy",price:"$55",checked:!1},{flag:"🇮🇹",list:"global",wine:"NV Prosecco Asolo Brut by Graziana Grassini",source:"Giusti Wine, Italy",price:"$40",checked:!1},{flag:"🇭🇷",list:"global",wine:"2023 Pošip",source:"Korta Katarina Winery, Croatia",price:"$62.99",checked:!1},{flag:"🇪🇸",wine:"2019 XR Reserva Rioja",source:"Marqués de Riscal, Spain",price:"$48",checked:!1},{flag:"🇨🇦 ",list:"global",wine:"2020 Le Grand Vin",source:"Osoyoos Larose, B.C.",price:"$60",checked:!1},{flag:"🇨🇦 ",list:"global",wine:"2021 Kobau Syrah",source:"Phantom Creek Estates, B.C.",price:"$68",checked:!1},{flag:"🇮🇹",list:"global",wine:"Tenuta Sant'Alfonso 2021 Chianti Classico",source:"Rocca delle Macìe, Italy",price:"$38",checked:!1},{flag:"🇯🇵",list:"global",wine:"2024 Koto Sen NenJunmai Daiginjo Sake",source:"Saito Shuzo, Japan",price:"$62",checked:!1}]};function ze(e){let t,n,l,s,r;return s=new Re({props:{data:xe.all}}),{c(){t=g("header"),t.innerHTML='<h1 class="svelte-59eb3p">24 must-try wines at the 2025 Vancouver International Wine Festival tasting room</h1>',n=y(),l=g("main"),Ie(s.$$.fragment),b(t,"class","svelte-59eb3p")},m(o,d){P(o,t,d),P(o,n,d),P(o,l,d),he(s,l,null),r=!0},p:L,i(o){r||(pe(s.$$.fragment,o),r=!0)},o(o){Pe(s.$$.fragment,o),r=!1},d(o){o&&(N(t),N(n),N(l)),ge(s)}}}function je(e){return[]}class He extends me{constructor(t){super(),_e(this,t,je,ze,X,{})}}new He({target:document.getElementById("app")});
