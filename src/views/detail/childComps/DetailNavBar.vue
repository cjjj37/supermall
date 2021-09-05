<template>
  <div class="detailNavbar">
      <nav-bar>
        <div slot="left" class="back" @click="back">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
        <div slot="center" class="title">
          <div v-for="(item,index) in titles" 
          class="title-item" 
          :class="{isActive:index===currentIndex}" 
          @click="itemClick(index)">
            {{item}}
          </div>
        </div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  name: 'DetailNavBar',
  data() {
    return {
        titles:['商品','参数','评论','推荐'],
        currentIndex:0
    }
  },
  components: {
    NavBar

  },
  methods:{
    itemClick(index){
      this.currentIndex=index
      this.$emit('itemClick',index)
    },
    back(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.title{
  display: flex;
  font-size: 13px;
}
.title-item{
  flex: 1;

}
.isActive{
  color: var(--color-high-text);
}
.back{
  margin-top: 4px;
}
.back img{
    width: 30%;
}
</style>
