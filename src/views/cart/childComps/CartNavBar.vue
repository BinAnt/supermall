<template>
  <div class="cart-navbar">
      <NavBar>
          <div slot="center">购物车({{cartLength}})</div>
      </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
    name: 'CartNavBar',
    components: {
        NavBar
    },
    computed: {
        cartLength() {
            return this.$store.state.cartList.length
        }
    }
}
</script>

<style scoped>
.cart-navbar {
    background-color: var(--color-tint);
    color: #ffffff;
    font-size: 14px;
}
</style>
