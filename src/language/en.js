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
    '未完成': 'uncomplete',
    '已完成': 'complete'
  },
  // 学生遥控器
  'student': {
    'complex': {
      'pageIndex': 'the $pageIndex$ page',
      'quizCount': 'A total of two $quizCount$ questions',
      'problemIndex': 'the $problemIndex$ questions'
    },
    'nav': {
      'all' : 'all',
      'ppt' : 'PPT',
      'problem' : 'problem',
      'quiz' : 'quiz',
      'hongbao' : 'hongbao'
    },
    'ppt': {
      'unknow' : 'unknow',
      'store' : 'store'
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
