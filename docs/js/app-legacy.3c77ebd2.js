(function(){"use strict";var n={2877:function(n,e,t){t(6992),t(8674),t(9601),t(7727);var r=t(3283),i=t(5974),o=(0,i.Uk)("Home");function u(n,e){var t=(0,i.up)("router-link"),r=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("nav",null,[(0,i.Wm)(t,{to:"/"},{default:(0,i.w5)((function(){return[o]})),_:1})]),(0,i.Wm)(r)],64)}var a=t(89);const c={},l=(0,a.Z)(c,[["render",u]]);var f=l,d=t(5431);(0,d.z)("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(n){console.error("Error during service worker registration:",n)}});var s=t(302),p=t(9584),m=t(5082),v=(t(8309),t(1539),t(8783),t(3948),t(1637),t(4916),t(4765),t(4747),t(7327),t(2618)),g=t(9288),h=t(5543),b=(0,i._)("h2",null,"Recipe",-1),y=(0,i.Uk)(" Recipe Name: "),w=["onUpdate:modelValue"],k=["onUpdate:modelValue"],U=(0,i.aZ)({emits:["recipeChanged"],setup:function(n,e){var t=e.emit,o=(0,v.qj)({name:"",ingredients:[]}),u={name:"",quantity:""},a=function(n){var e=!n.ingredients.length,t=n.ingredients[n.ingredients.length-1];(e||null!==t&&void 0!==t&&t.name)&&n.ingredients.push((0,m.Z)({},u))},c=function(n){return n.name?"fabri - ".concat(n.name):"fabri"},l=function(n){var e=(0,h.jT)(n),t=c(n);window.history.replaceState(n.name,t,e?"?".concat(e):null),document.title=t},f=function(){var n=new URLSearchParams(window.location.search);o.name=n.get("n")||"",n.delete("n"),n.forEach((function(n,e){o.ingredients.push({name:e,quantity:n})})),document.title=c(o)};(0,i.bv)((function(){f()}));var d=function(n){var e;return(0,m.Z)((0,m.Z)({},n),{},{ingredients:(null===n||void 0===n||null===(e=n.ingredients)||void 0===e?void 0:e.filter((function(n){return!!n.name})))||[]})};return(0,i.YP)(o,(function(n){t("recipeChanged",d(n)),a(n),l(n)}),{deep:!0}),function(n,e){return(0,i.wg)(),(0,i.iD)("div",null,[b,(0,i._)("form",{onSubmit:e[1]||(e[1]=(0,r.iM)((function(){}),["prevent"]))},[(0,i._)("label",null,[y,(0,i.wy)((0,i._)("input",{placeholder:"Hot Sweet Sour Salty Something","onUpdate:modelValue":e[0]||(e[0]=function(n){return(0,v.SU)(o).name=n})},null,512),[[r.nr,(0,v.SU)(o).name]])]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,v.SU)(o).ingredients,(function(n,e){return(0,i.wg)(),(0,i.iD)("div",{key:e},[(0,i._)("label",null,[(0,i.Uk)(" Ingredient "+(0,g.zw)(e+1)+": ",1),(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":function(e){return n.name=e}},null,8,w),[[r.nr,n.name]])]),(0,i._)("label",null,[(0,i.Uk)(" Quantity "+(0,g.zw)(e+1)+": ",1),(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":function(e){return n.quantity=e}},null,8,k),[[r.nr,n.quantity]])])])})),128))],32)])}}});const O=U;var S=O,_=(0,i._)("h2",null,"Link Import",-1),j=["href"];function Z(n,e,t,r,o,u){return(0,i.wg)(),(0,i.iD)(i.HY,null,[_,(0,i._)("a",{href:n.bringImportUrl},"Import to bring",8,j),(0,i._)("button",{onClick:e[0]||(e[0]=function(){return n.copyImportLinkToClipboard&&n.copyImportLinkToClipboard.apply(n,arguments)})},"copy link to clipboard")],64)}var P=t(2482),q=t(3087),C=t(2833),R=t(3806),T=t(5937),I=t(2095),L=function(n){(0,R.Z)(t,n);var e=(0,T.Z)(t);function t(){return(0,q.Z)(this,t),e.apply(this,arguments)}return(0,C.Z)(t,[{key:"recipeProviderURL",get:function(){return"https://us-central1-bring-recipe-provider.cloudfunctions.net/recipes/".concat((0,h.cv)(this.recipe))}},{key:"bringImportUrl",get:function(){return"https://api.getbring.com/rest/bringrecipes/deeplink?url=".concat(encodeURIComponent(this.recipeProviderURL),"&source=web&baseQuantity=4&requestedQuantity=4")}},{key:"copyImportLinkToClipboard",value:function(){window.navigator.clipboard.writeText(this.bringImportUrl)}}]),t}(I.w3["with"](function(){function n(){(0,q.Z)(this,n),(0,P.Z)(this,"recipe",(0,I.vg)({required:!0}))}return(0,C.Z)(n)}()));const x=(0,a.Z)(L,[["render",Z]]);var D=x,H={class:"home"},N=(0,i._)("h1",null,"Fast bring recipe importer",-1),Q=(0,i.aZ)({setup:function(n){var e=(0,v.iH)({name:"",ingredients:[]}),t=function(n){e.value=(0,m.Z)((0,m.Z)({},n),{},{ingredients:(0,p.Z)(n.ingredients)})};return function(n,r){return(0,i.wg)(),(0,i.iD)("div",H,[N,(0,i.Wm)(S,{onRecipeChanged:t}),(0,i.Wm)(D,{recipe:e.value},null,8,["recipe"])])}}});const F=Q;var M=F,V=[{path:"/",name:"home",component:M}],E=(0,s.p7)({history:(0,s.PO)("/"),routes:V}),W=E,Y=t(9350),z=(0,Y.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,r.ri)(f).use(z).use(W).mount("#app")},5543:function(n,e,t){e.jT=e.cv=void 0;var r=t(3616);Object.defineProperty(e,"cv",{enumerable:!0,get:function(){return r.encode}});var i=t(4073);Object.defineProperty(e,"jT",{enumerable:!0,get:function(){return i.buildShortRecipeQueryParameter}})},4073:function(n,e,t){function r(n){var e=new URLSearchParams;return n.name&&(e.set("n",n.name),n.ingredients.filter((function(n){return n.name})).forEach((function(n){return e.append(n.name,n.quantity||"")}))),e.toString().replace("=&","&").replace(/=$/g,"")}t(1539),t(8783),t(3948),t(1637),t(8309),t(4747),t(7327),t(4916),t(5306),t(9714),Object.defineProperty(e,"__esModule",{value:!0}),e.buildShortRecipeQueryParameter=void 0,t(3574),e.buildShortRecipeQueryParameter=r},3616:function(n,e,t){var r=t(2)["default"],i=t(7234)["default"];t(8309),t(1539),t(1249),t(9720),t(8862),Object.defineProperty(e,"__esModule",{value:!0}),e.decode=e.encode=void 0;var o=t(211),u=t(9186),a=t(9370),c=function(n){return{n:n.name,i:n.ingredients.map((function(n){return i({},n.name,n.quantity?n.quantity:"")})).reduce((function(n,e){return Object.assign(Object.assign({},n),e)}),{})}},l=function(n){return{name:n.n,ingredients:Object.entries(n.i).map((function(n){var e=r(n,2),t=e[0],i=e[1];return i?{name:t,quantity:i}:{name:t}}))}},f=function(n){return(0,o.default)(a.Buffer.from(u.deflateSync(u.strToU8(JSON.stringify(c(n))))))};e.encode=f;var d=function(n){return l(JSON.parse(u.strFromU8(u.inflateSync(o.default.toBuffer(n)))))};e.decode=d}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,loaded:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}t.m=n,function(){var n=[];t.O=function(e,r,i,o){if(!r){var u=1/0;for(f=0;f<n.length;f++){r=n[f][0],i=n[f][1],o=n[f][2];for(var a=!0,c=0;c<r.length;c++)(!1&o||u>=o)&&Object.keys(t.O).every((function(n){return t.O[n](r[c])}))?r.splice(c--,1):(a=!1,o<u&&(u=o));if(a){n.splice(f--,1);var l=i();void 0!==l&&(e=l)}}return e}o=o||0;for(var f=n.length;f>0&&n[f-1][2]>o;f--)n[f]=n[f-1];n[f]=[r,i,o]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){t.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,r){var i,o,u=r[0],a=r[1],c=r[2],l=0;if(u.some((function(e){return 0!==n[e]}))){for(i in a)t.o(a,i)&&(t.m[i]=a[i]);if(c)var f=c(t)}for(e&&e(r);l<u.length;l++)o=u[l],t.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return t.O(f)},r=self["webpackChunkfabri"]=self["webpackChunkfabri"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(2877)}));r=t.O(r)})();
//# sourceMappingURL=app-legacy.3c77ebd2.js.map