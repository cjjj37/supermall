<template>
  <div class="cartBottomBar">
        <div class="checkButtom">
             <check-button 
             class="inline" 
             :isChecked="isSelectAll" 
             @click.native="checkClick"/><span>全选</span>
        </div>
        <div class="total">
          合计:￥{{totalPrice}}
        </div>
        <div class="calculate" @click="calcClick">
          去计算({{totalNum}})
        </div>

  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton.vue'
export default {
  name: 'CartBottomBar',
  data() {
    return {

    }
  },
  components: {
    CheckButton

  },
  computed:{
    totalPrice(){
      return this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue , item ) => {
        return preValue + item.price * item.count
      },0).toFixed(2)
    },
    totalNum(){
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    isSelectAll(){
      if(this.$store.state.cartList.length===0)
          return false
      return !this.$store.state.cartList.find( item => !item.checked)
    },
    isSelectNone(){
      if(this.$store.state.cartList.find( item => item.checked))
          return false
      else 
        return true
    }
  },
  methods:{
    checkClick(){
        this.isSelectAll ? (this.$store.state.cartList.forEach( item => item.checked= false))
        : (this.$store.state.cartList.forEach( item => item.checked= true))
  },
  calcClick(){
    if(this.isSelectNone)
    {
      this.$toast.show('请至少选择一件商品',2000)
    }
  }
}
}
</script>

<style scoped>
      .cartBottomBar{
        display: flex;
        height: 40px;
        background-color:#eee;
        text-align: center;
        line-height: 40px;
        font-size: 14px;

      }
      .checkButtom{
        flex: 3;
      }
      .total{
        flex: 7;
        text-align-last: left;
        padding-left: 20px;
      }
      .calculate{
        flex: 4;
        background-color: var(--color-tint);
      }
      .inline{
        display: inline-block;
        width: 20px;
      }
</style>
