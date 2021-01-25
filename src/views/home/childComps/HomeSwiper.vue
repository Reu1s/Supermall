<template>
  <swiper class="home-swiper">
    <swiper-item v-for="item in cbanners" :key="item.image">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="homeswiperload" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  props: {
    cbanners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data(){
    return{
      isload:false
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods:{
    homeswiperload(){
      if(!this.isload){
        this.$emit('swiperload')
        this.isload = true
      }
    }
  }
};
</script>

<style >
</style>
