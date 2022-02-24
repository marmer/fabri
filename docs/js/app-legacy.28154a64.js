(function(){"use strict";var n={3447:function(n,e,t){t(6992),t(8674),t(9601),t(7727);var r=t(5010),i=t(3396),o=(0,i.Uk)("Home");function u(n,e){var t=(0,i.up)("router-link"),r=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("nav",null,[(0,i.Wm)(t,{to:"/"},{default:(0,i.w5)((function(){return[o]})),_:1})]),(0,i.Wm)(r)],64)}var a=t(89);const c={},l=(0,a.Z)(c,[["render",u]]);var f=l,s=t(5431);(0,s.z)("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(n){console.error("Error during service worker registration:",n)}});var d=t(302),p=t(9584),v=t(5082),m=(t(7327),t(1539),t(8309),t(4870)),g=(t(8783),t(3948),t(1637),t(4747),t(4916),t(5306),t(8757),t(9714),t(4765),t(7139)),h=(0,i._)("h2",null,"Recipe",-1),b=(0,i.Uk)(" Recipe Name: "),w=["onUpdate:modelValue"],y=["onUpdate:modelValue"],O=(0,i.aZ)({emits:["recipeChanged"],setup:function(n,e){var t=e.emit,o=(0,m.qj)({name:"",ingredients:[]}),u={name:"",quantity:""},a=function(n){var e=!n.ingredients.length,t=n.ingredients[n.ingredients.length-1];(e||null!==t&&void 0!==t&&t.name)&&n.ingredients.push((0,v.Z)({},u))},c=function(n){return n.name?"fabri - ".concat(n.name):"fabri"},l=function(n){var e=new URLSearchParams;n.name&&(e.set("n",n.name),n.ingredients.filter((function(n){return n.name})).forEach((function(n){return e.append(n.name,n.quantity||"")})));var t=e.toString().replaceAll("=&","&").replace(/=$/g,""),r=c(n);window.history.replaceState(n.name,r,t?"?".concat(t):null),document.title=r},f=function(){var n=new URLSearchParams(window.location.search);o.name=n.get("n")||"",n.delete("n"),n.forEach((function(n,e){o.ingredients.push({name:e,quantity:n})})),document.title=c(o)};return(0,i.bv)((function(){f()})),(0,i.YP)(o,(function(n){t("recipeChanged",n),a(n),l(n)}),{deep:!0}),function(n,e){return(0,i.wg)(),(0,i.iD)("div",null,[h,(0,i._)("form",{onSubmit:e[1]||(e[1]=(0,r.iM)((function(){}),["prevent"]))},[(0,i._)("label",null,[b,(0,i.wy)((0,i._)("input",{placeholder:"Hot Sweet Sour Salty Something","onUpdate:modelValue":e[0]||(e[0]=function(n){return(0,m.SU)(o).name=n})},null,512),[[r.nr,(0,m.SU)(o).name]])]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,m.SU)(o).ingredients,(function(n,e){return(0,i.wg)(),(0,i.iD)("div",{key:e},[(0,i._)("label",null,[(0,i.Uk)(" Ingredient "+(0,g.zw)(e+1)+": ",1),(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":function(e){return n.name=e}},null,8,w),[[r.nr,n.name]])]),(0,i._)("label",null,[(0,i.Uk)(" Quantity "+(0,g.zw)(e+1)+": ",1),(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":function(e){return n.quantity=e}},null,8,y),[[r.nr,n.quantity]])])])})),128))],32)])}}});const S=O;var U=S,k=t(5543),_={class:"home"},j=(0,i._)("h1",null,"Fast bring recipe importer",-1),q=["href"],Z=(0,i.aZ)({setup:function(n){var e=(0,m.iH)({name:"",ingredients:[]}),t=(0,i.Fl)((function(){return"https://us-central1-bring-recipe-provider.cloudfunctions.net/recipes/".concat((0,k.cv)(o(e.value)))})),r=function(n){e.value=(0,v.Z)((0,v.Z)({},n),{},{ingredients:(0,p.Z)(n.ingredients)})};function o(n){var e;return(0,v.Z)((0,v.Z)({},n),{},{ingredients:(null===n||void 0===n||null===(e=n.ingredients)||void 0===e?void 0:e.filter((function(n){return!!n.name})))||[]})}var u=(0,i.Fl)((function(){return"https://api.getbring.com/rest/bringrecipes/deeplink?url=".concat(encodeURIComponent(t.value),"&source=web&baseQuantity=4&requestedQuantity=4")}));return function(n,e){return(0,i.wg)(),(0,i.iD)("div",_,[j,(0,i.Wm)(U,{onRecipeChanged:r}),(0,i._)("a",{href:(0,m.SU)(u)},"Import to bring",8,q)])}}});const P=Z;var C=P,F=[{path:"/",name:"home",component:C}],N=(0,d.p7)({history:(0,d.PO)("/"),routes:F}),R=N,D=t(9350),H=(0,D.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,r.ri)(f).use(H).use(R).mount("#app")},5543:function(n,e,t){e.cv=void 0;var r=t(3616);Object.defineProperty(e,"cv",{enumerable:!0,get:function(){return r.encode}})},3616:function(n,e,t){var r=t(2)["default"],i=t(7234)["default"];t(8309),t(1539),t(1249),t(9720),t(8862),Object.defineProperty(e,"__esModule",{value:!0}),e.decode=e.encode=void 0;var o=t(211),u=t(9186),a=t(9370),c=function(n){return{n:n.name,i:n.ingredients.map((function(n){return i({},n.name,n.quantity?n.quantity:"")})).reduce((function(n,e){return Object.assign(Object.assign({},n),e)}),{})}},l=function(n){return{name:n.n,ingredients:Object.entries(n.i).map((function(n){var e=r(n,2),t=e[0],i=e[1];return i?{name:t,quantity:i}:{name:t}}))}},f=function(n){return(0,o.default)(a.Buffer.from(u.deflateSync(u.strToU8(JSON.stringify(c(n))))))};e.encode=f;var s=function(n){return l(JSON.parse(u.strFromU8(u.inflateSync(o.default.toBuffer(n)))))};e.decode=s}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,loaded:!1,exports:{}};return n[r](o,o.exports,t),o.loaded=!0,o.exports}t.m=n,function(){var n=[];t.O=function(e,r,i,o){if(!r){var u=1/0;for(f=0;f<n.length;f++){r=n[f][0],i=n[f][1],o=n[f][2];for(var a=!0,c=0;c<r.length;c++)(!1&o||u>=o)&&Object.keys(t.O).every((function(n){return t.O[n](r[c])}))?r.splice(c--,1):(a=!1,o<u&&(u=o));if(a){n.splice(f--,1);var l=i();void 0!==l&&(e=l)}}return e}o=o||0;for(var f=n.length;f>0&&n[f-1][2]>o;f--)n[f]=n[f-1];n[f]=[r,i,o]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){t.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,r){var i,o,u=r[0],a=r[1],c=r[2],l=0;if(u.some((function(e){return 0!==n[e]}))){for(i in a)t.o(a,i)&&(t.m[i]=a[i]);if(c)var f=c(t)}for(e&&e(r);l<u.length;l++)o=u[l],t.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return t.O(f)},r=self["webpackChunkfabri"]=self["webpackChunkfabri"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(3447)}));r=t.O(r)})();
//# sourceMappingURL=app-legacy.28154a64.js.map