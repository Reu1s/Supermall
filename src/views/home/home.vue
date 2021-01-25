<template>
  <div id="home">
    <navbar class="home"> <template #center>购物街</template></navbar>
     <tab-control
        class="Tab-control"
        :ctitle="title"
        ref="anothertabcontrol"
        @tabclick="tabclick"
        v-show="istabshow"
      />
    <backtop v-show="isshow" @click.native="backclick" />
    <scroll
      class="slide"
      ref="scroll"
      @positiontype="scrolltype"
      :probe-type="3"
      :pull-up-load="true"
      @pullingUp="loadmore"
    >
      <home-swiper :cbanners="banners" @swiperload="imageload" />
      <recommend-view :cproducts="recommends" />
      <home-feature-view />
      <tab-control
        :ctitle="title"
        ref="tabcontrol"
        @tabclick="tabclick"
      />

      <goods :cgoods="goods[currentgoods].list" />
    </scroll>
  </div>
</template>
<script>
import RecommendView from "./childComps/HomeRecommend";
import HomeFeatureView from "./childComps/HomeFeatureView";
import HomeSwiper from "./childComps/HomeSwiper";
import goods from "components/contents/goods/goodlist";
import TabControl from "components/contents/tabControl/TabControl";
import navbar from "components/common/navbar/navbar";

import scroll from "components/common/scroll/scroll";
import backtop from "components/contents/backTop/backtop";

import { getHomeMultidata, getHomeGoods } from "network/home";

import { debounce } from "common/utils";
import {itemlistenerMixin} from 'common/mixin'
export default {
  name: "home",
  components: {
    RecommendView,
    HomeSwiper,
    HomeFeatureView,
    goods,
    TabControl,
    scroll,
    backtop,
    navbar,
  },
  data() {
    return {
      banners: [''],
      recommends: [],
      title: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentgoods: "pop",
      isshow: false,
      taboffsettop: 0,
      istabshow:false,
      imagelistener:null
    };
  },
  created: function () {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mixins:[itemlistenerMixin],
  activated(){
      this.$refs.scroll.scroll.scrollTo(0,this.savey*1,0)
      this.$refs.scroll.refresh()
    },
  deactivated(){
       this.savey=this.$refs.scroll.getscrollY()
       this.bus.$off("itemimageload", this.imagelistener)
    },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((result) => {
        this.banners = result.data.banner.list;
        this.recommends = result.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((result) => {
        this.goods[type].list.push(...result.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    },

    //事件监听
    tabclick(index) {
      if (index == 0) this.currentgoods = "pop";
      if (index == 1) this.currentgoods = "new";
      if (index == 2) this.currentgoods = "sell";
      this.$refs.tabcontrol.currentindex = index;
      this.$refs.anothertabcontrol.currentindex=index;
    },
    //返回顶部
    backclick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },
    scrolltype(position) {
      this.isshow = -position.y > 600;
      this.istabshow = -position.y > this.offsettop
    },
    loadmore() {
      this.getHomeGoods(this.currentgoods);
    },
    imageload() {
      this.offsettop = this.$refs.tabcontrol.$el.offsetTop;
    },
  },
};
</script>
<style >
#home {
  height: 100vh;
}
.home {
  background-color: var(--color-tint);
  color: white;
}
.Tab-control {
  position: relative;
}
.wrapper {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 44px;
  left: 0;
  right: 0;
}
</style>