(function(){"use strict";var n={545:function(n,e,t){t(6992),t(8674),t(9601),t(7727);var r=t(5010),i=t(3396),o=(0,i.Uk)("Home");function u(n,e){var t=(0,i.up)("router-link"),r=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("nav",null,[(0,i.Wm)(t,{to:"/"},{default:(0,i.w5)((function(){return[o]})),_:1})]),(0,i.Wm)(r)],64)}var c=t(89);const a={},l=(0,c.Z)(a,[["render",u]]);var s=l,f=t(5431);(0,f.z)("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(n){console.error("Error during service worker registration:",n)}});var d=t(678),p=(t(8309),t(7139)),g=(0,i._)("h2",null,"Recipe",-1),m=(0,i.Uk)(" Recipe Name: "),h=["onUpdate:modelValue"],v=["onUpdate:modelValue"];function b(n,e,t,o,u,c){return(0,i.wg)(),(0,i.iD)("div",null,[g,(0,i._)("form",{onSubmit:e[1]||(e[1]=(0,r.iM)((function(){}),["prevent"]))},[(0,i._)("label",null,[m,(0,i.wy)((0,i._)("input",{placeholder:"Hot Sweet Sour Salty Something","onUpdate:modelValue":e[0]||(e[0]=function(e){return n.currentRecipe.name=e})},null,512),[[r.nr,n.currentRecipe.name]])]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.currentRecipe.ingredients,(function(n,e){return(0,i.wg)(),(0,i.iD)("div",{key:e},[(0,i._)("label",null,[(0,i.Uk)(" Ingredient "+(0,p.zw)(e+1)+": ",1),(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":function(e){return n.name=e}},null,8,h),[[r.nr,n.name]])]),(0,i._)("label",null,[(0,i.Uk)(" Quantity "+(0,p.zw)(e+1)+": ",1),(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":function(e){return n.quantity=e}},null,8,v),[[r.nr,n.quantity]])])])})),128))],32)])}var w=t(5082),y=(t(1539),t(8783),t(3948),t(1637),t(4747),t(7327),t(4916),t(5306),t(8757),t(9714),t(4765),t(4870)),S={name:"",quantity:""},k=(0,y.qj)({name:"",ingredients:[]}),U=function(n){var e=!n.ingredients.length,t=n.ingredients[n.ingredients.length-1];(e||null!==t&&void 0!==t&&t.name)&&n.ingredients.push((0,w.Z)({},S))},O=function(n){return n.name?"fabri - ".concat(n.name):"fabri"},V=function(n){var e=new URLSearchParams;n.name&&(e.set("n",n.name),n.ingredients.filter((function(n){return n.name})).forEach((function(n){return e.append(n.name,n.quantity)})));var t=e.toString().replaceAll("=&","&").replace(/=$/g,""),r=O(n);window.history.replaceState(n.name,r,t?"?".concat(t):null),document.title=r},_=function(n){U(n),V(n)},A=function(){var n=new URLSearchParams(window.location.search);k.name=n.get("n")||"",n.delete("n"),n.forEach((function(n,e){k.ingredients.push({name:e,quantity:n})})),document.title=O(k)},F=(0,i.Bz)(),q={emits:F,setup:function(){return(0,i.bv)((function(){A()})),(0,i.YP)(k,_,{deep:!0}),{currentRecipe:k}}};const K=(0,c.Z)(q,[["render",b]]);var J=K,R={class:"home"},j=(0,i._)("h1",null,"Fast bring recipe importer",-1),L=(0,i.Uk)(" Bring import URL: "),D=(0,i._)("label",null,[(0,i.Uk)("Bring import URL: "),(0,i._)("a",{href:"https://api.getbring.com/rest/bringrecipes/deeplink?url=https%3A%2F%2Fus-central1-bring-recipe-provider.cloudfunctions.net%2Frecipes%2Fq1bKU7JS8kgtSlJwKi0pSS1S0lHKVLKqVoLyrJSMDAzSgYIgJcVKVnmlOTk6SsGJOSVAKUOFgsy85Ayl2loA&source=web&baseQuantity=4&requestedQuantity=4"},"https://api.getbring.com/rest/bringrecipes/deeplink?url=https%3A%2F%2Fus-central1-bring-recipe-provider.cloudfunctions.net%2Frecipes%2Fq1bKU7JS8kgtSlJwKi0pSS1S0lHKVLKqVoLyrJSMDAzSgYIgJcVKVnmlOTk6SsGJOSVAKUOFgsy85Ayl2loA&source=web&baseQuantity=4&requestedQuantity=4")],-1),z=(0,i.aZ)({setup:function(n){return function(n,e){return(0,i.wg)(),(0,i.iD)("div",R,[j,(0,i.Wm)(J),L,D])}}});const H=z;var P=H,M=[{path:"/",name:"home",component:P}],Q=(0,d.p7)({history:(0,d.PO)("/"),routes:M}),T=Q,Y=t(9350),x=(0,Y.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,r.ri)(s).use(x).use(T).mount("#app")}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,loaded:!1,exports:{}};return n[r](o,o.exports,t),o.loaded=!0,o.exports}t.m=n,function(){var n=[];t.O=function(e,r,i,o){if(!r){var u=1/0;for(s=0;s<n.length;s++){r=n[s][0],i=n[s][1],o=n[s][2];for(var c=!0,a=0;a<r.length;a++)(!1&o||u>=o)&&Object.keys(t.O).every((function(n){return t.O[n](r[a])}))?r.splice(a--,1):(c=!1,o<u&&(u=o));if(c){n.splice(s--,1);var l=i();void 0!==l&&(e=l)}}return e}o=o||0;for(var s=n.length;s>0&&n[s-1][2]>o;s--)n[s]=n[s-1];n[s]=[r,i,o]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){t.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,r){var i,o,u=r[0],c=r[1],a=r[2],l=0;if(u.some((function(e){return 0!==n[e]}))){for(i in c)t.o(c,i)&&(t.m[i]=c[i]);if(a)var s=a(t)}for(e&&e(r);l<u.length;l++)o=u[l],t.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return t.O(s)},r=self["webpackChunkfabri"]=self["webpackChunkfabri"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(545)}));r=t.O(r)})();
//# sourceMappingURL=app-legacy.acfa0dbe.js.map