<template>
    <navbar>
      <template #left><img @click="backclick" src="../../../assets/images/common/back.svg" /></template>
        <template #center class="title">
          <div class="title"> 
            <div @click="itemclick(index)"
             class="item" :class="{active:index == currentindex}"
             v-for="(item,index) in titles">{{ item }}</div>
          </div>
        </template>
    </navbar>
</template>


<script>
import navbar from "components/common/navbar/navbar";
export default {
  components: {
    navbar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评价", "推荐"],
      currentindex:0
    }
  },
  methods:{
    backclick(){
      this.$router.back()
    },
    itemclick(index){
      this.currentindex =index
      this.$emit('titleclick',index)
    }
  },
};
</script>
<style scoped>
.title{
  display: flex;
}
.item{ 
  flex: 1;
}
.active{
  color: var(--color-high-text);
}
</style>