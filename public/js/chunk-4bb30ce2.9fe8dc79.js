(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bb30ce2"],{"01d4":function(t,s,e){"use strict";var i=e("f0c3"),a=e.n(i);a.a},"369a":function(t,s,e){"use strict";var i=e("e8bd"),a=e.n(i);a.a},"40cf":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"scroll",staticClass:"scroll"},[e("div",{staticClass:"home"},[e("header",{staticClass:"header"},[e("div",{staticClass:"address-wrap"},[e("router-link",{staticClass:"address",attrs:{tag:"div",to:"/address"}},[e("i",{staticClass:"iconfont iconshouhuodizhi"}),e("p",{staticClass:"address-text"},[t._v(t._s(t.address))]),e("i",{staticClass:"iconfont caret-down"})])],1),e("div",{staticClass:"search-wrapper",class:{is_fixed:t.isFixed}},[t._m(0)])]),e("mt-swipe",{staticClass:"slider",attrs:{auto:3e3}},t._l(t.swipeImgs,(function(t,s){return e("mt-swipe-item",{key:s},[e("img",{attrs:{src:t,alt:"hot"}})])})),1),e("mt-swipe",{staticClass:"entries",attrs:{auto:0}},t._l(t.entries,(function(s,i){return e("mt-swipe-item",{key:i},[e("div",{staticClass:"slider-item"},t._l(s,(function(s,i){return e("div",{key:i,staticClass:"enter-item"},[e("img",{attrs:{src:s.image,alt:""}}),e("span",{staticClass:"enter-name"},[t._v(t._s(s.name))])])})),0)])})),1),e("h3",{staticClass:"recommend-text"},[t._v("-- 推荐商家 --")]),e("div",{staticClass:"filter-wrap",class:{is_nav_fixed:t.isNavFixed}},[e("ul",{staticClass:"filter-nav"},t._l(t.navTab,(function(s,i){return e("li",{key:i,staticClass:"filter-item",class:{isSelected:i==t.currentIndex},on:{click:function(s){return t.addClass(i)}}},[t._v("\n          "+t._s(s.name)+"\n          "),e("i",{staticClass:"iconfont",class:s.icon})])})),0),e("div",{staticClass:"filter-more"},[0==t.currentIndex?e("ul",{staticClass:"sort-wrap"},t._l(t.sortBy,(function(s,i){return e("li",{key:i,staticClass:"sort-item",class:{isSelect:t.isClickIndex==i},on:{click:function(e){return t.selectSort(s,i)}}},[t._v(t._s(s.name))])})),0):t._e(),3==t.currentIndex?e("ul",{staticClass:"screenBy"},t._l(t.screenBy,(function(s,i){return e("li",{key:i},[e("h3",{staticClass:"title"},[t._v(t._s(s.title))]),e("ul",t._l(s.data,(function(s,i){return e("li",{key:i,staticClass:"sort-item"},[e("i",{staticClass:"sort-icon",style:{"background-image":"url("+s.icon+")"}}),t._v("\n                "+t._s(s.name)+"\n              ")])})),0)])})),0):t._e()])]),e("ShopList")],1)])},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"search"},[e("i",{staticClass:"iconfont iconsousuo"}),e("span",[t._v("搜索商家 商家名称")])])}],n=(e("4634"),e("7cfd"),e("ecd2")),o=(e("660a"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"shop",staticClass:"shop"},[e("ul",{staticClass:"shop-list"},t._l(t.shopData,(function(s,i){return e("li",{key:i,staticClass:"shop-item"},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:s.restaurant.image_path,alt:""}})]),e("div",{staticClass:"shop-info"},[e("h3",{staticClass:"shop-name"},[t._v(t._s(s.restaurant.name))]),e("div",{staticClass:"sell-mount"},[e("p",[t._v("月售"+t._s(s.restaurant.recent_order_num)+"单")]),e("span",{staticClass:"fengniao-icon"},[t._v("蜂鸟专送")])]),e("div",{staticClass:"delivery-info"},[e("span",{staticClass:"delivery-price"},[t._v("￥"+t._s(s.restaurant.float_minimum_order_amount)+"起送|配送费"+t._s(s.restaurant.float_delivery_fee))]),e("span",{staticClass:"distance-time"},[t._v("1.94km|52分钟")])])])])})),0)])}),r=[],c={data:function(){return{shopData:[]}},methods:{initBScrooll:function(){new n["a"](this.$refs.shop,{click:!0})},geData:function(){var t=this;this.axios.post("/api/profile/restaurants/1/10").then((function(s){console.log(s.data),t.shopData=s.data}))}},created:function(){var t=this;this.geData(),this.$nextTick((function(){t.initBScrooll()}))}},l=c,u=(e("01d4"),e("6691")),d=Object(u["a"])(l,o,r,!1,null,"73d37ac0",null),f=d.exports,p={data:function(){return{currentIndex:null,isFixed:!1,isNavFixed:!1,isClickIndex:0,offsetTop:0,navOffsetTop:0,scrollTop:0,swipeImgs:[],entries:[],navTab:[],screenBy:[],sortBy:[],shopData:[],page:1,size:5,HomeScroll:null,posY:0}},components:{ShopList:f},computed:{address:function(){return this.$store.state.address?this.$store.state.address:"正在识别地址..."}},methods:{initBScroll:function(){var t=this,s=new n["a"](this.$refs.scroll,{click:!0,probeType:3,bounce:{top:!1,bottom:!1,left:!0,right:!0}});this.HomeScroll=s,this.HomeScroll.on("scroll",(function(s){t.posY=Math.abs(Math.round(s.y)),t.isFixed=t.posY>t.offsetTop}))},scrollTo:function(){window.scrollTo({top:this.navOffsetTop})},goBack:function(){this.currentIndex=null,window.scrollTo({top:0})},addClass:function(t){this.currentIndex=t},selectSort:function(t,s){this.navTab[0].name=t.name,this.isClickIndex=s,this.goBack()},initHeight:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.scrollTop=t,this.isFixed=t>this.offsetTop,this.isNavFixed=t>this.navOffsetTop},getData:function(){var t=this;this.axios.get("/api/profile/shopping").then((function(s){t.swipeImgs=s.data.swipeImgs,t.entries=s.data.entries})),this.axios.get("/api/profile/filter").then((function(s){t.navTab=s.data.navTab,t.sortBy=s.data.sortBy,t.screenBy=s.data.screenBy})),this.axios.post("/api/profile/restaurants/1/10").then((function(s){console.log(s.data),t.shopData=s.data}))}},created:function(){var t=this;this.getData(),this.$nextTick((function(){t.initBScroll()}))},mounted:function(){var t=this;window.addEventListener("scroll",this.initHeight),this.$nextTick((function(){t.offsetTop=document.querySelector(".search-wrapper").offsetTop,t.navOffsetTop=document.querySelector(".filter-nav").offsetTop-107.2}))}},h=p,m=(e("369a"),Object(u["a"])(h,i,a,!1,null,"f2a5d9ce",null));s["default"]=m.exports},4634:function(t,s,e){for(var i=e("96dd"),a=e("7d56"),n=e("a6d5"),o=e("3f8b"),r=e("b8ea"),c=e("e3b3"),l=e("1277"),u=l("iterator"),d=l("toStringTag"),f=c.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=a(p),m=0;m<h.length;m++){var v,C=h[m],_=p[C],T=o[C],g=T&&T.prototype;if(g&&(g[u]||r(g,u,f),g[d]||r(g,d,C),c[C]=f,_))for(v in i)g[v]||n(g,v,i[v],!0)}},e8bd:function(t,s,e){},f0c3:function(t,s,e){}}]);
//# sourceMappingURL=chunk-4bb30ce2.9fe8dc79.js.map