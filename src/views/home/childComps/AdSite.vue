<template>
  <div class="ad-site">
    <a :href="ad.link" v-for="ad in ads" :key="ad.img_url">
      <img :src="ad.img_url" alt="">
    </a>
  </div>
</template>

<script>
export default {
    name: 'AdSite',
    props: {
      ads: {
        type: Array,
        default: function() {
          return [];
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
