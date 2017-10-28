<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'purart-business-app'
  }
</script>

<style>
  @import "~@/style/base.css";

  #app {
    width: 100%;
    height: 100%;

    text-align: center;
  }

  html * {
    box-sizing: border-box;
    text-size-adjust: 100%;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
  }
</style>
