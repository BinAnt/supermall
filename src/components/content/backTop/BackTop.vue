<template>
  <div class="back-top">
      <img src="~assets/img/common/back-to-top.svg" alt="">
  </div>
</template>

<script>
export default {
    name: 'BackTop'
  }
</script>

<style scoped>
.back-top {
    position: fixed;
    bottom: 60px;
    right: 10px;
}
.back-top img {
    width: 30px;
}
</style>
