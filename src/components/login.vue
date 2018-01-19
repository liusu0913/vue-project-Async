<template>
	<div class="container">
		<h1>login</h1>
		name：<input type="text" name="" v-model="username">
		<br>
		password：<input type="text" name="" v-model="psd">
		<br>
		<button @click="save">提交</button>
		<div class="show">
			<p>{{username}}</p>
			<p>{{psd}}</p>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'login',
		data() {
			return {
				username: 'liusu',
				psd: '123456'
			}
		},
		methods: {
			save() {
				// 判断是否存在这个用户
				if(this.username.length !== 0 && this.psd.length !== 0) {
					this.$store.dispatch({
						type:'getAsync',
						user: this.username,
						psd: this.psd
					})
				}
			}
		}
	}
</script>
<style scope>
	button {
		margin-top: 40px;
		border: none;
		outline: none;
		height: 30px;
		width: 50px;
	}
</style>