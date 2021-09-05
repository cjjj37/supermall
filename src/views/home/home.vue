<template>
  <div id="home">
    <nav-bar class="home-nav" ><div slot="center">购物街</div></nav-bar>
     <tab-control 
     v-show="isArrive"
     :titles="['流行','新款','精选']" 
     @tabClick="tabClick" 
     ref="topTabControl" 
     class="control"/>
    <scroll class="content"  ref="scroll" 
    :probe-type="3" 
    @scroll="contentScroll"
    :pull-up-load="true" 
    @pullingUpFinish="finish ">
        <home-swiper :banners="banners" @SwiperImgload="SwiperImgload" ref="homeSwiper"> </home-swiper>
        <recommend-view :recommends="recommends" />
        <feature-view />
        <tab-control  :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl"/>
        <goods-list :goodsList="showGoods" />
    </scroll>
        <back-top @click.native="backClick" v-show="isShow"/>

  </div>
</template>

<script>

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll.vue'

import {getHomeMultidata,getHomeGoods} from 'network/home'
import {debounce} from 'common/utils'
import {itemListenerMixin,backTopMixin} from 'common/mixin'

export default {
  name: 'Home',
  data() {
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop',
      tabOffsetTop:{
        type:Number,
        default(){
          return 0
        }
      },
      isArrive:false,
      saveY:0,

   }
  },
  mixins:[itemListenerMixin,backTopMixin],
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll

  },
  created(){
  this.getHomeMultidata()
  //获取商品数据
  this.getHomeGoods('pop')
  this.getHomeGoods('new')
  this.getHomeGoods('sell')

  },
  mounted(){
     //手动调用一次tabClick
  this.tabClick(0)

  },
  //保持页面跳转后回来时在原位置
  activated(){
    this.$refs.scroll.scrollTo(0,this.saveY)
    this.$refs.scroll.refresh()
  },
  deactivated(){
    this.saveY=this.$refs.scroll.getScrollY()
    //取消全局事件
    this.$bus.$off('goodsImgLoad', this.itemImgListener)

  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  methods:{
   
    // 网络请求相关方法
     getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.banners=res.data.banner.list
          this.recommends=res.data.recommend.list

      })
    },
    getHomeGoods(type){
      const page=this.goods[type].page+1
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page+1  
      //完成上垃加载更多    
       this.$refs.scroll.finishPullUp()
      })
    },
    // 事件监听相关方法
    tabClick(index){
      switch (index){
        case 0 :
          this.currentType='pop'
          break
        case 1 :
          this.currentType='new'
          break
        case 2 :
          this.currentType='sell'
      }
      this.$refs.topTabControl.currentIndex=index
      this.$refs.tabControl.currentIndex=index
    },
    contentScroll(position){
      //调用函数来决定backtop是否显示
      this.isShowBackTop(position)
      //大于保存的offsetTop时 将isArrive设置为true
      this.isArrive= -position.y>this.tabOffsetTop
      
    },
    //滚动到底部后，请求更多数据
    finish(){
      this.getHomeGoods(this.currentType)
    },
    SwiperImgload(){
      this.tabOffsetTop=this.$refs.tabControl.$el.offsetTop

      }

  }
}
</script>

<style scoped>
#home{
  padding-top: 44px;
    height: 100vh;
  position: relative;

}
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
/* .tab-control{
  position: sticky;
  top: 44px;
  z-index: 9;
} */
.control{
  position: relative;
  z-index: 9;
}
.content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  /* height: 300px; */
}
</style>
