if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const t=e=>r(e,o),l={module:{uri:o},exports:c,require:t};s[o]=Promise.all(i.map((e=>l[e]||t(e)))).then((e=>(n(...e),c)))}}define(["./workbox-03ef139c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"fabri"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/CNAME",revision:"bbbb8850bbe7e552b7dd7091f500b9d5"},{url:"/css/app.9f757b1d.css",revision:null},{url:"/index.html",revision:"a5b008dc113f535ad6b6b89f18de0678"},{url:"/js/about.d9c63cf2.js",revision:null},{url:"/js/app.352a9006.js",revision:null},{url:"/js/chunk-vendors.b40fd9a4.js",revision:null},{url:"/manifest.json",revision:"0c0de7c7e4d3ac829721518c0cc28769"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map