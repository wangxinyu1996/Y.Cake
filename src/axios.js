//将引入axios库单独保存一个文件中
//减少main.js代码量
//1:引入Vue实例
import Vue from "vue"
// 2：引入axios库
import axios from "axios"
// 3：发送请求时保存session信息
axios.defaults.
withCredentials=true
// 4：设置请求基础路径
axios.defaults.
baseURL="http://127.0.0.1:3000"
// 5：将axios注册vue实例
  //不支持Use用法
Vue.prototype.axios=axios
// 6：在main.js引入axios.js文件