<template>
	<view>
		<page-head :title="title" :leftIcon="leftIcon" :rightIcon="rightIcon"></page-head>
		<view class="page-body">
			 <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="item in itemList" :key="item">
					<!-- <text>{{item}}</text> -->
					<image class="img" :src="item"></image>
				</swiper-item>
			</swiper>
			<view class="btncls">
				<button @tap="changeIndicatorDots" v-bind:class="{showIndecations:indicatorDots}"> 指示点 </button>
				<button @tap="changeAutoplay" v-bind:class="{showAutoPlay:autoplay}"> 自动播放 </button>
			</view>
			<view style="padding: 10px;">
				<slider @change="intervalChange" show-value min="500" max="2000" /> 时间间隔
				<slider @change="durationChange" show-value min="1000" max="10000" /> 持续时间
			</view>
			<view style="text-align: center;margin-top: 20PX;">
				<view>二维码(长按可识别)</view>
				<input class="uni-input" @input="bindinput" :value="qrvalue" :placeholder="initQrstr" style="border: #007AFF solid 1px;"/>
				<image :src="src" @longpress="deQrcode" ></image>
			</view>
			<view class="btn-area">
				<button @tap="initQrcode()" class="page-body-button" form-type="submit">生成二维码</button>
				<button @tap="clearQrcode()" class="page-body-button" >清除二维码</button>
			</view>
		</view>
	</view>
</template>

<script>
	import pageHead from '../../components/page-head.vue'
	import utils from '../../common/utils.js'
	import Qr from '../../common/wxqrcode.js';
	
	export default {
		data(){
			return{
				title:'轮播',
				itemList: [
					'../../static/imgs/list/shuijiao.jpg',
					'../../static/imgs/list/muwu.jpg',
					'../../static/imgs/list/cbd.jpg'
				],
				indicatorDots: false,
				autoplay: false,
				interval: 5000,
				duration: 1000,
				hasLogin:false,
				forcedLogin:false,
				src:'',
				leftIcon:"uni-icon",
				rightIcon:"iconfont",
				size:'',
				qrvalue:'',
				initQrstr:'请输入内容'
			}
		},
		onLoad:function(option){
			// this.initQrcode();
		},
		components:{
			pageHead
		},
		methods:{
			changeIndicatorDots: function (e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay: function (e) {
				this.autoplay = !this.autoplay
			},
			intervalChange: function (e) {
				this.interval = e.detail.value
			},
			durationChange: function (e) {
				this.duration = e.detail.value
			},
			initQrcode:function (){
				if(this.qrvalue === ''){
					uni.showToast({
						icon:'none',
						title:'请输入非空内容！'
					});
					return;
				}
				this.size = this.getQRCodeSize();
				let imgsrc = Qr.createQrCodeImg(this.qrvalue,{
					size:parseInt(this.size)
				});
				this.src = imgsrc;
			},
			deQrcode:function(){
				 var bitmap = new plus.nativeObj.Bitmap("test");
				 bitmap.loadBase64Data( this.src, function(){
					console.log("加载Base64图片数据成功");
					bitmap.save('_doc/a.png',
						{
							format:'png',
							overwrite:true,
						}
						,function(i){
							console.log('保存图片成功：'+JSON.stringify(i));
							plus.barcode.scan( '_doc/a.png', function (type,result) {
								console.log( "Scan success:("+type+")"+result );
								uni.showToast({
									icon:'none',
									title:type+'----'+result,
								});
								bitmap.clear();
							}, function (error) {
								console.log( error.message );
							} );
						}
						,function(e){
							console.log('保存图片失败：'+JSON.stringify(e));
						}
					);
				}, function(){
					console.log('加载Base64图片数据失败：'+JSON.stringify(e));
				} );
			},
			getQRCodeSize:function(){
				var size= 0;        
				try {
					var res = uni.getSystemInfoSync();
					var scale = 750/278; //不同屏幕下QRcode的适配比例；设计稿是750宽
					var width = res.windowWidth/scale;        
					size = width;
		 
				} catch (e) {
					// Do something when catch error
					console.log("获取设备信息失败"+e);
				} 
				return size;
			},
			clearQrcode:function(){
				this.src='';
				this.bindinput('');
			},
			bindinput:function(e){
				if(e === ''){
					this.qrvalue='';
				}else{
					this.qrvalue = e.target.value;
				}
			}
		},
	}
</script>

<style>
	.img{
		width: 100%;
		height: 400px;
	}
	.btncls{
		margin-top: 50px;
		margin-bottom: 100px;
		display: flex;
		flex-direction: row;
	}
	.showIndecations{
		background-color: #0FAEFF;
	}
	.showAutoPlay{
		background-color: #0FAEFF;
	}
</style>
