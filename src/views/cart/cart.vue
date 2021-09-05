<template>
  <div id="cart">
    <!-- 顶部导航栏 -->
    <nav-bar class="cart-nav" >
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <!-- 购物车商品 -->
    <scroll class="content" ref="Scroll">
        <cart-list />
    </scroll>
    <!-- 底部导航栏 -->
    <cart-bottom-bar  />
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue'
import NavBar from 'components/common/navbar/NavBar'
import { mapGetters } from 'vuex'
import cartList from './childComps/CartList.vue'
import CartBottomBar from './childComps/CartBottomBar.vue'

export default {
  name: 'Cart',
  data() {
    return {

    }
  },
  components: {
    Scroll,
    NavBar,
    cartList,
    CartBottomBar

  },
  computed:{
    ...mapGetters(['cartLength'])
  },
  activated(){
      //当页面处于活跃时刷新，cart页面在购物车中还没有商品时会算一次scrollHeight=0，不刷新会导致滚动失效
      this.$refs.Scroll.refresh()
  }
}
</script>

<style scoped>
      #cart{
        height: 100vh;
      }
      .content{
        height: calc(100% - 49px - 44px - 40px);
        overflow: hidden;
        
      }
      .cart-nav{
        background-color: var(--color-tint);
        color: #fff;
      }
</style>
