<template>
  <div class="recommend-site">
      <div v-for="item in recommendSites" :key="item.img_url" class="recommend-item">
          <a :href="item.link">
              <img :src="item.img_url" alt="" class="recommend-img">
              <div class="recommend-text">{{item.name}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name: 'RecommendSite',
    props: {
        recommendSites: {
            type: Array,
            default: function() {
                return [];
            }
        }
    }
  }
</script>

<style scoped>
.recommend-site {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;

    padding: 10px 0 20px;
    border-bottom: 8px solid #eeeeee;
}
.recommend-item {
    flex: 1;
}
.recommend-item img {
    width: 48px;
    height: 48px;
    margin-bottom: 5px;
}
</style>
