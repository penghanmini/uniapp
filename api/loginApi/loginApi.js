/**
 * 作者: penghan
 * 描述:
 */
import apiFactory from '../apiFactory'

const module = {
  moduleName: "loginApi",
  apis: [
    //登录
    {
      method: "post",
      name: "login", // 接口名称
      url: "/login" // 接口全路径
    },
  ]
}
export default apiFactory(module)
