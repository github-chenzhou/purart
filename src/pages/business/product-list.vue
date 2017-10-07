/*
 * @page：商家商品列表 组件
 * @author: chenzhou
 * @update: 2017.10.06
 * @desc
 *
 */

<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      label="编码"
      width="180">
      <template scope="scope">
        <!-- <el-icon name="time"></el-icon> -->
        <span style="margin-left: 10px">{{ scope.row.number }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="品类"
      width="180">
      <template scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.category }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag>{{ scope.row.category }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      label="图片"
      width="180">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.from }}</span>
      </template>
    </el-table-column>

    <el-table-column label="操作">
      <template scope="scope">
        <el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'business-production-list',
  data () {
    return {
       tableData: [{
          number: 'LOT201710060001',
          category: '艺术品',
          pics: []
        }, {
          number: 'LOT201710060002',
          category: '艺术品',
          pics: []
        }, {
          number: 'LOT201710060002',
          category: '艺术品',
          pics: []
        }, {
          number: 'LOT201710060001',
          category: '艺术品',
          pics: []
        }]
    }
  },
  methods: {
    handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
    handelconfirm() {
      // let URL = 'http://47.95.231.215:8000/seller/auction_input/';
      let URL = API.business.CREAT_BUSINESS || '/seller/sale_input/';

      // auction
      return request.post(URL, this.auction)
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
  .business__product {
    padding: 20px 0;
  }
</style>
