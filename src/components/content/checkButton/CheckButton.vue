<template>
  <div class="check-button" :class="{checked: checked}" @click="clickCheck">
      <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
    name: 'CheckButton',
    props: {
        checked: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        clickCheck() {
            this.$emit('clickCheck')
        }
    }
  }
</script>

<style scoped>
.check-button {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #d4d4d4;

    display: flex;
    align-items: center;
    justify-content: center;
}
.check-button img {
    width: 80%;
}
.checked {
    border-color: var(--color-tint);
    background-color: var(--color-tint);
}
</style>
