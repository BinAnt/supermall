<template>
  <div class="cart-item">
      <CartItemGood v-for="item in cartList" :key="item.id" :goodItem="item"></CartItemGood>
  </div>
</template>

<script>
import CartItemGood from './CartItemGood'

export default {
    name: 'CartItem',
    components: {
        CartItemGood
    },
    computed: {
        cartList() {
            return this.$store.state.cartList
        }
    }
  }
</script>

<style scoped>

</style>
