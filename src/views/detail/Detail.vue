<template>
  <div id="detail">
    <detail-nav-bar class="detailNavBar" @itemClick="itemClick" ref="navBar">
    </detail-nav-bar>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detailInfo="detailInfo" @detailImageLoad="imgLoad"/>
      <detail-goods-params :goodsParams="goodsParams" ref="goodsParams"/>
      <detail-comment-info :commentInfo="goodsComment" ref="goodsComment"/>
      <goods-list :goodsList="goodsRecommend" ref="goodsRecommend"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"/>
    <detail-bottom-bar @addToCart="addToCart"/>
  </div>
</template>

<script>
import DetailNavBar from 'views/detail/childComps/DetailNavBar'
import DetailSwiper from 'views/detail/childComps/DetailSwiper'
import {getDetail,Goods,Shop,GoodsParams,getRecommend} from 'network/detail'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailGoodsParams from './childComps/DetailGoodsParams.vue'
import DetailCommentInfo from 'views/detail/childComps/DetailCommentInfo.vue'
import GoodsList from 'components/content/goods/GoodsList'
import {itemListenerMixin,backTopMixin} from 'common/mixin'
import DetailBottomBar from 'views/detail/childComps/DetailBottomBar.vue'
import {mapActions} from 'vuex'

export default {
  name: 'Detail',
  data() {
    return {
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      goodsParams:{},
      goodsComment:{},
      goodsRecommend:[],
      navBarTopY:[],
      currentIndex:0
    }
  },
  mixins:[itemListenerMixin,backTopMixin],
  created(){
    this.iid=this.$route.params.id
    this.getDetail()
    this.getRecommend()

},
destroyed(){
  this.$bus.$off('goodsImgLoad',this.itemImgListener)
},
components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailGoodsParams,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar

  },
  methods:{
    ...mapActions(['addCart']),
    getDetail(){
      getDetail(this.iid).then(res => {
            const data=res.result
            //获取顶部图片
            this.topImages=data.itemInfo.topImages
            //获取商品信息
            this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
            //获取店铺信息
            this.shop=new Shop(data.shopInfo)
            //获取商品详细信息
            this.detailInfo=data.detailInfo
            //获取商品参数信息
            this.goodsParams= new GoodsParams(data.itemParams.info,data.itemParams.rule)
            //获取评论数据
            if(data.rate.cRate!==0)
              this.goodsComment=data.rate.list[0]
      })
    },
    getRecommend(){
      getRecommend().then(res => {
        this.goodsRecommend=res.data.list
      })
    },
    imgLoad(){
      this.$refs.scroll.refresh()
      this.navBarTopY=[]
      this.navBarTopY.push(0)
      this.navBarTopY.push(this.$refs.goodsParams.$el.offsetTop-44)
      this.navBarTopY.push(this.$refs.goodsComment.$el.offsetTop-44)
      this.navBarTopY.push(this.$refs.goodsRecommend.$el.offsetTop-44)
      this.navBarTopY.push(Number.MAX_VALUE)

    },
    itemClick(index){
        this.$refs.scroll.scrollTo(0,-this.navBarTopY[index],300)
    },
    //监听detail页面滚动 实现联动效果
    contentScroll(position){
      for(var i=0;i<this.navBarTopY.length-1;i++)
      {
        if((i!==this.currentIndex) && (-position.y >= this.navBarTopY[i] && -position.y < this.navBarTopY[i+1]))
          {
            this.currentIndex=i
            //改变detailNavBar的currentIndex
            this.$refs.navBar.currentIndex=this.currentIndex
          }
      }
      this.isShowBackTop(position)
  },
    addToCart(){
      //获取购物车中要显示的信息
      const product ={}
      product.image=this.topImages[0]
      product.title=this.goods.title
      product.desc=this.goods.desc
      product.price=this.goods.realPrice
      product.iid=this.iid

      //把商品信息保存到vuex中
      this.addCart(product).then(res => {

        //将toast显示
      this.$toast.show(res,3000)

      })
      // this.$store.dispatch('addCart',product).then(res => {
      //   console.log(res);
      // })


     
    }
  }
}
</script>

<style scoped>
    #detail{
      position: relative;
      z-index: 9;
      background-color: #fff;
      height: 100vh;
    }
    .detailNavBar{
      position: relative;
      z-index: 9;
      background-color: #fff;
    }
    .content{
      height: calc(100% - 44px - 49px);
    }
    /* .content{
      position: absolute;
      top: 44px;
      left: 0;
      right: 0;
    } */
</style>
