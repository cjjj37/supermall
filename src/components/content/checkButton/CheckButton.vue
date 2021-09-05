<template>
  <div class="check-button" >
    <img src="~assets/img/cart/tick.svg" alt="" :class="{isActive:isChecked}">
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  data() {
    return {
     
      }  
  },
  props:{
     isChecked:{
       type:Boolean,
       default(){
         return true
       }
     }
  },
  components: {

  }
  
}
</script>

<style scoped>
      .check-button{
        text-align: center;
      }
    .check-button img{
      border: 1px solid #aaa;
      border-radius: 50%;
      width: 14px;
      height: 14px;
      line-height: 14px;
    }
    .isActive{
      background-color: var(--color-tint);
      border: 1px solid var(--color-tint);
    }
</style>
