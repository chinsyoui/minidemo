<template>
	<view class="content">
		<image class="logo" src="/static/logo.png" @click="onButtonClick()"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
		<intro class="intro" id="intro" ref="intro" />
        <stave ref="stave"/>
	</view>
</template>

<script>
	import intro from "@/views/intro.vue";
	import stave from "@/views/stave.vue";

	export default {
		components: {
			intro,
            stave
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
                this.$refs.stave.init();
            },
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

.top {
	height: 100px;
	border: 1px solid rgb(74, 179, 130);
}
.center {
	flex: 1;
	width: 100%;
	border: 1px solid rgb(146, 128, 247);
}
</style>
