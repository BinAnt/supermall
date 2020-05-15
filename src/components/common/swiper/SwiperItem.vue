<template>
    <div class="swiper-item">
        <slot name="swiper-img"></slot>
    </div>
</template>

<script>
export default {
    name: 'SwiperItem'
  }
</script>

<style scoped>
.swiper-item {
    width: 100%;
    flex-shrink: 0;
}
.swiper img {
    width: 100%;
}
</style>
