webpackJsonp([9],{H0DD:function(t,o,n){var i=n("c8TP");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("37df2a9a",i,!0)},Xncx:function(t,o,n){"use strict";var i=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("section",{staticClass:"page"},[n("header",{staticClass:"index__header"},[n("Header-Component",{attrs:{index:t.index}})],1),t._v(" "),n("section",{staticClass:"live__auction"},t._l(t.list,function(o){return n("div",{staticClass:"auction__product"},[n("div",{staticClass:"product__info"},[n("div",{staticClass:"product__wrap"},[n("div",{staticClass:"product__inner"},[n("p",{staticClass:"product__title"},[t._v(t._s(o.description)+" | "+t._s(o.title))]),t._v(" "),n("div",{staticClass:"image_wrap"},[o.imgs.length?n("el-carousel",{attrs:{interval:4500,height:"188px"}},t._l(o.imgs,function(o,i){return n("el-carousel-item",{key:o},[n("div",{staticClass:"image__wrapper"},[n("img",{staticClass:"live--image",attrs:{"data-index":i,src:o},on:{load:t.handlelaodImg,click:t.handleScaleImage}})])])})):t._e()],1),t._v(" "),n("div",{staticClass:"product__desc"},[n("p",{},[t._v(t._s(o.tags[0]))]),t._v(" "),n("p",{},[t._v(t._s(o.tags[1]))]),t._v(" "),n("p",{},[t._v("尺寸："+t._s(o.tags[2]))]),t._v(" "),n("p",{},[t._v(t._s(o.tags[3]))])])])]),t._v(" "),n("div",{staticClass:"auction__round J_round"},[n("svg",{attrs:{width:"340",height:"120"}}),t._v(" "),t._m(0,!0)]),t._v(" "),t._m(1,!0)]),t._v(" "),n("div",{staticClass:"auction--btn"},[t._v("一键拍卖")])])})),t._v(" "),n("router-view")],1)},a=[function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"round__info"},[n("p",{staticClass:"round__tag"},[t._v("ROUND")]),t._v(" "),n("p",{staticClass:"round--count"},[t._v("02")]),t._v(" "),n("p",{staticClass:"round--time"},[t._v("2:30")])])},function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"product__bid"},[n("ul",{staticClass:"price__list"},[n("li",{staticClass:"price__item"},[t._v("300")]),t._v(" "),n("li",{staticClass:"price__item"},[t._v("400")]),t._v(" "),n("li",{staticClass:"price__item"},[t._v("500")]),t._v(" "),n("li",{staticClass:"price__item"},[t._v("1000")]),t._v(" "),n("li",{staticClass:"price__item"},[t._v("1200")])]),t._v(" "),n("img",{attrs:{src:"http://ox4oktbuv.bkt.clouddn.com/o_1btj89ii66ku1uld14lkjmu60s2r.png"}})])}],e={render:i,staticRenderFns:a};o.a=e},ao0H:function(t,o,n){"use strict";var i={methods:{drawPie:function(t,o){var n=this,i=t[1];if(0!=i){for(var a=[],e=0;e<t.length;e++)a[e]=t[e]/i;for(var A=[],e=0;e<t.length;e++)A[e]=270*a[e];var r=n.createSVG("path");r.setAttribute("d",this.describeArc(150,75,33,225,225+A[0])),r.setAttribute("style","fill:#F3F3F3;stroke:#000000;stroke-width:5"),o.appendChild(r);var c=n.createSVG("path");c.setAttribute("d",this.describeArc(150,75,33,225+A[0],225+A[1])),c.setAttribute("style","fill:#F3F3F3;stroke:#AB9485;stroke-width:5"),o.appendChild(c)}},createSVG:function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)},describeArc:function(t,o,n,i,a){var e=this.polarToCartesian(t,o,n,a),A=this.polarToCartesian(t,o,n,i),r=a-i<=180?"0":"1";return["M",e.x,e.y,"A",n,n,0,r,0,A.x,A.y].join(" ")},polarToCartesian:function(t,o,n,i){var a=(i-90)*Math.PI/180;return{x:t+n*Math.cos(a),y:o+n*Math.sin(a)}}}};o.a=i},c8TP:function(t,o,n){o=t.exports=n("FZ+f")(!0),o.i(n("PLky"),""),o.push([t.i,'.auction__product[data-v-b2cf53a4]{width:380px;height:100%;min-height:520px}.auction__product .product__info[data-v-b2cf53a4]{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;width:100%;height:480px;background-image:url(http://ox4oktbuv.bkt.clouddn.com/o_1btj7tr89btv1cak1i3o73qdvm25.png);background-position:50%,50%;background-repeat:no-repeat;background-size:cover}.auction__product .product__info .product__wrap[data-v-b2cf53a4]{padding-top:60px}.auction__product .product__info .product__inner[data-v-b2cf53a4]{margin:0 auto}.auction__product .product__info .product__inner .image_wrap[data-v-b2cf53a4]{-webkit-box-sizing:border-box;box-sizing:border-box;margin:10px auto 15px;width:188px;height:188px}.auction__product .product__info .product__inner .image_wrap .image__wrapper[data-v-b2cf53a4]{position:relative;width:100%;height:100%;cursor:pointer}.auction__product .product__info .product__inner .image_wrap .live--image[data-v-b2cf53a4]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.auction__product .product__info .product__inner .product__title[data-v-b2cf53a4]{padding:0 7px;width:100%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;font-size:15px;color:#000}.auction__product .product__info .product__inner .product__desc[data-v-b2cf53a4]{font-size:12px;color:#4a4a4a}.auction__product .product__info .auction__round[data-v-b2cf53a4]{z-index:1;position:absolute;top:-50px;margin:auto;left:0;right:0}.auction__product .product__info .auction__round svg[data-v-b2cf53a4]{position:relative;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.auction__product .product__info .auction__round .round__info[data-v-b2cf53a4]{position:absolute;top:52px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);line-height:1;font-size:10px;color:#ab9485}.auction__product .product__info .auction__round .round__info .round--count[data-v-b2cf53a4]{font-size:26px;color:#000}.auction__product .product__info .product__bid[data-v-b2cf53a4]{position:absolute;bottom:10px;left:0;right:0;margin:0 auto;width:120px;font-size:12px}.auction__product .product__info .product__bid img[data-v-b2cf53a4]{display:block;margin:0 auto;width:70px;height:70px}.auction__product .product__info .product__bid .price__list[data-v-b2cf53a4]{position:relative}.auction__product .product__info .product__bid .price__list .price__item[data-v-b2cf53a4]{display:inline-block}.auction__product .product__info .product__bid .price__list .price__item[data-v-b2cf53a4]:first-child{position:absolute;top:45px;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.auction__product .product__info .product__bid .price__list .price__item[data-v-b2cf53a4]:nth-child(2){position:absolute;top:13px;left:13px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.auction__product .product__info .product__bid .price__list .price__item[data-v-b2cf53a4]:nth-child(4){position:absolute;top:13px;right:13px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.auction__product .product__info .product__bid .price__list .price__item[data-v-b2cf53a4]:nth-child(5){position:absolute;-webkit-transform:rotate(90deg);transform:rotate(90deg);top:45px;right:0}.auction__product .auction--btn[data-v-b2cf53a4]{margin:17px auto 0;width:140px;height:35px;line-height:35px;font-size:16px;color:#fff;text-align:center;background:#ab9485;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.5);box-shadow:0 1px 3px rgba(0,0,0,.5);border-radius:4px}.stamp[data-v-b2cf53a4]{position:relative}.stamp[data-v-b2cf53a4]:after{border-radius:.2em;content:"";font-size:50px;font-weight:700;line-height:1;position:absolute;padding:.1em .5em;margin:0 auto;top:10%;left:10%;text-transform:uppercase;opacity:0;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:rotate(-2deg) scale(5);transform:rotate(-2deg) scale(5);-webkit-transition:all .3s cubic-bezier(.6,.04,.98,.335);transition:all .3s cubic-bezier(.6,.04,.98,.335)}.loaded .stamp[data-v-b2cf53a4]:after{opacity:.75;-webkit-transform:rotate(-15deg) scale(1);transform:rotate(-15deg) scale(1);z-index:-1}.el-select-dropdown__list[data-v-b2cf53a4]{background:#ab9485}.el-select-dropdown__item[data-v-b2cf53a4]{color:#fff}.el-select-dropdown__item.hover[data-v-b2cf53a4]{background:rgba(99,83,72,.6)}.el-carousel__button[data-v-b2cf53a4]{width:20px}.page[data-v-b2cf53a4]{width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.page-fixed[data-v-b2cf53a4]{z-index:1;top:0;left:0;width:100%}.live__auction[data-v-b2cf53a4]{position:relative;width:100%;min-width:1200px;height:calc(100% - 110px);min-height:520px;margin-bottom:20px;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:distribute;justify-content:space-around;background:#fff}',"",{version:3,sources:["/Users/dong/Desktop/chenzhou/work/purart/src/pages/live/live.vue"],names:[],mappings:"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",file:"live.vue",sourcesContent:["\n@import url(~@/style/base.css);\n.auction__product[data-v-b2cf53a4] {\n  width: 380px;\n  height: 100%;\n  min-height: 520px;\n}\n.auction__product .product__info[data-v-b2cf53a4] {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    position: relative;\n    width: 100%;\n    height: 480px;\n    background-image: url(http://ox4oktbuv.bkt.clouddn.com/o_1btj7tr89btv1cak1i3o73qdvm25.png);\n    background-position: center, center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n.auction__product .product__info .product__wrap[data-v-b2cf53a4] {\n      padding-top: 60px;\n}\n.auction__product .product__info .product__inner[data-v-b2cf53a4] {\n      margin: 0 auto;\n}\n.auction__product .product__info .product__inner .image_wrap[data-v-b2cf53a4] {\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        margin: 10px auto 15px;\n        width: 188px;\n        height: 188px;\n}\n.auction__product .product__info .product__inner .image_wrap .image__wrapper[data-v-b2cf53a4] {\n          position: relative;\n          width: 100%;\n          height: 100%;\n          cursor: pointer;\n}\n.auction__product .product__info .product__inner .image_wrap .live--image[data-v-b2cf53a4] {\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          -webkit-transform: translate(-50%, -50%);\n                  transform: translate(-50%, -50%);\n}\n.auction__product .product__info .product__inner .product__title[data-v-b2cf53a4] {\n        padding: 0 7px;\n        width: 100%;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap;\n        font-size: 15px;\n        color: #000;\n}\n.auction__product .product__info .product__inner .product__desc[data-v-b2cf53a4] {\n        font-size: 12px;\n        color: #4A4A4A;\n}\n.auction__product .product__info .auction__round[data-v-b2cf53a4] {\n      z-index: 1;\n      position: absolute;\n      top: -50px;\n      margin: auto;\n      left: 0;\n      right: 0;\n}\n.auction__product .product__info .auction__round svg[data-v-b2cf53a4] {\n        position: relative;\n        left: 50%;\n        -webkit-transform: translateX(-50%);\n                transform: translateX(-50%);\n}\n.auction__product .product__info .auction__round .round__info[data-v-b2cf53a4] {\n        position: absolute;\n        top: 52px;\n        left: 50%;\n        -webkit-transform: translateX(-50%);\n                transform: translateX(-50%);\n        line-height: 1;\n        font-size: 10px;\n        color: #AB9485;\n}\n.auction__product .product__info .auction__round .round__info .round--count[data-v-b2cf53a4] {\n          font-size: 26px;\n          color: #000;\n}\n.auction__product .product__info .product__bid[data-v-b2cf53a4] {\n      position: absolute;\n      bottom: 10px;\n      left: 0;\n      right: 0;\n      margin: 0 auto;\n      width: 120px;\n      font-size: 12px;\n}\n.auction__product .product__info .product__bid img[data-v-b2cf53a4] {\n        display: block;\n        margin: 0 auto;\n        width: 70px;\n        height: 70px;\n}\n.auction__product .product__info .product__bid .price__list[data-v-b2cf53a4] {\n        position: relative;\n}\n.auction__product .product__info .product__bid .price__list .price__item[data-v-b2cf53a4] {\n          display: inline-block;\n}\n.auction__product .product__info .product__bid .price__list .price__item[data-v-b2cf53a4]:nth-child(1) {\n          position: absolute;\n          top: 45px;\n          left: 0;\n          -webkit-transform: rotate(-90deg);\n                  transform: rotate(-90deg);\n}\n.auction__product .product__info .product__bid .price__list .price__item[data-v-b2cf53a4]:nth-child(2) {\n          position: absolute;\n          top: 13px;\n          left: 13px;\n          -webkit-transform: rotate(-45deg);\n                  transform: rotate(-45deg);\n}\n.auction__product .product__info .product__bid .price__list .price__item[data-v-b2cf53a4]:nth-child(4) {\n          position: absolute;\n          top: 13px;\n          right: 13px;\n          -webkit-transform: rotate(45deg);\n                  transform: rotate(45deg);\n}\n.auction__product .product__info .product__bid .price__list .price__item[data-v-b2cf53a4]:nth-child(5) {\n          position: absolute;\n          -webkit-transform: rotate(90deg);\n                  transform: rotate(90deg);\n          top: 45px;\n          right: 0;\n}\n.auction__product .auction--btn[data-v-b2cf53a4] {\n    margin: 17px auto 0;\n    width: 140px;\n    height: 35px;\n    line-height: 35px;\n    font-size: 16px;\n    color: #fff;\n    text-align: center;\n    background: #AB9485;\n    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);\n            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);\n    border-radius: 4px;\n}\n.stamp[data-v-b2cf53a4] {\n  position: relative;\n}\n.stamp[data-v-b2cf53a4]:after {\n    border-radius: .2em;\n    content: '';\n    font-size: 50px;\n    font-weight: bold;\n    line-height: 1;\n    opacity: 0;\n    position: absolute;\n    padding: .1em .5em;\n    margin: 0 auto;\n    top: 10%;\n    left: 10%;\n    text-transform: uppercase;\n    opacity: 0;\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: rotate(-2deg) scale(5);\n            transform: rotate(-2deg) scale(5);\n    -webkit-transition: all 0.3s cubic-bezier(0.6, 0.04, 0.98, 0.335);\n    transition: all 0.3s cubic-bezier(0.6, 0.04, 0.98, 0.335);\n}\n.loaded .stamp[data-v-b2cf53a4]:after {\n  opacity: .75;\n  -webkit-transform: rotate(-15deg) scale(1);\n          transform: rotate(-15deg) scale(1);\n  z-index: -1;\n}\n.el-select-dropdown__list[data-v-b2cf53a4] {\n  background: #AB9485;\n}\n.el-select-dropdown__item[data-v-b2cf53a4] {\n  color: #fff;\n}\n.el-select-dropdown__item.hover[data-v-b2cf53a4] {\n  background: rgba(99, 83, 72, 0.6);\n}\n.el-carousel__button[data-v-b2cf53a4] {\n  width: 20px;\n}\n.page[data-v-b2cf53a4] {\n  width: 100%;\n  height: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.page-fixed[data-v-b2cf53a4] {\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.live__auction[data-v-b2cf53a4] {\n  position: relative;\n  width: 100%;\n  min-width: 1200px;\n  height: calc(100% - 110px);\n  min-height: 520px;\n  margin-bottom: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  background: #fff;\n}\n"],sourceRoot:""}])},kJ8X:function(t,o,n){"use strict";function i(t){n("H0DD")}Object.defineProperty(o,"__esModule",{value:!0});var a=n("zdeG"),e=n("Xncx"),A=n("VU/8"),r=i,c=A(a.a,e.a,r,"data-v-b2cf53a4",null);o.default=c.exports},zdeG:function(t,o,n){"use strict";var i=n("D/cR"),a=n("d1wj"),e=n("yt7g"),A=(n.n(e),n("ao0H")),r=n("Cz8s"),c=n("mzkE");window.request=i.a,o.a={name:"student-page",props:{},data:function(){return{index:1,scaleImages:[],list:[{imgs:["http://ox4oktbuv.bkt.clouddn.com/o_1brt4805n14tnrip17fo11cm1l2qc.jpeg"],tags:["包邮包险","完好","55","国宝级"],sale_id:5,description:"酷玩",title:"中国55通天塔画意"},{imgs:["http://ox4oktbuv.bkt.clouddn.com/o_1brt4805nl5i5en1v2766118mub.jpeg","http://ox4oktbuv.bkt.clouddn.com/o_1brt4805n14tnrip17fo11cm1l2qc.jpeg","http://ox4oktbuv.bkt.clouddn.com/o_1brt4805n5af1qp41r3f5lojcld.jpeg"],tags:["包邮包险","很好","40*30*79","国宝级"],sale_id:6,description:"酷玩",title:"中国201王锴画意"},{imgs:["http://ox4oktbuv.bkt.clouddn.com/o_1brt4805nl5i5en1v2766118mub.jpeg","http://ox4oktbuv.bkt.clouddn.com/o_1brt4805n14tnrip17fo11cm1l2qc.jpeg","http://ox4oktbuv.bkt.clouddn.com/o_1brt4805n5af1qp41r3f5lojcld.jpeg"],tags:["包邮包险","很好","40*30*79","国宝级"],sale_id:6,description:"酷玩",title:"中国201王锴画意"}]}},components:{HeaderComponent:r.a,FooterComponent:c.a},computed:{},watch:{$route:function(t,o){}},filters:{},mixins:[A.a],methods:{init:function(){this.getSaleInfo(),this.drawPie([3,10],document.querySelectorAll(".J_round svg")[0]),this.drawPie([4,10],document.querySelectorAll(".J_round svg")[1]),this.drawPie([7,10],document.querySelectorAll(".J_round svg")[2]),setTimeout(function(){n.e(0).then(function(){var t=[n("hLg7"),n("fzln"),n("2jnm")];(function(t,o){window.PhotoSwipe=t,window.PhotoSwipeUI_Default=o}).apply(null,t)}).catch(n.oe)},1500)},getSaleInfo:function(){var t=this,o=a.a.live.GET_SALE_INFO,n={num:3};return i.a.get(o,n).then(function(o){if(o&&o.data){var n=o.data;return console.log(n),t.list=n,n}}).catch(function(t){console.log(t)})},getSaleStatus:function(t){var o=a.a.live.GET_SALE_STATUS,n={sale_id:t};return i.a.get(o,n).then(function(t){if(t&&t.data){var o=t.data;return console.log(o),o}}).catch(function(t){console.log(t)})},handlelaodImg:function(t){var o=t.target,n=o.src,i=+o.dataset.index||0,a=o.naturalWidth||o.width,e=o.naturalHeight||o.height,A=a/e,r=300*A;o.style.width=r+"px";var c={src:n,w:a,h:e};this.scaleImages[i]=c},handleScaleImage:function(t){var o=t.target,n=(o.src,document.querySelector(".J_pswp")),i=+o.dataset.index||0,a=this.scaleImages,e={index:i,loop:!1,maxSpreadZoom:5,showAnimationDuration:300,hideAnimationDuration:300,showHideOpacity:!0,closeEl:!1,captionEl:!1,fullscreenEl:!1,zoomEl:!1,shareEl:!1,counterEl:!1,arrowEl:!1,preloaderEl:!1,getThumbBoundsFn:function(t){var n=o,i=window.pageYOffset||document.documentElement.scrollTop,a=n.getBoundingClientRect();return{x:a.left,y:a.top+i,w:a.width}}};(this.gallery=new PhotoSwipe(n,PhotoSwipeUI_Default,a,e)).init()}},created:function(){},mounted:function(){this.init()},updated:function(){window.language&&window.language.translate(this.$el)},beforeDestroy:function(){}}}});
//# sourceMappingURL=9.a0201add770127a9b016.js.map