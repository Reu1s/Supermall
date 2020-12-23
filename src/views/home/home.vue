<template>
  <div id="home">
    <navbar class="home">
      <template #center>购物街</template>
    </navbar>
    <home-swiper :cbanners="banners" />
    <recommend-view :cproducts="recommends" />
    <home-feature-view />
    <tab-control class="Tab-control" :ctitle="title" />
    <ul>  
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
    </ul>
  </div>
</template>
<script>
import RecommendView from "./childComps/HomeRecommend";
import HomeFeatureView from "./childComps/HomeFeatureView";
import HomeSwiper from "./childComps/HomeSwiper";

import TabControl from "components/contents/tabControl/TabControl";

import navbar from "components/common/navbar/navbar";

import { getHomeMultidata } from "network/home";
export default {
  name: "home",
  components: {
    RecommendView,
    HomeSwiper,
    HomeFeatureView,

    TabControl,

    navbar,
  },
  data() {
    return {
      banners: [1, 2, 3, 4],
      recommends: [],
      title:["流行","新款","精选"],
      
    };
  },
  created: function () {
    getHomeMultidata().then((result) => {
      this.banners = result.data.banner.list;
      this.recommends = result.data.recommend.list;
    });
  },
};
</script>
<style>
#home {
  padding-top: 44px;
}
.home {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
}
.Tab-control{
  position: sticky;
  top: 44px;
}
</style>