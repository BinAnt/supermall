<template>
  <div id="detail">
      <DetailNavBar class="detail-navbar"></DetailNavBar>
      <Scroller class="detail-scroller">
        <DetailSwiper :topImages="topImages"></DetailSwiper>
        <DetailGoodInfo :goods="goodInfo"></DetailGoodInfo>
        <DetailIntroduce :detailIntroduce="detailIntroduce" />
      </Scroller>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailGoodInfo from './childComps/DetailGoodInfo'
import DetailIntroduce from './childComps/DetailIntroduce'

import Scroller from 'components/common/scroller/Scroller'

import {getGoodInfo, goods, detailIntroduce} from 'network/detail'
import { getImgUrl } from 'common/utils'


export default {
    name: 'Detail',
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailGoodInfo,
        DetailIntroduce,
        Scroller
    },
    data() {
        return {
            id: null,
            topImages: [],
            goodInfo: {},
            detailIntroduce: {}
        }
    },
    created() {
        //1、获取参数
        this.id = this.$route.params.id;

        //2、请求数据
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
