<template>
  <div id="goodsParams" v-if="Object.keys(goodsParams).length!==0" >
      <table class="rule" >
          <tr v-for="tr in goodsParams.rule[0]">
            <td v-for="item in tr">{{item}}</td>
          </tr>     
      </table>
       <table class="infos">
          <tr v-for="item in goodsParams.infos">
            <td>{{item.key}}</td>
            <td class="itemValue">{{item.value}}</td>
          </tr>        
      </table>


  </div>
</template>

<script>
export default {
  name: 'DetailGoodsParams',
  data() {
    return {

    }
  },
  props:{
        goodsParams:{
          type:Object,
          default(){
            return {}
          }
        }
  },
  components: {

  }
}
</script>

<style scoped>
    #goodsParams{
      font-size: 13px;
      margin-left: 10px;
    }
    #goodsParams tr{
      border-bottom:2px solid #eee;
    }
    #goodsParams .rule  tr:last-child{
      border-bottom: 3px solid #eee;
    }
    .rule{
      margin: 25px 0 10px;
      /* text-align: center; */
      width: 100%;
    }
    .rule tr {
      display: flex;
      height: 40px;
      line-height: 40px;
      width: 100%;
      margin-left:10px;
    }
    .rule tr td{
      flex: 1;
    }
    .infos{
      width: 100%;
      margin-left: 10px;
      border-bottom:3px solid #eee;
    }
    .infos tr td{
      height: 40px;
    }
    .infos tr td:nth-child(1)
    {
      width: 30%;
    }

    .itemValue{
      color:var(--color-high-text);

    }
</style>
