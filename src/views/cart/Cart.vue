<template>
<div class="cart-content">
    <!--顶部导航-->
    <CartNavBar />
    <!--中间商品列表-->
    <Scroller class="cart-scroll" ref="scroll">
        <CartItem></CartItem>
    </Scroller>
    <!--底部-->
    <CartBottomBar></CartBottomBar>
</div>
</template>

<script>
import CartNavBar from './childComps/CartNavBar'
import CartItem from './childComps/CartItem'
import CartBottomBar from './childComps/CartBottomBar'
import Scroller from 'components/common/scroller/Scroller'

export default {
    name: 'Cart',
    components: {
        CartNavBar,
        CartItem,
        CartBottomBar,
        Scroller
    },
    activated() {
        //第一次进来的时候BScroll有一个自己的高度了，我们添加了购物车商品之后没有刷新高度，所以显示不出来
        this.$refs.scroll.refresh();
    }
}
</script>
<style scoped>
.cart-content {
    height: 100vh;
}
.cart-scroll {
    height: calc(100% - 44px - 44px);
    overflow: hidden;
    position: relative;
    z-index: 13;
    background-color: #fff;
}
</style>