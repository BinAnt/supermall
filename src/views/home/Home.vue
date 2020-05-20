<template>
<div id="home" >
    <NavBar class="home-nav-bar"><div class="nav-left" slot="center">购物街</div></NavBar>
    <TabContol 
        :titles="['推荐','新上', '精选']" 
        @clickTab="clickTab" 
        ref="tabControl1"
        class="no-display"
        :class="{fixed:isTabFixed}"
        v-show="isTabFixed"
        ></TabContol>
    <Scroller 
    class="home-scroller" 
    ref="scroll" 
    :currentProbeType="3"
    :pullUpLoad="true"
    @pullingUp="pullingUp"
    @contentScroll="contentScroll">
        <Swiper :banners="banners" :showIndicator="showIndicator" @homeImageLoad="homeImageLoad"></Swiper>
        <recommendSite :recommendSites="recommendSites"></recommendSite>
        <AdSite :ads="ads" @homeImageLoad="homeImageLoad"></AdSite>
        <TabContol 
        :titles="['推荐','新上', '精选']" 
        @clickTab="clickTab" 
        ref="tabControl2"
        ></TabContol>
        <GoodsList :goodsList="goods[currentType].list"/>
    </Scroller>
    <BackTop @click.native="backTop" v-show="isShowBackTop"></BackTop>
    
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Swiper from 'components/common/swiper/Swiper'
import TabContol from 'components/content/TabControl/TabControl'
import GoodsList from 'components/content/good/GoodsList'
import Scroller from 'components/common/scroller/Scroller'
import BackTop from 'components/content/backTop/BackTop'

import recommendSite from './childComps/RecommendSite'
import AdSite from './childComps/AdSite'

import {
    getBanner,
    getRecommendSite,
    getRecommendGoods
    } from 'network/home'
import { getImgUrl,formatGoodsInfo, debounce, throttle} from 'common/utils'

export default {
    name: 'Home',
    data() {
        return {
            banners: [], // banner数据
            showIndicator: true, // 是否显示swiper 小点
            recommendSites: [], // 推荐位数据
            ads: [], // 广告位
            goods: {
                'pop': {'id': 4,'page': 0, 'list': []},
                'new': {'id': 22,'page': 0, 'list': []},
                'sell': {'id':7, 'page': 0, 'list': []}
            },
            currentType: 'pop',
            isShowBackTop: false,
            tabOffsetTop: 0, // tabControl 距离顶部的距离
            isTabFixed: false, //是否吸顶tabControl
            positionY: 0
        }
    },
    components: {
        NavBar,
        Swiper,
        TabContol,
        GoodsList,
        Scroller,
        BackTop,
        recommendSite,
        AdSite
    },
    created() {
        //1、发送请求
        //请求banner数据
        this.getBanner()

        //2、请求推荐位/广告位 推荐数据
        this.getRecommendSite()
        this.getRecommendGoods('pop')
        this.getRecommendGoods('new')
        this.getRecommendGoods('sell')
    },
    mounted() {
        // 3、监听item中图片加载完成
        //  const refresh = this.debounce(this.$refs.scroll.refresh, 50);
        const refresh = debounce(this.$refs.scroll.refresh, 10)
        this.$bus.$on('itemImageLoad', () => {
           refresh()
            // this.$refs.scroll && this.$refs.scroll.refresh();
        })
    },
    destroyed() {
        console.log('12313');
        
    },
    //被keep-alive缓存的组件激活时调用
    activated() {
        this.$refs.scroll.refresh();
        this.$refs.scroll.scroller.scrollTo(0, this.positionY, 0)
    },
    //被keep-alive缓存的组件停用时调用
    deactivated() {
        // console.log(this.$refs.scroll.scroller.y);
        this.positionY = this.$refs.scroll.getScrollY();
    },
    methods: {
        /**
         * 事件监听组件事件
         */
        clickTab(index) {
            switch(index) {
                case 0:
                    this.currentType = 'pop'
                    break
                case 1:
                    this.currentType = 'new'
                    break
                case 2:
                    this.currentType = 'sell'
                    break
            }

            this.$refs.tabControl1.currentIndex = index
            this.$refs.tabControl2.currentIndex = index
        },
        pullingUp() {
            this.getRecommendGoods(this.currentType)
        },
        //监听滚动位置
        contentScroll(postionY) {
            //是否显示返回顶部按钮
            this.isShowBackTop = -(postionY) > 500

            //是否吸顶tabcontrol
            this.isTabFixed = -(postionY) > this.tabOffsetTop ? true : false
        },
        //监听图片加载完 事件
        homeImageLoad() {
            this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
        },
        /**
         * 数据请求
         */
        getBanner() {
            getBanner().then(res => {
                //数据处理
                let data = res.data.data;
                this.banners = data.map(item => {
                        item.img_url = getImgUrl(item.img_url, 'biggerImg')
                        return item;
                    })
                })
        },
        getRecommendSite() {
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
        },
        getRecommendGoods(type) {
            let page = this.goods[type].page + 1;
            let id = this.goods[type].id;
            getRecommendGoods(id, page).then(res => {
                this.goods[type].list.push(...formatGoodsInfo(res.data.data))
                this.goods[type].page = page;

                //加载完成之后
                this.$refs.scroll.finishPullUp()
            })
        },
        backTop() {
            //点击了返回顶部 这里出发滚动返回顶部
            this.$refs.scroll.scrollTo(0, 0, 500)
        }
    }
}
</script>
<style scoped>
#home {
    position: relative;
    padding-top: 44px;
    height: 100vh;
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
.home-scroller {
    /* height: 300px; */
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
}
.fixed {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
}
</style>