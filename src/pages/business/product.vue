<template>
  <!-- 拍品信息 -->
  <div class="business__product">
    <el-form class="product__form" ref="form" :model="product" label-width="80px">
      <el-form-item label="号码">
        <el-input v-model="product.number" placeholder="LOT" value=""></el-input>
      </el-form-item>
      <el-form-item label="起拍价格">
        <el-col :span="3">
          <el-select v-model="product.currency" placeholder="">
            <el-option label="￥" value="￥"></el-option>
            <el-option label="$" value="$"></el-option>
            <el-option label="£" value="£"></el-option>
            <el-option label="€" value="€"></el-option>
          </el-select>
        </el-col>
        <el-col :span="18" class="pl10">
          <el-input v-model="product.price" placeholder="起拍价格" value=""></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="市场估价">
        <el-col :span="3">
          <el-select v-model="product.currency" placeholder="">
            <el-option label="￥" value="￥"></el-option>
            <el-option label="$" value="$"></el-option>
            <el-option label="£" value="£"></el-option>
            <el-option label="€" value="€"></el-option>
          </el-select>
        </el-col>
        <el-col :span="18" class="pl10">
          <el-input v-model="product.valuation" placeholder="市场估价" value=""></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="材质">
        <el-select v-model="product.material" multiple placeholder="请选择材质">
          <el-option-group
            v-for="group in groups"
            :key="group.label"
            :label="group.label">
            <el-option
              v-for="item in group.options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-option-group>
        </el-select>
      </el-form-item>
      <el-form-item label="长宽高">
        <el-col :span="4">
          <el-select v-model="product.measurement_unit" placeholder="">
            <el-option label="cm" value="cm"></el-option>
            <el-option label="inch" value="inch"></el-option>
          </el-select>
        </el-col>
        <el-col :span="18" class="pl10">
          <el-input v-model="product.inch" placeholder="x*y*z" value=""></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="重量">
        <el-input v-model="product.weight" placeholder="重量" value=""></el-input>
      </el-form-item>
      <el-form-item label="商品状况">
        <el-select v-model="product.item_status" placeholder="请选择商品状况">
          <el-option label="完好" value="jinshu"></el-option>
          <el-option label="很好" value="beijing2"></el-option>
          <el-option label="磨损" value="shanghai22"></el-option>
          <el-option label="裂痕" value="beijing4"></el-option>
          <el-option label="断裂" value="shanghai5"></el-option>
          <el-option label="易碎" value="shanghai5"></el-option>
          <el-option label="背部贴板" value="shanghai5"></el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="来源">
        <el-input type="textarea" v-model="product.from" placeholder="来源" value=""></el-input>
      </el-form-item>

      <el-form-item label="原属国">
        <el-col :span="6">
          <el-select v-model="product.origin" placeholder="商品原属国">
              <el-option label="中国" value="china"></el-option>
              <el-option label="美国" value="beijing2"></el-option>
              <el-option label="非洲" value="shanghai22"></el-option>
              <el-option label="欧洲" value="beijing4"></el-option>
              <el-option label="日本" value="shanghai5"></el-option>
          </el-select>
        </el-col>
        <el-col :span="18" class="pl10">
          <el-input v-model="product.origin2" placeholder="地区" value=""></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="年份">
        <el-col :span="6">
          <el-select v-model="product.year" placeholder="">
              <el-option label="公元" value="A.C."></el-option>
              <el-option label="公元前" value="B.C."></el-option>
          </el-select>
        </el-col>
        <el-col :span="18" class="pl10">
            <el-input v-model="product.year2" placeholder="商品年份" value=""></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="品类">
          <el-col :span="6">
            <el-select v-model="product.category" placeholder="" @change="">
              <el-option label="艺术品" value="A.C."></el-option>
              <el-option label="珠宝" value="B.C."></el-option>
            </el-select>
          </el-col>
          <el-col :span="6" class="pl10">
            <el-select v-model="product.category2" placeholder="">
              <el-option label="绘画" value="A.C."></el-option>
              <el-option label="雕塑" value="B.C."></el-option>
            </el-select>
          </el-col>
          <el-col :span="6" class="pl10">
            <el-select v-model="product.category3" placeholder="">
              <el-option label="油画" value="A.C."></el-option>
              <el-option label="素描" value="B.C."></el-option>
            </el-select>
          </el-col>

        </el-form-item>

        <!-- 品牌的话显示品牌 -->
        <el-form-item label="作者">
            <el-input v-model="product.author" placeholder="作者" value=""></el-input>
        </el-form-item>

        <el-form-item label="商品图片">
          <section class="image__list">
            <div class="pic-view" v-for="(item, index) in product.pics">
              <img :src="item.thumb" :class="[item.pic ? '' : 'pic--loading']" :data-src="item.pic" :data-index="index"  @load="handlelaodImg" @click="handleScaleImage" />
            </div>
            <div class="image--add" id="container"><p class="camera" v-show="product.pics.length<9" id="file" ></p></div>
          </section>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="handelconfirm">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>

      </el-form>
  </div>
