webpackJsonp([4],{"1X/Q":function(e,t,n){var o=n("Y/Tb");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n("rjj0")("4a216ba5",o,!0)},"Y/Tb":function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,".business__product[data-v-6fe55e2a]{padding:20px 0}","",{version:3,sources:["/Users/dong/Desktop/chenzhou/work/purart/src/pages/business/product-list.vue"],names:[],mappings:"AACA,oCACE,cAAgB,CACjB",file:"product-list.vue",sourcesContent:["\n.business__product[data-v-6fe55e2a] {\n  padding: 20px 0;\n}\n"],sourceRoot:""}])},iiX7:function(e,t,n){"use strict";function o(e){n("1X/Q")}Object.defineProperty(t,"__esModule",{value:!0});var a=n("yL4J"),r=n("j2Yw"),s=n("VU/8"),l=o,u=s(a.a,r.a,l,"data-v-6fe55e2a",null);t.default=u.exports},j2Yw:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[n("el-table-column",{attrs:{label:"编码",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.number))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"品类",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n("p",[e._v("姓名: "+e._s(t.row.category))]),e._v(" "),n("p",[e._v("住址: "+e._s(t.row.from))]),e._v(" "),n("div",{staticClass:"name-wrapper",slot:"reference"},[n("el-tag",[e._v(e._s(t.row.category))])],1)])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"来源",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.from))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"small"},on:{click:function(n){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),n("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(n){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)},a=[],r={render:o,staticRenderFns:a};t.a=r},yL4J:function(e,t,n){"use strict";t.a={name:"business-production-list",data:function(){return{tableData:[{number:"LOT201710060001",category:"艺术品",from:"上海市普陀区金沙江路 1518 弄"},{number:"LOT201710060002",category:"艺术品",from:"上海市普陀区金沙江路 1517 弄"},{number:"LOT201710060002",category:"艺术品",from:"上海市普陀区金沙江路 1519 弄"},{number:"LOT201710060001",category:"艺术品",from:"上海市普陀区金沙江路 1516 弄"}]}},methods:{handleEdit:function(e,t){console.log(e,t)},handleDelete:function(e,t){console.log(e,t)},handelconfirm:function(){var e=API.business.CREAT_BUSINESS||"/seller/sale_input/";return request.post(e,this.auction).then(function(e){if(e&&e.data){var t=e.data;return console.log(e),t}}).catch(function(e){console.log(e)})}}}}});
//# sourceMappingURL=4.a51800c40f04bf13944c.js.map