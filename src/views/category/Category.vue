<template>
<div class="content">
    <Scroller class="home-scroller">
            <li>这是分类列表</li>
            <li>这是分类列表</li>
            <li>这是分类列表</li>
            <li>这是分类列表</li>
            <li>这是分类列表</li>
            <li>这是分类列表</li>
            <li>这是分类列表</li>
            <li>这是分类列表</li>
            <li>这是分类列表</li>
            <li>这是分类列表</li>
            <li>这是分类列表</li>
            <li>这是分类列表</li>
            <li>这是分类列表</li>
            <li>这是分类列表</li>
            <li>这是分类列表</li>
            <li>这是分类列表</li>
            <li>这是分类列表</li>
            <li>这是分类列表</li>
            <li>这是分类列表</li>
            <li>这是分类列表</li>
            <li>这是分类列表</li>
            <li>这是分类列表</li>
            <li>这是分类列表</li>
            <li>这是分类列表</li>
            <li>这是分类列表</li>
            <li>这是分类列表</li>
            <li>这是分类列表</li>
            <li>这是分类列表</li>
            <li>这是分类列表</li>
            <li>这是分类列表</li>
            <li>这是分类列表</li>
    </Scroller>
</div>
</template>

<script>
import Scroller from 'components/common/scroller/Scroller'

export default {
    name: 'Category',
    components: {
        Scroller
    },
    mounted() {
        
    }
}
</script>
<style scoped>
.content {
    height: 100vh;
}
.home-scroller {
    height: 300px;
    background-color: red;
    overflow: hidden;
}
</style>