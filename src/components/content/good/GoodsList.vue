<template>
  <div class="goods-list">
      <GoodListItem v-for="goodItem in goodsList" :key="goodItem.id" :goodItem="goodItem" />
  </div>
</template>

<script>
import GoodListItem from './GoodListItem'

export default {
    name: 'GoodsList',
    props: {
        goodsList: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        GoodListItem
    }
  }
</script>

<style scoped>
.goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: var(--color-background);
    padding: 2px;
}
</style>
