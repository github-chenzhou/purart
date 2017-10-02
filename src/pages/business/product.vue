<template>
  <!-- 拍品信息 -->
  <div class="business__product">
    <el-form class="product__form" ref="form" :model="product" label-width="80px">
      <el-form-item label="号码">
              <el-input v-model="product.number" placeholder="LOT" value="LOT"></el-input>
            </el-form-item>
            <el-form-item label="起拍价格">
              <el-input v-model="product.price" placeholder="起拍价格" value=""></el-input>
            </el-form-item>
            <el-form-item label="市场估价">
              <el-input v-model="product.valuation" placeholder="市场估价" value=""></el-input>
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

               <!--
                <el-option label="布料" value="beijing6"></el-option>
                <el-option label="纸" value="shanghai5"></el-option>
                <el-option label="皮革" value="beijing6"></el-option>
                <el-option label="玻璃" value="beijing6"></el-option> -->
              </el-select>
            </el-form-item>
            <el-form-item label="长宽高">
              <el-input v-model="product.inch" placeholder="x*y*z cm" value=""></el-input>
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
              <el-col >
                <el-input v-model="product.year2" placeholder="作者" value=""></el-input>
              </el-col>
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
              <el-button type="primary" >立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>

          </el-form>
  </div>
</template>

<script>
export default {
  name: 'business-nav',
  props: {
    isCollapse: true
  },
  data () {
    return {
      // 图片放大数组
        scaleImages: [],
        product: {
          number: '',
          price: '',
          valuation: '',
          material: '',
          item_status: '',
          from: '',
          // 所属国
          origin: 'china',
          origin2: '',
          // 年份
          year: 'A.C.',
          year2: '',
          // 类目
          category: '',

          // 商品图片
          pics:[]
        },
        groups: [{
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
              value: 'Chengdu',
              label: '钻石'
            }, {
              value: 'Shenzhen',
              label: '大理石'
            }, {
              value: 'Guangzhou',
              label: '玉石'
            }, {
              value: 'Dalian',
              label: '水晶'
            }]
        }],
    }
  },
  methods: {

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
</style>
