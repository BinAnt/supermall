<template>
  <div class="detail-info">
      <div class="good-prices">
          <div class="price-item">钻卡价:{{goods.price_year}}</div>
          <div class="price-item">金卡价:{{goods.price_gold}}</div>
          <div class="price-item">市场价:{{goods.price_normal}}</div>
      </div>
      <div class="title">
          {{goods.title}}
      </div>
      <div class="rights">
          <span>· 假一赔十</span>
          <span>· 门店发货</span>
          <span>· 售后无忧</span>
          <span>· 全球直采</span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'DetailGoodInfo',
    props: {
        goods: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style scoped>
.detail-info {
    margin: 0 auto;
    border-bottom: 8px solid #f7f7f7;
}
.good-prices {
    display: flex;
    height: 30px;
    line-height: 30px;
    font-size: 10px;
}

.price-item {
    flex: 1;
    text-align: center;
}
.price-item:nth-child(1) {
    font-weight: bold;
    color: var(--color-high-text);
}
.price-item:nth-last-child(1) {
    text-decoration: line-through;
}
.title {
    width: 90%;
    margin: 0 auto;
    line-height: 18px;
    font-weight: bolder;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    display:-webkit-box; 
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2; 
}
.rights {
    width: 90%;
    margin: 0 auto;
    display: flex;
    font-size: 10px;
    color: #999999;
    height: 30px;
    line-height: 30px;
}
.rights span {
    flex: 1;
    text-align: center;
}
</style>
