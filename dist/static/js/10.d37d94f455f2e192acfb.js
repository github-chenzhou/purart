webpackJsonp([10],{"1X/Q":function(t,e,n){var s=n("Y/Tb");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n("rjj0")("4a216ba5",s,!0)},"Y/Tb":function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,".business__product[data-v-6fe55e2a]{padding:20px 0}","",{version:3,sources:["/Users/dong/Desktop/chenzhou/work/purart/src/pages/business/product-list.vue"],names:[],mappings:"AACA,oCACE,cAAgB,CACjB",file:"product-list.vue",sourcesContent:["\n.business__product[data-v-6fe55e2a] {\n  padding: 20px 0;\n}\n"],sourceRoot:""}])},iiX7:function(t,e,n){"use strict";function s(t){n("1X/Q")}Object.defineProperty(e,"__esModule",{value:!0});var a=n("yL4J"),o=n("j2Yw"),i=n("VU/8"),r=s,c=i(a.a,o.a,r,"data-v-6fe55e2a",null);e.default=c.exports},j2Yw:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[n("el-table-column",{attrs:{label:"编码",width:"210"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.number))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"品类",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",[t._v(t._s(e.row.category))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"图片",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.pics.length?n("img",{attrs:{src:e.row.pics[0]}}):t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"small"},on:{click:function(n){t.handleEdit(e.$index,e.row)}}},[n("router-link",{attrs:{to:"/product/"+e.row.sale_id,tag:"span"}},[t._v("编辑")])],1),t._v(" "),n("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(n){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)},a=[],o={render:s,staticRenderFns:a};e.a=o},yL4J:function(t,e,n){"use strict";e.a={name:"business-production-list",data:function(){return{auction_id:0,tableData:[{number:"LOT201710060001",category:"艺术品",pics:[]}]}},created:function(){this.auction_id=+this.$route.params.id,this.auction_id&&this.getProductList(this.auction_id)},methods:{getProductList:function(t){var e=this,n=API.business.SALE_LIST,s={auction_id:t};return request.get(n,s).then(function(t){if(t&&t.data){var n=t.data;return console.log(t),e.tableData=n.list,n}}).catch(function(t){console.log(t)})},handleEdit:function(t,e){console.log(t,e)},handleDelete:function(t,e){var n=this;console.log(t,e);var s=API.business.DEL_SALE,a={sale_id:e.sale_id};this.$confirm("确认删除拍品?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){return request.post(s,a).then(function(e){if(e&&e.data){var s=e.data;return console.log(e),n.tableData.splice(t,1),n.$message({type:"success",message:"删除成功!"}),s}}).catch(function(t){console.log(t),n.$message({type:"info",message:"已取消删除"})})}).catch(function(){n.$message({type:"info",message:"已取消删除"})})},handelconfirm:function(){var t=API.business.CREAT_BUSINESS||"/seller/sale_input/";return request.post(t,this.auction).then(function(t){if(t&&t.data){var e=t.data;return console.log(t),e}}).catch(function(t){console.log(t)})}}}}});
//# sourceMappingURL=10.d37d94f455f2e192acfb.js.map