<template>
	<view>
		<page-head :title="title" :rightIcon="rightIcon" :leftIcon="leftIcon"></page-head>
		<view class="page-body">
			<view class="page-section">
				<video class="myvideo" :autoplay="autoplay" id="myvideo" :src="src" @error="videoErrorCallback" controls="false" muted
				 :danmu-list="danmuList" enable-danmu danmu-btn></video>
				<view class="uni-list">
					<view class="uni-list-cell">
						<view>
							<view class="uni-label">弹幕内容</view>
						</view>
						<view class="uni-list-cell-db">
							<input id="dminput" @blur="bindInputBlur" class="uni-input" type="text" placeholder="在此处输入弹幕"/>
						</view>
					</view>
				</view>
				<view class="btn-area">
					<button @tap="bindSendDanmu" class="page-body-button" form-type="submit">发送弹幕</button>
					<button @tap="bindButtonTap()" class="page-body-button" >选择视频</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import pageHead from "../../components/page-head.vue"
	export default {
		data(){
			return{
				title:'视频',
				autoplay:false,
				src:'',//本地视频'../../static/video/video_pt.mp4'
				videoContext:'',
				inputValue: '',
				danmuList: [{
						text: '第 1s 出现的弹幕',
						color: '#ff0000',
						time: 1
					},
					{
						text: '第 3s 出现的弹幕',
						color: '#ff00ff',
						time: 3
					}
				],
				rightIcon:"iconfont icon-fankui",
				leftIcon:"uni-icon"
			}
		},
		onReady:function(res){
			this.videoContext = uni.createVideoContext('myvideo');
			this.src = '../../static/video/video_pt.mp4';
		},
		components:{
			pageHead
		},
		methods:{
			videoErrorCallback:function(e){
				 console.log('视频错误信息:' + e.target.errMsg);
			},
			bindButtonTap:function () {
				var self = this;
				self.$children[0].test('cs');//调用组件中的方法
				// console.log(self.$children[0]);
				uni.chooseVideo({
					sourceType:['album','camera'],
					success:(res) =>{
						self.src = res.tempFilePath;
						console.log('视频选择完成,路径为'+res.tempFilePath)
						console.log('当前视频播放源路径为'+self.src)
// 						uni.showModal({
// 							title:'提示',
// 							content:'当前视频播放有bug,官方正在修复!',
// 						})
						this.autoplay = true;
					}
				})
			},
			bindInputBlur:function (e) {
				this.inputValue = e.target.value
				console.log(this.$store)
			},
			bindSendDanmu:function () {
				var self = this;
				self.videoContext.sendDanmu({
					text:self.inputValue,
					color:self.getRandomColor()
				});
			},
			getRandomColor:function () {
				const rgb = []
				for (let i =0;i<3;i++) {
					let color = Math.floor(Math.random()*256).toString(16)
					color = color.length == 1? '0'+color:color
					rgb.push(color)
				}
				return '#'+rgb.join('');
			}
		},
	}
</script>

<style>
	.myvideo{
		width: 100%;
	}
</style>
