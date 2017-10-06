/**
 * @desc API
 */


let api
let host = 'http://47.95.231.215:8000';

if (process.env.NODE_ENV === 'production') {
  api = {

    // 商家后台
    business: {
      // 商品信息录入
      'CREAT_PRODUCT': host + '/seller/sale_input/',
      // 拍行信息录入
      'CREAT_BUSINESS': host + '/seller/business_input/',
      // 排场信息录入
      'CREAT_AUCTION': host + '/seller/sale_input/',
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
      'CREAT_AUCTION': host + '/seller/sale_input/',
      'TEST': ''
    }
  }
}

export default api
