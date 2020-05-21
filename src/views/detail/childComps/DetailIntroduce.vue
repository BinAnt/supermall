<template>
  <div class="detail-introduce">
      <TabControl :titles="['商品介绍', '规格参数']" @clickTab="clickTab"></TabControl>
      <div class="goods-detail-info" v-if="isShow">
          <img v-for="url in detailIntroduce.pictures" :src="url" :key="url" alt="">
      </div>
      <div class="goods-detail-attr" v-else>
          <div class="tr">
              <div class="td">商品编号</div>
              <div class="td">{{detailIntroduce.code}}</div>
          </div>
          <div class="tr">
              <div class="td">商品别名</div>
              <div class="td">{{detailIntroduce.alias_name}}</div>
          </div>
          <div class="tr">
              <div class="td">品牌</div>
              <div class="td">{{detailIntroduce.brand_name}}</div>
          </div>
          <div class="tr">
              <div class="td">商品分类</div>
              <div class="td">{{detailIntroduce.category_name}}</div>
          </div>
          <div class="tr">
              <div class="td">规格</div>
              <div class="td">{{detailIntroduce.property_name}}</div>
          </div>
      </div>
  </div>
</template>

<script>
import TabControl from 'components/content/TabControl/TabControl'

export default {
    name: 'DetailIntroduce',
    props: {
        detailIntroduce: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            isShow: true
        }
    },
    components: {
        TabControl
    },
    methods: {
        clickTab(index) {
            this.isShow = index === 0
        }
    }
  }
</script>

<style scoped>
.goods-detail-info {
    width: 100vw;
    padding: 10px 0;
}
.goods-detail-info img {
    width: 100vw;
}
.goods-detail-attr {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #e0e0e0;
}
.goods-detail-attr .tr {
    width: 100%;
    display: flex;
    font-size: 13px;
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #e0e0e0;
}
.goods-detail-attr .tr:nth-last-child(1) {
    border-bottom: 0;
}
.goods-detail-attr .tr .td:nth-last-child(1) {
    width: 60%;
    text-align: center;
}
.goods-detail-attr .tr .td:nth-child(1) {
    flex: 1;
    text-align: center;
    border-right: 1px solid #e0e0e0;
}
</style>
