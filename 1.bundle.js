(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{667:function(e,a,t){"use strict";t.r(a)},668:function(e,a,t){"use strict";t.r(a)},669:function(e,a,t){"use strict";t.r(a)},670:function(e,a,t){"use strict";t.r(a)},674:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return ce}));var n=t(0),c=t.n(n),l=t(9),s=t(665),r=t(41),o=t(24),i=t(10);const d=Object(s.a)("div")({name:"Wrapper",class:"wrdya2m"}),m=Object(s.a)("div")({name:"Header",class:"h1vh307k"}),u=Object(s.a)("div")({name:"Title",class:"t1qfjroh"}),b=Object(s.a)("div")({name:"Description",class:"d8b2mdb"}),j=Object(s.a)("div")({name:"CloseWrapper",class:"c135gzia"}),O=Object(s.a)(i.c)({name:"CloseIcon",class:"c1whuod3"}),v=Object(s.a)("div")({name:"Content",class:"c12kmdhp"}),p=({title:e,description:a,close:t,children:n,className:l})=>c.a.createElement(d,{className:l},c.a.createElement(m,null,e?c.a.createElement(u,null,e):void 0,a?c.a.createElement(b,null,a):void 0,t?c.a.createElement(j,{onClick:t},c.a.createElement(O,{name:"close"})):void 0),n?c.a.createElement(v,null,n):void 0);t(667);var E=t(21),f=t(29),k=t(25),w=t.n(k),h=t(119),y=t(164),g=t(26),C=t(18),S=t.n(C),x=t(91),B=t(30),I=t(64),N=t(236);const A=Object(s.a)("div")({name:"Wrapper",class:"w2hsup5"}),M=Object(s.a)(i.c)({name:"ChevronIcon",class:"cjk37vx"}),W=Object(s.a)("div")({name:"ChevronWrapper",class:"c1aewuyh"}),T=Object(s.a)("div")({name:"Main",class:"m1x0i73s"}),z=Object(s.a)("div")({name:"Content",class:"c1lrr91s"}),L=Object(s.a)("div")({name:"InfoWrapper",class:"ifuaxgh"}),q=Object(s.a)("div")({name:"Info",class:"isx2g64"}),F=Object(s.a)("div")({name:"Top",class:"t10180ct"}),P=Object(s.a)("div")({name:"Bottom",class:"b1idmxl7"}),D=Object(s.a)("div")({name:"Additional",class:"a5vkidx"}),J=Object(s.a)("div")({name:"TokenInfo",class:"tjtzobz"}),H=Object(s.a)(i.b)({name:"AddButton",class:"ar7kpio"}),K=Object(s.a)("div")({name:"TokenName",class:"t1n4pegg"}),R=Object(s.a)("div")({name:"TokenAddress",class:"t1p1n0ee"}),V=Object(s.a)("div")({name:"PlusIconWrapper",class:"p1sgvivf"}),$=Object(s.a)(i.c)({name:"PlusIcon",class:"p1jvde4q"}),_=Object(s.a)("div")({name:"BottomInfo",class:"b13pkjo5"}),G=Object(s.a)("a")({name:"ExplorerA",class:"e1tqxv0s"}),Q=Object(s.a)("div")({name:"RightInfo",class:"ryjcfxl"}),U=Object(s.a)("div")({name:"Error",class:"ezozms8"}),X=Object(s.a)(x.a)({name:"LoaderBlockStyled",class:"ldjkvyd"}),Y=({token:e,fee:a,isInfluencedFunds:t,closeModal:s})=>{const r=Object(l.c)(),[o,i]=Object(n.useState)(!1),[d,m]=Object(n.useState)(!1),[u,b]=Object(n.useState)(!1),[j,O]=Object(n.useState)(!1),v=Object(l.d)(e=>e.wallet.cluster),p=()=>{i(!o)};return c.a.createElement(A,null,c.a.createElement(T,{className:S()({isOpen:o})},c.a.createElement(z,{className:S()({isOpen:o})},c.a.createElement(L,{onClick:p},c.a.createElement(I.a,{symbol:e.symbol,size:45}),c.a.createElement(q,null,c.a.createElement(F,null,c.a.createElement("div",null,e.symbol)," ",c.a.createElement("div",null)),c.a.createElement(P,null,c.a.createElement("div",null,e.name)," ",c.a.createElement("div",null)))),c.a.createElement(W,{onClick:p,className:S()({isOpen:o})},c.a.createElement(M,{name:"chevron"}))),c.a.createElement(D,{className:S()({isOpen:o})},c.a.createElement(J,{onClick:()=>{try{navigator.clipboard.writeText(e.address.toBase58()),O(!0),B.b.info(e.address.toBase58()+" Address Copied!"),setTimeout(()=>{O(!1)},2e3)}catch(e){console.error(e)}}},c.a.createElement(K,{className:S()({isMintCopied:j})},j?"Mint Address Copied!":e.symbol+" Mint Address"),c.a.createElement(R,null,e.address.toBase58())),c.a.createElement(H,{primary:!0,disabled:d,onClick:async()=>{try{m(!0),await r(Object(g.f)({token:e}))}catch(e){b(!0),console.log(e)}finally{m(!1)}s()},className:S()({isExecuting:d})},d?c.a.createElement(X,null):c.a.createElement(V,null,c.a.createElement($,{name:"plus"})),d?"Adding":"Add token")),c.a.createElement(_,{className:S()({isOpen:o,isError:u})},u?c.a.createElement(U,null,"Something went wrong. We couldn’t add a token to your list."):c.a.createElement(c.a.Fragment,null,c.a.createElement(G,{href:Object(N.a)("address",e.address.toBase58(),v),target:"_blank",rel:"noopener noreferrer noindex",className:"button"},"View in Solana explorer"),c.a.createElement(Q,{className:S()({isError:t})},`will cost ${a} SOL`,t?" (Influenced funds)":"")))))};t(668);const Z=Object(s.a)("div")({name:"Wrapper",class:"w1wf7dhi"}),ee=Object(s.a)(y.a)({name:"SearchInputStyled",class:"szvbwf7"}),ae=({items:e,closeModal:a})=>{const t=Object(l.c)(),[s,r]=Object(n.useState)(0),[i,d]=Object(n.useState)(0),[m,u]=Object(n.useState)(""),b=Object(l.d)(e=>e.wallet.publicKey),j=Object(l.d)(e=>e.wallet.tokenAccounts.map(e=>o.a.from(e))),O=Object(n.useMemo)(()=>j.find(e=>e.address.toBase58()===b),[j,b]);Object(n.useEffect)(()=>{(async()=>{try{const e=Object(E.e)(await t(Object(g.i)(f.a.span)));d(e),r(new w.a(e).div(10**9).toDecimalPlaces(9).toNumber())}catch(e){console.log(e)}})()},[]);const v=Object(n.useMemo)(()=>{if(!e)return;const a=m.toLowerCase();return a.length>0?e.filter(e=>{var t,n;return(null===(t=e.symbol)||void 0===t?void 0:t.toLowerCase().includes(a))||(null===(n=e.name)||void 0===n?void 0:n.toLowerCase().includes(a))}):e},[m,e]);if(!e)return null;const p=Boolean(null==O?void 0:O.balance.lt(i));return c.a.createElement(Z,null,c.a.createElement(ee,{placeholder:"Search token",value:m,onChange:e=>{const a=e.trim();u(a)}}),(null==v?void 0:v.length)?v.map(e=>c.a.createElement(Y,{key:e.address.toBase58(),token:e,fee:s,isInfluencedFunds:p,closeModal:a})):c.a.createElement(h.a,{type:"search"}))};t(669);const te=Object(s.a)(p)({name:"WrapperModal",class:"wiqml5"}),ne=Object(s.a)("div")({name:"ScrollableContainer",class:"s17ynaak"}),ce=({close:e})=>{const a=Object(l.d)(e=>e.wallet.tokenAccounts.map(e=>o.a.from(e))),t=Object(l.d)(e=>e.global.availableTokens.map(e=>r.a.from(e))),s=Object(n.useMemo)(()=>{if(!t)return;const e=new Set(a.map(e=>e.mint.address.toBase58()));return t.filter(a=>!e.has(a.address.toBase58()))},[t]);return c.a.createElement(te,{title:"Add coins",close:e},(null==s?void 0:s.length)?c.a.createElement(ne,null,c.a.createElement(ae,{items:s,closeModal:()=>{e()}})):void 0)};t(670)}}]);
//# sourceMappingURL=1.bundle.js.map