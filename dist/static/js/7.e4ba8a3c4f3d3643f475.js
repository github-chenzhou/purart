webpackJsonp([7],{"6cPp":function(t,n,o){"use strict";var i=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("section",{staticClass:"page"},[o("header",{staticClass:"index__header"},[o("Header-Component",{attrs:{index:t.index}})],1),t._v(" "),o("section",{staticClass:"live__auction"},t._l(t.list,function(n){return o("div",{staticClass:"auction__product"},[o("div",{staticClass:"product__info"},[o("div",{staticClass:"product__wrap"},[o("div",{staticClass:"product__inner"},[o("p",{staticClass:"product__title"},[t._v(t._s(n.description)+" | "+t._s(n.title))]),t._v(" "),o("div",{staticClass:"image_wrap"}),t._v(" "),o("div",{staticClass:"product__desc"},[o("p",{},[t._v(t._s(n.tags[0]))]),t._v(" "),o("p",{},[t._v(t._s(n.tags[1]))]),t._v(" "),o("p",{},[t._v("尺寸："+t._s(n.tags[2]))]),t._v(" "),o("p",{},[t._v(t._s(n.tags[3]))])])])]),t._v(" "),o("div",{staticClass:"auction__round J_round"},[o("svg",{attrs:{width:"340",height:"120"}}),t._v(" "),t._m(0,!0)]),t._v(" "),t._m(1,!0)]),t._v(" "),o("div",{staticClass:"auction--btn"},[t._v("一键拍卖")])])})),t._v(" "),o("router-view")],1)},A=[function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"round__info"},[o("p",{staticClass:"round__tag"},[t._v("ROUND")]),t._v(" "),o("p",{staticClass:"completion--count"},[t._v("02")]),t._v(" "),o("p",{staticClass:"completion--lable"},[t._v("2:30")])])},function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"product__bid"},[o("ul"),t._v(" "),o("img",{attrs:{src:"http://ox4oktbuv.bkt.clouddn.com/o_1btj89ii66ku1uld14lkjmu60s2r.png"}})])}],e={render:i,staticRenderFns:A};n.a=e},"6h/D":function(t,n,o){n=t.exports=o("FZ+f")(!0),n.i(o("PLky"),""),n.push([t.i,".page{width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.page-fixed{z-index:1;top:0;left:0;width:100%}.live__auction{position:relative;width:100%;height:calc(100% - 110px);min-height:520px;margin-bottom:20px;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:distribute;justify-content:space-around;background:#fff}.auction__product{width:380px;height:100%;min-height:520px}.auction__product .product__info{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;width:100%;height:480px;background-image:url(http://ox4oktbuv.bkt.clouddn.com/o_1btj7tr89btv1cak1i3o73qdvm25.png);background-position:50%,50%;background-repeat:no-repeat;background-size:cover}.auction__product .product__info .product__wrap{padding-top:60px}.auction__product .product__info .product__inner{margin:0 auto}.auction__product .product__info .product__inner .image_wrap{margin:10px auto 15px;width:188px;height:188px;background:#ca8d28}.auction__product .product__info .product__inner .product__title{padding:0 7px;width:100%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;font-size:15px;color:#000}.auction__product .product__info .product__inner .product__desc{font-size:12px;color:#4a4a4a}.auction__product .product__info .auction__round{z-index:1;position:absolute;top:-50px;margin:auto;left:0;right:0}.auction__product .product__info .auction__round svg{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.auction__product .product__info .auction__round .round__info{position:absolute;top:45px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);font-size:12px}.auction__product .product__info .product__bid{position:absolute;bottom:10px;left:0;right:0;margin:0 auto}.auction__product .product__info .product__bid img{display:block;margin:0 auto;width:70px;height:70px}.auction__product .auction--btn{margin:17px auto 0;width:140px;height:35px;line-height:35px;font-size:16px;color:#fff;text-align:center;background:#ab9485;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.5);box-shadow:0 1px 3px rgba(0,0,0,.5);border-radius:4px}.index__footer{width:100%}","",{version:3,sources:["/Users/dong/Desktop/chenzhou/work/purart/src/pages/live/live.vue"],names:[],mappings:"AAGA,MACE,WAAY,AACZ,YAAa,AACb,8BAA+B,AACvB,qBAAuB,CAChC,AACD,YACE,UAAW,AACX,MAAO,AACP,OAAQ,AACR,UAAY,CACb,AACD,eACE,kBAAmB,AACnB,WAAY,AACZ,0BAA2B,AAC3B,iBAAkB,AAClB,mBAAoB,AACpB,oBAAqB,AACrB,oBAAqB,AACrB,qBAAsB,AACtB,aAAc,AACd,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,yBAA0B,AACtB,6BAA8B,AAClC,eAAiB,CAClB,AACD,kBACE,YAAa,AACb,YAAa,AACb,gBAAkB,CACnB,AACD,iCACI,8BAA+B,AACvB,sBAAuB,AAC/B,kBAAmB,AACnB,WAAY,AACZ,aAAc,AACd,0FAA2F,AAC3F,4BAAoC,AACpC,4BAA6B,AAC7B,qBAAuB,CAC1B,AACD,gDACM,gBAAkB,CACvB,AACD,iDACM,aAAe,CACpB,AACD,6DACQ,sBAAuB,AACvB,YAAa,AACb,aAAc,AACd,kBAAoB,CAC3B,AACD,iEACQ,cAAe,AACf,WAAY,AACZ,uBAAwB,AACxB,gBAAiB,AACjB,mBAAoB,AACpB,eAAgB,AAChB,UAAY,CACnB,AACD,gEACQ,eAAgB,AAChB,aAAe,CACtB,AACD,iDACM,UAAW,AACX,kBAAmB,AACnB,UAAW,AACX,YAAa,AACb,OAAQ,AACR,OAAS,CACd,AACD,qDACQ,kBAAmB,AACnB,SAAU,AACV,mCAAoC,AAC5B,0BAA4B,CAC3C,AACD,8DACQ,kBAAmB,AACnB,SAAU,AACV,SAAU,AACV,mCAAoC,AAC5B,2BAA4B,AACpC,cAAgB,CACvB,AACD,+CACM,kBAAmB,AACnB,YAAa,AACb,OAAQ,AACR,QAAS,AACT,aAAe,CACpB,AACD,mDACQ,cAAe,AACf,cAAe,AACf,WAAY,AACZ,WAAa,CACpB,AACD,gCACI,mBAAoB,AACpB,YAAa,AACb,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAChB,WAAY,AACZ,kBAAmB,AACnB,mBAAoB,AACpB,4CAAiD,AACzC,oCAAyC,AACjD,iBAAmB,CACtB,AAID,eACE,UAAY,CACb",file:"live.vue",sourcesContent:['\n@charset "UTF-8";\n@import url(~@/style/base.css);\n.page {\n  width: 100%;\n  height: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.page-fixed {\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.live__auction {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 110px);\n  min-height: 520px;\n  margin-bottom: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  background: #fff;\n}\n.auction__product {\n  width: 380px;\n  height: 100%;\n  min-height: 520px;\n}\n.auction__product .product__info {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    position: relative;\n    width: 100%;\n    height: 480px;\n    background-image: url(http://ox4oktbuv.bkt.clouddn.com/o_1btj7tr89btv1cak1i3o73qdvm25.png);\n    background-position: center, center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n.auction__product .product__info .product__wrap {\n      padding-top: 60px;\n}\n.auction__product .product__info .product__inner {\n      margin: 0 auto;\n}\n.auction__product .product__info .product__inner .image_wrap {\n        margin: 10px auto 15px;\n        width: 188px;\n        height: 188px;\n        background: #CA8D28;\n}\n.auction__product .product__info .product__inner .product__title {\n        padding: 0 7px;\n        width: 100%;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap;\n        font-size: 15px;\n        color: #000;\n}\n.auction__product .product__info .product__inner .product__desc {\n        font-size: 12px;\n        color: #4A4A4A;\n}\n.auction__product .product__info .auction__round {\n      z-index: 1;\n      position: absolute;\n      top: -50px;\n      margin: auto;\n      left: 0;\n      right: 0;\n}\n.auction__product .product__info .auction__round svg {\n        position: relative;\n        left: 50%;\n        -webkit-transform: translateX(-50%);\n                transform: translateX(-50%);\n}\n.auction__product .product__info .auction__round .round__info {\n        position: absolute;\n        top: 45px;\n        left: 50%;\n        -webkit-transform: translateX(-50%);\n                transform: translateX(-50%);\n        font-size: 12px;\n}\n.auction__product .product__info .product__bid {\n      position: absolute;\n      bottom: 10px;\n      left: 0;\n      right: 0;\n      margin: 0 auto;\n}\n.auction__product .product__info .product__bid img {\n        display: block;\n        margin: 0 auto;\n        width: 70px;\n        height: 70px;\n}\n.auction__product .auction--btn {\n    margin: 17px auto 0;\n    width: 140px;\n    height: 35px;\n    line-height: 35px;\n    font-size: 16px;\n    color: #fff;\n    text-align: center;\n    background: #AB9485;\n    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);\n            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);\n    border-radius: 4px;\n}\n\n/*-------------------*  $ 网络超时重连\n\\*-------------------*/\n.index__footer {\n  width: 100%;\n}\n'],sourceRoot:""}])},eTaK:function(t,n,o){var i=o("6h/D");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o("rjj0")("6c576d6d",i,!0)},kJ8X:function(t,n,o){"use strict";function i(t){o("eTaK")}Object.defineProperty(n,"__esModule",{value:!0});var A=o("zdeG"),e=o("6cPp"),r=o("VU/8"),a=i,c=r(A.a,e.a,a,null,null);n.default=c.exports},zdeG:function(t,n,o){"use strict";var i=o("D/cR"),A=o("d1wj"),e=o("yt7g"),r=(o.n(e),o("wmyp"),o("Cz8s")),a=o("mzkE");window.request=i.a,n.a={name:"student-page",props:{},data:function(){return{index:1,list:[{imgs:["http://ox4oktbuv.bkt.clouddn.com/o_1brr90isto0l4t51jtu14gf1ts21v.jpeg"],tags:["包邮包险","完好","55","国宝级"],sale_id:5,description:"酷玩",title:"中国55通天塔画意"},{imgs:["http://ox4oktbuv.bkt.clouddn.com/o_1brt4805nl5i5en1v2766118mub.jpeg","http://ox4oktbuv.bkt.clouddn.com/o_1brt4805n14tnrip17fo11cm1l2qc.jpeg","http://ox4oktbuv.bkt.clouddn.com/o_1brt4805n5af1qp41r3f5lojcld.jpeg"],tags:["包邮包险","很好","40*30*79","国宝级"],sale_id:6,description:"酷玩",title:"中国201王锴画意"},{imgs:["http://ox4oktbuv.bkt.clouddn.com/o_1brt4805nl5i5en1v2766118mub.jpeg","http://ox4oktbuv.bkt.clouddn.com/o_1brt4805n14tnrip17fo11cm1l2qc.jpeg","http://ox4oktbuv.bkt.clouddn.com/o_1brt4805n5af1qp41r3f5lojcld.jpeg"],tags:["包邮包险","很好","40*30*79","国宝级"],sale_id:6,description:"酷玩",title:"中国201王锴画意"}]}},components:{HeaderComponent:r.a,FooterComponent:a.a},computed:{},watch:{$route:function(t,n){}},filters:{},mixins:[],methods:{init:function(){this.getSaleInfo(),this.drawPie([3,10])},getSaleInfo:function(){var t=this,n=A.a.live.GET_SALE_INFO,o={num:3};return i.a.get(n,o).then(function(n){if(n&&n.data){var o=n.data;return console.log(o),t.list=o,o}}).catch(function(t){console.log(t)})},drawPie:function(t){var n=this,o=t[1];if(0!=o){for(var i=[],A=0;A<t.length;A++)i[A]=t[A]/o;for(var e=[],A=0;A<t.length;A++)e[A]=240*i[A];var r=document.querySelector(".J_round svg"),a=n.createSVG("path");a.setAttribute("d",this.describeArc(150,75,35,240,240+e[0])),a.setAttribute("style","fill:#F3F3F3;stroke:#000000;stroke-width:3"),r.appendChild(a);var c=n.createSVG("path");c.setAttribute("d",this.describeArc(150,75,35,240+e[0],240+e[1])),c.setAttribute("style","fill:#F3F3F3;stroke:#AB9485;stroke-width:3"),r.appendChild(c)}},createSVG:function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)},describeArc:function(t,n,o,i,A){var e=this.polarToCartesian(t,n,o,A),r=this.polarToCartesian(t,n,o,i),a=A-i<=180?"0":"1";return["M",e.x,e.y,"A",o,o,0,a,0,r.x,r.y].join(" ")},polarToCartesian:function(t,n,o,i){var A=(i-90)*Math.PI/180;return{x:t+o*Math.cos(A),y:n+o*Math.sin(A)}},handleFilter:function(t){"undefined"!=typeof event&&event.target||t.target;this.isMore=!1}},created:function(){},mounted:function(){this.init()},updated:function(){window.language&&window.language.translate(this.$el)},beforeDestroy:function(){}}}});
//# sourceMappingURL=7.e4ba8a3c4f3d3643f475.js.map