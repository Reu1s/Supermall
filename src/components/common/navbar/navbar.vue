<template>
  <div class="navbar">
    <div class="left"><slot name='left'></slot></div>
    <div class="middle"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<style>
.navbar {
  display: flex;
  line-height: 44px;
  height: 44px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
.left,
.right {
  width: 60px;
}
.middle {
  flex: 1;
  text-align: center;
}
</style>
<script>
export default {
   name: "NavBar"
};
</script>