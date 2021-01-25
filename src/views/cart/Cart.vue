<template>
  <div class="content">
    <navbar class="navbar">
      <template #center>购物车({{ $store.state.cartlist.length }})</template>
    </navbar>
    <cartlist  />
    <cartbottom />
  </div>
</template>

<script>
import navbar from "components/common/navbar/navbar";
import cartlist from "./childcomps/cartlist";
import cartbottom from "./childcomps/cartbottom";
export default {
  name: "Cart",
  components: {
    navbar,
    cartbottom,
    cartlist,
  },
};
</script>

<style scoped>
.navbar {
  background-color: var(--color-tint);
  color: white;
}
.content {
  height: 100vh;
}
</style>
