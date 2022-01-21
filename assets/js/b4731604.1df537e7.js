"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[984],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),h=o,p=m["".concat(c,".").concat(h)]||m[h]||d[h]||a;return r?n.createElement(p,i(i({ref:t},u),{},{components:r})):n.createElement(p,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8641:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],s={sidebar_position:1},c="Key Management",l={unversionedId:"private-keys/key_management",id:"private-keys/key_management",title:"Key Management",description:"Technically, Sequence Wallet underneath uses smart wallet contracts for accounts. Accounts through the Sequence Wallet are currently secured using three private keys: A Session key, a Guard key and a Torus key. The Session key and Torus key are both generated for the first time when a user creates their Sequence Wallet via social login or email authentication.",source:"@site/docs/private-keys/1_key_management.mdx",sourceDirName:"private-keys",slug:"/private-keys/key_management",permalink:"/private-keys/key_management",editUrl:"https://github.com/0xsequence/docs/edit/master/docs/private-keys/1_key_management.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Sending a Batch of Transactions",permalink:"/build-with-sequence/send_batch_transactions"},next:{title:"Skyweaver",permalink:"/live-dapps/skyweaver"}},u=[],d={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"key-management"},"Key Management"),(0,a.kt)("p",null,"Technically, Sequence Wallet underneath uses smart wallet contracts for accounts. Accounts through the Sequence Wallet are currently secured using three private keys: A Session key, a Guard key and a Torus key. The Session key and Torus key are both generated for the first time when a user creates their Sequence Wallet via social login or email authentication."),(0,a.kt)("p",null,"Session keys are stored on the user\u2019s browser\u2019s local storage (desktop, mobile). This key would be compromised if a malicious actor took control of a device where a session key is stored or had access to a user\u2019s local storage. A Guard key is a key owned by Horizon. This key allows Horizon to help users that lost their Session key and can require additional information from the user in case of suspicious activity, if the user wants this additional protection. This key would be compromised if a malicious actor took control over Horizon servers hosting the Guard key. A Torus key is a key generated by the Torus network, and is generated using a user\u2019s email or social login credentials such as Google or Facebook. This key would be compromised if a malicious actor had control over the social account or email a user used to generate their Torus key. All Torus keys could be compromised if the Torus network itself was compromised."),(0,a.kt)("p",null,"At least two of the three keys are needed to unlock an account. This means that if one of the three keys is lost or compromised, a user can use the two remaining keys to replace the lost/compromised key. For example, if a user lost their device containing their Session Key, they can unlock their Sequence Wallet account by email or social login for the Torus key combined with the Guard key. Once done, another session key is auto-generated and the user is back in their account with all 3 keys accessible again. The improved security compared to traditional blockchain wallet comes from the fact that at least two of these independent keys need to be compromised for a malicious actor to take control of a user\u2019s wallet instead of a single key. The philosophy is that the more independent private-keys the user adds to their wallet, the more secure their wallet becomes, even if each individual key is only moderately secure on their own. "),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"My Title")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"While this is the default setup for new Sequence Wallets, we intend to add the ability for users to add, remove and replace the keys controlling their wallet such that users can choose their preference in terms of security and user experience tradeoff. Even the Horizon key will be able to be removed. Security tips and recommendations will be added to ensure users are well informed of the risks and how to protect themselves against them."))))}m.isMDXComponent=!0}}]);