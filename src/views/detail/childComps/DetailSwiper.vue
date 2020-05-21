<template>
    <Swiper :banners="topImages" class="detail-swiper" @homeImageLoad="detailImageLoad"></Swiper>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper'

export default {
    name: 'DetailSwiper',
    components: {
        Swiper
    },
    props: {
        topImages: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        detailImageLoad() {
            this.$emit('detailImageLoad')
        }
    }
}
</script>

<style scoped>
.detail-swiper {
    height: 200px;
    overflow: hidden;
}
</style>
