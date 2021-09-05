<template>
  <div class="navbar">
    <div class="left"><slot name="left"> </slot></div>
    <div class="center"><slot name="center"> </slot></div>
    <div class="right"><slot name="right"> </slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
    .navbar{
      display: flex;
      text-align: center;
      height: 44px;
      line-height: 44px;
      box-shadow: 0px 1px 1px rgba(100, 100, 100, .1);
    }

    .left,
    .right{
      width: 60px;
    }

    .center{
      flex:1;
    }
</style>
