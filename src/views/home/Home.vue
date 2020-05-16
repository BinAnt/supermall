<template>
<div id="home">
    <NavBar class="home-nav-bar"><div class="nav-left" slot="center">购物街</div></NavBar>
    <Swiper :banners="banners" :showIndicator="showIndicator"></Swiper>
    <recommendSite :recommendSites="recommendSites"></recommendSite>
    <AdSite :ads="ads"></AdSite>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Swiper from 'components/common/swiper/Swiper'
import recommendSite from './childComps/RecommendSite'
import AdSite from './childComps/AdSite'

import { getBanner,getRecommendSite } from 'network/home'
import { getImgUrl } from 'common/utils'

export default {
    name: 'Home',
    data() {
        return {
            banners: [], // banner数据
            recommendSites: [], // 推荐位数据
            ads: [], // 广告位
            showIndicator: true // 是否显示swiper 小点
        }
    },
    components: {
        NavBar,
        Swiper,
        recommendSite,
        AdSite
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

        //2、请求推荐位/广告位
        getRecommendSite().then(res => {
            let list = res.data.list;

            res.data.list.map(item => {
                if (item.category_id == 0) {
                    item.img_url = getImgUrl(item.img_url, 'midImg')
                    this.recommendSites.length<5&&this.recommendSites.push(item)
                } else {
                    item.img_url = getImgUrl(item.img_url, 'biggerImg')
                    this.ads.push(item)
                }
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