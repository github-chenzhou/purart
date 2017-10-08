/**
 * @desc API
 */


let api
// let host = 'http://47.95.231.215:8000';
// let host = 'http://192.168.0.184:8000';
let host = '';

if (process.env.NODE_ENV === 'production') {
  api = {

    // 商家后台
    business: {
      // 商品信息录入
      'CREAT_PRODUCT': host + '/seller/sale_input/',
      // 拍行信息录入
      'CREAT_BUSINESS': host + '/seller/business_input/',
      // 排场信息录入
      'CREAT_AUCTION': host + '/seller/auction_input/',
      // 七牛uptoken
      'UPTOKEN': host + '/qiniu/get_upload_token/',
      // 排场列表
      'GET_AUCTION_LIST':  host + '/seller/get_auction_list/',
      // 排场信息
      'GET_AUCTION':  host + '/seller/get_auction/',
      // 排场信息删除
      'DEL_AUCTION':  host + '/seller/del_auction/',
      // 拍品列表
      'SALE_LIST':  host + '/seller/get_sale_list/',
      // 拍品信息
      'GET_SALE':  host + '/seller/get_sale/',
      // 删除拍品信息
      'DEL_SALE':  host + '/seller/del_sale/',
      'TEST': ''
    }
  }

} else {
  api = {

    // 商家后台
    business: {
      // 商品信息录入
      'CREAT_PRODUCT': host + '/seller/sale_input/',
      // 拍行信息录入
      'CREAT_BUSINESS': host + '/seller/business_input/',
      // 排场信息录入
      'CREAT_AUCTION': host + '/seller/auction_input/',
      // 七牛uptoken
      'UPTOKEN': host + '/qiniu/get_upload_token/',
      // 排场列表
      'GET_AUCTION_LIST':  host + '/seller/get_auction_list/',
      // 排场信息
      'GET_AUCTION':  host + '/seller/get_auction/',
       // 排场信息删除
      'DEL_AUCTION':  host + '/seller/del_auction/',
      // 拍品列表
      'SALE_LIST':  host + '/seller/get_sale_list/',
       // 拍品信息
      'GET_SALE':  host + '/seller/get_sale/',
      // 删除拍品信息
      'DEL_SALE':  host + '/seller/del_sale/',
      'TEST': ''
    }
  }
}

export default api
