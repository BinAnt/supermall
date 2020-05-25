export default {
    cartList: state => state.cartList,
    cartListLength: state => state.cartList.length,
    allChecked: state => state.cartList.filter(item => item.checked).length === state.cartList.length && state.cartList.length > 0,
    totalMoney: state => {
        return state.cartList.filter(item => item.checked).reduce((total, item) => {
            return total + parseFloat(item.price_year) * item.count
        }, 0)
    }
}