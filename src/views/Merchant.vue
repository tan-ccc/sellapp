<template>
    <div class="merchant">
       <Row class="containner top">
        <i-col span="16">
            <h4> {{data.name}}</h4>
           <div class="xxing"> <img src="../assets/imgs/star24_on@3x.png" v-show="data.score>1">
            <img src="../assets/imgs/star24_on@3x.png" v-show="data.score>2">
            <img src="../assets/imgs/star24_on@3x.png" v-show="data.score>3">
            <img src="../assets/imgs/star24_on@3x.png" v-show="data.score>4">
            <img src="../assets/imgs/star24_on@3x.png" v-show="data.score==5">
            <img src="../assets/imgs/star24_off@3x.png" v-show="data.score<5">
            <img src="../assets/imgs/star24_off@3x.png" v-show="data.score<4">
            <img src="../assets/imgs/star24_off@3x.png" v-show="data.score<3">
            <img src="../assets/imgs/star24_off@3x.png" v-show="data.score<2">
            <span>(611)</span> <span>月售690单 </span></div>
        </i-col>
        <i-col span="4" offset="3" class="shou"><p class="xing" v-show="!shou">❤</p><p class="xing red" v-show="shou">❤</p>
        <p v-show="!shou">收藏</p><p v-show="shou">已收藏</p>
        </i-col>
    </Row>
      <Row class="containner">
        <i-col span="8"><h5>起送价</h5>
        <h3>{{data.minPrice}}<span>元</span></h3>
        </i-col>
        <i-col span="8"><h5>商家配送</h5>
         <h3>{{data.deliveryPrice}}<span>元</span></h3></i-col>
        <i-col span="8"><h5>平均配送时间</h5>
         <h3>{{data.deliveryTime}}<span>分钟</span></h3></i-col>
    </Row>
     <div class="containner call">
         <h3>活动与公告</h3>
         <p class="bulletin">{{data.bulletin}}</p>
     </div>
     <div class="containner huod">
          <p v-for="(v,i) in data.supports" :key="i" class="containner ">
          <img src="../assets/imgs/discount_3@2x.png" v-show="v.type==1">
          <img src="../assets/imgs/decrease_3@2x.png" v-show="v.type==0" >
          <img src="../assets/imgs/invoice_3@2x.png" v-show="v.type==3" >
          <img src="../assets/imgs/guarantee_3@2x.png" v-show="v.type==2" >
        <span>{{v.description}}</span>
     </p>
     </div>
    
     <div class="containner pic" >
        <h3>商家实景</h3>
   <div class="pics">
         <div v-for="(v,i) in this.data.pics" :key="i">
              <img :src="v" alt="">
        </div>
   </div>
      
      
     </div>
     <div class="containner infos">
         <h3>商家信息</h3>
         <p v-for="(v,i) in data.infos" :key="i">{{v}}</p>
     </div>
    </div>
   
</template>

<script>
import { getSeller } from "../api/apis";
export default {
  data() {
    return {
      shou: true,
      data: {} //商家信息
    };
  },
  created() {
    getSeller().then(res => {
      this.data = res.data.data;
      console.log(this.data);
    });
  }
  //要获取vuex的值，统一使用计算属性
  //不能保存vuex的值在data里，它是独立的空间
  //     computed:{
  //         name(){
  //             return this.$store.state.name
  //         }
  //     },
  //     methods:{
  //         clickName(){
  //             this.$store.commit('changeName','李四')
  //         }
  //     }
};
</script>

<style lang="less" scoped>
.containner {
  padding: 20px;
  border-bottom: 1px solid #ccc;
}
.call{
    border-top: 16px solid #ccc;
}
.infos{
    p{  padding-left: 16px;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
    }
}
.pic{
     border-bottom: 16px solid #ccc;
}
.pics{
    div{
        padding: 5px;
    }
    display: flex;
    justify-content: space-around;
    height: 100px;
    img{
        height: 80px;
        width: 80px;
    }
}
.huod{
    border-bottom: 16px solid #ccc;
    img{
        width: 14px;
        height: 14px;
    }
}
.red {
  color: red;
}
.bulletin {
  font-size: 12px;
  padding: 20px;
  color: red;
  line-height: 20px;
}
.top {
  .xxing {
    padding-top: 10px;
  }
  img {
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
  .shou {
    text-align: center;
    .xing {
      font-size: 30px;
    }
    p {
      font-size: 12px;
    }
  }
}
</style>