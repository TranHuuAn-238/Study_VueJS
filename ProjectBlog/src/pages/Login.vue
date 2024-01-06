<template>
	<div>
		<page-header 
			bg="/dist/img/contact-bg.jpg"
			title="Login Page"
			subHeading="Have questions? I have answers."
		/>
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-md-10 mx-auto">
					<p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
					
					<form name="sentMessage" v-if="!isLogin">
						
						<div class="control-group">
							<div class="form-group floating-label-form-group controls">
								<label>Email</label>
								<input v-model="email" type="email" class="form-control" placeholder="Email">
								<p class="help-block text-danger"></p>
							</div>
						</div>
						<div class="control-group">
							<div class="form-group col-xs-12 floating-label-form-group controls">
								<label>Password</label>
								<input v-model="password" type="password" class="form-control" placeholder="Password">
								<p class="help-block text-danger"></p>
							</div>
						</div>
						
						<br>
						<div id="success"></div>
						<div class="form-group">
							<button 
								@click.prevent="handleLogin"
								type="submit" class="btn btn-primary">Login</button>
						</div>
					</form>
					<div v-else>
						<h3>Hello Admin</h3>
						<button 
								@click.prevent="handleLogout"
								type="submit" class="btn btn-primary">Logout</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import PageHeader from "../components/PageHeader";

import { mapActions, mapState } from "vuex";

export default {
    name: 'login',
    components: {
  		PageHeader,
	},
	data() {
		return {
			email: '',
			password: ''
		}
	},
	computed: {
		...mapState([
			'isLogin'
		])
	},
	methods: {
		...mapActions([
			'checkLogin',
			'logout'
		]),
		handleLogin(e) {
			console.log("handleLogin", e.target);
			let data = {
				email: this.email,
				password: this.password
			}
			this.checkLogin(data).then(response => {
				if (response) {
					alert('login successfully');
					this.$router.push({ path: '/' });
				} else {
					alert('login failed');
				}
			});
		},
		handleLogout(e) {
			this.logout();
		}
	}
}
</script>

<style>

</style>