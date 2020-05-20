<template>
  <div id="detail">
      <DetailNavBar></DetailNavBar>
      <DetailSwiper :topImages="topImages"></DetailSwiper>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'

import {getGoodInfo} from 'network/detail'

import { getImgUrl } from 'common/utils'


export default {
    name: 'Detail',
    components: {
        DetailNavBar,
        DetailSwiper
    },
    data() {
        return {
            id: null,
            topImages: []
        }
    },
    created() {
        //1、获取参数
        this.id = this.$route.params.id;

        //2、请求数据
        getGoodInfo(this.id).then(res => {
            this.topImages = JSON.parse(res.data.data.picture).map(item => {
                return {"img_url": getImgUrl(item, 'biggerImg')}
            })
        })
    }
  }
</script>

<style scoped>

</style>
