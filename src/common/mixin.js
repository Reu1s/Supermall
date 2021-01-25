import { debounce } from "common/utils";

export const itemlistenerMixin = {
  mounted() {
    let refresh = debounce(this.$refs.scroll.refresh,100);
    this.imagelistener = ()=>{
       refresh();
    }
    this.bus.$on("itemimageload", this.imagelistener);
  }
}