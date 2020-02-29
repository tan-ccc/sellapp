// 所有请求封装接口文件 方便项目后期维护，所有请求统一管理
import axios from 'axios'
//创建一个请求对象
let req = axios.create({
    baseURL: 'http://192.168.0.107:3000', // 基本路径
    timeout:  10000  //ms  超时限制（8-12秒）
})

//axios的封装
//请求商家信息 
export function getSeller(){
    return req.get('/api/seller')
}
//请求评论信息
export function getRating(){
    return req.get('/api/ratings')
}
//请求商品信息
export function getgoods(){
    return req.get('/api/goods')
}