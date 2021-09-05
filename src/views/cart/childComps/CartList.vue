<template>
  <div id="CartList">
      <cart-list-item v-for="(item,index) in cartList" :product="item" :key="index"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartListItem from './CartListItem.vue'

export default {
  name: 'CartList',
  data() {
    return {

    }
  },
  components: {
    CartListItem

  },
  computed:{
    ...mapGetters(['cartList'])
  }
}
</script>

<style scoped>

</style>
