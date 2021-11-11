<template>
	<view class="outer-wrapper">
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
</template>

<script>
import Vex from "@/utils/vexflow-debug.js";
const VF = Vex.Flow;

export default {
	canvasElement: null, // HtmlCanvasElement (id='stave-wrapper')
	crc2d: null, // CanvasRenderingContext2D (canvasElement.getContext('2d'))
	vfRenderer: null, // new VF.Renderer(crc2d,0)

	data() {
		return {};
	},
	mounted() {
		let width = document.getElementById("myCanvas").offsetWidth;
		let height = document.getElementById("myCanvas").offsetHeight;
		console.log(width, height);
		var cxt = uni.createCanvasContext("myCanvas", this);
		cxt.setFillStyle("rgba(0, 255, 255, 0.5)"); // 背景透明色
		cxt.fillRect(0, 0, width, height); //fillRect(x,y,宽度，高度)
		cxt.setFontSize(14); //设置字体大小，默认10
		cxt.setFillStyle("#e31d1a"); // 颜色

		cxt.font = "20px Georgia";
		cxt.fillText("Hello World!", 0, 50);
		cxt.fillText("Big smile!", 0, 90);
		cxt.draw();
	},
	methods: {
		initCanvas() {
			var cxt = uni.createCanvasContext("canvas", this);
			console.log(cxt);
			cxt.setFillStyle("rgba(0, 255, 255, 0.5)"); // 背景透明色
			cxt.fillRect(20, 0, 300, 500); //fillRect(x,y,宽度，高度)
			// cxt.setFontSize(14); //设置字体大小，默认10
			// cxt.setFillStyle("#e31d1a"); // 颜色
			// cxt.font = "20px Georgia";
			// cxt.fillText("Heaaaaallo World!", 0, 50);
			// cxt.fillText("Big smile!", 0, 90);
			cxt.draw();
		},
		init() {
			console.log("msg from local vexflow: ", Vex.sayHello);

			if (!this.$options.canvasElement) {
				// 微信小程序不支持DOM，还要改造
				this.$options.canvasElement =
					document.getElementById("stave-wrapper").children[0];
				console.log(
					"HtmlCanvasElement = ",
					this.$options.canvasElement.__proto__
				);

				this.$options.crc2d =
					this.$options.canvasElement.getContext("2d");
				//this.$options.crc2d = uni.createCanvasContext('stave-wrapper',this);

				console.log(
					"CanvasRenderingContext2D = ",
					this.$options.crc2d.__proto__
				);

				this.$options.vfRenderer = new VF.Renderer(
					this.$options.crc2d,
					VF.Renderer.Backends.CANVAS
				);
				console.assert(
					this.$options.vfRenderer,
					"VexFlow Renderer Init Failed"
				);
				console.log(
					" VF.Renderer = ",
					this.$options.vfRenderer.__proto__
				);
			}

			console.assert(this.$options.canvasElement);
			console.log(
				"CanvasElement size: " +
					this.$options.canvasElement.offsetWidth +
					" x " +
					this.$options.canvasElement.offsetHeight
			);

			this.resizeCanvas();

			const context = this.$options.vfRenderer.getContext();
			console.log("VF.Renderer.getContext() = ", context.__proto__);

			//context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
			context.font = "10px Arial";
			context.setFillStyle("#eed");

			const vfStave = new VF.Stave(
				0,
				0,
				this.$options.canvasElement.offsetWidth
			);
			vfStave.addClef("treble");
			vfStave.setContext(context).draw();

			VF.Formatter.FormatAndDraw(
				context,
				vfStave,
				this.$options.vfStaveNotes
			);

			console.log("render finished");
		},

		// private methods:
		resizeCanvas() {
			let width = this.$options.canvasElement.offsetWidth;
			let height = this.$options.canvasElement.offsetHeight;
			console.log("resizing canvas to: " + width + " x " + height);

			const devicePixelRatio = window.devicePixelRatio || 1;

			// Scale the canvas size by the device pixel ratio
			this.$options.canvasElement.width = width * devicePixelRatio;
			this.$options.canvasElement.height = height * devicePixelRatio;
			this.$options.canvasElement.style.width = width + "px";
			this.$options.canvasElement.style.height = height + "px";

			this.$options.crc2d.scale(devicePixelRatio, devicePixelRatio);
		},
	},
};
</script>



<style scoped>
.outer-wrapper {
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	border: 1px solid red;
	height: calc(100vh - 44px);
	/* TODO 希望是屏幕高度而不是固定值 */
	/* height: 500px; */
}


.canvas-container {
	/* TODO 和 flex-grow一样么？ */
	flex: 1;
	/* flex-grow: 1; */
	width: 100%;
	padding: 1px;
	font-size: 14px;
	line-height: 24px;
	border: 1px solid rgb(146, 128, 247);
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
