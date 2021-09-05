<template>
  <div class="baseInfo" v-if="Object.keys(goods).length!==0">
      <div class="title">
          {{goods.title}}
      </div>
      <div class="price">
        <span class="nowPrice">{{goods.newPrice}}</span>
        <span class="oldprice"><del>{{goods.oldPrice}}</del></span>
        <span class="priceDesc" v-if="goods.discount">{{goods.discount}}</span>
      </div>
      <div class="moreInfo">
        <span>{{goods.columns[0]}}</span><span>{{goods.columns[1]}}</span><span>{{goods.services[0].name}}</span>
      </div>
      <div class="time">
        <span><img :src="goods.services[length-2].icon" alt="">{{goods.services[length-2].name}}</span>
        <span><img :src="goods.services[length-1].icon" alt="">{{goods.services[length-1].name}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  data() {
    return {

    }
  },
  components: {

  },
  computed:{
    length(){
      return this.goods.services.length
    }
  },
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
    .title{
      /* font-size: 16px; */
      font-weight: 550;
      padding: 10px 6px 20px;
      color: #000;
      /* height: 70px; */
    }
    .price{
      margin: 5px 0 15px;
    }
    .nowPrice{
      color: var(--color-high-text);
      font-size: 20px;
      padding: 0 5px 5px;
    }
    .oldprice{
      color: #999;
      font-size: 14px;
      padding: 5px;
    }
    .priceDesc{
      color: #fff;
      font-size: 14px;
      text-align: center;
      margin-left: 5px;
      padding: 2px 5px;
      border-radius: 0.6rem;
      background-color: var(--color-high-text);
      position: relative;
      top: -8px;
    }
    .moreInfo{
      display: flex;
      justify-content: space-between;
    }
    .moreInfo span{
      flex: 1;
      padding: 5px 5px 8px;
      font-size: 12px;
      color: #777;
      border-bottom:3px solid #eee;
    }
     .moreInfo span:nth-child(2){
       text-align: center;
     }
     .moreInfo span:nth-child(3){
       text-align: right;

    }
    .time{
      display: flex;
      justify-content: space-around;
      align-items: center;

    }
    .time img{
      width: 11px;
      height: 11px;
      margin-right: 2px;
    }
    .time span{
      flex: 1;
      font-size: 12px;
      padding: 20px 3px;
      font-weight: 600;
      border-bottom:3px solid #eee;
    }
    .time span:nth-child(2){
      text-align: right;
    }
</style>
