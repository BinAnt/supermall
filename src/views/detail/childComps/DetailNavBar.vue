<template>
  <div class="detail-nav-bar">
    <NavBar>
      <div slot="left" class="back" @click="clickBack">
        <img src="~assets/img/common/left-arrow.svg" alt="" srcset="">
      </div>
      <div slot="center" class="title">
        <div 
        v-for="(item, index) in titles" 
        :key="index" 
        class="title-item" 
        :class="{active: currentIndex === index}" @click="clickTitleItem(index)">
          {{item}}
        </div>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
    name: 'DetailNavBar',
    components: {
        NavBar
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      clickTitleItem(index) {
        this.currentIndex = index
      },
      clickBack() {
        this.$router.back();
      }
    }
  }
</script>

<style scoped>
.title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.back {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.back img {
  width: 32px;
}
</style>
