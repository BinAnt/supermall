<template>
  <div class="bottom-bar">
      <!--全选-->
      <div class="all-select" @click="selectAll">
          <CheckButton :checked="allChecked"></CheckButton>全选
      </div>
      
      <!--合计多少钱-->
      <div class="total-money">合计：￥{{totalMoney}}</div>
      <!--去计算-->
      <div class="sure-order" @click="goCalc">去计算<span v-show="selectCount>0">({{selectCount}})</span></div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

import {mapGetters} from 'vuex'

export default {
    name: 'CartBottomBar',
    components: {
        CheckButton
    },
    computed: {
        ...mapGetters([
            'cartListLength',
            'allChecked',
            'totalMoney',
            'selectCount'
            ])
    },
    methods: {
        //全选
        selectAll() {
            this.$store.commit('selectAll', this.allChecked)
        },
        goCalc() {
            if(this.selectCount === 0) {
                this.$toast.show('选择购买的商品')
            }
            console.log('去计算');
            
        }
    }
  }
</script>

<style scoped>
.bottom-bar {
    width: 100%;
    height: 44px;
    background-color: #f0f0f0;

    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
}
.all-select {
    display: flex;
    width: 20%;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-size: 12px;
}
.total-money {
    flex: 1;
    font-size: 13px;
}
.sure-order {
    width: 100px;
    height: 100%;
    line-height: 44px;
    text-align: center;
    font-size: 13px;
    background-color: var(--color-tint);
    color: #fff;
}
</style>
