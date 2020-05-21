<template>
  <div id="detail">
      <DetailNavBar class="detail-navbar" @clickTitleItem="clickTitleItem"></DetailNavBar>
      <Scroller class="detail-scroller" ref="scroll">
        <DetailSwiper :topImages="topImages" @detailImageLoad="detailImageLoad"></DetailSwiper>
        <DetailGoodInfo :goods="goodInfo" ref="params" ></DetailGoodInfo>
        <DetailIntroduce :detailIntroduce="detailIntroduce" ref="comment" @detailImageLoad="detailImageLoad"/>
        <GoodsList :goodsList="goodsList" ref="recommend" @itemImageLoad="detailImageLoad"></GoodsList>
      </Scroller>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailGoodInfo from './childComps/DetailGoodInfo'
import DetailIntroduce from './childComps/DetailIntroduce'

import Scroller from 'components/common/scroller/Scroller'
import GoodsList from 'components/content/good/GoodsList'

import {getGoodInfo, goods, detailIntroduce, recommendGoodsList} from 'network/detail'
import { getImgUrl,formatGoodsInfo,debounce } from 'common/utils'
import {mixin} from 'common/mixin'


export default {
    name: 'Detail',
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailGoodInfo,
        DetailIntroduce,
        Scroller,
        GoodsList
    },
    mixins: [mixin],
    data() {
        return {
            id: null,
            topImages: [],
            goodInfo: {},
            detailIntroduce: {},
            goodsList: [],
            topOffset: []
        }
    },
    created() {
        //1、获取参数
        this.id = this.$route.params.id;

        //2、请求数据 商品信息
        getGoodInfo(this.id).then(res => {
            const data = res.data.data;
            //顶部图片
            this.topImages = JSON.parse(data.picture).map(item => {
                return {"img_url": getImgUrl(item, 'biggerImg')}
            })
            //商品价格信息
            this.goodInfo = new goods(data)
            //商品详情
            this.detailIntroduce = new detailIntroduce(data)
        })

        //3、推荐数据
        recommendGoodsList(4, 1, 30).then(res => {
            this.goodsList.push(...formatGoodsInfo(res.data.data))

            /**
             * 数据返回就在此支持获取元素的话，可能数据还没有来得及渲染
             * 导致获取的高度不准确
             */
            // this.topOffset.push(0)
            // this.topOffset.push(this.$refs.params.$el.offsetTop)
            // this.topOffset.push(this.$refs.comment.$el.offsetTop)
            // this.topOffset.push(this.$refs.recommend.$el.offsetTop)
            // console.log(this.topOffset);

            /**
             * $nextTick 的作用是等上面的数据都渲染完成后执行
             * 问题：该页面有大量图片 图片还没渲染完也得不到准确高度
             */
            // this.$nextTick(() => {
            //     this.topOffset.push(0)
            //     this.topOffset.push(this.$refs.params.$el.offsetTop)
            //     this.topOffset.push(this.$refs.comment.$el.offsetTop)
            //     this.topOffset.push(this.$refs.recommend.$el.offsetTop)

            //     console.log(this.topOffset);
            // })
        })

          this.getThemeTopY = debounce(() => {
                this.topOffset = [];
                this.topOffset.push(0)
                this.topOffset.push(this.$refs.params.$el.offsetTop)
                this.topOffset.push(this.$refs.comment.$el.offsetTop)
                this.topOffset.push(this.$refs.recommend.$el.offsetTop)

                console.log(this.topOffset);
            })
    },
    // 一旦有新数据渲染就会执行
    updated() {
        // this.topOffset = []
        // this.topOffset.push(0)
        // this.topOffset.push(this.$refs.params.$el.offsetTop)
        // this.topOffset.push(this.$refs.comment.$el.offsetTop)
        // this.topOffset.push(this.$refs.recommend.$el.offsetTop)

        // console.log(this.topOffset);
    },
    mounted() {
        // console.log('detail自带mounted');
        // 这个地方只是挂载 组件的数据可能还没有请求回来
        // this.topOffset.push(0)
        // this.topOffset.push(this.$refs.params.$el.offsetTop)
        // this.topOffset.push(this.$refs.comment.$el.offsetTop)
        // this.topOffset.push(this.$refs.recommend.$el.offsetTop)

        // console.log(this.topOffset);
        
    },
    methods: {
        clickTitleItem(index) {
            this.$refs.scroll.scrollTo(0, -(this.topOffset[index] - 44), 200)
        },
        detailImageLoad() {
            this.$refs.scroll.scroller.refresh();
            //获取标题位置
            this.getThemeTopY()
        }
    }
  }
</script>

<style scoped>
#detail {
    position: relative;
    z-index: 11;
    background: #fff;
    height: 100vh;
}
.detail-scroller {
    overflow: hidden;
    height: calc(100% - 44px);
}
</style>
