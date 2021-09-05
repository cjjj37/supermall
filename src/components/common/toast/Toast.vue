<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      message:'',
      isShow:false
    }
  },
  components: {

  },
  methods:{
    show(message='默认文字', duration=2000){
      this.message=message
      this.isShow=true

      setTimeout(() => {
         this.message=''
        this.isShow=false
      }, duration);
    }
  }
}
</script>

<style scoped>
 .toast{
   position: fixed;
   z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: rgba(0,0,0,.6);
  padding: 5px 10px;
  color: #fff;
}
</style>
