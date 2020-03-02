import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//创建vuex的数据仓库，存放需要交互的数据
export default new Vuex.Store({
    //存放所有交互数据
    state:{
        totalMoney:0,
        scarlist:[],
        goodslist:[],
        list:[{name:'cc',age:17},
        {name:'a',age:18},
        {name:'b',age:16},
        {name:'c',age:20},
        {name:'cd',age:21},
        {name:'ce',age:17},],
     name:'张三'
    },
//mutations函数必须手动触发
//第一个参数函数名,第二个参数要传入的值
    mutations:{
        dec(state,index){
            state.goodslist[index[0]].foods[index[1]].num--;
            state.totalMoney-=state.goodslist[index[0]].foods[index[1]].price
        },
        add(state,i){
            console.log({i})
            state.goodslist[i[0]].foods[i[1]].num++ ;
            state.totalMoney+=state.goodslist[i[0]].foods[i[1]].price
        },
        changeName(state,newName){
            state.name = newName
        },
        initGoodsList(state,newArr){
            state.goodslist = newArr
            // console.log( state.goodslist)
        }
    },
    //vuex的计算属性,会缓存数据
    getters:{
        getAdult(state){
            // state.list
            return state.list.filter(obj=> obj.age>=18)
        },
        getGoodslist(state){
            for(var i=0;i<state.goodslist.length;i++){
                state.goodslist[i].foods
            
                 
                    return state.goodslist[i].foods.filter(obj=> obj.num>0)
                   
                
            }
           
        }
    }
})
