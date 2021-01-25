<template>
  <swiper class="swiperItem">
    <swiperItem v-for="item in ctopImages">
      <img :src="item" alt="" />
      </swiperItem>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    ctopImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style>
.swiperItem {
  height: 300px;
  overflow: hidden;
}
</style>