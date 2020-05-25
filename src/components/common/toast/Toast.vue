<template>
  <div class="toast" v-show="isShow">
      {{message}}
  </div>
</template>

<script>
export default {
    name: 'Toast',
    data() {
        return {
            isShow: false,
            message: ''
        }
    },
    methods: {
        show(message='这是弹框', duration=1500) {
            this.isShow = true;
            this.message = message;

            setTimeout(()=>{
                this.isShow = false
                this.message = ''
            },duration)
        }
    }
  }
</script>

<style scoped>
.toast {
    position: fixed;
    z-index: 999;
    top: 50%;
    left: 50%;
    /**transform: 允许旋转，缩放，平移给定的元素; */
    transform: translate(-50%, -50%); 
    background-color: rgba(0,0,0, 0.75);
    color: #ffffff;
    padding: 8px 10px;
    font-size: 12px;
}
</style>
