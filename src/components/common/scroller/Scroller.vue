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
            probeType: this.currentProbeType
        })

        this.scroller.on('scroll', position => {
            this.$emit('showBackTop', position.y)
        })
    },
    methods: {
        //滚动到某个位置
        scrollTo(x, y, duration) {
            this.scroller.scrollTo(x, y, duration)
        }
    }
}
</script>

<style scoped>

</style>
