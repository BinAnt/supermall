<template>
  <div id="tab-bar">
   <slot></slot>
  </div>
</template>
<script>
    export default {
        name: 'TarBar',
        components: {}
    }
</script>
<style scoped>
  #tab-bar {
    width: 100%;
    height: 49px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #ffffff; 
    margin: 0;
    padding: 0;
    box-shadow: 0 -1px 1px 1px rgba(153, 153, 153, 0.1);
  }
</style>