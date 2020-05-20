<template>
  <div id="detail">
      <DetailNavBar></DetailNavBar>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'

export default {
    name: 'Detail',
    components: {
        DetailNavBar
    },
    data() {
        return {
            id: null
        }
    },
    activated() {
        this.id = this.$route.params.id;
    }
  }
</script>

<style scoped>

</style>
