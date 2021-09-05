<template>
  <div class="goods-item" @click="itemClick">
        <img v-lazy="showImg" alt="" @load="goodsImgLoad">
        <div class="goods-info">
          <p>{{goodsListItem.title}}</p>
          <span class="price">¥{{goodsListItem.price}}</span>
          <span class="collect"><img src="~assets/img/common/collect.svg" alt="">{{goodsListItem.cfav}}</span>
        </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  data() {
    return {

    }
  },
  props:{
      goodsListItem:{
        type:Object,
        default(){
          return {}
        }
      }
  },
  computed:{
    showImg(){
      return this.goodsListItem.image ||  this.goodsListItem.show.img
    }
  },
  components: {

  },
  methods:{
    goodsImgLoad(){
      this.$bus.$emit('goodsImgLoad')
    },
    itemClick(){
      this.$router.push('/detail/' + this.goodsListItem.iid)
    }
  }
}
</script>

<style scoped>
  .goods-item{
    padding-bottom: 44px;
    position: relative;
    width: 48%;
  }
  .goods-item img{
    width: 100%;
    border-radius: 3px;
  }
  .goods-info{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 6px;
    font-size: 12px;
    text-align: center;
    overflow: hidden;
  }
  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .price{
    color: var(--color-tint);
    margin-right: 3px;
  }
  .collect img{
    width: 12px;
    height: 12px;
    /* padding-top: 5px; */
  
  }
</style>
