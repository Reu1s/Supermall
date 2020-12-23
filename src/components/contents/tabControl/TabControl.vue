<template>
  <div class="tabcontrol">
    <span class="itemspan"  v-for="(item,index) in ctitle"
    :class="{active:index == currentindex}" @click="itemclick(index)"><span>{{ item }}</span></span>
  </div>
</template>
<style>
.tabcontrol {
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  font-size: 15px;
  display: flex;
  text-align: center;
}
.itemspan {
  flex: 1;
}
.active span{
  color:var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
  padding: 5px;
}
</style>
<script>
export default {
  methods:{
    itemclick(index){
      this.currentindex=index
    }
  },
  props: {
    ctitle: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data(){
    return{
     currentindex: 0,
    }
  }
};
</script>