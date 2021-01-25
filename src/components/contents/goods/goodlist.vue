<template>
    <div class="itemgoods">
        <goodlistitem v-for="item in cgoods"  :goodsitem="item" />
        </div>
</template>
<style>
  .itemgoods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: var(--color-background);
    padding: 2px;
  }
</style>
<script>
import Goodlistitem from "./goodlistitem"
export default {
  components:{
    Goodlistitem
  },
  data() {
    return {};
  },
  props: {
    cgoods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>