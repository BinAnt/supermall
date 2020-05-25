<template>
<div class="cart-goods-item">
    <div class="good-item" >
      <div class="img-box">
          <img :src="goodItem.face_url" alt="">
      </div>
      <div class="good-info">
          <div class="title">{{goodItem.title}}</div>
          <div class="price">￥{{goodItem.price_year}}</div>
          <div class="count">x{{goodItem.count}}</div>
      </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'CartItemGood',
    props: {
        goodItem: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    computed: {
        cartList() {
            return this.$store.state.cartList
        }
    }
  }
</script>

<style scoped>
.cart-goods-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #f0f0f0;
    padding: 5px 0;
}
.good-item {
    width: 90%;
    display: flex;
    margin: 0 auto;
}
.good-item .img-box {
    width: 30%;
}
.good-item .img-box img {
    width: 100%;
}
.good-item .good-info {
    flex: 1;
}
.good-info {
    position: relative;
    margin-left: 10px;
}
.good-info .title {
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 13px;
    font-weight: 700;
}
.good-info .price {
    font-size: 14px;
    color: salmon;
    position: absolute;
    bottom: 10px;
}
.good-info .count {
    font-size: 12px;
    color: #999999;
    position: absolute;
    right: 10px;
    bottom: 10px;
}
</style>
