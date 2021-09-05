<template>
  <div>
 <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
        <img :src="item.image" alt="" @load="SwiperImgload">
        </a>         
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
  name: 'HomeSwiper',
  data() {
    return {
      isLoad:false
    }
  },
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods:{
    SwiperImgload(){
      if(!this.isLoad)
      {
        this.$emit('SwiperImgload')
        this.isLoad=true
      }
    }
  }
}
</script>

<style>

</style>