</template>

<script>
export default {
  name: 'business-product',
  props: {
    isCollapse: true
  },
  data () {
    return {
      // 图片放大数组
      scaleImages: [],
      product: {
        // 商品编号
        number: 'LOT',
        // 币种
        currency: '￥',
        // 起拍价格
        price: '',
        // 市场估值
        valuation: '',
        // 材质
        material: ['jin', 'zuanshi'],
        // 尺寸单位
        measurement_unit: 'cm',
        // 长宽高
        inch: '',
        // 商品重量
        weight: '',
        // 商品状况
        item_status: '',
        // 来源
        come_from: '',
        // 所属国
        origin: 'china',
        // 所属国地区
        origin2: '',
        // 公元前 B.C. 公元 A.C.
        year: 'A.C.',
        // 年份
        year2: '',
        // 类目
        // 一级类目
        category: '',
        // 二级类目
        category2: '',
        // 三级类目
        category3: '',

        // 商品图片
        pics:[]
      },
      groups: [
       {
          label: '金属',
          options: [{
            value: 'jin',
            label: '金'
          }, {
            value: 'yin',
            label: '银'
          },{
            value: 'tie',
            label: '铁'
          },{
            value: 'tong',
            label: '铜'
          }]
        }, {
          label: '石材',
          options: [{
            value: 'zuanshi',
            label: '钻石'
          }, {
            value: 'dalishi',
            label: '大理石'
          }, {
            value: 'Guangzhou',
            label: '玉石'
          }, {
            value: 'Dalian',
            label: '水晶'
          }]
        }]
    }
  },
  created() {
  },
  mounted() {
    setTimeout(()=> {
      this.initUpload();
    }, 1000)
  },
  methods: {
    /*
     * @method 七牛上传初始化
     * @param
     */
    initUpload(){
      let self = this;

      var uploader = Qiniu.uploader({
          disable_statistics_report: false,   // 禁止自动发送上传统计信息到七牛，默认允许发送
          runtimes: 'html5,flash,html4',      // 上传模式,依次退化
          browse_button: 'file',         // 上传选择的点选按钮，**必需**
          // 在初始化时，uptoken, uptoken_url, uptoken_func 三个参数中必须有一个被设置
          // 切如果提供了多个，其优先级为 uptoken > uptoken_url > uptoken_func
          // 其中 uptoken 是直接提供上传凭证，uptoken_url 是提供了获取上传凭证的地址，如果需要定制获取 uptoken 的过程则可以设置 uptoken_func
          uptoken : 'XbBjw6RmDf-8tTJ8vwVjI6fR1sOboimKSfnRK6Jf:dMNJ7ArtvCHDOD-PyXZTPD8MXYI=:eyJzY29wZSI6InlrdGZyb250ZW5kIiwiZGVhZGxpbmUiOjE1MDcwMjAwODB9', // uptoken 是上传凭证，由其他程序生成
          // uptoken_url: '/uptoken',         // Ajax 请求 uptoken 的 Url，**强烈建议设置**（服务端提供）
          uptoken_func: function(file){    // 在需要获取 uptoken 时，该方法会被调用
            // do something
            return uptoken;
          },
          get_new_uptoken: false,             // 设置上传文件的时候是否每次都重新获取新的 uptoken
          // downtoken_url: '/downtoken',
          // Ajax请求downToken的Url，私有空间时使用,JS-SDK 将向该地址POST文件的key和domain,服务端返回的JSON必须包含`url`字段，`url`值为该文件的下载地址
          // unique_names: true,              // 默认 false，key 为文件名。若开启该选项，JS-SDK 会为每个文件自动生成key（文件名）
          // save_key: true,                  // 默认 false。若在服务端生成 uptoken 的上传策略中指定了 `save_key`，则开启，SDK在前端将不对key进行任何处理
          domain: 'http://sfe.ykt.io/',     // bucket 域名，下载资源时用到，如：'http://xxx.bkt.clouddn.com/' **必需**
          container: 'container',             // 上传区域 DOM ID，默认是 browser_button 的父元素，
          max_file_size: '100mb',             // 最大文件体积限制
          // flash_swf_url: 'path/of/plupload/Moxie.swf',  //引入 flash,相对路径
          max_retries: 3,                     // 上传失败最大重试次数
          dragdrop: true,                     // 开启可拖曳上传
          drop_element: 'container',          // 拖曳上传区域元素的 ID，拖曳文件或文件夹后可触发上传
          chunk_size: '4mb',                  // 分块上传时，每块的体积
          auto_start: true,                   // 选择文件后自动上传，若关闭需要自己绑定事件触发上传,
          //x_vars : {
          //    自定义变量，参考http://developer.qiniu.com/docs/v6/api/overview/up/response/vars.html
          //    'time' : function(up,file) {
          //        var time = (new Date()).getTime();
                   // do something with 'time'
          //        return time;
          //    },
          //    'size' : function(up,file) {
          //        var size = file.size;
              // do something with 'size'
                //        return size;
          //    }
          //},
          init: {
            'FilesAdded': function(up, files) {
              plupload.each(files, function(file) {
                // 文件添加进队列后,处理相关的事情
                // console.log(file.getNative());
                // console.log(file.getSource());

                let reader = new FileReader();
                reader.onload = function(e) {
                  let data = e.target.result;

                  // console.log(data);
                  self.product.pics.push({
                    id: file.id,
                    pic: data,
                    thumb: data
                  });
                };
                reader.readAsDataURL(file.getNative());

              });
            },
            'BeforeUpload': function(up, file) {
               // 每个文件上传前,处理相关的事情
               // console.log(file);
            },
            'UploadProgress': function(up, file) {
               // 每个文件上传时,处理相关的事情
            },
            'FileUploaded': function(up, file, info) {
               // 每个文件上传成功后,处理相关的事情
               // 其中 info.response 是文件上传成功后，服务端返回的json，形式如
               // {
               //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
               //    "key": "gogopher.jpg"
               //  }
               // 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html

              var domain = up.getOption('domain');
              var res = JSON.parse(info);
              // 获取上传成功后的文件的Url
              var sourceLink = domain + res.key;

              var oPic = {
                pic: sourceLink,
                thumb: sourceLink + '?imageView2/1/w/300/h/300'
              };

              let index = 1;
              let id = file.id;

              // 上传图片的下标
              self.product.pics.forEach( (item, i) => {
                if(id === item.id) {
                  index = i;
                  return ;
                }
              });

              self.product.pics.splice(index, 1, oPic);

              // self.product.pics.push(oPic);
            },
            'Error': function(up, err, errTip) {
               //上传出错时,处理相关的事情
            },
            'UploadComplete': function() {
               //队列文件处理完毕后,处理相关的事情
            },
            'Key': function(up, file) {
              // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
              // 该配置必须要在 unique_names: false , save_key: false 时才生效

              var uuid = file.id;
              var name = file.name;
              var ext = name && name.substring(name.indexOf('.')) || '';
              var key = uuid + ext;

              // do something with key here
              return key
            }
          }
      });
    },

    /*
     * @method 图片加载完成回调
     * @param
     */
    handlelaodImg(evt) {
        let target = evt.target;
        // .pic-view
        let parentEl = target.parentNode;
        let src = target.dataset.src || target.src;
        let index = +target.dataset.index || 0;

        let width = target.naturalWidth || target.width;
        let height = target.naturalHeight || target.height;
        let rate = width/height;

        if(!src) {
          return ;
        }

        let item = { src: src, w: width || 750, h: height || 520 };
        this.scaleImages[index] = item;

        // 预览状态并且只有一张图片单独处理
        // if(this.ispreview && this.oSubject.pics && this.oSubject.pics.length === 1) {
        //   if(rate > 1) {
        //     parentEl.style.width = '100%';
        //     parentEl.style.paddingBottom = 100 / rate + '%';
        //   } else {
        //     parentEl.style.height = 325 + 'px';
        //     parentEl.style.width = 325 * rate + 'px';
        //   }
        // } else {
        //   if(rate > 1) {
        //     target.style.maxHeight = '100%';
        //     target.style.maxWidth = 'none';
        //   }
        // }

        // 矫正预加载 图片
        let oImg = new Image();
        oImg.onload = (e) => {
          this.scaleImages.forEach( (imgItem) => {
            if(src === imgItem.src) {
              imgItem.w = oImg.naturalWidth || oImg.width;
              imgItem.h = oImg.naturalHeight || oImg.height;
            }
          });
        };
        oImg.src = src;
    },

    /*
      * @method 图片缩放
      * @param
      */
    handleScaleImage(evt) {
        let targetEl = evt.target;
        let src = targetEl.dataset.src || targetEl.src;
        let pswpElement = document.querySelector('.J_pswp');
        let index = +targetEl.dataset.index || 0;
        let items = this.scaleImages;

        let options = {
          index: index,
          loop: false,
          maxSpreadZoom: 5,
          showAnimationDuration: 300,
          hideAnimationDuration: 300,
          showHideOpacity: true,

          closeEl: false,
          captionEl: false,
          fullscreenEl: false,
          zoomEl: false,
          shareEl: false,
          counterEl: false,
          arrowEl: false,
          preloaderEl: false,

          isClickableElement: function(el) {
            // return el.tagName === 'P';
          },
          getThumbBoundsFn: function(index) {
            // find thumbnail element
            var thumbnail = targetEl;

            // get window scroll Y
            var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
            // optionally get horizontal scroll

            // get position of element relative to viewport
            var rect = thumbnail.getBoundingClientRect();

            // w = width
            return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
          }
        };

        // this.gallery && this.gallery.destroy();
        this.gallery = null;
        // Initializes and opens PhotoSwipe
        let gallery = this.gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);

        gallery.init();

    },

    handelconfirm() {
      let URL = API.business.CREAT_PRODUCT || 'http://47.95.231.215:8000/seller/sale_input/';
      // let URL = '/seller/sale_input/';

      // product
      return request.post(URL, this.product)
        .then((res) => {
          if(res && res.data) {
            let data = res.data;

            console.log(res);

            return data;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "~@/style/base.css";
  @import "~@/style/layout";

  .business__product {
    padding: 20px 0;
  }

  /*-------------------*\
    $ 图片作答
  \*-------------------*/


  .image__list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row wrap;

    padding: 15px 0 13px;

    .image--add {
      position: relative;

      margin: 0 0.8% 1.6%;
      width: 31.733%;
      padding-bottom: 31.733%;
      border-radius: 2px;
      border: 1px solid #C8C8C8;

      .camera {
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        opacity: 0;
      }
    }

    .image--add:before,
    .image--add:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 53px;
      height: 1px;

      transform: translate(-50%, -50%);

      background: #C8C8C8;
    }
    .image--add:after {
      width: 1px;
      height: 53px;
    }

    .pic-view {
      position: relative;
      margin: 0 0.8% 1.6%;
      width: 31.733%;
      padding-bottom: 31.733%;

      background: #c8c8c8;
      border-radius: 2px;
      overflow: hidden;
      -webkit-touch-callout: none;

      img {
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        max-width: 100%;
        transform: translate(-50%, -50%);
      }

      .pic--loading {
        width: 75%;
      }
    }

  }
</style>
