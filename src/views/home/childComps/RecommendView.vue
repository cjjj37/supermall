<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommendItem">
      <a :href="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  data() {
    return {

    }
  },
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {

  }
}
</script>

<style>
  .recommend{
    display: flex;
    text-align: center;
    font-size: 14px;
    padding: 12px 0 20px;
    border-bottom: 8px solid #eee;
  }
  .recommendItem{
    flex: 1;
  }
  .recommendItem img{
    width: 69px;
    height: 69px;
    margin-bottom: 6px;
  }
</style>
