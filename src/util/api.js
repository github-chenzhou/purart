/**
 * @desc API
 */


let api
let host_dev = 'http://47.95.231.215:8000';
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
      // 拍行信息读取
      'GET_BUSINESS': host + '/seller/get_business/',
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
      // 网上用户信息
      'GET_ONLINE':  host + '/seller/get_online_info/',
      // 拍卖开始
      'SET_LIVE_STATUS': host + '/seller/edit_sale_status/',
      // 设置现场人数
      'SET_LIVE_NUM': host + '/seller/edit_auction_live_num/',
      // 设置加价幅度
      'SET_INCREATE_RATE': host + '/seller/edit_sale_increase_rate/',
      // 设置加价幅度
      'CANFIRM_PRICE': host + '/seller/bid_record/',
      // Deal
      'DEAL': host + '/seller/bid_result/',
      'TEST': ''
    },

    live: {
      // 获取商品
      GET_SALE_INFO: host + '/auction/get_sale_info/',
      // 商品状态读取
      GET_SALE_STATUS: host + '/auction/get_sale_status/'
    }
  }

} else {
  api = {

    // 商家后台
    business: {
      // 商品信息录入
      'CREAT_PRODUCT': host_dev + '/seller/sale_input/',
      // 拍行信息录入
      'CREAT_BUSINESS': host_dev + '/seller/business_input/',
      // 排场信息录入
      'CREAT_AUCTION': host_dev + '/seller/auction_input/',
      // 七牛uptoken
      'UPTOKEN': host_dev + '/qiniu/get_upload_token/',
      // 拍行信息读取
      'GET_BUSINESS': host_dev + '/seller/get_business/',
      // 排场列表
      'GET_AUCTION_LIST':  host_dev + '/seller/get_auction_list/',
      // 排场信息
      'GET_AUCTION':  host_dev + '/seller/get_auction/',
       // 排场信息删除
      'DEL_AUCTION':  host_dev + '/seller/del_auction/',
      // 拍品列表
      'SALE_LIST':  host_dev + '/seller/get_sale_list/',
       // 拍品信息
      'GET_SALE':  host_dev + '/seller/get_sale/',
      // 删除拍品信息
      'DEL_SALE':  host_dev + '/seller/del_sale/',
      // 网上用户信息
      'GET_ONLINE':  host_dev + '/seller/get_online_info/',
      // 拍卖开始
      'SET_LIVE_STATUS': host_dev + '/seller/edit_sale_status/',
      // 设置现场人数
      'SET_LIVE_NUM': host_dev + '/seller/edit_auction_live_num/',
      // 设置加价幅度
      'SET_INCREATE_RATE': host_dev + '/seller/edit_sale_increase_rate/',
      // 设置加价幅度
      'CANFIRM_PRICE': host_dev + '/seller/bid_record/',
      // Deal
      'DEAL': host_dev + '/seller/bid_result/',
      'TEST': ''
    },

    live: {
      // 获取商品
      GET_SALE_INFO: host_dev + '/auction/get_sale_info/',
      // 商品状态读取
      GET_SALE_STATUS: host_dev + '/auction/get_sale_status/'
    }
  }
}

export default api
