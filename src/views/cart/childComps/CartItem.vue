<template>
    <div class="cart-item-root">
        <div class="cart-item" v-for="(item, index) in cartList" :key="item.id">
            <CheckButton class="cart-button" :checked="item.checked" @clickCheck="clickCheck(index)"/>
            <CartItemGood  :goodItem="item"></CartItemGood>
        </div>
    </div>
</template>

<script>
import CartItemGood from './CartItemGood'
import CheckButton from 'components/content/checkButton/CheckButton'
//导入vuex中的getters
import {mapGetters} from 'vuex'

export default {
    name: 'CartItem',
    components: {
        CartItemGood,
        CheckButton
    },
    computed: {
        ...mapGetters([
            'cartList',
            'cartListLength'
        ])
    },
    methods: {
        //点击选中或取消选中
        clickCheck(index) {
            this.$store.commit('updateChecked', index)
        }
    }
  }
</script>

<style scoped>
.cart-item {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #f0f0f0;
}

</style>
