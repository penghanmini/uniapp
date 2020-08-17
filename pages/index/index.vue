<template>
	<view class="content">
		<view class="top-search">
			<u-input v-model="searchText" type="text" border clearable height="56" border-color="#fa3534" placeholder="搜索"
			 confirm-type="搜索" placeholder-style="font-size:24rpx"></u-input>
			<view class="search-btn">搜索</view>
		</view>
		<u-swiper :list="bannerList" name="url"></u-swiper>
		<view class="white-back exculent-store">
			<view style="padding-left: 10px;">优秀实体店铺推荐</view>
			<view class="store-area">
				<view class="store-card" v-for="(item,i) in storeList" :key="i">
					<img :src="item.url" alt="">
					<view class="store-name">{{item.name.substring(0,6)}}</view>
				</view>
			</view>
		</view>

		<view class="white-back daily-deal">
			<view style="padding-left: 10px;">每日特惠</view>
			<view class="daily-area">
				<view class="daily-card" v-for="(item,i) in dailyDealList" :key="i">
					<img :src="item.url" alt="">
					<view class="daily-name">{{item.name}}</view>
					<view class="daily-subname">{{item.name.substring(0,6)}}</view>
					<view class="daily-price"><span>￥</span>1564.00</view>
				</view>
			</view>
		</view>
		<view class="white-back area-special">
			<view style="padding-left: 10px;">地方特产</view>
			<view class="area-card" v-for="(item,i) in areaSpecialList" :key="i">
				<img :src="item.url" alt="">
				<view class="area-right">
					<view class="area-name">{{item.name}}</view>
					<view class="area-subname">{{item.name.substring(0,6)}}</view>
					<view class="area-price"><span>￥</span>1564.00</view>
				</view>
			</view>
			<view class="area-next" @click="handleAreaSpecialNext">换一批</view>
		</view>
		<u-swiper :list="advertisingList" name="url"></u-swiper>
		<view class="white-back hot-product">
			<view style="padding-left: 10px;">热销产品</view>
			<u-row class="hot-area" gutter="20">
				<u-col span="6">
					<view class="hot-card" v-for="(item,index) in hotList.filter((v,i)=>{return i%2 == 0})" :key="index">
						<img :src="item.url" alt="">
						<view class="hot-name">{{item.name}}</view>
						<view class="hot-subname">{{item.name.substring(0,6)}}</view>
						<view class="hot-price"><span>￥</span>1564.00</view>
					</view>
				</u-col>
				<u-col span="6">
					<view class="hot-card" v-for="(item,index) in hotList.filter((v,i)=>{return i%2 != 0})" :key="index">
						<img :src="item.url" alt="">
						<view class="hot-name">{{item.name}}</view>
						<view class="hot-subname">{{item.name.substring(0,6)}}</view>
						<view class="hot-price"><span>￥</span>1564.00</view>
					</view>
				</u-col>
			</u-row>
			<u-loadmore :status="status" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchText: "",
				bannerList: [{
						url: "../../static/image/img-1.jpg"
					},
					{
						url: "../../static/image/img-2.jpg"
					},
					{
						url: "../../static/image/img-3.jpg"
					}
				],
				storeList: [{
						url: "../../static/image/avatar.jpg",
						name: "优秀店铺"
					},
					{
						url: "../../static/image/avatar.jpg",
						name: "优秀店铺张三李四"
					},
					{
						url: "../../static/image/avatar.jpg",
						name: "优秀店铺"
					},
					{
						url: "../../static/image/avatar.jpg",
						name: "优秀店铺张三"
					},
					{
						url: "../../static/image/avatar.jpg",
						name: "优秀店铺"
					},
					{
						url: "../../static/image/avatar.jpg",
						name: "优秀店铺"
					},
				],
				dailyDealList: [{
						url: "../../static/image/avatar.jpg",
						name: "每日每日特惠特惠"
					},
					{
						url: "../../static/image/avatar.jpg",
						name: "每日特惠张三李四张三张三"
					},
					{
						url: "../../static/image/avatar.jpg",
						name: "每日特惠"
					},
					{
						url: "../../static/image/avatar.jpg",
						name: "每日每日特惠特惠"
					},
					{
						url: "../../static/image/avatar.jpg",
						name: "每日特惠"
					},
					{
						url: "../../static/image/avatar.jpg",
						name: "每日特惠"
					},
				],
				advertisingList: [{
						url: "../../static/image/img-1.jpg"
					},
					{
						url: "../../static/image/img-2.jpg"
					},
					{
						url: "../../static/image/img-3.jpg"
					}
				],
				hotList: [{
						url: "../../static/image/avatar.jpg",
						name: "热销产品"
					},
					{
						url: "../../static/image/avatar.jpg",
						name: "热销产品"
					},
					{
						url: "../../static/image/avatar.jpg",
						name: "热销产品"
					},
					{
						url: "../../static/image/avatar.jpg",
						name: "热销产品"
					},
				],
				areaSpecialList: [{
						url: "../../static/image/avatar.jpg",
						name: "每日每日特惠特惠"
					},
					{
						url: "../../static/image/avatar.jpg",
						name: "每日特惠张三李四张三张三"
					},
					{
						url: "../../static/image/avatar.jpg",
						name: "每日特惠"
					},
				],
				productList: [],
				pageNum: 0,
				countPage: 4,
				status:"loadmore"
			}
		},
		onLoad() {

		},
		mounted() {

		},
		methods: {
			onReachBottom(){
				let vm = this;
				console.log(vm.countPage,vm.pageNum);
				if(vm.countPage > vm.pageNum){
					vm.pageNum++
					vm.status = "loading"
					setTimeout(()=>{
						vm.hotList = vm.hotList.concat([
							{
								url: "../../static/image/avatar.jpg",
								name: "热销产品"
							},
							{
								url: "../../static/image/avatar.jpg",
								name: "热销产品"
							}
						])
						if(vm.countPage > vm.pageNum){
							vm.status = "loadmore"
						}
						else{
							vm.status = "nomore"
						}
					},2000)
				}
			},
		}
	}
