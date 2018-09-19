<template name="page-head">
	<view>
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<view class="page-head">
			<view :class="leftIcon" style="float: left; margin-top: 13px;" @click="toback()"></view>
			<view class="page-head-title">{{title}}</view>
			<view :class="rightIcon" style="float: right;margin-top: 13px;color: #FFFFFF;" @click="toScan()"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "page-head",
		props: {
			title: {
				type: String,
				default: ""
			},
			rightIcon:{
				type:String,
				default:"iconfont icon-saoma"
			},
			leftIcon:{
				type:String,
				default:"uni-icon uni-icon-arrowleft"
			}
		},
		methods:{
			toback:function(){
				uni.navigateBack({
					delta:1
				})
			},
			toScan:function(res){
				if(this.rightIcon === "iconfont icon-saoma"){
					uni.scanCode({
										success: function (res) {
											console.log('条码类型：' + res.scanType);
					// 						console.log('条码内容：' + res.result);
											uni.showModal({
												title:'扫描结果',
												content:res.result,
											})
										}
									});
				}else{
					uni.navigateTo({
						url:"../feedback/feedback"
					})
				}
			},
			test:function(res){
				console.log(res)
			}
		}
	}
</script>
<style>
	@import '../common/icon_font.css';
</style>
