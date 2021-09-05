import {debounce} from './utils'

import BackTop from 'components/content/backTop/BackTop.vue'
import {BACKTOP_DISTANCE} from "@/common/const";

export const itemListenerMixin={
  data(){
    return {
      itemImgListener:null
    }
  },
  mounted(){
    let refresh=debounce(this.$refs.scroll.refresh,100)

    this.itemImgListener=() => {
          refresh()
        }
    this.$bus.$on('goodsImgLoad',this.itemImgListener)
  }
}

export const backTopMixin = {
      data(){
        return {
          isShow:false,

        }
      },
      components:{
        BackTop

      },
      methods:{
        backClick(){
          this.$refs.scroll.scrollTo(0,0,500)
        },
        isShowBackTop(position){
            //判断位置是否大于1000 决定backTop显示与否
            this.isShow= -position.y>BACKTOP_DISTANCE
        }
      }
}