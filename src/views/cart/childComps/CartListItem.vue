<template>
  <div id="cartListItem">

    <div class="checkButton">
      <check-button :is-checked="product.checked" @click.native="checkedClick" />
    </div>

    <div class="img">
      <img :src="product.image" alt="">
    </div>

    <div class="texts">
      <div class="title">{{product.title}}</div>
      <div class="desc">{{product.desc}}</div>
      <div class="price">
        <span>￥{{product.price}}</span>
        <span>x{{product.count}}</span>
      </div>
     
    </div>

  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
  name: 'CartListItem',
  data() {
    return {

    }
  },
  props:{
    product:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components: {
    CheckButton

  },
  methods:{
    checkedClick(){
      this.product.checked=!this.product.checked
    }
  }
}
</script>

<style scoped>
  #cartListItem{
    padding: 10px 5px 10px 0;
    display: flex;
    height: 95px;
    border-bottom:1px solid #000;
  }
  .checkButton{

    width: 30px;
    line-height:85px;

  }
  .img {
    width: 60px;
    margin: 0 4px;
    border-radius: 5px;
    overflow: hidden;
  }
  .img img{
    width: 100%;
    height: 100%;
  }
  .texts{
    display: flex;
    /* flex: 1; */
    margin-left: 5px;
    width: calc(100% - 30px - 60px);
    flex-direction: column;
    justify-content: space-around;
  }
  .texts div{
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
  }
  .title{
    font-size: 14px;

  }
  .desc{
    font-size: 12px;
    color: #999;
    position: relative;
    top: -3px;
  }
   .price{
     font-size: 14px;
     display: flex;
     justify-content: space-between;

   }
   .price span{
     flex: 1;
   }
  .price span:nth-child(1){
   color: rgb(235, 141, 18);
  }
   .price span:nth-child(2){
     text-align: right;
     padding-right: 9px;
   }
</style>
