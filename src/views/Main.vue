<template>
    <div class="app">
        <!-- 容器页面 -->
        <div class="toptitle">
             <div class="top" :style="{backgroundImage:'url('+data.avatar+')',backgroundRepeat:'no-repeat',backgroundPosition:'centet',backgroundSize:'cover'}">
        <Row>
        <i-col span="6">   <img :src="data.avatar"></i-col>
        <i-col span="18">
        <Row >
        <i-col span="4"><img class="pin" src="../assets/imgs/brand@2x.png" alt=""></i-col>
        <i-col span="17">  <h4>{{data.name}}</h4></i-col>
        </Row>
          <p>{{data.description}}/{{data.deliveryTime}}分钟送达</p> </i-col>
           <Row>
      
      <Row>
        <i-col span="2"> <img class="jian" src="../assets/imgs/decrease_1@2x.png" ></i-col>
        <i-col span="10"> 
            {{data.supports? data.supports[0].description:''}}</i-col>
    </Row>
       
        </Row>
        </Row>
        <Row class="intr">
            <i-col span="3"><span><img src="../assets/imgs/bulletin@2x.png" alt=""></span> </i-col>
             <i-col span="21"> <p class="intro">{{data.bulletin}}</p></i-col>
        </Row>
       
        </div>
        </div>
       
        <div class="nav">
            <Row class="router-link-div">
        <i-col span="8"> <router-link to='/goods'>商品</router-link></i-col>
        <i-col span="8"> <router-link to='/evaluate'>评价</router-link></i-col>
        <i-col span="8"><router-link to='/merchant'>商家</router-link></i-col>
            </Row>   
        </div>
        <!-- 二级路由出口 -->
        <div class="main">
             <router-view></router-view>
        </div>
        <div class="shopcar-bar">
            <Row type="flex" justify="space-around" class="code-row-bg">
        <i-col span="4"><img src="../assets/imgs/car.png" alt=""></i-col>
        <i-col span="4">￥0</i-col>
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
           </Row>
        </div>
    </div>
</template>

 <script>
 
import { getSeller } from "../api/apis";
export default {
  data() {
    return {
      data: {}, //商家信息
     
    };
  },
  created() {
  const that = this;      
    getSeller().then(res => {
      this.data = res.data.data;
      that.$router.push("/goods"); 
    });
   
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.app{
    display: flex;
    flex-direction: column;
    .main{
        flex: 1;
         overflow-y:auto;
    }
}
.router-link-div {
    height: 40px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  width: 100%;
}
.router-link-active {
  color: red;
}
.shopcar-bar {
  position: fixed; 
  height: 60px;
  width: 100%;
  bottom: 0; 
  background-color: #141c27;
  img{
      width: 70%;
      height: 80%;
  }
}
.top:after{
    content: "";
    width:100%;
    height:100%;
    position: absolute;
    left:0;
    top:0;
    background: inherit;
    filter: blur(2px);
    z-index: 0;
}
.top {
    .ivu-row{
        z-index: 10;
    }
  height: 110px;
  padding: 20px;
  color: #fff;
  position: relative;
  img {
    width: 50px;
  }
  h4{
      line-height: 20px;
  }
  h4>img{
      width: 40px;
      height: 16px;
      margin-right: 5px;
  }
  .intr{
      background: rgba(125, 125, 125, 0.3);
        z-index:2;
      img{
          width: 30px;
            z-index:2;
      }
  }
  .intro{
      img{
          width: 30px;
      }
      white-space:nowrap;
   overflow:hidden;
   text-overflow:ellipsis;
  }
  .pin{
        width: 30px;
    } 
    .jian{
        width: 20px;

    } 
}
</style>