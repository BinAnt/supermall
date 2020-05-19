<template>
  <div ref="wrapper">
      <div>
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name: 'Scroller',
    props: {
        currentProbeType: {
            type: Number,
            default: 0
        },
        pullUpLoad: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            scroller: {
                type: Object,
                default() {
                    return {}
                }
            }
        }
    },
    mounted() {
        this.scroller = new BScroll(this.$refs.wrapper, {
            click: true,
            probeType: this.currentProbeType,
            pullUpLoad: this.pullUpLoad
        })

        //监听滚动的位置
        this.scroller.on('scroll', position => {
            this.$emit('showBackTop', position.y)
        })
        //监听下拉到底部
        this.scroller.on('pullingUp', () => {
            this.$emit('pullingUp')
            this.scroller.finishPullUp();
            this.scroller.refresh()
        })
    },
    methods: {
        //滚动到某个位置
        scrollTo(x, y, duration) {
            this.scroller && this.scroller.scrollTo(x, y, duration)
        },
        //刷新 重新获取高度
        refresh(...args) {
            console.log('----', args);
            
            this.scroller && this.scroller.refresh();
        },
        //上拉结束
        finishPullUp() {
            console.log('222222');
            
            this.scroller && this.scroller.finishPullUp();
        }
    }
}
</script>

<style scoped>

</style>
