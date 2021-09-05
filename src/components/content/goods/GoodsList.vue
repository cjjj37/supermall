<template>
  <div class="goodslist">
      <goods-list-item v-for="item in goodsList" :goodsListItem="item"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  name: 'GoodsList',
  data() {
    return {

    }
  },
  props:{
    goodsList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {
    GoodsListItem

  }
}
</script>

<style scoped>
  .goodslist{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 2px;
  }
</style>
