<template>
  <div class="ad-site">
    <a :href="ad.link" v-for="ad in ads" :key="ad.img_url">
      <img :src="ad.img_url" alt="" @load="adImageLoad">
    </a>
  </div>
</template>

<script>
export default {
    name: 'AdSite',
    data() {
      return {
        isLoad: false
      }
    },
    props: {
      ads: {
        type: Array,
        default: function() {
          return [];
        }
      }
    },
    methods: {
      adImageLoad() {
        if(!this.isLoad) {
          this.$emit('homeImageLoad')
          this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>
  .ad-site {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5px 0;
  }
  .ad-site a{
    text-align: center;
  }
  .ad-site img{
    width: 95%;
  }
</style>
