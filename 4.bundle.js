(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{672:function(e,a,t){"use strict";t.r(a)},676:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return _}));var n=t(0),c=t.n(n),l=t(9),s=t(665),r=t(21),o=t(18),m=t.n(o),i=t(115),u=t(74),b=t(30),d=t(64),p=t(10),v=t(116),j=t(236);const O=Object(s.a)("div")({name:"Wrapper",class:"w1od7k37"}),E=Object(s.a)("div")({name:"Header",class:"h1m78m7v"}),y=Object(s.a)("div")({name:"Title",class:"toqsysz"}),f=Object(s.a)("div")({name:"Desc",class:"dncvf08"}),w=Object(s.a)("div")({name:"CloseWrapper",class:"cbc10e6"}),k=Object(s.a)(p.c)({name:"CloseIcon",class:"cw6pzyu"}),g=Object(s.a)("div")({name:"BlockWrapper",class:"b1g8f6bc"}),h=Object(s.a)(p.c)({name:"CheckmarkIcon",class:"czk12w0"}),S=Object(s.a)(p.c)({name:"OtherIcon",class:"o18mbp5l"}),C=Object(s.a)("div")({name:"ProgressWrapper",class:"p12i7cyl"}),T=Object(s.a)("div")({name:"ProgressLine",class:"p112p7y9"}),W=Object(s.a)("div")({name:"Content",class:"cy4f39q"}),x=Object(s.a)("div")({name:"SendWrapper",class:"saak63t"}),I=Object(s.a)("div")({name:"ValueCurrency",class:"v18xlo3e"}),q=Object(s.a)("div")({name:"ValueOriginal",class:"v7wy3mq"}),z=Object(s.a)("div")({name:"SwapWrapper",class:"sir5rf4"}),D=Object(s.a)("div")({name:"SwapColumn",class:"s1f1ms0b"}),F=Object(s.a)("div")({name:"SwapInfo",class:"sdyfgud"}),A=Object(s.a)("div")({name:"SwapBlock",class:"s12s7857"}),M=Object(s.a)(p.c)({name:"SwapIcon",class:"spkwk2s"}),B=Object(s.a)("div")({name:"SwapAmount",class:"scq0vrc"}),V=Object(s.a)("div")({name:"FieldsWrapper",class:"f171vk1k"}),N=Object(s.a)("div")({name:"FieldWrapper",class:"f7utqbi"}),P=Object(s.a)("div")({name:"FieldTitle",class:"f14ew0zk"}),G=Object(s.a)("div")({name:"FieldValue",class:"f1p1xgy"}),J=Object(s.a)(p.c)({name:"CopyIcon",class:"cqac2z6"}),Y=Object(s.a)("div")({name:"CopyWrapper",class:"c18ojgam"}),H=Object(s.a)("div")({name:"Footer",class:"fqp82lk"}),L=Object(s.a)(p.b)({name:"ButtonExplorer",class:"b1moablb"}),_=({type:e,action:a,fromToken:t,fromAmount:s,toToken:o,toAmount:_,close:K})=>{var Q,R;const U=Object(l.c)(),[X,Z]=Object(n.useState)(5),[$,ee]=Object(n.useState)(!1),[ae,te]=Object(n.useState)(!1),[ne,ce]=Object(n.useState)(null),le=Object(l.d)(e=>ne&&e.transaction.items[ne]&&i.a.from(e.transaction.items[ne])||null),se=Object(l.d)(e=>e.wallet.cluster),re=Object(l.d)(e=>e.wallet.tokenAccounts);Object(n.useEffect)(()=>{let e=5;if(!$)return;const a=setInterval(()=>{X<=95?(e+=7,Z(e)):(e=95,Z(e))},2500);return()=>{clearTimeout(a),Z(100)}},[$]);const oe=async()=>{try{ee(!0);const e=Object(r.e)(await U(a));ce(e)}catch(e){te(!0),ee(!1),b.b.error(e.message)}};Object(n.useEffect)(()=>{oe()},[]),Object(n.useEffect)(()=>{const e=async()=>{if(ne){try{if(!Object(r.e)(await U(Object(v.b)(ne))))return void setTimeout(e,3e3)}catch(e){te(!0),ee(!1),b.b.error(e.message)}ee(!1)}};e()},[ne]);const me=Object(n.useMemo)(()=>le?re.find(e=>{var a;return e.address===(null===(a=le.short.destination)||void 0===a?void 0:a.toBase58())}):null,[null==le?void 0:le.short.destination,re]),ie=()=>{K(ne)},ue=!ne||!le,be=ne&&le;return c.a.createElement(O,null,c.a.createElement(E,null,c.a.createElement(y,null,be?"Success":ae?"Something went wrong":"send"===e?"Sending...":"Swapping..."),c.a.createElement(f,null,be?"send"===e?"You’ve successfully sent "+t.symbol:"You’ve successfully swapped tokens":ae?"send"===e?"Tokens have not been debited":"Tokens have not been swapped":"Transaction processing"),c.a.createElement(w,{onClick:ie},c.a.createElement(k,{name:"close"})),c.a.createElement(g,{className:m()({isProcessing:ue,isSuccess:be,isError:ae})},be?c.a.createElement(h,{name:"checkmark"}):c.a.createElement(S,{name:ae?"warning":"timer"}))),c.a.createElement(C,null,c.a.createElement(T,{style:{width:X+"%"}})),c.a.createElement(W,null,"send"===e?c.a.createElement(x,null,c.a.createElement(I,null,me?"+":"-"," ",(null==le?void 0:le.short.amount.toNumber())||t.toMajorDenomination(s).toString()," ",(null==le||null===(Q=le.short.sourceTokenAccount)||void 0===Q?void 0:Q.mint.symbol)||t.symbol),c.a.createElement(q,null,c.a.createElement(u.a,{prefix:me?"+":"-",symbol:(null==le||null===(R=le.short.sourceTokenAccount)||void 0===R?void 0:R.mint.symbol)||t.symbol,value:(null==le?void 0:le.short.amount)||t.toMajorDenomination(s)}))):void 0,"swap"===e&&o&&_?c.a.createElement(z,null,c.a.createElement(D,null,c.a.createElement(F,null,c.a.createElement(d.a,{size:44,symbol:t.symbol}),c.a.createElement(B,null,"- ",t.toMajorDenomination(s).toString()," ",t.symbol))),c.a.createElement(A,null,c.a.createElement(M,{name:"swap"})),c.a.createElement(D,null,c.a.createElement(F,null,c.a.createElement(d.a,{size:44,symbol:o.symbol}),c.a.createElement(B,null,"+ ",o.toMajorDenomination(_).toString()," ",o.symbol)))):void 0,ne?c.a.createElement(V,null,c.a.createElement(N,null,c.a.createElement(P,null,"Transaction ID"),c.a.createElement(G,null,ne," ",c.a.createElement(Y,{onClick:(de=ne,()=>{try{navigator.clipboard.writeText(de),b.b.info("Copied to buffer!")}catch(e){console.error(e)}})},c.a.createElement(J,{name:"copy"}))))):void 0),c.a.createElement(H,null,ae?c.a.createElement(c.a.Fragment,null,c.a.createElement(p.b,{primary:!0,disabled:$,onClick:()=>{oe()}},"Try again"),c.a.createElement(p.b,{lightGray:!0,disabled:$,onClick:ie},"Cancel")):c.a.createElement(c.a.Fragment,null,c.a.createElement(p.b,{primary:!0,onClick:ie},"Done"),ne?c.a.createElement("a",{href:Object(j.a)("tx",ne,se),target:"_blank",rel:"noopener noreferrer noindex",className:"button"},c.a.createElement(L,{lightGray:!0},"View in blockchain explorer")):void 0)));var de};t(672)}}]);
//# sourceMappingURL=4.bundle.js.map