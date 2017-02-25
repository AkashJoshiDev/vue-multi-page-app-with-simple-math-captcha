<template>
	<div class="home">
		<div class="container">
			<h1>Login with Vue</h1>
			<div v-if="form_response != ''">
				{{ form_response }}
			</div>
		</div>
		<div class="form">
			<div class="thumbnail"><img src="../assets/logo.png"/></div>
			<label>Login as</label>
			<select v-model="user_id">
				<option v-for="user in users" :value="user.id">{{ user.name }}</option>
			</select>
			<button @click="login">Login</button>
		</div>
	</div>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
import Router from 'vue-router'

var router = new Router();

export default {
	name: 'home',
	data () {
		return {
			form_response: '',
			users: [],
			user_id: ''
		}
	},
	methods: {
		login(){
			// Save user id and go to profile
			localStorage.setItem('id', this.user_id);
			this.$router.push('/profile/'+this.user_id);
		}
	},
	mounted: function(){
		// Check if already logged in
		var id = localStorage.getItem('id');
		if ( id != null ) {
			this.$router.push('/profile/'+id);
		} else {
			// Get all users
			var app = this;
			axios
				.get('https://jsonplaceholder.typicode.com/users/')
				.then(function (response) {
					console.log(response);
					app.users = response.data;
					app.user_id = 1;
				})
				.catch(function (error) {
					console.log(error);
				})
		}
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Form component */
.form {
	position: relative;
	z-index: 1;
	background: #FFFFFF;
	border: 1px solid #eeeeee;
	max-width: 300px;
	margin: 0 auto 100px;
	padding: 30px;
	border-radius: 3px;
}
.form .thumbnail {
	background: #f8f8f8;
	border: 1px solid #eeeeee;
	width: 150px;
	height: 150px;
	margin: 0 auto 30px;
	padding: 40px 30px;
	border-radius: 100%;
	box-sizing: border-box;
}
.form .thumbnail img {
	display: block;
	width: 100%;
}
.form label {
	margin-bottom:10px;
	display:block;
}
.form input {
	outline: 0;
	background: #f2f2f2;
	width: 100%;
	border: 0;
	margin: 0 0 15px;
	padding: 15px;
	border-radius: 3px;
	box-sizing: border-box;
	font-size: 14px;
}
.form select {
	height: 40px;
    margin-bottom: 20px;
    width: 100%;
    font-size: 18px;
    padding: 0 10px;
    line-height: 18px;
}
.form button {
	outline: 0;
	background: #EF3B3A;
	width: 100%;
	border: 0;
	padding: 15px;
	border-radius: 3px;
	color: #FFFFFF;
	font-size: 14px;
	-webkit-transition: all 0.3 ease;
	transition: all 0.3 ease;
	cursor: pointer;
}
.container {
	position: relative;
	z-index: 1;
	margin: 0 auto;
	padding: 30px 0;
	text-align: center;
	font-size: 36px;
	font-weight: 300;
	color: #1a1a1a;
}
.container h1 {
	margin: 0 0 15px;
	padding: 0;
	font-size: 36px;
	font-weight: 300;
	color: #1a1a1a;
}
</style>