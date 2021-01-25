<template >
  <div class="check-button" :class="{checks:isCheck}" >
    <img src="../../../assets/images/cart/tick.svg" alt="">
  </div>
</template>
<script>
export default {
  name: "CheckButton",
  props:{
    isCheck:{
      type: Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
.check-button{
  border-radius: 50%;
  border:2px solid #aaa;
}
.checks{
  background-color: red;
  border-color: red;
}
</style>
