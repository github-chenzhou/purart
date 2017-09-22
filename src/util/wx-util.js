/**
 * @module 微信配置、微信支付等
 */

import request from '@/util/request'

/**
 * 先进行微信配置，否则微信的任何api都不能使用
 *
 * @param {object} newData
 */
function configWX () {
	let url = '/v/course_meta/weixin_index_parameter'
	request.post(url, {'url': location.href})
    .then(jsonData => {
    	// 不需要判断success，在request模块中判断如果success为false，会直接reject
    	console.log('weixin configing', jsonData)
    	let data = jsonData.data.js_config;

      wx.config({
        debug: false,
        appId: data.appId,
        timestamp: data.timestamp,
        nonceStr: data.nonceStr,
        signature: data.signature,
        jsApiList: [ 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ','onMenuShareWeibo', 'onMenuShareQZone', 'showMenuItems',
        'translateVoice', 'startRecord', 'stopRecord', 'onVoiceRecordEnd', 'playVoice', 'onVoicePlayEnd', 'pauseVoice','stopVoice', 'uploadVoice',
        'downloadVoice', 'chooseImage', 'previewImage', 'uploadImage', 'downloadImage', 'getNetworkType',  'scanQRCode',  'chooseWXPay',
        'openProductSpecificView',  'addCard',  'chooseCard', 'openCard', 'hideMenuItems' ]
      });
    }).catch(() => {
    	console.error('微信配置失败')
    })
}

function wxpay (money, payCB) {
	//money是0，负数，小数都会报错{"status":50000,"message":"invalid total_fee"}
	let url = '/pay/mp/order/'
  let postData = {
  	'money': money,
  	'user_id': USERID 	// 在页面初始化时把 USERID 已经设置为全局变量
  }

  return request.post(url, postData)
    .then(jsonData => {
    	// 不需要判断success，在request模块中判断如果success为false，会直接reject
    	console.log('要生成微信订单', jsonData, wx)
    	wx.chooseWXPay({
        timestamp: jsonData.data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
        nonceStr: jsonData.data.nonceStr, // 支付签名随机串，不长于 32 位
        package: jsonData.data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
        signType: jsonData.data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
        paySign: jsonData.data.paySign, // 支付签名
        success: function (res) {
          // 支付成功后的回调函数
          // 微信jssdk支付和小程序支付的回调不一样，jssdk是 'chooseWXPay:ok'
          if(res.errMsg == "chooseWXPay:ok" ) {
            //支付成功
            // payCB && payCB('success')
            payCB && payCB({success: true, out_trade_no: jsonData.data.out_trade_no})
          }else{
          	payCB({success: false, errMsg: 'failorcancel'})
          }
        },
        fail: function(errMsg){
        	console.error(JSON.stringify(errMsg))
          payCB && payCB({success: false, errMsg: 'failorfail'})
        },
        cancel: function(errMsg){
          console.error(JSON.stringify(errMsg))
          payCB && payCB({success: false, errMsg: 'failorcancel'})
        }
      })
    })
}

export {configWX, wxpay}
