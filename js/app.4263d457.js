(function(t){function e(e){for(var a,i,s=e[0],l=e[1],h=e[2],c=0,u=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&u.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(u.length)u.shift()();return r.push.apply(r,h||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(a=!1)}a&&(r.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},i={app:0},o={app:0},r=[];function s(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"26b7d5bf"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={about:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"ea6e1f6f"}[t]+".css",o=l.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var h=r[s],c=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(c===a||c===o))return e()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){h=u[s],c=h.getAttribute("data-href");if(c===a||c===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete i[t],d.parentNode.removeChild(d),n(r)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){i[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=r);var h,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=s(t);var u=new Error;h=function(e){c.onerror=c.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,n[1](u)}o[t]=void 0}};var d=setTimeout((function(){h({type:"timeout",target:c})}),12e4);c.onerror=c.onload=h,document.head.appendChild(c)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/ImageVoronoi/",l.oe=function(t){throw console.error(t),t};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],c=h.push.bind(h);h.push=e,h=h.slice();for(var u=0;u<h.length;u++)e(h[u]);var d=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02db":function(t,e,n){t.exports=n.p+"img/sample.ffa0bc61.jpg"},"034f":function(t,e,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"1e63":function(t,e,n){"use strict";var a=n("c392"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("About")]),t._v(" | "),n("router-link",{attrs:{to:"/IV"}},[t._v("Image Voronoi")])],1),n("router-view")],1)},o=[],r=(n("034f"),n("2877")),s={},l=Object(r["a"])(s,i,o,!1,null,null,null),h=l.exports,c=(n("d3b7"),n("8c4f")),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ImageVoronoi")},d=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"IV"},[n("div",{staticClass:"nav-wrapper light-bg",attrs:{id:"input-icon"}},[n("div",{staticClass:"control-wrapper"},[n("v-file-input",{staticClass:"text-input-light",attrs:{label:"Upload",flat:"",dense:"",dark:"",type:"file","prepend-icon":"mdi-camera"},on:{change:function(e){return t.onFileChange(e)}}}),n("label",{staticClass:"control-label"})],1),n("div",{staticClass:"control-wrapper"},[n("label",{staticClass:"control-label"},[t._v("Sites")]),n("label",{staticClass:"control-input control-number number"},[t._v(t._s(t.num_sites))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.num_sites,expression:"num_sites"}],staticClass:"control-input control-slider slider",attrs:{type:"range",min:"1",max:"100",maxlength:"2"},domProps:{value:t.num_sites},on:{change:function(e){return t.changeNumCite()},__r:function(e){t.num_sites=e.target.value}}})]),n("div",{staticClass:"control-wrapper"},[n("label",{staticClass:"selection-label"},[n("input",{staticClass:"control-input checkbox",attrs:{type:"checkbox",id:"fill-input"},domProps:{checked:t.ifRGB},on:{change:function(e){return t.changeMode()}}}),t._v(" Get High ")])]),n("div",{staticClass:"control-wrapper"},[n("label",{staticClass:"control-label"},[t._v("Drug dosage")]),n("label",{staticClass:"control-input control-number number"},[t._v(t._s(t.dosage))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.dosage,expression:"dosage"}],staticClass:"control-input control-slider slider",attrs:{type:"range",min:"0",max:"100",maxlength:"2"},domProps:{value:t.dosage},on:{change:function(e){return t.changeRGB()},__r:function(e){t.dosage=e.target.value}}})]),n("div",{staticClass:"control-wrapper"},[n("label",{staticClass:"selection-label"},[n("input",{staticClass:"control-input checkbox",attrs:{type:"checkbox",id:"fill-input"},domProps:{checked:t.inversePP},on:{change:function(e){return t.changePP()}}}),t._v(" Inverse PP ")])]),n("div",{staticClass:"control-wrapper"},[n("v-btn",{staticClass:"output-button",attrs:{small:"",color:"rgb(36, 77, 138)"},on:{click:function(e){return t.downloadImage()}}},[t._v("Download Image")]),n("br")],1)]),n("div",{staticClass:"canvas-wrapper"},[n("canvas",{ref:"myCanvas",staticClass:"canvas",attrs:{id:"canvas"}})])])},g=[],m=(n("4160"),n("c975"),n("159b"),n("2909")),v=n("66a1"),p=n.n(v),w=n("21a6"),b=n.n(w),y={name:"ImageVoronoi",data:function(){return{canvas:null,img:null,sites:[],num_sites:10,ifRGB:!1,inversePP:!1,dosage:0}},methods:{drawInit:function(){var t=n("02db");this.img=new Image,this.img.src=t,this.updateImage()},drawImg:function(t){var e=this.canvas.getContext("2d");while(this.canvas.height!=this.img.height)this.canvas.height=this.img.height,this.canvas.width=this.img.width;e.drawImage(this.img,0,0),this.drawVoronoi(t)},drawVoronoi:function(t){t&&(this.iv=new p.a(this.canvas,40*this.num_sites,this.inversePP)),this.ifRGB?this.iv.RGBVoronoi(this.dosage):this.iv.FillVoronoi(0)},updateImage:function(){var t=this;this.img.onload=function(){t.drawImg(!0)}},updateSite:function(){this.iv.num_sites=40*this.num_sites,this.drawImg(!1)},changeNumCite:function(){console.log("Number of sites changed to",50*this.num_sites);var t=this;t.updateSite()},changeRGB:function(){this.ifRGB&&this.drawImg(!1)},onFileChange:function(t){var e=this,n=this,a=t;if(a){var i=new FileReader;i.onload=function(t){e.img=new Image,e.img.src=t.target.result,n.updateImage()},i.readAsDataURL(a)}},changeMode:function(){this.ifRGB=!this.ifRGB,this.drawImg(!1)},changePP:function(){this.inversePP=!this.inversePP,this.drawImg(!1)},downloadImage:function(){console.log("Save"),this.canvas.toBlob((function(t){b()(t,"out.png")}))}},mounted:function(){this.canvas=this.$refs.myCanvas,this.drawInit();var t=navigator.userAgent.toLowerCase();if(-1!=t.indexOf("safari")&&t.indexOf("chrome")<=-1){var e=document.querySelectorAll(".v-file-input input");Object(m["a"])(e).forEach((function(t){t.remove()}))}}},C=y,x=(n("1e63"),n("6544")),_=n.n(x),P=n("8336"),M=n("23a7"),I=Object(r["a"])(C,f,g,!1,null,null,null),k=I.exports;_()(I,{VBtn:P["a"],VFileInput:M["a"]});var V={name:"IV",components:{ImageVoronoi:k}},D=V,S=Object(r["a"])(D,u,d,!1,null,null,null),O=S.exports;a["a"].use(c["a"]);var j=[{path:"/",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/IV",name:"Image Voronoi",component:O}],A=new c["a"]({routes:j}),B=A,E=n("2f62");a["a"].use(E["a"]);var R=new E["a"].Store({state:{},mutations:{},actions:{},modules:{}}),G=n("f309"),F=n("fcf4");a["a"].use(G["a"]);var N=new G["a"]({theme:{themes:{light:{primary:F["a"].red.darken1,secondary:F["a"].red.lighten4,accent:F["a"].indigo.base}}}}),T=n("0284"),L=n.n(T);a["a"].config.productionTip=!1,a["a"].use(L.a,{id:"UA-170913292-2",router:B}),new a["a"]({router:B,store:R,vuetify:N,render:function(t){return t(h)}}).$mount("#app")},"66a1":function(t,e,n){n("cb29");var a=n("970b"),i=n("5bc3"),o=n("4add"),r=n("e43d"),s=n("6c2b"),l=0,h=0,c=function(){"use strict";function t(e,n,i){a(this,t),this.canvas=e,this.width=e.width,this.height=e.height,this.num_sites=n,this.inversePP=i,console.log("Start voronoi",window.performance.now());var o=this.canvas.getContext("2d").getImageData(0,0,this.width,this.height);this.sob=s(o),console.log("Gradient produced",window.performance.now())}return i(t,[{key:"ComputeVoronoi",value:function(){var t=new r(this.sob,this.canvas.width,this.canvas.height,this.num_sites,this.inversePP),e=t.pickPosition();console.log("Sites picked",window.performance.now());var n={xl:0,xr:this.width,yt:0,yb:this.height},a=new o;this.diagram=a.compute(e,n),console.log("Voronoi computed",window.performance.now())}},{key:"isPointInPoly",value:function(t,e,n){for(var a=!1,i=-1,o=t.length,r=o-1;++i<o;r=i)(t[i].y<=n&&n<t[r].y||t[r].y<=n&&n<t[i].y)&&e<(t[r].x-t[i].x)*(n-t[i].y)/(t[r].y-t[i].y)+t[i].x&&(a=!a);return a}},{key:"CellColors",value:function(t,e,n){var a=[];for(l=0;l<this.diagram.cells.length;l++){var i=new Array,o=this.width,r=this.height,s=0,c=0,u=this.diagram.cells[l].halfedges;for(h=0;h<u.length;h++){var d=u[h].getStartpoint();i.push(d),o=Math.min(d.x,o),s=Math.max(d.x,s),r=Math.min(d.y,r),c=Math.max(d.y,c)}for(var f=0,g=0,m=0,v=0,p=!1,w=Math.max(Math.floor(o),0);w<Math.min(Math.floor(s+1),this.width);w++)for(h=Math.max(Math.floor(r),0);h<Math.min(Math.floor(c+1),this.height);h++)if(this.isPointInPoly(i,w,h)){var b=h*this.width+w;f+=t[4*b],g+=t[4*b+1],m+=t[4*b+2],v+=1,p=!0}else if(p){p=!1;break}f/=v,g/=v,m/=v,0==e?a.push([Math.floor(f),Math.floor(g),Math.floor(m)]):1==e?a.push([Math.floor(f*n/100),Math.floor(g*(1-n/100)/2),Math.floor(m*(1-n/100)/2)]):2==e?a.push([Math.floor(f*(1-n/100)/2),Math.floor(g*n/100),Math.floor(m*(1-n/100)/2)]):a.push([Math.floor(f*(1-n/100)/2),Math.floor(g*(1-n/100)/2),Math.floor(m*n/100)])}return a}},{key:"FillVoronoi",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.canvas.getContext("2d").getImageData(0,0,this.width,this.height).data,a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;this.ComputeVoronoi();var o=this.CellColors(n,t,i);console.log("Cell color determined",window.performance.now());var r=this.canvas.getContext("2d");for(e&&r.clearRect(0,0,this.width,this.height),l=0;l<o.length;l++){var s=o[l][0],c=o[l][1],u=o[l][2];r.beginPath();var d=this.diagram.cells[l].halfedges[0].getStartpoint();for(r.moveTo(d.x,d.y),h=1;h<this.diagram.cells[l].halfedges.length;h++)d=this.diagram.cells[l].halfedges[h].getStartpoint(),r.lineTo(d.x,d.y);r.closePath(),r.fillStyle="rgb("+s+", "+c+", "+u+")",a&&(r.strokeStyle="rgb("+s+", "+c+", "+u+")",r.stroke()),r.fill()}console.log("Drawn",window.performance.now())}},{key:"RGBVoronoi",value:function(t){var e=this.canvas.getContext("2d");e.globalCompositeOperation="lighter";var n=this.canvas.getContext("2d").getImageData(0,0,this.width,this.height).data;this.FillVoronoi(1,!0,n,!1,t),this.FillVoronoi(2,!1,n,!1,t),this.FillVoronoi(3,!1,n,!1,t),e.globalCompositeOperation="source-over"}}]),t}();t.exports=c},"85ec":function(t,e,n){},c392:function(t,e,n){},e43d:function(t,e,n){n("a630"),n("90d7"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0");var a=n("970b"),i=n("5bc3"),o=function(){"use strict";function t(e,n,i,o,r){a(this,t),this.imgData=new Array(n*i),this.n=o,this.width=n,this.height=i;for(var s=0;s<e.length;s+=4)this.imgData[s/4]=e[s]+1;if(r)for(s=0;s<this.imgData.length;s++)this.imgData[s]=257-this.imgData[s]}return i(t,[{key:"scaleDown",value:function(t){this.imgData[t]=0;for(var e=this.imgData[t],n=Math.floor(t/this.width),a=t%this.width,i=Math.max(Math.log2(e)+1,1),o=n-i;o<=n+i;o++)for(var r=a-i;r<=a+i;r++)if(o>=0&&r>=0&&r<this.width&&o<this.height){var s=o*this.width+r;this.imgData[s]/=2}}},{key:"pickPosition",value:function(){for(var t=new Array(this.imgData.length),e=0;e<this.imgData.length;e++)t[e]=e;var n=new Set([]);while(n.size<this.n){var a=Math.floor(Math.random()*this.imgData.length),i=this.imgData[a];256*Math.random()<=i&&(n.add({x:a%this.width,y:Math.floor(a/this.width)}),this.scaleDown(a))}return Array.from(n)}}]),t}();t.exports=o}});
//# sourceMappingURL=app.4263d457.js.map