<template>
<div id="home">
    <NavBar class="home-nav-bar"><div class="nav-left" slot="center">购物街</div></NavBar>
    <Swiper :banners="banners" :showIndicator="showIndicator"></Swiper>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Swiper from 'components/common/swiper/Swiper'

import { getBanner } from 'network/home'
import { getImgUrl } from 'common/utils'

export default {
    name: 'Home',
    data() {
        return {
            banners: [],
            showIndicator: true
        }
    },
    components: {
        NavBar,
        Swiper
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
    }
}
</script>
<style scoped>
#home {
    height: 100vh;
    position: relative;
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