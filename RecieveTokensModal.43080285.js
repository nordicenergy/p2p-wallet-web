parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"EA1q":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.RecieveTokensModal=void 0;var e=o(require("react")),t=require("linaria/react"),r=require("../../common/Modal"),l=require("../../common/QRAddressWidget");function o(e){return e&&e.__esModule?e:{default:e}}var a=(0,t.styled)(r.Modal)({name:"WrapperModal",class:"w7vsqjw"}),s=(0,t.styled)("div")({name:"Content",class:"c11d4nv2"}),d=function(t){var r=t.publicKey,o=t.isSol,d=t.close;return e.default.createElement(a,{title:"Recieve tokens",close:d},e.default.createElement(s,null,e.default.createElement(l.QRAddressWidget,{publicKey:r,isSol:o})))};exports.RecieveTokensModal=d;
},{"react":"n8MK","linaria/react":"fdBc","../../common/Modal":"oAGz","../../common/QRAddressWidget":"WAz1"}],"g8BX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return e.RecieveTokensModal}});var e=require("./RecieveTokensModal");
},{"./RecieveTokensModal":"EA1q"}]},{},[], null)
//# sourceMappingURL=/p2p-wallet-web/RecieveTokensModal.43080285.js.map