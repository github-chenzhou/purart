/*
 * 雨课堂 国际化静态文字
 * @author: chenzhou
 * @update: 2017.6.14
 * @desc 国际化 命名空间格式 page-module-lable
 *
 */


class Language {
  constructor() {
    this.options = {
      default: 'zh_CN',
      lang: 'zh_CN'
    }

    this.languageRes = null;
  }

  /*
   * @method 请求语言资源
   * @param lang 语言类型
   */
  requireRes(lang) {
    let self = this;

    if(lang) {
      this.options['lang'] = lang;

      switch (lang) {
        case 'zh_CN':
          // 中文资源
          require(['@/language/zh_CN'], function(res) {
            self.languageRes = res && res.default;
          })
          break;
        case 'en':
          // 英文资源
          require(['@/language/en'], function(res) {
            self.languageRes = res && res.default;
          })
          break;
        default:
          break;
      }
    }
  }

  /*
   * @method 翻译当前页面
   * @param pageEl
   */
  translate(pageEl) {
    let self = this;
    // data-language-key
    pageEl = pageEl || document;

    if(!self.languageRes) {
      setTimeout(() => {
        self.translate(pageEl);
      }, 1000)

      return this;
    }

    // 标准的静态文字
    let allEle = pageEl.querySelectorAll('[data-language-key]');

    allEle = Array.prototype.slice.call(allEle);
    allEle && allEle.forEach((element) => {
      let key = element.dataset.languageKey;
      let aPath = key.split('.');
      let value = element.innerText;

      // 标准的静态文字
      aPath.forEach((path, index) => {
        index === 0 && (value = this.languageRes[path]);
        index && (value = value[path]);
      })

      element.innerText = value;
    })

    // 根据状态显示的动态文字 例如'已完成' '未完成'
    allEle = pageEl.querySelectorAll('[data-language-common]');

    allEle = Array.prototype.slice.call(allEle);
    allEle && allEle.forEach((element) => {
      let obj = element.dataset.languageCommon;
      let key = element.innerText;
      let value = element.innerText;

      value = this.languageRes[obj][key] || value
      element.innerText = value;
    })

    // 复杂模式 静态文字和业务数据混合在一起 暂定根据位置定位提取业务数据
    // key: page-tplname
    allEle = pageEl.querySelectorAll('[data-language-complex]');

    allEle = Array.prototype.slice.call(allEle);
    allEle && allEle.forEach((element) => {
      let key = element.dataset.languageComplex;
      let value = element.innerText;
      let info = element.dataset;

      const keys = key.split('-');
      const pageName = keys.length > 0 && keys[0];
      const tplName = keys.length > 0 && keys[1];

      let sTpl = this.languageRes[pageName]['complex'][tplName];
      // console.log(sTpl);

      // 根据特征或者规则 提取业务数据
      let text = this.temple(sTpl, info)
      // console.log(text);

      element.innerText = text || value;
    })

  }

  /*
   * @method 混合模式模板
   * @param
   */
  temple(tpl, value) {
    return tpl.replace(/\$\w+\$/g, (matchs) => {
      let returns = value[matchs.replace(/\$/g, '')];
      return typeof returns === 'undefined' ? '' : returns;
    });
  }
}


if (typeof define === 'function' && define.amd) {
  // AMD. Register as an anonymous module.
  define(['exports'], function(){
    return new Language();
  });
}

export default new Language();
