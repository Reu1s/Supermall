<template>
  <div id="nav">
    <router-view />
    <maintabbar />
  </div>
</template>

<style>
@import "assets/css/base.css";
</style>
<script>
import maintabbar from "components/contents/maintabbar/MainTarBar";
export default {
  components: {
    maintabbar,
  },
};
</script>