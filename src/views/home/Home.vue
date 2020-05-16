<template>
<div id="home">
    <NavBar class="home-nav-bar"><div class="nav-left" slot="center">购物街</div></NavBar>
    <Swiper :banners="banners" :showIndicator="showIndicator"></Swiper>
    <recommendSite :recommendSites="recommendSites"></recommendSite>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Swiper from 'components/common/swiper/Swiper'
import recommendSite from './childComps/RecommendSite'

import { getBanner,getRecommendSite } from 'network/home'
import { getImgUrl } from 'common/utils'

export default {
    name: 'Home',
    data() {
        return {
            banners: [],
            recommendSites: [],
            showIndicator: true
        }
    },
    components: {
        NavBar,
        Swiper,
        recommendSite
    },
    created() {
        //1、发送请求
        getBanner().then(res => {
            //数据处理
            let data = res.data.data;
           this.banners = data.map(item => {
                item.img_url = getImgUrl(item.img_url, 'biggerImg')
                return item;
            })
        })

        //2、请求推荐位
        getRecommendSite().then(res => {
            this.recommendSites = res.data.list.map(item => {
                item.img_url = getImgUrl(item.img_url, 'midImg')
                return item;
            })
        })
    }
}
</script>
<style scoped>
#home {
    height: 100vh;
    position: relative;
    padding-top: 44px;
}
.home-nav-bar {
    background-color: var(--color-tint);
    color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
}
</style>