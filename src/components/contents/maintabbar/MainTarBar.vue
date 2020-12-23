<template>
  <tar-bar>
    <tar-bar-item path="/home" >
      <!--dom 中使用路径需要用 ~ 来识别配置的别名-->
       <template #item-icon> <img  src="~assets/images/tabbar/home.svg" alt=""></template>
       <template #item-icon-active> <img  src="~assets/images/tabbar/home_active.svg" alt=""></template>
       <template #item-text>首页</template>
    </tar-bar-item>
    <tar-bar-item path="/category">
       <template #item-icon> <img  src="~assets/images/tabbar/category.svg" alt=""></template>
       <template #item-icon-active> <img  src="~assets/images/tabbar/category_active.svg" alt=""></template>
       <template #item-text>品类</template>
    </tar-bar-item>
    <tar-bar-item path="/cart">
       <template #item-icon> <img  src="~assets/images/tabbar/shopcart.svg" alt=""></template>
       <template #item-icon-active> <img  src="~assets/images/tabbar/shopcart_active.svg" alt=""></template>
       <template #item-text>购物车</template>
    </tar-bar-item>
    <tar-bar-item path="/me">
       <template #item-icon> <img  src="~assets/images/tabbar/profile.svg" alt=""></template>
       <template #item-icon-active> <img  src="~assets/images/tabbar/profile_active.svg" alt=""></template>
       <template #item-text>我的</template>
    </tar-bar-item>
  </tar-bar>
</template>

<script>
    import TarBar from 'components/common/tarbar/TarBar'
    import TarBarItem from 'components/common/tarbar/TarBarItem'

    export default {
        name: "MainTarBar",
        components: {
            TarBar,TarBarItem
        }
    }
</script>

<style>
</style>
