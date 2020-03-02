<template>
    <div class="goods-div">
   <div class="left-div">
       <ul class="content">
       <ul  active-name="1" width="80px" v-for="(v,i) in goodslist" :key="i">
            <li name="1"  @click="ctitle(i)" 
               :class="{leftGoods:true , selected: i == curSelected}" >  
               <div> 
                   <img src="../assets/imgs/discount_3@2x.png" v-show="v.type==1">
                   <img src="../assets/imgs/decrease_3@2x.png" v-show="v.type==2" >
                   <img src="../assets/imgs/invoice_3@2x.png" v-show="v.type==3" >
                   <img src="../assets/imgs/guarantee_3@2x.png" v-show="v.type==4" >
                   {{v.name}}</div>
            </li>
    </ul>
    <div >     
    </div>
       </ul> 
   </div>
   <div class="right-div">
       <ul class="content">
             <Row>
        <i-col span="24" v-for="(v,i) in goodslist" :key="i">
            <div :id="i">
                   <p class="foodsTitle">{{v.name}}</p>
            <Row class="foodsMind"  v-for="(value,index) in v.foods" :key="index">
        <i-col span="8"><img :src="value.icon"></i-col>
        <i-col span="16"><h5>{{value.name}}</h5>
        <p>{{value.description}}</p>
        <p>月售<span>{{value.sellCount}}</span> 好评<span>{{value.rating}}%</span> </p>
        <Row class="foodsMind" >
        <i-col span="14"> <p class="price">￥<span>{{value.price}}</span> <span>{{value.oldPrice? value.oldPrice:''}}</span> 
        </p></i-col>
        <i-col span="10">
            <button class="add"  @click="decNum(value.name,i,index)"  v-show="value.num>0">-</button>
            {{value.num}}<button class="add" @click="addNum(value.name,i,index)">+</button></i-col>
    </Row>
        </i-col>
        </Row>
            </div>
         
        </i-col>
    </Row>
       </ul>
     
   </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import {  getgoods } from "../api/apis";

   export default {
        data () {
            return {
               curSelected:0 
              
            }
        },
         //计算属性会进行结果缓存 取多少次都是读取第一次运算的缓存结果
        //计算属性不能传值
       computed:{
           goodslist(){
             return this.$store.state.goodslist
           },
           getH(){
            var arr=[]
            let total =0
            for(let i =0;i<this.$store.state.goodslist.length;i++){
                let curDivHeight =  document.getElementById(i).offsetHeight
             arr.push({min:total,max:total+curDivHeight,index:i})
             //每循环一次累计之前div的高度
             total +=curDivHeight
            }
           return arr
           }
       },
         mounted(){
             //左侧
         new BScroll(document.querySelector('.left-div'),{
             click:true//允许点击
         });
         //右侧滚动板
        this.rightDiv = new BScroll(document.querySelector('.right-div'),{
            probeType:3
        });
           // 形参o接收滚动坐标
        this.rightDiv.on('scroll',( {y} )=>{
        let _y = Math.abs(y)
        console.log(_y)
        for(let divobj of this.getH){
            if(_y>=divobj.min&&_y<divobj.max){
                this.curSelected = divobj.index
                return//结束循环
            }
        }
        });

        },
        methods:{
         ctitle(title){
            this.curSelected=title;
            this.rightDiv.scrollToElement(document.getElementById(title),600);
         },
         addNum(name,a,b){
             console.log(name,a,b)
             var i=[a,b]
              this.$store.commit('add',i)
         },
         decNum(name,a,b){
             var index=[a,b]
            console.log(name,index)
              this.$store.commit('dec',index)
         },
        },
       created(){
            getgoods().then(res =>{
      this.$store.commit('initGoodsList',res.data.data)
    });
       }
    }
</script>

<style lang="less" scoped>
.selected{
    background: #fff;
}
.ivu-menu-item-active:not(.ivu-menu-submenu):after{
    background: #fff !important;
}
    .goods-div{
        display: flex;
        height: 100%;
        
    }
    div>img{
        width: 100%;
        height: 100%;
    }
     .left-div{
             overflow-y:auto;
             width: 80px;
             background: #ccc;
             height: 400px;
             
            li{
                padding: 15px 5px ;
                display: flex;
                align-items: center;
                justify-content: center;
                
            }
            .leftGoods{
                img{
                    width: 20%;
                    height: 20%;
                }
                color:#3c3c3c;
            }
         }
         .right-div{
              height: 100%;
            .foodsMind{
                padding-left: 30px;
            }
             .ivu-row>.ivu-col-span-8{
                 height: 100%;
             }
              .ivu-row>.ivu-col-span-16{
                padding-left: 10px;
              }
             flex: 1;
            height: 400px;
              overflow-y:auto;
              p{
                  font-size: 12px;
              }
              .price{
                  color: red;
                  font-size: 14px;
              }
              .add{
                  color: #fff;
                  width: 20px;
                  height: 20px;
                  background: skyblue;
                  border-radius: 50%;
                  border: 0px;
              }
              .foodsTitle{
                  color: rgb(168, 167, 167);
                  text-indent: 2em;
                  background: #faeded;
              }
              button{
                  border-radius: 50%;
                  width: 12px;
                  text-align: center;
              }
         }
    </style>