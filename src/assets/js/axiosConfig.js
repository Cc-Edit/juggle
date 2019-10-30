import axios from 'axios';
// import router from '@/router'

// 创建axios实例
const axiosInstance = axios.create({
  headers: {
    // "Content-Type": "application/json",
    'Content-Type': 'application/x-www-form-urlencoded',
    "uid": '123123',
  },
  timeout: 30000 // 请求超时时间
});

// 添加request拦截器
axiosInstance.interceptors.request.use(
  config => {
    // ========== 在发送请求之前做某事 ==========
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

/* 添加响应拦截器 对响应数据做些事，比如说把loading动画关掉 */
axiosInstance.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    if (error && error.response) {
      const status = error.response.status;
      switch (status) {
        case 400:
          error.message = error.response.data.message;
          break;
        case 401:
          error.message = `未授权，请登录， 错误代码:${status}`;
          break;
        case 403:
          error.message = `拒绝访问， 错误代码:${status}`;
          break;
        case 404:
          error.message = `请求地址出错: ${error.response.config.url} , 错误代码:${status}`;
          break;
        case 408:
          error.message = `请求超时， 错误代码:${status}`;
          break;
        case 500:
          error.message = `服务器内部错误， 错误代码:${status}`;
          break;
        case 501:
          error.message = `服务未实现， 错误代码:${status}`;
          break;
        case 502:
          error.message = `网关错误， 错误代码:${status}`;
          break;
        case 503:
          error.message = `服务不可用， 错误代码:${status}`;
          break;
        case 504:
          error.message = `网关超时， 错误代码:${status}`;
          break;
        case 505:
          error.message = `HTTP版本不受支持， 错误代码:${status}`;
          break;
        default:
          error.message = `服务异常， 错误代码:${status}`;
          break;
      }
    }
    // router.push('/error');   //跳转错误页面
    return Promise.reject(error); // 返回接口返回的错误信息
  }
);

const axiosConfig = {
  $axiosInstance: axiosInstance,
  $get: option => {
    return axiosInstance({
      url: option.url,
      method: "get",
      params: option.params
    });
  },
  $post: option => {
    return axiosInstance({
      url: option.url,
      method: "post",
      data: option.params
    });
  },
};


export default axiosConfig;