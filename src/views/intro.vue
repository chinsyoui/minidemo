<script/>

<template>
	<view class="container">
		<view class="text-area">
			<text class="text">第一句话</text>
		</view>
		<image class="image" src="/static/add.jpg"></image>
		<view class="text-area">
			<text class="text">第二句话</text>
		</view>
	</view>
</template>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		width: 100%;
		border: 1px solid red;
	}

		.image {
			height: calc(0.2 * (100vw - 1rem));
			background-size: cover;			
		}
		
		.text-area {
			display: flex;
			justify-content: center;
		}

		.text {
			flex-wrap: wrap;
			font-size: 1em;
			height: auto;
		}
</style>
