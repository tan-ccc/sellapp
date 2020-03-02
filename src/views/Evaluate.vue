<template>
    <div>
   <div class="total">
       <div class="left">
         <span>3.9</span>
         <h4>综合评分</h4>
         <p>高于周边商家69.2%</p>
       </div>
       <div class="right">
        <h4>服务评分
            <img src="../assets/imgs/star24_on@3x.png">
            <img src="../assets/imgs/star24_on@3x.png">
            <img src="../assets/imgs/star24_on@3x.png">
            <img src="../assets/imgs/star24_on@3x.png">
            <img src="../assets/imgs/star24_off@3x.png">
            <span>3.9</span>
        </h4>
        <h4>口味评分
            <img src="../assets/imgs/star24_on@3x.png">
            <img src="../assets/imgs/star24_on@3x.png">
            <img src="../assets/imgs/star24_on@3x.png">
            <img src="../assets/imgs/star24_on@3x.png">
            <img src="../assets/imgs/star24_off@3x.png">
            <span>4.0</span>
        </h4>
        <h4>送达时间
            <span>44分钟</span>
        </h4>
       </div>
        </div>
        <div class="kong"></div>
        <div class="mind">
            <div class="btn">
               <div> <i-button type="info">全部</i-button>
                <i-button type="info" class="can">满意</i-button>
                <i-button >不满意</i-button></div>
            </div>
            <div class="intro">
            <div><span>√</span> </div>
            <span>只看有内容的评价 </span>
            </div>
            <div class="main" v-for="(v,i) in this.data" :key="i">
           <div class="left1"><img :src="v.avatar"> </div>
           <div class="right1">
               <div class="ttop"><p>{{v.username}}</p>  <span>{{new Date(v.rateTime ).toLocaleString()}}</span></div>
               <div>
                   <div class="xing"><span :class="{xxing:v.score>1 }">★</span>
                   <span :class="{xxing:v.score>1 }">★</span>
                   <span :class="{xxing:v.score>2 }">★</span>
                   <span :class="{xxing:v.score>3 }">★</span>
                   <span :class="{xxing:v.score>4 }">★</span>  <span v-show="v.deliveryTime">{{v.deliveryTime}}分钟送达</span></div></div>
                  
               <div class="p">
                   <p>{{v.text}}</p>
               </div>
               <div  class="zan"><span  v-for="(value,index) in v.recommend" :key="index">{{value}} </span>
                </div>
           </div>
            </div>
        </div>
    </div>
</template>

<script>
import {  getRating } from "../api/apis";
export default {
    data(){
       return{
           data:{ //评论信息
             rateTime:''
           },
         
       }
    },
    created(){
        
        getRating().then(res =>{
      this.data= res.data.data;
    });
    },
};
</script>

<style lang="less" scoped>
.mind{
    height: 300px;
    overflow-y:auto;
}
.total {
  display: flex;
  justify-content: space-around;
  .left {
    flex: 0.4;
    text-align: center;
    border-right: 1px #ccc solid;
    span{
        color: rgb(236, 133, 15);
        font-size: 30px;
    }
  }
  .right {
    flex: 0.6;
    padding-left: 20px;
    h4 {
      margin-bottom: 10px;
      img {
        width: 15px;
        margin-right: 5px;
      }
    }
  }
}
 .kong{
      width: 100%;
      height: 18px;
      border-top: 1px solid #999494;
       border-bottom: 1px solid #999494;
      background: rgb(235, 229, 229);
  }
  .btn{
      padding: 10px;
      div{
    border-bottom:1px solid #ccc;
      }
      button{
      margin: 5px;
      margin-bottom:20px;
      }
  }
  .intro{
      div{
          padding-right: 10px;
          height: 20px;
          text-align: center;
      
      font-size: 20px;
     flex: 0.1;
     span{
         margin-left: 10px;
         display: block;
         width: 29px;
         border-radius: 50%;
      background: #ccc;
      color: #fff;
     }
      }
      display: flex;
      height: 50px;
      border-bottom:1px solid #ccc;
     
  }
  .main{
       overflow-y:auto;
      display: flex;
      
      .left1{
          flex: 0.2;
          img{
              width: 70px;
              height: 80px;
          }
      }
      .right1{
          flex: 0.8;
         .ttop{
             display: flex;
             justify-content: space-between;
         }
      }
      .xxing{
          color: yellow;
      }
  }
  .zan{
              white-space:nowrap;
   overflow:hidden;
   text-overflow:ellipsis;
   font-size: 12px;
   span{
       border: 1px solid #ccc;
       
   }
      }
</style>