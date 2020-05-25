<template>
<div>
    <CartNavBar />
    <CartItem></CartItem>
</div>
</template>

<script>
import CartNavBar from './childComps/CartNavBar'
import CartItem from './childComps/CartItem'

export default {
    name: 'Cart',
    components: {
        CartNavBar,
        CartItem
    }
}
</script>
<style lang='scss' scoped>
</style>