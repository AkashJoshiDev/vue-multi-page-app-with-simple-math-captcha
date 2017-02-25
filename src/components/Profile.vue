<template>
	<div class="profile">
		<h1>Hi {{ user.name }}</h1>
		<div class="component">
			<h4 class="id_tag">#{{ user.id }} {{ user.username }}</h4>

			<h4 class="row_head">Information</h4>
			<table>
				<tr>
					<td>Email</td>
					<td><span>{{ user.email }}</span></td>
				</tr>
				<tr>
					<td>Phone</td>
					<td><span>{{ user.phone }}</span></td>
				</tr>
				<tr>
					<td>Website</td>
					<td><span>{{ user.website }}</span></td>
				</tr>
			</table>

			<hr/>

			<h4 class="row_head">Address</h4>
			<table v-if="user.address != undefined">
				<tr>
					<td>Street</td>
					<td><span>{{ user.address.street }}</span></td>
				</tr>
				<tr>
					<td>Suite</td>
					<td><span>{{ user.address.suite }}</span></td>
				</tr>
				<tr>
					<td>City</td>
					<td><span>{{ user.address.city }}</span></td>
				</tr>
				<tr>
					<td>Zipcode</td>
					<td><span>{{ user.address.zipcode }}</span></td>
				</tr>
				<tr>
					<td>Geo</td>
					<td><span>{{ user.address.geo.lat }}, {{ user.address.geo.lng }}</span></td>
				</tr>
			</table>

			<hr/>

			<h4 class="row_head">Company</h4>
			<table v-if="user.company != undefined">
				<tr>
					<td>Name</td>
					<td><span>{{ user.company.name }}</span></td>
				</tr>
				<tr>
					<td>Catch phrase</td>
					<td><span>{{ user.company.catchPhrase }}</span></td>
				</tr>
				<tr>
					<td>BS</td>
					<td><span>{{ user.company.bs }}</span></td>
				</tr>
			</table>

			<br/>
			<button @click="logout">Logout</button>
		</div>
	</div>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'

export default {
	name: 'profile',
	data () {
		return {
			user: [],
			requested_id: this.$route.params.id
		}
	},
	methods: {
		logout(){
			// Remove user id and go to home
			localStorage.removeItem('id');
			this.$router.push('/');
		}
	},
    mounted: function(){
		// Check if already logged in
		var my_id = localStorage.getItem('id');
		if ( my_id == null || my_id != this.requested_id ) {
			this.$router.push('/');
		} else {
			 // Get all users
			var app = this;
			axios
				.get('https://jsonplaceholder.typicode.com/users/'+app.requested_id)
				.then(function (response) {
					// console.log(response);
					app.user = response.data;
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
/* Component */
.component {
	position: relative;
	z-index: 1;
	font-size: 15px;
	background: #FFFFFF;
	border: 1px solid #eeeeee;
	max-width: 300px;
	margin: 0 auto 100px;
	padding: 45px 30px 30px 30px;
	border-radius: 3px;
}
.component .thumbnail {
	background: #f8f8f8;
	border: 1px solid #eeeeee;
	width: 150px;
	height: 150px;
	margin: 0 auto 30px;
	padding: 40px 30px;
	border-radius: 100%;
	box-sizing: border-box;
}
.component .thumbnail img {
	display: block;
	width: 100%;
}
.component input {
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
.component select {
	height: 40px;
    margin-bottom: 20px;
    width: 100%;
    font-size: 18px;
    padding: 0 10px;
    line-height: 18px;
}
.component button {
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
.component .message {
	margin: 15px 0 0;
	color: #b3b3b3;
	font-size: 12px;
}
.component .message a {
	color: #EF3B3A;
	text-decoration: none;
}
.component .register-form {
	display: none;
}
h1 {
	margin: 0;
	padding: 30px 0 15px;
	text-align: center;
	font-size: 36px;
	font-weight: 300;
	color: #1a1a1a;
}
table {
	width:100%;
}
table td {
	padding: 7px 5px 7px 0;
}
table td span{
	border-left: 1px solid #dddddd;
    padding-left: 10px;
	display: inline-block;
}
.id_tag {
    width: 95%;
    position: absolute;
    top: 10px;
    left: -10px;
    padding: 12px 15px 12px 40px;
    margin: 0;
    background: #ef3b3a;
    border-radius: 20px 100px 100px 20px;
    color: #ffffff;
}
.row_head {
	margin:30px 0 5px 0;
}
</style>