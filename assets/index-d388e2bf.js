var be=Object.defineProperty;var $e=(e,t,n)=>t in e?be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var q=(e,t,n)=>($e(e,typeof t!="symbol"?t+"":t,n),n);import"https://tomashubelbauer.github.io/github-pages-local-storage/index.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function L(){}function oe(e){return e()}function Z(){return Object.create(null)}function W(e){e.forEach(oe)}function re(e){return typeof e=="function"}function Y(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ke(e){return Object.keys(e).length===0}function ye(e,...t){if(e==null){for(const l of t)l(void 0);return L}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function we(e,t,n){e.$$.on_destroy.push(ye(t,n))}function c(e,t){e.appendChild(t)}function P(e,t,n){e.insertBefore(t,n||null)}function N(e){e.parentNode&&e.parentNode.removeChild(e)}function x(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function g(e){return document.createElement(e)}function E(e){return document.createTextNode(e)}function y(){return E(" ")}function ue(){return E("")}function fe(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function b(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ve(e){return Array.from(e.childNodes)}function I(e,t){t=""+t,e.data!==t&&(e.data=t)}let J;function H(e){J=e}function Ce(){if(!J)throw new Error("Function called outside component initialization");return J}function Oe(e){Ce().$$.on_mount.push(e)}const M=[],ee=[];let R=[];const te=[],Se=Promise.resolve();let Q=!1;function Ve(){Q||(Q=!0,Se.then(de))}function X(e){R.push(e)}const U=new Set;let F=0;function de(){if(F!==0)return;const e=J;do{try{for(;F<M.length;){const t=M[F];F++,H(t),Ne(t.$$)}}catch(t){throw M.length=0,F=0,t}for(H(null),M.length=0,F=0;ee.length;)ee.pop()();for(let t=0;t<R.length;t+=1){const n=R[t];U.has(n)||(U.add(n),n())}R.length=0}while(M.length);for(;te.length;)te.pop()();Q=!1,U.clear(),H(e)}function Ne(e){if(e.fragment!==null){e.update(),W(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(X)}}function Ee(e){const t=[],n=[];R.forEach(l=>e.indexOf(l)===-1?t.push(l):n.push(l)),n.forEach(l=>l()),R=t}const T=new Set;let Le;function he(e,t){e&&e.i&&(T.delete(e),e.i(t))}function Pe(e,t,n,l){if(e&&e.o){if(T.has(e))return;T.add(e),Le.c.push(()=>{T.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function K(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Ie(e){e&&e.c()}function pe(e,t,n){const{fragment:l,after_update:s}=e.$$;l&&l.m(t,n),X(()=>{const r=e.$$.on_mount.map(oe).filter(re);e.$$.on_destroy?e.$$.on_destroy.push(...r):W(r),e.$$.on_mount=[]}),s.forEach(X)}function ge(e,t){const n=e.$$;n.fragment!==null&&(Ee(n.after_update),W(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ae(e,t){e.$$.dirty[0]===-1&&(M.push(e),Ve(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function _e(e,t,n,l,s,r,o=null,d=[-1]){const f=J;H(e);const a=e.$$={fragment:null,ctx:[],props:r,update:L,not_equal:s,bound:Z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:Z(),dirty:d,skip_bound:!1,root:t.target||f.$$.root};o&&o(a.root);let h=!1;if(a.ctx=n?n(e,t.props||{},(_,$,...k)=>{const w=k.length?k[0]:$;return a.ctx&&s(a.ctx[_],a.ctx[_]=w)&&(!a.skip_bound&&a.bound[_]&&a.bound[_](w),h&&Ae(e,_)),$}):[],a.update(),h=!0,W(a.before_update),a.fragment=l?l(a.ctx):!1,t.target){if(t.hydrate){const _=ve(t.target);a.fragment&&a.fragment.l(_),_.forEach(N)}else a.fragment&&a.fragment.c();t.intro&&he(e.$$.fragment),pe(e,t.target,t.anchor),de()}H(f)}class me{constructor(){q(this,"$$");q(this,"$$set")}$destroy(){ge(this,1),this.$destroy=L}$on(t,n){if(!re(n))return L;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(t){this.$$set&&!ke(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Be="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Be);const G=[];function Fe(e,t=L){let n;const l=new Set;function s(d){if(Y(e,d)&&(e=d,n)){const f=!G.length;for(const a of l)a[1](),G.push(a,e);if(f){for(let a=0;a<G.length;a+=2)G[a][0](G[a+1]);G.length=0}}}function r(d){s(d(e))}function o(d,f=L){const a=[d,f];return l.add(a),l.size===1&&(n=t(s,r)||L),d(e),()=>{l.delete(a),l.size===0&&n&&(n(),n=null)}}return{set:s,update:r,subscribe:o}}function ne(e,t,n){const l=e.slice();return l[7]=t[n],l[9]=n,l}function le(e,t,n){const l=e.slice();return l[7]=t[n],l[9]=n,l}function se(e){let t,n,l,s,r,o,d,f=e[7].flag+"",a,h,_,$=e[7].wine+"",k,w,p,O,m=e[7].source+"",u,S,i,v=e[7].price+"",A,z,B,j;function D(){return e[4](e[9])}return{c(){t=g("li"),n=g("label"),l=g("input"),r=y(),o=g("span"),d=g("span"),a=E(f),h=y(),_=g("span"),k=E($),w=y(),p=g("p"),O=g("span"),u=E(m),S=y(),i=g("span"),A=E(v),z=y(),b(l,"type","checkbox"),l.checked=s=e[7].checked,b(_,"class","wine svelte-c13si5"),b(o,"class","name"),b(i,"class","price"),b(p,"class","details svelte-c13si5"),b(t,"class","svelte-c13si5")},m(V,C){P(V,t,C),c(t,n),c(n,l),c(n,r),c(n,o),c(o,d),c(d,a),c(o,h),c(o,_),c(_,k),c(n,w),c(n,p),c(p,O),c(O,u),c(p,S),c(p,i),c(i,A),c(t,z),B||(j=fe(l,"change",D),B=!0)},p(V,C){e=V,C&1&&s!==(s=e[7].checked)&&(l.checked=s),C&1&&f!==(f=e[7].flag+"")&&I(a,f),C&1&&$!==($=e[7].wine+"")&&I(k,$),C&1&&m!==(m=e[7].source+"")&&I(u,m),C&1&&v!==(v=e[7].price+"")&&I(A,v)},d(V){V&&N(t),B=!1,j()}}}function ie(e){let t,n=e[7].list==="local"&&se(e);return{c(){n&&n.c(),t=ue()},m(l,s){n&&n.m(l,s),P(l,t,s)},p(l,s){l[7].list==="local"?n?n.p(l,s):(n=se(l),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(l){l&&N(t),n&&n.d(l)}}}function ce(e){let t,n,l,s,r,o,d,f=e[7].flag+"",a,h,_,$=e[7].wine+"",k,w,p,O,m=e[7].source+"",u,S,i,v=e[7].price+"",A,z,B,j;function D(){return e[5](e[9])}return{c(){t=g("li"),n=g("label"),l=g("input"),r=y(),o=g("span"),d=g("span"),a=E(f),h=y(),_=g("span"),k=E($),w=y(),p=g("p"),O=g("span"),u=E(m),S=y(),i=g("span"),A=E(v),z=y(),b(l,"type","checkbox"),l.checked=s=e[7].checked,b(_,"class","wine svelte-c13si5"),b(o,"class","name"),b(i,"class","price"),b(p,"class","details svelte-c13si5"),b(t,"class","svelte-c13si5")},m(V,C){P(V,t,C),c(t,n),c(n,l),c(n,r),c(n,o),c(o,d),c(d,a),c(o,h),c(o,_),c(_,k),c(n,w),c(n,p),c(p,O),c(O,u),c(p,S),c(p,i),c(i,A),c(t,z),B||(j=fe(l,"change",D),B=!0)},p(V,C){e=V,C&1&&s!==(s=e[7].checked)&&(l.checked=s),C&1&&f!==(f=e[7].flag+"")&&I(a,f),C&1&&$!==($=e[7].wine+"")&&I(k,$),C&1&&m!==(m=e[7].source+"")&&I(u,m),C&1&&v!==(v=e[7].price+"")&&I(A,v)},d(V){V&&N(t),B=!1,j()}}}function ae(e){let t,n=e[7].list==="global"&&ce(e);return{c(){n&&n.c(),t=ue()},m(l,s){n&&n.m(l,s),P(l,t,s)},p(l,s){l[7].list==="global"?n?n.p(l,s):(n=ce(l),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(l){l&&N(t),n&&n.d(l)}}}function Ge(e){let t,n,l,s,r,o,d,f,a,h,_,$,k,w=K(e[0]),p=[];for(let u=0;u<w.length;u+=1)p[u]=ie(le(e,w,u));let O=K(e[0]),m=[];for(let u=0;u<O.length;u+=1)m[u]=ae(ne(e,O,u));return{c(){t=g("div"),n=g("p"),n.textContent="🇨🇦  12 Canadian wines to try  🇨🇦",l=y(),s=g("p"),s.textContent="Picking the best local wines is fast becoming a challenge. Here is a look at some of the do-not-miss local heroes being poured at the festival.",r=y(),o=g("ul");for(let u=0;u<p.length;u+=1)p[u].c();d=y(),f=g("div"),a=g("p"),a.textContent="🌎  12 must-visit booths at the VIFW  🌎",h=y(),_=g("p"),_.textContent="Our annual best booths list is an ode to wineries that bring their best Vancouver. Here’s a list of producers pouring their best in 2025, including one super pick from their line-up. Don’t forget to taste them all.",$=y(),k=g("ul");for(let u=0;u<m.length;u+=1)m[u].c();b(n,"class","section-head svelte-c13si5"),b(s,"class","section-copy svelte-c13si5"),b(o,"class","wine-list svelte-c13si5"),b(t,"class","local-list"),b(a,"class","section-head svelte-c13si5"),b(_,"class","section-copy svelte-c13si5"),b(k,"class","wine-list svelte-c13si5"),b(f,"class","global-list svelte-c13si5")},m(u,S){P(u,t,S),c(t,n),c(t,l),c(t,s),c(t,r),c(t,o);for(let i=0;i<p.length;i+=1)p[i]&&p[i].m(o,null);P(u,d,S),P(u,f,S),c(f,a),c(f,h),c(f,_),c(f,$),c(f,k);for(let i=0;i<m.length;i+=1)m[i]&&m[i].m(k,null)},p(u,[S]){if(S&5){w=K(u[0]);let i;for(i=0;i<w.length;i+=1){const v=le(u,w,i);p[i]?p[i].p(v,S):(p[i]=ie(v),p[i].c(),p[i].m(o,null))}for(;i<p.length;i+=1)p[i].d(1);p.length=w.length}if(S&5){O=K(u[0]);let i;for(i=0;i<O.length;i+=1){const v=ne(u,O,i);m[i]?m[i].p(v,S):(m[i]=ae(v),m[i].c(),m[i].m(k,null))}for(;i<m.length;i+=1)m[i].d(1);m.length=O.length}},i:L,o:L,d(u){u&&(N(t),N(d),N(f)),x(p,u),x(m,u)}}}function Me(e,t,n){let l,{data:s=[]}=t;const r=Fe([{flag:"",list:"",wine:"",source:"",price:"",checked:!1}]);we(e,r,h=>n(0,l=h)),Oe(o);function o(){let h=JSON.parse(localStorage.getItem("checklist"));(!h||!Array.isArray(h)||h.length===0)&&(h=s,localStorage.setItem("checklist",JSON.stringify(h))),r.set(h),r.subscribe(_=>{localStorage.setItem("checklist",JSON.stringify(_))})}function d(h){r.update(_=>_.map(($,k)=>k===h?{...$,checked:!$.checked}:$))}const f=h=>d(h),a=h=>d(h);return e.$$set=h=>{"data"in h&&n(3,s=h.data)},[l,r,d,s,f,a]}class Re extends me{constructor(t){super(),_e(this,t,Me,Ge,Y,{data:3})}}const ze={all:[{flag:"🇨🇦",list:"local",wine:"Blue Grouse Estate 2022 Pinot Noir",source:"Cowichan Valley",price:"$36",checked:!1},{flag:"🇨🇦",list:"local",wine:"Da Silva Vineyards 2019 Legado Nobreza",source:"Okanagan Valley",price:"$29",checked:!1},{flag:"🇨🇦",list:"local",wine:"Frind Sparkling Brut NV",source:"Okanagan Valley",price:"$28.99",checked:!1},{flag:"🇨🇦",list:"local",wine:"Jason Parkes Customs - The Hatch 2020 I’m Your Huckleberry",source:"Okanagan Valley",price:"$45",checked:!1},{flag:"🇨🇦",list:"local",wine:"La Frenz Estate 2022 Desperation Hill Vineyard Pinot Noir",source:"Naramata Bench",price:"$31",checked:!1},{flag:"🇨🇦",list:"local",wine:"Lakeside Cellars 2023 Rosé",source:"South Okanagan Valley",price:"$22",checked:!1},{flag:"🇨🇦",list:"local",wine:"Moraine Estate Winery 2022 Pinot Noir",source:"Naramata Bench",price:"$33",checked:!1},{flag:"🇨🇦",list:"local",wine:"Osoyoos Larose 2020 Le Grand Vin",source:"Okanagan Valley",price:"$60",checked:!1},{flag:"🇨🇦",list:"local",wine:"Phantom Creek Estates 2021 Kobau Syrah",source:"Okanagan Valley",price:"$68",checked:!1},{flag:"🇨🇦",list:"local",wine:"Poplar Grove Winery 2020 Cabernet Franc",source:"Okanagan Valley",price:"$39",checked:!1},{flag:"🇨🇦",list:"local",wine:"Quails’ Gate Stewart Family 2022 Reserve Chardonnay",source:"Okanagan Valleya",price:"$50",checked:!1},{flag:"🇨🇦",list:"local",wine:"Unsworth Vineyards 2023 Pinot Gris",source:"Cowichan Valley",price:"$27"},{flag:"🇬🇷",list:"global",wine:"2022 Fine Mavroudi of Thrace Organic, Macedonia",source:"Anatolikos Vineyards, Greece",price:"$56",checked:!1},{flag:"🇮🇹",list:"global",wine:"2018 Montefalco Sagrantino Ennio",source:"Bocale di Valentini, Italy",price:"$96",checked:!1},{flag:"🇫🇷",list:"global",wine:"NV Rosé de Saignee Brut",source:"Champagne Duval-Leroy, France",price:"$70",checked:!1},{flag:"🇨🇱",list:"global",wine:"2021 Coyam Organic Red Blend",source:"Emiliana Organic Vineyards, Chile",price:"$30",checked:!1},{flag:"🇮🇹",list:"global",wine:"2018 Taurasi",source:"Feudi di San Gregorio, Italy",price:"$55",checked:!1},{flag:"🇮🇹",list:"global",wine:"NV Prosecco Asolo Brut by Graziana Grassini",source:"Giusti Wine, Italy",price:"$40",checked:!1},{flag:"🇭🇷",list:"global",wine:"2023 Pošip",source:"Korta Katarina Winery, Croatia",price:"$62.99",checked:!1},{flag:"🇪🇸",wine:"2019 XR Reserva Rioja",source:"Marqués de Riscal, Spain",price:"$48",checked:!1},{flag:"🇨🇦 ",list:"global",wine:"2020 Le Grand Vin",source:"Osoyoos Larose, B.C.",price:"$60",checked:!1},{flag:"🇨🇦 ",list:"global",wine:"2021 Kobau Syrah",source:"Phantom Creek Estates, B.C.",price:"$68",checked:!1},{flag:"🇮🇹",list:"global",wine:"Tenuta Sant'Alfonso 2021 Chianti Classico",source:"Rocca delle Macìe, Italy",price:"$38",checked:!1},{flag:"🇯🇵",list:"global",wine:"2024 Koto Sen NenJunmai Daiginjo Sake",source:"Saito Shuzo, Japan",price:"$62",checked:!1}]};function je(e){let t,n,l,s,r;return s=new Re({props:{data:ze.all}}),{c(){t=g("header"),t.innerHTML='<h1 class="svelte-59eb3p">24 must-try wines at the 2025 Vancouver International Wine Festival tasting room</h1>',n=y(),l=g("main"),Ie(s.$$.fragment),b(t,"class","svelte-59eb3p")},m(o,d){P(o,t,d),P(o,n,d),P(o,l,d),pe(s,l,null),r=!0},p:L,i(o){r||(he(s.$$.fragment,o),r=!0)},o(o){Pe(s.$$.fragment,o),r=!1},d(o){o&&(N(t),N(n),N(l)),ge(s)}}}function He(e){return[]}class Je extends me{constructor(t){super(),_e(this,t,He,je,Y,{})}}new Je({target:document.getElementById("app")});
