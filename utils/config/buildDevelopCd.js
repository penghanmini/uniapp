export default {
  env: 'development',
  apis:{
    modules:{
       //登陆模块
      loginApi:{
        host:"http://plusapi.oqpo.top",
        url:"/api"
      },
    },
    defaultHost: 'http://plusapi.oqpo.top',//正式环境
    // defaultHost: 'http://192.168.0.204:8870',//开发环境

  },
  siteInfo:{
    // 多站点配置
    sites: {
      file_server_url_api: "",   // 文件下载地址
      file_server_url_file: "",   // 文件上传地址
    }
  }
}