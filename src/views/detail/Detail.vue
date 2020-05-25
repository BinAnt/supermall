<template>
  <div id="detail">
      <DetailNavBar class="detail-navbar" @clickTitleItem="clickTitleItem" ref="nav"></DetailNavBar>
      <Scroller 
        class="detail-scroller" 
        ref="scroll" 
        @contentScroll="contentScroll" 
        :currentProbeType="3">
        <DetailSwiper :topImages="topImages" @detailImageLoad="detailImageLoad"></DetailSwiper>
        <DetailGoodInfo :goods="goodInfo" ref="params" ></DetailGoodInfo>
        <DetailIntroduce :detailIntroduce="detailIntroduce" ref="comment" @detailImageLoad="detailImageLoad"/>
        <GoodsList :goodsList="goodsList" ref="recommend" @itemImageLoad="detailImageLoad"></GoodsList>
      </Scroller>
      <DetailBottomBar @addJoinCart="joinCart"></DetailBottomBar>
      <BackTop @click.native="backTop" v-show="isShowBackTop"></BackTop>

  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailGoodInfo from './childComps/DetailGoodInfo'
import DetailIntroduce from './childComps/DetailIntroduce'
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroller from 'components/common/scroller/Scroller'
import GoodsList from 'components/content/good/GoodsList'

import { getGoodInfo, goods, detailIntroduce, recommendGoodsList } from 'network/detail'
import { getImgUrl, formatGoodsInfo, debounce } from 'common/utils'
import DetailConst from 'common/const'
import {mixin, backTopMixin} from 'common/mixin'

import { mapActions } from 'vuex'

export default {
    name: 'Detail',
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailGoodInfo,
        DetailIntroduce,
        DetailBottomBar,
        Scroller,
        GoodsList
    },
    mixins: [mixin, backTopMixin],
    data() {
        return {
            id: null,
            topImages: [],
            goodInfo: {},
            detailIntroduce: {},
            goodsList: [],
            topOffset: [],
            currentIndex: 0
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
                
            }, 200)
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
        //把vuex中的actions方法注册到组件中来
        ...mapActions(['addJoinCart']),
        clickTitleItem(index) {
            this.$refs.scroll.scrollTo(0, -(this.topOffset[index] - 44), 200)
        },
        detailImageLoad() {
            this.$refs.scroll.scroller.refresh();
            //获取标题位置
            this.getThemeTopY()
        },
        //滚动获取当前位置
        contentScroll(position) {
            let positionY = -(position - 44);
            this.topOffset.push(Number.MAX_VALUE) //人为添加一个大数据在后面
            // console.log(position);
            // topOffset [0, 244, 330, 6584]
            // console.log(this.topOffset, positionY);
            
            //方法一
            // for(var i = this.topOffset.length - 1; i >= 0; i--) {
            //     if(positionY >= this.topOffset[i]) {
            //         if(this.currentIndex != i) {
            //             this.currentIndex = i
            //             this.$refs.nav.currentIndex = this.currentIndex
            //         }
            //         break;
            //     }
            // }

            //方法二 这种方法优于上面的方法
            for(let i = 0; i< this.topOffset.length; i++) {
                if(this.currentIndex !== i && (positionY >= this.topOffset[i] && positionY < this.topOffset[i+1])) {
                    this.currentIndex = i
                    this.$refs.nav.currentIndex = this.currentIndex
                }
            }

            //是否显示返回顶部按钮
            this.isShowBackTopFunc(position)
        },
        //加入购物车
        joinCart() {
            //1、封装商品信息
            let product = {};
            product = Object.assign(product, this.goodInfo, this.detailIntroduce)
            product.id = this.id;
            product.face_url = this.topImages[0].img_url;
            //2、把数据传递给vuex
            //this.$store.commit('addJoinCart', product)

            //换成actions
            // this.$store.dispatch('addJoinCart', product).then(res => {
            //     console.log(res);
            // })
            //直接调用vuex中的actions
            this.addJoinCart(product).then(res => {
                //现在只需要这一行就可以调用toast了
                this.$toast.show(res);
            })
        }
        // showToast() {
        //     this.isShow = true;
        //     setTimeout(() => {
        //         this.isShow = false
        //     },1500)
        // }
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
    height: calc(100% - 44px - 49px);
}
</style>
