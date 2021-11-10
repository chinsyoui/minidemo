<template>
	<view class="content">
		<image class="logo" src="/static/logo.png" @click="onButtonClick()"></image>
		<intro class="intro" id="intro" ref="intro"/>
		<view>
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	import intro from "@/views/intro.vue";

	export default {
		components: {
			intro
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
		},
		methods: {
			onButtonClick() {
				console.log("index.vue - onButtonClick");
                console.log("this.$refs.intro = ",this.$refs.intro);
                this.$refs.intro.init();
				console.log(this.$refs);
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.intro {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;

	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
