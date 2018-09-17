<template>
	<view>
		<page-head :title="title" :leftIcon="leftIcon" :rightIcon="rightIcon"></page-head>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map id="mmap" :latitude="latitude" :longitude="longitude" :markers="covers" scale="13" :show-location="showLocation">
				</map>
			</view>
			<view>
				<button type="primary" :size="mini" @click="moveToLocation">移动</button>
				<button type="warn" :size="mini" @click="transLateMaker">平移</button>
			</view>
			<view class="container">
				<mpvue-echarts :echarts="echarts" :onInit="onInit" />
			</view>
		</view>
	</view>
</template>

<script>
	import pageHead from "../../components/page-head.vue"
	import * as echarts from 'echarts'
	import mpvueEcharts from '../../mpvue-echarts'
	
	var util = require('../../common/util.js');
	var formatLocation = util.formatLocation;
	
	function initChart(canvas, width, height) {
		const chart = echarts.init(canvas, null, {
			width: width,
			height: height
		})
		canvas.setChart(chart)

		var option = {
			backgroundColor: '#ffffff',
			color: ['#37A2DA', '#32C5E9', '#67E0E3', '#91F2DE', '#FFDB5C', '#FF9F7F'],
			series: [{
				label: {
					normal: {
						fontSize: 14
					}
				},
				type: 'pie',
				center: ['50%', '50%'],
				radius: [0, '60%'],
				data: [{
					value: 55,
					name: '北京'
				}, {
					value: 20,
					name: '武汉'
				}, {
					value: 10,
					name: '杭州'
				}, {
					value: 20,
					name: '广州'
				}, {
					value: 38,
					name: '上海'
				}],
				itemStyle: {
					emphasis: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 2, 2, 0.3)'
					}
				}
			}]
		}

		chart.setOption(option)
		return chart
	}
	
	export default {
		data(){
			return{
				title:'地图',
				latitude:39.909,
				longitude:116.39742,
				covers:[{
							latitude:39.909,
							longitude:116.39742,
							iconPath:'../../static/imgs/map/location.png'
						}],
				location: {},
				showLocation:true,
				mapcontext:'',
				echarts,
				onInit: initChart,
				leftIcon:"uni-icon",
				rightIcon:"iconfont"
			}
		},
		components:{
			pageHead,
			mpvueEcharts
		},
		methods:{
			getLocation:function () {
				var self = this;
				uni.getLocation({
					type: 'gcj02',
					success:function(res){
						self.location = formatLocation(res.longitude, res.latitude);
// 						self.latitude = res.latitude;
// 						self.longitude = res.longitude;
// 						var temp = {
// 							latitude:res.latitude,
// 							longitude:res.longitude,
// 							iconPath:'../../static/imgs/map/location.png'
// 						};
// 						self.covers.push(temp);
					},
					fail:function(res){
						console.log(JSON.stringify(res));
						self.showLocation = true;
					}
				})
			},
			moveToLocation:function(){
				this.mapcontext.moveToLocation();
			},
			transLateMaker:function () {
				uni.showToast({
					icon:'none',
					title:'当前版本平移有bug,官方正在修复',
				})
// 				this.mapcontext.translateMaker({
// 					markerId:1,
// 					destination:{
// 						latitude:this.location.latitude,
// 						longitude:this.location.longitude
// 					},
// 					autoRotate:false,
// 					rotate:0
// 				});
			}
		},
		onShow:function(){
			this.getLocation();
		},
		onReady:function(){
			this.mapcontext = uni.createMapContext('mmap',this);
		}
	}
</script>

<style>
	map {
		width: 100%;
		height: 600px;
	}
	button{
		line-height: 100px;
		margin: 20px 10px;
	}
	.container {
		width: 100%;
		height: 300px;
	}
</style>