</script>

<style lang="less" scoped>
	.content {
		padding: 10px;

		.top-search {
			display: flex;
			flex-flow: nowrap;
			justify-content: center;
			align-items: center;
			margin-bottom: 20rpx;

			.u-input--border {
				border-radius: 35rpx;
			}

			.search-btn {
				background-color: #fa3534;
				height: 60rpx;
				line-height: 56rpx;
				text-align: center;
				border-radius: 28rpx;
				border: 1px solid #fa3534;
				width: 140rpx;
				color: #FFFFFF;
				margin-left: 10rpx;
			}
		}

		.white-back {
			background: #FFFFFF;
		}

		.daily-deal {
			margin: 10px 0;
			padding: 10px 0;
			text-align: left;

			.daily-area {
				display: flex;
				flex-flow: nowrap row;
				overflow: auto;

				.daily-card {
					margin: 10px;
					box-shadow: 0px 2px 29px 2px rgba(12, 39, 40, 0.1);
					font-size: 12px;

					img {
						height: 140px;
						width: 140px;
					}

					view {
						margin: 5px;
						text-align: left;
					}

					.daily-name {
						color: #303133;
						font-weight: bold;
					}

					.daily-subname {
						color: #606266;
					}

					.daily-price {
						color: #F56C6C;
					}
				}
			}
		}

		.exculent-store {
			margin: 10px 0;
			padding: 10px 0;
			text-align: left;

			.store-area {
				display: flex;
				flex-flow: nowrap row;
				overflow: auto;

				.store-card {
					margin: 10px;
					box-shadow: 0px 2px 29px 2px rgba(12, 39, 40, 0.1);

					img {
						height: 100px;
						width: 100px;
					}

					.store-name {
						margin: 5px 0;
						font-size: 12px;
						text-align: center;
					}
				}
			}
		}

		.area-special {
			margin: 10px 0;
			padding: 10px;
			text-align: left;

			.area-card {
				display: flex;
				flex-flow: nowrap;
				justify-content: left;
				margin: 10px;
				box-shadow: 0px 2px 29px 2px rgba(12, 39, 40, 0.1);

				img {
					width: 150px;
					height: 120px;
				}

				.area-right {
					font-size: 12px;
					padding: 10px;

					.area-name {
						color: #303133;
						font-weight: bold;
					}

					.area-subname {
						color: #606266;
					}

					.area-price {
						color: #F56C6C;
					}
				}
			}

			.area-next {
				font-size: 12px;
				text-align: right;
				color: #909399;
			}
		}

		.hot-product {
			padding: 10px;
			text-align: left;
			.hot-area{
				align-items: start !important;
			}
			.hot-card {
				box-shadow: 0px 2px 29px 2px rgba(12, 12, 12, 0.1);
				margin: 10px 0;

				img {
					height: auto;
					width: 100%;
				}

				view {
					padding: 0 5px;
				}

				.hot-name {
					color: #303133;
					font-weight: bold;
				}

				.hot-subname {
					color: #606266;
				}

				.hot-price {
					color: #F56C6C;

				}
			}
		}
	}
</style>
