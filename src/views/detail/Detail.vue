<template>
  <div class="details">
    <detailnavbar class="detailnav" ref="navbar" @titleclick="titleclick" />
    <backtop v-show="isshow" @click.native="backclick" />
    <scroll ref="scroll" class="content" :probe-type="3" @positiontype='contentscroll'> 
      <detailswiper :ctopImages="topImages" />
      <detailgoodsinfo :goods="goods" />
      <detailshopinfo :shop="shop" />
      <detaildetail :detailInfo="detailInfo" @detailImageload="imageload" />
      <detailparam ref="param" :paramInfo="paramsInfo" />
      <detailcommentinfo ref="comment" :commentInfo="commentInfo" />
      <goods ref="recommends" :cgoods="recommends" />
    </scroll>
    <detailbottom @addToCart='addcart' />
  </div>
</template>

<script>
import scroll from "components/common/scroll/scroll";
import goods from "components/contents/goods/goodlist";

import Detailnavbar from "./childcomps/detailnavbar";
import Detailswiper from "./childcomps/detailSwiper";
import Detailgoodsinfo from "./childcomps/detailGoodsInfo";
import Detailshopinfo from "./childcomps/detailShopInfo";
import detaildetail from "./childcomps/detailDetail";
import detailparam from "./childcomps/detailParam";
import detailcommentinfo from "./childcomps/detailCommentInfo";
import detailbottom from "./childcomps/detailbottom";
import backtop from 'components/contents/backTop/backtop'
import { debounce } from "common/utils";
import { itemlistenerMixin } from "common/mixin";
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail";
export default {
  name: "Detail",
  components: {
    Detailnavbar,
    Detailswiper,
    Detailgoodsinfo,
    Detailshopinfo,
    detaildetail,
    detailparam,
    detailcommentinfo,
    goods,
    detailbottom,
    backtop,
    scroll,
  },
  data() {
    return {
      iid: null,
      topImages: [""],
      goods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommends: [],
      imagelistener: null,
      titleY: [],
      titleindex: 0,
      isshow: false
    };
  },
  created() {
    //商品网址
    this.iid = this.$route.params.iid;
    //商品详情信息
    getDetail(this.iid).then((res) => {
      const data = res.result;
      //轮播图
      this.topImages = data.itemInfo.topImages;
      //获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //获取店铺信息
      this.shop = new Shop(data.shopInfo);
      //详情数据
      this.detailInfo = data.detailInfo;
      //参数
      this.paramsInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //评论
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      }
    });
    //推荐商品
    getRecommend().then((res) => {
      this.recommends = res.data.list;
    });
  },
  methods: {
    imageload() {
      this.$refs.scroll.refresh();
      this.titleY = [];

      this.titleY.push(0);
      this.titleY.push(this.$refs.param.$el.offsetTop);
      this.titleY.push(this.$refs.comment.$el.offsetTop);
      this.titleY.push(this.$refs.recommends.$el.offsetTop);
    },
    titleclick(index) {
      this.$refs.scroll.scroll.scrollTo(0, -this.titleY[index], 100);
    },
    contentscroll(position){
      this.isshow = -position.y > 600;
     if(-position.y < this.titleY[1]-1) 
      this.titleindex = 0
     if(-position.y > this.titleY[1]-1) 
      this.titleindex = 1
     if(-position.y > this.titleY[2]-1) 
      this.titleindex = 2
     if(-position.y > this.titleY[3]-1) 
      this.titleindex = 3
     this.$refs.navbar.currentindex =  this.titleindex 
    },
    backclick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },
    addcart(){
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.detailInfo.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      this.$store.commit('addCart',product)
    }
  },
  mixins: [itemlistenerMixin],
  unmounted() {
    this.bus.$off("itemimageload", this.imagelistener);
  },
};
</script>
<style scoped>
.details {
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.detailnav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 93px);
}
</style>