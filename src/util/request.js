import axios from 'axios'
// import Promise from 'bluebird'
import Cookies from 'js-cookie'


!Promise && require(['bluebird'], function(Promise) {
  window.Promise = window.Promise || Promise;
})

const handleResponse = (res) => {
  // 支付接口使用的 status 判断
  if (res.data.success || res.data.status === 0) {
    return Promise.resolve(res.data)
  } else {
    // 用户session丢失
    if(res.data.op === 'redirect') {
      const sUrl = res.data.url;
      const iNext = sUrl.indexOf('next=');
      let newUrl = sUrl.substring(0,iNext);

      newUrl += 'next=' + location.pathname;
      setTimeout(() => {
        location.href = '//' + location.host + newUrl;
      }, 500)

      return;
    }

    // 没有权限
    if(res.data.status_code === 1 || res.data.status_code === 2 || res.data.status_code === 4) {
      location.href = '/v/index/course/normalcourse/error/' + res.data.status_code;
    }

    // 没有填写信息 跳转个人信息完善页
    if(res.data.status_code === 5) {
      let nextURL = location.href;
      location.href = `/v/index/edituserinfo_simple?next_url=${nextURL}`;
    }

    return Promise.reject(res.data)
  }
}
export default {
  get (url, params) {
    params = params || {}
    let queryString = []

    Object.keys(params).forEach(key => params[key] && queryString.push(`${key}=${params[key]}`))

    if (queryString.length > 0) {
      queryString = queryString.join('&')
      url += `?${queryString}`
    }

    return axios
      .get(url)
      .then(function (response, data) {
        return response
      })
      .then(handleResponse)
      .catch(error => {
        return Promise.reject(error)
      })
  },

  post (url, params) {
    params = params || {}

    // post统一csrftoken
    axios.defaults.headers['X-CSRFToken'] = Cookies.get('csrftoken') || ''

    return axios
      .post(url, params)
      .then(function (response, data) {
        return response
      })
      .then(handleResponse)
      .catch(error => {
        return Promise.reject(error)
      })
  }
}
