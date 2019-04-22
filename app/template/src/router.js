import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter ({
	mode: 'history',
	routes: [
    {
			path: '/',
			name: 'Home',
			component: () => import('./components/views/Home.vue') 
		},
    {
			path: '/login',
			name: 'Login',
			component: () => import('./components/views/Login.vue') 
		}
	]
})