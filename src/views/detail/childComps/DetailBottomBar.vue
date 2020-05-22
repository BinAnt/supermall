<template>
  <div class="bottom-bar">
      <div class="bottom-bar-item">
          <img src="~assets/img/common/service.svg" alt="">
          客服
        </div>
      <div class="bottom-bar-item"><img src="~assets/img/common/collect.svg" alt="">收藏</div>
      <div class="bottom-bar-item"><img src="~assets/img/common/cart.svg" alt="">购物车</div>
      <div class="item-cart" @click="addCart">加入购物车</div>
      <div class="item-cart buy-now">立即购买</div>
  </div>
</template>

<script>
export default {
    name: 'DetailBottomBar',
    methods: {
        addCart() {
            this.$emit('addJoinCart')
        }
    }
  }
</script>

<style scoped>
.bottom-bar {
    height: 49px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
}
.bottom-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 11px;
}
.bottom-bar-item img {
    width: 20px;
    margin: 1px 0;
}
.item-cart {
    width: 25%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 12px;
    background-color: #000;
    border-radius: 4px;
    color: #e5e5e5;
    margin: 0 2px;
}
.buy-now {
    background-image: linear-gradient(0deg, #ffffff 0%, #f9acb0 0%, #f35861 0%, #ff7981 100%), linear-gradient( #e5e5e5, #e5e5e5);
}
</style>
