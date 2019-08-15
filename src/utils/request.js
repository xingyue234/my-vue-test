import axios from "axios";
import { MessageBox, Message } from "element-ui";
import store from "@/store";
// import { getToken } from "@/utils/auth";

// 1. 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url基础地址，解决不同数据源url变化问题
  // withCredentials: true, // 跨域时若要发送cookies需设置该选项
  timeout: 5000 // 超时
});

// 2. 请求拦截
service.interceptors.request.use(
  config => {
    // do something
    // 把令牌添加到了请求头中
    if (store.getters.token) {
      // 设置令牌请求头
      // config.headers["X-Token"] = getToken();
    }
    return config;
  },
  error => {
    // 请求错误预处理
    //console.log(error) // for debug
    return Promise.reject(error);
  }
);

// 3. 响应拦截
service.interceptors.response.use(
  // 通过自定义code判定响应状态，也可以通过HTTP状态码判定
  response => {
    // 仅返回数据部分
    const res = response.data;

    return res;
  },
  error => {
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;
