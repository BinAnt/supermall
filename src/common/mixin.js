import BackTop from 'components/content/backTop/BackTop'
import constParams from 'common/const'

export const mixin = {
    mounted() {
        console.log('混入文件的mounted');
    }
}

export const backTopMixin = {
    components: {
        BackTop
    },
    data() {
        return {
            isShowBackTop: false
        }
    },
    methods: {
        backTop() {
            //点击了返回顶部 这里出发滚动返回顶部
            this.$refs.scroll.scrollTo(0, 0, constParams.BACK_POSITION)
        },
        isShowBackTopFunc(position) {
             //是否显示返回顶部按钮
             this.isShowBackTop = -(position) > constParams.BACK_POSITION
        }
    }
}