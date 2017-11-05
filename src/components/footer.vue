<template>
   <div class="page__footer">
      <div class="nav__tel">电话: 010-88888888</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  props: {
    index: {
      type: String,
      default: '1'
    }
  },
  data () {
    return {
      title: "后台"
    }
  },
  methods: {
    handleSelect() {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "~@/style/base.css";
  @import "~@/style/layout";

  .page__footer {
    z-index: 1;
    position: relative; width: 100%;
    height: 108px;
    color: #fff;
    background: #2E2E2E;
  }

  .nav__tel {
    line-height: 108px;
    font-size: 26px;
  }
</style>
