export default () => {
	let headerConfig = { "Content-Type" : "application/json"}
	if(sessionStorage.openid){
		headerConfig["openid"] = sessionStorage.openid
	}
	return headerConfig
}