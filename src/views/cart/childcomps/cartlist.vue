<template>
  <div class="cartlist">
    <scroll class="listscroll" ref="scroll">
      <cartlistitem 
        v-for="(item,index) in $store.state.cartlist" 
        :key="index"
        :itemInfo ='item' 
      />
    </scroll>
    
  </div>
</template>
<script>
import scroll from 'components/common/scroll/scroll';
import cartlistitem from './cartlistitem';
export default {
  components:{
    cartlistitem,
    scroll
  },
  activated(){
    this.$refs.scroll.refresh()
  }
}
</script>
<style scoped>
.cartlist{
 
  height: calc(100% - 133px); 
}
.listscroll{
     height: calc(100% - 133px); 
}
</style>