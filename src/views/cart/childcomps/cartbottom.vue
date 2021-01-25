<template >
  <div class="bottom">
    <div class="check">
      <checkbutton class="checkbutton" 
      :is-check="isallselect"
      @click.native="checkClick"
      /> <span>全选</span>
    </div>
    <div class="price">合计:￥{{totalprice}}</div>
    <div class="calculate">结算</div>
  </div>
</template>
<script>
import checkbutton from "components/contents/checkbutton/checkbutton";
export default {
  components: {
    checkbutton,
  },
  computed: {
    totalprice() {
        let count = 0
        var item
        for( item of  this.$store.state.cartlist ){
          if(item.checked){
            count = count+item.price * item.counter
          }
        }
        return count.toFixed(2)
    },
    isallselect(){
      if(this.$store.state.cartlist == 0)
         return false
      else{
        var item
        for( item of  this.$store.state.cartlist ){
          if(!item.checked)
          return false
        }
        return true
      }
    },
  },
  methods:{
    checkClick(){
      let isall =!this.isallselect
      this.$store.state.cartlist.forEach(item => item.checked = isall);
    }
  }
};
</script>
<style scoped>
.bottom {
  height: 40px;
  position: relative;
  line-height: 40px;
  background-color: #eee;
  display: flex;
}
.check {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 70px;
}
.checkbutton {
  width: 21px;
  height: 21px;
  line-height: 21px;
  margin-right: 5px;
}
.price {
  margin-left: 20px;
  flex: 1;
}
.calculate{
  width:90px;
  background-color:red ;
  color: #fff;
  text-align: center;
}
</style>