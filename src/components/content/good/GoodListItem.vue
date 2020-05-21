<template>
  <div class="goods-item" @click="clickItem">
        <img :src="goodItem.img_url" @load="itemImageLoad">
        <div class="goods-info">
            <p>{{goodItem.name}}</p>
            <span class="price">{{goodItem.price_normal}}</span>
            <span class="collect">{{goodItem.id}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GoodListItem',
    props: {
        goodItem: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        /**
         * BScroll 存在的问题，加载一页之后不能更新scroll的高度
         * 解决方案：
         * 监听图片加载完成，都去请求一下scroll.refresh()
         * 
         * 这里要用到一个知识点叫事件总线
         */
        itemImageLoad() {
            this.$bus.$emit('itemImageLoad')

            this.$emit('itemImageLoad')
        },
        //点击跳转到详情
        clickItem() {
            this.$router.push('/detail/'+ this.goodItem.id)
        }
    }
  }
</script>

<style scoped>
.goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
}
.goods-item img {
    width: 100%;
}
.goods-item .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
}
.goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
}
.goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect {
    position: relative;
  }
  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
