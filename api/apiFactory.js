import config from "../utils/config/index.js"
import $ajax from "../utils/http.js"
import headerConfig from './headerConfig.js'

export default (module) => {
	let apiObject = {}
	module.apis.forEach((item)=>{
		apiObject[item.name] = (params,other) =>{
			let locationId = ""
			if(params && params.URI){
				locationId = `/${params.URI}`
				delete params.URI
			}
			return $ajax({
				method: item.method,
				url: `${config.apis.modules[module.moduleName].host}${config.apis.modules[module.moduleName].url || config.apis.defaultUrl}${item.url}${locationId}`,
				data: other||params,
				headers: item.headers || headerConfig()
			})
		}
	})
	return apiObject
}