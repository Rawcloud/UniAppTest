<template>
	<view>
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<view style="display: none;">
			<page-head :title="title"></page-head>
		</view>
		<view class="page-body">
			<view class="head-img">
				<image class="img" src="../../static/imgs/snowflake.png"></image>
			</view>
			<view class="uni-list" style="margin: 80px 20px;width: 700px;">
				<view class="uni-list-cell">
					<image src="../../static/imgs/login/icon_user.png"></image>
					<input class="uni-input" type="text" @input="bindInput" placeholder="请输入用户名" v-model="username"/>
				</view>
				<view class="uni-list-cell">
					<image src="../../static/imgs/login/icon_password.png"></image>
					<input class="uni-input" @input="bindInput2" placeholder="请输入密码" :password="showPassword" v-model="upaswrd"/>
					<view class="uni-icon uni-icon-eye" :class="[!showPassword ? 'uni-active' : '']" @click="changePassword"></view>
				</view>
			</view>
			<view>
				<label style="float: right;margin-right: 20px;font-size: 30px;">
					<checkbox :value="1" :checked="checked" @click="changeCh"></checkbox>
					<text>记住密码</text>
				</label>
			</view>
			<view class="button-sp-area" style="margin-top: 40px;">
				<button class="button" @click="tologin">登录</button>
			</view>
			<view class="oauth-row" v-if="hasProvider" v-bind:style="{top: positionTop + 'px'}">
				<view class="oauth-image" v-for="provider in providerList" :key="provider.value">
					<image :src="provider.image" @tap="oauth(provider.value)"></image>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import pageHead from '../../components/page-head.vue'
	import {login} from '../../common/request.js'
	import utils from '../../common/utils.js'
	
	export default{
		data(){
			return{
				title:'登录页',
				showPassword:true,
				username:'',
				upaswrd:'',
				loading: true,
				checked:true,
				haslogin:false,
				positionTop: 0,
				providerList: [],
				hasProvider: false
			}
		},
		onLoad:function(){
			this.initPosition();
			this.initProvider();
		},
		onShow:function(){
			// console.log('login page show');
			var key = 'cc',
				data = '';
			if (key.length === 0) {
				uni.showToast('读取数据失败 key 不能为空');
			} else {
				uni.getStorage({
					key: key,
					success: (res) => {
						console.log(res.data[0].suLoginName);
						this.username = res.data[0].suLoginName;
						this.upaswrd = res.data[0].suPassword;
						this.haslogin = true;
					},
					fail: () => {
						console.log('读取数据失败 找不到 key 对应的数据');
					}
				})
			}
		},
		methods:{
			changeCh:function(){
				this.checked = !this.checked;
			},
			bindInput:function(e){
					this.username = e.target.value;
			},
			bindInput2:function(e){
					this.upaswrd = e.target.value;
			},
			changePassword:function(e){
				this.showPassword = ! this.showPassword;
			},
			tologin:function(){
				if (this.haslogin) {
					uni.redirectTo({
						url:'../swiper/swiper?mc=login success'
					});
				} else{
					var dataJson = {
						suLoginName: this.username,
						suPassword: this.upaswrd,
						suUserType: 'A'
					}
					var mycheked = this.checked;
					login(dataJson,function(res){
						if(res != null ){
							// console.log(JSON.stringify(res));
							var key = 'cc'
							var data = res.data
							if (key.length === 0) {
								uni.showModal({
									title: '保存数据失败',
									content: 'key 不能为空',
									showCancel:false
								})
							} else {
								if (mycheked) {
									uni.setStorage({
										key: key,
										data: data,
										success: (res) => {
											uni.navigateTo({
												url:'../main/main?mc=login success'
											});
										},
										fail: () => {
											uni.showToast('储存数据失败');
										}
									})
								}
							}
						}
					});
				}
			},
			initPosition() {
				/**
				* 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
				* 反向使用 top 进行定位，可以避免此问题。
				*/
				this.positionTop = uni.getSystemInfoSync().windowHeight;
			},
			initProvider() {
				const filters = ['weixin', 'qq', 'sinaweibo'];
				uni.getProvider({
					service: 'oauth',
					success: (res) => {
						if (res.provider && res.provider.length) {
							for (let i = 0; i < res.provider.length; i++) {
								if (~filters.indexOf(res.provider[i])) {
									this.providerList.push({
										value: res.provider[i],
										image: '../../static/imgs/login/' + res.provider[i] + '.png'
									});
								}
							}
							this.hasProvider = true;
						}
					},
					fail: (err) => {
						console.error('获取服务供应商失败：' + JSON.stringify(err));
					}
				});
			},
			oauth(value) {
				uni.login({
					provider: value,
					success: (res) => {
						uni.getUserInfo({
							provider: value,
							success: (infoRes) => {
								console.log(JSON.stringify(infoRes));
								/**
								* 实际开发中，获取用户信息后，需要将信息上报至服务端。
								* 服务端可以用 userInfo.openId 作为用户的唯一标识新增或绑定用户信息。
								*/
								this.toMain(infoRes.userInfo.nickName);
							}
						});
					},
					fail: (err) => {
						console.error('授权登录失败：' + JSON.stringify(err));
					}
				});
			},
			toMain(userName) {
				if (mycheked) {
					uni.setStorage({
						key: key,
						data: data,
						success: (res) => {
							console.log('存储用户信息成功!');
						},
						fail: () => {
							uni.showToast('储存数据失败');
						}
					})
				}
			    /**
			     * 强制登录时使用reLaunch方式跳转过来
				 * 返回首页也使用reLaunch方式
			     */
			    if (this.forcedLogin) {
			        uni.reLaunch({
			             url: '../main/main',
			        });
			    } else {
			         uni.navigateBack();
			    }
			}
		},
		components:{
			pageHead
		}
	}
</script>
<style>
	@import '../../common/uni.css';
	@import '../../common/icon.css';
	.head-img{
		text-align: center;
		margin-top: 100px;
	}
	.img{
		width: 330px;
		height: 300px;
	}
	
	.uni-list-cell {
		padding: 0 50px;
	}
	.uni-list-cell image{
		width: 50px;
		height: 50px;
	}
	
	.uni-input {
		flex: 1;
		margin: 0px 30px;
		font-size: 30px;
	}
	
	.uni-icon {
		color: #999;
	}
	.button {
		margin-top: 30px;
		margin-bottom: 30px;
		background-color: #0faeff;
		color: #FFFFFF;
	}
		
	.button-sp-area {
		margin: 0 auto;
		width: 60%;
	}
	.oauth-row {
	        display: flex;
	        flex-direction: row;
	        justify-content: center;
	        position: absolute;
	        top: 0;
	        left: 0;
	        width: 100%;
	    }
	
	.oauth-image {
	    width: 100px;
	    height: 100px;
	    border: 1px solid #dddddd;
	    border-radius: 100px;
	    margin: 0 40px;
	    background-color: #ffffff;
	}
	
	.oauth-image image {
	    width: 60px;
	    height: 60px;
	    margin: 20px;
	}
</style>