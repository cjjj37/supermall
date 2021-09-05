<template>
  <div class="ShopInfo" v-if="Object.keys(shop).length!==0">
      <div class="shopName">
        <img :src="shop.logo" alt="">
        <span>{{shop.name}}</span>
      </div>
      <div class="score">
        <div class="scoreLeft">
          <div>
              <div class="top">
              {{shop.sells}}
              </div>
              <div>总销量</div>
          </div>
          <div>
            <div class="top">{{shop.goodsCount}}</div>
            <div>全部宝贝</div>
          </div>
        </div>
        <div class="scoreRight">
          <div><span>{{shop.score[0].name}}</span>
          <span :class="{isRed2:shop.score[0].isBetter===true}">{{shop.score[0].score}}</span>
          <span v-if="shop.score[0].isBetter===true" :class="{isRed3:shop.score[0].isBetter===true}">高</span>
          <span v-else>低</span>

          </div>

          <div><span>{{shop.score[1].name}}</span>
          <span :class="{isRed2:shop.score[1].isBetter===true}">{{shop.score[1].score}}</span>
            <span v-if="shop.score[1].isBetter===true" :class="{isRed3:shop.score[1].isBetter===true}">高</span>
            <span v-else>低</span>
          </div>

          <div><span>{{shop.score[2].name}}</span>
          <span :class="{isRed2:shop.score[2].isBetter===true}">{{shop.score[2].score}}</span>
          <span v-if="shop.score[2].isBetter===true" :class="{isRed3:shop.score[2].isBetter===true}">高</span>
          <span v-else>低</span>
          </div>    
        </div>
      </div>
      <div class="goShop">
        <a href="">进店逛逛</a>
      </div>

  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  data() {
    return {

    }
  },
  props:{
    shop:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components: {

  }
}
</script>

<style scoped>
      .shopName
      {
        padding: 20px 0 30px 10px;
        vertical-align: middle;
      }
      .shopName *{
        vertical-align:middle;
      } 
      .shopName img{
        width: 34px;
        height: 34px;
        border-radius: 17px;
        border: 1px solid #eee;
      }
      .shopName span{
        padding-left: 14px;
        color:var(--color-text );
      }
      .score{
        display: flex;
        font-size: 12px;
        height: 50px;
        margin-bottom: 18px;

      }
      .score>div {
        flex:1;
      }
      .scoreLeft{
        display: flex;
        border-right: 2px solid #eee;
        text-align: center;
      }
      .scoreLeft>div{
        flex: 1;
        margin-top: 5px;
      }
      .scoreLeft>div .top{
        margin-bottom: 5px;
      }
      .scoreRight{
        position: relative;
        top: -6px;
      }
      .scoreRight>div{
        margin-bottom: 5px;
        padding-left: 12px;
      }
      .scoreRight>div span{
        display: inline-block;
        height: 10px;
      }
      .scoreRight>div span:nth-child(1){
        width: 60px;
      }
      .scoreRight>div span:nth-child(2){
        width: 40px;
        color:rgb(12, 173, 12);
      }
      .scoreRight>div span:nth-child(3){
        display: inline;
        width: 30px;
        background-color: rgb(12, 173, 12);
        color: #fff;
      }
      .isRed2{
        color: red !important;
      }
      .isRed3{
        background-color: var(--color-high-text) !important;
        color: #fff !important;
      }
      .goShop {
        text-align: center;
        border-bottom:3px solid #eee;
      }
      .goShop a{
        display: inline-block;
        width: 120px;
        height: 24px;
        line-height: 24px;
        border-radius: 12px;
        background-color:#eee;
        font-size: 14px;
        margin: 5px 0 24px;

      }
</style>
