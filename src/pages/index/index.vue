<template>
	<view class="content">
		<image class="logo" src="/static/logo.png" @click="onButtonClick()"></image>
		<intro class="intro" id="intro" ref="intro" />
		<view class="canvas-container">
			<div class="top">
				this is top tool
			</div>
			<view class="center">
				<canvas id="myCanvas" canvas-id="myCanvas"></canvas>
			</view>
			<div class="bottom">
				this is bottom tool
			</div>
		</view>
		<view>
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
import intro from "@/views/intro.vue";

export default {
	components: {
		intro,
	},
	data() {
		return {
			title: "Hello",
		};
	},
	mounted() {
		var cxt = uni.createCanvasContext("myCanvas", this);
		cxt.setFillStyle("rgba(0, 255, 255, 0.5)"); // 背景透明色
		cxt.fillRect(20, 0, 300, 500); //fillRect(x,y,宽度，高度)
		cxt.setFontSize(14); //设置字体大小，默认10
		cxt.setFillStyle("#e31d1a"); // 颜色
		cxt.font = "20px Georgia";
		cxt.fillText("Hello World!", 0, 50);
		cxt.fillText("Big smile!", 0, 90);
		cxt.draw();
	},
	onLoad() {},
	methods: {
		onButtonClick() {
			console.log("index.vue - onButtonClick");
			console.log("this.$refs.intro = ", this.$refs.intro);
			this.$refs.intro.init();
			console.log(this.$refs);
		},
	},
};
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

.canvas-container {
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	border: 1px solid red;
	/* height: calc(100vh - 44px); // full*/
	height: 500px;
}
.top {
	height: 100px;
	border: 1px solid rgb(74, 179, 130);
}
.center {
	flex: 1;
	width: 100%;
	border: 1px solid rgb(146, 128, 247);
}
#myCanvas {
	height: 100%;
	width: 100%;
}
</style>
