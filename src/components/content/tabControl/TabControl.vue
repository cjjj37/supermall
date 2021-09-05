<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
     class="tab-control-item" 
    :class="{active:index===currentIndex}" 
    @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data() {
    return {
      currentIndex:0
    }
  },
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {

  },
  methods:{
    itemClick(index){
      this.currentIndex=index
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style scoped>
    .tab-control{
      display: flex;
      text-align: center;
      background-color: #fff;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      margin-bottom: 4px;
    }
    .tab-control-item{
      flex: 1;
    }
    .active{
      color: var(--color-heigh-text);
    }
    .active span{
      padding: 3px;
      border-bottom: 3px solid var(--color-tint);
    }
</style>
