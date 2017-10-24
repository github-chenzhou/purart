/*
 * 雨课堂 国际化静态文字
 * @author: chenzhou
 * @update: 2017.6.12
 * @desc 国际化 命名空间格式 page-module-lable
 *
 */

let pages = {
  // 根据状态显示的动态文字 例如'已完成' '未完成'
  'status': {
    '未完成': '未完成',
    '已完成': '已完成'
  },
  // 学生遥控器
  'student': {
    'complex': {
      'pageIndex': '第$pageIndex$页',
      'quizCount': '共$quizCount$题',
      'problemIndex': '第$problemIndex$页'
    },
    'nav': {
      'all' : '全部',
      'ppt' : 'PPT',
      'problem' : '习题',
      'quiz' : '试卷',
      'hongbao' : '红包'
    },
    'ppt': {
      'unknow' : '不懂',
      'store' : '收藏'
    }
  }

};



if (typeof define === 'function' && define.amd){
    // AMD. Register as an anonymous module.
    define(['exports'], function(){
        return pages;
    });
}

export default pages;
