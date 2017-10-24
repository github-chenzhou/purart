<template>
  <!-- 拍品信息 -->
  <div class="business__product">
    <el-form class="product__form" ref="form" :model="product" label-width="80px">
      <el-form-item label="号码" v-show="product.sale_id">
        <!-- <el-input v-model="product.number" placeholder="LOT" value=""></el-input> -->
        <p class="">{{ product.number }}</p>
      </el-form-item>
      <el-form-item label="起拍价格" prop="price" :rules="[{required: true, message: '起拍价格不能为空'}]">
        <el-col :span="3">
          <el-select v-model="product.currency" placeholder="">
            <el-option label="￥" value="￥"></el-option>
            <el-option label="$" value="$"></el-option>
            <el-option label="£" value="£"></el-option>
            <el-option label="€" value="€"></el-option>
          </el-select>
        </el-col>
        <el-col :span="10" class="pl10">
          <el-input v-model="product.price" placeholder="起拍价格" value="" ></el-input>
        </el-col>
      </el-form-item>
      <!-- :rules="[{ type: 'number', message: '市场估价必须为数字值'}]" -->
      <el-form-item label="市场估价" prop="currency">
        <el-col :span="3">
          <el-select v-model="product.currency" placeholder="">
            <el-option label="￥" value="￥"></el-option>
            <el-option label="$" value="$"></el-option>
            <el-option label="£" value="£"></el-option>
            <el-option label="€" value="€"></el-option>
          </el-select>
        </el-col>
        <el-col :span="10" class="pl10">
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
        <el-col :span="3">
          <el-select v-model="product.measurement_unit" placeholder="">
            <el-option label="cm" value="cm"></el-option>
            <el-option label="inch" value="inch"></el-option>
          </el-select>
        </el-col>
        <el-col :span="10" class="pl10">
          <el-input v-model="product.inch" placeholder="x*y*z" value=""></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="重量">
        <el-col :span="3">
          <el-select v-model="product.weight_unit" placeholder="">
            <el-option label="g" value="g"></el-option>
            <el-option label="lb" value="lb"></el-option>
            <el-option label="oz" value="oz"></el-option>
          </el-select>
        </el-col>
        <el-col :span="10" class="pl10">
          <el-input v-model="product.weight" placeholder="重量" value=""></el-input>
        </el-col>
        <!-- <el-input v-model="product.weight" placeholder="重量" value=""></el-input> -->
      </el-form-item>
      <el-form-item label="商品状况">
        <el-select v-model="product.item_status" placeholder="请选择商品状况">
          <el-option label="完好" value="完好"></el-option>
          <el-option label="很好" value="很好"></el-option>
          <el-option label="磨损" value="磨损"></el-option>
          <el-option label="裂痕" value="裂痕"></el-option>
          <el-option label="断裂" value="断裂"></el-option>
          <el-option label="易碎" value="易碎"></el-option>
          <el-option label="背部贴板" value="背部贴板"></el-option>
        </el-select>
      </el-form-item>
      <!-- 暂时去掉放在运营后台 -->
      <!--  <el-form-item label="来源">
        <el-input type="textarea" v-model="product.come_from" placeholder="来源" value=""></el-input>
      </el-form-item> -->

      <el-form-item label="原属国">
        <el-col :span="6">
          <el-select v-model="product.origin" placeholder="商品原属国">
            <el-option label="中国" value="中国"></el-option>
            <el-option label="美国" value="美国"></el-option>
            <el-option label="非洲" value="非洲"></el-option>
            <el-option label="欧洲" value="欧洲"></el-option>
            <el-option label="日本" value="日本"></el-option>
          </el-select>
        </el-col>
        <el-col :span="18" class="pl10">
          <el-input v-model="product.origin2" placeholder="地区" value=""></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="年份">
        <!--  <el-col :span="6">
          <el-select v-model="product.year" placeholder="">
              <el-option label="公元" value="公元"></el-option>
              <el-option label="公元前" value="公元前"></el-option>
          </el-select>
        </el-col>
        <el-col :span="18" class="pl10">
            <el-input v-model="product.year2" placeholder="商品年份" value=""></el-input>
        </el-col> -->
        <el-col :span="10">
          <el-select v-model="product.year" placeholder="请选择年份">
            <el-option label="1800~1810" value="1800~1810"></el-option>
            <el-option label="1810~1820" value="1810~1820"></el-option>
            <el-option label="1820~1830" value="1820~1830"></el-option>
            <el-option label="1830~1840" value="1830~1840"></el-option>
            <el-option label="1840~1850" value="1840~1850"></el-option>
            <el-option label="1850~1860" value="1850~1860"></el-option>
            <el-option label="1860~1870" value="1860~1870"></el-option>
            <el-option label="1870~1880" value="1870~1880"></el-option>
            <el-option label="1880~1890" value="1880~1890"></el-option>
            <el-option label="1890~1900" value="1890~1900"></el-option>
            <el-option label="1900~1910" value="1900~1910"></el-option>
            <el-option label="1910~1920" value="1910~1920"></el-option>
            <el-option label="1920~1930" value="1920~1930"></el-option>
            <el-option label="1930~1940" value="1930~1940"></el-option>
            <el-option label="1940~1950" value="1940~1950"></el-option>
            <el-option label="1950~1960" value="1950~1960"></el-option>
            <el-option label="1960~1970" value="1960~1970"></el-option>
            <el-option label="1970~1980" value="1970~1980"></el-option>
            <el-option label="1980~1990" value="1980~1990"></el-option>
            <el-option label="1990~2000" value="1990~2000"></el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="品类">
          <el-col :span="12">
            <el-select v-model="product.category" placeholder="" @change="">
              <el-option label="玩具" value="玩具"></el-option>
              <el-option label="画意" value="画意"></el-option>
              <el-option label="家居" value="家居"></el-option>
              <el-option label="珠宝" value="珠宝"></el-option>
              <el-option label="礼乐" value="礼乐"></el-option>
              <el-option label="影像" value="影像"></el-option>
              <el-option label="时尚" value="时尚"></el-option>
              <el-option label="收藏" value="收藏"></el-option>
              <el-option label="古酒" value="古酒"></el-option>
            </el-select>
          </el-col>
        </el-form-item>

        <!-- 品牌的话显示品牌 -->
        <el-form-item label="作者">
            <el-input v-model="product.author" placeholder="作者" value=""></el-input>
        </el-form-item>

        <el-form-item label="商品图片">
          <section class="image__list">
            <div class="pic-view" v-for="(item, index) in pics">
              <img :src="item" :data-src="item" :data-index="index" @load="handlelaodImg" @click="handleScaleImage" />
            </div>
            <div class="image--add" id="container"><p class="camera" v-show="pics.length<9" id="file" ></p></div>
          </section>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="handelconfirm">立即创建</el-button>
          <el-button @click="handelreset">重置</el-button>
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
      pics: [],
      product: {
        sale_id: 0,
        // 排场ID
        auction_id: 3,
        // 商品编号
        number: '',
        // 币种
        currency: '￥',
        // 起拍价格
        price: '',
        // 市场估值
        valuation: '',
        // 材质
        material: [],
        // 尺寸单位
        measurement_unit: 'cm',
        // 长宽高
        inch: '',
        // 商品重量单位
        weight_unit: 'g',
        // 商品重量
        weight: '',
        // 商品状况
        item_status: '完好',
        // 来源
        come_from: '',
        // 所属国
        origin: '中国',
        // 所属国地区
        origin2: '',
        // 公元前 B.C. 公元 A.C.
        year: '1800~1810',
        // 年份
        year2: '',
        // 类目
        // 一级类目
        category: '画意',
        // 二级类目
        category2: '',
        // 三级类目
        category3: '',
        // 作者
        author: '',

        // 商品图片
        pics:[]
      },
      oReset: {
        // 币种
        currency: '￥',
        // 起拍价格
        price: '',
        // 市场估值
        valuation: '',
        // 材质
        material: [],
        // 尺寸单位
        measurement_unit: 'cm',
        // 长宽高
        inch: '',
        // 商品重量单位
        weight_unit: 'g',
        // 商品重量
        weight: '',
        // 商品状况
        item_status: '完好',
        // 来源
        come_from: '',
        // 所属国
        origin: '中国',
        // 所属国地区
        origin2: '',
        // 公元前 B.C. 公元 A.C.
        year: '1800~1810',
        // 年份
        year2: '',
        // 类目
        // 一级类目
        category: '画意',
        // 二级类目
        category2: '',
        // 三级类目
        category3: '',
        // 作者
        author: '',

        // 商品图片
        pics:[]
      },
      groups: [
       {
          label: '金属',
          options: [{
            value: '金',
            label: '金'
          }, {
            value: '银',
            label: '银'
          },{
            value: '铁',
            label: '铁'
          },{
            value: '铜',
            label: '铜'
          }]
        }, {
          label: '石材',
          options: [{
            value: '钻石',
            label: '钻石'
          }, {
            value: '大理石',
            label: '大理石'
          }, {
            value: '玉石',
            label: '玉石'
          }, {
            value: '水晶',
            label: '水晶'
          }]
        },{
          label: '布料',
          options: [{
            value: '锦',
            label: '锦'
          }, {
            value: '罗',
            label: '罗'
          }, {
            value: '绸',
            label: '绸'
          }, {
            value: '缎',
            label: '缎'
          }]
        },{
          label: '其它',
          options: [{
            value: '木头',
            label: '木头'
          }, {
            value: '纸',
            label: '纸'
          }, {
            value: '皮革',
            label: '皮革'
          }, {
            value: '玻璃',
            label: '玻璃'
          }, {
            value: '毛料',
            label: '毛料'
          }]
        }]
    }
  },
  created() {
    this.product.sale_id = +this.$route.params.id;
    this.product.auction_id = +this.$route.query.auction_id;

    if(this.product.sale_id) {
      this.getProduct(this.product.sale_id);
    }
  },
  mounted() {
    setTimeout(()=> {
      this.initUpload();
    }, 1000)
  },
  methods: {
    /*
     * @method 根据排场读取拍品列表
     * @param
     */
    getProduct(sale_id) {
      let URL = API.business.GET_SALE;
      let params = {
        sale_id: sale_id
      };

      // auction
      return request.get(URL, params)
        .then((res) => {
          if(res && res.data) {
            let data = res.data;
            console.log(res);

            this.product = data;
            this.pics = this.product.pics;

            return data;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
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
          // uptoken : 'eh7qlOkZU_ixsQrWEMLlZlro-HwqIYwH63sH7iCq:z0ipLRhUTEj9vg0YYJXpiNro6vw=:eyJzY29wZSI6InN1cGVyZmxlYSIsImRlYWRsaW5lIjoxNTA3MzUyNDE3fQ==', // uptoken 是上传凭证，由其他程序生成
          uptoken_url: API.business.UPTOKEN,   // Ajax 请求 uptoken 的 Url，**强烈建议设置**（服务端提供）
          // uptoken_func: function(file){    // 在需要获取 uptoken 时，该方法会被调用
          //   // do something
          //   return uptoken;
          // },
          get_new_uptoken: false,             // 设置上传文件的时候是否每次都重新获取新的 uptoken
          // downtoken_url: '/downtoken',
          // Ajax请求downToken的Url，私有空间时使用,JS-SDK 将向该地址POST文件的key和domain,服务端返回的JSON必须包含`url`字段，`url`值为该文件的下载地址
          // unique_names: true,              // 默认 false，key 为文件名。若开启该选项，JS-SDK 会为每个文件自动生成key（文件名）
          // save_key: true,                  // 默认 false。若在服务端生成 uptoken 的上传策略中指定了 `save_key`，则开启，SDK在前端将不对key进行任何处理
          domain: 'http://ox4oktbuv.bkt.clouddn.com/',     // bucket 域名，下载资源时用到，如：'http://xxx.bkt.clouddn.com/' **必需**
          container: 'container',             // 上传区域 DOM ID，默认是 browser_button 的父元素，
          max_file_size: '100mb',             // 最大文件体积限制
          // flash_swf_url: 'path/of/plupload/Moxie.swf',  //引入 flash,相对路径
          max_retries: 3,                     // 上传失败最大重试次数
          dragdrop: true,                     // 开启可拖曳上传
          drop_element: 'container',          // 拖曳上传区域元素的 ID，拖曳文件或文件夹后可触发上传
          chunk_size: '4mb',                  // 分块上传时，每块的体积
          auto_start: true,                   // 选择文件后自动上传，若关闭需要自己绑定事件触发上传,
          // 图片硕放
          resize: {
            quality: 60
          },
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
                  // self.pics.push({
                  //   id: file.id,
                  //   pic: data,
                  //   thumb: data
                  // });

                  self.pics.push(data);
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
              var res = JSON.parse(info.response);
              // 获取上传成功后的文件的Url
              var sourceLink = domain + res.key;

              // var oPic = {
              //   pic: sourceLink,
              //   thumb: sourceLink + '?imageView2/1/w/300/h/300'
              // };

              let index = 1;
              let id = file.id;

              // 上传图片的下标
              self.pics.forEach( (item, i) => {
                if(id === item.id) {
                  index = i;
                  return ;
                }
              });

              // self.product.pics.splice(index, 1, oPic);

              self.product.pics.push(sourceLink);
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

    /*
     * @method 缓存之前录入可重复使用字段
     * @param
     */
    setRecord() {
      let product = this.product;
      let key = 'purart' + this.product.auction_id;
      let value = {
        currency: product.key,
        measurement_unit: product.measurement_unit,
         // 商品状况
        item_status: product.item_status,
        // 所属国
        origin: product.origin,
        // 所属国地区
        origin2: product.origin2,
        // 公元前
        year: product.year,
        // 类目
        category: product.category
      };

      localStorage.setItem(key, JSON.stringify(value));
    },

    /*
     * @method 重置
     * @param
     */
    handelreset(evt) {
      this.product = Object.assign(this.product, this.oReset, {

      });
    },

    handelconfirm() {
      let URL = API.business.CREAT_PRODUCT;

      // product
      return request.post(URL, this.product)
        .then((res) => {
          if(res && res.data) {
            let data = res.data;

            console.log(res);

            this.$message({
              showClose: true,
              message: '拍品创建成功',
              type: 'success'
            });

            this.product = {
              sale_id: 0,
              // 排场ID
              auction_id: 3,
             // 商品编号
             number: '',
        // 币种
        currency: '￥',
        // 起拍价格
        price: '',
        // 市场估值
        valuation: '',
        // 材质
        material: [],
        // 尺寸单位
        measurement_unit: 'cm',
        // 长宽高
        inch: '',
        // 商品重量单位
        weight_unit: 'g',
        // 商品重量
        weight: '',
        // 商品状况
        item_status: '完好',
        // 来源
        come_from: '',
        // 所属国
        origin: '中国',
        // 所属国地区
        origin2: '',
        // 公元前 B.C. 公元 A.C.
        year: '公元',
        // 年份
        year2: '',
        // 类目
        // 一级类目
        category: '画意',
        // 二级类目
        category2: '',
        // 三级类目
        category3: '',
        // 作者
        author: '',

        // 商品图片
        pics:[]
            }

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
    max-width: 650px;
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

      cursor: pointer;

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
