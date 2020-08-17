<template>
	<view class="content">
		<map style="height: 100vh;width: 100%;" :latitude="latitude" :longitude="longitude" scale="11" :markers="markers" :show-location="true" @markertap="markertap"
		 @updated='mapUpdated' @tap='closeMapMarker'></map>
	</view>
</template>

<script>
	import amap from "../../sdk/amap-wx.js"
	export default {
		data() {
			return {
				mapKey: "5172c73ad6829466533fb90aaf7250e5",
				longitude:"104.398651",
				latitude:"31.127991",
				markers: [],
				mapInfo: null,
			}
		},
		onLoad() {
			let vm = this;
			
			this.amapPlugin = new amap.AMapWX({

				key: this.mapKey //该key 是在高德中申请的微信小程序key

			});

			this.amapPlugin.getRegeo({

				type: 'gcj02', //map 组件使用的经纬度是国测局坐标， type 为 gcj02

				success: function(res) {
					
					console.log(res)

					vm.longitude = res[0].latitude;

					vm.latitude = res[0].longitude;

					vm.mapInfo = res[0];

				},

				fail: (res) => {

					console.log(JSON.stringify(res));

				}

			});
		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	.content {}
</style>
