<template>
  <div class="tab-control">
      <div class="tab-control-item" v-for="(item, index) in titles" :key="index" @click="clickItem(index)">
          <span class="tab-control-text" :class="{active: index===currentIndex}">{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'TabControl',
    data() {
        return {
            currentIndex: 0
        }
    },
    props: {
        titles: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        clickItem(index) {
            this.currentIndex = index
        }
    }
  }
</script>

<style scoped>
.tab-control {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: #ffffff;
}
.tab-control .tab-control-item {
    flex: 1;
    font-size: 13px;
}
.tab-control-text {
    padding: 5px 3px;
}
.active {
    color: var(--color-high-text);
    border-bottom: 2px solid var(--color-tint);
}
</style>
