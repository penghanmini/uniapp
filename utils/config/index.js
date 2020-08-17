import buildDevelopCd from './buildDevelopCd'
let buildEnv = 'buildDevelopCd'

const api = {
  //开发环境
  buildDevelopCd: buildDevelopCd,

}[buildEnv];
if (!api){
  throw new Error(`BUILD_ENV: ${buildEnv} not match`);
}

export default api