"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[552],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,y=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5797:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:3},c="Gas and Transaction Fees",u={unversionedId:"introduction/gas",id:"introduction/gas",title:"Gas and Transaction Fees",description:"Due to the smart contract nature of Sequence, transaction fees can be abstracted away from users. This allows users to pay the transaction fees in multiple currencies or even have their fees paid by a third party. In addition, users don't have to worry about gas limits or gas price since our relayer system automatically reprice transactions to ensure prompt execution.",source:"@site/docs/introduction/3_gas.mdx",sourceDirName:"introduction",slug:"/introduction/gas",permalink:"/introduction/gas",editUrl:"https://github.com/0xsequence/docs/edit/master/docs/introduction/3_gas.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"Multi-Chain Support",permalink:"/introduction/multi_chain_support"},next:{title:"Ethereum Compatibility",permalink:"/introduction/eth_compat"}},l=[{value:"Transaction Fee Payment Options",id:"transaction-fee-payment-options",children:[],level:2},{value:"How to pay transaction fees for your users",id:"how-to-pay-transaction-fees-for-your-users",children:[],level:2},{value:"Relaying Transaction",id:"relaying-transaction",children:[],level:2}],p={toc:l};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gas-and-transaction-fees"},"Gas and Transaction Fees"),(0,o.kt)("p",null,"Due to the smart contract nature of Sequence, transaction fees can be abstracted away from users. This allows users to pay the transaction fees in multiple currencies or even have their fees paid by a third party. In addition, users don't have to worry about gas limits or gas price since our relayer system automatically reprice transactions to ensure prompt execution."),(0,o.kt)("h2",{id:"transaction-fee-payment-options"},"Transaction Fee Payment Options"),(0,o.kt)("p",null,"Currently users can pay their gas fees with the following currencies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ETH & WETH"),(0,o.kt)("li",{parentName:"ul"},"Matic"),(0,o.kt)("li",{parentName:"ul"},"USDC"),(0,o.kt)("li",{parentName:"ul"},"DAI")),(0,o.kt)("p",null,"Users are shown a fixed fee at the time of transaction confirmation, which is used to reimburse the relayers that will execute the transaction. This fee will not increase even if the transaction is repriced by the relayer. This is a cost the relayers will bear and hence will optimize for."),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/sequence_fee_options.png"})),(0,o.kt)("h2",{id:"how-to-pay-transaction-fees-for-your-users"},"How to pay transaction fees for your users"),(0,o.kt)("p",null,"It is possible for third parties to sponsor the transaction fees of their users in a non-custodial way. We currently haven't integrated this functionality in our SDK, but you can contact us on ",(0,o.kt)("a",{parentName:"p",href:"https://chat.sequence.build/"},"discord")," so we can whitelist your contracts."),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/sequence_free_fee.png"})),(0,o.kt)("h2",{id:"relaying-transaction"},"Relaying Transaction"),(0,o.kt)("p",null,"Since Sequence wallets are smart contracts, they can't execute transactions on their own. As a result, users transactions must be ",(0,o.kt)("em",{parentName:"p"},"relayed"),' by a third party. Technically, anyone can relay these transctions, but the current wallet interface does not allow users to change which relayer they want to use. In the future, we plan on offering more freedom on that front.\nSequence Relayers reprice their transaction every 2 or 3 transactions to ensure fast inclusion in blocks. This means users will never encounter stuck transactions and will not have to worry about managing gas prices. We plan on integrating an "instant" option for advanced users, but this is not yet available.'),(0,o.kt)("p",null,"Add gas section\nEthereum Compatibility\nConnect Wallet section\nextension add isSequence"))}f.isMDXComponent=!0}}]);